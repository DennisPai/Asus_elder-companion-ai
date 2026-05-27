# Design: Elder Companion AI — 90 Day MVP + Business Model

## 1. Architecture Decision

### 1.1 為什麼不走現有 Mode E

Mode E (v6.3, 5/26 上線) 是「完整新創方法論的縮影」，但 90 天 MVP 不是完整新創——它是「先做出能 pitch 的版本、後面再補完」。Mode E 設計重 method completeness（多份 canvas / 多 framework / 9 產業 routing 兜底），輕 ship 路徑（沒 Build vs Buy、沒架構決策、沒 hardware 特殊性、沒 polish phase）。對 hardware + vulnerable population 場景 generic 不夠 specific。

懷特決策：新專案先用「PM 流程 v0.1」當專屬 SOP（不動 Mode E）→ demo day 後 retrospective 抽通用部分進 Mode E v6.4。

### 1.2 PM 視角流程 v0.1 八階段

| Phase | Week | 主活動 | 主要 deliverable |
|---|---|---|---|
| 0 | 前置 | 強制問 5 題（產業 / target audience / 預算 / demo 對象 / geo） | phase-0-answers.md |
| **0.5** | W0 | **題目拆解：5 個 concept × 7 維度研究**（懷特原始命題） | phase-0.5-deconstruction.md |
| 1 | W1 | Problem Framing：Why Now + Stakeholder Mapping + Ethical Risk + 競品 deep dive | problem-framing.md |
| 2 | W2-3 | Customer Discovery：3 persona / 濃縮 Mom Test ≤8 題 × 5-8 人 / JTBD / WTP | discovery-log.md / persona.md |
| 3 | W3-4 | Product + Tech：Build vs Buy / MVP 類型 / 技術架構 / Feature Triage (MoSCoW+RICE+**Kano**) / Safety 紅線 | tech-architecture.md / feature-triage.md |
| 4 | W4-5 | Business Model：Lean Canvas 一份 / 收入模型 narrow 化 4 選項 / Pricing × WTP / Hardware Unit Econ | lean-canvas.md / unit-econ.md / pricing.md |
| 5 | W5-9 | Prototype Build (Wizard of Oz)：sprint 1-4 含核心對話 / 緊急 keyword / 子女 app | prototype/ |
| 6 | W9-10 | Pilot + Validation：3-5 機構 / 10-20 家庭 / 4 週 closed beta / PMF 量測 | pilot-mou.md / pmf-report.md |
| 7 | W10-12 | Pitch Prep：Why Us 護城河 / 5 年財務模型 / YC 10-slide / Demo backup | pitch-deck.md / financial-model.md / demo-script.md |
| 8 | W12 | Pivot/Persevere/Kill 決策 + 下一階段 6 個月 milestone | decision.md / next-6-months.md |

### 1.3 vs Mode E 的關鍵差異

| 維度 | Mode E (v6.3) | PM 流程 v0.1 |
|---|---|---|
| Stakeholder | 預設 user = buyer | 明確拆 user / buyer / decision maker / gatekeeper / payer |
| Ethical Risk | 沒有 | 必做（vulnerable population 紅線） |
| Build vs Buy | 跳過 | W3-4 生死決策 |
| Hardware Unit Econ | SaaS 模型 | BOM / 庫存 / 製造 / 認證費 / working capital |
| Canvas | Lean + BMC 兩份 | 只用 Lean Canvas |
| 收入模型 | 10 種 generic | 4 種 narrow |
| Mom Test | ≥15 題 × ≥15 人 | ≤8 題 × 5-8 人（濃縮版） |
| P/P/K Gate | W4/W8/W12 三次 | W6/W12 兩次 |
| Phase 0.5 | 沒有 | 5 concept × 7 維度題目拆解 |
| 時間配比 | discovery 6 / build 4 / pitch 2 | discovery 3 / build 5 / pilot 2 / pitch 2 |

## 2. Phase 0.5 框架設計

### 2.1 5 個 concept 拆解
1. **陪伴長者** — 不依賴機器人本身、純從「陪伴」需求出發
2. **與長者互動** — 互動模式 / 多模態 / 認知負擔
3. **機器人** — 硬體形態 / 移動性 / 物理介面
4. **機器人 + AI Brain** — AI 增能的機器人差異化
5. **全部 combine** — 三者疊加的綜效需求 + 全新商模可能性

### 2.2 7 維度研究（每 concept 跑一遍）
1. 需求清單（≥5 個明確需求）
2. 痛點清單（≥5 個明確痛點 + 嚴重度排序）
3. 既有成功商模 ≥3 案例（含定價 / 收入結構 / market size / 退場故事）
4. 市場 sizing TAM/SAM（量化、含來源）
5. 競品 SWOT（≥3 競品）
6. 顧客旅程（觸發 / 評估 / 購買 / 使用 / 退場）
7. 技術可行性 + 護城河可能性

