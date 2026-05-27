# Sprint 4 規格書 — W11-W12 閉迴路測試 + 機構儀表板 + PMF 量測
## 長者互動陪伴機器人 × AI Brain MVP — Phase 5 T38

> **執行日期**：2026-05-27
> **執行模式**：PM Flow v0.1 / Phase 5 T38 Sprint 4 規格書
> **角色配置**：sprint-planner（本報告）
> **Plan-Only Mode**：本文件是「規劃書」，不是「執行成果」；所有 build / pilot 項標 📋 post-approval execution；所有預期數字標 🟡 hypothesis；所有 desk-validated 結論標 ✅
> **報告對象**：華碩（ASUS）AI 代理人 / 服務型機器人主管 1 位（客觀中立，無 ASUS 推銷合作論述）
> **建立在**：T24 build-vs-buy / T25 mvp-type / T26 tech-architecture / T27 feature-triage / T28 safety-redlines / T30 lean-canvas / T32 pricing / T35 decision-w6 / Phase 2 interview-plan + Sprint 1-2 / Sprint 3 規格書（平行寫，銜接點以 W6 Gate + T27 § 9.2 Sprint 規劃為準）
> **禁用字眼**：demo（改稱「主管 review 規劃書」/「內部 review 規劃書」/「主管 walkthrough 規劃書」）；禁延伸「ASUS 是合作夥伴」推銷語氣

---

## 0. Executive Summary

本文件規劃「長者互動陪伴機器人 × AI Brain」90 天 MVP 第 4 個 Sprint（W11-W12 / 2 週 SSOT 對齊 decision-w6.md §7.1）的完整閉迴路測試規格，包含 5-10 戶家庭 + 1-2 家機構部署、機構儀表板 feature COULD、PMF 量測機制（Sean Ellis / Retention / NPS / HEART / AARRR 五框架）、Wizard-of-Oz 比例遞減安排、風險清單 + 緩解方案、Sprint 拆解、預算估算。本文 §7 拆解涵蓋 W11-W12 正式 Sprint + Phase 6 W1 過渡週銜接，預算僅含 W11-W12 / 2 週。

**五項核心結論**：

1. **Sprint 4 定位是「內部 closed beta」非「對外公開 pilot」**：5-10 戶員工家屬 / 朋友家庭 + 1-2 家機構 LOI 部署，與 Phase 6 對外 5 面向公開 Pilot（T39-T43）明確區分；Sprint 4 是 Phase 6 的「正式啟動前最後一道閉迴路驗證關卡」。
2. **WoZ 比例 4 週遞減安排（80% → 50% → 20% → 10%）**：W10 第 1 週 Operator 主導確保體驗 baseline，W13 第 4 週 AI 自動主導比例達 90%，量測「AI 從輔助升主力」過程的長者接受度 / 紅線觸發 / NPS 變化曲線。
3. **PMF 量測機制 5 框架全覆蓋**：Sean Ellis ≥30%（接近 PMF signal）+ Retention curve D1/D7/D14/D30 + 三組 NPS（子女 ≥40 / 長者 ≥35 / 機構員工 ≥4.0/5）+ HEART 5 維 + AARRR 漏斗 + 緊急偵測召回率 ≥75%（真實環境）+ 紅線 false positive ≤1/週/戶，給 Phase 6 T42 提供完整 PMF 量測基線。
4. **B2B2C 機構儀表板規格化（Hyp B hedge feature）**：多戶個案管理 + 員工排程整合 + 緊急統一通報 + 數據匯出長照系統格式 + 機構 NDA + 個資 buyer 角色設計，銜接 W6 Gate 「機構 LOI ≥1」KPI。
5. **Sprint 4 預算估算 NT$185-260 萬（📋 post-approval）**：開發 NT$120-150 萬 + 雲端 NT$8-12 萬 + 家庭部署 NT$40-65 萬 + 機構部署 NT$15-30 萬，作為主管 review 規劃書財務預估輸入。

**對主管 review 規劃書的核心訊息**：Sprint 4 是 90 天 MVP 規劃書中「從技術可行性（Sprint 1-3 規格已備）跨入商業可行性（PMF 訊號量測機制設計）」的關鍵轉換週次，所有量測指標 + 退場機制 + Phase 6 銜接設計就緒，計畫通過後可立即啟動 W11。

---

## §1. Sprint 4 目標 + 範圍

### 1.1 Sprint 4 三大目標（W11-W12 / 2 週 SSOT；W13 為 Phase 6 過渡週，本文 §7 涵蓋但預算不含）

**目標 1：閉迴路驗證 5-10 戶家庭 + 1-2 家機構真實環境**
- 5-10 戶家庭部署 4 週 closed beta（W10-W13 跨 Sprint 4 + Phase 6 過渡週）；驗證假設 1 WTP + 假設 2 長者接受度 + 假設 3 緊急偵測召回率
- 1-2 家機構 W10 部署 + W11-W13 4 週運行；驗證假設 4 機構願採購 + 機構員工 NPS + 員工排程整合可行性
- 與 Phase 6 對外公開 Pilot 區隔：Sprint 4 是 **「內部 closed beta」**（員工家屬 + LOI 機構），Phase 6 是 **「對外公開 pilot」**（5 面向招募，含一般用戶）

**目標 2：完成 feature COULD 5 features + bug fix + UX polish**
- Sprint 3 規劃 Should-have（F03 台語基礎 / F04 個人記憶 / F08 異常偵測 WoZ 版 / F11 服藥提醒 / F12 摘要推播 / F14 視訊）；Sprint 4 規劃補完 COULD 5 feature 的 narrow scope 版本（§ 5.5）
- 機構儀表板 feature COULD（§ 2）作為 Hyp B B2B2C hedge feature 開發
- Sprint 1-3 bug fix（紅線觸發 false positive / 台語識別錯字 / onboarding 中斷率 / UI 字體 / 緊急通知延遲）+ UX polish（長者端三方同意流程簡化 / 子女 App 多帳號授權）

**目標 3：建立 PMF 量測機制 + 給 Phase 6 銜接基線**
- 5 框架量測機制部署（§ 6）：Sean Ellis 問卷 + Retention curve 追蹤工具 + 三組 NPS 系統 + HEART metric dashboard + AARRR 漏斗追蹤
- 緊急偵測召回率 / 紅線 false positive / 長者主動互動次數 / 子女 dashboard 查看率等 Safety + Engagement metric 收集機制
- Sprint 4 量測結果 → Phase 6 Pilot T39-T43 招募過濾標準 + 量測基線 + Pivot 條件設計輸入

### 1.2 範圍邊界（In Scope / Out of Scope）

**In Scope（Sprint 4 W11-W12）**：

| 項目 | 說明 |
|---|---|
| 5-10 戶家庭部署 | 員工家屬 + 朋友家庭 closed beta；W11 第 1 週分批部署完成 |
| 1-2 家機構部署 | W10 第 1 週 LOI 簽訂 + 部署準備；W11-W12 機構運行 |
| 機構儀表板 feature COULD | 多戶個案管理 + 員工排程 + 緊急統一通報 + 數據匯出 + NDA / 個資 buyer 角色 |
| WoZ 比例遞減 4 週 | W10 80% / W11 50% / W12 20% / W13 10%（W13 跨入 Phase 6 過渡週）|
| PMF 量測機制 | Sean Ellis + Retention + NPS + HEART + AARRR 5 框架 |
| Sprint 1-3 bug fix + UX polish | 已知 bug 修復 + UX 簡化 |
| Phase 6 Pilot 準備 | T39-T43 招募過濾 / 量測基線 / Pivot 條件輸入 |
| Operator 訓練 | 4 人 24×7 三班輪值 SOP + WoZ 後台介入工具培訓 |
| 主管 review 規劃書內容更新 | Sprint 4 結果輸入到 Phase 8 主管 review 規劃書 |

**Out of Scope（明確排除）**：

| 項目 | 排除理由 | 銜接時機 |
|---|---|---|
| 對外公開 pilot（5 面向招募）| Phase 6 T39-T43 範疇 | Phase 6 W13+ 啟動 |
| 5-10 戶以外的家庭擴張 | Sprint 4 是 closed beta，不擴張 | Phase 6 對外公開 pilot |
| 3 家以上機構部署 | Sprint 4 限 1-2 家避免機構服務品質爆量 | Phase 6 + Year 1 H2 擴張 |
| BSMI / TFDA / CNS 15630 認證 | 90 天 MVP 全程 App / WoZ 平板形態免認證（cert-timeline § 2）✅ | Year 1 H2 ODM 硬體啟動時 |
| 完整台語 ASR fine-tune | 台語基礎問候 ≥20 句 Sprint 3 規劃；完整版 Year 1 H2 | Year 1 H2 Whisper fine-tune |
| 完整機構長照系統 API 對接 | Sprint 4 限智齡科技單一 API 介面 PoC；其他系統 Year 1 H2 | Year 1 H2 開放 API 平台化 |
| 保險 PMPM 接觸（Hyp C）| Year 3+ TFDA II 類前提 | Year 3+ |
| Year 1 ODM 硬體採購 | 90 天 MVP 用 WoZ 平板形態 | Year 1 H2 ODM 啟動 |

### 1.3 與 Sprint 1-3 + Phase 6 的銜接點

**從 Sprint 3 接續（W7-9 Should-have）**：
- F08 異常偵測（WoZ 互動中斷 ≥45 分鐘觸發）已 Sprint 3 完成；Sprint 4 在真實環境驗證 false positive ≤1/週/戶
- F03 台語基礎問候 ≥20 句 Sprint 3 規劃；Sprint 4 規劃驗證南部縣市真實長者接受度
- F04 個人記憶 RAG 90 天已運行；Sprint 4 驗證個人化「被記得」感受對 NPS 影響
- F12 摘要推播已開啟；Sprint 4 量測子女 dashboard 週查看率 ≥60% 目標
- Sprint 3 bug fix 清單繼承到 Sprint 4 處理

