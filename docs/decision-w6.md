# Pivot / Persevere / Kill / Scale Decision — W6 Mid-point Gate
**Phase**: PM Flow v0.1 W6 Mid-point Gate（Plan-Only Mode）
**Date**: 2026-05-27
**Source**: decision-w4.md + lean-canvas.md + revenue-model.md + pricing.md + unit-econ.md + cert-timeline.md + problem-framing.md + phase-0.5-deconstruction.md + phase-0-answers.md + wtp-payer.md + persona.md + jtbd-day-in-life.md + build-vs-buy.md + mvp-type.md + tech-architecture.md + feature-triage.md + safety-redlines.md
**Self-drive 聲明**: 本 Gate 為 main agent self-drive 決策框架，懷特 2026-05-27 20:44 全面授權，無需逐項 approve。後續 Phase 5-8 依此推進。唯一需懷特親自介入事項：T51 主管 review 規劃書（W12）。

> **Plan-Only Mode 特殊校準**：本 W6 Gate 不是「看真實 metric 是否達標」，而是「評估 Phase 4 Business Model 6 個 deliverable（T30-T34）是否強化 / 修正 W4 Gate 主軸 hypothesis 推薦，及 Phase 5-8 應採何策略」。所有評估結論標 ✅ desk-validated / 🟡 hypothesis / 📋 post-approval execution。
>
> **禁用字眼**：demo（全文改稱「主管 review 規劃書」）。**禁稱「Mode E」，本案是 PM Flow v0.1**。

---

## §1. W4 Gate 主軸 Review

### §1.1 W4 Gate 結論摘要（基準線）

W4 Gate（decision-w4.md §2.5 + §4）確認以下 4 hypothesis 評分與角色：

| Hypothesis | 加權總分（W4）| W4 決策 | 角色定位 |
|---|---|---|---|
| **A B2C DTC** | 4.40/5 | Persevere 主軸 | Year 1 主要商業模式 |
| **D Freemium App** | 4.20/5 | Persevere 入口補充 | 90 天最快 GTM + 軟體引流 |
| **B B2B2C 機構** | 3.35/5 | Persevere 次主軸 | Year 1 H2 BD + Year 2 ARR hedge |
| **C 保險 PMPM** | 2.30/5 | 延後 Year 3+ | 長期願景，非 90 天 / Year 1 範圍 |

**W4 主要未確認項（5 個關鍵假設）**：
- 假設 1：WTP NT$1,000-1,500/月 — 🟡 四框架推算，方向未被破壞
- 假設 2：長者 70-82 主動互動 4 週不棄 — 🟡 ElliQ 正向驗證但族群不同
- 假設 3：非影像式緊急偵測 ≥80% 召回 — 🟡 路徑可行，準確率未知
- 假設 4：機構願採購 — 🟡 補貼誘因有邏輯，採購週期長
- 假設 5：法規 12-18 月可落地 — 🟡 App 形態 90 天免認證已確認

**W4 設定的 Phase 4 輸入任務**（T30-T34）：
- T30 Lean Canvas v1（三 Canvas 整合）
- T31 Revenue Model Selection（4 主選項 + Year 1-3 ARR 三情境）
- T32 Pricing Strategy（三層 Tier Anchor + Decoy）
- T33 Hardware Unit Economics（LTV:CAC + Payback + Break-even + Series A）
- T34 Certification Timeline Map（認證時程 + 法規路徑）

W4 Gate 結論的 Phase 4 主軸輸入已全部完成（T30-T34 全 ✅）。本 W6 Gate 在此基礎上進行 Phase 4 後的 hypothesis 重評。

### §1.2 W4 Gate 對 Phase 4 的預設觸發條件

W4 Gate 在 decision-w4.md §4.3 設定以下切換觸發條件（lean-canvas.md §3 亦確認）：

| Gate | 指標 | 觸發動作 |
|---|---|---|
| W6 Gate | 機構訪談 LOI ≥2（Phase 2 完成後）| Hypothesis B 升主軸；A 降次軸 |
| W6 Gate | WTP 訪談穩定 WTP < NT$600/月（多數受訪者）| Pivot Revenue Block → Tier 1 NT$799 主力；Tier 2 降至 NT$999 |
| W6 Gate | WTP 訪談穩定 WTP > NT$2,000/月（多數受訪者）| Upgrade A UVP → 更豐富服務；提前開發 Tier 3 Custom |

> Plan-Only Mode 特殊性：Phase 2 實體訪談尚未執行（📋 post-approval），本 W6 Gate 評估的是 Phase 4 規劃書級別的 desk-validation 深度，而非訪談數據。訪談結果將在 Phase 5-6 補充。W6 觸發條件評估以「desk 證據是否強化或弱化」為準。

---

## §2. Phase 4 六個 Deliverable 對 W4 主軸的 Strengthen / Weaken / Pivot Signal

### §2.1 T30 Lean Canvas v1 — 三 Canvas 整合

**W4 假設 vs Phase 4 深化結果**：

| 面向 | W4 基準線 | T30 深化結論 | 變化方向 |
|---|---|---|---|
| Hyp A 主軸確認 | 加權分 4.40，Persevere | Canvas v1 完整 9 block，UVP 四維差異化清晰（台語 / 主動發起 / 子女 dashboard / 緊急安全網）| STRENGTHEN |
| Hyp D 入口路徑 | D 先行 → A upsell 推薦路徑 | 方案一（先 D 後 A upsell）確認為 W4 推薦路徑；Cannibalization 風險分析：台語硬體版明顯優於 App 版 = 自然升級動機 ✅ | STRENGTHEN |
| Hyp B 次主軸 | Year 1 H2 BD + Year 2 ARR hedge | W6 切換 trigger 明確：機構訪談 LOI ≥2 = B 升主軸；W12 月流失 >15% = 重評機構通路 | 維持 Persevere，trigger 更清晰 |
| Existing Alternatives 競品空白 | 台灣 B2C 場景無強護城河競品 | ASUS Zenbo Junior II 2024 轉型 B2B 醫院 Maestro 節點，B2C 居家空白確認 ✅（ASUS 官方公告引用）| STRENGTHEN（競品空白更清晰）|
| 護城河 4 維 | 資料 / 切換成本 / 法規 / 通路 | 補充飛輪效應（用戶 → 台語語料 → 更好識別 → 更多用戶）+ 先行者時間窗 12-24 月（ElliQ 日本 2026，台灣 2027-2028）| STRENGTHEN |

**T30 對 W4 主軸結論**：全面 STRENGTHEN。三 Canvas 整合確認 Hyp A 主軸 + D 入口 + B 次軸邏輯清晰，互斥資源（通路 / 銷售 Motion / 客服 SLA）的選擇成本已量化，Phase 5-8 銜接對映完整。無 Weaken 或 Pivot Signal。

### §2.2 T31 Revenue Model — 4 主選項 + Year 1-3 ARR 三情境

**W4 假設 vs Phase 4 深化結果**：

| 面向 | W4 基準線 | T31 深化結論 | 變化方向 |
|---|---|---|---|
| 主力收入模型 | Subscription + Hardware 雙軌（Hyp A）| 10 Model 評比：Subscription 加權分 4.50/5（最高）；Hardware + Subscription 雙軌為唯一選擇 | STRENGTHEN |
| Freemium 角色 | 入口策略，非獨立商模 | Freemium 加權分 3.40（第 3 高），定位確認為「入口」非主力 ARR；Free Trial 30 天退費（硬體版）vs Freemium 永久免費（App 版）決策清晰 ✅ | STRENGTHEN（角色更明確）|
| ARR 三情境 | Y1 NT$50-120 萬；Y2 NT$862-2,156 萬 | 保守 / 中間 / 樂觀完整矩陣確認；Y3 PMPM 啟動後 ARR 中間情境 NT$1.92 億（一家保險 2 萬保戶）| 維持，Y3 數字有 75% 集中 PMPM 的風險需揭示 |
| Usage-based 排除 | 未明確排除 | 加權分 2.50，明確排除（長者重複問話 = 月費不可預測）；B2C 情感型服務必需固定月費 ✅ | STRENGTHEN（排除依據更清晰）|
| 廣告 / 資料變現排除 | 未系統評估 | 加權分 1.60，三重紅線（PDPA §6 + AI 基本法 + 倫理框架）完全排除，Vulnerable population 紅線確立 ✅ | NEW EVIDENCE（Hyp A 信任護城河強化）|

**T31 Y3 ARR 集中度警示**：Y3 中間情境 ARR NT$1.92 億中 75% 來自 PMPM（NT$1.44 億），PMPM 啟動需 TFDA II 類認證（24-36 月）+ 保險 BD 8-12 月 + 首批合約，三者串行 = 最長路徑。若 PMPM 啟動延遲，Y3 中間情境 ARR 縮減至 NT$4,800 萬。此為主要財務規劃風險，需在主管 review 規劃書中客觀呈現。

**T31 對 W4 主軸結論**：整體 STRENGTHEN。Revenue Model 收斂到 2 主選項（Hardware+Sub 主 + Freemium 入口），B2B2C RaaS Hedge 和 PMPM 延後均確認。Y3 PMPM 集中度是需揭示的規劃假設，非 Pivot Signal。

### §2.3 T32 Pricing Strategy — 三層 Tier Anchor + Decoy

**W4 假設 vs Phase 4 深化結果**：

| 面向 | W4 基準線 | T32 深化結論 | 變化方向 |
|---|---|---|---|
| Tier 定價 | Tier 1 NT$799 / Tier 2 NT$1,290 / Tier 3 Custom | Value-based 主模式（4.6/5）+ Tiered 結構（4.4/5）+ Penetration 入市（3.4/5）組合確認 | STRENGTHEN |
| WTP 錨點對齊 | 四框架中位 NT$1,000-1,500 | Tier 2 NT$1,290 精準落四框架交叉中位 ✅；Tier 1 NT$799 = Oxford PPP 下界（NT$763）以上 ✅ | STRENGTHEN |
| Anchor + Decoy 設計 | 未深化 | Tier 3 Premium 作 Anchor 拉抬 Tier 2 感知；Tier 1 設 Decoy（差額 NT$491 換多子女帳號 + 台語 + 個人記憶）升級動機清晰 | NEW（心理定價機制完整）|
| Tier 1 硬體虧損警示 | 未計算 | Caveat 1：Starter NT$799 + 硬體 NT$9,990 在 500 台量級硬體毛利 -24%（unit-econ.md §11）；需靠補貼名單或量產 5,000 台以上才轉正 | WEAKEN（局部，Tier 1 Year 1 財務健康度需管理）|
| Madhavan 9 Rules 適用 | 未評估 | 9 Rules 全部對應；Feature shock / Minivation / Hidden gem / Undead 四失敗類型均有緩解設計 | NEW（定價策略更嚴謹）|
| 訪談計畫設計 | 📋 概念 | 7 題 Mom Test 訪談題組（不問意願問行為）+ 量化通過標準（≥4/5 Persona A 確認 NT$1,290）+ W6 後招募計畫 | STRENGTHEN（可執行驗證計畫已備妥）|

