**PRODUCT REQUIREMENTS DOCUMENT**

**StatCraft**

Next.js Landing Page

Component Architecture & Implementation Guide

**Version:** 1.0

**Date:** February 17, 2026

**Author:** Godwin Q. --- Product & Design

**Status: Ready for Development**

**Source:** statcraft-v15.html

1\. Product Overview

StatCraft is a landing page for a thesis statistics consulting and math
tutoring service targeting Filipino college and graduate students. This
PRD defines the component architecture, data structures, interactions,
and design tokens required to rebuild the validated HTML prototype (v15)
as a production Next.js application.

1.1 Goals

-   **Convert visitors to Messenger/email leads** via low-friction
    contact flow

-   **Establish trust** through team profiles, deliverable previews,
    case study, and transparent pricing

-   **Optimize for mobile** --- 80%+ of traffic will come from Facebook
    group links on phones

-   **Ship fast** --- static site, no backend initially; form
    submissions via Formspree or Messenger deeplink

1.2 Tech Stack

  ------------- ------------------------ ---------------------------------
  **Layer**     **Choice**               **Rationale**

  Framework     Next.js 14+ (App Router) Static export, image
                                         optimization, component model

  Styling       Tailwind CSS             Matches utility-class approach
                                         from prototype; rapid iteration

  Fonts         DM Sans (display +       Google Fonts, already validated
                body), JetBrains Mono    in v15
                (data)                   

  Icons         Inline SVG components    No dependency; matches prototype
                                         exactly

  Animation     Framer Motion            IntersectionObserver reveals,
                                         hover states, scroll carousel

  Deployment    Vercel                   Zero-config Next.js hosting,
                                         auto-SSL, PH edge nodes

  Analytics     Plausible or Umami       Privacy-friendly, lightweight, no
                                         cookie banner needed

  Form          Formspree or custom API  Simple; upgrade to Supabase later
                route                    if needed
  ------------- ------------------------ ---------------------------------

2\. Design Tokens

All values map directly from the HTML prototype CSS custom properties.
Implement as Tailwind theme extensions.

2.1 Color Palette

  ---------------- --------------------- ---------------------------------
  **Token**        **Value**             **Usage**

  \--o (orange)    #E8530E               Primary CTA, accents, highlights,
                                         active states

  \--oh            #D14A0B               Button hover states
  (orange-hover)                         

  \--o10           rgba(232,83,14,.08)   Orange tint backgrounds, tag
                                         backgrounds

  \--obg           #FEF3ED               Orange background sections,
                                         popular card bg

  \--d (dark)      #1C1917               Headings, nav, dark sections
                                         (case study, tools, contact,
                                         footer)

  \--d80 / d60 /   Stone scale           Body text, borders, subtle
  d50 / d40 / d30                        backgrounds --- see Tailwind
  / d20 / d10 /                          stone palette
  d05                                    

  \--cr (cream)    #FBF7F2               Hero, team, services, FAQ
                                         backgrounds

  \--w             #FFFFFF               Cards, default background
  ---------------- --------------------- ---------------------------------

2.2 Typography

  --------------- ------------- ------------ ------------------- -------------
  **Element**     **Font**      **Weight**   **Size**            **Letter
                                                                 Spacing**

  H1 (hero)       DM Sans       800          clamp(42px, 5vw,    -2px
                                             64px)               

  H2 (section)    DM Sans       800          clamp(34px, 4vw,    -0.5px
                                             50px)               

  H3 (card)       DM Sans       800          15--18px            -0.3px

  Body            DM Sans       400          13--17px            normal

  Mono labels     JetBrains     500--600     9--11px             1--2.5px
                  Mono                                           

  Nav links       DM Sans       500          14px                normal

  Buttons         DM Sans       600          13--15px            normal
  --------------- ------------- ------------ ------------------- -------------

2.3 Spacing & Radius

-   **Section padding:** 120px vertical (72px for compact sections like
    Tools, Proof)

-   **Container max-width:** 1120px with 28px horizontal padding

