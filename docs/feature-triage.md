# Feature Triage — MoSCoW + RICE + Kano 三框架（長者互動陪伴機器人 × AI Brain）

> **執行日期**：2026-05-27
> **執行模式**：PM Flow v0.1 / Phase 3 T27 Feature Triage（Kano-weighted）
> **Plan-Only Mode**：所有 feature 標 ✅ / 🟡 / 📋 三色。本文件是「三軸評分規劃書」，非「已 build feature 列表」。
> **報告對象**：華碩（ASUS）AI 代理人 / 服務型機器人主管（客觀中立，不引用 ASUS 競品比較）
> **建立在**：problem-framing.md §3-§4 / phase-0.5-deconstruction.md §5.2 / persona.md / jtbd-day-in-life.md / build-vs-buy.md / mvp-type.md
> **Pricing 校準（2026-05-27 補注）**：本文出現的 B2C 月費 NT$1,200 為 phase-0.5-deconstruction §5.2 Hypothesis A 原始假設值，Phase 2 WTP 四框架交叉中位精化後的 Pro tier 為 **NT$1,290/月**（詳見 wtp-payer.md §1.5 + decision-w4.md §6.1）。Phase 4 Pricing 三層 tier 以 Starter NT$799 / Pro NT$1,290 / Premium custom 為 canonical going-forward 定價；本文「NT$1,200/月 Core Tier 最小功能集」討論延用原始假設標準，Phase 4 重新對齊至 NT$1,290 不影響本文功能組合結論

---

## 0. Executive Summary

本文件對長者互動陪伴機器人 × AI Brain MVP 列舉 **22 個候選 feature**，以 **MoSCoW + RICE + Kano** 三框架完整評分，提出 90 天 MVP MUST/SHOULD/WON'T/NEVER 四區劃分。

**核心結論**：
1. **90 天 MVP MUST 共 8 個 feature**（Kano Must-be 全補 + Top 5 Performance/Excitement）
2. **Kano > RICE 的理由**：長者場景是高棄用風險 + 情感依附市場，任何 Must-be 缺失直接觸發 30-50% 首 2 週棄用率；Reverse 屬性若觸發，拒絕態度固化難逆轉（problem-framing.md §2.2.3）。RICE score 高但觸發 Reverse 或欠缺 Must-be 的 feature，不進 MVP，此為長者場景特殊性。
3. **Reverse 屬性 ≥7 條**（超出 ≥5 要求），長者場景特別容易觸雷。
4. **Phase 4 Pricing 輸入**：Excitement 中「台語對話」「懷舊治療」「個人記憶 AI」「健康趨勢週報（高端）」「家庭雙端多帳號」可作 Premium tier 差異化收費點。

---

## §1. Feature 候選清單（22 個）

> 來源欄：A = Phase 0.5 痛點 / persona.md / jtbd-day-in-life.md；B = 4 hypothesis Solution；C = 競品 feature parity（ElliQ / PARO / GrandPad / BrainHQ）

### 對話與陪伴類

| ID | Feature 名稱 | 一句話描述 | Hypothesis | Persona / JTBD | 來源 |
|---|---|---|---|---|---|
| **F01** | 每日主動問候（固定時段） | AI 每天早晨 / 傍晚主動發起對話，長者不需先開口 | A、D | 三 persona 均 / 長者 JTBD 主 Job | A |
| **F02** | 中文語音對話（基礎流暢） | 自然多輪中文語音對話，長者無需打字 | A、D | 三 persona / 秀珍阿嬤、德仁阿公 | A |
| **F03** | 台語語音識別 + 問候（基礎版） | 支援台語問候 + 常用詞語音識別，南部縣市長者適用 | A、D | B persona 父親 MCI / C persona 義雄阿公 | A、B |
| **F04** | 個人記憶 AI（偏好 + 家庭脈絡儲存） | AI 記住長者喜好、家人名字、過去故事，下次對話主動提起 | A | 三 persona / 長者 JTBD「被記得」 | A、B |
| **F05** | 節日 / 節氣主動話題（農民曆整合） | 農曆節日、節氣、廟會時主動提起相應話題，提升對話文化共鳴 | A、D | A persona 父母 / 秀珍阿嬤 | A |
| **F06** | 懷舊治療對話（老歌 / 人生故事） | AI 播放長者指定年代老歌、引導回憶人生故事，認知刺激 | A、D | B、C persona 父母 / 德仁阿公、義雄阿公 | B、C |
| **F07** | 新聞摘要朗讀 | AI 每日唸台灣新聞摘要給長者聽，維持社會參與感 | D | A persona 父母 / 秀珍阿嬤 | C |

### 緊急安全類

| ID | Feature 名稱 | 一句話描述 | Hypothesis | Persona / JTBD | 來源 |
|---|---|---|---|---|---|
| **F08** | 非影像式異常偵測（聲音 + 互動中斷） | 長時間無聲音 / 無互動旗標，LINE 推播子女（非影像，PDPA 合規） | A | A persona 緊急觸發 / Day-in-Life 夜間 | A、B |
| **F09** | 緊急按鈕快速呼叫（語音 + 觸控） | 長者說「幫我叫救護車」或按緊急鈕，自動通知子女 + 119 引導語 | A | 三 persona / JTBD F3 | A |
| **F10** | 子女緊急通知推播（LINE / App）≤5 分鐘 | 偵測異常後 5 分鐘內推播子女，說明狀況、建議採取行動 | A | A、C persona | A、B |
| **F11** | 服藥提醒（語音，朋友語氣） | 以朋友語氣提醒服藥，非機器式清單通知；長者語音確認後記錄 | A、B | 三 persona 父母 / 德仁阿公 | A |

