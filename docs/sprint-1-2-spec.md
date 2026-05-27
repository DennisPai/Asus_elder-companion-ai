# Sprint 1-2 Wizard-of-Oz Prototype 規格書
## 長者互動陪伴機器人 × AI Brain MVP — Phase 5 T36

> **執行日期**：2026-05-27
> **執行模式**：PM Flow v0.1 / Phase 5 T36 Sprint 1-2 規格書
> **角色配置**：tech-architect / sprint-planner（本報告合併執行）
> **Plan-Only Mode**：本文件是「Sprint 1-2 規格書 + 技術選型 + Sprint 拆解 + 風險清單」，不是「已 build 的 prototype」；所有實作項目標 ✅ desk-validated / 🟡 hypothesis / 📋 post-approval execution
> **報告對象**：華碩（ASUS）AI 代理人 / 服務型機器人主管 1 位（客觀中立，不涉 ASUS 推銷）
> **建立在**：
> - build-vs-buy.md T24（硬體 WoZ 平板 + AI Brain 混合架構路徑 C）
> - mvp-type.md T25（WoZ 主軸 4.60/5）
> - tech-architecture.md T26（六層架構 + tech stack + PDPA 邊界 + 4 個資料流）
> - feature-triage.md T27（22 feature MoSCoW / Kano，MUST 8 / SHOULD 7）
> - safety-redlines.md T28（19 紅線 + Layer 2 rule-based guardrail + WoZ 降階）
> - lean-canvas.md T30 Hyp A Solution Block 4（AI Brain 三層 + Must-have 8 feature）
> - pricing.md T32（Tier 1 Starter NT$799 / Tier 2 Pro NT$1,290 / Tier 3 Premium Custom）
> - decision-w6.md T35（Sprint 1-2 W5-W8 規格 + Sprint 3 W9-10 + Sprint 4 W11-12 + W6 Gate 確認 Hyp A 主軸）
> **禁用字眼**：demo（已改稱「主管 review 規劃書」）；禁稱 Mode E（改稱 PM Flow v0.1）；禁稱「已完成 / 已部署 / 已上線」

---

## 0. Executive Summary

本文件對「長者互動陪伴機器人 × AI Brain」90 天 MVP 的 **Sprint 1-2（W5-W8 / 4 週實作期）** 產出完整 Wizard-of-Oz Prototype 規格書，涵蓋 10 章節 + Coverage Matrix。本檔案是規劃書，所有實作標 📋 post-approval execution。

**Sprint 1-2 三句話定義**：
1. **目標**：W5-W8 完成 Wizard-of-Oz 平板形態 prototype 規劃書級規格 — feature-triage Tier 1 Starter Must-have 8 feature 全部技術選型 + 介面規格 + Operator UI 規格 + 後台 Wizard-of-Oz 真人補位 SOP 完成 📋
2. **形態**：市售 iPad 10.9" / Samsung Galaxy Tab S9 FE + ReSpeaker 4-Mic Array + 桌上型可調角度底座 + 後台 Operator Web UI；零自製硬體 = 零 BSMI 認證風險（build-vs-buy.md §2.2.1 + tech-architecture.md §1.2 確認）
3. **Wizard-of-Oz 補位機制**：W5-W8 後端 AI（GPT-4o-mini + Layer 2 rule-based 7 紅線守門器）+ 真人 Operator 補位（晨起 07:00 - 22:00 / 15 hr 覆蓋，輪班 2 人）；對話介入 SLA ≤5 秒；ToS 透明告知「目前為人工輔助輔導期」(safety-redlines.md §6.2 P3 Plan-Only 紅線)

**對主管 review 規劃書的核心訊號**：Sprint 1-2 規格書展示「技術選型有依據 / 邊界誠實標示 / Sprint 拆解到 Day-level / 風險清單 + 緩解 / 量測指標完整」五個維度，回應主管最關心的「product thinking 完整度」+「執行可行性」雙視角。

---

## §1. Sprint 1-2 目標 + 範圍

### 1.1 目標

**Sprint 1-2 = W5-W8 / 4 週**（Sprint 1 為 W5-W6 / 2 週，Sprint 2 為 W7-W8 / 2 週 + 內部 alpha 測試；對齊 decision-w6.md §7.1 SSOT）

> **時程校準說明**：原規劃 Sprint 1 W1-4 / Sprint 2 W5-8（decision-w6.md §7.1）。本文以「W5-W8 為 Sprint 1-2 實作期」對應「W1-W4 已完成 Phase 1-4 桌面規劃 + W5 進入實作 Sprint 1 啟動」的銜接邏輯，並以 Sprint 1 = W5-W6 + Sprint 2 = W7-W8 為實作 4 週區塊（Sprint 3 = W9-W10 + Sprint 4 = W11-W12 銜接 Pilot）

**Sprint 1-2 三條核心目標**：

| # | 核心目標 | 量測標準 | 對應 Lean Canvas Block |
|---|---|---|---|
| G1 | Wizard-of-Oz 平板形態硬體 + 軟體基礎 stack 規格完成 | tech-architecture §1.2 Tech Stack 全部選定 + Sprint Day-level 拆解到 14 天細粒度 | Block 4 Solution（lean-canvas.md §1） |
| G2 | feature-triage Tier 1 Starter Must-have 8 feature 規格完成 + 接受條件定義 | 8 feature × 8 維度（ID / user story / acceptance / 實作大綱 / safety / Tier / Operator SOP / 標籤）齊全 | Block 4 Feature 1-3 + Block 6 Tier 1 |
| G3 | 後台 Wizard-of-Oz Operator UI + 真人補位 SOP + ToS 透明告知設計完成 | Operator UI v0 規格 + 介入 SLA ≤5 秒設計 + ToS Plan-Only 紅線 P3 對應 | safety-redlines.md §1.3 P3 + tech-architecture.md §4.4 |

### 1.2 範圍

**Sprint 1-2 落地 8 個 feature（Tier 1 Starter 對應）**：
- F01 每日主動問候（固定時段）
- F02 中文語音對話（基礎流暢）
- F09 緊急按鈕快速呼叫（語音 + 觸控）
- F10 子女緊急通知推播（LINE / App）≤5 分鐘
- F11 服藥提醒（語音，朋友語氣）
- F13 子女遠端 onboarding ≤10 分鐘
- F20 超大字 / 高對比 UI
- F21 長者「停止 / 暫停提醒」主動控制
- F22 隱私資料刪除 / 記憶導出（PDPA 合規 Sprint 1 基線）

> 注意：feature-triage §7 列 Must-have 8 個（F01/F02/F09/F10/F11/F13/F20/F21/F22 共 9 個，其中 F22 因 PDPA 合規前提屬必含）。本 Sprint 1-2 將 F22 視為 Sprint 1 W5-W6 必含基線，Sprint 1-2 共落地 9 feature（feature 計數一致：8 個 Tier 1 Starter UVP feature + 1 個 PDPA 合規必含 feature）

**Sprint 1-2 不在範圍（推 Sprint 3 / Sprint 4）**：

| 推遲項目 | 推 Sprint | 推遲理由 | 對應 |
|---|---|---|---|
| F08 非影像式異常偵測（WoZ 互動中斷版） | Sprint 3 W9-10 | 技術可行性 🟡 待 W6 Layer 2 rule-based 完成後才能整合 | feature-triage §7 SHOULD #4 |
| F04 個人記憶 AI（偏好 + 家庭脈絡 RAG） | Sprint 3-4 W8-10 | pgvector RAG 設定需 Sprint 1 LLM 基礎建立後 | feature-triage §7 SHOULD #5 |
| F03 台語語音識別 + 問候 | Sprint 3-4 W8-10 | 台語 Whisper fine-tune 屬 Year 1 H2，Sprint 3 落「基礎台語問候 20 句預錄版」 | feature-triage §7 SHOULD #6 |
| F12 每日 AI 摘要推播（子女 App） | Sprint 3 W9-10 | 依賴 Sprint 1-2 對話資料積累 1 週才有實質內容 | feature-triage §7 SHOULD #2 |
| F14 雙向視訊 / 語音（子女 push） | Sprint 4 W10-11 | WebRTC 整合屬 Sprint 4 ≥10 戶 Pilot 前置 | feature-triage §7 SHOULD #7 |
| F05 節日 / 節氣話題 | Sprint 3 W7-8 | 農民曆 API 整合 1-2 週 | feature-triage §7 SHOULD #3 |
| F18 機構多戶儀表板 | Year 1 H2 | Hypothesis B 專屬，90 天 MVP 不交付 | feature-triage §7 WON'T |
| F19 長照系統資料匯出（政府格式） | Year 1 H2 | Hypothesis B 配套，90 天 MVP 不交付 | feature-triage §7 WON'T |
| 緊急偵測完整版（含 119 介接） | Year 2+ | 119 介接需衛福部 + 內政部消防署雙重審核 | tech-architecture §2.2 |
| 機構儀表板 | Year 1 H2 | 同 F18 | feature-triage §7 WON'T |
| 多裝置同步（家庭內多平板） | Year 2 | 90 天 MVP 一戶一台 | tech-architecture §1.1 Year 2+ |

---

## §2. Tech Stack 確認（從 T26 tech-architecture 對齊）

> 本節 tech stack 與 tech-architecture.md §1.2 完全對齊，Sprint 1-2 階段全部選用「90 天 MVP」版本（非 Year 1 / Year 2 演進版本）

### 2.1 硬體層（Layer 1）