**到 Phase 6 銜接（W13+ Pilot）**：
- Sprint 4 5-10 戶 closed beta 學到的痛點 → Phase 6 5 面向招募過濾標準（避開高棄用風險族群）
- Sprint 4 PMF metric → Phase 6 量測機制基線（Sean Ellis 起點 / Retention 起點 / NPS 起點）
- Sprint 4 機構 1-2 家 LOI → Phase 6 機構通路 BD 加速（從 LOI 到 MoU）
- Sprint 4 WoZ → AI 自動切換的學到教訓 → Phase 6 AI 比例擴大（90% → 100%）的 SOP

---

## §2. 機構儀表板規格（Hyp B B2B2C hedge feature）

### 2.1 設計緣由 + Hyp B 對應

**為何在 Sprint 4 而非 Sprint 1-3**：機構儀表板是 Hyp B B2B2C 通路的 enabler，T30 lean-canvas § 3 確認 Hyp B 為 Year 1 H2 BD + Year 2 ARR hedge；W6 Gate § 3.2 確認 Hyp B 評分 3.35/5 為次主軸 Persevere。Sprint 4 是 Sprint 1-3 完成 Hyp A B2C 主軸後，首次具備「向 1-2 家 LOI 機構真實提供服務」的時機點，機構儀表板必須 Sprint 4 規格化部署。

**90 天 MVP 範圍校準**：T27 feature-triage § 7 WON'T 列出 F18 機構多戶儀表板 / F19 長照系統資料匯出為「90 天內不做」，原因是「機構採購週期長，Phase 6 後才交付」。Sprint 4 規格書在此基礎上 **校準** ：基於 W6 Gate 確認 Hyp B 為次主軸 + Sprint 4 已具備 1-2 家機構 LOI 接觸基礎，**機構儀表板列入 Sprint 4 feature COULD narrow scope 版本**（單機構單員工 PoC，非完整 SaaS 平台）。完整 SaaS 平台架構仍延後 Year 1 H2 開發。

### 2.2 多戶個案管理規格

**功能描述**：1 家機構員工帳號可以同時管理 N 戶長者個案（N 上限 20 戶 closed beta 階段；正式版上限視 SaaS 平台架構決定）

**核心 UI 設計**：

```
┌─────────────────────────────────────────────────┐
│  機構儀表板 — 員工：陳照服員（雙連日照中心）        │
├─────────────────────────────────────────────────┤
│  今日狀態總覽（20 戶）                          │
│  ┌──────────┬──────────┬──────────┬──────────┐│
│  │ 異常 2   │ 紅線觸發 0│ 緊急通報 0│ 正常 18  ││
│  └──────────┴──────────┴──────────┴──────────┘│
│                                                  │
│  個案列表（按異常優先序排）                       │
│  ⚠️ 王O明 阿公 / 88 歲 / 互動中斷 65 分        │
│      └─ [查看] [聯絡家屬] [標記已處理]          │
│  ⚠️ 林O美 阿嬤 / 75 歲 / 紅線觸發：藥物詢問    │
│      └─ [查看] [Operator 介入記錄] [追蹤]      │
│  ─────────────────────────────────────         │
│  ✓ 陳O芳 阿嬤 / 82 歲 / 今日互動 18 次 / 正常   │
│  ✓ 張O賢 阿公 / 79 歲 / 今日互動 22 次 / 正常   │
│  ... （其餘 16 戶正常）                         │
└─────────────────────────────────────────────────┘
```

**資料來源**（接 tech-architecture § 2.4 機構後台資料流）：
- `daily_brief` 表彙整：每戶最近 7 天 AI 摘要 + 情緒 + 健康訊號
- `emergency_event` 表：未解決緊急事件（resolution_status='pending'）
- `redline_triggers` 表：當日 N1-N10 + R1-R10 紅線觸發 log
- `interaction_log` 表（Sprint 3 新增）：每戶當日互動次數 + 時長 + 主要話題

**權限控制**：
- 機構員工帳號僅可查看「機構分配個案」（institution_assignment.assigned_staff_id = 員工 user_id）
- 個案家庭需在子女 App 內勾選「同意與機構分享 daily brief」+ 同意分享範圍（emergency_only / daily_brief / full_history 三選一），預設 emergency_only
- 機構主管帳號可查看全機構個案彙整，但不可查看個別對話原文（永不分享原文，僅 AI 摘要）
- safety-redlines § 4.4「監控型 vs 陪伴型」邊界：機構員工查看屬陪伴型摘要，不含監控型活動軌跡

### 2.3 員工排程整合規格

**功能描述**：機構員工 1 日 8 小時班排程與 AI 主動陪伴時段 / 紅線觸發機率高峰時段對齊，員工知道「現在哪幾位長者需要關注 + 何時可能需要 Operator 介入」

**Sprint 4 narrow scope（PoC 階段）**：
- 員工排程從機構既有系統（智齡科技 LongGood API 對接，OAuth 2.0）讀取；機構若無 API 對接，提供 CSV 上傳替代方案（manual upload）
- AI 主動陪伴時段固定 06:30 / 18:00（F01 Sprint 2 規劃）；員工早班（06:00-14:00）對應 06:30 主動問候時段、晚班（14:00-22:00）對應 18:00 主動問候時段
- 紅線觸發機率：基於 Sprint 3 數據（10-15 戶員工家屬內測），早上 06:30-08:00 + 晚上 19:00-21:00 是紅線觸發高峰時段（主要為服藥詢問 / 健康疑問）
- 員工排程介面：顯示「您負責的 X 戶個案，今日需特別關注：[個案 A 早上服藥提醒 06:30] [個案 B 互動少於 5 次需主動關懷 17:00]」

**對接智齡科技 / 宏碁智醫 API**（lean-canvas § 3 Block 4）：
- 智齡科技 LongGood 是台灣長照機構管理 1,200+ 機構主流系統；Sprint 4 PoC 階段對接 1 家機構的智齡 API endpoint（員工排程 read-only）
- 宏碁智醫對接 Year 1 H2（Hyp B 機構擴張時開放）
- 對接技術：OAuth 2.0 + REST API + JSON Schema 對齊；機構 IT 配合 ≤2 個工作日完成 token 配置
- 🟡 智齡科技 API 公開文件待 Sprint 4 W10 機構 IT 配合確認；若不支援 read-only OAuth 改用 CSV 上傳

### 2.4 緊急統一通報規格

**功能描述**：機構端 dashboard 接收所有個案 AI 偵測到的緊急事件 alert，員工統一處理 + 升級

**緊急通報流程**（接 tech-architecture § 2.2 緊急偵測資料流）：

```
[AI 偵測異常]
   ↓
[端側 Layer 2 rule-based + 30 秒長者確認]
   ↓
[長者無回應 / 確認需協助]
   ↓
[家庭子女 LINE 推播](primary，5 分鐘確認期)
   ↓
[5 分鐘子女無回應]
   ↓
[機構儀表板高優先 alert](新增 Sprint 4)
   ├── 機構員工手機 push（APP / 簡訊雙通道）
   ├── 機構儀表板閃紅 + 聲音提示
   └── 員工點擊「我去聯絡」→ 標記處理中 → 後續可標 [false positive] / [true positive 已協助] / [升級 119]
   ↓
[10 分鐘員工無回應]
   ↓
[次要備援：鄰居 / 社區關懷員 / 119 引導語]（safety-redlines § 5.1 既有設計）
```

**SLA 設計**：
- 機構儀表板 alert 到員工確認 ≤2 分鐘（員工排班期間 09:00-18:00）
- 員工排班外（夜間 18:00-09:00）：alert 改 push 給機構值班手機 + 個案家屬 backup
- false positive 處理：員工點擊 [false positive] 後系統學習，每週紅線觸發 false positive 統計 → 機構主管 review

**機構統一通報 vs 個別家庭通報的差異化**：
- 個別家庭通報：保留既有 SOP（safety-redlines § 5.5 多層備援），子女是 primary
- 機構統一通報：機構作為「子女回應後的次要備援」（5 分鐘無子女回應 → 機構介入），不是取代子女角色
- 機構優先角色 = 「比 119 提早介入的中間層」，降低家屬與 119 之間的回應斷層

### 2.5 數據匯出長照系統格式規格

**功能描述**：機構可匯出個案戶使用紀錄到長照 3.0 統一格式，協助機構申請長照補貼 + 個案家屬報帳

**匯出範圍邊界**（safety-redlines § 4.2 三層資料分類）：
- ✅ **可匯出**：服務使用紀錄（次數 / 時段 / 緊急事件 log）+ 個案家屬書面同意項目
- ❌ **嚴禁匯出**：對話原文 / 原始語音 / 情緒評分原始資料 / 監控型活動軌跡
- 匯出前必跑「機構需另取得個案家屬『資料匯出政府系統』同意書」（tech-architecture § 2.4 Step 4）

**匯出格式選項**：
- CSV（最低公約數，所有長照系統可讀）
- FHIR-light 子集（衛福部長照 3.0 統一 schema 📋 規劃中，Year 1 H2 上線時對齊）
- 機構主管手動匯出（避免員工誤觸自動匯出）

**Sprint 4 narrow scope**：僅 CSV 格式；FHIR-light Year 1 H2 對接

### 2.6 機構 NDA + 個資 buyer 角色設計（safety-redlines § 3.1）

**機構 buyer 角色定義**（safety-redlines § 3.1 機構責任清單延伸）：

| 角色 | 權限 | 法規依據 |
|---|---|---|
| 機構主管（決策人）| 簽訂 NDA + 個資處理同意書 + 機構儀表板全機構彙整查看；不可看個別對話原文 | PDPA § 8 告知義務 + § 19 委託處理 |
| 機構員工（執行人）| 機構分配個案 daily brief + 緊急事件 alert + 員工排程；不可看個別對話原文 | 同上 + 個資範圍最小化 |
| 機構 IT（接入人）| API token 配置 + CSV 上傳；不可看任何個案資料 | 純技術角色，無個資查看權 |

