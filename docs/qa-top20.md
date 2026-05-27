# 主管 Q&A Top 20 — 長者互動陪伴機器人 × AI Brain
**Phase**: PM Flow v0.1 Week 11
**報告對象**: 華碩（ASUS）AI 代理人 / 服務型機器人主管
**Plan-Only Mode**: 本文件所有財務數字 / 技術指標均為 desk research 規劃假設，標示 ✅ desk-validated / 🟡 hypothesis / 📋 post-approval execution
**禁用字眼**: 本文禁用「demo」/ 「Mode E」/ 任何 ASUS 推銷合作語氣

---

## §1. CLEAR Framework 說明

每道 Q&A 遵循 CLEAR 結構，確保答題簡潔有力、對主管有說服力：

| 元素 | 定義 | 本案應用準則 |
|---|---|---|
| **C — Context** | 問題背景 + 主管為何會問 | 說明問題的 business concern 根源 |
| **L — Logic** | 答案邏輯結構（1-2-3 點論證）| 最多 3 個分點，有層次感 |
| **E — Evidence** | 具體數字 + source 引用 | 對齊 unit-econ.md / problem-framing.md / pmf-report.md 真實數據 |
| **A — Analogy** | 類比（國際案例 / 市場類比）| 使用 ElliQ / Papa / GrandPad 等已驗證案例 |
| **R — Redirect** | 導回核心優勢 / 差異化 | 每題結尾指向護城河或規劃文件的下一步 |

**誠實承諾**：所有數字對齊規劃書文件，不誇大，不編造。對主管不知道的項目，承諾 follow-up 具體資料，不裝懂。

---

## §2. Top 20 完整 Q&A

---

## §A. 市場與競品（5 題）

### Q1：你怎麼確認台灣 30-50 萬戶北漂家庭真的有這個需求？（市場驗證）

**C — 背景**：主管會問這題是因為規劃書是 desk research 階段，擔心市場需求是推算而非直接訪談結果。

**L — 邏輯（3 點）**：
1. **結構性數據確認需求存在**：三代同堂 1990 年 15.48% → 2023 年 10.43%（降幅 1/3）；一人宅 168 萬 → 260.8 萬（10 年 +55%）；65+ 需照顧者中子女照顧佔 44.35%，其中「上班中照顧子女」31.77%（衛福部 2018）。這群人是北漂遠距照顧場景的核心。
2. **三向交叉驗算 SAM**：Top-down（ElliQ 美國 per-capita 對標台灣）= NT$77 億；Bottom-up（35% 可及率 46 萬家庭 × NT$14,400 ARPU）= NT$66.2 億；Analog（ElliQ 類比 0.5% 滲透）= NT$3.4 億 SOM。三向方向一致，SAM 中位 NT$60-70 億。（problem-framing.md §1.3）
3. **60 度需求意願信號**：FIU 2024 調查 65% 長者表示「願意使用 AI 陪伴機器人」；Oxford WTP 學術研究 PPP 調整後台灣 NT$1,200-1,500/月 支持本案 ARPU 假設（problem-framing.md §1.5 趨勢 6）。

**E — 證據**：台灣 65+ 人口 467 萬（2025/12 超高齡）；獨居 23.3% + 老老照顧 12.36% = 35.7% 高風險族群，149.4 萬人；主計總處確認嘉義縣 2010-2023 淨遷出 4 萬人+ 是南留北漂的直接代理指標。

**A — 類比**：ElliQ 在紐約州 800+ 家庭 pilot 時，OFA（老化辦公室）也是先以老化縣市結構數據估需求，後以 pilot 驗證。本案規劃同樣的兩階段驗證路徑。

**R — 導回**：核心 PMF 驗證設計在 Phase 6 Pilot（pilot-recruitment.md §1.1），預計 W13+ 15-20 戶對外招募；W4 Gate 5 個假設已設計 Mom Test 訪談大綱（interview-plan.md），計畫通過後 6 週可交出真實驗證數據。

---

### Q2：ElliQ / Aibo / GrandPad 都做過了，你做出什麼不同？（差異化）

**C — 背景**：主管已知國際競品歷史，擔心重蹈 Jibo（$80M 倒閉）/ Moxie（2024 倒閉）/ Aldebaran（2025 破產）覆轍。

**L — 邏輯（4 維差異化）**：
1. **台語 / 中文雙語對話**：南部縣市（嘉義 / 屏東 / 南投）長者台語母語 60%+；ElliQ / GrandPad / Aibo 三者均無台語；台語 ASR fine-tune 語料庫 1,000 用戶後形成全球唯一台灣長者語料護城河（lean-canvas.md §1 Block 9）。
2. **主動發起對話**（非被動）：ElliQ 雖已做到，但無中文 / 台語，且 2027-2028 才可能進台灣。本案先行 12-24 月窗口。GrandPad 是純通訊裝置，Aibo 無語言對話。
3. **子女 dashboard 雙端設計**：北漂子女的核心 JTBD 是「不在身邊也知道父母安好」——每日 AI 非侵入式摘要 + 緊急推播 ≤5 分鐘。現有競品均缺此功能。
4. **長照 3.0 補貼路徑整合**（NT$60K/3 年，2026/07 開放）：CMS 2-6 級長者可申請補貼，有效降低 CAC 60-80%；這是台灣市場獨有的政策槓桿，ElliQ 在美依賴州政府計畫，在台灣空白。

**E — 證據**：失敗案例教訓：Mabu 非 LLM 腳本死亡 + 單一客戶依賴；Moxie 兒童場景 ≠ 長者；Aldebaran 2025/02 破產（B2B 單台 $30K 不 sustainable）。本案差異化空間：problem-framing.md §4.4 四格競品矩陣定位「軟體中心 + B2C DTC 先行 + 台語文化本地化」。

**A — 類比**：Papa 在美國靠「Medicare Advantage PMPM + 人工陪伴」而非機器人，同樣服務孤獨長者需求，2024 年 $150M C 輪。本案提供 AI-first 版本的相同價值主張，台灣健保結構差異將在 Year 3+ Hypothesis C 處理。

**R — 導回**：不依賴「打敗誰」，而是填補台灣 B2C 居家場景的市場空白（problem-framing.md §4.4 確認「台灣 B2C DTC 場景目前無強護城河競品」✅）。

---

### Q3：ASUS Zenbo Junior II 在 B2B 醫院市場已經做了，你為什麼還要做 B2C？（與 ASUS 重疊度）

**C — 背景**：這是最敏感的一題。主管本身可能是 Zenbo 產品線 owner，需要極度客觀中立，不推銷合作，不貶抑競品，不誇大競品失敗。

