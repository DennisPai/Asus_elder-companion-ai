# Revenue Model Selection — 長者互動陪伴機器人 × AI Brain
**Phase**: PM Flow v0.1 Phase 4 T31
**Date**: 2026-05-27
**執行角色**: revenue-model-selector
**Plan-Only Mode**: 本文件為「規劃書」，非執行成果。所有數字加標籤 ✅ desk-validated（≥3 source）/ 🟡 hypothesis / 📋 post-approval execution。
**報告對象**: 華碩（ASUS）AI 代理人 / 服務型機器人主管。客觀中立，不推銷 ASUS OEM 合作。
**建立在**: lean-canvas.md §1-§4 + decision-w4.md §2-§6 + wtp-payer.md §1-§3 + build-vs-buy.md §4-§6 + problem-framing.md §1 + phase-0.5-deconstruction.md §5.2

---

## 0. Executive Summary

本案為「台灣長者互動陪伴機器人 × AI Brain」MVP 與 Year 1-3 演進，選定 **2 主力收入模型**：

1. **主軸**：One-time Hardware Sale + Subscription 雙軌（對應 Hypothesis A B2C DTC）
2. **入口**：Freemium App + Premium Subscription（對應 Hypothesis D）

**風險 Hedge**（Year 1 H2 並行）：B2B2C RaaS + 家庭端訂閱（Hypothesis B）

**延後 Year 3+**：PMPM 保險業（Hypothesis C）

**4 主選項 Year 1-3 ARR 三情境摘要**（📋 計畫通過後執行估算）：

| 選項 | Y1 保守 | Y1 中間 | Y1 樂觀 | Y2 保守 | Y2 中間 | Y2 樂觀 | Y3 保守 | Y3 中間 | Y3 樂觀 |
|---|---|---|---|---|---|---|---|---|---|
| A 硬體+訂閱 | NT$50 萬 | NT$120 萬 | NT$200 萬 | NT$288 萬 | NT$720 萬 | NT$1,200 萬 | NT$864 萬 | NT$1,800 萬 | NT$3,000 萬 |
| D Freemium App | NT$18 萬 | NT$71 萬 | NT$120 萬 | NT$358 萬 | NT$1,076 萬 | NT$1,800 萬 | NT$720 萬 | NT$1,440 萬 | NT$2,160 萬 |
| B B2B2C RaaS | — | — | — | NT$216 萬 | NT$360 萬 | NT$600 萬 | NT$648 萬 | NT$1,080 萬 | NT$2,160 萬 |
| C 保險 PMPM | — | — | — | — | — | — | NT$7,200 萬 | NT$1.4 億 | NT$2.4 億 |

🟡 以上為 desk-validated 基礎上的假設估算，詳細推算邏輯見 §2。

---

## §1. 10 種收入模型對比

### 評分說明

每模型以 8 維度評分（1-5，1=最低適配）：
1. 適配本案核心痛點
2. 客戶 WTP（子女 + 機構）
3. 通路可行性
4. 規模化能力
5. 護城河形成速度
6. 執行風險
7. Plan-Only Mode 適用性（90 天規劃書展示力）
8. Year 1-3 ARR 貢獻上限

加權：維度 1-2 各 20%、維度 3-4-5 各 15%、維度 6 10%、維度 7-8 各 2.5%（共 100%）。

---

### Model 1：One-time Hardware Sale（一次性硬體銷售）

**定義**：機器人硬體 NT$15,000-19,900 一次性買斷，無月費，靠後續配件 / 平台費盈利。代表案例：iRobot Roomba（純硬體）、PARO（B2B 機構買斷）。

| 維度 | 分數 | 說明 | Source |
|---|---|---|---|
| 適配核心痛點 | 3/5 | 解決「購買入口」，但無月費 = 無持續陪伴 AI 服務更新誘因；台語 / 記憶 / 子女 dashboard 均需雲端訂閱維運 | phase-0.5-deconstruction.md §5.2 A Cost Structure |
| 客戶 WTP | 3/5 | 買家（子女）NT$15-20K 一次性 WTP 存在（對標 ASUS Zenbo Jr NT$15K ✅）；但無月費讓 CAC 需要更高毛利覆蓋，毛利 20%（NT$3K）遠不足以 sustain AI Brain 服務 | wtp-payer.md §1.1 |
| 通路可行性 | 3/5 | momo / 蝦皮 / 銀髮博覽會有現成硬體銷售通路；但純硬體通路無法做到訂閱追加 / upsell | build-vs-buy.md §4.1 路徑 A |
| 規模化能力 | 2/5 | 純硬體業務邊際利潤在 BOM 降低前難以提升；量產後毛利可到 30%，但維運 AI Brain 仍需另外收費 | build-vs-buy.md §6.1 |
| 護城河形成速度 | 1/5 | 純硬體無資料護城河；無訂閱 = 無持續使用記錄積累；競爭者可輕易複製硬體後以低價競爭 | lean-canvas.md §1 Block 9 |
| 執行風險 | 3/5 | 硬體一次性對子女決策阻力較大（無退費彈性）；孤兒化風險高（公司早期）；iRobot 2025 虧損 $145M 案例 ✅ | problem-framing.md §4.8 |
| Plan-Only 適用性 | 3/5 | 可在規劃書說明「硬體 NT$15K 起步」，但缺乏 recurring revenue = 主管難以計算 ARR | decision-w4.md §6.2 |
| ARR 貢獻上限 | 2/5 | 無訂閱 = 無 ARR 概念；一次性銷售規模受硬體 BOM 成本限制，不適合 SaaS-style 估值 | — |

**加權總分**：2.55/5

**評估**：本模型單獨使用不適合本案，作為「硬體 + 訂閱雙軌」的硬體組成部分則可。

---

### Model 2：Subscription / Recurring（訂閱月費）

**定義**：月費 / 年費解鎖 AI 對話、子女 dashboard、緊急通知等軟體服務，無論有無硬體均可訂閱。代表案例：ElliQ $29.99-59/月、GrandPad $59-65/月（含硬體攤提）。

| 維度 | 分數 | 說明 | Source |
|---|---|---|---|
| 適配核心痛點 | 5/5 | 訂閱 = 持續 AI 服務更新 + 記憶積累 + 緊急通知 + 子女 dashboard 持續運作；解決「24/7 主動陪伴」痛點的唯一持續性商模 | lean-canvas.md §1 Block 6 |
| 客戶 WTP | 4/5 | 四框架交叉中位 NT$1,000-1,500/月 🟡；Tier 1 NT$799（家庭照顧費 3.6%）/ Tier 2 NT$1,290（5.9%）均在 WTP 區間內；Tier 2 為主力 ARPU | wtp-payer.md §1.5 |
| 通路可行性 | 4/5 | DTC 信用卡自動扣款成熟（Stripe / 綠界）；App Store 訂閱（Apple 30% 手續費 Year 1）；機構通路月費另議 | build-vs-buy.md §4.1 路徑 A |
| 規模化能力 | 5/5 | SaaS 訂閱邊際成本趨零（AI Brain API NT$100-300/月/用戶，固定成本攤薄）；用戶×10 後毛利率上升；ARR 可預測 | build-vs-buy.md §6.1 |
| 護城河形成速度 | 5/5 | 訂閱 = 持續使用 = 台語語料積累 + 個人記憶 RAG 飛輪；4 層切換成本（記憶 / 習慣 / 家人設定 / 補貼綁定）在 4 週後形成 | lean-canvas.md §1 Block 9 |
| 執行風險 | 3/5 | 月流失率是核心風險（目標 ≤5%，若 >8% LTV:CAC 崩解）；長者棄用 = 子女退訂；首 2 週棄用率 30-50% 行業已知風險 | phase-0.5-deconstruction.md §5.2 A Key Metrics |
| Plan-Only 適用性 | 5/5 | ARR / MRR 是主管最熟悉的 SaaS 指標；三層 Tier（NT$799/1,290/Custom）完整展示定價策略和用戶分層 | decision-w4.md §6.1 |
| ARR 貢獻上限 | 5/5 | 主要 ARR 引擎；Year 1 NT$50-200 萬 → Year 3 NT$1,800-3,000 萬（B2C 主軸），保險 PMPM 啟動後 NT$1 億+ | lean-canvas.md §1 Block 6 ARR |

**加權總分**：4.50/5

**評估**：核心收入模型，必選。與硬體一次性銷售配合形成「Hardware + SaaS」雙軌。