**T32 對 W4 主軸結論**：整體 STRENGTHEN，有一局部 Weaken（Tier 1 硬體 -24% 毛利率）。建議：Year 1 主力推 Pro（Tier 2），Starter 作為 Freemium App 升級路徑而非硬體直接主力。

### §2.4 T33 Hardware Unit Economics — LTV:CAC 健康度

**核心財務指標**（unit-econ.md §7.2-§9）：

| 情境 | Blended LTV:CAC（Pro）| Payback | 健康度判定 |
|---|---|---|---|
| 保守（500 台，初期高 CAC NT$6,500）| 2.3:1 | 6.0 月（含硬體毛利）| 臨界（Year 1 可接受）|
| 中性（5,000 台，補貼後 CAC NT$4,000）| **5.95:1** | **4.0 月** | **健康（Series A 標準）** |
| 激進（50,000 台，電信 CAC NT$2,000）| 13.8:1 | 1.8 月 | 優異 |

**敏感性分析關鍵結論**（unit-econ.md §9）：

| 分析維度 | 最壞情境值 | 最壞 LTV:CAC | 結論 |
|---|---|---|---|
| BOM +20%（缺貨）| NT$11,472 | 5.47:1 | 仍健康（>3:1）|
| 月流失 8%（悲觀）| 12.5 個月訂閱 | 4.46:1 | 可接受（≥3:1）|
| CAC NT$8,000（高 DTC 廣告）| — | 2.98:1 | 臨界（<3:1 警戒線）|
| 最壞組合（BOM+20% + 流失 8% + CAC NT$6,500 + ARPU-15%）| 綜合 | 1.81:1 | 不健康（需 Pivot）|

**W4 基準 vs T33 深化比較**：
- W4 基準 LTV:CAC：NT$26,280 / NT$6,500 = 4.04:1（decision-w4.md §6.1，Tier 2 24 個月月留存 95%）
- T33 中性情境：5.95:1（5 年計算期 + 補貼後 CAC NT$4,000）
- **差異原因**：T33 採用更完整的硬體折舊 + 客服成本 + 保固攤提，並將 CAC 分補貼前後兩情境計算。兩者均健康，T33 細化了不同規模下的財務路徑。

**Series A 需求**（unit-econ.md §8.3）：NT$7,000-10,000 萬（USD 2.1M-3M）= Phase 7 Pitch Deck 直接使用。Break-even：中性情境 Month 30-36（Year 3）。

**T33 對 W4 主軸結論**：STRENGTHEN。中性情境 5.95:1 超越 Series A 標準 3:1，Payback 4.0 月健康。CAC NT$8,000（高燒廣告警戒線）是明確監控閾值。最壞組合 1.81:1 需在主管 review 規劃書中作為風險揭示。

### §2.5 T34 Certification Timeline Map — 認證時程對 Hypothesis 影響

**認證對各 Hypothesis 的關鍵路徑分析**（cert-timeline.md §6）：

| 認證 | Hyp A B2C | Hyp B B2B2C | Hyp C 保險 | Hyp D App |
|---|---|---|---|---|
| BSMI | Year 1 H2 blocker（ODM 上市必跑）| 機構採購前提 | medium | 免（App）|
| 長照 3.0 補貼名單 | critical（CAC 降 60-80%）| critical（機構採購 blocker）| medium | 不適用 |
| ISO 13482 | high（B2B 信任）| critical（機構 B2B）| medium | 不適用 |
| TFDA II 類 | medium（Year 3+）| high（Year 3+）| critical（Hyp C blocker）| 不適用 |
| PDPA 2025/12 | critical（全程）| critical | critical | critical |
| AI 基本法 2025/12 | critical 不確定性 | critical | critical | critical |

**90 天 MVP 認證狀態**：
- BSMI：免（WoZ 平板形態，iPad / Samsung Tab S9 FE 已有 BSMI）✅
- TFDA：免（App 形態，嚴守「陪伴輔助工具，不具醫療功能」）✅
- PDPA：設計規劃中（W4 前 DPIA 啟動）📋
- AI 基本法：持續追蹤（子法規未公布，最高不確定性）🟡

**關鍵發現 — AI 基本法不確定性**：cert-timeline.md §11 列出 5 個卡關項目，其中「AI 基本法子法規未公布」等級最高。老年陪伴 + 緊急偵測組合可能被列「高風險 AI 系統」，一旦子法規要求技術架構調整（如透明性義務 / 演算法影響評估），可能影響 Phase 5-6 開發計畫。此卡關不影響 90 天 MVP（App 形態），但影響 Year 1 ODM 上市時程。

**T34 對 W4 假設 5 更新**：假設 5（法規 12-18 月可落地）在 T34 後細分為三層：
- App 形態 90 天：免認證已確認（BSMI / TFDA / CNS 15630 全免）✅ → 假設升強
- Year 1 ODM 硬體：BSMI 6-12 月 + NCC 2-4 月 = 可在 Year 1 H2 完成（M9-12 樂觀）📋 → 假設維持 🟡
- Year 2-3 保險 PMPM：TFDA II 類 24-36 月（Hyp C 依賴）= 與 W4 一致，仍 📋 延後

**T34 對 W4 主軸結論**：整體 MAINTAIN（不強化也不弱化主軸 A/D/B）。Hyp C 的 TFDA II 類阻礙維持原判，延後 Year 3+ 確認。AI 基本法不確定性是新增的「系統性風險」需監控，但 90 天 MVP App 形態已設計規避此風險。

### §2.6 Phase 4 Strengthen / Weaken 證據彙整表

| Deliverable | 主要 Strengthen 證據 | 主要 Weaken 證據 | 整體評估 |
|---|---|---|---|
| T30 Lean Canvas v1 | 三 Canvas 整合清晰；護城河飛輪；競品空白確認 | 無 | STRENGTHEN |
| T31 Revenue Model | 10 Model 收斂確認；Y3 PMPM 潛力；廣告紅線排除 | Y3 ARR 75% 集中 PMPM，若 PMPM 延後 Y3 大幅縮減 | STRENGTHEN（含風險揭示）|
| T32 Pricing | WTP 對齊確認；Anchor+Decoy 完整設計；Madhavan 9 Rules | Tier 1 硬體 -24% 毛利率（500 台量級）| STRENGTHEN（有局部 Weaken）|
| T33 Unit Econ | LTV:CAC 5.95:1（中性）健康；Payback 4.0 月；Series A NT$7,000-10,000 萬量化 | 最壞組合 1.81:1 不健康；CAC NT$8,000 警戒線 | STRENGTHEN（含風險上界）|
| T34 Cert Timeline | 90 天 App 免認證確認；Hyp A/B 認證路徑清晰 | AI 基本法子法規不確定性；BSMI 6-12 月 Critical Path | MAINTAIN（新風險：AI 基本法）|

**Phase 4 整體對 W4 主軸的影響**：全面 STRENGTHEN（T30/T31/T32/T33 均正向），無 Weaken 到觸發 Pivot 門檻的信號。T34 新增 AI 基本法不確定性為系統性風險，但不影響 90 天 App 形態 MVP 落地。W4 主軸（Hyp A Persevere + D 入口 + B 次軸 + C 延後）在 W6 Gate 確認維持，且財務健康度更清晰（LTV:CAC 5.95:1，Payback 4.0 月）。

---

## §3. 4 Hypothesis × P/P/K/S 重新評估（W6 vs W4）

### §3.0 評分說明

評分 1-5 分，各 Hypothesis 橫向比較。加權同 W4（維度 1-2 各 20%、維度 3-4-5 各 10%、維度 6 15%、維度 7-8 各 5%）。W6 評分調整說明：基準線來自 W4，Phase 4 deliverable 提供的新證據影響加分或減分。

---

### §3.1 Hypothesis A：B2C DTC「主動陪伴 + 安全網雙層」

| 維度 | W4 分數 | W6 分數 | W4→W6 變化 | 理由（W6 新增） | 證據引用 |
|---|---|---|---|---|---|
| **1. 顧客痛點 desk 證據強度** | 5/5 | **5/5** | 不變 | 痛點框架未被質疑；lean-canvas.md §1 Block 1 深化 S0/S1 優先序 + 既有替代方案缺口完整列舉（ElliQ / GrandPad / Zenbo Jr II 各競品 URL 引用）| lean-canvas.md §1 Block 1 + problem-framing.md §1.2 |
| **2. WTP desk 證據強度** | 4/5 | **4/5** | 不變 | pricing.md §3.1 Desk-based WTP 基準線確認四框架中位 NT$1,000-1,500；Tier 2 NT$1,290 精準落中位 ✅；但台灣本土直接訪談仍為 📋 = 維持 🟡 | pricing.md §3.1 + wtp-payer.md §1.5 |
| **3. 通路可行性 desk 證據** | 4/5 | **4/5** | 不變 | revenue-model.md §2.2 DTC 通路收斂確認；App Store / Google Play 最低門檻通路 + Facebook 親子社群 CAC NT$300-800 ✅；電信業者捆綁 Year 2 路徑規劃 📋 | lean-canvas.md §1 Block 5 + revenue-model.md §2.2 |
| **4. 技術可行性** | 4/5 | **4/5** | 不變 | WoZ 平板形態 BOM NT$18,000 確認；Year 1 ODM BOM NT$12,400（小量 500 台）；unit-econ.md §1 完整 BOM 分解；Jetson Orin Nano 供應無障礙（台灣合法採購）✅ | unit-econ.md §1 + build-vs-buy.md |
| **5. Safety 紅線可控性** | 4/5 | **4/5** | 不變 | revenue-model.md §1 Model 10 廣告 / 資料變現三重紅線排除；lean-canvas.md §1 Block 4 Safety 設計不變；Tier 1/2/3 均含隱私 PDPA 設計 | revenue-model.md §1 Model 10 + safety-redlines.md |
| **6. 90 天 MVP 落地可能性** | 5/5 | **5/5** | 不變 | 90 天 App 形態：BSMI 免 / TFDA 免 / NCC 免（cert-timeline.md §2.1）✅；unit-econ.md §1.2 BOM NT$18,000 可達 20-50 台 ✅；Phase 5 Sprint 計畫已備妥 | cert-timeline.md §2 + unit-econ.md §1 |
| **7. Year 1-3 ARR 上限** | 4/5 | **4/5** | 不變 | revenue-model.md §6.1 三情境確認：Y1 保守 NT$50 萬 / 中間 NT$120 萬；Y2 保守 NT$288 萬 / 中間 NT$720 萬；Y3 保守 NT$864 萬（PMPM 不算入 Hyp A 直接）| revenue-model.md §6.1 |
| **8. 對主管說服力** | 5/5 | **5/5** | 不變 | Phase 4 主管 review 規劃書故事：硬體 NT$15K + 月費 NT$1,290 = 家庭照顧費 5.9%；LTV:CAC 5.95:1；Payback 4.0 月；Break-even Y3；Series A NT$7,000-10,000 萬 = 完整財務故事 ✅ | pricing.md Rule 6 + unit-econ.md §8 |

