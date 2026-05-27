# Pivot / Persevere / Kill / Scale Decision — W4 Gate #1
**Phase**: PM Flow v0.1 W4 Gate #1（Plan-Only Mode）
**Date**: 2026-05-27
**Source**: problem-framing.md + phase-0.5-deconstruction.md + phase-0-answers.md + persona.md + interview-guide.md + interview-plan.md + jtbd-day-in-life.md + wtp-payer.md + build-vs-buy.md + mvp-type.md + tech-architecture.md + feature-triage.md + safety-redlines.md
**Self-drive 聲明**: 本 Gate 為 main agent self-drive 決策框架，不需懷特個別 approve。後續 Phase 4-8 依此推進。唯一需懷特親自介入事項：T51 主管 review 規劃書（2026-05-27 18:00 確認）。

> **Plan-Only Mode 特殊校準**：本 Gate 不是「看真實 metric 是否達標」，而是「評估 Phase 0.5-3 desk-validated 輸入是否足夠支撐 4 hypothesis 各自可行性 + 給出 Phase 4-8 主軸」。所有評估結論標 ✅ desk-validated / 🟡 hypothesis / 📋 post-approval execution。

---

## §1. 4 Option 決策框架說明

本 Gate 嚴格執行 Eric Ries「Build-Measure-Learn」閉環之決策節點（Lean Startup, 2011）。4 個選項定義如下：

### Option A — Scale（放大資源）
某 hypothesis 訊號強到超出原始規劃，應增加資源加速推進。

**觸發條件（Plan-Only Mode 版本）**：
- Desk 證據強度分數 ≥ 4.2/5（8 維度加權）
- WTP 4 個 framework 交叉中位數落在規劃定價 ±15% 範圍內
- 技術可行性 desk-validated（≥3 source 佐證且無已知阻斷性風險）
- 通路可行性有具體落地路徑且時程可控
- 競品格局未在目標通路鎖死（台灣場景）

**Plan-Only 含義**：若某 hypothesis 觸發 Scale，Phase 4-8 應將更多開發資源傾斜，並在規劃書中以此為 headline story。

### Option B — Persevere（繼續、不變方向）
方向正確，desk 證據支持，但尚有部分假設需後續驗證或強化。

**觸發條件**：
- 多數維度達標，1-2 個維度有已知可處理的不確定性
- 核心痛點 desk 證據強（≥3 source，S0-S1 嚴重度有充分研究支撐）
- 競品空白已確認（台灣 B2C / B2B2C 場景無強護城河）
- 技術路徑可行（混合架構 BOM 90 天可落地）
- WTP 中位數保守估算仍支撐正毛利模型

**Plan-Only 含義**：Persevere 的 hypothesis 繼續列入 Phase 4-5 執行範圍，但需在 Phase 4 Business Model 中列出「待 Phase 2 訪談驗證項」。

### Option C — Pivot（改 hypothesis）
方向有根本性問題，需更換一個或多個 Lean Canvas block。**Pivot 必須指明哪個 hypothesis block 改，不得寫「全改」。**

**觸發條件**：
- 核心 WTP 假設被 desk 間接破壞（PPP 換算 + 同類案例顯示台灣市場系統性低估）
- 通路可行性有結構性阻礙（法規 / 競品護城河 / 文化因素）
- 技術可行性有阻斷性風險（90 天內無解）
- Customer Segment 與 Solution 有明顯 mismatch

**Plan-Only 含義**：Pivot 的 hypothesis 需在 Phase 4 提出替代方案。若 Pivot 涉及主軸 hypothesis，須更新 roadmap.md W4-W12 段。

### Option D — Kill（終止該 hypothesis）
Desk 證據已足夠說明此 hypothesis 在台灣市場 90 天 MVP 框架內不可行，繼續投入資源機會成本過高。

**觸發條件**：
- 技術可行性被 desk 破壞（BOM / 認證 / 法規任一阻斷，且無替代路徑）
- 通路完全不可及（90 天 MVP 內，談判週期 > 12 月）
- 已有 ≥2 個先行者在同一場景失敗且原因適用本案
- 主要付款人 WTP desk-estimated 無法覆蓋最低可行成本

**Kill 的已驗證 hypothesis 清單**：必須記錄，學習 Lean 每輪的已知積累，避免未來重複失敗。

---

## §2. 4 Hypothesis × 8 維度逐一評估

### 2.0 評分說明

每維度 1-5 分（相對評分，各 hypothesis 互相比較）+ 理由 + 來源引用。加權設計：
- 維度 1-2（痛點 + WTP）各 20%（商模存亡關鍵）
- 維度 3（通路）15%
- 維度 4-5（技術 + Safety）各 10%
- 維度 6（90 天落地）15%
- 維度 7-8（ARR + 主管說服力）各 5%

---

### Hypothesis A：B2C DTC「主動陪伴 + 安全網雙層機器人」

> **核心一句話**（phase-0.5-deconstruction.md §5.2）：賣給北漂子女 NT$15,000 桌上型小機器人 + NT$1,200/月訂閱，讓父母（70-80 歲、台北 / 嘉義 / 屏東獨居）獲得「有人在家陪 + 跌倒立刻通知子女」雙層心安。

| 維度 | 分數 | 理由 | 證據引用 |
|---|---|---|---|
| **1. 顧客痛點 desk 證據強度** | **5/5** | S0 緊急事件（跌倒延誤 4-12 小時）+ S1 孤獨認知退化（WHO 25% 老人社交孤立）+ S1 子女照顧者心理耗竭（台灣 90% 失智家屬失眠）三重痛點均 desk-validated ≥3 source；獨居 23.3% + 老老照顧 12.36% = 35.7% 高風險族群（149.4 萬人）具體量化；北漂子女遠距照顧焦慮結構性存在（三代同堂 15.48%→10.43%、家庭結構持續崩解）✅ | problem-framing.md §1.1 / §1.2；phase-0.5-deconstruction.md §1.1 / §1.2；persona.md §1.3-1.4 |
| **2. WTP desk 證據強度** | **4/5** | 四框架交叉中位數 NT$1,000-1,500/月（Framework A 國際競品 NT$900-1,800 + Framework B 家庭照顧費 5-6% NT$1,100-1,320 + Framework C Oxford 學術 PPP NT$763-1,068 + Framework D Persona ARPU NT$1,080-1,800）；Tier 2 Pro NT$1,290 落中位；Persona A 北漂 IT WTP 中位 NT$1,200-2,400；扣 1 分因台灣本土無直接 WTP 調查（仍為推算假設 🟡）| wtp-payer.md §1.1-1.5；phase-0.5-deconstruction.md §5.4 假設 1 |
| **3. 通路可行性 desk 證據** | **4/5** | DTC（官網 + momo / 蝦皮）台灣電商基礎設施成熟；Facebook 親子照顧社群 + Google SEO「獨居父母安心」精準觸及；銀髮博覽會 / 醫院出院衛教物理通路可及；長照 3.0 智慧輔具補貼 NT$60K/3 年（2026/07）降低實際 CAC 60-80%；Freemium App D 作為引流入口；唯一缺點是 CAC 初期 NT$5K-8K 偏高，需規模化才降 | build-vs-buy.md §4.1 通路路徑 A + D；problem-framing.md §1.5 趨勢 3；wtp-payer.md §3.2 |
| **4. 技術可行性** | **4/5** | 混合架構路徑 C 加權總分 4.00/5（最高）；90 天可行組合確認：Wizard-of-Oz 平板 × AI Brain 路徑 C × 通路路徑 A+D；GPT-4o-mini API 成本 NT$0.5-2/月/用戶（94.5% 降幅 ✅）；Jetson Orin Nano USD 249；BOM NT$18-22K（WoZ）→ NT$12K（ODM Year 1）；唯一未知：台語 ASR fine-tune（商業驗證尚缺）🟡 | build-vs-buy.md §2-§5；tech-architecture.md §0；phase-0.5-deconstruction.md §4.7 |
| **5. Safety 紅線可控性** | **4/5** | 10 條絕對紅線（N1-N10）+ 6 條條件紅線全有設計規格；Layer 2 rule-based 守門器強制執行 7 條 LLM 紅線；緊急偵測 C2 為條件紅線（false positive ≤1/週，需 Phase 5 驗證）；PDPA 合規路徑明確（三層資料分類 + 跨境同意書 + GCP asia-east1）；TFDA 90 天 App 形態免認證；扣 1 分因緊急偵測真實召回率仍為 🟡 | safety-redlines.md §1.1-1.2；tech-architecture.md §0（隱私邊界）；phase-0.5-deconstruction.md §5.4 假設 3 |
| **6. 90 天 MVP 落地可能性** | **5/5** | WoZ 平板 × 混合 AI Brain 已確認為唯一可行 90 天組合；App Store / Google Play 5-7 天審核；硬體 BOM 電商 1 週取得；Sprint 拆解 W1-W12 全路徑已規劃；主管 review 規劃書可於 W11-12 呈現可運作概念 ✅ | build-vs-buy.md §5.2；mvp-type.md §0 |
| **7. Year 1-3 ARR 上限** | **4/5** | Year 1 保守：NT$50-120 萬；Year 2：NT$288-720 萬（200-500 硬體用戶 × NT$1,200/月 × 12）；SAM 切片估 NT$23-33 億（北漂子女）；護城河（台語語料 + 切換成本 4 層）支撐長期 LTV；扣 1 分因 Year 1 ARR 偏低，規模化需靠 Year 2 ODM + 通路拓展 📋 | problem-framing.md §1.3-1.4；phase-0.5-deconstruction.md §5.2 A 的 Key Metrics |
| **8. 對主管說服力** | **5/5** | 台灣 B2C DTC 有完整邏輯鏈（市場 → 痛點 → WTP → 技術 → GTM）；差異化空間清晰（台語 + 子女 dashboard + B2C DTC 全台灣無強競品）；Hypothesis A 是向主管呈現「我們的主要商業模式」的核心載體；客觀中立（不延伸 ASUS 合作論述）✅ | phase-0-answers.md §Q4；problem-framing.md §4.4 |

