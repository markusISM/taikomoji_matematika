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
      openQ: 'Skaičiavimo klausimas',
      mcQ: 'Pasirink atsakymą',
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
      decimal: ','
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
      decimal: '.'
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
    { id: 't2', num: 2, status: 'soon', title: { lt: 'Matricos', en: null } },
    { id: 't3', num: 3, status: 'soon', title: { lt: 'Tiesinių lygčių sistemos', en: null } },
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
      { id: 'eq', status: 'soon',
        title: { lt: 'Rinkos pusiausvyra', en: 'Market Equilibrium' },
        desc: { lt: 'Paklausa ir pasiūla: pusiausvyros kaina ir kiekis, kai \\(D = S\\).' } },
      { id: 'be', status: 'soon',
        title: { lt: 'Pajamos, sąnaudos, pelnas ir lūžio taškas', en: null },
        desc: { lt: 'Lūžio taškas – gamybos kiekis, su kuriuo pajamos prilygsta sąnaudoms.' } },
      { id: 'means', status: 'soon',
        title: { lt: 'Gamybos priemonių pasirinkimas', en: null },
        desc: { lt: 'Kaip gamybos būdo pasirinkimas priklauso nuo planuojamos paklausos.' } }
    ]
  };

  /* Puslapiai: failo vardas kiekviena kalba ir tėvinis puslapis (kelio juostai).
     Kai sukursite anglišką puslapį, įrašykite jo failo vardą į href.en. */
  var PAGES = {
    home:    { href: { lt: 'index.html', en: 'index.html' } },
    t1:      { parent: 'home', href: { lt: 'tema-1.html', en: null },
               title: { lt: '1 tema', en: 'Topic 1' } },
    dep:     { parent: 't1', topic: 't1', model: 'dep', href: { lt: 'tema-1-nusidevejimas.html', en: null },
               title: { lt: 'Tiesinis nusidėvėjimas', en: 'Linear Depreciation' } },
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
        var head = '<span class="m-no">' + esc(T.model) + ' ' + (i + 1) + '</span><h3>' + esc(tr(m.title)) + '</h3>' +
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
      var nxt = list[idx + 1];
      if (nxt) {
        if (nxt.status === 'active' && nxt.href && nxt.href[LANG]) {
          html += '<a class="next" href="' + nxt.href[LANG] + '"><span class="dir">' + esc(T.nextModel) + ' →</span>' +
            '<span class="t">' + esc(tr(nxt.title)) + '</span></a>';
        } else {
          html += '<div class="pager-soon next" aria-disabled="true"><span class="dir">' + esc(T.nextModel) + '</span>' +
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
  function initQuestion(q, index) {
    var type = q.getAttribute('data-type') || 'open';
    var meta = document.createElement('div');
    meta.className = 'q-meta';
    var left = '<span><span class="q-num">' + esc(T.question(index + 1)) + '</span>' +
      (q.hasAttribute('data-draft') ? ' <span class="badge badge--draft">' + esc(T.draft) + '</span>' : '') + '</span>';
    var time = q.getAttribute('data-time');
    var right = time ? '<span class="q-time" title="' + esc(T.timeTitle) + '">' + ICON.clock + esc(T.minutes(time)) + '</span>' :
      '<span class="q-kind">' + esc(type === 'mc' ? T.mcQ : T.openQ) + '</span>';
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
    renderMath(document.body);
    $all('.example').forEach(initExample);
    $all('.q').forEach(initQuestion);
    $all('[data-widget="line-explorer"]').forEach(initLineExplorer);
    initTerms();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
