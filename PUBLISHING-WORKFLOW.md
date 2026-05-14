# Content Publishing Workflow — anthonyhalim.com

**Last updated:** May 13, 2026  
**For:** Writing and publishing articles on anthonyhalim.com

---

## Overview

Every article follows this 6-step production workflow. Steps must be completed in order. Do not skip steps.

---

## Step 1: Brainstorm + Outline

**Purpose:** Agree on key points, structure, and persuasion arc before writing a word.

**Deliverable:** A bulleted outline with:
- Opening statement (the core claim)
- 3–5 main points with supporting logic
- Concrete example or table (what will make it tangible)
- Tradeoffs section
- Closing statement (the stakes)

**Checklist:**
- [ ] Outline is clear and persuasive on its own
- [ ] All open items flagged (e.g., "need specific AuditBoard story")
- [ ] Confirm whether this is a series; if so, note how it connects to adjacent parts

---

## Step 2: Journal Mining

**Purpose:** Ground the article in lived experience and specific moments from Anthony's history.

**Process:**
1. Search personal journals (`00. ClaudeOS` vault, Obsidian entries, "Thoughts, Talks, and Tantrums") for experiences relevant to the article's argument
2. Look for:
   - Direct experiences
   - Specific moments of failure or learning
   - Metaphorical or tangential moments that could serve as analogies
   - Concrete scenes (rooms, people, reactions) that humanize the argument
3. Propose 2–3 candidate moments
4. For each: describe the moment and propose how it could be woven into the article
5. Get Anthony's approval for which moments to use before drafting begins

**Example:**
- *Article topic:* "Why Signed vs. Active Bookings Matters"
- *Candidate moment:* The audit committee call where Anthony was asked to explain the discrepancy and realized he couldn't
- *How to use:* Open with that scene; then explain why it happened and how to prevent it

**Deliverable:** 2–3 proposed moments with locations and weaving suggestions, plus approval from Anthony.

---

## Step 3: Draft

**Purpose:** Write the full article to the outline, incorporating approved journal moments.

**Guidelines:**
- Follow the persuasion arc (see Content Guidelines)
- Use first-person voice and lived experience
- Include concrete examples or tables
- Mark placeholder sections with: `**[Author note: ...]**`
- Target length: 800–1,200 words (body copy, excluding title/date/category)

**Checklist:**
- [ ] Draft follows the outline
- [ ] Approved journal moments are woven in
- [ ] At least one concrete example or table is present
- [ ] Tradeoffs section is included
- [ ] `**[Author note: ...]**` marks show where author input is needed
- [ ] No editorial commentary or hedging language (save for tone-pass)

**Deliverable:** Full draft in markdown, saved to `Content/YYYY-MM-DD-article-name.md`

---

## Step 4: Humanizer Review

**Purpose:** Apply the-humanizer skill to identify areas where the writing lacks humanity, specificity, or could be more vivid.

**Process:**
1. Run the-humanizer skill on the draft
2. Review the report for flagged sections
3. Identify the top 2–3 changes that would increase impact
4. Apply those changes (rewrite flagged sections)
5. Save updated version to the same file

**What the humanizer looks for:**
- Generic or abstract language that could be specific
- Moments that tell instead of show
- Opportunities to add sensory detail or emotional authenticity
- Passages that feel explanatory rather than experienced

**Deliverable:** Humanized draft with revisions applied.

---

## Step 5: Accent Lines

**Purpose:** Select and apply 3–4 bolded accent lines that carry the core argument when read in isolation.

**Accent line selection:**

Choose one line for each arc position:

| Arc Position | What the line should do | Example |
|---|---|---|
| The distinction | State the core claim or reframe in one sentence | "That's not a reporting problem. It's a definition problem." |
| The real problem | Name the failure or cost of the current approach | "Every definition ambiguity becomes an organizational trust problem." |
| The fix | State why the solution isn't what people assume | "The answer is simpler than you think: one definition, documented clearly." |
| The bottom line | Land the stakes — why this matters | "How a company talks about its own numbers determines how it talks about everything." |

**Application:**
```html
<strong style="color: #c84a1f">That's not a reporting problem. It's a definition problem.</strong>
```

**Rules:**
- Maximum 4 lines per article (fewer is fine if the article is shorter)
- Select lines that stand alone — not mid-sentence fragments
- Lines should be able to be read together and convey the complete argument
- Vary placement throughout the article; avoid clustering all 4 in one section

**Checklist:**
- [ ] 3–4 accent lines selected (or fewer for shorter articles)
- [ ] Each line carries weight and is self-contained
- [ ] Lines follow persuasion arc (distinction → problem → fix → bottom line)
- [ ] Lines are applied with correct HTML: `<strong style="color: #c84a1f">...</strong>`
- [ ] Lines are approved before applying to file

**Deliverable:** Draft with bolded accent lines applied.

---

## Step 6: Tone-Voice Pass

**Purpose:** Apply Register 3 standards to fix sentence rhythm, passive constructions, hedging, and stylistic tics.

**Register 3 Principles:**

**Lead with claims, not context**
- ❌ "One of the most common mistakes is..."
- ✅ "The most common mistake is..."

**Vary sentence rhythm deliberately**
- Pattern: short punch → elaboration → short punch
- Not staccato throughout, not flowing throughout
- Rhythm variation is intentional

