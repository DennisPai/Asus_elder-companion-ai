# Pricing Strategy — 長者互動陪伴機器人 × AI Brain
**Version**: v1（W5-6 規劃）
**Date**: 2026-05-27
**Phase**: PM Flow v0.1 Phase 4 T32
**Source**: lean-canvas.md §1 Block 6 / wtp-payer.md §1-§4 / problem-framing.md §4 / phase-0.5-deconstruction.md §5.2 / phase-0-answers.md / persona.md / jtbd-day-in-life.md / feature-triage.md §9.1

> **Plan-Only Mode**：本文件所有定價數字標 ✅ desk-validated / 🟡 hypothesis / 📋 post-approval execution。定價是「v1 規劃書」，非「已定價產品」。
> **報告對象**：華碩（ASUS）負責 AI 代理人 / 服務型機器人主管 1 位。客觀中立，ASUS Zenbo Junior II 競品引用 ASUS 官方公開資訊，不推銷合作論述。
> **禁用字眼**：demo（改稱「主管 review 規劃書」）。

---

## 0. Executive Summary

本文件對「長者互動陪伴機器人 × AI Brain」MVP 及 Year 1-3 演進產出完整三層 pricing 策略：

1. **定價模式**：Value-based 主導 + Subscription Tiered 結構 + Penetration 入市策略（三模式組合）
2. **三層 Tier**：Starter NT$799/月 / Pro NT$1,290/月 / Premium Custom 年約（對應 Persona B / A / C 三個 WTP 區間）
3. **WTP 錨點**：四框架交叉中位數 NT$1,000-1,500/月（wtp-payer.md §1.5），Tier 2 NT$1,290 落中位區間 🟡
4. **Anchor + Decoy**：Premium 作為 Anchor 拉抬 Pro 感知、Starter 作為 Decoy 引導上 Pro
5. **Madhavan 9 Rules**：每個定價決策對應 1-2 條 rule，完整列舉於 §2

---

## §1. 5 種 Pricing Model 對比

### 1.0 決策樹

```
Value 明確（子女對「安心 + 安全」有情感溢價）→ value-based
競品定價在台灣 B2C 場景幾乎空白 → 可主導定價，不需 race to bottom
用量差異不明顯（月費定額 vs token-heavy edge case）→ usage-based 非主流
CAC 高（初期 NT$5,000-8,000）需要多層入口 → Freemium + tiered 補充
先行者 12-24 月護城河期 → Penetration（而非 Skimming）先佔市場
```

**結論**：
- **主模式**：Value-based（感知價值對標家庭月照顧費 NT$22K 的 3.6-5.9%）
- **結構**：Subscription Tiered（3 tier，Starter / Pro / Premium）
- **入市策略**：Penetration（Tier 1 NT$799 設低 → 習慣養成後自然升 Tier 2）
- **輔助**：Freemium App NT$299 作為最低進入門檻入口（Hypothesis D）

🟡 以上組合基於 desk research，Phase 2 訪談後可能需調整（wtp-payer.md §7.2）

---

### 1.1 各模式 8 維度評分

> 評分 1-5（5 = 最適本案），說明適用性

#### 模式 A：Cost-plus（成本加成）

| 維度 | 評分 | 說明 |
|---|---|---|
| 商模適合性 | 2 | 硬體+訂閱混合：BOM NT$12K + AI 雲端 NT$200-300/月，成本加成定價不反映陪伴「安心感」溢價 |
| 市場信號 | 2 | 用成本定價等同向競品揭示毛利結構；硬體毛利 20%、訂閱毛利 61% — 競爭者逆推定價困難但仍不可取 |
| WTP 覆蓋率 | 2 | NT$12K BOM + 20% = NT$14,400 → 定價 NT$15K 合理；但月費成本 NT$300 × 加成 3× = NT$900 — 低估 WTP（四框架中位 NT$1,000-1,500）|
| 擴展性 | 2 | 量產 BOM 降至 NT$10K 後定價應調整，但 cost-plus 會對用戶透露定價彈性 |
| 品牌定位 | 1 | 成本加成定價被感知為「工廠出廠價」，不利情感型服務品牌建立 |
| 操作簡單性 | 5 | 最容易計算與解釋 |
| 對競品保護 | 1 | 等同公開告知競爭者成本結構 |
| 孝親溢價反映 | 1 | 完全無法捕捉子女「為父母安心多付」的情感溢價 |
| **綜合評分** | **2.0/5** | **不選為主模式；BOM 計算用於設定價格下限（hard floor）** |

#### 模式 B：Competitive（競品對標）

| 維度 | 評分 | 說明 |
|---|---|---|
| 商模適合性 | 3 | ElliQ USD 29.99-59/月（NT$914-1,800）、GrandPad USD 59-65/月（NT$1,800-1,983）為本案上界參考 ✅；但本案台灣本地化優勢應有溢價 |
| 市場信號 | 3 | 競品定價反映海外 WTP，不直接等同台灣 WTP（wtp-payer.md §1.1 PPP 調整後 NT$763-1,800）|
| WTP 覆蓋率 | 3 | 直接對標 ElliQ USD 29.99/月 = NT$914 → Tier 1 NT$799 稍低，有理由；對標 ElliQ $59/月 = Tier 2 NT$1,290 合理 |
| 擴展性 | 3 | 競品若降價（ElliQ 日本版 2026），本案需重新校準；Year 2 競品進台灣前需護城河已建立 |
| 品牌定位 | 3 | 對標競品不能傳達台灣特色差異化 |
| 操作簡單性 | 4 | 參考競品容易解釋給主管 |
| 對競品保護 | 2 | 若純依競品定價，競品降價則本案定價無根基 |
| 孝親溢價反映 | 2 | 競品多為美國長者場景，台灣孝道文化情感溢價未計入 |
| **綜合評分** | **2.9/5** | **輔助用：三 Tier 定價各自與競品對標，確保不超出市場接受上界** |

> **ASUS Zenbo Junior II 定價參考（客觀中立）**：Zenbo Junior II 硬體售價 NT$15,000 左右（官方公告，依各通路略有差異）。本案 Tier 1 硬體 NT$9,990、Tier 2 硬體 NT$15,000 對標 Zenbo Junior II 硬體定價區間；但兩者定位不同 — Zenbo Junior II 2024 年已轉型 B2B 醫院 Maestro 系統節點，本案鎖定 B2C DTC 居家月費訂閱，為不同市場。對標引用 ASUS 官方公開資訊，不延伸為競合或合作推測。✅

#### 模式 C：Value-based（價值對標）

| 維度 | 評分 | 說明 |
|---|---|---|
| 商模適合性 | 5 | 情感型服務（陪伴 + 安全感）WTP 與功能成本不成線性比例；子女為父母安心的情感溢價 = value-based 核心應用場景 |
| 市場信號 | 5 | 家庭月照顧費 NT$22K 是自然錨點；NT$1,290 = 5.9%，「家庭看護 1/17 費用」框架可接受 |
| WTP 覆蓋率 | 5 | 四框架交叉中位 NT$1,000-1,500（wtp-payer.md §1.5）→ Tier 2 NT$1,290 精準落中位 ✅ 🟡 |
| 擴展性 | 4 | 隨 AI Brain 功能深化（台語語料庫 / 個人記憶 / 緊急 SLA），感知價值上升，定價可隨時間微調上升 |
| 品牌定位 | 5 | 情感型服務品牌 = value-based 定價傳達「我們值得這個價格」；與超低定價競品拉開品質感知 |
| 操作簡單性 | 3 | 需持續量測 WTP；Phase 2 訪談前 desk 推算（🟡） |
| 對競品保護 | 5 | 護城河在感知價值而非定價，競品難以「降價複製」情感陪伴質量 |
| 孝親溢價反映 | 5 | 台灣孝道文化「為父母花錢不猶豫」情感溢價完整捕捉 |
| **綜合評分** | **4.6/5** | **主模式。每個 Tier 定價以感知價值比為核心，成本只設下限** |

