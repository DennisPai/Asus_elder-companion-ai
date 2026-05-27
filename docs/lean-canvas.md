# Lean Canvas — 長者互動陪伴機器人 × AI Brain
**Version**: v1
**Date**: 2026-05-27
**Source**: phase-0.5-deconstruction.md §5.2（v0.1 草稿）+ problem-framing.md §1-§4 + phase-0-answers.md + persona.md + jtbd-day-in-life.md + wtp-payer.md §1-§3 + build-vs-buy.md + mvp-type.md + tech-architecture.md + feature-triage.md + safety-redlines.md + decision-w4.md §4-§6

> **Plan-Only Mode**：本文件是「規劃書」，不是「已驗證 PMF」。所有 block 結論加標籤 ✅ desk-validated / 🟡 hypothesis / 📋 post-approval execution。
> **報告對象**：華碩（ASUS）負責 AI 代理人 / 服務型機器人主管 1 位。客觀中立、無 ASUS 推銷合作論述。競品比較引用 ASUS 官方公開資訊。
> **禁用字眼**：demo（改稱「主管 review 規劃書」）。
> **標準**：Ash Maurya Running Lean 8 block（9 block 含 Existing Alternatives）填寫順序：Problem → Customer Segments → UVP → Solution → Channels → Revenue → Cost → Key Metrics → Unfair Advantage。

---

## §0. Executive Summary

### 三 Canvas 推薦組合（W4 Gate 結論）

| Canvas | 定位 | 90 天 MVP 角色 | 評分 |
|---|---|---|---|
| **A B2C DTC（本文主 Canvas）** | **主軸 hypothesis** | 核心商業模式 + Phase 4 主題 | 4.40/5 Persevere |
| **D Freemium App（補 Canvas）** | **入口路徑** | 90 天最快 GTM + 用戶池建立 | 4.20/5 Persevere |
| **B B2B2C 機構（比較 Canvas）** | **Year 1 H2 風險 Hedge** | BD 接觸期，非 90 天主 KPI | 3.35/5 Persevere |
| **C 保險 PMPM（略）** | 延後 Year 3+ | 長期願景，非 90 天範圍 | 2.30/5 延後 |

### 關鍵風險（主 Canvas A）

1. **WTP 未直接驗證**（最高優先）🟡：NT$1,000-1,500/月 為四框架交叉推算，需 Phase 2 Mom Test × 8 子女訪談確認
2. **長者接受度未驗證**（核心 PMF 訊號）🟡：棄用率 30-50% 首 2 週為已知行業風險，台灣無對等規模 pilot
3. **緊急偵測召回率**（UVP 強弱）🟡：非影像式真實家庭環境準確率待 Phase 5 驗證，規劃目標 ≥80%

### Phase 4-8 銜接點

- **Phase 5 Prototype**：Must-have 8 feature（F01/F02/F10/F11/F13/F20/F21/F22）→ §1 Block 4 Solution
- **Phase 6 Pilot**：北漂子女 10-20 戶招募標準 → §1 Block 2 Customer Segments
- **Phase 7 Pitch**：UVP 台語四合一差異化 + Unfair Advantage 台語護城河 → §1 Block 3、Block 9
- **Phase 8 主管 review**：Block 3 UVP + Block 6 Revenue + Block 9 Unfair Advantage 為核心展示

---

## §1. Lean Canvas Hypothesis A — B2C DTC「主動陪伴 + 安全網雙層」

> **核心一句話**：賣給北漂子女一台 NT$15,000-19,900 桌上型小機器人 + NT$799-1,290/月訂閱，讓父母（70-82 歲、台語為主、獨居 / 兩老同住）獲得「有人在家陪 + 跌倒立刻通知子女」雙層心安。

---

### Block 1. Problem（Ash Maurya 第一步）

**Top 3 Problems（按嚴重度 S0-S1-S1）**：

**S0 — 緊急事件無人知曉、搶救延誤** ✅
- 跌倒後平均延誤 4-12 小時才被發現（獨居 23.3% + 老老照顧 12.36% = 35.7% 高風險族群，149.4 萬人）
- 緊急按鈕需長者主動按，但跌倒 / 失去意識時無法主動啟動
- 現有解法（緊急手環 / 子女打電話 / 社區關懷）均不覆蓋夜間、週末、突發場景
- 來源：problem-framing.md §1.2 / 內政部 112 年統計 / phase-0.5-deconstruction.md §1.2

**S1 — 長期孤獨造成認知 / 心血管退化** ✅
- WHO 2023：孤獨 = 全球公衛危機，估計 87.1 萬人/年早死；台灣 65+ 27.6% 孤獨感
- 台灣三代同堂 1990 15.48% → 2023 10.43%（降幅 1/3）；一人宅 168 萬 → 260.8 萬（10 年 +55%）
- 台灣失智症 35 萬 + MCI（3-5×）= 100-175 萬人；孤獨加速認知退化已有學術共識
- 現有解法（LINE 視訊 / 寵物 / 廟會活動）頻率不足，且無 24/7 主動陪伴
- 來源：problem-framing.md §1.5 趨勢 5 / WHO 2023 / 台灣失智症協會

**S1 — 子女照顧者心理耗竭** ✅
- 台灣 90% 失智家屬長期失眠、65% 異常壓力（家庭照顧者關懷總會 2023）
- 北漂子女無法每天到場，每週 1 通電話覺得不夠但無更好方案（persona.md §1.3）
- 在地中產照顧者每天下班繞去探視，個人生活全被壓縮（persona.md §2.3）
- 現有解法（看護 NT$22-70K/月 / 社區關懷 / 喘息服務）成本高或使用門檻複雜
- 來源：problem-framing.md §2.2.2 / 家庭照顧者關懷總會 2023 / persona.md §1-§2

**Existing Alternatives（既有替代方案，≥2 個非自己產品）**：