**加權總分（W6）**：同 W4 = **4.40/5**（各維度分數不變）

**W6 決策**：☑ **Persevere → 主軸（確認，無調整）**

**W4→W6 差異**：評分不變（4.40），但財務健康度更具體（LTV:CAC 5.95:1、Payback 4.0 月、Series A 金額量化）。定價設計更嚴謹（Anchor+Decoy、Madhavan 9 Rules）。Tier 1 硬體 -24% 毛利率是已知、可管理的 Year 1 財務特性（需配合長照補貼申請 / 量產路徑處理）。

---

### §3.2 Hypothesis B：B2B2C 長照機構通路「機構付硬體 + 家庭付軟體」

| 維度 | W4 分數 | W6 分數 | W4→W6 變化 | 理由（W6 新增）| 證據引用 |
|---|---|---|---|---|---|
| **1. 顧客痛點 desk 證據強度** | 4/5 | **4/5** | 不變 | 機構雙層痛點（照服員人力短缺 + 競爭差異化）維持；lean-canvas.md §3 Block 1 深化：Pepper 日本停產（2025 Aldebaran 破產 ✅）= 機構場景空出 = 機會而非警示 | lean-canvas.md §3 Block 1 + revenue-model.md §1 Model 6 |
| **2. WTP desk 證據強度** | 3/5 | **3/5** | 不變 | 機構端 NT$3,000/月/台 邏輯確認（長照補貼 NT$1,667 + 機構自付 NT$1,333）；unit-econ.md §2.4 機構 LTV:CAC 54:1（高，因合約期長）；但台灣機構實際採購意願仍 🟡 | unit-econ.md §2.4 + pricing.md §8.1 |
| **3. 通路可行性 desk 證據** | 3/5 | **3/5** | 不變 | 長照 3.0 補貼名單申請 = Hyp B critical blocker（cert-timeline.md §6.2）；補貼名單申請流程不透明（cert-timeline.md §11）= 已知卡關項目 🟡 | cert-timeline.md §6.2 + §11 |
| **4. 技術可行性** | 4/5 | **4/5** | 不變 | 機構後台 dashboard 設計規格確認（Year 1 H2 交付，90 天 MVP 不含）📋；AI Brain 技術路徑同 Hyp A | lean-canvas.md §3 Block 4 |
| **5. Safety 紅線可控性** | 4/5 | **4/5** | 不變 | 照服員抗拒 ICT 已有應對設計（多語言培訓包 越南 / 印尼文）；機構 NPS 管理機制 📋 | lean-canvas.md §3 Block 5 |
| **6. 90 天 MVP 落地可能性** | 2/5 | **2/5** | 不變 | 機構採購週期 6-12 月硬性障礙確認；cert-timeline.md §3.1 Year 1 里程碑：W3 啟動機構 BD 接觸，W12 目標 ≥1 家 LOI（非合約）；90 天 MVP 不計入機構收入 | cert-timeline.md §3.1 |
| **7. Year 1-3 ARR 上限** | 4/5 | **4/5** | 不變 | revenue-model.md §2.4 Y2 機構 60-100 台 = ARR NT$216-360 萬；Y3 機構 200 台 = NT$648 萬；連鎖機構框架 + 補貼加速潛力 | revenue-model.md §2.4 |
| **8. 對主管說服力** | 4/5 | **4/5** | 不變 | B2B2C 通路多元化說服力維持；機構後台 dashboard 和 Working Capital 管理（CCC 75 天警示）需在主管 review 規劃書中客觀呈現 | unit-econ.md §6.3 |

**加權總分（W6）**：同 W4 = **3.35/5**

**W6 決策**：☑ **Persevere → 次主軸（風險 Hedge，確認）**

**W4→W6 差異**：評分不變（3.35）。新增信息：補貼名單不透明是確認的卡關風險；機構 LTV:CAC 54:1 超高（unit-econ.md §2.4）若機構採購達成具備優異財務回報。B2B 場景 Working Capital CCC 75 天（NT$123 萬，500 台）是財務管理新洞察。

---

### §3.3 Hypothesis C：保險 PMPM（Year 3+）

| 維度 | W4 分數 | W6 分數 | W4→W6 變化 | 理由（W6 新增）| 證據引用 |
|---|---|---|---|---|---|
| **1. 顧客痛點 desk 證據強度** | 3/5 | **3/5** | 不變 | 保險業者痛點結構性存在；Papa 模式外推仍 🟡 | revenue-model.md §1 Model 7 |
| **2. WTP desk 證據強度** | 2/5 | **2/5** | 不變 | PMPM NT$600-1,000 vs Papa $10-20（PPP NT$305-610）差 2-3× 仍為假設；台灣保險業接受度低歷史記錄 🟡 | pricing.md §8.2 + revenue-model.md §1 Model 7 |
| **3. 通路可行性 desk 證據** | 1/5 | **1/5** | 不變 | TFDA II 類必要前提確認（cert-timeline.md §5.1 = Year 3 H1 正式申請）；保險 BD 8-12 月串行阻礙不變 | cert-timeline.md §5.1 + §6.3 |
| **4. 技術可行性** | 3/5 | **3/5** | 不變 | 技術路徑同 Hyp A；額外保險後台需 Year 3+ 開發 | — |
| **5. Safety 紅線可控性** | 3/5 | **3/5** | 不變 | TFDA II 類認證前提 = 更嚴格 Safety 門檻；跌倒偵測準確率宣稱觸發 II 類（cert-timeline.md §1.3）| cert-timeline.md §1.3 |
| **6. 90 天 MVP 落地可能性** | 1/5 | **1/5** | 不變 | 完全不在 90 天範圍；TFDA II 類 24-36 月阻礙確認 | cert-timeline.md §5 |
| **7. Year 1-3 ARR 上限** | 5/5 | **5/5** | 不變 | 一家保險業者 2 萬保戶 = ARR NT$1.92 億（Y3 中間情境）；revenue-model.md §6.1 確認 Y3 PMPM 佔 75% | revenue-model.md §6.1 |
| **8. 對主管說服力** | 3/5 | **3/5** | 不變 | 年 3+ 願景故事維持；T31 §6.2「年 3 主管故事」第 3 點確認 | revenue-model.md §6.2 |

**加權總分（W6）**：同 W4 = **2.30/5**

**W6 決策**：☑ **延後 Year 3+（確認，無調整）**

**W4→W6 差異**：評分不變（2.30）。TFDA II 類阻礙在 cert-timeline.md 獲得更完整的時程量化（M25-M30 正式申請 → 12-24 月審查 = 最早 Year 4-5 才可能取得）。此強化了「延後 Year 3+」的依據。

---

### §3.4 Hypothesis D：Freemium App + 後期硬體 upsell

| 維度 | W4 分數 | W6 分數 | W4→W6 變化 | 理由（W6 新增）| 證據引用 |
|---|---|---|---|---|---|
| **1. 顧客痛點 desk 證據強度** | 4/5 | **4/5** | 不變 | 痛點與 Hyp A 相同；lean-canvas.md §2 Block 1：AI companion apps 2025 USD $120M（elder care 29.4%）✅；台灣本土陪伴 App 空缺確認 | lean-canvas.md §2 Block 1 |
| **2. WTP desk 證據強度** | 3/5 | **3/5** | 不變 | NT$299/月 App 訂閱：Lumosity $11.99 PPP 調整後合理 ✅；3% 轉換率為行業標準 🟡；revenue-model.md §5.3 Freemium 轉換率假設完整建模 | revenue-model.md §5.3 |
| **3. 通路可行性 desk 證據** | 5/5 | **5/5** | 不變 | App Store / Google Play 最低門檻確認；revenue-model.md §1 Model 3 加權分 3.40（第 3）；CAC NT$300-800 vs 硬體 NT$5K-8K = 10× 低 ✅ | revenue-model.md §1 Model 3 |
| **4. 技術可行性** | 5/5 | **5/5** | 不變 | 純 App 開發 = 最低技術風險；BSMI / TFDA 免認證確認（cert-timeline.md §6.4）✅ | cert-timeline.md §6.4 |
| **5. Safety 紅線可控性** | 5/5 | **5/5** | 不變 | App 形態完全規避 BSMI + TFDA；App Store 健康 App 審核 = 輕度風險（cert-timeline.md §8 末行）🟡 | cert-timeline.md §8 |
| **6. 90 天 MVP 落地可能性** | 5/5 | **5/5** | 不變 | App Store / Google Play 5-7 天審核；W5 即時開；cert-timeline.md §2 90 天 MVP 認證全免確認 ✅ | cert-timeline.md §2 |
| **7. Year 1-3 ARR 上限** | 2/5 | **2/5** | 不變 | revenue-model.md §2.3 Y1 保守 NT$18 萬；Y2 保守 NT$358 萬；Y3 保守 NT$720 萬。ARR 規模上限偏低，但作為入口策略的角色不以 ARR 衡量 | revenue-model.md §2.3 |
| **8. 對主管說服力** | 4/5 | **4/5** | 不變 | revenue-model.md §6.2 主管故事第 1 點確認（Year 1：App 先行驗證 PMF，重點在 Sean Ellis ≥40% 而非 ARR 規模）| revenue-model.md §6.2 |

