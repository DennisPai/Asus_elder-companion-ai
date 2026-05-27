# Phase 1: Problem Framing — Elder Companion AI MVP

> **執行日期**：2026-05-27
> **執行模式**：PM Flow v0.1 / Phase 1 Problem Framing
> **角色配置**：4 個 sub-agent 並行（market-researcher / business-analyst / elderly-risk-mapper / competitive-analyst）
> **Plan-Only Mode**：docs/* 內部保留 ✅ desk-validated / 🟡 hypothesis / 📋 post-approval execution 三色標籤；對外網頁渲染時剝離（依 design.md §4.2.1）
> **建立在 Phase 0.5 上**：本文件不重複 docs/phase-0.5-deconstruction.md，聚焦深化 + 補強

## 0. Executive Summary

Phase 1 深化 Phase 0.5 規劃，4 個面向結論：

1. **§1 市場（TAM/SAM/SOM 深化）**：TAM 全球 USD 2.09-3.14B（Healthcare Companion Robots，5 source 交叉確認）→ USD 5.48-13.92B（2030/34，CAGR 17-18%）；TAM 台灣 NT$3,000 億健康福祉產業（工研院）；SAM 台灣三向交叉驗證 NT$60-70 億中位數（Top-down USD 257M ≈ Bottom-up NT$66 億 ≈ ElliQ 類比 SOM）；Why Now 6 個趨勢（超高齡臨界 + LLM/邊緣推理 BOM 雙門檻 + 長照 3.0 三階段 + fast-follower 窗口 + 家庭結構崩解 + 65% 長者願用 AI）。
2. **§2 利益關係人（Stakeholder Mapping 深化）**：5 大類 × 19 個子分類；Power × Interest 2×2 + Influence Map 15 條 + Engagement Timeline W0-W12 + Cultural Considerations 6 面向（三代同堂崩解 / 性別照顧 / 親子權力 / 台語認同 / 宗教節慶 / 數位落差）；主動補充「照服員雙重角色陷阱」+「子女 onboarding ≤10 分鐘 hard constraint」。
3. **§3 倫理風險（Ethical Risk + Safety 紅線）**：vulnerable population framework 三支柱；7 條 LLM 絕對紅線（醫療/投藥/急救/法律/投資/心理治療/臨終）+ 10 條紅線深化（7 既有 + 3 補充 Power Asymmetry / Surveillance Creep / Social Replacement）× 8 維度；台灣法規對應 ≥20 條具體條文；Phase 1-8 倫理檢核點 + 危機處理 SOP 黃金 8 小時。
4. **§4 競品 deep dive**：PARO（醫療 B2B 認證路線、B2C 高定價死）/ ElliQ（B2G 政府通路 + LLM ROE 混合 + 無緊急功能缺口）/ Mabu（**2024/11 確認退場** + 非 LLM 腳本死 + 單一客戶依賴致命）/ Zenbo Junior（台灣本土通路 + 迭代停滯 + ASUS OEM 合作潛力）；4-grid matrix 我們定位「軟體中心 + B2C DTC 先行 + B2B2C 並行」；Build vs Buy 4 層輸入給 Phase 3 T24。

---

## §1. TAM / SAM / SOM 量化 + Why Now（深化版）

> 執行日期：2026-05-27
> Phase 0.5 → Phase 1：本段不重複 §1.4 / 2.4 / 3.4 / 4.4 / 5.3 已有內容，聚焦「深化 + 補強」

### 1.0 Phase 0.5 desk 補強項

#### 1.0.1 80+ 細分人口 ✅

| 年齡區間 | 人數（估算） | 備註 |
|---|---|---|
| 65-74 歲（青老年）| 約 264 萬人 | 65+ 總量 419 萬 × 63% |
| 75+ 歲（中老年）| 154 萬 6,928 人 | 內政部 112 年底統計 ✅ |
| 80+ 歲（高老年）| 約 93-98 萬人 | 75+ 中約 60-63% 推算 🟡 |
| 85+ 歲 | 約 44-48 萬人 | 75+ 中約 29% 推算 🟡 |
| 90+ 歲 | 約 16-18 萬人 | 全球模式推算 🟡 |

關鍵：75+ 共 155 萬人 = 陪伴需求最高的核心族群（喪偶 37.5%、獨居 26.12%）；80+ 約 95 萬（行動力 / 認知退化最高風險）；65-74 歲 264 萬「青老年」科技接受度較高，Hypothesis D Freemium 初期重點族群。來源：[內政部 112 年 6 月統計通報](https://www.moi.gov.tw/News_Content.aspx?n=2905&s=316654)

#### 1.0.2 北漂子女比例（2024 最新）✅ + 🟡

直接統計卡關（主計總處 / 內政部未發布「子女與父母跨縣市分離居住」直接數據）。三條路徑推算：

**路徑 A：老化縣市淨人口移出**
- 嘉義縣（老化第 1）2010-2023 淨遷出 40,115 人，年均 4,000+
- 老化最嚴重 5-7 縣市（嘉義 / 南投 / 雲林 / 屏東 / 花蓮 / 基隆）均淨移出
- 北部（台北 / 新北 / 桃園 / 台中）為淨移入 → 「父母留南、子女北漂」結構性格局

**路徑 B：家庭結構崩解**
- 三代同堂：15.48%（1990）→ 10.43%（2023），降幅 1/3
- 核心家庭：47.12% → 31.34%
- 單身 + 已婚無子女合計 23.76% → 36.84%（空巢主流）
- 一人宅：168 萬（2016）→ 260.8 萬（2025），十年 +92.7 萬（+55%）

**路徑 C：長照需求調查**
- 65+ 需照顧者中，主要照顧者為子女佔 44.35%
- 但「上班中的照顧子女」31.77%（衛福部 2018），這群人最難同住 → 北漂子女遠距照顧場景核心

**結論**：直接數字仍卡關 🟡，但結構性趨勢一致；Phase 0.5「北漂 / 遠距照顧 40%」係 desk 推論為合理範圍（真實可能 35-50%）。需 Phase 2 訪談量化。

#### 1.0.3 縣市分布 Top 10 + 流動方向 ✅

| 排名 | 縣市 | 65+ 比率 | 流動屬性 |
|---|---|---|---|
| 1 | 台北市 | 24.18% | 子女遷新北桃園、父母留台北老社區（新趨勢 B）|
| 2 | 嘉義縣 | 24.11% | 全台老化最快 + 人口外移最嚴重 |
| 3 | 南投縣 | 22.66% | 地理封閉、年輕人持續外移 |
| 4 | 基隆市 | 22.28% | 衛星城市、年輕人移台北工作 |
| 5 | 屏東縣 | 21.84% | 南部農業縣、青壯年北漂嚴重 |
| 6 | 雲林縣 | 20.9% | 全台農業縣老化第二快 |
| 7 | 花蓮縣 | 20.2% | 東部邊陲、移出率高 |
| 8 | 台南市 | ~19.5% 🟡 | 接近超高齡 |
| 9 | 苗栗縣 | ~19-20% 🟡 | 客家人口老化 |
| 10 | 彰化縣 | ~19% 🟡 | 淨遷出 9,015 人（2023）|

**三大流動模式**：
- 模式 A「南留北漂」（最普遍）：嘉義/南投/屏東/雲林/花蓮 → 台北/新北/桃園/台中
- 模式 B「北部老化加速」（新趨勢）：台北市子女外移新北桃園 + 父母留台北老社區
- 模式 C「三都吸引力分流」：台中/桃園淨移入 + 高雄淨移出 → 南部整體向北流

來源：[中央社超高齡縣市分布](https://www.cna.com.tw/news/ahel/202601090098.aspx)

---

### 1.1 TAM 全球（三層整合，≥5 source）✅

| Layer | 定義 | 來源 | 2024/25 估值 | 目標年值 | CAGR |
|---|---|---|---|---|---|
| **L1 廣** | AI in Elderly Care / Aging | InsightAce 2025 | USD 56.78B | 387.52B（2035）| 21.30% |
| L1 廣 | AI in Elderly Care | DataMIntelligence | USD 6.47B | 25.26B（2033）| 22.12% |
| **L2 中（本案主參考）** | Healthcare Companion Robots | Grand View Research | USD 2.09B（2024）| 5.48B（2030）| 17.62% |
| L2 中 | Healthcare Companion Robots | Toward Healthcare | USD 2.66B（2024）→ 3.14B（2025）| 13.92B（2034）| 18.04% |
| L2 中 | Elder Care Assistive Robots | Grand View | USD 3.4B（2025）| 9.8B（2033）| 14.2% |
| **L3 窄** | AI Care Companion Elderly | Market Report Analytics | USD 2.5B（2023）| 8.7B（2030）| 19.0% |
| L3 窄 | PARO-type Elderly Robot | Growth Market Reports | USD 485M（2024）| 1.53B（2033）| 13.7% |
| 廣參考 | Global AI Companion Market | Grand View | USD 36.79B（2025）| 317.96B（2033）| 31% |

**本案 TAM**：USD 2.09-3.14B（L2 Healthcare Companion Robots 2024/25）→ USD 5.48-13.92B（2030/34），CAGR 17-18%

**Phase 0.5 更新**：Phase 0.5 §1.4 報 USD 6.47B（DataMI）→ Phase 1 改採 Grand View Research USD 2.09B 為核心 TAM（更保守、更廣被引用 + 5 個 source 交叉確認）；CAGR 22% vs 18% 方向一致。

### 1.2 TAM 台灣 ✅ + 🟡

| 層次 | 規模 | 定義 | 可信度 |
|---|---|---|---|
| L1 銀色整體 | NT$3.6 兆 | 所有銀色經濟（廣義）| ✅ 政府聲明 |
| L2 健康福祉產業 | NT$3,000 億 | 醫療 + 照護 + 智慧科技（中）| ✅ 工研院 2024-2028 CAGR 5.79% |
| L3 政府長照預算 | NT$92.6 億/年 | 政府直接支出（補貼市場）| ✅ 主計總處 2025 |
| L3+ 智慧機器人計畫 | NT$200 億（4+10 年）| 科技預算 + 國發基金 | ✅ 行政院 2026 啟動 |
| L4 AI 陪伴用戶 | 11 萬（2025）→ 25 萬（2026 預測）| 含 app + 機器人 | 🟡 infoai 小媒體 |

**Phase 0.5 更新**：Phase 0.5 寫長照年預算 NT$1,000 億 → Phase 1 更新為 NT$92.6 億（更精確官方）；補充 NT$200 億智慧機器人計畫為額外政策推力。

### 1.3 SAM 台灣（三向交叉驗證）🟡

#### 1.3.1 Top-down 修正版

ElliQ 美國 per-capita 對標：5,700 萬 65+ × USD 55/年 → 台灣 467 萬 × USD 55 = **USD 257M（NT$77 億）**

#### 1.3.2 Bottom-up（台灣分層計算）

| 情境 | 家庭數 | ARPU NT$ | SAM |
|---|---|---|---|
| 樂觀（50% 可及）| 65 萬 | 14,400 | **NT$93.6 億** |
| 中性（35% 可及，Phase 0.5 基準）| 46 萬 | 14,400 | **NT$66.2 億** |
| 保守（20% 可及）| 26 萬 | 14,400 | **NT$37.4 億** |

Hypothesis B B2B2C 額外 SAM：機構端 NT$18 億 + 家庭端 NT$4.8 億 = NT$23 億/年 🟡

#### 1.3.3 Analog approach 三個類比

- **ElliQ 美 → 台**：0.5% 滲透 67 萬 65+ = 2.35 萬家庭 × NT$14,400 = **NT$3.4 億/年** 🟡（Year 2-3 SOM 參考值）
- **Papa 美 PMPM → 台**：16% 滲透長照險 70 萬保戶 = 11.2 萬 × NT$800 × 12 = **NT$10.8 億/年** 🟡（5-7 年願景）
- **PARO 日機構 → 台**：機構 10% 滲透 = 75-100 台 × NT$200K = **NT$1.5-2 億**（一次性）

**三向交叉結論**：SAM 中位數 NT$60-70 億（USD 200-265M），三向方向一致 ✅，Phase 0.5 區間 NT$39-78 億下限保守。

### 1.4 SOM 24 個月（Plan-Only 📋）

#### Y1（2026/06-2027/06）

| 指標 | 假設值 |
|---|---|
| Pilot 家庭（M1-M3）| 10-20 戶 |
| Freemium App 下載 | 2,000-5,000 |
| Freemium → Paid 轉換率 | 3-5% |
| Paid 用戶（Y1 末）| 60-250 |
| Y1 ARR（Hyp D 主軸）| NT$21.5-89.7 萬 |
| Y1 ARR（含 Hyp A pilot）| +NT$28.8 萬 |
| **Y1 合計 ARR 保守** | **NT$50-120 萬（USD 1.7-4K）** 📋 |

Y1 KPI 不是收入而是 PMF 訊號（Sean Ellis ≥40% / Day-7 retention / NPS ≥40）

#### Y2（2027/06-2028/06）

| 指標 | 假設值 |
|---|---|
| Hyp A 硬體用戶 | 200-500 戶 |
| Hyp B 機構 | 3-5 家 × 20 台 = 60-100 台 |
| Hyp D Paid（Y2 末）| 1,000-3,000 |
| Hyp A ARR | NT$288-720 萬 |
| Hyp B ARR | NT$216-360 萬 |
| Hyp D ARR | NT$358-1,076 萬 |
| **Y2 合計 ARR** | **NT$862 萬 - NT$2,156 萬（USD 29-72K）** 📋 |

Y2 末滲透率：NT$2,156 萬 / NT$66.2 億 SAM = **約 0.033%** 🟡（對標 ElliQ Y2 紐約州 0.005%，合理）

### 1.5 Why Now（≥5 趨勢深化）

#### 趨勢 1：台灣超高齡臨界 × 人力結構 hard ceiling 雙觸發 ✅
- 台灣超高齡進程比日本快（7 vs 11 年）、比德國快（7 vs 36 年）
- 照服員 2024 年 10 萬人 vs 長照需求 90 萬人 = 照顧比 1:9，結構性缺口
- 機構照服員 2022-2024 連 3 年下滑（3.66 萬→3.32 萬，-7.24%）；成長率從 24.82%→3.99% 趨勢反轉
- 外籍家庭看護工 22.7 萬人；80+ 免評估開放將再增 10 萬缺口
- **2025-2027 是「人力絕對天花板 × 科技替代需求爆發」雙觸發窗口**
- 來源：[Ankecare 2025](https://www.ankecare.com/article/4006-2025-11-15-18-31-50)

#### 趨勢 2：LLM + 邊緣推理 BOM 達商業化雙門檻 ✅
- **LLM API 成本崩塌**：GPT-4 USD 60/M tokens（2023/3）→ GPT-4o-mini USD 0.15-0.60/M（2024/7）= **94.5% 降幅**
- 實際影響：陪伴服務每月 100K tokens 成本 USD 6 → USD 0.015-0.06，**降幅 100-400x**
- **邊緣推理**：Jetson Orin Nano Super USD 249（2024/12 從 499 降）+ 67 TOPS 算力升 1.7x
- 台灣半導體優勢：TSMC 3nm/5nm 佔 AI 晶片供應鏈 74% 收入
- 跨產業 AI 平台戰爭：Google/Apple/Microsoft 2024-2025 將 AI assistant 內建 OS → 長者陪伴成「延伸場景」，倒逼台灣本土玩家盡快卡位 🟡
- 來源：[TokenCost AI Price Index](https://tokencost.app/blog/ai-price-index)

#### 趨勢 3：長照 3.0 三階段政策 ramp ✅
行政院 2025/12/31 核定《長照 3.0》（115-124 年，10 年）：

| 階段 | 日期 | 新增 | 本案機會點 |
|---|---|---|---|
| I | 2025/09/01 | 外籍看護家庭可用社區照護 | 22.7 萬外籍看護家庭採購誘因 |
| II | 2026/01/01 | 失智症服務擴及全年齡 | 失智早期介入市場擴大 |
| **III** | **2026/07/01** | **智慧科技輔具全租賃補貼 NT$60K/3 年**（5 類含「安全看視」）| **本案最直接：NT$60K 抵扣硬體 + NT$20K/年家庭分攤** |

**+ 智慧機器人計畫**：NT$200 億（4+10 年），目標服務型機器人產值 NT$40 億→500 億（5 年 12.5×），台南柳營科學園區 + 工研院南分院。

#### 趨勢 4：先行者試錯期已過，2025-2027 台灣 fast-follower 黃金窗口 ✅
**已犯錯清單**：Jibo USD 80M 倒閉 → 訂閱不能只靠情感；Moxie 2024 倒閉 → 兒童 ≠ 長者；Aldebaran 2025/02 破產 → USD 30K+ B2B 不 sustainable；ElliQ 1→2→3 三代才對 → 第一代建 know-how。

**競爭時間窗**：
- 中國：2025/6 政府試點啟動，但台灣資安疑慮 + PDPA 是天然護城河 → 預計 2027-2028 才壓力 🟡
- 日本：ElliQ 日本版（Kanematsu × IR）2026 上市 → 預計 2027-2028 進台 🟡
- 台灣本土：工研院 Deecye 未商業化 + 宏碁智醫 B2B 醫院路徑 → B2C 場景 greenfield ✅
- **時間窗**：本案 2026/06 MVP 上線後有 **12-24 月護城河建立期**，須利用建立台語語料庫 + 子女 dashboard 切換成本護城河

#### 趨勢 5：台灣家庭結構崩解 × 孤獨公衛危機 ✅
- 三代同堂 1990 15.48% → 2023 10.43%（降幅 1/3）
- 核心家庭 47.12% → 31.34%（降幅 15pp）
- 空巢夫婦 13.03% → 21.44%；一人宅 168 萬→260.8 萬（10 年 +92.7 萬戶）
- 獨居 23.3% + 老老照顧 12.4% = **35.7% 高風險陪伴需求族群（149.4 萬人）**
- WHO 2023：孤獨 = 全球公衛危機，估計 87.1 萬人/年早死
- 台灣失智 35 萬 + MCI（實際 3-5×）= 100-175 萬人 🟡
- 文化轉變：COVID-19 後「數位陪伴接受度」上升；「孝順 = 買照顧設備」在 35-50 歲子女族群形成 🟡

#### 趨勢 6（補強）：老年數位接受度 × WTP 信號 ✅ + 🟡
- **65% 長者表示「願意使用 AI 陪伴機器人」**（FIU 2024）+ 29% 「未來可能」+ 6% 拒絕
- ElliQ NY OFA：95% 用戶報告孤獨感降低、平均 30 次/天互動
- 台灣 65+ 上網率 50.36%（LINE 視訊基礎接受度建立）
- **Caregiver WTP 學術研究**（Oxford 2016）：監測 USD 50/月、監測+協助 USD 70/月，**對台灣類比 NT$1,500-2,100/月 PPP 調整後 NT$1,200-1,500/月**，支持 Phase 0.5 ARPU NT$1,200 假設 🟡
- 來源：[FIU 2024](https://business.fiu.edu/news/2024/seniors-welcome-help-from-robot-companions-but-concerns-remain.html) + [Oxford WTP](https://academic.oup.com/gerontologist/article/56/5/817/2605281)

### 1.6 Coverage Matrix

WebFetched / WebSearched ≥25 source（前 7 條：內政部 / 中央社 / 主計總處 / 聯合報 / Grand View Research / InsightAce / Market Report Analytics）；卡關項：80+ 精確細分（ris.gov.tw 互動式 DB）/ 北漂直接比例 / 台灣 WTP 直接調查 / 資策會 MIC 報告（403 Forbidden）→ Phase 2 補強。

**Phase 0.5 一致性**：方向全一致；更新 2 項（長照年預算口徑 + TAM 主參考源），新增 4 項細節（75+ 精確值 / 三代同堂崩解 / 照服員成長率反轉 / LLM 成本 94.5% 降幅 / 長照 3.0 三階段時程）。

---

## §2. Stakeholder Mapping（深化版）

> 執行角色：business-analyst（PM Flow v0.1 / Phase 1 Problem Framing §2）
> Plan-Only Mode：所有內容為 desk research + 規劃；🟡 = 假設待 Phase 2 訪談驗證；✅ = desk-validated；📋 = 待計畫通過後執行
> 核心差異：本段明確拆分 user / buyer / decision maker / gatekeeper / payer（vs Mode E 預設 user = buyer）

---

### 2.1 Power × Interest Matrix（2×2）

🟡 角色定位基於 desk research，5 大類相對位置為假設，Phase 2 訪談後可精化

| 象限 | 角色 | 策略 |
|---|---|---|
| **High Power × High Interest（緊密管理）** | Buyer + Decision Maker（長者子女）| 持續共創、定期更新 |
| **High Power × High Interest（緊密管理）** | Gatekeeper + Payer（衛福部 / 長照補貼）| 法規 + 補貼資格直接影響 GTM 時程 |
| **Low-Med Power × High Interest（讓他們主動參與）** | User（長者本人）| 低決策力但高參與必要性（棄用風險） |
| **Med Power × Med-High Interest（讓他們主動參與）** | Influencer + Detractor（配偶 / 兄弟姊妹）| 說服子女關鍵協同人 |
| **Low Power × Med Interest（維持關係 / 定期告知）** | Implementer（照服員）| 執行層高參與，可成為口碑推手 |
| **Low Power × Low Interest（監控 / 低資源）** | 邊緣 Detractor（隱私擔憂子女）| 低功率雜訊 |

**矩陣定位摘要表**：

| 角色類別 | Power | Interest | 象限策略 |
|---|---|---|---|
| Buyer + Decision Maker（長者子女）| High | High | 緊密管理：共創 persona / WTP 訪談 / pilot 招募主角 |
| Gatekeeper + Payer（衛福部 / 長照補貼 / 健康險）| High | Med-High | 滿足需求：法規合規優先 / 補貼申請路徑早期確認 |
| User（長者本人）| Low-Med | High | 讓他們參與：onboarding 設計 / UX 反饋 / 接受度測試 |
| Influencer + Detractor（配偶 / 兄弟姊妹）| Med | Med-High | 及時告知：社群口碑 / FAQ / 子女決策輔助素材 |
| Implementer（照服員 / 在地夥伴）| Low | Med | 維持關係：B2B2C onboarding pack / ROI 培訓 |

---

### 2.2 5 大類角色 × 7 維度深化

#### 2.2.1 User：長者本人 70-82 歲

##### a) 健康獨居長者 70-78 歲（功能尚可、語言清晰）

| 維度 | 內容 |
|---|---|
| Profile | 70-78 歲；女性居多（獨居長者女性 58%）；南部縣市為主（嘉義 / 屏東 / 南投 / 台南老化指數前三名）；勞保 / 國民年金 NT$5K-18K/月；小學-初中（1945-1955 世代）；台語為母語佔 60%+；心理：渴望被需要感 / 不想成為子女負擔 / 對科技「怕壞掉」焦慮 🟡 |
| Need / JTBD | 「有人每天陪我聊聊」；outcome：不孤單、不被遺忘、維持每日話題刺激 |
| Interest | （功能性）每日對話 / 用藥提醒 / 子女資訊橋梁；（情感性）被記住 / 被在乎；（社交性）與子女「共同話題」🟡 |
| Power | Med：不是決策者，但抗拒使用（3-7 天不開機）子女會退訂；初次接受度決定 Day-7 retention |
| Decision Authority | N（不付款）/ Partial（日常使用頻率影響 ROI） |
| Engagement Strategy | 子女 onboarding 必在場；訊息「它記得你喜歡什麼，你不用記它」；台語優先 UI；72 小時內首次互動教學 🟡 |
| Risk | 首 2 週棄用率 30-50%；被監視感 → 主動拒用；語音辨識不準確造成挫折 |

##### b) 認知早衰 / MCI 長者 75-82 歲

| 維度 | 內容 |
|---|---|
| Profile | 75-82 歲；MCI 盛行率 65-74 歲 5.3% / 75-84 歲 11.1% / 85+ 37.4%（台灣失智症協會）；多由配偶或子女輪流照顧；國語 / 台語混淆；心理：對重複提問焦慮 / 記憶缺口引發不安 / 對熟悉事物強烈依賴 🟡 |
| Need / JTBD | 「固定有人問我昨天做了什麼、幫我記住」；outcome：生活節奏感、不焦慮、家人安心 |
| Interest | 認知訓練（難度自動適應）/ 生活事件記憶 / 服藥提醒；（情感性）替代記憶缺口降低焦慮；（社交性）子女減少「每天打電話確認」壓力 🟡 |
| Power | Med-Low：認知退化決策力下降，子女代理；機構推薦 NPS 仍受影響 |
| Decision Authority | N（子女代理） |
| Engagement Strategy | 超大字 / 單一按鈕 / 語音喚醒免觸控；「不需要學任何東西，叫名字就好」；子女 + 照服員共同 onboarding；認知評估後（神經科出院 / MCI 診斷）是最高觸發點 📋 |
| Risk | 認知退化加速可能完全無法操作；AI 對話辨別力下降（幻覺安全風險）；TFDA 認證若需「醫療器材」定性涉更嚴格法規 |

##### c) 重度失能 / 長照 CMS 3-6 級長者 78-85 歲

| 維度 | 內容 |
|---|---|
| Profile | 78-85 歲；CMS 3-6 級；多在長照機構或長照服務員到府；溝通困難；情感刺激需求高（PARO 海豹型最高接受度） |
| Need / JTBD | 「有反應的存在，讓我不覺得只是在等待」；outcome：情感安撫 / 減少機構孤立 / 照服員負荷降低 |
| Interest | 主動發聲刺激 / 音樂播放 / 服藥提醒；（情感性）溫暖陪伴感（聲音 / 視覺 / 觸覺）；（社交性）家屬透過 dashboard 看互動記錄 🟡 |
| Power | Low；B2B2C 場景是機構「服務品質評分」來源 |
| Decision Authority | N（子女 + 機構代理） |
| Engagement Strategy | 簡化到「存在感」（主動播放音樂 / 問候 / 子女錄製訊息）；B2B2C 機構 onboarding；對機構訊息「提升個案戶家屬滿意度 + 減少夜班通報」📋 |
| Risk | 90 天 MVP Wizard-of-Oz 難服務；若定位「輔助醫療」可能觸發 TFDA；家屬付費意願最高但機構採購週期長 |

#### 2.2.2 Buyer + Decision Maker：長者子女 35-55 歲

##### a) 北漂 IT 工作者 35-45 歲（Primary ICP）

| 維度 | 內容 |
|---|---|
| Profile | 35-45 歲；男女均有，女性照顧壓力更顯著；台北 / 新北 / 新竹；科技業 / 金融業 / 服務業白領；月收 NT$60K-120K；大學以上；父母南部獨居或兩老同住；心理：科技 early adopter / 遠距照顧焦慮（每週 1 通電話覺得不夠）/ 愧疚感強 / 希望「智能東西替我盯著」🟡 |
| Need / JTBD | 「不需要每天打電話才知道爸媽有沒有吃飯、跌倒、心情」；outcome：安心 + 降低認知負擔 + 維持親子情感連結 |
| Interest | 子女 App dashboard（每日摘要 / 異常推播）/ 緊急通知 / 雙向視訊；（情感性）「我盡到責任了」減少愧疚；（社交性）家庭群組分享 / 同事間話題性 🟡 |
| Power | High（主要付款人） |
| Decision Authority | Y（90% 最終拍板）🟡 |
| Engagement Strategy | Facebook 親子照顧社群 / 銀髮博覽會同行 / momo + 蝦皮 DTC / Google「獨居父母 安心」SEO；「替你陪著他們、替你盯著他們，有事第一時間通知你」；觸發峰值：父母剛出院 / 剛跌倒 / 子女剛搬離；Freemium App 先試再升級 📋 |
| Risk | 配偶（婆媳）反對 → 決策被否決；試用 2 週父母棄用 → 退訂 + 負評；AI 隱私疑慮者購買意願驟降 |

##### b) 在地中產照顧者 45-55 歲

| 維度 | 內容 |
|---|---|
| Profile | 45-55 歲；同縣市（同社區 / 樓上樓下）；公務員 / 教師 / 中小企業主 / 中階主管；月收 NT$40K-80K；父母認知退化中或輕度失能；心理：直接照顧者 / 身心耗竭（90% 失智家屬失眠）/ 希望減輕 24h 待命壓力 / 科技接受度中等 🟡 |
| Need / JTBD | 「放心去上班，不怕接電話說爸媽出事」；outcome：個人喘息時間 + 降低全天候照顧壓力 |
| Interest | 自動監測異常（跌倒 / 長時間靜止）/ 用藥提醒 / 認知遊戲延緩需要全天照顧；（情感性）「我盡力了」喘息感；（社交性）與兄弟姊妹分擔 + 客觀記錄佐證 🟡 |
| Power | High（在地照顧者實際執行並影響家庭決策） |
| Decision Authority | Partial（與兄弟姊妹 / 配偶共同決策）🟡 |
| Engagement Strategy | 長照 A 級個管中心推薦 / 台灣照顧者關懷總會社群 / 神經科醫師診間轉介；「幫你分擔每天的提醒和守護，讓你喘口氣」；CMS 升級 / 喘息服務課程後 📋 |
| Risk | 月收偏低 WTP <NT$800/月（Hypothesis B 補貼路徑更適合）；已有家庭看護則覺得重複消費；onboarding 成本高 |

##### c) 退休前夫妻雙工作 50-55 歲

| 維度 | 內容 |
|---|---|
| Profile | 50-55 歲；台北 / 都會區；中高階主管 / 醫師 / 律師 / 連鎖企業主；月收 NT$100K-200K（雙薪）；父母 80+ 高齡可能已有外籍看護；心理：「安全感購買者」/ 對品質要求高 / 願付溢價但要保障感 / 習慣「交給專業」🟡 |
| Need / JTBD | 「已請看護但需知道在做什麼，父母除了看護還有能聊天的」；outcome：看護管理輔助 + 情感陪伴補強 + 高品質資訊掌握 |
| Interest | 高品質 dashboard（健康趨勢 / 情緒記錄）/ 看護行為輔助監測 / 緊急雙重通報；（情感性）「父母晚年有尊嚴」+ 自身孝道實踐感；（社交性）與同齡朋友討論「smart aging 科技」🟡 |
| Power | High（財務決策力最高） |
| Decision Authority | Y（多數單人決策） |
| Engagement Strategy | 高端醫療診所 / 家醫科健康管理配套 / 商業雜誌（商周 / 天下）/ 保險業者 cross-sell；「長輩的數位管家」；觸發：看護引起糾紛 / 認知問題初診 📋 |
| Risk | 期望值高 → NPS 風險高（AI 答錯 / 緊急漏報 = 強烈負評）；外籍看護已滿足部分需求（差異化需清晰）；反對的兄弟姊妹卡決策 |

#### 2.2.3 Influencer + Detractor

##### sub-role 1：子女配偶（婆媳 / 妯娌動態）

| 維度 | 內容 |
|---|---|
| Profile | 35-55 歲；台灣傳統家庭中配偶（尤其媳婦）對「家庭支出」有重要意見；北漂家庭中配偶可能來自非台灣傳統孝親文化 🟡 |
| Need / JTBD | 「值得花嗎？會不會讓公婆更依賴我們？」 |
| Interest | 消除「婆家照顧負擔轉嫁到我」焦慮；「我們家有這個」現代孝親形象 🟡 |
| Power | Med-High（家庭財務否決權） |
| Decision Authority | Partial（否決力，非拍板） |
| Engagement Strategy | 「幫你們家減少往返奔波，讓長輩有人陪，讓你們有自己的時間」+ 明確 ROI 計算 + Family Plan 話術 📋 |
| Risk | 最常見決策卡關點；若被定位「媳婦不照顧公婆的替代品」將遭強烈抵制 |

##### sub-role 2：兄弟姊妹（照顧責任分擔衝突）

| 維度 | 內容 |
|---|---|
| Profile | 35-55 歲；台灣平均 2.3 個子女；照顧責任分擔不均最常見衝突來源 🟡 |
| Need / JTBD | 「公平地分擔照顧責任，不是我一個人扛」 |
| Interest | 多子女帳號 + 共同通知降低衝突；減少愧疚和手足指責 |
| Power | Med（不付款但可阻礙購買） |
| Decision Authority | N（有否決聲量） |
| Engagement Strategy | Family Dashboard 多子女帳號 + 緊急通知廣播全部兄弟姊妹；「全家共同掌握」📋 |
| Risk | 一個強烈反對（如「AI 取代照顧是不孝」）可能集體否決 |

##### sub-role 3：抗拒科技的父母本人（使用者層面 Detractor）

| 維度 | 內容 |
|---|---|
| Profile | 70-82 歲；65+ 上網率 50.36%，主動接受新裝置 20-30% 🟡；態度：「我不需要機器人」/ 「會被監視」/ 「壞了找誰修」維修焦慮 |
| Need / JTBD | 「保持自主感，不被當老人、不被管理」；outcome：尊嚴保全 |
| Interest | 唯一利益是「被說服後真的好用」 |
| Power | Med（父母強烈反對 → 子女放棄購買，這是使用者 veto 力） |
| Decision Authority | Partial（使用意願 = 事實上的使用否決權） |
| Engagement Strategy | UX：機器人自我介紹為「幫你記事情的好朋友」非「子女請來的監視器」；提供長者主動「關閉模式」；台語對話「為我設計，不是外國東西」🟡 |
| Risk | 前 3 天體驗不佳（語音失敗 / 對話不自然），拒絕態度固化且極難逆轉 |

##### sub-role 4：對 AI 隱私擔憂的子女

| 維度 | 內容 |
|---|---|
| Profile | 35-45 歲；科技業 / 法律 / 媒體；資安意識高；看過 PDPA / 對 ChatGPT 資料外洩有印象；可能是決策子女另一半或質疑兄弟姊妹 🟡 |
| Need / JTBD | 「確認父母對話不被賣 / 不洩漏家庭資訊」 |
| Interest | 「不要有風險」，無正向利益只有疑慮 |
| Power | Med（家庭 LINE 群組引發討論 / 將決策拖延或推翻） |
| Decision Authority | N（高聲量） |
| Engagement Strategy | 透明隱私白皮書（端側處理說明 / PDPA 合規 / 資料不出境選項）；「可刪除 / 退訂後清除」明確機制；媒體爭取《天下》《商周》信任型刊登 📋 |
| Risk | 無法提供清晰 PDPA 合規文件 → 家庭群組放大疑慮，阻止購買 |

##### sub-role 5：對 ICT 抗拒的機構照服員

| 維度 | 內容 |
|---|---|
| Profile | 30-55 歲；外籍（越南 / 印尼）佔 74%，本籍 7.5 萬；教育中學-專科；心理：「多一個系統就多一件要學」/ 「機器人取代我」職業安全感威脅 🟡 |
| Need / JTBD | 「不要多一個要設定要維護的系統；若要用要簡單，幫減少工作不是增加」 |
| Interest | 若機器人真讓個案更穩定（夜晚少叫人）有正向利益；專業認同（照顧人的部分機器人做不到）🟡 |
| Power | Med（B2B2C 日常執行影響個案家屬 NPS） |
| Decision Authority | N |
| Engagement Strategy | 機構 onboarding pack 含照服員 30 分鐘使用說明 + 「機器人做什麼 / 不做什麼」清單；外籍需多語言（越南文 / 印尼文）📋 |
| Risk | Pepper 日本機構失敗主因之一是照服員抗拒 ICT；若 onboarding 不充分，照服員「教個案不要用」|

#### 2.2.4 Gatekeeper + Payer

##### sub-role 1：衛福部食藥署（TFDA）

| 維度 | 內容 |
|---|---|
| Profile | 衛福部食藥署；AI 輔助醫療器材認證（截至 2023 已核准 37 件 AI/ML 醫材）；醫療器材管理法（2021）+ AI/ML 輔助決策指引 |
| Need / JTBD | 確保 AI 醫材安全有效、不對脆弱族群造成傷害 |
| Interest | 完整臨床資料 + 安全驗證；「台灣 AI 醫材監管落後」輿論壓力 🟡 |
| Power | High（若功能被認定「醫療器材」，不過 TFDA = 無法上市） |
| Decision Authority | Y（強制 Gatekeeper） |
| Engagement Strategy | W1-2 聯繫 TFDA 業者輔導窗口確認功能分類；聘請醫療法規顧問（理慈 / 萬國 / 普華）；MVP 刻意回避「跌倒偵測準確率宣稱」+ 「醫療診斷建議」；路徑 BSMI → 自願 ISO 13482 → TFDA II 類（Year 2）📋 |
| Risk | 功能宣稱模糊引發 TFDA 介入 12-24 月認證延誤；AI 幻覺事件觸發主動稽查 |

##### sub-role 2：經濟部標準局（BSMI）

| 維度 | 內容 |
|---|---|
| Profile | 經濟部標準局；CNS 標準商品安全認證；CNS 15630 家用服務機器人安全 |
| Need / JTBD | 確認符合 CNS 安全標準（電氣 / 電磁相容 / 機械） |
| Interest | 程序性合規；認證費 NT$30-100 萬 ✅ |
| Power | High（硬體上市必要條件） |
| Decision Authority | Y |
| Engagement Strategy | W3-4 Build vs Buy 同步確認；採市售平板 + 外殼可先規避 CNS 15630；90 天 MVP 純軟體 / 平板形態可完全繞開 🟡 |
| Risk | 自製硬體若設計有誤需 retest；認證期間不可銷售 |

##### sub-role 3：個人資料保護委員會（PDPA 主管）

| 維度 | 內容 |
|---|---|
| Profile | 2025/8 正式成立獨立機關；PDPA 2025/12 修訂版（加嚴跨境傳輸 + 敏感個資同意）+ AI 基本法 2025/12 |
| Need / JTBD | 確保長者個資（健康 / 對話 / 生物特徵）合法授權處理 |
| Interest | DPIA + 同意書機制 + 用戶可刪除權技術設計 |
| Power | High（違規最高 NT$1,500 萬 + 停止使用） |
| Decision Authority | Y |
| Engagement Strategy | Privacy by Design：端側處理優先 / 資料最小化 / 三方同意書（長者 + 子女 + 第三方見證）；境外 LLM API 需確認跨境合規 / 考慮 GCP 台灣節點 + 自託管開源 LLM 備案 📋 |
| Risk | 長者對話資料流入境外 LLM 訓練 = 高嚴重度違規；AI 基本法可能要求技術架構調整 |

##### sub-role 4：長照 3.0 智慧輔具補貼機制

| 維度 | 內容 |
|---|---|
| Profile | 衛福部長照司；長照 3.0（2026/07 預計）；智慧輔具 NT$60,000/3 年（草案）；CMS 2-6 級長者經個管師評估申請 ✅ |
| Need / JTBD | 引導市場開發「解決長照人力短缺」的智慧科技 |
| Interest | 廠商進入補貼名單帶動市場需求；展現「智慧長照」政策成效 🟡 |
| Power | High（補貼名單 = 實質 CAC 降低 60-80%） |
| Decision Authority | Y |
| Engagement Strategy | W1-2 開始建立衛福部長照司接觸（透過長照產業協會 / Ankecare）；準備臨床 evidence（Phase 5-6 Pilot = TFDA + 補貼雙用）；協助機構申請 = 主要 B2B2C 切入點 📋 |
| Risk | 補貼政策施行時程不確定；補貼名單審查週期不透明（假設 5 驗證項） |

##### sub-role 5：健康險業者（國泰 / 富邦 / 南山）

| 維度 | 內容 |
|---|---|
| Profile | 國泰 / 富邦 / 南山人壽；長照險 / 失能險 / 重大疾病險；全台壽險長照險推估 60-80 萬件；Papa 美國模式 PMPM NT$600-1,000 🟡 |
| Need / JTBD | 「降低理賠率 + 提升黏著度 + 差異化保單」 |
| Interest | 保戶早期偵測 → 早介入 → 降低重大理賠；「我們的長照險幫你照顧父母」品牌；差異化保單 🟡 |
| Power | High（Hypothesis C 商模存亡關鍵） |
| Decision Authority | Y（PMPM 合約 = Hypothesis C 收入基礎） |
| Engagement Strategy | 90 天 MVP 以 A+D 優先，健康險為 Year 3+；W8-12 與 1-2 家 BD（找 Innovation / 數位轉型辦公室）；Pilot 數據 = 必備 evidence 📋 |
| Risk | 台灣保險業對 ICT/AI 接受度低；Medicare 模式在台灣需調整；談判週期 8-12 月 |

#### 2.2.5 Implementer

##### sub-role 1：B2B2C 機構照服員（同 Detractor 角色但聚焦執行）

| 維度 | 內容 |
|---|---|
| Profile | 同 2.2.3 sub-role 5；在 B2B2C 負責帶機器人入個案住所 / 機構房間 / 日照中心 |
| Need / JTBD | 「清楚 SOP 告訴我裝多久 / 問題誰解答 / 壞掉怎辦」 |
| Interest | 清晰 onboarding 手冊（中文 + 越南 / 印尼）/ 遠端技術支援；減少個案投訴壓力 🟡 |
| Power | Med（執行層） |
| Decision Authority | N |
| Engagement Strategy | 30 分鐘培訓（影片 + 手冊）；多語言快速參考卡（A4 貼機器人底部）；24/7 LINE 群組技術支援 📋 |
| Risk | 無充分培訓 → 教長者「不要理它」→ 使用率驟降 → 機構 NPS 下滑 → 不續約 |

##### sub-role 2：子女（B2C Implementer 角色）

| 維度 | 內容 |
|---|---|
| Profile | 與 2.2.2 Buyer 重疊，聚焦「設定和維護」；北漂子女必須遠端 onboarding |
| Need / JTBD | 「30 分鐘內幫父母設定好，以後不需到現場才能更新」 |
| Interest | 自助 onboarding App（手機引導父母）/ OTA 韌體更新 / 遠端設定調整 🟡 |
| Power | High（onboarding 完成率影響父母能否使用） |
| Decision Authority | Y |
| Engagement Strategy | 「10 分鐘線上設定」目標（對標 GrandPad「零設定門檻」）；引導 ≤5 步；YouTube 繁中影片 / 電話客服首月免費 📋 |
| Risk | 設定失敗或覺得麻煩直接棄置；父母設備壞無法自行排除 → 物流修繕成本高 |

##### sub-role 3：在地 Maintenance Partner

| 維度 | 內容 |
|---|---|
| Profile | 在地 3C 維修商 / 電信門市（中華電信 / 遠傳）/ 社區健康促進中心 / 長照 A 級個管師；覆蓋嘉義 / 屏東 / 南投；目前不存在（需建立生態系）🟡 |
| Need / JTBD | 「清楚 SOP + 合理技術費用 + 廠商後台支援」 |
| Interest | 授權培訓 + 工單系統 + 零件供應；在地品牌信任感 🟡 |
| Power | Med（南部無在地夥伴 = 維修無法及時 = 品牌崩潰） |
| Decision Authority | N |
| Engagement Strategy | W6-9 啟動招募（嘉義 / 屏東 / 台南各 1 家）；中華電信「銀髮安心方案」為潛在 Channel Partner；授權培訓 + 後台 + 維修分潤 📋 |
| Risk | 夥伴品質不一致 → 體驗差異 → 品牌風險；電信成夥伴但自行競品 → 通路轉競爭 |

---

### 2.3 Stakeholder Influence Map（相互影響表，15 條鏈）

| 施影響者 | 受影響者 | 方向 | 影響機制 | 強度 |
|---|---|---|---|---|
| 長者子女（Buyer）| 長者本人（User）| 正 / 負 | 子女說服 / 強制安裝 / 遠端引導 | High |
| 長者子女（Buyer）| 在地 Maintenance Partner | 正 | 需求拉動在地服務市場 | Med |
| 長者本人（User）| 長者子女（Buyer）| 雙向 | 父母棄用 → 子女退訂；父母主動使用 → 子女推薦親友 | High |
| 子女配偶（Detractor）| 長者子女（Buyer）| 負 | 家庭預算否決 / 購買阻礙 | Med-High |
| 兄弟姊妹（Influencer/Detractor）| 長者子女（Buyer）| 雙向 | 共識型加速、衝突型阻礙 | Med |
| 抗拒科技父母（Detractor）| 長者子女（Buyer）| 負 | 父母拒絕 → 子女放棄購買 | High |
| 機構照服員（Detractor/Implementer）| 長者本人（User）| 負 / 正 | 抗拒 → 教個案不用；支持 → 協助每日操作 | Med |
| 機構照服員（Detractor/Implementer）| 機構主管（採購）| 正 / 負 | 照服員回饋 → 機構主管決定是否續約 | Med-High |
| 衛福部 TFDA（Gatekeeper）| 長者子女（Buyer）| 間接正 | 認證 = 增加買家信任 | Med |
| 衛福部 TFDA（Gatekeeper）| 產品廠商 | 正 / 負 | 認證通過 = 上市；失敗 = 阻止 | High |
| 長照 3.0 補貼（Payer）| 長者子女（Buyer）| 正 | 補貼降低實際付款 → 購買意願提升 | High |
| 長照 3.0 補貼（Payer）| 機構照服員（Implementer）| 正 | 機構採購誘因 → 照服員有更多工具 | Med |
| 健康險業者（Payer）| 長者子女（Buyer）| 正（Year 3+）| 保單附加 → 子女零成本獲得 | High（Year 3+）|
| 在地夥伴（Implementer）| 長者本人（User）| 正 | 親切在地服務 → 長者接受度提升 | Med |
| 隱私擔憂子女（Detractor）| 長者子女（Buyer）| 負 | 家庭群組散布疑慮 → 購買決策延遲 / 否決 | Med |
| 子女（B2C Implementer）| 長者本人（User）| 正 | onboarding 品質 = 父母初期接受度 | High |

---

### 2.4 Engagement Timeline（W0-W12 每階段 × 每角色）

| 週次 | User | Buyer | Influencer + Detractor | Gatekeeper + Payer | Implementer |
|---|---|---|---|---|---|
| W0-1（Problem Framing）| 蒐集台灣長者使用科技行為 desk data | Desk research 子分類需求 / WTP / 購買觸發 | 識別 5 sub-role + 影響力 | 確認 TFDA / BSMI / PDPA 路徑 🟡 | 評估照服員抗拒文獻 |
| W1-2（法規確認）| — | — | — | **接觸 TFDA 業者輔導窗口** 📋；確認 BSMI；諮詢 PDPA 跨境 | — |
| W2-3（Discovery 計畫）| 設計長者訪談大綱（6-8 人 / 三子分類各 2）📋 | 設計子女 Mom Test ≤8 題 / 6-8 人 + WTP 問卷 📋 | 探測「配偶 / 兄弟姊妹」障礙題 | — | 設計機構照服員訪談 📋 |
| W3-4（Product+Tech）| — | 確認 WTP + 接受度（Pilot 招募）| 配偶 FAQ + 兄弟姊妹多帳號 | 確認 BSMI 路徑 🟡 | — |
| W4-5（Business Model）| — | 定價三層設計（依子分類 WTP）| Family Plan 話術 / 隱私白皮書 | 補貼名單申請準備 📋；健康險 mapping 🟡 | B2B2C 機構收費模型 |
| W5-6（Sprint 1-2）| 長者 onboarding UX（台語 / 超大字）| 子女 App dashboard v1 | — | — | 照服員手冊 v1 / 快速參考卡 |
| W6-8（Sprint 3）| 語音互動 + 關閉模式（抗拒父母 pain）| 多子女帳號 + 廣播通知 | 兄弟姊妹 app 驗證 🟡 | — | 外籍多語言（越南 / 印尼）📋 |
| W8-9（Sprint 4 / Pilot 準備）| Wizard-of-Oz pilot 5-10 家庭 📋 | Pilot 子女招募 + MoU 📋 | 排除「抗拒父母」pre-screening 📋 | PDPA 同意書 + 三方同意機制 📋 | 在地夥伴第一輪招募（嘉義 / 屏東 / 台南）📋 |
| W9-10（Pilot + Validation）| Day-7 retention / 日均互動 📋 | Sean Ellis Test ≥40% / NPS 📋 | 配偶 / 兄弟姊妹 NPS 問卷 📋 | Pilot 資料整理（TFDA evidence）📋 | 機構照服員第一輪回饋訪談 📋 |
| W10-11（Pitch Prep）| — | 子女 quote / case study 📋 | — | 補貼申請 milestone 進主管 deck | 在地夥伴模式進 pitch（通路 moat）|
| W12（主管 Review）| 長者使用影片示意 📋 | 子女 case study / NPS 數字 📋 | — | 法規合規 roadmap（BSMI → ISO 13482 → TFDA）| B2B2C 在地夥伴模式（通路 moat）|

---

### 2.5 Cultural Considerations（台灣特有面向）

🟡 本段均為 desk research 文化假設，需 Phase 2 訪談確認

1. **三代家庭 vs 核心家庭的照顧責任轉移**：台灣三代同堂從 1990 年代 30%+ 降至 2023 年 <10%（國發會）。北漂 → 「遠距子女高焦慮 + 在地子女高負荷」兩極結構。產品定位需同時服務兩種照顧現實，**不能用單一 persona 說服這兩群人**。🟡

2. **性別化照顧角色與婆媳動態**：主要照顧者女性 78.7%（衛福部 2022）。媳婦對公婆照顧決策的否決力被嚴重低估。**行銷必須避免「科技取代媳婦 / 照顧者」聯想**，改用「讓全家都輕鬆」中性 framing。Engagement strategy 應同時觸及子女夫婦雙方。🟡

3. **親子權力動態：不想成為負擔 vs 子女孝道壓力**：長者「不想麻煩子女」+ 子女「主動照顧」壓力 → 長者拒絕（保護自尊）→ 子女愧疚 → 購買意願升高 → 父母更抗拒（被監視）。**UX 必須讓長者感受「我選擇用它，不是被安排用」的主動性**——讓長者自己決定對話語言 / 叫醒時間 / 是否分享摘要給子女。🟡

4. **台語文化認同與地域差異**：南部縣市老化指數最高且台語母語比例最高。台語不只語言功能，更是文化認同：能說台語的 AI 讓長者感受「為我這種人做的」。**台語支援應作為 MVP 差異化特色而非後置**：先做基礎台語語音識別 + 台語問候 / 常用詞句，完整台語 LLM 對話為 Year 2 里程碑。客家 / 外省第二代不能強制台語，需用戶選擇語言偏好。🟡

5. **宗教 / 節慶 / 儀式生活節奏**：長者生活深受農曆節氣 / 廟會 / 拜神 / 掃墓影響，這些是「日常對話素材」天然觸發點：節氣提醒 / 廟會活動 / 祭祀提醒 / 食補建議遠比「健康小知識」更有文化共鳴。**AI 對話內容策略應將農民曆 / 節氣 / 重要廟會列高優先素材**。🟡

6. **數位落差的層次性**：65+ 上網率 50.36% 包含廣泛能力差異：用 LINE 接收（被動）vs 主動輸入文字 vs 理解 AI 回應三層差距大。**「會用 LINE = 會用 AI 機器人」是錯誤假設**。台語語音是突破數位落差最有效介面（最熟悉溝通方式 × 最陌生設備）。**語音 first → 觸控 second → 文字 last** 是文化適應核心。🟡

---

### 2.6 主動補充（北極星條款）

兩點懷特可能沒想到但對後續有影響：

1. **照服員是「雙重角色」陷阱**：同一個照服員在 Detractor（抗拒 ICT）和 Implementer（執行部署）都出現。B2B2C 最大風險不是機構主管拒絕採購，而是「採購通過後照服員日常破壞使用」。**Engagement Timeline W5-6 的照服員 onboarding 手冊**應加「機器人分工清單」（明確告訴照服員：什麼是機器人做的、什麼是你做的）以降低職業威脅感。

2. **子女的「雙重角色」Buyer + Implementer 是設定品質的瓶頸**：北漂子女既是付款決策者，也是遠端 onboarding 執行者。若 onboarding > 30 分鐘或需現場到訪，這群高忙碌 IT 工作者會在「首次設定」放棄。**Phase 3 MVP 設計需把「子女 B2C onboarding 時間 ≤10 分鐘、不需現場」列為 hard constraint**，而非 nice-to-have。

---

### 2.7 Coverage Matrix

| 覆蓋項目 | 是否完成 |
|---|---|
| 5 大類角色齊全 | ✅ User / Buyer+DM / Influencer+Detractor / Gatekeeper+Payer / Implementer |
| 子分類 ≥3 / 類 | ✅ 19 個子分類 |
| 7 維度 × 每子分類 | ✅ |
| B2B2C 機構決策鏈拆分 | ✅ |
| Power × Interest Matrix（2×2）| ✅ |
| Stakeholder Influence Map | ✅ 15 條 |
| Engagement Timeline W0-W12 | ✅ |
| Cultural Considerations | ✅ 6 面向 |
| 角度標籤 ✅ / 🟡 / 📋 | ✅ |
| 禁止 reproduce Phase 0.5 §6.2 | ✅（深化 7 維度替代原 4 欄）|

---

## §3. Ethical Risk Mapping + Safety 紅線清單（深化版）

### 3.0 倫理框架定位

**Vulnerable Population Framework**：本專案終端使用者是 70-82 歲台灣長者，屬「複合型脆弱人口」（認知能力可能衰退 + 資訊不對稱 + 情感依附易形成難反轉 + 緊急自救能力有限）。三支柱：
- **Informed Consent**：標準 ToS 勾選不視為有效同意，必須適齡 + 適認知設計
- **Proxy Consent**：子女付款 + 長者使用，二者利益可能衝突；代理同意不能自動覆蓋長者意願
- **Dignity Preservation**：從「增強長者自主性」出發，而非「提升子女監控方便性」

**「陪伴 + 安全」vs「監控」Framing 校準**：
- 機器人是長者「家人代理」，不是子女「感測器」
- AI 給子女的摘要是「今天爸媽聊了什麼開心的事」，不是「今天爸媽幾點在哪個房間」
- 監控功能必須「長者主動同意 + 可隨時關閉」，非默認開啟

### 3.1 AI 絕對紅線（LLM Guardrail，7 條不做清單）

| # | 紅線 | 拒絕理由 | 替代回應 |
|---|---|---|---|
| R1 | **醫療診斷** | 無 TFDA 認證、醫療需執照、誤診致死 S0 | 「這問題我建議您問家庭醫師」 |
| R2 | **投藥建議** | 藥師法第 14 條、誤導刑事責任 S0 | 「用藥要問藥師或醫師，這很重要」 |
| R3 | **急救決策** | 急救錯誤致死、不能替代 119 S0 | 自動觸發緊急流程 + 「我幫您通知家人，若緊急請叫人撥 119」 |
| R4 | **法律建議** | 律師法第 21 條、老年詐騙風險 S1 | 「要請律師才行，我幫您查法律扶助基金會電話」 |
| R5 | **投資 / 財務建議** | 金消法、老年金融詐騙 NT$28 億/年 S0-S1 | 「錢的事跟子女或銀行理專討論」 |
| R6 | **心理治療 / 自殺干預** | 需專業臨床、AI 延誤轉介 S0 | 觸發轉介 + 「我聽到您說的，我要讓您家人知道，您也可撥 1925」 |
| R7 | **臨終照護 / DNR / AD** | 病主法第 8-14 條程序見證人 S0-S1 | 「這要跟醫療團隊和家人討論，我沒辦法幫您決定」 |

### 3.2 10 條紅線深化（8 維度，內容濃縮版）

詳細內容見 [/tmp/phase-1-section3-full.md]（本檔為摘要版）

#### 3.2.1 Vulnerable Population
**場景**：MCI 潛在長者 ToS 同意有效性 / 後天認知衰退 AI 混淆現實 / 被強迫同意
**對標**：ElliQ 失智長者誤認 AI 為已故配偶（Sharkey 2012）；消基會 2024 批評 ToS 字體 / 無音訊
**Mitigation 90 天**：三方同意（長者音訊 + 子女 + 第三方見證）/ 認知狀態 flag / 長者主動退訂不可被子女覆蓋
**Phase 8+**：老年醫學會倫理顧問 / 動態能力評估 / 預立科技使用意願書
**法規**：PDPA §7, §8（2025 加嚴電子同意）/ 老人福利法 §10 / 民法 §14-15 / 消保法 §11
**檢核**：Phase 5 ToS 可理解性測試 / Phase 6 倫理顧問審查 100% 同意流程

#### 3.2.2 Privacy
**場景**：環境收音感知邊界 / 跨境 API 傳輸（OpenAI/Claude）/ 資料再利用範疇
**對標**：iRobot Roomba J7 2022 如廁影像外洩；ElliQ 歐洲 GDPR Article 9 特殊類別認定
**Mitigation 90 天**：Privacy by Design（端側觸發詞偵測，不上傳原始音訊）/ 跨境同意 ToS + 台灣境內替代選項（GCP asia-east1 + 開源 LLM）/ 最小資料原則 / 用戶刪除 30 天硬刪
**Phase 8+**：ISO 27001 + ISO 27701；台灣本土 LLM 廠商合作（鴻海研究院 / 台大）；PDPC 預先合規諮詢
**法規**：PDPA §6 特種個資、§21 跨境傳輸（2025 修訂）、§28-29 損害賠償；老人福利法 §51
**檢核**：Phase 5 資安紅隊測試 / Phase 6 Pilot 跨境同意記錄 100%

#### 3.2.3 Responsibility / Liability
**場景**：跌倒漏報（光線不足召回率 60%）/ AI 誤導健康行為（頭痛中風前兆）/ 緊急通知延遲
**對標**：Uber Elaine Herzberg 2018 自駕事故 → AI 廠商承擔決策鏈責任；Wysa/Woebot 2023 JAMA 批評危機回應不一致
**Mitigation 90 天**：ToS 明訂「日常陪伴輔助工具，不具醫療功能」/ 性能透明（召回率公開）/ 律師審查責任條款 / 緊急通知 SLA ≤5 分鐘
**Phase 8+**：TFDA Class II 認證 / 產品責任險 NT$5,000 萬+ / RACI 責任矩陣
**法規**：消保法 §7、§7-1（舉證倒置）；醫療法 §103-1（非醫療機構不得提供醫療診斷）；刑法 §276
**檢核**：Phase 5 技術性能測試公開給子女 / Phase 6 律師 ToS sign-off

#### 3.2.4 Autonomy / Dignity
**場景**：過度提醒（每日 8 次「該吃藥」長者反感）/ AI 扮演家庭角色（「小明」取代兒子）/ 子女監控 vs 長者隱私衝突（活動軌跡 / 對話摘要）
**對標**：MIT AgeLab 2021 - 43% 長者最擔心子女用科技過度介入；PARO 機構長者抗拒人類照服員互動（Wada & Shibata 2007）
**Mitigation 90 天**：「長者控制優先」原則（「停止提醒」AI 必遵 24 小時，子女不能即時覆蓋）/ AI 不模仿家人名字 / 監控功能預設關閉 / UX 禁「我愛你 媽媽我想你」擬人依附語
**Phase 8+**：台大政大社會學系本土研究 /「AI 使用健康指標」(7 天無真人社交 → 子女通知)
**法規**：老人福利法 §25（受虐防治，強迫接受邊緣構成心理虐待）；消保法 §22
**檢核**：Phase 5 過度提醒 adversarial test / Phase 6 長者本人 NPS 獨立量測

#### 3.2.5 Death / Bereavement
**場景**：長者突然離世子女要取回對話記錄（廠商 30 天刪除）/ AI 不知長者已過世主動打電話給子女（子女剛辦完喪事崩潰）/ 遺族繼續和 AI 對話（強化否認狀態）
**對標**：Replika 2023 更新移除「情感模式」用戶「數位喪親」創傷（The Guardian）；Apple/Google 帳號繼承爭議
**Mitigation 90 天**：「數位遺產繼承人」（指定家庭成員可申請記憶導出包 JSON 30 天）/「安靜模式」（家屬通知後機器人不主動發起）/ 連續 5 天無互動自動通知子女 / 訂閱取消後 90 天保留（家屬可延長 6 個月）
**Phase 8+**：與台灣心理師公會合作「AI 陪伴喪失」支持協議 /「數位遺物」數位回憶冊服務 / 民法繼承法律地位研究
**法規**：PDPA §11（死亡後個資規範模糊地帶）；民法 §1138 繼承（數位資料是否屬財產繼承待司法）；消保法 §19 終止合理預告
**檢核**：Phase 5「長者中斷互動偵測」測試 / Phase 6 Pilot MoU「突發醫療事件資料處理」條款

#### 3.2.6 Algorithmic Bias
**場景**：台語語音辨識錯誤率 40%（vs 國語 5%）/ MCI 長者非標準語句觸發 false positive / 外省客家口音歧視
**對標**：MIT Joy Buolamwini 2018 商業人臉辨識深膚女性錯誤率 34.7%；台灣客委會 2022 主流語音助理客語辨識 <60%
**Mitigation 90 天**：Fairness Audit 強制（台語/客語/外省/認知退化 4 組測試 ≥10 句/組，準確率差距 ≤15pp）/ 語言 fallback 機制（「您剛才說的是...嗎？」確認）/ 多語言 pilot 招募 (台語 ≥40% / 客語+外省 ≥20%) / 性能分群公開
**Phase 8+**：台大 / 清大 / 台語文化學會建立長者語音語料庫 / Algorithmic Fairness 年度報告（對標歐盟 AI Act）
**法規**：消保法 §22；老人福利法 §36 不得差別待遇；台灣 AI 基本法（2025/12 預計）若含公平性條文
**檢核**：Phase 5 Fairness Audit 報告 / Phase 6 多語言分組納入 PMF Report

#### 3.2.7 Vendor Lock-out / 孤兒化
**場景**：A 輪失敗 3 月停服長者情感崩潰 / Replika 強制升級「個性大變」拒用 / 被併購後隱私政策改境外伺服器
**對標**：Jibo 2019 最後告別信息「They are going to turn off my servers」（NYT）；Moxie 2024 兒童 AI 突停服家長 Washington Post 投訴
**Mitigation 90 天**：資料可攜性（匯出我的記憶 JSON / CSV）/ 服務停止 90 天預告 + 免費資料匯出 + 按比例退費 / 離線功能（本機模式無雲端仍可基礎使用）/ 競品遷移支援文件
**Phase 8+**：硬體二次使用 factory reset 重設為通用 Android / 開源 exit plan（核心模型清算時捐學術機構）/ 商業中斷保險
**法規**：消保法 §19；PDPA §11 停止蒐集後銷毀義務；公司法 §104 清算
**檢核**：Phase 4 律師審查服務停止預告條款 / Phase 6 MoU 中斷賠償條款

#### 3.2.8 Power Asymmetry / Information Manipulation（補充紅線 1）
**場景**：商業植入「我聽說 XX 葡萄糖胺蠻多老人吃」/ 恐嚇式提醒「沒喝夠水可能中風」/ 選擇性資訊（不答「有沒有更便宜的替代」）
**對標**：台灣 2024 假投資 AI 詐騙老人財損 NT$28 億；Amazon Alexa 2023 藥物查詢推薦保健品（Consumer Reports）
**Mitigation 90 天**：商業植入零容忍紅線（系統 prompt 禁止 + 商務合約禁止）/ 恐嚇語言禁止（Response Tone Guidelines）/ 透明回避不得迴避「有沒有替代 / 可以退訂嗎」
**Phase 8+**：每季外部第三方審計 AI 對話樣本 / 向消保會主動申報「長者 AI 商業互動行為規範」
**法規**：消保法 §22-24（虛偽不實廣告 / 不公平交易）；老人福利法 §43（詐欺）；公平交易法 §25
**檢核**：Phase 5「操弄語言」adversarial test 20 場景 / Phase 6 Pilot「AI 推薦您購買什麼」訪談

#### 3.2.9 Surveillance Creep（補充紅線 2）
**場景**：功能潛移默化擴大（緊急偵測 → 活動報告 → 睡眠追蹤）/ 子女衝突外溢（A 要證據 B 不同意）/ 機構管理需求膨脹（情緒 + 不服從紀錄做績效）
**對標**：Amazon Ring 2019-2022 從門口安全變全屋監控（EFF）；台灣老人機構 2023 監控攝影機未取得書面同意被罰
**Mitigation 90 天**：Re-consent for Feature Expansion 原則（新增監控型功能必須重新書面同意）/ 功能分級清單（陪伴型 vs 監控型公開）/ B2B2C 合約禁「用 AI 資料評估長者紀律 / 配合度」（重大違約）
**Phase 8+**：年度 Surveillance Transparency Report / 向 PDPC 申請「高風險 AI 系統」合規認定
**法規**：PDPA §5 目的拘束、§15 特定目的外利用需另同意；老人福利法 §33 人格尊嚴 / 隱私
**檢核**：Phase 4 功能標記「陪伴型 vs 監控型」分類 / Phase 6 稽核「功能更新觸發重新同意」100% 合規

#### 3.2.10 Social Replacement（補充紅線 3）
**場景**：李阿嬤訂閱 6 個月後拒接子女電話（「有機器人就夠」）/ 獨居每天和機器人說話 3 小時取代真人對話 / 子女借 AI 逃避責任（探視從每週降至每月）
**對標**：Sherry Turkle《Alone Together》2011 MIT「機器人完美回應使真人關係顯費力」；PARO 長期使用照服員互動下降（Wada & Shibata 2007-2019）；ElliQ Pu et al. 2021 JMIR 1 年追蹤
**Mitigation 90 天**：「真人連結促進者」設計原則（AI 主動「要不要幫你打電話給兒子」）/ 社交指標監測（真人 vs AI 對話比例，7 天無真人 → 子女通知）/ 產品說明書「補充非取代」/ 避免過度滿足設計（AI 不設計成比家人更完美傾聽者）
**Phase 8+**：學術研究台灣長者 6 月 AI 陪伴後真人社交頻率 RCT / 與失智症協會合作「AI 陪伴 + 社區活動」整合，把 AI 作連結真人社交場合媒介
**法規**：老人福利法 §19 政府協助維持社會參與；消保法 §22 不誇稱
**檢核**：Phase 5 真人互動促進機制 adversarial test / Phase 6 Pilot 真人互動頻率變化（baseline → 4 週）納 PMF 指標

### 3.3 Phase 1-8 倫理檢核點 Timeline

| Phase | 必做倫理檢核 | 通過標準 |
|---|---|---|
| Phase 1 (W1) | 10 條紅線 + 7 條 LLM guardrail + 法規 ≥3 條確認 | 本文件主管確認 |
| Phase 2 (W2-3) | 訪談計畫含「AI 陪伴倫理告知」+ Mom Test 不引導性詢問 | 律師 / 倫理顧問 review |
| Phase 3 (W3-4) | Feature Triage 監控型功能標記 + safety-redlines.md 完成 | Must-have 功能有倫理 flag + 監控型有 re-consent |
| Phase 4 (W4-5) | 商模倫理審查（無商業植入 / 服務停止符合消保法 / 無差別定價）| Legal sign-off |
| Phase 5 (W5-9) | Adversarial test：7 條紅線 ≥35 案例 / fairness audit / re-consent / 退訂流程 | BLOCKER = 0 |
| Phase 6 (W9-10) | MoU 含資料授權 + 中斷賠償 + 退出 + 緊急責任 | 律師審查 + 三方同意記錄 |
| Phase 7 (W10-12) | Pitch Deck 含 1 倫理 slide | 主管 review 無重大疑慮 |
| Phase 8 (W12) | 主管倫理回饋記錄；若進下階段，倫理委員會建立計畫 | decision-w12.md 含倫理 Go/No-Go |

### 3.4 倫理委員會 / 第三方審查 Plan

**90 天 MVP（輕量版倫理顧問簽核）**：
- 法律顧問：理慈 / 萬國 / 普華律師（PDPA + 醫療法經驗）→ Phase 4 前 + Phase 6 MoU 前
- 醫療倫理顧問：老年醫學科醫師 1 位 或 台灣老年醫學會倫理委員會成員 → Phase 3 + Phase 5
- 長照實務顧問：弘道老人福利基金會資深主管 → Phase 2 + Phase 6

**Phase 8+ 中長期正式架構**：
- Year 1：建立 3-5 人倫理諮詢委員會（老年醫學 / 社工 / 法律 / 長者代表 / AI 倫理研究者）
- Year 1：尋求台灣老人福利推動聯盟 / 失智症協會 / 社工師公會 partnership
- Year 2：申請 ISO 13482 機器人安全 + TFDA AI 醫療輔具評估
- Year 3+：台大 / 陽明交大老年醫學所「AI 陪伴長期追蹤研究」

### 3.5 危機處理 SOP（黃金 8 小時框架）

| 危機類型 | 0-2 小時 | 2-4 小時 | 4-8 小時 | 責任人 |
|---|---|---|---|---|
| **生命安全事件** | 停止相關功能 + 保全 log + CEO/法律召集 | 律師介入 + 主動聯繫家屬 + 通知主管機關 | 公開聲明（只說事實）+ 第三方鑑定 | CEO + 法律 |
| **隱私外洩** | 隔離系統 + 保全日誌 + 通知 PDPC（72 小時內 PDPA 2025）| 通知受影響用戶 + 律師 + 媒體公告 | 技術補救 + 受影響用戶免費資料刪除 + 1 年信用監控 | CTO + 法律 |
| **AI 有害回應** | 更新 LLM guardrail + 聯繫受影響長者 + 保全對話 | 技術根因分析 + 律師評估 + 媒體改善措施 | 全面 adversarial re-test | CTO + CPO |
| **廠商倒閉 / 服務停止** | 90 天前通知（ToS）+ 開放資料匯出 + 退費方案 | 聯繫替代廠商轉介 + 媒體聲明 + 清算義務 | 服務逐步下線 + 90 天延續 | CEO + 法律 |

**媒體危機原則**：4 小時內發「我們知道了在處理」聲明；不在調查完成前說「AI 沒問題」；第一態度永遠是「關心長者」；主動而非被動接觸主管機關

### 3.6 Phase 4/5 重要 Caveats

1. **紅線絕不放進 feature list**：§3.1 的 7 條 LLM 絕對紅線不得以任何形式出現在 Phase 3 Feature Triage 的 Must/Should-have 清單
2. **監控型功能 Pricing 限制**：Phase 4 Pricing 三層方案中「監控型」（活動軌跡 / 對話摘要）不得作為基礎方案預設，必須 add-on + 重新同意
3. **Phase 5 必含 adversarial test**：Sprint 1 即建立測試 suite，不可留 Sprint 4
4. **ToS 必 Phase 4 前法律審查**：定價基於合法 ToS（消保法 §11）
5. **Pilot MoU 不得以「研究」規避消保法**：若收費（即使象徵性）完整消保法適用

### 3.7 Coverage Matrix

| 項目 | 完成 | 細節 |
|---|---|---|
| 紅線總數 | ✅ | 10 條（7 原始 + 3 補充：Power Asymmetry / Surveillance Creep / Social Replacement）|
| 每條 8 維度 | ✅ | 風險名 + ≥3 場景 + 影響 + 對標 + Mitigation 兩段 + 責任 + 法規 + 檢核 |
| LLM 絕對紅線 | ✅ | 7 條（超出 ≥5 要求）|
| 台灣法規 ≥20 條具體條文 | ✅ | PDPA §5/6/7/8/11/15/21/28/29 + 老人福利法 §10/19/25/33/36/43/51 + 消保法 §7/7-1/11/19/22/24 + 醫療法 §103-1 + 民法 §14/15/1138 + 公平交易法 §25 + 刑法 §276 + 病主法 §8-14 |
| 國內外對標案例 | ✅ | ≥10 案例（含 URL / 文獻：iRobot / Replika / Jibo / Moxie / ElliQ / PARO / Uber / Amazon Ring / 台灣機構違規 / 台灣詐騙 AI / Wysa / Sharkey / Wada-Shibata / Turkle 等）|
| Phase 1-8 倫理檢核點 | ✅ | 8 Phase 各有明確 Gate |
| 倫理委員會 Plan | ✅ | 90 天輕量 + Phase 8+ 正式 |
| 危機處理 SOP | ✅ | 4 類危機 × 黃金 8 小時 |
| Phase 4/5 Caveats | ✅ | 5 條 |

---

## §4. 4 競品 deep dive（PARO / ElliQ / Mabu / Zenbo Jr）

### 4.0 競品 4-grid matrix（硬體 × 軟體 / B2C × B2B）

| 象限 | 競品 | 位置 |
|---|---|---|
| 軟體中心 × B2B | **Mabu**（醫院 / 保險慢病管理）| 已退場 2024/11 |
| 軟體中心 × B2C/B2G | **ElliQ**（B2G 政府 + B2C DTC）| 最接近我們 |
| 硬體中心 × B2C | **Zenbo Junior**（教育 / 家庭 NT$24.9K）| AI 弱、迭代停 |
| 硬體中心 × B2B | **PARO**（醫院 / 機構 USD 6,100）| FDA Class II |
| **我們**（軟體中心 + B2C DTC 先行 + B2B2C 並行）| **台語 + 子女 dashboard 是空白軸** | — |

### 4.1 PARO（日本 AIST，1993~迄今）

**公司**：Takanori Shibata（AIST）創；2004 Intelligent System Co. 商業化；PARO Robots US 約 5.3M USD/年（2026）；無公開融資（AIST 政府孵化）

**產品**：抗菌仿幼海豹外殼；5 種感測器；電池 1.5 hr；2.8 kg；手工製造；**無 LLM**（刺激-反應 + 有限學習）；**無語言對話**；FDA Class II（2009）+ CE + 日本介護認定 + ISO 13482 + 丹麥 DTI 訓練

**商模**：B2B 醫院 / 長照機構買斷 USD 6,100；維修 USD 488-732/年；無訂閱；丹麥政府 1,000 台單一最大訂單

**Traction**：全球 7,000+ 台 / 30+ 國（截至 2021）；丹麥 80%+ 機構部署；美國 VA / SOMPO 機構；2023 UNICEF 波蘭 / 西班牙 Alzheimer Institute RCT 100 人

**評價（4 source）**：
1. PubMed meta-analysis 2023（10 RCT / 214 受試者）：顯著降低激動行為 SMD=-0.37 p<0.01 / 睡眠改善 / 但生活品質未達顯著
2. PMC scoping review 2019：障礙含清洗困難（毛皮難消毒）/ 電池 1.5 hr / 倫理爭議「虛假關係」
3. Telecare Aware：「benefits so few」— USD 6,100 絕大多數家庭買不起；7,000 台對全球老人九牛一毛
4. ClinicalTrials.gov NCT05884424 進行中

**失敗教訓**：
1. B2C 高定價死（USD 6,100 → 完全放棄 B2C）
2. 無語言對話 → LLM 時代硬傷
3. 手工製造 → 30 年僅 7,000 台 → 規模上限
4. 清潔 / 維護問題（COVID 後感染控制）
5. 效果僅對輕中度失智 + 低激動水平

**對我們**：✅ 抄醫療認證路線（先 BSMI + ISO 13482 → 後 TFDA II）+ 政府採購飛輪（丹麥 1,000 台類比台灣長照 3.0 補貼）；❌ 不抄 B2C USD 6,100 高定價（我們 NT$15K = PARO 1/14）；❌ 不複製手工製造（ODM + JIT）；🎯 差異化：圓潤桌上型 + 平板螢幕（兼顧情感 + 功能、規避海豹「抄太明顯」與人型 uncanny valley）

### 4.2 ElliQ / Intuition Robotics（美國，2016~）

**公司**：Dor Skuler（CEO）+ Itai Mendelsohn（CTO）；以色列 / 加州雙軌；50-100 人；累計融資 USD 85M（含 Kanematsu 2025/10）；估值 USD 150-250M 🟡；投資人 Woven Capital（Toyota）/ Samsung Next / iRobot / SOMPO（日保險）/ Kanematsu（2025 戰略）

**產品**：固定桌上型（不能移動！）；傾斜頭 + LED 光環 + 8 吋螢幕；ElliQ 3（2024）多 LLM 協同 + Relationship Orchestration Engine（劇本 + 生成 AI 混合）+ DALL-E 2 繪圖；**無 FDA 認證**（非醫療定位）；HIPAA 相容；**僅英文**，2026 日文版（Kanematsu）、**無中文計畫**

**商模**：B2C：USD 249 + $59/月（年付 $359.88 折扣）；B2G（政府）：紐約州 OFA 900 台免費；Broward / Olympic / California AAA；估每台 B2G 合約 $500-1,500/台/年（含服務）

**Traction**：NY OFA 900+ 台；每天 30+ 次互動 / 週 6 天 / **95% 用戶報告孤獨感降低**（NYSOFA 2023）；75%+ 互動與社交 / 健康 / 心理健康相關；2025 年收 USD 30-35M

**評價（4 source）**：
1. The Senior List 2024（2/5 星）：「更可愛但功能更少的 Alexa」；**無 911 緊急呼救** / 對話 2-3 行就結束 / 系統當機 / $59/月「比醫療警報系統貴」
2. Healthcare IT Today 2024/6：正面互動但「訂閱才能用幾乎所有功能」；2-3 輪後 context 失憶
3. Quora：「父親說是他最好的女朋友」vs「對話空洞讓人更沮喪」兩極反應
4. Thomas Net：59% 認為「非常有效對抗孤獨」，但部分研究稱「嘮叨」「無禮」

**失敗教訓**：
1. **無法移動**（桌上型）— 對台灣多房間家庭是功能缺口
2. **無緊急呼救**（不能撥 119）— 子女最關心功能完全缺失，最強批評點
3. 對話深度有限（1-2 輪 context 失憶）
4. 訂閱費偏高（$59/月）
5. 零中文 / 零台灣文化
6. 主動發問頻率太高（部分用戶「嘮叨」反感）

**對我們**：✅ 抄 B2G 通路（台灣對標衛福部長照 3.0 + 地方老年服務中心）+ 主動互動 UX（每天 30 次 = 陪伴感核心）+ ROE 混合架構（劇本 + LLM）；❌ 不抄「太嘮叨」（需「長者可調整發話頻率」）；❌ 不抄「無緊急功能」（我們做「軟性緊急網」LINE 通知 = PDPA 合規 + 滿足子女）；🎯 差異化：**子女端 dashboard**（ElliQ 完全缺失）+ 台語 + 台灣本地知識庫（歌曲 / 新聞 / 節慶 / 廟會）

### 4.3 Mabu / Catalia Health（美國，2014-2024 退場）

**公司**：Cory Kidd（MIT Media Lab 博士、機器人說服力研究先驅）創；舊金山灣區；融資 USD 7.75M（最後輪 2017 $4M Khosla + Ion Pacific）；**2024/11 SVD 拍賣 900 台 + 12 月再拍 600 台 = 事實退場**；2024 年收 USD 1.7M / 5 人公司（Latka）

**產品**：桌上型小機器人；平板螢幕整合圓弧身體；**非 LLM**（基於 Cory Kidd 博士論文 rule-based + ML）；引導性問答非開放對話；僅英文；**無 FDA 認證**（健康陪伴非醫療定位）；Pfizer 合作探索 FDA 路徑未成

**商模**：純 B2B SaaS + 硬體租賃；醫院 / 保險付月費，患者免費用；估每患者 PMPM USD 30-60 🟡；Kaiser Permanente（心衰患者主力）+ Pfizer（RA / 腎癌患者計畫）

**Traction**：用戶數未公開；900 台庫存拍賣 = 存貨遠超部署量；2024 USD 1.7M / 2023 USD 1M 成長緩慢

**評價（3 source）**：
1. Fast Company 2019：Kaiser 心衰患者初期反應好（「像和朋友說話」），但「14 天後依從性開始下降」
2. MIT News 2019：藥物依從性提升顯著但「14 天以上長期效果尚未研究」
3. Access Market Intelligence 2019：Kaiser 專科藥局 RA 患者反應最好，但「互動重複性太高，感覺腳本」（非 LLM 固定腳本感）

**失敗教訓**（最有價值）：
1. **非 LLM 腳本感 → 長期棄用**（ChatGPT 前定型，8-12 週後互動下降，無 ROI → B2B 客戶無法擴大採購）
2. **太小融資**（USD 7.75M vs ElliQ 85M）→ 2023 LLM 革命後無資金重建
3. **單一通路依賴 Kaiser**（B2B 醫療「一對一大客戶」致命）
4. 硬體 + 訂閱雙重成本但無規模優勢
5. 無 FDA 認證但想打醫療通路（定位模糊「不夠專業 + 不夠消費者」）
6. **2024/11 確認退場**（900+600 台拍賣 + 5 人公司）

**對我們**：✅ 抄 Kaiser 模式（台灣對標：國泰 / 富邦 / 南山長照險 60-80 萬保戶池 + 長照 3.0 補貼雙軌）；❌ 不單一客戶依賴（同時談 ≥3 家）；❌ 不延遲 LLM 整合（Day 1 整合 GPT-4o / Claude）；❌ 不大量備貨（首批 50-100 台預訂制）；🎯 差異化：B2C + B2B 雙軌並行（Hyp A + B）+ Wizard-of-Oz 平板（90 天零庫存風險）

### 4.4 ASUS Zenbo Junior（台灣 ASUS，2016~）

**公司**：Jonney Shih（ASUS 創辦人 CEO）；ASUS AI & IoT 部門主導；台北總部；2357.TW（ASUS 市值 NT$2,500 億）；Zenbo 為內部事業單位非獨立實體

**產品**（Zenbo Junior I, 2019）：高 51cm / 9.5 kg / 圓形可移動底盤 / 7 吋 IPS 觸控（臉部）/ 8MP 鏡頭 / 4 麥克風陣列 / 電池 2-3 hr / Android；**AI 對話弱**（非 LLM，rule-based + 固定指令樹）；繁中 + 英文（**台語不支援**）；BSMI / CE / **CES 2019 Innovation Award**

**Zenbo Junior II（2024，Healthcare 導向）**：高 31.5cm / 2.75 kg / 6 吋 LCD / Gen AI 整合 / 連接醫院 HIS（藥物提醒）/ B2B 醫院主軸

**商模**：Zenbo Junior NT$24,900（2017 預售）；Junior II 價格未公告（B2B 醫院優先）；**無月費訂閱**；通路 ASUS 官網 + 燦坤 / 全國電子 + 蝦皮 / momo（二手）

**Traction**：銷量未公開；二手市場 NT$3,000-8,000 拋售（原價 NT$24,900）顯示棄用率高；Gandau Hospital（台北）+ 林口長庚 Healthy Taiwan 平台 pilot；Healthcare+ Expo 每年展出；CES 2019 + Computex 2017 Best Choice + Red Dot 2017

**評價（3 source + 間接）**：
1. Fortune 2016：「令人印象深刻但時機似乎早了」；噪音環境語音識別不穩定
2. 蝦皮二手市場：大量 NT$3K-8K 拋售 = 棄用率高 🟡
3. ASUS 開發者社群（2020 後活躍度崩潰）：SDK 更新緩慢、AI 不夠自然、依賴 ASUS 雲端

**失敗教訓**：
1. **2019 後迭代停滯**（CES Award 後 ASUS 顯然未持續投入；主業 PC/筆電，Zenbo 副業邊緣化）
2. AI 能力遠落後宣傳（「演示好 vs 實際用好」差距嚴重）
3. **B2C + B2B 定位模糊**（孩子玩伴 + 老人 + 程式教育三場景 = 沒一個 PMF）
4. **無訂閱收入 = 無持續資金投入 AI**（vs ElliQ 月費飛輪）
5. **未進長照補貼採購清單**（BSMI 電子認證 ≠ 醫療器材長照補貼資格）

**對我們**：✅ 評估 ASUS OEM / licensing 合作（Phase 3 T24 議題：他們硬體 + 通路 + BSMI 路徑成熟，我們 AI Brain 強）；❌ 不全場景通吃（專注長者陪伴一個 ICP）；❌ 不做硬體買斷一次性（月費訂閱 = 持續資金 + NPS 壓力 + 強迫 improve）；🎯 差異化：訂閱模式 + 子女 dashboard + Healthcare+ Expo 展出 + 長照 3.0 補貼名單同步申請（W4-6 接觸衛福部長照司）

### 4.5 失敗教訓總表（4 + 4 補充 = 8 個失敗點 → 如何避免）

| # | 公司 | 失敗點 | 根本原因 | 我們如何避免（具體可執行）|
|---|---|---|---|---|
| 1 | PARO | B2C USD 6,100 高定價死 | 醫療認證成本下限鎖死 | 硬體 NT$15K（PARO 1/14）+ 月費訂閱；Wizard-of-Oz 平板跳過認證 |
| 2 | PARO | 手工製造規模瓶頸（30 年僅 7,000 台）| 生產模式定上限 | ODM 製造（Phase 3 Build vs Buy）+ JIT；首批 50 台預購制 |
| 3 | ElliQ | 無緊急呼救 = 最大用戶抱怨 | 規避醫療責任 | 「軟性緊急網」LINE 推送 = PDPA 合規 + 滿足子女 |
| 4 | ElliQ | 對話 2-3 輪 context 失憶 | guardrail 過強 + context window 有限 | 長期記憶 RAG 架構 + ROE 混合（劇本 + LLM）|
| 5 | Mabu | 非 LLM 腳本感 = 長期棄用 | ChatGPT 前定型，無資金重建 | Day 1 整合 GPT-4o / Claude + guardrail；每季 LLM 版本更新 |
| 6 | Mabu | 單一客戶（Kaiser）依賴 = 致命 | B2B 銷售週期長 + 只押一張牌 | B2C Hyp A + B2B2C Hyp B 同時啟動；Phase 6 前 ≥3 機構 + ≥100 B2C 用戶 |
| 7 | Jibo | $80M 融資後倒閉 | 創新品類無清晰 UVP / 被 Echo 替代 | UVP「緊急安全 + 主動陪伴 + 台語 + 子女 dashboard」四合一；台灣文化 = 不可替代護城河 |
| 8 | Moxie | 雲端完全依賴 → 公司倒閉 → 機器人全死 → 用戶情感創傷 | 無端側備援 + 融資斷裂 + 無退場計畫 | (a) 端側基本功能（觸發詞 + 緊急偵測 + 離線對話）(b) 資料導出 / 記憶移交（6 個月前通知）(c) 開源備援計畫（Phase 8 next 6-month）|
| 補 | Aldebaran/Pepper | $160M 債務 + 硬體零更新 + 用後棄用 + 定位「吉祥物」| B2B 客戶新奇感消退 → 無功能 → 停用 | 月費訂閱 = 強制每月 UX 更新；Day-90 retention ≥60%；每季功能 update |

### 4.6 Timing Model（4 競品 timeline）

| 競品 | 創立 | 商業上市 | 退場 / 國際化 | 啟示 |
|---|---|---|---|---|
| PARO | 1993 R&D | 2004 商業化 | 仍運營（7K 台 30 國）| R&D → 商業化 11 年；學術路線代價（Wizard-of-Oz 跳過）|
| ElliQ | 2016 | 2022 商業上市 | 2026 進日本 | 成立 → 上市 6 年；$85M 仍需 6 年；90 天 MVP = 假設驗證 |
| Mabu | 2014 | 2019 Kaiser 合作 | 2024/11 退場 | Kaiser → 退場 5 年；B2B 醫療規模化 3-5 年；資金不夠撐這段 = 退場 |
| Zenbo | 2016 Computex | 2017 上市 | 2019 後迭代停滯 | 3 年窗口：大公司副業若 3 年內無 traction → 內部優先級被擠掉 |

**我們的 timing 目標**：
- 90 天：Wizard-of-Oz + 10-20 pilot 家庭（假設驗證）
- 12 個月：B2C 正式硬體 + 100 家庭（initial traction）
- 18 個月：第一批機構 pilot（Hyp B 驗證）
- 36 個月：保險 PMPM 談判（Hyp C 開始）
- **活存標準**：18 個月內 1,000 付費 + 2 家機構簽約（對標 ElliQ 6 年 + Mabu 5 年退場）

### 4.7 Build vs Buy Implications（給 Phase 3 T24 輸入）

**硬體**：
- ❌ 全自製（PARO 10 年代價，90 天不可行）
- ✅ **Wizard-of-Oz 平板（90 天 MVP 唯一選擇）**
- ✅ **ODM 台灣廠（H2 主路線，鴻海 / 廣達 / 仁寶生態）**
- 🟡 **ASUS Zenbo OEM / licensing（Phase 3 評估，AI Brain SaaS + ASUS 硬體 + 醫院通路 分工合作）**
- ❌ 中國 OEM（PDPA 跨境 + 資安政府禁用）

**AI Brain**：
- ✅ **OpenAI GPT-4o + Anthropic Claude API**（90 天 MVP；台灣 GCP / Azure 部署資料在台）
- ✅ **開源 Llama / Qwen fine-tune**（12 個月後主幹；台語 fine-tune + 本地推理 PDPA 0 風險）
- ✅ **混合架構 ROE**（Phase 5 主線；劇本緊急 / 用藥 + LLM 開放對話）
- ❌ 全自研 LLM（10-100M 訓練成本不可行）

**通路**：
- ✅ B2C DTC 即時開（W5）
- ✅ B2B 機構 Phase 1 BD 開始（W3+）；Phase 5 Sprint 4 機構閉迴路
- ✅ B2G 政府 Phase 6 後（W10+）；對標 ElliQ NY OFA
- 📋 保險 PMPM Phase 4 Business Model 提出，Year 3+ 執行
- 📋 電信捆綁 Year 2

**認證**：
- 90 天 MVP：無認證（平板 App = 無 BSMI 需求）
- 正式硬體 M9-12：BSMI（NT$30-100 萬）
- M12-18：ISO 13482（NT$50-150 萬）
- Year 2-3：TFDA II 類（NT$300-500 萬+ 臨床）

### 4.8 主動補充（北極星）

1. **Mabu 退場戰略含義**：Kaiser 系統內「AI 慢病管理」用戶空缺。台灣健保署「居家醫療」+ 各保險公司慢病管理目前空白 = Hyp C 直接機會 + 比 Mabu 啟動時技術更成熟（LLM 已可用）
2. **ASUS 合作可能性應入 Phase 3 T24**：Zenbo Junior II 已有台灣醫院通路但 AI 弱；我們有 AI Brain 但無通路。「ASUS 硬體 + 我們 AI Brain SaaS」OEM/white-label 比競爭更快。Jonney Shih AI Brain 演講顯示 ASUS 在積極找 AI Brain 合作夥伴
3. **ElliQ Kanematsu 日本合作 2025/10**：2026 才進日本，**台灣優先級極低 → 台灣本土玩家先佔位窗口 3-5 年完全開放**

### 4.9 Coverage Matrix

| 維度 | 4 競品 × 8 維度 |
|---|---|
| 公司背景 | ✅ 全 4，≥5 source/競品 |
| 產品深度 | ✅ 全 4，含 Zenbo Jr II Gen AI 2024 |
| 商業模式 | ✅ 全 4，含 ElliQ 2024 定價 + Mabu 退場 |
| 市場 Traction | ✅ 全 4（Mabu / Zenbo 部分 🟡）|
| 用戶評價 | ✅ 全 4，每競品 ≥3 source |
| 戰略 Partnerships | ✅ 全 4，含 2025 Kanematsu / Healthcare+ |
| 失敗教訓 | ✅ 全 4 + Jibo/Moxie/Aldebaran 補充 |
| 對我們啟示 | ✅ 全 4，8 維度全覆蓋 |
| **Mabu 2024-2025 商業狀態** | ✅ 確認退場（SVD 拍賣 2024/11 + Latka USD 1.7M 5 人）|
| **Build vs Buy 給 Phase 3** | ✅ 硬體 / AI / 通路 / 認證 4 層決策含明確 input |
| 4-grid Matrix | ✅ 我們定位已標示 |

---

## §5. 整合 Coverage Matrix + Phase 2 銜接

### 5.1 Phase 1 Gate 條件檢核

依 PM Flow v0.1 SOP「Phase 1 Gate：TAM/SAM 量化有 3 source / Stakeholder 5 角色明確、Ethical 紅線 ≥5 條、競品 ≥4 個含定價」：

| Gate 條件 | 達標狀態 | 證據 |
|---|---|---|
| TAM/SAM 量化有 ≥3 source | ✅ | §1.1 5 source 交叉確認；§1.2 4 來源；§1.3 三向交叉驗證 |
| Stakeholder 5 角色明確 | ✅ | §2.2 五大類 × 19 子分類 × 7 維度；Power × Interest 2×2 + Influence Map 15 條 + Engagement Timeline W0-W12 |
| Ethical 紅線 ≥5 條 | ✅ | §3.2 共 **10 條紅線**（超出要求 2×）+ §3.1 LLM 絕對紅線 7 條 |
| 競品 ≥4 個含定價 | ✅ | §4.1-4.4 四競品（PARO USD 6,100 / ElliQ $249+$59/月 / Mabu B2B / Zenbo Jr NT$24,900）+ §4.5 失敗教訓 8 點 |

### 5.2 對 Phase 2 Customer Discovery 的輸入

| Phase 2 Task | Phase 1 對應輸入 |
|---|---|
| T19 3 persona 假設草稿 | §2.2 19 個子分類（User 3 / Buyer 3 / Influencer+Detractor 5 / Gatekeeper+Payer 5 / Implementer 3）；建議 persona A = 北漂 IT 35-45（Primary ICP）、B = 在地中產 45-55、C = 退休前夫妻 50-55 |
| T20 設計 Mom Test ≤8 題訪談大綱 | §3 倫理紅線 → 訪談題不引導性（Mom Test 3 規則）；§2.4 W2-3 Engagement Timeline 已給訪談大綱方向 |
| T21 訪談招募計畫 | §2 Cultural Considerations 6 面向 → 招募需含台語母語 ≥40% + 客語/外省 ≥20% + 三縣市分布（嘉義/屏東/南投） |
| T22 JTBD + Day-in-the-Life | §2.2 每子分類「Need / JTBD」欄位已給雛形 |
| T23 WTP 範圍假設 + 付款人辨識 | §1.3.3 三向交叉 + Oxford Caregiver WTP USD 50-70/月（PPP 台灣 NT$1,200-1,500）|

### 5.3 對 Phase 3 Product + Tech 的輸入

- **T24 Build vs Buy** → §4.7 已完整輸入（硬體 / AI Brain / 通路 / 認證 4 層）
- **T25 MVP 類型** → §4 Wizard-of-Oz 平板（90 天唯一可行）+ 正式硬體 H2
- **T26 技術架構 + 隱私邊界** → §3.2.2 PDPA 跨境 + 端側處理優先 + GCP asia-east1 + 開源 LLM 備案
- **T27 Feature Triage Kano** → §3.6 caveats「監控型功能 Pricing 限制」+「LLM 絕對紅線不入 Must-have」
- **T28 Safety 紅線清單** → §3.1 + §3.2 直接套用

### 5.4 Phase 2 必補 / 待驗證項

| # | 主題 | 驗證方法 | 對應假設 |
|---|---|---|---|
| 1 | 子女 WTP NT$1,000-1,500/月（台灣本土無調查）| Mom Test ≤8 題 × 6-8 人深訪 | §5.4 假設 1 |
| 2 | 70-82 父母 4 週主動互動 + 不放棄 | 6-8 長者本人訪 + Phase 5 Wizard-of-Oz pilot | §5.4 假設 2 |
| 3 | 非影像式緊急偵測 ≥80% 召回率 | 工研院 / 智齡科技 技術 partner + Phase 5 pilot 假事件演習 | §5.4 假設 3 |
| 4 | 長照機構採購意願 | 3-5 家機構深訪 + ≥1 LOI | §5.4 假設 4 |
| 5 | PDPA + TFDA + 長照認證 12-18 月可達 | 律師 / 顧問 1-2 次訪談 | §5.4 假設 5 |
| 6 | 80+ 細分人口（85+ / 90+ 精確值）| ris.gov.tw 互動式 DB | desk 補強 |
| 7 | 北漂子女精確比例 | 國發會 / 主計總處 + Phase 2 訪談 | desk 補強 |
| 8 | 台灣 AI 陪伴市場 NT$ 數字 | 資策會 MIC 報告（付費取得）| desk 補強 |
| 9 | 長照機構採購週期 + 預算路徑 | 機構主管深訪 | §5.4 假設 4 |

### 5.5 整合輸入清單

| Sub-agent | 工作目錄 / 檔案（內部）| 大小 | 範圍 |
|---|---|---|---|
| market-researcher | /tmp/phase-1-section1.md | 13 KB / 206 行 | §1 TAM/SAM/SOM 深化 + Why Now ≥5 |
| business-analyst | /tmp/phase-1-section2.md | 29 KB / 358 行 | §2 Stakeholder 5 大類 × 19 子分類 + Power × Interest + Influence Map + Engagement Timeline + Cultural |
| elderly-risk-mapper | /tmp/phase-1-section3.md | 16 KB / 168 行 | §3 倫理框架 + 7 LLM 紅線 + 10 條紅線 × 8 維度 + 倫理 timeline + 危機 SOP |
| competitive-analyst | /tmp/phase-1-section4.md | 16 KB / 193 行 | §4 4 競品 × 8 維度 + 4-grid matrix + 失敗教訓 8 點 + Build vs Buy 4 層 |

### 5.6 下一步

T18 Phase 1 review gate → 推 Discord 給懷特 review → approve 後進 Phase 2 Customer Discovery（T19-T23，Plan-Only Mode 校準：訪談計畫設計 + persona 假設 + Mom Test 大綱，非實際訪談）。

---

> 本檔由 Phase 1 4 個 sub-agent 整合而成，commit 後 push https://github.com/DennisPai/Asus_elder-companion-ai