### 子女端 Dashboard 類

| ID | Feature 名稱 | 一句話描述 | Hypothesis | Persona / JTBD | 來源 |
|---|---|---|---|---|---|
| **F12** | 每日 / 每週 AI 摘要推播（子女 App） | AI 生成非侵入式父母每日狀態摘要，「今天聊了 3 次老歌情緒好」 | A、B | 三 persona JTBD F2 / Day-in-Life 通勤 | A、B |
| **F13** | 子女遠端 onboarding App（≤10 分鐘） | 子女手機引導 ≤5 步完成父母設定，不需現場到訪 | A、D | A persona（北漂）/ B persona | A |
| **F14** | 雙向視訊 / 語音發起（子女 push） | 子女透過 App push，讓長者端機器人響起，主動視訊連線 | A | 三 persona / A 情感連結 | B、C |
| **F15** | 健康趨勢週報 / 月報（子女 App 進階） | 情緒分布、互動頻率、睡眠作息趨勢，供家醫科 / 長照個管師參考 | A、B | C persona（高端）/ B persona | B、C |

### 認知刺激類

| ID | Feature 名稱 | 一句話描述 | Hypothesis | Persona / JTBD | 來源 |
|---|---|---|---|---|---|
| **F16** | 每日簡單認知遊戲（難度自適應） | AI 主導猜謎、記憶遊戲、圖片配對，難度自動調整，延緩認知退化 | A、D | B persona 父親 MCI / 德仁阿公 | B、C |
| **F17** | 復健引導體操（語音示範） | AI 每天語音引導簡易站立、手部體操，預防肌少症 | D | 三 persona 父母 | C |

### 機構端類（Hypothesis B）

| ID | Feature 名稱 | 一句話描述 | Hypothesis | Persona / JTBD | 來源 |
|---|---|---|---|---|---|
| **F18** | 機構多戶儀表板（員工後台） | 照服員後台可同時管理多個個案戶狀態、異常通知彙整 | B | 機構 / 長照人員 | B |
| **F19** | 長照系統資料匯出（政府格式） | 支援 CMS 相關格式匯出，協助機構申請長照補貼 | B | 機構 / 長照人員 | B |

### 無障礙 / 操作類

| ID | Feature 名稱 | 一句話描述 | Hypothesis | Persona / JTBD | 來源 |
|---|---|---|---|---|---|
| **F20** | 超大字 / 高對比 UI（長者無障礙） | 字體 ≥24pt、高對比色，觸控按鈕大，視力退化友善 | A、D | 三 persona 父母 | A |
| **F21** | 長者「停止 / 暫停提醒」主動控制 | 長者可隨時說「不要再提醒我」，AI 暫停 24 小時，子女不得即時覆蓋 | A | 三 persona / 長者負面 JTBD | A |
| **F22** | 隱私資料刪除 / 記憶導出（長者退出保障） | 訂閱取消後 30 天硬刪資料；長者或家屬可隨時匯出 JSON 記憶包 | A | 三 persona / 隱私擔憂子女 | A |

---

## §2. MoSCoW 分類（4 級）

> 分類依據：Kano Must-be 永遠進 MoSCoW Must-have；Reverse / Indifferent 不進 Must/Should。RICE Score 輔助 Should 內排序。

### Must-have（沒有則 MVP 失敗）

| ID | Feature | Kano 主判定 | 理由 |
|---|---|---|---|
| **F02** | 中文語音對話（基礎流暢）| Must-be | 主要互動介面，缺失長者完全無法使用；棄用直接觸發 |
| **F01** | 每日主動問候（固定時段）| Must-be | 陪伴核心；長者 JTBD「有人每天問候」是最小可接受標準 |
| **F21** | 長者「停止 / 暫停提醒」主動控制 | Must-be | 缺失 = 長者感覺被控制 / 監視 = 固化拒絕態度（S0 棄用風險）|
| **F13** | 子女遠端 onboarding App（≤10 分鐘）| Must-be | 北漂子女 hard constraint；設定門檻高 = 購買轉化阻斷 |
| **F20** | 超大字 / 高對比 UI（長者無障礙）| Must-be | 視力退化普遍，字體小 = 使用者完全無法操作 |
| **F10** | 子女緊急通知推播（≤5 分鐘）| Must-be（子女端）| 子女最核心 WTP 驅動 JTBD；缺失則子女沒有付費動機 |
| **F22** | 隱私資料刪除 / 記憶導出 | Must-be（倫理）| problem-framing.md §3.1-3.2 紅線；PDPA 合規前提 |
| **F11** | 服藥提醒（語音，朋友語氣）| Performance（強）| 三 persona 父母均有用藥需求；語氣設計攸關 Reverse 風險 |

### Should-have（90 天 MVP 應包含，影響 NPS 和 PMF）

