# Hamoon lead-intake automation (n8n)

Two importable workflows.

- `hamoon-lead-automation.json` — the real pipeline: webhook → normalize → detect page/workshop → AI score → route → append to one of 6 sheet tabs (`Math`, `English`, `AI`, `Workshop`, `Homepage`, `Error_Review`). Each Google Sheets node retries 3× on failure; if it still fails, the item is routed in-workflow (not reconstructed later) to a formatter + email step, so the exact row that failed to save reaches your inbox verbatim.

**Column schema (must match your sheet tabs exactly, in this order):**
- `Math` / `English` / `AI` / `Homepage` — 10 columns: نام, نام خانوادگی, جنسیت, شماره تماس, ایمیل, رده سنی, پیام (اختیاری), **sourcePage**, امتیاز مشتری بالقوه, دلیل امتیاز.
- `Workshop` — 11 columns: the same 10 plus **نام کارگاه** (from `workshopTitle`, inserted right after `sourcePage`).
- `Error_Review` — same 11 columns as `Workshop`.
- `hamoon-lead-automation-error-alert.json` — a workflow-level backstop for *unexpected* crashes only (a misconfigured node, a bug). It cannot recover the original submission data — n8n's Error Trigger doesn't have access to it — so it just tells you an execution failed and points you at it in the n8n UI. The real data-loss protection is the in-workflow error branch described above.

**Customer confirmation email.** After a submission is successfully appended to *any* of the 6 sheet tabs (including `Error_Review` — the person still submitted successfully from their side even if we couldn't identify the source page), the workflow checks `Has Email?`. If `email` is non-empty, it sends a styled HTML welcome/confirmation email straight to the submitter (`Format Welcome Email` → `Send Welcome Email`), personalized with their name and the department/workshop they contacted. Since `email` is an optional form field, submissions without one simply skip this branch — nothing breaks, no error, just no email sent. This uses the same SMTP credential as the Sheets-failure alert; you only need to create it once and attach it to all three email-sending nodes.

`sourcePage` always holds the raw, unmodified source-page value the site sent (e.g. `Math`, `Home Page`, `Workshops`) — not the internally normalized routing key.

`نام کارگاه` logic (applies to both `Workshop` and `Error_Review`):
- If the submission carried a `workshopTitle` → that exact raw value.
- Otherwise, if it's recognizably the workshop page (the generic "interested in workshops" form, which has no title field) → `علاقه‌مندی عمومی به کارگاه‌ها (بدون انتخاب کارگاه مشخص)`.
- Otherwise (an `Error_Review` case with no title and no workshop association at all) → left blank, since labeling it as workshop interest would be inaccurate.

**AI provider: OpenRouter (not Anthropic directly).** The "AI Lead Scoring" node calls `https://openrouter.ai/api/v1/chat/completions` (OpenAI-compatible chat format) using the free model `meta-llama/llama-3.3-70b-instruct:free`. OpenRouter's free-model lineup changes over time — if this one is retired or rate-limited, open the node's `jsonBody` and swap the `model` string for another `:free`-suffixed one from https://openrouter.ai/models?max_price=0 (e.g. `qwen/qwen-2.5-72b-instruct:free` or `deepseek/deepseek-chat-v3.1:free`). No other change is needed to switch models.

## Setup checklist

1. **Import both files** (Workflows → Import from File).
2. **Create the 6th sheet tab** in your spreadsheet: `Error_Review`, with the same 11-column schema as `Workshop` (see the column schema above). This is where submissions from an unrecognized source page land — never silently dropped, never mixed into a real page's sheet.
3. **Webhook node → credentials**: create a "Header Auth" credential named `Hamoon Webhook Secret`, header name `x-webhook-secret`, value = whatever you set for `N8N_WEBHOOK_SECRET` on the site. Attach it to the Webhook node. (The Next.js side already sends this header — see `.env.local`.)
4. **AI Lead Scoring node → credentials**: create an n8n "Bearer Auth" credential named `OpenRouter API Key` with your OpenRouter API key (get one free at https://openrouter.ai/keys) as the token, and attach it to the node.
5. **All 6 "Append —" Google Sheets nodes → credentials**: attach your Google Sheets OAuth2 credential, set `documentId` to your spreadsheet, and re-pick each `sheetName` from the dropdown (the tab names must match exactly: `Math`, `English`, `AI`, `Workshop`, `Homepage`, `Error_Review`).
6. **All 3 email-sending nodes** — `Send Sheets Failure Email` and `Send Welcome Email` (main workflow) plus `Send Alert Email` (backstop workflow) — set `fromEmail` (use a real address on your domain, e.g. `no-reply@hamooninstitute.com`, so it doesn't land in spam) and attach the same SMTP credential to all three, or swap them for a Gmail node if you'd rather use OAuth.
7. **Main workflow → Settings → Error Workflow**: select "Hamoon — Lead Intake Unexpected Failure Alert" from the dropdown.
8. **Activate the main workflow**, copy its production Webhook URL, and set on the site:
   ```
   N8N_WEBHOOK_URL=<the webhook URL>
   N8N_WEBHOOK_SECRET=<same value used in the Header Auth credential in step 3>
   ```
9. **Test** each of: a strong lead, a weak/incomplete one, a spam-like one, each of the 4 departments, a specific workshop, the generic "interested in workshops" form, a submission with no email (should save fine, no welcome email sent, no error), a submission with an email (should receive the welcome email), a deliberately wrong `sourcePage` (should land in `Error_Review`, not `Homepage`, and still get a welcome email if it has one), a temporarily-broken OpenRouter credential (should still save with score 3 and the exact fallback reason), and a temporarily-broken Sheets credential (should trigger the failure email with the full row). Every case must end with a row somewhere — never a silent drop.

Notes:
- Free OpenRouter models are rate-limited and occasionally slower/less consistent than a paid model. If you see a lot of fallback score-3 rows in practice, check the node's execution log first — it usually means the free model is rate-limiting or timing out, not a bug in the workflow.
- The `Has Email?` node's condition may need a quick once-over in the n8n UI after import — IF-node condition schemas have shifted slightly across n8n versions, so if it doesn't show "email / is not empty" correctly, just re-set that one condition by hand (same for `Route by Page`'s Switch conditions, which have the same caveat).