- **ElliQ / Intuition Robotics（美國）**：USD 249.99 + USD 29.99-59/月；2025 年營收 $35M；紐約州 800+ 戶 pilot；95% 用戶減少孤獨感（ElliQ 自述，[intuitionrobotics.com](https://www.intuitionrobotics.com)）。**缺口**：無中文 / 無台語；機身不可移動；對話脈絡超過幾輪失憶；無子女 dashboard；無長照補貼路徑；2026 進日本預計 2027-2028 才進台灣
- **ASUS Zenbo Junior II / Maestro 節點（台灣）**：2024 年起轉型為醫院 Healthcare+ 系統節點（Maestro），2024/01 QAP 服務終止（problem-framing.md §4.4 引用 ASUS 官方公告）。**缺口**：B2C DTC 月費訂閱路線未繼續；台語對話不支援；客語對話不支援；子女 dashboard 無；B2C 居家場景空白（引用：ASUS Zenbo 官方網站 + 媒體報導，客觀中立呈現）
- **Amazon Alexa Together（美國）**：USD 19.99/月 + 既有 Echo 生態 + 24/7 緊急熱線。**缺口**：完全依賴子女設定、無跌倒偵測、中文弱、無主動發起話題、無情感記憶
- **GrandPad（美國，2021 被 Consumer Cellular 收購）**：USD 59-65/月 含 4G + 硬體 + 客服；100 萬用戶。**缺口**：純通訊裝置、無 AI 主動陪伴、全英文、台灣無通路
- **非科技替代方案**：看護服務（外籍 NT$22K-35K/月 + 仲介費）/ 社區關懷據點（有限時段、不覆蓋夜間）/ 子女每日電話（不可持續、被動）

🟡 台灣 B2C DTC 場景目前無強護城河競品（desk-validated 結論，problem-framing.md §4.4 競品 deep dive）

---

### Block 2. Customer Segments（Ash Maurya 第二步）

**Primary Segment（主要買家 = 付款人）**：
- **長者子女 35-50 歲（Buyer + Decision Maker）**：台灣北漂 / 遠距照顧場景；父母在南部縣市獨居或兩老同住（嘉義 / 南投 / 屏東 / 台南老化指數最高）；子女月收 NT$60K-120K（台北 / 新竹科技走廊）；有訂閱服務習慣（Netflix / Spotify / iCloud）；科技 early adopter ✅
- **長者本人 70-82 歲（End User，不付款）**：功能尚可、可語音對話；台語 / 國台混用為主；獨居 23.3% 或兩老同住（老老照顧 12.36%）；接受度 40-50%（ElliQ 驗證 65% 願意使用 AI 陪伴） 🟡

**Early Adopter Profile（最優先 10-20 戶 Pilot 目標）**：
- Persona A 北漂 IT 工作者 35-45 歲：子女在台北 / 新竹、父母在嘉義 / 南投 / 屏東老宅 🟡
  - 觸發事件峰值：父母最近 12 個月有過跌倒 / 出院 / 認知退化信號
  - 付費決策快（1-4 週）、自行研究後拍板
  - 月收 NT$80K-110K；WTP NT$1,200-2,400/月（Persona A 中位）
  - DTC 數位通路可精準觸及（Facebook 親子照顧社群 + Google SEO）
- 非 Early Adopter 排除條件（反 Persona）：與父母同住者 / 月收 NT$30K 以下 / 已有全天 24h 外籍看護 / 父母完全入住養護機構

**Secondary Segment**（Phase 6 後拓展）：
- Persona B 在地中產照顧者 45-55 歲（月收 NT$50K-70K；WTP NT$600-900；決策週期 1-3 月）→ Tier 1 Starter NT$799 路徑
- Persona C 退休前高端夫妻 50-55 歲（雙薪 NT$200K-350K；WTP NT$2,000-3,500；WTP 最高但獲客成本高）→ Year 2 Premium Custom 路徑

**Customer Segment 補充說明**：
- 台灣 SAM 中位數 NT$66 億（三向交叉驗證 ✅）；北漂子女切片估佔 35-50% = NT$23-33 億
- 付款人（子女）≠ 使用者（長者），設計需同時服務兩端（子女 App dashboard + 長者端機器人）
- 65% 長者表示「願意使用 AI 陪伴機器人」（FIU 2024 調查 ✅），長者接受度不是絕對阻礙

---

### Block 3. Unique Value Proposition（Ash Maurya 第三步）

**One-liner UVP**：
「每天主動陪你父母說中文 / 台語、跌倒 5 分鐘內通知你、讓你不在身邊也安心」——台灣第一個結合主動 AI 對話 + 子女 dashboard + 緊急偵測 + 長照補貼路徑的四合一居家陪伴機器人。🟡

**UVP 四個差異化維度**：
1. **台語 / 中文雙語對話**：南部縣市長者台語母語 60%+；現有所有競品（ElliQ / GrandPad / Aibo）均無台語支援；MVP 基礎台語問候 + 常用詞，Year 2 完整台語 LLM 對話 🟡
2. **主動發起對話**（非被動回應）：AI 每天固定時段問候長者，長者不需先開口；ElliQ 驗證 30 次/天主動互動 + 95% 減少孤獨感（✅ ElliQ 美國數據，台灣場景待驗證 🟡）
3. **子女 dashboard**：每日 AI 生成非侵入式摘要（「今天聊了 3 次農曆話題，心情不錯」而非原始對話）；多子女帳號 + 緊急通知廣播；北漂子女不需每天打電話
4. **緊急安全網**：非影像式異常偵測（PDPA 合規）+ LINE 推播 ≤5 分鐘；Plan-Only 紅線：「召回率待 Phase 5 Pilot 驗證，規劃目標 ≥80%」📋

**High-level Concept**：
「我們是台灣長者的 24/7 AI 家庭成員——讓北漂子女的父母不孤單，讓子女不需要每天打電話才能安心。」（We are an AI family presence for Taiwanese elders, for working-age children who can't be there every day.）

**UVP 校準（報告對象為 ASUS 主管）**：
- 客觀呈現競品定位差異：ASUS Zenbo Junior II 轉型 B2B 醫院 Maestro 系統節點（2025 Healthcare+），本案定位 B2C 居家月費訂閱，兩個不同市場。不推銷 OEM / 合作論述，亦不貶抑 ASUS 產品。
- 差異化不依賴「打敗 ASUS」，而是基於台灣 B2C 居家市場空白（problem-framing.md §4.4）。

---

### Block 4. Solution（Ash Maurya 第四步）

**3 Key Features → 對應 3 Problems**：

**Feature 1 → 解 Problem 1（緊急安全網）**：非影像式異常偵測 + 緊急通知系統
- 聲音 + 互動中斷異常偵測（Layer 2 rule-based 守門器）→ LINE 推播 + App 雙通路 ≤5 分鐘
- 緊急按鈕快速呼叫（語音「幫我叫救護車」+ 觸控）→ 子女通知 + 119 引導語
- 3 層確認機制防止 false positive（計畫目標 ≤1/週）📋
- MVP 形態：Wizard-of-Oz 平板 + 麥克風陣列 + 邊緣 rule-based 偵測；Full 形態：Year 1 ODM 硬體
- Safety 對應：safety-redlines.md §1.2 條件紅線 C2（緊急偵測，不宣稱召回率數字 Plan-Only 紅線 P1）

**Feature 2 → 解 Problem 2（主動陪伴 + 認知刺激）**：AI Brain 三層混合架構主動對話系統
- Layer 1（雲端）：GPT-4o-mini API 自然語言生成（成本 NT$0.5-2/月/用戶，94.5% API 成本降幅 ✅）
- Layer 2（邊緣）：台語 / 中文 ASR（Google Cloud STT / 基礎台語識別）+ rule-based 守門器（7 條 LLM 絕對紅線阻擋）
- Layer 3（本地 Jetson Orin Nano）：觸發詞偵測 + 離線問候 + 隱私端側處理
- 主動功能：每日固定時段問候（06:30 / 18:00）+ 節日 / 節氣台灣農民曆話題 + 個人記憶 RAG（長者偏好 / 家庭脈絡）
- LLM Guardrail：10 條絕對紅線（N1-N10，醫療 / 投藥 / 急救 / 法律 / 投資 / 心理治療 / 臨終）強制執行

**Feature 3 → 解 Problem 3（子女安心 / 照顧者喘息）**：子女 App + dashboard 雙端服務
- 每日 AI 生成摘要（非侵入式，長者同意後開啟，預設關閉）+ 緊急推播 ≤5 分鐘
- 遠端 onboarding ≤10 分鐘 + 引導 ≤5 步（北漂子女 hard constraint）
- 多子女帳號 + 緊急通知廣播全兄弟姊妹（降低照顧責任分配衝突）
- 長者主動控制優先：「停止 / 暫停提醒」指令 AI 暫停 24 小時，監控功能預設關閉

**MVP 形態（90 天 Plan-Only 規劃）**：📋
- 平台：iOS + Android App（子女端）+ 平板 Wizard-of-Oz（長者端）
- 硬體：現成平板 + 底座 + 麥克風陣列 + 外殼（BOM NT$18-22K WoZ 形態 → Year 1 ODM NT$12K）
- 技術路徑：AI Brain 路徑 C 混合架構（雲端 API + 邊緣 Jetson + 本地端側）
- Must-have 8 feature：F01 / F02 / F10 / F11 / F13 / F20 / F21 / F22（feature-triage.md §2）

---

### Block 5. Channels（Ash Maurya 第五步）

**早期（≤100 用戶，Y1 M1-M6）**：
- **Founder 親自接觸（Primary）**：Phase 5-6 Pilot 10-20 戶家庭直接招募（Facebook 親子照顧社群貼文 + 失智症協會合作免費試用）📋
- **Facebook / Instagram 精準投放**：「獨居父母安心」「父母跌倒偵測」「遠距照顧」關鍵字；親子照顧社群（台灣照顧者關懷總會 FB 1.5 萬人）
- **Freemium App 作為引流入口**（Hypothesis D 協同）：App Store / Google Play 免費下載 → 試用 → 升級硬體；CAC NT$300-800（比硬體直銷 NT$5K-8K 低 10×）
- **口碑 + 轉介**：同事 / 朋友口耳是 Persona A 信任度最高管道（辦公室午餐「我家也這樣」）

**中期（100-1,000 用戶，Y1 H2 - Y2）**：
- **銀髮博覽會 / 高齡照護展**：每年 6-8 月台北、10-11 月台中高雄；實體體驗 = 長者接受度最佳入口 📋
- **醫院出院衛教 / 神經科診間轉介**：出院後「父母剛跌倒 / 剛確診 MCI」是最強購買觸發；建立神經科 / 高齡科 KOL 合作關係 📋
- **長照 A 級個管中心推薦**（627 處）：個管師轉介是 Persona B 最高信任管道
- **SEO 長尾**：「獨居父母安心裝置」「父母遠端照顧 app」「老人跌倒偵測」；PTT 家有老人板 / Mobile01 評測
- **長照 3.0 智慧輔具補貼名單**（2026/07 預計）：進入補貼名單 = 政府背書 + CAC 降低 60-80% 📋

**Scale（>1,000 用戶，Y2+）**：
- **電信業者捆綁**：中華電信「銀髮安心方案」潛在 Channel Partner；遠傳 / 台哥大養老商品；渠道開發 📋
- **連鎖藥妝 / 超市合作**：屈臣氏 / 寶雅 / 全聯銀髮健康區；實體體驗機
- **商業媒體信任建立**：《天下》《商周》《遠見》報導（Persona C 高端信任管道）📋
- **B2B2C 機構通路**（Hypothesis B 並行 Y2）：長照 A 級個管中心 + 連鎖照護機構（雙連 / 弘道 / 聖母）
- **保險業者 cross-sell**（Year 3+）：長照險 / 失能險 cross-sell 推薦；保戶免費獲得入口（Hypothesis C 遠期）

**Free vs Paid 通路分流**：
- Free（Freemium App）→ App Store / Google Play / 失智症協會試用（低 CAC NT$300-800）
- Paid（硬體 + 訂閱）→ 官網 / momo / 蝦皮 + 銀髮博覽會 + 機構推薦（CAC NT$5K-8K 初期，補貼後 NT$2K-3K）

---

### Block 6. Revenue Streams（Ash Maurya 第六步）

**Revenue Model**：硬體一次性 + SaaS 訂閱（Hybrid Hardware + Subscription）；Freemium 入口軟體

**Tier 1 — Starter（NT$799/月）**：
- 目標：Persona B 在地中產照顧者（WTP NT$600-900）+ Freemium 升級用戶
- 功能組合：每日主動問候 + 中文語音對話 + 服藥提醒 + 子女緊急通知推播 + 基礎異常偵測 + 遠端 onboarding
- 對標：家庭月照顧費 NT$22K 的 3.6%；低於 GrandPad USD $59 對標 NT$1,800
- 倫理校準：監控型功能（活動摘要）預設關閉，長者書面同意後開啟（safety-redlines.md §1.2 C6）

**Tier 2 — Pro（NT$1,290/月）— 主力 ARPU**：
- 目標：Persona A 北漂 IT（WTP 中位 NT$1,200-2,400）；Year 1 主收入來源
- 功能組合：Tier 1 全部 + 台語語音識別（基礎）+ 個人記憶 AI（偏好 / 家庭脈絡 RAG）+ 每日 AI 摘要推播（子女 App）+ 節日 / 節氣主動話題 + 認知遊戲（基礎）
- 對標：家庭月照顧費 NT$22K 的 5.9%；對標 ElliQ NT$914-1,800 中段
- LTV 計算（decision-w4.md §6.1）：ARPU NT$1,290 × 月留存率 95% × 預期 18-24 個月 = LTV NT$23,220-29,340

**Tier 3 — Premium（Custom，≥NT$2,500/月）**：
- 目標：Persona C 退休前高端夫妻（WTP NT$2,000-3,500）；Year 2 拓展
- 功能組合：Tier 2 全部 + 高端健康趨勢週報 / 月報 + 家庭雙端多帳號 + 優先客服 + 家醫諮詢聯結 + 看護行為輔助監測（可選）
- 倫理校準：看護監測需三方同意（長者 + 子女 + 看護）；不宣稱「看護監控」

**硬體一次性收入**：
- MVP WoZ 形態：NT$15,000-19,900（對標 ASUS Zenbo Jr NT$15,000 親民、LOVOT NT$6-11 萬高端）
- Year 1 ODM 量產目標：BOM NT$12,000，售價 NT$15,000（毛利 20%），Year 2 量產降 BOM 至 NT$10K（毛利 33%）
- 長照 3.0 補貼路徑（2026/07）：CMS 2-6 級長者可申請 NT$60K/3 年 = 設備零門檻購買誘因

**Freemium App 收入（Hypothesis D 協同）**：
- 基礎版：免費（下載推廣 + 用戶池建立）
- 付費版：NT$299/月 / NT$2,990/年（對標 Lumosity USD $11.99，台灣 PPP 調整後）
- Freemium → Paid 轉換目標 3%（行業標準）🟡；Paid → 硬體 upsell 目標 15%（驗證硬體必要性）🟡

**B2B2C 機構收入（Hypothesis B，Year 2+）**：
- 機構端 RaaS：NT$3,000/月/台（3 年 NT$108K，對齊長照 3.0 補貼 NT$60K + 機構自付 NT$48K）
- 個案戶家庭端：NT$799/月（低於 B2C Tier 1，機構轉介背書替代 CAC）

**ARR 預測**（Plan-Only 📋，基於 problem-framing.md §1.4）：
- Y1 保守 ARR：NT$50-120 萬（Freemium App 主軸 + Pilot 少量硬體）
- Y2 ARR：NT$862 萬-NT$2,156 萬（200-500 硬體用戶 + 1,000-3,000 App 付費 + 60-100 台機構）
- Y3+ 願景（Hypothesis C 啟動）：一家保險業者 2 萬保戶 × NT$800 × 12 = ARR NT$1.9 億

**Pricing 與 wtp-payer.md 對齊確認**（pricing-strategist 交叉驗證）：
- Tier 1 NT$799 = WTP 四框架下界（Oxford PPP NT$763 + 家庭照顧費 3.6%）✅
- Tier 2 NT$1,290 = WTP 四框架中位（NT$1,000-1,500 交叉中位）✅
- Tier 3 Custom ≥NT$2,500 = Persona C WTP 中位 NT$3,000 區間 ✅

---

### Block 7. Cost Structure（Ash Maurya 第七步）

**Fixed 固定成本**：
- AI Brain 基礎開發（iOS + Android App + backend + LLM 整合）：NT$300-500 萬 📋
- 硬體模具 + 初版 BOM 採購（WoZ 形態）：NT$18-22K/台（100 台試產 = NT$180-220 萬）📋
- BSMI 安全認證（App 形態免，WoZ 平板形態免）：Year 1 ODM 硬體啟動時 NT$30-100 萬 📋
- PDPA 合規 DPIA + 法規顧問（理慈 / 萬國 / 普華）：NT$20-50 萬 📋
- 核心團隊（估 3-5 人）：工程 × 2 + PM × 1 + BD / 客服 × 1（台灣薪資結構）📋

**Variable 變動成本**：
- 雲端 LLM API（GPT-4o-mini）：NT$0.5-2/月/用戶（100K tokens/月）✅（94.5% 成本降幅歷史驗證）
- Google Cloud STT / TTS：約 NT$50-100/月/用戶（1,000 分鐘語音 / 月）
- 整體 AI Brain 雲端成本：NT$100-300/月/用戶（Freemium App 低端 NT$100，硬體完整版 NT$300）
- 客服 / 維修支援：初期 NT$500-1,000/月/台（北漂 = 遠端客服為主，在地維修夥伴分潤）📋
- App Store / Google Play 手續費：30%（首年），Year 2+ 15%

**CAC（Customer Acquisition Cost）**：
- 硬體 B2C DTC 初期：NT$5,000-8,000/用戶（Facebook 廣告 + 銀髮博覽會展示）🟡
- Freemium App：NT$300-800/付費用戶（App Store + KOL 合作）🟡
- 長照補貼名單（2026/07 後）：CAC 預計降低 60-80% = NT$1,000-3,200/硬體用戶 📋
- B2B2C 機構：NT$30,000-60,000/家機構（每家 5-20 台攤低 = NT$2,000-12,000/台）

**Unit Economics（decision-w4.md §6.1 對齊）**：
- Tier 2 月費毛利：NT$1,290 - AI Brain 雲端 NT$200 - 客服 NT$300 = 月毛利 NT$790（毛利率 61%）
- 硬體毛利：NT$15,000 - BOM NT$12,000 = NT$3,000（毛利 20%）
- LTV:CAC（W4 早期試算）：NT$26,280 / NT$6,500 = **4.04:1**（Year 1 目標 ≥3:1 ✅）
  - **校準說明**：本數值為 W4 概估（500 unit 階段假設）；T33 unit-econ §7.2 量產 5,000 台中性情境深化值為 **5.95:1**（中性 BOM NT$9,500 + CAC 規模化攤低）；保守情境 2.3:1（worst case BOM 上揚 + CAC 上揚）。Phase 5 Sprint 後可實證對齊
- Payback Period：NT$6,500 CAC / NT$790 月毛利 = 約 8.2 個月（加硬體毛利 NT$3,000 = 6.8 個月）

---

### Block 8. Key Metrics（Ash Maurya 第八步）

**North Star Metric**：
- **長者端「週活躍互動次數」**（Primary）：目標 Week 4 ≥20 次/週主動互動（對標 ElliQ 30 次/天；WoZ 形態早期保守目標）🟡
- **子女端「每週 dashboard 查看率」**（Secondary）：目標 ≥60%（子女有在用 = 訂閱有感知價值）🟡

**Pirate Metrics（AARRR）**：

| 階段 | 指標 | 目標（Plan-Only 📋）| 信心等級 |
|---|---|---|---|
| **Acquisition（獲客）** | Freemium App 下載量 / 硬體購買轉化率 | 90 天：2,000-5,000 下載；Freemium→Paid 3%（60-250 付費）| 🟡 |
| **Activation（啟動）** | 子女 onboarding ≤10 分鐘完成率 | ≥80% 完成率；長者 Day-1 首次對話成功率 ≥70% | 🟡 |
| **Retention（留存）** | 長者端 Day-7 主動互動 ≥3 次/天；付費用戶 W4 留存 | Day-7：長者 ≥3 次/天；W4：付費用戶留存率 ≥70% | 🟡 |
| **Referral（轉介）** | 子女 NPS ≥40；長者 NPS ≥35 | 子女 NPS ≥40（行業標準 Airbnb 73 / ElliQ 未公開）| 🟡 |
| **Revenue（收入）** | 月流失率 ≤5%；ARPU NT$1,290（Tier 2 主力）| 月流失率 ≤5%（=20.6 個月平均訂閱週期）| 🟡 |

**PMF 訊號（Sean Ellis 測試）**：
- **≥40% 用戶回答「非常失望」如果產品消失** ✅（Sean Ellis PMF 門檻，Lean Startup 參考）
- 📋 Phase 6 Pilot 4 週後執行 Sean Ellis 問卷 × 10-20 戶長者子女

**Safety 紅線 Metrics**（非常規業務指標，但對 Phase 5+ 必追蹤）：
- 緊急偵測 false positive ≤1/週（條件紅線 C2）📋
- LLM guardrail 觸發率（絕對紅線 N1-N10 攔截率 = 100%）📋
- 長者「停止 / 暫停」指令執行率 100%（N10 使用者自主權）

**HEART 框架（Google）**：
- **Happiness**：子女 NPS ≥40 / 長者 NPS ≥35 / Day-30 CSAT ≥4.0/5
- **Engagement**：長者週活躍互動 ≥20 次；子女 dashboard 週查看 ≥60%
- **Adoption**：Freemium → Paid 3% / 硬體 upsell 15%（Freemium 付費用戶）
- **Retention**：W4 付費留存 ≥70%；月流失 ≤5%
- **Task Success**：子女 onboarding ≤10 分鐘完成 ≥80%；緊急通知 ≤5 分鐘到達 ≥99%

---

### Block 9. Unfair Advantage（Ash Maurya 第九步）

**4 維護城河架構（切換成本 / 資料 / 法規 / 通路）**：

**維度 1 — 資料護城河（最高優先，AI 專屬數據）** ✅
- **台灣長者台語對話語料庫**（全球唯一）：1,000 用戶後形成無法複製的台語 ASR fine-tune 資料集；後進競爭者需 2-3 年才能積累等量語料；語料庫本身即飛輪（更多用戶 → 更好台語 → 更多用戶）
- AI Brain 個性化記憶 RAG：每位長者個人偏好 / 家庭脈絡 / 生活節奏，競爭者無法從零建立
- 台灣長者使用行為數據：跌倒偵測準確率提升 / 認知退化信號分布 / 陪伴效果相關指標（Phase 5-6 Pilot = TFDA + 健保給付談判 RWD 原材料）📋

**維度 2 — 切換成本護城河（4 層）** ✅
- Layer 1：**個人記憶不可遷移**（長者偏好 / 家庭脈絡 / 生活故事無標準格式可遷移）
- Layer 2：**子女訂閱習慣嵌入**（多子女帳號 / 通知 / dashboard 已整合進子女日常工作流）
- Layer 3：**父母行為習慣固化**（長者 4 週後已建立「跟它說話」習慣，切換引入新適應期）
- Layer 4：**長照補貼資格綁定**（申請補貼後需重新走補貼流程才能更換廠商）📋

**維度 3 — 法規 / 監管護城河** ✅（中高優先）
- **長照 3.0 智慧輔具補貼名單**（2026/07）：進入名單 = 政府背書 + 後進競爭者需重新申請 12-18 月 📋
- **BSMI + 自願性 ISO 13482（服務型機器人安全）**：先通過認證者獲政府採購和 B2B2C 機構通路優先
- **TFDA II 類認證（Year 2-3）**：取得認證後可進入「醫療輔助」定性，後進差距擴大至 24-36 月
- **PDPA 合規設計**：Privacy by Design 三層資料分類 + 三方同意機制 + GCP asia-east1；在台灣資安敏感環境是信任護城河（vs 中國品牌）

**維度 4 — 通路護城河**（中優先，建立中）
- **長照機構 KOL（早期 3-5 家標竿機構）**：先簽標竿機構 → 長照圈 BD 背書 + 個案家庭口碑雙重 lock-in 📋
- **醫院 / 神經科診間轉介關係**：「醫師推薦」是 Persona B 採購的最直接觸發（persona.md §2.9）；對台灣醫療保守文化，KOL 信任 = 最強進入壁壘 📋
- **中華電信「銀髮安心方案」潛在合作**：電信捆綁 = 規模化 CAC 降低 + 下沉市場覆蓋（需 W6-9 啟動洽談）📋

**Unfair Advantage 補充（AI 護城河框架）**：
- **微調模型**：台語 ASR fine-tune 基於專屬長者語料（非通用模型），後進無法直接複製
- **飛輪效應**：用戶 → 台語語料 → 更好台語識別 → 更多用戶 → 更多語料（自我增強）
- **先行者時間窗 12-24 月**：台灣本土無強競品（2025/12 確認 ✅）；ElliQ 日本版 2026 上市，台灣 2027-2028 才可能進入；中國品牌台灣資安疑慮 = 天然屏障

---

## §2. Lean Canvas Hypothesis D — Freemium App（補充）

> **核心一句話**：先發 iOS + Android App freemium，基礎 AI 對話免費，月費 NT$299 解鎖，驗證 PMF 後 upsell 硬體 NT$15K，形成 A 的軟體引流入口。

---

### 9 Block 簡化版

**1. Problem（同 A，聚焦中低 WTP 族群）**：
- S1：想試「AI 陪伴」但不敢一次付 NT$15K + NT$1,200/月（進入門檻阻斷）
- S1：長者 65-75 歲（功能尚好）可自行操作平板，但子女不知從哪開始
- S2：AI companion app 市場 2025 USD $120M（elder care 佔 29.4%）但無台灣本地化 ✅

**Existing Alternatives（D 的競品）**：
- Replika（情感 AI 伴侶 App，全英文，通用場景非長者優化，[replika.ai](https://replika.ai)）
- Lumosity（認知訓練 App，USD $11.99/月，1 億用戶，FTC 2016 $50M 和解，中文薄，[lumosity.com](https://www.lumosity.com)）
- BrainHQ（認知科學 App，USD $14/月，Mayo Clinic 背書，無中文 / 台語，[brainhq.com](https://www.brainhq.com)）
- 台灣本土陪伴 App：暫無台灣長者專用中文 / 台語 AI 陪伴 App（desk-validated ✅）

**2. Customer Segments**：
- 主：子女 30-45 歲科技 early adopter（WTP NT$299/月 App 訂閱，對比硬體 NT$1,200）
- 長者：65-75 歲（比 A 的 70-82 歲稍年輕，科技接受度更高，平板使用能力較強）
- 次：透過 A+D 協同的 Persona A/B 客群下層（WTP 低端但有試用意願）

**3. UVP**：「零門檻試用——確定有效再升級硬體」；現有 iPad / Android 即可使用；中文 / 台語為台灣長者優化（vs 英文 Replika / 通用 BrainHQ）。

**4. Solution**：
- 純 App（iOS + Android）+ 雲端後端
- 功能：AI 主動問候 + 中文語音對話 + 基礎台語問候 + 服藥提醒 + 子女緊急通知（付費）
- 後期：硬體機器人「Pro 升級版」add-on

**5. Channels**：
- 早期：App Store / Google Play（冷啟動）+ Facebook 銀髮社群投放 + KOL（《銀光經濟》《老媽五十啟示錄》）
- 中期：失智症協會 / 老人福利推動聯盟免費試用換口碑 + SEO 長尾
- Scale：口碑 + 轉介 + momo / 蝦皮 App 連結 + 與 A 的 DTC 共同推廣

**6. Revenue Streams**：
- Freemium（免費）：基礎 AI 對話 + 每日問候（建立用戶池）
- Paid（NT$299/月 / NT$2,990/年）：解鎖記憶 + 台語 + 緊急通知 + 子女摘要
- Upsell（NT$15K 硬體 + NT$1,290/月）：付費用戶 15% 目標升級 🟡

**7. Cost Structure**：
- App 開發：NT$300-500 萬（iOS + Android + backend）📋
- 雲端成本：NT$100-200/月/用戶（App 比硬體低，語音量較少）
- CAC：NT$300-800/付費用戶（比 A 的 NT$5K-8K 低 10×）
- 客服輕量（純 App 無硬體維修）

**8. Key Metrics**：
- Freemium → Paid 轉換率 ≥3%（行業標準）🟡
- Paid 月流失率 ≤8%（比 A 的 ≤5% 寬鬆，純 App 切換成本低）
- D30 Retention（付費）≥60%
- Paid → 硬體 Upsell ≥15%（驗證硬體必要性）🟡
- 90 天：2,000-5,000 下載 + 60-250 付費用戶

**9. Unfair Advantage**：
- **速度**：App 比硬體快 6-12 個月上市，先建品牌 + 用戶池
- **用戶池**：先建 1 萬 free user → 硬體 upsell 不愁通路 + CAC
- **數據飛輪**：App 對話資料先行，硬體上市時 AI 台語語料已有基礎

---

### 與 A 的關係

| 維度 | 方案一（先 D 後 A upsell）| 方案二（同步並行）|
|---|---|---|
| 定位 | D 是 A 的入口路徑（顛漏斗模型）| D 和 A 同時推，各自服務不同 WTP 族群 |
| 時序 | D 先上（W5），A 後推（W9+）| 同時上但資源分散 |
| 推薦 | **W4 Gate 推薦此路徑**（decision-w4.md §4.2）| 資源不足時風險較高 |
| 風險 | D 用戶池建立慢則 A 冷啟動仍困難 | 同步並行分散注意力 |

**Cannibalization 風險評估**：
- NT$299/月 Freemium vs NT$1,290/月 Pro = 價差 4.3×；若長者完全接受 App，不升級硬體，D 自我蠶食 A 的潛在用戶池
- **Mitigation**：Freemium App 刻意設計「AI 對話深度 + 台語支援 + 緊急偵測」只在硬體版完整，App 版為「啟動體驗」；台語語音識別品質在硬體（Jetson 邊緣 + 專用麥克風陣列）明顯優於 App（手機麥克風）→ 自然升級動機

---

## §3. Lean Canvas Hypothesis B — B2B2C 長照機構通路（Year 1 H2 Hedge）

> **核心一句話**：日照中心 / 長照 A 級個管中心採購機器人（長照 3.0 補貼分攤），免費佈建到個案家中；家庭子女自付 NT$799/月；機構獲得「智慧長照機構」品牌差異化 + 補貼回收。

---

### 9 Block 簡化版

**1. Problem（雙層客戶）**：
- 機構端：照服員人力短缺（外籍 21 萬 + 本籍 7.5 萬不足）+ 缺競爭差異化（智齡科技 30% 市占飽和）
- 家庭端：同 Hypothesis A 三重痛點（緊急 / 孤獨 / 子女耗竭）
- 政府端：長照 3.0 智慧長照目標卡關，缺實際可採購方案

**Existing Alternatives**：
- 智齡科技 LongGood（台灣長照機構管理 1,200+ 機構，[longgood.com.tw](https://www.longgood.com.tw)）— 機構內部管理系統，非個案戶端 AI 陪伴，結構不同
- SoftBank Pepper RaaS（日本 500 機構，$671/月；2025 年 Aldebaran 破產後停產 ✅）— 高端 B2B 機器人已退場，空出機構場景
- 宏碁智醫 B2B（台灣 B2B 醫院場景，非家庭端）— 競品但定位不同（院內 vs 居家）

**2. Customer Segments（供給方 + 需求方）**：
- **採購方（機構）**：中型日照中心 / 長照 A 級個管中心 / 連鎖照護（雙連 / 弘道 / 聖母）約 1,000-1,500 家；機構主管決策（6-12 月週期）🟡
- **使用方（個案家庭）**：機構服務的 CMS 2-6 級長者 + 子女（月費 NT$799，比 A 低）；機構轉介背書替代 CAC

**3. UVP**：
- 對機構：「智慧長照機構」品牌升級 + 補貼回收 100% + 個案戶留存率提升 + 員工負擔減輕
- 對家庭：免設備購置費 + 月費 NT$799 + 機構轉介信任背書

**4. Solution**：
- 同 A 硬體 + AI Brain 軟體
- 機構端額外：多戶個案管理後台 + 員工排程整合 + 對接智齡科技 / 宏碁智醫 API（技術上可行 🟡）
- 硬體出發：機構採購 → 佈建到個案戶家中 → 家庭月費訂閱

**5. Channels**：
- 早期：長照 A 級個管中心（627 處）+ 創新照顧 Ankecare 展會 + 長照產業協會
- 中期：衛福部長照司補貼名單 + 標竿機構 KOL 口碑
- Scale：連鎖機構（雙連 / 弘道 / 聖母）框架合約 + 長照 3.0 補貼加速採購

**6. Revenue Streams**：
- 機構 RaaS：NT$3,000/月/台（3 年 NT$108K，對齊長照 3.0 補貼 NT$60K + 機構自付 NT$48K）
- 個案家庭：NT$799/月
- Year 2 ARR 估計：機構 60-100 台 × NT$3,000 + 家庭用戶 NT$799 × 台數 = NT$216-360 萬/年（機構端）

**7. Cost Structure**：
- 硬體 BOM 同 A（NT$12K ODM）
- B2B BD 成本：NT$30,000-60,000/家機構（每家 5-20 台攤低 NT$2,000-12,000/台）
- 機構後台開發：額外 NT$50-100 萬（90 天 MVP 不交付，Year 1 H2 開發）
- 多語言培訓包（越南 / 印尼文照服員）：NT$10-20 萬

**8. Key Metrics**：
- 機構續約率（年）≥70%
- 個案家庭月流失率 ≤3%（機構背書更黏）
- 機構「採購 → 部署」≤45 天
- W12 Gate KPI：≥1 家機構 LOI

**9. Unfair Advantage**：
- 通路：先簽 3-5 家標竿機構 → 「長照圈背書 + 個案口碑」雙重 lock-in
- 法規：長照 3.0 補貼名單一旦進入 = 政府背書 + 後進 12-18 月追趕
- RWD 數據：機構使用資料作為 TFDA 認證 + 健保給付談判 RWD 原材料

---

### 何時觸發主軸切換（W6 Gate 條件）

| 信號 | 切換方向 |
|---|---|
| Phase 2 機構訪談 ≥2 家 LOI（W6 前）| Hypothesis B 升為主軸，A 降為次軸（DTC 仍推進但資源 shift）|
| Phase 2 機構訪談 0 家 LOI + 主動拒絕「根本不需要機器人」| B 降格為「機構場域展示版」（日照中心放 2-3 台展示，不進家庭），通路回歸 A DTC |
| A B2C DTC 前 100 用戶 NPS ≥60（W8 Gate）| A 升 Scale，B 維持 BD 接觸期但不調整優先級 |
| A B2C DTC 前 100 用戶月流失 >15%（W8 Gate）| 重新評估 UVP，考慮 B2B2C 機構作為更穩定通路 |

---

## §4. 三 Canvas 整合

### 共用資源（三 Canvas 共享，不可分割）

| 資源類型 | 內容 | 備註 |
|---|---|---|
| **AI Brain 三層混合架構** | Layer 1 GPT-4o-mini + Layer 2 台語 ASR + Layer 3 Jetson 端側 | A / B / D 均用，只是硬體形態 vs App 形態分流 |
| **台語語料庫（核心護城河）** | Pilot 用戶對話資料 → fine-tune 台語 ASR | A / B 共同積累，D 早期 App 語料貢獻較少 |
| **Safety 紅線設計（10 條 N + 6 條 C）** | LLM guardrail + 緊急偵測機制 + PDPA 合規 | 三 Canvas 必須完全一致，不能各自實作 |
| **法規路徑（BSMI / PDPA / TFDA）** | App 免認證 + Year 1 BSMI + Year 2-3 TFDA | A / B / D 依形態分段適用，路徑一致 |
| **品牌資產 + UVP 語言** | 「台灣第一個台語 AI 陪伴機器人」定位 | A / B 硬體版共用；D App 版延伸品牌 |
| **子女 App dashboard** | 緊急通知 + 摘要推播 + onboarding | A / B / D 均需子女 App，版本略有差異 |

### 互斥資源（三 Canvas 有選擇成本）

| 資源類型 | 說明 | 優先序 |
|---|---|---|
| **通路建設團隊** | B2C DTC（A）vs 機構 BD（B）vs App Growth（D）需不同人才和投入 | Y1 優先 D（0 成本）→ A DTC → B BD（W3-W12 兼顧）|
| **銷售 Motion** | A：子女個人採購（1-4 週決策）vs B：機構採購（6-12 月決策）完全不同 | A 主軸，B 並行但不分主要 BD 資源 |
| **客服 SLA** | B2C：消費者服務（7×24）vs B2B2C：機構 SLA（需機構後台支援 + 多語言）| Y1 先建 B2C 客服，機構後台 Year 1 H2 |
| **硬體 BOM 採購** | A 硬體用戶 vs B 機構採購 vs D 純 App = 不同 SKU 管理 | Y1 先確認 A 初版 BOM，B 批量採購 Year 2 才啟動 |
| **開發優先序** | 8 Must-have feature（A/D 共用）vs 機構後台（B 額外）| Y1 先完成 Must-have 8，機構後台 Year 1 H2 |

### 切換 Trigger（W6 / W12 Gate 用）

| Gate | 指標 | 觸發動作 |
|---|---|---|
| **W6 Gate（Phase 2 完成後）** | 機構訪談 LOI ≥2 | Hypothesis B 升主軸；A 降次軸 |
| W6 Gate | WTP 訪談顯示穩定 WTP < NT$600/月（多數受訪者）| Pivot Revenue Block → Tier 1 NT$799 主力；Tier 2 降至 NT$999 |
| W6 Gate | WTP 訪談顯示穩定 WTP > NT$2,000/月（多數受訪者）| Upgrade A UVP → 更豐富服務（人工客服 + 月度健康諮詢）；提前開發 Tier 3 Custom |
| **W12 Gate（Phase 5 Pilot 後）** | A B2C Day-7 retention < 20%（長者）| Plan B Pivot：加強「子女遠距引導 layer」；降低長者主動使用門檻 |
| W12 Gate | A B2C 月流失 > 15%（子女）| 重新評估 UVP；考慮 B2B2C 機構作為主通路 |
| W12 Gate | D Freemium → Paid < 0.5%（遠低於行業 3%）+ 無訪談 salvage signal | Hypothesis D Kill 考量；資源全移 A |

---

## §5. v0.1 → v1 變更紀錄

> 基準：phase-0.5-deconstruction.md §5.2 Hypothesis A/B/C/D v0.1（W1 草稿）→ 本文 v1（W5-6 精化）

| Block | v0.1 草稿（§5.2）| v1 精化（本文）| 變更理由 |
|---|---|---|---|
| **Problem** | 列 3 痛點未排 S0/S1 優先序 | 補 S0/S1/S1 嚴重度排序 + desk evidence ≥3 source | Phase 1 problem-framing.md §1.2 深化；嚴重度決定 UVP 強調順序 |
| **Customer Segments** | 「北漂子女 35-50 + 父母 70-82」泛稱 | 加 Early Adopter Profile（Persona A 10-20 戶 Pilot）+ 反 Persona 排除條件 | persona.md T19 + jtbd-day-in-life.md T22 深化 ICP；Pilot 招募需具體標準 |
| **UVP** | 「台灣唯一四合一」廣泛宣稱 | 拆 4 個差異化維度 + High-level Concept + ASUS 主管客觀呈現校準 | phase-0-answers.md 報告對象特殊考量；四維拆分配合 Phase 7 Pitch 使用 |
| **Revenue Streams** | NT$15,000 + NT$1,200/月（原始假設）| Tier 1 NT$799 / Tier 2 NT$1,290 / Tier 3 Custom + 三 Tier 倫理校準 | wtp-payer.md §2 四框架 WTP 精化 + decision-w4.md §6.1 定價對齊；原 NT$1,200 改為 NT$1,290（Pro Tier 主力）|
| **Cost Structure** | BOM NT$12,000 + 雲端 NT$300-500 | 補全 Fixed（認證 / 開發 / 法規）+ Variable（每用戶明細）+ LTV:CAC Unit Econ | decision-w4.md §6.1 Unit Economics 完整計算 |
| **Key Metrics** | Sean Ellis + Day-7 + NPS 3 指標 | 補 AARRR + HEART 完整框架 + Safety 紅線 metrics | Phase 4 Business Model 規劃書需完整指標架構給主管 review |
| **Unfair Advantage** | 資料 + 切換成本 + 法規 3 維 | 補 4 維（加通路）+ AI 護城河框架（飛輪 / 微調 model）+ 競品時間窗 12-24 月 | decision-w4.md §4.1 Unfair Advantage 段 + problem-framing.md §4.4 競品 deep dive |
| **Channels** | 4 管道列舉無早期 / 中期 / Scale 分層 | 分 3 期（≤100 / 100-1000 / >1000）+ Free vs Paid 分流 | Phase 1 §2.2.5 在地通路夥伴 + wtp-payer.md §3.2 通路 CAC 影響 |
| **Existing Alternatives** | 列 4 競品但無 URL + 無非科技替代 | 補 URL + 補非科技替代（看護 / 社區關懷 / 子女電話）| Mom Test 嚴令：必列 ≥2 個非自己產品 + 非產品替代方案 |
| **Hypothesis D Canvas** | 9 block 列點，缺與 A 的關係分析 | 補「先 D 後 A vs 同步並行」決策矩陣 + Cannibalization 風險評估 | decision-w4.md §4.2 D 入口路徑定位 |
| **Hypothesis B Canvas** | 9 block 列點，缺切換 trigger | 補供給方 / 需求方雙 Segment + W6/W12 Gate 切換條件 | decision-w4.md §4.2 B 次主軸定位 + W4 Gate 框架 |
| **整合章節** | 無 | 新增 §4 三 Canvas 整合（共用 / 互斥 / 切換 trigger）| Phase 4 Business Model 主管呈現必須說清楚三條路線如何協同 |

---

## §6. Phase 5-8 銜接

### Phase 5 Prototype Build（Solution Block 對映）

| Must-have Feature | Lean Canvas Block | 對映 § |
|---|---|---|
| F01 每日主動問候 | Solution Feature 2（主動陪伴）| Block 4 |
| F02 中文語音對話 | Solution Feature 2（AI Brain 核心）| Block 4 |
| F10 子女緊急通知推播 ≤5 分鐘 | Solution Feature 1（緊急安全網）| Block 4 |
| F11 服藥提醒（朋友語氣）| Solution Feature 2（主動陪伴）| Block 4 |
| F13 子女遠端 onboarding ≤10 分鐘 | Solution Feature 3 + Channels 早期 | Block 4 + Block 5 |
| F20 超大字 / 高對比 UI | Solution Feature 3（使用者端設計）| Block 4 |
| F21 長者主動控制（停止 / 暫停）| Unfair Advantage（切換成本 Layer 3）| Block 9 |
| F22 隱私資料刪除 / 記憶導出 | Cost Structure 合規 + Key Metrics Safety | Block 7 + Block 8 |

**Sprint 建議**（Plan-Only 規劃 📋）：
- Sprint 1-2（W5-W8）：F02 + F01 + F21 + F13 + F20（核心互動 + 必要 UX）
- Sprint 3-4（W9-W12）：F10 + F11 + F22 + F03 台語基礎 + F12 摘要推播

### Phase 6 Pilot（Channels + Customer Segments 對映）

| Lean Canvas Block | Phase 6 對映 | 目標 |
|---|---|---|
| Block 2 Customer Segments — Early Adopter | Pilot 招募標準：Persona A 10 戶 + B 5 戶 + C 5 戶 | 10-20 戶家庭 + 地域（子女北部 / 父母南部）|
| Block 5 Channels — 早期 | Pilot 招募通路：Facebook 親子社群 + 失智症協會 + 銀髮博覽會 | CAC NT$300-800 App 入口 |
| Block 8 Key Metrics | Pilot KPI：Sean Ellis ≥40% + Day-7 retention + NPS ≥40 | 📋 Phase 5-6 量測機制設計 |
| Block 3 UVP | Pilot 設計：台語問候第 1 天 + 緊急偵測假演習 ≥3 次 | 驗證 UVP 四維差異化 |

### Phase 7 Pitch（UVP + Unfair Advantage 對映）

| Phase 7 Pitch Deck 章節 | Lean Canvas Block | 內容 |
|---|---|---|
| Opening（Why Now）| Block 1 Problem + Phase 1 Why Now | 超高齡 + LLM 成本降幅 + 長照 3.0 三軌 |
| Market（TAM/SAM/SOM）| Block 2 Customer Segments | SAM NT$66 億三向交叉 + SOM 24 個月 |
| Differentiation | Block 3 UVP + Block 9 Unfair Advantage | 台語四合一 + 護城河 4 維 |
| Business Model | Block 6 Revenue + Block 7 Cost | Tier 1/2/3 + Unit Econ + CAC:LTV |
| 長期演進 | Block 9 Year 3+ | 保險 PMPM 願景（Hypothesis C 1 頁）|

### Phase 8 主管 Review 規劃書（核心展示 Block）

| 展示優先序 | Block | 核心訴求 |
|---|---|---|
| **1 核心（必展示）** | Block 3 UVP | 台灣唯一台語四合一；客觀差異化（無 ASUS 推銷語氣）|
| **2 核心** | Block 6 Revenue | Tier 1/2/3 + ARR 預測 + 長照補貼路徑整合 |
| **3 核心** | Block 9 Unfair Advantage | 台語語料飛輪 + 切換成本 4 層 + 法規卡位時序 |
| 4 補充 | Block 1 Problem | S0/S1 三重痛點量化（149.4 萬高風險族群）|
| 5 補充 | Block 8 Key Metrics | Sean Ellis + AARRR 完整 PMF 量測架構 |
| 6 參考 | Block 4 Solution | Phase 5 Must-have 8 feature + Sprint 計畫 |
| 內部保留 | ✅/🟡/📋 標籤 | 對外渲染時剝離（phase-0-answers.md §對外網頁紀律）|

---

## §10. Iteration Log

- **v0.1（W1，phase-0.5-deconstruction.md §5.2）**：4 個 hypothesis 各 9 block 草稿；Problem / Customer Segment / UVP / Solution / Channels / Revenue / Cost / Metrics / Unfair Advantage 全填但為 desk 初推論；無三 Canvas 整合 / 無 WTP 四框架精化 / 無 Phase 銜接對映
- **v1（W5-6，本文件，2026-05-27）**：基於 Phase 0.5-3 全 desk research 精化；補 WTP 四框架三 Tier 定價（NT$799/1,290/Custom）/ 補 Early Adopter Profile + 反 Persona / 補 UVP 四維拆分 + ASUS 主管客觀呈現校準 / 補 Unit Econ LTV:CAC 4.04:1 / 補 AARRR + HEART 完整 Key Metrics / 補 Unfair Advantage 4 維 AI 護城河 / 補三 Canvas 整合（共用 / 互斥 / 切換 Trigger）/ 補 Phase 5-8 全面銜接對映；v0.1 → v1 變更紀錄完整列於 §5

---

> **文件狀態**：✅ Phase 4 T30 Lean Canvas v1 完成
> **下一步**：T31 競品對比矩陣（決策 W4 主軸差異化空間） + T32 Unit Economics（Tier 1/2/3 健康度 + 感應分析）
> **主管 Review 對外版本**：對外網頁渲染時依 phase-0-answers.md §對外網頁紀律：剝離 ✅/🟡/📋 標籤 + 禁用「demo」字眼 + Plan-Only Mode 段不渲染