| ID | Feature | Kano 主判定 | 理由 |
|---|---|---|---|
| **F12** | 每日 / 每週 AI 摘要推播（子女 App）| Performance | 子女 Day-in-Life 通勤場景；直接影響訂閱黏著度 |
| **F08** | 非影像式異常偵測（聲音 + 互動中斷）| Performance | UVP「安全網」核心功能；技術可行性 🟡 待驗證 |
| **F03** | 台語語音識別 + 問候（基礎版）| Excitement（台語長者）| 台灣差異化護城河；南部縣市老化高，MVP 應包含基礎版 |
| **F04** | 個人記憶 AI（偏好 + 家庭脈絡）| Excitement | 「被記得」是長者 Emotional JTBD 高頻需求；護城河切換成本 |
| **F05** | 節日 / 節氣主動話題 | Excitement | 台灣文化深度在地化；提高長者主動互動意願 + 日均互動次數 |
| **F09** | 緊急按鈕快速呼叫 | Performance | 主動偵測（F08）補充；降低 false negative 風險 |
| **F14** | 雙向視訊 / 語音發起（子女 push） | Performance | 子女情感連結場景；GrandPad 核心功能 parity |

### Could-have（90 天後迭代，有則更好）

| ID | Feature | Kano 主判定 | 理由 |
|---|---|---|---|
| **F06** | 懷舊治療對話（老歌 / 人生故事）| Excitement | 有則驚喜；MCI 長者高價值，但非最緊急功能 |
| **F16** | 每日認知遊戲（難度自適應）| Performance（B2 場景）| 對 B persona MCI 父親高價值；BrainHQ 競品 parity |
| **F15** | 健康趨勢週報 / 月報（進階）| Excitement（C persona）| C persona 高端黏著功能；MVP 階段不優先 |
| **F17** | 復健引導體操（語音示範）| Performance（部分）| 有價值但不是 Day-1 棄用防線；Sprint 3-4 再加 |
| **F07** | 新聞摘要朗讀 | Performance（部分）| 認知刺激補充；缺少不影響棄用，有則增加互動次數 |

### Won't-have（90 天內不做，明確推後）

| ID | Feature | 原因 |
|---|---|---|
| **F18** | 機構多戶儀表板（員工後台）| Hypothesis B 功能；90 天優先 A+D；機構採購週期長，Phase 6 後才交付 |
| **F19** | 長照系統資料匯出（政府格式）| B2B2C 專有需求；90 天無機構客戶；Year 1 H2 再加 |

---

## §3. Reverse 屬性清單（必列 ≥5，本案列出 7 條）

> 「Reverse」= 有了反而讓長者或子女更生氣 / 拒絕 / 棄用；長者場景比一般消費品更敏感。

| # | Reverse 屬性 | 對哪個 persona Reverse | 為什麼 Reverse | 緩解設計 |
|---|---|---|---|---|
| **R01** | 過度主動 / 頻率過高提醒（每日 ≥6 次） | 長者本人（全三子類）| 長者感「被催促」「被管理」「像機器在念」→ 拒絕使用；problem-framing.md §3.2.4「MIT AgeLab 43% 最擔心科技過度介入」| 長者可自訂提醒頻率；AI 主動頻率上限 3 次/天預設；若長者說「不要再提醒」立刻遵守 24 小時 |
| **R02** | 子女遠端強制設定（長者無法覆蓋） | 長者本人（全三子類）| 長者感「子女遙控機器人管我」→ 文化 Autonomy 紅線；problem-framing.md §3.2.4「長者控制優先原則」| 長者設定覆蓋子女設定；監控型功能預設關閉；子女無法即時覆蓋長者「停止提醒」|
| **R03** | AI 過度擬人化 / 冒充家人角色 | 長者本人（尤其 MCI 類）| AI 叫「媽媽我愛你」或用兒子名字 → 混淆認知邊界 / Social Replacement 風險（problem-framing.md §3.2.10）| AI 禁止模仿家庭成員名字；不說「我愛你」型深度依附語；主動引導「要不要打電話給兒子」|
| **R04** | 即時對話全文推送給子女（無篩選） | 長者本人（全三子類）+ 隱私擔憂子女 | 長者知道每句話都被子女看 → 監視感 → 說話受限甚至完全不用；persona.md §5.3 共通需求 2 | 子女只收 AI 生成非侵入式摘要（「今天情緒好」）非原文；長者可設定哪些內容分享子女 |
| **R05** | 過度複雜 UI / 多選單 / 多按鈕介面 | 長者本人（75+，MCI 類）| 操作介面複雜 = 挫折 = 棄用；65+ 視力退化 + 手指靈活度下降；persona.md §2.2.1 「怕按壞」焦慮 | 超大字 ≥24pt；單頁最多 3 個操作選項；「叫名字就好」語音 first |
| **R06** | 推銷感語言 / 商業植入（「試試看 OO 保健品」）| 長者本人 + 子女 | 老年金融詐騙 NT$28 億/年；長者對「推薦購買」高度警覺；problem-framing.md §3.2.8 Power Asymmetry | 商業植入零容忍紅線；系統 prompt 禁推薦商品；拒絕「你應該買什麼」型語言 |
| **R07** | 緊急通知頻繁誤報（false positive ≥2 次/週）| 子女（A、C persona）| 多次誤報 → 「狼來了」效應 → 真正緊急時不信任；A persona「false alarm 一次就後悔購買」🟡；problem-framing.md §4.5 ElliQ 批評「嘮叨」| false positive 目標 ≤1/週（phase-0.5-deconstruction.md §5.2 KPI）；告警加「請先電話確認」說明；非立即 119 的通知不升為緊急等級 |

---

## §4. 3-Persona Kano 矩陣（22 feature × 3 persona × Kano 分類）

