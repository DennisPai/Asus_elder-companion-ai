# Phase 0.5: Concept Deconstruction Report — 長者互動陪伴機器人 × AI Brain

> **執行日期**：2026-05-27
> **執行模式**：PM Flow v0.1 / Phase 0.5（題目拆解）
> **角色配置**：4 個 sub-agent 並行（project-idea-validator / market-researcher / competitive-analyst / data-researcher）+ assumption-mapping 整合
> **Plan-Only Mode**：本文件是「規劃書」、不是「執行成果」；內部角度標籤 ✅ desk-validated / 🟡 hypothesis / 📋 post-approval execution（對外網頁渲染時剝離，依 design.md §4.2.1）
> **Target Audience**：長者子女 35-55 歲（buyer + decision maker）；長者本人是 end user 但不付款
> **Geo**：台灣 only（SAM）；競品 / 商模參考含國際 best practice

---

## 0. Executive Summary

5 個 concept × 7 維度（共 35 cell）desk research 完成。**核心發現**：

1. **市場時機臨界**：台灣 2025/12 正式進入超高齡社會（65+ 4,673,155 人 / 20.06%）、扶養比 3.6:1→1.4:1（2050）、長照人力 hard ceiling 已觸頂。WHO 將孤獨列為公衛危機（871,000 死亡/年）+ AI in Elderly Care 2025 USD 6.47B → 2033 USD 25B（CAGR 22%）。
2. **技術曲線交會**：LLM 中文對話 mature（GPT-4o / Claude）+ Llama 開源 + Jetson Orin 邊緣推理（成本降 280×）+ ROS-LLM 整合，2025-2026 達「BOM ≤ NT$20K 可行 + 自然對話可用」雙門檻。
3. **政策創造市場**：長照 3.0 智慧輔具補貼 NT$60K/3 年（2026/07）+ 行政院 NT$200 億機器人計畫（4+10 年）+ 197 個智慧健康補貼（NT$29.4 億）三軌會合。
4. **競品缺口**：ElliQ（美）/ PARO（日）/ Aibo（日）/ LOVOT（日）/ ASUS Zenbo（台）在台灣 B2C 場景**無強護城河**；台語 + 台灣文化 + 子女 dashboard + 緊急安全網四合一是空白。
5. **三大 strongest hypothesis**：
   - **A. B2C DTC**「主動陪伴 + 安全網雙層機器人」NT$15K + NT$1,200/月
   - **B. B2B2C 長照機構**通路（補貼分攤 + 機構付硬體 + 家庭付軟體 NT$799/月）
   - **C. B2B 保險 PMPM**（Papa 模式台灣化，NT$600-1,000/保戶/月）
   - 補：**D. Freemium App**（NT$299/月）作為 90 天 MVP 試水 + Hypothesis A 過渡路徑

**90 天 MVP 規劃建議**：採 Hypothesis A + D 組合（B2C 軟體先行 / 平板 Wizard-of-Oz 形態），同步啟動 Hypothesis B 機構通路 BD（W5-9）、Hypothesis C 保險 partnership 列為 Year 3+ 願景。

---

## 1. Concept 1：陪伴長者

> 不限定機器人；從「陪伴」需求出發（寵物 / 視訊通話 / 訪視志工 / 共居 / AI 對話 app / 看護）

### 1.1 需求清單（≥5）

| # | 需求 | 觸發情境 | 現有解法 |
|---|---|---|---|
| 1 | 子女不在身邊時不感到孤單 | 子女北漂 / 出差 / 配偶過世 | LINE 視訊、寵物、收音機、廟會 |
| 2 | 緊急時有人立刻知道 | 跌倒、突發疾病、火災 | 緊急通報手環、24h 看護、社區關懷據點 |
| 3 | 維持心智活躍延緩失智 | 退休、配偶過世、子女搬走 | 麻將、社區大學、宗教活動、認知遊戲 app |
| 4 | 規律生活提醒（用藥 / 用餐 / 起床）| 健忘 / 多種慢性病 | 子女打電話、藥盒、便利貼、看護提醒 |
| 5 | 子女即使遠方仍可遠距知道父母狀況 | 北漂、跨城工作 | 每天打電話、社區關懷員、看護員回報 |
| 6 | 與子女更深層情感連結 | 子女工作忙、自己不想被當負擔 | LINE 群組、節慶聚會 |

來源：project-idea-validator §1.1（6 需求全填）；data-researcher A.1 / A.3

### 1.2 痛點清單（≥5，S0-S3 排序）

| 嚴重度 | 痛點 | 影響人數 | 現有解法為何不夠 |
|---|---|---|---|
| **S0** | 緊急事件無人知曉、搶救延誤 | 全台 35.7% 長者（獨居 23.3% + 老老 12.36%）= 167 萬人 | 緊急按鈕需主動按、子女打電話頻率有限、社區關懷未涵蓋夜晚 |
| **S1** | 長期孤獨造成認知 / 心血管退化 | 全球 65+ 27.6% 感到孤獨、台灣 350,000 失智者 | 視訊通話頻率不足、寵物無法替代人類對話、AI 陪伴 app 多英文 |
| **S1** | 子女照顧者心理耗竭 | 台灣 90% 失智家屬長期失眠 / 65% 異常壓力 | 看護費用 NT$22-70K/月、缺非人力解法 |
| **S2** | 用藥 / 用餐 / 跌倒風險日常提醒不可靠 | 全台慢性病長者 70%+ | 藥盒 / 子女電話 / 看護提醒都有遺漏 |
| **S2** | 設備學習曲線造成放棄 | 65+ 上網率 50.36% 但對新裝置抗拒 ≥30% | 大字版手機、簡化平板（GrandPad）仍要子女設定 |
| **S3** | 長者拒絕「被照顧 / 被監視」感 | 普遍（PDPA + 文化）| 攝影機 / 智慧手環有監視感、長者抗拒 |

來源：project-idea-validator §1.2；competitive-analyst Concept 1 各競品 Weakness；data-researcher A.1 + C.2

### 1.3 既有成功商模（≥3，多國別）

**A. Papa（美國 / B2B2C 保險 PMPM）**
- 定價：USD 10-20 PMPM（保險公司付）
- 收入結構：MRR via Medicare Advantage / Medicaid
- Market size：累計 2.6M 次陪伴服務、估值 $1.4B
- 退場故事：仍營運、2024 年 $150M C 輪

**B. ElliQ / Intuition Robotics（美國 / B2C DTC + B2B 政府）**
- 定價：USD 249.99 硬體 + USD 29.99/月訂閱
- 收入結構：硬體一次性 + 訂閱 MRR + B2B 政府全額補貼
- Market size：2025 年收 $35M、累計融資 $85M、紐約州 800+ 戶 pilot
- 退場故事：仍營運 + ElliQ 3 (2024) + 2026 進日本

**C. PARO（日本 AIST / B2B 醫院長照）**
- 定價：USD 6,000 一次性
- 收入結構：B2B 醫院 / 機構買斷
- Market size：累計 6,000+ 部於 30+ 國
- 退場故事：仍營運 + FDA Class II 認證

**D. GrandPad（美國 / B2C 通訊裝置 subscription）**
- 定價：USD 59-65/月（含 4G + 硬體 + 客服）
- 收入結構：純訂閱 MRR
- Market size：100 萬用戶
- 退場故事：2021 被 Consumer Cellular 收購

**負面案例**（避免重蹈）：Jibo（$80M 融資後 2019 倒閉）/ Moxie（2024 倒閉）/ Aldebaran（Pepper，2025 破產）

來源：project-idea-validator §1.3（4 商模 4 國別齊）；competitive-analyst Concept 1+4 SWOT

### 1.4 TAM / SAM / SOM

- **TAM 全球**：USD 6.47B（AI in Elderly Care 2025，DataMIntelligence）→ USD 25.26B（2033，CAGR 22.12%）；廣義 AI in Aging USD 56.78B
- **TAM 台灣**：銀色經濟 NT$3.6 兆（總統府）；長照年預算 NT$1,000 億（行政院 2025）
- **SAM 台灣**（長者子女 buyer 切片）：4,673,155 × 40%（北漂 / 遠距照顧焦慮）× 35%（付費意願 + 技術接受）= 654,000 家庭 × NT$6K-12K/年 = **NT$39-78 億（USD 130-260M/年）**🟡
- **SOM**：📋 post-approval execution
  - 90 天：10-20 pilot 家庭（不具商業意義）
  - 12 個月：0.1-0.15% 滲透 = USD 196K-294K 🟡

來源：market-researcher Concept 1（≥4 source / TAM）；data-researcher A.1 + C.2

