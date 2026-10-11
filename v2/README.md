# Style Guide v2 — review log & working brief

> A reviewable second pass on the existing style guide: preserve the accumulated work, make the page more dependable, and create a better place to continue the editorial conversation.

**Status:** exploratory review copy  
**Location:** `/v2/`  
**Source:** root `index.html` remains unchanged  
**Scope:** navigation and script cleanup, metadata, editorial framing, comments for deferred decisions, and a proposed direction for future content.

---

## Why this work matters

The original guide is already more than a component gallery. It contains a visual language, reusable interface patterns, implementation experiments, brand observations, and early thinking about AI-assisted creative workflows. Some parts are polished; others are prototypes, old notes, or fragments whose original context is easy to lose.

That mix is not a flaw to erase. It is a record of a practice in motion.

This v2 copy tries to do two things at once:

1. **Reduce accidental friction** so the guide is easier to navigate, maintain, and trust.
2. **Protect useful unfinished thinking** so it can be revisited rather than overwritten by premature polish.

The goal is not to turn the guide into a generic enterprise design system. It is to make the reasoning behind the system easier to find, question, apply, and evolve.

Credit where it is due: the review and restructuring work here is a meaningful step because it connects visual design, implementation, research, and agent-readable documentation rather than treating them as separate concerns. The best part is not any single CSS fix; it is creating a clearer path from an idea, through a prototype, to a repeatable and explainable pattern.

## What changed in v2

### Page and metadata

- Set the document language to English.
- Replaced resume-oriented description and social metadata with style-guide-specific metadata.
- Updated social URL references to the style-guide v2 location.
- Kept the existing ASCII header intact and added a small note identifying this as a review copy.
- Repointed local CSS, JS, and manifest references so the page can run from `/v2/` while reusing root assets.

### Navigation and anchors

- Corrected the misspelled `the-begining` anchor and its navigation reference.
- Corrected the `Streamin` navigation target to `Streaming`.
- Normalized the CSS aspect-ratio anchor naming.
- Added a targeted Social anchor and matching anchors where a navigation target could be connected to an existing heading.
- Retained legacy section structure where moving it could cause a wider regression.

**Known limitation:** this is a conservative pass, not a full semantic rewrite of every heading and anchor. Some old links in embedded examples or commented-out snippets are intentionally left alone. Duplicate IDs remain in repeated form demonstrations and legacy examples; those need a dedicated pass that updates associated `for`, `aria-describedby`, and other references together.

### JavaScript

- Added `style-guide-v2.js` to replace the legacy `js/style-guide.js` for the v2 page.
- Centralized scroll-spy, optional viewport monitor, and back-to-top behavior.
- Guarded optional DOM elements before use.
- Removed the duplicate inline sticky-header script and stray closing script tag.
- Kept theme switching and image enlargement in their existing files to avoid a larger behavior change during this first pass.

**Known limitation:** this source-level review has not been followed by a live browser test. Theme switching and image enlargement should be tested with keyboard input, touch, and missing/slow third-party resources before considering this ready to merge into the root page.

## Open technical findings

### High priority

- [ ] Test the sidebar and scroll-spy together from the top of the page through the final section.
- [ ] Audit all active `href="#…"` links against unique IDs. The source contains repeated IDs, including in repeated form examples.
- [ ] Verify each script is loaded once and that no console errors remain.
- [ ] Check the page at narrow widths and with both light and dark modes.
- [ ] Confirm whether the viewport monitor and add-content demonstration should remain in the public guide.

### Medium priority

- [ ] Consolidate duplicate font requests and record which font families are authoritative.
- [ ] Resolve the source of truth for color tokens shared by `css/global.css` and `css/theme.css`.
- [ ] Remove or explain diagnostic styling, including the red `pre` border in a light-mode rule.
- [ ] Review empty image alt attributes individually: decorative images may correctly use empty alt text; informative images should not.
- [ ] Replace the enlargement overlay's non-semantic close affordance with a keyboard-accessible button and add focus management.
- [ ] Revisit third-party embeds, dependency versions, privacy, and fallback behavior.
- [ ] Replace remaining placeholder copy and old TODOs only after confirming their intent.

### Questions deliberately left open

- Should the style guide keep Bootstrap 3 as a compatibility layer, or should a future pass migrate patterns incrementally?
- Should the token palette live in one shared CSS file, with themes mapping semantic tokens onto it?
- Which demonstrations are still active components, and which are historical references?
- Should the guide include a visible status for each pattern: stable, experimental, deprecated, or archived?
- What is the right balance between personal essay and implementation reference in the opening sections?

## Editorial direction

The existing introduction has strong seeds: a living document, reuse rather than needless reinvention, and the idea of a branded house rather than a house of brands. The next pass should connect those ideas into a more explicit philosophy.

Suggested opening sequence:

1. **The Beginning** — purpose, audience, and why the guide stays alive.
2. **Into the Void** — how to begin from existing knowledge without blindly copying.
3. **Principles & Goals** — clarity, accessibility, consistency without rigidity, purposeful detail, maintainability.
4. **Scope & Application** — what the guide governs and where projects can diverge.
5. **Evolution & Provenance** — how decisions are tested, revised, deprecated, and recorded.

A useful thesis to test—not yet a final statement:

> A design system is more than a collection of reusable styles. It is a record of decisions: what works, what doesn't, what has been learned, and what is worth carrying forward.