---

### Model 3：Freemium（免費 + 升級）

**定義**：基礎功能免費，高級功能付費解鎖。代表案例：Lumosity（1 億用戶，USD 11.99/月付費，3% 轉換率）、Replika（情感 AI）。

| 維度 | 分數 | 說明 | Source |
|---|---|---|---|
| 適配核心痛點 | 3/5 | 降低「不敢一次付 NT$15K + NT$1.2K/月」的入口阻力；但免費版若不含緊急通知，核心痛點（安全焦慮）未解決 | phase-0.5-deconstruction.md §5.2 D |
| 客戶 WTP | 3/5 | NT$299/月（D Freemium 付費版）在 Persona B 可接受範圍；但 97% 免費用戶不付款是固有成本 | wtp-payer.md §1.4 |
| 通路可行性 | 5/5 | App Store / Google Play 是最低門檻通路；CAC NT$300-800/付費用戶（vs 硬體 NT$5K-8K），低 10×；Facebook 銀髮社群 + KOL 可精準觸及 | build-vs-buy.md §4.1 路徑 D |
| 規模化能力 | 4/5 | App 邊際成本低；但免費用戶服務成本需攤薄（雲端 NT$100-200/月/用戶）；轉換率 3% 🟡 = 每 100 個免費用戶才 3 個付費 | phase-0.5-deconstruction.md §5.2 D Key Metrics |
| 護城河形成速度 | 2/5 | 純 App 切換成本低（父母不適應則子女可輕易刪 App 換其他）；護城河建立慢，需要大量用戶才有台語語料貢獻 | lean-canvas.md §2 Block 9 |
| 執行風險 | 3/5 | Lumosity FTC $50M 和解教訓（廣告誇大）；免費用戶 97% 不轉化；台灣長者 App 轉換率假設 3% 未驗證 🟡 | phase-0.5-deconstruction.md §1.3 |
| Plan-Only 適用性 | 5/5 | 90 天 MVP 最快 GTM；App 先行建立用戶池可在規劃書展示「前期快速驗證 PMF」策略 | decision-w4.md §4.2 |
| ARR 貢獻上限 | 2/5 | 純 Freemium ARR 上限低：Y2 500-3,000 付費用戶 × NT$2,990/年 = NT$150-897 萬；主要價值是作為 Hypothesis A 硬體 upsell 入口 | decision-w4.md §7 D |

**加權總分**：3.40/5

**評估**：作為「入口策略」而非獨立商模。Freemium → 硬體 upsell 路徑（15% 轉換目標 🟡）才是完整商模。

---

### Model 4：Free Trial（免費試用 → 轉付費）

**定義**：14-30 天全功能免費試用，試用期後自動轉付費訂閱。代表案例：ElliQ（14 天試用期）、SaaS 行業標準 15-25% 試用轉換率。

| 維度 | 分數 | 說明 | Source |
|---|---|---|---|
| 適配核心痛點 | 4/5 | 試用期讓子女確認「父母真的會用、確實有效」再付費；降低「買了沒用」的擔憂；長者 4 週才能固化使用習慣 | wtp-payer.md §6.4 |
| 客戶 WTP | 4/5 | 試用後確認有效再付費，WTP 較冷啟動直接購買高；但台灣消保法 7 天猶豫期是法定最低保障 ✅ | wtp-payer.md §6.4 |
| 通路可行性 | 4/5 | DTC 官網 + App 均可實作試用機制；30 天全額退費設計（wtp-payer.md 建議）降低決策阻力 | wtp-payer.md §6.4 |
| 規模化能力 | 3/5 | 試用期間需提供完整服務（成本 NT$100-300/月/用戶），若棄用率高（>25%）則試用成本高 | wtp-payer.md §6.4 |
| 護城河形成速度 | 4/5 | 試用期內長者使用習慣初步建立 → 付費後習慣加深；訂閱資料積累護城河同 Model 2 | — |
| 執行風險 | 3/5 | 台灣消保法退費義務複雜（硬體已開箱使用的退費）；試用期若長者棄用（30-50%風險）需全額退費 | wtp-payer.md §6.4 / problem-framing.md §1.2 |
| Plan-Only 適用性 | 4/5 | 「30 天試用 → 自動轉付費」是主管容易理解的轉換策略；App 版易實作 📋 | lean-canvas.md §1 Block 5 Channels |
| ARR 貢獻上限 | 3/5 | 試用不是獨立商模，是訂閱的獲客機制；ARR 貢獻取決於試用轉換率（目標 15-25% SaaS 業界標準） | — |

**加權總分**：3.70/5

**評估**：Free Trial 是本案 Subscription 的獲客手段，非獨立收入模型。設計為「30 天全額退費」（硬體版）+ 「14 天 App 試用」（純 App 版）。

---

### Model 5：Usage-based / Metered（用量計費）

**定義**：依使用量計費（如 API 呼叫次數、對話分鐘數）。代表案例：AWS、Stripe、Twilio。

| 維度 | 分數 | 說明 | Source |
|---|---|---|---|
| 適配核心痛點 | 2/5 | 「每分鐘計費」對長者家庭不友善：無法預測月費、父母多聊幾句就多付錢會造成子女焦慮；陪伴場景需要「盡量多聊」的正向激勵 | phase-0.5-deconstruction.md §5.2 A |
| 客戶 WTP | 2/5 | 台灣家庭照顧者心態：希望固定月費可預測；用量計費讓照顧成本不可控，子女決策焦慮增加 🟡 | wtp-payer.md §6.1 |
| 通路可行性 | 3/5 | 技術上可行（API 計量 NT$0.5-2/100K tokens）；但對 B2C 子女說明「用量定價」需要大量教育成本 | build-vs-buy.md §3.2.1 |
| 規模化能力 | 4/5 | 用量計費在 B2B API 場景規模化強；B2C 長者場景用量極不可預測（失智長者可能重複問同一問題） | — |
| 護城河形成速度 | 2/5 | 純計費模式無切換成本；用戶可隨時切換到固定月費競品 | — |
| 執行風險 | 4/5 | 用量爆增（長者失智重複問話）可能導致月費暴漲引發客訴；預測性差；Tier 上限 cap 設計必要 | decision-w4.md §5 風險清單 |
| Plan-Only 適用性 | 2/5 | 對主管展示 ARR 計算複雜，需解釋用量假設；訂閱模型更直觀 | — |
| ARR 貢獻上限 | 2/5 | 本案若純用量計費，ARR 波動大、不可預測；不利融資和估值 | — |

**加權總分**：2.50/5

**評估**：不適合本案 B2C 長者場景。可作為 B2B2C 機構「超額用量」的附加計費條款（非主模型）。

---

### Model 6：RaaS（Robot as a Service，機器人租賃）

**定義**：機器人不買斷，月租形式（硬體折舊含在月費中）。代表案例：SoftBank Pepper RaaS $671/月（日本機構），Hypothesis B B2B2C 機構端 NT$3,000/月/台。

| 維度 | 分數 | 說明 | Source |
|---|---|---|---|
| 適配核心痛點 | 4/5 | 機構端：免硬體購置費 = 機構採購阻力降低；配合長照 3.0 補貼 NT$60K/3 年（NT$1,667/月政府補貼）= 機構自付 NT$1,333/月（NT$3,000 - NT$1,667）✅ | phase-0.5-deconstruction.md §5.2 B Revenue Streams |
| 客戶 WTP | 3/5 | 機構 WTP NT$3,000/月/台 對標 Pepper $671/月 🟡（PPP 調整後 NT$2,046，3,000 高 1.47×，需補貼支撐）；家庭端 NT$799/月（低於 A，機構背書替代 CAC）| wtp-payer.md §3.3 |
| 通路可行性 | 3/5 | 長照 A 級個管中心（627 處）+ 創新照顧 Ankecare 展會通路可及；但機構採購週期 6-12 月 🟡，90 天 MVP 不可在機構收入 | build-vs-buy.md §4.1 路徑 B |
| 規模化能力 | 4/5 | 機構合約期 3 年 = 穩定 MRR；連鎖照護（雙連 / 弘道 / 聖母）框架合約可快速複製；每家機構 5-20 台，規模化效果顯著 | lean-canvas.md §3 Block 6 |
| 護城河形成速度 | 4/5 | 機構 lock-in：換供應商成本高（照服員重新培訓 + 系統整合 + 個案戶重新習慣）；補貼名單綁定後進入壁壘 12-18 月 | lean-canvas.md §3 Block 9 |
| 執行風險 | 4/5 | Pepper 日本失敗（照服員抗拒 ICT + 2025 Aldebaran 破產）✅ 是直接警示；機構採購長週期拉高 BD 成本；補貼名單申請時程不確定 🟡 | problem-framing.md §4.8 |
| Plan-Only 適用性 | 3/5 | 機構 RaaS 可展示 B2B2C 收入多元性，提升規劃書說服力；但 90 天 MVP 無法展示執行結果，僅為 Year 1 H2 願景 | decision-w4.md §4.2 |
| ARR 貢獻上限 | 4/5 | Year 2：機構 60-100 台 × NT$3,000 × 12 = NT$216-360 萬；Year 3 規模化後 NT$648-2,160 萬；若進入 10-20 家連鎖機構 ARR 潛力大 | build-vs-buy.md §9.2 |