#### 模式 D：Subscription Tiered（多層級訂閱）

| 維度 | 評分 | 說明 |
|---|---|---|
| 商模適合性 | 5 | SaaS 月費模式符合照顧需求長期持續性（子女照顧父母 5-10 年）；硬體+月費組合提升切換成本 |
| 市場信號 | 4 | 台灣 Netflix / Spotify 訂閱習慣成熟（Persona A persona.md §1.7）；月費概念接受度高 |
| WTP 覆蓋率 | 5 | 三層覆蓋三個 WTP 區間（B persona NT$600-900 / A persona NT$1,200-2,400 / C persona NT$2,000-3,500）|
| 擴展性 | 5 | 年付折扣 + 家庭方案 + 年合約可在 Tiered 架構內擴充而不增加主線複雜度 |
| 品牌定位 | 4 | Three tier = Good/Better/Best 框架主管熟悉，易於說服投資 / 合作夥伴 |
| 操作簡單性 | 4 | Tier 邊界設計需精確（功能落差需讓升級動機明確），但框架本身清晰 |
| 對競品保護 | 4 | Tier 2 / 3 高端功能護城河（台語語料 / 個人記憶）競品難以複製 |
| 孝親溢價反映 | 4 | Tier 3 Premium 年約反映「品質購買者」願意支付更高年費取得 SLA 保障 |
| **綜合評分** | **4.4/5** | **結構選擇。以 Tiered 框架實現 value-based 定價落地** |

#### 模式 E：Penetration vs Skimming

| 維度 | 評分（Penetration）| 說明 |
|---|---|---|
| 商模適合性 | 4 | 先行者窗口 12-24 月（problem-framing.md §1.5 趨勢 4）+ 護城河需靠台語語料庫規模效應 → 低定價先跑量 |
| 市場信號 | 4 | 台灣 B2C 長者照顧 app 市場 greenfield（無強競品），先跑量才能建資料護城河飛輪 |
| WTP 覆蓋率 | 3 | Penetration 低定入 → Tier 1 NT$799 = 市場下界 Oxford PPP NT$763 以上；不過低損害品牌 |
| 擴展性 | 4 | Tier 1 → Tier 2 升級路徑是 Penetration → Value 遷移的核心 |
| 品牌定位 | 3 | Penetration 定價不傳達高端服務感知；需 Tier 3 作為 Anchor 提升品牌 Halo |
| 操作簡單性 | 4 | 進入市場設定低 Tier，推廣說話容易 |
| 對競品保護 | 3 | 先建用戶池 = 護城河；若 Y2 競品進入時已有 WTP 數據 + 台語語料，競品難從低定價切入 |
| 孝親溢價反映 | 2 | Penetration 定價容易被感知為「便宜 = 低品質」；行銷必須強化「這是孝親訂閱，不是便宜 app」|
| **綜合評分** | **3.4/5** | **輔助策略。Tier 1 採 Penetration 邏輯（NT$799 低於 WTP 中位），Tier 2/3 採 Value 邏輯** |

---

### 1.2 模式選擇結論

**選定組合**：Value-based（主）+ Subscription Tiered（結構）+ Penetration（Tier 1 入市）

**理由（3 句）**：
1. 長者陪伴是「情感型 + 安全感型」服務，WTP 與功能成本不成線性，只有 value-based 能捕捉子女「為父母安心多付」的孝親情感溢價（wtp-payer.md §4.2 損失趨避 + §4.5 定價相對性）。
2. 三個截然不同的 Persona WTP 區間（B: NT$600-900 / A: NT$1,200-2,400 / C: NT$2,000-3,500）需要 Tiered 結構分層覆蓋，避免用同一價格過低服務高端或過高嚇退入門。
3. 先行者護城河（台語語料庫飛輪）依賴用戶規模，Tier 1 採 Penetration 邏輯（NT$799）降低入門門檻快速積累，12-24 月後護城河建立再調整定價結構。

---

## §2. Madhavan 9 Rules 適用性

> 來源：Ramanujam & Tacke (2016), *Monetizing Innovation*, Wiley. 9 rules of pricing for innovation.

### 2.0 4 失敗類型避免矩陣

Madhavan 提出 4 類創新貨幣化失敗：Feature shock（功能過多）/ Minivation（定價過低）/ Hidden gem（高價值卻沒人知道）/ Undead（無人要卻繼續賣）。

| 失敗類型 | 本案風險 | 避開策略 | 證據 |
|---|---|---|---|
| **Feature shock**（同 Tier 塞太多功能）| ⚠️ 中風險：Tier 2 有 8+ feature 可能過多 | Tier 設計分層——Tier 1 限 5 個 Must-have feature；Tier 2 加 Should-have；Tier 3 才含 Could-have（feature-triage.md §9.1）| feature-triage.md MUST 8 個 / SHOULD 7 個分層明確 |
| **Minivation**（定價過低、低估市場）| 🟡 Tier 1 NT$799 有此風險 | Oxford PPP 下界 NT$763（desk-validated），NT$799 已在下界之上；Tier 1 明確設為 Penetration 不是最終主力 ARPU tier | wtp-payer.md §1.3 Framework C |
| **Hidden gem**（高價值沒人知）| ⚠️ 台語對話 + 個人記憶 AI 是 Excitement feature，B2C 行銷需讓子女感知 | 行銷素材突出「台語說話老爸才真的放心 / AI 記住每個故事」情感訴求；Tier 2 差異化列點需清楚對應情感場景 | persona.md §1.3 Vignette 三場景均有台語需求 |
| **Undead**（沒人要仍繼續賣）| 🟡 Freemium App NT$299 若轉換率 < 0.5% 有風險 | W6 / W8 / W12 三個 Pivot/Persevere/Kill 決策點（lean-canvas.md §3 切換 Trigger）；Freemium App 設有「Paid → 硬體 Upsell ≥15% KPI」；未達觸發 Kill | lean-canvas.md §4 切換 Trigger 表 |

---

### 2.1 Rule 1：Customer Perceived Value > Price

**Madhavan 定義**：定價不得超過目標客戶感知到的價值上界；超過則棄購。

**本案應用**：
- **感知價值框架**：家庭月照顧費 NT$22K → NT$1,290 = 5.9%（感知：「極小比例」）✅
- **框架工具**：購買頁面「您現在每月照顧父母支出多少」計算器，自填後顯示「NT$1,290 佔 X%」（wtp-payer.md §4.1）
- **四框架 WTP 中位 NT$1,000-1,500**（wtp-payer.md §1.5）→ Tier 2 NT$1,290 落中位，未超過感知價值上界 🟡
- **Tier 3 風險**：Premium Custom 年約月均 NT$2,917-4,583 — 僅 Persona C WTP 中位 NT$3,000 上界支撐，需個別報價對齊感知（wtp-payer.md §2 Tier 3 設計）

🟡 Phase 2 訪談前為 desk 推算，NT$1,290 可能稍高於部分 A persona WTP 下界（NT$1,200）。

---

### 2.2 Rule 2：Price Before Product（定價策略先於產品開發）

**Madhavan 定義**：在大量開發資源投入前，先用定價假設測試客戶 WTP，避免開發完才發現定價錯誤。

**本案應用**：
- **Phase 2 Mom Test 訪談設計**（§3）即在 Phase 5 Prototype Build 前設計 WTP 驗證題組
- **feature-triage.md §9.1 Caveat 1**：哪些 feature 撐 NT$1,290/月（F01+F02+F10+F09+F12）已在 Sprint 規劃前釐清
- 若 Phase 2 訪談顯示 WTP 系統低估（< NT$800），§10 風險清單列明 pivot 路徑

📋 Phase 2 訪談是 Rule 2 執行的核心節點。

---

