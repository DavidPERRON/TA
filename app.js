(function () {
  const root = document.querySelector('.app-shell');
  const buildPage = document.getElementById('page-build');
  const infoPage = document.getElementById('page-info');
  const morePage = document.getElementById('page-more');
  const tabsRoot = document.getElementById('page-tabs');
  const data = window.__NARDIL_DATA__;

  if (!root || !buildPage || !infoPage || !morePage || !tabsRoot) {
    document.body.innerHTML = '<div style="padding:24px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Arial,sans-serif">Structure HTML introuvable.</div>';
    return;
  }
  if (!data || !Array.isArray(data.foods) || !data.foods.length) {
    buildPage.innerHTML = '<div class="card"><div class="empty">Dataset introuvable ou vide.</div></div>';
    return;
  }

  const t = {
    brandEyebrow: 'Application bien-être · alimentation & repères',
    title: 'Titre libre',
    subtitle: 'Suivi pédagogique de repas, portions, recouvrements et charge cumulée avec décroissance progressive.',
    langLabel: 'Langue',
    banner: 'Usage éducatif uniquement. Les résultats sont des repères prudents et non une décision médicale.',
    tabs: {
      build: 'Construire',
      meals: 'Repas',
      info: 'Information',
      more: 'Divers',
      params: 'Paramètres'
    }
  };

  const state = {
    active: 'build',
    title: 'Titre libre',
    lang: 'fr',
    cuisine: 'Toutes cuisines',
    family: 'Toutes',
    foodId: data.foods[0].id,
    portionKey: 'normal',
    mealTime: '12:45',
    mealType: 'Déjeuner',
    context: {
      ripeness: 'standard',
      prep: 'standard',
      storage: 'standard',
      origin: 'known'
    },
    params: {
      mealWindowHours: 2,
      hiddenDose: 'Masqué',
      hiddenPhase: 'Masqué',
      hiddenTiming: 'Masqué'
    },
    currentMeal: [],
    savedMeals: []
  };

  const palettes = ['#6CC04A', '#3A86FF', '#FF9F1C', '#EF476F', '#8E6CFF', '#22B8CF'];

  function escapeHtml(s) {
    return String(s ?? '').replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
  }

  function currentFood() {
    return data.foods.find((f) => f.id === state.foodId) || data.foods[0];
  }

  function getFood(id) {
    return data.foods.find((f) => f.id === id);
  }

  function foodName(food) {
    return food?.names?.fr || food?.restaurant_alias || food?.id || 'Produit';
  }

  function cuisines() {
    return ['Toutes cuisines', ...new Set(data.foods.map((f) => f.cuisine_type).filter(Boolean))];
  }

  function families() {
    const foods = filteredFoodsByCuisine();
    return ['Toutes', ...new Set(foods.map((f) => f.family).filter(Boolean))];
  }

  function filteredFoodsByCuisine() {
    return data.foods.filter((f) => state.cuisine === 'Toutes cuisines' || f.cuisine_type === state.cuisine);
  }

  function filteredFoods() {
    return filteredFoodsByCuisine().filter((f) => state.family === 'Toutes' || f.family === state.family);
  }

  function portionProfile(food) {
    return food.portion_profile || {
      small: { label: 'Petite', min: 30, max: 50, unit: food.portion_standard?.unit || 'g' },
      normal: { label: 'Normale', min: 60, max: 90, unit: food.portion_standard?.unit || 'g' },
      large: { label: 'Importante', min: 100, max: 140, unit: food.portion_standard?.unit || 'g' }
    };
  }

  function portionOptions(food) {
    const p = portionProfile(food);
    return ['xsmall', 'small', 'normal', 'large', 'xlarge'].filter((k) => p[k]);
  }

  function portionLabel(food, key) {
    const p = portionProfile(food)[key];
    if (!p) return key;
    return `${p.label} (${Math.round(p.min)}–${Math.round(p.max)} ${p.unit || 'g'})`;
  }

  function portionMid(food, key) {
    const p = portionProfile(food)[key] || portionProfile(food).normal;
    const min = Number(p.min || food.portion_standard?.value || 100);
    const max = Number(p.max || p.min || food.portion_standard?.value || 100);
    return (min + max) / 2;
  }

  function contextMultiplier(ctx) {
    let m = 1;
    if (ctx.ripeness === 'aged') m *= 1.18;
    if (ctx.prep === 'artisanal') m *= 1.12;
    if (ctx.prep === 'home') m *= 1.1;
    if (ctx.prep === 'live') m *= 1.18;
    if (ctx.storage === 'doubt') m *= 1.2;
    if (ctx.storage === 'openlong') m *= 1.12;
    if (ctx.origin === 'unknown') m *= 1.06;
    return m;
  }

  function itemAdjustedMg(food, portionKey, count, ctx) {
    const typ = Number(food.mg100?.typ || 0);
    const qty = portionMid(food, portionKey);
    return typ * qty / 100 * count * contextMultiplier(ctx);
  }

  function addCurrentFood() {
    const food = currentFood();
    const key = `${food.id}:${state.portionKey}`;
    const existing = state.currentMeal.find((x) => x.key === key);
    if (existing) existing.count += 1;
    else state.currentMeal.push({ key, foodId: food.id, portionKey: state.portionKey, count: 1 });
    render();
  }

  function updateMealItem(list, key, delta) {
    const item = list.find((x) => x.key === key);
    if (!item) return;
    item.count = Math.max(0, item.count + delta);
  }

  function saveCurrentMeal() {
    if (!state.currentMeal.length) return;
    state.savedMeals.push({
      id: 'meal_' + Math.random().toString(36).slice(2, 9),
      time: state.mealTime,
      type: state.mealType,
      items: JSON.parse(JSON.stringify(state.currentMeal)),
      context: { ...state.context }
    });
    state.currentMeal = [];
    state.active = 'meals';
    render();
  }

  function mealAmplitude(meal) {
    return meal.items.reduce((sum, item) => {
      const food = getFood(item.foodId);
      return sum + itemAdjustedMg(food, item.portionKey, item.count, meal.context || state.context);
    }, 0);
  }

  function hourToFloat(hhmm) {
    const [h, m] = String(hhmm || '00:00').split(':').map(Number);
    return (h || 0) + (m || 0) / 60;
  }

  function fmtHour(v) {
    const h = Math.floor(v);
    const m = Math.round((v - h) * 60);
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  }

  function mealCurve(meal, x) {
    const start = hourToFloat(meal.time);
    const amp = mealAmplitude(meal);
    const peak = start + 1.15;
    const rise = x <= peak ? 0.95 : 2.6;
    return amp * Math.exp(-Math.pow((x - peak) / rise, 2));
  }

  function allMeals() {
    const out = state.savedMeals.map((m) => ({ ...m, transient: false, title: m.type }));
    if (state.currentMeal.length) out.push({ id: 'current', time: state.mealTime, type: 'Repas courant', title: 'Repas courant', items: state.currentMeal, context: { ...state.context }, transient: true });
    return out;
  }

  function computeSeries() {
    const meals = allMeals();
    const xs = [];
    for (let x = 0; x <= 24; x += 0.1) xs.push(Number(x.toFixed(2)));
    const series = meals.map((meal, idx) => ({
      meal,
      color: palettes[idx % palettes.length],
      points: xs.map((x) => ({ x, y: mealCurve(meal, x) }))
    }));
    const cumulative = xs.map((x, i) => ({ x, y: series.reduce((s, ser) => s + ser.points[i].y, 0) }));

    const overlaps = [];
    let open = null;
    xs.forEach((x, i) => {
      const active = series.filter((ser) => ser.points[i].y > 0.45);
      const total = active.reduce((s, ser) => s + ser.points[i].y, 0);
      if (active.length >= 2) {
        if (!open) open = { start: x, meals: active.map((a) => a.meal.title), peak: total };
        else open.peak = Math.max(open.peak, total);
      } else if (open) {
        overlaps.push({ ...open, end: x });
        open = null;
      }
    });
    if (open) overlaps.push({ ...open, end: 24 });

    return { xs, series, cumulative, overlaps };
  }

  function bandFor(value) {
    if (value < 3) return { label: 'Faible', cls: 'green' };
    if (value < 6) return { label: 'Modéré', cls: 'orange' };
    return { label: 'Élevé', cls: 'red' };
  }

  function currentScenario() {
    const total = state.currentMeal.reduce((sum, item) => {
      const food = getFood(item.foodId);
      return sum + itemAdjustedMg(food, item.portionKey, item.count, state.context);
    }, 0);
    const band = bandFor(total);
    return {
      total,
      band,
      confidence: state.context.storage === 'standard' && state.context.origin === 'known' ? 'bonne' : 'moyenne',
      uncertainty: state.context.storage !== 'standard' || state.context.origin !== 'known' || state.context.prep !== 'standard',
      peak: total * 0.56,
      window: '0.0–2.0 h',
      clearance: '4.3 h'
    };
  }

  function setHeader() {
    document.getElementById('brand-eyebrow').textContent = t.brandEyebrow;
    document.getElementById('app-title').textContent = state.title;
    document.getElementById('app-subtitle').textContent = t.subtitle;
    document.getElementById('lang-label').textContent = t.langLabel;
    document.getElementById('scope-banner').textContent = t.banner;
    const langSel = document.getElementById('language-select');
    langSel.innerHTML = '<option value="fr">FR</option><option value="en">EN</option><option value="ru">RU</option>';
    langSel.value = state.lang;
    langSel.onchange = (e) => { state.lang = e.target.value; };
  }

  function renderTabs() {
    const tabs = ['build', 'meals', 'info', 'more', 'params'];
    tabsRoot.innerHTML = tabs.map((tab) => `<button class="page-tab ${state.active === tab ? 'active' : ''}" data-tab="${tab}">${escapeHtml(t.tabs[tab])}</button>`).join('');
    tabsRoot.querySelectorAll('[data-tab]').forEach((btn) => {
      btn.onclick = () => {
        state.active = btn.dataset.tab;
        render();
      };
    });
  }

  function modalButton(key) {
    return `<button class="info-button" data-modal="${key}" type="button">i</button>`;
  }

  function renderBuild() {
    const food = currentFood();
    const foods = filteredFoods();
    const scenario = currentScenario();
    buildPage.classList.toggle('active', state.active === 'build');
    buildPage.innerHTML = `
      <div class="card">
        <div class="card-title-row"><div><h2 class="card-title">Choix du produit</h2><p class="card-subtitle">Sélection guidée par cuisine, famille, produit et portion.</p></div></div>
        <div class="grid grid-4">
          <div class="field"><label>Type de cuisine</label><select id="sel-cuisine">${cuisines().map(v => `<option ${v===state.cuisine?'selected':''}>${escapeHtml(v)}</option>`).join('')}</select></div>
          <div class="field"><label>Famille</label><select id="sel-family">${families().map(v => `<option ${v===state.family?'selected':''}>${escapeHtml(v)}</option>`).join('')}</select></div>
          <div class="field"><label>Produit</label><select id="sel-food">${foods.map(f => `<option value="${escapeHtml(f.id)}" ${f.id===state.foodId?'selected':''}>${escapeHtml(foodName(f))}</option>`).join('')}</select></div>
          <div class="field"><label>Portion</label><select id="sel-portion">${portionOptions(food).map(k => `<option value="${k}" ${k===state.portionKey?'selected':''}>${escapeHtml(portionLabel(food,k))}</option>`).join('')}</select></div>
        </div>
      </div>

      <div class="card">
        <div class="card-title-row"><div><h2 class="card-title">Contexte du produit</h2><p class="card-subtitle">Les facteurs de contexte influencent le résultat sans écraser le signal principal du produit.</p></div></div>
        <div class="grid grid-4">
          <div class="field"><label>Maturité / affinage</label><select id="ctx-ripeness"><option value="standard" ${state.context.ripeness==='standard'?'selected':''}>Standard</option><option value="aged" ${state.context.ripeness==='aged'?'selected':''}>Très mûr / très affiné</option></select></div>
          <div class="field"><label>Préparation</label><select id="ctx-prep"><option value="standard" ${state.context.prep==='standard'?'selected':''}>Standard</option><option value="artisanal" ${state.context.prep==='artisanal'?'selected':''}>Artisanal</option><option value="home" ${state.context.prep==='home'?'selected':''}>Maison</option><option value="live" ${state.context.prep==='live'?'selected':''}>Live</option></select></div>
          <div class="field"><label>Conservation</label><select id="ctx-storage"><option value="standard" ${state.context.storage==='standard'?'selected':''}>Correcte</option><option value="doubt" ${state.context.storage==='doubt'?'selected':''}>Doute sur la chaîne du froid</option><option value="openlong" ${state.context.storage==='openlong'?'selected':''}>Ouverture / stockage prolongé</option></select></div>
          <div class="field"><label>Provenance</label><select id="ctx-origin"><option value="known" ${state.context.origin==='known'?'selected':''}>Connue</option><option value="unknown" ${state.context.origin==='unknown'?'selected':''}>Inconnue</option></select></div>
        </div>
      </div>

      <div class="card">
        <div class="card-title-row"><div><h2 class="card-title">Repas courant</h2><p class="card-subtitle">Au deuxième enregistrement, ce repas passe dans l’onglet Repas et reste modifiable.</p></div></div>
        <div class="action-row">
          <button class="btn primary" id="add-btn">Ajouter 1 portion</button>
          <button class="btn" id="save-meal">Enregistrer le repas</button>
          <button class="btn warn" id="clear-current">Vider le repas courant</button>
        </div>
        <div class="meal-chips" style="margin-top:12px">${state.currentMeal.length ? state.currentMeal.map(it => { const f=getFood(it.foodId); return `<div class="meal-chip">${escapeHtml(foodName(f))} × ${it.count}</div>`; }).join('') : '<div class="empty">Aucun aliment ajouté.</div>'}</div>
      </div>

      <div class="card">
        <div class="hero-band ${scenario.band.cls}">Risque relatif : ${scenario.band.label}<div class="small" style="color:inherit;margin-top:8px">Produit ${scenario.total < 3 ? 'plutôt bas' : scenario.total < 6 ? 'intermédiaire' : 'élevé'} dans ce scénario.</div></div>
        <div class="kpi-row" style="margin-top:12px">
          <div class="kpi"><div class="kpi-label">Équivalent tyramine estimé ${modalButton('equivalent')}</div><div class="kpi-value">${scenario.total.toFixed(1)} mg</div></div>
          <div class="kpi"><div class="kpi-label">Confiance ${modalButton('confidence')}</div><div class="kpi-value">${scenario.confidence}</div></div>
          <div class="kpi"><div class="kpi-label">Pic ${modalButton('peak')}</div><div class="kpi-value">${scenario.peak.toFixed(2)}</div></div>
          <div class="kpi"><div class="kpi-label">Fenêtre critique ${modalButton('window')}</div><div class="kpi-value">${scenario.window}</div></div>
          <div class="kpi"><div class="kpi-label">Évacuation approx. ${modalButton('clearance')}</div><div class="kpi-value">${scenario.clearance}</div></div>
        </div>
      </div>

      <div class="card table-wrap">
        <div class="card-title-row"><div><h2 class="card-title">Détail du repas courant</h2><p class="card-subtitle">Quantité par portions et ajustements contextuels.</p></div></div>
        <table>
          <thead><tr><th>Produit</th><th>Portion</th><th>Compteur</th><th>Charge</th><th>Supprimer</th></tr></thead>
          <tbody>
            ${state.currentMeal.length ? state.currentMeal.map(it => { const f=getFood(it.foodId); return `<tr><td>${escapeHtml(foodName(f))}</td><td>${escapeHtml(portionLabel(f,it.portionKey))}</td><td><button class="btn subtle" data-cur-step="${it.key}" data-delta="-1">−</button> <strong>${it.count}</strong> <button class="btn subtle" data-cur-step="${it.key}" data-delta="1">+</button></td><td>${itemAdjustedMg(f,it.portionKey,it.count,state.context).toFixed(1)} mg</td><td><button class="btn warn" data-cur-remove="${it.key}">×</button></td></tr>`; }).join('') : '<tr><td colspan="5" class="muted">Aucun aliment.</td></tr>'}
          </tbody>
        </table>
      </div>
    `;

    bindBuildEvents();
    bindModalEvents();
  }

  function renderMeals() {
    buildPage.classList.toggle('active', false);
    infoPage.classList.toggle('active', false);
    morePage.classList.toggle('active', false);

    let mealsPage = document.getElementById('page-meals');
    if (!mealsPage) {
      mealsPage = document.createElement('section');
      mealsPage.id = 'page-meals';
      mealsPage.className = 'page';
      document.querySelector('main').appendChild(mealsPage);
    }
    mealsPage.classList.toggle('active', state.active === 'meals');
    const series = computeSeries();
    mealsPage.innerHTML = `
      <div class="card table-wrap">
        <div class="card-title-row"><div><h2 class="card-title">Repas enregistrés</h2><p class="card-subtitle">Chaque repas reste modifiable après enregistrement.</p></div></div>
        ${state.savedMeals.length ? state.savedMeals.map(meal => `
          <div class="card" style="margin-bottom:12px;background:#0c1635">
            <div class="card-title-row"><div><h3 class="card-title">${escapeHtml(meal.type)} · ${escapeHtml(meal.time)}</h3></div><button class="btn warn" data-del-meal="${meal.id}">Supprimer le repas</button></div>
            <table>
              <thead><tr><th>Produit</th><th>Portion</th><th>Compteur</th><th>Charge</th></tr></thead>
              <tbody>
                ${meal.items.map(it => { const f=getFood(it.foodId); return `<tr><td>${escapeHtml(foodName(f))}</td><td>${escapeHtml(portionLabel(f,it.portionKey))}</td><td><button class="btn subtle" data-saved-step="${meal.id}|${it.key}" data-delta="-1">−</button> <strong>${it.count}</strong> <button class="btn subtle" data-saved-step="${meal.id}|${it.key}" data-delta="1">+</button></td><td>${itemAdjustedMg(f,it.portionKey,it.count,meal.context).toFixed(1)} mg</td></tr>`; }).join('')}
              </tbody>
            </table>
          </div>`).join('') : '<div class="empty">Aucun repas enregistré.</div>'}
      </div>
      <div class="card graph-card">
        <div class="card-title-row"><div><h2 class="card-title">Évolution de la charge</h2><p class="card-subtitle">La ligne cumulée monte pendant les recouvrements et redescend avec l’évacuation progressive.</p></div></div>
        ${renderGraph(series)}
      </div>
    `;
    bindMealEvents();
  }

  function renderGraph(seriesData) {
    const { series, cumulative, overlaps } = seriesData;
    const W = 980, H = 320, L = 52, R = 34, T = 22, B = 46;
    const maxY = Math.max(12, ...cumulative.map(p => p.y)) * 1.1;
    const sx = x => L + (x / 24) * (W - L - R);
    const sy = y => H - B - (y / maxY) * (H - T - B);
    const pathFor = pts => pts.map((p, i) => `${i ? 'L' : 'M'}${sx(p.x).toFixed(1)} ${sy(p.y).toFixed(1)}`).join(' ');
    const overlapBands = overlaps.map((ov, i) => `<rect x="${sx(ov.start).toFixed(1)}" y="${T}" width="${Math.max(4, sx(ov.end)-sx(ov.start)).toFixed(1)}" height="${H-T-B}" fill="rgba(216,176,85,0.08)" />`).join('');
    const lines = [3, 6, 10].map(v => `<line x1="${L}" y1="${sy(v)}" x2="${W-R}" y2="${sy(v)}" stroke="${v===10?'#ff7f7f':v===6?'#f5b14c':'#e8cf64'}" stroke-dasharray="6 6"/><text x="${W-R+6}" y="${sy(v)+4}" fill="#aab8df" font-size="12">${v} mg</text>`).join('');
    const timeTicks = Array.from({length:7},(_,i)=>i*4).map(v => `<text x="${sx(v)-10}" y="${H-14}" fill="#9fb0d6" font-size="12">${String(v).padStart(2,'0')}:00</text>`).join('');
    const mealCurves = series.map((s, i) => `<path d="${pathFor(s.points)}" fill="none" stroke="${s.color}" stroke-width="2.6" opacity="0.95"/>`).join('');
    const cumulativePath = `<path d="${pathFor(cumulative)}" fill="none" stroke="#b48cff" stroke-width="3.6" stroke-dasharray="0"/>`;
    const mealLabels = series.map((s, i) => {
      const start = hourToFloat(s.meal.time);
      return `<text x="${sx(start)-14}" y="${T+14+i*14}" fill="${s.color}" font-size="12">${escapeHtml(s.meal.title)} · ${escapeHtml(s.meal.time)}</text>`;
    }).join('');
    const overlapCards = overlaps.length ? `<div class="badge-row" style="margin-top:12px">${overlaps.map(ov => `<div class="badge">Recouvrement ${fmtHour(ov.start)}–${fmtHour(ov.end)} · pic ${ov.peak.toFixed(1)} mg</div>`).join('')}</div>` : '<div class="small" style="margin-top:12px">Pas de recouvrement significatif détecté.</div>';

    return `<svg viewBox="0 0 ${W} ${H}" aria-label="Courbes de repas">
      <rect x="0" y="0" width="${W}" height="${H}" fill="#0b1532" rx="18"></rect>
      ${overlapBands}
      <line x1="${L}" y1="${H-B}" x2="${W-R}" y2="${H-B}" stroke="#4a5f93"/>
      <line x1="${L}" y1="${T}" x2="${L}" y2="${H-B}" stroke="#4a5f93"/>
      ${lines}
      ${mealCurves}
      ${cumulativePath}
      ${timeTicks}
      ${mealLabels}
    </svg>${overlapCards}`;
  }

  function renderInfo() {
    infoPage.classList.toggle('active', state.active === 'info');
    infoPage.innerHTML = `
      <div class="card">
        <div class="info-grid">
          <div class="info-box"><div class="info-box-head"><h3>Comment lire le résultat</h3>${modalButton('risk')}</div><p>Le risque reste relatif au scénario saisi. Les courbes servent à visualiser des tendances d’exposition et de recouvrement.</p></div>
          <div class="info-box"><div class="info-box-head"><h3>Confiance</h3>${modalButton('confidence')}</div><p>La confiance reflète la solidité pratique des données disponibles pour le produit et son contexte.</p></div>
          <div class="info-box"><div class="info-box-head"><h3>Contexte produit</h3>${modalButton('contextImpact')}</div><p>Maturité, préparation, conservation et provenance peuvent déplacer la lecture sans remplacer le signal du produit.</p></div>
          <div class="info-box"><div class="info-box-head"><h3>Évacuation progressive</h3>${modalButton('clearance')}</div><p>La ligne cumulée redescend progressivement à mesure que chaque courbe individuelle décroît.</p></div>
        </div>
      </div>`;
    bindModalEvents();
  }

  function renderMore() {
    morePage.classList.toggle('active', state.active === 'more');
    morePage.innerHTML = `
      <div class="card"><div class="card-title-row"><div><h2 class="card-title">Titre libre</h2><p class="card-subtitle">Le titre de l’application reste entièrement personnalisable.</p></div></div><input id="free-title" value="${escapeHtml(state.title)}" placeholder="Titre de l'application"></div>
      <div class="card"><a class="btn primary" href="mailto:contact@example.com?subject=Ajout%20aliment&body=Bonjour,%0A%0AJe souhaite demander l'ajout de l'aliment suivant :%0A">Demander l’ajout d’un aliment</a></div>
      <div class="card alert-strong"><strong>Urgence</strong><div style="margin-top:8px">En cas de symptômes sévères ou inhabituels, demande immédiatement une aide médicale.</div></div>
      <div class="card legal"><strong>Disclaimer</strong><div style="margin-top:8px">Outil éducatif, non médical, sans garantie d’exhaustivité ni d’adéquation à un cas individuel. Les données sont indicatives et l’utilisateur reste responsable de ses décisions.</div></div>
    `;
    const titleInput = document.getElementById('free-title');
    if (titleInput) titleInput.oninput = (e) => { state.title = e.target.value || 'Titre libre'; setHeader(); };
  }

  function renderParams() {
    let paramsPage = document.getElementById('page-params');
    if (!paramsPage) {
      paramsPage = document.createElement('section');
      paramsPage.id = 'page-params';
      paramsPage.className = 'page';
      document.querySelector('main').appendChild(paramsPage);
    }
    paramsPage.classList.toggle('active', state.active === 'params');
    paramsPage.innerHTML = `
      <div class="card">
        <div class="card-title-row"><div><h2 class="card-title">Paramètres séparés</h2><p class="card-subtitle">Dose, phase et notions de temps sont isolées de la page principale.</p></div></div>
        <div class="grid grid-3">
          <div class="field"><label>Dose</label><select id="dose-select"><option ${state.params.hiddenDose==='Masqué'?'selected':''}>Masqué</option><option>45 mg/j</option><option>60 mg/j</option></select></div>
          <div class="field"><label>Phase</label><select id="phase-select"><option ${state.params.hiddenPhase==='Masqué'?'selected':''}>Masqué</option><option>Début</option><option>Stabilisé</option></select></div>
          <div class="field"><label>Heure du repas</label><select id="meal-time-select">${['07:30','08:10','12:45','19:30','22:00'].map(h => `<option ${h===state.mealTime?'selected':''}>${h}</option>`).join('')}</select></div>
          <div class="field"><label>Type</label><select id="meal-type-select">${['Petit déjeuner','Déjeuner','Dîner','Collation'].map(v => `<option ${v===state.mealType?'selected':''}>${v}</option>`).join('')}</select></div>
          <div class="field"><label>Fenêtre repas</label><select id="window-select"><option value="2" ${state.params.mealWindowHours===2?'selected':''}>2 h</option><option value="3" ${state.params.mealWindowHours===3?'selected':''}>3 h</option></select></div>
        </div>
      </div>`;
    bindParamEvents();
  }

  function bindBuildEvents() {
    const bind = (id, fn) => { const el = document.getElementById(id); if (el) el.onchange = (e) => fn(e.target.value); };
    bind('sel-cuisine', (v) => { state.cuisine = v; state.family = 'Toutes'; const foods = filteredFoods(); if (!foods.find(f=>f.id===state.foodId)) state.foodId = foods[0]?.id || data.foods[0].id; render(); });
    bind('sel-family', (v) => { state.family = v; const foods = filteredFoods(); if (!foods.find(f=>f.id===state.foodId)) state.foodId = foods[0]?.id || data.foods[0].id; render(); });
    bind('sel-food', (v) => { state.foodId = v; render(); });
    bind('sel-portion', (v) => { state.portionKey = v; render(); });
    bind('ctx-ripeness', (v) => { state.context.ripeness = v; render(); });
    bind('ctx-prep', (v) => { state.context.prep = v; render(); });
    bind('ctx-storage', (v) => { state.context.storage = v; render(); });
    bind('ctx-origin', (v) => { state.context.origin = v; render(); });
    const add = document.getElementById('add-btn'); if (add) add.onclick = addCurrentFood;
    const save = document.getElementById('save-meal'); if (save) save.onclick = saveCurrentMeal;
    const clear = document.getElementById('clear-current'); if (clear) clear.onclick = () => { state.currentMeal = []; render(); };
    document.querySelectorAll('[data-cur-step]').forEach(btn => btn.onclick = () => { updateMealItem(state.currentMeal, btn.dataset.curStep, Number(btn.dataset.delta)); state.currentMeal = state.currentMeal.filter(x => x.count > 0); render(); });
    document.querySelectorAll('[data-cur-remove]').forEach(btn => btn.onclick = () => { state.currentMeal = state.currentMeal.filter(x => x.key !== btn.dataset.curRemove); render(); });
  }

  function bindMealEvents() {
    document.querySelectorAll('[data-saved-step]').forEach(btn => btn.onclick = () => {
      const [mealId, key] = btn.dataset.savedStep.split('|');
      const meal = state.savedMeals.find(m => m.id === mealId);
      if (!meal) return;
      updateMealItem(meal.items, key, Number(btn.dataset.delta));
      meal.items = meal.items.filter(x => x.count > 0);
      state.savedMeals = state.savedMeals.filter(m => m.items.length > 0);
      render();
    });
    document.querySelectorAll('[data-del-meal]').forEach(btn => btn.onclick = () => { state.savedMeals = state.savedMeals.filter(m => m.id !== btn.dataset.delMeal); render(); });
  }

  function bindParamEvents() {
    const bind = (id, fn) => { const el = document.getElementById(id); if (el) el.onchange = (e) => fn(e.target.value); };
    bind('dose-select', (v) => { state.params.hiddenDose = v; });
    bind('phase-select', (v) => { state.params.hiddenPhase = v; });
    bind('meal-time-select', (v) => { state.mealTime = v; render(); });
    bind('meal-type-select', (v) => { state.mealType = v; render(); });
    bind('window-select', (v) => { state.params.mealWindowHours = Number(v); });
  }

  function bindModalEvents() {
    const overlay = document.getElementById('modal-overlay');
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');
    const close = document.getElementById('modal-close');
    document.querySelectorAll('[data-modal]').forEach(btn => btn.onclick = () => {
      const key = btn.dataset.modal;
      const entry = MODALS[key]?.fr || [key, ''];
      title.textContent = entry[0];
      body.textContent = entry[1];
      overlay.classList.remove('hidden');
      modal.classList.remove('hidden');
    });
    const hide = () => { overlay.classList.add('hidden'); modal.classList.add('hidden'); };
    overlay.onclick = hide;
    close.onclick = hide;
  }

  function render() {
    setHeader();
    renderTabs();
    renderBuild();
    renderMeals();
    renderInfo();
    renderMore();
    renderParams();
  }

  render();
})();