**L — 邏輯（事實陳述為主）**：
1. **市場定位不同，非直接競爭**：Zenbo Junior II 2024 年起轉型為醫院 Healthcare+ 系統節點（Maestro 系統）、2024/01 QAP 服務終止——這是 ASUS 官方公告的公開資訊。本案定位是 B2C 居家訂閱月費，面向的是「願意付 NT$1,290/月的北漂子女」，與醫院 B2B 採購場景在客戶、通路、定價、法規路徑上均不同。
2. **居家 B2C 場景是目前未覆蓋的空白**：從 problem-framing.md §4.4 競品分析：台灣 B2C 居家月費訂閱場景目前無強護城河競品（desk-validated）。Zenbo 轉型 B2B 後，B2C 居家場景確實空出，這個結論基於公開資訊，客觀呈現。
3. **規劃書不以 ASUS 為合作對象或競爭對象**：本案 MVP 定位是「台灣長者陪伴市場的 B2C 軟體先行路徑」，不涉及 OEM / 授權 / 合作提案，亦不試圖定位為「做 ASUS 不做的事」。

**E — 證據**：引用 ASUS Zenbo 官方網站 + 媒體報導（2024）；本案 UVP 四維差異化（台語 / 主動發起 / 子女 dashboard / 長照補貼路徑）均非 Zenbo Jr II 當前方向。

**A — 類比**：iPhone 出現後，日本功能機廠商轉攻企業市場（垂直 B2B）而非消費市場，兩者並非零和。本案走消費市場軟體訂閱，定位不同。

**R — 導回**：本規劃書重點在「90 天 MVP 計畫可行性 + 商業模式設計」，競品分析的目的是定位差異化空間，不評論任何廠商策略對錯。主管對 Zenbo 產品線了解更深，歡迎補充我們可能理解不足的地方。（誠實 acknowledge 主管的資訊優勢）

---

### Q4：你說 5 年護城河，後進者真的需要 24-36 月才能追上嗎？（護城河可信度）

**C — 背景**：主管想評估競爭壁壘是否真實，還是 pitch deck 語氣誇大。

**L — 邏輯（4 維護城河來源）**：
1. **資料護城河（最強）**：台灣長者台語對話語料庫——後進競爭者需從零招募台灣長者 + 建語料 + fine-tune ASR，估計 2-3 年才能積累等量語料。飛輪效應：更多用戶 → 更多台語語料 → 更好識別 → 更多用戶（lean-canvas.md §1 Block 9）。
2. **切換成本護城河（4 層）**：個人記憶不可遷移（長者偏好 / 家庭脈絡 / 生活故事無標準格式）+ 子女訂閱習慣嵌入 + 父母行為習慣固化（4 週後建立「跟它說話」習慣）+ 長照補貼資格綁定（換廠商需重走補貼流程）。
3. **法規 / 認證卡位**：長照 3.0 補貼名單（2026/07）進入後，後進需重新申請 6-18 月；BSMI + 自願 ISO 13482 先通過者有機構採購優先；TFDA II 類（Year 2-3）取得後後進差距擴大至 24-36 月。
4. **先行者時間窗 12-24 月**：ElliQ 日本版 2026 上市，台灣 2027-2028 才可能進入；中國品牌台灣資安疑慮是天然屏障；台灣本土工研院 Deecye 未商業化（problem-framing.md §1.5 趨勢 4）。

**E — 證據**：先行者試錯期已過的教訓清單：Jibo $80M 倒閉（訂閱不能只靠情感）/ Moxie 2024（兒童 ≠ 長者）/ Aldebaran 2025 破產（$30K+ B2B 不 sustainable）。本案站在試錯清單的肩膀上，直接 fast-follower 最佳路徑。

**A — 類比**：Spotify 在串流音樂護城河不是技術，而是個人化播放清單數據——用戶用越久護城河越深。本案個人記憶 RAG 功能原理相同。

**R — 導回**：24-36 月護城河估算主要依賴資料飛輪和法規卡位，這兩項是最有依據的壁壘。技術護城河相對薄弱（LLM 可複製），所以規劃書主軸在「先建用戶 + 先進補貼名單 + 先積累台語語料」三個時間壁壘。

---

### Q5：台灣超高齡是真的，但市場是否被既有照護機構吃光了？（替代方案壓力）

**C — 背景**：主管擔心市場已被看護（外籍 NT$22-35K/月）/ 長照機構 / 社區關懷據點瓜分，本案實際可及市場更小。

**L — 邏輯（3 點）**：
1. **現有解法均有結構性缺口**：看護服務每月 NT$22-35K 外籍 + 仲介費，且人力短缺（照服員 2024 年 10 萬人 vs 長照需求 90 萬人，照顧比 1:9）；社區關懷據點不覆蓋夜間週末；子女每日電話不可持續。這些是替代方案，不是完整解法（lean-canvas.md §1 Block 1 Existing Alternatives）。
2. **付費者（子女）視角看 ROI**：本案 Tier 2 NT$1,290/月 = 家庭月照顧費 NT$22K 的 5.9%。對北漂子女而言，這是「補充安全感」的邊際支出，而非替代看護的全額支出。不少家庭已有看護（22.7 萬外籍），本案功能（AI 對話陪伴 + 子女 dashboard）仍有獨立需求。
3. **照護機構市場和本案目標市場有交集，但不完全重疊**：Hypothesis B B2B2C 就是借助長照機構通路（627 個 A 級個管中心），讓機構成為銷售夥伴而非競爭對手。長照 3.0 補貼讓機構採購本案成為 CAC 降低的加速器（cert-timeline.md §1.2）。

**E — 證據**：照服員成長率從 24.82%→3.99% 趨勢反轉（2022-2024），機構照服員三年下滑 7.24%。長照人力 hard ceiling 已觸頂是 desk-validated 趨勢。外籍看護家庭 22.7 萬戶 2026/01 起可用社區照護，擴大與本案協同使用的潛在族群。

**A — 類比**：Amazon Alexa Together 並不因為 24h 看護服務存在而失去市場——兩者服務不同時段不同需求。本案類似角色：看護服務白天，本案覆蓋夜間 + 情感陪伴 + 子女安心感三個看護填補不到的空白。

**R — 導回**：市場不是被吃光，而是結構性人力缺口正在創造科技切入的空白。B2B2C 通路策略（Hypothesis B）讓機構成為夥伴，放大市場滲透而非與機構競爭。

---

## §B. 商業模式與財務（5 題）

### Q6：NT$1,290/月對台灣中產子女是否太貴？（WTP 假設）

**C — 背景**：主管擔心定價假設未經真實訪談驗證，WTP 可能被高估。

**L — 邏輯（4 框架交叉驗算）**：
1. **家庭照顧費比例**：NT$1,290 = 家庭月照顧費 NT$22K 的 5.9%。Oxford 2016 WTP 學術研究 PPP 調整後，台灣對監測 + 協助類服務的 WTP 約 NT$1,200-1,500/月，本案 Tier 2 精準落在中位。
2. **ElliQ 對標**：ElliQ 美國 USD 29.99-59/月，PPP 調整後台灣對標 NT$914-1,800，本案 NT$1,290 落中段。
3. **Netflix 消費習慣確認**：Persona A（北漂 IT 工作者）月收 NT$80K-110K，已有 Netflix / Spotify 訂閱習慣，NT$1,290 屬於可接受的訂閱支出。「讓父母有人陪」是情感性消費，WTP 比純功能性服務更高（FIU 2024：65% 長者願意使用 AI 陪伴機器人）。
4. **ARPU -15% 敏感性**：即使訪談顯示 WTP 低 15%（月費降至 NT$1,097），單位經濟 LTV:CAC 仍維持 5.28:1（中性情境），不觸發 Pivot（unit-econ.md §9.4）。