### 2.3 Rule 3：Segment Customers by WTP（依 WTP 區間切分客群）

**Madhavan 定義**：不同客群 WTP 差異顯著時，必須分層定價而非取中間值。

**本案應用**：
- **Persona A**（北漂 IT）WTP 中位 NT$1,200-2,400 → Tier 2 Pro NT$1,290 對應 🟡
- **Persona B**（在地中產）WTP 中位 NT$600-900 → Tier 1 Starter NT$799 對應 🟡
- **Persona C**（退休前高端）WTP 中位 NT$2,000-4,000 → Tier 3 Premium Custom 對應 🟡
- 三層差距清晰（NT$799 / NT$1,290 / NT$2,917-4,583），WTP 跨度 5×，不適合用單一定價折中

✅ 已在 Tier 設計中完整體現。

---

### 2.4 Rule 4：Choose the Right Pricing Metric

**Madhavan 定義**：計費單位應與客戶消費的核心價值對齊（per-seat / per-usage / per-outcome）。

**本案應用**：
- **選定：Per-household / Per-month（每戶每月訂閱）** — 因為子女買的是「持續安心」而非單次事件，月費訂閱正確反映持續照顧需求
- **不選用 usage-based**（per-conversation / per-alert）：長者每日使用量差異大，usage-based 會讓子女焦慮「父母用太多 = 費用飆升」，反而降低 WTP
- **Freemium App 例外**：NT$299/月 App 版本對應「試驗期」子女，月費讓轉換成本最小化
- **機構 B2B2C 例外**：NT$3,000/月/台 是 per-device 計費，符合機構採購邏輯（量大可議）

✅ 月費 per-household 是情感型照顧服務的正確 pricing metric。

---

### 2.5 Rule 5：Use a Pricing Architecture

**Madhavan 定義**：用結構化的 Good / Better / Best 三層，利用 Anchor + Decoy 心理機制，引導客戶向高利潤層移動。

**本案應用**：
- **Good → Tier 1 Starter NT$799**：低 ARPU 但建立習慣 + 資料 + 口碑
- **Better → Tier 2 Pro NT$1,290（主力 ARPU）**：Madhavan 建議 70% 用戶選中層；本案預期 Persona A 30-40% 🟡
- **Best → Tier 3 Premium Custom**：低人數但貢獻高 ARPU + Anchor 效果（§5）
- **Anchor 機制**：Tier 3 Premium 高端定位讓 Tier 2 「顯得實惠」
- **Decoy 機制**：Tier 1 NT$799 vs Tier 2 NT$1,290，差額 NT$491 換取多子女帳號 + 台語 + 個人記憶 → NT$491/月「感覺合理」

詳見 §5 完整 Anchor + Decoy 設計。

---

### 2.6 Rule 6：Communicate Value, Not Price

**Madhavan 定義**：推廣時先傳達價值再提到定價；不要讓價格成為購買決策的起點。

**本案應用**：
- **行銷順序**：① 父母孤單 / 跌倒風險畫面（情感痛點）→ ② 解決方案（AI 每天陪伴 + 緊急通知）→ ③ 「一個月只比一頓家庭聚餐多一點」→ ④ 選方案
- **禁止**：banner 廣告直接寫「NT$799」而不解釋功能（「便宜」感知損害品牌）
- **Persona A 語言**：「不需每天打電話，有事第一個知道——NT$1,290/月，家庭月照顧費的 5.9%」
- **Persona B 語言**：「讓你安心去上班，AI 替你盯著——NT$799/月，每天不到 NT$27」

---

### 2.7 Rule 7：Understand Your Customer's Customer（B2B 場景）

**Madhavan 定義**：B2B 定價時，需理解客戶的客戶（終端用戶）如何受益，B2B 客戶付費意願才能最大化。

**本案 B2B2C 應用**（Hypothesis B 機構端）：
- **機構的客戶 = 個案家庭 + 個案長者**
- 機構 NT$3,000/月/台 的 WTP 根本是「機構用戶留存率提升 + 個案家屬 NPS 提升 + 補貼回收」三個值疊加
- 台灣 B2B2C 機構 pricing：NT$3,000/月 對齊長照 3.0 補貼 NT$60K/3 年 = NT$20K/年 = NT$1,667/月，機構自付差額 NT$1,333/月（可接受，對標 SoftBank Pepper RaaS $671/月 ✅）
- 個案家庭端 NT$799/月 低於 B2C NT$799，機構背書替代 CAC（phase-0.5-deconstruction.md §5.2 Hypothesis B Revenue）

---

### 2.8 Rule 8：Create a Pricing Strategy Roadmap

**Madhavan 定義**：定價不是一次決定，需有明確的迭代時程與校準觸發點。

**本案時程**：
- **v1（本文，W4-6）**：desk research 假設定價，Phase 2 訪談設計準備
- **v2（W8-10）**：Phase 5 WoZ Pilot 前，基於 Phase 2 Mom Test 5-8 訪談結果校準（尤其 Tier 1/2 邊界）
- **v3（W12+）**：Phase 6 Closed Beta 10-20 戶後，基於真實用戶 ARPU + 留存率校準

詳見 §9 Pricing Iteration Roadmap。

---

### 2.9 Rule 9：Never Stop Pricing（持續校準）

**Madhavan 定義**：Product-Market Fit 是動態的，定價同樣需隨市場反饋持續迭代。

**本案應用**：
- **Year 1 H2**：年付折扣測試（25% off）測量 annual vs monthly 轉換率
- **Year 2**：競品（ElliQ 日本版 2026 / 可能台灣版 2027-2028）進入時重新競品 benchmark
- **Year 3+**：保險 PMPM（Hypothesis C）啟動時，需要獨立定價架構（NT$600-1,000 PMPM 不與 B2C Tier 衝突）
- 💡 **預防性機制**：W8 / W12 / W26 三個定期定價 review 排進 Sprint 計畫

---

## §3. WTP 訪談計畫（Interview-based + Desk-based 雙軌）

### 3.1 Desk-based WTP 基準線（已完成）

| 基準 | WTP 推算 | 來源 |
|---|---|---|
| ElliQ USD $29.99-59/月（無緊急功能）| NT$914-1,800（本案含緊急通知可對標上界 NT$1,800）| wtp-payer.md §1.1 Framework A ✅ |
| GrandPad USD $59-65/月（含硬體租賃）| NT$1,800-1,983（含硬體攤提，純月費對標 NT$1,200-1,500）| wtp-payer.md §1.1 Framework A ✅ |
| 台灣家庭月照顧費 NT$22,000 × 5-6% | NT$1,100-1,320 | wtp-payer.md §1.2 Framework B ✅ |
| Oxford Caregiver WTP（2016）PPP 換算 | NT$763-1,068（監測 + AI 協助）| wtp-payer.md §1.3 Framework C ✅ |
| Persona A ARPU 比率 2-4% | NT$1,200-4,800（中位 NT$2,000）| wtp-payer.md §1.4 Framework D 🟡 |
| Persona B ARPU 比率 1.5-2% | NT$600-1,600（中位 NT$900）| wtp-payer.md §1.4 Framework D 🟡 |
| Persona C ARPU 比率 2-2.5% | NT$2,000-5,000（中位 NT$3,000）| wtp-payer.md §1.4 Framework D 🟡 |
| **四框架交叉中位** | **NT$1,000-1,500/月** | wtp-payer.md §1.5 ✅🟡 |

**三 Tier 對應 WTP 區間**：
- Tier 1 Starter NT$799 → 落 Framework C 下界（NT$763-1,068）略上，覆蓋 Persona B + 保守族群
- Tier 2 Pro NT$1,290 → 精準落四框架交叉中位（NT$1,000-1,500），對應 Persona A 主流
- Tier 3 Premium Custom NT$2,917-4,583/月均 → 對應 Persona C WTP 中位 NT$3,000+

### 3.2 Interview-based WTP 計畫