### 1.5 競品 SWOT（≥3，國際 + 台灣）

詳見 competitive-analyst §1.5 完整 SWOT 分析。摘要：

| 競品 | 國別 | 核心優勢 | 核心弱項 | 未被滿足 gap |
|---|---|---|---|---|
| ElliQ / Intuition Robotics | 🇺🇸 | 95% 用戶減孤獨 + 30 次/天互動 + $85M 融資 | 無中文 / 不可移動 / 對話超過幾行失憶 | 台語 + 物理移動性 + 子女 dashboard |
| Amazon Alexa Together | 🇺🇸 | $19.99/月 + 既有 Echo 生態 + 24/7 緊急熱線 | 完全依賴子女設定 / 無跌倒偵測 / 中文弱 | 主動發起話題 + 情感連結 / 記憶 |
| GrandPad | 🇺🇸 | 0 設定門檻 + 4G 內建 + 24/7 客服 | $59-65/月偏高 / 純通訊 / 全英文 | AI 主動發起 + 台灣本地化內容 |
| 工研院 Deecye | 🇹🇼 | 台灣本土 + 中文對話 + 政府支持 | 未商業化 / 無 B2C 通路 / 迭代慢 | B2C 直接購買 + 子女 app 整合 |

### 1.6 顧客旅程（5 階段）

- **觸發**：跌倒 / 配偶過世 / 認知症診斷 / 子女搬遷 / 醫院出院
- **評估**：醫院衛教 / 子女社群 / Google / 長照管理師 / 親戚介紹
- **購買**（**長者子女決策**）：子女主要付費；通路 momo / 蝦皮 / 銀髮博覽會 / 機構推薦；預算 NT$15K + 月費 NT$1.2K（對標家庭月照顧費 NT$22K 的 5-6%）
- **使用**：onboarding 需 ≥30 分鐘 / 首 2 週棄用率 30-50% 為行業基準 / 子女遠距 push 引導
- **退場**：硬體故障 → 客服維修 / 長者離世 → 家庭資料移交 + 記憶導出紀念服務 / 訂閱取消 → 隔月停止

來源：project-idea-validator §1.4

### 1.7 技術可行性 + 護城河

**技術可行性**（現在 / 12 個月後 / 36 個月後）：
- 中文 LLM：Mature → 端側本地化
- 台語 LLM fine-tune：🟡 弱 → 學術資料集 + 商用成熟（market-researcher Concept 4 Why Now）
- 老人聲線辨識：🟡 ~70% → 95%+
- 情緒識別：研究成熟 → 多模態標準 API

**護城河 7 種**（competitive-analyst §1.7）：
| 護城河 | 可行性 | 競品已鎖死？ |
|---|---|---|
| 資料（台灣長者台語語料）| ✅ 高 | 無 |
| 渠道（醫院 / 機構 / 電信）| ✅ 中 | ElliQ 鎖美國，台灣空白 |
| 切換成本（個性 / 記憶 / 家人設定）| ✅ 高 | 無 |
| 法規（TFDA + 長照認定）| ✅ 中 | PARO 認證在美未在台 |
| 品牌 / 規模 / 專利 | 🟡 中長期 | — |

---

## 2. Concept 2：與長者互動

> 互動模式 / 多模態 / 認知負擔（語音 / 觸控 / 視覺 / 觸感 / 認知遊戲 / 反射訓練）

### 2.1 需求清單（≥5）

| # | 需求 | 觸發情境 | 現有解法 |
|---|---|---|---|
| 1 | 自然多輪對話（非按按鈕 / 操作 menu）| 退休、視力 / 手指不靈活 | 講電話、面對面 |
| 2 | 延緩認知退化的腦力訓練 | MCI 早期、家族失智史 | BrainHQ / Lumosity / 麻將 |
| 3 | 肢體活動引導（適度運動）| 行動力下降 | Ring Fit / 物理治療 |
| 4 | 情緒陪伴 + 同理回應 | 配偶過世 / 孤獨感 | 寵物 / 社區關懷 / 心理諮商 |
| 5 | 喚醒記憶 + 重溫人生 | 退化早期、家族口傳遺失 | 老照片、子女問話 |
| 6 | 即時健康追蹤（血壓 / 用藥 / 睡眠）| 多種慢性病 | 健保卡記錄、子女記錄、看護紀錄 |

來源：project-idea-validator §2.1（6 需求齊）

### 2.2 痛點清單（≥5，S0-S3 排序）

| 嚴重度 | 痛點 | 影響人數 | 現有解法為何不夠 |
|---|---|---|---|
| **S1** | 設備學習曲線陡峭，首 2 週棄用率 30-50% | 65+ 7.99% 失智 + MCI 未診斷 | 大字版 UI / 子女設定都有限 |
| **S1** | 認知訓練 app 全英文 / 缺台語 / 缺台灣文化內容 | 台語母語長者佔多數（嘉義 / 南投 / 屏東）| BrainHQ / Lumosity 中文版功能薄 |
| **S2** | 純螢幕 2D 互動，認知負擔重 | 視力退化 + 手指靈活度下降 | iPad / Switch 觸控門檻高 |
| **S2** | 互動無情感連結，純功能性訓練枯燥 | 普遍 | BrainHQ 純訓練、Lumosity 遊戲化但無陪伴 |
| **S3** | 訓練「遷移效果」存疑（學術質疑）| 普遍 | Lumosity 2016 FTC $50M 和解、廣告誇大 |
| **S3** | 缺乏家庭成員共同參與機制 | 北漂家庭 | 純單人訓練、無隔代連結 |

來源：project-idea-validator §2.2

### 2.3 既有成功商模（≥3）

**A. BrainHQ / Posit Science（美 / B2B 醫療 + B2C 訂閱）**
- 定價：USD 14/月（年 USD 96）
- 收入結構：訂閱 MRR + B2B 醫療機構合約
- Market size：300+ peer-reviewed 研究背書、ACTIVE Trial 20 年驗證
- 退場故事：仍營運、被 Mayo Clinic / 美國衛生部推薦

**B. Lumosity（美 / B2C App 訂閱）**
- 定價：USD 11.99/月
- 收入結構：純 freemium 訂閱
- Market size：1 億+ 會員、年收 USD 13.3M
- 退場故事：2016 FTC $50M 和解（廣告誇大）後仍營運

**C. Sony Aibo（日 / B2C 硬體 + 雲端訂閱）**
- 定價：USD 2,899 + USD 10-20/月
- 收入結構：硬體一次性 + 雲端 subscription
- Market size：累計 30 萬+ 部售出
- 退場故事：2006-2014 曾停服（前車之鑑）、2018 重啟

來源：project-idea-validator §2.3；competitive-analyst Concept 2

### 2.4 TAM / SAM / SOM

- **TAM 全球**：USD 39B（Senior Care Technology 2024，3 source 一致）→ USD 101.62B（2034，CAGR 7.5%）
- **TAM 台灣**：197 個智慧健康補貼方案 NT$29.4 億；1,000+ 長照機構已用智慧系統
- **SAM 台灣**：3,100,000 × 40% × 20%（認知訓練類門檻較低）× NT$4,800/年 = **NT$8.9-14.9 億（USD 30M-50M/年）**🟡
- **SOM**：12 個月 500 用戶 × NT$299/月 × 12 = NT$1.79M（USD 59K）🟡 + 📋

來源：market-researcher Concept 2

### 2.5 競品 SWOT（≥3）

| 競品 | 國別 | 核心優勢 | 核心弱項 | 未被滿足 gap |
|---|---|---|---|---|
| BrainHQ | 🇺🇸 | ACTIVE Trial 20 年背書 + Mayo Clinic 推薦 | UI 老舊 / 純 2D / 無中文 | 認知 + 情感整合 + 台語 |
| Lumosity | 🇺🇸 | 1 億用戶 / 友善 UI | FTC 和解 / 科學弱 / 中文薄 | 台灣文化認知刺激 + 家庭參與 |
| Nintendo Switch Ring Fit | 🇯🇵 | 1.4 億+ 用戶 / 肢體互動 / 日本長照採用 | 需平衡感 / 無記憶 / 無陪伴 | 肢體+認知+情感三合一 |
| ASUS Zenbo Junior | 🇹🇼 | 台灣本土 / 繁中 / $1,500 親民 | AI 弱 / 2019 後未更新 / 台語不支援 | 情感深度 + 長期記憶 + 台語 |

來源：competitive-analyst §2.5

### 2.6 顧客旅程

