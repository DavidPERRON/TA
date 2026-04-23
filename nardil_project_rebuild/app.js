
(function(){
  const DATA = window.__NARDIL_DATA__;
  if (!DATA || !Array.isArray(DATA.foods)) {
    document.body.innerHTML = '<div style="padding:24px;color:white;background:#071028;font-family:-apple-system,Segoe UI,Arial,sans-serif">Dataset introuvable.</div>';
    return;
  }

  const STORAGE_KEYS = {
    language: 'nardil_rebuild_lang',
    savedDay: 'nardil_rebuild_saved_day_v1',
  };

  const BAND_ORDER = { green_limited: 0, orange: 1, red: 2, black: 3 };
  const BAND_CLASSES = { green_limited: 'green', orange: 'orange', red: 'red', black: 'black' };
  const PAGE_IDS = ['build', 'info', 'more'];

  const t = {
    fr: {
      language: 'Langue',
      title: 'Nardil × Tyramine',
      eyebrow: 'Nardil / phénelzine uniquement',
      subtitle: 'Refonte mobile first branchée sur la golden source v4. L’outil calcule une charge de tyramine estimée par produit et par repas, puis visualise une exposition potentielle relative sans prétendre représenter un taux sanguin.',
      scopeBanner: 'Limité strictement au Nardil (phénelzine). Usage éducatif uniquement. Les restrictions doivent être maintenues pendant le traitement et pendant les 14 jours suivant l’arrêt.',
      tabs: { build: 'Construire', info: 'Information', more: 'Divers' },
      build: {
        settingsTitle: 'Réglages Nardil + conditions du repas',
        settingsSubtitle: 'Ces paramètres modulent le calcul sans écraser le signal principal du produit.',
        dose: 'Dose quotidienne de Nardil',
        daysSinceStart: 'Jours depuis début / augmentation',
        stopWindow: 'Dans les 14 jours après arrêt',
        mealTime: 'Heure d’enregistrement',
        entryType: 'Type d’enregistrement',
        mealTypeMeal: 'Repas',
        mealTypeSnack: 'Snack',
        alcohol: 'Alcool concomitant',
        emptyStomach: 'À jeun / estomac vide',
        brandKnown: 'Marque / provenance connue',
        artisanal: 'Artisanal',
        homemade: 'Maison',
        liveFermented: 'Fermentation live / non standardisée',
        veryRipe: 'Très mûr / très affiné',
        refrigerationDoubt: 'Doute sur la réfrigération',
        filtersTitle: 'Recherche, cuisine, famille, produit',
        filtersSubtitle: 'Le produit reste prioritaire sur la catégorie. La liste ci-dessous contient plusieurs produits par famille, pas un seul choix pauvre.',
        search: 'Recherche',
        searchPlaceholder: 'Tapez un produit, une cuisine, un alias restaurant…',
        cuisine: 'Type de cuisine',
        family: 'Famille',
        product: 'Produit',
        visibleFoods: 'aliments visibles',
        portionTitle: 'Portion et quantité exacte',
        portionSubtitle: 'Les cartes servent de repères pratiques propres au produit. La quantité exacte reste éditable.',
        exactQty: 'Quantité exacte',
        unitHint: 'Unité',
        currentMealTitle: 'Repas courant',
        currentMealSubtitle: 'Ajoutez plusieurs aliments au même repas. Si un seul aliment est présent, la fiche aliment détaillée reste affichée.',
        addCurrent: 'Ajouter au repas courant',
        clearMeal: 'Vider le repas courant',
        saveMeal: 'Enregistrer',
        saveSnack: 'Enregistrer comme snack',
        currentMealEmpty: 'Aucun aliment ajouté. Le calcul s’applique au produit affiché.',
        riskTitle: 'Risque relatif',
        detailsTitleSingle: 'Fiche aliment',
        detailsTitleMeal: 'Détail du repas courant',
        graphTitle: 'Exposition potentielle relative du repas',
        graphSubtitle: 'Courbes heuristiques de montée, baisse et chevauchement. Ce graphique n’est pas un taux sanguin.',
        dayTitle: 'Journal du jour',
        daySubtitle: 'Les repas/snacks sont enregistrés à l’horaire choisi. Le graphe du bas visualise leurs chevauchements potentiels sur 24 heures.',
        noSaved: 'Aucun repas enregistré aujourd’hui.',
        savedAt: 'Enregistré à',
        delete: 'Supprimer',
        source: 'Source',
        confidence: 'Confiance',
        variability: 'Variabilité',
        familyLabel: 'Famille',
        cuisineLabel: 'Cuisine',
        processLabel: 'Procédé',
        fdaLabel: 'Catégorie FDA',
        standardPortion: 'Portion standard',
        quantityLabel: 'Quantité',
        rangeLabel: 'Charge estimée',
        effectiveLabel: 'Charge retenue',
        reasonLabel: 'Raison',
        restrictedLabel: 'Verrou',
        limitedGreenNotice: 'Un résultat faible ne veut pas dire “sûr”.',
        mealSummary: 'Synthèse du repas',
        savedExposureTitle: 'Exposition potentielle relative sur 24 h',
      },
      kpi: {
        lowTypHigh: 'low / typ / high',
        weighted: 'Charge pondérée',
        band: 'Niveau final',
        overlap: 'Chevauchement',
        uncertainty: 'Incertitude',
      },
      bands: {
        green_limited: { name: 'Vert limité', hero: 'Risque estimé bas, mais sans garantie de sécurité.', short: 'Vert limité' },
        orange: { name: 'Orange', hero: 'Prudence forte : la combinaison produit + contexte mérite une réserve active.', short: 'Orange' },
        red: { name: 'Rouge', hero: 'Risque important : le repas approche une zone défavorable sous Nardil.', short: 'Rouge' },
        black: { name: 'Noir', hero: 'À éviter sous Nardil : la charge ou le verrou catégoriel devient trop défavorable.', short: 'Noir' },
      },
      info: {
        title: 'Information',
        subtitle: 'Page pédagogique claire, non punitive. Chaque bloc possède un bouton i pour le détail.',
        cards: [
          {
            title: 'Comment lire le bandeau',
            body: 'Le bandeau synthétise la charge estimée du repas, puis applique un modulateur modeste pour la dose de Nardil, la durée et l’incertitude.',
            detail: 'Le signal principal reste alimentaire : produit, portion exacte, variabilité, cumul et éventuel verrou catégoriel. La dose et la durée ne servent que d’ajustement modeste.'
          },
          {
            title: 'Pourquoi le vert est “limité”',
            body: 'Vert ne signifie jamais “aliment sûr”. Il signifie seulement : charge estimée basse dans le contexte renseigné.',
            detail: 'Marque différente, affinage plus long, lot artisanal, fermentation plus active, mauvais froid ou portion réelle plus grande peuvent déplacer nettement le résultat.'
          },
          {
            title: 'Montée, baisse, chevauchements',
            body: 'Le graphe montre une exposition potentielle relative après un repas ou plusieurs prises rapprochées.',
            detail: 'Il s’agit d’une visualisation pédagogique de chevauchement. Le modèle n’est pas un dosage sanguin et ne doit pas être lu comme une concentration réelle.'
          },
          {
            title: 'Pourquoi l’artisanal change tout',
            body: 'Lorsque le produit est artisanal, maison, live, très mûr ou mal réfrigéré, l’outil bascule vers une lecture plus prudente.',
            detail: 'La tyramine varie fortement avec la fermentation, l’affinage, la chaîne du froid, la marque et le lot. Les outliers cliniquement problématiques viennent souvent de cette variabilité.'
          },
          {
            title: 'Après arrêt du Nardil',
            body: 'Aucun relâchement n’est appliqué pendant les 14 jours après l’arrêt.',
            detail: 'Cette règle est affichée explicitement pour éviter un faux sentiment de sécurité lié à l’arrêt récent.'
          },
          {
            title: 'Cas particuliers majeurs',
            body: 'Certaines catégories méritent une lecture très spécifique : fèves, peau de banane, bière pression live, extraits de levure concentrés.',
            detail: 'Les fèves posent surtout un problème de L-DOPA. La peau de banane, la bière pression ou les extraits concentrés ne doivent pas être dilués dans une logique “moyenne”.'
          }
        ]
      },
      more: {
        title: 'Divers',
        subtitle: 'Disclaimer, urgence, limites et transparence de construction.',
        emergencyTitle: 'Urgence',
        emergencyBody: 'Céphalée brutale ou très inhabituelle, douleur thoracique, palpitations, raideur cervicale, nausées/vomissements, sueurs, photophobie, essoufflement, ou pression artérielle très élevée après un aliment/une boisson : demandez immédiatement une aide médicale urgente.',
        disclaimerTitle: 'Disclaimer fort',
        limitsTitle: 'Limites',
        extraTitle: 'Éléments complémentaires',
        transparencyTitle: 'Transparence technique',
        doneTitle: 'Ce qui est réellement fait dans cette refonte',
        doneItems: [
          'Golden source unique = classeur v4 intégré tel qu’uploadé.',
          '338 entrées chargées dans un runtime généré depuis le fichier maître.',
          'Dataset séparé du front : le front consomme un fichier généré, il ne recode pas les aliments.',
          'Architecture réelle en 3 pages : Construire, Information, Divers.',
          'Repas courant, enregistrement horaire repas/snack, historique du jour et double graphe conservés.',
          'App statique testable, sans dépendance externe.'
        ],
        notDoneTitle: 'Ce qui n’est pas prétendu',
        notDoneItems: [
          'Aucun taux sanguin ou biomarqueur réel n’est calculé.',
          'Aucune extrapolation à d’autres IMAO ou antidépresseurs.',
          'Aucune promesse réglementaire App Store n’est fournie dans ce ZIP.'
        ]
      },
      common: {
        yes: 'Oui',
        no: 'Non',
        unknown: 'Non précisé',
        none: 'Aucun',
        viewSource: 'Ouvrir la source',
        productGuideTitle: 'À propos des portions',
        productGuideBody: 'Les cartes petite / normale / importante sont des repères pratiques propres au produit sélectionné. Elles servent à normaliser l’usage de l’outil, mais ne remplacent pas la quantité exacte réellement consommée.',
        familyAll: 'Toutes',
        cuisineAll: 'Toutes',
        remove: 'Retirer',
        bandFloor: 'plancher de prudence',
        saveSuccess: 'Enregistrement effectué.',
        noFoodFound: 'Aucun aliment ne correspond aux filtres actuels.',
        meal: 'Repas',
        snack: 'Snack',
        allSourcesTitle: 'Sources principales',
      }
    },
    en: {
      language: 'Language',
      title: 'Nardil × Tyramine',
      eyebrow: 'Nardil / phenelzine only',
      subtitle: 'Mobile-first rebuild wired to the v4 golden source. The tool estimates tyramine load per item and per meal, then visualizes relative potential exposure without pretending to be a blood-level model.',
      scopeBanner: 'Strictly limited to Nardil (phenelzine). Educational use only. Dietary restrictions should be maintained during treatment and for 14 days after stopping.',
      tabs: { build: 'Build', info: 'Information', more: 'More' },
      build: {
        settingsTitle: 'Nardil settings + meal conditions',
        settingsSubtitle: 'These settings modulate the result without overpowering the food signal.',
        dose: 'Daily Nardil dose',
        daysSinceStart: 'Days since start / dose increase',
        stopWindow: 'Within 14 days after stopping',
        mealTime: 'Entry time',
        entryType: 'Entry type',
        mealTypeMeal: 'Meal',
        mealTypeSnack: 'Snack',
        alcohol: 'Alcohol alongside the meal',
        emptyStomach: 'Fasting / empty stomach',
        brandKnown: 'Known brand / provenance',
        artisanal: 'Artisanal',
        homemade: 'Homemade',
        liveFermented: 'Live / non-standard fermentation',
        veryRipe: 'Very ripe / heavily aged',
        refrigerationDoubt: 'Cold-chain doubt',
        filtersTitle: 'Search, cuisine, family, product',
        filtersSubtitle: 'Product remains primary over category. The product list deliberately keeps multiple options inside each family.',
        search: 'Search',
        searchPlaceholder: 'Type a food, cuisine, restaurant alias…',
        cuisine: 'Cuisine type',
        family: 'Family',
        product: 'Product',
        visibleFoods: 'visible foods',
        portionTitle: 'Portion and exact quantity',
        portionSubtitle: 'The cards are product-specific guide rails. Exact quantity remains editable.',
        exactQty: 'Exact quantity',
        unitHint: 'Unit',
        currentMealTitle: 'Current meal',
        currentMealSubtitle: 'You can add several foods into one meal. If only one item is present, the detailed food sheet remains visible.',
        addCurrent: 'Add to current meal',
        clearMeal: 'Clear current meal',
        saveMeal: 'Save entry',
        saveSnack: 'Save as snack',
        currentMealEmpty: 'No food added yet. The calculation applies to the currently displayed product.',
        riskTitle: 'Relative risk',
        detailsTitleSingle: 'Food sheet',
        detailsTitleMeal: 'Current meal detail',
        graphTitle: 'Relative potential exposure for this meal',
        graphSubtitle: 'Heuristic rise, decline and overlap curves. This is not a blood level.',
        dayTitle: 'Today log',
        daySubtitle: 'Meals/snacks are saved at the chosen time. The lower graph shows their potential overlap across the day.',
        noSaved: 'No saved entries today.',
        savedAt: 'Saved at',
        delete: 'Delete',
        source: 'Source',
        confidence: 'Confidence',
        variability: 'Variability',
        familyLabel: 'Family',
        cuisineLabel: 'Cuisine',
        processLabel: 'Process',
        fdaLabel: 'FDA category',
        standardPortion: 'Standard portion',
        quantityLabel: 'Quantity',
        rangeLabel: 'Estimated load',
        effectiveLabel: 'Selected load',
        reasonLabel: 'Reason',
        restrictedLabel: 'Lock',
        limitedGreenNotice: 'A low result never means “safe”.',
        mealSummary: 'Meal summary',
        savedExposureTitle: 'Relative potential exposure across 24 h',
      },
      kpi: {
        lowTypHigh: 'low / typ / high',
        weighted: 'Weighted load',
        band: 'Final band',
        overlap: 'Overlap',
        uncertainty: 'Uncertainty',
      },
      bands: {
        green_limited: { name: 'Limited green', hero: 'Estimated load is lower, but safety is not guaranteed.', short: 'Limited green' },
        orange: { name: 'Orange', hero: 'High caution: the combination of item and context deserves active restraint.', short: 'Orange' },
        red: { name: 'Red', hero: 'Important risk: the meal is approaching an unfavorable zone under Nardil.', short: 'Red' },
        black: { name: 'Black', hero: 'Avoid under Nardil: the load or categorical lock is too unfavorable.', short: 'Black' },
      },
      info: {
        title: 'Information',
        subtitle: 'Clear patient-oriented guidance. Every block has an i button for extra detail.',
        cards: [
          {
            title: 'How to read the banner',
            body: 'The banner summarizes meal load, then applies a modest modulation for Nardil dose, duration and uncertainty.',
            detail: 'The leading signal remains food-specific: product, exact quantity, variability, cumulative meal load and any categorical lock.'
          },
          {
            title: 'Why green is only “limited”',
            body: 'Green never means “safe food”. It only means: lower estimated load in the context you entered.',
            detail: 'A different brand, longer aging, artisanal production, more active fermentation, poor refrigeration or a larger real portion can materially shift the result.'
          },
          {
            title: 'Rise, decline and overlap',
            body: 'The graph shows relative potential exposure after a meal or after closely spaced entries.',
            detail: 'It is a teaching visualization of overlap. It is not a biomarker, not plasma tyramine and not a pressure prediction.'
          },
          {
            title: 'Why artisanal matters',
            body: 'When the item is artisanal, homemade, live, very ripe or poorly refrigerated, the tool intentionally becomes more conservative.',
            detail: 'Tyramine can vary sharply with fermentation, ripening, cold-chain quality, brand and batch. Clinically troublesome outliers often come from this variability.'
          },
          {
            title: 'After stopping Nardil',
            body: 'No relaxation is applied during the 14 days after stopping.',
            detail: 'That rule is surfaced explicitly to avoid false reassurance from recent discontinuation.'
          },
          {
            title: 'Key special cases',
            body: 'Some categories require explicit handling: fava beans, banana peel, live tap beer, concentrated yeast extracts.',
            detail: 'Fava beans are mainly a L-DOPA issue. Banana peel, draft beer and concentrated extracts should not be diluted into a “mean value” logic.'
          }
        ]
      },
      more: {
        title: 'More',
        subtitle: 'Disclaimer, emergency, limits and build transparency.',
        emergencyTitle: 'Emergency',
        emergencyBody: 'Sudden or unusual headache, chest pain, palpitations, neck stiffness, nausea/vomiting, sweating, photophobia, shortness of breath, or very high blood pressure after food or drink: seek urgent medical help immediately.',
        disclaimerTitle: 'Strong disclaimer',
        limitsTitle: 'Limits',
        extraTitle: 'Additional elements',
        transparencyTitle: 'Technical transparency',
        doneTitle: 'What this rebuild actually does',
        doneItems: [
          'Single golden source = the uploaded v4 workbook.',
          '338 entries loaded into runtime generated from the master file.',
          'Dataset kept separate from the front end.',
          'Real 3-page architecture: Build, Information, More.',
          'Current meal, timed meal/snack logging, day history and dual graphs retained.',
          'Static app, testable without external dependencies.'
        ],
        notDoneTitle: 'What it does not claim',
        notDoneItems: [
          'No blood-level or biomarker calculation.',
          'No extrapolation to other MAOIs or antidepressants.',
          'No App Store regulatory guarantee inside this ZIP.'
        ]
      },
      common: {
        yes: 'Yes',
        no: 'No',
        unknown: 'Unspecified',
        none: 'None',
        viewSource: 'Open source',
        productGuideTitle: 'About portion cards',
        productGuideBody: 'Small / normal / large cards are product-specific guide rails. They help normalize use of the tool, but they do not replace the exact amount actually consumed.',
        familyAll: 'All',
        cuisineAll: 'All',
        remove: 'Remove',
        bandFloor: 'caution floor',
        saveSuccess: 'Entry saved.',
        noFoodFound: 'No food matches the current filters.',
        meal: 'Meal',
        snack: 'Snack',
        allSourcesTitle: 'Primary sources',
      }
    },
    ru: {
      language: 'Язык',
      title: 'Nardil × Tyramine',
      eyebrow: 'Только Nardil / фенелзин',
      subtitle: 'Мобильная версия, заново собранная поверх master-файла v4. Инструмент оценивает нагрузку тирамином по продукту и по приёму пищи, а затем показывает относительную потенциальную экспозицию без притворства, что это анализ крови.',
      scopeBanner: 'Инструмент строго ограничен Nardil (фенелзин). Только образовательное использование. Ограничения по пище должны сохраняться во время лечения и в течение 14 дней после отмены.',
      tabs: { build: 'Собрать', info: 'Информация', more: 'Прочее' },
      build: {
        settingsTitle: 'Параметры Nardil и условия еды',
        settingsSubtitle: 'Эти параметры лишь умеренно меняют итог и не должны подавлять главный пищевой сигнал.',
        dose: 'Суточная доза Nardil',
        daysSinceStart: 'Дни с начала / повышения дозы',
        stopWindow: 'В пределах 14 дней после отмены',
        mealTime: 'Время записи',
        entryType: 'Тип записи',
        mealTypeMeal: 'Приём пищи',
        mealTypeSnack: 'Перекус',
        alcohol: 'Алкоголь вместе с едой',
        emptyStomach: 'Натощак',
        brandKnown: 'Марка / происхождение известны',
        artisanal: 'Ремесленный продукт',
        homemade: 'Домашний',
        liveFermented: 'Живая / нестандартизованная ферментация',
        veryRipe: 'Очень зрелый / сильно выдержанный',
        refrigerationDoubt: 'Сомнение в холодовой цепи',
        filtersTitle: 'Поиск, кухня, семейство, продукт',
        filtersSubtitle: 'Приоритет всегда у конкретного продукта, а не у грубой категории. В списке намеренно сохранено много вариантов внутри семейства.',
        search: 'Поиск',
        searchPlaceholder: 'Введите продукт, кухню, ресторанный алиас…',
        cuisine: 'Тип кухни',
        family: 'Семейство',
        product: 'Продукт',
        visibleFoods: 'видимых продуктов',
        portionTitle: 'Порция и точное количество',
        portionSubtitle: 'Карточки порций — это ориентиры именно для выбранного продукта. Точное количество можно менять вручную.',
        exactQty: 'Точное количество',
        unitHint: 'Единица',
        currentMealTitle: 'Текущий приём пищи',
        currentMealSubtitle: 'Можно добавить несколько продуктов в один приём пищи. Если продукт только один, подробная карточка остаётся видимой.',
        addCurrent: 'Добавить в текущий приём пищи',
        clearMeal: 'Очистить текущий приём пищи',
        saveMeal: 'Сохранить запись',
        saveSnack: 'Сохранить как перекус',
        currentMealEmpty: 'Пока ничего не добавлено. Расчёт относится к текущему отображаемому продукту.',
        riskTitle: 'Относительный риск',
        detailsTitleSingle: 'Карточка продукта',
        detailsTitleMeal: 'Детали текущего приёма пищи',
        graphTitle: 'Относительная потенциальная экспозиция для этого приёма пищи',
        graphSubtitle: 'Эвристические кривые подъёма, снижения и перекрытия. Это не концентрация в крови.',
        dayTitle: 'Журнал за сегодня',
        daySubtitle: 'Приёмы пищи и перекусы сохраняются на выбранное время. Нижний график показывает их возможные перекрытия в течение суток.',
        noSaved: 'Сегодня ещё ничего не сохранено.',
        savedAt: 'Сохранено в',
        delete: 'Удалить',
        source: 'Источник',
        confidence: 'Уровень доверия',
        variability: 'Вариабельность',
        familyLabel: 'Семейство',
        cuisineLabel: 'Кухня',
        processLabel: 'Процесс',
        fdaLabel: 'Категория FDA',
        standardPortion: 'Стандартная порция',
        quantityLabel: 'Количество',
        rangeLabel: 'Оценочная нагрузка',
        effectiveLabel: 'Принятая нагрузка',
        reasonLabel: 'Причина',
        restrictedLabel: 'Блокировка',
        limitedGreenNotice: 'Низкий результат не означает “безопасно”.',
        mealSummary: 'Сводка по приёму пищи',
        savedExposureTitle: 'Относительная потенциальная экспозиция за 24 часа',
      },
      kpi: {
        lowTypHigh: 'low / typ / high',
        weighted: 'Взвешенная нагрузка',
        band: 'Итоговый уровень',
        overlap: 'Перекрытие',
        uncertainty: 'Неопределённость',
      },
      bands: {
        green_limited: { name: 'Ограниченно низкий', hero: 'Оценочная нагрузка ниже, но это не гарантия безопасности.', short: 'Ограниченно низкий' },
        orange: { name: 'Оранжевый', hero: 'Сильная осторожность: сочетание продукта и контекста требует активной сдержанности.', short: 'Оранжевый' },
        red: { name: 'Красный', hero: 'Существенный риск: приём пищи приближается к неблагоприятной зоне под Nardil.', short: 'Красный' },
        black: { name: 'Чёрный', hero: 'Избегать при Nardil: нагрузка или категориальная блокировка слишком неблагоприятны.', short: 'Чёрный' },
      },
      info: {
        title: 'Информация',
        subtitle: 'Понятное объяснение для пациента. У каждого блока есть кнопка i для деталей.',
        cards: [
          {
            title: 'Как читать баннер',
            body: 'Баннер сначала суммирует нагрузку по еде, затем применяет умеренную поправку на дозу Nardil, длительность и неопределённость.',
            detail: 'Главный сигнал остаётся пищевым: конкретный продукт, точное количество, вариабельность, суммарная нагрузка и возможная категориальная блокировка.'
          },
          {
            title: 'Почему зелёный только “ограниченный”',
            body: 'Зелёный никогда не означает “безопасный продукт”. Это лишь более низкая оценка в заданном вами контексте.',
            detail: 'Другая марка, более длительная выдержка, ремесленное производство, активная ферментация, сомнительное охлаждение или просто большая реальная порция могут заметно сдвинуть результат.'
          },
          {
            title: 'Подъём, спад и перекрытие',
            body: 'График показывает относительную потенциальную экспозицию после еды или после близко расположенных записей.',
            detail: 'Это учебная визуализация перекрытия. Она не является биомаркером, не является плазменным тирамином и не предсказывает давление.'
          },
          {
            title: 'Почему ремесленное критично',
            body: 'Если продукт ремесленный, домашний, live, очень зрелый или плохо охлаждался, инструмент намеренно становится более строгим.',
            detail: 'Тирамин сильно меняется в зависимости от ферментации, выдержки, холодовой цепи, марки и партии. Клинически опасные выбросы часто связаны именно с этой вариабельностью.'
          },
          {
            title: 'После отмены Nardil',
            body: 'В течение 14 дней после отмены послабление не применяется.',
            detail: 'Это правило вынесено отдельно, чтобы не создавать ложное чувство безопасности после недавней отмены.'
          },
          {
            title: 'Ключевые особые случаи',
            body: 'Некоторые категории нужно читать отдельно: бобы fava, банановая кожура, живое разливное пиво, концентрированные дрожжевые экстракты.',
            detail: 'Для fava основная проблема — L-DOPA. Банановая кожура, разливное пиво и концентрированные экстракты не должны растворяться в логике “среднего значения”.'
          }
        ]
      },
      more: {
        title: 'Прочее',
        subtitle: 'Disclaimer, экстренные признаки, ограничения и прозрачность сборки.',
        emergencyTitle: 'Срочно',
        emergencyBody: 'Внезапная или необычная головная боль, боль в груди, сердцебиение, ригидность шеи, тошнота/рвота, потливость, светобоязнь, одышка или очень высокое давление после еды/напитка — немедленно обращайтесь за экстренной медицинской помощью.',
        disclaimerTitle: 'Сильный disclaimer',
        limitsTitle: 'Ограничения',
        extraTitle: 'Дополнительно',
        transparencyTitle: 'Техническая прозрачность',
        doneTitle: 'Что действительно сделано в этой версии',
        doneItems: [
          'Единая golden source = загруженный workbook v4.',
          '338 записей загружены в runtime, сгенерированный из master-файла.',
          'Dataset отделён от фронта.',
          'Реальная структура из 3 страниц: Собрать, Информация, Прочее.',
          'Сохранены текущий приём пищи, запись по времени, журнал дня и два графика.',
          'Статическое приложение, тестируемое без внешних зависимостей.'
        ],
        notDoneTitle: 'Чего здесь не заявляется',
        notDoneItems: [
          'Нет расчёта уровня в крови или биомаркера.',
          'Нет переноса логики на другие ИМАО или антидепрессанты.',
          'Нет регуляторного обещания App Store внутри этого ZIP.'
        ]
      },
      common: {
        yes: 'Да',
        no: 'Нет',
        unknown: 'Не указано',
        none: 'Нет',
        viewSource: 'Открыть источник',
        productGuideTitle: 'О карточках порций',
        productGuideBody: 'Карточки “маленькая / нормальная / большая” привязаны к конкретному продукту. Они помогают унифицировать использование инструмента, но не заменяют реально съеденное количество.',
        familyAll: 'Все',
        cuisineAll: 'Все',
        remove: 'Убрать',
        bandFloor: 'минимальный уровень осторожности',
        saveSuccess: 'Запись сохранена.',
        noFoodFound: 'По текущим фильтрам ничего не найдено.',
        meal: 'Приём пищи',
        snack: 'Перекус',
        allSourcesTitle: 'Основные источники',
      }
    }
  };

  const state = {
    lang: localStorage.getItem(STORAGE_KEYS.language) || 'fr',
    page: 'build',
    filters: {
      search: '',
      cuisineType: 'all',
      family: 'all',
      productId: null,
    },
    settings: {
      doseMgDay: 60,
      daysSinceStart: 14,
      within14dAfterStop: false,
      mealTime: defaultMealTime(),
      entryType: 'meal',
      alcohol: false,
      emptyStomach: false,
      brandKnown: true,
      artisanal: false,
      homemade: false,
      liveFermented: false,
      veryRipe: false,
      refrigerationDoubt: false,
    },
    selectedPortionKey: 'normal',
    exactQty: null,
    meal: [],
    savedDay: loadSavedDay(),
  };

  function defaultMealTime(){
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    return `${hh}:${mm}`;
  }

  function loadSavedDay(){
    try{
      const raw = localStorage.getItem(STORAGE_KEYS.savedDay);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      const today = new Date().toISOString().slice(0,10);
      return Array.isArray(parsed) ? parsed.filter(item => item.date === today) : [];
    }catch(e){
      return [];
    }
  }

  function persistSavedDay(){
    localStorage.setItem(STORAGE_KEYS.savedDay, JSON.stringify(state.savedDay));
  }

  function setLanguage(lang){
    state.lang = lang;
    localStorage.setItem(STORAGE_KEYS.language, lang);
    renderAll();
  }

  function currentTexts(){ return t[state.lang] || t.fr; }
  function txt(path){
    const parts = path.split('.');
    let cur = currentTexts();
    for (const part of parts){
      cur = cur?.[part];
    }
    return cur ?? path;
  }

  function allFamilies(){
    return [...new Set(DATA.foods.map(item => item.family))].sort((a,b) => a.localeCompare(b, state.lang));
  }

  function allCuisineTypes(){
    return [...new Set(DATA.foods.map(item => item.cuisine_type))].sort((a,b) => a.localeCompare(b, state.lang));
  }

  function displayName(item){
    return item.names[state.lang] || item.names.fr || item.names.en;
  }

  function familyComparator(a,b){ return a.localeCompare(b, state.lang); }

  function filteredFoods(){
    let foods = DATA.foods.slice();
    if (state.filters.cuisineType !== 'all'){
      foods = foods.filter(item => item.cuisine_type === state.filters.cuisineType);
    }
    if (state.filters.family !== 'all'){
      foods = foods.filter(item => item.family === state.filters.family);
    }
    const q = state.filters.search.trim().toLowerCase();
    if (q){
      foods = foods.filter(item => {
        const hay = [
          item.id,
          item.names.fr,
          item.names.en,
          item.names.ru,
          item.family,
          item.cuisine_type,
          item.cuisine_region_raw,
          item.process,
          item.restaurant_alias,
          ...(item.search_terms || [])
        ].filter(Boolean).join(' ').toLowerCase();
        return hay.includes(q);
      });
    }
    return foods.sort((a,b) => displayName(a).localeCompare(displayName(b), state.lang));
  }

  function currentFood(){
    const foods = filteredFoods();
    if (!foods.length) return null;
    let found = foods.find(item => item.id === state.filters.productId);
    if (!found){
      found = foods[0];
      state.filters.productId = found.id;
      syncQtyToCurrentFood();
    }
    return found;
  }

  function syncQtyToCurrentFood(){
    const item = currentFood();
    if (!item) return;
    const profile = item.portion_profile?.[state.selectedPortionKey] || item.portion_profile?.normal;
    if (!profile) return;
    const defaultQty = item.portion_profile?.default_qty ?? midpoint(profile.min, profile.max);
    state.exactQty = defaultQty;
  }

  function midpoint(min, max){
    if (typeof min !== 'number' && typeof max === 'number') return max;
    if (typeof max !== 'number' && typeof min === 'number') return min;
    return ((min + max) / 2);
  }

  function qtyValueOrDefault(item){
    if (typeof state.exactQty === 'number' && !Number.isNaN(state.exactQty)) return state.exactQty;
    return item?.portion_profile?.default_qty ?? item?.portion_standard?.value ?? 0;
  }

  function getDoseFactor(dose){
    const factors = DATA.rules?.dose_factors || [];
    for (const row of factors){
      if (dose >= row.min && dose <= row.max) return row.factor;
    }
    return 1;
  }

  function getDurationFactor(days, withinStopWindow){
    if (withinStopWindow) return 1;
    const factors = DATA.rules?.duration_factors || [];
    for (const row of factors){
      if (days >= row.min_days && days <= row.max_days) return row.factor;
    }
    return 1;
  }

  function bandFromWeighted(weighted){
    if (weighted >= 6) return 'black';
    if (weighted >= 4) return 'red';
    if (weighted >= 2) return 'orange';
    return 'green_limited';
  }

  function maxBand(a,b){
    return BAND_ORDER[a] >= BAND_ORDER[b] ? a : b;
  }

  function makeBandFloor(item, effectiveMg, flags){
    let floor = 'green_limited';
    const proteinFermented = ['Fromages','Charcuteries / viandes affinées','Poissons / fruits de mer','Soja / légumineuses fermentés'].includes(item.family);
    if (item.flags.special_lock) return 'black';
    if (item.confidence === 'D') floor = maxBand(floor, 'orange');
    if (item.flags.label_restricted && item.confidence === 'D') floor = 'black';
    if (item.flags.label_restricted && proteinFermented && (flags.artisanal || flags.homemade || flags.liveFermented || flags.refrigerationDoubt)) floor = 'black';
    if (item.flags.label_restricted && effectiveMg >= 4) floor = maxBand(floor, 'red');
    if (item.flags.label_restricted && (effectiveMg >= 2 || item.variability === 'forte')) floor = maxBand(floor, 'orange');
    if (item.flags.label_restricted && floor === 'green_limited') floor = 'orange';
    return floor;
  }

  function mgForQty(item, qty, point){
    const qtyBase = Number(qty);
    if (!Number.isFinite(qtyBase)) return null;
    const unit = item.portion_standard?.unit || 'g';
    const mg100 = item.mg100?.[point];
    if (typeof mg100 === 'number') {
      return round2((mg100 * qtyBase) / 100);
    }
    const mgPortion = item.mg_per_portion?.[point];
    const standardValue = item.portion_standard?.value;
    if (typeof mgPortion === 'number' && typeof standardValue === 'number' && standardValue > 0 && unit !== 'g' && unit !== 'mL') {
      return round2(mgPortion * (qtyBase / standardValue));
    }
    return null;
  }

  function isStrongUncertainty(item, flags){
    return item.confidence === 'D'
      || item.variability === 'forte'
      || flags.artisanal
      || flags.homemade
      || flags.liveFermented
      || flags.veryRipe
      || flags.refrigerationDoubt
      || !flags.brandKnown;
  }

  function assessItem(item, qty, flags){
    const mgLow = coalesceNumber(mgForQty(item, qty, 'low'), mgForQty(item, qty, 'typ'), mgForQty(item, qty, 'high'));
    const mgTyp = coalesceNumber(mgForQty(item, qty, 'typ'), mgForQty(item, qty, 'high'), mgForQty(item, qty, 'low'));
    const mgHigh = coalesceNumber(mgForQty(item, qty, 'high'), mgForQty(item, qty, 'typ'), mgForQty(item, qty, 'low'));
    const uncertainty = isStrongUncertainty(item, flags);
    let selectedPoint = 'typ';
    let effectiveMg = mgTyp;
    const reasons = [];
    if (item.confidence === 'D'){
      selectedPoint = 'high';
      effectiveMg = mgHigh;
      reasons.push('confidence D');
    } else if (flags.artisanal || flags.homemade || flags.liveFermented || flags.veryRipe || flags.refrigerationDoubt){
      selectedPoint = 'high';
      effectiveMg = mgHigh;
      reasons.push('prudence contextuelle');
    } else if (!flags.brandKnown && item.variability === 'forte'){
      selectedPoint = 'high';
      effectiveMg = mgHigh;
      reasons.push('marque inconnue + forte variabilité');
    } else if (!flags.brandKnown){
      selectedPoint = 'typ';
      effectiveMg = mgTyp;
      reasons.push('marque inconnue');
    } else {
      reasons.push('valeur typique');
    }

    if (item.flags.special_lock){
      reasons.push('verrou spécifique');
      effectiveMg = coalesceNumber(mgHigh, mgTyp, mgLow, 0);
    }

    const floorBand = makeBandFloor(item, effectiveMg ?? 0, flags);

    return {
      item,
      qty,
      flags,
      mgLow,
      mgTyp,
      mgHigh,
      effectiveMg: effectiveMg ?? 0,
      selectedPoint,
      uncertainty,
      reasons,
      floorBand,
      displayName: displayName(item),
    };
  }

  function assessMeal(items, settings){
    const assessedItems = items.map(row => {
      const item = findFood(row.foodId);
      return assessItem(item, row.qty, row.flags);
    });

    const totals = assessedItems.reduce((acc, row) => {
      acc.low += row.mgLow || 0;
      acc.typ += row.mgTyp || 0;
      acc.high += row.mgHigh || 0;
      acc.effective += row.effectiveMg || 0;
      if (row.uncertainty) acc.uncertainty = true;
      acc.floorBand = maxBand(acc.floorBand, row.floorBand);
      return acc;
    }, { low:0, typ:0, high:0, effective:0, uncertainty:false, floorBand:'green_limited' });

    const doseFactor = getDoseFactor(settings.doseMgDay);
    const durationFactor = getDurationFactor(settings.daysSinceStart, settings.within14dAfterStop);
    const alcoholFactor = settings.alcohol ? (DATA.rules?.alcohol_context_factor || 1.05) : 1;
    const fastingFactor = settings.emptyStomach ? (DATA.rules?.fasting_factor || 1.10) : 1;
    const weighted = round2(totals.effective * doseFactor * durationFactor * alcoholFactor * fastingFactor);
    let band = bandFromWeighted(weighted);
    band = maxBand(band, totals.floorBand);

    const overlapIndex = computeOverlapIndex(assessedItems, settings);
    return {
      items: assessedItems,
      totals: {
        low: round2(totals.low),
        typ: round2(totals.typ),
        high: round2(totals.high),
        effective: round2(totals.effective),
        weighted,
      },
      doseFactor,
      durationFactor,
      alcoholFactor,
      fastingFactor,
      uncertainty: totals.uncertainty,
      overlapIndex,
      band,
    };
  }

  function computeOverlapIndex(assessedItems, settings){
    if (!assessedItems.length) return '—';
    const base = assessedItems.reduce((sum, row) => sum + row.effectiveMg, 0);
    const itemsFactor = assessedItems.length > 1 ? 1 + Math.min(0.45, (assessedItems.length - 1) * 0.12) : 1;
    const timeFactor = settings.entryType === 'snack' ? 0.95 : 1;
    const overlap = base * itemsFactor * timeFactor;
    if (overlap >= 10) return 'élevé';
    if (overlap >= 4) return 'modéré';
    return 'faible';
  }

  function coalesceNumber(){
    for (const value of arguments){
      if (typeof value === 'number' && Number.isFinite(value)) return value;
    }
    return null;
  }

  function round2(value){
    return Math.round((value + Number.EPSILON) * 100) / 100;
  }

  function findFood(id){
    return DATA.foods.find(item => item.id === id);
  }

  function currentFlags(){
    return {
      brandKnown: !!state.settings.brandKnown,
      artisanal: !!state.settings.artisanal,
      homemade: !!state.settings.homemade,
      liveFermented: !!state.settings.liveFermented,
      veryRipe: !!state.settings.veryRipe,
      refrigerationDoubt: !!state.settings.refrigerationDoubt,
    };
  }

  function currentBuilderAssessment(){
    const item = currentFood();
    if (!item) return null;
    const qty = qtyValueOrDefault(item);
    const liveItems = state.meal.length ? state.meal.slice() : [{
      foodId: item.id,
      qty,
      portionKey: state.selectedPortionKey,
      flags: currentFlags(),
    }];
    return assessMeal(liveItems, state.settings);
  }

  function saveCurrentEntry(forceSnack){
    const item = currentFood();
    if (!item) return;
    const items = state.meal.length ? state.meal.slice() : [{
      foodId: item.id,
      qty: qtyValueOrDefault(item),
      portionKey: state.selectedPortionKey,
      flags: currentFlags(),
    }];
    const entryType = forceSnack ? 'snack' : state.settings.entryType;
    const assessment = assessMeal(items, { ...state.settings, entryType });
    state.savedDay.push({
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random()),
      date: new Date().toISOString().slice(0,10),
      time: state.settings.mealTime,
      entryType,
      settingsSnapshot: {
        doseMgDay: state.settings.doseMgDay,
        daysSinceStart: state.settings.daysSinceStart,
        within14dAfterStop: state.settings.within14dAfterStop,
        alcohol: state.settings.alcohol,
        emptyStomach: state.settings.emptyStomach,
      },
      items,
      assessment: {
        totals: assessment.totals,
        band: assessment.band,
        uncertainty: assessment.uncertainty,
      },
    });
    state.savedDay.sort((a,b) => a.time.localeCompare(b.time));
    persistSavedDay();
    state.meal = [];
    renderAll();
    flashMessage(txt('common.saveSuccess'));
  }

  function flashMessage(message){
    const banner = document.getElementById('scope-banner');
    if (!banner) return;
    const original = banner.innerHTML;
    banner.innerHTML = `<strong>${escapeHtml(message)}</strong>`;
    setTimeout(() => {
      banner.innerHTML = escapeHtml(txt('scopeBanner'));
    }, 1200);
  }

  function removeSavedEntry(id){
    state.savedDay = state.savedDay.filter(item => item.id !== id);
    persistSavedDay();
    renderAll();
  }

  function addCurrentToMeal(){
    const item = currentFood();
    if (!item) return;
    state.meal.push({
      foodId: item.id,
      qty: qtyValueOrDefault(item),
      portionKey: state.selectedPortionKey,
      flags: currentFlags(),
    });
    renderAll();
  }

  function removeMealItem(index){
    state.meal.splice(index, 1);
    renderAll();
  }

  function clearMeal(){
    state.meal = [];
    renderAll();
  }

  function bindGlobalControls(){
    document.getElementById('language-select').addEventListener('change', (e) => setLanguage(e.target.value));
    document.getElementById('modal-overlay').addEventListener('click', closeModal);
    document.getElementById('modal-close').addEventListener('click', closeModal);
  }

  function closeModal(){
    document.getElementById('modal-overlay').classList.add('hidden');
    document.getElementById('modal').classList.add('hidden');
  }

  function openModal(title, body){
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').innerHTML = body;
    document.getElementById('modal-overlay').classList.remove('hidden');
    document.getElementById('modal').classList.remove('hidden');
  }

  function escapeHtml(str){
    return String(str ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }

  function quantityUnit(item){
    return item?.portion_standard?.unit || item?.portion_profile?.normal?.unit || 'g';
  }

  function renderStaticSkeleton(){
    document.getElementById('brand-eyebrow').textContent = txt('eyebrow');
    document.getElementById('app-title').textContent = txt('title');
    document.getElementById('app-subtitle').textContent = txt('subtitle');
    document.getElementById('scope-banner').textContent = txt('scopeBanner');
    document.getElementById('lang-label').textContent = txt('language');

    const langSelect = document.getElementById('language-select');
    langSelect.innerHTML = '';
    [['fr','Français'],['en','English'],['ru','Русский']].forEach(([value,label]) => {
      const opt = document.createElement('option');
      opt.value = value;
      opt.textContent = label;
      opt.selected = value === state.lang;
      langSelect.appendChild(opt);
    });

    const tabs = document.getElementById('page-tabs');
    tabs.innerHTML = PAGE_IDS.map(id => `
      <button class="page-tab ${state.page === id ? 'active' : ''}" data-page="${id}">${escapeHtml(txt(`tabs.${id}`))}</button>
    `).join('');
    tabs.querySelectorAll('[data-page]').forEach(btn => btn.addEventListener('click', () => {
      state.page = btn.dataset.page;
      renderAll();
    }));

    renderBuildPage();
    renderInfoPage();
    renderMorePage();

    PAGE_IDS.forEach(id => {
      document.getElementById(`page-${id}`).classList.toggle('active', state.page === id);
    });
  }

  function renderBuildPage(){
    const page = document.getElementById('page-build');
    const foods = filteredFoods();
    const item = currentFood();

    page.innerHTML = `
      <div class="card">
        <div class="card-title-row">
          <div>
            <h2 class="card-title">${escapeHtml(txt('build.settingsTitle'))}</h2>
            <p class="card-subtitle">${escapeHtml(txt('build.settingsSubtitle'))}</p>
          </div>
        </div>
        <div class="grid grid-2">
          <div class="grid grid-2">
            ${renderFieldSelect('dose-select', txt('build.dose'), [30,45,60,75,90], state.settings.doseMgDay, value => `${value} mg/j`)}
            ${renderFieldInput('days-input', txt('build.daysSinceStart'), 'number', state.settings.daysSinceStart, {min:0, max:3650, step:1})}
            ${renderToggle('stop-toggle', txt('build.stopWindow'), state.settings.within14dAfterStop)}
            ${renderFieldInput('time-input', txt('build.mealTime'), 'time', state.settings.mealTime, {})}
            ${renderFieldSelect('entry-type-select', txt('build.entryType'), ['meal','snack'], state.settings.entryType, value => value === 'meal' ? txt('common.meal') : txt('common.snack'))}
            ${renderToggle('alcohol-toggle', txt('build.alcohol'), state.settings.alcohol)}
            ${renderToggle('empty-toggle', txt('build.emptyStomach'), state.settings.emptyStomach)}
            ${renderToggle('brand-toggle', txt('build.brandKnown'), state.settings.brandKnown)}
            ${renderToggle('artisanal-toggle', txt('build.artisanal'), state.settings.artisanal)}
            ${renderToggle('homemade-toggle', txt('build.homemade'), state.settings.homemade)}
            ${renderToggle('live-toggle', txt('build.liveFermented'), state.settings.liveFermented)}
            ${renderToggle('ripe-toggle', txt('build.veryRipe'), state.settings.veryRipe)}
            ${renderToggle('cold-toggle', txt('build.refrigerationDoubt'), state.settings.refrigerationDoubt)}
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title-row">
          <div>
            <h2 class="card-title">${escapeHtml(txt('build.filtersTitle'))}</h2>
            <p class="card-subtitle">${escapeHtml(txt('build.filtersSubtitle'))}</p>
          </div>
          <div class="badge">${foods.length} ${escapeHtml(txt('build.visibleFoods'))}</div>
        </div>
        <div class="grid grid-2">
          ${renderFieldInput('search-input', txt('build.search'), 'text', state.filters.search, {placeholder: txt('build.searchPlaceholder')})}
          ${renderFieldSelect('cuisine-select', txt('build.cuisine'), ['all', ...allCuisineTypes()], state.filters.cuisineType, value => value === 'all' ? txt('common.cuisineAll') : value)}
          ${renderFieldSelect('family-select', txt('build.family'), ['all', ...allFamilies()], state.filters.family, value => value === 'all' ? txt('common.familyAll') : value)}
          ${renderProductSelect(item, foods)}
        </div>
      </div>

      ${item ? renderPortionCard(item) : `<div class="card"><div class="empty">${escapeHtml(txt('common.noFoodFound'))}</div></div>`}
      ${renderCurrentMealCard(item)}
      ${renderAssessmentCard(item)}
      ${renderDetailCard(item)}
      ${renderMealGraphCard(item)}
      ${renderSavedDayCard()}
    `;

    bindBuildPageEvents();
  }

  function renderFieldSelect(id, label, values, selectedValue, labelFn){
    const options = values.map(value => `<option value="${escapeHtml(value)}" ${String(value) === String(selectedValue) ? 'selected' : ''}>${escapeHtml(labelFn ? labelFn(value) : value)}</option>`).join('');
    return `<div class="field"><label for="${id}">${escapeHtml(label)}</label><select id="${id}">${options}</select></div>`;
  }

  function renderFieldInput(id, label, type, value, attrs){
    const attrsString = Object.entries(attrs || {}).map(([k,v]) => `${k}="${escapeHtml(v)}"`).join(' ');
    return `<div class="field"><label for="${id}">${escapeHtml(label)}</label><input id="${id}" type="${type}" value="${escapeHtml(value ?? '')}" ${attrsString}></div>`;
  }

  function renderToggle(id, label, checked){
    return `<div class="field-inline"><label for="${id}">${escapeHtml(label)}</label><input id="${id}" class="toggle" type="checkbox" ${checked ? 'checked' : ''}></div>`;
  }

  function renderProductSelect(item, foods){
    if (!foods.length){
      return `<div class="field"><label>${escapeHtml(txt('build.product'))}</label><select disabled><option>${escapeHtml(txt('common.noFoodFound'))}</option></select></div>`;
    }
    const options = foods.map(food => `<option value="${escapeHtml(food.id)}" ${food.id === item?.id ? 'selected' : ''}>${escapeHtml(displayName(food))}</option>`).join('');
    return `<div class="field"><label for="product-select">${escapeHtml(txt('build.product'))}</label><select id="product-select">${options}</select></div>`;
  }

  function renderPortionCard(item){
    const profile = item.portion_profile || {};
    const unit = quantityUnit(item);
    const cards = ['small','normal','large'].map(key => {
      const data = profile[key];
      if (!data) return '';
      return `
        <button class="portion-card ${state.selectedPortionKey === key ? 'selected' : ''} ${data.featured ? 'featured' : ''}" data-portion="${key}">
          <div class="portion-top">
            <div class="portion-title">${escapeHtml(data.label)}</div>
            ${data.featured ? `<span class="portion-chip">référence</span>` : ''}
          </div>
          <div class="portion-range">${escapeHtml(data.min)}–${escapeHtml(data.max)} ${escapeHtml(data.unit)}</div>
          <div class="portion-meta">${escapeHtml(displayName(item))}</div>
        </button>
      `;
    }).join('');
    return `
      <div class="card">
        <div class="card-title-row">
          <div>
            <h2 class="card-title">${escapeHtml(txt('build.portionTitle'))}</h2>
            <p class="card-subtitle">${escapeHtml(txt('build.portionSubtitle'))}</p>
          </div>
          <button class="info-button" id="portion-help" type="button">i</button>
        </div>
        <div class="portion-grid">${cards}</div>
        <div class="qty-row" style="margin-top:12px">
          ${renderFieldInput('qty-input', txt('build.exactQty'), 'number', qtyValueOrDefault(item), {step: item.portion_profile?.step ?? 1, min: 0})}
          <div class="field">
            <label>${escapeHtml(txt('build.unitHint'))}</label>
            <div class="metric-note">${escapeHtml(unit)}</div>
          </div>
        </div>
      </div>
    `;
  }

  function renderCurrentMealCard(item){
    const mealItemViews = state.meal.map((row, index) => {
      const food = findFood(row.foodId);
      return `<span class="meal-chip">${escapeHtml(displayName(food))} · ${escapeHtml(row.qty)} ${escapeHtml(quantityUnit(food))}<button data-remove-meal="${index}" aria-label="${escapeHtml(txt('common.remove'))}">×</button></span>`;
    }).join('');
    return `
      <div class="card">
        <div class="card-title-row">
          <div>
            <h2 class="card-title">${escapeHtml(txt('build.currentMealTitle'))}</h2>
            <p class="card-subtitle">${escapeHtml(txt('build.currentMealSubtitle'))}</p>
          </div>
        </div>
        <div class="action-row">
          <button class="btn primary" id="add-current-btn">${escapeHtml(txt('build.addCurrent'))}</button>
          <button class="btn warn" id="clear-meal-btn">${escapeHtml(txt('build.clearMeal'))}</button>
          <button class="btn subtle" id="save-entry-btn">${escapeHtml(txt('build.saveMeal'))}</button>
          <button class="btn subtle" id="save-snack-btn">${escapeHtml(txt('build.saveSnack'))}</button>
        </div>
        <div class="hr"></div>
        <div class="meal-chips">${mealItemViews || `<div class="empty">${escapeHtml(txt('build.currentMealEmpty'))}</div>`}</div>
      </div>
    `;
  }

  function renderAssessmentCard(item){
    const assessment = currentBuilderAssessment();
    if (!assessment || !item) return '';
    const band = assessment.band;
    const kpi = assessment.totals;
    const bandText = txt(`bands.${band}.hero`);
    const uncertaintyText = assessment.uncertainty ? txt('common.yes') : txt('common.no');
    return `
      <div class="card">
        <div class="card-title-row"><h2 class="card-title">${escapeHtml(txt('build.riskTitle'))}</h2></div>
        <div class="hero-band ${BAND_CLASSES[band]}">${escapeHtml(bandText)}</div>
        <div class="badge-row">
          <span class="badge">${escapeHtml(txt(`bands.${band}.name`))}</span>
          <span class="badge">${escapeHtml(txt('build.limitedGreenNotice'))}</span>
        </div>
        <div class="kpi-row" style="margin-top:12px">
          <div class="kpi">
            <div class="kpi-label">${escapeHtml(txt('kpi.lowTypHigh'))}</div>
            <div class="kpi-value">${escapeHtml(`${fmtMg(kpi.low)} / ${fmtMg(kpi.typ)} / ${fmtMg(kpi.high)}`)}</div>
          </div>
          <div class="kpi">
            <div class="kpi-label">${escapeHtml(txt('kpi.weighted'))}</div>
            <div class="kpi-value">${escapeHtml(fmtMg(kpi.weighted))}</div>
            <div class="kpi-small">dose × durée × contexte</div>
          </div>
          <div class="kpi">
            <div class="kpi-label">${escapeHtml(txt('kpi.band'))}</div>
            <div class="kpi-value">${escapeHtml(txt(`bands.${band}.short`))}</div>
          </div>
          <div class="kpi">
            <div class="kpi-label">${escapeHtml(txt('kpi.overlap'))}</div>
            <div class="kpi-value">${escapeHtml(String(assessment.overlapIndex))}</div>
          </div>
          <div class="kpi">
            <div class="kpi-label">${escapeHtml(txt('kpi.uncertainty'))}</div>
            <div class="kpi-value">${escapeHtml(uncertaintyText)}</div>
            <div class="kpi-small">${escapeHtml(fmtFactor(assessment.doseFactor))} · ${escapeHtml(fmtFactor(assessment.durationFactor))}</div>
          </div>
        </div>
      </div>
    `;
  }

  function fmtFactor(v){
    return `×${round2(v).toFixed(2)}`;
  }

  function fmtMg(v){
    const num = typeof v === 'number' ? round2(v) : 0;
    return `${num.toFixed(num < 10 ? 2 : 1)} mg`;
  }

  function renderDetailCard(item){
    if (!item) return '';
    const assessment = currentBuilderAssessment();
    if (!assessment) return '';
    const singleMode = assessment.items.length <= 1;
    const title = singleMode ? txt('build.detailsTitleSingle') : txt('build.detailsTitleMeal');
    const content = singleMode ? renderSingleFoodDetail(assessment.items[0]) : renderMealDetailTable(assessment);
    return `
      <div class="card">
        <div class="card-title-row"><h2 class="card-title">${escapeHtml(title)}</h2></div>
        ${content}
      </div>
    `;
  }

  function renderSingleFoodDetail(row){
    const item = row.item;
    return `
      <div class="grid grid-2">
        <div class="metric-note">
          <strong>${escapeHtml(displayName(item))}</strong><br>
          <span class="small">${escapeHtml(item.names.fr)}</span>
          <div class="hr"></div>
          <div><strong>${escapeHtml(txt('build.familyLabel'))} :</strong> ${escapeHtml(item.family)}</div>
          <div><strong>${escapeHtml(txt('build.cuisineLabel'))} :</strong> ${escapeHtml(item.cuisine_type)}</div>
          <div><strong>${escapeHtml(txt('build.processLabel'))} :</strong> ${escapeHtml(item.process || txt('common.unknown'))}</div>
          <div><strong>${escapeHtml(txt('build.fdaLabel'))} :</strong> ${escapeHtml(item.fda_category || txt('common.unknown'))}</div>
          <div><strong>${escapeHtml(txt('build.standardPortion'))} :</strong> ${escapeHtml(item.portion_standard.label || txt('common.unknown'))}</div>
          <div><strong>${escapeHtml(txt('build.quantityLabel'))} :</strong> ${escapeHtml(row.qty)} ${escapeHtml(quantityUnit(item))}</div>
        </div>
        <div class="metric-note">
          <div><strong>${escapeHtml(txt('build.rangeLabel'))} :</strong> ${escapeHtml(`${fmtMg(row.mgLow || 0)} · ${fmtMg(row.mgTyp || 0)} · ${fmtMg(row.mgHigh || 0)}`)}</div>
          <div><strong>${escapeHtml(txt('build.effectiveLabel'))} :</strong> ${escapeHtml(fmtMg(row.effectiveMg))}</div>
          <div><strong>${escapeHtml(txt('build.reasonLabel'))} :</strong> ${escapeHtml(row.reasons.join(' · '))}</div>
          <div><strong>${escapeHtml(txt('build.confidence'))} :</strong> ${escapeHtml(item.confidence)}</div>
          <div><strong>${escapeHtml(txt('build.variability'))} :</strong> ${escapeHtml(item.variability)}</div>
          <div><strong>${escapeHtml(txt('build.restrictedLabel'))} :</strong> ${escapeHtml(txt(`bands.${row.floorBand}.short`))} (${escapeHtml(txt('common.bandFloor'))})</div>
          ${item.supplemental_note ? `<div class="small" style="margin-top:8px">${escapeHtml(item.supplemental_note)}</div>` : ''}
          <div class="small" style="margin-top:8px"><a href="${escapeHtml(item.source_url)}" target="_blank" rel="noreferrer">${escapeHtml(txt('build.source'))}</a></div>
        </div>
      </div>
    `;
  }

  function renderMealDetailTable(assessment){
    const rows = assessment.items.map(row => `
      <tr>
        <td>${escapeHtml(displayName(row.item))}</td>
        <td>${escapeHtml(row.qty)} ${escapeHtml(quantityUnit(row.item))}</td>
        <td>${escapeHtml(`${fmtMg(row.mgLow || 0)} / ${fmtMg(row.mgTyp || 0)} / ${fmtMg(row.mgHigh || 0)}`)}</td>
        <td>${escapeHtml(fmtMg(row.effectiveMg))}</td>
        <td>${escapeHtml(txt(`bands.${row.floorBand}.short`))}</td>
      </tr>
    `).join('');
    return `
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>${escapeHtml(txt('build.product'))}</th>
              <th>${escapeHtml(txt('build.quantityLabel'))}</th>
              <th>${escapeHtml(txt('build.rangeLabel'))}</th>
              <th>${escapeHtml(txt('build.effectiveLabel'))}</th>
              <th>${escapeHtml(txt('build.restrictedLabel'))}</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <div class="small" style="margin-top:10px"><strong>${escapeHtml(txt('build.mealSummary'))} :</strong> ${escapeHtml(fmtMg(assessment.totals.weighted))}</div>
    `;
  }

  function renderMealGraphCard(item){
    const assessment = currentBuilderAssessment();
    if (!assessment || !item) return '';
    return `
      <div class="card graph-card">
        <div class="card-title-row">
          <div>
            <h2 class="card-title">${escapeHtml(txt('build.graphTitle'))}</h2>
            <p class="card-subtitle">${escapeHtml(txt('build.graphSubtitle'))}</p>
          </div>
        </div>
        ${makeExposureSvg(assessment.items, null)}
      </div>
    `;
  }

  function renderSavedDayCard(){
    const entriesHtml = state.savedDay.length ? state.savedDay.map(entry => renderSavedEntry(entry)).join('') : `<div class="empty">${escapeHtml(txt('build.noSaved'))}</div>`;
    return `
      <div class="card graph-card">
        <div class="card-title-row">
          <div>
            <h2 class="card-title">${escapeHtml(txt('build.dayTitle'))}</h2>
            <p class="card-subtitle">${escapeHtml(txt('build.daySubtitle'))}</p>
          </div>
        </div>
        ${entriesHtml}
        <div class="hr"></div>
        <div>
          <h3 class="card-title" style="font-size:16px;margin-bottom:10px">${escapeHtml(txt('build.savedExposureTitle'))}</h3>
          ${state.savedDay.length ? makeDailyExposureSvg(state.savedDay) : `<div class="empty">${escapeHtml(txt('build.noSaved'))}</div>`}
        </div>
      </div>
    `;
  }

  function renderSavedEntry(entry){
    const names = entry.items.map(row => displayName(findFood(row.foodId))).join(' · ');
    return `
      <div class="metric-note" style="margin-bottom:10px">
        <div style="display:flex;justify-content:space-between;gap:10px;align-items:flex-start">
          <div>
            <strong>${escapeHtml(entry.entryType === 'snack' ? txt('common.snack') : txt('common.meal'))}</strong> · ${escapeHtml(entry.time)}<br>
            <span class="small">${escapeHtml(names)}</span>
          </div>
          <div class="action-row">
            <span class="badge">${escapeHtml(txt(`bands.${entry.assessment.band}.short`))}</span>
            <button class="btn warn" data-remove-saved="${escapeHtml(entry.id)}">${escapeHtml(txt('build.delete'))}</button>
          </div>
        </div>
        <div class="small" style="margin-top:8px">${escapeHtml(fmtMg(entry.assessment.totals.weighted))} · ${entry.assessment.uncertainty ? escapeHtml(txt('common.yes')) : escapeHtml(txt('common.no'))}</div>
      </div>
    `;
  }

  function makeExposureSvg(rows, offsetHours){
    const width = 1040;
    const height = 310;
    const pad = { l: 48, r: 20, t: 18, b: 34 };
    const pointsPerSeries = 81;
    const hours = Array.from({ length: pointsPerSeries }, (_, idx) => idx * (8 / (pointsPerSeries - 1)));
    const colors = ['#d8b055','#6ea8ff','#9dd39c','#f2a65a','#c18df2','#83d8d1'];
    const series = rows.map((row, index) => {
      const offset = typeof offsetHours === 'number' ? offsetHours : 0;
      return {
        label: row.displayName,
        color: colors[index % colors.length],
        values: hours.map(h => gammaExposure(row.effectiveMg, h + offset)),
      };
    });
    const total = hours.map((_, idx) => series.reduce((sum, s) => sum + s.values[idx], 0));
    const maxY = Math.max(2, ...total, ...series.flatMap(s => s.values)) * 1.18;
    const x = h => pad.l + (h / 8) * (width - pad.l - pad.r);
    const y = v => height - pad.b - (v / maxY) * (height - pad.t - pad.b);
    const grid = [0,2,4,6,8].map(h => `<line x1="${x(h)}" y1="${pad.t}" x2="${x(h)}" y2="${height-pad.b}" stroke="rgba(255,255,255,.06)"/>`).join('')
      + [0,0.25,0.5,0.75,1].map(p => {
        const val = maxY * p;
        return `<line x1="${pad.l}" y1="${y(val)}" x2="${width-pad.r}" y2="${y(val)}" stroke="rgba(255,255,255,.06)"/>`;
      }).join('');
    const labels = [0,2,4,6,8].map(h => `<text x="${x(h)-6}" y="${height-10}" fill="#9fb0d6" font-size="12">${h}h</text>`).join('');
    const yLabels = [0,0.25,0.5,0.75,1].map(p => {
      const val = maxY * p;
      return `<text x="10" y="${y(val)+4}" fill="#9fb0d6" font-size="12">${Math.round(val)}</text>`;
    }).join('');
    const seriesPaths = series.map(s => `<path d="${pathFromValues(hours, s.values, x, y)}" fill="none" stroke="${s.color}" stroke-width="1.8" opacity="0.82"/>`).join('');
    const totalPath = `<path d="${pathFromValues(hours, total, x, y)}" fill="none" stroke="#ffffff" stroke-width="3"/>`;
    return `
      <svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${width}" height="${height}" fill="#091327"/>
        <rect x="${pad.l}" y="${pad.t}" width="${width-pad.l-pad.r}" height="${height-pad.t-pad.b}" fill="rgba(255,255,255,.015)"/>
        ${grid}
        <line x1="${pad.l}" y1="${height-pad.b}" x2="${width-pad.r}" y2="${height-pad.b}" stroke="rgba(255,255,255,.24)"/>
        <line x1="${pad.l}" y1="${pad.t}" x2="${pad.l}" y2="${height-pad.b}" stroke="rgba(255,255,255,.24)"/>
        ${seriesPaths}
        ${totalPath}
        ${labels}
        ${yLabels}
      </svg>
    `;
  }

  function makeDailyExposureSvg(entries){
    const width = 1040;
    const height = 320;
    const pad = { l: 48, r: 20, t: 18, b: 34 };
    const hours = Array.from({ length: 145 }, (_, idx) => idx * (24 / 144));
    const series = entries.map((entry, index) => {
      const eventHour = toHour(entry.time);
      const amp = entry.assessment.totals.weighted;
      const colorPool = ['#d8b055','#6ea8ff','#9dd39c','#f2a65a','#c18df2','#83d8d1','#ff8e72'];
      return {
        color: colorPool[index % colorPool.length],
        values: hours.map(hour => hour < eventHour ? 0 : gammaExposure(amp, hour - eventHour)),
      };
    });
    const total = hours.map((_, idx) => series.reduce((sum, s) => sum + s.values[idx], 0));
    const maxY = Math.max(2, ...total) * 1.18;
    const x = h => pad.l + (h / 24) * (width - pad.l - pad.r);
    const y = v => height - pad.b - (v / maxY) * (height - pad.t - pad.b);
    const hourTicks = [0,4,8,12,16,20,24];
    const grid = hourTicks.map(h => `<line x1="${x(h)}" y1="${pad.t}" x2="${x(h)}" y2="${height-pad.b}" stroke="rgba(255,255,255,.06)"/>`).join('');
    const labels = hourTicks.map(h => `<text x="${x(h)-8}" y="${height-10}" fill="#9fb0d6" font-size="12">${String(h).padStart(2,'0')}</text>`).join('');
    const seriesPaths = series.map(s => `<path d="${pathFromValues(hours, s.values, x, y)}" fill="none" stroke="${s.color}" stroke-width="1.6" opacity="0.72"/>`).join('');
    const totalPath = `<path d="${pathFromValues(hours, total, x, y)}" fill="none" stroke="#ffffff" stroke-width="3"/>`;
    return `
      <svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${width}" height="${height}" fill="#091327"/>
        <rect x="${pad.l}" y="${pad.t}" width="${width-pad.l-pad.r}" height="${height-pad.t-pad.b}" fill="rgba(255,255,255,.015)"/>
        ${grid}
        <line x1="${pad.l}" y1="${height-pad.b}" x2="${width-pad.r}" y2="${height-pad.b}" stroke="rgba(255,255,255,.24)"/>
        <line x1="${pad.l}" y1="${pad.t}" x2="${pad.l}" y2="${height-pad.b}" stroke="rgba(255,255,255,.24)"/>
        ${seriesPaths}
        ${totalPath}
        ${labels}
      </svg>
    `;
  }

  function gammaExposure(amplitude, hour){
    if (hour < 0) return 0;
    const shape = 2.1;
    const scale = 1.25;
    const base = Math.pow(hour + 0.02, shape) * Math.exp(-hour / scale);
    return amplitude * base;
  }

  function pathFromValues(hours, values, xFn, yFn){
    return values.map((value, idx) => `${idx === 0 ? 'M' : 'L'}${xFn(hours[idx]).toFixed(2)},${yFn(value).toFixed(2)}`).join(' ');
  }

  function toHour(time){
    const [hh, mm] = String(time || '00:00').split(':').map(Number);
    return (hh || 0) + ((mm || 0) / 60);
  }

  function renderInfoPage(){
    const page = document.getElementById('page-info');
    const cards = currentTexts().info.cards.map((card, index) => `
      <div class="info-box">
        <div class="info-box-head">
          <h3>${escapeHtml(card.title)}</h3>
          <button class="info-button" data-info-index="${index}">i</button>
        </div>
        <p>${escapeHtml(card.body)}</p>
      </div>
    `).join('');
    page.innerHTML = `
      <div class="card">
        <div class="card-title-row">
          <div>
            <h2 class="card-title">${escapeHtml(txt('info.title'))}</h2>
            <p class="card-subtitle">${escapeHtml(txt('info.subtitle'))}</p>
          </div>
        </div>
        <div class="info-grid">${cards}</div>
      </div>
    `;
    page.querySelectorAll('[data-info-index]').forEach(btn => {
      btn.addEventListener('click', () => {
        const card = currentTexts().info.cards[Number(btn.dataset.infoIndex)];
        openModal(card.title, `<p>${escapeHtml(card.detail)}</p>`);
      });
    });
  }

  function renderMorePage(){
    const wordingRows = DATA.sheets?.Wording_patient || [];
    const methodRows = DATA.sheets?.Methode_limitations || [];
    const sourceRows = (DATA.sheets?.Sources || []).slice(2, 10);
    const doneItems = currentTexts().more.doneItems.map(item => `<li>${escapeHtml(item)}</li>`).join('');
    const notDoneItems = currentTexts().more.notDoneItems.map(item => `<li>${escapeHtml(item)}</li>`).join('');
    const sourceHtml = sourceRows.map(row => `
      <div class="source-item">
        <strong>${escapeHtml(row[1] || row[0] || '')}</strong>
        <div class="small">${escapeHtml(row[3] || '')}</div>
        ${row[2] ? `<div class="small"><a href="${escapeHtml(row[2])}" target="_blank" rel="noreferrer">${escapeHtml(txt('common.viewSource'))}</a></div>` : ''}
      </div>
    `).join('');
    const pageMoreHtml = `
      <div class="card">
        <div class="card-title-row">
          <div>
            <h2 class="card-title">${escapeHtml(txt('more.title'))}</h2>
            <p class="card-subtitle">${escapeHtml(txt('more.subtitle'))}</p>
          </div>
        </div>

        <div class="alert-strong">
          <strong>${escapeHtml(txt('more.emergencyTitle'))}</strong><br>${escapeHtml(txt('more.emergencyBody'))}
        </div>

        <div class="grid grid-2" style="margin-top:12px">
          <div class="warning-soft">
            <strong>${escapeHtml(txt('more.disclaimerTitle'))}</strong><br><br>
            ${escapeHtml((wordingRows[5]?.[0] || '') + ' ' + (wordingRows[6]?.[0] || ''))}
          </div>
          <div class="metric-note">
            <strong>${escapeHtml(txt('more.limitsTitle'))}</strong>
            <ul class="note-list">
              <li>${escapeHtml(methodRows[4]?.[1] || '')}</li>
              <li>${escapeHtml(methodRows[5]?.[1] || '')}</li>
              <li>${escapeHtml(methodRows[6]?.[1] || '')}</li>
              <li>${escapeHtml(methodRows[7]?.[1] || '')}</li>
            </ul>
          </div>
        </div>

        <div class="grid grid-2" style="margin-top:12px">
          <div class="metric-note">
            <strong>${escapeHtml(txt('more.doneTitle'))}</strong>
            <ul class="note-list">${doneItems}</ul>
          </div>
          <div class="metric-note">
            <strong>${escapeHtml(txt('more.notDoneTitle'))}</strong>
            <ul class="note-list">${notDoneItems}</ul>
          </div>
        </div>

        <div class="card-title-row" style="margin-top:14px">
          <h3 class="card-title" style="font-size:16px">${escapeHtml(txt('common.allSourcesTitle'))}</h3>
        </div>
        <div class="source-list">${sourceHtml}</div>

        <div class="footer-note">
          ${escapeHtml(`Build: ${DATA.meta.version} · ${DATA.meta.food_count} foods · source ${DATA.meta.source_file}`)}
        </div>
      </div>
    `;
    const page = document.getElementById('page-more');
    page.innerHTML = pageMoreHtml;
  }

  function bindBuildPageEvents(){
    bindInput('dose-select', value => state.settings.doseMgDay = Number(value));
    bindInput('days-input', value => state.settings.daysSinceStart = Number(value));
    bindCheck('stop-toggle', value => state.settings.within14dAfterStop = value);
    bindInput('time-input', value => state.settings.mealTime = value);
    bindInput('entry-type-select', value => state.settings.entryType = value);
    bindCheck('alcohol-toggle', value => state.settings.alcohol = value);
    bindCheck('empty-toggle', value => state.settings.emptyStomach = value);
    bindCheck('brand-toggle', value => state.settings.brandKnown = value);
    bindCheck('artisanal-toggle', value => state.settings.artisanal = value);
    bindCheck('homemade-toggle', value => state.settings.homemade = value);
    bindCheck('live-toggle', value => state.settings.liveFermented = value);
    bindCheck('ripe-toggle', value => state.settings.veryRipe = value);
    bindCheck('cold-toggle', value => state.settings.refrigerationDoubt = value);

    bindInput('search-input', value => {
      state.filters.search = value;
      state.filters.productId = null;
      renderAll();
    });
    bindInput('cuisine-select', value => {
      state.filters.cuisineType = value;
      state.filters.productId = null;
      renderAll();
    });
    bindInput('family-select', value => {
      state.filters.family = value;
      state.filters.productId = null;
      renderAll();
    });
    bindInput('product-select', value => {
      state.filters.productId = value;
      syncQtyToCurrentFood();
      renderAll();
    });

    document.querySelectorAll('[data-portion]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.selectedPortionKey = btn.dataset.portion;
        const item = currentFood();
        const profile = item?.portion_profile?.[state.selectedPortionKey];
        if (profile) state.exactQty = midpoint(profile.min, profile.max);
        renderAll();
      });
    });

    bindInput('qty-input', value => {
      const parsed = Number(value);
      state.exactQty = Number.isFinite(parsed) ? parsed : 0;
      renderAll();
    });

    const portionHelp = document.getElementById('portion-help');
    if (portionHelp){
      portionHelp.addEventListener('click', () => openModal(txt('common.productGuideTitle'), `<p>${escapeHtml(txt('common.productGuideBody'))}</p>`));
    }

    const addCurrent = document.getElementById('add-current-btn');
    if (addCurrent) addCurrent.addEventListener('click', addCurrentToMeal);
    const clearBtn = document.getElementById('clear-meal-btn');
    if (clearBtn) clearBtn.addEventListener('click', clearMeal);
    const saveEntry = document.getElementById('save-entry-btn');
    if (saveEntry) saveEntry.addEventListener('click', () => saveCurrentEntry(false));
    const saveSnack = document.getElementById('save-snack-btn');
    if (saveSnack) saveSnack.addEventListener('click', () => saveCurrentEntry(true));

    document.querySelectorAll('[data-remove-meal]').forEach(btn => btn.addEventListener('click', () => removeMealItem(Number(btn.dataset.removeMeal))));
    document.querySelectorAll('[data-remove-saved]').forEach(btn => btn.addEventListener('click', () => removeSavedEntry(btn.dataset.removeSaved)));
  }

  function bindInput(id, cb){
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', e => cb(e.target.value));
    if (el && el.tagName === 'SELECT') el.addEventListener('change', e => cb(e.target.value));
  }

  function bindCheck(id, cb){
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', e => cb(e.target.checked));
  }

  function renderAll(){
    renderStaticSkeleton();
  }

  renderAll();
  bindGlobalControls();
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
  }
})();