> 📋 post-approval execution（Phase 2 訪談計畫設計，非已執行訪談）

#### 訪談對象篩選標準

**Tier 1 候選（目標 4-5 人）**：
- 篩選：在地中產照顧者 45-55 歲（Persona B）；同縣市或 1 小時車程；月收 NT$40K-80K；父母有至少一項慢性病或認知退化信號；非科技 early adopter（不主動搜尋 app）；已有使用長照服務（個管中心 / 喘息服務）
- 招募：長照 A 級個管中心轉介 / 台灣照顧者關懷總會 Facebook 社群

**Tier 2 候選（目標 4-5 人）**：
- 篩選：北漂 IT / 服務業白領 35-45 歲（Persona A 主力）；父母異縣市（1.5 小時以上）；月收 NT$60K-120K；有訂閱服務習慣（Netflix / Spotify）；父母過去 12 個月有至少一次讓子女擔心的事件（跌倒 / 出院 / 認知問題）；科技 early adopter 傾向
- 招募：Facebook 親子照顧社群（「照顧父母這條路」/ 「高齡父母照顧」）/ 辦公室同事轉介

**Tier 3 候選（目標 2-3 人）**：
- 篩選：退休前雙工作夫妻 50-55 歲（Persona C）；父母 80+ 且已有外籍看護或多種照顧安排；雙薪月收 NT$200K+；對品質 / 服務保障要求高；願意為照顧花費「不限預算，要品質」
- 招募：私人家醫診所 / 高端健康管理中心 / LinkedIn（職業社群）

#### 訪談題組（Mom Test 合規，≥5 題，不問假設意願）

> Mom Test 鐵則：詢問過去具體行為 / 事件，不問「會不會買」；在第 4 題前不提具體定價錨點。

**題 1（過去支出行為）**：
「上個月你為了爸爸或媽媽，花了哪些錢？包含時間折算進去你覺得大概是多少？最大的一筆是什麼？」
→ 量測現有照顧費基準線，建立 WTP 參照，不預設方向

**題 2（過去緊急事件具體量測）**：
「最近一次爸媽出了狀況或讓你特別擔心，是什麼情況？你是怎麼知道的？從知道到確認沒事，你花了多少時間和精力？」
→ 驗證緊急事件代價（對應 F09/F10 feature 的核心 WTP driver）

**題 3（現有解法成本）**：
「你現在怎麼確認爸媽每天還好？這件事每個月大概花你多少時間？你覺得夠嗎？」
→ 了解現有解法成本，建立替代比較基礎

**題 4（決策路徑 + 定價錨點測試）**：
「如果有一台設備讓爸媽不孤單、跌倒會馬上通知你，硬體 NT$15,000 + 每個月 NT$1,290——你會怎麼跟另一半 / 兄弟姐妹討論？誰最先反對，原因大概是什麼？」
→ 了解決策鏈阻力（配偶否決 / 兄弟姊妹衝突）；此時才出現定價錨點 NT$1,290

**題 5（比較感知 + WTP 相對性）**：
「NT$1,290/月，你現在在 Netflix / Spotify / 健身房的月費大概多少？你覺得這個跟那些東西的『值得程度』怎麼比？」
→ 讓受訪者自建相對感知，不直接問「貴不貴」；捕捉孝親溢價心理

**題 6（Tier 差異化感知）**：
「如果 NT$799 只有基礎功能、緊急通知、單子女帳號；NT$1,290 多了多子女帳號（兄弟姐妹都能收通知）+ AI 每週報告 + 台語識別——你覺得這 NT$491 的差額值嗎？為什麼？」
→ 直接測試 Tier 1 → Tier 2 升級動機，驗證 feature 差異化是否足夠

**題 7（WTP 上界測試，有錨點後）**：
「NT$1,290 可以接受的話——如果再貴 NT$300 到 NT$1,590，你願意嗎？不願意的原因是什麼？」
→ 探測 Tier 2 WTP 上界，為 v2 定價校準提供數據

**量化通過標準**：
- **Tier 1 NT$799 假設通過**：≥3/5 Persona B 受訪者在題 4 中對 NT$1,290 表示「有點貴」或「NT$800 左右比較可能」= Tier 1 定位正確
- **Tier 2 NT$1,290 假設通過**：≥4/5 Persona A 受訪者在題 4+5 中表達「NT$1,290 可以接受」或主動比較說「比每週帶父母一次餐廳便宜」= 中位數落點確認
- **Tier 2 升級動機確認**：≥4/8 受訪者在題 6 說「多子女帳號很重要」= feature-triage.md §9.1 Caveat 1 驗證

#### 訪談時程（Plan-Only 📋）

| 週次 | 執行 |
|---|---|
| **W5**（本週）| 完成訪談題組設計（本文 §3.2）+ 招募篩選標準確認 |
| **W6**（post-approval）| 招募 Tier 1 候選 4 人 + Tier 2 候選 4 人（共 8 人）📋 |
| **W7**（post-approval）| 完成 Tier 1 × 4 訪談 + Tier 2 × 4 訪談（30-45 分鐘/人）📋 |
| **W8**（post-approval）| 追加 Tier 2 × 1 + Tier 3 × 2 訪談 📋 |
| **W9**（post-approval）| 結果分析 → pricing-tier v2（§9 Roadmap v2 節點）📋 |

---

## §4. 三層 Tier 完整定義

### 4.0 Tier Summary Table

| Tier | 月費 | 一次性硬體 | 家庭照顧費佔比 | Target Persona | WTP 區間 | 預期 Mix |
|---|---|---|---|---|---|---|
| **Starter** | NT$799/月 | NT$9,990（軟體 only 版）/ NT$15,000（入門硬體）| 3.6% | Persona B 在地中產 + Freemium 升級 | NT$600-1,000 | 50% 🟡 |
| **Pro** | NT$1,290/月 | NT$15,000 | 5.9% | Persona A 北漂 IT（Primary ICP）| NT$1,000-1,500 | 40% 🟡 |
| **Premium** | Custom 年約 | Custom | 13-21% | Persona C 高端 + B2B2C 機構 | NT$1,500-4,000 | 10% 🟡 |

---

### 4.1 Tier 1：Starter（NT$799/月）

#### 核心定位

「基礎陪伴 + 緊急安心網」的入門訂閱，讓 Persona B 在地中產照顧者以最低月費感受陪伴價值，同時作為 Freemium App（NT$299/月 D Hypothesis）升級後的第一個硬體 Tier。

#### 功能邊界

| 分類 | 包含功能 | Feature 對應 | 說明 |
|---|---|---|---|
| **核心對話** | 每日主動問候（早晨 + 傍晚）| F01 Must-be | 陪伴核心，不可缺 |
| **核心對話** | 中文語音對話（多輪，每日上限 60 分鐘）| F02 Must-be | 基礎台語問候 ≥20 句包含，不含完整台語識別 |
| **緊急安全** | 緊急按鈕快速呼叫（語音 + 觸控）| F09 Must-be | 語音「幫我叫救護車」→ 子女通知 + 119 引導語 |
| **緊急安全** | 子女緊急通知推播 ≤5 分鐘 | F10 Must-be | 1 個子女帳號 |
| **子女端** | 服藥提醒（語音，朋友語氣，每日 ≤3 次）| F11 Should | 朋友語氣設計通過 Adversarial Test 後開啟 |
| **無障礙** | 超大字 / 高對比 UI（≥24pt）| F20 Must-be | 視力退化友善 |
| **控制** | 長者停止 / 暫停提醒主動控制 | F21 Must-be | 長者說「不要提醒」→ AI 暫停 24 小時 |
| **合規** | 隱私資料刪除 / 記憶導出 | F22 Must-be | 退訂後 30 天刪除；JSON 匯出 |
| **onboarding** | 子女遠端 onboarding ≤10 分鐘 | F13 Must-be | ≤5 步；不需現場 |