**加權總分計算**：

| 維度 | 分數 | 權重 | 加權 |
|---|---|---|---|
| 1. 顧客痛點 | 5 | 20% | 1.00 |
| 2. WTP | 4 | 20% | 0.80 |
| 3. 通路 | 4 | 15% | 0.60 |
| 4. 技術 | 4 | 10% | 0.40 |
| 5. Safety | 4 | 10% | 0.40 |
| 6. 90 天落地 | 5 | 15% | 0.75 |
| 7. ARR 上限 | 4 | 5% | 0.20 |
| 8. 主管說服力 | 5 | 5% | 0.25 |
| **加權總分** | — | 100% | **4.40/5** |

**Hypothesis A W4 Gate 評估**：☑ **Persevere → 主軸 hypothesis**（評分 4.40/5，接近 Scale 門檻）

**評估理由**：痛點與技術可行性 desk-validated 最強；WTP 四框架交叉支撐；90 天 MVP 路徑唯一確認。主要未確認項：子女真實 WTP（🟡 4 框架推算）+ 長者接受度（🟡 desk 假設）+ 緊急偵測召回率（🟡 未在真實台灣家庭驗證）= 不具備 Scale 條件，Persevere 並列為主軸。

---

### Hypothesis B：B2B2C 長照機構通路「機構付硬體 + 家庭付軟體」

> **核心一句話**（phase-0.5-deconstruction.md §5.2）：日照中心 / 長照 A 級個管中心採購機器人（適用長照 3.0 補貼），免費佈建到個案家中；家庭子女自付 NT$799/月；機構獲得品牌差異化 + 補貼回收。

| 維度 | 分數 | 理由 | 證據引用 |
|---|---|---|---|
| **1. 顧客痛點 desk 證據強度** | **4/5** | 機構端：照服員人力短缺（外籍 21 萬 + 本籍 7.5 萬不足）+ 競爭差異化需求確認；家庭端：痛點同 Hypothesis A；機構 ICT 接受度：智齡科技已部署 1,200+ 機構 = 市場接受度基線 ✅；但機構「個案戶端服務工具」vs 既有「機構內部管理系統」結構不同，外推有限 🟡 | problem-framing.md §2.2.4 sub-role 1；phase-0.5-deconstruction.md §5.4 假設 4 |
| **2. WTP desk 證據強度** | **3/5** | 機構端 RaaS NT$3,000/台/月（3 年 NT$108K）對齊長照 3.0 補貼 NT$60K + 機構自付 NT$48K：邏輯合理但無台灣機構實際採購案例支撐 🟡；家庭端 NT$799/月（低於 A 的 NT$1,200）有 B persona WTP 中位 NT$600-900 支持；SoftBank Pepper RaaS $671/月 日本已有案例 ✅；主要風險：補貼名單申請週期不透明（假設 5）| wtp-payer.md §3.3；phase-0.5-deconstruction.md §5.2 B 的 Revenue Streams |
| **3. 通路可行性 desk 證據** | **3/5** | 長照 A 級個管中心 627 處 + 社區關懷據點 5,200+ 通路規模大；創新照顧 Ankecare 展會 / 長照產業協會已有現成接觸入口；但機構採購決策週期估 6-12 月（Pepper 日本 500 機構驗證長但台灣無直接案例 🟡）；長照 3.0 補貼名單 2026/07 才預計開放，90 天 MVP 內無法完成機構合約；通路 B 需 W3 啟動 BD 接觸作為平行推進 | build-vs-buy.md §4.1 通路路徑 B；problem-framing.md §2.2.4 |
| **4. 技術可行性** | **4/5** | 硬體與 AI Brain 同 Hypothesis A（路徑 C 混合架構）；額外需機構端後台 dashboard（多戶個案管理 / 員工排程整合）；對接智齡科技 / 宏碁智醫 API 技術上可行 🟡；機構後台 90 天 MVP 不交付（BD 接觸期），Year 1 H2 開發 📋 | build-vs-buy.md §5.1 Hypothesis B 組合 |
| **5. Safety 紅線可控性** | **4/5** | 同 Hypothesis A 的紅線設計均適用；機構場景額外風險：照服員強烈抗拒 ICT（Pepper 日本失敗主因之一）→ 需機構 onboarding pack + 多語言培訓（越南 / 印尼）；機構 NPS 下滑 → 不續約風險 | safety-redlines.md §1.1；problem-framing.md §2.2.3 sub-role 5 |
| **6. 90 天 MVP 落地可能性** | **2/5** | **機構採購週期 6-12 月是硬性障礙**；90 天 MVP 內唯一可行的是「啟動 BD 接觸（W3-W12）+ 取得 1-2 家 LOI」；無硬體交付、無付費個案戶；屬 Year 1 H1 執行目標 📋；Plan-Only 規劃書中呈現「Year 1 B2B2C 路徑規劃」非 90 天交付 | build-vs-buy.md §4.1；phase-0.5-deconstruction.md §5.4 假設 4 |
| **7. Year 1-3 ARR 上限** | **4/5** | Year 2：機構 3-5 家 × 20 台 = 60-100 台 × NT$3,000/月 = NT$216-360 萬/年；家庭端 NT$799/月 × 用戶數補充；Year 3+ 連鎖機構規模化潛力大（雙連 / 弘道 / 聖母 + 補貼加速）；長照 3.0 補貼入名單後機構採購誘因強；RWD 數據可轉入 TFDA + 健保談判 📋 | phase-0.5-deconstruction.md §5.2 B；problem-framing.md §1.4 Y2 |
| **8. 對主管說服力** | **4/5** | B2B2C 是向主管展示「有清晰 B2B 通路的商業模式」，對資源有限的 90 天 MVP 規劃書有加分效果；主管熟悉 B2B 採購邏輯；需客觀呈現「機構採購週期長 = Year 1 H2 才能有付費收入」不誇大 | phase-0-answers.md §Q4 |

**加權總分計算**：