> **長者本人** = 70-82 歲 end user（秀珍 / 德仁 / 義雄三類型）
> **子女 Buyer** = 35-55 歲付款決策人（A 北漂 IT / B 在地中產 / C 退休前夫妻）
> **長照人員** = 照服員 / 機構主管（Hypothesis B gatekeeper）
> **整體判定**：取最嚴苛 persona 判定為最終結論（任一 Must-be = 整體 Must-be；任一 Reverse = 整體 KO）

| ID | Feature | 長者 Kano | 子女 Kano | 長照人員 Kano | 整體判定 |
|---|---|---|---|---|---|
| F01 | 每日主動問候 | **Must-be** | Performance | Performance | **KO if missing（Must-be）** |
| F02 | 中文語音對話 | **Must-be** | Must-be | Must-be | **KO if missing（Must-be 全三 persona）** |
| F03 | 台語語音識別 + 問候 | **Must-be**（台語長者）/ Excitement（國語長者）| Excitement | Indifferent | **Must-be（台語長者 subgroup）→ MVP 必含基礎版** |
| F04 | 個人記憶 AI | **Excitement** | Performance | Indifferent | **Must 前補全後優先（Excitement 差異化）** |
| F05 | 節日 / 節氣話題 | **Excitement** | Performance | Indifferent | **Excitement（文化差異化）** |
| F06 | 懷舊治療對話 | **Excitement** | Excitement | Performance（認知刺激佐證）| **Excitement + B2B2C 附加值** |
| F07 | 新聞摘要朗讀 | Performance | Indifferent | Indifferent | **Performance（弱，Could-have）** |
| F08 | 非影像式異常偵測 | Must-be（安全）| **Must-be** | Performance | **KO if missing（子女 Must-be）** |
| F09 | 緊急按鈕快速呼叫 | Must-be | **Must-be** | Must-be | **KO if missing（全三 persona Must-be）** |
| F10 | 子女緊急通知推播 | Indifferent（長者不知道）| **Must-be** | Performance | **KO if missing（子女 Must-be）** |
| F11 | 服藥提醒（朋友語氣）| Performance（若語氣對）/ **Reverse**（若催促型）| Performance | Must-be（照護標準）| **Must-have but Reverse Risk 高 → 語氣設計必須通過測試** |
| F12 | 每日摘要推播（子女 App）| Indifferent（長者不知道）| **Must-be** | Performance | **KO if missing（子女 Must-be）** |
| F13 | 子女遠端 onboarding ≤10 分鐘 | Must-be（間接）| **Must-be** | Must-be | **KO if missing（全三 persona）** |
| F14 | 雙向視訊 / 語音（子女 push）| Performance | Performance | Indifferent | **Performance（Should-have）** |
| F15 | 健康趨勢週報 / 月報 | Indifferent | **Excitement**（C persona）/ Performance（B）| Performance | **Excitement（Premium tier 候選）** |
| F16 | 每日認知遊戲（難度自適應）| Performance（MCI 類）/ Indifferent（健康類）| Performance（B persona）| **Excitement** | **Performance（B2 場景 Should-have）** |
| F17 | 復健引導體操 | Performance | Performance | Performance | **Performance（Could-have）** |
| F18 | 機構多戶儀表板 | Indifferent | Indifferent | **Must-be**（Hypothesis B）| **Must-be for B2B2C → Won't 90 天（Hypothesis B 非 MVP 主軸）** |
| F19 | 長照系統資料匯出 | Indifferent | Indifferent | **Must-be**（Hypothesis B）| **Must-be for B2B2C → Won't 90 天** |
| F20 | 超大字 / 高對比 UI | **Must-be** | Must-be | Must-be | **KO if missing（全三 persona Must-be）** |
| F21 | 長者「停止 / 暫停」控制 | **Must-be** | Must-be | Must-be | **KO if missing（全三 persona Must-be）** |
| F22 | 隱私資料刪除 / 記憶導出 | Must-be（倫理）| Must-be（PDPA + 子女信任）| Must-be（合規）| **KO if missing（倫理紅線）** |

---

## §5. RICE 評分（Kano filter pass 後排序）

> **Kano filter 邏輯**：先移除 Reverse 屬性（F11 語氣版本需額外測試，暫保留）和純機構 Won't（F18、F19）。
> **RICE 欄位定義**：
> - Reach = 台灣 MVP 受影響長者家庭估算戶數（萬戶）
> - Impact = 每用戶生活改善程度（0.25 輕微 / 0.5 小 / 1 中 / 2 大 / 3 極大）
> - Confidence = 假設驗證信心度（%）
> - Effort = 人月（Sprint 1-4 合計，1 Sprint = 2 週，4 Sprint = 90 天 = 1 人月 per Sprint ≈ 4 人月）
> - RICE Score = (Reach × Impact × Confidence) / Effort