**加權總分**：3.65/5

**評估**：適合 Year 1 H2 並行推進的第二通路（Hypothesis B）。獨立 B2B2C RaaS + 家庭端訂閱是主要設計。

---

### Model 7：PMPM（Per Member Per Month，保險業）

**定義**：與健康險業者合作，保戶免費獲得服務，保險公司按保戶數付月費（Per Member Per Month）。代表案例：Papa（美國，$10-20 PMPM，累計 2.6M 次陪伴服務，估值 $1.4B）。

| 維度 | 分數 | 說明 | Source |
|---|---|---|---|
| 適配核心痛點 | 3/5 | 保險業者痛點（長照險理賠率上升 + 缺差異化）有結構性邏輯 ✅；但台灣保險 vs 美國 Medicare Advantage 結構差異大：Papa 靠政府保障，台灣商業壽險長照險 = 自費市場，外推有限 🟡 | decision-w4.md §2 Hypothesis C |
| 客戶 WTP | 2/5 | PMPM NT$600-1,000 對標 Papa $10-20（PPP 換算 NT$305-610）差 2-3×；台灣保險業對 ICT/AI 整合歷史接受度低 🟡；無台灣實際案例支撐 | wtp-payer.md §3.5 |
| 通路可行性 | 1/5 | 保險 BD 談判週期最短 8-12 月；TFDA II 類認證是前提（Year 2-3 才可能取得）📋；90 天 MVP 完全不可行 | build-vs-buy.md §4.1 路徑 C |
| 規模化能力 | 5/5 | 一家保險業者簽約 2 萬保戶 × NT$800 × 12 = ARR NT$1.92 億 🟡；保險通路規模化一旦啟動 ARR 飛輪效應強 | phase-0.5-deconstruction.md §5.2 C |
| 護城河形成速度 | 5/5 | 保險合約期 3-5 年 = 極高切換成本；保戶健康 + 理賠 RWD 數據形成排他性護城河；競爭者極難切入 | lean-canvas.md §3（Hyp C）Block 9 |
| 執行風險 | 4/5 | 最長路徑：TFDA 認證 + Pilot RWD + 保險 BD 8-12 月 = 總計 Year 3+ 才現金流；若台灣保險業接受度始終低（歷史問題）= 白費資源 🟡 | decision-w4.md §2 Hypothesis C |
| Plan-Only 適用性 | 3/5 | 作為「Year 3+ 商業演進願景」在 Pitch Deck 展示有效（呈現 ARR 潛力上限）；不適合作為 90 天規劃主軸 | decision-w4.md §4.3 |
| ARR 貢獻上限 | 5/5 | 最高 ARR 上限：2 萬保戶 × NT$800 × 12 = NT$1.92 億；5 家保險業者 × 2 萬保戶 = NT$9.6 億（5-7 年願景）📋 | phase-0.5-deconstruction.md §5.2 C |

**加權總分**：3.20/5

**評估**：延後 Year 3+，非 90 天 / Year 1 執行範圍。在規劃書呈現長期 ARR 潛力。

---

### Model 8：Marketplace Commission（平台分潤 / 市集手續費）

**定義**：本案扮演「照護服務撮合平台」角色，收取照服員 / 家醫 / 長照機構服務的媒合抽成。代表案例：Angie's List 家政媒合、明道老闆（照服媒合台灣）。

| 維度 | 分數 | 說明 | Source |
|---|---|---|---|
| 適配核心痛點 | 2/5 | 本案核心是「AI 陪伴機器人」，非服務媒合平台；若強加 Marketplace 功能，核心定位模糊；且 B2C 子女購買動機是「機器人取代部分照顧勞力」，非媒合照服員 | lean-canvas.md §1 Block 3 UVP |
| 客戶 WTP | 2/5 | 照顧服務抽成（10-30%）台灣已有競爭者（明道照護 / 長照 1966 政府服務）；子女不會為「媒合」單獨付費 🟡 | — |
| 通路可行性 | 2/5 | 需同時建立供給方（照服員 / 機構）+ 需求方（子女）雙邊市場；冷啟動雙邊 chicken-and-egg 問題難解；本案 Year 1 資源不足以同時做 AI 陪伴 + 平台 | — |
| 規模化能力 | 3/5 | 若平台成熟，GMV 規模化抽成可觀；但 90 天 MVP 到 Year 2 均無法建立有意義的雙邊規模 | — |
| 護城河形成速度 | 2/5 | 照護媒合市場台灣已有政府（1966）+ 民間競品；本案從零建立需要 2-3 年才有網絡效應護城河 | — |
| 執行風險 | 4/5 | 雙邊市場建立費用高、時程長；照顧服務品質管控複雜；與本案主軸 AI 機器人定位衝突 | — |
| Plan-Only 適用性 | 1/5 | 在 90 天規劃書中納入 Marketplace 策略會使主管疑惑「核心是 AI 機器人還是平台？」分散主軸說服力 | decision-w4.md §4.1 |
| ARR 貢獻上限 | 2/5 | 若 GMV 不夠大，抽成 ARR 微薄；Year 1-3 不可能建立足夠規模 GMV | — |

**加權總分**：2.20/5

**評估**：不適合本案。照護媒合可作為「子女 dashboard 附加功能」（介紹在地維修夥伴 / 照服員），但不作為主要收入模型。

---

### Model 9：Licensing / IP（白標 / OEM 授權）

**定義**：將 AI Brain、台語語料庫、子女 dashboard 軟體授權給其他硬體廠商 / 保險公司使用。代表案例：ElliQ ROE 授權給電信業者、台灣 Nuance（語音辨識授權）。

| 維度 | 分數 | 說明 | Source |
|---|---|---|---|
| 適配核心痛點 | 2/5 | 授權商模解決「規模化技術輸出」，非直接解決長者陪伴痛點；且本案 Year 1 無足夠 IP 護城河可授權（台語語料庫需 1,000 用戶後才形成）| lean-canvas.md §1 Block 9 |
| 客戶 WTP | 3/5 | 若電信業者 / 保險公司為 AI Brain 授權月費付費（估 NT$200-500/用戶/月），WTP 存在 🟡；但需先有足夠 IP 差異化 | — |
| 通路可行性 | 2/5 | 授權談判需銷售能力 + IP 估值談判；Year 1 IP 積累不足難以談判；電信業者通常偏向自建或大廠授權 | — |
| 規模化能力 | 5/5 | 若授權成功，每新增一個授權用戶的邊際成本近零；IP 授權 ARR 可大幅擴大規模 | — |
| 護城河形成速度 | 4/5 | 若台語語料庫形成後授權，授權方依賴本案語料 = 切換成本高；但護城河需 Year 2+ 才形成 | — |
| 執行風險 | 3/5 | IP 授權被授權方（如電信）後可能自建能力後終止合約；IP 保護條款複雜；台灣授權法規制度尚未成熟 | — |
| Plan-Only 適用性 | 3/5 | 可在規劃書「Year 3+ 願景」段落提及 IP 授權潛力，提升長期商業想像空間 | decision-w4.md §6.4 |
| ARR 貢獻上限 | 4/5 | 若授權給 1-2 家電信 / 保險：NT$200/用戶/月 × 10 萬用戶 = ARR NT$2.4 億（5-7 年願景 🟡）| — |

**加權總分**：2.95/5

**評估**：Year 3+ 潛在選項，需先建立台語語料庫護城河。不在 90 天 MVP 或 Year 1 規劃範圍。

---

### Model 10：Advertising / Data Monetization（廣告 / 資料變現）