**不含功能（Tier 1 限制）**：
- 子女帳號：僅 1 位（不含多子女帳號）
- 台語完整識別：基礎問候句 ≥20 句，不含完整台語對話 LLM
- 對話記憶：7 天保留（不含 90 天長期記憶 RAG）
- AI 每日摘要推播：❌ 不含（Tier 2 差異化）
- 認知遊戲：❌ 不含
- 健康趨勢報告：❌ 不含
- 技術支援：工作日 Email（≤24 小時回應）；無電話支援

#### 硬體方案

| 硬體方案 | 一次性費用 | 說明 |
|---|---|---|
| **軟體 Only（平板使用）** | NT$0（自備平板）| App 安裝在現有 iPad / Android 平板；無硬體費 |
| **入門硬體**（WoZ 平板 + 底座 + 麥克風）| NT$9,990（促銷）/ NT$12,990（原價）| 現成平板 + 固定底座 + 麥克風陣列；不含 Jetson 邊緣推理 |
| **標準硬體**（入門 + 環境感測）| NT$15,000 | 同 Tier 2 硬體，但搭配 Tier 1 月費訂閱 |

> 🟡 硬體方案價格為 desk 假設，Year 1 ODM 量產後重新校準

#### 年付折扣

- **月付**：NT$799/月
- **年付**：NT$7,990/年（折 2 個月費 = 83% 相當折扣 = 月均 NT$666）
- 年付定位：建立長期關係 + 降低流失率；消保法 §19 退費：年付若未使用部分按比例退費 📋

#### Free Trial（試用設計）

- **30 天全額退費保障**（硬體未明顯損耗可退）
- **Day-7 主動關懷**：客服 LINE 或 App 內 check-in「父母用起來如何？有什麼問題嗎？」
- **Day-14 / Day-21 主動 push 升級**：「您的父母已互動 X 次，升級 Tier 2 可讓多位家庭成員都能掌握狀況」
- **Conversion path**：Freemium App NT$299/月 → Starter NT$799/月（差額補繳不重計週期）

#### Tier 1 Madhavan 失敗類型

- **避開 Minivation**：NT$799 = NT$22K 的 3.6%，有感但不過低（Oxford PPP 下界 NT$763 以上）；硬體入門版 NT$9,990 讓軟體月費感知為邊際成本
- **避開 Feature shock**：限 8 個 Must-be feature，無 Should / Could feature 混入

---

### 4.2 Tier 2：Pro（NT$1,290/月）— 主力 ARPU

#### 核心定位

Persona A 北漂 IT 的主流選擇，「完整雙層：AI 陪伴 + 安全網」。NT$1,290 = 家庭月照顧費 5.9%，精準落四框架 WTP 交叉中位。Year 1 主收入來源。

#### 功能邊界

**包含 Tier 1 全部 + 以下升級**：

| 分類 | 升級功能 | Feature 對應 | 對比 Tier 1 差異 |
|---|---|---|---|
| **子女帳號** | 多子女帳號（≤3 位家庭成員）| — | Tier 1 僅 1 帳號 |
| **台語** | 完整台語語音識別（基礎版）| F03 Should | Tier 1 僅 ≥20 句問候 |
| **AI 記憶** | 個人記憶 AI（偏好 + 家庭脈絡 RAG，90 天）| F04 Should | Tier 1 僅 7 天 |
| **文化** | 節日 / 節氣主動話題（農民曆整合）| F05 Should | Tier 1 無此功能 |
| **摘要** | 每日 AI 非侵入式摘要推播（子女 App）| F12 Should | Tier 1 不含 |
| **異常偵測** | 非影像式異常偵測（互動中斷 ≥45 分鐘觸發）| F08 Should（WoZ 版）| Tier 1 不含 |
| **視訊** | 雙向視訊 / 語音（子女 push）| F14 Should | Tier 1 不含 |
| **對話時長** | 無限對話時長（移除 Tier 1 的 60 分鐘上限）| — | 升級核心誘因 |
| **支援** | 工作日電話 + Email 客服（工作日 ≤4 小時回電）| — | Tier 1 僅 Email |

**不含功能（Tier 2 限制）**：
- 監控型（活動軌跡、完整對話原文）：預設關閉；長者書面同意後可開啟（feature-triage.md §9.1 Caveat 5）
- 真人客服：❌ 不含（Tier 3 差異化）
- 健康趨勢週報 / 月報：❌ 不含（Could-have，Tier 3 升級誘因）
- 在地 Maintenance 保障：❌ 不含
- 緊急通知 SLA 升級（≤5 分鐘外加承諾）：❌ 不含

#### 硬體方案

- **標準硬體**：NT$15,000（平板 + 底座 + 麥克風陣列 + 環境感測）
- **長照 3.0 補貼路徑**（2026/07 預計）：CMS 2-6 級長者可申請 NT$60K/3 年 = 設備實際零門檻 📋

#### 年付折扣

- **月付**：NT$1,290/月
- **年付**：NT$12,900/年（折 1.5 個月費 = 月均 NT$1,075）

#### Tier 2 財務健康度

| 指標 | 數值 | 說明 |
|---|---|---|
| 月毛利 | NT$790 | NT$1,290 - AI Brain 雲端 NT$200 - 客服 NT$300 |
| 月毛利率 | 61% | — |
| LTV（18-24 月×95% 月留存）| NT$23,220-29,340 | lean-canvas.md §1 Block 7 |
| CAC（B2C DTC 初期）| NT$5,000-8,000 | lean-canvas.md §1 Block 7 🟡 |
| LTV:CAC | **4.04:1** W4 早期試算 / **5.95:1** T33 中性深化（5,000 unit 量產）| 健康度 ≥3:1 ✅；詳 unit-econ.md §7.2 三情境 |
| Payback Period | 約 8.2 個月（加硬體毛利 = 6.8 月）| — |

#### Conversion Path

- Tier 1 → Tier 2：補差額 NT$491/月，不重新計算週期
- **升級觸發設計**：父母日均互動 ≥15 分鐘連續 7 天 → push「解鎖多子女帳號讓兄弟姐妹也知道」；父母首次認知遊戲測試後 → push「台語記憶力遊戲專屬 Tier 2」
- **Tier 1 轉換率目標**：W12 後 30% Tier 1 用戶升 Tier 2（健康度指標 §5.3）🟡

#### Tier 2 Madhavan 失敗類型

- **避開 Feature shock**：Tier 2 功能為 Tier 1 合理延伸（多子女 + 台語 + 記憶 + 摘要），功能差距清晰但不讓人覺得「Tier 1 是殘缺版」
- **避開 Hidden gem**：NT$1,290 行銷材料必須清楚傳達「多子女帳號 + 台語 AI + 每日摘要」三個核心差異，不讓 Tier 2 功能「不為人知」

---

### 4.3 Tier 3：Premium（Custom — 年約）

#### 核心定位

Persona C（退休前高端夫妻 + B2B2C 機構為個案家庭）的高端年約方案。「交給系統，保障感第一」。WTP NT$2,000-4,000/月，Premium 月均 NT$2,917-4,583 對應。

> **定價原則**：Tier 3 禁止寫死固定月費（Madhavan Rule 8；B2B2C 機構報價需依台數 / 服務組合議）。年約 NT$35,000-55,000（月均 NT$2,917-4,583）為報價範圍 🟡。

#### 功能邊界

**包含 Tier 2 全部 + 以下升級**：