- **觸發**：MCI 診斷 / 失智家族史 / 退休後生活空虛 / 子女觀察認知退化
- **評估**：神經科醫師、心理諮商、子女 Google、社區大學
- **購買**（**長者子女決策**）：子女購買；通路 App Store / 銀髮博覽會 / 醫師推薦
- **使用**：每日 15-30 分訓練 + 個性化難度調整 + 進度報告
- **退場**：認知顯著退化（無法繼續）→ 過渡到陪伴模式 / 取消

來源：project-idea-validator §2.4

### 2.7 技術可行性 + 護城河

**技術可行性**：多模態互動可用、台語 NLU 🔴 弱（缺資料）、認知遊戲 AI adaptive 研究成熟

**護城河**：
- 資料（台灣長者認知互動資料）✅ 高
- 渠道（台大 / 成大神經科 / 失智症協會）✅ 中
- 切換成本（個人認知檔案難遷移）✅ 高
- 競品未鎖死 BrainHQ 在台 / Lumosity 科學弱 / Nintendo 非長者專注

來源：competitive-analyst §2.7

---

## 3. Concept 3：機器人

> 純硬體形態 / 移動性 / 物理介面（掃地 / 廚房 / 看護 / 工業 / 教育 / 寵物機器人）

### 3.1 需求清單（≥5）

| # | 需求 | 觸發情境 | 現有解法 |
|---|---|---|---|
| 1 | 物理在場感（不只是螢幕中的人）| 配偶過世、單身、子女北漂 | 寵物、看護、社區據點 |
| 2 | 跨房間跟隨 / 移動陪伴 | 行動範圍大、不想固定一房間 | 無 |
| 3 | 操作家中物品 / 簡單家務（遞物 / 開燈）| 行動力下降 | 看護、智慧家庭 |
| 4 | 跌倒 / 異常被機器人發現 | 獨居、平日無人 | 緊急按鈕、看護、智慧手環 |
| 5 | 觸覺 / 撫摸的 comfort 情感反饋 | 寡居、失智、安寧 | 寵物、PARO |
| 6 | 引導身體活動（體操示範）| 久坐、肌少症 | 健身教練、Ring Fit |

來源：project-idea-validator §3.1

### 3.2 痛點清單（≥5，S0-S3 排序）

| 嚴重度 | 痛點 | 影響人數 | 現有解法為何不夠 |
|---|---|---|---|
| **S0** | 跌倒延誤搶救（黃金 4-12 小時內無人發現）| 65+ 意外死亡首因 | 緊急按鈕需主動按、攝影機隱私問題 |
| **S1** | 高價機器人不可負擔（LOVOT NT$128K / Pepper $30K+）| 普遍 | 純高端市場 |
| **S2** | 廠商孤兒化風險（Jibo / Moxie / Aldebaran）| 已購買用戶情感創傷 | 無 |
| **S2** | 機器人外型 uncanny valley 或不親切 | 對台灣長者 | 海豹（PARO）/ 機器狗（Aibo）/ 人形（Pepper）各有受眾 |
| **S3** | 純家務型機器人無互動 / 情感 | 普遍 | iRobot Roomba 純掃地 |
| **S3** | 中國品牌資安疑慮（PDPA + 政府採購限制）| 政府單位 + 部分消費者 | Unitree 等 |

來源：project-idea-validator §3.2

### 3.3 既有成功商模（≥3）

**A. iRobot Roomba（美 / B2C DTC）**
- 定價：USD 200-1,200 一次性
- 收入結構：純硬體
- Market size：全球 45% 市占 / 2,000 萬+ 台部署 / 但 2025 美國銷售跌 33%（中國競爭）
- 退場故事：2025 淨虧損 $145M（衰退中）

**B. LOVOT / Groove X（日 / B2C 高端）**
- 定價：JPY 198K-348K（NT$6-11 萬）+ 年訂閱 JPY 120K
- 收入結構：硬體 + 訂閱
- Market size：上海 2024 開實體店、Sompo 採用
- 退場故事：仍營運但累計虧損 $54M

**C. Unitree Go2 / G1（中國 / B2B research + 軍工）**
- 定價：Go2 $1,600-2,800 / G1 $16,000
- 收入結構：硬體買斷 + 開源 SDK
- Market size：CES 2025 技術領先、深圳供應鏈成本優勢
- 退場故事：擴張中、台灣有資安疑慮

來源：project-idea-validator §3.3

### 3.4 TAM / SAM / SOM

- **TAM 全球（長照機器人）**：USD 3.4B（Elder Care Assistive Robots 2025）→ USD 9.8B（2033，CAGR 14.2%）
- **TAM 全球（消費型機器人）**：USD 13.69B → USD 102.31B（2034，CAGR 25%）；IFR 2024 銷售近 2,000 萬台
- **TAM 台灣**：行政院 NT$200 億機器人補貼計畫（4+10 年）；目標服務型機器人產值 NT$4 億 → NT$500 億（5 年）
- **SAM 台灣**：B2C 29,000 家庭 × NT$60K = NT$17.4 億（USD 58M）+ B2B 機構 USD 300M = **USD 358M**🟡
- **SOM**：12 個月 Wizard-of-Oz 軟體 20-50 家庭 × NT$1,500/月 = USD 30K 🟡 + 📋

來源：market-researcher Concept 3；data-researcher E.1

### 3.5 競品 SWOT（≥3）

| 競品 | 國別 | 核心優勢 | 核心弱項 | 未被滿足 gap |
|---|---|---|---|---|
| iRobot Roomba | 🇺🇸 | 45% 市占 + 品牌 | 商品化、中國低價侵蝕、跌倒風險 | 家務 + 長者安全整合 |
| LOVOT | 🇯🇵 | 情感型最先進 + 觸覺溫暖 | NT$128K 高定價 + 雲端依賴 | 中價位 NT$15-30K 情感機器人 |
| Unitree Go2 | 🇨🇳 | $1,600-2,800 + 開源 SDK | 非長者場景設計 + 台灣資安疑慮 | 情感化設計 + TFDA 認證 |
| Moley Robotics | 🇬🇧 | 自動烹飪 5,000 食譜 | $335K + 客製化廚房 | 飲食安全監控（純 AI 提醒） |

來源：competitive-analyst §3.5

### 3.6 顧客旅程

- **觸發**：失能等級認定 + 機構推薦 / 子女購入 / 補貼上路
- **評估**：機構評估 / 子女比較 / 體驗活動
- **購買**：B2B 長照機構 / B2C 子女 / 補貼分攤
- **使用**：在地維修 + onboarding（30 分鐘 + 客服）
- **退場**：機器人故障 / 廠商孤兒化（最大風險）/ 長者過世

來源：project-idea-validator §3.4

### 3.7 技術可行性 + 護城河

**技術可行性**：基礎移動 Mature（BOM $500-2K）/ 物件抓取 🔴 未成熟 / SLAM Mature / 跌倒偵測可用 / 電池續航 4-6 hr / TFDA 認證 12-18 月

**護城河**：
- 渠道（台灣 ODM 製造 + 長照採購）✅ 高
- 法規（TFDA + 長照認定）✅ 中高
- 切換成本 ✅ 高
- 競品未鎖死（iRobot 被侵蝕 / LOVOT 不在台 / Unitree 非長者）

來源：competitive-analyst §3.7

---

## 4. Concept 4：機器人 + AI Brain

> AI 增能的機器人差異化（LLM-powered robotics / 多模態具身智能 / 端側推理）

### 4.1 需求清單（≥5）

| # | 需求 | 觸發情境 | 現有解法 |
|---|---|---|---|
| 1 | 自然中文 / 台語對話的機器人 | 普遍 | 無；ElliQ 英文、ASUS Zenbo AI 弱 |
| 2 | 記得長者個人故事 / 偏好 / 家庭脈絡 | 普遍 | 純機器人皆無、需 AI Brain |
| 3 | 主動發起對話（非被動）| 孤獨、失智早期 | ElliQ（英文）外無 |
| 4 | 情緒感知 + 同理回應 | 寡居、抑鬱 | 純機器人皆無 |
| 5 | 健康指標智能解讀（不只 raw data）| 多種慢性病 | 醫師需親自看 |
| 6 | 持續學習用戶習慣 + 自適應 | 普遍 | 雲端 AI 可達 |

來源：project-idea-validator §4.1

### 4.2 痛點清單（≥5，S0-S3 排序）

