# PM Flow v0.1 — 90 天 MVP + 商業模式 SOP

> 適用：硬體 + 軟體 + AI / vulnerable population / 90 天 demo-ready 場景
> 不適用：純對話 / 純命理 / 純 SaaS / 純社群行銷 / 純工程 task
> 跟 Mode E (v6.3) 關係：本 SOP 是 dog-food 版、跑完 W12 demo day 後 retrospective 抽通用部分進 Mode E v6.4

## 核心設計原則

1. **discovery 短 / build 長**（vs Mode E discovery 重 build 薄）
2. **stakeholder 拆細**（user ≠ buyer ≠ decision maker ≠ gatekeeper ≠ payer）
3. **ethical risk 必做**（vulnerable population 必走 informed consent + 紅線清單）
4. **build vs buy 提前**（W3-4 生死決策）
5. **hardware-aware unit econ**（BOM / 庫存 / 認證費 / working capital）
6. **濃縮版 Mom Test**（≤8 題 × 5-8 人，不是 ≥15 題 × ≥15 人）
7. **P/P/K Gate 2 次**（W6 / W12，不是 Mode E 的 3 次）
8. **Kano > RICE 場景權重**（長者產品看 Kano 屬性比工程 effort 重要）

---

## Phase 0: Setup（前置）

### Input
- 任務描述（從主管 / 客戶來）
- 預算 / 時程 / demo 對象（懷特直接問）

### Output
- `docs/phase-0-answers.md`

### 強制 5 問
1. **產業** — SaaS B2B / B2C App / Marketplace / Fintech / **Health-tech / Hardware** / AI ML / Edu / Food / 其他
2. **Target Audience** — 具體 persona（年齡 / 角色 / 地理 / 收入 / pain trigger）
3. **預算** — 90 天總預算 + 後續 funding 計畫
4. **Demo 對象** — 公司主管 / VC / 客戶試點 / 政府單位（影響 deck framework + tone）
5. **Geo** — 台灣優先 / 含中港東南亞 / 含美日歐（影響法規 + 通路 + 文化）

### 派誰
- main agent（不派 sub-agent，直接問懷特）

### Gate
- 5 題答案明確、無「待定」、無「之後再想」

---

## Phase 0.5: 題目拆解（W0）

詳細見 `sop/phase-0.5-framework.md`。

### Output
- `docs/phase-0.5-deconstruction.md`（5 concept × 7 維度）

### 派誰
- assumption-mapping（總控）
- market-researcher × 5 concept（並行）
- competitive-analyst × 5 concept（並行）
- project-idea-validator（最後跑假設破壞）

### Gate
- 5 concept × 7 維度全填、≥3 商模案例 / concept、TAM/SAM 量化有來源

---

## Phase 1: Problem Framing（W1）

### Output
- `docs/problem-framing.md`（§1 Why Now / §2 Stakeholder Mapping / §3 Ethical Risk / §4 競品 deep dive）

### 派誰
- **market-researcher** — TAM/SAM/SOM 量化 + Why Now 論證
- **business-analyst** — Stakeholder Mapping（user / buyer / decision maker / gatekeeper / payer）
- **elderly-risk-mapper**（從 risk-manager fork）— Ethical Risk + 紅線清單
- **competitive-analyst** — 競品 deep dive（PARO / ElliQ / Mabu / ZenboJr）

### Gate
- TAM/SAM 量化有 3 source / Stakeholder 5 角色明確、Ethical 紅線 ≥5 條、競品 ≥4 個含定價

---

## Phase 2: Customer Discovery（W2-3）

### Output
- `docs/persona.md`（3 persona）
- `docs/interview-guide.md`（濃縮版 Mom Test ≤8 題）
- `docs/interview-log.md`（10-16 人訪談記錄）
- `docs/jtbd-day-in-life.md`
- `docs/wtp-payer.md`

### 派誰
- **ux-researcher**（持人物誌 / Day-in-the-Life）
- **project-idea-validator**（訪談中假設破壞）

### Gate
- 訪談 ≥10 人 + JTBD 抽 ≥5 個 + WTP 量化 + 付款人辨識（誰真正掏錢明確）

---

## Phase 3: Product + Tech Decision（W3-4）

### Output
- `docs/build-vs-buy.md` — 硬體用市售平台還自製？AI Brain 用 GPT/Claude/自託管？
- `docs/mvp-type.md` — Concierge / Wizard of Oz / Functional
- `docs/tech-architecture.md` — 隱私邊界（雲端 vs 邊緣推理）
- `docs/feature-triage.md` — MoSCoW + RICE + **Kano**（長者場景 Kano > RICE）
- `docs/safety-redlines.md` — 不做醫療診斷 / 急救決策 / 投藥提醒
- `docs/decision-w4.md` — W4 P/P/K Gate #1

### 派誰
- **business-analyst** — Build vs Buy 框架評估
- 既有 **spec-writer** — 技術 spec
- **kano-model-prioritizer**（新建）— Feature Triage with Kano focus
- 既有 **backend-engineer** + **frontend-engineer** — 技術架構提議

### Gate
- W4 P/P/K Gate #1：場景假設 ≥1 個被驗證 / build vs buy 鎖定 / safety 紅線 ≥5 條

---

## Phase 4: Business Model（W4-5）