**E — 證據**：Tier 1 NT$799 = Oxford PPP 下界（NT$763）以上；Tier 2 NT$1,290 = 四框架交叉中位；若長照 3.0 補貼 NT$60K/3 年申請成功，用戶實際硬體費用降至 NT$0，月費門檻感知大幅降低（pricing.md §3.1）。

**A — 類比**：GrandPad 在美 USD 59-65/月（含 4G + 硬體 + 客服）實際銷售 100 萬用戶，Persona 是同類型 caregiving 子女。本案月費更低，且初期有 Freemium App NT$299/月 試水路徑。

**R — 導回**：WTP 直接訪談（Mom Test × 8 人）已設計完成（pricing.md §4.2 + interview-plan.md），計畫通過後 W6-W9 執行。目前四框架交叉方向一致，訪談結果是 W8 Gate 的關鍵數據節點。

---

### Q7：LTV:CAC 5.95:1 看起來很漂亮，但 CAC NT$5-8K 是 desk 還是真實數字？（unit econ 健康度）

**C — 背景**：主管對「漂亮數字」保持懷疑，尤其擔心 CAC 被低估。

**L — 邏輯（誠實分層呈現）**：
1. **三情境分別誠實標示**：保守（500 台，CAC NT$6,500，LTV:CAC 2.3:1，Year 1 臨界可接受）；中性（5,000 台，長照補貼後 CAC NT$4,000，LTV:CAC 5.95:1，健康）；激進（50,000 台，電信捆綁 CAC NT$2,000，LTV:CAC 13.8:1，優異）。5.95:1 是中性情境，不是預設起點（unit-econ.md §7.2）。
2. **CAC NT$5-8K 的依據**：Facebook 親子社群 CPM + 轉換率的 desk research 推算（lean-canvas.md §1 Block 7）；行業可比基準是 GrandPad / ElliQ 的 B2C DTC 行銷成本比例。此為 🟡 hypothesis，非實際廣告數據。
3. **最壞情境已明確計算**：BOM +20% + 月流失 8% + CAC NT$6,500 + ARPU -15% 四重最壞情境組合 → LTV:CAC 1.81:1（不健康，需 Pivot 或融資補強）。這個數字主管需要知道（unit-econ.md §9.5）。

**E — 證據**：補貼後 CAC 降低路徑：長照 3.0 補貼名單進入後 CAC 預計降低 60-80%（NT$6,500 → NT$1,300-2,600）；B2B2C 機構通路 CAC NT$2,000-12,000/台，LTV:CAC 機構端 54:1（長合約期計算）。電信捆綁是 Year 2+ 的 CAC 結構性降低路徑（unit-econ.md §7.3）。

**A — 類比**：Lumosity 初期 CAC 高，靠 App Store 自然流量 + KOL 逐步降低；本案同樣設計 Freemium App 作為低 CAC NT$300-800 入口，硬體 upsell 稀釋整體 CAC 攤平效果。

**R — 導回**：Series A 需求 NT$7,000-10,000 萬（USD 2.1M-3M）的計算已考慮 Year 1 保守燒錢 NT$760 萬（unit-econ.md §8.3）。CAC 真實數字是 Phase 6 Pilot 後最關鍵的量測指標之一，PMF 量測設計（pmf-report.md §1）已含 AARRR Acquisition 層量測機制。

---

### Q8：5 年 break-even 真的可達嗎？前 3 年燒錢 NT$1.5-3 億，主管能接受嗎？（燒錢 + 募資路徑）

**C — 背景**：主管評估這個計畫是否需要大量外部融資才能活下去，以及燒錢路徑的合理性。

**L — 邏輯（3 情境誠實呈現）**：
1. **三情境 break-even 時程**：保守（100 台/年速度，Month 42-48，Year 4）；中性（補貼名單 Year 1 進入 + App 轉化 3%，Month 30-36，Year 3）；激進（電信捆綁 Year 2 + 2,000 台，Month 24-30）。中性情境 Year 3 是規劃主軸（unit-econ.md §8.2）。
2. **前 3 年燒錢明細**：Year 1 NT$450-760 萬（不是 NT$1.5 億）；Year 1-2 累計 NT$858-1,513 萬。NT$1.5-3 億是 Year 1-5 五年燒錢的累計上限估算，Year 1-2 合理燒錢約 NT$1,000-1,500 萬，仍在正常 seed/pre-A 範圍（unit-econ.md §8.1）。
3. **Series A NT$7,000-10,000 萬用途**：Year 2-3 量產 + 補貼申請 + B2B BD 人力 + ISO 13482 + 台語 ASR fine-tune。不是燒廣告，是規模化必要投資。

**E — 證據**：毛利率改善路徑：Year 1 20-25% → Year 2 47% → Year 3 54%（unit-econ.md §8.1）；關鍵驅動因子是 BOM 從 NT$12,400（500 台）降至 NT$9,560（5,000 台），SaaS 客服成本從 NT$350/用戶/月降至 NT$80（Year 2 規模化）。

**A — 類比**：ElliQ 累計融資 $85M，但靠紐約州 OFA 政府計畫找到 800+ 戶 pilot，才逐步到 2025 年 ARR $35M。本案規模更小，燒錢更保守，政府補貼路徑（長照 3.0）是相同的槓桿邏輯。

**R — 導回**：「主管能不能接受」取決於本次 review 的目的——如果是 go/no-go，重點在 Year 1 NT$760 萬的合理性，而非 5 年總燒錢。Year 1 規劃書 deliverable 是 PMF 訊號（Sean Ellis ≥40%）+ 長照補貼名單申請，而非 ARR 規模。

---

### Q9：Hyp B 機構通路、Hyp C 保險 PMPM，你說 Year 1-3 才做，為什麼不一開始就 push？（多路徑優先序）

**C — 背景**：主管可能覺得多路並行更快，或者擔心資源分散。

**L — 邏輯（機會成本 + 準備條件）**：
1. **Hyp B B2B2C 機構**：採購週期 6-12 月是硬性障礙；補貼名單申請不透明（cert-timeline.md §11）；機構後台開發需額外 NT$50-100 萬（Year 1 H2 才交付）。Year 1 H1 先啟動 BD 接觸（W3），W12 Gate KPI ≥1 家 LOI，Year 2 才交付正式採購——這不是不做，是分期做（lean-canvas.md §4 互斥資源分析）。
2. **Hyp C 保險 PMPM**：需要 TFDA II 類認證前提（24-36 月），台灣保險業對 ICT/AI 接受度低，BD 談判週期 8-12 月，Papa 美國模式靠 Medicare（政府買單）而非商業壽險——台灣結構差異需先有 Pilot 數據再談。Year 3+ 是合理時序，不是放棄（decision-w6.md §6.3）。
3. **先 A+D、後 B、再 C 的邏輯**：Hyp D App 先行建立用戶池（最低 CAC NT$300-800），Hyp A 硬體 DTC 驗證 PMF，Hyp B 靠 A 的 PMF 數據談機構，Hyp C 靠 B 的 RWD 數據談保險。四個 hypothesis 有邏輯依序，不是任意排序。