| 分類 | 升級功能 | 說明 |
|---|---|---|
| **高端摘要** | 每月 AI 健康趨勢月報（PDF，供家醫科 / 神經科診間參考）| F15 Could-have，Tier 3 收入支柱 |
| **客服** | 真人客服（工作日 ≤2 小時回應）| Tier 2 無真人客服；Persona C 「壞了誰負責」最敏感 |
| **SLA** | 緊急通知 ≤5 分鐘 SLA 承諾（書面）| Tier 2 是目標，Tier 3 是合約保障 |
| **維護** | 在地 Maintenance Partner 保障（硬體到府 ≤2 次/年）| 南部縣市維修網絡（問題來問題.md §3 in-scope）|
| **帳號** | 無限家庭成員帳號 + 雙方父母整合（Persona C 兩組父母需求）| — |
| **認知** | 完整認知功能（懷舊治療 + 進階認知遊戲 + 難度自適應）| F06 / F16 Could-have 全解鎖 |
| **Early Access** | 優先體驗新功能 Beta | — |
| **年約 BD** | 年約到期前 90 天主動 outreach 續約；Account Executive 服務 | B2B2C 機構版含機構後台 dashboard 另議 |

**B2B2C 機構版額外**：
- 機構後台 dashboard（多戶個案管理、照服員排程、緊急事件彙整）（F18 Won't 90 天，Year 1 H2 交付）
- 長照系統資料匯出（CMS 格式）（F19 Won't 90 天，Year 1 H2）
- 機構採購單台 RaaS：NT$3,000/月/台（另議大量折扣）

#### 年約設計

- **最短合約期**：12 個月年約（禁止月付拆散 Premium 方案）
- **報價範圍**：B2C Premium NT$35,000-55,000/年；B2B2C 機構每台 NT$36,000/年（NT$3,000/月）
- **報價流程**：聯繫 AE → 需求評估（服務人數 / 父母數量 / SLA 要求）→ 客製報價 → 年約簽署

#### Tier 3 Madhavan 失敗類型

- **避開 Undead**：Tier 3 W12 後若無任何年約 LOI → 評估 Premium 定義是否過複雜或過貴；W12 Gate 觸發 Pivot 評估（lean-canvas.md §4 W12 Gate）
- **避開 Hidden gem**：高端月報 / 真人客服 / SLA 保障需在 Pro 方案購買頁面清楚顯示「升級到 Premium 才有」

---

## §5. Anchor + Decoy 設計

### 5.1 心理定價原則

**心理定價（尾數效應）**：
- NT$799（而非 NT$800）：尾數 9 感知「不到 NT$800」
- NT$1,290（而非 NT$1,300）：尾數 90 感知「不超過一千三」
- 兩者尾數均非 99（台灣電商慣用 99 尾數被感知為「便宜折扣貨」，與情感型服務品牌不符，改用 90/99 以上尾數）

**NT$799 設計邏輯**：框架為「每天不到 NT$27」（NT$799/30 = NT$26.6）；對 Persona B「讓我安心去上班 = 一天值 NT$27」心理預算合理。

**NT$1,290 設計邏輯**：框架為「家庭聚餐 2-3 次的費用」（台北家庭餐廳 NT$400-600/人）；對 Persona A「一個月吃一頓少一點，父母每天有人陪」的情感置換。

### 5.2 Anchor 效應：Tier 3 Premium 拉抬 Tier 2 Pro

**機制**：選擇頁面先展示 Tier 3 Premium（Custom 年約，呈現月均估算值 NT$2,917+）作為 Anchor，讓 Tier 2 NT$1,290 感覺「實惠許多」。

**視覺設計建議**（📋 T50 前端工程師執行）：
```
┌─────────────┬─────────────┬─────────────────┐
│  Starter    │    Pro ⭐   │    Premium      │
│  NT$799/月  │  NT$1,290/月│  客製年約       │
│             │  【最多人選】│  NT$2,917+/月估  │
└─────────────┴─────────────┴─────────────────┘
```

- Tier 3 先放，月均顯示讓 NT$1,290 在中間看起來「合理的中選擇」
- Tier 2 標「最多人選」標籤（Madhavan Rule 5：引導用戶向主力層）

### 5.3 Decoy 效應：Tier 1 Starter 引導上 Pro

**機制**：Tier 1 NT$799 功能故意設計「差距清晰但不讓人覺得殘廢」，差額 NT$491 換取的升級誘因必須讓 Tier 2 感覺「超值」：

| 升級誘因 | WTP 驅動力 |
|---|---|
| 多子女帳號（1 → 3 位）| 「讓兄弟姐妹都收到通知，公平分擔照顧責任」— JTBD S2 |
| AI 每日摘要推播 | 「不需打電話，每天自動知道爸媽狀況」— JTBD F2 核心 |
| 台語識別（基礎版）| 「爸爸說台語 AI 也聽得懂」— Persona 三 Vignette 均提及 |
| 個人記憶 RAG（90 天）| 「AI 記住爸爸喜歡什麼，每次聊才有感」— 情感護城河 |
| 無限對話時長 | 「不用擔心爸媽說話時數超過」— 使用限制釋放 |

**Decoy 設計關鍵**：Tier 1 不是「殘廢版」，而是「入門完整版」。差額 NT$491/月 換取的功能必須讓 Persona A（主力 ICP）感覺「值得且正好我需要」。

### 5.4 3-tier 展示頁面建議邏輯

1. 頁面頂部先呈現三 Tier 對比表（Anchor 效果）
2. Tier 2 視覺強調（底色 / 邊框 / 「推薦」標籤）
3. 每個 Tier 最突出的 1 個功能以 **情感語言** 表達（非技術規格）：
   - Starter：「有事第一個知道你」
   - Pro：「每天陪伴 + 隨時掌握，讓你安心工作」
   - Premium：「最完整的守護，交給我們的承諾」
4. 頁面底部放「家庭月照顧費 NT$22,000 計算器」（子填後顯示各 Tier 佔比）

---

## §6. Family Plan + Multi-device 定價

### 6.1 多子女共付方案（Year 1 H2）

**場景**：台灣平均 2.3 個子女，照顧責任分擔是高頻衝突（problem-framing.md §2.2.3 sub-role 2）。

**設計（📋 post-approval execution，Year 1 H2）**：

| 方案 | 計費 | 說明 |
|---|---|---|
| **家庭共付（Tier 2 Pro）** | NT$430/月 × 3 人 = NT$1,290 | 3 個子女各付 NT$430，App 帳號各自登入；等同 Tier 2 全功能 |
| **家庭共付（Tier 1 Starter）** | NT$400/月 × 2 人 = NT$800 | 兄弟姊妹分攤，各自登入；月費約等同 Tier 1 |

**技術需求**：群組付款機制（綁定多張信用卡 / 一人主付 + 其他人 LINE Pay 轉帳）📋

**行銷語言**：「讓兄弟姐妹一起分擔，每人每月 NT$430，比一次便當還便宜，公平守護爸媽」

🟡 Family Plan 觸發條件：Phase 2 訪談顯示 ≥4/8 受訪者說「照顧費用分攤是家庭衝突來源」= Year 1 H2 提前推出

### 6.2 多裝置方案（Year 2）

**場景**：爺爺奶奶分開住（台灣老一代有各自生活圈），Persona C 有兩組父母，需要 2 台設備。

| 多裝置方案 | 折扣 | 說明 |
|---|---|---|
| 第 2 台同一 Tier 訂閱 | 月費 75%（折 25%）| 第一台 NT$1,290 + 第二台 NT$968 = 月費 NT$2,258 |
| 第 2 台降一 Tier | 月費 60%（折 40%）| 第一台 Pro NT$1,290 + 第二台 Starter NT$479 = NT$1,769 |

🟡 多裝置折扣率是 desk 假設，Year 1 H2 A/B 測試校準

---

## §7. Annual vs Monthly + Free Trial

### 7.1 Annual 折扣設計

**原則**：年付折扣的目的是延長 LTV、降低流失率，折扣幅度需超過 Payback Period 的邊際成本。