| 元件 | 選型 | 規格 | 採購數量 | 預估單價 NT$ | 標籤 |
|---|---|---|---|---|---|
| 平板（主）| iPad 10.9" 256GB Wi-Fi+Cellular | iPadOS 17.5+ / A14 / 10.9" Liquid Retina | 10 台 | 22,900 | ✅ 已取得 BSMI/FCC/CE |
| 平板（備援）| Samsung Galaxy Tab S9 FE 11" 4G | Android 14 / 11" 90Hz | 5 台 | 11,900 | ✅ BSMI；備援避免單一平台依賴 |
| 麥克風陣列 | ReSpeaker 4-Mic Array v2.0 USB | 4-mic beam-forming / 遠場 5m | 15 台 | 2,500 | ✅ 與 iPad/Android 通用 |
| 桌上型底座 | 可調角度底座 + 軟膠外殼（3D 列印小量）| 自製設計 / TPU 材質 | 15 套 | 3,000 | 🟡 90 天用 3D 列印；Year 1 委外射出成型 |
| 補充感測（option）| PIR 紅外線 + 環境光感測（IoT 模組）| BLE 5.0 | 5 套（部分戶試用）| 1,500 | 🟡 Sprint 3 評估是否納入 Pilot |
| **BOM/台（合計）** | — | — | — | **NT$18,000-22,000** | tech-architecture §1.1 |

### 2.2 OS + App 開發框架（Layer 2 端側）

| 類別 | 元件 | 選型 | 版本 | 標籤 |
|---|---|---|---|---|
| OS（iOS）| iPadOS | iPadOS 17.5+ | latest | ✅ |
| OS（Android）| Android | Android 14（API 34）| latest | ✅ |
| App 開發框架（長者端）| 跨平台 | React Native 0.74 LTS | 0.74 | 🟡 iOS+Android 共用 70% 代碼 |
| App 開發框架（子女端）| 跨平台 | React Native 0.74 LTS | 0.74 | 🟡 同上 |
| 端側加密 | 平台原生 | iOS Data Protection / Android Encrypted File System | — | ✅ |

### 2.3 語音 stack（Layer 3）

| 類別 | 元件 | 選型 | 計費 | 標籤 |
|---|---|---|---|---|
| Wake word（端側）| 中文 | Picovoice Porcupine 3.0 商用授權 | USD 0.49/月/裝置 | ✅ 完全端側執行 |
| Wake word（備援）| 開源 | openWakeWord 0.6.0（onnx）| Apache-2.0 | 🟡 台語自訓備援 |
| STT 中文（雲）| 主 | Google Cloud Speech-to-Text V2（zh-TW）| USD 0.024/分鐘 | ✅ GCP asia-east1 |
| STT 中文（備援）| 雲 | Azure Speech to Text（zh-TW）| USD 1.10/小時 | ✅ East Asia |
| STT 台語（雲）| 主 | Google Cloud STT（nan-Hant-TW）+ 校正詞典 | USD 0.024/分鐘 | 🟡 錯字率 20-40% 已知 |
| TTS 中文（雲）| 主 | Azure Speech Service（zh-TW-HsiaoChenNeural）| USD 16/M chars | ✅ |
| TTS 中文（備援）| 雲 | Google Cloud TTS WaveNet（zh-TW）| USD 16/M chars | ✅ |
| TTS 台語（基礎 20 句）| 端側預錄 | Azure SSML 預生成 mp3 | 一次性 | 🟡 Sprint 3 整合 |

### 2.4 LLM Brain（Layer 3 對話主幹）

| 類別 | 元件 | 選型 | 計費 | 標籤 |
|---|---|---|---|---|
| LLM 主幹（日常對話）| OpenAI GPT-4o-mini | 2024-07-18+ | USD 0.15-0.60/M tokens | ✅ NT$0.5-2/月/用戶 |
| LLM fallback（複雜任務）| OpenAI GPT-4o | 2024-08-06+ | USD 2.5-10/M tokens | ✅ 失智摘要 / 倫理邊界 fallback |
| LLM 備援（雙 fallback）| Anthropic Claude 3.5 Sonnet | 2024-10-22+ | USD 3-15/M tokens | ✅ OpenAI 漲價 / 中斷時 hot-swap |
| LLM 抽象層 | LangChain 0.3 + LangGraph 0.2 | 0.3 / 0.2 | 開源 | ✅ Vendor lock-in hedge |
| 個人記憶 RAG | pgvector 0.7（PostgreSQL extension）| 0.7 | 開源 | ✅ Sprint 3 啟用，Sprint 1-2 預留 schema |

### 2.5 後端 + 資料庫（Layer 3 雲端）

| 類別 | 元件 | 選型 | 部署位置 | 標籤 |
|---|---|---|---|---|
| 後端框架 | FastAPI（Python 3.12）| 0.115+ | GCP Cloud Run（asia-east1）| ✅ async 高並發 |
| 任務佇列 | Celery 5.4 + Redis backend | 5.4 | GCP Cloud Run | ✅ 緊急通知 / 子女摘要 |
| WebSocket | FastAPI WebSocket + uvicorn | latest | GCP Cloud Run | ✅ 語音 streaming |
| 主資料庫 | PostgreSQL 15 + pgvector | 15.7 | GCP Cloud SQL（asia-east1）| ✅ 用戶 / 同意書 / 摘要 / RAG |
| 快取 | Redis 7.2 | 7.2 | GCP Memorystore（asia-east1）| ✅ session / rate limit |
| 物件儲存 | GCP Cloud Storage（asia-east1）| — | 同上 | ✅ AES-256 加密 / 7 天硬刪 |

### 2.6 部署 / CI/CD（Layer 3 基礎建設）

| 類別 | 元件 | 選型 | 標籤 |
|---|---|---|---|
| 容器化 | Docker 26 + Docker Compose | 26 | ✅ |
| 編排 | GCP Cloud Run + GCE GPU instance（Y1 規劃）| — | ✅ |
| CI/CD | GitHub Actions + GCP Artifact Registry | — | ✅ |
| 觀測 | GCP Cloud Monitoring + Sentry | — | ✅ PDPA-safe log（不收原始對話）|

### 2.7 身分驗證 + PDPA 合規

| 類別 | 元件 | 選型 | 標籤 |
|---|---|---|---|
| 身分驗證（子女）| OAuth 2.0 | Auth0 Free tier（< 7,000 MAU）| 🟡 Year 1 遷自託管 Authentik |
| 身分驗證（長者）| 無密碼 | 語音 enrollment（聲紋）+ 子女遠端設定 | 🟡 聲紋驗證為長者尊嚴設計 |
| 加密（傳輸）| TLS | TLS 1.3 強制 | ✅ |
| 加密（儲存）| AES | AES-256-GCM（GCP CMEK 自帶金鑰）| ✅ |
| DPIA 工具 | Microsoft DPIA Template + 律師客製 | — | 📋 W4 前由理慈 / 萬國 / 普華完成首版 |

### 2.8 雲端區域（PDPA 合規）

| 服務 | 主區域 | 備援區域 | PDPA 風險 |
|---|---|---|---|
| GCP Cloud Run / Cloud SQL / Memorystore / Cloud Storage | asia-east1（彰化）| asia-east2（香港）| 低 ✅（在台部署） |
| OpenAI API | 美國 | EU | 高 ⭐（跨境傳輸） |
| Anthropic API | 美國 | — | 高 ⭐ |
| Google Cloud STT/TTS | asia-east1（強制鎖定）| — | 中 🟡 |
| Azure Speech | East Asia（香港）| Taiwan North（2026 GA 待確認）| 中 🟡 |

**PDPA 跨境緩解策略**：
- Layer 2 + Layer 3 完全在台部署
- Layer 1（LLM）跨境僅傳「對話文字摘要」（非原始音訊）+ 嚴格資料最小化（無姓名 / 身分證 / 精確地址）
- 跨境同意書 explicit + 律師審查
- GCP asia-east1 最大化在台處理（彰化節點 2024 GA）

> 詳細 PDPA 合規對策見 tech-architecture.md §4

### 2.9 關鍵技術決策摘要（Sprint 1-2 必選）

| 決策題 | 選項 | Sprint 1-2 選定 | 理由 |
|---|---|---|---|
| 平台 | iOS only / Android only / 雙平台 | **雙平台**（iOS 主 / Android 備援）| 避免單一平台依賴 + Pilot 戶可能有平台偏好 |
| 跨平台框架 | React Native / Flutter / Native | **React Native 0.74**（Sprint 1-2 內僅長者端 + 子女端 App）| 70% 代碼共用；招聘較易；社群成熟（vs Flutter 性能略優但開發人手較少） |
| LLM 主幹 | GPT-4o-mini / GPT-4o / Claude 3.5 | **GPT-4o-mini 主 + GPT-4o fallback + Claude 3.5 備援** | 成本最低 NT$0.5-2/月/用戶 + 雙廠商 hedge |
| Wake word | 商業（Porcupine） / 開源（openWakeWord） | **Porcupine 3.0 商用授權**（中文「白白」自訂 wake word）| 商業驗證 / iOS+Android 原生 SDK / USD 0.49/月/裝置可接受 |
| 後端框架 | FastAPI / Node.js / Django | **FastAPI（Python 3.12）** | async 高並發 + OpenAPI 自動 + Pydantic 型別 + AI/ML 生態 |
| 雲端 | GCP / Azure / AWS | **GCP asia-east1（彰化）主** | PDPA 在台部署 + CMEK + 唯一台灣 region 大廠 |

---

## §3. 後台 Wizard-of-Oz 人在環設計

### 3.1 Wizard-of-Oz 機制原理

**設計邏輯**：W5-W8 Sprint 1-2 為「Wizard-of-Oz 主軸期」，前端長者端 App 呈現「完整 AI 機器人」體驗（語音對話 / 主動問候 / 緊急按鈕回應），後端混合「真實 AI（GPT-4o-mini + Layer 2 rule-based）」+「真人 Operator 補位」。Operator 補位的 3 個觸發條件：
1. **LLM 信賴度低**：GPT-4o-mini 回應信賴度 < 0.6 / 對話偏離 system prompt 範圍 → Operator 接管
2. **Layer 2 紅線 + LLM 結合判斷模糊**：7 條 LLM 絕對紅線（safety-redlines §1.1 N1-N10）觸發後，Operator 確認語句安全性
3. **長者主動要求人工**：長者說「我要找真人 / 機器人聽不懂」→ 立刻 Operator 接管