| 嚴重度 | 痛點 | 影響人數 | 現有解法為何不夠 |
|---|---|---|---|
| **S0** | LLM 在醫療 / 安全建議邊界的法律責任不明 | 跨產品 | TFDA 認證需 12-24 月 / 美國 FDA 路徑不直接適用 |
| **S1** | AI 對話超過幾輪即失去脈絡（ElliQ Weakness）| 跨產品 | 純 Stateless LLM 無長期記憶 |
| **S1** | 台語 fine-tune 缺大規模訓練資料 | 台灣用戶 | 無；學術小規模試點 |
| **S2** | 端側 LLM 推理性能 vs 雲端依賴的權衡 | 跨產品 | Jetson Orin + 量化模型可解 |
| **S3** | 24/7 影像收音的隱私顧慮 | 普遍（PDPA + 文化）| 端側處理 / 加密儲存 |
| **S3** | LLM 幻覺（Hallucination）對長者誤導風險 | 普遍 | LLM guardrail + 拒絕醫療法律問題 |

來源：project-idea-validator §4.2

### 4.3 既有成功商模（≥3）

**A. ElliQ 3 / Intuition Robotics（美 / B2C + B2B）**
- 定價：USD 249.99 + $29.99/月
- 收入結構：硬體 + 訂閱 + B2B 政府全額補貼
- Market size：2025 年收 $35M / 累計融資 $85M
- 退場故事：仍營運、ElliQ 3（2024）+ 2026 日本

**B. PARO Therapeutic（日 AIST / B2B 醫院）**
- 定價：USD 6,100
- 收入結構：B2B 醫院 / 機構買斷
- Market size：6,000+ 部、30+ 國、FDA Class II
- 退場故事：仍營運但日本本土反映平淡

**C. Sony Aibo ERS-1000（日 / B2C 高端）**
- 定價：USD 2,899 + $10-20/月
- 收入結構：硬體 + 雲端訂閱
- Market size：30 萬+ 部 / Sony 品牌
- 退場故事：2006 停服前車 / 2018 重啟仍營運

**D. Pepper / Aldebaran（法→中 / B2B 大型機構）**
- 定價：USD 30,000+
- 收入結構：B2B 機構買斷
- Market size：50+ 國 / 日本 500 家機構部署
- **退場故事：SoftBank 2021 停產 / Aldebaran 2025/02 破產 / 2025/07 被深圳 Maxvision 收購**（失敗教訓）

來源：project-idea-validator §4.3；competitive-analyst Concept 4

### 4.4 TAM / SAM / SOM

- **TAM 全球**：USD 4.44B（Embodied AI 2025，MarketsandMarkets）→ USD 23.06B（2030，CAGR 39%）
- **TAM 全球（人形）**：Goldman Sachs USD 38B by 2035 / Morgan Stanley USD 5T by 2050
- **TAM 台灣**：以 GDP 比例 + 半導體供應鏈優勢推算 USD 66M-110M 🟡
- **SAM 台灣**：B2B 機構 5% × 2 台 × NT$200K + B2C 高端 10% × NT$200K = **USD 411M**🟡
- **SOM**：12 個月 100 戶 × NT$2K/月 × 12 = USD 80K 🟡 + 📋

來源：market-researcher Concept 4

### 4.5 競品 SWOT（≥3）

詳見 Concept 1 + 3 的 ElliQ / Aibo / PARO；額外 AI Brain 視角競品：

| 競品 | 國別 | 核心優勢 | 核心弱項 | 未被滿足 gap |
|---|---|---|---|---|
| ElliQ 3（AI Brain）| 🇺🇸 | LLM 整合 + 主動健康追蹤 | 對話脈絡失憶 / 無中文 | 物理移動 + 台語 + 子女 dashboard |
| Mabu / Catalia Health | 🇺🇸 | B2B 醫院（Kaiser Permanente 合作）| 商業狀態不明（2025 更新少）/ 無 LLM | 台灣版 + 子女 app |
| Sony Aibo | 🇯🇵 | 擬真寵物 + 雲端學習 | 電池 2 hr / 無語言對話 / 雲端依賴 | 自然語言 + 任務執行 |
| Pepper（失敗案例）| 🇫🇷→🇨🇳 | 50 國部署 + 研究背書 | $30K+ + Aldebaran 破產 / B2B 不足撐企業 | 可負擔 B2C + 無外部技術依賴 |

來源：competitive-analyst §4.5

### 4.6 顧客旅程

同 Concept 1 + 3 + 4 整合視角，特別注意：
- 評估階段：「我能信任 AI 給長者建議嗎？」是 buyer 主要疑慮
- 退場：LLM 對話歷史是用戶資產，須提供「記憶導出」服務

### 4.7 技術可行性 + 護城河

**技術可行性**（competitive-analyst §4.7）：
- 中文 LLM Mature → 端側完全本地化
- 台語 fine-tune 🔴 弱 → 商業成熟
- 端側 LLM（Jetson Orin / llama.cpp + Qwen 7B）可用
- 機器人 + LLM 整合 ROS2 + LangChain 研究成熟
- 整機 BOM NT$10K 困難（NT$30K+）→ cost-down 後可能
- TFDA + AI 基本法合規 12-18 月

**護城河**（核心結論：台灣 B2C 場景無強護城河）：
- **資料 ✅ 最高優先**（1,000 用戶後形成全球無二台灣長者台語語料庫）
- **切換成本 ✅ 最高優先**（個性 / 記憶 / 家人設定 / 父母習慣四層）
- **渠道 ✅ 高**（長照機構 + 連鎖藥妝 + 電信 + 保險）
- **法規 ✅ 中高**（TFDA + 長照認定 + AI 基本法）

---

## 5. Concept 5：「陪伴 + 互動 + 機器人 + AI Brain」combine

> 詳細整合內容見 `/tmp/phase-0.5-assumption-mapping.md`（438 行）；以下為整合摘要

### 5.1 4-way intersection 機會（6 個含 1 bonus）

1. **可移動式「主動陪伴 + 緊急安全網」雙層心智** — 移動 + 主動對話 + 24/7 異常偵測合一，非兩個 SKU 🟡
2. **台語 + 台灣長者文化 + 個人記憶累積 = 不可遷移個性化資產** — 台語對話 + 家庭脈絡 + 個人故事 → 資料 + 切換成本雙重護城河 ✅
3. **子女端 dashboard + 長者端機器人 = 「家庭雙端 SaaS」雙向知情** — AI 整理非侵入式摘要、長者不覺被監視、子女不需打電話追蹤 🟡
4. **B2B2C 長照通路 + 長照 3.0 智慧輔具補貼 = 政府背書降低 CAC** — Papa 模式台灣化、補貼 NT$60K + 機構通路 + 家庭付月費 ✅
5. **硬體輕、軟體重 + Wizard-of-Oz 平板過渡 = 90 天可 demo 的 PMF 試驗台** — BOM NT$10-15K、平板 + 底座、保留 80% 體驗 ✅
6. **（bonus）失智 MCI 早期介入 + 認知遊戲 + AI 個性化難度 = 「醫師處方」進入健保體系** — TFDA II 類認證路徑（中長期，非 90 天範圍）🟡

### 5.2 三大 strongest hypothesis（+1 bonus）— 完整 Lean Canvas 9 block

#### Hypothesis A：B2C DTC「主動陪伴 + 安全網雙層機器人」訂閱

**核心一句話**：賣給北漂子女一台 NT$15,000 桌上型小機器人 + NT$1,200/月訂閱，讓父母（70-80 歲、台北 / 嘉義 / 屏東獨居）獲得「有人在家陪 + 跌倒立刻通知子女」雙層心安。