| Tier | 月付 | 年付 | 折扣額度 | 折扣邏輯 |
|---|---|---|---|---|
| Tier 1 Starter | NT$799/月（NT$9,588/年）| NT$7,990/年 | 17%（折 2 個月）| 鼓勵年付降低流失，折扣不過深 |
| Tier 2 Pro | NT$1,290/月（NT$15,480/年）| NT$12,900/年 | 17%（折 1.5 個月）| 對標 ElliQ 年付模式 ✅ |
| Tier 3 Premium | Custom 年約（僅年付）| — | 年約為唯一付款方式 | Madhavan：高端不提供月付拆散 |

**年付行銷語**：「年付省 NT$2,580，相當於 2 個月免費，讓爸媽多 2 個月的陪伴」（對 Persona A 情感框架）

### 7.2 Free Trial 設計 Trade-off

| 方案 | 優點 | 風險 | 本案建議 |
|---|---|---|---|
| **30 天全額退費（主選）** | 大幅降低首次購買門檻；Persona B 月收偏低、30 天確認有用再付 | 首月棄用率高（30-50% 行業數）= CAC 燒但無 ARPU | 採用。若首月 Day-30 retention < 40%，改 14 天退費 |
| 14 天試用→付費 | 快速過濾低用意願者；縮短燒錢期 | 14 天對長者習慣養成不夠（行業數：2-3 週才真正建立習慣）| 不建議，長者場景特殊性 |
| Freemium 永遠免費→升級 | 最低門檻；建立用戶池 | 行業 Freemium → Paid 轉換率 3%（lean-canvas.md §2 D Hypothesis）= 97% 永遠免費 | 只用於 App NT$299 版（Hypothesis D 入口路徑），不對硬體 Tier 1/2/3 實施 Freemium |

**試用期機制（Tier 1 + Tier 2）**：
- 硬體：14 天外觀完好可退（消保法 §19 法定最低 7 天；本案 14 天含試用期）
- 軟體月費：30 天全額退費保障
- **技術注意**：訂閱自動續訂需在加入前明顯揭示（消保法 §19 + 公平交易法規範）；退費流程 ≤7 個工作日 📋

### 7.3 試用期 Churn 假設

🟡 以下為 desk 假設

| 試用期節點 | 目標留存率 | 行動策略 |
|---|---|---|
| Day-7 | ≥60% 長者端有互動 | Day-7 客服主動關懷；送「今日對話精選」給子女 |
| Day-14 | ≥50% 付費意圖 | Day-14 收到第一份 AI 摘要（Tier 2 upsell 觸發）|
| Day-30 | ≥40% 繼續訂閱 | Day-30 Sean Ellis 問卷；月底主動 review call |
| 若 Day-30 留存 < 40% | 觸發 v2 定價校準 | 訪談流失用戶（WTP 低估？功能不足？長者不用？）|

---

## §8. 機構 / 保險批量定價（B2B2C + B2B）

### 8.1 機構批量定價（Hypothesis B，Year 1 H2+）

**定價結構（📋 post-approval execution）**：

| 批量方案 | 機構 RaaS 月費/台 | 個案家庭月費 | 說明 |
|---|---|---|---|
| 試驗批（5-9 台）| NT$3,500/月/台 | NT$799/月 | 試驗期，機構承擔較高成本 |
| 標準批（10-19 台）| NT$3,000/月/台 | NT$799/月 | 對齊長照 3.0 補貼 NT$20K/年/台 |
| 規模批（20+ 台）| NT$2,500/月/台 | NT$699/月 | 量大折扣；3 年框架合約 |
| 長照 3.0 補貼覆蓋 | NT$1,667/月/台（NT$60K/3 年）| 補貼後機構實際 NT$833-1,333/月 | 2026/07 預計啟動 📋 |

**機構 B2B2C 個案家庭月費說明**：家庭月費 NT$799 低於 B2C Tier 1 NT$799（等同但附帶機構背書，替代部分 CAC），機構背書讓家庭決策週期從 4-6 週縮短至 1-3 週 🟡。

### 8.2 保險 PMPM 批量定價（Hypothesis C，Year 3+）

**來源**：Papa（美國）USD 10-20 PMPM × 台灣 PPP 調整 = NT$305-610 PMPM（wtp-payer.md §1.1）。
🟡 台灣場景 PMPM 考慮服務豐富度，調整為 NT$600-1,000 PMPM。

**定價架構（📋 Year 3+ 執行）**：

| 方案 | PMPM | 保戶端費用 | 觸發條件 |
|---|---|---|---|
| 基礎 PMPM（監測 only）| NT$600/保戶/月 | NT$0（保戶免費）| 健康險 / 長照險附加條件 |
| 完整 PMPM（陪伴 + 監測）| NT$800/保戶/月 | NT$0 or NT$199 共付 | 保險業者差異化保單 |
| 頂規 PMPM（含緊急 SLA）| NT$1,000/保戶/月 | NT$0 | 高端長照險 |

**ARR 規模願景（1 家保險業者 2 萬保戶）**：
- NT$800 × 20,000 × 12 = **ARR NT$1.92 億**（wtp-payer.md §3.5 🟡）

---

## §9. Pricing Iteration Roadmap

### v1 → v3 迭代計畫

| 版本 | 時間點 | 輸入 | 主要決策 |
|---|---|---|---|
| **v1（本文）** | W4-6 | desk research × 7 份（4 WTP 框架 + 競品 + persona + feature-triage）| 三 Tier 定價初定；Anchor/Decoy 設計；WTP 訪談計畫 |
| **v2** | W8-10（Post Phase 2 訪談）| Mom Test 8 訪談結果 | 校準 Tier 1 / Tier 2 邊界定價；驗證多子女帳號 vs 台語識別 哪個是主升級誘因；調整年付折扣幅度 |
| **v3** | W12+（Post Phase 6 Closed Beta）| 10-20 戶 Pilot 真實 ARPU + 留存率 + 升級率 | 硬數據驗證 Tier mix（50/40/10% 假設）；調整 Freemium App NT$299 留存或 Kill；啟動 B2B2C 機構 RaaS 報價 |

### Pivot 觸發條件（參照 lean-canvas.md §4 Gate）

| Gate 時間點 | 信號 | 定價 Pivot 方向 |
|---|---|---|
| **W6 Gate** | Phase 2 WTP 訪談：穩定 WTP < NT$600（多數受訪者）| 下移：Tier 1 NT$599 / Tier 2 NT$999（wtp-payer.md §7.2）|
| **W6 Gate** | 穩定 WTP > NT$2,000（多數受訪者）| 上移：Tier 2 NT$1,590；提前開發 Tier 3 Custom + 加值服務 |
| **W8 Gate** | Tier 1 → Tier 2 轉換 < 10%（90 天後）| 重新設計 Tier 1 限制（目前限制不足以讓 Persona A 選 Tier 2？）|
| **W8 Gate** | Freemium → Paid < 0.5%（遠低於行業 3%）| D Hypothesis Kill；資源全移 A DTC 硬體路徑 |
| **W12 Gate** | 機構 B2B2C 無任何 LOI | B 降為「展示方案」，機構 RaaS 延後至 Year 2 |

---

## §10. 風險清單

### 10.1 定價過低風險

| 風險 | 影響 | 機率 | 應對 |
|---|---|---|---|
| NT$799 被感知為「低品質廉價 app」| 品牌傷害；高端客群回避；Persona C 不考慮 | 🟡 中 | 硬體一次性費用（NT$15,000）+月費組合定價；行銷不以「便宜」訴求 |
| LTV 不足覆蓋 CAC（若 ARPU 低於假設）| Unit Economics 惡化；LTV:CAC 跌破 3:1 | 🟡 中 | 年付優先促進（提升 LTV）；B2B2C 降低 CAC；W12 Gate 定價校準 |
| Freemium NT$299 蠶食 Tier 1 NT$799（Cannibalization）| Tier 1 轉換率低；ARR 低估 | 🟡 中 | Freemium App 刻意限制台語識別 + 緊急偵測 + 多子女帳號（lean-canvas.md §2 Cannibalization 風險）|