-   **Card radius:** 16px (\--r)

-   **Small radius:** 10px (\--rs) for inputs, inner elements

-   **Pill radius:** 100px for tags, badges, pills

2.4 Background Patterns

Four subtle CSS background-image patterns applied directly to section
elements (no pseudo-elements):

  --------------- -------------------------------------------- ---------------------
  **Pattern**     **CSS**                                      **Applied To**

  Dot grid        radial-gradient(circle, stone-300 .5px,      Hero
                  transparent .5px) / 24px 24px                

  Orange dots     radial-gradient(circle, rgba(232,83,14,.06)  Services, Team
                  .8px, transparent .8px) / 20px 20px          

  Crosshatch      45deg linear-gradient pattern at 2% opacity  Compare

  Line grid       linear-gradient grid at stone-200, 48px      FAQ
                  spacing                                      

  Dark dots       radial-gradient(rgba(255,255,255,.03--.04)   Case Study, Tools
                  1px, transparent 1px) / 20px                 
  --------------- -------------------------------------------- ---------------------

3\. Page Architecture

The page is a single-route static site. All sections render on one
scrollable page with smooth-scroll anchor navigation.

3.1 Section Flow (15 sections)

  -------- -------------- ----------- ------------------ -------------------------
  **\#**   **Section**    **ID**      **Background**     **Key Purpose**

  1        Nav (fixed)    ---         cream/blur         Navigation + primary CTA

  2        Hero           ---         cream + dot grid   Emotional hook + analyst
                                                         card

  3        Proof Bar      ---         dark               Trust metrics strip

  4        Credentials    ---         white              Credential pills +
                                                         university logos

  5        Problem        ---         white              3-card pain points

  6        Case Study     ---         dark + dots        12-day project
                                                         walkthrough

  7        Team           #team       cream + dots       6 polaroid cards

  8        What You Get   ---         stone-100          Horizontal scroll
                                                         deliverables

  9        Services       #services   cream + dots       Tabbed: Research /
                                                         Tutoring

  10       Pricing        #pricing    white              3-tab pricing: Thesis /
                                                         Pilot / Tutor

  11       Compare        ---         cream + crosshatch 4-column comparison table

  12       Tools          ---         dark + dots        7 tool chips

  13       Testimonials   #reviews    white              3 review cards + urgency
                                                         banner

  14       FAQ            #faq        cream + line grid  8-item accordion

  15       Contact        #contact    dark               Messenger/email + form +
                                                         process flow
  -------- -------------- ----------- ------------------ -------------------------

Plus: **Footer** (dark) and **Sticky CTA bar** (white, fixed bottom,
appears after 800px scroll)

3.2 Component Tree

Suggested file structure under /app and /components:

app/

layout.tsx --- Fonts, metadata, global styles

page.tsx --- Assembles all sections

globals.css --- Tailwind directives + bg patterns

components/

layout/

Navbar.tsx --- Fixed nav + mobile drawer

Footer.tsx --- Simple footer

StickyCTA.tsx --- Bottom bar, scroll-triggered

sections/

Hero.tsx --- Headline + analyst card

ProofBar.tsx --- 4-stat dark strip

Credentials.tsx --- Pill badges + university pills

Problem.tsx --- 3-card pain grid

CaseStudy.tsx --- Timeline + sidebar stats

Team.tsx --- 6 polaroid cards

WhatYouGet.tsx --- Horizontal scroll carousel

Services.tsx --- Tabbed service grid

Pricing.tsx --- 3-tab pricing cards

Compare.tsx --- Comparison table

Tools.tsx --- Tool chip strip

Testimonials.tsx --- Review cards + urgency banner

FAQ.tsx --- Accordion

Contact.tsx --- CTA + form + process steps

ui/

Button.tsx --- Variants: orange, dark, outline, ghost

SectionLabel.tsx --- Mono eyebrow with orange dash

RevealOnScroll.tsx --- Framer Motion IntersectionObserver wrapper

PolaroidCard.tsx --- Reusable polaroid card

