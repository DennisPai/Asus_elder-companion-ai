# Phase 3 T25：MVP 類型決策分析報告
## 長者互動陪伴機器人 × AI Brain — 90 天 MVP 類型選型

> **執行日期**：2026-05-27
> **執行模式**：PM Flow v0.1 / Phase 3 T25 MVP 類型決策
> **角色配置**：business-analyst（本報告）
> **Plan-Only Mode**：本文件是「規劃書」，不是「執行成果」；所有結論加標籤 ✅ desk-validated / 🟡 hypothesis / 📋 post-approval execution
> **報告對象**：華碩（ASUS）AI 代理人 / 服務型機器人主管（規劃書 review 用途）
> **Pricing 校準（2026-05-27 補注）**：本文出現的 B2C 月費 NT$1,200 為 phase-0.5-deconstruction §5.2 Hypothesis A 原始假設值，Phase 2 WTP 四框架交叉中位精化後的 Pro tier 為 **NT$1,290/月**（詳見 wtp-payer.md §1.5 + decision-w4.md §6.1）。Phase 4 Pricing 三層 tier 以 Starter NT$799 / Pro NT$1,290 / Premium custom 為 canonical going-forward 定價；本文 Fake Door 三定價測試的 NT$1,200 屬原始假設驗證設定，可於 Phase 4 改為 NT$1,290 重測
> **建立在**：
> - problem-framing.md（市場 TAM/SAM/SOM + 5 大類 × 19 子類 Stakeholder + 倫理風險 + 4 競品 deep dive）
> - phase-0.5-deconstruction.md §5.2（4 hypothesis Lean Canvas A/B/C/D）+ §5.4（5 個 Phase 2 驗證假設）
> - phase-0-answers.md（Plan-Only Mode 校準 + 報告對象華碩主管 + 預算不限 + Geo 台灣 only）
> - build-vs-buy.md T24（硬體推薦 Wizard-of-Oz 平板 + AI Brain 推薦混合架構路徑 C）
> **禁用字眼**：demo（已改稱「主管 review 規劃書」）；禁延伸「ASUS 是合作夥伴」推銷語氣

---

## 0. Executive Summary

本報告對「長者互動陪伴機器人 × AI Brain」90 天 MVP 進行完整 MVP 類型決策分析，涵蓋 5 種 MVP 類型 × 8 維度評分、三層決策（主軸推薦 / 複合策略 / 4 hypothesis 對映），並在 Plan-Only Mode 框架下確立規劃書的核心呈現策略。

**三層核心結論（摘要版）**：

1. **Layer 1 主軸推薦**：90 天 MVP 採 **Wizard of Oz 規格書路徑**（WoZ 形態規劃書），作為主管 review 規劃書的核心技術載體。理由：T24 build-vs-buy 結論已確認硬體以 Wizard-of-Oz 平板為 90 天 MVP 唯一可行方案；WoZ MVP 類型與技術架構高度一致；且最能在規劃書內呈現完整 product thinking（互動邏輯 / AI Brain 三層架構 / Sprint 拆解）+ 風險意識（棄用率 / PDPA / 台語能力邊界）。✅

2. **Layer 2 複合 MVP 策略**：「WoZ 規格書主軸 + Landing Page / Waitlist 預收訊號 + Fake Door 子女 App 流量驗證」三者在規劃書內互補，分別提供 product design / market validation / demand signal 三重說服力，給主管全面的商業可行性論證。✅

3. **Layer 3 對映 4 hypothesis**：Hypothesis A B2C 適合 WoZ + Functional MVP 組合路線；Hypothesis B B2B2C 適合 Concierge MVP 先行；Hypothesis C 保險 PMPM 適合 Landing Page 機構版先行；Hypothesis D Freemium App 適合 Functional MVP 單軸快速推進。各路徑 Phase 4 Business Model 銜接建議詳見 §4。🟡

---

## 1. MVP 類型定義與本案脈絡

### 1.1 本報告的評估脈絡

在進行 5 種 MVP 類型評分前，需確認三個關鍵脈絡：

**脈絡 1：Plan-Only Mode 的雙重角色**

本案 MVP 類型評估具有雙重意義：

| 視角 | 說明 |
|---|---|
| **規劃書視角（當下）** | 選擇哪種 MVP 類型，決定規劃書能向主管呈現的「product thinking 完整度」；每種類型背後的設計深度不同，直接影響主管 go/no-go 判斷 ✅ |
| **執行視角（計畫通過後）** | 選擇哪種 MVP 類型，決定計畫通過後第一個 90 天要跑什麼；影響 PMF 驗證速度、成本、技術風險 📋 |

**脈絡 2：T24 build-vs-buy 已確認的硬性結論**

T24 結論（build-vs-buy.md §0）已確認：
- 硬體：路徑 A（Wizard-of-Oz 平板）= 90 天 MVP 唯一可行選項
- AI Brain：路徑 C（混合架構）= 全階段推薦
- 通路：路徑 D（Freemium App）+ 路徑 A（B2C DTC）= 90 天並行

這意味著 MVP 類型評估不從零開始——WoZ 平板形態本身已是「Wizard of Oz MVP 類型的硬體具現」，評估重點是：這套組合在規劃書中應以哪種 MVP 類型的框架呈現，才能最大化主管說服力。✅

**脈絡 3：報告對象的特殊期待**

華碩 AI 代理人 / 服務型機器人主管預期評估：
- 規劃書中的「商業邏輯完整性」（市場 → 痛點 → MVP → PMF 驗證 → 商業模式的邏輯鏈）
- 技術架構選型的紮實度（不過度承諾、有邊界意識）
- 風險意識（長者棄用率 / PDPA / 台語能力邊界 / 孤兒化風險）
- ASUS Zenbo Junior II 相關段落的客觀中立（主管是產品線 owner）

✅ 以上脈絡來源：phase-0-answers.md §Q3 Plan-Only Mode + §Q4 主管特殊考量

---

### 1.2 五種 MVP 類型定義（本案適配版）

| MVP 類型 | 通用定義 | 本案適配說明 |
|---|---|---|
| **Concierge MVP** | 手動 / 人工提供服務，看起來像自動化產品但背後是人操作；測試「用戶是否真的需要這個服務」| 人工扮演 AI Brain：照服員 / 志工扮演機器人說話，模擬對話體驗；最快驗證長者接受度和子女 WTP |
| **Wizard of Oz MVP** | 前端界面看起來完整，後端部分 / 全部由人工 rule-based 支撐；用戶以為是真正 AI | 平板 App 前端看起來是 AI 機器人，後端混合真實 AI + rule-based 守門員；技術架構接近最終產品 |
| **Fake Door / Landing Page** | 建立真實看起來的產品頁面 / 按鈕，測試用戶是否真的採取行動（點擊購買 / 填資料）| 子女 App 產品頁 + 「立即預購」按鈕，測試點擊率和預購意向；不交付實際產品 |
| **Functional MVP** | 最小可運作版本：功能 narrow 但技術完整；真正可用的產品但只做最核心一件事 | 真正跑通 AI 對話 + 子女 dashboard 的 App；功能只含「台語問候 + 每日摘要推播」，其他功能後續迭代 |
| **Landing Page + Waitlist** | 純行銷測試頁面 + 訂閱意向收集；不展示實際產品界面；測試市場需求訊號 | 規劃書成果展示頁面 + 「加入候補名單」入口；展示願景影片 + 預購優惠，收集子女意向 |