**加權總分（W6）**：同 W4 = **4.20/5**

**W6 決策**：☑ **Persevere → 入口補充（確認，無調整）**

**W4→W6 差異**：評分不變（4.20）。lean-canvas.md §2 的 Cannibalization 風險評估新確認「台語硬體版明顯優於 App 版 = 自然升級動機」，降低 D 蠶食 A 的顧慮。Free Trial vs Freemium 決策（revenue-model.md §4）已完成，App 版 Freemium + 硬體版 30 天退費的組合設計清晰。

---

### §3.5 4 Hypothesis W6 評分總覽

| Hypothesis | 加權總分（W4）| 加權總分（W6）| W4→W6 變化 | W6 決策 |
|---|---|---|---|---|
| **A B2C DTC** | 4.40/5 | **4.40/5** | 不變（財務健康度更具體）| **Persevere 主軸（確認）** |
| **D Freemium App** | 4.20/5 | **4.20/5** | 不變（Cannibalization 風險降低）| **Persevere 入口補充（確認）** |
| **B B2B2C 機構** | 3.35/5 | **3.35/5** | 不變（補貼名單卡關量化）| **Persevere 次主軸（確認）** |
| **C 保險 PMPM** | 2.30/5 | **2.30/5** | 不變（TFDA 阻礙時程量化）| **延後 Year 3+（確認）** |

**整體觀察**：Phase 4 六個 deliverable 全面鞏固 W4 Gate 結論，無一 hypothesis 因 Phase 4 新證據而觸發分數調整。W6 Gate 的角色是「確認主軸 + 補充財務健康度細節 + 更新 Phase 5-8 規格」，而非「改變主軸方向」。

---

## §4. 4 Option Scale / Persevere / Pivot / Kill 評估框架（W6 版）

### Option A：Scale（放大資源）

**定義**：某 Hypothesis 訊號強到超出原始規劃，應增加資源加速推進。

**觸發條件（Plan-Only Mode W6）**：
- Desk 證據強度分數 ≥ 4.5/5（8 維度加權）
- WTP 4 個 framework 交叉中位數落在規劃定價 ±10% 範圍內（更嚴）
- 技術可行性 desk-validated + 無已知阻斷性風險（包含認證）
- 財務模型：LTV:CAC ≥ 5:1 + Payback ≤ 5 月

**W6 評估**：

| Hypothesis | Scale 門檻達成 | 說明 |
|---|---|---|
| A B2C DTC | ☐ **未觸發** | 評分 4.40（未達 4.5）；WTP 仍 🟡 未訪談直接驗證；App 形態先行，WoZ 硬體尚在規劃 |
| D Freemium App | ☐ **未觸發** | 評分 4.20（未達 4.5）；ARR 規模上限偏低（Y3 保守 NT$720 萬）|
| B / C | ☐ **未觸發** | 評分均低於 Scale 門檻；90 天落地可能性分別 2/5 和 1/5 |

**Action if Scale（預備）**：若 Phase 6 Pilot 顯示 Sean Ellis ≥40% + Day-7 retention ≥70% + NPS ≥60（子女），W12 Gate 重新評估 Hyp A 是否升 Scale → GTM 預算 +50%、ICP 拓展、加速 ODM 量產。

### Option B：Persevere（繼續、不變方向）

**定義**：方向正確，desk 證據支持，但尚有部分假設需後續驗證或強化。

**觸發條件**：
- 多數維度達標（≥6/8 維度 ≥4 分）
- 核心痛點 desk 證據強（≥3 source，S0-S1 嚴重度有充分研究支撐）
- 技術路徑可行（WoZ 形態 90 天可落地）
- WTP 中位數保守估算仍支撐正毛利（LTV:CAC ≥ 3:1）
- 財務健康度在可接受範圍（即使 worst case）

**W6 評估**：

| Hypothesis | Persevere 觸發 | 評估說明 |
|---|---|---|
| A B2C DTC | ☑ **觸發** | 6/8 維度 4 分以上；LTV:CAC 5.95:1（中性），最壞 1.81:1（可接受，需持續監控）；痛點三重 ✅；技術 WoZ 90 天確認 ✅ |
| D Freemium App | ☑ **觸發** | 6/8 維度 4 分以上；App 形態認證全免 ✅；CAC NT$300-800 低 ✅；ARR 規模不是主要目標（入口角色）|
| B B2B2C 機構 | ☑ **觸發** | 5/8 維度 ≥3 分；補貼誘因有邏輯；Year 2 ARR 潛力大；90 天落地可能性低（2/5）= Persevere 而非 Scale，BD 接觸並行推進 |
| C 保險 PMPM | ☐ **未觸發 Persevere**（延後 Year 3+） | 90 天落地 1/5；TFDA 阻礙明確；不投入主要資源，但保留長期願景 |

**Action**：Persevere 的 Hypothesis A / D / B 繼續按 Phase 5-8 計畫推進。Phase 2 訪談（WTP Mom Test + 機構 LOI）是 W8 Gate 的核心數據節點。

### Option C：Pivot（改 Hypothesis）

**定義**：方向有根本性問題，需更換一個或多個 Lean Canvas block。**Pivot 必須指明哪個 Hypothesis Block 改，不得寫「全改」。**

**觸發條件**：
- WTP 訪談（Phase 2）顯示穩定 WTP 主流 < NT$600/月（Pivot Revenue Streams + Customer Segments）
- 90 天 App 下載 < 500（遠低於 2,000 目標），且訪談無 salvage signal（Pivot Channel）
- Phase 5 Pilot 長者首 4 週日均互動 < 3 次（Pivot Solution + Channels 加強子女代理層）
- 機構訪談 Phase 2 完全零 LOI + 主動表達「不需要機器人陪伴」（Pivot Hypothesis B Channel）
- AI 基本法子法規要求架構大改（Pivot Solution）

**W6 評估**：

| Pivot 觸發條件 | W6 狀態 | 評估 |
|---|---|---|
| WTP < NT$600 訪談確認 | 📋 尚未訪談 | 未觸發（訪談 Phase 2 待執行）|
| App 下載 < 500（90 天）| 📋 尚未執行 | 未觸發（GTM 未啟動）|
| 長者互動 < 3 次/天（Phase 5）| 📋 Phase 5 待執行 | 未觸發 |
| 機構零 LOI + 主動拒絕 | 📋 BD 接觸 W3 才啟動 | 未觸發 |
| AI 基本法架構大改要求 | 🟡 子法規未公布 | 監控中（非觸發）|

**現階段評估**：☐ **未觸發 Pivot**

**Plan-Only Mode 特殊說明**：本 W6 Gate 在計畫未正式執行前，不存在真實 metric 觸發 Pivot。Pivot 路徑已在 decision-w4.md §5 完整設計，供 W8 / W12 Gate 使用。若 Phase 2 訪談（計畫通過後 W6-W9 執行）顯示觸發條件，W8 Gate 重新評估。

**若 Pivot 觸發，改動的具體 Hypothesis Block**：
- **假設 1 WTP 被破壞（< NT$600）**：改 Revenue Streams（Tier 2 降至 NT$999，Tier 1 降至 NT$599）+ Customer Segments（轉移 Pivot 到 Persona B 主力）；不改 Problem / Solution / Channel / Unfair Advantage
- **假設 2 長者抗拒 Pivot**：改 Solution（加強子女遠距代理層，「子女說，機器人轉達」降低長者 AI 互動門檻）+ Channels（強化子女 App 作為主要互動通路）；不改 Customer Segments / Problem / Revenue Streams
- **假設 4 機構不採購 Pivot**：改 Hypothesis B 的 Channel（從機構通路移出，改為「機構場域展示版」+ DTC 主軸）；不改 Hypothesis A 任何 Block
- **AI 基本法架構大改 Pivot**：改 Solution（AI Brain 路徑 C 改採台智雲 FFM / 開源 Llama-3 本地部署，降低跨境依賴）；不改 Problem / Customer Segments / Revenue Streams

### Option D：Kill（終止 Hypothesis）

**定義**：Desk 證據已足夠說明此 hypothesis 在台灣市場 90 天 MVP 框架內不可行，繼續投入資源機會成本過高。

**觸發條件**：
- W8+：Hyp A Day-7 retention < 20%（Phase 5），且訪談確認「根本痛點不存在」（非技術問題）
- W8：Hyp D Freemium → Paid 轉換率 < 0.5%（遠低於行業 3%），且訪談無 salvage signal
- W12：Hyp B 機構訪談 0 家 LOI + 主動拒絕「根本不需要機器人陪伴」（非採購週期問題）
- 任何 Hypothesis：LTV:CAC worst case < 1:1（永遠 unprofitable）

**W6 評估**：

| Hypothesis | Kill 觸發 | 評估 |
|---|---|---|
| A B2C DTC | ☐ 未觸發 | 最壞 LTV:CAC 1.81:1 > 1:1；痛點多重 ✅；技術可行 ✅ |
| D Freemium App | ☐ 未觸發 | LTV:CAC 6.6:1（CAC 低）；主要風險是轉換率 < 0.5%（待 W8 觀察）|
| B B2B2C | ☐ 未觸發 | 有市場邏輯；BD 尚未啟動；Wait and see |
| C 保險 PMPM | ☐ 未觸發（延後）| 延後非 Kill，ARR 上限最高 + 痛點正確 + Papa 國際驗證 |

**現階段評估**：☐ **無 Hypothesis 觸發 Kill**

**Kill 預備清單（供 W8 / W12 Gate 參考）**：

