#!/usr/bin/env python3
import json
import re
import shutil
import zipfile
import xml.etree.ElementTree as ET
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE_XLSX = ROOT / "source" / "document_maitre_tyramine_nardil_v4.xlsx"
OUT_JSON = ROOT / "data" / "nardil_master.generated.json"
OUT_JS = ROOT / "data" / "nardil_master.generated.js"
OUT_BUILD_INFO = ROOT / "data" / "build_info.json"

def col_letters_to_index(col_letters: str) -> int:
    n = 0
    for ch in col_letters:
        if ch.isalpha():
            n = n * 26 + (ord(ch.upper()) - 64)
    return n - 1

def parse_xlsx_basic(path: Path):
    ns = {"a": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}
    with zipfile.ZipFile(path, "r") as z:
        shared = []
        if "xl/sharedStrings.xml" in z.namelist():
            root = ET.fromstring(z.read("xl/sharedStrings.xml"))
            for si in root.findall("a:si", ns):
                shared.append("".join((t.text or "") for t in si.iterfind(".//a:t", ns)))

        wb_root = ET.fromstring(z.read("xl/workbook.xml"))
        rel_root = ET.fromstring(z.read("xl/_rels/workbook.xml.rels"))
        rel_ns = {"pr": "http://schemas.openxmlformats.org/package/2006/relationships"}
        rid_to_target = {rel.attrib["Id"]: rel.attrib["Target"] for rel in rel_root.findall("pr:Relationship", rel_ns)}

        out = {}
        for s in wb_root.find("a:sheets", ns):
            name = s.attrib["name"]
            rid = s.attrib["{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id"]
            target = rid_to_target[rid]
            if not target.startswith("xl/"):
                target = "xl/" + target
            root = ET.fromstring(z.read(target))
            sheet_data = root.find("a:sheetData", ns)
            rows = []
            max_col = 0
            for row in sheet_data.findall("a:row", ns):
                vals = {}
                for c in row.findall("a:c", ns):
                    ref = c.attrib.get("r", "")
                    m = re.match(r"([A-Z]+)(\d+)", ref)
                    if not m:
                        continue
                    col_idx = col_letters_to_index(m.group(1))
                    t = c.attrib.get("t")
                    v = c.find("a:v", ns)
                    val = None
                    if t == "s":
                        val = shared[int(v.text)] if v is not None and v.text is not None else ""
                    elif t == "inlineStr":
                        is_el = c.find("a:is", ns)
                        if is_el is not None:
                            val = "".join((t2.text or "") for t2 in is_el.iterfind(".//a:t", ns))
                    elif v is not None and v.text is not None:
                        txt = v.text
                        try:
                            num = float(txt)
                            val = int(num) if num.is_integer() else num
                        except Exception:
                            val = txt
                    vals[col_idx] = val
                    max_col = max(max_col, col_idx)
                rows.append([vals.get(i) for i in range(max_col + 1)] if vals else [])
            out[name] = rows
        return out

def normalize(s):
    return (s or "").lower()

def parse_portion_standard(s):
    if not s:
        return None, None
    m = re.search(r"([0-9]+(?:[.,][0-9]+)?)\s*(g|mL|ml|L|peau|pi[eè]ce|tranche|verre)?", str(s))
    if not m:
        return None, None
    value = float(m.group(1).replace(",", "."))
    unit = (m.group(2) or "").replace("ml", "mL")
    return value, unit

