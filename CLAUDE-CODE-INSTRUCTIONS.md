# LMW Labs LLC - New Project Initialization Instructions

## For Claude Code: How to Start Any New Billable Project

When starting a new billable project for LMW Labs LLC, follow these exact steps:

---

## STEP 1: Create Project Directory Structure

```bash
mkdir -p [project-name]/{assets/{logos,photos,docs},src,docs,invoices}
cd [project-name]
```

## STEP 2: Copy Master Template

Copy the CLAUDE-TEMPLATE.md file and rename it to CLAUDE.md:

```bash
cp /path/to/templates/CLAUDE-TEMPLATE.md ./CLAUDE.md
```

## STEP 3: Initialize CLAUDE.md

Replace all bracketed placeholders with actual client information:

### Required Information to Gather:
1. **Client Business Name** - Legal/DBA name
2. **Contact Name** - Primary decision maker
3. **Contact Email & Phone**
4. **Location** - City, State
5. **Service Area** - Geographic coverage
6. **Industry** - What they do
7. **Years in Business**
8. **Current Web Presence** - Facebook, existing site, nothing, etc.
9. **Project Type** - Website, marketing, app, etc.
10. **Quoted Price** (if already provided)
11. **Target Launch Date**

### First Entry in Billing Log:
```
| [TODAY'S DATE] | Project setup and initial planning | PM | 0.50 | $75 | $37.50 | | ☐ |
```

## STEP 4: Create .gitignore

```bash
cat > .gitignore << 'EOF'
# Credentials - NEVER COMMIT
credentials.txt
passwords.txt
.env

# OS files
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/

# Dependencies
node_modules/

# Build outputs
dist/
build/

# Logs
*.log

# Temporary files
*.tmp
*.bak
EOF
```

## STEP 5: Initialize Git

```bash
git init
git add CLAUDE.md .gitignore
git commit -m "Initial project setup for [Client Name]"
```

## STEP 6: Start Work - ALWAYS UPDATE CLAUDE.md

Before EVERY task:
1. Check CLAUDE.md for current status
2. Identify what section needs updating
3. Complete task
4. Update CLAUDE.md with:
   - Billing log entry
   - Deliverable checkbox (if applicable)
   - Any scope changes
5. Commit changes

---

## BILLING LOG ENTRY FORMAT

Every entry must be written as if it will appear on an invoice:

### ✅ GOOD Examples:
```
| 2025-01-09 | Built responsive homepage with hero section, service highlights, and call-to-action buttons | DEV | 2.50 | $100 | $250.00 | | ☐ |
| 2025-01-09 | Configured contact form with email notifications to client@email.com | INTEG | 0.75 | $100 | $75.00 | | ☐ |
| 2025-01-09 | Researched competitor websites and documented findings | RESEARCH | 1.00 | $65 | $65.00 | | ☐ |
| 2025-01-09 | Client call to review homepage mockup and gather feedback | PM | 0.50 | $75 | $37.50 | | ☐ |
```

### ❌ BAD Examples:
```
| 2025-01-09 | Worked on site | DEV | 3.00 | $100 | $300.00 | | ☐ |
| 2025-01-09 | Fixed stuff | DEV | 1.00 | $100 | $100.00 | | ☐ |
| 2025-01-09 | Miscellaneous | DEV | 2.00 | $100 | $200.00 | | ☐ |
```

---

## SCOPE CHANGE PROTOCOL

When client requests something NOT in original scope:

1. **STOP** - Do not proceed with the work
2. **DOCUMENT** in Scope Change Log:
```
| [DATE] | [WHAT THEY ASKED FOR] | [WHO ASKED] | [EST HOURS] | [EST COST] | ☐ | | ☐ |
```
3. **NOTIFY** - Add this note to your response:
   > "This appears to be outside the original scope. Before proceeding, I need to document this and get approval for the additional [X hours / $XXX]."
4. **GET WRITTEN APPROVAL** - Text, email, or documented call
5. **UPDATE** - Mark as approved, add approval method
6. **PROCEED** - Only after approval
7. **BILL** - Add to billing log with "⚠️ SCOPE ADDITION" prefix

---

## CATEGORY CODES QUICK REFERENCE

