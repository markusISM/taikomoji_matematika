# Taikomoji matematika socialiniuose moksluose – mokomasis tinklapis

Statinis dvikalbis tinklapis (LT / EN), pritaikytas pirmiausia telefonui. Serverio ir kompiliavimo nereikia.

## Struktūra

```
index.html                     nukreipia į lt/index.html
lt/                            lietuviški puslapiai
  index.html                   pagrindinis: kurso struktūra
  tema-1.html                  1 tema: sąvokos + modelių kortelės
  tema-1-nusidevejimas.html    Tiesinis nusidėvėjimas
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

**Versijos žyma.** Puslapiai stilių ir skriptą įkelia kaip `style.css?v=4` ir `site.js?v=4`. Pakeitus šiuos failus, padidinkite numerį visuose puslapiuose – tada naršyklės iškart įkels naują versiją, o ne seną iš atmintinės.

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

**Sąvokos apibrėžimas (iššokantis langelis).**
```html
<button type="button" class="term" data-term="Sąvoka" data-def="Trumpas apibrėžimas.">sąvoka</button>
```

**Išskleidžiami blokai:** `<details class="more more--why">` (kodėl taip), `more--mistake` (tipinės klaidos), `more--exam` (egzaminui).

## Angliška versija

UI užrašai abiem kalbomis jau yra `site.js` skyriuje „1. UI UŽRAŠAI“. Kuriant EN puslapį:
nukopijuokite LT puslapį į `en/`, pakeiskite `<html lang="en">`, išverskite turinį ir įrašykite failo vardą į `PAGES[...].href.en`.
Kalbos perjungiklis automatiškai ves į atitinkamą puslapį (kol jo nėra – į `en/index.html`).