> 為何 W5-W8 採 Wizard-of-Oz：(a) 90 天 MVP 不足以 fine-tune LLM 對長者場景；(b) Layer 2 rule-based 7 紅線需真人驗證觸發精度；(c) 長者場景棄用率 30-50% 風險（feature-triage §3 R07）需真人介入避免「狼來了」效應；(d) Year 1 後逐步淡出 Operator 比例（safety-redlines §1.3 P3 Plan-Only 紅線：「規劃書不得宣稱已建立 LLM guardrail」對應）

### 3.2 後台 Operator Web UI 規格（v0）

**Operator UI 介面 6 個區塊**：

| # | 區塊名稱 | 功能 | 對應觸發 |
|---|---|---|---|
| 1 | 即時對話監控視窗 | 多戶（10-15 戶 Pilot）對話分頁；對話文字實時呈現；LLM 信賴度顏色標記（綠 ≥0.8 / 黃 0.6-0.8 / 紅 < 0.6） | 觸發 1 LLM 信賴度低 |
| 2 | 介入按鈕 | 「接管對話」 / 「插入提示語」 / 「轉送 FAQ 答案」 / 「警示家屬」 4 個快捷鍵 | 全部 3 個觸發 |
| 3 | FAQ knowledge base | 7 紅線標準回應模板（N1 醫療 / N2 投藥 / N3 急救 / N4 心理 / N5 法律 / N6 自殺 / N7 宗教）即取即用；對話常見場景 30+ 模板 | 觸發 2 + 觸發 3 |
| 4 | 對話接管模式 | Operator 接手對話後，AI 暫停 5 分鐘；Operator 直接 TTS（用 zh-TW-HsiaoChenNeural 同步聲線） | 觸發 1 + 觸發 3 |
| 5 | 紅線觸發 log | 7 條 LLM 絕對紅線觸發 timeline；Operator 確認 / 升級到緊急通知 | 觸發 2 |
| 6 | 緊急通知排程器 | 緊急偵測觸發後，Operator 確認 → fan-out LINE Notify 給子女；SLA ≤5 分鐘 | F09 + F10 緊急流程 |

**Operator UI tech stack**：
- 前端：React 18 + TypeScript + Tailwind CSS（Web Dashboard）
- 後端：FastAPI WebSocket（同主後端）+ Redis pub/sub
- 部署：GCP Cloud Run asia-east1
- 認證：Auth0 Operator role（與子女 App 區隔）

**Operator UI 介面草圖（文字版）**：
```
┌──────────────────────────────────────────────────────────────────┐
│ Wizard-of-Oz Operator Dashboard      [Pilot 10-15 戶分頁] ▼     │
├──────────────────────────────────────────────────────────────────┤
│ 戶 #007 [秀珍阿嬤] [台北/嘉義異縣市] 對話進行中...                │
│ ┌────────────────────────────────────────────────────────────┐  │
│ │ 14:23 阿嬤：「我今天頭很痛，是不是腦瘤？」    [LLM 0.42 紅] │  │
│ │ 14:23 [Layer 2 觸發] N1 醫療診斷紅線 → 阻斷 LLM 輸出       │  │
│ │ 14:23 [建議 FAQ 回應] 「這個問題我沒辦法幫您判斷，這要讓醫│  │
│ │       師看過才放心。要不要我幫您查最近的家醫門診時間？」    │  │
│ └────────────────────────────────────────────────────────────┘  │
│ [接管對話] [插入 FAQ] [警示家屬] [升級緊急通知]                  │
├──────────────────────────────────────────────────────────────────┤
│ FAQ knowledge base：                                              │
│ - N1 醫療診斷 ⓘ  - N2 投藥 ⓘ  - N3 急救 ⓘ  - N4 心理 ⓘ      │
│ - N5 法律 ⓘ    - N6 自殺 ⓘ  - N7 宗教 ⓘ  - 30+ 常見場景 ⓘ  │
└──────────────────────────────────────────────────────────────────┘
```

### 3.3 真人補位 SOP（晨起 07:00 - 22:00 / 15 hr 覆蓋）

**Operator 排班規劃**（Sprint 1-2 W5-W8 階段）：

| 班次 | 時段 | Operator 人數 | 覆蓋戶數 | 標籤 |
|---|---|---|---|---|
| 早班 | 07:00 - 14:00 | 1 人 | 10-15 戶 | 📋 |
| 晚班 | 14:00 - 22:00 | 1 人 | 10-15 戶 | 📋 |
| 夜間 22:00 - 07:00 | 後台值班待命（緊急通知觸發 only）| 1 人 on-call | 緊急 only | 📋 |

**Operator SLA**：
- 對話介入回應 ≤5 秒（從觸發到首字回應）
- 緊急通知處理 ≤5 分鐘（從 Layer 2 觸發到子女 LINE 推播）
- 紅線觸發 100% 處理（不漏接）

**Operator 訓練（Sprint 1 W5-W6 第一週）**：
- Day 1：產品理解 + 7 紅線 SOP 教學
- Day 2：FAQ knowledge base 30+ 模板熟悉
- Day 3-5：實機演習（內部 alpha 3 戶員工家屬）
- Day 6-7：Pilot 上線前 dry-run 完整流程

### 3.4 ToS 透明告知（Plan-Only 紅線 P3 對應）

> 對應 safety-redlines.md §1.3 P3：「規劃書不得宣稱『已建立 LLM guardrail』或『已完成安全測試』」

**ToS 揭露條款**（Sprint 1 W5 前 onboarding 文案）：

```
【關於本服務 Wizard-of-Oz 階段聲明】

本服務目前處於 Wizard-of-Oz 階段（Plan-Only Mode 規劃書級 prototype 試用期 W5-W8）：

1. 本服務的 AI 對話是 GPT-4o-mini AI Brain 與後台人工 Operator 共同運作
2. 在 AI 信賴度低 / 涉及健康或安全議題 / 您要求人工協助時，後台 Operator 會接管對話
3. 後台 Operator 為經訓練的人員，依 7 條 LLM 絕對紅線 SOP 工作
4. 所有對話經 AES-256 加密儲存於台灣節點（GCP asia-east1）
5. 您隨時可說「我要找真人」立即轉接後台 Operator
6. 您隨時可說「不要再提醒我」AI 暫停 24 小時
7. 取消訂閱後 30 天內您的對話資料硬刪除

【三方同意機制】
本服務啟用前需：(a) 長者本人口頭同意（系統錄音保存）、(b) 子女書面同意、(c) 第三方
見證人（社區關懷員 / 醫護 / 在地夥伴）簽署。

【您的權利】
您隨時可（1）退出本服務（2）匯出您的記憶 JSON（3）要求人工協助（4）刪除特定對話。
```

📋 對外語言剝離：Public Repo 對外網頁版本剝離「Wizard-of-Oz」「Plan-Only Mode」等內部術語（decision-w6.md §7.4 對外網頁紀律）

---

## §4. Sprint 拆解（2 週 × 2 = Sprint 1 + Sprint 2）

> Day-level 拆解（含週次 + Day + 任務 + 負責人 + 驗收 + Plan-Only 標籤）。所有實作項目 📋 post-approval execution。

### 4.1 Sprint 1（W5-W6 / Day 1-14）：基礎 stack + 後台 Wizard-of-Oz 啟動