**E — 證據**：lean-canvas.md §4 互斥資源分析：B2C DTC 銷售 Motion（1-4 週決策）vs 機構採購（6-12 月決策）完全不同，Year 1 同時支撐兩個銷售 Motion 會分散核心工程 + BD 資源；優先序 D → A → B → C 已在 W4 Gate 確認（decision-w4.md §4）。

**A — 類比**：Airbnb 早期只做舊金山（精準 ICP），確認 PMF 後才擴展城市。同理，本案先確認北漂子女 B2C 場景有 PMF，才有充分理由啟動 B2B 機構通路談判。

**R — 導回**：W12 主管 review 的 Hypothesis B 指標是「≥1 家機構 LOI」（lean-canvas.md §3 Block 8），這是規劃書的 W12 Gate KPI，不是被動等待而是主動推進中。

---

### Q10：Pricing 三層 Tier 設計是否會 cannibalize 主力 Pro tier？（Cannibalization 風險）

**C — 背景**：主管擔心 Starter NT$799 與 Pro NT$1,290 之間有重疊，導致用戶選擇低價而非主力 Tier。

**L — 邏輯（3 點差異化設計）**：
1. **功能差距設計明確**：Starter 缺少台語語音識別 + 個人記憶 AI + 每日 AI 摘要推播 + 節日主動話題，這些正是 Persona A（北漂 IT 工作者）最在乎的差異功能。Starter 定位 Persona B（在地中產照顧者，WTP NT$600-900），不與 Persona A 直接競爭（lean-canvas.md §1 Block 6）。
2. **Freemium → Tier 1 → Tier 2 漸進升級路徑**：App Freemium NT$299 是 Starter 的前導，不是替代品。Starter 是從 App 升到硬體 + 基礎訂閱的過渡，Pro 是已有硬體用戶的升級選項。3 層是升級階梯而非平行替代。
3. **台語功能是自然升級動機**：App 版台語語音識別品質明顯劣於硬體版（手機麥克風 vs 專用 4-mic 陣列 + Jetson 邊緣）；父母台語問候頻率越高，子女越有動機升級 Pro 硬體版。這是 Cannibalization 風險最強的緩解設計（lean-canvas.md §2 Cannibalization 風險評估）。

**E — 證據**：Madhavan 9 Rules（pricing.md §2.1）Rule 7 Cannibalization check：Starter vs Pro 差額 NT$491 換多子女帳號 + 台語 + 個人記憶，升級動機清晰。Year 1 主力推 Pro（Tier 2），Starter 作為 Freemium App 升級路徑而非直接硬體主力（unit-econ.md §11 Caveat 2）。

**A — 類比**：Spotify Free → Premium 的 Cannibalization 顧慮最後驗證為推動 conversion 的工具，而非蠶食。Freemium 的目的是降低 trial barrier，而非搶自家 paid 用戶。

**R — 導回**：Tier 1 在 500 台量級下硬體毛利 -24%（不健康），所以 Year 1 主力推 Pro 是財務邏輯和 Cannibalization 防護的雙重理由。定價結構已通過 Madhavan 9 Rules 全部審查（pricing.md §2.1）。

---

## §C. 技術與安全（5 題）

### Q11：跌倒偵測非影像式 ≥80% 召回率 + ≤1/週 false positive 是 desk 假設還是已驗證？（核心技術可行性）

**C — 背景**：緊急偵測是 UVP 核心之一，主管想確認技術指標不是浮誇宣稱。

**L — 邏輯（誠實三層說明）**：
1. **90 天 MVP 規劃書誠實標示：🟡 hypothesis**。非影像式（聲音 + 互動中斷 + PIR 感測）在台灣家庭真實環境的召回率，目前全球無對等規模 desk-validated 數據。規劃書明確標示「規劃目標 ≥80%，待 Phase 5 Pilot 驗證」（safety-redlines.md §1.3 Plan-Only 紅線 P1）。
2. **技術路徑可行**：Layer 2 rule-based 守門器（聲音突增 + 長時間靜止 + 互動中斷 >30 分鐘）+ 3 層確認機制（AI 詢問 → 子女 App 通知 → 備援聯絡人）。非影像式設計動機是 PDPA §6（生物特徵屬特種個資）+ 老人隱私文化接受度，這是設計上的必要選擇，不是取巧迴避。
3. **不宣稱準確率是 TFDA 紅線**：若宣稱具體跌倒偵測召回率數字，將觸發 TFDA II 類醫療器材認證要求（cert-timeline.md §1.3）。MVP 定位「輔助通知，不宣稱診斷」——這是合規設計，不是迴避品質問題（safety-redlines.md §2.11 C2）。

**E — 證據**：Phase 5 Pilot 計畫含 ≥3 次假緊急事件演習（safety-redlines.md §5.1），記錄 false positive 率和系統響應時間；田野測試計畫（嘉義 / 南投 / 屏東 3 類型住家，麥克風陣列拾音）在 pilot-recruitment.md §1.1 假設 3 驗證設計中列出。

**A — 類比**：ElliQ 的緊急功能同樣是「主動詢問 + 多層通知」而非「精準醫療偵測」，ElliQ 也未公開召回率數字。目的是「及時通知家屬採取行動」而非「替代 119 急救判斷」。

**R — 導回**：技術可行性最重要的指標是 Phase 5 Sprint 3 假事件演習結果，計畫通過後 W9-W12 取得初步真實數據。現在誠實標示 🟡，計畫通過後升 ✅。

---

### Q12：依賴 OpenAI / Anthropic API 是否有 vendor lock-in 風險？台灣 PDPA 怎麼解？（技術 + 法規）

**C — 背景**：主管可能擔心 API 依賴導致成本失控，以及長者對話資料出境的法規風險。

**L — 邏輯（3 點緩解設計）**：
1. **Vendor lock-in 緩解：三層混合架構**：Layer 1 雲端（GPT-4o-mini 主，路徑 C 混合）+ Layer 2 台灣本地邊緣（rule-based 守門，Python，零 API 依賴）+ Layer 3 端側（Porcupine wake word，完全離線）。Year 2 開源 LLM（Llama-3 8B / Qwen-2.5 14B）比例提升至 30-50%，降低雲端 API 佔比（tech-architecture.md §0）。LLM API 成本崩塌本身是保護：GPT-4o-mini 已降至 USD 0.15/M tokens，即使 OpenAI 漲價仍可切 Anthropic / Gemini / 開源選項。
2. **PDPA 跨境傳輸合規路徑**：三層資料分類——原始語音 100% 端側不出境；對話文字摘要過境需三方同意書（長者語音 + 子女書面 + 見證）+ 跨境傳輸同意；GCP asia-east1 台灣節點部署 Layer 2/3（tech-architecture.md §4.2）。DPIA 計畫在 W4 前由理慈 / 萬國 / 普華律師完成。
3. **AI 基本法 2025/12 不確定性**：子法規未公布是最高不確定性（cert-timeline.md §11）。老年陪伴 + 緊急偵測組合可能被列「高風險 AI 系統」。緩解方案：90 天 MVP App 形態設計繞開硬體認證；架構保留「路徑切換到台智雲 FFM / 開源 Llama 本地部署」的備案（decision-w6.md §3 Pivot C Option）。