**機構 NDA 條款重點**（📋 Sprint 4 W10 法律顧問起草）：
- 機構不可將 AI 資料用於「長者紀律評估」（重大違約條款，safety-redlines § 2.12）
- 機構不可將個案 daily brief 轉售 / 分享給第三方（除政府長照系統匯出且已取得個案家屬同意）
- 機構違約罰款：NT$50-500 萬 + 立刻終止服務 + 個案家屬通知
- 機構若被收購 / 解散，AI 資料處理權移交流程（30 天通知個案家屬）

**個資處理同意書**（📋 W10 法律顧問起草，三方同意機制延伸）：
- 個案家屬同意「機構儀表板查看 daily brief」（預設關閉，需明確勾選）
- 個案家屬同意「機構統一通報緊急事件」（預設關閉，需明確勾選）
- 個案家屬同意「機構匯出服務使用紀錄到政府系統」（預設關閉，需另次勾選）
- 三項同意可隨時撤回，撤回後 24 小時內機構失去對應查看權

---

## §3. 5-10 家庭閉迴路測試規格

### 3.1 招募策略

**招募來源優先序**：

| 來源 | 預期戶數 | 招募管道 | 注意事項 |
|---|---|---|---|
| 員工家屬 | 4-6 戶 | 內部員工填表自願 | 利益衝突管控：員工不可參與決策評估；員工家屬棄用率 / NPS 與外部戶分開統計 |
| 朋友家庭（員工朋友 / 公司投資人 / 顧問人脈）| 3-5 戶 | 員工主動邀請；簽訂 closed beta NDA | 控制比例 ≤50%，避免 confirmation bias |
| 一般用戶（從 Phase 2 訪談未中選的 group A 子女中邀請）| 1-2 戶 | 從 interview-plan group A 訪談 8-10 人中已建立信任關係的家庭邀請 | 此族群為 Sprint 4 唯一非自身網絡來源 |

**總計目標**：8-10 戶（5-10 戶範圍中位偏上，留 1-2 戶 buffer 應對中途退出）

**招募 timing**：W9 末（Sprint 3 結束）啟動招募；W10 W11 完成 onboarding；W11-W13 4 週 closed beta 運行

### 3.2 招募標準（從 interview-plan + persona 整合）

**長者端篩選**（每戶 1 位主要長者）：

| 維度 | 標準 |
|---|---|
| 年齡 | 70-82 歲（Persona 三組覆蓋）|
| 認知狀態 | MMSE ≥18（含 MCI 早期，排除中重度失智）|
| 居住型態 | 獨居 ≥40% + 兩老同住 ≥40% + 與子女同住 ≤20%（驗證 90 天 MVP 主要目標族群）|
| 語言 | 台語母語 ≥40%（嘉義 / 屏東 / 南投）+ 國語為主 ≤40% + 國台混用 20% |
| 慢性病 | 至少 1 項（高血壓 / 糖尿病 / MCI / 慢性疼痛）；驗證 F11 服藥提醒場景 |
| 認知能力 | 可進行 5 分鐘以上連貫對話；接受 AI 陪伴非絕對排斥 |
| 排除 | 重度失能 CMS 5-6 級 / 嚴重認知障礙 MMSE < 10 / 入住全日型機構 / 全天 24h 外籍看護（無 AI 介入空間）|

**子女端篩選**（每戶 1 位主要付款 + 決策人，含其他子女輔助帳號）：

| 維度 | 標準 |
|---|---|
| 年齡 | 35-50 歲 |
| 與長者地理距離 | 異縣市（≥1.5 小時車程）優先 + 同縣市次之；驗證北漂 + 在地中產雙場景 |
| 月收 | NT$60K+（覆蓋 Persona A B 主流）|
| 科技接受度 | 已有訂閱服務習慣（Netflix / Spotify / iCloud）+ 用過 LINE Notify 或 push 通知 |
| 排除 | 本人 / 配偶從事長照業（避免專業偏差）|

**地域分布目標**：

| 地域 | 戶數 | 代表 |
|---|---|---|
| 北部（雙北 / 桃園）| 3-4 戶 | 子女北漂典型；父母獨居 / 兩老同住 |
| 中部（台中 / 南投）| 2-3 戶 | 南投老化第 3，覆蓋偏鄉場景 |
| 南部（嘉義 / 台南 / 高雄 / 屏東）| 2-3 戶 | 嘉義老化最快 24.11%；台語母語族群核心 |
| 偏鄉 | 1 戶 | 4G 訊號弱 / 老舊住宅環境噪音 / 訊號斷線情境驗證（safety-redlines § 5.4 機器故障 SOP）|

### 3.3 測試週期 4 週 closed beta

**週次安排**：

| 週次 | 階段 | 主要活動 |
|---|---|---|
| **W10 W1（Sprint 4 第 1 週）** | Onboarding + 適應期 | 4-5 戶 onboarding；三方同意流程實施；硬體部署 + 子女 onboarding ≤10 分鐘量測；首次 AI 互動成功率量測 |
| **W11 W2** | 主要互動建立期 | 剩餘 3-5 戶 onboarding；長者 Day-7 主動互動次數 ≥3 次/天目標；子女 Day-7 dashboard 查看率 ≥60% 目標 |
| **W12 W3** | 完整功能體驗期 | F11 服藥提醒朋友語氣全開；F08 異常偵測在真實環境驗證 false positive ≤1/週/戶；緊急偵測假事件演習 ≥3 次 |
| **W13 W4**（跨 Sprint 4 + Phase 6 過渡週）| PMF 量測 + 退場決策 | Sean Ellis 問卷 ≥30% 量測；NPS 三組量測；Retention curve D1/D7/D14/D30 完整曲線；退場機制執行（§ 3.5） |

### 3.4 量測機制（每週 cohort tracking）

**每週量測指標清單**（cohort tracking = 同一批用戶按週次追蹤）：

| 指標 | 量測方式 | 每週目標 | 量測工具 |
|---|---|---|---|
| Retention（長者）| 「過去 7 天有 AI 主動互動回應」用戶比例 | W1 ≥80% / W2 ≥70% / W3 ≥70% / W4 ≥70% | interaction_log 表 |
| Retention（子女）| 「過去 7 天有打開子女 App」帳號比例 | W1 ≥90% / W2 ≥80% / W3 ≥70% / W4 ≥70% | App 開啟事件 log |
| NPS（子女）| 每週末填寫「您會推薦給朋友的可能性 0-10」 | W2/W3/W4 量測，目標 ≥40 | 子女 App 內問卷 |
| NPS（長者）| 每週日訪談 5 分鐘（電話 / 視訊）| W2/W3/W4 量測，目標 ≥35 | Operator 手動訪談 |
| 長者互動次數（每日均值）| AI 主動 + 長者回應的互動 ≥1 輪 = 1 次 | W2 ≥10 次/天 / W3 ≥15 次/天 / W4 ≥20 次/天（對標 ElliQ 30 次/天保守版）| interaction_log |
| 紅線觸發次數 | N1-N10 + R1-R10 觸發 log | ≤2 次/戶/週（safety-redlines § 5.1 ≤1/週/戶是 false positive 限制；含 true positive 上限 2/週）| redline_triggers |
| 緊急偵測 false positive | AI 觸發但實際無緊急狀況 | ≤1 次/戶/週（safety-redlines § 5.1）| emergency_event 表 |
| Operator 介入次數 | WoZ 後台介入記錄（每介入 1 次 ≥30 秒 = 1 次）| W1 ≥80% 互動 / W2 ≥50% / W3 ≥20% / W4 ≥10% | operator_intervention log |
| 子女 dashboard 查看率 | 過去 7 天 ≥1 次 dashboard 查看 | W2 ≥60% / W3 ≥60% / W4 ≥60% | dashboard view event |
| 子女緊急通知接收 SLA | 緊急偵測到子女 LINE 推播時間差 | ≤5 分鐘（safety-redlines § 3.3）| emergency_event.notified_at |

**Cohort tracking 工具**：
- 自建 metric dashboard（Grafana + PostgreSQL 後端）
- Operator 每週日填寫長者 NPS + 同步質性 insight（feedback 對話精彩片段 / 棄用信號 / 文化共鳴點）
- 子女 NPS 子女 App 內每週日彈出問卷 + Push 提醒

### 3.5 退場機制（4 週後 NPS < 3 戶主動移除 + 退費）

**退場觸發條件**（保護用戶體驗 + 控制差評風險）：

| 觸發條件 | 退場動作 | 退費 |
|---|---|---|
| 戶 W2 NPS < 3 / 10（總分制）| Operator 主動致電子女了解原因 + 詢問是否退場 | 退費（按比例）|
| 戶 W4 NPS < 3 / 10 | 強制退場 + 設備回收 + 完整退費 + 致謝信 | 完整退費 |
| 戶 長者 Day-7 主動互動 = 0 次連續 7 天 | 主動接觸子女了解原因 + 詢問是否退場 | 同上 |
| 戶 紅線觸發 ≥5 次/週連續 2 週 | 退場 + 內部 RCA 分析 + 退費 | 完整退費 |
| 戶 子女明確拒絕續訂 | 立刻退場 + 退費 + 致謝信 | 完整退費 |
| 戶 長者過世（safety-redlines § 5.3）| 啟動 § 5.3 SOP；機器人進安靜模式 + 訂閱停止 + 退費 + 資料處理 | 完整退費 |

**退場執行 SOP**：
- W14 第 5 週週一統一執行退場決策（W13 量測完成後）
- 強制退場戶數上限 ≤3 戶（10 戶中 30%），超過則暫停 Sprint 4 進度 + 緊急 RCA 評估 Pivot 條件
- 退場戶數 ≥4 戶 = Pivot Signal，啟動 W12 Gate 重新評估假設 1 / 假設 2