### Output
- `docs/lean-canvas.md`（一份 Lean Canvas、不做 BMC）
- `docs/revenue-model.md`（4 選項：Hardware 買斷+Sub / HaaS / B2B SaaS / B2G）
- `docs/pricing.md`（三層 tier × WTP 對齊）
- `docs/unit-econ.md`（hardware-aware）
- `docs/cert-timeline.md`（CNS / CE / FDA 若涉醫療）
- `docs/decision-w6.md`（W6 P/P/K Gate Mid-point）

### 派誰
- 既有 **lean-canvas-writer**
- **hardware-unit-econ-modeler**（fork）— BOM + 庫存 + 製造 + 認證費 + working capital
- **5yr-financial-modeler**（fork）— 5 年預測 + Use of Funds 雛形
- 既有 **pricing-strategist**

### Gate
- W6 P/P/K Gate Mid-point：LTV:CAC 健康度 / hardware payback ≤24mo / 收入模型鎖定

---

## Phase 5: Prototype Build（W5-9）

### Output
- `web/prototype/` Wizard of Oz prototype
- `docs/sprint-1.md` / `sprint-2.md` / `sprint-3.md` / `sprint-4.md`

### Sprint 配置
- Sprint 1-2（W5-6）：Wizard of Oz prototype（市售平板 + OpenAI/Claude API + 後台人在環）
- Sprint 3（W7-8）：核心對話 + 緊急 keyword 偵測 + 子女 app
- Sprint 4（W8-9）：閉迴路測試 5-10 家庭 / 1-2 機構

### 派誰
- 既有 **backend-engineer** + **frontend-engineer** + **test-automator**
- 走 v6.3.1 Hub-Spoke Pattern（spec-to-brief --per-tm）

### Gate
- 每 sprint 結束跑 implementation-validator 驗證 + 主管 demo readiness check

---

## Phase 6: Pilot + Validation（W9-10）

### Output
- `docs/pilot-recruitment.md` — 3-5 機構 / 10-20 家庭
- `docs/pilot-mou.md` — MoU 簽訂（責任 / 資料 / 退費）
- `docs/pmf-report.md` — Sean Ellis Test + retention curve + NPS
- `docs/regulatory-check.md` — PDPA / 醫療法 第一輪

### 派誰
- 既有 **pilot-mou-drafter**
- 既有 **pmf-cohort-analyzer**
- **legal-advisor**（從 VoltAgent）— 隱私政策 + 服務條款
- 既有 **gdpr-compliance-checker**

### Gate
- Sean Ellis ≥40% / Day-7 retention ≥30% / NPS ≥30 / 法規 BLOCKER = 0

---

## Phase 7: Pitch Prep（W10-12）

### Output
- `docs/why-us-moat.md` — Why Us + 護城河 deep dive
- `docs/financial-model.md` — 5 年預測 + Use of Funds + 燒錢曲線
- `docs/pitch-deck.md` — YC 10-slide
- `docs/pitch-script.md` — 5 min pitch script
- `docs/qa-top20.md` — Top 20 投資人 Q&A
- `web/public/demo-video.mp4` — Demo backup（影片）

### 派誰
- **competitive-analyst**（fork、moat 深度） + 既有 **founder-storyteller**
- **5yr-financial-modeler**
- 既有 **pitch-deck-writer** + **demo-script-writer** + **investor-qa-prepper**

### Gate
- pitch deck 10 slide 完整 + 財務模型 5 年 + Q&A Top 20 + demo 影片備案 ready

---

## Phase 8: Demo Day（W12）

### Output
- `web/` 上線（Next.js static export → gh-pages）
- `docs/manager-feedback.md`
- `docs/decision-w12.md`（P/P/K Gate #2）
- `docs/next-6-months.md`

### 派誰
- main agent 主導
- frontend-engineer 最後 polish web/

### Gate
- W12 P/P/K Gate #2：PMF 訊號 ≥40% Sean Ellis + 主管 OK go / no-go

---

## 派 agent 紀律

1. **每次派 sub-agent 前必跑 spec-to-brief**（v6.2/v6.3.1 強制）
2. **Phase 5-9 走 Hub-Spoke**（W5-9 工程 sprint 適用、其他 Phase 偏 research 不強制）
3. **implementation-validator 在 build phase 結束必跑**（限 Write findings.md）
4. **sub-agent 報告必含 Coverage Matrix**（找了什麼 / 沒找什麼）
5. **跨檔批改逐檔 Read**（feedback_write_tool_existing_file 紀律）

## 時間配比 vs Mode E

| 階段 | Mode E | PM 流程 v0.1 |
|---|---|---|
| Discovery (Phase 0-2) | W0-6（6 週） | W0-3（3 週）|
| Build (Phase 3-5) | W7-10（4 週）| W3-9（6 週）|
| Pilot (Phase 6) | 跳過 / 併入 W11 | W9-10（2 週）|
| Pitch (Phase 7-8) | W11-12（2 週）| W10-12（2.5 週）|

把 3 週時間從 discovery 搬到 build + pilot，更貼近「能 ship 出去 demo」的真實節奏。

## 版本紀錄

- v0.1 (2026-05-27)：初稿、基於懷特 Discord 對話 + Mode E vs PM 視角 8 點對比