def derive_family(r):
    name = normalize(r["nom_fr"])
    alias = normalize(r.get("alias_menu_restaurant"))
    proc = normalize(r.get("procede"))
    cat = normalize(r.get("categorie_libelle_fda"))
    region = normalize(r.get("cuisine_region"))
    text = " ".join([name, alias, proc, cat, region])

    if "fava/broad beans" in cat or "fève" in name or "broad bean" in alias:
        return "Fèves / légumineuses"
    if any(k in text for k in ["marmite", "vegemite", "bovril", "oxo", "levure", "yeast extract", "nutritional yeast", "extrait de levure"]):
        return "Levures / extraits"
    if any(k in text for k in ["corned beef", "spam", "hot dog", "francfort"]):
        return "Charcuteries / viandes affinées"
    if any(k in text for k in ["crème fraîche", "creme fraiche", "smen", "ghee", "beurre fermenté"]):
        return "Produits laitiers"
    if any(k in text for k in ["beer", "bière", "wine", "vin", "champagne", "cidre", "sake", "makgeolli", "pulque", "ale", "lager", "porter", "stout", "sherry", "vermouth"]):
        return "Boissons alcoolisées"
    if any(k in text for k in ["kvas", "kvass", "kombucha", "kéfir d’eau", "water kefir", "boisson fermentée"]) and not any(k in text for k in ["beer", "bière", "wine", "vin", "champagne"]):
        return "Boissons fermentées"
    if any(k in text for k in ["cheese", "fromage", "bryndza", "suluguni", "paneer", "halloumi", "ricotta", "mozzarella", "camembert", "brie", "cheddar", "gouda", "edam", "roquefort", "stilton", "parmesan", "parmigiano", "queso"]):
        return "Fromages"
    if any(k in text for k in ["yaourt", "yogurt", "kéfir", "kefir", "lait ferment", "laitier", "cream cheese", "cottage cheese", "tvorog", "skyr", "labneh"]):
        return "Produits laitiers"
    if any(k in text for k in ["soy", "soja", "miso", "natto", "tempeh", "tofu", "doenjang", "gochujang", "tauco", "doubanjiang", "douchi", "ogiri", "ugba"]):
        return "Soja / légumineuses fermentés"
    if any(k in text for k in ["sauce", "condiment", "nuoc", "fish sauce", "shoyu", "tamari", "worcestershire", "ketchup", "mustard", "chutney", "pâte de crevette", "paste"]) and not any(k in text for k in ["plateau", "plat", "pizza", "burger"]):
        return "Sauces / condiments"
    if any(k in text for k in ["fish", "poisson", "saumon", "hareng", "ancho", "anchov", "sard", "thon", "tuna", "surstr", "rakfisk", "katsuobushi", "bonito", "crevette", "shrimp", "prawn", "crab", "crabe", "mackerel", "maquereau", "herring", "морепроду", "caviar", "roe", "ikura"]):
        return "Poissons / fruits de mer"
    if any(k in text for k in ["salami", "saucisson", "chorizo", "coppa", "prosciutto", "jamón", "jamon", "ham", "bacon", "charcut", "pâté", "pate", "liver", "foie", "biltong", "kilishi", "sucuk", "pastirma", "pastrami", "mortadella", "pepperoni", "viande séch", "smoked/pickled/aged/fermented meats", "sausage", "saucisse", "andouille", "rillettes", "terrine"]):
        return "Charcuteries / viandes affinées"
    if any(k in text for k in ["beef", "boeuf", "bœuf", "veal", "veau", "pork", "porc", "lamb", "agneau", "chicken", "poulet", "turkey", "dinde", "duck", "canard", "gibier", "viande fraîche", "viande fraiche", "fresh meat"]):
        return "Viandes"
    if any(k in text for k in ["banane", "banana", "avocat", "avocado", "fruit", "figue", "date", "raisin", "grape", "papaya", "mango", "mangue", "pineapple", "ananas", "jackfruit", "durian"]):
        return "Fruits"
    if any(k in text for k in ["choucroute", "sauerkraut", "капуста", "pickle", "pickles", "cornichon", "kimchi", "olive", "olives", "tomate", "tomato", "aubergine", "eggplant", "concombre", "cucumber", "vegetable", "légume", "солёные огурцы", "fermented vegetable", "câpre", "caper"]):
        return "Légumes / fermentés"
    if any(k in text for k in ["pizza", "burger", "sandwich", "ramen", "hot pot", "fondue", "tartiflette", "raclette", "carbonara", "sushi", "bento", "wrap", "panini", "salad", "salade", "plateau", "buffet", "brunch", "platter", "plat préparé", "traiteur", "planchche", "planche", "gratin", "lasagne", "feuilleté", "tarte salée"]):
        return "Plats composés"
    if r["unite_base"] == "mg/100mL":
        return "Boissons fermentées"
    return "Divers / spécialités"

def derive_cuisine_group(region):
    s = normalize(region)
    if any(k in s for k in ["russie", "ukraine", "europe de l'est", "est europe", "baltique", "géorgie", "arménie", "azerbaïdjan", "balkans", "bulgarie"]):
        return "Russie / Europe de l'Est"
    if any(k in s for k in ["france", "belgique", "alsace", "auvergne", "savoie", "jura", "normandie"]):
        return "France / francophone"
    if any(k in s for k in ["italie", "sardaigne", "modena", "toscane", "lazio", "calabre", "abruzzes", "tyrol"]):
        return "Italie"
    if any(k in s for k in ["espagne", "catalogne", "la mancha", "baléares", "asturies"]):
        return "Espagne"
    if any(k in s for k in ["allemagne", "suisse", "autriche"]):
        return "Allemagne / Suisse"
    if any(k in s for k in ["uk", "royaume", "ireland", "irlande"]):
        return "Royaume-Uni / Irlande"
    if "japon" in s:
        return "Japon"
    if "corée" in s:
        return "Corée"
    if any(k in s for k in ["chine", "taïwan", "sichuan"]):
        return "Chine / Taïwan"
    if "inde" in s:
        return "Inde"
    if any(k in s for k in ["indonésie", "malaisie", "thaï", "thail", "asie du sud-est", "asie se", "laos", "cambodge", "myanmar", "philippines", "vietnam"]):
        return "Asie du Sud-Est"
    if any(k in s for k in ["moyen-orient", "levant", "liban", "syrie", "iran", "maghreb"]):
        return "Moyen-Orient / Maghreb"
    if any(k in s for k in ["grèce", "méditerranée"]):
        return "Méditerranée"
    if any(k in s for k in ["mexique", "brésil", "canada", "amérique", "usa"]):
        return "Amériques"
    if any(k in s for k in ["afrique", "ghana", "nigeria", "afrique du sud"]):
        return "Afrique"
    if any(k in s for k in ["islande", "nord"]):
        return "Nordique"
    if "global" in s or s == "europe":
        return "Global / international"
    if "asie" in s:
        return "Asie"
    return "Global / international"