| 維度 | 分數 | 權重 | 加權 |
|---|---|---|---|
| 1. 顧客痛點 | 4 | 20% | 0.80 |
| 2. WTP | 3 | 20% | 0.60 |
| 3. 通路 | 3 | 15% | 0.45 |
| 4. 技術 | 4 | 10% | 0.40 |
| 5. Safety | 4 | 10% | 0.40 |
| 6. 90 天落地 | 2 | 15% | 0.30 |
| 7. ARR 上限 | 4 | 5% | 0.20 |
| 8. 主管說服力 | 4 | 5% | 0.20 |
| **加權總分** | — | 100% | **3.35/5** |

**Hypothesis B W4 Gate 評估**：☑ **Persevere → 次主軸（風險 Hedge）**（評分 3.35/5）

**評估理由**：B2B2C 通路有市場邏輯支撐（長照 3.0 補貼 + 智齡科技基線），但 90 天落地可能性低是主要減分項。應作為「Year 1 H2 並行推進的第二通路」，90 天 MVP 階段僅執行 BD 接觸和 LOI 收集。Phase 4 Business Model 中 B2B2C 作為 Year 2 revenue stream 的 hedge 而非 90 天主軸。

---

### Hypothesis C：B2B 健保 / 保險 PMPM「Papa 模式台灣化」

> **核心一句話**（phase-0.5-deconstruction.md §5.2）：與台灣健康險業者合作，保戶「免費」獲得機器人；保險公司付 PMPM NT$600-1,000；保險獲得理賠率下降 + 客戶黏著 + 差異化保單。

| 維度 | 分數 | 理由 | 證據引用 |
|---|---|---|---|
| **1. 顧客痛點 desk 證據強度** | **3/5** | 保險業者痛點（長照險理賠率上升 + 缺差異化）是結構性的 ✅；但台灣保險業 vs 美國 Medicare Advantage 結構差異大：Papa 模式靠美國政府買單，台灣商業壽險長照險保戶付費意願 ≠ 政府保障 🟡；保戶痛點同 A，但路徑是透過保險不是直接採購 | problem-framing.md §2.2.4 sub-role 5；phase-0.5-deconstruction.md §5.2 C |
| **2. WTP desk 證據強度** | **2/5** | PMPM NT$600-1,000 對標 Papa USD 10-20（PPP 換算 NT$305-610）相差 2-3×；台灣保險業對 ICT/AI 整合歷史接受度低（desk 已知）🟡；無台灣保險業實際付費案例支撐；一家保險業者簽約 2 萬保戶 = MRR NT$1,200-2,000 萬 = 誘人但高度假設 🟡 | phase-0.5-deconstruction.md §5.2 C；wtp-payer.md §3.5 |
| **3. 通路可行性 desk 證據** | **1/5** | 保險 BD 談判週期 8-12 月（最短）= 90 天內完全不可能；台灣保險業 Innovation 部門存在但決策鏈長；需 TFDA II 類認證 + Pilot RWD 才能談合約（Year 3+ 前提）；Papa 美國案例直接外推有結構性障礙 | build-vs-buy.md §4.1 通路路徑 C；problem-framing.md §2.2.4 sub-role 5 |
| **4. 技術可行性** | **3/5** | 硬體同 A + 保險業者後台（保戶身分驗證 / 服務使用 log / 健康摘要）額外開發；技術上可行但需要 90 天 MVP 未涵蓋的功能；「現有功能集」可延伸支撐，但前提是先有 Pilot RWD 🟡 | build-vs-buy.md §5.1 Hypothesis C |
| **5. Safety 紅線可控性** | **3/5** | 保險場景需 TFDA II 類認證（Year 2-3）= 更嚴格的 Safety 門檻；90 天 MVP 安全設計無法滿足 TFDA 要求；跌倒偵測宣稱召回率 ≥80% 是 Hypothesis A UVP 組成，但對保險合約是「醫療功能宣稱」門檻 🟡 | safety-redlines.md §1.1 N1-N3；phase-0.5-deconstruction.md §5.4 假設 5 |
| **6. 90 天 MVP 落地可能性** | **1/5** | **完全不在 90 天範圍**；BD 接觸（W8-12）是市場認識期，無法在 90 天內達到任何收入或 LOI；TFDA II 類認證是必要前提，Year 2-3 才可能取得 | build-vs-buy.md §5.1 Hypothesis C；wtp-payer.md §3.5 |
| **7. Year 1-3 ARR 上限** | **5/5** | 最高 ARR 上限：一家保險業者 2 萬保戶 × NT$800 × 12 = ARR NT$1.9 億（Year 3+）；Papa 美國累積 2.6M 次陪伴服務 + 估值 $1.4B 有參考價值；但達成需 TFDA + Pilot RWD + 8-12 月談判 = 最長路徑 📋 | phase-0.5-deconstruction.md §5.2 C；wtp-payer.md §3.5 |
| **8. 對主管說服力** | **3/5** | 作為「Year 3+ 願景」故事向主管呈現有效（顯示長期商業想像空間）；但若定位為「主軸」則規劃書顯得不切實際；用於規劃書中「長期商業模式演進」章節 | phase-0-answers.md §Q4 |

**加權總分計算**：

| 維度 | 分數 | 權重 | 加權 |
|---|---|---|---|
| 1. 顧客痛點 | 3 | 20% | 0.60 |
| 2. WTP | 2 | 20% | 0.40 |
| 3. 通路 | 1 | 15% | 0.15 |
| 4. 技術 | 3 | 10% | 0.30 |
| 5. Safety | 3 | 10% | 0.30 |
| 6. 90 天落地 | 1 | 15% | 0.15 |
| 7. ARR 上限 | 5 | 5% | 0.25 |
| 8. 主管說服力 | 3 | 5% | 0.15 |
| **加權總分** | — | 100% | **2.30/5** |

**Hypothesis C W4 Gate 評估**：☑ **延後 Year 3+**（評分 2.30/5）

**評估理由**：ARR 上限最高，但通路和 90 天落地可能性是雙低點（各 1/5）。台灣保險業結構性阻礙（vs 美國 Medicare Advantage 直接外推失效）+ TFDA II 類認證前提 = 明確排除 90 天 + Year 1 執行範圍。**不 Kill 的原因**：痛點邏輯正確、Papa 商模國際驗證，值得作為 Year 3+ 長期願景，Phase 7 Pitch Deck 中以 1-2 頁呈現 ARR 想象空間。

---

### Hypothesis D：Freemium App + 後期硬體 upsell

> **核心一句話**（phase-0.5-deconstruction.md §5.2）：先發 iPad / Android 平板 App 純軟體 freemium，月費 NT$299 解鎖，驗證 PMF 後 upsell 硬體機器人 NT$15K。