**定義**：向廣告主（健保食品 / 醫療設備 / 保險）精準投放，或將長者健康 / 行為資料賣給研究機構 / 保險公司。

> **警告**：本模型對本案構成重大倫理紅線，以下評估重點在「為何排除」。

| 維度 | 分數 | 說明 | Source |
|---|---|---|---|
| 適配核心痛點 | 1/5 | 廣告 / 資料變現與「讓長者信任 AI 陪伴機器人」的 UVP 根本衝突；長者家庭「被監控後賣廣告」是最大信任破壞者 | problem-framing.md §3 倫理框架 |
| 客戶 WTP | 1/5 | 廣告模式對用戶（長者 / 子女）無直接付費，但間接成本是「信任損耗」；若被媒體揭露 = 品牌崩潰 | — |
| 通路可行性 | 2/5 | 廣告主願付費條件：1M+ 精準用戶；本案 Year 1-2 用戶規模遠不足（目標 200-3,000 付費用戶）| — |
| 規模化能力 | 2/5 | 廣告規模化需要極大用戶基礎；B2C 健康相關廣告在 PDPA 加嚴後合規難度極高 | — |
| 護城河形成速度 | 1/5 | 廣告模式無切換成本護城河；用戶一旦感覺被「廣告化」直接離開 | — |
| 執行風險 | 5/5 | **三重紅線**：(1) PDPA §6 特種個資（健康資料）廣告化需嚴格同意機制，2025/12 修訂加嚴 ✅；(2) 台灣 AI 基本法 2025/12 對敏感族群資料使用有特別限制 ✅；(3) 倫理 Power Asymmetry（長者作為 vulnerable population 應受特別保護）是 problem-framing.md §3 倫理框架核心 ✅ | problem-framing.md §3 |
| Plan-Only 適用性 | 1/5 | 對 ASUS 主管展示「廣告 / 資料變現」是本案收入模型 = 嚴重信譽風險，且對長者市場定位有致命損害 | phase-0-answers.md §Q4 |
| ARR 貢獻上限 | 1/5 | 在法規 + 倫理雙重紅線下，廣告 / 資料變現的 ARR 貢獻幾乎為零（不可行） | — |

**加權總分**：1.60/5

**評估**：完全排除。三重紅線（PDPA §6 + AI 基本法 + 倫理框架）讓廣告 / 資料變現在本案不可行，且對品牌信任造成不可逆損害。**Vulnerable population 紅線**：長者作為認知能力可能退化的族群，對廣告影響力缺乏防禦，使用廣告商模在倫理上不可接受。

---

### 10 Model 比對總覽表

| Model | 加權分 | 適合 | 不適合 | 90 天 MVP | Y1-3 ARR | 選定 |
|---|---|---|---|---|---|---|
| 1 One-time HW Sale | 2.55 | 硬體啟動入門 | 單獨存在（無 recurring）| 入口 | 低（無訂閱）| ✅ 配合 Model 2 |
| 2 Subscription | 4.50 | SaaS / 陪伴服務 | 高頻率 one-time purchase | 核心 | 高（主軸 ARR）| ✅ 主選 |
| 3 Freemium | 3.40 | mass-market / App 入口 | 獨立存在（轉換率低）| ✅ 最快 GTM | 中低（入口）| ✅ 入口策略 |
| 4 Free Trial | 3.70 | B2B SaaS / 功能明確 | 硬體複雜退費 | ✅ 30 天試用設計 | 中（輔助）| ✅ 獲客手段 |
| 5 Usage-based | 2.50 | API / DevTools | B2C 長者（不可預測）| 不適 | 低（波動大）| ✗ 排除 |
| 6 RaaS | 3.65 | IoT / 機構採購 | 90 天 MVP（週期長）| BD 準備期 | 中（Y1 H2）| ✅ 次主選 |
| 7 PMPM | 3.20 | 保險 B2B | 早期（談判 8-12 月）| 不適 | 高（Y3+）| ✅ 延後 Y3+ |
| 8 Marketplace | 2.20 | 雙邊平台 | 本案定位（AI 機器人非平台）| 不適 | 低 | ✗ 排除 |
| 9 Licensing | 2.95 | 企業 IP 授權 | 早期（無足夠 IP）| 不適 | 中（Y3+）| 觀察 Y3+ |
| 10 Advertising | 1.60 | UGC / 大媒體 | 所有場景（紅線）| ✗ 紅線 | 不可行 | ✗ 排除（紅線）|

---

## §2. Narrow 到 4 個主選項

### §2.1 選定邏輯摘要

依 decision-w4.md §4 W4 Gate 評估結論 + §1 10 模型加權分析，narrow 到以下 4 個：

| 選項 | 核心 Revenue Model | 對應 Hypothesis | 角色 | 啟動時間 |
|---|---|---|---|---|
| **Option 1（主）** | Hardware Sale + Subscription 雙軌 | Hyp A B2C DTC | 主軸收入 | 90 天 MVP（App 版先行）→ Y1 H2 硬體 |
| **Option 2（入口）** | Freemium App + Premium Subscription | Hyp D Freemium | 用戶池建立 + 主軸引流 | 90 天 W5 最快啟動 |
| **Option 3（Hedge）** | B2B2C RaaS + 家庭訂閱 | Hyp B B2B2C | Year 1 H2 第二通路 | W3 BD 啟動，Y1 H2 首批機構 |
| **Option 4（延後）** | PMPM 保險業 | Hyp C | Year 3+ 長期願景 | Year 3+（TFDA 認證後）|

---

### §2.2 Option 1：Hardware Sale + Subscription 雙軌（Hypothesis A B2C DTC）

**收入結構**：

| 收入流 | 單位經濟 | 量 | 頻率 |
|---|---|---|---|
| 硬體一次性 | NT$15,000-19,900/台（BOM NT$12K → 毛利 20%）🟡 | 200-500 台（Y1）/ 1,000-3,000 台（Y2）| 一次 |
| Tier 1 訂閱 | NT$799/月（預期用戶 50-60%）| Tier 1 用戶數 | 月費 |
| Tier 2 訂閱 | NT$1,290/月（預期用戶 30-40%，主力 ARPU）| Tier 2 用戶數 | 月費 |
| Tier 3 訂閱 | Custom 年約 NT$35K-55K（預期用戶 10-15%）🟡 | Tier 3 用戶數 | 年費 |

**ARR 推算**（📋 計畫通過後執行估算）：

加權 ARPU 假設：Tier 1 55% × NT$799 + Tier 2 35% × NT$1,290 + Tier 3 10% × NT$3,333 = NT$440 + NT$452 + NT$333 = **NT$1,225/月加權 ARPU** 🟡

| 情境 | Y1 付費用戶 | Y1 ARR | Y2 付費用戶 | Y2 ARR | Y3 付費用戶 | Y3 ARR |
|---|---|---|---|---|---|---|
| **保守** | 60-100（主 App + 少量 WoZ 硬體）| NT$50 萬 | 200-300（ODM 硬體正式上市）| NT$288 萬 | 700-1,000（含電信通路）| NT$864 萬 |
| **中間** | 100-200 | NT$120 萬 | 500-800 | NT$720 萬 | 1,500-2,000 | NT$1,800 萬 |
| **樂觀** | 200-300（長照 3.0 補貼帶動）| NT$200 萬 | 1,000-1,500（電信捆綁啟動）| NT$1,200 萬 | 2,500-3,000 | NT$3,000 萬 |

**啟動時間**：
- 90 天 MVP（W5）：App 版 Tier 1/2 先行（Wizard-of-Oz 10-20 戶 Pilot）📋
- Y1 H2（M6-9）：ODM 硬體正式上市 + Tier 2 Pro 主力推廣 📋
- Y2（電信捆綁談判後）：規模化 📋

**Unit Economics**：
- LTV（Tier 2）：NT$1,290 × 95% 月留存 × 20 個月 = NT$24,510 🟡
- CAC（初期）：NT$5,000-8,000（DTC 直銷），長照補貼名單後降至 NT$1,000-3,200 📋
- LTV:CAC：NT$24,510 / NT$6,500 = **3.77:1**（目標 ≥3:1 ✅）
- Payback Period：NT$6,500 / (NT$1,225 × 61% 月毛利率) = **約 8.7 個月** 🟡

---

### §2.3 Option 2：Freemium App + Premium Subscription（Hypothesis D）

**收入結構**：