**E — 證據**：LLM API 成本降幅：GPT-4 USD 60/M tokens（2023/3）→ GPT-4o-mini USD 0.15-0.60/M（2024/7）= 94.5% 降幅（problem-framing.md §1.5 趨勢 2）。每用戶每月 AI Brain 雲端成本 NT$200（中性情境），即使 API 漲價 3×，月費仍有 56% SaaS 毛利（unit-econ.md §7.2）。

**A — 類比**：Notion / Linear 等 SaaS 工具均依賴 AWS / GCP，但通過多區域部署 + 本地 export 功能降低 lock-in 風險。本案同樣設計「離線核心功能（觸發詞 + 離線問候）即使雲端中斷也可運作」（safety-redlines.md §3.4 Jibo 教訓應用）。

**R — 導回**：Vendor lock-in 和 PDPA 都是已規劃緩解的已知風險，不是未知盲區。PDPA 律師 sign-off 計畫在 Phase 5 Sprint 前完成（cert-timeline.md §2.2）。

---

### Q13：台語 ASR 進階版需要多久能達到 ≥85% 準確率？（在地化技術門檻）

**C — 背景**：台語支援是差異化核心，主管想知道技術可行性和時程。

**L — 邏輯（3 個階段性目標）**：
1. **90 天 MVP：基礎台語問候，不宣稱準確率**。Google Cloud STT 台語初版 + 白名單式基礎問候詞（約 30-50 句），目標讓長者感受「有台語」，不要求完整對話。準確率預計 55-65%（desk 推算 🟡）。
2. **Year 1 H2（M6-12）：Whisper 台語 ASR fine-tune 啟動**。使用 Pilot 收集的台灣長者台語語料（10-20 戶 × 4 週對話）+ 台語學術語料庫（台大台語語音資料庫、成大台語研究語料）+ 眾包標注，目標 Year 1 末達 70-75% 準確率（tech-architecture.md §0 Year 1 路線）。
3. **Year 2（≥85% 目標）**：1,000+ 戶用戶對話語料 → Whisper large-v3 fine-tune 台語模型；估計 GPU 算力 + 標注費用 NT$200 萬（unit-econ.md §8.3 技術研發項）。此為 🟡 hypothesis，實際時程依語料量和標注品質而定。

**E — 證據**：ElliQ 同樣無台語，且 2026 進日本版也只針對日語，台語場景全球空白。台大 / 成大已有學術台語語料庫，但規模小且非長者對話域。本案商業語料庫將是第一個大規模台灣長者台語 AI 對話語料庫（lean-canvas.md §1 Block 9 資料護城河）。

**A — 類比**：Siri 台語支援 2023 才推出，仍不完整；Google 台語 STT 準確率在偏鄉長者腔調下明顯下降。學術研究顯示 domain-specific fine-tune（長者腔調 + 特定詞彙）可在 2-3 萬句語料後顯著提升準確率（cert-timeline.md §12.1 Phase 5 Fairness Audit）。

**R — 導回**：台語 ASR 是技術風險最高的一項，規劃書誠實標示分三階段。90 天 MVP 保守啟用（基礎問候），Year 2 達 85% 目標——不是「已解決」而是「有路徑解決」。

---

### Q14：Safety 紅線 19 條真的足夠嗎？Vulnerable population 倫理風險主管會問什麼？（Safety 深度）

**C — 背景**：服務 70-82 歲認知可能退化的長者，任何 AI 輸出錯誤都是高風險。主管會問三件事：夠不夠嚴格？誰負責？出事怎麼辦？

**L — 邏輯（三層紅線架構 + 責任清單）**：
1. **三層紅線架構（10 條絕對 + 6 條條件 + 3 條 Plan-Only）**：10 條絕對紅線（N1-N10）永不觸碰——醫療診斷 / 投藥建議 / 急救決策 / 心理診斷 / 法律建議 / 投資建議 / 宗教勸誡 / 代理簽署 / 雲端影像 / 商業推銷；6 條條件紅線（C1-C6）需護欄才可執行（safety-redlines.md §1）。每條紅線有 8 維度設計：法規依據 / LLM Guardrail / UX 防護 / 責任歸屬 / WoZ 降階處理。
2. **倫理風險特殊設計**：Surveillance Creep（監控蔓延）+ Social Replacement（取代真人陪伴）是本案場景特有的兩條補充紅線（safety-redlines.md §2.12）。子女端監控型功能（活動摘要）預設關閉，長者書面同意後才開啟；AI 設計內建「7 天無真人互動 → 主動促進真人連結」機制。
3. **責任歸屬框架**：公司 / 長者 / 子女 / 機構 / 醫師 / 政府 6 大 stakeholder 責任清單（safety-redlines.md §3.1）；LLM 幻覺責任分配；5 項危機應變 SOP（跌倒 / 自殺風險 / 長者過世 / 機器故障 / 子女失聯）。MCI 長者需三方同意（長者語音 + 子女書面 + 第三方見證）（safety-redlines.md §6.1）。

**E — 證據**：台灣老年自殺率是全年齡最高族群（衛福部心口司）；AI 幻覺醫療誤導是全球 AI 安全首要風險；消保法 §7-1 舉證倒置（廠商自證無過失）是台灣法規下的高責任標準。19 條不是「夠不夠」的問題，而是「每條都有 LLM Guardrail + UX 防護 + 責任歸屬」的完整框架。

**A — 類比**：Replika 2023 年義大利關閉事件（AI 伴侶影響脆弱用戶心理健康）是直接教訓。本案 C5 條件紅線明確規定「出現自傷信號必立刻 handoff 真人 + 提供 1925 / 1995 安心專線」，並非僅靠 LLM 處理。

**R — 導回**：Safety 設計是「讓主管放心 go/no-go」的前提，不是附屬功能。紅線框架設計已對應台灣法規 ≥20 條具體條文（problem-framing.md §3.5），計畫通過後 Phase 5 Sprint 1 Week 2 前完成所有 LLM Guardrail 部署。

---

### Q15：Wizard-of-Oz 平板形態到正式硬體 ODM 量產，真的可以在 Year 1 完成嗎？（量產可行性）

**C — 背景**：主管擔心 WoZ 到 ODM 的跨越被低估，台灣 ODM 首次機器人案可能有大量未知坑。

