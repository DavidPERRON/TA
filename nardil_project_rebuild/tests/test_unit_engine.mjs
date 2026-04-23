import fs from "fs";
import assert from "assert";

const data = JSON.parse(fs.readFileSync(new URL("../data/nardil_master.generated.json", import.meta.url), "utf8"));

const BAND_ORDER = { green_limited: 0, orange: 1, red: 2, black: 3 };
function maxBand(a,b){ return BAND_ORDER[a] >= BAND_ORDER[b] ? a : b; }
function coalesceNumber(...vals){ return vals.find(v => typeof v === "number" && Number.isFinite(v)) ?? null; }
function round2(v){ return Math.round((v + Number.EPSILON) * 100) / 100; }
function mgForQty(item, qty, point){
  const qtyBase = Number(qty);
  if (!Number.isFinite(qtyBase)) return null;
  const unit = item.portion_standard?.unit || "g";
  const mg100 = item.mg100?.[point];
  if (typeof mg100 === "number") return round2((mg100 * qtyBase) / 100);
  const mgPortion = item.mg_per_portion?.[point];
  const standardValue = item.portion_standard?.value;
  if (typeof mgPortion === "number" && typeof standardValue === "number" && standardValue > 0 && unit !== "g" && unit !== "mL") {
    return round2(mgPortion * (qtyBase / standardValue));
  }
  return null;
}
function bandFromWeighted(weighted){
  if (weighted >= 6) return "black";
  if (weighted >= 4) return "red";
  if (weighted >= 2) return "orange";
  return "green_limited";
}
function makeBandFloor(item, effectiveMg, flags){
  let floor = "green_limited";
  const proteinFermented = ["Fromages","Charcuteries / viandes affinées","Poissons / fruits de mer","Soja / légumineuses fermentés"].includes(item.family);
  if (item.flags.special_lock) return "black";
  if (item.confidence === "D") floor = maxBand(floor, "orange");
  if (item.flags.label_restricted && item.confidence === "D") floor = "black";
  if (item.flags.label_restricted && proteinFermented && (flags.artisanal || flags.homemade || flags.liveFermented || flags.refrigerationDoubt)) floor = "black";
  if (item.flags.label_restricted && effectiveMg >= 4) floor = maxBand(floor, "red");
  if (item.flags.label_restricted && (effectiveMg >= 2 || item.variability === "forte")) floor = maxBand(floor, "orange");
  if (item.flags.label_restricted && floor === "green_limited") floor = "orange";
  return floor;
}
function assessOne(item, qty, flags, dose=60, days=14, alcohol=false, fasting=false){
  const mgLow = coalesceNumber(mgForQty(item, qty, "low"), mgForQty(item, qty, "typ"), mgForQty(item, qty, "high"));
  const mgTyp = coalesceNumber(mgForQty(item, qty, "typ"), mgForQty(item, qty, "high"), mgForQty(item, qty, "low"));
  const mgHigh = coalesceNumber(mgForQty(item, qty, "high"), mgForQty(item, qty, "typ"), mgForQty(item, qty, "low"));
  let effectiveMg = mgTyp;
  if (item.confidence === "D") effectiveMg = mgHigh;
  else if (flags.artisanal || flags.homemade || flags.liveFermented || flags.veryRipe || flags.refrigerationDoubt) effectiveMg = mgHigh;
  else if (!flags.brandKnown && item.variability === "forte") effectiveMg = mgHigh;
  const doseFactor = dose < 45 ? 0.95 : dose <= 60 ? 1.00 : dose <= 75 ? 1.05 : 1.10;
  const durationFactor = days <= 3 ? 0.95 : days <= 28 ? 1.00 : 1.05;
  const weighted = effectiveMg * doseFactor * durationFactor * (alcohol ? 1.05 : 1) * (fasting ? 1.10 : 1);
  return maxBand(bandFromWeighted(weighted), makeBandFloor(item, effectiveMg ?? 0, flags));
}
function findByFrStart(prefix){
  const hit = data.foods.find(item => (item.names.fr || "").startsWith(prefix));
  if (!hit) throw new Error(`missing product: ${prefix}`);
  return hit;
}

const conservativeKnown = {brandKnown:true,artisanal:false,homemade:false,liveFermented:false,veryRipe:false,refrigerationDoubt:false};
const unknownBrand = {brandKnown:false,artisanal:false,homemade:false,liveFermented:false,veryRipe:false,refrigerationDoubt:false};

assert.equal(assessOne(findByFrStart("Choucroute"), 100, conservativeKnown), "black");
assert.equal(assessOne(findByFrStart("Fromages frais non affinés"), 100, conservativeKnown), "green_limited");
assert.equal(assessOne(findByFrStart("Bière bouteille"), 330, conservativeKnown), "green_limited");
assert.equal(assessOne(findByFrStart("Bière pression"), 330, conservativeKnown), "black");
assert.ok(["orange","red","black"].includes(assessOne(findByFrStart("Saucisson sec fermenté"), 30, conservativeKnown)));
assert.ok(["orange","red","black"].includes(assessOne(findByFrStart("Sauce soja"), 15, unknownBrand)));
assert.ok(["orange","red","black"].includes(assessOne(findByFrStart("Peau de banane"), 1, conservativeKnown)));
assert.equal(assessOne(findByFrStart("Fèves / gousses de fèves"), 100, conservativeKnown), "black");

console.log("unit_engine_ok");