| 維度 | 分數 | 理由 | 證據引用 |
|---|---|---|---|
| **1. 顧客痛點 desk 證據強度** | **4/5** | 痛點與 Hypothesis A 相同（同一 Customer Segment），但 D 聚焦「想試但不敢一次付 NT$15K」的中低 WTP 子女；AI companion apps 2025 預估 $120M（elder care 佔 29.4%）✅；但 Freemium 是降低進入門檻的商模，不是新痛點 | phase-0.5-deconstruction.md §5.2 D；problem-framing.md §1.1 |
| **2. WTP desk 證據強度** | **3/5** | Freemium → Paid 轉換率 3% 為行業標準但台灣長者 App 場景未驗證 🟡；NT$299/月 對比 Lumosity $11.99/月 低，增加市場接受度；對標 Replika 等 AI 陪伴 App 商模存在（$120M 市場有 desk evidence）；但最終付費用戶池小（需 2,000-5,000 下載才達 60-250 付費用戶）| wtp-payer.md §1.1；phase-0.5-deconstruction.md §5.2 D |
| **3. 通路可行性 desk 證據** | **5/5** | App Store / Google Play = 最低門檻通路；Facebook 銀髮社群 + KOL（《銀光經濟》《老媽五十啟示錄》）= 精準觸及；失智症協會 / 老人福利推動聯盟免費試用換口碑 = 低成本建立信任；CAC NT$300-800/付費用戶（比 A 的 NT$5K-8K 低 10×）；90 天最快 GTM 通路 ✅ | build-vs-buy.md §4.1 通路路徑 D；phase-0.5-deconstruction.md §5.2 D |
| **4. 技術可行性** | **5/5** | 純 App 開發 = 最低技術風險（iOS + Android + backend NT$300-500 萬）；無硬體 BOM / 無 BSMI 認證；AI Brain 路徑 C 混合架構直接適用；App 形態雲端成本 NT$100-200/月/用戶（比硬體形態低）；App Store / Google Play 審核 5-7 天 ✅ | build-vs-buy.md §2.2.1 + §3.2.3；mvp-type.md §2 |
| **5. Safety 紅線可控性** | **5/5** | App 形態完全避開 BSMI + TFDA 硬體認證風險；LLM guardrail 同 A；緊急偵測功能在 Freemium 免費版不開放（付費後才有）= 降低假陽性風險；無實體機器人 = 無 CNS 15630 安全顧慮 ✅ | safety-redlines.md §1.3 P1；build-vs-buy.md §2.2.1 認證維度 5/5 |
| **6. 90 天 MVP 落地可能性** | **5/5** | build-vs-buy.md §5.2 明確：通路路徑 D「W5 即時開」= 90 天 MVP 最快 GTM；App 設計 W1-4 + 上架 W5 + 初始推廣 W5-8；目標 90 天 2,000-5,000 下載 + 100-200 付費用戶；完全可在 Plan-Only 規劃書範圍內呈現 📋 | build-vs-buy.md §4.2；mvp-type.md §0 Layer 1 |
| **7. Year 1-3 ARR 上限** | **2/5** | **ARR 規模上限偏低**：Year 2 付費用戶 1,000-3,000 × NT$2,990/年（年費）= ARR NT$299-897 萬；硬體 upsell 15% = 300 台 × NT$15K + NT$1,200/月 = 額外 NT$479 萬/年；合計約 NT$778 萬-NT$1,376 萬（Year 2）；主要問題：純 App 難建立護城河（切換成本低）、Freemium 97% 免費用戶永遠不付費 | phase-0.5-deconstruction.md §5.2 D Key Metrics；problem-framing.md §1.4 |
| **8. 對主管說服力** | **4/5** | App first → 硬體 upsell 路徑是「最低風險驗證 PMF 後再投資」的邏輯清晰；對技術背景主管有說服力；但 ARR 規模小，主管可能認為「缺乏長期商業模式支撐」；需搭配 Hypothesis A 的長期路徑使用 | phase-0-answers.md §Q4 |

**加權總分計算**：

| 維度 | 分數 | 權重 | 加權 |
|---|---|---|---|
| 1. 顧客痛點 | 4 | 20% | 0.80 |
| 2. WTP | 3 | 20% | 0.60 |
| 3. 通路 | 5 | 15% | 0.75 |
| 4. 技術 | 5 | 10% | 0.50 |
| 5. Safety | 5 | 10% | 0.50 |
| 6. 90 天落地 | 5 | 15% | 0.75 |
| 7. ARR 上限 | 2 | 5% | 0.10 |
| 8. 主管說服力 | 4 | 5% | 0.20 |
| **加權總分** | — | 100% | **4.20/5** |

**Hypothesis D W4 Gate 評估**：☑ **Persevere → 主軸補充（入口 + PMF 試水）**（評分 4.20/5）

**評估理由**：技術可行性 + 90 天落地 + Safety 三項滿分，是 90 天 MVP 最快 GTM 路徑。與 Hypothesis A 互補（D 是軟體入口，A 是硬體主軸），兩者非互斥。主要缺點是 ARR 規模上限低，不能作為唯一商業模式，但作為「先建用戶池 → 硬體 upsell」過渡路徑有明確邏輯。

---

### §2.5 4 Hypothesis 評分總覽

| Hypothesis | 加權總分 | W4 決策 | 角色定位 |
|---|---|---|---|
| **A B2C DTC** | **4.40/5** | **Persevere → 主軸** | Year 1 主要商業模式 + Phase 4 Business Model 主題 |
| **D Freemium App** | **4.20/5** | **Persevere → 補充入口** | 90 天最快 GTM + Hypothesis A 的軟體引流通路 |
| **B B2B2C 機構** | **3.35/5** | **Persevere → 次主軸** | Year 1 H2 第二通路 BD + Year 2 ARR hedge |
| **C 保險 PMPM** | **2.30/5** | **延後 Year 3+** | 長期願景，非 90 天/Year 1 執行範圍 |

---

## §3. 5 個關鍵假設 desk-validated 程度 Review

> 來源：phase-0.5-deconstruction.md §5.4 五個假設 + wtp-payer.md + build-vs-buy.md + tech-architecture.md

---

### 假設 1：子女願意每月付 NT$1,000-1,500 為父母的「主動陪伴 + 緊急安全」雙層服務

**Desk 證據來源**：
- Framework A（國際競品）：ElliQ NT$914-1,800 / GrandPad NT$1,800-1,983（含硬體攤提）→ 台灣含緊急通知對標 NT$900-1,800 🟡
- Framework B（家庭照顧費比例）：全台中位數家庭 NT$22,000 × 5-6% = NT$1,100-1,320 🟡；數據基礎：家庭照顧者關懷總會 2023 ✅
- Framework C（Oxford 學術 PPP）：監測 + AI 協助 USD 70 × PPP 0.5 = NT$1,068 ✅ 2016 年研究（台灣 PPP 世界銀行 2023 ✅）
- Framework D（Persona ARPU 比率）：加權中位 NT$1,080-1,800 🟡（來自 persona.md §1.6 + wtp-payer.md §1.4）

**整合中位數**：NT$1,000-1,500/月（四框架交叉）

**Desk-validated 程度**：🟡 **hypothesis（需 Phase 2 訪談驗證才能升 ✅）**

**理由**：四個框架均為間接推算，無台灣本土直接 WTP 調查；Framework C 是 2016 年美國研究（AI 主動陪伴的現代情感溢價未計入，可能低估）；「子女愧疚感 × 安全焦慮 × AI 信任度」三變數無 desk data；配偶否決率（估 20-30%）無量化驗證。

**對 W4 Gate 的含義**：WTP 假設未被 desk 破壞（四框架一致方向，中位數在合理範圍）= 不觸發 Kill 或 Pivot；但因缺乏直接驗證，不能宣稱「已驗證 WTP」= Persevere 而非 Scale。

📋 **post-approval Phase 2 必補項**：Mom Test 5 題（wtp-payer.md §5.1）× ≥8 位北漂子女訪談；量化通過標準：≥4/8 受訪者主動說出 NT$1,200 可接受或具體更高/更低數字。

---

### 假設 2：長者父母（70-82 歲）會主動與機器人互動，且 4 週內不會放棄

**Desk 證據來源**：
- ElliQ 美國：95% 用戶減少孤獨感 + 30 次/天主動互動 ✅（但：英文母語 + OFA 篩選過的科技接受度族群）
- 台灣 65+ 上網率 50.36%（LINE 基礎數位接受度）✅
- 棄用率 30-50% 首 2 週（行業已知基準）✅
- persona.md 三位長者 vignette：秀珍阿嬤「有點想試」🟡、德仁阿公「台語就可能回應」🟡、義雄阿公「需要等他說話」🟡
- jtbd-day-in-life.md §7.1：長者 JTBD「不孤單 + 被記得」與 Hypothesis A 功能對應 🟡

**Desk-validated 程度**：🟡 **hypothesis（核心 PMF 訊號，需 Phase 5 Wizard-of-Oz 驗證）**

**理由**：ElliQ 驗證在美國特定族群，台灣本土無對等規模 pilot；長者前 3 天體驗不佳則拒絕態度固化且難逆轉（problem-framing.md §2.2.3）= 設計風險極高；台語接受度是關鍵開關但台語 ASR fine-tune 90 天 MVP 尚未完整。

**對 W4 Gate 的含義**：不觸發 Kill（ElliQ 同類已有陽性驗證 + 長者 JTBD 方向正確），但需謹慎設計 onboarding + 台語第一句話體驗（Day-1 到 Day-3 是關鍵）。

📋 **post-approval Phase 5 必補項**：Wizard-of-Oz pilot 首 4 週日均互動 ≥10 次 + 第 4 週末仍主動使用；量化通過標準：≥5/8 長者訪談「應該會試試」/ ≥1 家機構 LOI。