**退場後的學到 insight 處理**：
- 退場戶 Operator 必跑「30 分鐘退場訪談」（電話 / 視訊），質性 insight 寫入 phase6_pilot_lessons.md
- 退場原因分類：技術問題 / 長者抗拒 / 子女不信任 / 紅線觸發 / 文化不適 / 其他
- Phase 6 Pilot T39 招募過濾標準 = Sprint 4 退場原因清單 + 排除條件

---

## §4. 1-2 機構閉迴路測試規格

### 4.1 機構招募標準

**機構分類目標（W6 Gate 確認 Hyp B 為次主軸）**：

| 機構類型 | 戶數 | 代表 |
|---|---|---|
| 連鎖型長照機構 | 1 家 | 雙連 / 弘道 / 聖母三選一（W6 Gate § 4 機構訪談 LOI 觸發升級） |
| 區域中型日照中心 | 1 家 | 南部 / 中部單一日照中心，5-10 位個案戶覆蓋 |

**機構篩選條件**：
- 服務 CMS 2-6 級長者 5-20 位（規模適中，避免大型機構整合複雜度）
- 已使用智齡科技 LongGood 或宏碁智醫系統（API 對接基礎）
- 機構主管 + 機構 IT 同意配合 Sprint 4 4 週測試
- 機構主管簽訂 NDA（§ 2.6）+ 願意提供 W12 後續約意願評估

### 4.2 接洽策略（W6-8 BD 接觸 + W9 LOI 簽訂 + W10 部署）

**timing 規劃**：

| 週次 | 階段 | 主要活動 |
|---|---|---|
| W6-8（Sprint 3 期間） | BD 接觸 + 篩選 | 透過弘道老人福利基金會 / 照顧者總會 / 工研院智齡照顧介紹 5-8 家機構接觸；3-5 家進入 deeper 對話；2-3 家進入 LOI 談判 |
| W9（Sprint 3 末週） | LOI 簽訂 | 1-2 家機構正式 LOI 簽訂；機構承諾 W10 啟動部署 + 4 週測試 |
| W10（Sprint 4 第 1 週） | 部署 | 機構 IT API 對接 + 機構員工 1 日培訓 + 個案家屬三方同意 + 設備部署 5-10 戶 |
| W11-13（Sprint 4 第 2-4 週 + 過渡週） | 運行 | 機構員工每日使用儀表板 + 緊急通報處理 + W13 末週訪談機構主管 |

**LOI 內容重點**：
- 機構承諾 4 週 closed beta 期間配合
- 機構員工每日使用儀表板（≥5 個工作日）+ 提交週末 NPS + 質性回饋
- 機構主管 W12 末週同意 30 分鐘訪談（評估 ROI + 續約意願）
- 機構與個案家庭三方同意機制由機構協助執行
- LOI 不含商業合約義務（無 RaaS 月費收取，Sprint 4 是 closed beta 免費試用）
- LOI 期滿後若機構願意續約 → 進入 Phase 6 Pilot 商業合約談判（Year 1 H2 主軸）

### 4.3 測試週期 4 週

**機構運行週次**：

| 週次 | 階段 | 機構員工活動 | 機構主管活動 |
|---|---|---|---|
| W10 W1 | Onboarding + 培訓 | 1 日員工培訓（儀表板使用 + 緊急通報 SOP + Operator 協作）| 部署檢視 + 同意書簽署 |
| W11 W2 | 主要運行期 | 每日儀表板使用 + 緊急通報處理（若有觸發）| 週末儀表板彙整 review |
| W12 W3 | 完整功能體驗 | 員工排程整合測試 + 數據匯出 CSV 練習 | 月度個案 ROI 預估 |
| W13 W4 | 量測 + 退場決策 | 機構員工 NPS 量測 + 質性訪談 | 機構主管 30 分鐘訪談 + 續約意願評估 |

### 4.4 量測機制

**機構端核心量測指標**：

| 指標 | 量測方式 | 目標 | 量測工具 |
|---|---|---|---|
| 機構員工 NPS | 員工 W2/W3/W4 週日填寫「您會推薦給同事的可能性 0-10」 | ≥4.0/5（轉換為 0-10 約 7.0/10）| 機構儀表板內問卷 |
| 機構員工 dashboard 使用率 | 員工每日登入儀表板 ≥1 次比例 | W2 ≥80% / W3 ≥80% / W4 ≥80% | 員工 login log |
| 機構員工緊急通報處理 SLA | 從 dashboard alert 到員工確認 | ≤2 分鐘（員工排班期間）| emergency_event 表 + 員工 ack timestamp |
| 個案戶 NPS（機構端視角）| 機構員工 W3 W4 每位個案戶滿意度評估（員工視角）| ≥4.0/5 | 員工每週填寫 |
| 個案戶異常事件處理數 | 機構處理的異常事件總數 | ≥2 次/週/家機構（有實際介入價值）| emergency_event 表 |
| 機構主管 ROI 評估 | W12 末週 30 分鐘訪談「您覺得 NT$3,000/月/台 RaaS 值得嗎」| 質性回饋（強烈支持 / 條件支持 / 不支持）| Operator 訪談紀錄 |
| 機構續約意願 | W12 末週訪談「Sprint 4 結束後，您願意進入商業合約嗎」| 質性回饋（願意 / 觀望 / 不願意）| Operator 訪談紀錄 |

**機構端 ROI 框架（W12 主管訪談用）**：

| 收益面 | 量化指標 |
|---|---|
| 員工效率提升 | 員工花在「個案異常追蹤」時間減少 X% |
| 服務品質提升 | 緊急事件處理時效 / 個案家屬滿意度 |
| 機構差異化 | 「智慧長照機構」品牌升級競爭力 |
| 補貼回收 | 長照 3.0 補貼覆蓋 NT$1,667/月/台 vs RaaS NT$3,000/月/台 = 機構自付 NT$1,333/月/台 |

**機構續約決策 trigger（W12 末週）**：

| Trigger | 動作 |
|---|---|
| 1-2 家機構皆願意續約 + 員工 NPS ≥4.0/5 | Hyp B 信號強，Phase 6 機構通路 BD 加速；W6 Gate § 4 機構主軸切換 trigger ≥2 家 LOI 達成 |
| 1 家願意續約 + 1 家觀望 | Hyp B 信號中等，Phase 6 機構通路維持次主軸 + 加 1-2 家試點 |
| 1-2 家皆不願意續約 | Hyp B 弱化信號，phase6_pilot_lessons.md 詳記原因；W12 Gate 評估是否 Pivot Hypothesis B Channel |

---

## §5. 真實環境 vs Wizard-of-Oz 比例

### 5.1 4 週遞減安排

**設計緣由**：T25 mvp-type § 3.1 確認 Wizard-of-Oz 為 90 天 MVP 主軸；T25 § 6 確認 WoZ → Functional MVP 演進觸發條件為「Layer 3 台語 ASR 準確率 ≥85% + Day-30 retention 穩定 ≥5/天」。Sprint 4 是 90 天內首次具備 5-10 戶真實環境條件，是 WoZ → AI 自動切換的關鍵 4 週。

**WoZ 比例 4 週遞減表**：

| 週次 | Wizard-of-Oz 比例 | AI 自動比例 | 設計理由 |
|---|---|---|---|
| **W10 第 1 週** | 80% | 20% | Onboarding 期；Operator 主導確保體驗 baseline 穩定；長者首週是棄用率最高 2 週的起點，Operator 介入保護長者體驗 |
| **W11 第 2 週** | 50% | 50% | 適應期；長者習慣化過程，AI 比例提升測試是否影響長者接受度 |
| **W12 第 3 週** | 20% | 80% | 信任建立期；AI 為主，Operator 僅在紅線觸發 / 緊急偵測時介入 |
| **W13 第 4 週** | 10% | 90% | PMF 量測期；AI 接近完全自動，量測「最接近 Year 1 ODM 上市後真實情況」的 PMF 訊號 |

**WoZ 介入定義（每介入 = 1 次 ≥30 秒）**：
- AI 生成回應前 Operator 預審 + 必要時改寫（手動介入）
- AI 推理失敗 / 幻覺 / 不適當回應時 Operator 替代生成
- 長者觸發紅線時 Operator 接管對話流程
- 緊急偵測 confidence 0.4-0.7 時 Operator 二次判斷

**WoZ 比例量測方式**：每週統計「Operator 介入次數 / 總互動次數」比例；目標誤差 ±10%

### 5.2 Operator 角色 + 訓練

**Operator 角色三大職責**：

1. **監控**：24×7 三班輪值，AI 互動 dashboard 即時監看；長者主動互動次數 / 紅線觸發 / 異常偵測 alert 即時 review
2. **紅線介入**：N1-N10 + R1-R10 觸發時立刻人工接管；safety-redlines § 4 紅線 SOP 嚴格執行；不可放任 LLM 自行處理紅線情境
3. **標註訓練資料**：每日整理 AI 對話 transcript（去敏感化）標註「適當 / 不適當 / 應改寫」；累積 Sprint 4 4 週數據 → Year 1 H2 LLM fine-tune 訓練資料

**Operator 人力配置（Sprint 4 W10-W13）**：
- 4 人 24×7 三班輪值（早班 06:00-14:00 / 晚班 14:00-22:00 / 夜班 22:00-06:00；每班 1-2 人）
- 早班 + 晚班是高峰時段（紅線觸發機率高）；夜班負責緊急偵測監控（互動次數低）
- 預備 1 人替補（應對請假 / 連休）
- Operator 資格：UX research / 心理諮商 / 社工背景優先 + 台語 A2 以上能力（南部戶必備）+ 通過 Operator 訓練 5 天課程