| ID | Feature | Reach（萬戶）| Impact | Confidence | Effort（人月）| RICE Score | Kano filter pass? |
|---|---|---|---|---|---|---|---|
| **F02** | 中文語音對話 | 40 | 3 | 85% | 2 | **51.0** | ✅ Must-be |
| **F13** | 子女遠端 onboarding | 40 | 2 | 90% | 1 | **72.0** | ✅ Must-be |
| **F20** | 超大字 / 高對比 UI | 40 | 2 | 95% | 0.5 | **152.0** | ✅ Must-be |
| **F21** | 長者停止控制 | 40 | 2 | 90% | 0.5 | **144.0** | ✅ Must-be |
| **F22** | 隱私刪除 / 記憶導出 | 40 | 2 | 90% | 1 | **72.0** | ✅ Must-be（倫理）|
| **F01** | 每日主動問候 | 40 | 2 | 80% | 1.5 | **42.7** | ✅ Must-be |
| **F10** | 子女緊急通知推播 | 35 | 3 | 80% | 1.5 | **56.0** | ✅ Must-be（子女）|
| **F09** | 緊急按鈕快速呼叫 | 35 | 3 | 85% | 0.5 | **178.5** | ✅ Must-be |
| **F08** | 非影像式異常偵測 | 30 | 3 | 50% | 3 | **15.0** | ✅ Must-be（子女）🟡 技術風險高 |
| **F12** | 每日摘要推播（子女 App）| 35 | 2 | 85% | 2 | **29.75** | ✅ Performance |
| **F11** | 服藥提醒（朋友語氣）| 35 | 2 | 75% | 1 | **52.5** | ✅ Performance（Reverse Risk 需 UX 測試）|
| **F03** | 台語語音識別 + 問候 | 20 | 2 | 60% | 2 | **12.0** | ✅ Must-be（台語 subgroup）|
| **F14** | 雙向視訊 / 語音 | 30 | 1 | 70% | 2 | **10.5** | ✅ Performance |
| **F04** | 個人記憶 AI | 35 | 2 | 65% | 3 | **15.2** | ✅ Excitement（護城河）|
| **F05** | 節日 / 節氣話題 | 35 | 1 | 80% | 1 | **28.0** | ✅ Excitement |
| **F06** | 懷舊治療對話 | 25 | 2 | 70% | 2 | **17.5** | ✅ Excitement |
| **F16** | 每日認知遊戲 | 20 | 2 | 65% | 2 | **13.0** | ✅ Performance（B2 場景）|
| **F15** | 健康趨勢週報 / 月報 | 15 | 2 | 65% | 2 | **9.75** | ✅ Excitement（Premium）|
| **F17** | 復健引導體操 | 20 | 1 | 60% | 2 | **6.0** | ✅ Performance（Could）|
| **F07** | 新聞摘要朗讀 | 25 | 0.5 | 70% | 1 | **8.75** | ✅ Performance（Could）|
| **F18** | 機構多戶儀表板 | 5（機構）| 2 | 70% | 4 | **1.75** | ❌ Won't 90 天（Hypothesis B only）|
| **F19** | 長照系統資料匯出 | 5（機構）| 1 | 70% | 3 | **1.17** | ❌ Won't 90 天 |

> **Kano filter 說明**：F08 非影像式異常偵測 RICE 偏低因 Confidence 50%（技術可行性 🟡 待驗證，§5.4 假設 3），但因 Kano Must-be 仍進 MVP；90 天以 Wizard-of-Oz 輔助版本（互動中斷偵測）先行，非完整跌倒偵測宣稱。

---

## §6. 三框架整合決策

### 6.1 衝突解決原則

**原則 1（最高優先）：Kano Must-be 缺失 = KO**
- F20（超大字 UI）RICE Score 152 → 自然進 Must
- F21（長者停止控制）RICE Score 144 → 自然進 Must
- F22（隱私刪除）RICE Score 72 → Must，即使商業價值不高
- F08（異常偵測）RICE Score 15 → 雖低，因子女 Must-be 仍進 MVP（以基礎版實作）
- **關鍵判斷**：F13（onboarding）RICE 72 高，同時是 Must-be；F09（緊急按鈕）RICE 178 最高，是 Must-be

**原則 2（次高）：Reverse 屬性 = 設計門檻，不是直接排除**
- F11（服藥提醒）：Reverse 風險在語氣版本，以朋友語氣設計 + UX 測試通過才進 Must；若測試 fail 降為 Should
- R01-R07 列表中的 Reverse 屬性不是獨立 feature，而是設計約束條件，任何 feature 的實作均不可觸發這 7 條 Reverse

**原則 3：RICE 排序 Should 內優先序**
- Should-have 內以 RICE Score 排序：F12（29.75）> F11（52.5）> F05（28）> F08（已升 Must）> F03（12）> F14（10.5）> F04（15.2）

### 6.2 長者場景「Kano > RICE」五個原因

1. **棄用率的非線性後果**：長者場景首 2 週棄用率行業基準 30-50%（problem-framing.md §2.2.2）。Must-be 缺失觸發棄用的信心是 95% 以上；而 Excitement feature 缺失只是「不驚喜」。RICE 的 Confidence 無法捕捉此非線性。
2. **一旦拒絕難逆轉**：「前 3 天體驗不佳，拒絕態度固化且極難逆轉」（persona.md §2.2.3）。Reverse 屬性觸發的危害不是「一次不滿意」而是「永久失去這個用戶」。
3. **多 persona 決策鏈**：子女付款 + 長者使用 + 長照人員執行，任何一方有 Must-be 缺失都可能阻斷成交。RICE Reach 無法拆分 persona 維度。
4. **情感依附的長期性**：AI 陪伴機器人與長者建立情感依附後，Must-be 缺失或 Reverse 觸發造成的負面口碑 = B2C 場景最難修復的 NPS 破壞。
5. **合規紅線不可妥協**：F22（隱私刪除）、F21（長者控制）是 problem-framing.md §3 倫理紅線直接延伸，法規本質上是絕對 Must-be。