### 10.2 定價過高風險

| 風險 | 影響 | 機率 | 應對 |
|---|---|---|---|
| NT$1,290 超出 Persona A 穩定 WTP | 高 Churn；月留存跌破 90% | 🟡 中高 | Phase 2 訪談 → v2 若需調降至 NT$1,090 預留空間；硬體一次性加大補貼感知 |
| NT$15,000 硬體令 Persona B 完全放棄 | B 族群進不了漏斗 | 🟡 中 | 軟體 Only 版 NT$0（自備平板）+ 入門硬體 NT$9,990 降低門檻；B2B2C 長照補貼覆蓋硬體 |
| 配偶否決 NT$1,290/月「太貴沒用」| 家庭財務否決，決策卡關（problem-framing.md §2.2.3 sub-role 1）| 🟡 中高 | Family Plan 分攤語言；行銷「減少每次奔波回家，省回來的交通費 + 請假費遠超 NT$1,290」ROI 框架 |

### 10.3 WTP 假設破壞 → Pivot 路徑

依 phase-0.5-deconstruction.md §5.4 假設 1：

| WTP 實際情況 | 破壞假設後行動 |
|---|---|
| WTP 穩定 < NT$500/月 | Pivot → Hypothesis B（B2B2C 機構通路，個案家庭 NT$799 + 機構分攤 NT$3,000/台）|
| WTP 穩定 < NT$300/月 | Pivot → Hypothesis D（Freemium App NT$299/月 主力，硬體 upsell 後置）|
| WTP > NT$2,000/月（多數 A persona）| Upgrade → Tier 2 NT$1,590；加速 Tier 3 Custom 開發；加入人工客服 + 在地 maintenance |

### 10.4 法律合規風險

| 風險 | 法規 | 應對 |
|---|---|---|
| 自動續訂未充分揭示 | 消保法 §19（7 天猶豫期）+ 通訊訂閱規範 | 訂閱確認頁面必須大字標示「自動續訂 / 如何取消」；退費政策需律師審核 📋 |
| 30 天退費 + 硬體開箱物流 | 消保法 §19；硬體已開箱使用定義 | 退費 SOP：軟體全退 / 硬體需評估外觀完好度；Phase 4 前法律顧問簽核 📋 |
| 年付折扣標示 | 公平交易法 §21 廣告不得引人誤解 | 年付省額需以實際計算呈現（不可說「5 折」而非實際 17% 折扣）📋 |

---

## §11. 健康度驗證 KPI

| 指標 | 目標 | 說明 |
|---|---|---|
| LTV:CAC | ≥3:1 健康度（W4 早期 4.04:1；T33 中性深化 5.95:1）| lean-canvas.md §1 Block 7（4.04 W4 概估）+ unit-econ.md §7.2（5.95 中性 5,000 unit 量產）✅ |
| Tier 1 → Tier 2 90 天轉換率 | ≥30%（Health Signal）| W12 後第一個測量點 🟡 |
| 月流失率 | ≤5%（Tier 2 Pro）| LTV 計算基準；>5% 觸發 v3 定價調查 🟡 |
| 年付比率 | ≥25%（Year 1 H2 目標）| 年付比率高 = LTV 高 + 流失低 🟡 |
| Freemium → Paid 轉換率 | ≥3%（App Hypothesis D）| lean-canvas.md §2 指標；< 1% 觸發 Kill 評估 🟡 |
| Tier 2 mix | 35-40%（Year 1 末）| 若 < 25% 需強化升級誘因設計；若 > 50% 需評估 Tier 1 是否過弱 🟡 |

---

## §12. Coverage Matrix（自我檢核）

| 硬性要求項目 | 完成 | 位置 |
|---|---|---|
| §1 5 種定價模式 8 維度評分 | ✅ | §1.1 五模式各 8 維度表 |
| Madhavan 4 失敗類型矩陣 | ✅ | §2.0 |
| Madhavan 9 Rules 逐條 | ✅ | §2.1-2.9 |
| ≥2 tier（本案 3 tier）| ✅ | §4.1-4.3 |
| 每 Tier 含功能 / 限制 / target segment / WTP 區間 / 預期 mix | ✅ | §4.1-4.3 |
| Feature 對應 feature-triage.md | ✅ | §4.1-4.2 Feature 邊界表 |
| Anchor + Decoy 完整設計 | ✅ | §5 |
| 心理定價（尾數）| ✅ | §5.1 |
| Family Plan + Multi-device | ✅ | §6 |
| Annual discount 設計 | ✅ | §7.1 |
| Free Trial 設計 + Churn 假設 | ✅ | §7.2-7.3 |
| 機構 B2B2C 批量定價 | ✅ | §8.1 |
| 保險 PMPM（Papa 對標）| ✅ | §8.2 |
| Pricing Iteration Roadmap v1 → v3 | ✅ | §9 |
| Pivot 觸發條件 | ✅ | §9 + §10.3 |
| 風險清單（太低 / 太高 / WTP 假設破壞）| ✅ | §10.1-10.4 |
| WTP 訪談計畫（desk + interview）| ✅ | §3 |
| Mom Test 合規訪談題 ≥5 題 | ✅ 7 題 | §3.2 |
| 訪談對象篩選標準 × 3 Tier | ✅ | §3.2 |
| 訪談時程 | ✅ | §3.2 |
| Plan-Only Mode 標籤（✅/🟡/📋）| ✅ | 全文 |
| 報告對象 ASUS 主管客觀中立 | ✅ | §1.1 模式 B 段落 |
| 禁用「demo」字眼 | ✅ | 全文未出現 |
| ASUS Zenbo Junior II 數據查證 + 中立呈現 | ✅ | §1.1 模式 B 段落 |

---

## Sources

- Ramanujam, M. & Tacke, G. (2016). *Monetizing Innovation: How Smart Companies Design the Product Around the Price*. Wiley. — Madhavan 9 rules + 4 失敗類型
- wtp-payer.md §1.1-§1.5 — 4 Framework WTP 交叉驗證 + 三 Tier 設計
- problem-framing.md §4.4 — 競品深度分析（ElliQ / PARO / Zenbo Junior II / Mabu）
- phase-0.5-deconstruction.md §5.2 — 4 Hypothesis Revenue Streams 原始假設
- lean-canvas.md §1 Block 6-7 — Revenue Streams + Cost Structure + Unit Econ
- persona.md §1.6 / §2.6 / §3.6 — 三 Persona WTP 中位估算
- feature-triage.md §9.1 — 哪些 feature 撐各 Tier 月費的 Pricing Caveats
- Oxford Academic, *The Gerontologist*, Vol.56 No.5, 2016 — 學術 PPP WTP 換算基礎
- 家庭照顧者關懷總會 2023 — 台灣家庭月照顧費 NT$22,000 基準 ✅
- ElliQ / Intuition Robotics 官方 — USD $29.99-$59/月 競品對標 ✅
- ASUS Zenbo Junior II 官方公告 — 定價 + B2B 轉型 Maestro 節點資訊 ✅

---

> **文件狀態**：✅ Phase 4 T32 Pricing Strategy v1 完成
> **建立在**：lean-canvas.md v1 + wtp-payer.md + problem-framing.md §4 + phase-0.5-deconstruction.md §5.2 + persona.md + jtbd-day-in-life.md + feature-triage.md §9.1
> **下一步（Phase 4 T33+）**：Unit Economics Modeler（Tier 1/2/3 健康度 + 敏感度分析）；Phase 5 Prototype Build Sprint 計畫；Phase 6 Pilot 設計書
> **v2 觸發點**：Phase 2 Mom Test 8 訪談完成後（📋 W7-9 post-approval）
> **主管 Review 對外版本**：對外網頁渲染時依 phase-0-answers.md §對外網頁紀律剝離 ✅/🟡/📋 標籤；「Plan-Only」段不渲染；「假設」改稱「規劃」