def round_portion(v, unit):
    if v is None:
        return None
    if unit == "mL":
        step = 1 if v < 15 else 5 if v < 100 else 10
    elif unit == "peau":
        step = 0.5 if v < 3 else 1
    else:
        step = 1 if v < 15 else 5 if v < 80 else 10 if v < 200 else 25
    rounded = round(v / step) * step
    return max(step, rounded)

def make_portion_profile(std_value, unit, family):
    if std_value is None:
        std_value = 100 if unit == "g" else 15
    if unit == "peau":
        return {
            "small": {"label": "Petite", "min": 0.5, "max": 1, "unit": "peau", "featured": False},
            "normal": {"label": "Normale", "min": 1, "max": 1, "unit": "peau", "featured": True},
            "large": {"label": "Importante", "min": 2, "max": 3, "unit": "peau", "featured": False},
            "default_qty": 1,
            "step": 0.5,
        }

    rules = {
        "Sauces / condiments": ((0.4, 0.8), (1.0, 2.0), (3.0, 4.0)),
        "Boissons alcoolisées": ((0.5, 0.8), (1.0, 1.2), (2.0, 3.0)),
        "Boissons fermentées": ((0.5, 0.8), (1.0, 1.2), (1.8, 2.5)),
        "Fromages": ((0.5, 0.8), (0.9, 1.3), (1.8, 2.8)),
        "Charcuteries / viandes affinées": ((0.5, 0.8), (0.9, 1.5), (2.0, 3.5)),
        "Poissons / fruits de mer": ((0.5, 0.75), (0.9, 1.2), (1.8, 2.5)),
        "Produits laitiers": ((0.5, 0.75), (0.9, 1.2), (1.5, 2.0)),
        "Légumes / fermentés": ((0.5, 0.8), (0.9, 1.2), (1.8, 2.5)),
        "Fruits": ((0.5, 0.8), (0.9, 1.2), (1.8, 2.5)),
        "Plats composés": ((0.5, 0.75), (0.9, 1.2), (1.7, 2.5)),
        "Soja / légumineuses fermentés": ((0.5, 0.8), (0.9, 1.2), (1.8, 2.5)),
        "Levures / extraits": ((0.5, 0.8), (0.9, 1.2), (1.8, 2.5)),
        "Viandes": ((0.5, 0.8), (0.9, 1.2), (1.7, 2.3)),
        "Fèves / légumineuses": ((0.5, 0.8), (0.9, 1.2), (1.8, 2.5)),
    }
    small_r, normal_r, large_r = rules.get(family, ((0.5, 0.8), (0.9, 1.2), (1.8, 2.5)))

    def rng(r):
        lo = round_portion(std_value * r[0], unit)
        hi = round_portion(std_value * r[1], unit)
        if lo == hi and unit != "peau":
            hi = lo + (1 if unit == "mL" and lo < 15 else 5)
        return lo, hi

    small = rng(small_r)
    normal = rng(normal_r)
    large = rng(large_r)
    step = 1 if std_value < 20 else 5 if std_value < 100 else 10
    if unit == "g" and std_value >= 250:
        step = 25
    if unit == "mL" and std_value >= 200:
        step = 10

    return {
        "small": {"label": "Petite", "min": small[0], "max": small[1], "unit": unit, "featured": False},
        "normal": {"label": "Normale", "min": normal[0], "max": normal[1], "unit": unit, "featured": True},
        "large": {"label": "Importante", "min": large[0], "max": large[1], "unit": unit, "featured": False},
        "default_qty": round_portion(std_value, unit),
        "step": step,
    }

