/* =====================================================================
   Taikomoji matematika – bendras skriptas visiems puslapiams

   Turinys:
   1. UI    – visi mygtukų ir navigacijos užrašai (LT ir EN)
   2. KURSAS – kurso struktūra: temos, egzaminai, modeliai, puslapiai
   3. Antraštė, kelias (breadcrumbs), poraštė, kalbos perjungiklis
   4. Pagrindinio puslapio struktūra ir modelių kortelės
   5. Sprendimo pavyzdžiai su žingsniais
   6. Testo klausimai
   7. Sąvokų iššokantys langeliai
   8. Interaktyvus tiesės brėžinys
   9. Formulės (KaTeX)
   ===================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     1. UI UŽRAŠAI
     ------------------------------------------------------------------ */
  var UI = {
    lt: {
      courseShort: 'Taikomoji matematika',
      courseFull: 'Taikomoji matematika socialiniuose moksluose',
      home: 'Pradžia',
      skip: 'Pereiti prie turinio',
      langLabel: 'Kalba',
      breadcrumbs: 'Naršymo kelias',
      topicN: function (n) { return n + ' tema'; },
      soon: 'Ruošiama',
      exam: 'Egzaminas',
      midterm: 'Tarpinis egzaminas',
      final: 'Baigiamasis egzaminas',
      open: 'Atidaryti',
      model: 'Modelis',
      models: 'Taikomieji modeliai',
      part: 'Skiltis',
      nextPart: 'Kita skiltis',
      back: 'Atgal',
      backTo: function (t) { return 'Atgal: ' + t; },
      nextModel: 'Kitas modelis',
      steps: 'Žingsniai',
      stepOf: function (i, n) { return 'Žingsniai: ' + i + ' iš ' + n; },
      nextStep: 'Kitas žingsnis',
      showAnswerStep: 'Rodyti atsakymą',
      showAll: 'Rodyti visus',
      restart: 'Iš naujo',
      question: function (n) { return n + ' klausimas'; },
      taskN: function (n) { return n + ' uždavinys'; },
      openQ: 'Skaičiavimo klausimas',
      mcQ: 'Pasirinkite atsakymą',
      minutes: function (m) { return '~' + m + ' min.'; },
      timeTitle: 'Rekomenduojamas sprendimo laikas',
      solveFirst: 'Pirmiausia išspręskite patys, tada pasitikrinkite.',
      showAnswer: 'Rodyti atsakymą',
      hideAnswer: 'Slėpti atsakymą',
      showSolution: 'Rodyti sprendimą',
      hideSolution: 'Slėpti sprendimą',
      answer: 'Atsakymas',
      solution: 'Sprendimas',
      explanation: 'Paaiškinimas',
      correct: 'Teisingai!',
      incorrect: 'Neteisingai. Teisingas atsakymas pažymėtas žaliai.',
      tryAgain: 'Bandyti dar kartą',
      draft: 'Juodraštis',
      tryIt: 'Pabandykite patys',
      tryItHint: 'Keiskite m ir b ir stebėkite, kaip keičiasi tiesė.',
      slopeUp: 'm > 0 – tiesė kyla',
      slopeDown: 'm < 0 – tiesė leidžiasi',
      slopeZero: 'm = 0 – tiesė horizontali',
      intercept: function (b) { return 'Tiesė kerta vertikalią ašį taške (0; ' + b + ')'; },
      decimal: ',',
      // Grafikų užrašai
      unitEur: 'Eur',
      unitQty: 'vnt.',
      unitYears: 'metai',
      demand: 'Paklausa (D)',
      supply: 'Pasiūla (S)',
      eqPoint: 'Pusiausvyros taškas (E)',
      marketChart: 'Paklausos ir pasiūlos tiesės ir pusiausvyros taškas E',
      revenue: 'Pajamos (R)',
      cost: 'Bendrosios sąnaudos (TC)',
      bePoint: 'Lūžio taškas',
      beLetter: 'L',
      lossZone: 'Nuostolis',
      profitZone: 'Pelnas',
      beChart: 'Pajamų ir bendrųjų sąnaudų tiesės ir lūžio taškas',
      meansChart: 'Gamybos būdų bendrųjų sąnaudų tiesės',
      lowestCost: 'Mažiausios sąnaudos',
      crossPoint: 'Susikirtimo taškas',
      cheapest: 'pigiausias'
    },
    en: {
      courseShort: 'Applied Mathematics',
      courseFull: 'Applied Mathematics for Social Sciences',
      home: 'Home',
      skip: 'Skip to content',
      langLabel: 'Language',
      breadcrumbs: 'Breadcrumbs',
      topicN: function (n) { return 'Topic ' + n; },
      soon: 'Coming soon',
      exam: 'Exam',
      midterm: 'Midterm exam',
      final: 'Final exam',
      open: 'Open',
      model: 'Model',
      models: 'Applied models',
      part: 'Part',
      nextPart: 'Next part',
      back: 'Back',
      backTo: function (t) { return 'Back: ' + t; },
      nextModel: 'Next model',
      steps: 'Steps',
      stepOf: function (i, n) { return 'Steps: ' + i + ' of ' + n; },
      nextStep: 'Next step',
      showAnswerStep: 'Show answer',
      showAll: 'Show all',
      restart: 'Start over',
      question: function (n) { return 'Question ' + n; },
      taskN: function (n) { return 'Problem ' + n; },
      openQ: 'Calculation question',
      mcQ: 'Choose an answer',
      minutes: function (m) { return '~' + m + ' min'; },
      timeTitle: 'Suggested time',
      solveFirst: 'Solve it yourself first, then check.',
      showAnswer: 'Show answer',
      hideAnswer: 'Hide answer',
      showSolution: 'Show solution',
      hideSolution: 'Hide solution',
      answer: 'Answer',
      solution: 'Solution',
      explanation: 'Explanation',
      correct: 'Correct!',
      incorrect: 'Incorrect. The correct answer is marked in green.',
      tryAgain: 'Try again',
      draft: 'Draft',
      tryIt: 'Try it yourself',
      tryItHint: 'Change m and b and watch how the line changes.',
      slopeUp: 'm > 0 – the line rises',
      slopeDown: 'm < 0 – the line falls',
      slopeZero: 'm = 0 – the line is horizontal',
      intercept: function (b) { return 'The line crosses the vertical axis at (0; ' + b + ')'; },
      decimal: '.',
      // Chart labels
      unitEur: 'EUR',
      unitQty: 'units',
      unitYears: 'years',
      demand: 'Demand (D)',
      supply: 'Supply (S)',
      eqPoint: 'Equilibrium point (E)',
      marketChart: 'Demand and supply lines and the equilibrium point E',
      revenue: 'Revenue (R)',
      cost: 'Total cost (TC)',
      bePoint: 'Break-even point',
      beLetter: 'B',
      lossZone: 'Loss',
      profitZone: 'Profit',
      beChart: 'Revenue and total cost lines and the break-even point',
      meansChart: 'Total cost lines of the production methods',
      lowestCost: 'Lowest cost',
      crossPoint: 'Intersection point',
      cheapest: 'cheapest'
    }
  };

  /* ------------------------------------------------------------------
     2. KURSO STRUKTŪRA
     Norėdami aktyvuoti temą: status: 'active' ir nurodykite href.
     Angliški pavadinimai (en) bus papildyti kuriant anglišką versiją.
     ------------------------------------------------------------------ */
  var COURSE = [
    { id: 't1', num: 1, status: 'active', href: { lt: 'tema-1.html' },
      title: { lt: 'Tiesinės funkcijos ir modeliai', en: 'Linear Functions and Models' } },
    { id: 't2', num: 2, status: 'active', href: { lt: 'tema-2.html' },
      title: { lt: 'Matricos', en: 'Matrices' } },
    { id: 't3', num: 3, status: 'active', href: { lt: 'tema-3.html' },
      title: { lt: 'Tiesinių lygčių sistemos', en: 'Systems of Linear Equations' } },
    { id: 't4', num: 4, status: 'soon', title: { lt: 'Tiesinis programavimas: geometriniai metodai', en: null } },
    { id: 't5', num: 5, status: 'soon', title: { lt: 'Tiesinis programavimas: simpleksų metodas', en: null } },
    { id: 'midterm', type: 'exam', href: { lt: 'tarpinis-egzaminas.html' },
      title: { lt: 'Tarpinis egzaminas', en: 'Midterm exam' } },
    { id: 't6', num: 6, status: 'soon', title: { lt: 'Pirmos eilės išvestinės', en: null } },
    { id: 't7', num: 7, status: 'soon', title: { lt: 'Aukštesnės eilės išvestinės', en: null } },
    { id: 't8', num: 8, status: 'soon', title: { lt: 'Kelių kintamųjų funkcijų išvestinės', en: null } },
    { id: 't9', num: 9, status: 'soon', title: { lt: 'Kelių kintamųjų funkcijų ekstremumai', en: null } },
    { id: 't10', num: 10, status: 'soon', title: { lt: 'Neapibrėžtinis integralas', en: null } },
    { id: 't11', num: 11, status: 'soon', title: { lt: 'Apibrėžtinis integralas', en: null } },
    { id: 'final', type: 'exam', href: { lt: 'baigiamasis-egzaminas.html' },
      title: { lt: 'Baigiamasis egzaminas', en: 'Final exam' } }
  ];

  /* Kiekvienos temos taikomieji modeliai (kortelės temos puslapyje). */
  var MODELS = {
    t1: [
      { id: 'dep', status: 'active', href: { lt: 'tema-1-nusidevejimas.html' },
        title: { lt: 'Tiesinis nusidėvėjimas', en: 'Linear Depreciation' },
        desc: { lt: 'Per kiekvieną laikotarpį turto vertė sumažėja tokia pačia suma.' } },
      { id: 'eq', status: 'active', href: { lt: 'tema-1-rinkos-pusiausvyra.html' },
        title: { lt: 'Rinkos pusiausvyra', en: 'Market Equilibrium' },
        desc: { lt: 'Paklausa ir pasiūla: pusiausvyros kaina ir kiekis, kai \\(D = S\\).' } },
      { id: 'be', status: 'active', href: { lt: 'tema-1-pajamos-sanaudos-pelnas.html' },
        title: { lt: 'Pajamos, sąnaudos, pelnas ir lūžio taškas', en: 'Cost, Revenue and Profit' },
        desc: { lt: 'Lūžio taškas – gamybos kiekis, su kuriuo pajamos prilygsta sąnaudoms.' } },
      { id: 'means', status: 'active', href: { lt: 'tema-1-gamybos-priemoniu-pasirinkimas.html' },
        title: { lt: 'Gamybos priemonių pasirinkimas', en: 'Choice of the Means of Production' },
        desc: { lt: 'Kaip gamybos būdo pasirinkimas priklauso nuo planuojamos paklausos.' } }
    ]
    ,
    t2: [
      { id: 'm21', status: 'active', href: { lt: 'tema-2-pagrindiniai-veiksmai.html' },
        title: { lt: 'Pagrindinių matricos veiksmų taikymai', en: 'Basic Matrix Operations' },
        desc: { lt: 'Sudėtis, atimtis ir daugyba iš skaliaro ekonominėse ir vadybinėse situacijose.' } },
      { id: 'm22', status: 'active', href: { lt: 'tema-2-sudetingesni-veiksmai.html' },
        title: { lt: 'Sudėtingesni matricų veiksmų taikymai', en: 'Advanced Matrix Applications' },
        desc: { lt: 'Matricų daugyba ir transponavimas ekonominėse ir vadybinėse situacijose.' } },
      { id: 'm23', status: 'active', href: { lt: 'tema-2-rinkos-dalies-prognozavimas.html' },
        title: { lt: 'Rinkos dalies prognozavimas', en: 'Market Share Prediction Using Markov Chains' },
        desc: { lt: 'Markovo grandinės: rinkos dalys po vieno ar kelių periodų.' } }
    ],
    t3: [
      { id: 'm31', status: 'active', href: { lt: 'tema-3-planavimas-vienintelis.html' },
        title: { lt: 'Racionalusis planavimas (vienintelis sprendinys)', en: 'Rational Planning (Unique Solution)' },
        desc: { lt: 'Gamybos, pirkimų ar investicijų planas, kai sistema turi vienintelį sprendinį.' } },
      { id: 'm32', status: 'soon',
        title: { lt: 'Racionalusis planavimas (daug sprendinių)', en: 'Rational Planning (Infinitely Many Solutions)' },
        desc: { lt: 'Kai sprendinių be galo daug: parametras ir galimi planai.' } },
      { id: 'm33', status: 'soon',
        title: { lt: 'Stabiliosios rinkos dalys', en: 'Long-Run Market Shares' },
        desc: { lt: 'Rinkos dalys, kurios ilguoju laikotarpiu nebekinta: \\(P\\cdot X = X\\).' } }
    ]
  };

  /* Temos, kurių taikymai vadinami skiltimis, o ne modeliais. */
  var UNIT = { t2: 'part', t3: 'part' };

  /* Puslapiai: failo vardas kiekviena kalba ir tėvinis puslapis (kelio juostai).
     Kai sukursite anglišką puslapį, įrašykite jo failo vardą į href.en. */
  var PAGES = {
    home:    { href: { lt: 'index.html', en: 'index.html' } },
    t1:      { parent: 'home', href: { lt: 'tema-1.html', en: null },
               title: { lt: '1 tema', en: 'Topic 1' } },
    dep:     { parent: 't1', topic: 't1', model: 'dep', href: { lt: 'tema-1-nusidevejimas.html', en: null },
               title: { lt: 'Tiesinis nusidėvėjimas', en: 'Linear Depreciation' } },
    eq:      { parent: 't1', topic: 't1', model: 'eq', href: { lt: 'tema-1-rinkos-pusiausvyra.html', en: null },
               title: { lt: 'Rinkos pusiausvyra', en: 'Market Equilibrium' } },
    be:      { parent: 't1', topic: 't1', model: 'be', href: { lt: 'tema-1-pajamos-sanaudos-pelnas.html', en: null },
               title: { lt: 'Pajamos, sąnaudos, pelnas ir lūžio taškas', en: 'Cost, Revenue and Profit' } },
    t2:      { parent: 'home', href: { lt: 'tema-2.html', en: null },
               title: { lt: '2 tema', en: 'Topic 2' } },
    m21:     { parent: 't2', topic: 't2', model: 'm21', href: { lt: 'tema-2-pagrindiniai-veiksmai.html', en: null },
               title: { lt: 'Pagrindinių matricos veiksmų taikymai', en: 'Basic Matrix Operations' } },
    m22:     { parent: 't2', topic: 't2', model: 'm22', href: { lt: 'tema-2-sudetingesni-veiksmai.html', en: null },
               title: { lt: 'Sudėtingesni matricų veiksmų taikymai', en: 'Advanced Matrix Applications' } },
    m23:     { parent: 't2', topic: 't2', model: 'm23', href: { lt: 'tema-2-rinkos-dalies-prognozavimas.html', en: null },
               title: { lt: 'Rinkos dalies prognozavimas', en: 'Market Share Prediction Using Markov Chains' } },
    t3:      { parent: 'home', href: { lt: 'tema-3.html', en: null },
               title: { lt: '3 tema', en: 'Topic 3' } },
    m31:     { parent: 't3', topic: 't3', model: 'm31', href: { lt: 'tema-3-planavimas-vienintelis.html', en: null },
               title: { lt: 'Racionalusis planavimas (vienintelis sprendinys)', en: 'Rational Planning (Unique Solution)' } },
    means:   { parent: 't1', topic: 't1', model: 'means', href: { lt: 'tema-1-gamybos-priemoniu-pasirinkimas.html', en: null },
               title: { lt: 'Gamybos priemonių pasirinkimas', en: 'Choice of the Means of Production' } },
    midterm: { parent: 'home', href: { lt: 'tarpinis-egzaminas.html', en: null },
               title: { lt: 'Tarpinis egzaminas', en: 'Midterm exam' } },
    final:   { parent: 'home', href: { lt: 'baigiamasis-egzaminas.html', en: null },
               title: { lt: 'Baigiamasis egzaminas', en: 'Final exam' } }
  };

  /* ------------------------------------------------------------------
     Pagalbinės funkcijos
     ------------------------------------------------------------------ */
  var LANG = (document.documentElement.lang || 'lt').slice(0, 2) === 'en' ? 'en' : 'lt';
  var OTHER = LANG === 'lt' ? 'en' : 'lt';
  var T = UI[LANG];
  var PAGE = document.body.getAttribute('data-page') || 'home';
  var REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function tr(obj) { return obj ? (obj[LANG] || obj.lt || '') : ''; }

  var ICON = {
    brand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4v16h16"/><path d="M7 15l4-4 3 3 5-6"/></svg>',
    chevL: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>',
    chevR: '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>',
    arrowR: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>',
    flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 21V4"/><path d="M5 4h12l-2.5 4.5L17 13H5"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    cross: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    next: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14"/><path d="M6 13l6 6 6-6"/></svg>',
    restart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12a8 8 0 1 0 2.4-5.7"/><path d="M4 4v4h4"/></svg>',
    slider: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/></svg>'
  };

  /* ------------------------------------------------------------------
     3. ANTRAŠTĖ, KELIAS, PORAŠTĖ, KALBOS PERJUNGIKLIS
     ------------------------------------------------------------------ */
  function counterpartHref() {
    var p = PAGES[PAGE];
    var target = p && p.href && p.href[OTHER];
    return '../' + OTHER + '/' + (target || 'index.html');
  }

  function buildHeader() {
    var h = $('#site-header');
    if (!h) return;
    var cur = '<span aria-current="true" lang="' + LANG + '">' + LANG.toUpperCase() + '</span>';
    var oth = '<a href="' + counterpartHref() + '" hreflang="' + OTHER + '" lang="' + OTHER + '">' + OTHER.toUpperCase() + '</a>';
    var p = PAGES[PAGE];
    var back = '';
    if (p && p.parent && PAGES[p.parent]) {
      var par = PAGES[p.parent];
      var parTitle = p.parent === 'home' ? T.home : tr(par.title);
      back = '<a class="back-btn" href="' + par.href[LANG] + '" aria-label="' + esc(T.backTo(parTitle)) + '">' +
        ICON.chevL + '<span>' + esc(T.back) + '</span></a>';
      h.classList.add('has-back');
    }
    h.innerHTML =
      '<a class="skip" href="#main">' + esc(T.skip) + '</a>' +
      '<div class="wrap">' +
        '<div class="head-left">' + back +
        '<a class="brand" href="index.html" aria-label="' + esc(T.courseShort) + '"><span class="brand-mark">' + ICON.brand + '</span><span class="brand-text">' + esc(T.courseShort) + '</span></a>' +
        '</div>' +
        '<nav class="lang-switch" aria-label="' + esc(T.langLabel) + '">' +
          (LANG === 'lt' ? cur + oth : oth + cur) +
        '</nav>' +
      '</div>';
  }

  function buildCrumbs() {
    var box = $('#crumbs');
    if (!box || PAGE === 'home') return;
    var chain = [];
    var key = PAGE;
    while (key) { chain.unshift(key); key = PAGES[key] && PAGES[key].parent; }
    var html = '<ol>';
    chain.forEach(function (k, i) {
      var p = PAGES[k];
      var label = k === 'home' ? T.home : tr(p.title);
      if (i === chain.length - 1) {
        html += '<li><span aria-current="page">' + esc(label) + '</span></li>';
      } else {
        html += '<li><a href="' + p.href[LANG] + '">' + esc(label) + '</a></li>';
      }
    });
    box.setAttribute('aria-label', T.breadcrumbs);
    box.innerHTML = html + '</ol>';
  }

  function buildFooter() {
    var f = $('#site-footer');
    if (!f) return;
    f.innerHTML = '<div class="wrap"><p><strong>' + esc(T.courseFull) + '</strong></p></div>';
  }

  /* ------------------------------------------------------------------
     4. PAGRINDINIO PUSLAPIO STRUKTŪRA IR MODELIŲ KORTELĖS
     ------------------------------------------------------------------ */
  function buildCoursePath() {
    var box = $('#course-path');
    if (!box) return;
    var html = '';
    COURSE.forEach(function (item) {
      var title = esc(tr(item.title));
      if (item.type === 'exam') {
        html += '<li class="is-exam"><span class="node">' + ICON.flag + '</span>' +
          '<a class="path-card" href="' + item.href[LANG] + '"><span><span class="kicker">' + esc(T.exam) + '</span>' +
          '<span class="title">' + title + '</span></span>' + ICON.chevR + '</a></li>';
      } else if (item.status === 'active' && item.href && item.href[LANG]) {
        html += '<li class="is-active"><span class="node" aria-hidden="true">' + item.num + '</span>' +
          '<a class="path-card" href="' + item.href[LANG] + '"><span><span class="kicker">' + esc(T.topicN(item.num)) + '</span>' +
          '<span class="title">' + title + '</span></span>' + ICON.chevR + '</a></li>';
      } else {
        html += '<li class="is-soon"><span class="node" aria-hidden="true">' + item.num + '</span>' +
          '<div class="path-card" aria-disabled="true"><span class="body"><span class="kicker-row"><span class="kicker">' + esc(T.topicN(item.num)) + '</span>' +
          '<span class="badge">' + esc(T.soon) + '</span></span><span class="title">' + title + '</span></span></div></li>';
      }
    });
    box.innerHTML = html;
  }

  function buildModelGrid() {
    $all('[data-models]').forEach(function (box) {
      var list = MODELS[box.getAttribute('data-models')] || [];
      var html = '';
      list.forEach(function (m, i) {
        var head = '<span class="m-no">' + esc(UNIT[box.getAttribute('data-models')] ? T.part : T.model) + ' ' + (i + 1) + '</span><h3>' + esc(tr(m.title)) + '</h3>' +
          '<p>' + tr(m.desc) + '</p>';
        if (m.status === 'active' && m.href && m.href[LANG]) {
          html += '<a class="model-card" href="' + m.href[LANG] + '">' + head +
            '<span class="foot"><span class="go">' + esc(T.open) + ' ' + ICON.arrowR + '</span></span></a>';
        } else {
          html += '<div class="model-card is-soon" aria-disabled="true">' + head +
            '<span class="foot"><span class="badge">' + esc(T.soon) + '</span></span></div>';
        }
      });
      box.innerHTML = html;
    });
  }

  function buildPager() {
    var box = $('#pager');
    var p = PAGES[PAGE];
    if (!box || !p || !p.parent) return;
    var parent = PAGES[p.parent];
    var html = '<a class="prev" href="' + parent.href[LANG] + '"><span class="dir">← ' + esc(T.back) + '</span>' +
      '<span class="t">' + esc(p.parent === 'home' ? T.home : tr(parent.title)) + '</span></a>';
    if (p.topic && p.model) {
      var list = MODELS[p.topic] || [];
      var idx = -1;
      list.forEach(function (m, i) { if (m.id === p.model) idx = i; });
      var nxt = list[idx + 1], nextLbl = UNIT[p.topic] ? T.nextPart : T.nextModel;
      if (nxt) {
        if (nxt.status === 'active' && nxt.href && nxt.href[LANG]) {
          html += '<a class="next" href="' + nxt.href[LANG] + '"><span class="dir">' + esc(nextLbl) + ' →</span>' +
            '<span class="t">' + esc(tr(nxt.title)) + '</span></a>';
        } else {
          html += '<div class="pager-soon next" aria-disabled="true"><span class="dir">' + esc(nextLbl) + '</span>' +
            '<span class="t">' + esc(tr(nxt.title)) + ' <span class="badge">' + esc(T.soon) + '</span></span></div>';
        }
      }
    }
    box.innerHTML = html;
  }

  /* ------------------------------------------------------------------
     5. SPRENDIMO PAVYZDŽIAI SU ŽINGSNIAIS
     Žymėjimas HTML: <article class="example"> ... <section class="step"> ...
     Paskutinis žingsnis su klase step--answer rodomas kaip atsakymas.
     ------------------------------------------------------------------ */
  function initExample(ex) {
    var items = $all('.step', ex);
    if (!items.length) return;
    var numbered = items.filter(function (s) { return !s.classList.contains('step--answer'); }).length;
    var shown = 0;

    items.forEach(function (s) { s.hidden = true; s.setAttribute('tabindex', '-1'); });

    var ctr = document.createElement('div');
    ctr.className = 'step-controls';
    ctr.innerHTML =
      '<div class="progress"><span class="progress-text" aria-live="polite"></span>' +
      '<span class="progress-bar" aria-hidden="true"><span></span></span></div>' +
      '<button type="button" class="btn btn-primary js-next"></button>' +
      '<button type="button" class="btn btn-ghost js-all">' + esc(T.showAll) + '</button>';
    ex.appendChild(ctr);

    var btnNext = $('.js-next', ctr);
    var btnAll = $('.js-all', ctr);
    var txt = $('.progress-text', ctr);
    var bar = $('.progress-bar span', ctr);

    function update() {
      txt.textContent = T.stepOf(Math.min(shown, numbered), numbered);
      bar.style.width = (shown / items.length * 100) + '%';
      if (shown >= items.length) {
        btnNext.innerHTML = ICON.restart + '<span>' + esc(T.restart) + '</span>';
        btnNext.className = 'btn btn-ghost js-next';
        btnAll.hidden = true;
      } else {
        var isAnswerNext = items[shown].classList.contains('step--answer');
        btnNext.innerHTML = ICON.next + '<span>' + esc(isAnswerNext ? T.showAnswerStep : T.nextStep) + '</span>';
        btnNext.className = 'btn btn-primary js-next';
        btnAll.hidden = false;
      }
    }

    function reveal(s) {
      s.hidden = false;
      s.classList.remove('is-new');
      void s.offsetWidth; // leidžia animacijai prasidėti iš naujo
      s.classList.add('is-new');
    }

    btnNext.addEventListener('click', function () {
      if (shown >= items.length) {
        items.forEach(function (s) { s.hidden = true; s.classList.remove('is-new'); });
        shown = 0;
        update();
        ex.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth', block: 'start' });
        return;
      }
      reveal(items[shown]);
      shown++;
      update();
      ctr.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth', block: 'nearest' });
    });

    btnAll.addEventListener('click', function () {
      for (; shown < items.length; shown++) reveal(items[shown]);
      update();
    });

    update();
  }

  /* ------------------------------------------------------------------
     6. TESTO KLAUSIMAI
     Atviras:  <article class="q" data-type="open" data-time="1,5">
                 <p class="q-text">…</p>
                 <div class="q-answer">…</div>
                 <div class="q-solution">…</div>   (neprivaloma)
               </article>
     Variantai: <article class="q" data-type="mc">
                 <p class="q-text">…</p>
                 <ol class="q-options"><li data-correct>…</li><li>…</li></ol>
                 <div class="q-explain">…</div>     (neprivaloma)
               </article>
     ------------------------------------------------------------------ */
  function initQuestion(q, index, numbering) {
    var type = q.getAttribute('data-type') || 'open';
    var meta = document.createElement('div');
    meta.className = 'q-meta';
    var label = numbering === 'task' ? T.taskN(index + 1) : T.question(index + 1);
    var left = '<span><span class="q-num">' + esc(label) + '</span>' +
      (q.hasAttribute('data-draft') ? ' <span class="badge badge--draft">' + esc(T.draft) + '</span>' : '') + '</span>';
    var time = q.getAttribute('data-time');
    var right = time ? '<span class="q-time" title="' + esc(T.timeTitle) + '">' + ICON.clock + esc(T.minutes(time)) + '</span>' :
      (type === 'mc' ? '<span class="q-kind">' + esc(T.mcQ) + '</span>' : '');
    meta.innerHTML = left + right;
    q.insertBefore(meta, q.firstChild);

    if (type === 'mc') initMC(q); else initOpen(q);
  }

  function wrapReveal(el, cls, label) {
    el.classList.add('q-reveal', cls);
    var lab = document.createElement('span');
    lab.className = 'label';
    lab.textContent = label;
    el.insertBefore(lab, el.firstChild);
    el.hidden = true;
    if (!el.id) el.id = 'r' + Math.random().toString(36).slice(2, 9);
  }

  function toggleButton(target, showLabel, hideLabel, primary) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'btn ' + (primary ? 'btn-primary' : 'btn-soft');
    b.setAttribute('aria-expanded', 'false');
    b.setAttribute('aria-controls', target.id);
    b.textContent = showLabel;
    b.addEventListener('click', function () {
      var open = target.hidden;
      target.hidden = !open;
      b.setAttribute('aria-expanded', String(open));
      b.textContent = open ? hideLabel : showLabel;
    });
    return b;
  }

  function initOpen(q) {
    var ans = $('.q-answer', q);
    var sol = $('.q-solution', q);
    var hint = document.createElement('p');
    hint.className = 'q-hint';
    hint.textContent = T.solveFirst;
    var text = $('.q-text', q);
    if (text) text.insertAdjacentElement('afterend', hint);

    var actions = document.createElement('div');
    actions.className = 'q-actions';
    if (ans) {
      wrapReveal(ans, 'q-answer', T.answer);
      actions.appendChild(toggleButton(ans, T.showAnswer, T.hideAnswer, true));
    }
    if (sol) {
      wrapReveal(sol, 'q-solution', T.solution);
      actions.appendChild(toggleButton(sol, T.showSolution, T.hideSolution, false));
    }
    hint.insertAdjacentElement('afterend', actions);
    // Atsakymas ir sprendimas – po mygtukais
    if (ans) actions.insertAdjacentElement('afterend', ans);
    if (sol) (ans || actions).insertAdjacentElement('afterend', sol);
  }

  function initMC(q) {
    var list = $('.q-options', q);
    if (!list) return;
    var explain = $('.q-explain', q);
    if (explain) wrapReveal(explain, 'q-explain', T.explanation);
    var letters = 'ABCDEFGH';
    var opts = $all('li', list);
    var feedback = document.createElement('p');
    feedback.className = 'q-feedback';
    feedback.hidden = true;
    feedback.setAttribute('aria-live', 'polite');
    list.insertAdjacentElement('afterend', feedback);
    if (explain) feedback.insertAdjacentElement('afterend', explain);

    var retry = document.createElement('div');
    retry.className = 'q-actions';
    retry.hidden = true;
    retry.innerHTML = '<button type="button" class="btn btn-ghost">' + ICON.restart + '<span>' + esc(T.tryAgain) + '</span></button>';
    (explain || feedback).insertAdjacentElement('afterend', retry);

    var buttons = opts.map(function (li, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'q-opt';
      b.innerHTML = '<span class="letter" aria-hidden="true">' + letters[i] + '</span><span class="opt-text">' + li.innerHTML + '</span>';
      if (li.hasAttribute('data-correct')) b.setAttribute('data-correct', '');
      li.innerHTML = '';
      li.appendChild(b);
      return b;
    });

    buttons.forEach(function (b) {
      b.addEventListener('click', function () {
        var ok = b.hasAttribute('data-correct');
        buttons.forEach(function (o) {
          o.disabled = true;
          if (o.hasAttribute('data-correct')) o.classList.add('is-correct');
          else if (o === b) o.classList.add('is-wrong');
          else o.classList.add('is-dim');
        });
        feedback.className = 'q-feedback ' + (ok ? 'ok' : 'bad');
        feedback.innerHTML = (ok ? ICON.check : ICON.cross) + '<span>' + esc(ok ? T.correct : T.incorrect) + '</span>';
        feedback.hidden = false;
        if (explain) explain.hidden = false;
        retry.hidden = false;
      });
    });

    retry.querySelector('button').addEventListener('click', function () {
      buttons.forEach(function (o) { o.disabled = false; o.classList.remove('is-correct', 'is-wrong', 'is-dim'); });
      feedback.hidden = true;
      if (explain) explain.hidden = true;
      retry.hidden = true;
      buttons[0].focus();
    });
  }

  /* ------------------------------------------------------------------
     7. SĄVOKŲ IŠŠOKANTYS LANGELIAI
     <button type="button" class="term" data-def="Apibrėžimas">sąvoka</button>
     ------------------------------------------------------------------ */
  var pop = null, popOwner = null;

  function closePop() {
    if (!pop || pop.hidden) return;
    pop.hidden = true;
    if (popOwner) popOwner.setAttribute('aria-expanded', 'false');
    popOwner = null;
  }

  function openPop(term) {
    if (!pop) {
      pop = document.createElement('div');
      pop.className = 'popover';
      pop.id = 'term-popover';
      pop.setAttribute('role', 'tooltip');
      pop.hidden = true;
      document.body.appendChild(pop);
    }
    if (popOwner === term && !pop.hidden) { closePop(); return; }
    closePop();
    pop.innerHTML = '<span class="pop-term">' + esc(term.getAttribute('data-term') || term.textContent) + '</span>' +
      '<span>' + term.getAttribute('data-def') + '</span>';
    renderMath(pop);
    pop.hidden = false;
    popOwner = term;
    term.setAttribute('aria-expanded', 'true');
    term.setAttribute('aria-describedby', 'term-popover');

    var r = term.getClientRects()[0] || term.getBoundingClientRect();
    var w = pop.offsetWidth, h = pop.offsetHeight;
    var vw = document.documentElement.clientWidth;
    var center = r.left + r.width / 2;
    var left = Math.max(16, Math.min(center - w / 2, vw - w - 16));
    var above = (r.bottom + h + 12 > window.innerHeight) && (r.top - h - 12 > 0);
    var top = above ? r.top - h - 10 : r.bottom + 10;
    pop.classList.toggle('is-above', above);
    pop.style.left = (left + window.scrollX) + 'px';
    pop.style.top = (top + window.scrollY) + 'px';
    pop.style.setProperty('--arrow-x', Math.max(14, Math.min(center - left, w - 14)) + 'px');
  }

  function initTerms() {
    var terms = $all('.term');
    if (!terms.length) return;
    terms.forEach(function (t) {
      t.setAttribute('aria-expanded', 'false');
      t.addEventListener('click', function (e) { e.stopPropagation(); openPop(t); });
    });
    document.addEventListener('click', function (e) { if (pop && !pop.contains(e.target)) closePop(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { var o = popOwner; closePop(); if (o) o.focus(); } });
    window.addEventListener('resize', closePop);
  }

  /* ------------------------------------------------------------------
     8. INTERAKTYVUS TIESĖS BRĖŽINYS  (<div data-widget="line-explorer">)
     ------------------------------------------------------------------ */
  function fmtNum(v) {
    var s = (Math.round(v * 10) / 10).toString();
    return T.decimal === ',' ? s.replace('.', ',') : s;
  }
  function texNum(v) {
    var s = (Math.round(v * 10) / 10).toString();
    return T.decimal === ',' ? s.replace('.', '{,}') : s;
  }

  /* ------------------------------------------------------------------
     8a. PAKLAUSOS IR PASIŪLOS GRAFIKAS
     <div data-widget="market-chart" data-a="-0.04" data-b="560" data-c="0.06" data-d="160"
          data-xmax="7000" data-ymax="600" data-numeric="1"></div>
     Paklausa p = ax + b, pasiūla p = cx + d. data-numeric="0" – be skaičių (p_e, x_e).
     ------------------------------------------------------------------ */
  function clean(v) { return Number(Number(v).toPrecision(10)); }
  function decStr(v) { var s = String(clean(v)); return T.decimal === ',' ? s.replace('.', ',') : s; }
  function decTex(v) { var s = String(clean(v)); return T.decimal === ',' ? s.replace('.', '{,}') : s; }
  function lineTex(m, k) {
    var t = 'p = ' + (m < 0 ? '-' : '') + decTex(Math.abs(m)) + 'x';
    if (k !== 0) t += (k < 0 ? ' - ' : ' + ') + decTex(Math.abs(k));
    return t;
  }

  function initMarketChart(box) {
    var a = +box.getAttribute('data-a'), b = +box.getAttribute('data-b');
    var c = +box.getAttribute('data-c'), d = +box.getAttribute('data-d');
    var xmax = +box.getAttribute('data-xmax'), ymax = +box.getAttribute('data-ymax');
    var numeric = box.getAttribute('data-numeric') === '1';
    var xe = clean((b - d) / (c - a)), pe = clean(a * xe + b);
    var L = 56, B = 206, W = 262, H = 180;
    function X(q) { return +(L + q / xmax * W).toFixed(1); }
    function Y(p) { return +(B - p / ymax * H).toFixed(1); }
    var qd = Math.min(xmax, -b / a), qs = Math.min(xmax, (ymax - d) / c);
    var ex = X(xe), ey = Y(pe);
    var sub = function (base, s) { return '<tspan class="i">' + base + '</tspan><tspan class="i" font-size="10" dy="4">' + s + '</tspan>'; };

    var yTicks = numeric ? [b, pe, d] : [pe];
    var ticks = '';
    var used = [];
    yTicks.forEach(function (v) {
      var y = Y(v);
      if (used.some(function (u) { return Math.abs(u - y) < 13; })) return;
      used.push(y);
      ticks += '<line class="ax" x1="' + (L - 4) + '" y1="' + y + '" x2="' + L + '" y2="' + y + '"/>' +
        '<text class="muted" x="' + (L - 7) + '" y="' + (y + 4) + '" text-anchor="end">' +
        (numeric ? decStr(v) : sub('p', 'e')) + '</text>';
    });
    ticks += '<text class="muted" x="' + ex + '" y="' + (B + 17) + '" text-anchor="middle">' +
      (numeric ? decStr(xe) : sub('x', 'e')) + '</text>';

    var svg =
      '<svg viewBox="0 0 340 250" role="img" aria-label="' + esc(T.marketChart) +
        (numeric ? ' (' + decStr(xe) + '; ' + decStr(pe) + ')' : '') + '">' +
      '<line class="guide" x1="' + ex + '" y1="' + ey + '" x2="' + ex + '" y2="' + B + '"/>' +
      '<line class="guide" x1="' + L + '" y1="' + ey + '" x2="' + ex + '" y2="' + ey + '"/>' +
      '<line class="ax" x1="' + (L - 8) + '" y1="' + B + '" x2="' + (L + W + 10) + '" y2="' + B + '"/>' +
      '<line class="ax" x1="' + L + '" y1="' + (B + 8) + '" x2="' + L + '" y2="18"/>' +
      '<path class="ah" d="M' + (L + W + 18) + ' ' + B + 'L' + (L + W + 9) + ' ' + (B - 4.5) + 'L' + (L + W + 9) + ' ' + (B + 4.5) + 'Z"/>' +
      '<path class="ah" d="M' + L + ' 10L' + (L - 4.5) + ' 19L' + (L + 4.5) + ' 19Z"/>' +
      '<text x="2" y="12" style="font-size:12px"><tspan class="i">p</tspan>, ' + esc(T.unitEur) + '</text>' +
      '<text x="336" y="246" text-anchor="end"><tspan class="i">x</tspan>, ' + esc(T.unitQty) + '</text>' +
      '<text class="muted" x="' + (L - 7) + '" y="' + (B + 15) + '" text-anchor="end">0</text>' +
      ticks +
      '<line class="ln" x1="' + X(0) + '" y1="' + Y(b) + '" x2="' + X(qd) + '" y2="' + Y(a * qd + b) + '"/>' +
      '<line class="ln2" x1="' + X(0) + '" y1="' + Y(d) + '" x2="' + X(qs) + '" y2="' + Y(c * qs + d) + '"/>' +
      '<text class="acc b" x="' + (X(qd) + 5) + '" y="' + (Y(a * qd + b) + 5) + '">D</text>' +
      '<text class="c2 b" x="' + (X(qs) + 5) + '" y="' + (Y(c * qs + d) + 5) + '">S</text>' +
      '<circle class="pt-hi" cx="' + ex + '" cy="' + ey + '" r="6"/>' +
      '<text class="exam b" x="' + ex + '" y="' + (ey - 12) + '" text-anchor="middle">E</text>' +
      '</svg>';

    var legend = '<ul class="chart-legend">' +
      '<li><span class="sw"></span><span>' + esc(T.demand) + (numeric ? ': <span class="js-tex" data-tex="' + esc(lineTex(a, b)) + '"></span>' : '') + '</span></li>' +
      '<li><span class="sw sw-s"></span><span>' + esc(T.supply) + (numeric ? ': <span class="js-tex" data-tex="' + esc(lineTex(c, d)) + '"></span>' : '') + '</span></li>' +
      '<li><span class="sw sw-e"></span><span>' + esc(T.eqPoint) + (numeric ? ': <span class="js-tex" data-tex="(' + decTex(xe) + ';\\,' + decTex(pe) + ')"></span>' : '') + '</span></li>' +
      '</ul>';

    box.classList.add('fig', 'market-chart');
    box.innerHTML = svg + legend;
    $all('.js-tex', box).forEach(function (el) { renderInline(el, el.getAttribute('data-tex')); });
  }

  /* ------------------------------------------------------------------
     8b. LŪŽIO TAŠKO GRAFIKAS (pajamos R ir bendrosios sąnaudos TC)
     <div data-widget="breakeven-chart" data-p="19" data-v="7" data-f="21600"
          data-xmax="3000" data-ymax="60000" data-numeric="1"></div>
     R(x) = p·x, TC(x) = F + V·x. data-numeric="0" – vietoj skaičių F ir x_L.
     ------------------------------------------------------------------ */
  function initBreakEvenChart(box) {
    var p = +box.getAttribute('data-p'), V = +box.getAttribute('data-v'), F = +box.getAttribute('data-f');
    var xmax = +box.getAttribute('data-xmax'), ymax = +box.getAttribute('data-ymax');
    var numeric = box.getAttribute('data-numeric') === '1';
    var xl = clean(F / (p - V)), yl = clean(p * xl);
    var L = 56, B = 206, W = 250, H = 180;
    function X(q) { return +(L + q / xmax * W).toFixed(1); }
    function Y(v) { return +(B - v / ymax * H).toFixed(1); }
    var qr = Math.min(xmax, ymax / p), qc = Math.min(xmax, (ymax - F) / V);
    var lx = X(xl), ly = Y(yl), letter = T.beLetter;
    var sub = function (base, s) { return '<tspan class="i">' + base + '</tspan><tspan class="i" font-size="10" dy="4">' + s + '</tspan>'; };
    var qe = Math.min(qr, qc);

    var svg =
      '<svg viewBox="0 0 340 250" role="img" aria-label="' + esc(T.beChart) +
        (numeric ? ' (' + decStr(xl) + ')' : '') + '">' +
      // nuostolio ir pelno sritys
      '<path class="zone-loss" d="M' + X(0) + ' ' + Y(0) + 'L' + X(0) + ' ' + Y(F) + 'L' + lx + ' ' + ly + 'Z"/>' +
      '<path class="zone-profit" d="M' + lx + ' ' + ly + 'L' + X(qe) + ' ' + Y(p * qe) + 'L' + X(qe) + ' ' + Y(F + V * qe) + 'Z"/>' +
      '<line class="guide" x1="' + lx + '" y1="' + ly + '" x2="' + lx + '" y2="' + B + '"/>' +
      '<line class="ax" x1="' + (L - 8) + '" y1="' + B + '" x2="' + (L + W + 10) + '" y2="' + B + '"/>' +
      '<line class="ax" x1="' + L + '" y1="' + (B + 8) + '" x2="' + L + '" y2="18"/>' +
      '<path class="ah" d="M' + (L + W + 18) + ' ' + B + 'L' + (L + W + 9) + ' ' + (B - 4.5) + 'L' + (L + W + 9) + ' ' + (B + 4.5) + 'Z"/>' +
      '<path class="ah" d="M' + L + ' 10L' + (L - 4.5) + ' 19L' + (L + 4.5) + ' 19Z"/>' +
      '<text x="2" y="12" style="font-size:12px">' + esc(T.unitEur) + '</text>' +
      '<text x="336" y="246" text-anchor="end"><tspan class="i">x</tspan>, ' + esc(T.unitQty) + '</text>' +
      '<text class="muted" x="' + (L - 7) + '" y="' + (B + 15) + '" text-anchor="end">0</text>' +
      '<line class="ax" x1="' + (L - 4) + '" y1="' + Y(F) + '" x2="' + L + '" y2="' + Y(F) + '"/>' +
      '<text class="muted" x="' + (L - 7) + '" y="' + (Y(F) + 4) + '" text-anchor="end">' +
        (numeric ? decStr(F) : '<tspan class="i">F</tspan>') + '</text>' +
      '<text class="muted" x="' + lx + '" y="' + (B + 17) + '" text-anchor="middle">' +
        (numeric ? decStr(xl) : sub('x', letter)) + '</text>' +
      '<line class="ln" x1="' + X(0) + '" y1="' + Y(0) + '" x2="' + X(qr) + '" y2="' + Y(p * qr) + '"/>' +
      '<line class="ln2" x1="' + X(0) + '" y1="' + Y(F) + '" x2="' + X(qc) + '" y2="' + Y(F + V * qc) + '"/>' +
      '<text class="acc b" x="' + (X(qr) + 5) + '" y="' + (Y(p * qr) + 5) + '">R</text>' +
      '<text class="c2 b" x="' + (X(qc) + 5) + '" y="' + (Y(F + V * qc) + 5) + '">TC</text>' +
      '<circle class="pt-hi" cx="' + lx + '" cy="' + ly + '" r="6"/>' +
      '<text class="exam b" x="' + (lx - 10) + '" y="' + (ly - 8) + '" text-anchor="end">' + letter + '</text>' +
      '</svg>';

    var rTex = 'R(x) = ' + decTex(p) + 'x';
    var cTex = 'TC(x) = ' + decTex(F) + ' + ' + decTex(V) + 'x';
    var legend = '<ul class="chart-legend">' +
      '<li><span class="sw"></span><span>' + esc(T.revenue) + (numeric ? ': <span class="js-tex" data-tex="' + esc(rTex) + '"></span>' : '') + '</span></li>' +
      '<li><span class="sw sw-s"></span><span>' + esc(T.cost) + (numeric ? ': <span class="js-tex" data-tex="' + esc(cTex) + '"></span>' : '') + '</span></li>' +
      '<li><span class="sw sw-e"></span><span>' + esc(T.bePoint) + (numeric ? ': <span class="js-tex" data-tex="x_' + letter + ' = ' + decTex(xl) + '"></span>' : '') + '</span></li>' +
      '<li><span class="sw sw-zone sw-loss"></span><span>' + esc(T.lossZone) + ' <span class="js-tex" data-tex="(x &lt; x_' + letter + ')"></span></span></li>' +
      '<li><span class="sw sw-zone sw-profit"></span><span>' + esc(T.profitZone) + ' <span class="js-tex" data-tex="(x &gt; x_' + letter + ')"></span></span></li>' +
      '</ul>';

    box.classList.add('fig', 'market-chart');
    box.innerHTML = svg + legend;
    $all('.js-tex', box).forEach(function (el) { renderInline(el, el.getAttribute('data-tex')); });
  }

  /* Gamybos priemonių pasirinkimo grafikas.
     data-lines="a:0:230|b:70000:90|c:250000:10" – būdo pavadinimas : F : V (TC = F + V·x).
     Žemiausiai esanti tiesė (mažiausios sąnaudos) paryškinama, jos lūžio taškai pažymimi,
     po x ašimi rodoma juosta „pigiausias būdas“. data-annotate="1" – privalomų grafiko elementų žymos 1–4. */
  function initMeansChart(box) {
    var lines = box.getAttribute('data-lines').split('|').map(function (t, i) {
      var a = t.split(':');
      return { name: a[0], F: +a[1], V: +a[2], i: i };
    });
    var xmax = +box.getAttribute('data-xmax'), ymax = +box.getAttribute('data-ymax');
    var xstep = +box.getAttribute('data-xstep') || 0, ystep = +box.getAttribute('data-ystep') || 0;
    var numeric = box.getAttribute('data-numeric') !== '0';
    var annotate = box.getAttribute('data-annotate') === '1';
    var L = 58, B = 206, W = 250, H = 180, TOP = B - H;
    function X(q) { return +(L + q / xmax * W).toFixed(1); }
    function Y(v) { return +(B - v / ymax * H).toFixed(1); }
    function tc(l, x) { return l.F + l.V * x; }
    var cls = ['ln', 'ln2', 'ln3'], tcls = ['c1', 'c2', 'c3'], sw = ['', ' sw-s', ' sw-3'];
    function texName(n) { return /^[IVX]+$/.test(n) ? '\\mathrm{' + n + '}' : n; }
    function subName(n) {
      return 'TC<tspan font-size="10" dy="4">' + esc(n) + '</tspan>';
    }

    // Žemiausiai esanti tiesė: kurios tiesės sąnaudos mažiausios kiekviename intervale
    function lowest(x) {
      var best = lines[0];
      lines.forEach(function (l) { if (tc(l, x) < tc(best, x) - 1e-9) best = l; });
      return best;
    }
    var segs = [], N = 2000, cur = lowest(0), start = 0;
    for (var k = 1; k <= N; k++) {
      var xx = xmax * k / N, nb = lowest(xx);
      if (nb !== cur) {
        var xs = clean((nb.F - cur.F) / (cur.V - nb.V));
        segs.push({ l: cur, a: start, b: xs });
        cur = nb; start = xs;
      }
    }
    segs.push({ l: cur, a: start, b: xmax });
    var bps = segs.slice(1).map(function (sg) { return { x: sg.a, y: clean(tc(sg.l, sg.a)) }; });

    var g = '';
    // tinklelis ir padalos (vienetinė atkarpa)
    if (numeric && xstep) for (var gx = xstep; gx <= xmax + 1e-9; gx += xstep)
      g += '<line class="grid" x1="' + X(gx) + '" y1="' + TOP + '" x2="' + X(gx) + '" y2="' + B + '"/>' +
           '<line class="ax" x1="' + X(gx) + '" y1="' + B + '" x2="' + X(gx) + '" y2="' + (B + 4) + '"/>';
    if (numeric && ystep) for (var gy = ystep; gy <= ymax + 1e-9; gy += ystep)
      g += '<line class="grid" x1="' + L + '" y1="' + Y(gy) + '" x2="' + (L + W) + '" y2="' + Y(gy) + '"/>' +
           '<line class="ax" x1="' + (L - 4) + '" y1="' + Y(gy) + '" x2="' + L + '" y2="' + Y(gy) + '"/>' +
           '<text class="muted" style="font-size:11px" x="' + (L - 7) + '" y="' + (Y(gy) + 4) + '" text-anchor="end">' + decStr(gy) + '</text>';

    // mažiausių sąnaudų laužtė
    var env = segs.map(function (sg) { return X(sg.a) + ',' + Y(tc(sg.l, sg.a)) + ' ' + X(sg.b) + ',' + Y(tc(sg.l, sg.b)); }).join(' ');
    g += '<polyline class="env" points="' + env + '"/>';

    // susikirtimo taškų pagalbinės linijos
    bps.forEach(function (p) {
      g += '<line class="guide" x1="' + X(p.x) + '" y1="' + Y(p.y) + '" x2="' + X(p.x) + '" y2="' + B + '"/>';
    });

    // ašys
    g += '<line class="ax" x1="' + (L - 8) + '" y1="' + B + '" x2="' + (L + W + 10) + '" y2="' + B + '"/>' +
         '<line class="ax" x1="' + L + '" y1="' + (B + 8) + '" x2="' + L + '" y2="18"/>' +
         '<path class="ah" d="M' + (L + W + 18) + ' ' + B + 'L' + (L + W + 9) + ' ' + (B - 4.5) + 'L' + (L + W + 9) + ' ' + (B + 4.5) + 'Z"/>' +
         '<path class="ah" d="M' + L + ' 10L' + (L - 4.5) + ' 19L' + (L + 4.5) + ' 19Z"/>' +
         '<text x="' + (L + 9) + '" y="16" style="font-size:12px"><tspan class="i">TC</tspan>, ' + esc(T.unitEur) + '</text>' +
         '<text x="336" y="262" text-anchor="end" style="font-size:12px"><tspan class="i">x</tspan>, ' + esc(T.unitQty) + '</text>' +
         '<text class="muted" x="' + (L - 7) + '" y="' + (B + 15) + '" text-anchor="end">0</text>';

    // x ašies užrašai: susikirtimo taškų kiekiai paryškinti, artimi įprasti užrašai praleidžiami
    if (numeric) {
      // pirmiausia susikirtimo taškų kiekiai, tada įprasti užrašai, kurie su jais nepersidengia
      var placed = [{ a: L - 16, b: L - 2 }];
      var span = function (x, str) { var w = str.length * 7 + 4; return { a: x - w / 2, b: x + w / 2 }; };
      var free = function (sp) { return placed.every(function (o) { return sp.b < o.a || sp.a > o.b; }); };
      bps.forEach(function (p) {
        var str = decStr(p.x); placed.push(span(X(p.x), str));
        g += '<text class="exam" style="font-size:11px;font-weight:700" x="' + X(p.x) + '" y="' + (B + 15) + '" text-anchor="middle">' + str + '</text>';
      });
      if (xstep) for (var lx = xstep; lx <= xmax + 1e-9; lx += xstep) {
        var str2 = decStr(clean(lx)), sp2 = span(X(lx), str2);
        if (free(sp2)) {
          placed.push(sp2);
          g += '<text class="muted" style="font-size:11px" x="' + X(lx) + '" y="' + (B + 15) + '" text-anchor="middle">' + str2 + '</text>';
        }
      }
    }

    // juosta „pigiausias būdas“
    var sy = B + 22;
    g += '<text class="muted" style="font-size:10px" x="' + (L - 6) + '" y="' + (sy + 10) + '" text-anchor="end">' + esc(T.cheapest) + '</text>';
    segs.forEach(function (sg) {
      var x1 = X(sg.a) + (sg.a > 0 ? 1 : 0), x2 = X(sg.b) - (sg.b < xmax ? 1 : 0);
      g += '<rect class="strip s' + (sg.l.i + 1) + '" x="' + x1 + '" y="' + sy + '" width="' + Math.max(0, x2 - x1).toFixed(1) + '" height="14" rx="3"/>';
      if (x2 - x1 > 16) g += '<text style="font-size:11px;font-weight:700" x="' + ((x1 + x2) / 2).toFixed(1) + '" y="' + (sy + 11) + '" text-anchor="middle">' + esc(sg.l.name) + '</text>';
    });

    // tiesės ir jų pavadinimai
    var labs = [];
    lines.forEach(function (l) {
      var xe = xmax, ye = tc(l, xmax), top = false;
      if (ye > ymax) { xe = (ymax - l.F) / l.V; ye = ymax; top = true; }
      g += '<line class="' + cls[l.i] + '" x1="' + X(0) + '" y1="' + Y(l.F) + '" x2="' + X(xe) + '" y2="' + Y(ye) + '"/>';
      labs.push({ l: l, x: X(xe) + (top ? 4 : 5), y: Y(ye) + (top ? 13 : 4), top: top });
    });
    var side = labs.filter(function (o) { return !o.top; }).sort(function (a, b) { return a.y - b.y; });
    for (var s2 = 1; s2 < side.length; s2++) if (side[s2].y - side[s2 - 1].y < 13) side[s2].y = side[s2 - 1].y + 13;
    labs.forEach(function (o) {
      g += '<text class="' + tcls[o.l.i] + ' b" x="' + o.x + '" y="' + o.y + '">' + subName(o.l.name) + '</text>';
    });

    // susikirtimo taškai
    bps.forEach(function (p) { g += '<circle class="pt-hi" cx="' + X(p.x) + '" cy="' + Y(p.y) + '" r="5.5"/>'; });

    // privalomų elementų žymos
    if (annotate) {
      var badge = function (n, x, y) {
        return '<g class="badge"><circle cx="' + x + '" cy="' + y + '" r="7.5"/><text x="' + x + '" y="' + (y + 3.6) + '" text-anchor="middle">' + n + '</text></g>';
      };
      var hi = labs.slice().sort(function (a, b) { return a.y - b.y; })[0];
      if (xstep) g += '<line class="leg" style="stroke-width:3.5" x1="' + L + '" y1="' + B + '" x2="' + X(xstep) + '" y2="' + B + '"/>';
      if (ystep) g += '<line class="leg" style="stroke-width:3.5" x1="' + L + '" y1="' + B + '" x2="' + L + '" y2="' + Y(ystep) + '"/>';
      g += badge(1, L + 66, 12) + badge(1, 276, 258) +
           badge(2, L - 24, B + 11) +
           (xstep ? badge(3, ((L + X(xstep)) / 2).toFixed(1), B + 11) : '') +
           badge(4, (hi.x + 9).toFixed(1), hi.y - 17 < 8 ? hi.y + 13 : hi.y - 17);
    }

    var svg = '<svg viewBox="0 0 340 268" role="img" aria-label="' + esc(T.meansChart) + '">' + g + '</svg>';

    var legend = '<ul class="chart-legend">';
    lines.forEach(function (l) {
      var f = l.F ? decTex(l.F) + ' + ' + decTex(l.V) + 'x' : decTex(l.V) + 'x';
      var tex = 'TC_{' + texName(l.name) + '}' + (numeric ? '(x) = ' + f : '');
      legend += '<li><span class="sw' + sw[l.i] + '"></span><span class="js-tex" data-tex="' + esc(tex) + '"></span></li>';
    });
    legend += '<li><span class="sw sw-env"></span><span>' + esc(T.lowestCost) + '</span></li>' +
      '<li><span class="sw sw-e"></span><span>' + esc(T.crossPoint) + '</span></li></ul>';

    box.classList.add('fig', 'market-chart');
    box.innerHTML = svg + legend;
    $all('.js-tex', box).forEach(function (el) { renderInline(el, el.getAttribute('data-tex')); });
  }

  /* Statiniai užrašai, kurių tekstas imamas iš UI žodyno: <tspan data-i18n="unitYears">metai</tspan> */
  function fillI18n() {
    $all('[data-i18n]').forEach(function (el) {
      var v = T[el.getAttribute('data-i18n')];
      if (typeof v === 'string') el.textContent = v;
    });
  }

  function initLineExplorer(box) {
    var S = 26, O = 156, N = 5; // mastelis, centras, ašių ribos ±5
    var grid = '';
    for (var i = -N; i <= N; i++) {
      if (i === 0) continue;
      grid += '<line class="grid" x1="' + (O + i * S) + '" y1="' + (O - N * S - 6) + '" x2="' + (O + i * S) + '" y2="' + (O + N * S + 6) + '"/>';
      grid += '<line class="grid" x1="' + (O - N * S - 6) + '" y1="' + (O + i * S) + '" x2="' + (O + N * S + 6) + '" y2="' + (O + i * S) + '"/>';
    }
    box.classList.add('tryit');
    box.innerHTML =
      '<p class="tryit-title">' + ICON.slider + esc(T.tryIt) + '</p>' +
      '<p class="tryit-note" style="margin:0 0 6px">' + esc(T.tryItHint) + '</p>' +
      '<div class="tryit-eq" aria-live="polite"></div>' +
      '<svg class="plot" viewBox="0 0 312 312" role="img" aria-label="y = mx + b">' +
        '<defs><clipPath id="le-clip"><rect x="' + (O - N * S - 6) + '" y="' + (O - N * S - 6) + '" width="' + (2 * N * S + 12) + '" height="' + (2 * N * S + 12) + '"/></clipPath></defs>' + grid +
        '<line class="ax" x1="4" y1="' + O + '" x2="302" y2="' + O + '"/>' +
        '<line class="ax" x1="' + O + '" y1="10" x2="' + O + '" y2="308"/>' +
        '<path class="ah" d="M310 ' + O + 'L301 ' + (O - 4.5) + 'L301 ' + (O + 4.5) + 'Z"/>' +
        '<path class="ah" d="M' + O + ' 2L' + (O - 4.5) + ' 11L' + (O + 4.5) + ' 11Z"/>' +
        '<text class="m" x="296" y="' + (O - 8) + '">x</text>' +
        '<text class="m" x="' + (O + 8) + '" y="16">y</text>' +
        '<line class="ln js-line" clip-path="url(#le-clip)" x1="0" y1="0" x2="0" y2="0"/>' +
        '<circle class="pt-hi js-b" r="6" cx="' + O + '" cy="' + O + '"/>' +
      '</svg>' +
      '<div class="ctrl"><label for="le-m" class="m-lab"></label><input id="le-m" type="range" min="-3" max="3" step="0.5" value="1"><output for="le-m"></output></div>' +
      '<div class="ctrl"><label for="le-b" class="b-lab"></label><input id="le-b" type="range" min="-4" max="4" step="0.5" value="2"><output for="le-b"></output></div>' +
      '<p class="tryit-note js-note"></p>';

    var mIn = $('#le-m', box), bIn = $('#le-b', box);
    var mOut = $('output[for="le-m"]', box), bOut = $('output[for="le-b"]', box);
    var line = $('.js-line', box), dot = $('.js-b', box);
    var eq = $('.tryit-eq', box), note = $('.js-note', box);
    renderInline($('.m-lab', box), 'm');
    renderInline($('.b-lab', box), 'b');

    function draw() {
      var m = parseFloat(mIn.value), b = parseFloat(bIn.value);
      var x1 = -6, x2 = 6;
      line.setAttribute('x1', O + x1 * S); line.setAttribute('y1', O - (m * x1 + b) * S);
      line.setAttribute('x2', O + x2 * S); line.setAttribute('y2', O - (m * x2 + b) * S);
      dot.setAttribute('cy', O - b * S);
      mOut.textContent = fmtNum(m); bOut.textContent = fmtNum(b);
      var mx = m === 0 ? '' : (m === 1 ? 'x' : (m === -1 ? '-x' : texNum(m) + 'x'));
      var bb = b === 0 ? '' : ((mx ? (b > 0 ? ' + ' : ' - ') : (b < 0 ? '-' : '')) + texNum(Math.abs(b)));
      var tex = 'y = ' + ((mx + bb) || '0');
      renderInline(eq, tex);
      var slope = m > 0 ? T.slopeUp : (m < 0 ? T.slopeDown : T.slopeZero);
      note.textContent = slope + '. ' + T.intercept(fmtNum(b)) + '.';
    }
    mIn.addEventListener('input', draw);
    bIn.addEventListener('input', draw);
    draw();
  }

  /* ------------------------------------------------------------------
     9. FORMULĖS (KaTeX)
     Eilutėje: \( ... \)    Atskiroje eilutėje: \[ ... \]
     ------------------------------------------------------------------ */
  function renderMath(root) {
    if (typeof window.renderMathInElement !== 'function') return;
    window.renderMathInElement(root, {
      delimiters: [
        { left: '\\[', right: '\\]', display: true },
        { left: '\\(', right: '\\)', display: false }
      ],
      throwOnError: false,
      trust: function (c) { return c.command === '\\htmlClass'; },
      strict: function (code) { return code === 'htmlExtension' ? 'ignore' : 'warn'; },
      ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'option', 'svg']
    });
  }
  function renderInline(el, tex) {
    if (window.katex) window.katex.render(tex, el, { throwOnError: false });
    else el.textContent = tex;
  }

  /* ------------------------------------------------------------------
     Paleidimas
     ------------------------------------------------------------------ */
  function init() {
    buildHeader();
    buildCrumbs();
    buildFooter();
    buildCoursePath();
    buildModelGrid();
    buildPager();
    fillI18n();
    $all('[data-widget="market-chart"]').forEach(initMarketChart);
    $all('[data-widget="breakeven-chart"]').forEach(initBreakEvenChart);
    $all('[data-widget="means-chart"]').forEach(initMeansChart);
    renderMath(document.body);
    $all('.example').forEach(initExample);
    $all('.quiz').forEach(function (qz) {
      var numbering = qz.getAttribute('data-numbering');
      $all('.q', qz).forEach(function (q, i) { initQuestion(q, i, numbering); });
    });
    $all('[data-widget="line-explorer"]').forEach(initLineExplorer);
    initTerms();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