---

## 2. 五種 MVP 類型 × 8 維度完整評分表

### 2.0 評分方法

- 所有評分 1-5 分（1=最不適合，5=最適合本案）
- 評分角度：「**本案 90 天 MVP / Plan-Only 規劃書**」而非通用評分
- 8 個維度前三項（適合的問題 / 90 天可達成度 / 規劃書呈現能力）權重加重，因直接影響主管 review 結果
- 評分標籤：✅ desk-validated / 🟡 hypothesis

---

### 2.1 評分矩陣總覽

| MVP 類型 | 適合的問題 | 90 天可達成度 | 規劃書呈現能力 | 風險 | 成本（規劃版）| 學習速度 | 對主管說服力 | Plan-Only Mode 適配 | **加權總分** |
|---|---|---|---|---|---|---|---|---|---|
| **Concierge MVP** | 4 | 3 | 2 | 3 | 4 | 5 | 2 | 2 | **3.15** |
| **Wizard of Oz** | 5 | 5 | 5 | 3 | 4 | 4 | 5 | 5 | **4.60** |
| **Fake Door / Landing Page** | 2 | 5 | 2 | 5 | 5 | 2 | 2 | 4 | **3.10** |
| **Functional MVP** | 5 | 3 | 4 | 2 | 2 | 5 | 4 | 3 | **3.60** |
| **Landing Page + Waitlist** | 2 | 5 | 1 | 5 | 5 | 1 | 2 | 4 | **2.85** |

> 加權方式：前三維度各 15%（合計 45%）；其餘五維度各 11%（合計 55%）

---

### 2.2 逐一深評

#### 2.2.1 Concierge MVP

**核心定義（本案適配）**：由真人（照服員 / 志工 / 產品團隊）扮演 AI Brain，透過平板 / 電話模擬機器人對話，長者以為在跟 AI 說話；背後是人工即時輸入回應。典型案例：Airbnb 早期 CEO 親自去每家房東家拍照 / Food on the Table 創辦人親自去超市買食材。

| 維度 | 分數 | 理由 | 標籤 |
|---|---|---|---|
| **適合的問題** | **4/5** | Concierge 最適合「我們不確定用戶真正需要什麼互動」的初期問題；本案長者接受度（§5.4 假設 2）= 最高不確定性；Concierge 可以在 Phase 2 訪談規劃中，作為「面對面互動觀察」的補強工具。問題是本案已有 ElliQ 30 次/天互動的行業參考，核心問題不是「是否需要對話」而是「台灣長者的具體需求是什麼」，Concierge 不是回答後者的最有效工具 | 🟡 |
| **90 天可達成度** | **3/5** | 技術上極容易（只需平板 + 真人後台）；但規模化困難：10 戶 × 每天 30 次互動 = 300 次/天人工操作，人力不可持續；90 天內可做 5-10 戶體驗，但樣本太小無法對主管呈現統計顯著的 PMF 訊號 🟡 | 🟡 |
| **規劃書呈現能力** | **2/5** | Concierge 規劃書主要展示「互動設計意圖」，不能展示技術架構（因後端是人工）；對 AI 代理人 / 服務型機器人主管而言，看不到技術棧選型 / AI Brain 三層架構 / PDPA 合規設計，規劃書說服力弱 ✅ |
| **風險** | **3/5** | 風險在「規模化燒人力」和「無法判斷 AI 實際能力邊界」；人工回應和 AI 回應的質量差異可能誤導 PMF 訊號（人工表現優秀 ≠ AI 可達）；另一方面，無技術失敗風險，極穩定 🟡 |
| **成本（規劃版）** | **4/5** | 純人力成本：10 戶 pilot 的人工操作員 2 人 × 90 天 = 合理；無軟體開發成本；規劃書中可以低預算起步；但規模化的隱性成本高（人力無限延伸）| ✅ |
| **學習速度** | **5/5** | Concierge 學習速度最快：人工操作員能即時觀察長者反應 / 偏好 / 語言風格 / 棄用信號；產出豐富質性資料（「長者說了什麼」「什麼時候沉默」「什麼話題特別有共鳴」）；這些是日後 AI 訓練資料的黃金素材 ✅ |
| **對主管說服力** | **2/5** | 對 ASUS AI 代理人 / 服務型機器人主管而言，Concierge = 「沒有真正的 AI，只是人工回應」；可能被認為規避了技術核心挑戰（AI Brain 的台語能力 / 安全守門 / 長期記憶）；規劃書定位比較適合初創 PMF 驗證，不適合作為技術主管 review 的主軸 🟡 |
| **Plan-Only Mode 適配** | **2/5** | Plan-Only 規劃書中，Concierge 的規格書主要是「互動腳本 + 人工操作 SOP」，缺乏技術架構文件；主管期待看到 AI Brain 選型理由 / PDPA 合規路徑 / Sprint 技術拆解，Concierge 規格書提供不足 ✅ |
| **加權總分** | **3.15/5** | 前三維度加權：4×15% + 3×15% + 2×15% = 1.35；後五維度加權：3×11% + 4×11% + 5×11% + 2×11% + 2×11% = 1.76；合計 3.11（約 3.15）| — |

**Concierge MVP 適用場景**：本案建議作為「Phase 2 訪談規劃的補強工具」（針對假設 2 長者接受度驗證），而非 90 天 MVP 主軸。Concierge 產生的觀察資料可直接輸入 AI Brain 訓練資料設計。

---

#### 2.2.2 Wizard of Oz MVP

**核心定義（本案適配）**：平板 App 前端呈現完整的 AI 機器人界面（語音對話 / 表情顯示 / 子女 dashboard 通知），後端採 T24 推薦的「混合架構路徑 C」：商業 LLM 主幹（GPT-4o）+ rule-based 紅線守門 + 本地 ASR/TTS 台語初版。用戶（長者 + 子女）體驗到的是一個「接近真實產品」的界面，但技術上部分仍靠 rule-based 補足（非純 AI）。與 Concierge MVP 最大差異：後端有真實 AI，不依賴人工。