**L — 邏輯（誠實分兩段）**：
1. **90 天 WoZ 確定可行**：iPad / Samsung Tab S9 FE 已有 BSMI；ReSpeaker USB 麥克風陣列現貨可採；BOM NT$18,000（unit-econ.md §1.2）；零自製硬體、零認證風險。這段 100% desk-validated。
2. **Year 1 H2 ODM 是 Critical Path，有已知風險**：BSMI 認證 6-9 月（送件 M5-6，取得 M9-12，unit-econ.md §3.2 甘特圖）；首批 50 台試產良率風險 <85%（unit-econ.md §10.1）；NRE + 模具 NT$430-710 萬一次性費用；Jetson Orin Nano 供應鏈風險（備援 NXX i.MX8M Plus）。這些都是已知風險、有緩解方案，但不是零風險。
3. **Year 1 H2 ODM 時程壓力明確**：若 BSMI 延遲超過 9 月，ODM 硬體上市延至 Year 2；WoZ 平板形態延長運行。這個風險已在 unit-econ.md §10.2 + cert-timeline.md §12 明確量化，計畫通過後 M1 即開始 BSMI 送件準備。

**E — 證據**：台灣 ODM 生態：鴻海 / 廣達 / 仁寶 / 緯創，小量試產（50 台）具備能力，已有 ASUS 合作夥伴等先例（build-vs-buy.md §2.2.2）；Jetson Orin Nano 台灣合法採購無障礙（2025 出口管制不影響台灣，unit-econ.md §1.4）。

**A — 類比**：GrandPad 從 App 到硬體設備花了 2 年時間建立 ODM 供應鏈。本案 WoZ → ODM 是更保守的做法（先 App 驗證 PMF，再 ODM），比從零到硬體更穩健。

**R — 導回**：計畫通過後 M1 啟動 BSMI + NCC + 長照補貼名單三條申請路徑並行（cert-timeline.md §2.2），不等 WoZ 期結束才啟動。Year 1 末目標是 BSMI 取得 + 首批 50 台試產，Year 2 H1 正式量產，時序可行但 Critical Path 緊，不容延誤。

---

## §D. 法規與認證（3 題）

### Q16：PDPA 2025/12 修訂版 + AI 基本法 子法規未明，怎麼確保 Year 1-2 啟動不違法？（法規不確定性）

**C — 背景**：主管擔心法規不確定性成為阻礙，或者未來子法規要求架構大改。

**L — 邏輯（分兩個法規獨立討論）**：
1. **PDPA 2025/12：路徑清晰，可執行**。關鍵設計：原始語音 100% 端側不出境；對話文字摘要過境需三方同意（long者語音 + 子女書面 + 見證）；GCP asia-east1 台灣節點部署；DPIA 在 W4 前律師完成。2025/8 正式成立的個人資料保護委員會（PDPC）是主管機關，違規最高 NT$1,500 萬 + 停止使用（cert-timeline.md §1.1）。這條路徑已有律師可執行清單，不是未知。
2. **AI 基本法 2025/12：子法規未公布是高不確定性，但 90 天 App 形態已規避**。草案核心：透明性義務 / 高風險 AI 分級 / 演算法影響評估。若老年陪伴 + 緊急偵測被列「高風險 AI 系統」，可能要求技術架構調整（cert-timeline.md §11）。緩解設計：90 天 MVP App 形態嚴守「陪伴輔助工具，不宣稱醫療功能」；子法規一旦公布立刻做合規評估；備案是 AI Brain 路徑 C 切換到台智雲 FFM / 開源 Llama 本地部署（decision-w6.md §3 Pivot C Option）。
3. **持續追蹤機制**：W4 前律師 AI 基本法 readiness 評估（理慈 / 萬國 / 普華）；每月追蹤子法規動態；Phase 4 功能標記機制確保新功能在上線前做監管再確認。

**E — 證據**：PDPA §6 生物特徵屬特種個資（長者語音識別 pattern 可能觸發），端側設計是合規必要選擇，不是產品偏好（tech-architecture.md §4.2）；TFDA 37 件 AI/ML 醫材 2023 已核准，監管框架存在但長者陪伴 AI 尚無直接先例（problem-framing.md §2.2.4）。

**A — 類比**：歐盟 GDPR 2018 年施行前，大量公司靠「Privacy by Design」原則先行合規，等子法規細則後調整細部。本案同樣採 Privacy by Design 三層設計，子法規出來後局部調整，不是從零重來。

**R — 導回**：法規不確定性是已知風險，不是隱藏風險。計畫通過後立刻啟動律師評估 + DPIA，Year 1 所有對外功能上線前過律師 sign-off 關卡。

---

### Q17：TFDA II 類認證 Year 2-3 才取得，但「跌倒偵測」是否涉醫療？前 2 年怎麼宣稱？（醫療法邊界）

**C — 背景**：這是最微妙的法規問題——跌倒偵測到底算不算醫療器材？如何在合規邊界內宣稱 UVP？

**L — 邏輯（三條邊界線）**：
1. **TFDA 分類觸發條件**：若功能宣稱「跌倒偵測準確率 X%」→ 觸發 TFDA II 類認證（cert-timeline.md §1.3）；若定位「輔助通知，不宣稱診斷 / 準確率」→ 不觸發。這是一條清晰的宣稱邊界，不是灰色地帶。
2. **前 2 年的合規宣稱語言**：可說「偵測到異常時 5 分鐘內通知家屬」（行為描述）；不可說「跌倒偵測 ≥80% 準確率」（性能宣稱）；可說「AI 輔助安全提醒，讓家屬更安心」（用途描述）；不可說「預防跌倒 / 降低跌倒傷害率」（醫療效果宣稱）。廣告文案在 Phase 5 上線前需律師 sign-off（消保法 §22 廣告不得虛偽不實）。
3. **Year 2-3 TFDA II 類認證路徑**：Phase 6 Pilot（W13+）的 RWD 資料是 TFDA 認證申請的核心材料；Year 2 啟動臨床資料收集，Year 3 H1 正式申請（cert-timeline.md §1.3）。TFDA 認證取得後，可在 Hypothesis C 保險 PMPM 宣稱跌倒偵測性能，並進入長照給付談判。

**E — 證據**：safety-redlines.md §1.3 Plan-Only 紅線 P1「所有緊急偵測宣稱禁稱已驗證準確率」；cert-timeline.md §1.3「跌倒偵測宣稱準確率 = 觸發 TFDA II 類，24-36 月審查」；醫療法 §103-1「未取得許可不得宣稱醫療效能」。

**A — 類比**：Apple Watch 早期「心率監測」定位是健康參考工具，後來取得 FDA 認證才宣稱「心房顫動偵測」醫療功能。分兩段走是業界標準做法，不是迴避監管。

**R — 導回**：前 2 年用「輔助通知，讓家屬更安心」語言合規宣稱；Year 3+ 取得 TFDA II 類後升級宣稱語言，同時解鎖 Hypothesis C 保險 PMPM 通路。設計已做到最大化合規邊界內的 UVP 說服力。

---

### Q18：長照 3.0 智慧輔具補貼名單，申請成功率 + 競爭怎麼樣？（補貼依賴度）

**C — 背景**：主管擔心商業模式對政府補貼的依賴度，若補貼名單申請失敗或延遲，CAC 怎麼辦？

