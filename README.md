# Taikomoji matematika socialiniuose moksluose – mokomasis tinklapis

Statinis dvikalbis tinklapis (LT / EN), pritaikytas pirmiausia telefonui. Serverio ir kompiliavimo nereikia.

## Struktūra

```
index.html                     nukreipia į lt/index.html
lt/                            lietuviški puslapiai
  index.html                   pagrindinis: kurso struktūra
  tema-1.html                  1 tema: sąvokos + modelių kortelės
  tema-1-nusidevejimas.html    Tiesinis nusidėvėjimas
  tema-1-rinkos-pusiausvyra.html  Rinkos pusiausvyra
  tema-1-pajamos-sanaudos-pelnas.html  Pajamos, sąnaudos, pelnas ir lūžio taškas
  tema-1-gamybos-priemoniu-pasirinkimas.html  Gamybos priemonių pasirinkimas
  tema-2.html                  2 tema: matricos sąvokos, rūšys, veiksmai + taikymų skiltys
  tema-2-pagrindiniai-veiksmai.html  Pagrindinių matricos veiksmų taikymai
  tema-2-sudetingesni-veiksmai.html  Sudėtingesni matricų veiksmų taikymai
  tema-2-rinkos-dalies-prognozavimas.html  Rinkos dalies prognozavimas (Markovo grandinės)
  tema-3.html                  3 tema: tiesinių lygčių sistemos, Gauso metodas, sprendinių skaičius + taikymų skiltys
  tema-3-planavimas-vienintelis.html  Racionalusis planavimas (vienintelis sprendinys)
  tema-3-planavimas-daug.html  Racionalusis planavimas (be galo daug sprendinių)
  tema-3-stabiliosios-rinkos-dalys.html  Stabiliosios rinkos dalys (P·X = X)
  tema-4.html                  4 tema: TP uždavinio esmė, tikslo funkcija, apribojimai, standartiniai uždaviniai, sprendimo idėja + 4 skyriai (ruošiami)
  tarpinis-egzaminas.html
  baigiamasis-egzaminas.html
en/                            angliški puslapiai (kol kas tik index.html)
assets/
  css/style.css                visas dizainas (spalvos – :root bloke viršuje)
  js/site.js                   UI užrašai LT/EN, kurso struktūra, visi interaktyvūs elementai
  katex/                       KaTeX 0.16.45 (formulės), MIT licencija
  favicon.svg
```

Visos nuorodos santykinės, todėl tinklapis veikia ir GitHub Pages, ir atidarius `index.html` kompiuteryje.

## Paskelbimas per GitHub Pages

1. Įkelkite visą šio aplanko turinį į saugyklos šaknį (arba į aplanką `docs/`).
2. GitHub: **Settings → Pages → Build and deployment → Deploy from a branch** → pasirinkite šaką ir aplanką (`/root` arba `/docs`).
3. Failas `.nojekyll` jau įdėtas – jis turi likti.

## Dažniausi pakeitimai