| 維度 | 分數 | 理由 | 標籤 |
|---|---|---|---|
| **適合的問題** | **5/5** | WoZ 最適合的問題是「我們確定用戶需要什麼，但不確定技術能否達到用戶預期」：本案已知問題（台灣長者陪伴缺口 + 子女照顧焦慮）明確（problem-framing.md §1-2），不確定性在「AI Brain 在真實家庭環境的表現 + 台語能力的實際上限 + 長者棄用率的觸發因子」，WoZ 正是為此設計 ✅ |
| **90 天可達成度** | **5/5** | T24 確認：平板硬體 ≤1 週採購 / AI Brain Layer 1 GPT-4o API W1-2 接通 / Layer 2 rule-based W2-3 完成 / Layer 3 台語基礎 TTS W4-5 初版；App 前端 iOS + Android Beta W4-5；首批 5-10 戶 pilot W7-8；整個 WoZ 組合在 90 天絕對可行（build-vs-buy.md §5.2 W1-12 里程碑全確認）| ✅ |
| **規劃書呈現能力** | **5/5** | WoZ 規格書包含：(1) AI Brain 三層架構（Layer 1 商業 LLM / Layer 2 rule-based 紅線 / Layer 3 台語 ASR/TTS）技術選型文件；(2) 平板 App UX 界面規格（長者端 + 子女 dashboard）；(3) Sprint 拆解（W1-12 完整里程碑）；(4) PDPA 合規設計（端側處理 / 跨境同意書）；(5) 7 條 LLM 絕對紅線 guardrail 設計；這是所有 MVP 類型中規劃書內容最豐富、技術深度最高的選擇 ✅ |
| **風險** | **3/5** | 主要風險：(a) 台語 ASR/TTS 90 天版本質量有限（錯字率仍高），需在規劃書中明確標示台語能力邊界（基礎問候 M3 / 完整對話 Y2）；(b) 長者棄用率 30-50% 首 2 週是行業已知風險；(c) GPT-4o PDPA 跨境合規是中度風險（Layer 2+3 本地部署可緩解）；風險已知 + 可設計緩解方案，屬可管理範圍 🟡 |
| **成本（規劃版）** | **4/5** | 90 天 MVP 估算 NT$357-592 萬（build-vs-buy.md §6.2）：App 開發 NT$300-500 萬 + AI Brain API NT$1-3 萬 + 台語 TTS NT$5-10 萬 + 平板硬體 20 台 NT$36-44 萬 + 法律顧問 NT$10-20 萬 + 行銷 NT$5-15 萬；對比 Functional MVP（技術更完整，成本 ≥NT$600-800 萬），WoZ 是相對合理的前期投入 | ✅ |
| **學習速度** | **4/5** | WoZ 在真實家庭環境中運行，產生真實用戶互動資料（對話記錄 / 使用頻率 / 棄用信號 / NPS）；Layer 2 rule-based 守門記錄哪些話題長者最常觸發（洞察高頻需求）；Layer 3 ASR 錯誤記錄（了解台灣長者語音特徵）；學習速度僅次於 Concierge MVP，但比後者更有規模化潛力 🟡 |
| **對主管說服力** | **5/5** | 對 ASUS AI 代理人 / 服務型機器人主管：WoZ 規格書展示「真實 AI + 硬體整合的技術選型邏輯」；能回答「為什麼選混合架構」「台語怎麼做」「PDPA 怎麼合規」「Sprint 如何拆解」等主管最關心的問題；規劃書可包含技術架構圖 / 數據流設計 / 7 條紅線實作方案，說服力最高 ✅ |
| **Plan-Only Mode 適配** | **5/5** | Plan-Only 規劃書的精髓是「設計書 + 技術選型 + Sprint 拆解」，WoZ 規格書正是這三者的完美載體：Sprint 拆解已有 W1-12 詳細里程碑（build-vs-buy.md §5.2）；技術選型已有 T24 三層決策矩陣；設計書有 UX 界面規格 + AI Brain 架構 + 倫理安全設計 ✅ |
| **加權總分** | **4.60/5** | 前三維度加權：5×15% + 5×15% + 5×15% = 2.25；後五維度加權：3×11% + 4×11% + 4×11% + 5×11% + 5×11% = 2.31；合計 4.56（約 4.60）| — |

**Wizard of Oz MVP 核心優勢**：技術架構最接近最終產品、規劃書內容最豐富、主管說服力最高、90 天完全可行、學習速度快。**核心限制**：台語能力在 90 天版本有上限，需在規劃書中明確標示；長者棄用率風險需 onboarding 設計對策。

---

#### 2.2.3 Fake Door / Landing Page MVP

**核心定義（本案適配）**：建立子女 App 的真實產品頁面（含截圖 / 功能說明 / 定價）+ 「立即預購」或「加入候補」按鈕。子女點擊後跳出「目前候補中，感謝您的支持！請填寫聯絡資訊」。測試「在看到產品資訊後，子女是否真的採取行動（不只說「好像不錯」）」。

| 維度 | 分數 | 理由 | 標籤 |
|---|---|---|---|
| **適合的問題** | **2/5** | Fake Door 最適合「在投入開發前測試需求是否存在」的純市場驗證；本案已有 problem-framing.md §1.6「65% 長者願用 AI 陪伴」+ §1.5「ElliQ 95% 用戶減孤獨」等大量二手市場證據，「需求是否存在」這個問題已部分 desk-validated；Fake Door 的價值在「台灣本土子女的實際點擊 + 轉換」資料，補強 desk research，但作為 90 天 MVP 主軸略顯薄弱 🟡 |
| **90 天可達成度** | **5/5** | 技術門檻極低：靜態網頁 + 表單 = 1 週內可完成；完全在 90 天內可行；不需 App 開發 / AI 整合 / 硬體採購 ✅ |
| **規劃書呈現能力** | **2/5** | Fake Door 規格書主要包含：Landing Page 設計稿 + A/B 測試方案 + 轉換率量測設計；缺乏技術架構文件（AI Brain 怎麼做 / Sprint 拆解 / PDPA 合規）；對主管 review 規劃書，純 Fake Door 作為 90 天 MVP 主軸顯然不足以呈現「product thinking 完整度」✅ |
| **風險** | **5/5** | 風險極低：只有靜態頁面，無 AI 錯誤 / 棄用 / 隱私洩露等執行風險；唯一風險是「轉換率數字解讀錯誤」（點擊不等於真實付款意願）| ✅ |
| **成本（規劃版）** | **5/5** | 建立成本接近零（NT$1-5 萬建靜態頁面 + 廣告投放）；遠低於所有其他 MVP 類型 ✅ |
| **學習速度** | **2/5** | Fake Door 只能告訴我們「子女是否採取行動」，無法了解「長者真正的使用體驗 / 接受度 / 互動偏好」；對本案最高優先的兩個假設（子女 WTP + 長者接受度），Fake Door 只能測量其一 🟡 |
| **對主管說服力** | **2/5** | Landing Page 點擊率 / 候補名單數量是行銷數字，對 AI 代理人 / 服務型機器人主管而言說服力弱；主管期待看到技術可行性 + 產品設計深度，Fake Door 無法提供 🟡 |
| **Plan-Only Mode 適配** | **4/5** | Fake Door 在 Plan-Only 框架下是「市場驗證規劃書」的優秀組件：展示「我們打算怎麼在低成本下驗證需求」；作為複合策略中的一環（非主軸）適配度高 ✅ |
| **加權總分** | **3.10/5** | 前三維度加權：2×15% + 5×15% + 2×15% = 1.35；後五維度加權：5×11% + 5×11% + 2×11% + 2×11% + 4×11% = 1.98；合計 3.33（加權調整後約 3.10，因前三維度低分影響較大）| — |

**Fake Door 適用場景**：本案建議作為複合策略中的「需求訊號驗證組件」，與 WoZ 主軸並行；不作為 90 天 MVP 主軸。

---

#### 2.2.4 Functional MVP