若未來 Kill 觸發，已驗證 hypothesis 清單：
- ✅ 已驗證：台灣 65+ 孤獨 / 認知退化痛點真實存在（problem-framing.md §1.1 多 source）
- ✅ 已驗證：WoZ 平板技術路徑 90 天可行（build-vs-buy.md §5.2）
- ✅ 已驗證：台灣 B2C DTC 場景無強護城河競品（problem-framing.md §4.4）
- ✅ 已驗證：LLM API 成本 94.5% 降幅（TokenCost AI Price Index）
- 🟡 未驗證：子女 WTP NT$1,000-1,500（訪談待執行）
- 🟡 未驗證：長者接受度 + 4 週不棄用（Phase 5 待執行）
- 🟡 未驗證：非影像式緊急偵測召回率 ≥80%（Phase 5 待執行）

---

## §5. 5 個關鍵假設（phase-0.5-deconstruction.md §5.4）Desk-Validated 程度 Update

### §5.1 假設 1：WTP NT$1,000-1,500/月

**W4 狀態**：🟡 四框架推算一致，方向未被破壞

**Phase 4 新增證據**：
- pricing.md §3.1 Desk-based WTP 基準線：四框架 WTP 中位完整重新確認，Tier 2 NT$1,290 = Oxford PPP 下界（NT$763）以上 + 家庭照顧費 5.9% + ElliQ 對標中段，三角佐證 ✅
- pricing.md §2.1 Madhavan Rule 1 + Rule 3：WTP 區間分層切三 Persona（B NT$600-900 / A NT$1,200-2,400 / C NT$2,000-4,000）完整對應三 Tier 定價
- pricing.md §3.2 Mom Test 7 題訪談題組：量化通過標準設計完成（≥4/5 Persona A 確認 NT$1,290 可接受）— 計畫完備但未執行 📋
- unit-econ.md §9.4 ARPU -15% 情境：LTV:CAC 仍維持 5.28:1 = WTP 即使系統低估 15%，財務模型仍健康

**W6 狀態更新**：🟡 → **強 🟡**（更多 desk 佐證，方向更穩固；但台灣本土訪談仍 📋）

**對主軸影響**：假設 1 在 Phase 4 後「更難被破壞」（ARPU -15% 仍健康 + 四框架更詳細）。Pivot 觸發門檻仍需 Phase 2 訪談數據。

### §5.2 假設 2：長者 70-82 主動互動 + 4 週不放棄

**W4 狀態**：🟡 ElliQ 正向驗證但族群不同

**Phase 4 新增證據**：
- lean-canvas.md §1 Block 8 HEART 框架：Engagement 指標（長者週活躍 ≥20 次；Day-7 ≥3 次/天）已量化為 Phase 6 Pilot KPI
- pricing.md §4.2 長者場景特殊考量：習慣化週期 4 週 > 典型 Free Trial 14 天，設計了「30 天退費保障」應對此特殊性 ✅
- lean-canvas.md §1 Block 8 Pirate Metrics：Retention Day-7 長者 ≥3 次/天 / W4 付費用戶留存率 ≥70% 目標具體化

**W6 狀態更新**：🟡（不變，核心仍需 Phase 5 Pilot 驗證）

**補充**：Phase 4 增加了量化目標設計，但未增加新的台灣本土長者接受度 desk evidence。此假設仍是「PMF 核心訊號，唯有 Phase 5 WoZ 才能真正驗證」。

### §5.3 假設 3：非影像式緊急偵測 ≥80% 召回率

**W4 狀態**：🟡 技術路徑可行，真實家庭準確率未知

**Phase 4 新增證據**：
- cert-timeline.md §1.3 TFDA I/II 類觸發條件：**跌倒偵測宣稱準確率 = 觸發 TFDA II 類**（cert-timeline.md §11 卡關項目第 4 條）；90 天 MVP 嚴守「輔助通知，不宣稱準確率」（safety-redlines.md §1.3 Plan-Only 紅線 P1）
- cert-timeline.md §12.1 Phase 5 Sprint 3 前：Fairness Audit（台語 / 客語 / 外省 / MCI 各 ≥10 句）+ Phase 5 假事件演習 ≥3 次作為 RWD 基礎
- unit-econ.md §10.4：台語 ASR 錯誤引發長者投訴浪潮 = 已知客服爆量風險，緩解方案「台語系統先以基礎問候保守啟用」

**W6 狀態更新**：🟡（不變）；新增：TFDA II 類觸發門檻更清晰 = **UVP 宣稱邊界更明確**

**補充**：Phase 4 強化了「不宣稱準確率」的 Plan-Only 紅線設計依據（cert-timeline.md 量化了 TFDA 觸發後果），使 UVP「安全網」的宣稱邊界更精確。假設 3 仍需 Phase 5 ≥3 次假事件演習驗證。

### §5.4 假設 4：機構願採購

**W4 狀態**：🟡 補貼誘因有邏輯，採購週期長

**Phase 4 新增證據**：
- cert-timeline.md §6.2 Hyp B 認證影響：長照 3.0 補貼名單 = Hyp B critical blocker（不進名單 = 機構採購誘因消失）
- cert-timeline.md §11 卡關項目：補貼名單申請流程不透明，審查條件未公布 🟡
- unit-econ.md §6.3 B2B CCC 75 天 + NT$123 萬 Working Capital：機構訂單財務負擔量化
- lean-canvas.md §3 Pepper 日本 Aldebaran 2025 破產：機構場景主要競品退場 ✅（空間釋放）

**W6 狀態更新**：🟡（不變，有新風險量化）；補貼名單不透明是已知卡關，在 cert-timeline.md §11 明確列出

**補充**：Pepper 退場是新正向信號（機構場景有空間），但補貼名單申請不透明是新確認的風險。整體假設強度不變，仍需 Phase 2 機構訪談（目標 3-5 家，W12 KPI ≥1 LOI）。

### §5.5 假設 5：法規 12-18 月可落地

**W4 狀態**：🟡 App 形態免認證確認，TFDA 時程待確認

**Phase 4 新增證據**：
- cert-timeline.md §2 90 天 MVP 認證全免確認：BSMI 免 / NCC 免 / TFDA 免 / CNS 15630 免 ✅（App 形態五項全免）
- cert-timeline.md 完整時程甘特圖：Year 1 H2 BSMI 6-12 月；Year 2 ISO 13482 12-18 月；Year 3+ TFDA II 類 24-36 月 — 全路徑量化
- cert-timeline.md §11 AI 基本法子法規不確定性：高風險 AI 分類可能要求架構調整 = **新增系統性不確定性** 🟡

**W6 狀態更新**：🟡 分層更清晰（App 90 天 ✅ → Year 1 ODM 🟡 → Year 2-3 Hyp C 📋 三層）；**AI 基本法不確定性是新增監控項**

| 法規層 | W4 狀態 | W6 狀態 | 變化 |
|---|---|---|---|
| App 形態 PDPA + BSMI 免 | ✅ 確認 | ✅ 確認（更詳細）| 強化 |
| Year 1 ODM BSMI 6-12 月 | 🟡 | 🟡（Critical Path M5-6 送件 M9-12 取得）| 細化 |
| TFDA II 類（Hyp C 前提）| 📋 延後 | 📋 Year 3 H1 正式申請 + 12-24 月 = Year 4-5 | 量化 |
| AI 基本法子法規 | 未特別評估 | **🟡 新增監控**（子法規未公布，高不確定）| 新增風險 |

### §5.6 假設驗證狀態總覽（W6 Update）

| 假設 | W4 狀態 | W6 狀態 | W4→W6 變化 | 後續驗證時機 |
|---|---|---|---|---|
| 假設 1：WTP NT$1,000-1,500/月 | 🟡 | **強 🟡**（更多 desk 佐證）| 強化，ARPU -15% 仍健康 | 📋 Phase 2 Mom Test × 8 人 |
| 假設 2：長者互動 4 週不棄 | 🟡 | 🟡（不變）| 量化目標具體化 | 📋 Phase 5 WoZ Pilot |
| 假設 3：非影像式緊急偵測 ≥80% | 🟡 | 🟡（UVP 宣稱邊界更清晰）| TFDA 觸發門檻量化 | 📋 Phase 5 ≥3 假事件演習 |
| 假設 4：機構願採購 | 🟡 | 🟡（補貼名單卡關量化）| Pepper 退場新正向 + 補貼不透明新風險 | 📋 Phase 2 機構訪談 ≥2 家 LOI |
| 假設 5：法規 12-18 月落地 | 🟡 | 🟡（分三層 + AI 基本法新風險）| 層次更細；AI 基本法是新監控項 | 📋 W3 前律師評估 + TFDA 接觸 |

---

## §6. W6 Gate 整合決策（Self-Drive 結論）

### §6.1 主軸 Hypothesis（W6 確認 / 調整）

**W6 確認主軸：Hypothesis A B2C DTC「主動陪伴 + 安全網雙層」**（Persevere，無調整）

**確認依據（5 條 reasoning）**：
1. Phase 4 六個 deliverable 全面 STRENGTHEN W4 主軸結論，無一 Weaken 觸及 Pivot 門檻。LTV:CAC 5.95:1 超越 Series A 標準 3:1，Payback 4.0 月，財務健康度在主管 review 規劃書層面已可呈現。
2. 四框架 WTP 中位 NT$1,000-1,500 在 Phase 4 經 pricing.md Madhavan 分析、三 Tier 設計、ARPU -15% 敏感性分析後，「方向更難被破壞」——即使訪談顯示 WTP 低 15%，LTV:CAC 仍維持 5.28:1，不觸發 Pivot。
3. 認證風險在 cert-timeline.md 全面量化後，90 天 App 形態五項全免確認，Year 1 ODM 硬體 BSMI 6-12 月 Critical Path 已列入計畫（M5-6 送件 M9-12 取得），無認證阻礙 Pivot Signal。
4. 競品格局在 Phase 4 後更清晰（Pepper Aldebaran 2025 破產退出機構場景；ASUS Zenbo Jr II 已轉型 B2B 醫院 Maestro 節點；ElliQ 日本 2026，台灣 2027-2028 才可能進入）= 先行者窗口 12-24 月在 W6 仍有效。
5. Plan-Only Mode 下，Phase 2 實體訪談是唯一可以破壞假設 1（WTP）或假設 4（機構意願）的信息節點，預計在 Phase 5 計畫通過後 W6-W9 執行。在訪談數據到來前，Persevere 主軸是合理且有 desk 支撐的唯一選擇。