### 2.3 派 agent 策略（Phase 0.5 並行跑 5 條線）
- product-manager（總控）
- ux-researcher × concept（×5 並行）
- competitor-swot × concept（×5 並行）
- 新加 `market-research-analyst`（從 VoltAgent 候選表）
- 新加 `concept-deconstructor`（從 VoltAgent 候選表）

## 3. Hub-Spoke Pattern 適用性

v6.3.1 Hub-Spoke 適用於本案 W5-9 Sprint Build 階段（內呼 backend-engineer / frontend-engineer 等）。Phase 0-7 偏 research / 商業設計，agent 之間沒明顯 implementer ≠ verifier 結構，**不強制走 Hub-Spoke**，但 spec-to-brief 命名規範繼續用。

## 4. GitHub Page 架構

### 4.1 Tech Stack
- Next.js 14 App Router + Tailwind CSS + recharts
- MDX support → 直接 import `docs/*.md` 渲染 phase deliverable
- next.config.js `output: 'export'` → static export
- GitHub Actions: `web/` build → `gh-pages` branch → GitHub Pages

### 4.2 主管 review 視角設計（互動式 — 對外是「規劃書」非「demo」）
- **Landing Page**：Why Now / Stakeholder Map / 5-concept matrix
- **Persona Cards**：3 persona 可點開展開細節
- **Competitor Filter**：競品比對表（按功能 / 定價 / 商模 filter）
- **Lean Canvas SVG**：可 hover 看到每 block 來源 evidence
- **Financial Model Table**：5 年預測（保守 / 中性 / 激進）可切換 + interactive
- **Slide Viewer**：規劃內容 slides 嵌入
- **Concept Prototype Embed**：Wizard of Oz 概念示意（影片腳本＋設計，📋 規劃通過後實錄）

### 4.2.1 對外網頁用詞紀律（懷特 2026-05-27 校準）

**整體定位**：網頁呈現是一份**正式的「規劃 3 個月落地的長輩互動陪伴機器人 × AI Brain MVP 與商業模式」規劃書**，給公司主管 review。

**用詞禁區**：
- ❌ 禁用「demo」字眼（內部稱「主管 review 規劃書」）
- ❌ 禁顯示角度標籤 ✅ desk-validated / 🟡 hypothesis / 📋 post-approval（這些是**內部 review 用**，不對外）
- ❌ 禁出現「Plan-Only Mode」「Wizard-of-Oz」「post-approval execution」等內部術語
- ❌ 禁出現「假設」「猜測」「待驗證」等減弱可信度的表達；改成「規劃」「設計」「分析」
- ❌ 禁出現「我們還沒訪談」「等預算通過」「計畫尚未啟動」等內部時序揭露

**docs/* 內部仍保留三色標籤**（給我們和懷特 review 用），但 web/ MDX 渲染層必須**剝離標籤 + 改寫用詞**才呈現給主管。

**Frontend 實作 (T50)**：
- 自訂 MDX remark plugin 剝離 ✅/🟡/📋 emoji
- docs/*.md 「Plan-Only Mode 校準」段不渲染進網頁
- docs/* 內部標題「（Plan-Only 校準）」字樣在 web 層自動剝除
- 用詞校驗 lint：規劃通過前必跑 grep 確認禁區字眼為 0

### 4.3 不做什麼
- 不做動態後端（純 static）
- 不做用戶帳號 / login
- 不做 analytics（主管直接看就好）
- 不做 W12 P/P/K Gate 互動模組（T53 已退出範圍 — 懷特 2026-05-27 校準）
- 不做主管回饋收集表單（T52 已退出範圍）

## 5. VoltAgent 補 agent 整合流程

1. Explore agent 背景 scan VoltAgent README + agents/（已派）
2. 回報候選表 → push CC → 給懷特勾選
3. 懷特勾選後 copy 進 `~/.claude/agents/`、frontmatter 加 `source: voltagent / mode: pm-flow-v0.1`
4. 授權檢查（MIT / Apache 必驗）

## 6. 不在此 change 範圍

- Mode E v6.4 升級（demo day 後 retrospective 才開新 change）
- 量產執行（90 天 MVP 後事）
- 實機購買硬體（W3-4 Build vs Buy 決定才知道要不要買）
- **T52 收主管回饋 → docs/manager-feedback.md**（懷特 2026-05-27 校準：規劃書 ready 給主管 review 即完成，不收回饋）
- **T53 W12 P/P/K Gate #2 + 下一階段 6 個月 milestone**（懷特 2026-05-27 校準：規劃書 ready 即完成）