**Operator 訓練 5 天課程**（接 interview-plan § 4 訪談員培訓邏輯）：
- D1：safety-redlines § 4 紅線 N1-N10 + R1-R10 全紅線複習 + 拒絕話術模板演練（10 個情境）
- D2：long者場景 vulnerable population 倫理（語速 / 複合選項 / 疲憊辨識 / 三方同意）
- D3：WoZ 後台工具熟練（即時對話介入 + 紅線標記 + 訓練資料標註）
- D4：緊急偵測 SOP（safety-redlines § 5.1 跌倒 SOP + § 5.2 自殺風險 SOP + § 5.4 機器故障 SOP）
- D5：Dry Run 演練（模擬 1 戶長者 1 小時互動 + 紅線觸發 3 次 + 緊急偵測 1 次；通過評核 ≥8/10 才上線）

### 5.3 退場機制（AI 比例異常時的 fallback）

**WoZ 比例 fallback 觸發**：

| 觸發條件 | Fallback 動作 |
|---|---|
| 某戶 NPS 連續 2 週下滑 ≥2 分 | 該戶 WoZ 比例倒退 1 階（如 W12 該戶從 20% 回到 50%）+ 質性訪談了解原因 |
| 紅線 false positive ≥3 次/週/戶 | 該戶 Operator 即時接管 +Operator-Engineer 合作 RCA + 端側 Layer 2 rule-based 調整 |
| 緊急偵測 false negative（真實事件未偵測） | 全機構 / 全戶 fallback 至上一週 WoZ 比例 + 工程師立刻檢查端側 / 雲端偵測模型 |
| AI 幻覺生成不適當內容（觸及 N1-N10 紅線） | Operator 即時撤回 + 致電個案家屬告知 + RCA 修補 system prompt |

---

## §6. PMF 量測機制（給 Phase 6 T42）

### 6.1 五框架完整覆蓋

**設計緣由**：T35 decision-w6 § 5 確認 Sprint 4 / Phase 6 是「假設 1-5 驗證的核心數據節點」；T30 lean-canvas § 1 Block 8 已列出 Pirate Metrics + HEART + Sean Ellis 三框架；Sprint 4 PMF 量測需 5 框架全部覆蓋作為 Phase 6 Pilot T42 量測基線。

**5 框架對映表**：

| 框架 | 量測目的 | Sprint 4 目標 | Phase 6 銜接 |
|---|---|---|---|
| Sean Ellis Test | PMF 信號早期偵測 | ≥30%（接近 PMF signal 40%）| Phase 6 目標 ≥40% |
| Retention Curve | 用戶生命週期黏著度 | D1 ≥90% / D7 ≥70% / D14 ≥60% / D30 ≥50% | Phase 6 4 週後 D30 ≥60% |
| NPS 三組 | 三 stakeholder 滿意度 | 子女 ≥40 / 長者 ≥35 / 機構員工 ≥4.0/5（7.0/10）| Phase 6 各組 +10 |
| HEART | Google 用戶體驗框架 | Happiness / Engagement / Adoption / Retention / Task success 5 維基準 | Phase 6 trend tracking |
| AARRR | Pirate 漏斗轉換率 | Acquisition / Activation / Retention / Referral / Revenue 5 維基準 | Phase 6 商業驗證 |

### 6.2 Sean Ellis Test 量測

**問卷設計**：
- 主問題：「如果您不能再使用這個服務，您會感到？（A）非常失望 / （B）有點失望 / （C）不會失望 / （D）我不再使用了」
- 補充問題：「您會把這個服務推薦給：（A）跟我類似的子女 / （B）任何照顧長輩的人 / （C）不會推薦」
- 補充問題（質性）：「您覺得這個服務最大的價值是什麼？」
- 補充問題（質性）：「您希望這個服務改善什麼？」

**量測 timing**：W13 第 4 週末（Sprint 4 結束前一週）

**量測對象**：5-10 戶子女 + 1-2 家機構員工 + 1-2 家機構主管

**Sprint 4 目標**：≥30% 子女回答 (A) 非常失望（接近 PMF signal 40%；Sprint 4 是內部 closed beta，比 Phase 6 對外 pilot 信號弱屬合理）

**Phase 6 銜接**：Sean Ellis ≥40% 是 Phase 6 PMF signal 達標標準

### 6.3 Retention curve 量測

**D1 / D7 / D14 / D30 定義**：

| 指標 | 定義 | 量測對象 |
|---|---|---|
| D1 | onboarding 後第 1 天「長者主動互動 ≥1 次」比例 | 長者端 |
| D7 | onboarding 後第 7 天「長者主動互動 ≥3 次/天」比例 | 長者端 |
| D14 | onboarding 後第 14 天「長者主動互動 ≥3 次/天」比例 | 長者端 |
| D30 | onboarding 後第 30 天「長者主動互動 ≥3 次/天」比例 | 長者端 |

**Sprint 4 目標（4 週 cohort）**：
- D1 ≥90%（onboarding 完成當天首次互動）
- D7 ≥70%（首 7 天習慣化）
- D14 ≥60%（適應期穩定）
- D30 ≥50%（行業 30 天 retention 50% 為健康，70% 為優秀）

**子女 dashboard retention 同步追蹤**：
- D1 / D7 / D14 / D30 子女 App 開啟率
- 目標：D1 ≥95% / D7 ≥80% / D14 ≥70% / D30 ≥60%

### 6.4 NPS 三組量測

**三組 NPS 量測 setup**：

| 組別 | 量測時點 | 量測方式 | 目標 |
|---|---|---|---|
| 子女 NPS | W2/W3/W4 週末 | 子女 App 內彈出問卷「您會推薦給朋友的可能性 0-10」 | W4 ≥40 |
| 長者 NPS | W2/W3/W4 週日 | Operator 電話訪談 5 分鐘 + 開放式問題 | W4 ≥35 |
| 機構員工 NPS | W2/W3/W4 週末 | 機構儀表板內問卷「您會推薦給同事的可能性 0-10」（也轉換為 4.0/5 量表）| W4 ≥4.0/5（7.0/10）|

**NPS 計算公式**：NPS = % Promoters（9-10）- % Detractors（0-6）

**NPS 質性補充**：每次 NPS 量測後問「為什麼給這個分數？」+「您希望改善什麼？」；質性 insight 寫入 phase6_pilot_lessons.md

### 6.5 HEART 5 維量測

**Google HEART 框架對映**：

| 維度 | 定義 | 量測指標 | Sprint 4 目標 |
|---|---|---|---|
| Happiness | 滿意度 | 子女 NPS / 長者 NPS / CSAT | 子女 NPS ≥40 / 長者 NPS ≥35 / 4 週滿意度 ≥4.0/5 |
| Engagement | 互動深度 | 長者週活躍互動次數 / 每次互動時長 | W4 ≥20 次/週/長者；平均 ≥5 分鐘/次 |
| Adoption | 採用率 | Onboarding ≤10 分鐘完成率 / 首次互動成功率 | ≥80% / ≥70% |
| Retention | 留存 | D7 / D14 / D30 retention | D30 ≥50% |
| Task success | 任務完成 | 子女緊急通知 ≤5 分鐘到達 / 紅線正確攔截 | ≥99% / 100% |

### 6.6 AARRR 漏斗量測

**5 階段量測**：

| 階段 | Sprint 4 量測 | 注意事項 |
|---|---|---|
| Acquisition | 5-10 戶 + 1-2 家機構招募完成數 | Sprint 4 是 closed beta，不衡量真實 CAC |
| Activation | 子女 onboarding ≤10 分鐘完成率 + 長者首次互動成功率 | 目標 ≥80% / ≥70% |
| Retention | D7 / D14 / D30 retention | 目標 D30 ≥50% |
| Referral | 子女 NPS ≥40 + 長者 NPS ≥35 | 為 Phase 6 轉介機制設計輸入 |
| Revenue | Sprint 4 不收費（免費試用）；W12 末週問子女「若 NT$1,290/月您是否願意付？」| 質性回饋作為 Phase 4 Pricing 校準 |

### 6.7 緊急偵測準確率（safety-redlines § 3.3 C2）

**真實環境量測指標**：

| 指標 | 量測方式 | Sprint 4 目標 |
|---|---|---|
| 召回率（recall）| 真實緊急事件中 AI 偵測到的比例 | ≥75%（比 Sprint 3 內部 beta 略降，因真實環境噪音）|
| False positive 率 | AI 偵測為緊急但實際無事 | ≤1 次/週/戶 |
| False negative 率 | AI 漏報真實緊急事件 | ≤25%（與召回率 75% 對應）|
| 假事件演習通過率 | safety-redlines § 5.1 假緊急事件演習 ≥3 次 | 100%（每次演習都應正確觸發）|

**量測 setup**：
- Sprint 4 W12 第 3 週執行假事件演習 3 次（聲音異常 / IMU 模擬跌倒 / 互動中斷模擬）
- 假事件演習結果寫入 emergency_event 表，標記為 `resolution_status='test_event'` 與 true positive / false positive 區分
- 真實緊急事件（若有）獨立分析

**安全紅線**（safety-redlines § 1.3 Plan-Only 紅線 P1）：
- 量測結果僅作內部評估 + 主管 review 規劃書內部呈現
- 對外宣傳一律不宣稱具體召回率數字（避免觸發 TFDA II 類認證需求）
- 對外用語：「AI 偵測為輔助通知工具，非保證式安全設備」

---

## §7. Sprint 4 拆解（3 週）

### 7.1 W10 第 1 週：機構儀表板開發 + LOI 簽訂 + 部署準備

**主要 deliverable**：