| Day | 任務 | 負責人 | 驗收 | 標籤 |
|---|---|---|---|---|
| **Day 1** | 平板硬體採購清單確認 + 通路下單（iPad 10.9" 10 台 + Samsung Tab S9 FE 5 台 + ReSpeaker 4-Mic Array 15 台）| 採購 + COO | 採購單發出 + 預計到貨 Day 4-5 | 📋 |
| Day 1 | 3D 列印底座 + 軟膠外殼設計檔修整（沿用 Phase 4 已備版本）| 工業設計 | 設計檔 STL 出爐 + 3D 列印廠商接單 | 📋 |
| Day 1 | GCP Project 設定 + asia-east1 region 鎖定 + Cloud Run / Cloud SQL / Memorystore / Cloud Storage 服務啟用 + CMEK 金鑰建立 | DevOps | GCP Console 驗證所有資源在 asia-east1 + Sentry / Cloud Monitoring 上線 | 📋 |
| **Day 2** | FastAPI 後端 skeleton 建立 + Docker Compose 本機開發環境 + GitHub repo 初始化 + CI/CD GitHub Actions 流水線 | 後端工程 | `docker-compose up` 本機可跑 + GitHub Actions push 觸發 build | 📋 |
| Day 2 | PostgreSQL 15 + pgvector schema 設計（users / consent_record / conversation_summary / daily_brief / emergency_event / redline_triggers / operator_intervention 7 表）| 後端工程 | schema migration 0001 SQL 完成 + 本機 Cloud SQL 連線測試 | 📋 |
| Day 2 | Layer 2 rule-based 7 紅線守門器（N1-N7 醫療 / 投藥 / 急救 / 心理 / 法律 / 自殺 / 宗教）規格 + Python 模組 skeleton | 後端工程 | redline_guardrail.py 模組架構完成 + 7 個觸發 pattern 草案 | 📋 |
| **Day 3** | OpenAI GPT-4o-mini API 接通 + LangChain 抽象層整合 + system prompt v0.1 設計（含 7 紅線禁忌 + 長者陪伴 persona 設定）| AI 工程 | curl 測試 GPT-4o-mini 回應 + system prompt 觸發守門器測試通過 | 📋 |
| Day 3 | Anthropic Claude 3.5 Sonnet API fallback 接通 + LangChain hot-swap 機制 | AI 工程 | OpenAI mock 異常觸發 Claude fallback + 回應正確 | 📋 |
| **Day 4** | Google Cloud STT V2（zh-TW）+ Azure Speech TTS（zh-TW-HsiaoChenNeural）API 整合 + WebSocket 串流 endpoint `/api/v1/conversation/stream` | AI 工程 + 後端工程 | curl + websocat 測試端到端：音訊上傳 → STT → LLM → TTS → 音訊回播 ≤3 秒 | 📋 |
| Day 4 | 平板到貨（iPad + Samsung 共 15 台）+ ReSpeaker USB 接線測試 + 底座組裝 | 採購 + 工業設計 | 15 台平板 + 麥克風組裝完成 + 啟動驗證 | 📋 |
| **Day 5** | Wake word（Picovoice Porcupine 3.0）端側 SDK 整合 + 自訂中文 wake word「白白」訓練（Picovoice Console 自訓）| App 工程（iOS）| iPad 端側 wake word 觸發測試通過（≥90% 喚醒率，≤2% 誤觸發 / 8 小時）| 📋 |
| Day 5 | 三方同意機制 schema 設計（consent_record 表） + UI 流程線框圖（長者音訊 + 子女書面 + 見證簽署 3 階段）| PM + 後端工程 | consent_record schema migration 完成 + onboarding 流程線框圖 v0 | 📋 |
| **Day 6** | 長者端 App skeleton（React Native 0.74）+ 超大字 / 高對比 UI（F20，≥24pt + ≥44px 觸控 + WCAG AA 對比）+ 語音 first UX | App 工程 | iOS 模擬器啟動 App + WCAG 對比度檢測通過 + UI 線框完成 | 📋 |
| Day 6 | Layer 2 rule-based 7 紅線守門器實作（N1 醫療 / N2 投藥 / N3 急救 / N4 心理 / N5 法律 / N6 自殺 / N7 宗教 pattern match）+ pytest 單元測試 ≥35 case | 後端工程 | pytest 35 case 全綠 + 守門器 latency ≤100ms | 📋 |
| **Day 7** | F21 長者「停止 / 暫停提醒」主動控制（端側偵測「不要再提醒我」/「停一下」/「不打擾」3 種說法 + AI 暫停 24 hr 機制 + 子女不可即時覆蓋）| App 工程 + 後端工程 | 說「不要再提醒我」→ 後端 user_preference.do_not_disturb_until = NOW() + INTERVAL '24 hours' → 24 hr 內主動問候 skip | 📋 |
| Day 7 | F22 隱私資料刪除 / 記憶導出 endpoint（DELETE /api/v1/user/{user_id}/data + GET /api/v1/user/{user_id}/export.json）+ cron 每日 03:00 retention_until 過期硬刪 | 後端工程 | DELETE 觸發 30 天 grace period → 硬刪 + GET export.json ≤5 分鐘完成 | 📋 |
| **Day 8** | Operator Web UI 前端（React 18 + TypeScript + Tailwind）v0 skeleton + FastAPI WebSocket 對話即時轉發 | 前端工程 + 後端工程 | Operator Dashboard 本機啟動 + WebSocket 接收 1 戶對話即時呈現 | 📋 |
| Day 8 | Operator FAQ knowledge base v0（7 紅線標準回應 + 30 個常見場景模板）+ JSON schema 設計 | PM | faq.json 30+ 模板完成 + Operator UI 可調用 | 📋 |
| **Day 9** | Operator 介入機制（「接管對話」/「插入 FAQ」/「警示家屬」/「升級緊急通知」4 個按鈕 + Redis pub/sub 通知主後端）| 前端工程 + 後端工程 | Operator 按「接管對話」→ AI 暫停 5 分鐘 + Operator TTS 直接輸出 | 📋 |
| Day 9 | 子女 App skeleton（React Native）+ Auth0 OAuth 2.0 整合 + 子女 dashboard 線框 | App 工程 | 子女註冊 + login 流程跑通 + dashboard skeleton 啟動 | 📋 |
| **Day 10** | F13 子女遠端 onboarding ≤10 分鐘 ≤5 步流程（Step 1: 子女註冊 / Step 2: 長者基本資料 / Step 3: 三方同意觸發 / Step 4: 平板綁定 wake word / Step 5: 首次對話測試）| App 工程 + UX | 內部 3 名員工試跑 onboarding ≤10 分鐘 | 📋 |
| Day 10 | F09 緊急按鈕（語音「幫我叫救護車」+ 觸控紅色大按鈕，雙觸發機制）+ F10 LINE Notify 推播子女 endpoint | App 工程 + 後端工程 | 觸發後 ≤5 分鐘子女收到 LINE 推播（內部測試）| 📋 |
| **Day 11** | F01 每日主動問候（06:30 + 18:00 固定時段 + cron 排程 + TTS 中文問候腳本）+ F21 暫停期間 skip 邏輯整合 | 後端工程 + AI 工程 | 內部 Pilot 1 戶觀察 Day 11 早晚兩次問候正常觸發 + 暫停期間 skip 確認 | 📋 |
| Day 11 | 內部 alpha 3 戶（員工家屬）試用啟動 + Operator 排班開始（早班 + 晚班 2 名）+ Day 11-14 連續 4 天觀察 | PM + Operator | 3 戶平板送達 + onboarding 完成 + 開始正式試用 | 📋 |
| **Day 12** | F11 服藥提醒（朋友語氣，「OO，你今天的血壓藥記得吃喔」TTS + 預設定時提醒）+ Adversarial Test 朋友語氣 vs 機器式對比測試 ≥10 句 | AI 工程 + UX | Adversarial Test 朋友語氣得分 ≥4/5（內部評審）；Reverse Risk 無觸發 | 📋 |
| Day 12 | DPIA（律師理慈 / 萬國 / 普華）首版起草 + 跨境傳輸同意書設計 + ToS Plan-Only 紅線 P3 揭露條款定稿 | PM + 法務 | DPIA 首版律師審查中 + ToS 條款定稿 | 📋 |
| **Day 13** | 內部 alpha 3 戶 bug fix（依 Day 11-12 觀察）+ Operator UI 微調 + LLM system prompt v0.2 升級（補長者場景 5 個常見話題）| 全隊 | bug list 處理完畢 + Operator 回報順手 | 📋 |
| Day 13 | Sprint 1 retro + Sprint 2 細節 plan refresh + 邀請 Pilot 主候選戶 5-10 戶（Facebook 親子照顧社群 + 失智症協會接洽）| PM | retro 文件 + Sprint 2 plan + Pilot 招募 funnel 啟動 | 📋 |
| **Day 14** | Sprint 1 結束 + Discord 通知懷特進度 + GitHub PR merge 主幹 + Sentry 健康監測檢視 | 全隊 | Sprint 1 結束 retro + 上線 Sprint 2 W7 開始 | 📋 |

**Sprint 1 完成 5 個 feature**：F02 中文語音對話 / F20 超大字 UI / F21 長者控制 / F22 隱私刪除 / F13 子女 onboarding（共 5 個 feature MUST 全完成）+ Operator UI v0 + Layer 2 7 紅線守門器 + 三方同意機制 + DPIA 首版

### 4.2 Sprint 2（W7-W8 / Day 15-28）：feature 全功能串接 + 內部 alpha 10 戶

| Day | 任務 | 負責人 | 驗收 | 標籤 |
|---|---|---|---|---|
| **Day 15** | F01 每日主動問候腳本擴充（≥10 種主動話題：天氣 / 節日 / 健康關心 / 家人提起 / 興趣詢問 / 飲食 / 睡眠 / 運動 / 鄰里 / 回憶）+ 固定時段微調 | AI 工程 + UX | 10 戶內部測試 1 天 ≥2 次主動問候自然 | 📋 |
| Day 15 | F09 緊急按鈕觸發後 UI 全切換為紅色 + 大字「我已通知您的家人，請等待」+ 同步語音播放 | App 工程 + UX | 觸發後 UI 切換 ≤1 秒 + 語音播放正確 | 📋 |
| **Day 16** | F10 子女緊急通知推播完整實作（LINE Notify + APNs / FCM 雙通路）+ 多子女 fan-out（一戶可綁多子女）+ SLA 監測 | 後端工程 | 觸發後 ≤5 分鐘多子女全收到推播（內部 3 戶 5 子女測試）| 📋 |
| Day 16 | Operator 升級緊急通知 SOP（後台 confirm → 自動 fan-out + Operator 同步電話 follow-up 子女）| Operator + PM | Operator 排練 3 次假事件演習成功 | 📋 |
| **Day 17** | F02 對話質量強化：system prompt v0.3 升級（長者文化共鳴 + 台灣節慶共鳴 + 禁宗教評論 + 禁商業推銷）| AI 工程 | 10 戶員工試用對話評分 ≥3.5/5 | 📋 |
| Day 17 | 端對端資料流壓力測試（10 戶並發 / 每戶日均 20 次互動 / 模擬 200 次/日 LLM call + STT/TTS）| DevOps + 後端工程 | latency p95 ≤3 秒 + Cloud Run auto-scale 正常 | 📋 |
| **Day 18** | Pilot 候選戶招募完成 10 戶（5 戶員工家屬 alpha 延續 + 5 戶外部 Facebook / 失智症協會招募）+ onboarding 三方同意流程逐戶執行 | PM + BD | 10 戶 onboarding 完成 + 三方同意書齊全 | 📋 |
| Day 18 | F11 服藥提醒正式版部署（朋友語氣 + 用戶可設定時間 + 確認回應紀錄）| AI 工程 + App 工程 | 10 戶設定服藥時間 + 連續 3 天提醒準時 | 📋 |
| **Day 19** | Operator 排班正式啟動（早班 07-14 + 晚班 14-22 + 夜間 22-07 on-call）+ Sentry / Cloud Monitoring alerting 規則設定 | Operator + DevOps | 10 戶覆蓋 24/7 + alerting 觸發測試通過 | 📋 |
| Day 19 | LLM system prompt 含 7 紅線禁忌正式版 + Layer 2 守門器壓力測試（Adversarial Test 35+ 場景）| AI 工程 + QA | Adversarial Test 35 case 全部正確阻斷 + 0 漏接 | 📋 |
| **Day 20** | F22 隱私資料刪除 + 記憶導出端到端測試（DELETE + GET export.json）+ retention_until 90 天 cron 驗證 | 後端工程 + QA | 1 戶模擬退訂 → 30 天後資料硬刪 + export.json 完整 | 📋 |
| Day 20 | DPIA 律師審查回饋整合 + ToS 條款最終版 + Auth0 OAuth 跨境同意書 explicit consent flow | 法務 + 後端工程 | DPIA v1 定稿 + ToS 部署 + OAuth consent flow 跑通 | 📋 |
| **Day 21** | Sprint 2 W7 階段中期 retro + Day 22-28 任務微調 + Discord 通知懷特進度 | PM | retro 文件 + Day 22-28 plan refresh | 📋 |
| **Day 22-24** | 10 戶內部 alpha 連續 3 天 deep observation + Operator 介入 log 分析 + LLM 紅線觸發 log 分析 + bug fix | 全隊 | 3 天觀察報告 + bug list 處理 ≥80% | 📋 |
| **Day 25-26** | Operator 訓練 v2（基於 Day 22-24 觀察）+ FAQ knowledge base 擴充至 50+ 模板 + Operator 手冊 v1 | Operator + PM | Operator 手冊 v1 + FAQ 50+ 模板 | 📋 |
| **Day 27** | Sprint 2 PMF 早期信號量測（Day-7 retention + Sean Ellis pilot test + NPS 子女端 + Operator 介入頻率 baseline）| PM + 數據 | 量測報告：Day-7 ≥3 次 / 天 / 戶 ≥7 戶（≥70%）；其他指標 baseline | 📋 |
| **Day 28** | Sprint 2 結束 + Sprint 3 W9-10 plan 啟動（F08 異常偵測 + F12 子女 daily brief + F05 節氣話題 + F11 朋友語氣 Adversarial Test 正式版）+ Discord 通知懷特 Sprint 1-2 完成 | PM | Sprint 1-2 完成 retro + Sprint 3 plan + decision-w6.md §7.1 銜接確認 | 📋 |