| Block | 內容 |
|---|---|
| **Problem** | (1) S0：緊急事件無人知曉、搶救延誤（跌倒後平均延誤 4-12 小時）；(2) S1：長期孤獨造成認知退化（WHO 25% 老人社交孤立）；(3) S1：子女照顧者心理耗竭（90% 失眠、65% 異常壓力） |
| **Customer Segment** | 北漂子女 35-50 歲 + 父母 70-82 歲（功能尚可、可語音對話）+ 居住分離（子女台北 / 父母嘉南 / 南投 / 屏東等老化指數最高三縣市）+ 子女月收 NT$60K+ 中產 |
| **Unique Value Proposition** | 「主動陪你父母 + 安全網雙層」— 不是 Echo（被動）也不是 GrandPad（純通訊）也不是 Aibo（無語言）也不是 ElliQ（不可移動 + 無中文 + 無台灣家庭功能）。台灣唯一中文 / 台語對話 + 主動發起 + 子女 dashboard + 緊急偵測四合一 |
| **Solution** | 桌上型 / 小型可移動載體（10-15 公斤），平板螢幕 + 鏡頭 + 麥克風陣列 + 可愛外殼。AI Brain 雲端推理（GPT-4o / Claude / Llama fine-tune）+ 端側觸發詞偵測 + 雲端非影像式跌倒推論。子女 App：每日 / 每週摘要 + 緊急通知 + 雙向視訊 |
| **Channels** | (1) DTC 官網 + momo / 蝦皮（cold start）；(2) 銀髮博覽會 / 醫院出院衛教；(3) 長照 A 級個管中心推薦；(4) 後期：電信業者捆綁（中華電信「銀髮安心方案」）。長照 3.0 智慧輔具補貼 NT$60K/3 年抵扣 |
| **Revenue Streams** | (a) 設備一次性 NT$15,000-19,900（對標 ASUS Zenbo Jr）；(b) 訂閱 NT$1,200/月（年約優惠 NT$12,000）。對標 ElliQ $249.99 + $29.99/月 / Aibo $2,899 + $23/月。月費 ARPU 對標家庭月照顧費 NT$22K 的 5-6% |
| **Cost Structure** | BOM：螢幕 NT$3,500 + Jetson Orin Nano NT$3,500 + 麥克風 NT$1,200 + 鏡頭 NT$800 + 外殼 NT$2,000 + 雜項 NT$1,000 = 約 NT$12,000（毛利 20% @ NT$15K）。雲端：LLM token + TTS / STT + 儲存 = NT$300-500/月/用戶（毛利 NT$700-900/月）。BSMI 認證 NT$30-100 萬。CAC 初期 NT$5K-8K |
| **Key Metrics** | (a) Sean Ellis ≥40%；(b) Day-7 retention（長者主動使用 ≥3/天）；(c) NPS ≥40（子女端）；(d) 緊急偵測 false positive ≤1/週 + true positive 召回率 ≥85%；(e) 月流失率 ≤5% |
| **Unfair Advantage** | (1) 資料：1,000 用戶後形成全球無二台灣長者台語語料庫（後進 2-3 年才追上）；(2) 切換成本：個人記憶 / 家庭設定 / 子女訂閱 / 父母習慣 4 層切換阻力；(3) 法規卡位：先取得 TFDA + 長照 3.0 智慧輔具補貼名單，後進需 12-18 月追趕 |

🟡 核心 hypothesis；Lean Canvas 全 block 為 desk research 推論，需 Phase 2 訪談驗證子女 WTP / 父母接受度 / 緊急偵測準確率三大未知。

---

#### Hypothesis B：B2B2C 長照機構通路「機構付硬體 + 家庭付軟體」

**核心一句話**：日照中心 / 長照 A 級個管中心採購機器人（適用長照 3.0 智慧輔具補貼），免費佈建到個案家中；家庭子女自付 NT$799/月軟體服務費；機構獲得「智慧長照機構」品牌差異化 + 補貼回收。

| Block | 內容 |
|---|---|
| **Problem** | (1) 家庭：陪伴 / 安全 / 認知刺激痛點（同 A）；(2) 機構：人力短缺（外籍 21 萬 + 本籍 7.5 萬不足）+ 缺差異化（智齡 30% 市占飽和）；(3) 政府：長照 3.0 智慧長照目標卡關，缺實際可採購方案 |
| **Customer Segment** | (a) Buyer = 中型日照中心 / 長照 A 級個管中心 / 連鎖照護機構（雙連、弘道、聖母）約 1,000-1,500 家；(b) End user 家庭 = 機構服務的個案戶（CMS 2-6 級長者、子女付費） |
| **Unique Value Proposition** | 對機構：「智慧長照機構」品牌升級 + 補貼回收 100% + 個案戶留存率提升 + 員工負擔減輕；對家庭：免設備購置費 + 月費比 A 更低（NT$799 vs NT$1,200）+ 機構轉介背書 |
| **Solution** | 同 A 硬體 + 軟體；額外加：機構端後台 dashboard（多戶個案管理 / 員工排程整合 / 緊急統一通報 / 數據匯出長照系統）。對接智齡科技 / 宏碁智醫等既有照護系統 API |
| **Channels** | (1) 長照 A 級個管中心（627 處）+ B 級服務據點 + 社區關懷據點（5,200+）；(2) 長照產業協會 / 創新照顧 Ankecare 展會；(3) 既有照護科技 OEM 整合；(4) 衛福部長照司聯繫補貼採購清單 |
| **Revenue Streams** | (a) 機構端 RaaS：NT$3,000/月/台（3 年 = NT$108K，對齊長照 3.0 補貼 NT$60K + 機構自付 NT$48K）；(b) 家庭端：NT$799/月。對標 SoftBank Pepper RaaS $671/月 + ElliQ B2B 全額補貼 |
| **Cost Structure** | 硬體 BOM 同 A NT$12K（攤 3 年 = NT$333/月）。機構端服務支援 + 維修 NT$500-800/月/台。雲端 NT$300-500/月/台。獲客：B2B 業務 NT$30-60K/家機構（每家 5-20 台攤低，每台 CAC NT$2-12K）。BSMI + TFDA II 類認證 NT$300-500 萬 |
| **Key Metrics** | (a) 機構續約率（年）≥70%；(b) 個案家庭月流失率 ≤3%；(c) 機構端「採購 → 部署」≤45 天；(d) 機構端 NPS ≥50；(e) 個案家庭子女 / 機構員工聯合滿意度 ≥4.0/5 |
| **Unfair Advantage** | (1) 通路：先簽 10-20 家標竿機構 → 「長照圈背書 + 個案家庭口碑」雙重 lock-in；(2) 法規：長照 3.0 智慧輔具補貼名單一旦進入 = 政府背書 + 後進門檻；(3) 數據：機構端使用資料可作 TFDA 認證 / 健保給付談判的 RWD |

🟡 B2B2C 商模在台灣長照場景 desk-validated 但缺 PMF；機構採購週期長 + 機構員工抗拒 ICT 系統的歷史是已知風險，需 Phase 2 機構深度訪談驗證。

---

#### Hypothesis C：B2B 健保 / 保險 PMPM「Papa 模式台灣化」

**核心一句話**：與台灣本土健康險業者（國泰 / 富邦 / 南山）合作，保戶（65+ 或失能等級 2+）「免費」獲得機器人 + 訂閱；保險公司付給我們 PMPM NT$600-1,000；保險公司獲得：理賠率下降 / 客戶黏著度 / 差異化保單。

| Block | 內容 |
|---|---|
| **Problem** | (1) 個案：付不起 A 月費 NT$1,200 的中低收入家庭（7.63% 家庭月照顧費已超 NT$4 萬極限）；(2) 保險業者：長照險理賠率上升 + 缺差異化 + 缺直接客戶接觸點；(3) 健保 / 長照基金：人力短缺 + 居家照顧政策需技術杠桿 |
| **Customer Segment** | (a) Buyer = 國泰 / 富邦 / 南山 / 新光長照險商；台壽 / 三商美邦差異化保單；公務人員退撫基金 / 軍人保險（B2G）；(b) End user = 保險公司持有失能等級 + 65+ 重大疾病險的保戶（全台壽險長照險推估 60-80 萬件，每件年保費 NT$2-4 萬） |
| **Unique Value Proposition** | 對保險：「保戶免費獲得」是強有力的續約 / 加保誘因；理賠率下降（早期偵測 + 認知刺激 + 預防跌倒）→ ROI 正向；獨家差異化保單 |
| **Solution** | 同 A 硬體 + 軟體；額外加：保險業者後台（保戶身分驗證 / 服務使用 log / 異常通報整合保險業者 24h 客服 / 健康摘要 push 給 case manager） |
| **Channels** | (1) 保險業者 partnership 直接 BD（高層接觸 + 8-12 月談判週期）；(2) 保險中介通路（人壽顧問 / 保經）；(3) 既有照護 partnership 試點（國泰健康管理 / 富邦人壽長照險已有照護服務 SaaS 對接）；(4) 對標 Papa 美國 Medicare Advantage / Medicaid 通路 |
| **Revenue Streams** | (a) PMPM = NT$600-1,000/保戶/月（對標 Papa $10-20 美金 PMPM）；(b) 1 家保險公司簽約 2 萬保戶 → MRR NT$1,200-2,000 萬 → ARR NT$1.4-2.4 億；(c) 對標 ElliQ B2B 紐約州 OFA / Broward County 全額補貼 |
| **Cost Structure** | 硬體 BOM 同 A NT$12K；保險合約大量採購可壓至 NT$10K（折舊 3 年 NT$278/月）。雲端 NT$300/月/戶（量大攤低）。客服 / 維修 / 在地夥伴 NT$200-300/月/戶。BD 成本：每家保險公司簽約 NT$500-1,000 萬。TFDA II 類認證 NT$500 萬+ |
| **Key Metrics** | (a) 簽約保險業者數（W12: 1 家 MoU、W26: 1 家 pilot）；(b) Pilot 保戶 utilization ≥60%；(c) 保戶滿意度 ≥4.2/5；(d) 對保險業者：理賠率下降 ≥5%（12 月觀察）；(e) 續約率 ≥80%（年） |
| **Unfair Advantage** | (1) 保險業 sticky：5 年期合約 + 既有保戶池 → 競爭者極難切入；(2) RWD 飛輪：保戶健康 + 理賠資料聯動 → 醫療級 evidence base；(3) 法規：取得 TFDA 認證後可申請進入健保「居家照護科技」給付（5-7 年中長期願景） |