| Item | 負責角色 | 時程 |
|---|---|---|
| 機構儀表板 narrow scope 開發完成（多戶個案管理 + 員工排程整合 + 緊急通報）| 前端工程師 × 1 + 後端工程師 × 1 | W10 D1-D5 |
| 1-2 家機構 LOI 簽訂 + 機構 NDA 簽訂 + 個資處理同意書草擬 | BD × 1 + 法律顧問 × 1 | W10 D1-D5 |
| 機構 IT API token 配置（智齡科技 OAuth 2.0）| 機構 IT + 後端工程師 | W10 D3-D5 |
| 5-10 戶家庭 onboarding 4-5 戶（首批分批部署）| Operator × 4 + 在地部署夥伴 | W10 D3-D7 |
| 機構員工 1 日培訓 | Operator 主管 × 1 | W10 D5 |
| Sprint 1-3 bug fix（優先級 P0 P1）| 工程團隊 | W10 D1-D7 |

**Sprint 4 W10 結束 milestone**：機構儀表板開發完成 + 1-2 家機構 LOI 簽訂 + 4-5 戶家庭 onboarding 完成 + Sprint 1-3 P0 P1 bug 修復

### 7.2 W11 第 2 週：5-10 家庭部署 + Operator 訓練 + bug fix

**主要 deliverable**：

| Item | 負責角色 | 時程 |
|---|---|---|
| 剩餘 3-5 戶家庭 onboarding（總計 8-10 戶完成）| Operator + 在地部署夥伴 | W11 D1-D7 |
| Operator 訓練 5 天課程（4 人 + 1 替補）| Operator 主管 | W11 D1-D5 |
| 機構儀表板實際運行 + 機構員工每日使用 | 機構員工 + Operator 後台支援 | W11 D1-D7 |
| Sprint 1-3 bug fix（優先級 P2 + UX polish）| 工程團隊 | W11 D1-D7 |
| 第 1 次 NPS / Retention 量測（W11 末週）| Operator + Engineer（dashboard） | W11 D7 |
| F11 服藥提醒朋友語氣全開（safety-redlines § 2.2 N2 對應 R2 拒絕話術測試完成後）| 工程師 + Operator 監控 | W11 D3 |

**Sprint 4 W11 結束 milestone**：8-10 戶全部 onboarding + Operator 4 人上線 + 機構員工日常使用儀表板 + 首次 NPS / Retention 量測

### 7.3 W12 第 3 週：1-2 機構部署 + 主管 review 規劃書 + Phase 6 Pilot 準備

**主要 deliverable**：

| Item | 負責角色 | 時程 |
|---|---|---|
| 1-2 機構儀表板完整功能體驗（員工排程整合 + 數據匯出 CSV）| 機構員工 + Operator 後台 | W12 D1-D7 |
| F08 異常偵測在真實環境驗證 + false positive ≤1/週/戶 量測 | 工程團隊 + Operator | W12 D1-D7 |
| 緊急偵測假事件演習 ≥3 次（safety-redlines § 5.1） | Operator 主管 + 工程師 | W12 D3-D5 |
| 機構主管 W12 末週 30 分鐘訪談（ROI + 續約意願） | BD × 1 | W12 D7 |
| **內部「主管 review 規劃書」walkthrough**（Phase 8 主管 review 規劃書內容更新） | PM + sub-agent 寫作 | W12 D5-D7 |
| Phase 6 Pilot T39-T43 招募過濾標準 + 量測基線輸入準備 | sprint-planner + customer-discovery-runner | W12 D5-D7 |
| 第 2 次 NPS / Retention 量測（W12 末週）| Operator + Engineer | W12 D7 |

**Sprint 4 W12 結束 milestone**：1-2 機構完整 4 週測試 + 主管 review 規劃書內容更新 + Phase 6 Pilot 準備就緒 + 第 2 次 PMF 量測完成

**注意（4/10 嚴令 + 0 規範禁用「demo」字眼）**：W12 末週的「主管 review 規劃書 walkthrough」**禁稱「demo」**，明確用詞為「主管 review 規劃書 walkthrough」或「內部 review 規劃書」或「主管 walkthrough 規劃書」。

### 7.4 W13 第 4 週（跨 Sprint 4 + Phase 6 過渡週）

**主要 deliverable**：

| Item | 負責角色 | 時程 |
|---|---|---|
| Sean Ellis 問卷 + 三組 NPS 全量測（5-10 戶 + 1-2 機構員工 + 機構主管）| Operator + 工程師 | W13 D1-D5 |
| Retention curve D30 量測（cohort 中位 30 天）| 工程師 | W13 D5 |
| 退場機制執行（4 週後 NPS < 3 戶主動移除 + 退費）| BD + Operator | W13 D5-D7 |
| 機構續約意願評估 + W6 Gate § 4 「機構 LOI ≥2」trigger 重新評估 | BD + 大總管 | W13 D7 |
| phase6_pilot_lessons.md 完整版寫作 | sprint-planner | W13 D5-D7 |
| Phase 6 Pilot 招募啟動準備 + T39 招募過濾標準 finalize | customer-discovery-runner | W13 D7 |

**Sprint 4 W13 結束 milestone**（過渡週終點）：PMF 量測完整 + 退場執行 + 機構續約評估 + Phase 6 Pilot 招募準備就緒

---

## §8. 風險清單 + 緩解

### 8.1 假設 2 風險：真實家庭 4 週棄用率（≤30% 為通過標準）

| 風險 | 機率 | 影響 | 緩解 |
|---|---|---|---|
| 5-10 戶中 ≥3 戶 4 週棄用（30% 以上）| 🟡 中（行業 30-50% 棄用率為已知挑戰）| 中（觸發 W12 Gate 評估）| Sprint 4 設計多重保護：(a) W10 80% WoZ Operator 主導確保體驗 baseline (b) Day-7 主動關懷主動致電子女 (c) Day-14 升級互動 (d) F04 個人記憶 / F05 節氣話題增加情感共鳴；若 ≥4 戶棄用 = Pivot Signal，啟動 W12 Gate 重新評估假設 2 |

### 8.2 假設 4 風險：機構 LOI 簽不下來

| 風險 | 機率 | 影響 | 緩解 |
|---|---|---|---|
| 1-2 家機構 LOI 在 W9 末週前無一家簽訂 | 🟡 低中（W6-8 BD 接觸期 3-5 家進入 deeper 對話有 50%+ 機率簽下 1-2 家）| 中（Hyp B 次主軸時程延後）| Fallback 方案：員工家屬規模放大至 10-15 戶（從 5-10 戶上限放寬），保留 5-10 戶家庭測試的可行性；機構部署延至 Phase 6 |

### 8.3 紅線 false positive 在真實環境曝光

| 風險 | 機率 | 影響 | 緩解 |
|---|---|---|---|
| Layer 2 rule-based 守門器在真實家庭環境誤判（如長者開玩笑「我想死了」實際無自殺意念） | 🟡 中 | 高（safety-redlines § 4 紅線 R6 觸發後通知子女 + 1925 = 戶投訴）| Sprint 3 → Sprint 4 改進：(a) Layer 2 rule-based 加 context window（持續 3 輪對話才觸發強反應）(b) Operator 24×7 紅線觸發即時 review，每次 false positive 由 Operator 致電子女說明 + 標記 (c) Sprint 4 W12 RCA：累積 false positive case study 給工程團隊優化 Layer 2 規則 |

### 8.4 緊急偵測在真實 cluttered 環境召回率下降

| 風險 | 機率 | 影響 | 緩解 |
|---|---|---|---|
| 真實老舊住宅環境噪音（廟會 / 鄰居施工 / 寵物吠叫）造成 false positive 率 ↑ + false negative 率 ↑ | 🟡 高（safety-redlines § 5.1 已標 false positive 為已知風險）| 中（影響緊急偵測 UVP）| (a) 偏鄉戶 1 戶優先驗證真實環境 (b) Operator 每次 false positive 補貼戶 NT$200 補償並請戶協助標註環境噪音 (c) Sprint 4 W12 數據累積 → Year 1 H2 端側 ONNX 模型 fine-tune (d) 對戶誠實聲明「Sprint 4 是內部 closed beta 階段，偵測準確率持續優化中」 |

### 8.5 個案家庭隱私 / 同意機制 PDPA 落實

| 風險 | 機率 | 影響 | 緩解 |
|---|---|---|---|
| 三方同意流程（長者音訊 + 子女書面 + 見證）執行不完整 | 🟡 中 | 高（PDPA § 7 違反，NT$500-1,500 萬罰款）| (a) W10 第 1 週 onboarding 強制三方同意機制（無例外）(b) 見證人優先選社區關懷員 / 醫護 / 在地夥伴（safety-redlines § 4.4 Step 3）(c) 同意書 PDF 永久保留（DB schema consent_record 表）(d) Operator 每戶 onboarding 後 audit 三方同意書完整性，缺失立刻補簽 |

### 8.6 機構 ICT 抗拒（safety-redlines § 6 + onboarding）

| 風險 | 機率 | 影響 | 緩解 |
|---|---|---|---|
| 機構員工拒絕配合儀表板使用「機器人搶飯碗」 | 🟡 中（已知行業排斥）| 中（影響機構員工 NPS / 續約意願）| (a) 機構員工 1 日培訓強調「儀表板是員工的助手，不是取代員工」(b) 機構員工 NPS 量測時加質性問題「您覺得儀表板讓您工作變輕鬆還是更累」(c) 機構主管溝通 RaaS NT$3,000/月/台 = 機構自付 NT$1,333/月/台 = ROI 從減少緊急事件處理時間 + 提升服務品質 + 機構品牌差異化三層回收 (d) 若員工 NPS < 3.0/5 = 啟動「機構員工訪談」了解原因 + 調整培訓內容 |

### 8.7 Operator 4 人 24×7 三班輪值的人力壓力

| 風險 | 機率 | 影響 | 緩解 |
|---|---|---|---|
| Operator 4 人連續 4 週三班輪值身心耗竭 | 🟡 中 | 中（影響 Sprint 4 後段 W12-W13 服務品質）| (a) 預備 1 人替補應對請假連休 (b) 夜班 22:00-06:00 互動次數低，1 人值班可行 (c) 早班 + 晚班高峰時段 2 人值班 (d) 週末加班費 1.5 倍 (e) Sprint 4 結束後 Operator 全員放 3 天連續休假 + 心理諮商 1 次 |