**L — 邏輯（3 點誠實評估）**：
1. **補貼是 CAC 降低的加速器，不是必要前提**：Hypothesis A B2C DTC 不依賴補貼可獨立運行（CAC NT$6,500，LTV:CAC 2.3:1，Year 1 臨界可接受）。補貼後 CAC 降至 NT$2,600，LTV:CAC 升至 5.95:1（健康）。補貼加速，不補貼也可以推進（unit-econ.md §9.3 CAC 敏感性分析）。
2. **申請成功率是 🟡 hypothesis**：長照 3.0 補貼名單審查條件不透明（cert-timeline.md §11 卡關項）。目前已知：2026/07 開放申請；5 類「安全看視」輔具涵蓋本案場景；申請需要技術規格 + 安全認證 + 初步使用資料。Year 1 H1 啟動衛福部長照司接觸（透過 Ankecare 長照展會），確認申請條件，是 W3 即啟動的 BD 工作（cert-timeline.md §2.2）。
3. **若補貼名單申請延遲 >12 月**：Hypothesis A DTC 主軸不受影響；Hypothesis B B2B2C 機構通路受影響（機構採購誘因降低）。緩解方案：B2B2C 不以補貼為必要前提，先以「Pilot 機構免費試用 → LOI → 機構自付費」路徑推進（lean-canvas.md §3 B2B2C Canvas）。

**E — 證據**：補貼規模 NT$60K/3 年（≈ NT$20K/年）；長照 3.0 2026/07 Phase III 啟動（problem-framing.md §1.5 趨勢 3）；台灣現有 1,000+ 長照機構已在用智慧系統，政府有政策推動需求（lean-canvas.md §3 Block 1）。

**A — 類比**：ElliQ 在美依賴紐約州 OFA 計畫補貼推廣 800 戶，但 B2G 模式讓其有政府背書；本案長照補貼路徑類似，不同在台灣補貼走「智慧輔具」而非「機器人服務費」。

**R — 導回**：Year 1 H1 補貼名單接觸工作已在計畫時序中（W3 啟動），不是等審計通過才開始接觸。申請材料包含 Phase 6 Pilot 的 RWD 數據（補貼申請和 TFDA II 類申請材料重疊），一份資料雙用。

---

## §E. 內部 Alignment（2 題）

### Q19：你為什麼帶這份規劃書給我（華碩 AI 代理人 / 服務型機器人主管）？想要什麼支援？（Ask 對齊）

**C — 背景**：主管需要知道這次 review 的目的是什麼，以及你期望他做什麼決定 / 給什麼支援。

**L — 邏輯（誠實說清楚 Ask）**：
1. **核心 Ask：Go / No-Go 決策支援**。這份規劃書是「90 天 MVP 落地可行性 + 商業模式設計」的完整規劃文件，希望主管評估：技術路徑是否合理？市場判斷是否有重大遺漏？商業模式假設是否可接受？這不是一個「請 ASUS 投資 / 合作」的 pitch，而是一個「請主管用專業視角幫助確認規劃方向」的 review。
2. **我需要的主管輸入**（非強制）：若主管對台灣服務型機器人市場有 desk research 以外的洞察（如 ASUS 內部做過的 Zenbo 用戶研究、台灣長者接受度實測），任何補充對規劃書提升都有幫助。若主管認為某個假設嚴重有問題，現在指出比 W12 後再調整要好。
3. **沒有隱藏議程**。不是來談 OEM、不是來談授權、不是來談合作投資。規劃書目的就是：做出來、讓你看、取得你的意見、決定下一步。（phase-0-answers.md §報告對象特殊考量）

**E — 證據**：phase-0-answers.md 明確校準：「Demo 對象 = 華碩 AI 代理人 / 服務型機器人主管 1 位；tone 走向主管說明 + 取得 go/no-go；避免 ASUS Zenbo Junior II 數據錯誤（主管是產品線 owner）；對 ASUS 相關段落客觀中立」。

**A — 類比**：Google X 在內部孵化新項目時，也是先向部門主管做規劃 review，不是直接上線。這份規劃書是相同角色的內部 review 文件。

**R — 導回**：主管 review 結束後，希望得到的 output 是：（1）認為規劃方向可接受 → 計畫啟動；（2）有重大假設需調整 → 更新規劃書後再 review；（3）方向根本不對 → 說清楚哪裡不對，避免在錯誤方向上浪費資源。任何 output 對規劃者來說都比「沒有明確 feedback」更有價值。

---

### Q20：90 天規劃做得這麼完整，你下一步真的會去執行嗎？團隊配置 + 時程表怎麼安排？（執行力可信度）

**C — 背景**：主管擔心規劃書很漂亮但執行力不足，或者 Plan-Only Mode 的規劃與實際執行之間存在落差。

**L — 邏輯（3 點建立可信度）**：
1. **執行路徑設計具體，不是空話**：Sprint 1-4 規格書（sprint-1-2-spec.md / sprint-3-spec.md / sprint-4-spec.md）已拆解到 feature 層級；Phase 6 Pilot 招募設計書（pilot-recruitment.md）已設計 5 面向招募策略 + funnel + 預算 NT$95-160 萬；PMF 量測機制（pmf-report.md）已設計 5 大框架 + 量測工具 + 節奏。計畫通過後 W1 可立刻啟動，不是從零開始。
2. **團隊配置規劃（📋 post-approval）**：核心 3-5 人——工程 × 2（AI/backend + iOS/Android）+ PM × 1 + BD / 客服 × 1；Year 1 薪資 NT$300-500 萬（unit-econ.md §8.1）。不是「未來會找人」，而是「計畫通過後 W1-W2 啟動招募」的具體下一步。
3. **W12 Gate 設計是問責機制**：Plan-Only 規劃書不是「規劃完就算」，而是設計了 W6 Gate（Phase 4 完成後）+ W12 Gate（Phase 5-6 後）兩個評估節點，每個 Gate 有具體 KPI（decision-w6.md §7）。若 W6 前機構 LOI ≥2，Hypothesis B 升主軸；若 PMF 達 Sean Ellis ≥40%，啟動 Scale 評估。主管今天的 go/no-go 是第一個 Gate。

**E — 證據**：規劃書文件 14 份，涵蓋 Phase 0.5-7 全部 deliverable；W6 Gate 自主推進，決策框架設計在 decision-w6.md（含 4 個 P/P/K/S 選項 + 5 個假設驗證狀態 + Phase 5-8 明確輸入規格）；pmf-report.md 設計 Sean Ellis + Retention Curve + NPS + HEART + AARRR 五框架量測機制，計畫通過後可立刻實施。

**A — 類比**：Y Combinator 審查創業計畫時，最看重「founder 為什麼是這個人」+ 「執行路徑是否真實可行」兩點。規劃書的密度（14 份文件 × 完整框架）本身就是執行意志的信號。

**R — 導回**：「下一步」非常具體：主管 review 後 7 天內給 feedback（§5 follow-up 機制）；計畫通過後 W1 啟動律師 DPIA + BSMI 準備 + ODM 詢價三條並行。不是等「有人給資源」才開始，而是「從 Phase 0.5 到 W12 Gate 的完整 roadmap 已就位，缺的是 go/no-go」。