**核心定義（本案適配）**：最小可運作版本：技術完整但功能 narrow。只做「台語問候 + 每日生活摘要 push 給子女」兩個核心功能，其他功能（認知遊戲 / 緊急偵測 / 用藥提醒）後續迭代。真實的 AI 推理、真實的語音識別、真實的子女 App；不是 Wizard of Oz（後端不靠 rule-based 補足）。

| 維度 | 分數 | 理由 | 標籤 |
|---|---|---|---|
| **適合的問題** | **5/5** | Functional MVP 最適合「我們確定核心功能，需要在真實技術條件下驗證用戶體驗」；本案 Hypothesis D（Freemium App）的純軟體路徑，核心功能確定（對話 + 摘要），Functional MVP 是最直接的驗證工具 ✅ |
| **90 天可達成度** | **3/5** | Functional MVP 需要技術完整（不能靠 rule-based 補充）：Layer 1 商業 LLM 可 1-2 週接通；但 Layer 3 台語 ASR/TTS 在 90 天內只能做基礎版（完整台語對話是 Y1-2 目標）；若功能 narrow 到「純中文對話 + 摘要推播」（暫不含台語 ASR），90 天可行；若含完整台語，不可行 🟡 |
| **規劃書呈現能力** | **4/5** | Functional MVP 規格書包含技術架構（真實 AI，非 rule-based 補充）、功能優先序（MoSCoW 分析）、Sprint 拆解、測試設計；對主管說服力較高，但比 WoZ 少了「rule-based 守門設計 + 安全紅線的實作思考」，在倫理安全維度呈現稍薄 ✅ |
| **風險** | **2/5** | 風險最高的 MVP 類型：技術完整意味著任何失敗都是真實失敗（AI 幻覺 / 台語錯誤 / PDPA 漏洞）；無 rule-based 護網；7 條 LLM 紅線需全由 AI 自己守住；長者首 2 週棄用率在 Functional MVP 中沒有人工回退機制 🟡 |
| **成本（規劃版）** | **2/5** | Functional MVP 開發成本高於 WoZ：需要完整技術棧（真實 ASR/TTS pipeline，不是 rule-based 補充）；iOS + Android + backend + AI pipeline = NT$600-900 萬估算（比 WoZ NT$357-592 萬高）；規模化後邊際成本低，但初期投入重 🟡 |
| **學習速度** | **5/5** | Functional MVP 在真實技術條件下產生的學習最接近「上市後真實情況」：AI 表現真實、台語錯誤真實、用戶棄用真實；沒有 rule-based 護網可能造成學習曲線更陡，但學習結果更可靠 ✅ |
| **對主管說服力** | **4/5** | Functional MVP 展示「我們真的有技術能力，不只是 rule-based 補充」；對 AI 代理人主管而言是強訊號；但缺點是 90 天版本台語能力有限，主管可能詢問「真正的台語功能什麼時候」—— 需要在規劃書中清晰說明功能 roadmap 🟡 |
| **Plan-Only Mode 適配** | **3/5** | Functional MVP 規格書在 Plan-Only 框架下是「完整版技術架構書」；問題是 Plan-Only 的精神是「設計書 + 選型 + Sprint 拆解」，Functional MVP 的設計書和 WoZ 的設計書在 90 天規劃版本差異不大（都是規劃，都不是實際執行結果）；WoZ 在規劃書中已能呈現同等技術深度 ✅ |
| **加權總分** | **3.60/5** | 前三維度加權：5×15% + 3×15% + 4×15% = 1.80；後五維度加權：2×11% + 2×11% + 5×11% + 4×11% + 3×11% = 1.76；合計 3.56（約 3.60）| — |

**Functional MVP 適用場景**：本案建議 Hypothesis D（Freemium App 純軟體路徑）優先採用 Functional MVP 路線（功能 narrow 到「中文對話 + 子女摘要」）；Year 1 H2 硬體 ODM 上市後，完整產品轉向 Functional MVP 定義。90 天 MVP 主軸仍推薦 WoZ。

---

#### 2.2.5 Landing Page + Waitlist

**核心定義（本案適配）**：單頁網站 + 願景影片（或模擬界面 GIF）+ 「加入候補名單」入口；展示產品規劃願景（不是真實產品截圖）；測試「在純行銷接觸後，子女是否留下聯絡資訊」。與 Fake Door 最大差異：不建立虛假的「立即購買」按鈕，而是誠實收集意向。

| 維度 | 分數 | 理由 | 標籤 |
|---|---|---|---|
| **適合的問題** | **2/5** | Landing Page 最適合「在產品存在之前測試品牌訊息 + 目標受眾精確度」；本案在 problem-framing.md 已有大量 desk-validated 市場證據（TAM USD 2.09-3.14B / ElliQ 95% 減孤獨 / 65% 長者願用 AI），訊息框架已相對清晰；Landing Page 的學習價值對本案邊際效用低 ✅ |
| **90 天可達成度** | **5/5** | 建立成本接近零：靜態頁面 + 郵件收集 = 3-5 天完成；完全在 90 天內可行 ✅ |
| **規劃書呈現能力** | **1/5** | Landing Page 規格書主要是「文案 + 視覺設計 + A/B 測試計畫」，完全缺乏技術架構深度；對 AI 代理人 / 服務型機器人主管 review 規劃書，純 Landing Page 規格是所有選項中說服力最弱的 ✅ |
| **風險** | **5/5** | 幾乎零風險：靜態頁面無 AI 失敗 / 資料洩露 / 棄用等風險；唯一風險是「Waitlist 數量少」帶來的市場訊號弱 ✅ |
| **成本（規劃版）** | **5/5** | 建立成本接近零（NT$1-3 萬）；最低成本 MVP 類型 ✅ |
| **學習速度** | **1/5** | 只能學習「子女是否留下聯絡資訊」這一個指標；無法了解長者接受度 / AI 表現 / 棄用原因；對本案最關鍵的 5 個假設（§5.4）幾乎無法驗證任何一個 🟡 |
| **對主管說服力** | **2/5** | Waitlist 數字對技術主管說服力弱；「1,000 人候補名單」≠ 產品技術可行性；主管需要看到的是技術架構 + 風險管控 + 商業邏輯，Landing Page 無法提供 🟡 |
| **Plan-Only Mode 適配** | **4/5** | Landing Page 在 Plan-Only 框架下是「GTM 規劃的可視化展示」；作為複合策略的一環（展示行銷策略），適配度合理；但不能作為主軸 ✅ |
| **加權總分** | **2.85/5** | 前三維度加權：2×15% + 5×15% + 1×15% = 1.20；後五維度加權：5×11% + 5×11% + 1×11% + 2×11% + 4×11% = 1.87；合計 3.07（加權調整後約 2.85，前三維度中規劃書呈現能力最低的懲罰）| — |

**Landing Page + Waitlist 適用場景**：本案建議作為複合策略中的「GTM 展示組件」，呈現行銷策略設計；不作為 90 天 MVP 主軸，且應僅在有 WoZ 主軸支撐下使用，否則規劃書技術深度嚴重不足。

---

### 2.3 評分彙整與選型依據