**First-person authority from direct experience**
- ✅ "I keep coming back to...", "In my experience...", "I think the question worth asking is..."
- ❌ Hedging, passive observation, consulting-speak

**Active voice and concrete language**
- ❌ "There was no clear definition"
- ✅ "No definition existed"
- ❌ "It can be seen that mistakes happen"
- ✅ "People get it wrong"

**Headers carry arguments, not just labels**
- ✅ "That's not a reporting problem. It's a definition problem."
- ❌ "Background" or "The Problem"

**Tradeoffs are non-negotiable**
- Every article that advocates for a method must include a tradeoffs section
- Name specific costs (operational, metric-level, political) — not "this requires more work"

---

## Tone-Voice Pitfalls to Hunt

These patterns recur and dilute the voice. Check for all of them:

1. **Passive constructions**
   - ❌ "There was no X" → ✅ "No X."
   - ❌ "There were Y people" → ✅ "Y people"

2. **Hedged claim openers**
   - ❌ "One of the most important..." → ✅ "The most important..."
   - ❌ "It could be argued that..." → ✅ Make the argument directly

3. **Label-colon overuse**
   - Limit to one per section
   - Two in the same section reads as templated

4. **Redundant audience address**
   - Don't signal who the piece is for twice in the intro

5. **Setup phrases that delay substance**
   - ❌ "But here's what X buys you:"
   - ✅ Lead with the substance directly

6. **Uniform paragraph length**
   - Vary short and long deliberately
   - Short = punchy, long = deep explanation

7. **"Plucky cadence" overuse**
   - Short, staccato parallel fragments used as mic-drops
   - Examples: "Same address. Same logo. Different customers." or "That's not a reporting problem. It's a definition problem."
   - **Limit to 2 instances per article maximum**
   - More than 2 reads as a stylistic tic and loses impact
   - When in doubt, fold fragments into a single sentence

8. **Em-dash overuse**
   - Limit to instances where no other punctuation works as well
   - Prefer: colons (introduce list/explanation), periods (split a pivot), parentheses (asides), commas (conjunctions)
   - Accent lines exempt
   - **Flag every em-dash during the pass and ask whether a cleaner substitute exists before keeping it**

9. **Unnecessary hedging or uncertainty words**
   - ❌ "might", "could", "perhaps", "somewhat", "arguably"
   - ✅ Use only where genuine uncertainty exists

10. **Vague attribution**
    - ❌ "I've seen teams get this wrong"
    - ✅ "I was the FP&A Director getting eviscerated on an audit committee call"

---

## Tone-Voice Checklist

- [ ] No passive constructions (except where grammatically required)
- [ ] All hedged claim openers replaced with direct statements
- [ ] Label-colons limited to one per section
- [ ] Paragraph length varied deliberately (short ↔ long)
- [ ] "Plucky cadence" instances capped at 2 per article
- [ ] Every em-dash reviewed and justified
- [ ] Headers carry arguments, not just labels
- [ ] First-person voice is active and authoritative
- [ ] Tradeoffs section is specific and named
- [ ] Article reads cleanly when skimming bolded lines only

**Deliverable:** Final polished draft saved to file, ready for publication.

---

## Publication Checklist

Before pushing to Git and deploying:

- [ ] All 6 steps completed
- [ ] Draft file named with date: `YYYY-MM-DD-article-name.md`
- [ ] Draft saved to `Content/` folder
- [ ] Article is 800–1,200 words (or documented exception)
- [ ] Title, category, and date metadata included
- [ ] 3–4 accent lines applied and approved
- [ ] No placeholder `**[Author note: ...]**` sections remain
- [ ] Tone-voice pass complete
- [ ] Article reads smoothly when skimming only bolded lines

---

## Publishing to the Site

1. **Ensure article is in `Content/` folder** with proper date-based filename
2. **Commit to Git:**
   ```bash
   git add Content/YYYY-MM-DD-article-name.md
   git commit -m "Publish: [Article Title]"
   git push origin main
   ```
3. **Vercel auto-deploys** — article appears on site within seconds

---

## Series Articles

If writing a multi-part series:

- **Include tease in final paragraph:** One sentence naming the next part and why it's different. Example: "Part II explores how these principles scale when you hit $50M ARR — and where they break."
- **Link previous parts:** Include a brief note at the top linking to the previous article
- **Manage the content-ideas backlog:** Update the series outline in `Content/2026-05-13-content-ideas.md` with completion status

---

## Reference Articles

Use these published articles as benchmarks for tone, structure, length, examples, tables, and accent line placement:

- `2026-02-03-who-is-the-customer.md` — Reference for all dimensions (tone, structure, length, example format, table format, accent line selection)
- `2026-05-04-a-booking-is-a-booking.md` — Clean, focused example with strong definition/reframe arc

---

## Questions or Blockers?

- **Content direction:** Reference `Content/2026-05-13-content-ideas.md` (full backlog)
- **Tone and voice:** Reference `Content/CLAUDE.md` (detailed guidelines)
- **Writing samples:** Search ClaudeOS vault for writing samples and journal entries referenced in the workflow

**Ready to write?** Start with Step 1 (outline) and work through in order. Good luck.