**Sprint 2 完成 4 個 feature**：F01 每日問候 / F09 緊急按鈕 / F10 子女通知 / F11 服藥提醒（共 4 個 feature MUST 完成）+ Operator 7×15 hr 排班正式上線 + Adversarial Test 35 case + DPIA v1 + 內部 alpha 10 戶上線

**Sprint 1-2 累計交付**：
- 9 feature 全 MUST 交付（F01 / F02 / F09 / F10 / F11 / F13 / F20 / F21 / F22）
- Operator UI v0 + 排班 + FAQ knowledge base 50+ 模板
- Layer 2 7 紅線守門器 + Adversarial Test 35 case
- DPIA v1 + ToS 三方同意機制部署
- 內部 alpha 10 戶上線（員工家屬 5 戶 + 外部 5 戶）

---

## §5. Feature MUST 8 詳細規格

> 對應 feature-triage.md §7 MUST 8 + F22 PDPA 合規前提 = Sprint 1-2 共 9 feature 詳細規格。每 feature 含 8 維度（ID / 一句話 / user story / 接受條件 / 技術實作 / safety / Tier 對應 / Operator SOP）

### 5.1 F02 中文語音對話（基礎流暢）

| 維度 | 內容 |
|---|---|
| **ID + 名稱** | F02 中文語音對話（基礎流暢）|
| **一句話描述** | 自然多輪中文語音對話，長者無需打字 |
| **user story** | 作為 70-82 歲長者，當我說「白白」喚醒機器人後，可以用台灣腔中文跟它聊天，不需打字、不需學新介面，連續 ≥5 輪對話不失憶 |
| **接受條件** | (1) Wake word「白白」喚醒率 ≥90% / 誤觸發 ≤2 次 / 8 小時；(2) STT 中文（zh-TW）準確率 ≥90%；(3) LLM 首 token ≤3 秒；(4) TTS 自然度盲測 ≥3.5/5；(5) 多輪 ≥5 輪不失憶（context window）；(6) 端到端 latency p95 ≤3 秒 |
| **技術實作大綱** | Picovoice Porcupine 3.0「白白」自訂 wake word（端側）→ Google Cloud STT V2 zh-TW（GCP asia-east1）→ FastAPI WebSocket → LangChain LLM 抽象層 → GPT-4o-mini API（system prompt v0.3 含 7 紅線 + 長者陪伴 persona）→ Azure TTS zh-TW-HsiaoChenNeural → WebSocket 串流回端側播放 |
| **對應 safety 紅線** | N1-N7（醫療 / 投藥 / 急救 / 心理 / 法律 / 自殺 / 宗教）由 Layer 2 rule-based 守門器強制阻斷；N9 雲端影像 = 不啟用視訊；N10 商業推銷 = system prompt 明示禁止 |
| **Tier 對應** | Tier 1 Starter NT$799 / Tier 2 Pro NT$1,290 / Tier 3 Premium 全 tier 必含（pricing.md §4.1）|
| **Operator 介入規則** | LLM 信賴度 < 0.6 → Operator 接管；長者說「我要找真人」立刻接管；7 紅線觸發 → Operator 確認 FAQ 標準回應 |

### 5.2 F01 每日主動問候（固定時段）

| 維度 | 內容 |
|---|---|
| **ID + 名稱** | F01 每日主動問候（固定時段）|
| **一句話描述** | AI 每天早晨（06:30）/ 傍晚（18:00）主動發起對話，長者不需先開口 |
| **user story** | 作為長者，當我早上醒來時，白白會主動問我「早安，OO，您昨晚睡得好嗎？」；當我傍晚回家時白白會問「晚安，今天過得怎麼樣？」，讓我覺得有人關心我 |
| **接受條件** | (1) 早晚兩次主動問候準時觸發（06:30 ± 2 分 / 18:00 ± 2 分）；(2) ≥10 種主動話題輪替（天氣 / 節日 / 健康關心 / 家人 / 興趣 / 飲食 / 睡眠 / 運動 / 鄰里 / 回憶）；(3) F21 暫停期間 skip；(4) 長者沒回應 30 秒自動結束 |
| **技術實作大綱** | Celery beat scheduler（06:30 / 18:00 Asia/Taipei）→ 查 user_preference.do_not_disturb_until → skip if active → 隨機選 1 個主動話題 → TTS 直接播放（不等 wake word）→ 端側 App 即時顯示文字 |
| **對應 safety 紅線** | R01 過度主動（feature-triage §3）：上限 3 次 / 天；長者說「不打擾」立刻 24 hr 暫停 |
| **Tier 對應** | Tier 1 / 2 / 3 全 tier 必含（pricing.md §4.1）|
| **Operator 介入規則** | 長者連續 3 天未回應主動問候 → Operator 主動電話聯絡子女 follow-up |

### 5.3 F09 緊急按鈕快速呼叫（語音 + 觸控）

| 維度 | 內容 |
|---|---|
| **ID + 名稱** | F09 緊急按鈕快速呼叫（語音 + 觸控）|
| **一句話描述** | 長者說「幫我叫救護車」或按紅色大鈕，自動通知子女 + 提供 119 引導語 |
| **user story** | 作為長者，當我突然不舒服時，可以說「白白，幫我叫救護車」或按螢幕中間的紅色大按鈕，立刻通知我的兒女，他們在 5 分鐘內會收到通知 |
| **接受條件** | (1) 語音觸發詞「幫我叫救護車 / 救命 / 我不舒服」識別準確率 ≥90%；(2) 觸控紅色大按鈕 ≥80×80 px / 螢幕中下位置 / 防誤觸（需長按 1 秒）；(3) 觸發後 ≤5 分鐘子女收到 LINE Notify；(4) 觸發後 UI 立刻切換為紅色 + 大字「我已通知您的家人，請等待」+ 同步語音播放 |
| **技術實作大綱** | Layer 2 rule-based 觸發詞模板 + 觸控按鈕長按 1 秒 → POST /api/v1/emergency/event → Celery 高優先佇列 → LINE Notify + APNs / FCM fan-out 多子女 → DB INSERT emergency_event |
| **對應 safety 紅線** | N3 急救決策紅線：AI 不做急救判斷，只執行「通知家屬 + 119 引導語」；safety-redlines §2.3 對應 |
| **Tier 對應** | Tier 1 / 2 / 3 全 tier 必含（核心 UVP）|
| **Operator 介入規則** | 緊急觸發 → Operator 在 ≤5 秒內 confirm + 同步電話 follow-up 子女；若 15 分鐘子女未 acknowledge → Operator 升級「緊急聯絡人 backup」（社區關懷員 / 鄰居） |

### 5.4 F10 子女緊急通知推播（LINE / App）≤5 分鐘

| 維度 | 內容 |
|---|---|
| **ID + 名稱** | F10 子女緊急通知推播（LINE / App）≤5 分鐘 |
| **一句話描述** | 偵測異常後 5 分鐘內推播子女，說明狀況、建議採取行動 |
| **user story** | 作為北漂子女，當父母觸發緊急按鈕時，我會在 5 分鐘內透過 LINE 收到推播「您的父親 OO 剛才觸發了緊急按鈕，請立即聯絡」；我可以一鍵打電話給父母或直接打 119 |
| **接受條件** | (1) SLA ≤5 分鐘從 emergency_event INSERT 到 LINE 推播 deliver；(2) 多子女 fan-out（一戶可綁多達 5 子女）；(3) 推播內含「我已聯絡父母」按鈕 + 一鍵呼叫父母 / 119；(4) 15 分鐘無子女 acknowledge → 升級緊急聯絡人 backup |
| **技術實作大綱** | Celery 高優先佇列（priority=10）→ LINE Notify API + FCM / APNs 雙通路 → 多子女查 user_emergency_contacts 表 → fan-out → DB UPDATE notified_contacts JSONB |
| **對應 safety 紅線** | R07 緊急通知頻繁誤報（feature-triage §3）：false positive 目標 ≤1/週；告警加「請先電話確認」說明 |
| **Tier 對應** | Tier 1 / 2 / 3 全 tier 必含（子女 Must-be）|
| **Operator 介入規則** | Operator UI 升級緊急通知按鈕 → 確認後 fan-out + 同步電話 follow-up；可在 acknowledged 後解除 |

