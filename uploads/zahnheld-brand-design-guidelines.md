# Zahnheld Brand & Design Guidelines

**Working Draft v0.2** *Stand: Mai 2026*

Konsolidiert die Akkvrat Rebranding-Konzeption (©2026 Zahnheld) mit der Web-Implementations-Sprache, die wir an Olaplex.com referenziert haben. Alle Akkvrat-Festlegungen (Logo, Farben, Schriften, Naming, Editorial Direction) sind als gesetzt zu betrachten. Was hier zusätzlich erscheint, sind Implementierungs-Pattern für Web, Spacing-System, Component-Logik und Operationalisierung. Diese sind als Working Draft zu behandeln und sollen mit Akkvrat in der nächsten Iteration verfeinert werden.

---

## Inhaltsverzeichnis

1. [Brand Foundations](#1-brand-foundations)  
2. [Logo-System](#2-logo-system)  
3. [Farb-System](#3-farb-system)  
4. [Typografie](#4-typografie)  
5. [Bildsprache](#5-bildsprache)  
6. [Layout-Prinzipien](#6-layout-prinzipien)  
7. [Web-Komponenten](#7-web-komponenten)  
8. [Packaging](#8-packaging)  
9. [Out-of-Home und Print](#9-out-of-home-und-print)  
10. [Tone of Voice](#10-tone-of-voice)  
11. [Implementation Notes](#11-implementation-notes)

---

## 1\. Brand Foundations

### 1.1 Position

Zahnheld ist ein Premium-DTC-Brand für orale Gesundheit. Akkvrat verschiebt die Positionierung weg von "Beauty/Drogerie" hin zu **Precision Engineering**. Die Bezugswelt ist Performance-Engineering und Functional Luxury, nicht Cosmetics.

Akkvrats Referenzen:

- **BMW Performance-Lighting:** Präzision, technische Geometrie  
- **Moncler:** Premium-Textil mit klarem Mark  
- **RIMOWA:** Hardware-Detail, technische Beschläge  
- **FRGMT (Fragment Design):** Editorial Restraint, Mono-Mark

Daraus folgt die Tonalität: technisch, ruhig, selbstbewusst, ohne Wellness-Pathos und ohne aggressive Performance-Marketing-Sprache.

### 1.2 Brand-Charakter

| Was Zahnheld IST | Was Zahnheld NICHT IST |
| :---- | :---- |
| Technisch präzise | Klinisch-steril |
| Selbstbewusst, ohne zu schreien | Influencer-Hyperbel |
| Editorial, ruhig | Drogerie-laut |
| Ergebnisorientiert | Versprechen-überladen |
| Deutsch primär, Englisch als Akzent | Denglisch |

### 1.3 Tagline-Architektur

Aus Akkvrats Application V7 abgeleitet:

**Oral Care First. Whitening Second.**

**Form follows Brush.**

Pattern: zwei kurze Statements, durch Punkt getrennt, Hierarchie klar, leise Schicht Wortspiel. Diese Form ist die offizielle Brand-Voice für Headlines, Plakate, Hero-Sektionen.

### 1.4 Produkt-Naming-System

Akkvrat etabliert vier Produktlinien mit eigenem Naming und eigener Farbcodierung:

| Linie | Funktion | Subline-Namen |
| :---- | :---- | :---- |
| **POWER** | Schallzahnbürsten | Core T, Core T Pro, Core W, Core W Pro, Core W Fly, Core Air |
| **CARE** | Tägliche Pflege, Zahnpasta, Mundspülung | Balance (ZP / MS / S), B12, Shild |
| **WHITE** | Whitening | Clean, Boost, Go, Rinse |
| **RECOVERY** | Regeneration, Schlaf | Sleep, Glow, Calm (MIG / MÖ) |

Zusätzlich existieren **Hero-Display-Codes** für plakative Markenkommunikation auf Packaging und in Hero-Sektionen:

- **GERO** für Schallzahnbürste  
- **FLOW** für Munddusche  
- **AERO** für Vaporizer  
- **GLOW** für LED for Gums

Plus alternative Codes: PULSE, WAVE, AURA, LUXE.

Doppel-System: technische SKU-Bezeichnung intern, plakative Display-Codes für Packaging und Hero-Marketing. Display-Codes sind immer in **Owners** gesetzt, sehr groß, mit Plakat-Charakter.

---

## 2\. Logo-System

### 2.1 Core Wordmark 2.0 \[Akkvrat, gesetzt\]

`zahnheld®` in Kleinbuchstaben, mit charakteristisch nach links geneigtem `h` und gerundeten Terminals. Trademark-Symbol oben rechts.

**Verwendung:** Standardform überall wo Wordmark gefragt ist (Header, Footer, Packaging-Footer, Print-Sublines, Favicons).

### 2.2 Alternate Wordmark 1.0 \[Akkvrat, gesetzt\]

`zahn / held` zweizeilig gestapelt, ohne Trademark-Symbol. Selbe Schrift wie Core, aber als Block.

**Verwendung:** Quadratische oder vertikale Formate (Avatar, App-Icon, Patches, Print-Sticker, Social-Media-Profilbild).

### 2.3 Precision Logo (Image Mark) \[Akkvrat, gesetzt\]

Stilisierter Zahn als überlagerte Linework-Kontur. Mehrere parallele Linien erzeugen einen Wireframe-3D-Effekt. Direkter Verweis auf BMW-Rückleuchten-Geometrie.

| Variante | Use Case |
| :---- | :---- |
| **Linework Standard** (V2) | Klare Outlines, weiß auf schwarz oder schwarz auf weiß. Standard-Mark für alle digitalen Anwendungen. |
| **Embossed/Relief** (V2) | Physische Prägung auf Verpackung, Karton, Print-Materialien. |
| **Wave/Audio-Variant** (V4, V10) | Erweiterte Konturen mit Wellen-Pattern. Für emotionalere Anwendungen, Editorial-Kontext, Brand-Campaigns. |

### 2.4 Logo-Lockup-Regeln

- Precision Logo \+ Wordmark stehen vertikal gestapelt: Mark oben, Wordmark unten (siehe Akkvrat V2-Image-Logo-Slide).  
- Mindestabstand zwischen Mark und Wordmark entspricht der Höhe des `h` im Wordmark.  
- Auf farbigem Untergrund: weiße Variante. Auf weißem Untergrund: schwarze Variante. Niemals Logo in einer der Sub-Brand-Akzentfarben (Mint/Mauve/Sand) ausführen.

### 2.5 Mindestgröße \[Ergänzung\]

- Digital: Wordmark 80px Breite, Precision Mark 32px Höhe  
- Print: Wordmark 25mm Breite, Precision Mark 10mm Höhe

### 2.6 Falsche Verwendung

- Keine Streckung oder Verzerrung  
- Keine Neufarben außerhalb der definierten Palette  
- Kein Drop Shadow  
- Kein Outline-Effekt  
- Keine Rotation außer 0° und 90°

---

## 3\. Farb-System

### 3.1 Primärpalette (Vibe 1\) \[Akkvrat, gesetzt\]

| Name | Approximation Hex | Funktion |
| :---- | :---- | :---- |
| **White** | `#FFFFFF` | Primary Background |
| **Black** | `#000000` | Primary Text, Strong CTAs, Heavy Type |
| **Anthrazit** | `#535353` | Secondary Text, Hairlines, Subtile UI |
| **Mint** | `#A8D7C1` | CARE Sub-Brand Accent |
| **Warm Sand** | `#EBCFB5` | RECOVERY Sub-Brand Accent, Card Backgrounds |
| **Dusty Mauve** | `#B894B4` | CARE Sub-Brand Accent (B12-Linie) |

Hex-Werte sind aus den Akkvrat-Farbfeldern approximiert. Vor finalem Web-Rollout mit Akkvrat verbindlich abgleichen.

### 3.2 Sub-Brand-Farb-Coding \[Akkvrat, gesetzt\]

Akkvrat etabliert pro Produktlinie eine eigene Farbcombo. Diese muss im Web sichtbar werden, nicht nur auf Packaging.

| Linie | Primär | Sekundär | Akzent |
| :---- | :---- | :---- | :---- |
| **POWER** | Black | White | rein monochrom |
| **CARE** | White / Black | Dusty Mauve | Mint |
| **WHITE** | Black / White | Anthrazit | – |
| **RECOVERY** | Black / White | Warm Sand | – |

**Web-Anwendung:**

- Auf einer **Collection Page** der jeweiligen Linie wird die Sub-Brand-Akzentfarbe als Hairline-Color, Pill-Badge-Hintergrund und Hover-State eingesetzt.  
- Auf der **PDP** eines Produkts erscheint die Sub-Brand-Farbe als kleines Detail in Pill-Badges, Section-Dividern und gelegentlich als Accent-Background unter Produktshots.  
- Auf **globalen Seiten** (Homepage, Cart, Checkout, Account) bleibt die Site monochrom (Black/White/Anthrazit/Warm Sand für Cards). Sub-Brand-Farben tauchen erst beim Eintauchen in die Linie auf.

### 3.3 Funktionale Farben \[Ergänzung\]

Akkvrat spezifiziert keine UI-State-Farben. Vorschlag:

| State | Farbe | Hex |
| :---- | :---- | :---- |
| Error | Anthrazit auf hellem Hintergrund mit fettem Text und subtilem Mauve-Tint | `#9A6B7A` |
| Success | Anthrazit-Text mit Mint-Akzent | `#7AB890` |
| Info | Anthrazit | `#4A4A4A` |
| Disabled | 40% Anthrazit auf Weiß | `#4A4A4A` mit `opacity: 0.4` |

Begründung: Standard-System-Rot/Grün/Blau würden den Akkvrat-Ton brechen. Stattdessen werden bestehende Akzentfarben gedeckt eingesetzt. Mit Akkvrat im Detail abstimmen.

### 3.4 Card- und Section-Backgrounds \[Ergänzung, Olaplex-inspiriert\]

- **Standard Product Card Background:** Warm Sand bei mindestens 50% Aufhellung, also etwa `#F5ECDC`. Das gibt den cremigen Hintergrund den wir bei Olaplex gesehen haben, aber in Akkvrats Palette verankert.  
- **Editorial Section Background:** Pure White  
- **Hero Background:** Black oder Full-Bleed Photography  
- **Footer Background:** Black

---

## 4\. Typografie

### 4.1 Display-Schriften \[Akkvrat, gesetzt\]

#### Articulant

Hohe, kondensierte Display-Schrift mit dünnen Strichstärken. Wird in mehreren Gewichten verwendet (Regular, Medium, Bold, Black).

**Use Case:** Hero-Headlines, Display-Statements, Brand-Quotes, "Form follows Brush"-Plakat-Stil.

#### Owners

Sehr fette, dichte Block-Schrift. Charakteristische Display-Schrift für plakative Aussagen.

**Use Case:** Display-Codes auf Packaging (GERO, FLOW, AERO, GLOW), Plakat-Headlines, Über-die-Bildkante-Schriftzüge im OOH-Stil. Im Web nur sehr sparsam für Hero-Headlines.

### 4.2 Body-Schrift \[Ergänzung, Vorschlag\]

Akkvrat hat keine Body-Schrift definiert. Articulant ist als Body zu kondensiert, Owners zu fett. Beide funktionieren ab 24px aufwärts, darunter wird die Lesbarkeit problematisch.

**Empfehlung:** **Inter** als Body-Sans. Begründung:

- Open-Source, kostenfrei, keine Lizenzkosten  
- Optimiert für Screen-Lesbarkeit in 14-16px  
- Neutraler Charakter, der Articulant und Owners nicht konkurriert  
- Variabel, deckt alle Gewichte ab

**Alternativen falls Akkvrat eine andere Präferenz hat:** Aktiv Grotesk oder Söhne. Beide kommerziell, aber tonally möglicherweise präziser.

Mit Akkvrat final abstimmen. Diese Empfehlung ist nicht festgelegt.

### 4.3 Type Scale \[Ergänzung\]

Modular Scale mit Faktor 1.25 (Major Third), 16px als Body-Base.

| Token | Pixel (Desktop) | Pixel (Mobile) | Schrift | Verwendung |
| :---- | :---- | :---- | :---- | :---- |
| `display-xl` | 96px | 56px | Owners | Hero-Display-Codes, Plakat |
| `display-lg` | 72px | 44px | Articulant Black | Hero-Headlines |
| `display-md` | 56px | 36px | Articulant Bold | Section-Titles |
| `h1` | 40px | 32px | Articulant Bold | Page-Titles |
| `h2` | 32px | 26px | Articulant Bold | Subsections |
| `h3` | 24px | 20px | Articulant Medium | Card-Titles |
| `h4` | 20px | 18px | Inter SemiBold | UI-Labels groß |
| `body-lg` | 18px | 16px | Inter Regular | Lead-Paragraphs |
| `body` | 16px | 16px | Inter Regular | Standard-Body |
| `body-sm` | 14px | 14px | Inter Regular | Secondary Text |
| `caption` | 12px | 12px | Inter Medium | Pill-Badges, Microcopy |
| `eyebrow` | 11px | 11px | Inter Medium uppercase letter-spacing 0.1em | Kleine Labels über Headlines |

### 4.4 Schreibweise: Mixed Case vs All Caps

**Prinzip:** Headlines und Body laufen in Mixed Case. ALL CAPS ist reserviert für:

- Eyebrow-Labels (z. B. `FÜR ALLE ZAHNTYPEN`)  
- Pill-Badges (`BESTSELLER`, `NEU`, `ONLINE EXKLUSIV`)  
- Kategorie-Labels in Navigation und Footer  
- Display-Codes auf Packaging (`GERO`, `FLOW`, `AERO`, `GLOW`)

Diese Regel folgt der modernen DTC-Typografie-Konvention, die wir auch bei Olaplex sehen.

### 4.5 Letter-Spacing und Line-Height

| Element | Letter-Spacing | Line-Height |
| :---- | :---- | :---- |
| Display Owners | \-0.02em | 0.95 |
| Display Articulant | \-0.01em | 1.0 |
| Headlines | 0 | 1.1 |
| Body | 0 | 1.5 |
| Eyebrow / Caps | 0.1em | 1.2 |
| Pill-Badges | 0.05em | 1 |

---

## 5\. Bildsprache

### 5.1 Vier Bild-Register

Akkvrat etabliert in den Applications zwei dominante Photo-Register. Für Web brauchen wir zusätzlich zwei weitere, weil Zahnheld als E-Commerce-Site mehr Bildtypen abdecken muss als ein reines Brand-Lookbook.

#### Register A: Architectural Lifestyle \[Akkvrat V1, V7\]

Beton, Sichtbeton-Bäder, minimalistische Sanitär-Architektur, gedeckte Naturtöne (Grau, helles Beige, kühles Weiß). Produkte stehen als kleine, präzise Objekte im Raum. Fotografie ist still, weiträumig, mit großem Negativraum.

**Use Case:** Homepage-Hero-Variante 1, About-Page, Brand-Sektionen, "Foundational Care"-ähnliche Module.

#### Register B: Editorial Studio Portrait \[Akkvrat V3, V4, V9, V10\]

Studio-Portraits mit neutralen, leicht warmtönigen Hintergründen (helles Grau, Off-White). Models in ruhigen Posen, oft Nahaufnahmen (Ohr, Mund, Profil). Hauttöne natürlich, kein starkes Color-Grading. Sehr Pharrell-Style.

**Use Case:** Homepage-Hero-Variante 2, Editorial-Sections, "Empfohlen von Zahnärzten"-Module, About-Pages.

#### Register C: Studio Product Shot \[Ergänzung\]

Akkvrat hat keine dedizierten Web-Produkt-Shots gezeigt, aber sie sind für E-Commerce nicht verzichtbar. Vorschlag: Produkte zentriert auf Warm-Sand-Light-Background (`#F5ECDC`), neutral ausgeleuchtet, leichter natürlicher Schlagschatten. Kein künstlicher Reflection, kein Drop Shadow.

**Use Case:** Product Cards, PDP Image 1, Cart Items, Search Results.

#### Register D: Macro Texture \[Ergänzung, Olaplex-inspiriert\]

Detailaufnahmen von Texturen: Zahnpasta-Strang, Wasserstrahl der Munddusche, Borsten-Detail in Makro, Schaumblasen. Stil: hochaufgelöst, kühle Farbtemperatur, B\&W oder sehr gedeckte Töne. Niemals bunt oder warm-fotografiert.

**Use Case:** Category-Tiles, Sub-Brand-Hero-Sektionen, Product-Feature-Highlights.

### 5.2 Verboten

- Stockfotografie ohne Akkvrats Approval  
- Lifestyle-Shots mit aggressiven Color-Grading-Looks (Influencer-Stil)  
- Models mit überzeichneten Smiles ("Zahnpasta-Werbung-Lächeln")  
- Vor-Nach-Bilder als Hero (nur in spezifischen Kontexten und nicht plakativ)  
- Lens-Flares, Bokeh-überladene Hintergründe  
- Aufgeräumte "Influencer-Bathroom"-Flat-Lays mit dutzend Produkten

### 5.3 OOH-Pattern \[Akkvrat V2\]

Akkvrat hat ein OOH-Pattern definiert: schwarzer Hintergrund, weiße Zahn-Outlines (Precision Mark) als Reihe, Tagline darunter ("Form follows Brush."). Das ist die offizielle Plakat-Sprache. Im Web kann dieses Pattern als Section-Background verwendet werden, z. B. als Brand-Statement-Sektion auf der Homepage.

---

## 6\. Layout-Prinzipien

### 6.1 Grid

12-Column Grid auf Desktop, 4-Column auf Tablet, 2-Column auf Mobile. Standard-Gutter 24px Desktop, 16px Mobile.

**Container-Breiten:**

- Max-Content: 1440px  
- Max-Read: 768px (für Body-Text)  
- Edge-to-Edge: 100vw (für Hero, Editorial Photography)

### 6.2 Hairlines als Strukturelement

Olaplex nutzt rote Hairlines als Magazin-Layout-Element. Wir adaptieren das, ersetzen aber die Farbe.

**Default-Hairline:** `1px solid #4A4A4A` (Anthrazit) auf weißen Sektionen, `1px solid rgba(255,255,255,0.2)` auf schwarzen Sektionen.

**Sub-Brand-Hairlines:** Auf Collection Pages und PDPs einer spezifischen Linie wird die Hairline durch die Sub-Brand-Akzentfarbe ersetzt:

- POWER: Black (oder Anthrazit)  
- CARE: Dusty Mauve  
- WHITE: Anthrazit  
- RECOVERY: Warm Sand (etwas dunkler als Card-Background, etwa `#C9B289`)

**Wo Hairlines eingesetzt werden:**

- Vertikal zwischen Produktkarten in Collection-Grids  
- Horizontal zwischen Sektionen auf der Homepage  
- Vertikal zwischen Sub-Sektionen innerhalb eines Moduls  
- Niemals als reine Dekoration ohne strukturelle Funktion

### 6.3 Spacing-System

8px-Base. Alle Spacing-Werte sind Vielfache von 4 (für feinere Adjustments) oder 8 (Standard).

| Token | Pixel | Use Case |
| :---- | :---- | :---- |
| `space-2xs` | 4px | Icon-Text-Abstand |
| `space-xs` | 8px | Tight Stack |
| `space-sm` | 16px | Standard-Abstand in Cards |
| `space-md` | 24px | Section-Innenabstand |
| `space-lg` | 40px | Zwischen Sub-Sections |
| `space-xl` | 64px | Zwischen Sections |
| `space-2xl` | 96px | Section-Padding-Top/Bottom Desktop |
| `space-3xl` | 128px | Hero-Padding |

Mobile-Reduktion: alle Werte über 24px werden auf Mobile mit Faktor 0.6 multipliziert.

### 6.4 Section-Patterns

Sieben wiederkehrende Section-Pattern aus der Olaplex-Logik, in Zahnheld-Sprache übersetzt:

1. **Hero Full-Bleed Editorial** (Register A oder B) mit Display-Headline links unten  
2. **Hero Display-Code** (Owners-Schriftzug groß auf weiß oder schwarz)  
3. **Promo Split** (zwei nebeneinanderliegende Promo-Banner)  
4. **Product Carousel** (4 Cards horizontal, mit Section-Title links)  
5. **Quiz/Diagnose-Modul** (2-spaltig mit Editorial-Photo links und Quiz-CTA rechts)  
6. **Editorial Blog** (zwei große Blog-Cards nebeneinander)  
7. **Trust Modul** (Editorial-Portraits in Reihe mit Tagline)

---

## 7\. Web-Komponenten

### 7.1 Header und Navigation

**Struktur (von links nach rechts):**

- Logo Wordmark (Core 2.0)  
- Hauptnavigation: SHOP / BESTSELLER / DIAGNOSE / ANGEBOTE / RATGEBER  
- Pro-Site-CTA als Pill (für B2B-Path, falls vorhanden)  
- Icon-Set: Suche, Account, Wishlist (optional), Cart

**Verhalten:**

- Sticky on scroll  
- Hairline-Bottom-Border in Anthrazit  
- Mega-Menu unter SHOP mit Sub-Brand-Navigation (POWER / CARE / WHITE / RECOVERY)  
- Auf Sub-Brand-Pages färbt sich die aktive Nav-Item in der Sub-Brand-Farbe

### 7.2 Announcement Bar

Schwarzer Streifen ganz oben, weiße Schrift, 12-13px, Eyebrow-Stil. Rotiert zwischen 2-3 Messages.

Beispiel-Content:

- "Neu hier? 15% auf deine erste Bestellung. Jetzt anmelden"  
- "Kostenloser Versand ab 50€"  
- "Gratis Care-Set mit Code WASHCARE"

### 7.3 Hero-Sektionen

Drei Hero-Pattern, alle Full-Bleed:

**Hero A: Editorial Photo**

Großes Photo (Register A oder B) füllt den Hero. Display-Headline in Articulant Bold weiß, Position bottom-left. Eyebrow "NEU" oder Kategorie darüber. CTA Pill outlined weiß.

**Hero B: Display-Code-Plakat**

Ganzseitiger Owners-Schriftzug (z. B. `GERO`) auf schwarzem oder weißem Background. Kleines Subline-Statement und CTA. Sehr plakativ, nur für Produktlaunches.

**Hero C: Split Editorial**

Zwei Spalten, links Photo, rechts Headline \+ Body \+ CTA auf white. 50/50-Split.

### 7.4 Product Cards

Olaplex-Pattern, in Zahnheld-Tonalität:

```
┌─────────────────────────┐
│ [Pill Badge]    [♡]     │  Pill links: BESTSELLER/NEU/ONLINE EXKLUSIV
│                          │
│      [Produktbild]       │  Background: Warm Sand light
│                          │
│ FÜR ALLE ZAHNTYPEN       │  Eyebrow Caps Anthrazit
│ Produktname              │  Articulant Medium
│ ★★★★★ 4.7 (1.234)        │  Rating
│ 89€                      │  Body Bold
│ [GRÖSSE WÄHLEN]          │  Pill outlined
└─────────────────────────┘
```

**Spezifikationen:**

- Card-Background: Warm Sand light (`#F5ECDC`)  
- Card-Padding: 24px  
- Hairline-Right zum nächsten Card: Anthrazit (oder Sub-Brand auf dedizierten Pages)  
- Hover: leichte Background-Aufhellung um 5%, Card-Inhalt unverändert  
- Quick-Add-Button erscheint bei einfachen SKUs ("HINZUFÜGEN"), bei Variantenprodukten "GRÖSSE WÄHLEN"

### 7.5 Pill-Badges

Drei Badge-Typen:

| Typ | Background | Text | Use Case |
| :---- | :---- | :---- | :---- |
| **Default** | White solid | Black | Bestseller, Neu, Online Exklusiv |
| **Sub-Brand** | Sub-Brand-Color | White oder Black | Kategorie-Hervorhebung |
| **Outline** | Transparent | Black, 1px black border | Filter-Tags |

Padding: 8px 16px. Border-Radius: 999px (full pill). Schrift: Caption 12px Medium uppercase, letter-spacing 0.05em.

### 7.6 Buttons / CTAs

Drei CTA-States, klar getrennt:

**Primary (Solid Black Pill)**

- Background: Black  
- Text: White  
- Padding: 16px 32px  
- Border-Radius: 999px  
- Hover: Background `#1A1A1A`  
- Use Case: Hero-CTA, Cart-Add-Primary, Checkout-Continue

**Secondary (Outline Pill)**

- Background: Transparent  
- Text: Black  
- Border: 1px solid Black  
- Padding: 16px 32px  
- Border-Radius: 999px  
- Hover: Background Black, Text White  
- Use Case: ADD-Buttons in Cards, READ MORE, LEARN MORE, alle Tertiary-CTAs

**Ghost (Text-Link)**

- Kein Background, kein Border  
- Text: Black, mit Underline on Hover  
- Use Case: "Mehr erfahren"-Links inline im Body

### 7.7 Collection Grid mit Quiz-Insertion

4-Column-Grid auf Desktop. Olaplex-Insight: nach 4-6 Produktkarten wird ein **2-spaltig breites Quiz-Modul** eingefügt, das wie eine Card aussieht, aber zur Diagnose führt.

```
┌────┬────┬────┬────┐
│ P1 │ P2 │ P3 │ P4 │
├────┼────┼────┼────┤
│ P5 │ Q U I Z      │  2 Slots, Editorial Photo + CTA
│    │              │
├────┼──────────────┤
│ P6 │ P7 │ P8 │ P9 │
└────┴────┴────┴────┘
```

**Quiz-Modul-Inhalt:**

- Editorial-Photo (Register B)  
- Headline: "Nicht sicher, was zu dir passt?"  
- Body: "Beantworte 6 Fragen und erhalte deine persönliche Routine."  
- CTA: "Diagnose starten" (Pill solid black)

### 7.8 Quiz-Modul (Standalone)

Multi-Step-Modul, das auf der Homepage interaktiv erscheint. Akkvrat-Stil:

- Step-Counter oben (`SCHRITT 1 / 6` in Eyebrow)  
- Frage-Headline in Articulant Bold  
- Optionen als Cards mit Icon oder Photo  
- "Weiter"-Button als Pill solid

Quiz-Output: personalisierte Routine-Empfehlung mit 3-5 Produkten in Sub-Brand-Color-Coding.

### 7.9 Trust-Modul "Empfohlen von"

Olaplex hat "Trusted By Stylists Worldwide" mit B\&W-Stylist-Portraits. Zahnheld-Adaption:

**"Empfohlen von Zahnärzten und Hygienikern"**

- Headline links in Articulant Bold  
- Drei Studio-Portraits (Register B, B\&W) rechts in Reihe  
- Jedes Portrait mit Name und Titel unten links: "Dr. Jana Wolters / Zahnärztin München"

**Wichtig:** Memory-Regel für Zahnheld einhalten, dass keine unverified Doctor Endorsements erlaubt sind. Personen müssen real, namentlich freigegeben und mit dokumentierter Empfehlungsbeziehung verknüpft sein. Niemals fiktive oder Stock-Personen mit Doktor-Titel.

### 7.10 Editorial Blog Module

Zwei große Blog-Cards nebeneinander auf der Homepage.

```
┌──────────────────┬──────────────────┐
│ [Editorial Photo]│ [Editorial Photo]│
│                  │                  │
│ 4. MAI 2026      │ 4. MAI 2026      │
│ Headline         │ Headline         │
│ [WEITERLESEN]    │ [WEITERLESEN]    │
└──────────────────┴──────────────────┘
```

Jede Card: Photo (Register B), Datum in Eyebrow Caps, Headline in Articulant Medium 24-28px, Read-More-Pill.

### 7.11 Category-Tiles "Shop nach Linie"

Vier-Spalten-Grid mit Macro-Texture-Photography (Register D):

```
┌───────────┬───────────┬───────────┬───────────┐
│ POWER     │ CARE      │ WHITE     │ RECOVERY  │
│ [Bristles]│ [Pasta]   │ [Foam]    │ [Mouthwash│
│           │           │           │  swirl]   │
└───────────┴───────────┴───────────┴───────────┘
```

Jede Tile: Macro-Texture-Photo, Sub-Brand-Pill-Label unten links. Hover-State: Photo zoomt leicht (110% scale), Pill-Background tauscht zu Sub-Brand-Color.

### 7.12 Footer

Schwarzer Footer, weiße Schrift. **Großes Precision Logo** als grafisches Element links oder zentriert (analog zum Olaplex-O-Mark). Right-Side: Newsletter \+ SMS-Signup, jeweils eigenes Feld.

```
┌─────────────────────────────────────────────────┐
│  [PRECISION    Newsletter anmelden              │
│   LOGO MARK    [Email-Feld]      [ANMELDEN]     │
│   GROSS]       Mobile-Nummer                    │
│                [Telefon-Feld]    [SMS]          │
├─────────────────────────────────────────────────┤
│ Shop          Marke         Service     Rechtl. │
│ POWER         Über uns      FAQ         AGB     │
│ CARE          Magazin       Versand     Daten   │
│ WHITE         Diagnose      Retouren    Imp.    │
│ RECOVERY      Pro-Site      Kontakt     Cookies │
├─────────────────────────────────────────────────┤
│ zahnheld®              [Social Icons]           │
└─────────────────────────────────────────────────┘
```

### 7.13 PDP-Pattern

Standard-PDP-Aufbau:

1. **Image-Gallery** (Register C primär, Register D als Detail-Shots)  
2. **Product Info** (Eyebrow \+ Headline \+ Rating \+ Preis \+ Variant-Picker \+ Add-to-Cart)  
3. **Quick-Benefits-Bullets** (3-5 Punkte, Eyebrow-Style mit Icons)  
4. **Section: Wie es funktioniert** (Editorial mit Macro-Photo \+ Body)  
5. **Section: Was drin ist** (Inhaltsstoffe-Liste)  
6. **Reviews** (Aggregat oben, Liste unten)  
7. **Section: Routine-Empfehlung** (Cross-Sell zu Sub-Brand-Produkten)  
8. **FAQ-Accordion**

---

## 8\. Packaging

### 8.1 Hero-Boxen (POWER) \[Akkvrat Concept 2, gesetzt\]

Standard für Schallzahnbürsten:

- Display-Code (`GERO`, `FLOW`, `AERO`, `GLOW`) in Owners, vertikal über die gesamte Box-Höhe  
- Schwarz-Weiß-Variante (Light): Schwarzer Code auf weißem Karton  
- Schwarz-Variante (Dark): Weißer Code auf schwarzem Karton  
- Logo-Wordmark unten rechts klein  
- Produktbeschreibung als rotated Text auf der Schmalseite

### 8.2 Tubes und Flaschen \[Akkvrat Concept 2, gesetzt\]

- Zahnpasta-Tubes: `DAY` (white) und `NIGHT` (black) als Owners-Schriftzug groß  
- Mundspülung: `MINT + FLUORID` auf Anthrazit-Boden  
- B12-Linie: `B12` auf Dusty Mauve  
- Logo-Wordmark immer Top-Right klein, Produktinfo als Mikrocopy

### 8.3 Embossed Tooth-Mark

Auf Premium-Verpackung wird der Precision-Tooth-Mark als physisches Embossing aufgebracht. Auf Karton oder beschichteter Oberfläche, ohne Farbe, nur Relief.

---

## 9\. Out-of-Home und Print

### 9.1 Plakat-Pattern "Form follows Brush" \[Akkvrat V2, gesetzt\]

- Schwarzer Hintergrund vollflächig  
- Weiße Precision-Tooth-Marks als Reihe horizontal mittig  
- Tagline darunter in Articulant Bold weiß  
- Wordmark unten links klein, QR-Code oder URL unten rechts

### 9.2 Editorial-Print "Oral Care First. Whitening Second." \[Akkvrat V7, gesetzt\]

- Gesicht-Editorial großformatig  
- Tagline als zwei Zeilen über Gesicht in weiß  
- Wordmark mit Subline unten links  
- Dezente Rahmung, Plakat-Stil

### 9.3 Crumpled-Tube-Print \[Akkvrat V2, gesetzt\]

Editorial-Foto einer zerknitterten Tube (`DAY` und `NIGHT`) als Stillleben. Gibt der Marke einen leicht rebellischen, anti-cosmetics-Charakter.

---

## 10\. Tone of Voice

### 10.1 Sprach-Prinzipien

1. **Deutsch primär.** Englisch nur in Display-Codes und punktuell (Tagline-Splits). Kein durchgängiges Englisch in Body.  
2. **Kurz und deklarativ.** Wenig Konjunktive, wenig Adjektive. Substantive und Verben sind die Hauptträger.  
3. **Keine Doktor-Endorsements ohne Verifikation.** Das gilt für alle Texte, Landing Pages, Advertorials. Stattdessen "Experten", "Wissenschaftler", "Forscher".  
4. **Reviews nur mit Quellenangabe.** Verlinkt zu Trustpilot oder Reviews.io.  
5. **Kein "und" als Bindeglied in Headlines.** Stattdessen Punkt oder gar nichts.  
6. **Em-Dashes vermeiden.** Stattdessen Punkt oder Komma.

### 10.2 Microcopy-Standards

| Kontext | Beispiel |
| :---- | :---- |
| Add-to-Cart Success | "In den Warenkorb gelegt" |
| Empty Cart | "Dein Warenkorb ist leer" |
| 404 | "Diese Seite gibt es nicht. Zurück zur Startseite." |
| Newsletter Confirmation | "Willkommen. Schau in dein Postfach." |
| Out of Stock | "Aktuell nicht verfügbar" |

### 10.3 Meta-Beschreibungen

Memory-Regel: evergreen, promotion-frei, keine Preise, keine Discount-Referenzen. 150-160 Zeichen.

---

## 11\. Implementation Notes

### 11.1 Shopify Theme Tokens

Empfohlene CSS-Variablen für das Shopify-Theme:

```css
:root {
  /* Color */
  --color-white: #FFFFFF;
  --color-black: #000000;
  --color-anthrazit: #4A4A4A;
  --color-mint: #B5DDC0;
  --color-warm-sand: #E8D2B0;
  --color-warm-sand-light: #F5ECDC;
  --color-dusty-mauve: #B894A8;

  /* Sub-brand defaults (to be overridden per page) */
  --color-subbrand-primary: var(--color-black);
  --color-subbrand-accent: var(--color-anthrazit);

  /* Functional */
  --color-text-primary: var(--color-black);
  --color-text-secondary: var(--color-anthrazit);
  --color-bg-card: var(--color-warm-sand-light);
  --color-bg-section: var(--color-white);
  --color-bg-hero: var(--color-black);
  --color-hairline: var(--color-anthrazit);

  /* Typography */
  --font-display: 'Articulant', sans-serif;
  --font-heavy: 'Owners', sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;

  /* Type Scale */
  --fs-display-xl: 6rem;
  --fs-display-lg: 4.5rem;
  --fs-display-md: 3.5rem;
  --fs-h1: 2.5rem;
  --fs-h2: 2rem;
  --fs-h3: 1.5rem;
  --fs-body: 1rem;
  --fs-body-sm: 0.875rem;
  --fs-caption: 0.75rem;

  /* Spacing */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2.5rem;
  --space-xl: 4rem;
  --space-2xl: 6rem;

  /* Borders */
  --hairline: 1px solid var(--color-hairline);
  --radius-pill: 999px;
  --radius-card: 0;

  /* Transitions */
  --transition-base: 200ms ease;
}

/* Sub-brand themes set via class on body or section */
[data-subbrand="care"] {
  --color-subbrand-primary: var(--color-dusty-mauve);
  --color-subbrand-accent: var(--color-mint);
  --color-hairline: var(--color-dusty-mauve);
}

[data-subbrand="white"] {
  --color-subbrand-primary: var(--color-black);
  --color-subbrand-accent: var(--color-anthrazit);
}

[data-subbrand="recovery"] {
  --color-subbrand-primary: var(--color-warm-sand);
  --color-subbrand-accent: var(--color-anthrazit);
}

[data-subbrand="power"] {
  --color-subbrand-primary: var(--color-black);
  --color-subbrand-accent: var(--color-white);
}
```

### 11.2 Component-Naming-Konvention

BEM-ähnlich, mit klaren Prefixen:

```
.zh-{component}__{element}--{modifier}

Beispiele:
.zh-card                    /* Standard Product Card */
.zh-card__media             /* Bildbereich */
.zh-card__title             /* Headline */
.zh-card--quiz              /* Quiz-Card-Variant */

.zh-pill                    /* Pill-Element generisch */
.zh-pill--badge             /* als Badge */
.zh-pill--cta               /* als CTA */
.zh-pill--solid             /* Solid Variant */
.zh-pill--outline           /* Outline Variant */

.zh-section                 /* Generic Section */
.zh-section--hero           /* Hero */
.zh-section--editorial      /* Editorial Block */
.zh-section--quiz           /* Quiz Block */
```

### 11.3 Asset-Library-Struktur \[Ergänzung\]

```
brand-assets/
├── logos/
│   ├── core-wordmark/
│   ├── alternate-wordmark/
│   ├── precision-mark/
│   ├── precision-mark-wave/
│   └── precision-mark-embossed/
├── photography/
│   ├── register-a-architectural/
│   ├── register-b-portrait/
│   ├── register-c-product/
│   └── register-d-macro/
├── packaging/
│   ├── power-gero/
│   ├── care-balance/
│   ├── white-clean/
│   └── recovery-calm/
└── typography/
    ├── articulant/
    └── owners/
```

Empfehlung: Asset-Library in einem Cloud-Storage halten (Hetzner-Bucket oder Google Drive), nicht im Shopify-Theme. Das erlaubt Versionierung, Akkvrat-Approval-Workflow und Cross-Channel-Verwendung (Print, OOH, Klaviyo, Social).

### 11.4 Open Items für nächste Iteration mit Akkvrat

- [ ] Hex-Codes für Mint, Warm Sand, Dusty Mauve, Anthrazit final festlegen  
- [ ] Body-Schrift offiziell wählen (Empfehlung Inter, Alternative Aktiv Grotesk oder Söhne)  
- [ ] Functional Colors (Error, Success, Warning) definieren  
- [ ] Mindestgrößen für Logo Print final festlegen  
- [ ] Asset-Library Struktur und Hosting-Lösung  
- [ ] Photography-Briefing für Register C (Product Studio) und Register D (Macro) erstellen  
- [ ] OOH-Pattern für Sub-Brand-Linien adaptieren (existiert nur generisch)  
- [ ] Sub-Brand-Color-Coding-Beispiele für Web sehen wollen, bevor wir Theme-Tokens finalisieren

---

*Ende des Working Drafts v0.2.*  