| 收入流 | 單位經濟 | 量 | 頻率 |
|---|---|---|---|
| 免費版 | NT$0（建立用戶池）| 目標 Y1：2,000-5,000 下載 | — |
| 付費版（App）| NT$299/月 / NT$2,990/年 | Free → Paid 3% 🟡 | 月費 / 年費 |
| 硬體 upsell | NT$15K 硬體 + NT$1,290/月 | Paid 用戶 15% upsell 🟡 | 一次 + 月費 |

**ARR 推算**（📋）：

| 情境 | Y1 付費 App 用戶 | Y1 ARR | Y2 付費用戶 | Y2 ARR | Y3 付費用戶 | Y3 ARR |
|---|---|---|---|---|---|---|
| **保守** | 60（2,000 下載×3%）| NT$18 萬（60×NT$2,990/年）| 500-800 | NT$358 萬 | 1,500-2,000 | NT$720 萬 |
| **中間** | 150（5,000 下載×3%）| NT$71 萬 | 2,000-3,000 | NT$1,076 萬 | 3,000-4,000 | NT$1,440 萬 |
| **樂觀** | 300（10,000 下載×3%）| NT$120 萬 | 5,000 | NT$1,800 萬 | 6,000 | NT$2,160 萬 |

注：Y2+ 硬體 upsell 的 ARR 貢獻計入 Option 1。

**啟動時間**：
- W5 即時開（App Store / Google Play 上架）📋
- W5-W8：App 推廣 + 初始用戶池建立 📋
- Y1 H2：App 付費用戶 → 硬體 upsell（15% 目標）📋

**Unit Economics**：
- ARPU（App 付費）：NT$299/月
- LTV（付費 App）：NT$299 × 92% 月留存 × 12 個月 = NT$3,301 🟡（切換成本低，留存率低於 Option 1）
- CAC（App 付費用戶）：NT$300-800/用戶
- LTV:CAC：NT$3,301 / NT$500 = **6.6:1**（高，因 CAC 低）🟡
- 主要限制：ARR 規模上限低，純 App 難建護城河

---

### §2.4 Option 3：B2B2C RaaS + 家庭端訂閱（Hypothesis B）

**收入結構**：

| 收入流 | 單位經濟 | 量 | 頻率 |
|---|---|---|---|
| 機構端 RaaS | NT$3,000/月/台（3 年合約）| 5-20 台/家機構 | 月費 |
| 個案家庭訂閱 | NT$799/月（低於 B2C Tier 1）| 機構個案戶 | 月費 |
| 長照 3.0 補貼抵扣 | NT$60K/3 年（NT$1,667/月）機構部分政府補貼 ✅ | 各補貼申請戶 | 抵扣 |

**ARR 推算**（📋）：

| 情境 | Y2 機構台數 | Y2 ARR（機構端）| Y3 機構台數 | Y3 ARR（機構端）|
|---|---|---|---|---|
| **保守** | 60 台（3 家機構×20 台）| NT$216 萬 | 200 台（10 家）| NT$648 萬 |
| **中間** | 100 台（5 家機構×20 台）| NT$360 萬 | 300 台（15 家）| NT$1,080 萬 |
| **樂觀** | 167 台（長照 3.0 補貼帶動）| NT$600 萬 | 600 台（連鎖機構框架）| NT$2,160 萬 |

注：家庭端 NT$799/月 ARR 另計（視機構個案戶數）。

**啟動時間**：
- W3：機構 BD 接觸啟動（3-5 家電話 / email）📋
- W12 Gate：≥1 家機構 LOI（Letter of Intent）📋
- Y1 H2：正式機構 Pilot 首批 5-20 台 📋
- Y2：機構規模化（3-5 家 MoU → 正式合約）📋

**Unit Economics（機構端）**：
- 月費 NT$3,000/台 - 硬體折舊（BOM NT$12K / 36 個月）NT$333 - 服務 NT$500 - 雲端 NT$200 = 月毛利 NT$1,967/台
- 毛利率：65.6%
- 3 年合約 LTV：NT$3,000 × 36 = NT$108,000/台
- BD CAC：NT$30,000-60,000/家機構 ÷ 20 台 = NT$1,500-3,000/台
- LTV:CAC：NT$108,000 / NT$2,000 = **54:1**（高，因合約期長）🟡

---

### §2.5 Option 4：PMPM 保險業（Hypothesis C，Year 3+）

**收入結構**：

| 收入流 | 單位經濟 | 量 | 頻率 |
|---|---|---|---|
| 保險 PMPM | NT$600-1,000/保戶/月 | 2 萬保戶（一家保險業者）🟡 | 月費 |

**ARR 推算**（📋）：

| 情境 | Y3 合約保戶 | Y3 ARR | Y4-5 合約保戶 | Y4-5 ARR |
|---|---|---|---|---|
| **保守** | 2 萬（1 家業者）| NT$7,200 萬（NT$600×20K×12）| 5 萬（2 家）| NT$3.6 億 |
| **中間** | 2 萬（1 家業者）| NT$1.44 億（NT$800×20K×12）| 8 萬（3 家）| NT$6 億 |
| **樂觀** | 2 萬（1 家業者）| NT$2.4 億（NT$1,000×20K×12）| 10 萬（4 家）| NT$12 億 |

**啟動時間**：
- W8-12（90 天 MVP 期）：初步接觸保險業者 Innovation 部門（無合約期待）📋
- Y1-2：提交 Pilot RWD 數據（10-20 戶 4 週使用記錄）📋
- Y2-3：TFDA II 類認證前提（12-24 月認證時程）📋
- Y3+：首個 PMPM 合約談判（8-12 月）📋

---

## §3. Decision Tree

```
Q1: 付款人是誰？（本案核心分流）
  │
  ├─ 長者子女（B2C，個人付款）
  │   │
  │   └─ Q2: 先軟體還是先硬體？
  │       ├─ 先軟體（App 驗證 PMF，WTP 低端）→ Option 2 Freemium App
  │       │   └─ App 付費後 upsell → Option 1 Hardware + Subscription
  │       └─ 直接硬體（WTP 高端，觸發事件）→ Option 1 Hardware + Subscription
  │
  ├─ 機構採購（B2B2C，機構 + 家庭雙層付款）
  │   └─ Q3: 機構有無補貼資格？
  │       ├─ 有長照 3.0 補貼（2026/07 後）→ Option 3 B2B2C RaaS 主攻
  │       └─ 無補貼（90 天 MVP 期）→ Option 3 BD 準備期（非主收入）
  │
  └─ 保險業者（B2B，PMPM）
      └─ Q4: TFDA II 類認證是否取得？
          ├─ 未取得（Year 1-2）→ 延後，保持接觸
          └─ 取得（Year 3+）→ Option 4 PMPM 談判

Q5: 硬體 or 純 App？（決定 Model 1 or Model 3）
  ├─ 純 App（90 天 MVP）→ Subscription + Freemium
  └─ 硬體 + App（Year 1 H2+）→ Hardware Sale + Subscription 雙軌

Q6: Free Trial vs Freemium？（見 §4）
  ├─ B2C 硬體版 → Free Trial（30 天試用）
  └─ B2C App 版 → Freemium（基礎免費 + 付費解鎖）

Q7: 訂閱 Tier 選擇？
  ├─ Persona B（月收 NT$40-80K）→ Tier 1 NT$799
  ├─ Persona A（月收 NT$60-120K）→ Tier 2 NT$1,290（主力 ARPU）
  └─ Persona C（月收 NT$100K+）→ Tier 3 Custom 年約
```

**Decision Tree 核心結論**：

1. **90 天 MVP**：Option 2 Freemium App（W5 啟動）+ Option 1 的 App 訂閱版（Tier 1/2，Wizard-of-Oz 少量 Pilot）
2. **Year 1 H2**：Option 1 全面啟動（ODM 硬體上市）+ Option 3 BD 深化（機構 LOI → MoU）
3. **Year 2**：Option 1 規模化（電信捆綁）+ Option 3 機構批量（60-100 台）
4. **Year 3+**：Option 4 PMPM 啟動（TFDA 認證後）

---

## §4. Free Trial vs Freemium 對比決策（針對 Hypothesis D）

### §4.1 框架對比