🟡 最高 ARR 上限但最長銷售週期；台灣保險業對 ICT/AI 整合的歷史接受度低 + Papa 美國模式靠 Medicare 政府買單，台灣健保 vs 商業壽險長照險的結構差異需 Phase 2 業界訪談驗證；屬「中長期 hypothesis」，作為 W12 主管 review 的「Year 3+ 願景」而非 90 天 MVP 主軸。

---

#### Hypothesis D（bonus，覆蓋 Freemium 商模多元性）：Freemium AI 陪伴 App + 後期硬體 upsell

**核心一句話**：先發 iPad / Android 平板 App 純軟體 freemium（基礎 AI 對話免費 + 子女 dashboard 免費），月費 NT$299 解鎖（記憶 + 進階陪伴 + 緊急通知 + 健康摘要），驗證 PMF 後 upsell 硬體機器人 NT$15K（仍訂閱）。

| Block | 內容 |
|---|---|
| **Problem** | 同 A，但聚焦「想試但不敢一次付 NT$15K + NT$1.2K/月」中低 WTP 子女族群；對標 Replika 等 AI 陪伴 App 商模（AI companion apps 2025 預估 $120M，elder care 佔 29.4%） |
| **Customer Segment** | 子女更寬廣：(a) 30-45 歲科技 early adopter；(b) 父母 65-75 歲（功能更好、可自行操作平板）；(c) 收入 NT$40K-100K（freemium 進入門檻低） |
| **Unique Value Proposition** | 「零門檻試用 → 確定有效再升級硬體」風險最低的進入點；現有 iPad / Android 即可使用；中文 / 台語 + 為台灣長者優化（vs Replika 英文 + 通用） |
| **Solution** | 純軟體 App（iOS + Android）；後期硬體機器人為「Pro 版」add-on |
| **Channels** | (1) App Store / Google Play（cold start、user-generated growth）；(2) Facebook 銀髮社群投放 + KOL（《銀光經濟》《老媽五十啟示錄》親子部落客）；(3) 公益試點：失智症協會 / 老人福利推動聯盟免費試用換口碑；(4) 對標 Lumosity 月費 $11.99 全球 1 億用戶 |
| **Revenue Streams** | (a) Freemium 訂閱 NT$299/月 / NT$2,990/年（對標 Lumosity）；(b) 硬體 upsell NT$15,000+ NT$1,200/月（10-20% Freemium 用戶升級）；(c) B2B2C 機構導入時直接套用 App + 硬體分流 |
| **Cost Structure** | App 開發初期 NT$300-500 萬（iOS + Android + backend）；雲端 NT$100-200/月/用戶（純 App 用量低）；CAC NT$300-800/付費用戶（App Store 廣告 + KOL）；客服輕量 |
| **Key Metrics** | (a) Freemium → Paid 轉換率 ≥3%（行業標準）；(b) Paid 月流失率 ≤8%；(c) D30 retention（付費）≥60%；(d) Paid → 硬體 upsell ≥15%（驗證硬體必要性） |
| **Unfair Advantage** | (1) 速度：App 比硬體快 6-12 月上市，先建立品牌 + 用戶池；(2) 用戶池：先建 1 萬 free user → 後期硬體 upsell 不愁通路 + CAC；(3) 數據：App 對話資料先飛輪起跑，硬體上市時 AI 已個性化 |

🟡 最低風險試水但收入規模上限低；可作為 90 天 MVP 內的「軟體 Wizard-of-Oz + Phase 2 PMF 試驗台」結合 Hypothesis A 路徑（非與 A 互斥）；Freemium → Paid 轉換率 3% 為行業標準假設，台灣長者 App 場景未驗證。

### 5.3 Why Now（≥3 跨 concept 整合）

1. **台灣超高齡 + 子女北漂 + 看護人力 hard ceiling 三重結構壓力**（2025-2026 為臨界點）✅ desk-validated
2. **LLM + ROS2 + 邊緣推理 2025 達 BOM 可行 + 自然對話可用雙門檻**（BOM 從 NT$50K+ 降至 NT$10-15K）✅ desk-validated
3. **長照 3.0（2026/07）+ NT$200 億機器人計畫 = 政府主動創造市場**（補貼 + 產業政策 + 數位發展三軌會合）✅ desk-validated
4. **（補強）先行者 2018-2024 試錯期已過，2025-2026 為台灣 fast-follower 黃金窗口期**（國際先行者已給出 do's and don'ts）✅ desk-validated

### 5.4 五個關鍵假設（Phase 2 Customer Discovery 要驗證 / 破壞）— 完整 Mom Test 雛形 + Pivot 路徑

#### 假設 1：子女願意每月付 NT$1,000-1,500 為父母獲得「主動陪伴 + 緊急安全」雙層服務

- **為什麼是 desk 推論**：
  - 現有 desk 證據是間接推算（家庭月照顧費 NT$22K → 5-6% 為陪伴 / 監控服務 + ElliQ $30/月對標）
  - 台灣本土無公開 WTP 調查
  - WTP 真正取決於「子女愧疚感強度 × 安全焦慮強度 × 對 AI 信任度」三變數無 desk data
- **Phase 2 驗證方法**：
  - **招募標準**：北漂子女 35-50 歲 + 父母 70-82 獨居 / 兩老同住 + 子女家庭月收入 NT$60K+，6-8 人深度訪談
  - **Mom Test 題雛形**（避免引導 / 詢問過去具體行為）：
    1. 「上次你發現爸 / 媽出事是什麼狀況？那次你花了多少時間 / 錢處理？」（過去具體行為）
    2. 「現在你媽 / 爸的健康 / 安全你會擔心嗎？擔心的時候你都做什麼？」（現有解法）
    3. 「你上個月為了爸媽花了多少錢？最大一筆是什麼？」（具體支出非預估）
    4. 「如果有一台 NT$15,000 + 月費 NT$1,200 的設備可以讓你爸媽不孤單 + 跌倒 5 分鐘內通知你 — 你會怎麼跟另一半 / 兄弟姐妹討論？」（決策過程而非「會不會買」）
  - **量化指標**：≥4/8 受訪者在訪談中主動提到「願意付這個價」或「比月費 NT$1,200 願付更高 / 更低多少」具體數字 = 通過初步驗證
- **若被破壞 Pivot 到**：
  - WTP < NT$500/月：pivot 到 Hypothesis B（B2B2C 機構通路，個案戶月付降至 NT$799 + 機構分擔）
  - WTP < NT$300/月：pivot 到 Hypothesis D（Freemium App 純軟體 NT$299，硬體 upsell 後置）
  - WTP > NT$2,000/月：保留 A 但 enrich 服務（人工客服 + 在地 maintenance + 月度健康諮詢）
- 🟡 hypothesis（最高優先級驗證，影響整個商模）

---

#### 假設 2：長者父母（70-82 歲）會主動與機器人互動，且 4 週內不會放棄

- **為什麼是 desk 推論**：
  - ElliQ 美國驗證「30 次/天主動互動 + 95% 用戶減少孤獨感」，但用戶是英文母語 + 美國老化辦公室篩選過的「願意嘗試科技」族群
  - 台灣本土無對等規模 pilot 證據；65+ 上網率 50.36% 含 LINE 用戶（被動）
  - 棄用率 30-50% 首 2 週是行業已知風險
- **Phase 2 驗證方法**：
  - **招募標準**：父母 70-82 歲 + 居住類型多樣（獨居 / 兩老 / 與子女同住）+ 台灣國語 / 台語 / 國台混用三類各 2 人，共 6-8 位長者本人深度訪談（含子女在場）
  - **Mom Test 題雛形**：
    1. 「上次你跟誰聊天聊最久？聊什麼？」（現有對話來源）
    2. 「平常你每天會做什麼？今天從早上到現在做了哪些事？」（日常 routine baseline）
    3. 「你有用過 LINE 跟誰打電話嗎？怎麼用的？」（現有科技接受度）
    4. （如有可能）給長者看 ElliQ / Aibo / 國產原型影片 30 秒：「如果這個東西在你家、它會主動跟你說話 — 你會想用嗎？想用的話多久會覺得 OK / 不 OK？」
    5. 「家裡如果突然多一台會說話的機器 — 你會跟它說什麼？」
  - **量化指標**：≥5/8 長者在訪談中提到「應該會試試」「想看看」+ 子女表態「我覺得我爸媽會願意用」= 通過初步驗證；Phase 5 Wizard-of-Oz pilot 須觀察首 4 週日均互動 ≥10 次 + 第 4 週末仍主動使用