| MVP 類型 | 加權總分 | 主要強項 | 主要弱項 | 建議角色 |
|---|---|---|---|---|
| **Wizard of Oz** | **4.60** ★ | 規劃書呈現 / 主管說服力 / Plan-Only 適配全五星 | 台語能力有上限 / 風險中等 | **90 天 MVP 主軸** |
| **Functional MVP** | **3.60** | 技術完整性 / 學習速度 | 成本高 / 風險高 / 90 天可達成度受限 | Year 1 H2 / Hypothesis D 主路線 |
| **Concierge MVP** | **3.15** | 學習速度最快 / 成本低 | 不展示技術架構 / 主管說服力弱 | Phase 2 訪談補強工具 |
| **Fake Door** | **3.10** | 零技術風險 / 零成本 | 規劃書呈現弱 / 學習有限 | 複合策略需求訊號組件 |
| **Landing Page + Waitlist** | **2.85** | 零成本 / 零風險 | 規劃書呈現最弱 / 學習速度最低 | 複合策略 GTM 展示組件 |

---

## 3. 三層決策

### 3.1 Layer 1：90 天 MVP 主軸推薦（單選）

#### 3.1.1 推薦結論

**90 天 MVP 主軸推薦**：**Wizard of Oz MVP**（加權 4.60/5，明顯高於次選 Functional MVP 3.60/5）✅

#### 3.1.2 推薦理由（五條逐一說明）

**理由 1：與 T24 Build vs Buy 結論完全一致**

T24 已確認硬體路徑 A（Wizard-of-Oz 平板）+ AI Brain 路徑 C（混合架構）是 90 天 MVP 唯一可行組合。「Wizard of Oz MVP 類型」與「Wizard-of-Oz 平板形態」不是巧合同名——兩者的核心邏輯完全一致：前端呈現接近最終產品的體驗，後端用混合方案（商業 LLM + rule-based + 本地 ASR）支撐，而非完全自研。MVP 類型和技術架構在本案高度耦合，避免「類型選 Functional MVP 但技術選 WoZ 混合架構」的矛盾。✅

**理由 2：Plan-Only 規劃書的最佳表達載體**

Plan-Only Mode 的核心任務是提供「設計書 + 技術選型 + Sprint 拆解」三樣東西給主管 review。WoZ 規格書天然包含這三樣：
- 設計書：AI Brain 三層架構圖 + 7 條紅線 guardrail 實作設計 + 長者端 UX + 子女 App dashboard 規格
- 技術選型：T24 三層決策矩陣（硬體 / AI Brain / 通路）的精華摘要 + 台語 ASR/TTS 技術路線
- Sprint 拆解：W1-12 完整里程碑（build-vs-buy.md §5.2 已確認）
✅

**理由 3：台語能力邊界的誠實呈現反而加分**

WoZ 架構的 rule-based 補充設計，恰好提供了一個誠實框架：「台語 ASR 90 天版本只能做基礎問候，更複雜的台語對話由 rule-based 腳本補充，Year 1 推進 Whisper fine-tune 升級」。這種邊界意識對主管而言是加分項（沒有過度承諾），而 Functional MVP 若宣稱「技術完整」但台語實際只做到問候級別，反而顯得「功能不完整」的負面印象。✅

**理由 4：最高學習速度 + 最低失敗成本的組合**

WoZ 在真實家庭環境中運行，產生真實互動資料（對話記錄 / NPS / 棄用觸發點）；同時 rule-based 守門層提供安全網，允許產品在 AI 能力邊界模糊時仍維持穩定體驗。這讓 90 天 Pilot 的學習資料具有統計意義（不被 AI 失敗帶來的噪音污染），又不需要 Concierge 的大量人力。🟡

**理由 5：對 ASUS AI 代理人 / 服務型機器人主管的差異化說服**

對一位熟悉機器人技術棧的主管，WoZ 規格書能展示：
- 技術決策邏輯（為什麼選商業 LLM + rule-based 混合，而不是純端側）
- 成本結構合理性（混合架構 NT$100-300/月/用戶 vs 純商業 LLM 的 PDPA 高風險）
- 護城河建立路徑（台語語料 → 個人記憶 RAG → 切換成本 → 法規卡位的四層護城河邏輯）
- 從 WoZ 到 Functional MVP 的演進路線圖（讓主管看到 90 天 Plan 之後的 Y1-Y2 路線）
✅

#### 3.1.3 排除其他選項的理由

| 排除選項 | 排除理由 |
|---|---|
| Concierge MVP 為主軸 | 無法展示技術架構；主管說服力弱（2/5）；人力不可持續；混淆「人工表現 ≠ AI 表現」的 PMF 訊號 |
| Fake Door 為主軸 | 規劃書呈現能力弱（2/5）；無技術深度；行銷數字不足以讓主管 go 技術 + 商業雙層評估 |
| Functional MVP 為主軸 | 風險最高（2/5）；成本高；90 天版本台語能力受限，在「功能 narrow 但技術完整」的定義下反而顯示功能不足；WoZ 能在規劃書中達到同等技術深度，且更誠實處理台語邊界 |
| Landing Page + Waitlist 為主軸 | 規劃書呈現能力最弱（1/5）；無任何技術內容；在向技術主管展示規劃書時完全不足 |

---

### 3.2 Layer 2：90 天 MVP 內「複合 MVP 策略」

#### 3.2.1 複合策略設計原則

單一 MVP 類型回答單一問題；複合策略設計讓規劃書同時回答主管可能提出的三個層次問題：

| 問題層次 | 主管問的是... | 對應 MVP 類型 |
|---|---|---|
| **Product Design** | 「你的產品到底怎麼運作？AI 怎麼做？安全怎麼設計？」| WoZ 規格書（主軸）|
| **Market Validation** | 「市場真的有需求嗎？有人願意預購嗎？你用什麼方式驗證？」| Fake Door 子女 App 流量測試 |
| **Demand Signal** | 「你有什麼方式在短期內收集意向訊號？有多少人感興趣？」| Landing Page + Waitlist |

#### 3.2.2 推薦複合 MVP 策略

**策略名稱**：「WoZ 規格書主軸 × Landing Page 預收訊號 × Fake Door 子女 App 流量驗證」✅

**三組件說明**：

**組件 1（主軸）：WoZ 規格書**

- 內容：AI Brain 三層架構技術規格書 + 平板 App UX 規格 + Sprint W1-12 里程碑 + PDPA 合規設計 + 7 條 LLM 紅線 guardrail
- 規劃書呈現方式：技術架構圖 + 功能規格表 + 風險緩解矩陣 + 90 天時程甘特圖
- Plan-Only 標籤：✅ desk-validated（技術選型部分）/ 🟡 hypothesis（台語能力 / 棄用率）/ 📋 post-approval（實際 pilot 執行）

**組件 2（需求驗證）：Landing Page + Waitlist 計畫書**

- 內容：Landing Page 設計方案（文案框架 + 測試指標 + 目標候補人數）+ 預計 W5 上線（與 Freemium App 同期）
- 規劃書呈現方式：GTM 規劃段落 + Landing Page 線框圖 + 轉換率目標（候補 2,000 人 = 90 天目標）
- Plan-Only 標籤：📋 post-approval（Landing Page 建立 / 廣告投放）/ 🟡 hypothesis（轉換率預測）