---

### 假設 3：非影像式緊急偵測（跌倒 / 異常）在台灣家庭真實環境下可達 ≥80% 召回率 + ≤1/週 false positive

**Desk 證據來源**：
- 學術研究：fall detection 測試環境準確率 ≥98%（AUC）✅（但真實家庭環境顯著下降，無精確數字）
- 台灣 PDPA + 長者文化均拒絕 24/7 影像收錄（非影像式是硬性需求）✅
- 非影像式（聲音 + 互動異常 + 紅外線 + 環境感測）綜合演算法：**尚無 desk 可參考的台灣家庭驗證數據** 🟡
- tech-architecture.md §0：Layer 3 台語 ASR + 異常偵測初判部分「端側 + 本地」= 技術路徑設計已有規格，但準確率待測 🟡

**Desk-validated 程度**：🟡 **hypothesis（技術路徑可行性 desk 支持，但台灣真實家庭準確率是最大未知）**

**理由**：學術 ≥98% 是受控環境數字，真實家庭（地毯 / 家具 / 衣物遮蔽 / 偏鄉光線）顯著下降；safety-redlines.md §1.2 條件紅線 C2 已明確：「不宣稱召回率數字（P1 Plan-Only 紅線）」；若 false positive > 1/週，子女 NPS 崩潰是最高風險。

**對 W4 Gate 的含義**：不觸發 Kill（技術路徑可行 + 硬性需求存在），但 UVP「安全網雙層」必須在 Phase 5 Pilot 中加入「假緊急事件演習」驗證；規劃書對主管呈現時統一標示「召回率待 Phase 5 Pilot 驗證」（Plan-Only 紅線 P1）。

📋 **post-approval Phase 5 必補項**：與工研院智齡團隊 / 智齡科技 BD 技術評估；Pilot 中 ≥3 假事件演習達 ≥80% 召回率。

---

### 假設 4：長照機構（日照中心 / A 級個管）願意採購 AI 機器人作為差異化 + 個案戶服務工具

**Desk 證據來源**：
- 智齡科技已部署 1,200+ 機構 = 機構接受 ICT 系統的天花板已被驗證 ✅（但結構不同：機構內部管理 vs 個案戶端服務）
- 長照 3.0 智慧輔具補貼 NT$60K / 3 年（2026/07）創造採購誘因 ✅
- Pepper 日本 500 家老人照護機構 vs 美國 ElliQ 政府單位 = 外推有限 🟡
- 機構採購決策週期：Pepper 日本 + 台灣 ICT 採購均顯示 6-12 月是行業基準 🟡（無台灣 AI 陪伴機器人直接案例）
- 照服員抗拒 ICT（Pepper 日本失敗主因之一）= 已知風險 ✅

**Desk-validated 程度**：🟡 **hypothesis（長照補貼誘因 desk-validated，機構採購意願和時程需訪談驗證）**

**理由**：智齡科技只驗證了「機構後台管理系統」接受度，與「個案戶端 AI 機器人」是不同採購決策；補貼名單申請流程未公開明細；照服員雙重角色（實施者 + 潛在 Detractor）是已知設計挑戰。

**對 W4 Gate 的含義**：支持 Hypothesis B Persevere（有合理的市場邏輯），但 90 天 MVP 不能以機構交付為 KPI；Phase 2 訪談需在 W3 啟動 3-5 家機構深度訪談。

📋 **post-approval Phase 2 必補項**：≥2/5 機構主管訪談中主動討論採購可能性 + 預算路徑；≥1 家機構提供 LOI。

---

### 假設 5：台灣本土法規（PDPA + TFDA + 長照認證）的合規時程在 12-18 月可達 MVP 落地

**Desk 證據來源**：
- TFDA 截至 2023 已核准 37 件國產 AI/ML 醫療器材 = 路徑存在 ✅
- PDPA 2025/12 修訂版：跨境傳輸加嚴 + 同意機制 + AI 基本法 2025/12 ✅
- AI 基本法（草案 / 2025/12 上路）+ PDPC 2025/8 成立（新主管機關）✅
- BSMI 路徑：App 形態完全免認證（CNS 15630 只適用有自主移動的機器人）✅
- TFDA 認證時程：6-24 月為廣泛區間（無陪伴機器人直接案例）🟡
- 長照 3.0 補貼名單申請流程：未公開明細 🟡
- tech-architecture.md §0：隱私邊界三句話結論 = 90 天 App 形態 PDPA 合規路徑已有設計規格 ✅

**Desk-validated 程度**：🟡 **hypothesis（BSMI 免認證已確認 ✅；TFDA 時程和補貼申請流程需 W3 前聯繫確認）**，但 90 天 App 形態規避了最高風險項，整體可行性強。

**對 W4 Gate 的含義**：90 天 MVP App 形態 PDPA + BSMI 合規路徑已設計（不觸發 Kill）；TFDA II 類認證 + 長照補貼名單申請為 Year 2-3 milestone，不阻礙 90 天落地；Plan-Only 規劃書中需呈現「認證路徑規劃」而非「已認證」。

📋 **post-approval Phase 2 必補項**：W3 前聯繫 TFDA 業者輔導窗口確認功能分類 + 理慈 / 萬國 / 普華完成 DPIA + 確認長照 3.0 補貼名單申請時程。

---

### §3.6 假設驗證狀態總覽

| 假設 | 狀態 | 對主軸的影響 | 後續驗證時機 |
|---|---|---|---|
| 假設 1：WTP NT$1,000-1,500/月 | 🟡 四框架推算一致，方向未被破壞 | 高（商模存亡）| 📋 Phase 2 Mom Test × 8 人訪談 |
| 假設 2：長者 70-82 主動互動 4 週不棄 | 🟡 ElliQ 正向驗證但族群不同 | 高（PMF 核心）| 📋 Phase 5 Wizard-of-Oz pilot |
| 假設 3：非影像式緊急偵測 ≥80% 召回 | 🟡 技術路徑可行，真實家庭準確率未知 | 中（UVP 強弱）| 📋 Phase 5 ≥3 次假事件演習 |
| 假設 4：機構願採購 | 🟡 補貼誘因有邏輯，採購週期長 | 中（Year 2 ARR）| 📋 Phase 2 機構訪談 ≥2 家 LOI |
| 假設 5：法規 12-18 月可落地 | 🟡 App 形態 90 天免認證已確認，TFDA 時程待確認 | 中低（Year 2+ 才觸）| 📋 Phase 2 W3 前法規顧問諮詢 |

---

## §4. W4 Gate 整合決策（Self-Drive 主軸推薦）

### §4.1 主軸 Hypothesis（一個，明確）

**主軸：Hypothesis A — B2C DTC「主動陪伴 + 安全網雙層」**

**決策依據**：加權評分 4.40/5（最高）+ 痛點 desk 證據最強（S0+S1+S1 三重）+ 技術可行性最高（WoZ × 混合架構 90 天確認）+ WTP 四框架中位數落在定價區間內 + 通路 DTC + Freemium 引流有清晰路徑 + 差異化護城河（台語 + 子女 dashboard + 切換成本 4 層）台灣 B2C 場景無強競品。

**Phase 4 Business Model 主軸**：Hypothesis A 的 Lean Canvas v1（9 block 精化）+ Unit Economics（Tier 1 NT$799 / Tier 2 NT$1,290 / Tier 3 Custom）+ CAC:LTV 健康度分析 + 補貼路徑整合（長照 3.0 NT$60K/3 年）。

### §4.2 次主軸 / 風險 Hedge

**次主軸 1：Hypothesis D — Freemium App（90 天最快 GTM 入口）**

與 Hypothesis A 互補，不互斥：App first → 用戶池積累 → 硬體 upsell。評分 4.20/5，技術 + Safety + 90 天落地三項滿分。Phase 5 先跑 Functional MVP（App），建立 Day-7 retention 基線後再評估硬體形態。

**次主軸 2（Year 1 H2 並行）：Hypothesis B — B2B2C 機構通路**