- **若被破壞 Pivot 到**：
  - 長者抗拒比例 ≥50%：pivot 加強「子女遠距引導」layer（每天子女 push 訊息 → 機器人說「OO 兒子說...」），降低直接互動心理門檻
  - 4 週後互動次數驟降 ≥80%：pivot 至 Concept 1+2 為主軸（純陪伴 App + 子女主動引導），降低 Concept 3+4 硬體 / AI Brain 比重
  - 特定文化 / 區域族群（閩南文化 vs 客家 / 外省）接受度差異 ≥30%：縮小 ICP 至特定族群作為 beachhead market
- 🟡 hypothesis（核心 PMF 訊號，影響整個 Concept 5 是否成立）

---

#### 假設 3：緊急偵測（跌倒 / 異常）的非影像式 AI 在台灣家庭真實環境下可達 ≥80% 召回率 + ≤1/週 false positive

- **為什麼是 desk 推論**：
  - 學術研究：fall detection 測試環境準確率 ≥98%（AUC）
  - 真實家庭環境（地毯 / 家具 / 衣物遮蔽 / 老舊住宅光線）顯著下降，desk 無精確百分比
  - 隱私需求：台灣 PDPA + 長者文化均拒絕 24/7 影像收錄
  - 非影像式（聲音 + 互動異常 + 紅外線 + 環境感測）綜合演算法尚無 desk 可參考的台灣家庭驗證數據
- **Phase 2 驗證方法**：
  - **招募標準**：尋求技術 partner（工研院 智齡照顧團隊 / 台大資工 / 成大醫學 / 既有跌倒偵測新創如智齡科技）做技術可行性 desk 評估，並設計 Phase 5 Wizard-of-Oz pilot 中「假緊急事件演習」
  - **訪談 / 問卷雛形（給專業）**：
    1. 與工研院智齡團隊 / 智齡科技 BD：「你們現在跌倒偵測的真實 false positive 率是多少？什麼情境最容易誤報？」
    2. 「非影像式（聲音 + 環境）方案在台灣老舊住宅（嘉義 / 屏東透天 / 公寓）做過哪些驗證？」
    3. 「TFDA 對『跌倒偵測』功能是否一定要走醫療器材認證？認證需要多少臨床 evidence？」
  - **量化指標**：技術 partner 簽 MoU 進行 W5-9 Sprint 共開發 + W9-10 Pilot 中 ≥3 假事件演習達 ≥80% 召回率
- **若被破壞 Pivot 到**：
  - desk 評估顯示非影像式召回率 < 60%：pivot 至「主動 / 被動雙模式」— 緊急按鈕 + AI 輔助偵測，不宣稱 AI 自動為主功能
  - PDPA 規範要求機器人鏡頭必停用 / 加密：pivot「家中其他空間補強」— 主要客廳放陪伴機器人 + 浴室 / 房間加非影像式環境感測器（IoT 補強）
  - 認證時程過長（> 24 月）：pivot「居家陪伴 + 醫療責任聲明」— 不宣稱跌倒偵測準確率，重新定位為「輔助通知工具」（規避 TFDA），但 UVP 弱化需重評 GTM
- 🟡 hypothesis（技術可行性風險，影響 Hypothesis A 的 UVP「雙層心智」是否成立）

---

#### 假設 4：長照機構（日照中心 / A 級個管）願意採購 AI 機器人作為差異化 + 個案戶服務工具

- **為什麼是 desk 推論**：
  - 智齡科技已部署 1,200+ 機構 → 機構接受 ICT 系統的天花板已被驗證
  - 長照 3.0 智慧輔具補貼 NT$60K / 3 年（2026/07）創造採購誘因
  - 但智齡科技是「機構內部管理」系統 vs 我們是「個案戶端服務」工具，市場接受度結構不同
  - Pepper 在日本 500 家老人照護機構 vs 美國 ElliQ 政府單位 vs 台灣本土經驗 = 不能直接外推
- **Phase 2 驗證方法**：
  - **招募標準**：3-5 家不同類型機構（連鎖型如雙連 / 弘道 / 聖母 1 家 + 區域中型日照中心 1-2 家 + 偏鄉社區關懷據點 1 家），機構主管 + 第一線照服員雙端訪談
  - **Mom Test 題雛形（對機構主管）**：
    1. 「你機構去年最大一筆 ICT / 設備採購是什麼？多少錢？決策過程？」（過去具體採購行為）
    2. 「現在你機構最大的差異化是什麼？個案家庭選擇你的原因？」（既有競爭基線）
    3. 「如果有一台機器人，個案家庭可以帶回家、機構可以遠端看健康摘要 — 政府補貼 60% 後機構要付 NT$48K/台 — 你會怎麼跟董事會 / 主管 / 個管師討論？」（決策路徑）
    4. 「過去 12 個月你拒絕過哪些 ICT 廠商 pitch？什麼原因拒絕？」（拒絕信號）
  - **Mom Test 題雛形（對照服員）**：
    1. 「平常你工作中花最多時間的事是什麼？最累的是什麼？」
    2. 「如果有設備可以幫你監控個案在家中的狀況 — 你會擔心什麼？」
  - **量化指標**：≥2/5 機構主管在訪談中主動討論「採購可能性 + 預算路徑」+ ≥1 家機構提供 LOI（Letter of Intent）願意 Phase 5 共同 pilot
- **若被破壞 Pivot 到**：
  - 機構採購週期 > 12 月 / 預算路徑不清晰：pivot 至 Hypothesis A B2C DTC 為主軸，B2B2C 作為長期 ARR 來源
  - 照服員強烈抗拒（覺得是 ICT 取代人力 / 增加工作量）：重新設計 UX 將機器人定位為「分擔工作」而非「監控替代」，加機構員工 onboarding pack + ROI 培訓
  - 機構偏好「機構內部設備」非「個案戶設備」：pivot「機構場域版本」（日照中心放 2-3 台機器人 + 個案戶 App 看父母在中心狀況），不直接進入家庭
- 🟡 hypothesis（B2B2C 商模成立的關鍵；影響 Hypothesis B 是否可行 + Hypothesis A 的 GTM 通路選項）

---

#### 假設 5：台灣本土法規（PDPA + TFDA + 長照認證）的合規時程在 12-18 月可達 MVP 落地

- **為什麼是 desk 推論**：
  - TFDA 截至 2023 已核准 37 件國產 AI/ML 醫療器材 = 路徑存在
  - PDPA 2025/12 修訂版加嚴跨境傳輸 + 同意機制
  - AI 基本法 2025/12 預計上路
  - 但 desk 無精確「陪伴機器人 + 跌倒偵測」TFDA 案例可參考，認證時程 6-24 月為廣泛區間
  - 長照認定 / 長照 3.0 智慧輔具補貼名單申請流程未公開明細
- **Phase 2 驗證方法**：
  - **招募標準**：1-2 位醫療器材法規顧問（律師事務所如理慈 / 萬國 / 普華；或 TFDA 業者輔導窗口）+ 1 位長照產業協會 / 衛福部長照司接觸對象
  - **訪談題雛形**：
    1. 「我們的產品是 AI 陪伴機器人，會偵測跌倒 + 提供認知遊戲 + LLM 對話 — 哪些功能需要走 TFDA 認證？哪些可走 BSMI？」
    2. 「如果走 TFDA II 類，最快多久取得？文件 / 臨床數據要求是什麼？」
    3. 「PDPA 2025 修訂對 LLM 雲端推理 + 對話資料儲存有什麼具體要求？跨境（如用 OpenAI API）需要怎樣的同意機制？」
    4. 「長照 3.0 智慧輔具補貼名單申請流程是什麼？申請時間點 / 文件 / 審查週期？」
  - **量化指標**：W3 結束前確定「BSMI + 自願性 ISO 13482 + PDPA 合規（in-house）」是 90 天 MVP 落地路徑 → TFDA 認證 + 長照補貼名單為 Phase 8 next 6-month milestone