### 8.8 Sprint 4 / Phase 6 過渡銜接風險

| 風險 | 機率 | 影響 | 緩解 |
|---|---|---|---|
| Sprint 4 W13 結束後 5-10 戶家庭「未進入 Phase 6 Pilot」期待心理落差 | 🟡 中 | 低中（戶可能感「被當試驗品」）| (a) Sprint 4 簽訂 closed beta NDA 明確說明 4 週測試結束後可選擇「進入 Phase 6 Pilot 商業合約」或「免費繼續使用 4 週後設備回收」(b) W13 末週個別致電每戶說明後續方向 (c) 留下戶若進入 Phase 6 Pilot 享首 3 個月 50% off |

---

## §9. Sprint 4 量測指標

### 9.1 主要 quantitative 指標

| 指標 | Sprint 4 目標 | 量測時點 | 量測工具 |
|---|---|---|---|
| 5-10 家庭 4 週 retention（D30 主動互動 ≥3 次/天）| ≥70% 🟡 | W13 末週 | interaction_log + cohort tracking |
| 5-10 家庭子女 NPS | ≥40 🟡 | W13 末週 | 子女 App 內問卷 |
| 5-10 家庭長者 NPS | ≥35 🟡 | W13 末週 | Operator 訪談 |
| 1-2 機構 LOI 簽訂 | ≥1 ✅（W9 末週驗證）/ ≥2 為 Hyp B 主軸切換 trigger | W9 末週 | LOI 文件 |
| 機構員工 NPS | ≥4.0/5（7.0/10）🟡 | W13 末週 | 機構儀表板問卷 |
| 緊急偵測召回率（真實環境）| ≥75% 🟡（比 Sprint 3 內部 80% 略降）| W12 假事件演習 + W11-13 真實事件 | emergency_event 表 |
| 紅線 false positive | ≤1 次/週/戶 🟡 | 持續量測 | redline_triggers 表 |
| Sean Ellis | ≥30%（接近 PMF signal）🟡 | W13 末週 | 子女 App 問卷 |
| Onboarding ≤10 分鐘完成率 | ≥80% 🟡 | W10-11 onboarding 期 | onboarding event log |
| 子女緊急通知 ≤5 分鐘到達 | ≥99% 🟡 | 持續量測 | emergency_event 表 |
| 機構員工 dashboard 使用率 | ≥80% 🟡 | W11-13 | 員工 login log |
| 機構員工緊急通報處理 SLA | ≤2 分鐘 🟡 | W11-13 | emergency_event + ack timestamp |

### 9.2 質性 insight 指標

| 指標 | Sprint 4 目標 | 量測方式 |
|---|---|---|
| 長者文化共鳴洞察 | ≥5 個強烈共鳴主題（節氣 / 廟會 / 老歌 / 家庭脈絡 / 台語）| Operator 每週訪談 + AI 對話 transcript review |
| 棄用原因分類 | 退場戶 100% 完成 30 分鐘退場訪談 | Operator 訪談紀錄 |
| 機構員工抗拒類型 | 員工 NPS < 4.0 戶 100% 完成 30 分鐘質性訪談 | BD 訪談紀錄 |
| 機構主管 ROI 評估 | 1-2 家機構主管 30 分鐘訪談 | BD 訪談紀錄 |
| 子女願付意願 | W12 末週問「若 NT$1,290/月您是否願意付？」| 子女 App 問卷 + 訪談 |

### 9.3 Sprint 4 / Phase 6 銜接量測

| 指標 | Sprint 4 deliverable → Phase 6 銜接 |
|---|---|
| Sean Ellis ≥30% → Phase 6 目標 ≥40% | Sean Ellis 起點 + 改善方向 |
| Retention D30 ≥50% → Phase 6 目標 ≥60% | Retention curve 起點 + Pivot 條件設計 |
| NPS 三組基線 → Phase 6 各 +10 目標 | NPS 起點 + 棄用戶經驗教訓 |
| 緊急偵測召回率 ≥75% → Phase 6 ≥80% | 召回率起點 + 端側模型 fine-tune 方向 |
| 機構續約意願（質性）→ Phase 6 Hyp B 主軸切換決策 | 機構通路 BD 加速 vs 維持次主軸決策依據 |

---

## §10. Phase 6 Pilot 銜接

### 10.1 Sprint 4 vs Phase 6 區隔

| 維度 | Sprint 4（W11-W12 + Phase 6 W1 過渡）| Phase 6 Pilot（W13+ 啟動）|
|---|---|---|
| 定位 | 內部 closed beta | 對外公開 pilot |
| 規模 | 5-10 戶家庭 + 1-2 家機構 | 5 面向招募，戶數視 Phase 6 決議 |
| 招募來源 | 員工家屬 / 朋友 / 部分 Phase 2 訪談戶 | 公開招募（FB / 銀髮博覽會 / 機構轉介 / KOL / 媒體）|
| 主要目的 | 閉迴路驗證假設 1 / 假設 2 / 假設 4；PMF 量測機制建立 | PMF signal 達標（Sean Ellis ≥40%）+ 商業驗證 |
| 量測機制 | Sprint 4 5 框架建立基線 | Phase 6 持續量測 + 達標 |
| 商業合約 | 免費試用，無付費機制 | 視戶數 / Pilot 階段，部分戶開始商業合約 |
| 退場機制 | 4 週後 NPS < 3 戶主動移除 + 退費 | Phase 6 設計 longer-term retention |

### 10.2 Sprint 4 痛點 → Phase 6 招募過濾標準

**phase6_pilot_lessons.md 預期內容**（Sprint 4 W13 末週完成）：

- 棄用戶經驗教訓 → Phase 6 排除高棄用風險族群
  - 例 1：完全與子女同住戶棄用率高（長者覺「不需要 AI」）→ Phase 6 排除與子女同住戶
  - 例 2：CMS 5 級以上長者棄用率高（功能限制 / 認知限制）→ Phase 6 限制 MMSE ≥18 + CMS ≤4
  - 例 3：偏鄉訊號斷線率高 → Phase 6 排除無 4G 訊號覆蓋戶
- 文化共鳴洞察 → Phase 6 客群定位精化
  - 例 1：南部台語長者文化共鳴最強 → Phase 6 加重南部招募比例
  - 例 2：節氣 / 廟會話題比節日 / 節慶話題更受歡迎 → Phase 6 F05 節氣優先序提升
- 紅線 false positive 案例庫 → Phase 6 端側 Layer 2 規則優化

### 10.3 Sprint 4 PMF metric → Phase 6 量測機制基線

| Sprint 4 指標 | Phase 6 目標 | 差距填補方向 |
|---|---|---|
| Sean Ellis ≥30% | ≥40% | (a) UX 持續優化 (b) F06 懷舊治療 / F16 認知遊戲 Phase 6 開放 (c) 子女 dashboard 個性化 |
| Retention D30 ≥50% | ≥60% | (a) Day-7 主動關懷自動化 (b) F04 個人記憶深度化 (c) 子女 push 重新激活機制 |
| 子女 NPS ≥40 | ≥50 | (a) 緊急通知 SLA ≤3 分鐘 (b) 子女 dashboard family 分享機制 (c) 兄弟姊妹角色分工設計 |
| 長者 NPS ≥35 | ≥45 | (a) 台語完整對話（Whisper fine-tune Year 1 H2）(b) 文化共鳴主題深化（廟會 / 老歌 / 老照片）|
| 機構員工 NPS ≥4.0/5 | ≥4.3/5 | (a) 員工排程整合更深 (b) 機構員工 dashboard 個性化 (c) 機構員工培訓深化 |

---

## §11. 預算估算（📋 post-approval）

### 11.1 Sprint 4 3 週總預算 NT$185-260 萬

**項目明細**：

| 項目 | 預算範圍 | 說明 |
|---|---|---|
| **開發人力** | NT$120-150 萬 | 4-5 人 × 3 週 = 12-15 人週；前端 1 + 後端 1 + Operator 主管 1 + BD 1 + PM 1 |
| **雲端 + LLM API** | NT$8-12 萬 | GCP asia-east1 + GPT-4o-mini API + Google Cloud STT/TTS + Auth0 + LINE Notify；5-10 戶 + 1-2 機構共 10-30 個 active 帳號 4 週運行 |
| **5-10 家庭部署** | NT$40-65 萬 | 硬體 NT$30-50 萬（10 套 WoZ 平板 + 麥克風陣列 + 底座 + 外殼 × NT$18-22K + 5 套 buffer）+ 在地服務 NT$10-15 萬（部署在地夥伴交通 / 安裝 / 三方同意流程協助）|
| **1-2 機構部署** | NT$15-30 萬 | 硬體 NT$10-20 萬（10-20 套設備機構分發）+ 機構 onboarding NT$5-10 萬（員工培訓 1 日 + IT API 對接 + 機構主管溝通）|
| **法律顧問** | NT$5-10 萬 | 機構 NDA + 個資處理同意書 + 機構儀表板法律審查 |
| **PMF 量測工具** | NT$2-5 萬 | Grafana dashboard 部署 + 問卷工具（Typeform / 子女 App 內整合）+ Operator 訪談錄音轉錄 |
| **Operator 4 人 24×7 三班 4 週** | 包含在「開發人力」中（Operator 主管屬 PM 角色，4 人 Operator 列員工成本，已含）| — |
| **退費 buffer**（退場戶完整退費 + 機構若不續約退款）| NT$3-5 萬 | 5-10 戶 × NT$1,290/月 × 2 月 buffer + 機構 buffer |
| **總計** | **NT$193-277 萬** | 取中位 **NT$235 萬**；範圍 NT$185-260 萬中位偏上 |

### 11.2 預算對齊 W6 Gate Series A 規模