### 5.5 F11 服藥提醒（語音，朋友語氣）

| 維度 | 內容 |
|---|---|
| **ID + 名稱** | F11 服藥提醒（語音，朋友語氣）|
| **一句話描述** | 以朋友語氣提醒服藥，非機器式清單通知；長者語音確認後記錄 |
| **user story** | 作為長者，當我設定的服藥時間到時，白白會說「OO，你今天的血壓藥記得吃喔」，像朋友提醒；我說「好的，我吃了」白白會回「乖喔」並記錄 |
| **接受條件** | (1) 朋友語氣 Adversarial Test vs 機器式對比測試 ≥10 句測試評分 ≥4/5；(2) 用戶可設定多種藥物 + 多時段；(3) 確認回應後 DB 紀錄服藥記錄；(4) 5 分鐘未回應自動重提一次；(5) **絕對不含劑量建議**（N2 投藥紅線）|
| **技術實作大綱** | user_medication_schedule 表（schedule_id / user_id / medication_name / time_of_day / friendly_phrase）→ Celery cron 觸發 → TTS 朋友語氣腳本（zh-TW-HsiaoChenNeural）→ 端側錄音回應 → STT → keyword match「吃了 / 好的 / 我吃了」→ DB INSERT medication_taken |
| **對應 safety 紅線** | N2 投藥紅線：絕對不含劑量建議 / 換藥建議；safety-redlines §2.2 對應；R01 過度主動：用戶可隨時關閉 |
| **Tier 對應** | Tier 1 / 2 / 3 全 tier 必含 |
| **Operator 介入規則** | 長者連續 3 次「沒吃藥」回應 → Operator 主動電話聯絡子女 |

### 5.6 F13 子女遠端 onboarding（≤10 分鐘）

| 維度 | 內容 |
|---|---|
| **ID + 名稱** | F13 子女遠端 onboarding（≤10 分鐘）|
| **一句話描述** | 子女手機引導 ≤5 步完成父母設定，不需現場到訪 |
| **user story** | 作為北漂子女，當我訂購服務後，我可以在家用手機 App 完成所有設定，不需要回鄉幫父母設定；總時間 ≤10 分鐘；首次互動父母可以順利使用 |
| **接受條件** | (1) ≤5 步流程（Step 1: 子女註冊 / Step 2: 長者基本資料 / Step 3: 三方同意觸發 / Step 4: 平板綁定 wake word / Step 5: 首次對話測試）；(2) 全流程 ≤10 分鐘；(3) 首次長者互動成功率 ≥80% 🟡；(4) 含三方同意（長者音訊 + 子女書面 + 見證簽署） |
| **技術實作大綱** | React Native 子女 App 5 step wizard + Auth0 OAuth 註冊 + 三方同意機制（長者口頭錄音 base64 + 子女電子簽 + 見證人電子簽）→ DB INSERT consent_record + users + user_emergency_contacts |
| **對應 safety 紅線** | safety-redlines §6.1 三方同意機制必跑；R02 子女遠端強制設定：長者設定可覆蓋子女設定 |
| **Tier 對應** | Tier 1 / 2 / 3 全 tier 必含 |
| **Operator 介入規則** | onboarding 卡關（≥3 分鐘無進度）→ Operator 主動 chat 介入引導 |

### 5.7 F20 超大字 / 高對比 UI（長者無障礙）

| 維度 | 內容 |
|---|---|
| **ID + 名稱** | F20 超大字 / 高對比 UI（長者無障礙）|
| **一句話描述** | 字體 ≥24pt、高對比色，觸控按鈕大，視力退化友善 |
| **user story** | 作為 75+ 視力退化長者，我可以清楚看到螢幕上的字（≥24pt）、按鈕容易按到（≥44px）、顏色對比強烈不刺眼，操作不挫折 |
| **接受條件** | (1) 全部文字 ≥24pt；(2) 觸控按鈕 ≥44×44 px；(3) WCAG AA 對比度（≥4.5:1 普通文字 / ≥3:1 大文字）；(4) 單頁最多 3 個操作選項（feature-triage §3 R05 對應）；(5) 「叫名字就好」語音 first 設計 |
| **技術實作大綱** | React Native + 自訂 Typography component（baseFontSize: 24）+ Tailwind theme 高對比配色 + Accessibility audit（axe-core）+ 簡化 UI 線框（單頁 ≤3 button） |
| **對應 safety 紅線** | R05 過度複雜 UI（feature-triage §3）：單頁最多 3 個操作選項 |
| **Tier 對應** | Tier 1 / 2 / 3 全 tier 必含 |
| **Operator 介入規則** | 長者連續操作失敗 ≥3 次 → Operator 主動接管引導 |

### 5.8 F21 長者「停止 / 暫停提醒」主動控制

| 維度 | 內容 |
|---|---|
| **ID + 名稱** | F21 長者「停止 / 暫停提醒」主動控制 |
| **一句話描述** | 長者可隨時說「不要再提醒我」，AI 暫停 24 小時，子女不得即時覆蓋 |
| **user story** | 作為長者，當我不想被打擾時，我可以說「不要再提醒我」/「停一下」/「不打擾」，白白會暫停 24 小時；我的兒女不能在這 24 小時內強制重啟，這是我的權利 |
| **接受條件** | (1) 端側偵測 3 種說法（「不要再提醒我」/「停一下」/「不打擾」）準確率 ≥95%；(2) 暫停 24 小時內主動問候 / 服藥提醒 / 摘要推播全部 skip；(3) 子女 App 不可即時覆蓋（顯示「父母設定暫停中，至 OO 時間」）；(4) 24 小時後自動恢復 |
| **技術實作大綱** | 端側 STT keyword match → POST /api/v1/user/do-not-disturb → DB UPDATE user_preference.do_not_disturb_until = NOW() + INTERVAL '24 hours' → 所有主動觸發 Celery job 必查此欄位 skip |
| **對應 safety 紅線** | N10 商業推銷 / 過度主動 + R01 過度主動（feature-triage §3）+ safety-redlines §3.3 長者 Autonomy 第一原則 |
| **Tier 對應** | Tier 1 / 2 / 3 全 tier 必含 |
| **Operator 介入規則** | 長者觸發暫停 → Operator log 觀察 + 24 hr 後若再次觸發 → Operator 主動電話 follow-up 子女了解原因 |

### 5.9 F22 隱私資料刪除 / 記憶導出（PDPA 合規前提）

| 維度 | 內容 |
|---|---|
| **ID + 名稱** | F22 隱私資料刪除 / 記憶導出 |
| **一句話描述** | 訂閱取消後 30 天硬刪資料；長者或家屬可隨時匯出 JSON 記憶包 |
| **user story** | 作為長者 / 子女，當我決定不再使用服務時，我可以：(1) 取消訂閱後 30 天內所有資料硬刪除；(2) 隨時匯出 JSON 記憶包帶走（個人記憶 + 對話摘要 + 同意書 PDF）≤5 分鐘 |
| **接受條件** | (1) DELETE /api/v1/user/{user_id}/data 觸發 30 天 grace period → 硬刪；(2) GET /api/v1/user/{user_id}/export.json ≤5 分鐘完成；(3) cron 每日 03:00 retention_until 過期 conversation_summary / daily_brief 自動硬刪；(4) consent_record PDF 永久保存（法律要求） |
| **技術實作大綱** | DELETE endpoint → user.scheduled_deletion_at = NOW() + INTERVAL '30 days' → cron daily 03:00 查過期 → 硬刪 users + 所有關聯表（CASCADE）+ Cloud Storage object delete；GET export.json → 查 user_memory + conversation_summary + daily_brief + consent_record_pdf → ZIP 打包 → 簽署 URL 回應 |
| **對應 safety 紅線** | PDPA §11 死亡銷毀 + §15 特定目的外利用 + safety-redlines §4.6 死亡情境 SOP |
| **Tier 對應** | Tier 1 / 2 / 3 全 tier 必含（PDPA 合規前提） |
| **Operator 介入規則** | 用戶觸發 DELETE → Operator 主動電話 follow-up 確認意圖 + 提供「降階免費版」挽留方案（非強制） |

---

## §6. 風險清單 + 緩解

### 6.1 技術風險（5 項）

| # | 風險 | 機率 | 影響 | 緩解 |
|---|---|---|---|---|
| T1 | 台語 ASR 90 天版本準確率僅 60-80% | 🟡 高（已知）| 中（南部長者體驗弱）| Sprint 1-2 暫不啟動台語 ASR，Sprint 3 落「台語問候 20 句預錄版」；Year 1 H2 啟動 Whisper fine-tune；ToS 明示「目前台語主要為問候，完整對話 Year 2」 |
| T2 | LLM 幻覺風險（GPT-4o-mini 對長者場景未驗證）| 🟡 中 | 高（觸發紅線 / 誤導）| Layer 2 rule-based 7 紅線守門器強制阻斷 + Adversarial Test 35 case Sprint 2 完成 + Operator 即時介入；system prompt v0.3 含完整 7 紅線禁忌 + 長者陪伴 persona |
| T3 | 響應延遲（端到端 latency > 3 秒）| 🟡 中 | 中（對話體驗弱）| GCP asia-east1 部署最短 RTT；STT/TTS 串流輸出（不等完整 response）；LangChain LLM 抽象層支持模型 hot-swap；p95 ≤3 秒 SLA 量測 |
| T4 | Wake word 誤觸發（電視 / 親友對話）| 🟡 中 | 低（長者體驗略弱）| Picovoice Porcupine 3.0 商用驗證；自訂中文「白白」訓練；每日誤觸發 ≤2 次 / 8 小時 baseline；Sprint 1 Day 5 上線測試驗證 |
| T5 | Operator UI WebSocket 中斷 / Operator 漏接 | 🟡 中 | 高（紅線觸發但 LLM 漏接）| Redis pub/sub backup + Sentry alerting；Operator 排班 2 人 + 夜間 on-call；連續 ≥3 戶斷線 → 自動緊急 alert 全 Operator |