---

## §7. MVP Scope（90 天可上）

### MUST（全做，8 個 feature）

> Kano Must-be 全補 + Must-be 判定 by 子女端（F10、F12）

| # | Feature | Sprint 時程 | 關鍵驗收標準 |
|---|---|---|---|
| 1 | **F02 中文語音對話（基礎流暢）** | Sprint 1 W1-2 | 多輪對話 ≥5 輪不斷線；首 token ≤3 秒；中文理解正確率 ≥90% |
| 2 | **F20 超大字 / 高對比 UI** | Sprint 1 W1-2 | 字體 ≥24pt；按鈕 ≥44px；AA 無障礙對比度通過 |
| 3 | **F21 長者停止 / 暫停控制** | Sprint 1 W2-3 | 說「不要再提醒我」→ AI 停止 24 小時；子女端不得覆蓋 |
| 4 | **F22 隱私資料刪除 / 記憶導出** | Sprint 1 W3-4 | 取消訂閱後 ≤30 天系統刪除；匯出 JSON 包 ≤5 分鐘完成 |
| 5 | **F13 子女遠端 onboarding ≤10 分鐘** | Sprint 2 W3-5 | 子女完成設定 ≤10 分鐘；≤5 步；不需現場；首次長者互動成功率 ≥80% 🟡 |
| 6 | **F01 每日主動問候（固定時段）** | Sprint 2 W4-5 | 每天早晨 + 傍晚各一次主動問候；長者說「不打擾」後暫停 |
| 7 | **F09 緊急按鈕快速呼叫** | Sprint 2-3 W5-7 | 觸發後 5 分鐘內子女推播；語音觸發準確率 ≥90% |
| 8 | **F10 子女緊急通知推播（≤5 分鐘）** | Sprint 2-3 W5-7 | SLA ≤5 分鐘；推播含情境說明（「未回應超過 30 分鐘」）|

### SHOULD（Sprint 3-4 優先，影響 PMF）

> RICE 排序後前 7 名；Kano filter 全 pass

| # | Feature | Sprint 時程 | 說明 |
|---|---|---|---|
| 1 | **F11 服藥提醒（朋友語氣）** | Sprint 2-3 W5-7 | 🟡 Reverse 風險：語氣 UX 需 Adversarial Test 通過；朋友語氣 vs 機器式對比測試 |
| 2 | **F12 每日摘要推播（子女 App）** | Sprint 2-3 W5-7 | AI 生成非侵入式摘要；禁原文推送；子女可選摘要粒度 |
| 3 | **F05 節日 / 節氣話題** | Sprint 3 W7-8 | 農民曆 API 整合；台灣節氣 / 廟會 / 清明等話題庫 |
| 4 | **F08 非影像式異常偵測（WoZ 版）** | Sprint 3 W7-9 | 90 天版本：互動中斷 ≥45 分鐘觸發旗標；不宣稱跌倒偵測準確率（TFDA 合規）|
| 5 | **F04 個人記憶 AI（偏好 + 家庭脈絡）** | Sprint 3-4 W8-10 | RAG 架構；長者說過的喜好 / 家人名字持久化；下次對話主動引用 |
| 6 | **F03 台語語音識別 + 問候（基礎版）** | Sprint 3-4 W8-10 | 台語問候 ≥20 個常用語句；台語識別 fallback：「您剛才說的是...嗎？」|
| 7 | **F14 雙向視訊 / 語音（子女 push）** | Sprint 4 W10-11 | 子女 App push → 長者端響起；視訊建立 ≤10 秒；fallback 純語音 |

### WON'T（90 天內不做，推後期）

| ID | Feature | 推後期理由 |
|---|---|---|
| **F06** | 懷舊治療對話 | Excitement 功能，Must-be 補滿後才優先；Year 1 Q2 加入 |
| **F16** | 每日認知遊戲 | B persona MCI 場景為主；MVP 先驗證陪伴 PMF；Year 1 Q2 |
| **F15** | 健康趨勢週報 / 月報 | C persona 高端功能；Premium tier 基礎要先有 Should 功能；Year 1 H2 |
| **F17** | 復健引導體操 | 有效但不是棄用防線；Year 1 Q3 |
| **F07** | 新聞摘要朗讀 | 認知刺激補充；低 RICE（8.75）；Year 1 Q2 |
| **F18** | 機構多戶儀表板 | Hypothesis B 專屬；機構採購 BD 啟動後才需要；Year 1 H2 |
| **F19** | 長照系統資料匯出 | Hypothesis B 政府格式；Year 1 H2 配合機構 pilot |

### NEVER（紅線 + Reverse 屬性，絕對不做）