| 比較維度 | Free Trial（14-30 天）| Freemium（基礎永久免費）|
|---|---|---|
| **轉換率** | 15-25%（SaaS 業界標準 ✅）| 1-5%（本案 3% 🟡）|
| **Onboarding 成本** | 高（需提供完整功能 14-30 天，成本 NT$100-300/用戶/試用期）| 低（免費版功能受限，雲端成本 NT$50-100/用戶/月）|
| **適用 ICP** | 決策快（1-4 週）、功能價值明確的 B2B SaaS | 大眾市場、個人用戶、決策慢、需長時間「習慣化」|
| **Scaling** | 5× 用戶池規模（轉換率高 = 付費用戶密度高）| 50× 用戶池規模（轉換率低但下載量大）|
| **長者場景適配** | ❌ 長者需 4 週才能建立使用習慣；14 天試用期太短，棄用率高（30-50%），試用期結束就退費 | ✅ 免費版讓長者「沒有壓力試用」，父母接受後子女再升級付費 |
| **子女決策配合** | 適合「已有緊急事件觸發」的高決策速度子女（觸發後 2-7 天決策）🟡 | 適合「想試但不確定父母會用」的猶豫子女（決策 4-8 週）🟡 |
| **台灣消保法** | 通訊購買 7 天猶豫期法定保障 ✅（退費義務複雜度高）| 免費版無退費問題，降低法律風險 |
| **ARR 貢獻速度** | 快（轉換率高）但受試用期時程限制（需等 30 天）| 慢（需積累大量免費用戶後等待 3% 轉換）|

### §4.2 長者場景特殊考量

**關鍵洞察**：長者陪伴場景的 Free Trial vs Freemium 決策不同於一般 SaaS，原因如下：

1. **習慣化週期（4 週）> 典型 Free Trial 期（14-30 天）**：長者需要 4 週才能形成「跟機器人說話」的習慣（problem-framing.md §2.2.1）。14 天試用期結束時，長者可能剛開始「有點習慣」但尚未強化；棄用後子女退費並留下負面印象（「沒用」）。

2. **父母 Veto 權力**（problem-framing.md §2.2.3）：長者拒絕 = 子女退費。Freemium 讓父母「試試看」，沒有「一個月後要付款」的心理壓力，接受度更高。

3. **App vs 硬體 分流**：
   - **App 版 → Freemium**：無硬體壓力，父母可先「試試這個 App」，30 天後子女決定是否升付費版
   - **硬體版 → Free Trial（30 天全額退費）**：硬體已交付家中，子女看到父母實際使用，30 天試用期後決定是否繼續訂閱

### §4.3 本案選定方案

**App 版（Hypothesis D）**：☑ **Freemium**

**理由**：
1. ICP（Persona A/B 子女）有「想試但不確定」的猶豫型，Freemium 降低決策阻力
2. 台灣長者 App 採用率需要時間建立（無月費壓力讓父母「多試幾天」）
3. Freemium 轉換路徑清晰：基礎免費（無緊急通知、無記憶、無子女摘要）→ NT$299/月（解鎖）
4. 免費版 CAC 極低（NT$300-800），可快速建立用戶池

**硬體版（Hypothesis A 先行測試）**：☑ **Free Trial（30 天全額退費）**

**理由**：
1. 硬體 NT$15K 已購入，子女在試用期的「已承諾感」讓退費率低於純 App
2. 30 天讓長者建立基礎習慣（行業棄用率高峰在第 2 週後開始下降）
3. 消保法 7 天法定猶豫期為最低保障，30 天退費設計超越法定要求 = 買家信心提升
4. Day-7 / Day-14 / Day-30 主動關懷機制監測，若退費率 > 25% 觸發 Pivot 評估

**禁止 Anti-pattern**：
- ❌ 硬體版採 14 天試用（太短，長者棄用率尚未降到最低）
- ❌ App 版採 Free Trial（無硬體 sunk cost，試用期結束後退費 = 無損失）
- ❌ 兩者均採 Freemium（硬體 Freemium 邏輯矛盾，硬體已交付無法「免費使用後再付費」）

---

## §5. 各 Revenue Model 的 Unit Economics 起點

### §5.1 硬體 One-time

| 項目 | 90 天 MVP（Wizard-of-Oz 平板）| Y1 H2（ODM 首批）| Y2-3（量產）|
|---|---|---|---|
| BOM | NT$18,000-22,000 | NT$12,000 | NT$9,000-10,000 |
| 售價 | NT$15,000-19,900 | NT$15,000-19,900 | NT$15,000-19,900 |
| 硬體毛利（絕對值）| -NT$2,100 ~ +NT$1,900（WoZ 虧損可接受）| NT$3,000（20%）| NT$5,000-6,000（33-40%）|
| 硬體毛利率 | -14% ~ +10% | 20% | 33-40% |
| 備注 | WoZ 硬體虧損由訂閱補足；Plan-Only 規劃期不實際銷售 📋 | BSMI 認證完成後可銷售 📋 | 量產 500 台+ 攤低 NRE 📋 |

🟡 所有成本為 desk research 推算，需實際詢價確認

### §5.2 Subscription ARPU / 月流失 / LTV

| 指標 | Tier 1（NT$799/月）| Tier 2（NT$1,290/月）| Tier 3（Custom 年約）|
|---|---|---|---|
| ARPU（月）| NT$799 | NT$1,290 | NT$2,917-4,583（月均）|
| 月流失率假設 | ≤7%（較高，功能較少）🟡 | ≤5%（目標）🟡 | ≤3%（年約強約束）🟡 |
| 預期訂閱月數 | 約 14.3 個月（1/7%）| 約 20 個月（1/5%）| 12-36 個月（年約）|
| LTV（訂閱）| NT$11,421 | NT$24,510 | NT$35,000-165,000 |
| AI Brain 成本 / 月 | NT$100-200 | NT$200-300 | NT$300-500 |
| 月毛利 | NT$599-699（75-87%）| NT$990-1,090（76-84%）| NT$2,417-4,283（83-93%）|

🟡 月流失率假設基於 ElliQ 行業類比 + 台灣首次 AI 陪伴機器人未驗證場景，需 Phase 6 Pilot 驗證

### §5.3 Freemium 轉換率 / Paid ARPU

| 指標 | 假設值 | 信心等級 | Source |
|---|---|---|---|
| Freemium 下載量（Y1）| 2,000-5,000 | 🟡 | decision-w4.md §6.3 Hypothesis D |
| Free → Paid 轉換率 | 3%（行業標準）| 🟡 | Lumosity 案例 ✅（台灣長者 App 未驗證）|
| Paid ARPU（App）| NT$299/月 / NT$2,990/年 | 🟡 | wtp-payer.md §1.4（PPP 調整後）|
| Paid 月流失率 | ≤8%（切換成本低）| 🟡 | — |
| Paid LTV（App）| NT$299 × 12.5 個月 = NT$3,738 | 🟡 | — |
| Freemium 服務成本 | NT$100-200/月/免費用戶 | 🟡 | build-vs-buy.md §6.1 |
| 100 免費用戶月成本 | NT$10,000-20,000（收入 NT$0）| ✅ | — |

### §5.4 RaaS 月費 / 合約年期 / 折舊

| 指標 | 假設值 | 信心等級 |
|---|---|---|
| 機構端 RaaS 月費 | NT$3,000/月/台 | 🟡（SoftBank Pepper $671/月 ✅ PPP 調整）|
| 合約年期 | 3 年（與長照 3.0 補貼週期對齊）| 🟡 |
| 政府補貼月額 | NT$1,667/月（NT$60K / 36 個月）| ✅（長照 3.0 草案）|
| 機構自付月費 | NT$1,333/月（NT$3,000 - NT$1,667）| 🟡 |
| 硬體折舊（3 年）| NT$333/月（BOM NT$12K / 36 個月）| 🟡 |
| 服務 + 維修成本 | NT$500-800/月/台 | 🟡 |
| 雲端 AI Brain 成本 | NT$200-300/月/台 | 🟡 |
| 機構端月毛利 | NT$3,000 - NT$333 - NT$700 - NT$250 = NT$1,717/台 | 🟡 |
| 毛利率 | 57.2% | 🟡 |
| 3 年合約 LTV | NT$3,000 × 36 = NT$108,000/台 | 🟡 |

### §5.5 PMPM 每員每月費