### §6.2 次主軸 / 風險 Hedge（W6 更新）

**次主軸 1：Hypothesis D Freemium App（W6 確認，角色不變）**

90 天最快 GTM + Hyp A 軟體引流通路。lean-canvas.md §2 確認 Cannibalization 風險低（台語硬體版自然升級動機）。Free Trial vs Freemium 決策完成（App 版 Freemium + 硬體版 30 天退費）。W6 無調整。

**次主軸 2：Hypothesis B B2B2C 機構通路（W6 確認，觸發條件更清晰）**

Year 1 H2 BD 接觸期，W12 Gate KPI ≥1 LOI。lean-canvas.md §3 的切換 trigger 完整：
- LOI ≥2（W6 Gate 條件）→ B 升主軸，A 降次軸（但 W6 Gate 時 Phase 2 訪談尚未執行，此條件為 W8 評估節點）
- Pepper 退場是正向信號（機構場景有空間）
- 補貼名單不透明是已知卡關（cert-timeline.md §11）

### §6.3 延後 Year 3+（W6 確認）

**Hypothesis C 保險 PMPM**：延後 Year 3+ 確認。TFDA II 類阻礙時程量化（Year 3 H1 正式申請 → Year 4-5 最早取得），cert-timeline.md §5 更詳細說明了延後路徑。Phase 7 Pitch Deck 使用方式：一頁「Year 3+ 商業演進願景 + ARR NT$1.92 億想象空間」不變。

### §6.4 無 Kill（W6 確認）

4 個 Hypothesis 均不達 Kill 門檻（理由同 W4 §4.4）：
- C 雖延後，ARR 上限 NT$1.92 億 + 痛點正確 + Papa 國際驗證 → 延後非 Kill
- A/D/B 在 Persevere 或以上 → 不觸發 Kill
- W8 Kill 觸發預備條件維持 W4 §4.4 設計（Day-7 retention < 20% + 訪談確認痛點不存在）

### §6.5 vs W4 結論差異

| 面向 | W4 結論 | W6 結論 | 差異說明 |
|---|---|---|---|
| 主軸 Hypothesis | A Persevere 主軸 | A Persevere 主軸（確認）| 一致，財務健康度細化 |
| 次主軸 | D 入口 + B 次軸 + C 延後 | 同 W4（確認，各觸發條件更清晰）| 一致 |
| LTV:CAC 基準 | 4.04:1（W4 概估）| 5.95:1（T33 中性情境）/ 2.3:1（T33 保守）| T33 分兩情境，中性更健康 |
| Payback | 6.8 月（W4 含硬體毛利）| 4.0 月（T33 中性，補貼後 CAC）/ 6.0 月（T33 保守）| T33 細化，中性 Payback 更短 |
| Break-even | 未量化 | Year 3（中性 Month 30-36）| T33 新增，Series A 規劃基礎 |
| Series A 需求 | 未量化 | NT$7,000-10,000 萬（T33 §8.3）| T33 新增，Phase 7 Pitch 直接引用 |
| 認證風險 | App 形態免，Year 1 BSMI | 五層認證路徑全量化；AI 基本法新增監控 | T34 新增 AI 基本法不確定性 |
| 財務下限 | 未量化 | Worst case LTV:CAC 1.81:1（需 Pivot 或融資補強）| T33 §9.5 新增 |

**W4→W6 核心差異總結**：方向完全一致，Phase 4 deliverable 的主要貢獻是「財務健康度量化」（LTV:CAC / Payback / Break-even / Series A）+ 「認證路徑量化」+ 「定價心理機制完整」，而非改變主軸方向。這符合 Lean Startup「Build-Measure-Learn 閉環」中 Phase 4 Business Model 規劃書的角色定位。

---

## §7. 對 Phase 5-8 的明確輸入（W6 更新版）

### §7.1 Phase 5 Prototype Build（T36-T38）規格

#### Sprint 1-2（W5-W8）：WoZ 核心互動層

**Wizard-of-Oz 平板形態規格**（unit-econ.md §1.2 BOM NT$18,000 基準）：

| Feature | 規格 | 優先度 | 對映 Lean Canvas Block |
|---|---|---|---|
| F01 每日主動問候 | 06:30 / 18:00 固定時段 + 台語問候 ≥20 句；長者不需先開口 | Must-be | lean-canvas.md §1 Block 4 Feature 2 |
| F02 中文語音對話 | GPT-4o-mini API + Google Cloud STT/TTS；多輪 ≥5 輪不失憶；AI Brain 路徑 C | Must-be | lean-canvas.md §1 Block 4 Feature 2 |
| F21 長者主動控制 | 「不要再提醒我」→ AI 暫停 24 小時；子女不可即時覆蓋（N10 紅線）| Must-be | safety-redlines.md N10 |
| F13 子女遠端 onboarding | ≤10 分鐘 ≤5 步；父母端「叫名字就好」| Must-be | lean-canvas.md §1 Block 5 |
| F20 超大字 / 高對比 UI | ≥24pt 字體；≥44pt 觸控按鈕；WCAG AA 高對比 | Must-be | lean-canvas.md §1 Block 4 Feature 3 |
| Layer 2 rule-based 守門器 | 7 條 LLM 絕對紅線（N1-N7）強制執行（cert-timeline.md §12.1 Sprint 1 Week 2 前）| Must-be（PDPA 前提）| safety-redlines.md §4.1 |
| 三方同意機制 UX | 長者音訊 + 子女書面 + 見證；Sprint 2 跑通（cert-timeline.md §12.1）| Must-be（PDPA 前提）| tech-architecture.md §4.4 |

#### Sprint 3（W9-W10）：核心對話深化 + 緊急偵測

| Feature | 規格 | 優先度 |
|---|---|---|
| F10 子女緊急通知推播 | ≤5 分鐘；LINE + App 雙通路；Layer 2 rule-based 觸發 + 3 層確認；false positive ≤1/週目標 | Must-be |
| F11 服藥提醒 | 朋友語氣（「OO，你今天的血壓藥記得吃喔」）；通過 Adversarial Test 後開啟（pricing.md §4.1 Tier 1 規格）| Must-be |
| Fairness Audit | 台語 / 客語 / 外省 / MCI 各 ≥10 句，準確率差距 ≤15pp（cert-timeline.md §12.1）| Must-be |

#### Sprint 4（W11-W12）：閉迴路測試

**5-10 家庭規格**（Plan-Only 📋）：
- 北漂子女 35-50 歲 + 父母 70-82 歲異縣市獨居 / 兩老同住
- 子女月收 NT$60K-120K；無 24/7 外籍看護
- 子女台北 / 新竹；父母嘉義 / 南投 / 屏東（老化指數最高 3 縣市）
- Persona 分布：Persona A 5 戶 / Persona B 3 戶 / Persona C 2 戶

**1-2 機構規格**（Plan-Only 📋）：
- W3 啟動 BD 接觸（3-5 家電話 / email）
- W12 Gate KPI：≥1 家機構提供 LOI（不要求合約）

**Sprint 4 Adversarial Test**（cert-timeline.md §12.1）：≥70 案例 × 7 條紅線；BLOCKER = 任一紅線 < 95% 召回率

### §7.2 Phase 6 Pilot 設計（T39-T43）

#### 招募 5 面向（Plan-Only 📋）

| 招募面向 | 目標 | 招募通路 | 標準 |
|---|---|---|---|
| 北漂子女（主）| 10-15 戶 | Facebook 親子照顧社群 + 失智症協會免費試用 | 子女 35-45 歲 / 父母 70-82 歲 / 異縣市 / 月收 NT$60K+ |
| 父母（使用者）| 跟隨子女招募 | — | 70-82 歲；無 24/7 外籍看護；認知尚可語音對話 |
| 機構（Hyp B BD）| 3-5 家 | Ankecare 展會 / 長照產業協會 | 中型日照 + 區域日照 + 偏鄉社區關懷據點 |
| 保險業（Hyp C 市場認識）| 1-2 家 Innovation 部門 | 國泰 / 富邦 / 南山 Digital 部門 | 非商業洽談，市場探索 + 合規路徑確認 |
| 監管（AI 基本法）| 1 次法規顧問諮詢 | 理慈 / 萬國律師事務所 | AI 基本法 readiness 評估（cert-timeline.md §9.1）|

#### MoU Template 重點 Clauses（Plan-Only 📋）

- PDPA 三方同意（長者音訊 + 子女書面 + 見證）
- 中斷賠償條款（服務停止 90 天前預告，消保法 §19）
- 資料處理授權（非影像 / 非原始文字 / 匿名摘要授權研究用途）
- 緊急事件責任邊界（「輔助通知工具」不是「醫療診斷設備」）
- 退出條款（長者 / 子女可隨時終止，30 天資料保留後硬刪）

#### PMF 量測機制

| 量測維度 | 指標 | 目標值 | 量測時機 |
|---|---|---|---|
| **Sean Ellis 測試** | 「非常失望如果產品消失」% | ≥40%（PMF 門檻）| W4 Pilot 結束後 |
| **Day-7 Retention** | 長者端日均互動次數 | ≥3 次/天 | Pilot Week 1 末 |
| **W4 Retention** | 付費用戶留存率 | ≥70% | Pilot Week 4 末 |
| **NPS（子女端）** | 子女 NPS | ≥40 | Pilot 第 2 週 + 第 4 週 |
| **NPS（長者端）** | 長者 NPS 獨立量測 | ≥35 | Pilot 第 4 週 |
| **HEART Engagement** | 長者週活躍互動次數 | ≥20 次/週 | 持續追蹤 |
| **緊急偵測假演習** | 召回率 / false positive | ≥80% 召回 / ≤1/週 FP | ≥3 次演習（RWD 基礎）|

#### 法規 Soft Check 重點

- PDPA DPIA 首版完成（W4 前）📋
- TFDA 業者輔導窗口：確認跌倒偵測宣稱準確率觸發 II 類的具體文字門檻（cert-timeline.md §11 第 4 條）📋
- AI 基本法 readiness 評估完成（律師，W4 前）📋
- 119 緊急服務直接介接合法性確認（Year 2 規劃；90 天 MVP 以 LINE + 子女通知代替）📋

### §7.3 Phase 7 Pitch Prep（T44-T48）

#### Why Us + 護城河 4 維重點