作為 Year 2 ARR 的風險 Hedge。90 天 MVP 只執行 BD 接觸（W3-W12），不計入 KPI。若 Phase 2 機構訪談顯示 2 家以上 LOI，在 W8 Gate #2 考慮升為主軸。

### §4.3 延後 Year 3+（非 Kill）

**Hypothesis C — 保險 PMPM**

評分 2.30/5，90 天落地可能性 1/5，通路 1/5。明確排除 90 天 + Year 1 執行範圍。

**延後原因**：台灣保險業結構性阻礙（vs 美國 Medicare Advantage 外推失效）+ TFDA II 類認證前提（Year 2-3）+ 談判週期 8-12 月（最短）。不 Kill 原因：痛點邏輯正確 + Papa 國際驗證 + ARR 上限最高（一家保險業者 2 萬保戶 = NT$1.9 億/年）。

**在 Phase 7 Pitch Deck 中使用方式**：一頁「Year 3+ 商業演進願景」，呈現保險 PMPM 路徑作為規劃書的長期 ARR 故事，提升主管對市場潛力的評分。

### §4.4 無 Kill 的理由

四個 hypothesis 均不達 Kill 門檻：
- C 雖評分低，但 ARR 上限高 + 痛點邏輯正確 → 延後而非 Kill
- A/B/D 均在 Persevere 或以上 → 不觸發 Kill

**Kill 會觸發條件**（供 W8 / W12 Gate 參考）：
- W8：Hypothesis A Day-7 retention < 20%（測試階段），且訪談顯示問題非技術而是根本痛點不存在
- W8：Hypothesis D Freemium → Paid 轉換率 < 0.5%（遠低於行業標準 3%），且訪談無 salvage signal
- W12：Hypothesis B 機構訪談 0 家 LOI + 主動表達拒絕理由是「不需要機器人陪伴」（非採購週期問題）

---

## §5. Pivot 路徑準備

> 來源：phase-0.5-deconstruction.md §5.4 各假設 Pivot 路徑；以下為 W4 後的 Plan B + Plan C 設計。

### §5.1 若假設 1 被破壞（WTP < 預期）

**觸發條件**：Phase 2 Mom Test 顯示北漂子女穩定 WTP 主流 < NT$600/月（非觸發峰值）

**Plan B Pivot**：
- **改動的 Hypothesis Block**：**Revenue Streams** + **Customer Segment**
- **Pivot 方向**：
  - WTP < NT$600/月：Pivot 到 Hypothesis B（B2B2C 機構通路，個案戶月付 NT$799 + 機構分擔），降低家庭付費壓力；同時確認機構採購 WTP（機構端 NT$3,000/月/台）是否成立
  - WTP < NT$300/月：Pivot 到 Hypothesis D（Freemium App 純軟體 NT$299 為主），降低進入門檻，upsell 時機後移至 Year 2

**Pivot 不改的 Block**：Problem（痛點不變）/ Solution（功能不變）/ Channel（通路不變）/ Unfair Advantage（護城河不變）

**監控指標**：Phase 2 訪談中 ≥4/8 受訪者說出「NT$1,200 以上也願意付」= 假設成立；< 2/8 = 觸發 Pivot 討論

### §5.2 若假設 2 被破壞（長者抗拒）

**觸發條件**：Phase 5 Pilot 首 4 週日均互動 < 5 次（預設 ≥10 次），且 40%+ 長者在第 2 週主動要求停用

**Plan B Pivot**：
- **改動的 Hypothesis Block**：**Solution** + **Channels**（不改 Customer Segment 或 Problem）
- **Pivot 方向（加強子女遠距引導 layer）**：
  - 每天子女 push 訊息 → 機器人說「OO 兒子說...」，降低長者直接與 AI 互動的心理門檻
  - 從「長者主動使用」轉向「子女主導互動的 proxy 模型」（子女說話，機器人轉達）
  - 降低 AI 自主性，提高子女介入控制感（解決「被機器人陪伴的監視感」）

**Plan C Pivot（更激進）**：若 Plan B 也失敗（4 週後 ≥80% 互動驟降）：Pivot 至 Concept 1+2 為主軸（純陪伴 App + 子女主動引導），降低 Concept 3+4 硬體 / AI Brain 比重；聚焦 Hypothesis D Freemium App 作為唯一路徑，硬體推後 Year 2。

### §5.3 若假設 3 被破壞（緊急偵測準確率不達標）

**觸發條件**：Phase 5 ≥3 假事件演習顯示召回率 < 60%，或 false positive > 3/週（子女反映煩擾）

**Plan B Pivot**：
- **改動的 Hypothesis Block**：**Unique Value Proposition**（UVP 「安全網雙層」弱化）+ **Solution**
- **Pivot 方向**：
  - 移除「主動 AI 緊急偵測」宣稱，改為「主動 / 被動雙模式」：緊急按鈕（被動）+ AI 輔助偵測（輔助，不宣稱主動）
  - UVP 重新聚焦「主動陪伴 + 子女 dashboard」（移除「安全網」作為 headline），改以「讓父母不孤單 + 讓子女知道父母今天過得怎樣」重新定位
  - 緊急通知降格為「用藥提醒 + 互動異常 LINE 推播」（不宣稱跌倒偵測）

**Pivot 不改的 Block**：Customer Segment / Problem / Channel / Revenue Streams

### §5.4 若假設 4 被破壞（機構不願採購）

**觸發條件**：Phase 2 機構訪談 0 家提及採購可能性，且主動表達「不是預算問題 / 是根本不需要」

**Plan B Pivot（Hypothesis B 改動）**：
- **改動的 Hypothesis Block**：**Channel**（從機構通路移出）
- **Pivot 方向**：Hypothesis B 降格為「機構場域版本」（日照中心放 2-3 台機器人展示 + 個案戶 App 看父母在中心狀況），不直接進入家庭；Channel 回歸 Hypothesis A DTC 主軸
- Year 2 B2B2C 通路改為「連鎖藥妝 / 電信門市」（非長照機構）

### §5.5 若假設 5 被破壞（法規時程超預期）

**觸發條件**：W3 前法規顧問諮詢顯示 BSMI 路徑也需 ≥9 月，或 PDPA 要求伺服器必在台灣且禁用境外 LLM API

**Plan B Pivot**：
- BSMI 阻礙：Hypothesis D（純 App 形態）提前為主軸，硬體完全推後 Year 2；90 天 MVP = 100% App
- PDPA 阻礙：AI Brain 路徑 C 中的 Layer 1（GPT-4o）改為 GCP 台灣節點部署 + 開源 Llama-3/Qwen 補充，或改採台智雲 FFM 台灣本地部署

---

## §6. 對 Phase 4-8 的明確輸入

### §6.1 Phase 4 Business Model 主軸

**輸入**：Hypothesis A B2C DTC 的 Lean Canvas v1 精化

重點任務：
1. **Lean Canvas v1**：以 Phase 0.5 §5.2 Hypothesis A 9-block 為基礎，Phase 4 精化：
   - Problem：確認三痛點優先序（S0 緊急 > S1 孤獨 > S1 子女耗竭）
   - Customer Segment：聚焦 Persona A 北漂 IT 35-45（Primary ICP）+ 觸發事件（父母跌倒 / 出院 / 剛搬離）
   - Revenue Streams：Tier 1 NT$799 / Tier 2 NT$1,290 / Tier 3 Custom（年約）+ 硬體 NT$15K-19.9K 一次性
   - CAC：初期 NT$5K-8K（DTC + 銀髮博覽會）→ Year 2 長照補貼後 NT$2K-3K（補貼名單降低 CAC 60-80%）

2. **Unit Economics（Phase 4 T32）**：
   - LTV = ARPU NT$1,290 × 月留存率 95% × 預期訂閱月數（估 18-24 月）= LTV NT$23,220-29,340（若 24 個月留存）
   - LTV:CAC = NT$23,220 / NT$6,500（初期均值）= **3.57:1**（Year 1 目標 ≥3:1 ✅）
   - 毛利：Tier 2 月費 NT$1,290 - AI Brain 成本 NT$100-300 = 毛利 NT$990-1,190/月（毛利率 76-92%）
   - 硬體：NT$15,000 售價 - BOM NT$12,000（ODM Year 1）= 硬體毛利 NT$3,000（20%），Year 2 量產後升 30%+