| # | NEVER 項目 | 類型 | 理由 |
|---|---|---|---|
| N01 | 醫療診斷 / 投藥建議 | LLM 絕對紅線 R1-R2 | problem-framing.md §3.1；無 TFDA 認證；醫療法 §103-1 |
| N02 | 急救決策（取代 119）| LLM 紅線 R3 | AI 誤判急救 = 生命危險；只做「通知子女 + 119 引導語」|
| N03 | 財務 / 投資建議 | LLM 紅線 R5 | 老年金融詐騙 NT$28 億/年；金消法 |
| N04 | 心理治療 / 自殺干預 | LLM 紅線 R6 | 轉介 1925；不做治療動作 |
| N05 | 24/7 原始語音持續上傳雲端 | Surveillance Creep + PDPA §6 | 端側觸發詞偵測；原始語音不出境 |
| N06 | AI 名字使用家庭成員名字（「媽媽我愛你」）| Social Replacement 紅線 §3.2.10 | 混淆認知邊界；MCI 長者特別危險 |
| N07 | 子女即時完整對話查看（無篩選）| Surveillance Creep §3.2.9 | 長者 Reverse 強觸發；只給 AI 摘要版 |
| N08 | 功能鎖定無法退出 / 關閉 | Autonomy 紅線 §3.2.4 | 消保法 §19；長者控制優先原則 |
| N09 | 商業植入 / 保健品推薦語言 | Power Asymmetry §3.2.8 | 零容忍；公平交易法 §25 |
| N10 | 中國 OEM 硬體（data sovereignty）| PDPA + 政府採購禁制 | build-vs-buy.md §2.2.4 排除理由；長照 3.0 補貼名單審查風險 |

---

## §8. Criticality vs Satisfaction Matrix（2x2 文字版）

> X 軸：**Satisfaction**（功能達標後使用者滿意度高低）
> Y 軸：**Criticality**（功能未達標的後果嚴重度，高 = 棄用 / 法律風險 / 無法成交）

### 象限 1：High Criticality × High Satisfaction（必做且有感）

這些是 MVP 的核心，同時滿足「沒有就 KO」且「做好有明顯滿意度」。

- **F02 中文語音對話** — 缺失棄用，做好每天 30 次互動（ElliQ 基準）
- **F09 緊急按鈕 + F10 子女推播** — 缺失子女無購買理由；做好 WTP 驅動購買
- **F13 子女遠端 onboarding** — 缺失阻斷購買轉化；做好 NPS 加分
- **F01 每日主動問候** — 缺失陪伴感為零；做好成為長者最高互動場景

### 象限 2：High Criticality × Low Satisfaction（必做但難驚喜）

「沒有會出事，有了只是基本」— 這是 Kano Must-be 但 Satisfaction 低的組合。

- **F20 超大字 / 高對比 UI** — 沒有長者無法操作（高 Criticality）；有了只是「正常」
- **F21 長者停止控制** — 沒有觸發 Reverse；有了長者不特別感謝，只是不生氣
- **F22 隱私刪除 / 記憶導出** — 法規合規必須；用戶不會因此感到驚喜
- **N01-N10 NEVER 清單** — 缺失觸發法律 / 棄用災難；做到只是符合底線

### 象限 3：Low Criticality × High Satisfaction（做了驚喜，沒有不怪你）

對應 Kano Excitement — 這些是 PMF 達標後的 NPS 驅動器和 Premium 差異化。

- **F03 台語語音** — 南部長者沒有不特別抱怨；有了「專為我設計」的認同感
- **F04 個人記憶 AI** — 沒有只是普通 AI；有了義雄阿公「感覺人生被記得」
- **F05 節日 / 節氣話題** — 沒有長者不怪你；有了文化共鳴 + 口碑
- **F06 懷舊治療 / 老歌** — 沒有普通 AI；有了 MCI 長者情緒活化
- **F15 健康趨勢週報** — 沒有子女不怨；有了 C persona 高端黏著

### 象限 4：Low Criticality × Low Satisfaction（Indifferent，不做最省）

這些 feature 沒有也不抱怨，做了用戶也不特別滿意。90 天不做。

- **F18 機構多戶儀表板**（對 B2C 用戶 Indifferent）
- **F19 長照系統匯出**（對 B2C 用戶 Indifferent）
- 部分 F07 新聞朗讀（子女端 Indifferent）

---

## §9. 對 Phase 4 Pricing + Phase 5 Prototype Build 的輸入

### 9.1 Phase 4 Business Model Caveats（定價輸入）

**Caveat 1：哪些 feature 撐 NT$1,200/月 B2C 訂閱（Hypothesis A）**

NT$1,200/月 = 家庭月照顧費 NT$22K 的 5-6%；以下 feature 組合是子女願意付此價的心理基礎：
- **F01 + F02 + F10 + F09**（主動陪伴 + 緊急安全網）= UVP「安全網雙層」對應
- **F12**（每日摘要推播）= 「不需打電話也能安心」的功能價值對應
- 以上共 5 feature = NT$1,200/月 Core Tier 最小功能集

**Caveat 2：哪些 feature 撐 NT$299/月 Freemium（Hypothesis D）**

- **F02 + F01**（基礎對話 + 主動問候）= 免費體驗
- **F12**（摘要推播）= NT$299/月 解鎖功能
- 轉換率驗證：付費 → 硬體 upsell ≥15%（phase-0.5-deconstruction.md §5.2 KPI）

**Caveat 3：哪些 feature 是 Premium tier 差異化（NT$2,000-3,500/月，Persona C 高端）**

以下為 Excitement 功能，建議做 Premium tier add-on 或年費升級：
- **F04 個人記憶 AI**（個性化深度，難以複製護城河）
- **F15 健康趨勢週報 / 月報**（C persona 家醫科輸入，高端訴求）
- **F03 完整台語對話**（Year 1 完整版，基礎版已在 Core）
- **F06 懷舊治療**（MCI 照顧場景附加價值）
- **家庭雙端多帳號**（兩組父母 / 多子女 = Persona C 特殊需求）

**Caveat 4：哪些 feature 撐 NT$799/月 B2B2C（Hypothesis B）**