1. **台語語料庫飛輪**（唯一性）：全球唯一中文 / 台語 AI 陪伴機器人；後進競爭者需 2-3 年積累等量語料；ElliQ 無台語 ✅
2. **切換成本 4 層**：個人記憶不可遷移 / 子女訂閱習慣 / 父母行為習慣 / 長照補貼資格綁定
3. **法規 / 補貼卡位**：長照 3.0 補貼名單一旦進入 = 政府背書 + 後進 12-18 月追趕 📋
4. **先行者 12-24 月時間窗**：ElliQ 日本 2026、台灣 2027-2028；中國品牌台灣資安疑慮 = 天然屏障

#### 5 年財務模型 + Use of Funds（T45 直接引用）

**來源**：unit-econ.md §8（直接引用）

| 項目 | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |
|---|---|---|---|---|---|
| 硬體用戶（累計）| 50-100 台 | 300-500 台 | 1,000-2,000 台 | 3,000-5,000 台 | 8,000-15,000 台 |
| SaaS ARR（NT$萬）| 78-156 | 468-780 | 1,548-3,096 | 4,644-7,740 | 12,384-23,220 |
| 毛利率 | 20-25% | 47% | 54% | 61% | 64% |
| EBITDA（NT$萬）| -450 to -760 | -408 to -753 | -2 to +556 | 正轉 | 大幅正 |
| Break-even（中性）| — | — | **Month 30-36** | — | — |

**Series A Use of Funds**（unit-econ.md §8.3）：

| 用途 | NT$萬 | 說明 |
|---|---|---|
| Year 1 燒錢 | 760 | 團隊薪資 + 認證 + 行銷 + 平板試產 |
| Year 2 進攻資金 | 1,200 | ODM 首批 + 庫存 + B2B BD + ISO 13482 |
| Working Capital（B2B 帳期 75 天）| 300 | CCC 75 天 × 機構訂單 |
| 台語 ASR fine-tune | 200 | GPU 算力 + 語料標注 |
| **總計（含 6 個月 buffer）** | **NT$2,460-3,000 萬** | ~USD 750K-930K |
| **Series A 目標（含 3× 安全倍數）** | **NT$7,000-10,000 萬** | USD 2.1M-3M |

#### 主管 Review 規劃書重點 Slides（Phase 7 Pitch Deck 架構）

1. **Opening（3 句話）**：台灣 2025/12 超高齡社會；35.7% 長者孤獨高風險；子女照顧焦慮隱形痛點
2. **Why Now（3 軌）**：長照 3.0 2026/07 補貼 + LLM 成本 94.5% 降幅 + 先行者 12-24 月時間窗
3. **Market**：SAM 中位 NT$66 億（三向交叉）；北漂子女切片 NT$23-33 億
4. **UVP**：台灣唯一台語四合一（主動 AI 對話 + 緊急偵測 + 子女 dashboard + 長照補貼路徑）
5. **Business Model**：Tier 1/2/3 + 硬體一次性 + B2B2C Year 2 + 保險 PMPM Year 3+；LTV:CAC 5.95:1；Payback 4.0 月
6. **Traction（規劃書版）**：10-20 戶 Pilot 計畫 + 3-5 家機構 LOI 計畫 + Freemium App 目標 2,000-5,000 下載
7. **Financial Model**：Break-even Y3；Series A NT$7,000-10,000 萬；5 年 ARR 路徑
8. **Risk & Mitigation**：AI 基本法不確定性 + BSMI Critical Path + 台語 ASR 精準度邊界

#### 5-min Pitch Script Tone

- 開場：**情感**（「你最後一次確認父母今天過得怎麼樣，是什麼時候？」）
- 市場：**量化**（「台灣 149.4 萬高風險孤獨長者，SAM NT$66 億」）
- 技術：**謙遜 + 實際**（「我們不是要取代家人，是讓父母不孤單、讓子女不焦慮」）
- 財務：**清晰有據**（「LTV:CAC 5.95:1，Series A NT$7,000-10,000 萬，Year 3 Break-even」）
- 結尾：**召喚行動**（「90 天 MVP 計畫完備，主管 review 規劃書請看此連結」）

#### Top 20 主管 Q&A 預期問題（W6 更新 5 題，延伸 W4 §6.4 Top 5）

| Q | A 要點 |
|---|---|
| Q6：「你們財務模型最大風險是什麼？」| 最壞組合 LTV:CAC 1.81:1（BOM+20%+流失8%+CAC $8K+ARPU-15%）= 不健康；緩解：長照補貼降 CAC + 台語 ASR 提升留存 + 量產降 BOM；中性情境 5.95:1 是合理目標（unit-econ.md §9.5）|
| Q7：「AI 基本法對你們的影響？」| 子法規待公布；保守設計（Privacy by Design + 透明性宣告 + 演算法影響評估）作為預防性合規；W4 前律師 readiness 評估（cert-timeline.md §8 第 2 條）|
| Q8：「台語 ASR 現在能做到什麼程度？」| 90 天 MVP 基礎問候 ≥20 句 + 常用詞；完整台語對話 Year 2（需 1,000 用戶後語料積累）；保守策略先以問候保守啟用（unit-econ.md §10.4）|
| Q9：「跌倒偵測準確率是多少？」| Plan-Only 紅線 P1：「召回率待 Phase 5 Pilot ≥3 次假事件演習驗證；規劃目標 ≥80%；目前定位輔助通知不宣稱準確率（TFDA II 類觸發門檻考量，cert-timeline.md §11）」|
| Q10：「長照補貼名單幾時能進入？」| 2026/07 補貼開放後正式申請；申請流程 W3 前接觸衛福部長照司確認；預計 Year 1 H2（M9-12）取得（cert-timeline.md §3.1）；保守情境下 Year 1 不依賴補貼 = 主軸 Hyp A 仍可行 |

### §7.4 Phase 8 主管 Review 規劃書（T49-T51）

#### GitHub Page 視覺驗證閉環

- T50 前端工程師執行完成後，主 agent 派獨立 sub-agent Read GitHub Page 截圖確認（不靠 pytest 綠 = done）
- Chrome MCP screenshot 是 deploy 後第一首選視覺驗證方式
- 驗證重點：三 Tier 定價頁（Anchor+Decoy 視覺是否正確）+ 緊急通知 ≤5 分鐘 SLA 呈現 + 長照補貼路徑說明

#### Public Repo .gitignore 篩選

- 剝離：所有 ✅/🟡/📋 標籤（Plan-Only Mode 內部術語）
- 剝離：WoZ / Wizard-of-Oz / post-approval execution 等內部術語
- 剝離：「Mode E」字眼（改稱 PM Flow v0.1）
- 保留：技術架構、功能清單、商業模式（已整理為對外語言）

#### 對外網頁禁 Emoji

禁止：全文禁 emoji（phase-0-answers.md 對外網頁紀律）

#### 主管 Review 規劃書（懷特親自跑，T51）

懷特唯一需親自介入的事項，W12 執行（2026-05-27 後約 12 週）。review 的 5 個重點 slides：UVP + 台語差異化 / Business Model 三 Tier / LTV:CAC 5.95:1 / Series A NT$7,000-10,000 萬 Use of Funds / 認證路徑規劃圖（不是「已認證」）。

---

## §8. Series A 募資準備（Use of Funds 預備）

> 來源：unit-econ.md §8 直接引用，Phase 7 T45 5 年財務模型輸入

### §8.1 Year 1-3 燒錢曲線

| 年份 | 燒錢保守（NT$萬）| 燒錢中性（NT$萬）| 主要用途 |
|---|---|---|---|
| Year 1 | -760 | -760 | 薪資 NT$300-500 + 認證 NT$60-130 + 行銷 NT$60-120 + WoZ 試產 |
| Year 2 | -408 to -753 | -600（中性估）| ODM 首批 + 機構 BD + ISO 13482 + Working Capital |
| Year 3 | -860 to -957（累計）/ 可能轉正 | Break-even Month 30-36 | TFDA II 類前置 + 規模化 |

### §8.2 達 Break-even 月份

| 情境 | Break-even | 前提 |
|---|---|---|
| 保守 | Month 42-48（Year 4）| 長照補貼核准慢 + B2B 採購延誤 |
| **中性**（主推）| **Month 30-36（Year 3）** | 補貼 Year 1 H2 進入；Freemium 3% 轉換；ODM 500 台 Year 2 |
| 激進 | Month 24-30（Year 2-3）| 電信捆綁 Year 2 + CAC NT$2,000 |

### §8.3 募資輪次時點

| 輪次 | 時機 | 金額 | 用途 |
|---|---|---|---|
| **Pre-Seed**（本規劃書對應）| W12 主管 review 規劃書後 | NT$1,000-2,000 萬 | 90 天 MVP → Phase 5-6 WoZ + 首批訪談 |
| **Seed** | Year 1 H1 PMF 訊號後（Sean Ellis ≥40% + Phase 6 Pilot 完成）| NT$3,000-5,000 萬 | ODM 首批 + BSMI + 長照補貼申請 + 首批機構 LOI |
| **Series A** | Year 2 H1（ODM 硬體上市 + 機構 2-3 家合約 + ARR NT$300 萬+）| **NT$7,000-10,000 萬** | Year 2-3 規模化 + 台語 ASR fine-tune + 電信捆綁洽談 |

### §8.4 投資人 ROI 模型（供 Phase 7 T45 參考）

| 假設 | 數值 | 信心等級 |
|---|---|---|
| Series A 投入（Post-Money Valuation 5× Revenue）| NT$7,000 萬 at NT$2 億 Post-Money | 🟡 |
| Year 5 ARR（中性）| NT$12,384-23,220 萬 | 🟡 |
| Year 5 ARR Multiple（SaaS 10-15×）| Valuation NT$12.4-34.8 億 | 🟡 |
| Series A ROI（5 年，保守）| NT$2 億 → NT$12.4 億 = **6.2×** | 🟡 |
| Series A ROI（5 年，中性）| NT$2 億 → NT$20 億 = **10×** | 🟡 |

> 以上為規劃書等級估算，需 Phase 7 T45 財務模型專業精化 📋

---

## §9. Self-Drive 後續 Approve Gate 清單（W6 Update）

### §9.1 懷特唯一需親自介入的事項