3. **Hypothesis D Freemium 補充 Lean Canvas**（輔）：
   - Revenue Streams：Freemium → NT$299/月付費（3% 轉換）+ 硬體 upsell NT$15K（付費用戶 15%）
   - CAC：NT$300-800/付費用戶（vs A 的 NT$5K-8K，低 10×）
   - 主要功能：Freemium App 先建用戶池 2,000-5,000 下載 → 減少 Hypothesis A 硬體初期冷啟動風險

4. **Hypothesis B 輔助 Canvas**（Year 2 路徑）：機構 RaaS + 家庭端雙層收入，Phase 4 只規劃 BD 路徑和機構後台 features，不建完整 Unit Econ（機構採購週期太長）。

### §6.2 Phase 5 Prototype Build 規格

**輸入**：Wizard-of-Oz 規格書展示的核心 features（對映 feature-triage.md Must-have 8 個）

**Must 功能（Phase 5 Sprint 1-2 完成）**：
1. **F02 中文語音對話**：Layer 1 GPT-4o-mini API + Layer 3 Google Cloud STT/TTS；流暢多輪對話 ≥5 輪不失憶
2. **F01 每日主動問候**：固定時段（06:30 / 18:00）+ 台語問候基礎版；長者不需先開口
3. **F21 長者主動控制（停止 / 暫停）**：語音指令「不要再提醒我」→ AI 暫停 24 小時；子女不得即時覆蓋
4. **F13 子女遠端 onboarding ≤10 分鐘**：引導 ≤5 步；父母端「叫名字就好」
5. **F20 超大字 / 高對比 UI**：字體 ≥24pt；觸控按鈕大（≥44pt）；高對比色（WCAG AA）
6. **F10 子女緊急通知推播 ≤5 分鐘**：LINE + App 雙通路；Layer 2 rule-based 觸發 + 3 層確認
7. **F22 隱私資料刪除 / 記憶導出**：取消訂閱後 30 天硬刪；長者 / 家屬可匯出 JSON 記憶包
8. **F11 服藥提醒（朋友語氣）**：「OO，你今天的血壓藥記得吃喔」（非機器式清單語氣）

**Should 功能（Sprint 3-4，視 Sprint 1-2 進度）**：
- F03 台語語音識別（基礎問候 + 常用詞）
- F12 子女每日 AI 摘要推播
- F04 個人記憶 AI（偏好 + 家庭脈絡 RAG）
- F05 節日 / 節氣主動話題

### §6.3 Phase 6 Pilot 規劃

**輸入**：招募哪 N 戶 / 哪些機構（📋 post-approval）

**家庭端目標**：
- **招募目標**：10-20 戶 pilot 家庭（Hypothesis A B2C 主軸）
- **招募標準**：北漂子女 35-50 歲 + 父母 70-82 歲異縣市獨居 / 兩老同住 + 子女月收 NT$50K+ + 無 24/7 外籍看護
- **地域分布**：子女台北 / 新竹；父母嘉義 / 南投 / 屏東（老化指數最高 3 縣市）
- **Persona 分布**：Persona A 10 戶 / Persona B 5 戶 / Persona C 5 戶（多元驗證）
- **時程**：4 週 closed beta（Wizard-of-Oz 形態）
- **量測 KPI**：Sean Ellis ≥40% / Day-7 retention / NPS ≥40（子女端）/ 月流失率 ≤5%
- **招募通路（📋）**：Facebook 親子照顧社群廣告 + 銀髮博覽會現場招募 + 失智症協會合作免費試用

**機構端目標（Hypothesis B BD 並行）**：
- **招募目標**：3-5 家不同類型機構（連鎖型 1 家 + 區域中型日照 1-2 家 + 偏鄉社區關懷據點 1 家）
- **接觸時機**：W3 啟動第一輪電話 / email
- **W12 Gate KPI**：≥1 家機構提供 LOI（Letter of Intent）願意 Phase 5 共同 pilot

**保險業者（Hypothesis C，BD 準備期）**：
- **W8-12 接觸**：找國泰 / 富邦 / 南山 Innovation / 數位轉型辦公室（非簽約期望）
- **目標**：確認決策層 + 了解合規路徑（非商業洽談）

### §6.4 Phase 7 Pitch Prep

**主軸故事**：
1. **Opening**：台灣 2025/12 正式進入超高齡社會，35.7% 長者孤獨高風險，同時 3,500 萬+子女的照顧焦慮是未被解決的隱形痛點
2. **Problem**：跌倒延誤搶救 4-12 小時（S0）+ 長期孤獨認知退化（S1）+ 子女遠距照顧無法替代（S1）= 三重市場失效
3. **Solution**：台灣唯一中文 / 台語 + 主動發起 + 子女 dashboard + 緊急偵測四合一（vs ElliQ 無中文 / vs GrandPad 無 AI / vs Zenbo Jr II 無 B2C 月費訂閱）
4. **Market**：SAM 中位 NT$66 億（三向交叉驗證）；Why Now = 長照 3.0（2026/07）+ LLM 成本 94.5% 降幅 + 台灣 fast-follower 黃金窗口 12-24 月
5. **Traction（Plan-Only 規劃版）**：10-20 戶 Pilot 規劃書 + 3-5 家機構 LOI 計畫 + Freemium App 下載目標 2,000-5,000
6. **Business Model**：Tier 1/2/3 + 硬體一次性 + B2B2C Year 2 + 保險 PMPM Year 3+
7. **ARR 預測公式**：
   - Y1：NT$50-120 萬（Freemium App 主軸）
   - Y2：NT$862 萬-NT$2,156 萬（硬體 + App + 機構）
   - Y3+：PMPM 一旦啟動，ARR 潛力 NT$1 億-NT$2 億（2 萬保戶）
8. **Moat**：台語語料庫（全球唯一）+ 切換成本 4 層（個性 / 記憶 / 家人設定 / 父母習慣）+ 長照補貼名單（進入後 = 政府背書）

**主管 Q&A Top 5 預備（ASUS 主管特殊考量）**：
- Q1：「你們與 Zenbo Junior II 差異在哪？」→ 客觀回答：Junior II 定位 B2B 醫院 Maestro 節點（2025 Healthcare+），本案定位 B2C 居家月費訂閱，兩個不同市場（不比較、不推銷合作）
- Q2：「台語能做到什麼程度？」→ 誠實回答：90 天 MVP 基礎問候 + 常用詞，完整台語對話 Year 2（台語 ASR fine-tune 需資料積累）
- Q3：「緊急偵測準確率多少？」→ Plan-Only 紅線 P1：「召回率待 Phase 5 Pilot 驗證，規劃目標 ≥80%，plan B 是緊急按鈕 + AI 輔助雙模式」
- Q4：「PDPA 合規怎麼處理？」→ 三層資料分類（可雲端 / 必端側 / 完全不收）+ 三方同意機制 + GCP asia-east1 + PDPC 2025/8 主管機關已知悉
- Q5：「競品 ElliQ 進日本了，台灣怎麼防？」→ 時間窗 12-24 月：先卡台語語料庫 + 長照補貼名單 + 子女 dashboard 切換成本，2027-2028 ElliQ 才可能進台灣（競品 deep dive ✅）

### §6.5 Phase 8 主管 Review 規劃書重點呈現

**規劃書對外架構（GitHub Page 對外頁面）**：
1. **Executive Summary**（why this, why now, why us）= 3 分鐘讀完
2. **市場 + 痛點**（TAM/SAM/SOM + Why Now + Stakeholder Mapping）
3. **解決方案 + 技術架構**（WoZ 形態 + 三層 AI Brain + 台語差異化）
4. **Business Model**（Lean Canvas v1 + Unit Econ + 3 個 Tier + CAC:LTV）
5. **90 天執行計畫**（Sprint 拆解 + 里程碑 + PMF 量測機制）
6. **Year 2-3 演進**（ODM 硬體 + B2B2C + 保險 PMPM 願景）
7. **風險與緩解**（紅線 + PDPA + 台語邊界 + 競品風險）

