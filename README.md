# Taikomoji matematika socialiniuose moksluose – mokomasis tinklapis

Statinis dvikalbis tinklapis (LT / EN), pritaikytas pirmiausia telefonui. Serverio ir kompiliavimo nereikia.

## Struktūra

```
index.html                     nukreipia į lt/index.html
lt/                            lietuviški puslapiai
  index.html                   pagrindinis: kurso struktūra
  tema-1.html                  1 tema: sąvokos + taikymų skyriai
  tema-1-nusidevejimas.html    1 skyrius: tiesinis nusidėvėjimas
  tema-1-rinkos-pusiausvyra.html  2 skyrius: rinkos pusiausvyra
  tema-1-pajamos-sanaudos-pelnas.html  3 skyrius: pajamos, sąnaudos, pelnas ir lūžio taškas
  tema-1-gamybos-priemoniu-pasirinkimas.html  4 skyrius: gamybos priemonių pasirinkimas
  tema-2.html                  2 tema: matricos sąvokos, rūšys, veiksmai + taikymų skyriai
  tema-2-pagrindiniai-veiksmai.html  1 skyrius: pagrindinių matricos veiksmų taikymai
  tema-2-sudetingesni-veiksmai.html  2 skyrius: sudėtingesni matricų veiksmų taikymai
  tema-2-rinkos-dalies-prognozavimas.html  3 skyrius: rinkos dalies prognozavimas (Markovo grandinės)
  tema-3.html                  3 tema: tiesinių lygčių sistemos, Gauso metodas, sprendinių skaičius + taikymų skyriai
  tema-3-planavimas-vienintelis.html  1 skyrius: racionalusis planavimas (vienintelis sprendinys)
  tema-3-planavimas-daug.html  2 skyrius: racionalusis planavimas (be galo daug sprendinių)
  tema-3-stabiliosios-rinkos-dalys.html  3 skyrius: stabiliosios rinkos dalys (P·X = X)
  tema-4.html                  4 tema: TP uždavinio esmė, tikslo funkcija, apribojimai, standartiniai uždaviniai, sprendimo idėja + 4 taikymų skyriai
  tema-4-nelygybiu-sistemos.html  1 skyrius: tiesinių nelygybių sistemos (brėžiniai lp-chart)
  tema-4-maksimizavimas.html   2 skyrius: standartiniai maksimizavimo uždaviniai
  tema-4-minimizavimas.html    3 skyrius: standartiniai minimizavimo uždaviniai
  tema-4-nestandartiniai.html  4 skyrius: nestandartiniai uždaviniai
  tema-5.html                  5 tema: simpleksų metodo esmė, pradinė lentelė, iteracija, dualusis uždavinys + 2 taikymų skyriai
  tema-5-maksimizavimas.html   1 skyrius: standartiniai maksimizavimo uždaviniai (simpleksų lentelės, galutinės lentelės skaitymas)
  tema-5-minimizavimas.html    2 skyrius: standartiniai minimizavimo uždaviniai (koeficientų lentelė, transponavimas, dualusis uždavinys)
  tarpinis-egzaminas.html
  baigiamasis-egzaminas.html
en/                            angliški puslapiai: index.html, tema-1.html, tema-1-nusidevejimas.html, tema-1-rinkos-pusiausvyra.html, tarpinis-egzaminas.html (kiti – kuriami)
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

**Versijos žyma.** Puslapiai stilių ir skriptą įkelia kaip `style.css?v=33` ir `site.js?v=33`. Pakeitus šiuos failus, padidinkite numerį visuose puslapiuose – tada naršyklės iškart įkels naują versiją, o ne seną iš atmintinės.

**Šaltiniai.** Kiekvieno puslapio pabaigoje yra blokas `<section class="section sources">` su knygų sąrašu.

**Aktyvuoti temą ar skyrių.** Faile `assets/js/site.js`, skyriuje „2. KURSO STRUKTŪRA“:
temai `COURSE` sąraše nustatykite `status: 'active'` ir `href: { lt: 'tema-2.html' }`;
taikymų skyriui – tą patį `MODELS` sąraše. Naują puslapį įrašykite į `PAGES` (nurodykite `parent`, kad veiktų naršymo kelias).

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

**Taikymai ir skyriai.** Visose temose temos puslapio skiltis su kortelėmis vadinama „Taikymai“ (`id="taikymai"`), o kiekvienas taikymų puslapis – skyriumi: kortelėse rodoma „1 skyrius, 2 skyrius…“ (pagal eilę `MODELS` sąraše), apatinė nuoroda – „Kitas skyrius“. Skyriaus puslapio viršuje rašoma `<span class="eyebrow">N tema · Taikymai · M skyrius</span>`, įžangoje – „Šiame skyriuje…“, šaltinių bloke – „Daugiau informacijos apie šį skyrių rasite:“.

**Reikalavimas su pavyzdžiu (tarpinis egzaminas).** Reikalavimo `li` viduje: `<p class="req-text">` (oficialus tekstas) ir `<div class="req-ex"><p class="req-ex-h">Pavyzdys</p> … <p class="ex-link"><a href="…">Visas pavyzdys →</a></p></div>`. Bloke veikia visi komponentai (formulės, `.dodont`, lentelės, brėžiniai, `.answer-box`).

**Simpleksų lentelė (5 tema).** `<table class="vtable sx-tbl">`: grupės pradžios langeliams klasė `g` (vertikali linija), tikslo funkcijos eilutei `tr.tf` (linija viršuje), tariamų kintamųjų vienetinei matricai `td.idb`, pagrindiniam stulpeliui `pc`, pagrindinei eilutei `tr.pr`, pagrindiniam elementui `pc pe`, dalmenims ir pertvarkiams – `td.ann`; legendai `ul.sx-legend`. Pertvarkių rodyklių schema – `vtable arr-tbl`; iteracijos eiga – `ol.flow` su paskutiniu `li.flow-q`. Galutinės lentelės skaitymui: vienetiniai stulpeliai `bc`, jų kintamųjų reikšmės `td.nv`, didžiausia tikslo funkcijos reikšmė `td.pv`, šešėlinės kainos `td.sp` (legendoje `sw-bc`, `sw-nv`, `sw-pv`, `sw-sp`), o paaiškinimų sąrašas – `ul.read-list` su `li.r-bc`, `li.r-pv`, `li.r-sp`. Lentelės su dalmenimis ar daugikliais dešinėje gali būti platesnės už telefono ekraną, todėl jų apvalkalas yra `<div class="tbl-wrap sx-scroll" tabindex="0" role="region" aria-label="…">` – lentelė slenkama į šoną, o ne spaudžiama. Minimizavimo (dualiojo uždavinio) galutinėje lentelėje atsakymas yra tikslo funkcijos eilutėje: po \(x, y\) – `td.nv`, \(n\) stulpelyje – `td.pv`, po \(s\) stulpeliais (reikalavimų viršijimas) – `td.sp`; vienetiniai stulpeliai nežymimi. Koeficientų lentelės transponavimas rodomas `div.mats.mats--flow` su dviem `sx-tbl` lentelėmis (eilutė \(s_1\) – `tr.pr`, stulpelis \(s_1\) – `.tc`). Dviejų stulpelių palyginimo lentelė – `vtable cmp-tbl` su grupių eilutėmis `tr.grp`.

**TP brėžinys (4 tema).** `<div data-widget="lp-chart" data-spec='{"x":[min,max,padala,užrašai kas k],"y":[…],"nn":"xy","c":[{"a":2,"b":3,"s":"le","r":12,"lab":"2x + 3y = 12","col":1,"lt":0.85,"arr":[0.2,0.7]}],"pts":[{"x":2,"y":4,"lab":"A(2; 4)","p":"ne","hi":true}],"test":[0,0]}'></div>` – nubrėžia ašis su vienetine atkarpa, tiesę \(ax + by = r\) su rodyklėmis į sprendinių pusę (`s`: `le` ≤, `ge` ≥), užrašą `lab` (`lt` – vieta 0–1, `lo` – poslinkis, `la` – lygiavimas), nuspalvina visų apribojimų ir `nn` sąlygų sankirtą, pažymi viršūnes (`p` – užrašo kryptis n, ne, e, se, s, sw, w, nw). Papildomai: `"maxh":420` – didesnis brėžinio aukštis, kai \(y\) intervalas ilgas; `"free":true` – skirtingi ašių masteliai (kai aibė labai maža, palyginti su ašių intervalais); `"rot":true` – tiesės užrašas pasukamas lygiagrečiai tiesei (tinka, kai šalia tiesės mažai vietos). `"ann":true` – privalomų grafiko elementų žymos 1–5 (ašių pavadinimai, koordinačių pradžia, vienetinė atkarpa, tiesės pavadinimas, leistina aibė); žymų vietas galima nurodyti duomenų koordinatėmis, pvz. `"ann":{"lab":[6,12.1]}` (taip pat `ax`, `o`, `u`, `set`). Tiesių spalvos `col`: 1 – mėlyna, 2 – žalsva, 3 – violetinė, 4 – raudona, 5 – gintarinė (4 ir 5 – kai tiesių daugiau nei trys). Vieno pavyzdžio brėžiniams naudokite tuos pačius `x`, `y` ir tiesių spalvas `col`.

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

Nuorodos turinyje rašomos į to paties aplanko failą (pvz., `tema-4-maksimizavimas.html#grafikas`). Jei to puslapio šia kalba dar nėra (`PAGES[...].href.en` tuščias), site.js funkcija `resolveLinks()` nukreipia nuorodą į kitos kalbos puslapį ir prideda prierašą (`T.inOther`, EN – „(in Lithuanian)“). Įrašius naujo puslapio vardą į `PAGES`, nuorodos ima vesti į jį savaime – puslapių taisyti nereikia.