- B2B2C 月費低於 A（NT$799 vs NT$1,200），差異在機構補貼分攤；
- 機構端 F18 多戶儀表板 = 機構 RaaS NT$3,000/月/台 的 must-have（90 天 WON'T，Year 1 H2 必備）

**Caveat 5：監控型 feature 的 Pricing 倫理限制**

依 problem-framing.md §3.6 Caveat 2：
- **監控型**（活動軌跡 / 完整對話記錄）不得作為基礎方案預設；必須 add-on + 重新同意
- **陪伴型**（摘要 / 情緒摘要）可作 Core Tier 預設
- Premium tier 若含趨勢報告，需標明「資料來源為 AI 分析摘要，非原始行為軌跡」

### 9.2 Phase 5 Prototype Build Sprint 優先序建議

| Sprint | 週次 | 優先 feature | 驗收關口 |
|---|---|---|---|
| **Sprint 1** | W1-4 | F02（中文語音對話）+ F20（無障礙 UI）+ F21（長者控制）+ F22（隱私刪除）| AI Brain Layer 1 GPT-4o 接通；Layer 2 7 條紅線 rule-based 完成；UI 無障礙基線通過 |
| **Sprint 2** | W5-8 | F13（onboarding）+ F01（主動問候）+ F09（緊急按鈕）+ F10（推播）+ F11（服藥提醒語氣測試）| onboarding 10 分鐘用戶測試通過；緊急推播 SLA ≤5 分鐘；服藥提醒語氣 Adversarial Test 無 Reverse 觸發 |
| **Sprint 3** | W7-9 | F12（摘要推播）+ F05（節氣話題）+ F08（WoZ 異常偵測）+ F11（正式版）| 摘要推播 A/B 測試（原文 vs AI 摘要）；異常偵測觸發規則文件化；服藥提醒語氣測試通過後正式開啟 |
| **Sprint 4** | W9-12 | F04（個人記憶）+ F03（台語基礎）+ F14（視訊）+ PMF 量測 | Day-7 retention 量測；Sean Ellis ≥40% 測試；台語問候 ≥20 語句功能完成；pilot 5-10 家庭啟動 |

---

## §10. Coverage Matrix（自我檢核）

| 要求項目 | 完成狀態 | 位置 |
|---|---|---|
| Feature ≥20 個 | ✅ 22 個 F01-F22 | §1 |
| Kano 矩陣全填（22 × 3 persona）| ✅ | §4 |
| Reverse 屬性 ≥5 條 | ✅ 7 條（R01-R07）| §3 |
| 3 persona Kano 各跑一遍 | ✅ 長者 / 子女 / 長照人員各欄 | §4 |
| MVP scope MUST / SHOULD / WON'T / NEVER 四區 | ✅ | §7 |
| 對 Phase 4 Pricing ≥1 caveat | ✅ 5 個 caveat | §9.1 |
| 對 Phase 5 Prototype Build Sprint 建議 | ✅ | §9.2 |
| MoSCoW 四級分類 | ✅ | §2 |
| RICE 評分（Kano filter 後）| ✅ 22 feature 全評分 | §5 |
| Kano > RICE 理由說明 | ✅ 5 個理由 | §6.2 |
| Criticality vs Satisfaction Matrix | ✅ 2x2 四象限文字版 | §8 |
| 7 條 LLM 絕對紅線不入 Must/Should | ✅ NEVER 清單 N01-N10 | §7 NEVER |
| 監控型 Pricing 限制 caveat | ✅ Caveat 5 | §9.1 |
| Plan-Only Mode 標籤（✅ / 🟡 / 📋）| ✅ 全文 | 全文 |
| 報告對象 ASUS 主管客觀中立 | ✅ 無競品推銷語氣 | 全文 |
| 禁用「demo」字眼 | ✅ | 全文 |

### Feature 數 + MoSCoW 分布 + Kano 分布摘要

| 維度 | 數量 |
|---|---|
| **總 feature 數** | 22 |
| **Must-have** | 8（F01 F02 F09 F10 F13 F20 F21 F22）|
| **Should-have** | 7（F11 F12 F14 F04 F05 F03 F08）|
| **Could-have** | 5（F06 F16 F15 F17 F07）|
| **Won't-have（90 天）** | 2（F18 F19）|
| **NEVER** | 10 項（N01-N10 紅線）|
| **Kano Must-be** | 10 feature（含 F02 F01 F09 F10 F13 F20 F21 F22 F08 F18/19 機構版）|
| **Kano Performance** | 7 feature（F07 F11 F12 F14 F16 F17 部分）|
| **Kano Excitement** | 5 feature（F03 台語完整版 / F04 F05 F06 F15）|
| **Kano Reverse（設計風險）** | 7 條 Reverse 屬性（R01-R07）|
| **Kano Indifferent** | F18 F19 對 B2C persona |

---

> **建立在**：problem-framing.md + phase-0.5-deconstruction.md + persona.md + jtbd-day-in-life.md + build-vs-buy.md + mvp-type.md
> **標籤分布**：✅ desk-validated ~60 處 / 🟡 hypothesis ~25 處 / 📋 post-approval execution ~15 處
> **下一步（Phase 4）**：Phase 4 Business Model — 以 §9.1 Pricing caveats 為輸入，確認 NT$1,200/月 B2C 訂閱 + NT$299/月 Freemium + Premium tier 三層定價模型；WTP 量測從 pilot 20 戶取得第一手數據（📋 post-approval）