---

## §3. 殺手鐧題目處理 SOP

若主管問超出 Top 20 範圍的問題：

**策略 A — 誠實承認 + 承諾 follow-up**（最優先選項）：
> 「這個問題我目前手上沒有 desk-validated 答案，這是 Phase 6 Pilot 後可以驗證的項目。我可以在 review 結束後 48 小時內找到更完整的資料給你。」

**策略 B — 指向文件的具體章節**：
> 「規劃書 docs/[X.md] 第 N 節有更深的 desk research，今天來不及展開，我可以單獨 pull 出來給你。」

**策略 C — 導回 Gate 設計**：
> 「這個問題的答案取決於 W12 Pilot 後的數據。我們在 decision-w4.md §5 已設計了明確的 Pivot 觸發條件，如果假設被破壞，對應 Pivot 方向是...」

**絕對禁止**：
- 對不確定的數字裝作確定（「大概應該是...」後面接一個沒有依據的估算）
- 承諾做不到的時程（「我們明天就可以...」）
- 貶低 ASUS Zenbo 或其他 ASUS 產品（主管可能是 owner）

---

## §4. 主管反饋 Follow-up 機制

### Review 後 7 天內 Follow-up
- Review 當天：感謝 + 附上規劃書 GitHub Page 連結 + 確認 feedback 要點
- Review 後 3 天：整理主管 feedback → 文件更新版本 → 送回確認
- Review 後 7 天：若主管對某個問題需要更多資料，提供對應文件章節 + 補充說明

### W12 Update Meeting 邀請
> 「計畫通過後 W12 Gate（約 3 個月後），我們的 Pilot PMF 結果、Hypothesis B 機構 LOI 狀態、以及 Series A 方向會有更清晰的面貌。如果主管有興趣，歡迎 W12 再做一次 30 分鐘 update——您的持續 feedback 對規劃的修正很有價值。」

### 持續 Weekly Digest（主管同意才推送）
- 若主管同意：每週一封 Email，1 頁 A4，涵蓋：本週完成的里程碑 / 下週計畫 / 需要 input 的決策點。不是行銷郵件，是執行透明度回報。

---

## §5. 對 T50 GitHub Page / T51 主管 review 規劃書銜接

### T50 GitHub Page 渲染規則
- 本 Q&A 文件在 GitHub Page 渲染時：
  - 剝離 ✅/🟡/📋 標籤（依 phase-0-answers.md §對外網頁紀律）
  - 「Plan-Only 規劃，待驗證」字樣改寫為「規劃設計，Phase 6 後確認」
  - 「Wizard-of-Oz」改稱「平板驗證形態」（禁用內部術語）
  - 保留具體數字（LTV:CAC / 月費 / BOM 等）——這是主管看規劃書的核心

### T51 主管 Review 規劃書展示優先序
1. Q19（Ask 對齊）— 開場必說，確認 review 目的
2. Q3（ASUS 重疊度）— 最敏感，主動先處理
3. Q11（跌倒偵測）— UVP 核心，誠實標示 🟡 最重要
4. Q7（LTV:CAC）— 財務健康度，誠實呈現三情境
5. Q16（法規）— 主管必問，設計完備是加分點

---

## §6. Coverage Matrix

| 主題 | 涵蓋題數 | 題號 | 說明 |
|---|---|---|---|
| **市場與競品** | 5 | Q1-Q5 | 市場驗證 / 差異化 / ASUS 重疊 / 護城河 / 替代方案壓力 |
| **商業模式與財務** | 5 | Q6-Q10 | WTP / LTV:CAC / Break-even / 多路徑 / Cannibalization |
| **技術與安全** | 5 | Q11-Q15 | 跌倒偵測 / Vendor lock-in + PDPA / 台語 ASR / Safety 深度 / 量產 |
| **法規與認證** | 3 | Q16-Q18 | 法規不確定性 / 醫療法邊界 / 補貼依賴度 |
| **內部 Alignment** | 2 | Q19-Q20 | Ask 對齊 / 執行力可信度 |
| **合計** | **20** | Q1-Q20 | 全覆蓋 |

| CLEAR 元素 | 每題是否涵蓋 |
|---|---|
| C — Context（問題背景） | ✅ 20/20 題 |
| L — Logic（邏輯結構 1-3 點）| ✅ 20/20 題 |
| E — Evidence（具體數字 + source）| ✅ 20/20 題 |
| A — Analogy（國際案例類比）| ✅ 20/20 題 |
| R — Redirect（導回優勢）| ✅ 20/20 題 |

---

## §7. Sources

| Source 文件 | 引用主題 |
|---|---|
| `problem-framing.md` §1-§4 | TAM/SAM/SOM / 競品 deep dive / 倫理風險 / Why Now |
| `phase-0.5-deconstruction.md` §5 | Hypothesis A/B/C/D Lean Canvas 原型 / 5 大假設 |
| `decision-w6.md` §1-§7 | W6 Gate 評分 / Hypothesis 評估 / Phase 5-8 輸入 |
| `lean-canvas.md` §1-§4 | 三 Canvas 整合 / 護城河 4 維 / 切換 trigger |
| `unit-econ.md` §1-§13 | BOM 四階段 / LTV:CAC 三情境 / 敏感性分析 / Series A |
| `safety-redlines.md` §1-§6 | 三層紅線 / 8 維度深化 / 責任歸屬 / 5 項危機 SOP |
| `cert-timeline.md` §1-§12 | 認證甘特圖 / AI 基本法不確定性 / TFDA II 類路徑 |
| `tech-architecture.md` §0-§4 | AI Brain 三層架構 / 隱私三層分類 / Year 1-3 演進 |
| `pmf-report.md` §0-§1 | Sean Ellis 設計 / Retention Curve / 5 大 PMF 框架 |
| `pilot-recruitment.md` §0-§1 | Pilot 招募設計 / 5 面向策略 / 三方同意機制 |
| `phase-0-answers.md` | Plan-Only Mode 校準 / 報告對象特殊考量 / 對外渲染紀律 |
| ElliQ / Intuitionrobotics.com | 美國 B2C 陪伴機器人先例（SAM 類比 / 功能缺口） |
| FIU 2024 Survey | 65% 長者願意使用 AI 陪伴機器人 |
| Oxford 2016 WTP 學術研究 | NT$1,200-1,500/月 WTP PPP 調整基準 |
| 衛福部 2018 長照調查 | 31.77% 上班中照顧子女 = 北漂遠距照顧場景核心 |

---

> **文件狀態**：✅ Phase 7 T48 Top 20 主管 Q&A 完成
> **下一步**：T50 GitHub Page 前端渲染（對外版本剝離內部標籤）+ T51 主管 review 準備（Q3 / Q11 / Q19 重點先開口說）
> **Plan-Only 提醒**：所有 🟡 數字是 desk research 假設，計畫通過後 Phase 6 Pilot 升 ✅；所有 📋 項目是計畫通過後執行事項