**不在對外頁面呈現的**（plan-0-answers.md §對外網頁渲染紀律）：
- 所有 ✅/🟡/📋 標籤剝離
- 「Plan-Only Mode 校準」段不渲染
- 「demo」字眼替換為「主管 review 規劃書」
- Wizard-of-Oz / post-approval execution 等內部術語不出現

---

## §7. Self-Drive 後續 Approve Gate 清單

本 90 天 MVP 規劃中，main agent 負責 self-drive 推進所有技術 / 規劃任務。懷特親自介入事項如下：

### 懷特唯一需親自介入的事項

| 事項 | 時機 | 形式 |
|---|---|---|
| **T51 主管 review 規劃書** | W12（2026-05-27 後約 12 週）| 懷特親自向 ASUS 主管 1 位 review 完整規劃書 + 取得 go/no-go |

### Main Agent Self-Drive 事項

| Gate | 時機 | 決策範圍 |
|---|---|---|
| **T29 W4 Gate #1（本文件）** | 已完成 | 4 hypothesis P/P/K 評估 + 主軸推薦 + Phase 4-8 輸入 |
| **T35 W8 Gate #2** | 約 W8 | 評估 Phase 4-5 進度（Business Model + Prototype Build）+ 調整主軸 |
| **T48 W12 Gate #3** | 約 W12 | 最終規劃書完成度評估 + Phase 7 Pitch Deck 品質確認 + T51 主管 review 就緒度 |
| **Phase 4-8 所有技術 / 規劃任務** | 持續 | 非重大決策 / 非超出 OpenSpec 範圍的執行 |

**自決原則**：
1. 重大決策影響範圍超出原 OpenSpec = 回報懷特
2. 兩輪修正後仍 fail = 升級懷特
3. 每階段 push CC + Discord 通知讓懷特知道進度

---

## §8. Coverage Matrix

### §8.1 4 Hypothesis 評估完整度

| Hypothesis | 8 維度評分 | 加權總分 | 決策 | 完整度 |
|---|---|---|---|---|
| A B2C DTC | ✅ 全 8 維度 + 理由 + 來源 | 4.40/5 | Persevere 主軸 | ✅ |
| B B2B2C 機構 | ✅ 全 8 維度 + 理由 + 來源 | 3.35/5 | Persevere 次主軸 | ✅ |
| C 保險 PMPM | ✅ 全 8 維度 + 理由 + 來源 | 2.30/5 | 延後 Year 3+ | ✅ |
| D Freemium App | ✅ 全 8 維度 + 理由 + 來源 | 4.20/5 | Persevere 入口補充 | ✅ |

### §8.2 5 個關鍵假設驗證完整度

| 假設 | Desk 狀態 | Phase 2 補項 | 完整度 |
|---|---|---|---|
| 1 WTP NT$1,000-1,500 | 🟡 四框架推算一致 | 📋 Mom Test 8 人 | ✅ |
| 2 長者互動 4 週不棄 | 🟡 ElliQ 正向但族群不同 | 📋 Phase 5 Pilot | ✅ |
| 3 非影像式緊急偵測 ≥80% | 🟡 路徑可行，準確率未知 | 📋 Phase 5 假事件演習 | ✅ |
| 4 機構願採購 | 🟡 補貼誘因有邏輯 | 📋 Phase 2 機構訪談 | ✅ |
| 5 法規 12-18 月落地 | 🟡 App 形態免認證確認 | 📋 Phase 2 W3 法規諮詢 | ✅ |

### §8.3 Phase 4-8 銜接清晰度

| Phase | 輸入已給出 | 完整度 |
|---|---|---|
| Phase 4 Business Model | ✅ 主軸（A）+ 輔（D）+ B2B2C 輔助 Lean Canvas 框架 + Unit Econ 公式 | ✅ |
| Phase 5 Prototype Build | ✅ Must-have 8 個 feature 規格 + Sprint 拆解 + WoZ 形態 | ✅ |
| Phase 6 Pilot 規劃 | ✅ 招募標準 + 地域分布 + 機構 LOI 目標 + 量測 KPI | 📋 |
| Phase 7 Pitch Prep | ✅ 主軸故事 8 步 + ARR 預測公式 + 主管 Q&A Top 5 | ✅ |
| Phase 8 主管 Review | ✅ 對外架構 7 章 + 不在頁面的 5 項剝離規則 | ✅ |

### §8.4 反 Anti-pattern 自我檢核

| Anti-pattern | 是否規避 | 說明 |
|---|---|---|
| 4 options 只列結論不列 reasoning | ✅ | §2 每個 hypothesis 8 維度各有理由 + 來源引用 |
| Pivot 不明指哪個 hypothesis block 改 | ✅ | §5.1-5.4 每個 Pivot 均明確指出「改動的 Hypothesis Block」|
| Kill 不寫已驗證 hypothesis | ✅ | 無 Kill 決策（四個均 Persevere / 延後），原因詳見 §4.4；W8/W12 Kill 觸發條件已明確列出 |
| W4 太早判定 Kill | ✅ | 明確維持所有 hypothesis，C 延後而非 Kill |
| Main agent 自決 Pivot / Kill 不 ping 懷特 | ✅ | §7 self-drive 聲明已確認懷特 brief + 本 Gate 無 Kill/Pivot，若 W8 觸發需升級 |
| 缺少 decision log 連續性 | 🟡 | W4 為首次 Gate，W8/W12 需繼續對比 |

---

## §9. 對比歷次 Decision（trend 追蹤）

| Gate | 主軸決策 | 主要變化 |
|---|---|---|
| **W4 Gate #1（本文件）** | Hypothesis A Persevere 主軸 + D Persevere 入口 + B Persevere 次主軸 + C 延後 Year 3+ | 首次 Gate，Phase 0.5-3 desk-based 評估，無真實 metric 數據 |
| **W8 Gate #2（待執行）** | 待填 | 評估 Phase 4 Business Model 完成度 + Phase 5 Prototype Build 進度 |
| **W12 Gate #3（待執行）** | 待填 | 評估最終規劃書品質 + Phase 7 Pitch Deck 就緒度 + T51 主管 review 準備 |

---

## §10. 參考文獻

- Eric Ries, *The Lean Startup*, 2011：Built-Measure-Learned cycle；Pivot 定義；PMF 量測（Sean Ellis ≥40%）
- phase-0.5-deconstruction.md §5.2（4 hypothesis Lean Canvas A/B/C/D）+ §5.4（5 個關鍵假設 + Pivot 路徑）
- problem-framing.md §1-§4（TAM/SAM/SOM / Stakeholder / 倫理風險 / 競品 deep dive）
- wtp-payer.md §1.1-1.5（WTP 4 framework 交叉驗證）+ §3（付款人分類）
- build-vs-buy.md §2-§5（硬體 / AI Brain / 通路 3 層推薦）
- tech-architecture.md §0（隱私邊界 + 三層 AI Brain 混合架構）
- feature-triage.md §1-§3（22 feature MoSCoW + Kano 評分）
- safety-redlines.md §1（三層紅線架構）
- persona.md（3 persona WTP + 決策邏輯）
- jtbd-day-in-life.md §6（3 persona JTBD 共通點 + Hypothesis A UVP 驗證）
- Oxford Caregiver WTP Study, *The Gerontologist*, Vol.56 No.5, 2016（Framework C PPP 換算）
- 家庭照顧者關懷總會 2023（台灣家庭月照顧費 NT$22,000 基準 ✅）
- ElliQ / Intuition Robotics 2025 公開資訊（$35M 年收 / 紐約州 800+ 戶 pilot / 日本 2026）
- 衛福部長照 3.0（2025/12/31 行政院核定）；NT$60K/3 年智慧輔具補貼 2026/07 預計
- PDPC 2025/8 成立 + PDPA 2025/12 修訂版 + AI 基本法 2025/12

---

> **本文件狀態**：✅ W4 Gate #1 完成。下一步：Phase 4 Business Model（T32 Unit Econ + T33 Lean Canvas v1）。
> **Self-Drive 確認**：main agent 依本文件推進 Phase 4-8，無需逐 Phase approve。
> **下一個懷特介入點**：T51 主管 review 規劃書（W12）。