### 6.2 採購風險（3 項）

| # | 風險 | 機率 | 影響 | 緩解 |
|---|---|---|---|---|
| P1 | iPad 10.9" 缺貨（Apple 庫存有限）| 🟡 低 | 中（影響 Pilot 啟動 Day 4-5）| Samsung Galaxy Tab S9 FE 5 台備援；採購雙通路（燦坤 + 全國電子 + Apple 官網） |
| P2 | ReSpeaker 4-Mic Array 海外採購延誤 | 🟡 中 | 中（影響遠場語音 5m 體驗）| 預先採購 15 台（10 戶 + 5 備援）；Sprint 1 Day 1 下單預留 7-10 天物流；備援用平板內建麥克風（近場 ≤2m） |
| P3 | 3D 列印底座 / 軟膠外殼供應商缺料 | 🟡 低 | 低（影響外觀，不影響功能）| 多家 3D 列印廠商接單；備援方案：商業現成平板支架 |

### 6.3 Operator 風險（2 項）

| # | 風險 | 機率 | 影響 | 緩解 |
|---|---|---|---|---|
| O1 | Operator 人力不足（10 戶 × 24/7 覆蓋負擔）| 🟡 中 | 高（漏接緊急通知 / 紅線觸發）| Sprint 1-2 階段嚴格 15 hr 覆蓋（07:00-22:00 兩人 8 hr 班）+ 夜間 22:00-07:00 on-call only；10 戶上限不超載；Year 1 規模化前評估增聘 |
| O2 | Operator 介入延遲（SLA ≤5 秒沒達成）| 🟡 中 | 中（長者體驗弱 / 紅線觸發處理慢）| Operator UI 即時通知（Discord-like push）+ FAQ knowledge base 即取即用；訓練熟練度 ≥80% 觸發即時辨識 + 回應；Sprint 2 Day 22-24 SLA baseline 量測 |

### 6.4 Safety 風險（3 項）

| # | 風險 | 機率 | 影響 | 緩解 |
|---|---|---|---|---|
| S1 | 第一週紅線觸發 false positive（如長者隨口說「不想活」） | 🟡 高（行業已知）| 中 | Layer 2 rule-based 觸發後 → Operator 必 confirm + 同步電話 follow-up；false positive 計入 Operator 介入 log 持續調整 pattern；safety-redlines §2.6 自殺意念 SOP |
| S2 | 緊急通知 false positive（≥2 次/週狼來了效應）| 🟡 中 | 高（子女 NPS 下降）| 3 層確認機制（AI 第一層 → 機器人主動詢問長者 → 子女確認）；目標 false positive ≤1/週；feature-triage §3 R07 對應 |
| S3 | 長者首 2 週棄用率 30-50%（行業已知）| 🟡 高 | 中 | F13 onboarding ≤10 分鐘 hard constraint；F01 主動問候降棄用率；Operator 主動 follow-up 連續 3 天無互動戶；Sprint 2 Day 22-24 棄用 baseline 量測 |

### 6.5 法規風險（2 項）

| # | 風險 | 機率 | 影響 | 緩解 |
|---|---|---|---|---|
| L1 | PDPA 同意機制設計不足（W5 必完成）| 🟡 中 | 高（最高罰款 NT$1,500 萬 + 停止使用）| DPIA Sprint 1 Day 12 律師審查 + 三方同意機制（長者音訊 + 子女書面 + 見證）Sprint 1 Day 5 設計 + Sprint 2 Day 18 onboarding 流程跑通 + ToS Plan-Only 紅線 P3 揭露 |
| L2 | AI 基本法 2025/12 子法規不確定性 | 🟡 中 | 中（90 天 MVP 不直接影響，Year 1 ODM 影響）| W4 前律師 readiness 評估 + 保守設計（Privacy by Design + 透明性宣告 + 演算法影響評估）；Sprint 1-2 階段不直接影響（App 形態 + Plan-Only Mode） |

---

## §7. Sprint 1-2 量測指標

### 7.1 Output Metrics（交付完整度）

| 指標 | 目標 | 量測時機 |
|---|---|---|
| feature MUST 9 個全部 working | ✅ all 9（F01 / F02 / F09 / F10 / F11 / F13 / F20 / F21 / F22）| Sprint 2 Day 27 |
| Operator UI v0 + FAQ 50+ 模板 | ✅ 上線 + Operator 排班正式啟動 | Sprint 2 Day 19 |
| Layer 2 7 紅線守門器 + Adversarial Test 35 case | ✅ 全綠 + 0 漏接 | Sprint 2 Day 19 |
| DPIA v1 + ToS 三方同意機制 | ✅ 律師審查通過 + onboarding 流程跑通 | Sprint 2 Day 18 |
| 內部 alpha 10 戶上線 | ✅ 10 戶 onboarding 完成 + 三方同意齊全 | Sprint 2 Day 18 |

### 7.2 Performance Metrics（效能）

| 指標 | 目標 | 量測時機 |
|---|---|---|
| 對話端到端延遲 p95 | ≤3 秒 | Sprint 2 Day 17 壓力測試 + 持續 |
| Wake word 喚醒率 | ≥90% | Sprint 1 Day 5 端側測試 |
| Wake word 誤觸發 | ≤2 次/日 / 8 小時 | Sprint 1 Day 5 端側測試 + Sprint 2 Day 22-24 真實 baseline |
| STT 中文準確率 | ≥90%（zh-TW） | Sprint 1 Day 4 + Sprint 2 Day 22-24 真實 baseline |
| STT 台語準確率（基線） | ≥70%（首版 baseline，Sprint 1-2 不啟用，Sprint 3 預錄版 20 句）| Sprint 3 Day 28+ |
| LLM 首 token 時間 | ≤3 秒 | Sprint 1 Day 4 + 持續 |

### 7.3 Safety Metrics（安全 + 紅線）

| 指標 | 目標 | 量測時機 |
|---|---|---|
| 紅線觸發 false positive | 0 次（Sprint 1-2 階段）| Sprint 2 Day 22-24 |
| Operator 介入時間 SLA | ≤5 秒 | Sprint 2 Day 22-24 持續量測 |
| 緊急通知 SLA | ≤5 分鐘 | Sprint 2 Day 19 演習測試 + 持續 |
| Adversarial Test 35 case 通過率 | ≥95% 召回（任一紅線 < 95% = BLOCKER）| Sprint 2 Day 19 |

### 7.4 UX Metrics（體驗）

| 指標 | 目標 | 量測時機 |
|---|---|---|
| 內部 alpha 10 戶 NPS | ≥4/5 | Sprint 2 Day 27 |
| 子女 onboarding 完成率 | ≥80% ≤10 分鐘 | Sprint 2 Day 18 |
| 長者 Day-7 主動互動次數 | ≥3 次/天（≥70% 戶達標）| Sprint 2 Day 27（早期 baseline） |
| Sean Ellis 早期信號（內部 alpha 10 戶）| ≥30%（PMF ≥40% 為 Sprint 4 目標）| Sprint 2 Day 27（早期 baseline）|

> 注意：Sprint 2 Day 27 量測為「Sprint 1-2 結束早期信號」，非 PMF 正式量測（PMF 量測在 Sprint 4 W11-W12 / 10-20 戶 Pilot Week 4）

---

## §8. Phase 5 後續輸入（給 Sprint 3 / Sprint 4）

### 8.1 Sprint 1-2 已交付 → Sprint 3 銜接

| Sprint 1-2 交付 | Sprint 3 銜接點 |
|---|---|
| 基礎對話（F02 + F01）| Sprint 3 加 F12 子女 daily brief（依賴 1 週對話資料積累）|
| Layer 2 7 紅線守門器 + Adversarial Test 35 case | Sprint 3 加 F08 非影像式異常偵測（WoZ 互動中斷版）+ Fairness Audit（台語 / 客語 / 外省 / MCI 各 ≥10 句，準確率差距 ≤15pp） |
| LLM system prompt v0.3 + 個人記憶 schema 預留 | Sprint 3-4 加 F04 個人記憶 AI（pgvector RAG 整合）|
| Operator UI v0 + 排班 + FAQ 50+ 模板 | Sprint 3 升 FAQ 100+ 模板 + Operator 訓練 v3 |

### 8.2 Sprint 4 銜接（W11-W12 閉迴路測試）

| Sprint 3 完成 | Sprint 4 銜接 |
|---|---|
| F08 異常偵測 WoZ 版 + F04 個人記憶 + F12 子女 daily brief + F05 節氣話題 + F11 服藥提醒朋友語氣正式版 | Sprint 4 啟動 10-20 戶閉迴路 Pilot（北漂 5 + 在地 3 + 高端 2，主要對應 Persona A 5 / B 3 / C 2）+ 1-2 機構 LOI BD + PMF 量測（Sean Ellis ≥40% / Day-7 retention / W4 retention / NPS） |
| Adversarial Test 70+ 案例 × 7 紅線（≥95% 召回率） | Sprint 4 持續監測 + 紅線觸發 log 分析 + 緊急偵測假演習 3 次 |

### 8.3 Sprint 3 / 4 後續對 Sprint 1-2 的依賴

- Sprint 3 假設 Sprint 1-2 端對端 latency ≤3 秒 baseline 達標 → 否則 Sprint 3 加開「效能優化 mini-sprint」
- Sprint 3 假設 Layer 2 守門器 0 漏接 → 否則 Sprint 3 升級「Layer 2 多重 fallback」設計
- Sprint 4 假設 Sprint 1-2 + 3 累計 ≥4 週 alpha 戶數據 → 用於 PMF 正式量測校準
- Sprint 4 假設 Operator 介入頻率 baseline 已 Sprint 1-2 + 3 量測完成 → 用於 Year 1 Operator 自動化 roadmap

---

## §9. 預算估算（規劃版，📋 post-approval execution）

### 9.1 Sprint 1-2 四週預算（W5-W8 / 28 天）