| Code | Category | Rate | Use For |
|------|----------|------|---------|
| SETUP | Setup | $75/hr | Environment, hosting, domain, DNS, SSL |
| DESIGN | Design | $85/hr | UI/UX, mockups, layouts, branding |
| DEV | Development | $100/hr | Coding, features, debugging |
| CONTENT | Content | $65/hr | Copywriting, SEO content, blogs |
| MEDIA | Media | $75/hr | Photos, graphics, video |
| INTEG | Integration | $100/hr | Forms, APIs, CRM, third-party |
| SEO | SEO | $85/hr | On-page, schema, local SEO |
| MKTG | Marketing | $85/hr | Strategy, campaigns, analysis |
| SOCIAL | Social Media | $50/hr | Posting, engagement, content |
| LEAD | Lead Gen | $100/hr | Ads, landing pages, funnels |
| REV | Revision | $75/hr | Client-requested changes |
| MAINT | Maintenance | $85/hr | Updates, fixes, patches |
| TRAIN | Training | $65/hr | Client education |
| CONSULT | Consulting | $100/hr | Strategy, advice, planning |
| RESEARCH | Research | $65/hr | Market research, tool eval |
| PM | Project Mgmt | $75/hr | Calls, emails, coordination |

---

## WHEN TO ASK FOR CLARIFICATION

Always ask before proceeding if:

1. **Estimated time exceeds 2 hours** for a single task
2. **Feature not explicitly discussed** in project scope
3. **Need to sign up for any service** with recurring costs
4. **Unclear on priority** - what should be done first?
5. **Multiple ways to implement** - which approach does client prefer?
6. **Purchasing required** - stock photos, plugins, themes, tools
7. **Technical decision** that affects future maintenance
8. **Client hasn't responded** to previous questions

---

## END OF DAY CHECKLIST

Before stopping work:

- [ ] All tasks logged in CLAUDE.md billing log
- [ ] Deliverables checklist updated
- [ ] Running totals updated
- [ ] Any scope changes documented
- [ ] Git commit with meaningful message
- [ ] Note any blockers or questions for client/AW

---

## GENERATING INVOICES

When it's time to invoice:

1. Go to Section 17 in CLAUDE.md
2. Copy the invoice template
3. Pull line items from billing log (filter by "☐" unchecked)
4. Calculate totals
5. Mark invoiced items with invoice number
6. Update "Amount Invoiced" in billing summary
7. Export to PDF or copy to invoice software
8. Mark line items as invoiced (check the box)

---

## FILE NAMING CONVENTIONS

### Invoices
`INV-[CLIENT]-[NUMBER]-[DATE].pdf`
Example: `INV-COOPER-001-20250109.pdf`

### Proposals/SOWs
`SOW-[CLIENT]-[DATE].pdf`
Example: `SOW-COOPER-20250109.pdf`

### Assets
`[CLIENT]-logo-[variant].[ext]`
Example: `cooper-logo-primary.png`, `cooper-logo-white.svg`

### Screenshots/Approvals
`APPROVAL-[ITEM]-[DATE].[ext]`
Example: `APPROVAL-homepage-20250109.png`

---

## PROJECT TYPES - WHAT TO ENABLE

### Basic Website
- Sections 1-5 (Core)
- Section 6 (Local SEO)
- Section 10 (Assets)
- Section 11 (Hosting)
- Section 12 (Communications)

### Website + Marketing
- All of above, plus:
- Section 7 (Social Media)
- Section 8 (Lead Gen)
- Section 9 (Reviews)
- Section 13 (Competitors)
- Section 14 (Reporting)

### Ongoing Retainer
- All sections active
- Section 15 (Maintenance) critical
- Section 16 (Upsells) for growth

### Marketing Only (No Website)
- Section 1-3 (Core, Rates, Billing)
- Section 7 (Social Media)
- Section 8 (Lead Gen)
- Section 9 (Reviews)
- Section 10 (Assets)
- Section 13 (Competitors)
- Section 14 (Reporting)

---

## REMEMBER

> **The CLAUDE.md file is the SINGLE SOURCE OF TRUTH.**
> 
> If it's not in CLAUDE.md, it didn't happen.
> If it's not billed, you didn't get paid.
> If it's not approved, don't do it.

---

*LMW Labs LLC - Brandon, MS*
*Template Version 2.0*