DeliverableCard.tsx--- File-preview card for WYG carousel

icons/

index.tsx --- All inline SVG icons as components

data/

team.ts --- Team member data array

services.ts --- Service card data (research + tutoring)

pricing.ts --- Pricing tier data (thesis, pilot, tutor)

deliverables.ts --- WYG card content

faq.ts --- FAQ Q&A pairs

testimonials.ts --- Review data

compare.ts --- Comparison table data

tools.ts --- Tool chip data

4\. Component Specifications

Each component spec includes: props/data, interactive behavior,
responsive breakpoints, and animation. Reference the HTML prototype for
exact pixel values.

4.1 Navbar

**File:** components/layout/Navbar.tsx

Behavior

-   Fixed top, full width. Background: cream at 92% opacity + 16px
    backdrop blur.

-   On scroll \> 20px: add scrolled class --- bottom border appears
    (stone-200), subtle box-shadow.

-   Desktop: logo left, 5 links center (Team, Services, Pricing,
    Reviews, FAQ), orange CTA button right.

-   Mobile (\< 768px): hide link row, show hamburger. Opens right-side
    drawer (280px) with overlay.

-   Logo: orange square (30px, radius 8px) with Σ glyph + "StatCraft"
    text, weight 800.

Nav Links

#team #services #pricing #reviews #faq

4.2 Hero

**File:** components/sections/Hero.tsx

Layout

-   2-column grid: 1.15fr / 0.85fr. Padding: 160px top, 100px bottom.
    Background: cream + dot grid pattern.

-   **Left column:** Eyebrow pill (pulsing green dot + text) → H1 → body
    paragraph → 2 buttons → trust checkmarks.

-   **Right column:** Analyst card (white, 20px radius, orange top
    accent bar, avatar, credentials list, 3-stat grid). Hidden on \<
    1024px.

Content

-   **Eyebrow:** "Accepting clients for thesis season 2026"

-   **H1:** "Stop panicking about **Chapter 4.**" --- "Chapter 4" in
    orange.

-   **Body:** "We handle statistical analysis, data cleaning, and
    write-up for Filipino thesis students --- plus 1-on-1 math tutoring.
    You focus on defending."

-   **CTAs:** "Get a free quote →" (orange) + "Message on Messenger"
    (outline, with Messenger icon)

-   **Trust items:** DOST-SEI Scholar • Published researcher • 100%
    on-time --- each with orange checkmark SVG

4.3 Proof Bar

**File:** components/sections/ProofBar.tsx

-   Dark background, 4-column grid. Each cell: JetBrains Mono value +
    small label.

-   **Values:** 100% (On-time delivery) \| 0 (Missed deadlines --- ever)
    \| \<24h (Response time) \| 5.0 (Client rating)

-   Mobile: 2x2 grid with bottom borders between rows.

4.4 Credentials

**File:** components/sections/Credentials.tsx

-   Horizontal flex, centered. 4 credential pills (icon + text, hover:
    orange border + lift) + divider + 5 university pills.

-   **Credentials:** DOST-SEI Scholar \| Published Researcher \| Dean's
    Lister \| BS Math --- CMU

-   **Universities:** CMU \| UP \| Ateneo \| UST \| DLSU

4.5 Problem

**File:** components/sections/Problem.tsx

-   Centered header (mono label + H2 + body), then 3-column grid of pain
    cards.

-   Cards: separated by 1px gaps (stone-200 background visible between),
    numbered 01/02/03 in orange mono.