| 事項 | 時機 | 形式 |
|---|---|---|
| **T51 主管 review 規劃書** | W12（2026-05-27 後約 12 週）| 懷特親自向 ASUS 主管 1 位 review 完整規劃書 + 取得 go/no-go |

### §9.2 Main Agent Self-Drive Gate 清單（W6 Update）

| Gate | 時機 | 決策範圍 | 狀態 |
|---|---|---|---|
| **T29 W4 Gate #1** | 已完成 | 4 hypothesis P/P/K 評估 + 主軸推薦 + Phase 4-8 輸入 | ✅ 完成 |
| **T35 W6 Mid-point Gate（本文件）** | 2026-05-27 | Phase 4 deliverable review + 4 hypothesis W6 重評 + Phase 5-8 規格更新 | ✅ 完成 |
| **T48 W12 Gate #3** | 約 W12 | 最終規劃書完成度 + Phase 7 Pitch Deck 品質 + T51 主管 review 就緒度 | 待執行 |
| **Phase 5-8 所有技術 / 規劃任務** | 持續 | 非重大決策 / 非超出 OpenSpec 範圍 | Self-drive |

**Phase 5-8 Self-Drive 自決原則**：
1. 重大決策影響範圍超出原 OpenSpec = 回報懷特
2. 兩輪修正後仍 fail = 升級懷特
3. 每階段 push CC + Discord 通知讓懷特知道進度（不等懷特問）

---

## §10. Coverage Matrix

### §10.1 4 Hypothesis 評估完整度（W4 vs W6 對比）

| Hypothesis | W4 評估 | W6 評估 | 更新 |
|---|---|---|---|
| A B2C DTC | ✅ 8 維 × 評分 × 理由 × 來源 | ✅ W6 重評（評分不變，新增 T30-T34 證據對比）| W6 confirm |
| B B2B2C 機構 | ✅ 同上 | ✅ W6 重評（評分不變，補貼名單卡關量化）| W6 confirm |
| C 保險 PMPM | ✅ 同上 | ✅ W6 重評（評分不變，TFDA 時程量化）| W6 confirm |
| D Freemium App | ✅ 同上 | ✅ W6 重評（評分不變，Cannibalization 風險降低）| W6 confirm |

### §10.2 5 個假設更新完整度

| 假設 | W4 狀態 | W6 更新 | 後續補項 |
|---|---|---|---|
| 1 WTP NT$1,000-1,500 | 🟡 | 強 🟡（ARPU -15% 仍健康 + Madhavan 分析）| 📋 Phase 2 Mom Test |
| 2 長者互動 4 週不棄 | 🟡 | 🟡（量化目標具體化）| 📋 Phase 5 WoZ |
| 3 非影像式緊急偵測 ≥80% | 🟡 | 🟡（TFDA 觸發門檻明確）| 📋 Phase 5 假事件演習 |
| 4 機構願採購 | 🟡 | 🟡（Pepper 退場正向 + 補貼不透明新風險）| 📋 Phase 2 機構訪談 |
| 5 法規 12-18 月落地 | 🟡 | 🟡（三層分細 + AI 基本法新監控）| 📋 W3 律師評估 + TFDA 接觸 |

### §10.3 Phase 5-8 銜接清晰度

| Phase | W4 銜接狀態 | W6 更新 | 完整度 |
|---|---|---|---|
| Phase 5 Prototype Build | ✅ Must-have 8 feature + Sprint 計畫 | W6 補充：認證前提（Layer 2 紅線 Sprint 1）+ Fairness Audit + Adversarial Test | ✅ |
| Phase 6 Pilot 設計 | ✅ 招募標準 + KPI | W6 補充：5 面向招募 + MoU 重點 Clauses + PMF 量測完整表 + 法規 Soft Check | ✅ |
| Phase 7 Pitch Prep | ✅ 主軸故事 8 步 + Q&A Top 5 | W6 補充：護城河 4 維 + Series A Use of Funds + 5 年財務模型 + Top Q&A 延伸 10 題 | ✅ |
| Phase 8 主管 Review | ✅ 對外架構 7 章 | W6 補充：GitHub Page 視覺驗證閉環 + .gitignore 篩選 + 對外禁 emoji | ✅ |

### §10.4 反 Anti-pattern 自我檢核

| Anti-pattern | 是否規避 | 說明 |
|---|---|---|
| 4 options 只列結論不列 reasoning | ✅ | §4 每個 option 均有觸發條件 + 各 Hypothesis 評估說明 |
| Pivot 不明指哪個 hypothesis block 改 | ✅ | §4 Option C 明確列出 4 個 Pivot 觸發條件各對應哪個 Block 改（Revenue Streams / Solution / Channel）|
| Kill 不寫已驗證 hypothesis | ✅ | §4 Option D Kill 預備清單列出 4 項已驗證 + 3 項未驗證 |
| W4 太早判定 Kill | ✅（W6 同樣適用）| 無 Kill 決策，C 延後而非 Kill；Plan-Only 特殊性已說明 |
| Main agent 自決 Pivot / Kill 不 ping 懷特 | ✅ | §4 所有 option 均 ☐ 未觸發；若觸發需升級懷特（§9.2 自決原則 1）|
| 缺少 decision log 連續性 | ✅ | §11 對比歷次 Decision 完整列出 |
| 禁稱「Mode E」 | ✅ | 全文使用「PM Flow v0.1」|
| 禁用「demo」字眼 | ✅ | 全文使用「主管 review 規劃書」|

---

## §11. 對比歷次 Decision（Trend 追蹤）

| Gate | 主軸決策 | 財務健康度 | 主要新增知識 |
|---|---|---|---|
| **W4 Gate #1（decision-w4.md）** | Hyp A Persevere 主軸（4.40/5）+ D 入口（4.20）+ B 次軸（3.35）+ C 延後（2.30）| LTV:CAC 4.04:1（概估，Tier 2 24 月 95% 留存）；Payback 8.2 月（初步）| Phase 0.5-3 全面 desk research；5 個假設 🟡；90 天路徑確認 |
| **W6 Mid-point Gate（本文件）** | 同 W4（全部確認，無調整）| LTV:CAC 5.95:1（中性，補貼後）/ 2.3:1（保守 Year 1）；Payback 4.0 月（中性）；Break-even Year 3；Series A NT$7,000-10,000 萬 | Phase 4 T30-T34 六個 deliverable 鞏固；AI 基本法不確定性新增；TFDA 時程量化；Tier 1 硬體 -24% 毛利率 Year 1 財務特性揭示 |
| **W12 Gate #3（待執行）** | 待填 | 待填（Phase 5-6 真實 Pilot 數據）| Phase 5 WoZ Pilot 結果 + Phase 6 10-20 戶家庭 PMF 訊號 + 機構 LOI 情況 |

**Trend 觀察（W4→W6）**：
- 主軸方向完全穩定（兩個 Gate 一致），符合 Lean Startup「Plan-Only 階段先鞏固，Phase 5-6 後才有真實 Pivot 信號」的正常節奏
- 財務健康度有顯著提升（4.04→5.95:1），來自 T33 細化（補貼後 CAC + 開源 AI Brain 成本降低 + 5 年計算期）
- 新增風險項（AI 基本法 + Tier 1 硬體毛利）均在可管理範圍，不影響主軸 Persevere 決策

---

## §12. 參考文獻

- Eric Ries, *The Lean Startup*, 2011：Built-Measure-Learned cycle；Pivot 定義；PMF 量測（Sean Ellis ≥40%）
- Ash Maurya, *Running Lean*, 2012：Lean Canvas 9 block 設計原則（lean-canvas.md §0 標準）
- Ramanujam & Tacke, *Monetizing Innovation*, 2016：Madhavan 9 Rules（pricing.md §2）
- phase-0.5-deconstruction.md §5.2（4 hypothesis Lean Canvas A/B/C/D）+ §5.4（5 個關鍵假設 + Pivot 路徑）
- problem-framing.md §1-§4（TAM/SAM/SOM / Stakeholder / 倫理風險 / 競品 deep dive）
- wtp-payer.md §1.1-1.5（WTP 4 framework）+ §3（付款人分類）
- build-vs-buy.md §2-§5（硬體 / AI Brain / 通路 3 層）
- tech-architecture.md §0（隱私邊界 + 三層 AI Brain）
- feature-triage.md §1-§3（22 feature MoSCoW + Kano）
- safety-redlines.md §1（三層紅線架構）
- lean-canvas.md §1-§4（三 Canvas 整合，T30 ✅）
- revenue-model.md §1-§9（10 Model 評比 + ARR 三情境，T31 ✅）
- pricing.md §1-§9（定價策略 + 三 Tier Anchor+Decoy，T32 ✅）
- unit-econ.md §1-§13（BOM + 認證 + Unit Econ + Series A，T33 ✅）
- cert-timeline.md §1-§12（認證時程地圖，T34 ✅）
- 家庭照顧者關懷總會 2023（NT$22,000 月照顧費基準）
- ElliQ / Intuition Robotics 2025（$35M ARR / 紐約州 800+ 戶 pilot）
- 衛福部長照 3.0（2025/12/31 行政院核定；NT$60K/3 年智慧輔具補貼 2026/07）
- PDPC 2025/8 成立 + PDPA 2025/12 修訂版 + AI 基本法 2025/12
- TokenCost AI Price Index（LLM API 成本 94.5% 降幅）
- SoftBank Pepper / Aldebaran 2025 破產（機構場景先行者退場信號）
- Oxford Caregiver WTP Study, *The Gerontologist*, Vol.56 No.5, 2016

---

> **文件狀態**：✅ W6 Mid-point Gate 完成（PM Flow v0.1 T35）
> **主軸決策**：Hyp A Persevere 主軸（確認）+ D 入口（確認）+ B 次軸（確認）+ C 延後 Year 3+（確認）
> **vs W4 主要差異**：方向完全一致；財務健康度細化（LTV:CAC 4.04→5.95:1，Payback 8.2→4.0 月，Break-even Y3，Series A NT$7,000-10,000 萬）；AI 基本法不確定性新增；Tier 1 硬體 -24% 毛利率揭示
> **下一個 Gate**：T48 W12 Gate #3（約 W12，Phase 5-6 真實 Pilot 數據後）
> **懷特介入點**：T51 主管 review 規劃書（W12）