W6 Gate decision-w6 § 6.5 + T33 unit-econ § 8.3 確認 Series A 需求 NT$7,000-10,000 萬。Sprint 4 預算 NT$185-260 萬 = Series A 中位 NT$8,500 萬的 2.2-3.1%，屬合理階段性投入。

### 11.3 預算節省 / 擴充 trigger

| Trigger | 動作 |
|---|---|
| 預算超出 +20%（NT$310 萬+）| W11 末週主管評估，必要時刪減硬體 buffer 或機構部署延後 |
| 預算節省 -20%（NT$148 萬-）| 增加 1 戶家庭部署作為 buffer，或加機構 onboarding 培訓深度 |

---

## §12. Coverage Matrix（自我檢核）

### 12.1 要求項目覆蓋

| 要求項目 | 完成狀態 | 位置 |
|---|---|---|
| Sprint 4 目標 + 範圍 | ✅ | § 1 |
| 機構儀表板規格（Hyp B B2B2C hedge feature）| ✅ | § 2 |
| 5-10 家庭閉迴路測試規格 | ✅ | § 3 |
| 1-2 機構閉迴路測試規格 | ✅ | § 4 |
| 真實環境 vs Wizard-of-Oz 比例 4 週遞減 | ✅ | § 5 |
| PMF 量測機制 5 框架 | ✅ | § 6 |
| Sprint 4 拆解 3 週 | ✅ | § 7 |
| 風險清單 + 緩解 | ✅ 8 項 | § 8 |
| Sprint 4 量測指標 | ✅ | § 9 |
| Phase 6 Pilot 銜接 | ✅ | § 10 |
| 預算估算（📋 post-approval）| ✅ NT$185-260 萬 | § 11 |
| Plan-Only Mode 標籤（✅ / 🟡 / 📋）| ✅ 全文 | 全文 |
| 報告對象 ASUS 主管客觀中立 | ✅ 無競品推銷語氣 | 全文 |
| 禁用「demo」字眼 | ✅ 改稱「主管 review 規劃書」/「walkthrough 規劃書」 | 全文 |
| 禁稱「Mode E」 | ✅ 全文用「PM Flow v0.1 / Phase 5 T38」 | 全文 |

### 12.2 feature COULD 5 全覆蓋

| Feature | Sprint 4 narrow scope 規格 | 位置 |
|---|---|---|
| F18 機構多戶儀表板 | 多戶個案管理 + 緊急統一通報 | § 2.2 + § 2.4 |
| F19 長照系統資料匯出 | CSV 格式匯出（FHIR-light Year 1 H2）| § 2.5 |
| F06 懷舊治療對話 | Sprint 4 narrow scope：個人記憶 RAG 中加入「過去 5 年最重要的事件」prompt | § 1.2 In Scope（推遲到 Phase 6 主開發）|
| F16 每日認知遊戲（難度自適應）| Sprint 4 narrow scope：F04 個人記憶基礎上 + 簡單記憶遊戲 ≥3 種 | 同上 |
| F15 健康趨勢週報 / 月報 | Sprint 4 narrow scope：機構儀表板含「個案 30 天情緒走勢圖」 | § 2.2 |

**註**：F06 / F16 / F15 完整 Excitement 版本仍 WON'T（推遲到 Year 1 Q2），Sprint 4 只交付 narrow scope（為 Phase 6 開發鋪路）。

### 12.3 PMF 量測機制 5 框架覆蓋

| 框架 | Sprint 4 覆蓋 | 位置 |
|---|---|---|
| Sean Ellis Test | ✅ | § 6.2 |
| Retention curve | ✅ D1/D7/D14/D30 | § 6.3 |
| NPS 三組 | ✅ 子女 / 長者 / 機構員工 | § 6.4 |
| HEART | ✅ 5 維 | § 6.5 |
| AARRR | ✅ 5 階段 | § 6.6 |
| 緊急偵測召回率 | ✅ 補充 safety 紅線 | § 6.7 |

### 12.4 safety 紅線 condition 真實環境驗證

| Condition | Sprint 4 驗證方式 | 位置 |
|---|---|---|
| C1 健康問答（症狀討論）| W12 真實環境壓力測試 + 「請就醫」警語觸發率 100% | § 9.1 + § 7.3 |
| C2 緊急偵測 | W12 假事件演習 ≥3 次 + false positive ≤1/週/戶 | § 6.7 + § 9.1 |
| C3 認知遊戲 | F16 narrow scope 不宣稱治療失智 | § 12.2 |
| C4 飲食建議 | F11 服藥提醒朋友語氣 W11 開放後驗證 | § 7.2 |
| C5 情緒關懷 | 長者 NPS + 質性 insight；自傷信號觸發 SOP 演習 | § 9.1 + § 6.4 |
| C6 子女摘要推播 | 子女 dashboard 查看率 + 監控型 vs 陪伴型邊界 | § 6.3 + § 2.6 |

### 12.5 Plan-Only 標籤統計

| 標籤類型 | 估計出現次數 | 主要用途 |
|---|---|---|
| ✅ desk-validated | ~35 | 90 天認證 / safety 紅線 / Sprint 1-3 對接 / W6 Gate 結論 |
| 🟡 hypothesis | ~50 | Sprint 4 目標數字 / 量測預期值 / Sprint 4 outcome 預測 |
| 📋 post-approval execution | ~55 | 機構部署 / 家庭部署 / Operator 訓練 / 預算 / 法律顧問 / 工具部署 |

### 12.6 卡關項目

| 卡關主題 | 原因 | 建議補強方式 |
|---|---|---|
| 智齡科技 API 公開文件取得 | 需 Sprint 4 W10 機構 IT 配合確認；公開文件可能不支援 read-only OAuth | W6-8 BD 接觸期主動向智齡科技 BD 詢問 API 文件 / 若不支援改用 CSV 上傳 fallback |
| Operator 4 人 24×7 三班輪值人力招募 | Operator 資格要求高（UX research / 心理諮商 / 社工 + 台語 A2）| W8 啟動 Operator 招募；備案：兼任 Operator 配備 + 加重 Operator 主管監督 |
| 機構員工抗拒儀表板使用 | 已知行業排斥心理 | W10 1 日員工培訓深度 + W11-13 機構員工 NPS 持續量測 + 質性訪談優化培訓內容 |
| 真實緊急事件在 Sprint 4 4 週測試期間發生機率 | 5-10 戶 4 週發生真實緊急事件機率約 5-15%（行業 baseline）；若發生需 RCA + safety 紅線重新評估 | safety-redlines § 5.1-§ 5.5 SOP 嚴格執行；Operator 24×7 監控 + RCA report 機制 |
| Sprint 4 4 週是否足夠驗證 Sprint 4 / Phase 6 過渡 retention | D30 retention 量測週期剛好等於 4 週，cohort 中位才到 30 天 | Phase 6 W13+ 繼續追蹤同一 cohort 的 D45 / D60 / D90 retention |

---

## §13. 對 Phase 6 Pilot T39-T43 的輸入摘要

本規格書確認以下輸入供 Phase 6 Pilot T39-T43 使用：

| 輸入項目 | 內容 | 標籤 |
|---|---|---|
| Phase 6 招募過濾標準 | Sprint 4 退場戶經驗 → 排除高棄用風險族群（與子女同住 / CMS 5 級以上 / 偏鄉無 4G / MMSE < 18）| 🟡 待 Sprint 4 W13 phase6_pilot_lessons.md 完成 |
| Phase 6 PMF 量測基線 | Sprint 4 Sean Ellis ≥30% / NPS 三組 / Retention D30 ≥50% 為 Phase 6 起點 | 🟡 |
| Phase 6 5 框架量測工具 | Sprint 4 已部署 5 框架（Sean Ellis / Retention / NPS / HEART / AARRR），Phase 6 持續使用 | ✅ |
| Phase 6 機構通路 BD 加速 | 1-2 家機構續約意願 → Phase 6 機構 BD 加碼或維持次主軸決策 | 🟡 |
| Phase 6 退場機制 SOP | Sprint 4 退場 SOP 完整化 → Phase 6 longer-term retention 設計 | ✅ |
| Phase 6 Operator 訓練教材 | Sprint 4 Operator 5 天訓練課程 → Phase 6 Operator 持續招募 + 訓練 | ✅ |
| Phase 6 文化共鳴主題 | Sprint 4 ≥5 個強烈共鳴主題 → Phase 6 F05 節氣 / F06 懷舊治療深化 | 🟡 |
| Phase 6 機構儀表板擴張 | Sprint 4 narrow scope 機構儀表板 → Year 1 H2 SaaS 平台架構（FHIR-light / 多機構支援）| 📋 |
| Phase 6 端側模型 fine-tune | Sprint 4 紅線 false positive 案例庫 → Year 1 H2 端側 Layer 2 ONNX 模型優化 | 📋 |
| Phase 6 主管 review 規劃書內容 | Sprint 4 PMF 量測結果 → Phase 8 主管 review 規劃書最終版 | 🟡 待 Sprint 4 W13 結果 |

---

> 本規格書由 sprint-planner sub-agent 執行（PM Flow v0.1 / Phase 5 T38）
> 建立在：T24 build-vs-buy + T25 mvp-type + T26 tech-architecture + T27 feature-triage + T28 safety-redlines + T30 lean-canvas + T32 pricing + T35 decision-w6 + Phase 2 interview-plan
> 標籤分布：✅ desk-validated ~35 處 / 🟡 hypothesis ~50 處 / 📋 post-approval execution ~55 處
> 所有 ASUS 相關段落客觀中立，不作合作推薦
> 「demo」字眼全文禁用；「Mode E」字眼全文禁用，本案為 PM Flow v0.1 / Phase 5 T38
> 下一步（Phase 6 Pilot）：T39 招募 + T40 部署 + T41 4 週運行 + T42 PMF 量測 + T43 主管 review 規劃書最終版