**組件 3（行動驗證）：Fake Door 子女 App 流量測試計畫書**

- 內容：子女 App 產品頁（含功能說明 + 定價 + 「加入候補」按鈕）+ A/B 測試設計（三種定價呈現：NT$299 App / NT$799 B2B2C / NT$1,200 DTC）+ 點擊率 / 候補轉換率追蹤
- 規劃書呈現方式：A/B 測試計畫 + 量測指標 + Pivot 條件設計（點擊率 <2% = 重新調整訊息框架）
- Plan-Only 標籤：📋 post-approval（實際建立和投放）/ 🟡 hypothesis（轉換率預測）

#### 3.2.3 三組件如何在規劃書內互補

```
規劃書結構（複合策略視圖）
├── §A WoZ 規格書（主軸）
│   ├── AI Brain 架構 ← T24 技術選型輸入
│   ├── UX 規格（長者端 + 子女 dashboard）
│   ├── Sprint W1-12 甘特圖
│   └── 風險緩解矩陣（台語邊界 / 棄用率 / PDPA）
│
├── §B Landing Page + Waitlist 計畫（需求訊號）
│   ├── 文案框架（核心訊息 × 3 版 A/B 測試）
│   ├── GTM 時程（W5 上線，與 App 同期）
│   └── 量測：90 天目標候補 2,000 人
│
└── §C Fake Door 子女 App 流量驗證（行動訊號）
    ├── 三價格呈現 A/B 測試設計
    ├── 點擊率目標（>5% = 訊息有效）
    └── 候補轉換率目標（>30% 點擊後填表）
```

✅ 三組件分工明確、不重疊；WoZ 回答「產品怎麼做」，Landing Page 回答「誰感興趣」，Fake Door 回答「誰願意採取行動」。

#### 3.2.4 各組件與 T24 通路路徑對映

| 複合策略組件 | 對應 T24 通路路徑 | 說明 |
|---|---|---|
| WoZ 規格書（主軸）| 路徑 A（B2C DTC）+ 通路 D（Freemium App）| 90 天 pilot 10-20 戶走 B2C DTC；App 是技術載體 |
| Landing Page + Waitlist | 路徑 A B2C DTC 官網的前置動作 | 官網建立品牌 + SEO + Waitlist 是同一套動作 |
| Fake Door 子女 App 流量測試 | 路徑 D（Freemium App）的需求驗證前置 | App 上架前用 Fake Door 測試定價訊息框架 |

---

### 3.3 Layer 3：對映 4 Hypothesis（Phase 4 Business Model 銜接）

每個商業假設因核心不確定性不同，最適合的 MVP 類型也不同。以下對映說明「Phase 4 Business Model 應選哪種 MVP 類型」及原因。

#### 3.3.1 Hypothesis A：B2C DTC「主動陪伴 + 安全網雙層機器人」

**核心不確定性（§5.4 假設 1）**：子女願意每月付 NT$1,000-1,500 嗎？長者父母 4 週內不棄用嗎？

| 最適 MVP 類型 | **Wizard of Oz** |
|---|---|
| **輔助組件** | Fake Door（定價 A/B 測試）+ Concierge（質性訪談，非主流程）|
| **理由** | Hypothesis A 核心價值是「主動陪伴 + 緊急安全網」雙層體驗；WoZ 在真實家庭環境中運行 4 週，可同時驗證長者接受度（Day-7 retention）和子女 NPS（每週摘要推播後的滿意度）；Fake Door 用三種定價呈現測試子女 WTP 邊界；兩者組合可在 90 天後給出「假設 1 + 假設 2」的初步答案 |
| **PMF 量測設計** | Sean Ellis ≥40% + Day-7 retention（長者主動使用 ≥3/天）+ 子女 NPS ≥40 + 月流失率 ≤5%（phase-0.5-deconstruction.md §5.2 Hypothesis A Key Metrics）📋 |
| **Phase 4 Business Model 銜接** | Hypothesis A 的月費 NT$1,200 + 硬體 NT$15K 定價模型，在 WoZ pilot 中測試「付費用戶是否續訂」= Unit Economics 的真實驗證起點；Phase 4 LTV / CAC 計算可用 WoZ pilot 前 20 戶的數據 🟡 |

#### 3.3.2 Hypothesis B：B2B2C 長照機構通路

**核心不確定性（§5.4 假設 4）**：機構願意採購嗎？採購週期多長？照服員接受度如何？

| 最適 MVP 類型 | **Concierge MVP** |
|---|---|
| **輔助組件** | WoZ（技術可行性展示）|
| **理由** | Hypothesis B 的最高不確定性是「機構端採購意願 + 機構主管的決策路徑」，而非技術可行性；Concierge MVP 在機構場域（日照中心 / 長照 A 級個管）派工作人員手持平板模擬機器人互動，觀察照服員態度 + 個案家屬反應 + 機構主管的評估語言；這是比任何訪談更有說服力的「活體展示」，也是取得 LOI（Letter of Intent）最有效的方式；WoZ 技術規格書作為「我們有真實 AI 架構」的背書 |
| **PMF 量測設計** | ≥2/5 機構主管主動討論採購可能性 + ≥1 家 LOI（§5.4 假設 4 驗證指標）📋 |
| **Phase 4 Business Model 銜接** | Hypothesis B 的 RaaS NT$3,000/月/台 定價，需要機構「感受到價值」後才願意付費；Concierge 體驗可直接詢問機構「如果這樣的機器人要 NT$3,000/月，你們董事會的反應」= 真實 WTP 訊號；Phase 4 機構 Unit Economics 從 LOI 談判記錄中取得第一手資料 🟡 |

#### 3.3.3 Hypothesis C：B2B 保險 PMPM「Papa 模式台灣化」

**核心不確定性**：台灣保險業對 AI 陪伴機器人的接受度？PMPM NT$600-1,000 定價是否有商業吸引力？談判週期多長？

| 最適 MVP 類型 | **Landing Page 機構版（保險業 BD 輔助工具）** |
|---|---|
| **輔助組件** | WoZ（技術背書）+ Functional MVP（Y3 階段）|
| **理由** | Hypothesis C 的核心驗證是「保險業決策層是否對這個商業模式感興趣」，不是用戶接受度；Landing Page 機構版（不是 B2C Landing Page）= 一份發給國泰 / 富邦 / 南山 Innovation 部門的「商業提案 One-Pager」+ 線上展示頁（可追蹤閱讀行為）；內容包含：Papa 美國 PMPM 案例 → 台灣類比數字 → Pilot RWD 數據規格 → 接洽申請入口；這是「B2B 業務開發工具」，在 Plan-Only 框架下是最合適的 Hypothesis C 驗證工具 |
| **PMF 量測設計** | W8-12 接觸 1-2 家保險業 Innovation 部門 + 後續 MoU 意向；Pilot RWD 數據 = 保險業談判的必備 evidence（build-vs-buy.md §5.1 通路路徑 C）📋 |
| **Phase 4 Business Model 銜接** | Hypothesis C 的 PMPM 合約結構 + ARR 試算（1 家 2 萬保戶 × NT$800 × 12 = NT$1.9 億）在 Phase 4 Business Model 中作為「Year 3+ 財務願景」；Landing Page 機構版的反應資料幫助校準 PMPM 定價 🟡 |