| 指標 | 假設值 | 信心等級 |
|---|---|---|
| PMPM 費率 | NT$600-1,000/保戶/月 | 🟡（Papa $10-20 PPP 換算 NT$305-610，本案估高 2-3×）|
| 一家保險業者簽約保戶 | 2 萬人 | 🟡（國泰 / 富邦長照險規模推算）|
| MRR（2 萬保戶 × NT$800）| NT$1,600 萬/月 | 🟡 |
| ARR（Year 3+）| NT$1.92 億 | 🟡 |
| 談判週期 | 8-12 月（最短）| 🟡 |
| 前提：TFDA II 類認證 | 需 Y2-3 取得（12-24 月）| 🟡 |

---

## §6. 收入組合 Cohort 分析

### §6.1 三情境收入 Cohort

> 三情境定義：保守（法規 / 通路阻礙，ODM 延遲）/ 中間（按計畫推進）/ 樂觀（長照 3.0 補貼帶動 + 電信捆綁加速）

| 年份 | 情境 | Option 1 HW+Sub | Option 2 Freemium | Option 3 RaaS | Option 4 PMPM | **合計 ARR** |
|---|---|---|---|---|---|---|
| **Y1** | 保守 | NT$50 萬 | NT$18 萬 | — | — | NT$68 萬 |
| Y1 | 中間 | NT$120 萬 | NT$71 萬 | — | — | NT$191 萬 |
| Y1 | 樂觀 | NT$200 萬 | NT$120 萬 | — | — | NT$320 萬 |
| **Y2** | 保守 | NT$288 萬 | NT$358 萬 | NT$216 萬 | — | NT$862 萬 |
| Y2 | 中間 | NT$720 萬 | NT$1,076 萬 | NT$360 萬 | — | NT$2,156 萬 |
| Y2 | 樂觀 | NT$1,200 萬 | NT$1,800 萬 | NT$600 萬 | — | NT$3,600 萬 |
| **Y3** | 保守 | NT$864 萬 | NT$720 萬 | NT$648 萬 | NT$7,200 萬 | NT$9,432 萬 |
| Y3 | 中間 | NT$1,800 萬 | NT$1,440 萬 | NT$1,080 萬 | NT$1.44 億 | NT$1.92 億 |
| Y3 | 樂觀 | NT$3,000 萬 | NT$2,160 萬 | NT$2,160 萬 | NT$2.4 億 | NT$2.74 億 |

注 1：Y3 PMPM 啟動前提是 TFDA II 類認證取得 + 首個保險業者合約簽署，兩者均 🟡
注 2：所有數字為 desk-validated 基礎假設推算 📋

### §6.2 各收入流佔比演進（中間情境）

| 年份 | Option 1 HW+Sub % | Option 2 Freemium % | Option 3 RaaS % | Option 4 PMPM % |
|---|---|---|---|---|
| Y1（ARR NT$191 萬）| 63% | 37% | 0% | 0% |
| Y2（ARR NT$2,156 萬）| 33% | 50% | 17% | 0% |
| Y3（ARR NT$1.92 億）| 9% | 8% | 6% | 75% |

**主管故事**（給 ASUS 主管的「賺錢故事」，三句話版）：
1. **Year 1：App 先行驗證 PMF**。Freemium App（NT$299/月）佔 37%，硬體訂閱（NT$799-1,290/月）佔 63%。重點不是 ARR 規模，而是 PMF 訊號（Sean Ellis ≥40% / Day-7 retention ≥70%）。
2. **Year 2：硬體 + App 雙引擎**。ODM 硬體正式上市後，App 成為引流漏斗（50% ARR），硬體訂閱 33%，機構 RaaS 17%。ARR NT$862 萬-NT$2,156 萬（三情境）。
3. **Year 3：保險 PMPM 一旦啟動，ARR 結構重組**。一家保險業者 2 萬保戶 × NT$800 PMPM = ARR NT$1.9 億，佔 Y3 中間情境 75%。這是規劃書長期商業想像空間的主要來源。

---

## §7. 風險清單

### §7.1 各 Revenue Model 失敗風險

**Model 2 Subscription（主軸 — 最高優先監控）**

| 風險 | 說明 | 失敗案例 | 應對措施 |
|---|---|---|---|
| 月流失率過高（>8%）| 長者棄用 = 子女退訂；首 2 週棄用率 30-50% 行業基準 ✅ | ElliQ 美國早期高流失（未公開數字）| Day-7 主動關懷 + 子女 onboarding 硬指標 ≤10 分鐘；若首 100 用戶月流失 >8% 觸發 UX 緊急優化 📋 |
| WTP 系統低估 | Phase 2 訪談顯示穩定 WTP 主流 < NT$600/月 | GrandPad $59-65/月 在台灣偏高 🟡 | Tier 定價下移（Starter NT$599 / Pro NT$999）；Freemium 主力前置 |
| 競品進入（ElliQ 日本版）| ElliQ 2026 日本版上市，若 2027-2028 進台並降價 | ElliQ 已在多市場定價競爭 | 台語語料庫護城河（ElliQ 無台語）+ 子女 dashboard 切換成本 |
| AI Brain 成本暴漲 | OpenAI 定價政策調整（歷史上 3 次調整 ✅）| OpenAI 2023-2025 定價多次變化 | LangChain 抽象層 + 開源比例 Year 1 逐步提升至 20-30% |

**Model 3 Freemium（入口 — 中優先監控）**

| 風險 | 說明 | 失敗案例 | 應對措施 |
|---|---|---|---|
| 轉換率 <1%（Freemium Leak）| 免費用戶不轉付費；97% 永遠免費是固有問題 | Lumosity 廣告誇大 + FTC $50M 和解後轉換下滑 ✅ | 嚴格限制免費版功能邊界：每日對話 ≤10 分鐘 + 無緊急通知 + 無子女摘要；核心痛點（安全焦慮）必須付費解鎖 |
| App 冷啟動（下載量不足）| Y1 目標 2,000-5,000 下載若未達 | Moxie（兒童 AI 機器人）2024 倒閉，App 引流失敗 ✅ | Facebook 親子照顧社群 + 失智症協會免費試用換口碑；若 90 天下載 <1,000 觸發 CAC 策略檢討 📋 |
| 自我蠶食 Option 1 | 長者完全接受 App，不升級硬體 | 純軟體陪伴 App 市場競爭（Replika 等）| 硬體版台語 ASR 品質明顯優於 App 版（麥克風陣列 vs 手機麥克風）= 自然升級動機 |

**Model 6 RaaS（Hedge — 中優先監控）**

| 風險 | 說明 | 失敗案例 | 應對措施 |
|---|---|---|---|
| 機構採購週期拉長（>12 月）| 長照產業 B2B 決策保守；照服員抗拒 ICT | Pepper 日本 500 機構但 Aldebaran 2025 破產 ✅（照服員抗拒 + 高成本）| B2C Option 1 先行；機構 BD 作為 Y1 H2 次要目標；若 W12 Gate 0 家 LOI 重評 RaaS 優先級 📋 |
| 長照 3.0 補貼名單申請延遲 | 2026/07 預計實施但申請細節未公開 🟡 | 台灣政府政策延遲歷史案例多 | W3 前接觸衛福部長照司確認申請流程；備案：無補貼情境下機構自付 NT$3,000 的可行性 |
| 照服員抗拒 | 「多一個系統就多一件事」職業安全感威脅 | Pepper 日本失敗主因之一 ✅ | 機構 onboarding pack（越南 / 印尼文）+ 30 分鐘培訓 + 「機器人做什麼 / 不做什麼」清單；強調「減輕夜班叫喚」正向利益 |

**Model 7 PMPM（Year 3+ — 低優先，長期監控）**

| 風險 | 說明 | 失敗案例 | 應對措施 |
|---|---|---|---|
| 台灣保險業接受度始終低 | 台灣商業壽險 vs 美國 Medicare Advantage 結構差異；保險業對 ICT 整合保守 🟡 | Mabu / Catalia Health 2025 商業狀態不明 + Kaiser 合作下滑 ✅ | 若 Y2 保險業者訪談無一有 MoU 意願，PMPM 策略 Kill；資源移 Option 1 規模化 |
| TFDA II 類認證時程超預期 | 認證時程 6-24 月廣泛區間，陪伴機器人無直接案例 🟡 | TFDA 截至 2023 核准 37 件 AI/ML 醫材（非陪伴類）✅ | W3 前聯繫 TFDA 業者輔導窗口確認功能分類；若認證路徑受阻，PMPM 願景降格為「5-7 年長遠」|
| PMPM 費率談判不如預期 | 台灣保險業 PMPM 費率可能低於 NT$600（vs 美國 Papa $10-20）| Papa 依賴 Medicare 政府補貼，台灣商業壽險付費意願不同 🟡 | 設計「保險業者付 NT$300 + 用戶自付 NT$499」混合付費路徑作為備案 🟡 |