**Spalvos.** `assets/css/style.css` viršuje, `:root` bloke (`--accent` – pagrindinė tamsiai mėlyna #001a52).

**Versijos žyma.** Puslapiai stilių ir skriptą įkelia kaip `style.css?v=19` ir `site.js?v=19`. Pakeitus šiuos failus, padidinkite numerį visuose puslapiuose – tada naršyklės iškart įkels naują versiją, o ne seną iš atmintinės.

**Šaltiniai.** Kiekvieno puslapio pabaigoje yra blokas `<section class="section sources">` su knygų sąrašu.

**Aktyvuoti temą ar modelį.** Faile `assets/js/site.js`, skyriuje „2. KURSO STRUKTŪRA“:
temai `COURSE` sąraše nustatykite `status: 'active'` ir `href: { lt: 'tema-2.html' }`;
modeliui – tą patį `MODELS` sąraše. Naują puslapį įrašykite į `PAGES` (nurodykite `parent`, kad veiktų naršymo kelias).

**Naujas puslapis.** Nukopijuokite esamą puslapį (pvz., `tema-1-nusidevejimas.html`), pakeiskite `<body data-page="...">` į raktą iš `PAGES` ir turinį `<main>` viduje. Antraštė, kelias, poraštė ir apatinė navigacija sugeneruojamos automatiškai.

**Formulės.** Eilutėje `\( ... \)`, atskiroje eilutėje `\[ ... \]`. Dešimtainis kablelis: `5{,}43`. Ilgas formules skaidykite į kelias eilutes (`\begin{aligned} ... \end{aligned}`), kad tilptų telefono ekrane.

**Sprendimo pavyzdys su žingsniais.**
```html
<article class="card example">
  <header class="example-head"><span class="example-tag">1 pavyzdys</span><h3>Pavadinimas</h3></header>
  <div class="problem"><span class="label">Sąlyga</span> ... </div>
  <div class="steps">
    <section class="step"><h4><span class="step-no">1</span>Žingsnio pavadinimas</h4> ... </section>
    <section class="step step--answer"><div class="answer-box"><span class="label">Atsakymas</span> ... </div></section>
  </div>
</article>
```

**Testo klausimai.**
```html
<!-- Atviras (skaičiavimo). q-solution neprivalomas – be jo mygtukas „Rodyti sprendimą“ nerodomas. -->
<article class="card q" data-type="open" data-time="1,5">
  <p class="q-text">Sąlyga</p>
  <div class="q-answer"><span class="value">34000</span></div>
  <div class="q-solution"> ... </div>
</article>

<!-- Su atsakymų variantais. Teisingas variantas žymimas data-correct; q-explain neprivalomas. -->
<article class="card q" data-type="mc">
  <p class="q-text">Klausimas</p>
  <ol class="q-options"><li>A</li><li data-correct>B</li><li>C</li></ol>
  <div class="q-explain">Paaiškinimas</div>
</article>
```
`data-time` – rekomenduojamas laikas minutėmis (neprivalomas). `data-draft` – parodo žymą „Juodraštis“.

**Savarankiški uždaviniai.** Tas pats komponentas kaip testo klausimai, tik konteineriui nurodykite `data-numbering="task"` – tada rašoma „1 uždavinys“, „2 uždavinys“. Numeracija kiekviename bloke prasideda iš naujo.
```html
<div class="quiz" data-numbering="task"> … <article class="card q" data-type="open"> … </article> … </div>
```

**Paklausos ir pasiūlos grafikas.** Paklausa \(p = ax + b\), pasiūla \(p = cx + d\); pusiausvyros taškas apskaičiuojamas automatiškai. `data-numeric="0"` – vietoj skaičių rodomi \(p_e\), \(x_e\).
```html
<div data-widget="market-chart" data-a="-0.04" data-b="560" data-c="0.06" data-d="160"
     data-xmax="7000" data-ymax="600" data-numeric="1"></div>
```
Grafikų užrašai (ašys, legenda) imami iš `site.js` žodyno abiem kalbomis. Statiniuose SVG užrašuose naudokite `<tspan data-i18n="unitYears">metai</tspan>`.

**Lūžio taško grafikas.** Pajamos \(R(x) = px\), sąnaudos \(TC(x) = F + Vx\); lūžio taškas \(x_L = F/(p - V)\) apskaičiuojamas automatiškai, nuostolio ir pelno sritys nuspalvinamos. `data-numeric="0"` – vietoj skaičių rodomi \(F\), \(x_L\). Lūžio taško raidė imama iš žodyno (LT – L, EN – B).
```html
<div data-widget="breakeven-chart" data-p="19" data-v="7" data-f="21600"
     data-xmax="3000" data-ymax="60000" data-numeric="1"></div>
```

**Gamybos būdų sąnaudų grafikas.** Kiekvienas būdas užrašomas `pavadinimas:F:V` (\(TC = F + Vx\)), būdai skiriami `|`. Žemiausiai esanti tiesė paryškinama, jos susikirtimo taškai ir kiekiai pažymimi automatiškai, po ašimi rodoma juosta „pigiausias“. `data-xstep`, `data-ystep` – padalos (vienetinė atkarpa). `data-numeric="0"` – be skaičių. `data-annotate="1"` – privalomų grafiko elementų žymos 1–4.
```html
<div data-widget="means-chart" data-lines="a:0:230|b:70000:90|c:250000:10"
     data-xmax="3000" data-ymax="700000" data-xstep="500" data-ystep="100000"></div>
```

**Matricos.** Matrica rašoma `\begin{pmatrix} 1 &amp; 2 \\ 3 &amp; 4 \end{pmatrix}` (HTML faile `&` rašomas `&amp;`). Kelios matricos greta: `<div class="mats"><span>\(A = …\)</span><span>\(B = …\)</span></div>` – siaurame ekrane jos persikelia į kitą eilutę. Elementą galima paryškinti: `\htmlClass{hd}{-4}` (oranžinė), `\htmlClass{hr}{1}` (mėlyna – eilutė), `\htmlClass{hc}{9}` (žalia – stulpelis).

**Lentelės sąlygoje.** Platesnę lentelę dėkite į `<div class="tbl-wrap">` ir naudokite `class="vtable compact"` – siaurame ekrane ji neišeis už ribų. **Matmenų grandinė:** `<div class="dimchain"><span class="dc">padaliniai × <b>prekės</b></span><span class="op">·</span>…<span class="dc res">…</span></div>` – telefone išsidėsto stulpeliu.

**Skiltys ir skyriai vietoj modelių.** Temoms, įrašytoms `UNIT` sąraše (`site.js`), kortelės vadinamos „Skiltis 1, 2…“ (`'part'`) arba „Skyrius 1, 2…“ (`'chapter'`, 4 tema), o apatinė nuoroda – „Kita skiltis“ arba „Kitas skyrius“.

**Išplėstinė matrica ir pertvarkiai (3 tema).** Išplėstinė matrica: `\left(\begin{array}{ccc|c} 1 &amp; 1 &amp; 2 &amp; -1 \\ … \end{array}\right)`. Pertvarkis šalia jos – antras masyvas su tiek pat eilučių: `\begin{array}{cc} \htmlClass{ha}{(-2)} &amp; \htmlClass{ha}{(-4)} \\ \htmlClass{ha}{\downarrow} &amp; \htmlClass{ha}{\vert} \\ &amp; \htmlClass{ha}{\downarrow} \end{array}` (tuščiai eilutei – `\phantom{0}`, dalybai – `\htmlClass{ha}{{:}\,k}`). Eilučių skaičiavimas: `<table class="rowcalc">` su `th` pavadinimu, `td` skaičiais, `td.rhs` (už brūkšnio), `td.z` (gautas nulis) ir paskutine eilute `tr.res`. Sprendinių atvejų brėžiniai – `.geo3`, tiesioginė ir atbulinė eiga – `.phases`.

**Sąvokos apibrėžimas (iššokantis langelis).**
```html
<button type="button" class="term" data-term="Sąvoka" data-def="Trumpas apibrėžimas.">sąvoka</button>
```

**Išskleidžiami blokai:** `<details class="more more--why">` (kodėl taip), `more--mistake` (tipinės klaidos), `more--exam` (egzaminui).

## Angliška versija

UI užrašai abiem kalbomis jau yra `site.js` skyriuje „1. UI UŽRAŠAI“. Kuriant EN puslapį:
nukopijuokite LT puslapį į `en/`, pakeiskite `<html lang="en">`, išverskite turinį ir įrašykite failo vardą į `PAGES[...].href.en`.
Kalbos perjungiklis automatiškai ves į atitinkamą puslapį (kol jo nėra – į `en/index.html`).