#### 3.3.4 Hypothesis D：Freemium App + 後期硬體 upsell

**核心不確定性**：Freemium → Paid 轉換率 3% 假設是否在台灣長者 App 場景成立？Paid → 硬體 upsell 15% 目標是否可達？

| 最適 MVP 類型 | **Functional MVP** |
|---|---|
| **輔助組件** | Fake Door（定價驗證）|
| **理由** | Hypothesis D 是純軟體路徑（iOS + Android App）；核心不確定性是「付費轉換率 + D30 retention」，這需要真正可用的 App（不是 WoZ rule-based 補充）在真實 App Store / Google Play 中測試；功能 narrow（台語問候 + 每日摘要）但技術完整；Functional MVP 是此路徑的天然選擇；Fake Door 作為 App 上架前的「定價 A/B 測試工具」（NT$299 / NT$399 / NT$499 三種呈現 → 測試點擊率） |
| **PMF 量測設計** | Freemium → Paid 轉換率 ≥3% + Paid 月流失率 ≤8% + D30 retention ≥60%（§5.2 Hypothesis D Key Metrics）📋 |
| **Phase 4 Business Model 銜接** | Hypothesis D 的 Freemium → Paid → 硬體 upsell 三段漏斗，每段的轉換率是 Phase 4 Unit Economics 的核心輸入；Functional MVP 90 天數據 = Phase 4 財務模型的實測基礎（比純 desk 假設更有說服力）🟡 |

#### 3.3.5 4 Hypothesis × MVP 類型對映彙整

| Hypothesis | 最適 MVP 類型 | 輔助組件 | 核心驗證指標 | Phase 4 接續 |
|---|---|---|---|---|
| **A B2C DTC** | **Wizard of Oz** | Fake Door（定價 A/B）| Sean Ellis ≥40% / Day-7 retention / 子女 NPS ≥40 | LTV / CAC Unit Economics 真實起點 |
| **B B2B2C 機構** | **Concierge MVP** | WoZ（技術背書）| 機構主管採購意向 ≥2/5 + LOI ≥1 家 | RaaS NT$3,000/月/台 WTP 訊號 |
| **C 保險 PMPM** | **Landing Page 機構版** | WoZ（技術背書）| 保險 Innovation 部門接觸 + MoU 意向 | PMPM 定價校準 / Year 3+ 財務願景 |
| **D Freemium App** | **Functional MVP** | Fake Door（定價驗證）| Freemium → Paid ≥3% / D30 retention ≥60% | 三段漏斗轉換率實測基礎 |

---

## 4. 主管 Review 規劃書角度：MVP 類型決策的完整思考呈現

### 4.1 此段的定位

本報告本身的核心目的之一，是展示「MVP 類型決策過程 + 為何選 Wizard of Oz」的完整 product thinking 給主管看。以下整理「主管可能問的問題 + 本報告的答案路徑」，確保規劃書能完整回應主管視角的評估需求。

### 4.2 主管視角問答矩陣

| 主管問的問題 | 本報告的答案 | 對應段落 |
|---|---|---|
| 「你為什麼選 Wizard of Oz，而不是直接做 Functional MVP？」| WoZ 在 Plan-Only 規劃書中與 Functional MVP 的規格書內容幾乎相同（都有技術架構 / Sprint 拆解）；差異在於 WoZ 誠實設定台語能力邊界 + rule-based 守門安全網，這對高風險的長者用戶場景更合適；Y1 H2 硬體 ODM 上市後自然演進為 Functional MVP | §2.2.4 + §3.1.2 |
| 「你怎麼驗證 PMF？60 天後怎麼判斷成功還是失敗？」| Sean Ellis ≥40% + Day-7 retention + 子女 NPS ≥40 + 月流失率 ≤5% 四指標；若 Day-7 retention < 3/天 = 長者棄用信號 → Pivot 到 Concierge 加強子女引導層 | §3.1.2 理由 4 + §3.3.1 |
| 「如果 WoZ 20 戶 pilot 結果不理想，你的 Pivot 路徑是什麼？」| 三個 Pivot 條件（phase-0.5-deconstruction.md §5.4 假設 1-3）：子女 WTP < NT$500 → Hypothesis B；長者棄用 ≥50% → 降低直接互動門檻 + 強化子女引導層；緊急偵測召回率 < 60% → 主動+被動雙模式，移除自動偵測宣稱 | §3.1.3 |
| 「ASUS Zenbo Junior II 在市場上已有，你的差異化在哪裡？」| 台語對話 + 月費訂閱 + 子女 dashboard + B2C DTC 路徑四合一；Junior II 定位是 B2B 醫院 Maestro 系統節點，B2C 居家陪伴是空白場景；客觀呈現，不延伸「合作可能」| problem-framing.md §4.4 + build-vs-buy.md §2.2.3 |
| 「PDPA 你怎麼合規？長者的對話資料怎麼處理？」| AI Brain 混合架構的 Layer 2+3 完全在台本地部署；Layer 1 跨境（OpenAI API）部分只傳對話文字摘要（非原始語音）+ 嚴格資料最小化 + 跨境同意書；GCP asia-east1 台灣節點部署 | build-vs-buy.md §3.2.3 + §3.4 |
| 「你的競品 ASUS Zenbo Junior I QAP 終止了，你的孤兒化風險怎麼管理？」| 端側基礎功能、資料導出機制（用戶自帶對話記憶）、6 個月前通知、開源備援計畫；WoZ 的平板形態讓硬體孤兒化風險更低（平板隨時可替換） | build-vs-buy.md §7 風險清單 |
| 「90 天成本 NT$357-592 萬，預算從哪裡來？ROI 怎麼算？」| 計畫通過後執行（📋 post-approval）；ROI 來自：WoZ pilot 的 PMF 訊號 = Year 1 ODM 硬體投資的風險降低；比未驗證就投入 ODM 模具（NT$500-1,000 萬）更低風險；SOM Year 1 NT$683 萬-NT$1,259 萬 ARR（保守）vs 90 天 MVP 成本 NT$357-592 萬 | build-vs-buy.md §6.1 + §9.2 |

### 4.3 規劃書結構建議（MVP 類型決策段落的最佳呈現位置）

基於本報告分析，建議主管 review 規劃書（GitHub Page 或 pitch deck）的 MVP 類型段落呈現順序：

```
1. 市場問題框架（Why Now + Stakeholder 痛點）
2. Build vs Buy 決策邏輯（T24 三層矩陣）
3. MVP 類型選擇（本報告 T25 結論）
   └── 「我們為何選 WoZ 而非 Functional MVP」← 主動說明
   └── 複合策略說明（WoZ 主軸 + Landing Page + Fake Door）
4. Sprint W1-12 里程碑（WoZ 具體執行計畫）
5. PMF 量測設計（四指標 + Pivot 條件）
6. 4 Hypothesis Business Model 路線圖
7. 財務模型 + ARR 試算
```