---

## §8. 對 pricing-strategist 對齊驗證

**pricing-strategist 已選定定價**（wtp-payer.md §2 + lean-canvas.md §1 Block 6）：
- Tier 1 Starter：NT$799/月
- Tier 2 Pro：NT$1,290/月（主力 ARPU）
- Tier 3 Premium：Custom 年約（月均 NT$2,917-4,583）

**Revenue Model 對 Tier 對齊確認**：

| Tier | 對應 Revenue Model | 對應 Hypothesis | 對齊狀態 |
|---|---|---|---|
| Freemium 免費版 | Model 3 Freemium（入口）| Hyp D | ✅ Freemium = 入口，功能受限，解鎖觸發付費 |
| NT$299/月 App 付費版 | Model 2 Subscription（App 版）| Hyp D | ✅ App Subscription 輕量版 |
| Tier 1 NT$799/月 | Model 2 Subscription（B2C 主流）+ Model 6 RaaS 家庭端 | Hyp A + B | ✅ 兩個 Hypothesis 共享 Tier 1 定價 |
| Tier 2 NT$1,290/月 | Model 2 Subscription（B2C 主力 ARPU）| Hyp A（主軸）| ✅ 主力 ARR 貢獻 |
| Tier 3 Custom 年約 | Model 2 Subscription（高端）| Hyp A（Persona C）| ✅ Premium 年約鎖定高端用戶 |
| 機構 RaaS NT$3,000/台/月 | Model 6 RaaS（B2B2C）| Hyp B | ✅ 機構端另訂，不與 B2C Tier 衝突 |
| 保險 PMPM NT$600-1,000 | Model 7 PMPM | Hyp C（Year 3+）| ✅ 未來通路，不影響當前 Tier 設計 |

**不一致項目**：
- ❌ 無（各 Tier 均對應明確 Revenue Model，無衝突）
- ⚠️ 觀察：Tier 1 NT$799 同時被 Hyp A（B2C）和 Hyp B（B2B2C 家庭端）使用，需確保兩個通路的功能組合一致（目前設計相同）

---

## §9. Revenue Mix 設計

**Primary Model**：Subscription monthly（Tier 1/2/3 三層）+ Hardware One-time Sale
**Secondary Model**：Freemium App → Premium Subscription upsell + B2B2C RaaS（Year 1 H2+）

**Revenue Mix 佔比規劃**（中間情境）：

| 年份 | Primary（HW+Sub）| Secondary（Freemium）| Hedge（RaaS）| 延後（PMPM）|
|---|---|---|---|---|
| Y1 | 63% | 37% | 0% | 0% |
| Y2 | 33% | 50% | 17% | 0% |
| Y3 | 9% | 8% | 6% | 75% |

---

## §10. Watch-out 清單

| 風險類別 | 具體警告 | 監控指標 |
|---|---|---|
| **Subscription 月流失** | 長者棄用率首 2 週 30-50% 是行業已知風險；月流失 >8% = LTV:CAC 崩解 | Day-7 / Day-14 主動互動次數；月流失率（Monthly Churn Rate）|
| **AI Brain 成本不可預測** | OpenAI 定價歷史多次調整 + 失智長者重複問話可能導致 token 暴增 | 月均 token 用量上限 cap + 超額 cap 機制；開源 LLM 比例監控 |
| **Freemium Leak** | 3% 轉換率是行業標準假設，台灣長者 App 場景未驗證；若 <1% 代表免費用戶全部不轉化 | 90 天 App 版 Free → Paid 轉換率；若 <1% 觸發 Freemium 邊界緊縮策略 |
| **RaaS 機構冷啟動** | 機構採購週期 6-12 月；補貼名單申請不透明；照服員抗拒 ICT | W12 Gate：≥1 家機構 LOI；若 0 家，Y1 資源全移 Option 1 B2C |
| **PMPM 結構性障礙** | 台灣商業壽險 vs 美國 Medicare Advantage 結構差異是 Papa 模式外推的最大風險 | Y2 保險業者訪談結果；若無一有 MoU 意願，PMPM Kill，資源轉移 |
| **硬體孤兒化風險** | 公司規模早期，若資金斷鏈，硬體用戶服務中斷（Moxie 2024 倒閉案例）| 設計端側基礎功能（即使雲端中斷仍可問候）+ 資料導出 + 6 個月前通知機制 📋 |
| **競品定價衝擊** | ElliQ 2026 日本版若延伸台灣並推出中文版 / 降價 | 持續監測 ElliQ 東亞定價策略；護城河在台語（非中文）+ 子女 dashboard |
| **Advertising 邊界** | 任何情況下禁止對長者對話資料做廣告 / 資料變現，包括匿名後的健康統計資料 | PDPA DPIA 半年定期稽核；任何廣告提案觸發倫理委員會評審 |

---

## §11. Sources

**收入模型框架與數據**：

| Source 類型 | 引用位置 | 本案文件 |
|---|---|---|
| ElliQ $29.99-59/月訂閱 + $249.99 硬體 | wtp-payer.md §1.1 Framework A | [intuitionrobotics.com](https://www.intuitionrobotics.com) |
| GrandPad $59-65/月（含 4G + 硬體）| wtp-payer.md §1.1 | Consumer Cellular 收購案（2021）✅ |
| Papa PMPM $10-20（Medicare Advantage）| wtp-payer.md §3.5 | phase-0.5-deconstruction.md §1.3 |
| SoftBank Pepper RaaS $671/月（日本）| phase-0.5-deconstruction.md §5.2 B | Aldebaran 2025 破產 ✅ |
| Lumosity Freemium 1 億用戶 / 3% 轉換 | phase-0.5-deconstruction.md §2.3 | [lumosity.com](https://www.lumosity.com) |
| Oxford Caregiver WTP USD 70/月 | wtp-payer.md §1.3 | Oxford Academic, The Gerontologist, Vol.56, No.5, 2016 ✅ |
| 台灣家庭月照顧費 NT$22,000（2023）| wtp-payer.md §1.2 | 家庭照顧者關懷總會 2023 ✅ |
| 長照 3.0 智慧輔具補貼 NT$60K/3 年 | build-vs-buy.md §4.1 + problem-framing.md §1.5 | 衛福部長照司；行政院 2025/12/31 核定 ✅ |
| LLM API 成本 94.5% 降幅 | build-vs-buy.md §3.0 | TokenCost AI Price Index ✅ |
| BrainHQ 訂閱 USD 14/月 / Lumosity USD 11.99 | lean-canvas.md §2 Block 6 | [brainhq.com](https://www.brainhq.com) / [lumosity.com](https://www.lumosity.com) ✅ |
| PARO 機構買斷 USD 6,000 | phase-0.5-deconstruction.md §1.3 | AIST PARO 官方 ✅ |
| iRobot 2025 淨虧損 $145M | phase-0.5-deconstruction.md §3.3 | iRobot 2025 財報 ✅ |
| LOVOT JPY 198K-348K + 年訂閱 | phase-0.5-deconstruction.md §3.3 | Groove X 官方 ✅ |
| Sony Aibo $2,899 + $10-20/月 | phase-0.5-deconstruction.md §2.3 | Sony 官方 ✅ |
| Freemium 行業轉換率 1-5% | Model 3 評估 | ProfitWell SaaS Benchmarks；ChartMogul Freemium Report 🟡 |
| SaaS LTV:CAC 目標 ≥3:1 | decision-w4.md §6.1 | SaaS Capital / David Skok SaaS Metrics ✅ |
| PDPA §6 特種個資 + §21 跨境傳輸 | §7 Watch-out | 個人資料保護法 2025/12 修訂版 ✅ |

---

> **文件狀態**：✅ Phase 4 T31 Revenue Model 完成
> **下一步**：T32 Pricing Strategy 深化 + T33 Unit Economics（Tier 1/2/3 健康度 + 敏感度分析）
> **主管 Review 對外版本**：依 phase-0-answers.md §對外網頁紀律，對外渲染時剝離 ✅/🟡/📋 標籤 + 禁用「demo」字眼 + Plan-Only Mode 段不渲染
> **源文件校準**：所有數字均可追溯至 wtp-payer.md / decision-w4.md / lean-canvas.md / build-vs-buy.md，未引用不在上述文件中的數字
