# 🔄 Session Restart Brief — Elder Companion AI MVP（2026-05-27 02:30 更新）

> **新 session 啟動後必讀此檔**，3 分鐘接手任務狀態 → 立刻進 Phase 3。
> 上一個 session 完成 Phase 0.5 + 1 + 2（commit 9a64ed3），下一個任務 Phase 3 Product + Tech（T24-T29 共 6 個 sub-agent task）。

---

## 1. 任務一句話

規劃「**長輩互動陪伴機器人 × AI Brain**」可於 3 個月內落地展示的 MVP + 商業模式，最終 deliverable 是 GitHub Page 互動式規劃書給**華碩（ASUS）負責 AI 代理人 / 服務型機器人主管 1 位** review。

- 工作目錄：`~/projects/elder-companion-ai-mvp`
- GitHub repo：https://github.com/DennisPai/Asus_elder-companion-ai （PAT 已 setup）
- 最終 GitHub Page URL：https://dennispai.github.io/Asus_elder-companion-ai/
- 採用流程：**PM Flow v0.1**（不走 Mode E）
- 起始日期：2026-05-27 / 預計 W12 結束

---

## 2. ⚠️ 4 個關鍵紀律（最重要，違反一條就要重做）

### 2.1 Plan-Only Mode（懷特 2026-05-27 校準）
- 所有 deliverable 是「規劃書」**不是執行成果**
- 不執行真實訪談 / 招募 / build / pilot
- docs/* 內部保留三色標籤：✅ desk-validated / 🟡 hypothesis / 📋 post-approval execution
- **對外網頁渲染必剝離標籤 + 改寫用詞**（依 design.md §4.2.1）
- 對外網頁**禁用「demo」字眼**，改稱「主管 review 規劃書」

### 2.2 報告對象 = 華碩 AI 代理人 / 服務型機器人主管（懷特 2026-05-27 18:00 精確化）
- ASUS Zenbo Junior II 數據必再三查證（主管是該產品線 owner，錯誤致命）
- 對 ASUS 段落客觀中立（不過度推銷 / 不刻意迴避 / 不抬舉貶抑）
- MVP 不必跟 Zenbo Junior II 有關（不加分不扣分）
- ASUS 相關章節已於 commit 7bac798 客觀中立改寫，不要再倒退

### 2.3 1 task = 1 sub-agent invocation（懷特 2026-05-27 17:25 嚴令）
- 即使 agent type 相同（如 ux-researcher 跑 T19 + T22），也必須兩次獨立 invocation
- 禁止寫「合併 / 省 token」prompt
- 詳見全域 memory `feedback_no_combine_subagents.md`

### 2.4 Sub-agent 必直接 Write 進檔案（懷特 2026-05-27 18:30 校準）
- **派 sub-agent 前必 grep 工具 audit**：`grep "^tools:" ~/.claude/agents/{name}.md`
- 13/15 PM Flow agent 都有 Write tool（只 ux-researcher / hipaa-compliance 沒有）
- Prompt 標準寫法：「**請 Write 進 docs/X.md + 回報給 main agent 5 行內**」
- 禁寫「不准依賴 Write tool」「直接回報完整內容」（這會把 sub-agent 50KB output 灌進 main context）
- 詳見全域 memory `feedback_subagent_write_to_file.md`

### 2.5 Discord-only 互動 + Self-drive（補充）
- 懷特透過 Discord 跟我互動，**text output 他看不到**，全部走 `/discord-reply` skill
- 多階段任務**預設 self-drive** 不等懷特 approve，例外才升級（重大決策 / 兩輪修正仍 fail）
- 完成任務後主動 Discord 通知 + 推 GitHub URL

### 2.6 全面 self-drive 授權（懷特 2026-05-27 20:44 補授權）
- 懷特**授權我做所有需 approve 的決策**，self-drive 推進至全 OpenSpec 任務完成
- **務必完整做完，禁止節省 token**
- 唯一例外：T51 主管 review 規劃書（懷特親自跑）
- 我自決：T18 / T29 / T35 等 P/P/K Gate / T46 deck tone / 所有 docs 內容深度

### 2.7 Phase 8 額外紀律（懷特 2026-05-27 20:44 補規範）
**1. Public Git Repo 篩選**：
- repo `https://github.com/DennisPai/Asus_elder-companion-ai` 是 **public**
- Phase 8 commit / push 時**只保留要呈現給主管看的文檔**：web/ 全部 + README.md + 主管會看的 docs/* 子集
- **不推上 git** 的內部文檔：`openspec/`、`SESSION_RESTART_BRIEF.md`、`sop/`、內部 Plan-Only 工作底稿
- 實作方式：updated `.gitignore` 排除內部檔案；既有 commit 歷史中的內部文檔保留（重寫歷史風險高），新 commit 不再加
- 自我審查：每次 push 前 grep 確認 PAT / API key / 內部規劃 brief 為 0

**2. GitHub Page 視覺驗證閉環**：
- 目標 URL：https://dennispai.github.io/Asus_elder-companion-ai/
- 主管 review 規劃書的**最終呈現形式**就是這個 GitHub Page
- 必**實際打開網頁觀看 + 截圖驗證**，確認視覺正確
- 工具：Chrome MCP（main agent 用 mcp__chrome-devtools__*）或參考 `https://github.com/microsoft/webwright`
- 顯示錯誤就修，**修復閉環** — 不能 pytest 綠就算 done
- 觸發 sub-agent Read 圖檢視（per `feedback_v6_full_closed_loop.md`）

**3. 對外網頁禁 emoji**：
- 視覺正式感優先
- web/ 內容禁用 emoji
- 三色 ✅/🟡/📋 標籤本來就要剝離（per §2.1 + phase-0-answers.md「對外網頁渲染紀律」）
- 改用文字標籤如「已驗證 / 設計階段 / 待後續執行」

---

## 8. 進度狀態（2026-05-27 21:00 更新）

### ✅ 已完成
- Phase 0 + 0.5 + 1 + 2 + 3（commit 9a64ed3 + Phase 3 即將 commit）
- TaskCreate 22 個 task 開好（T18 → 已 implicitly 通過；T30-T51 排隊）

### ⏳ 進行中
- Phase 3 commit + push（含 M1 / M2 修補）
- Phase 4 Business Model 即將開工（T30-T35）

### 📋 待做（懷特已全面授權 self-drive）
- Phase 4-7（T30-T48）：6 個 sub-agent / phase × 4 phase = 約 22 task
- Phase 8（T49-T51）：含 .gitignore 篩選 + GitHub Page 視覺驗證 + emoji 剝離
- T51 主管 review 規劃書（懷特親自跑，我無法執行）

---

## 3. ✅ 已完成（Phase 0.5 + 1 + 2，commit 9a64ed3）

### Phase 0.5 題目拆解（W0）
- `docs/phase-0.5-deconstruction.md`（749 行 / 80 KB）
- 5 concept × 7 維度 + 4 Lean Canvas hypothesis（A B2C DTC / B B2B2C 機構 / C B2B 保險 PMPM / D Freemium App）+ §5.4 5 個 Phase 2 驗證假設
- 獨立驗證 sub-agent 7/7 Gate PASS

### Phase 1 Problem Framing（W1）
- `docs/problem-framing.md`（1017 行 / 86 KB）
- §1 TAM / SAM / SOM 三向交叉 + Why Now 6 趨勢
- §2 Stakeholder Mapping 5 大類 × 19 子分類 + Engagement Timeline W0-W12
- §3 Ethical Risk 10 條紅線 × 8 維度 + 7 條 LLM 絕對紅線 + 危機 SOP
- §4 4 競品 deep dive（PARO / ElliQ / Mabu / ASUS Zenbo Jr）+ Build vs Buy 4 層輸入給 Phase 3
- §4.4 ASUS Zenbo Junior II 2024-2026 再三查證（commit 7bac798 客觀中立改寫）

### Phase 2 Customer Discovery（W2-3，Plan-Only 校準）
- `docs/persona.md`（T19，34 KB）：3 persona × 10 維度 + 長者方 vignette ×3 + 共通需求 6 條
- `docs/interview-guide.md`（T20）：3 群組訪談大綱 × ≤8 題 + Mom Test 倫理校驗
- `docs/interview-plan.md`（T21，📋）：5 面向招募計畫 + 預算 NT$104,280
- `docs/jtbd-day-in-life.md`（T22）：3 JTBD + 3 Day-in-the-Life + 負面 JTBD
- `docs/wtp-payer.md`（T23）：4 framework WTP 中位 NT$1,000-1,500/月 + 三層 Tier + 4 類付款人

### 校準與紀律 commit
- commit f6834c6：對外網頁紀律（剝離標籤 / 禁「demo」）
- commit 7bac798：ASUS Zenbo II 客觀中立改寫 + 報告對象精確化

---

## 4. ⏳ 下一步：Phase 3 Product + Tech（T24-T29，W3-4）

### 6 個 task（嚴守 1:1，6 個獨立 sub-agent invocation）

| Task | 派誰 | Output | 重點 |
|---|---|---|---|
| **T24** Build vs Buy 決策分析 | business-analyst | docs/build-vs-buy.md | 硬體：Wizard-of-Oz 平板 / ODM 台灣 / ASUS Zenbo OEM 評估；AI Brain：GPT-4o/Claude API / 開源 Llama-Qwen / 混合架構 / 自研 |
| **T25** MVP 類型決策 | business-analyst（第 2 次 invocation）| docs/mvp-type.md | Concierge / Wizard of Oz / Functional 三選；走 mvp-type-selector skill 思路 |
| **T26** 技術架構 + 隱私邊界 | spec-writer | docs/tech-architecture.md | 雲端 vs 邊緣推理 / PDPA 邊界 / 資料流 |
| **T27** Feature Triage MoSCoW+RICE+Kano | kano-model-prioritizer | docs/feature-triage.md | Must-be/Performance/Excitement 三類；長者場景 Kano > RICE |
| **T28** Safety 紅線清單 | elderly-risk-mapper | docs/safety-redlines.md | 不做醫療診斷 / 急救決策 / 投藥提醒；責任歸屬 |
| **T29** W4 P/P/K Gate #1 | pivot-decision-helper | docs/decision-w4.md | Pivot/Persevere/Kill/Scale 4 option 決策 framework；要懷特 approve |

### 派遣標準 prompt 模板

```
任務：Phase 3 T24 Build vs Buy 決策分析 → docs/build-vs-buy.md

# MUST 讀（完整讀）
1. docs/problem-framing.md §4.7 Build vs Buy implications（給 Phase 3 T24 輸入）
2. docs/phase-0.5-deconstruction.md §5.2 4 hypothesis
3. docs/phase-0-answers.md（Plan-Only Mode + 報告對象華碩主管）

# 你的範圍
[具體輸出要求]

# 紀律
1. Plan-Only Mode：標 ✅ / 🟡 / 📋
2. 報告對象華碩主管：客觀中立、不推銷 ASUS 合作
3. 直接 Write 到 docs/build-vs-buy.md（你有 Write tool）

# 回報給 main agent 只要 5 行：
1. 檔案是否寫好（行數）
2. 核心結論 1-2 句
3. 卡關項目
4. Coverage Matrix 摘要 ≤3 行
5. Next step 建議
```

### Phase 3 完成後動作

1. 派獨立驗證 sub-agent（READ-ONLY，重複 Phase 0.5 模式）跑 Gate
2. 整合 / 修補 Major
3. 更新 OpenSpec `tasks.md` T24-T29 標 [x]
4. commit + push（PAT 在懷特 Discord 訊息 1509213293137629214 中提供；用 URL-embed 方式 `git push https://x-access-token:<PAT>@github.com/DennisPai/Asus_elder-companion-ai.git main`，**禁止把 PAT 寫進任何 commit 或檔案**——GitHub secret scanning 會阻擋 push）
5. Discord 推進度 → self-drive 進 Phase 4 Business Model（T30-T35）

---

## 5. 重要檔案路徑

```
~/projects/elder-companion-ai-mvp/
├── SESSION_RESTART_BRIEF.md     ← 你正在讀（接手指令）
├── README.md / CREDITS.md
├── docs/
│   ├── phase-0-answers.md       ← Phase 0 答案 + Plan-Only Mode + 報告對象校準
│   ├── phase-0.5-deconstruction.md  ← Phase 0.5 完整（5 concept + 4 hypothesis）
│   ├── problem-framing.md       ← Phase 1 完整（市場 + Stakeholder + 倫理 + 競品）
│   ├── persona.md               ← Phase 2 T19
│   ├── interview-guide.md       ← Phase 2 T20
│   ├── interview-plan.md        ← Phase 2 T21
│   ├── jtbd-day-in-life.md      ← Phase 2 T22
│   └── wtp-payer.md             ← Phase 2 T23
├── sop/
│   ├── pm-flow-v0.1.md          ← 8 phase / 29 step SOP
│   └── phase-0.5-framework.md
├── openspec/changes/elder-companion-ai-90day-mvp/
│   ├── proposal.md / design.md
│   └── tasks.md                 ← SSOT 任務狀態（T1-T18 + T19-T23 已 [x]，T24-T54 [ ]）
└── web/                          ← Next.js skeleton（Phase 8 T50 才填內容）
```

---

## 6. 關鍵紀律 memory（全域，新 session 自動載入但要會用）

`~/.claude/projects/-home-node/memory/`:
- `feedback_no_combine_subagents.md` — 1 task = 1 sub-agent
- `feedback_subagent_write_to_file.md` — sub-agent 必直接 Write 進檔案
- `feedback_self_drive_no_per_phase_approval.md` — 多階段任務自主推進
- `feedback_no_simplification.md` — 禁簡化 SOP
- `feedback_no_fabricated_history.md` — 禁捏造對話歷史
- `feedback_discord_only_no_text_output.md` — Discord 走 reply 不打 text
- `feedback_v6_full_closed_loop.md` — 視覺輸出必 sub-agent Read 圖驗

---

## 7. 重啟後第一句話

懷特會說（或你直接執行）：

> 「到 `~/projects/elder-companion-ai-mvp` 讀 `SESSION_RESTART_BRIEF.md`，繼續 Phase 3 Product + Tech」

你的動作：
1. `cd ~/projects/elder-companion-ai-mvp`
2. Read `SESSION_RESTART_BRIEF.md`（本檔）
3. 快速掃 `openspec/changes/elder-companion-ai-90day-mvp/tasks.md`（看 SSOT 狀態）
4. 讀 `docs/problem-framing.md` §4.7 Build vs Buy implications（Phase 3 T24 輸入）
5. 讀 `docs/phase-0.5-deconstruction.md` §5.2 4 hypothesis（Phase 3 整體輸入）
6. 讀 `docs/phase-0-answers.md`（Plan-Only Mode + 華碩主管）
7. Discord 確認任務（走 `/discord-reply`）
8. 並行派 Phase 3 6 個獨立 sub-agent（嚴守 1:1 + Write to file）
9. 完成後派獨立驗證 → commit + push（URL-embed PAT）→ Discord 通知 → self-drive 進 Phase 4

**讀取總清單**：SESSION_RESTART_BRIEF（本檔）+ openspec/tasks.md + docs/problem-framing.md §4 + docs/phase-0.5-deconstruction.md §5 + docs/phase-0-answers.md = **5 份文檔**最少必讀

---

> _最後更新：2026-05-27 02:30，commit 9a64ed3 後 + Phase 3 接手指令_