-   Hover: card background shifts to orange-bg (#FEF3ED).

-   **Cards:** "Your data is chaos" \| "Statistics feel impossible" \|
    "The deadline is real"

-   Mobile: single column stack.

4.6 Case Study

**File:** components/sections/CaseStudy.tsx

-   Dark section with dot texture + orange radial glow (top-right,
    decorative).

-   **Left:** 5-step vertical timeline. Each step: numbered circle
    (orange border, orange bg at 15%) + day label + title + description.

-   **Right sidebar (320px):** 4 stat cards (12 days, 0 revisions, 6
    tables, ₱6,000) + orange-accented quote card.

-   Mobile: single column, sidebar below steps.

4.7 Team (Polaroid Cards)

**File:** components/sections/Team.tsx + components/ui/PolaroidCard.tsx

Layout

-   3-column grid, max-width 980px, centered. Cream background + orange
    dot pattern.

-   Header centered: mono label + H2 ("Real people. Real credentials.
    Slightly weird hobbies.") + subtitle.

PolaroidCard Component

-   **Structure:** White card, 4px border-radius, 10px padding. Shadow:
    2px/8px + 12px/40px layered.

-   **Rotation:** Each card has unique CSS rotation (-1.5° to +1.5°). On
    hover: straightens to 0°, lifts 8px, scales 1.02x.

-   **Tape element:** Absolute-positioned semi-transparent yellow strip
    (56×16px) at top center, slightly rotated. Pure CSS.

-   **Photo area:** 1:1 aspect ratio div with gradient background +
    large initials. Replace with \<Image\> when real photos available.

-   **Floating emoji:** Positioned bottom-right of photo area. CSS
    animation: float 3s ease-in-out infinite (translateY 0 → -6px).
    Staggered delay per card (0, 0.5, 1, 1.5, 2, 2.5s).

-   **Role pill:** Top-left of photo area, dark semi-transparent bg +
    blur.

-   **Body:** Name (16px/800), title (orange/600), location, quirk box
    (stone-100 bg, italic, decorative open-quote), skill tags.

Data Shape

interface TeamMember {

name: string;

initials: string;

title: string;

role: string; // pill text

location: string;

gradient: string; // tailwind gradient classes

emoji: string;

quirk: string;

tags: { label: string; type: \'primary\' \| \'secondary\' }\[\];

rotation: number; // degrees

photo?: string; // optional image path

}

Team Members

  ------------------ --------------- ----------- ----------------------------
  **Name**           **Role**        **Emoji**   **Gradient**

  Jullana Jane Q.    Lead Analyst    ☕          orange → amber

  Godwin Q.          Operations      🎮          stone-900 → stone-600

  Rafael C.          Specialist      🧠          blue-700 → blue-400

  Angela S.          Writing         ✍️          green-600 → green-400

  Marco R.           Data            🧹          violet-600 → violet-400

  Karen L.           Tutor           🥭          amber-600 → amber-300
  ------------------ --------------- ----------- ----------------------------

4.8 What You Get (Horizontal Scroll)

**File:** components/sections/WhatYouGet.tsx +
components/ui/DeliverableCard.tsx

Layout

-   Header row: left-aligned title + right-aligned arrow buttons (40px
    circles, stone border, orange on hover).

-   **Track:** Horizontal scroll container with scroll-snap-type: x
    mandatory. Hide scrollbar. Cards: flex 0 0 340px (280px on mobile).

-   Arrow buttons: left arrow disabled when scrollLeft \< 10; right
    arrow disabled when scrolled to end. Use useRef + onScroll.

DeliverableCard Component

-   **Top bar:** macOS-style window chrome --- 3 dots (stone-300) +
    filename text.

-   **Body:** Step number (orange circle, 20px) + title + description +
    content block.

-   **Content variants:** highlight box (orange-bg) \| data table
    (APA-style) \| code block (dark bg, syntax highlighting) ---
    determined by card data.

6 Cards

  -------- ------------------------- ------------------ ------------------------------
  **\#**   **Filename**              **Title**          **Content Type**

  1        cleaned_data.xlsx         Cleaned Dataset    Highlight box (stats summary)

  2        reliability_report.docx   Reliability        Table (Scale / Items / α /
                                     Analysis           Verdict)

  3        Chapter4_Tables.docx      APA-Formatted      Table (Predictor / β / SE / t
                                     Tables             / p)

  4        Chapter4_Results.docx     Written            Highlight box (prose excerpt)
                                     Interpretation     

  5        analysis_output.R         Full Analysis      Code block (R syntax)
                                     Output             

  6        defense_notes.pdf         Defense Prep Guide Highlight box (Q&A format)
  -------- ------------------------- ------------------ ------------------------------

4.9 Services

**File:** components/sections/Services.tsx

-   Two tabs: "Research & Thesis" (default active) and "Math Tutoring."
    Tab bar: white bg, stone border, pill-style active state (dark bg,
    white text).

-   Research tab: 6 cards in 3-col grid. Tutoring tab: 5 cards. Each
    card: icon (36px orange-tinted square) + title + description + price
    (JetBrains Mono, orange).

-   Hover: lift 3px, shadow, orange border.

-   Mobile: single column.

4.10 Pricing

**File:** components/sections/Pricing.tsx

-   **3 tabs:** Thesis & Analysis (default) \| Pilot Study \| Tutoring.
    Same tab component as Services.

-   Each tab renders 3 pricing cards in a grid. Middle card is "MOST
    POPULAR" (orange border, orange-bg, badge above).

-   Card structure: title, description, price (JetBrains Mono, 32px),
    per-unit label, feature list (orange checkmarks), CTA button.

-   Mobile: single column, max-width 380px centered.

Pricing Data (Thesis & Analysis)

  ------------ ------------ ----------------------------------------------
  **Tier**     **Price**    **Key Features**

  Starter      ₱2,000       Single test, 1 dataset, APA tables, 1
                            revision, 5--7 days

  Complete     ₱6,000       Full analysis + Chapter 4, methodology check,
                            3 revisions, defense support

  Premium      ₱12,000      Everything in Complete + design consulting,
                            defense walkthrough, unlimited revisions,
                            3-day rush
  ------------ ------------ ----------------------------------------------

Pricing Data (Pilot Study)

  ------------ ------------ ----------------------------------------------
  **Tier**     **Price**    **Key Features**

  1--2 Scales  ₱500/scale   Cronbach's α, item-total correlation, report

  3--4 Scales  ₱450/scale   Above + EFA + construct validity

  5+ Scales    ₱400/scale   Above + CFA + unlimited revisions
  ------------ ------------ ----------------------------------------------

Pricing Data (Tutoring)

  ------------ ------------ ----------------------------------------------
  **Tier**     **Price**    **Key Features**

  Single       ₱350/hr      Any subject, Google Meet, custom lesson
  Session                   

  Monthly      ₱1,200/mo    4 sessions, save ₱200, Messenger support

  Defense      ₱500/hr      Results walkthrough, panel prep, methodology
  Coach                     deep-dive
  ------------ ------------ ----------------------------------------------

4.11 Comparison Table

**File:** components/sections/Compare.tsx

-   6-row comparison grid: DIY vs FB Freelancer vs Other Labs vs
    StatCraft. StatCraft column highlighted (orange header, orange-bg
    cells).

-   **Rows:** Qualified analyst \| Full interpretation \| APA write-up
    \| Transparent pricing \| Defense coaching \| Refund guarantee

-   Mobile: compressed grid (100px first column), smaller text (9px).

4.12 Tools

**File:** components/sections/Tools.tsx

-   Dark section with dot texture. Centered mono label + flex row of 7
    tool chips.

-   Each chip: colored SVG icon + name (13px/600) + description small
    text. Hover: bg brightens, border lightens, lift 2px.

-   **Tools:** SPSS (red) \| R (blue) \| Python (blue/yellow) \| Excel
    (green) \| LaTeX (teal) \| Jamovi (purple) \| AMOS (dark blue)

-   Mobile: smaller chips, hide description text.

4.13 Testimonials + Urgency

**File:** components/sections/Testimonials.tsx

-   3-column card grid (max 920px). Each: star rating (orange) + italic
    quote + author (avatar + name + role/university).

-   **Urgency banner below:** Dark bg, 3-column grid. Columns: 1 month+
    (Comfortable) \| 2--3 weeks (Tight but doable, with "MOST CLIENTS"
    badge) \| ≤1 week (Emergency).

-   Mobile: single column for both cards and urgency.

4.14 FAQ

**File:** components/sections/FAQ.tsx

-   Accordion pattern, max-width 680px centered. 8 items.

-   **Interaction:** Click toggles open/close. Only one open at a time.
    Icon: + circle that rotates 45° to × when open (orange bg). Answer
    slides in via max-height transition (0 → 200px, 350ms).

-   Background: cream + line grid pattern. FAQ items have white bg with
    backdrop blur for readability.

FAQ Items

  --------------------------- -------------------------------------------
  **Question**                **Answer Summary**

  Is this considered          No --- legitimate academic service. We
  cheating?                   analyze, you defend.

  What tools do you use?      SPSS, R, Python, Excel, LaTeX, Jamovi, AMOS

  How fast can you deliver?   Standard 5--7 days, rush 1--3 days

  Do you offer tutoring?      Yes --- 1-on-1 via Google Meet

  What if my adviser wants    All plans include revisions. Our errors =
  changes?                    free fixes.

  Is my data confidential?    Yes. NDA available.

  How do I pay?               GCash, PayMaya, ShopeePay, bank transfer.
                              50/50 split.

  Refund policy?              Full refund if we can't deliver or miss
                              standards.
  --------------------------- -------------------------------------------

4.15 Contact

**File:** components/sections/Contact.tsx

-   Dark section. 2-column grid: left info + right form. Mobile: single
    column.

Left Column

-   Header (mono label + H2 + subtitle), Messenger card link, Email card
    link, payment badges (GCash, PayMaya, Bank Transfer, ShopeePay).

-   **What Happens Next:** 4-step grid below payment badges. Each step:
    orange number (JetBrains Mono, 20px) + title + description.
    Background: dark with subtle lighter cells.

Right Column (Form)

-   **3 fields only:** Name (text) \| Email or Messenger link (text) \|
    Tell us about your project (textarea, min-height 140px)

-   Submit button: orange. On success: text changes to "Sent! Response
    within 24h ✓", bg turns green (#16A34A), reverts after 3s.

-   **Form action:** Formspree endpoint initially. Migrate to API
    route + Supabase later.

4.16 Sticky CTA Bar

**File:** components/layout/StickyCTA.tsx

-   Fixed bottom, full width, white bg, top border. Hidden by default
    (translateY 100%).

-   Shows (translateY 0) when scrollY \> 800. Transition: 300ms.

-   Content: left text ("Ready to start? --- Free quote in 24h") + right
    buttons (Messenger dark + Get a quote orange).

-   Mobile: hide the subtitle span.

5\. Interactions & Animations

5.1 Scroll Reveal

-   **Mechanism:** Framer Motion + IntersectionObserver (threshold
    0.05). Elements start opacity: 0, translateY: 16px. On intersect:
    animate to opacity: 1, translateY: 0 over 500ms.

-   **Stagger:** Sibling .rv elements animate with 30ms delay between
    each.

-   **Apply to:** All section headers, cards, team polaroids, FAQ items,
    pricing cards, credential pills. NOT the hero headline (visible
    immediately).

5.2 Hover States

  ------------------------ ----------------------------------------------
  **Element**              **Hover Effect**

  Orange button            Darken to #D14A0B, lift 2px, orange box-shadow
                           (25% opacity)

  Outline button           Border darkens to stone-900, lift 2px

  Cards (service, pricing, Lift 3px, shadow deepens, border → orange
  testimonial)             

  Polaroid cards           Straighten rotation to 0°, lift 8px, scale
                           1.02x, deeper shadow

  Pain cards               Background → orange-bg (#FEF3ED)

  Credential pills         Border → orange, text → orange, lift 1px

  Tool chips               bg brightens, border lightens, lift 2px

  FAQ questions            Text color → orange

  Contact channel cards    bg brightens, border lightens, slide right 4px
  ------------------------ ----------------------------------------------

5.3 Component-Specific Interactions

-   **WhatYouGet carousel:** Arrow buttons scroll track by 356px per
    click (smooth). Left arrow disabled at start; right arrow disabled
    at end. Also supports native touch scroll / mouse drag.

-   **Service tabs:** Click swaps visible content. Active tab: dark bg,
    white text. Inactive: transparent, stone-400 text.

-   **Pricing tabs:** Same tab behavior as Services. 3 tabs: Thesis &
    Analysis \| Pilot Study \| Tutoring.

-   **FAQ accordion:** Click toggles item. Max one open at a time.
    max-height transition 350ms. Icon rotates 45°.

-   **Mobile menu:** Hamburger toggles 280px right drawer + dark overlay
    (30% opacity). Links close drawer on click.

-   **Nav scroll:** scrollY \> 20 → add border + shadow. scrollY \> 800
    → show sticky CTA bar.

-   **Hero eyebrow:** Green dot pulses (opacity 1 → 0.3, 2s infinite).

-   **Polaroid emoji:** Float animation (translateY 0 → -6px, 3s
    infinite). Each card has staggered animation-delay.

-   **Form submit:** preventDefault, swap button text/color for 3s,
    reset.

6\. Responsive Breakpoints

  ---------------- ----------------------------------------------------------
  **Breakpoint**   **Key Changes**

  ≤ 1024px         Hero: single column, hide analyst card. Contact: single
                   column. Case Study: single column (sidebar below). Team:
                   2-column grid.

  ≤ 768px          Hide nav links, show hamburger. Hero H1: 36px. All grids:
                   single column. Pricing cards: 380px max centered. Compare
                   table: 100px first col, 9px text. Proof bar: 2x2. Tool
                   chips: smaller, hide descriptions. Urgency: single col.
                   WYG cards: 280px. Team polaroids: remove rotation. Form
                   rows: stack vertically. Sticky CTA: hide subtitle.
  ---------------- ----------------------------------------------------------

7\. SEO & Metadata

-   **Title:** "StatCraft --- Thesis Statistics & Math Tutoring for
    Filipino Students"

-   **Description:** "Professional statistical analysis, data cleaning,
    Chapter 4 write-up, and 1-on-1 math tutoring. Transparent pricing,
    DOST-SEI scholar analyst. Free quote within 24 hours."

-   **OG Image:** Create a 1200×630 card with hero headline + orange
    branding for Facebook shares.

-   **Favicon:** Orange rounded square with Σ glyph (already implemented
    as data URI --- convert to .ico + .svg).

-   **Canonical URL:** https://statcraft.ph

-   **robots.txt:** Allow all. sitemap.xml with single page.

-   **Structured data:** LocalBusiness schema with PH address, services,
    priceRange.

8\. Performance Targets

-   **Lighthouse:** ≥ 95 on Performance, Accessibility, Best Practices,
    SEO.

-   **Core Web Vitals:** LCP \< 2s, FID \< 100ms, CLS \< 0.05.

-   **Bundle:** \< 100KB JS (gzipped). Static export --- no server
    runtime.

-   **Fonts:** Use next/font for DM Sans and JetBrains Mono. Swap
    display for fast render.

-   **Images:** When team photos are added, use next/image with WebP,
    lazy loading, explicit width/height.

9\. Post-Launch Roadmap

9.1 Phase 2 (Weeks 2--4)

-   Replace placeholder testimonials with real client reviews +
    Messenger screenshot embeds.

-   Add real team photos to polaroid cards.

-   Set up Facebook Pixel for conversion tracking from thesis groups.

-   Implement Formspree → Supabase migration for form submissions.

9.2 Phase 3 (Month 2+)

-   Blog/content section: "How to choose the right statistical test",
    "APA 7th Table formatting guide" --- SEO play for organic traffic.

-   Client portal: project status tracking, file delivery, revision
    requests.

-   Automated intake: Messenger bot that qualifies leads and creates
    project briefs.

-   A/B test: section order, hero headline variants, pricing anchoring.

End of document. Source prototype: statcraft-v15.html. All design
decisions validated through iterative PM review.