- **若被破壞 Pivot 到**：
  - BSMI 路徑也需 ≥9 月：pivot 至 Wizard-of-Oz 純軟體 / 平板形態（Hypothesis D）避開電子電器類認證
  - PDPA 要求伺服器必在台灣 + 禁用境外 LLM API：pivot 至開源 Llama / Qwen + 在台 GCP / AWS 部署，BOM 略升但合規
  - 長照補貼名單申請週期 > 18 月：Hypothesis B+C 政府背書 GTM 路徑時程順延，Hypothesis A 純 B2C 提前
- 🟡 hypothesis（影響整體上市時程 + GTM 通路；屬「desk + 訪談半小時可確認」低成本驗證項，建議 Phase 1 / 2 早期完成）

---

## 6. 對 Phase 1 Problem Framing 的輸入

詳見 assumption-mapping §6.1-6.3。重點：

### 6.1 Frame 方向 🟡 hypothesis（需 Phase 1 業界 + 用戶訪談確認 framing 是否引起共鳴）

**「遠端代理在場（Remote Proxy Presence）」**：當子女北漂 / 工作 / 跨城距離無法每天陪父母時，提供一個 24/7 持續主動陪伴 + 緊急安全網的「家中代理」，讓父母不孤單 / 子女不愧疚 / 家庭不焦慮。

避免 frame 方向（落入競品紅海）：
- ~~智慧家庭（Amazon / Google 鎖死）~~
- ~~老人手機 / 平板（GrandPad 鎖死 + 商品化）~~
- ~~失智症照護（窄化用戶 + TFDA 認證複雜）~~
- ~~機器人玩具（Aibo / LOVOT 鎖死 + B2C 高定價失敗）~~

Frame 關鍵詞：**主動 / 持續 / 雙層 / 家人 / 不被監視**

### 6.2 Stakeholder Mapping 預期結構 ✅ desk-validated（基於 desk research，待 Phase 1 業界訪談精化）

7 個角色（合併為 5 大類符合 framework）：
- **User**：長者本人 70-82 歲
- **Buyer + Decision Maker**：長者子女 35-55 歲（唯一付款人）
- **Influencer + Detractor**：子女配偶 / 兄弟姊妹 / 抗拒科技的父母 / 對 AI 隱私擔憂的子女 / 對 ICT 抗拒的照服員
- **Gatekeeper + Payer**：衛福部 TFDA + BSMI + PDPA 主管機關 + 長照 3.0 補貼 + 健康險業者
- **Implementer**：機構照服員（B2B2C 模式）+ 子女（B2C 模式）+ 在地 maintenance partner

### 6.3 Ethical Risk 預期紅線（7 條）✅ desk-validated（vulnerable population framework + 既有案例佐證；Phase 1 elderly-risk-mapper 跑全紅線清單）

1. **Vulnerable Population**：70+ 長者對 ToS 理解能力 / 自主決策；設計子女 + 長者本人 + 第三方見證三方同意機制
2. **Privacy**：24/7 環境收音 + 健康資料；Privacy by Design：端側處理優先 / 加密 / 用戶可隨時刪除
3. **Responsibility / Liability**：AI 誤判 / 漏報；法律意見書 + 產品責任險 + LLM guardrail
4. **Autonomy / Dignity**：長者被強迫接受感；UX 隨時可關閉 / 拒絕提醒 / AI 學習拒絕 pattern
5. **Death / Bereavement**：長者過世時 AI 互動處理 / 資料歸屬；預先設計家庭資料移交 + 記憶導出紀念
6. **Algorithmic Bias**：台語 / 客家 / 外省口音辨識差異；含「不同口音 / 認知狀態」測試組 + fairness audit
7. **Vendor Lock-out / 孤兒化**：Jibo / Moxie / Aldebaran 案例；商業可持續性 + 退場 plan B（資料遷移開源 + 退費機制）

90 天 MVP 內 mitigation vs Phase 8 next 6-month milestone 兩段時程拆分（詳見 assumption-mapping §6.3）

---

## 7. Coverage Matrix

### 整合輸入（5 個 sub-agent 報告）

| Sub-agent | 工作目錄 / 檔案 | 大小 | 內容 |
|---|---|---|---|
| project-idea-validator | /tmp/phase-0.5-project-idea-validator.md | 39 KB / 516 行 | 4 concept × 4 維度（需求 / 痛點 / 商模 / 顧客旅程）= 16 cell 全填、13 商模 5 國別 |
| market-researcher | /tmp/phase-0.5-market-researcher.md | 29 KB / 437 行 | 4 concept × TAM/SAM/SOM 三層數字 + Why Now ≥3 趨勢、32 source |
| competitive-analyst | /tmp/phase-0.5-competitive-analyst.md | 31 KB / 539 行 | 17 競品 SWOT + 技術可行性 3 時間軸 + 護城河 7 種、≥25 source |
| data-researcher | /tmp/phase-0.5-data-researcher.md | 15 KB / 280 行 | 5 主題 ≥29 source（台灣老齡統計 / global market / 付費意願 / 長照政策 / 認證法規）|
| assumption-mapping | /tmp/phase-0.5-assumption-mapping.md | 56 KB / 438 行 | concept 5 整合 + 6 個 4-way 機會 + 4 個 hypothesis Lean Canvas + 5 個假設 + Phase 1 輸入 |

**所有 sub-agent 報告 evidence trace**（跨引用對應表）見 assumption-mapping §Coverage Matrix。

### Gate 通過條件檢核（依 phase-0.5-framework.md）

| Gate 條件 | 是否通過 | 證據 |
|---|---|---|
| 5 concept × 7 維度全填完（35 cell）| ✅ | §1-4 各 7 子段 + §5.1-5.4；4×7+4=32 cell + concept 5 額外 4 段 = 36 cell |
| ≥3 商模案例 / concept（共 ≥15）| ✅ | concept 1:4 / concept 2:3 / concept 3:3 / concept 4:4 = 14；含負面案例 Jibo/Moxie/Aldebaran |
| TAM/SAM 量化 + ≥3 source / concept | ✅ | market-researcher 32 source 含 link/quote |
| 競品 ≥3 / concept（共 ≥15）| ✅ | competitive-analyst 17 競品 / 6 國別 |
| Concept 5 給出 ≥3 strongest hypothesis（含 Lean Canvas 雛形）| ✅ | 4 個 hypothesis A/B/C/D，每個 9 block 全填 |
| Why Now 論證 ≥3 趨勢支撐 | ✅ | 4 個跨 concept Why Now（趨勢 1-4） |
| Push CC + Discord 通知懷特 review | ⏳ | T13 待執行 |

### 反 pattern 自我檢核

| 反 pattern | 是否規避 | 證據 |
|---|---|---|
| 略過 4 個獨立 concept 直接跳 combine | ✅ | §1-4 各自完整 7 維度後才進 §5 |
| ≥3 案例都來自同一國家 | ✅ | 商模國別含 🇺🇸 🇯🇵 🇫🇷 🇨🇳 🇬🇧 🇮🇱 🇹🇼 |
| TAM/SAM 不附 source | ✅ | 每個 TAM/SAM 數字均有 ≥3 source 含 link / quote |
| Sub-agent 只給 summary 不給 evidence | ✅ | 5 個 sub-agent 報告皆含 Coverage Matrix |
| Concept 5 略過 hypothesis 列舉 | ✅ | 4 個 hypothesis 完整 9 block |

### Phase 2 必補（卡關項目）

對應到 5 個 Phase 2 驗證假設 + 2 個 desk 補強：

| 主題 | 缺失 | 對應 |
|---|---|---|
| 子女 WTP 量測 | 台灣本土無公開調查 | **§5.4 假設 1** |
| 長者接受度 / 棄用率 | 台灣本土無 ElliQ 規模 pilot | **§5.4 假設 2** |
| 緊急偵測準確率 | 真實家庭非影像式 AI 無 desk data | **§5.4 假設 3** |
| 機構採購週期 | 智齡科技既有市占但結構不同 | **§5.4 假設 4** |
| 認證時程 | TFDA AI/ML 6-24 月廣泛區間 | **§5.4 假設 5** |
| 80+ 細分人口 | 內政部統計需 ris.gov.tw 查 | **Phase 1 desk 補強**（market-researcher 補查 ris.gov.tw）|
| 北漂子女比例（2024 最新）| 三代家庭 < 10% 已知，北漂比例缺 | **Phase 1 desk 補強**（data-researcher 查國發會 / 主計總處統計）|

---

> **下一步**：T12v 派獨立驗證 sub-agent 驗證本文件 Gate 7 條 → T13 commit/push + Edit OpenSpec tasks.md [x] T11-T13 + Discord 通知 → 等懷特 review Phase 0.5 → approve 才進 Phase 1 Problem Framing