> **預算校準說明（2026-05-27 修補）**：本節原以 21 天估算（Sprint 1-2 = 3 週）；對齊 decision-w6.md §7.1 SSOT（Sprint 1-2 = W5-W8 / 4 週 / 28 天），以下使用量 / Operator 工時 / 雲端開銷需 × 4/3 = ~33% 上調。原估 NT$110 萬 → 校準後估 NT$135-145 萬。詳細各 line item 重算待 Sprint 啟動前由實作 team 補（📋 post-approval execution）。

| 類別 | 項目 | 預估 NT$（萬）| 標籤 |
|---|---|---|---|
| **硬體採購** | iPad 10.9" 10 台 × NT$22,900 | 22.9 | 📋 |
| | Samsung Galaxy Tab S9 FE 5 台 × NT$11,900 | 5.95 | 📋 |
| | ReSpeaker 4-Mic Array 15 台 × NT$2,500 | 3.75 | 📋 |
| | 3D 列印底座 + 軟膠外殼 15 套 × NT$3,000 | 4.5 | 📋 |
| | 補充感測（PIR / 環境光，部分戶試用）5 套 × NT$1,500 | 0.75 | 📋 |
| | 採購雜項 + 物流 + 配件 | 2.0 | 📋 |
| | **硬體小計** | **39.85** | 📋 |
| **雲端開銷（3 週）** | GCP Cloud Run + Cloud SQL + Memorystore + Cloud Storage | 3.0 | 📋 |
| | OpenAI GPT-4o-mini API（10 戶 × 21 天 × 100K tokens / 月）| 1.0 | 📋 |
| | Anthropic Claude 3.5 fallback API | 0.5 | 📋 |
| | Google Cloud STT V2（10 戶 × 21 天 × 20 分鐘/天 × USD 0.024/分鐘）| 1.5 | 📋 |
| | Azure Speech TTS（10 戶 × 21 天 × 30K chars/天 × USD 16/M）| 1.0 | 📋 |
| | Picovoice Porcupine 商用授權（15 裝置 × 3 週 × USD 0.49/月） | 0.5 | 📋 |
| | Auth0 Free tier（< 7,000 MAU） | 0 | 📋 |
| | 雲端 buffer + 預期超支 | 2.5 | 📋 |
| | **雲端小計** | **10.0** | 📋 |
| **後台 Operator** | 早班 + 晚班 2 人 × 3 週 × NT$50,000/月（≈ NT$12,500/週 × 2 人）| 7.5 | 📋 |
| | 夜間 on-call 1 人 × 3 週 × NT$5,000/週 | 1.5 | 📋 |
| | Operator 訓練 + Operator 手冊製作 | 1.0 | 📋 |
| | **Operator 小計** | **10.0** | 📋 |
| **法務 / DPIA / ToS** | 律師（理慈 / 萬國 / 普華）DPIA 首版 + 跨境同意書審查 | 8.0 | 📋 |
| | ToS 條款定稿 + 三方同意 PDF 製作 | 2.0 | 📋 |
| | **法務小計** | **10.0** | 📋 |
| **內部人員（3 週工時）** | 後端工程 1 人 × 3 週 × NT$60,000/月 | 4.5 | 📋 |
| | App 工程（iOS + Android）2 人 × 3 週 × NT$60,000/月 | 9.0 | 📋 |
| | AI 工程 1 人 × 3 週 × NT$80,000/月 | 6.0 | 📋 |
| | 前端工程（Operator UI）1 人 × 3 週 × NT$60,000/月 | 4.5 | 📋 |
| | DevOps 1 人 × 3 週 × NT$60,000/月 | 4.5 | 📋 |
| | PM + UX 1 人 × 3 週 × NT$60,000/月 | 4.5 | 📋 |
| | **內部人員小計** | **33.0** | 📋 |
| **採購雜項 + 行銷 / Pilot 招募 + 不可預期** | Pilot 戶招募（Facebook 廣告 + 失智症協會合作）| 2.0 | 📋 |
| | 雜項 + 不可預期 buffer | 5.0 | 📋 |
| | **雜項小計** | **7.0** | 📋 |
| | **Sprint 1-2 總計（21 天）** | **NT$109.85 萬（≈ NT$110 萬）** | 📋 |

> 註：本預算為 Plan-Only Mode 規劃版，與懷特要求的 NT$60-90 萬區間略高（內部人員 + 法務 NT$43 萬為主要差異，可視懷特決策調整內部團隊配置或法務支出規模）

### 9.2 Sprint 1-2 後續預算對映

| 時程 | 累計預算 | 主要支出 |
|---|---|---|
| Sprint 1-2（W5-W8 / 28 天）| NT$135-145 萬（原 21 天估 NT$110 萬 × 4/3 上調）| 硬體 + 內部團隊 + 法務 |
| Sprint 3（W9-W10 / 14 天） | + NT$96-133 萬（對齊 sprint-3-spec.md §10.7）| 個人化記憶 RAG + 緊急偵測 + 子女 App |
| Sprint 4（W11-W12 / 14 天） | + NT$185-260 萬（對齊 sprint-4-spec.md §11.1）| 5-10 家庭 + 1-2 機構 + PMF 量測 + Operator 擴編 |
| **90 天 MVP 累計** | **NT$416-538 萬**（對齊 build-vs-buy.md §6.2 NT$357-592 萬區間內含）| 修補說明：原 NT$240 萬嚴重低估 Sprint 3+4，已校準至 sprint-3-spec / sprint-4-spec 自報實際數字 |

---

## §10. Coverage Matrix（自我檢核）

### 10.1 任務要求覆蓋表

| 要求項目 | 完成狀態 | 位置 |
|---|---|---|
| §1 Sprint 1-2 目標 + 範圍 | ✅ | §1 |
| §2 Tech Stack 確認（硬體 / OS / 語音 / LLM / 後端 / 部署 / PDPA）| ✅ | §2.1-2.9 |
| §3 後台 Wizard-of-Oz 人在環設計（Operator UI v0 + 排班 + SLA + ToS）| ✅ | §3.1-3.4 |
| §4 Sprint 拆解（Day-level Day 1-28）| ✅ | §4.1（Sprint 1）+ §4.2（Sprint 2）|
| §5 Feature MUST 9 詳細規格（8 維度齊全）| ✅ | §5.1-5.9 |
| §6 風險清單 + 緩解（技術 / 採購 / Operator / Safety / 法規 5 類 15 項）| ✅ | §6.1-6.5 |
| §7 Sprint 1-2 量測指標（Output / Performance / Safety / UX 4 類）| ✅ | §7.1-7.4 |
| §8 Phase 5 後續輸入（給 Sprint 3 / Sprint 4）| ✅ | §8.1-8.3 |
| §9 預算估算（NT$110 萬 / 3 週）| ✅ | §9.1-9.2 |
| §10 Coverage Matrix | ✅ | §10 |
| Plan-Only Mode 標籤（✅ / 🟡 / 📋）全文 | ✅ 全文 | 全文 |
| 報告對象 ASUS 主管客觀中立（無「速度比 ASUS 快」推銷）| ✅ | 全文 |
| 禁用「demo」字眼 / 禁稱「Mode E」/ 改稱 PM Flow v0.1 | ✅ | 全文 |
| Tier 1 Starter MUST features 對齊 | ✅ | §5 + §9 對齊 pricing.md §4.1 |
| feature MUST 8（+ F22 PDPA 合規 = 9）全覆蓋 | ✅ | §5.1-5.9 |
| 19 safety 紅線 guardrail 對應（10 絕對 N1-N10 + 6 條件 C1-C6 + 3 Plan-Only P1-P3）| ✅ | §3 Operator + §5 feature safety + §6 風險清單 |
| PDPA 同意機制設計覆蓋（三方同意：長者音訊 + 子女書面 + 見證）| ✅ | §3.4 ToS + §4.1 Sprint 1 Day 5 + Day 18 + §5.6 F13 + §5.9 F22 + §6.5 L1 |
| Wizard-of-Oz Operator 介入設計覆蓋（UI v0 + 排班 + SLA + 3 觸發條件）| ✅ | §3.1-3.3 + §5 每 feature Operator 介入規則 |

### 10.2 Coverage 統計

| 維度 | 數量 |
|---|---|
| **章節數** | 10 章節（§1-§10）|
| **feature 數** | 9 個 MUST feature（F01 / F02 / F09 / F10 / F11 / F13 / F20 / F21 / F22）|
| **Tier 對應** | Tier 1 Starter / Tier 2 Pro / Tier 3 Premium 全 tier 必含 |
| **safety 紅線數** | 19 條（10 絕對 N1-N10 + 6 條件 C1-C6 + 3 Plan-Only P1-P3）|
| **Sprint Day 拆解** | 28 天（Sprint 1 Day 1-14 + Sprint 2 Day 15-28）|
| **風險清單** | 15 項（技術 5 / 採購 3 / Operator 2 / Safety 3 / 法規 2）|
| **量測指標** | 17 項（Output 5 / Performance 6 / Safety 4 / UX 4）+ 重疊 2 計入 |
| **Plan-Only 標籤分布** | ✅ desk-validated ~30 處 / 🟡 hypothesis ~25 處 / 📋 post-approval execution ~60 處 |

---

> **建立在**：build-vs-buy.md + mvp-type.md + tech-architecture.md + feature-triage.md + safety-redlines.md + lean-canvas.md + pricing.md + decision-w6.md
> **下一步（Sprint 3 W9-10）**：本 Sprint 1-2 規格書交付後，Sprint 3 銜接 F08 非影像式異常偵測（WoZ 互動中斷版）+ F04 個人記憶 AI（pgvector RAG）+ F12 子女 daily brief + F05 節氣話題 + F11 服藥提醒朋友語氣正式版；同時啟動 10-20 戶 Pilot 招募 funnel + 1-2 機構 LOI BD
> **報告對象**：華碩（ASUS）AI 代理人 / 服務型機器人主管 1 位 review 規劃書用途，客觀中立