def build():
    wb = parse_xlsx_basic(SOURCE_XLSX)
    foods_rows = wb["Aliments_consolide"]
    headers = foods_rows[1]
    raw_records = []
    for row in foods_rows[2:]:
        if not row or row[0] in (None, ""):
            continue
        row = row + [None] * (len(headers) - len(row))
        raw_records.append({headers[i]: row[i] for i in range(len(headers))})

    foods = []
    for r in raw_records:
        portion_value, portion_unit = parse_portion_standard(r["portion_standard"])
        unit = portion_unit or ("mL" if r["unite_base"] == "mg/100mL" else "g")
        family = derive_family(r)
        cuisine_type = derive_cuisine_group(r["cuisine_region"])
        special_lock = "fava/broad beans" in normalize(r.get("categorie_libelle_fda")) or "l-dopa" in normalize(r.get("note_complementaire_rapport"))
        foods.append({
            "id": r["id"],
            "names": {
                "fr": r["nom_fr"],
                "en": r.get("alias_menu_restaurant") or r["nom_fr"],
                "ru": r.get("nom_ru_si_pertinent") or r["nom_fr"],
            },
            "search_terms": sorted(set(filter(None, [
                r["nom_fr"], r.get("nom_ru_si_pertinent"), r.get("alias_menu_restaurant"), r.get("cuisine_region"),
                r.get("procede"), family, cuisine_type, r.get("categorie_libelle_fda")
            ]))),
            "family": family,
            "cuisine_region_raw": r["cuisine_region"],
            "cuisine_type": cuisine_type,
            "process": r["procede"],
            "unit_base": r["unite_base"],
            "mg100": {"low": r["mg100_low"], "typ": r["mg100_typ"], "high": r["mg100_high"]},
            "portion_standard": {"label": r["portion_standard"], "value": portion_value, "unit": unit},
            "mg_per_portion": {"low": r["mgportion_low"], "typ": r["mgportion_typ"], "high": r["mgportion_high"]},
            "confidence": r["confiance"],
            "note_type": r["note"],
            "source_url": r["source_url"],
            "restaurant_alias": r.get("alias_menu_restaurant"),
            "flags": {
                "artisanal_sensitive": bool(r["artisanal_sensitive"]),
                "label_restricted": bool(r["label_restricted"]),
                "special_lock": bool(special_lock),
            },
            "variability": r["variabilite"],
            "supplemental_note": r.get("note_complementaire_rapport"),
            "fda_category": r["categorie_libelle_fda"],
            "default_alert_threshold": r["seuil_alerte_par_portion"],
            "portion_profile": make_portion_profile(portion_value, unit, family),
        })

    payload = {
        "meta": {
            "version": "2026-04-23-rebuild",
            "source_file": SOURCE_XLSX.name,
            "food_count": len(foods),
            "confidence_counts": Counter(item["confidence"] for item in foods),
            "family_counts": Counter(item["family"] for item in foods),
            "cuisine_type_counts": Counter(item["cuisine_type"] for item in foods),
        },
        "rules": {
            "context": {"scope": "Nardil / phenelzine only"},
            "bands_mg": {
                "green_limited_max_exclusive": 2,
                "orange_max_exclusive": 4,
                "red_max_exclusive": 6,
                "black_min_inclusive": 6,
            },
            "dose_factors": [
                {"label": "<45 mg/j", "min": 0, "max": 44.99, "factor": 0.95},
                {"label": "45-60 mg/j", "min": 45, "max": 60, "factor": 1.00},
                {"label": "61-75 mg/j", "min": 61, "max": 75, "factor": 1.05},
                {"label": "76-90 mg/j", "min": 76, "max": 90, "factor": 1.10},
            ],
            "duration_factors": [
                {"label": "<=3 jours", "min_days": 0, "max_days": 3, "factor": 0.95},
                {"label": "4-28 jours", "min_days": 4, "max_days": 28, "factor": 1.00},
                {"label": ">28 jours", "min_days": 29, "max_days": 9999, "factor": 1.05},
            ],
            "uncertainty_factor_default": 1.2,
            "alcohol_context_factor": 1.05,
            "fasting_factor": 1.10,
            "stop_window_days_no_relaxation": 14,
        },
        "sheets": {name: wb[name] for name in ["Sommaire", "Seuils_cliniques", "Facteurs_algorithme", "Regles_alerte", "Wording_patient", "Methode_limitations", "Sources", "Signaux_majeurs"]},
        "foods": foods,
    }

    OUT_JSON.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    OUT_JS.write_text("window.__NARDIL_DATA__ = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")
    OUT_BUILD_INFO.write_text(json.dumps(payload["meta"], ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Generated {OUT_JSON} with {len(foods)} foods.")

if __name__ == "__main__":
    build()