The guide should explain why a pattern exists, when it is useful, what trade-offs it carries, and how to apply it. It should not simply accumulate more prose.

## Proposed information architecture

This is a direction for discussion, not an instruction to rename every current section immediately.

- **Foundations:** The Beginning, Into the Void, Principles & Goals, Scope & Application, Evolution & Governance.
- **Visual language:** Color & Themes, Typography, Layout & Spatial Rhythm, Imagery & Aesthetic, Icons, Branding & Assets, Motion & Media.
- **Interface patterns:** Buttons & Actions, Forms & Inputs, Navigation & Pagination, Feedback/Loading/Progress, Multi-Step Flows, Content Layouts, Responsive Patterns.
- **Implementation:** Tokens & CSS Architecture, HTML & Accessibility, Responsive CSS, JavaScript & Interaction, Media Delivery, Performance & Compatibility, Reusable Templates.
- **Research & experiments:** Inspiration, Prototypes & Libraries, Experiments & Findings, Sandboxes, Historical Implementations.
- **AI & automation:** Brand Voice & Prompting, AI Interface Patterns, Exo & Social Publishing, Agent Instructions, Human Review & Quality Control.

The sandbox and style guide should remain related but distinct. The sandbox is where experiments are allowed to be strange, incomplete, and disposable. The guide explains how selected ideas become reusable practice.

## Connecting this to the viewer, UXBG, and agent documentation

Recent work on the media viewer and UXBG is a useful example of the kind of reasoning the guide could preserve.

The viewer work has dealt with more than appearance: player-relative controls, idle and active states, visibility, interaction timing, media selection, and how a component behaves when embedded in a larger page. Those are design-system concerns as much as implementation details. A future pattern write-up could document the state model, the reason for each control, failure cases, and what changed between iterations.

The UXBG experiments also show why version history matters. A prototype is not merely a screenshot or a code sample; it is a sequence of hypotheses and trade-offs. The guide could link to the relevant sandbox version and summarize what was learned without pretending that every experiment is production-ready.

The `AGENTS.md` and `HUMANS.md` work brings a complementary concern: how to make a workspace legible to both people and agents without flattening either audience's needs. Preserve context, keep a map of where work lives, explain how to make changes safely, and distinguish established constraints from open questions.

### Tonal Modality, skills, and steering — early framing

These are useful concepts to explore, but they should not be presented as finished standards yet.

- **Tonal Modality** could describe how the same underlying voice shifts according to context, intent, audience, and channel without losing identity.
- **Skills** could package repeatable workflows, domain knowledge, and expected outputs so a future agent can perform a bounded task consistently.
- **Steering** could define how an agent should choose among goals, constraints, references, and trade-offs when the instructions do not specify every step.
- **Human-readable and agent-readable documentation** should share the same source of truth where possible, while presenting the right amount of detail to each reader.

A refined future example could use one concrete workflow—such as documenting a viewer interaction pattern, preparing a project update for multiple channels, or turning a sandbox prototype into a reusable component. The example should show inputs, constraints, decision points, expected output, validation, and where human approval remains necessary.

## A proposed section-writing framework

Use this as a checklist, not a rigid template. Each section should include only what suits its subject.

1. **Purpose** — why the subject belongs in the system.
2. **Principles** — the reasoning that guides decisions.
3. **Specifications** — concrete values, conventions, and constraints.
4. **Examples** — visual demonstrations and working implementations.
5. **Usage guidance** — when to use the pattern and when not to.
6. **Accessibility and edge cases** — what happens outside the ideal scenario.
7. **Implementation** — how to reproduce it.
8. **Evolution** — known limitations, experiments, and changes.

The philosophy sections can remain essay-like; component references should be concise and practical; experiments should capture hypotheses, observations, and outcomes.

## Review conventions and agent comments

This copy uses comments such as:

- `<!-- AGENT-_agents_name TODO: ... -->`
- `<!-- AGENT-_agents_name WARNING: ... -->`
- `<!-- AGENT-_agents_name QUESTION: ... -->`
- `<!-- AGENT-_agents_name REVISIT: ... -->`
- `<!-- AGENT-_agents_name BUG: ... -->`

They are intentional editorial markers, not errors to strip automatically. The short comment immediately after the marker should explain the specific follow-up. Before a production merge, resolve, reclassify, or explicitly retain each marker.

## Suggested review sequence

1. Open `v2/index.html` and compare its navigation and behavior against the root version.
2. Review the TODO/WARNING/QUESTION/REVISIT markers and correct any intent that was inferred incorrectly.
3. Test desktop/mobile, light/dark, anchors, buttons, forms, image enlargement, and embedded media.
4. Review the Foundations prose before expanding the remaining sections.
5. Decide which historical examples should remain live, be archived, or be rewritten.
6. Only then consider moving approved changes back into the root page.

## Change log

### v2 initial review copy

- Created an isolated `v2/` review surface.
- Updated page metadata and relative asset paths.
- Corrected a small set of known navigation anchors and copy errors.
- Replaced legacy page-behavior JavaScript with a guarded v2 module.
- Removed duplicated inline scroll/sticky behavior.
- Added comments at intentional editorial and technical follow-ups.
- Recorded structural, content, accessibility, and agent-workflow proposals here.

---

**Review note:** this is a best-effort source edit, not a claim that every behavior has been browser-tested. The purpose of the v2 directory is to make the next review safer and more concrete while preserving the root version until the changes are approved.