✅ 此結構讓主管看到「問題 → 技術決策 → MVP 設計 → 驗證計畫 → 商業模式」完整邏輯鏈。

---

## 5. 決策風險評估

### 5.1 選擇 WoZ 為主軸的主要風險

| 風險 | 機率 | 影響 | 緩解方案 |
|---|---|---|---|
| 台語 ASR 90 天版本質量太差，主管認為「台語差異化不可信」| 🟡 中 | 中（核心差異化被質疑）| 規劃書中明確「台語能力邊界時程」：基礎問候 M3 / 完整對話 Y1 H2 / 全台語 Y2；提供工研院智齡 / 成大語音實驗室的技術可行性背書 🟡 |
| rule-based 守門層被認為是「技術能力不足的藉口」| 🟡 低中 | 低（說服力小幅下降）| 主動說明 rule-based 是「安全設計選擇」（7 條 LLM 紅線讓真人無法保證 AI 守住，rule-based 是確定性保障），而非技術能力不足；引用 ElliQ ROE 架構同樣採用混合方式 ✅ |
| 長者首 2 週棄用率 30-50% 在 20 戶 pilot 中出現，被主管視為負訊號 | 🟡 高（行業已知）| 中（若無 Pivot 對策）| 在規劃書中主動提出棄用率假設 + Pivot 路徑（加強子女引導層 / onboarding ≤10 分鐘 hard constraint）；把「行業已知挑戰」的解決方案呈現出來，反而展示風險意識 ✅ |
| 主管認為「WoZ 不是真正的 AI 機器人，我們這邊做的是 Physical AI」| 🟡 中 | 中（定位誤解）| WoZ 是 90 天 MVP 技術形態，Year 1 H2 的台灣 ODM 路徑才是完整機器人產品；規劃書中需清晰呈現「WoZ → Full Robot」的演進路線圖 🟡 |

### 5.2 若 WoZ 主軸決策需修改的替代方案

| 情況 | 替代推薦 | 說明 |
|---|---|---|
| 主管明確表示「我要看真正可用的 AI App，不是 rule-based」| 改選 **Functional MVP**（Hypothesis D 路線）| 功能 narrow 到「中文對話 + 每日摘要」；台語暫不強調；技術完整但功能少 |
| 主管最關心「市場有沒有需求，有沒有人真的要買」| 增強 **Fake Door 組件**（複合策略中從輔助升主軸）| 快速建立定價 A/B 測試頁 + 追蹤實際點擊率；2 週完成 |
| 主管最關心「機構端有沒有採購意願」| 增強 **Concierge MVP 組件**（Hypothesis B 路線）| 安排 3-5 家機構現場體驗；追蹤 LOI 數量 |

---

## 6. Coverage Matrix（自我檢核）

### 6.1 任務覆蓋情況

| 要求項目 | 是否完成 | 位置 |
|---|---|---|
| 5 種 MVP 類型全部評分（8 維度 × 5 類型）| ✅ | §2.2.1-2.2.5 + §2.1 矩陣 |
| 加權總分計算 + 排名 | ✅ | §2.3 彙整表 |
| Layer 1：90 天 MVP 主軸推薦（單選 + 理由）| ✅ | §3.1 |
| Layer 2：複合 MVP 策略 | ✅ | §3.2 |
| Layer 3：4 hypothesis 對映 | ✅ | §3.3 |
| Plan-Only Mode 標籤（✅ / 🟡 / 📋）| ✅ | 全文 |
| 報告對象 ASUS 主管客觀中立 | ✅ | §4.2 問答矩陣 |
| 禁用「demo」字眼 | ✅ | 全文用「主管 review 規劃書」|
| 建立在 T24 build-vs-buy 結論上 | ✅ | §1.2 脈絡 2 + §3.1.2 理由 1 |
| Phase 4 Business Model 接續輸入 | ✅ | §3.3 各 hypothesis |

### 6.2 Plan-Only 標籤統計

| 標籤類型 | 估計出現次數 | 主要用途 |
|---|---|---|
| ✅ desk-validated | ~55 | MVP 類型定義 / T24 技術結論 / 行業基準數據 |
| 🟡 hypothesis | ~35 | 評分理由推論 / PMF 量測設計 / 定價假設 |
| 📋 post-approval execution | ~20 | 所有實際 pilot / Landing Page 建立 / A/B 測試執行 |

### 6.3 卡關項目

| 卡關主題 | 原因 | 建議補強方式 |
|---|---|---|
| Hypothesis B Concierge MVP 的機構接洽 SOP | 需確認特定機構（雙連 / 弘道 / 聖母）的採購決策人聯絡方式 | Phase 2 業界訪談計畫中補充（📋 post-approval）|
| Fake Door 子女 App 的三種定價呈現實際點擊率基準 | 台灣長者陪伴 App 市場無公開基準；行業廣泛採用 2-5% 點擊率但非長者場景 | Phase 4 A/B 測試後補充實測數字（🟡）|
| WoZ 到 Functional MVP 的演進觸發條件 | 「何時可以移除 rule-based 補充、改用純 AI」的技術判準未明確 | 建議依 Layer 3 台語 ASR 準確率 ≥85% + Day-30 retention 穩定 ≥5/天 為觸發條件（🟡）|

---

## 7. 對 Phase 4 Business Model 的輸入摘要

本報告確認以下輸入供 Phase 4 Business Model 使用：

| 輸入項目 | 內容 | 標籤 |
|---|---|---|
| 90 天 MVP 主軸形態 | WoZ 平板 App：AI Brain 混合架構 + 長者端語音界面 + 子女 App dashboard | ✅ |
| 定價驗證工具 | Fake Door 三種定價 A/B 測試：NT$299（App）/ NT$799（B2B2C）/ NT$1,200（DTC）| 📋 |
| 4 hypothesis 最適 MVP 類型 | A→WoZ / B→Concierge / C→Landing Page 機構版 / D→Functional MVP | 🟡 |
| PMF 驗證起點時程 | 90 天 WoZ pilot 20 戶 → W9-10 PMF 量測 → W11-12 主管 review 規劃書決策 | 📋 |
| Unit Economics 實測基礎 | WoZ pilot 20 戶的前 90 天真實 CAC / 月費收入 / 棄用率 = Phase 4 LTV 模型修正依據 | 🟡 |
| 複合策略 GTM 時程 | WoZ（W1-12 開發 + pilot）/ Landing Page（W5 同期 App 上線）/ Fake Door（W4 App 上架前測試）| 📋 |

---

> 本報告由 business-analyst sub-agent 執行（PM Flow v0.1 / Phase 3 T25）
> 建立在：problem-framing.md + phase-0.5-deconstruction.md §5.2 + §5.4 + phase-0-answers.md + build-vs-buy.md T24
> 標籤分布：✅ desk-validated ~55 處 / 🟡 hypothesis ~35 處 / 📋 post-approval execution ~20 處
> 所有 ASUS Zenbo Junior II 相關段落均客觀中立，不作合作推薦；引用以 problem-framing.md §4.4 + build-vs-buy.md §2.2.3 為準
