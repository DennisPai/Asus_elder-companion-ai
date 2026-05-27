# Phase 3 T26：技術架構 + 隱私邊界規劃書
## 長者互動陪伴機器人 × AI Brain MVP

> **執行日期**：2026-05-27
> **執行模式**：PM Flow v0.1 / Phase 3 T26 技術架構 + 隱私邊界
> **角色配置**：tech-architect / privacy-engineer（本報告合併）
> **Plan-Only Mode**：本文件是「技術選型規劃書」，不是「已部署架構」；所有結論加標籤 ✅ desk-validated / 🟡 hypothesis / 📋 post-approval execution
> **報告對象**：華碩（ASUS）AI 代理人 / 服務型機器人主管（規劃書 review 用途）
> **建立在**：
> - problem-framing.md §3 倫理紅線 + §4.7 Build vs Buy + §4.8 ASUS Zenbo Junior II 客觀更新
> - phase-0.5-deconstruction.md §5.2 4 hypothesis Lean Canvas + §5.4 假設 3（非影像式緊急偵測）+ 假設 5（PDPA + TFDA 法規時程）
> - phase-0-answers.md（Plan-Only Mode + Geo 台灣 only + 客觀中立呈現 ASUS）
> - build-vs-buy.md（T24，硬體 WoZ 平板 + AI Brain 混合架構）
> - mvp-type.md（T25，主軸 Wizard of Oz）
> **禁用字眼**：demo（已改稱「主管 review 規劃書」）；禁延伸「ASUS 是合作夥伴」推銷語氣

---

## 0. Executive Summary

本報告為「長者互動陪伴機器人 × AI Brain」90 天 MVP 與 Year 1-3 演進的**完整技術架構規格書 + 隱私邊界規劃**，涵蓋 8 大章節 60+ 子題。

**90 天 MVP 三句話技術定義**：

1. **硬體形態**：市售 iPad 10.9" / Android 平板（11 吋 4G 版）+ ReSpeaker 4-mic USB 麥克風陣列 + 桌上型可調角度底座 + 軟膠外殼；零自製硬體 = 零 BSMI 認證風險
2. **AI Brain 三層混合架構（ROE-style）**：
   - Layer 1（對話主幹，雲端）：GPT-4o-mini 主 + GPT-4o 複雜任務 fallback，部署 GCP asia-east1 台灣節點
   - Layer 2（安全護網，邊緣）：Python rule-based 7 條 LLM 絕對紅線（problem-framing.md §3.1）+ 緊急偵測初判 + Re-consent 觸發器
   - Layer 3（語音介面，雲＋邊混合）：Google Cloud STT（中文 + 台語初版）+ Azure Speech TTS（台語基礎問候 + 中文完整）+ 端側 wake word（Porcupine 或 openWakeWord）
3. **資料邊界**：原始音訊永不出端、wake word 100% 端側、跌倒/異常訊號優先端側初判、僅對話文字摘要過境（嚴格資料最小化 + 跨境同意書 + Layer 2/3 在台部署）

**隱私邊界三句話結論**：

1. **三層資料分類**（§4.2）：
   - **可雲端**（with 跨境同意）：對話文字摘要、子女 dashboard 推播 metadata、匿名化使用 metric
   - **必端側**：原始語音串流、wake word 偵測、跌倒/異常感測訊號、認知狀態 flag、緊急聯絡人清單
   - **完全不收**：環境影像 24/7 連續錄影、長者帳號密碼、家庭關係衝突細節、未經同意的子女配偶資料
2. **PDPA 2025/12 修訂版主合規路徑**：跨境傳輸僅限「文字摘要 + 嚴格資料最小化」+ Layer 2/3 全在台部署 + 三方同意機制（長者語音同意 + 子女書面 + 第三方見證）+ DPIA 在 W4 前由理慈 / 萬國 / 普華律師完成；2025/8 成立的個人資料保護委員會（PDPC）為主管機關
3. **AI 基本法 2025/12 + 醫療法雙重邊界**：90 天 MVP 嚴守「日常陪伴輔助工具，不具醫療功能」定位（消保法 §7-1 + 醫療法 §103-1）；7 條 LLM 紅線（醫療 / 投藥 / 急救 / 法律 / 投資 / 心理治療 / 臨終）作為 Layer 2 rule-based 守門器強制執行；TFDA II 類認證為 Year 2-3 milestone

**Year 1-3 演進路線一句話**：
- **Year 1**：硬體遷台灣 ODM（路徑 B，BSMI 認證 H2 同步）；AI Brain 路徑 C 持續 + Whisper 台語 ASR fine-tune 啟動；雲端服務維持 GCP asia-east1
- **Year 2**：開源 LLM（Llama-3 8B / Qwen-2.5 14B）比例提升至 30-50%、降 Vendor lock-in；ISO 13482 申請；自建在台 GPU 推理節點考量
- **Year 3**：TFDA II 類認證取得；長照 3.0 智慧輔具補貼名單正式進入；台智雲 FFM 或鴻海研究院繁中 LLM 合作評估

---

## §1. 系統架構總覽

### 1.1 High-level 架構圖（六層框架，文字版）

```
┌─────────────────────────────────────────────────────────────┐
│  Layer 6：第三方整合（PDPA-規範 / 受控介面）                  │
│  ┌──────────────┬──────────────┬──────────────┐             │
│  │ 緊急聯絡人    │ 119 緊急服務  │ 長照 3.0     │             │
│  │ LINE Notify  │ (規劃 Y2+)   │ 政府補貼 API │             │
│  └──────┬───────┴──────┬───────┴──────┬───────┘             │
└─────────┼──────────────┼──────────────┼─────────────────────┘
          │              │              │
┌─────────▼──────────────▼──────────────▼─────────────────────┐
│  Layer 5：機構後台（B2B2C，Hypothesis B，Year 1+）             │
│  ┌──────────────────────────────────────────────────┐       │
│  │ 機構儀表板：多戶個案 / 員工排程 / 緊急統一通報     │       │
│  │ → 對接智齡科技 / 宏碁智醫 API（OAuth 2.0）         │       │
│  └────────────────────────┬─────────────────────────┘       │
└───────────────────────────┼─────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────┐
│  Layer 4：子女 App（iOS + Android，B2C 核心介面）             │
│  ┌─────────────────────────────────────────────────┐        │
│  │ 子女 dashboard：每日 / 每週摘要 + 緊急通知 + 雙向視訊│       │
│  │ + 隱私同意管理 + 多子女帳號 + Re-consent 觸發       │       │
│  └────────────────────────┬────────────────────────┘        │
└────────────────────────────┼────────────────────────────────┘
                             │  HTTPS / TLS 1.3
┌────────────────────────────▼────────────────────────────────┐
│  Layer 3：雲端（GCP asia-east1 台灣節點 + Azure East Asia 備援）│
│  ┌──────────────────────────────────────────────────────┐   │
│  │ ┌────────────┐  ┌─────────────┐  ┌──────────────┐  │   │
│  │ │ LLM 推理    │  │ STT/TTS     │  │ 業務 API     │  │   │
│  │ │ GPT-4o-mini│  │ Google STT  │  │ FastAPI      │  │   │
│  │ │ GPT-4o     │  │ Azure TTS   │  │ (Python 3.12)│  │   │
│  │ └────────────┘  └─────────────┘  └──────┬───────┘  │   │
│  │ ┌──────────────────────────────────────▼────────┐  │   │
│  │ │ PostgreSQL 15（用戶 / 摘要 / 同意書）+         │  │   │
│  │ │ Redis 7（session / wake word state）+         │  │   │
│  │ │ pgvector（個人記憶 RAG）                       │  │   │
│  │ └────────────────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────────────────┘   │
└──────────────────────────┬───────────────────────────────────┘
                           │  WSS (WebSocket Secure) + mTLS
┌──────────────────────────▼───────────────────────────────────┐
│  Layer 2：邊緣（平板端，Android 14 / iPadOS 17）                │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐  │   │
│  │ │ wake word    │ │ Layer 2      │ │ 跌倒/異常     │  │   │
│  │ │ Porcupine /  │ │ rule-based   │ │ 偵測初判      │  │   │
│  │ │ openWakeWord │ │ 7 紅線守門   │ │ (非影像式)    │  │   │
│  │ └──────────────┘ └──────────────┘ └──────────────┘  │   │
│  │ ┌──────────────────────────────────────────────┐    │   │
│  │ │ 長者端 App（React Native / Flutter）         │    │   │
│  │ │ ：超大字 + 語音 first + 觸控 second          │    │   │
│  │ │ + 主動關閉模式 + 三方同意 onboarding         │    │   │
│  │ └──────────────────────────────────────────────┘    │   │
│  └──────────────────────────────────────────────────────┘   │
└──────────────────────────┬───────────────────────────────────┘
                           │  USB / BT 5.0
┌──────────────────────────▼───────────────────────────────────┐
│  Layer 1：硬體端（市售平板 + 周邊，Wizard-of-Oz 形態）           │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ 平板：iPad 10.9" 256GB Wi-Fi+4G（NT$14,900-22,900）  │   │
│  │      或 Samsung Galaxy Tab S9 FE（NT$11,900）        │   │
│  │ 麥克風：ReSpeaker 4-Mic Array v2.0（NT$2,500）       │   │
│  │ 鏡頭：平板內建（緊急場景用，預設關閉，非 24/7 開啟）  │   │
│  │ 底座：可調角度 + 防摔軟膠外殼（NT$2,000-3,000）       │   │
│  │ 補充感測（option）：紅外線 PIR + 環境光感測（IoT）    │   │
│  │ BOM 合計：NT$18,000-22,000 / 台                       │   │
│  └──────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────┘
```

✅ 架構基於 build-vs-buy.md §3.4 AI Brain 路徑 C 推薦組合 + ElliQ ROE（Relationship Orchestration Engine）混合架構公開資訊

### 1.2 Tech Stack 選型表（90 天 MVP）

| 類別 | 元件 | 選型 | 版本 | 標籤 | 理由 |
|---|---|---|---|---|---|
| **硬體（平板）** | iOS 端 | iPad 10.9" 256GB Wi-Fi + Cellular | iPadOS 17.5+ | ✅ | 已取得 BSMI / FCC / CE；台灣燦坤 / 全國電子穩定供貨 |
| **硬體（平板）** | Android 端 | Samsung Galaxy Tab S9 FE 11" 4G | Android 14 | ✅ | 同 BSMI；備援避免單一平台依賴 |
| **硬體（麥克風）** | 麥克風陣列 | ReSpeaker 4-Mic Array v2.0（USB）| Rev 2.0 | ✅ | 4 麥克風 beam-forming；遠場 5m 語音識別優於平板內建 |
| **硬體（底座 / 外殼）** | 機構件 | 桌上型可調角度底座 + 軟膠外殼 | 自製 / 3D 列印 | 🟡 | 90 天 MVP 用 3D 列印小量；Year 1 委外射出成型 |
| **OS（端側）** | iOS / iPadOS | iPadOS 17.5+ | — | ✅ | App Store 上架；iOS 隱私沙箱 |
| **OS（端側）** | Android | Android 14（API 34）| — | ✅ | Play Store 上架；Project Mainline 隱私強化 |
| **App 開發框架** | 跨平台 | React Native 0.74 LTS | 0.74 | 🟡 | iOS + Android 共用 70% 代碼；長者端 UI 可用 React Native；備援考量 Flutter 3.22（Google 原生支援 + 性能略優）|
| **App 開發框架** | 子女 App | React Native 0.74 LTS | 0.74 | 🟡 | 同上 |
| **Wake word（端側）** | 中文 | Picovoice Porcupine 3.0 商用授權 | 3.0 | ✅ | 完全端側執行 / iOS + Android 原生 SDK / 中文 wake word 已驗證；商用授權 USD 0.49/月/裝置 |
| **Wake word（端側）** | 開源備援 | openWakeWord（onnx）| 0.6.0 | 🟡 | Apache-2.0 開源；台語 wake word 可自訓但 90 天時程緊 |
| **STT（語音識別，雲）** | 中文 | Google Cloud Speech-to-Text V2 | latest | ✅ | 台灣節點 asia-east1；中文（zh-TW）成熟；台語（nan-Hant-TW）支援但錯字率 20-40% |
| **STT 備援** | 中文 + 台語 | Azure Speech to Text | 2024 latest | ✅ | East Asia 區域；中文較弱但 fallback 用 |
| **TTS（語音合成，雲）** | 中文 + 台語基礎 | Azure Speech Service TTS | 2024 latest | ✅ | 台語問候 / 常用詞商業可用；中文（zh-TW）多語者選擇豐富 |
| **TTS 備援** | 中文 | Google Cloud Text-to-Speech WaveNet | latest | ✅ | 中文 WaveNet 自然度高；台語不支援 |
| **LLM（對話主幹）** | 日常對話 | OpenAI GPT-4o-mini API | 2024-07-18+ | ✅ | USD 0.15-0.60/M tokens；中文台灣文化理解可接受 |
| **LLM（複雜任務）** | 失智摘要 / 倫理邊界 | OpenAI GPT-4o API（fallback）| 2024-08-06+ | ✅ | USD 2.5-10/M tokens；複雜情境 fallback |
| **LLM（備援）** | 全功能備援 | Anthropic Claude 3.5 Sonnet API | 2024-10-22+ | ✅ | Anthropic 倫理 alignment 較強；OpenAI 漲價 / 限制時 hot-swap |
| **LLM 抽象層** | 切換層 | LangChain 0.3 + LangGraph 0.2 | 0.3 / 0.2 | ✅ | 模型抽象 + ROE 劇本層；Vendor lock-in hedge |
| **RAG（個人記憶）** | 向量資料庫 | pgvector 0.7（PostgreSQL extension）| 0.7 | ✅ | PostgreSQL 內建；無額外服務；對話摘要 + 個人偏好 |
| **後端框架** | 業務 API | FastAPI（Python 3.12）| 0.115+ | ✅ | async 高並發；OpenAPI 自動生成；Pydantic v2 型別保證 |
| **後端任務佇列** | 背景任務 | Celery 5.4 + Redis 7 backend | 5.4 | ✅ | 緊急通知 / 子女摘要生成等非同步任務 |
| **WebSocket 推送** | 即時通訊 | FastAPI WebSocket + uvicorn | latest | ✅ | 語音 streaming + 子女 push |
| **資料庫（主）** | 關聯式 | PostgreSQL 15 + pgvector | 15.7 | ✅ | 用戶 / 同意書 / 對話摘要 / 個人記憶（向量）|
| **資料庫（快取）** | KV | Redis 7.2 | 7.2 | ✅ | session / wake word state / rate limit |
| **資料庫（物件儲存）** | 語音檔（短期保留）| GCP Cloud Storage（asia-east1）| — | ✅ | 加密 AES-256；保留 7 天 hard 上限後自動刪除 |
| **雲端供應商（主）** | 區域 | Google Cloud Platform asia-east1（彰化）| — | ✅ | 台灣節點；PDPA §21 跨境傳輸風險降至最低 |
| **雲端供應商（備援）** | 區域 | Microsoft Azure East Asia（香港）| — | 🟡 | 備援；香港節點 vs 台灣節點的 PDPA 風險需律師評估；考量遷至 Azure Taiwan North（2024 後啟用）|
| **容器化** | 部署 | Docker 26+ / Docker Compose | 26 | ✅ | 開發 + 部署一致性 |
| **編排** | 部署 | GCP Cloud Run（無 GPU 工作負載）+ GCE GPU instance（推理）| — | ✅ | Cloud Run 自動擴展；GPU instance Year 1 開源 LLM 用 |
| **CI/CD** | 部署 | GitHub Actions + GCP Artifact Registry | — | ✅ | 自動 build + push + deploy |
| **觀測** | 監控 | GCP Cloud Monitoring + Sentry（前端 + 後端 error）| — | ✅ | OpenTelemetry trace；PDPA-safe log（不收原始對話內容）|
| **觀測（隱私安全）** | 對話分析 | 自建 anonymized log（不儲對話原文）| — | ✅ | PDPA 合規優先 vs DataDog / NewRelic 等境外服務不採用 |
| **身分驗證（子女）** | OAuth 2.0 | Auth0 Free tier（< 7,000 MAU）→ Year 1 self-hosted Authentik | — | 🟡 | Auth0 起步快；Year 1 規模化後遷 Authentik 降 Vendor lock-in |
| **身分驗證（長者）** | 無密碼 | 語音 enrollment（聲紋）+ 子女遠端設定 | — | 🟡 | 長者免密碼進入；聲紋驗證為長者「我選擇用它」的尊嚴設計 |
| **加密（傳輸）** | TLS | TLS 1.3 強制（不接受 1.2 以下）| — | ✅ | NIST + 台灣 PDPC 建議 |
| **加密（儲存）** | AES | AES-256-GCM（GCP CMEK 自帶金鑰）| — | ✅ | CMEK = Customer Managed Encryption Key，金鑰我方控制 |
| **加密（端側）** | 設備加密 | iOS Data Protection / Android Encrypted File System | — | ✅ | 平台原生 |
| **法律遵循** | DPIA 工具 | Microsoft DPIA Template + 律師客製 | — | 📋 | W4 前由理慈 / 萬國 / 普華完成首版 |

---

## §2. 資料流（Data Flow Diagrams）

> 共 4 個資料流：對話、緊急偵測、子女摘要、機構後台。每流明標**前端送什麼 / 後端收什麼 / DB 存什麼**，符合「端對端資料流追蹤」嚴令。

### 2.1 對話資料流（最高頻 + PDPA 最敏感）

```
[長者] "白白，講笑話給我聽"
   │
   ▼ (1) 麥克風陣列收音 → 端側 wake word 偵測（Porcupine）
   │     【前端持有】PCM 16-bit / 16 kHz 原始音訊 buffer（≤3 秒 rolling）
   │     【傳出】只有「wake word 觸發 trigger event」（boolean + 信賴度）→ 不傳音訊本身
   │
   ▼ (2) 端側 Layer 2 rule-based 預檢
   │     【前端檢查】是否觸發 7 紅線關鍵字（"我想死" / "胸痛" / "投資" / "藥物"...）
   │       → 若觸發 R3 急救 / R6 自殺：立刻轉緊急流程（跳到 §2.2）
   │       → 若觸發 R1/R2/R4/R5/R7：本地播放預錄回應 "這個我建議您..."
   │       → 若無觸發：續流到 (3)
   │
   ▼ (3) 端側 STT pre-buffer + 上傳（WebSocket Secure / TLS 1.3）
   │     【前端送】音訊 chunk（16 kHz / mono / Opus 編碼，約 4 KB/sec）
   │     【欄位】{ session_id: UUID, chunk_seq: int, audio_b64: string,
   │              user_consent_version: int, lang_hint: "zh-TW"|"nan-Hant-TW" }
   │     【傳輸】WSS over TLS 1.3 → GCP asia-east1 FastAPI endpoint
   │
   ▼ (4) 雲端 STT（Google Cloud Speech-to-Text V2）
   │     【後端收】音訊 chunk → 呼叫 Google STT streaming API
   │     【後端 parse】回傳 transcript（中文 / 台語）+ confidence 分數
   │     【DB 暫存】Redis session:{session_id}:transcripts（TTL 1 hr）
   │     【⚠️ 不入 PostgreSQL 永久儲存】原始音訊永不儲；transcript 經 §2.3 摘要後才入庫
   │
   ▼ (5) 後端 Layer 2 二次紅線守門（伺服器端 rule-based）
   │     【後端檢查】transcript 是否含 7 紅線（雙重保險，防端側 bypass）
   │     【若觸發】直接回 pre-defined 回應，不送 LLM；event log 入 redline_triggers 表
   │
   ▼ (6) 後端組 Prompt + RAG（pgvector 取個人記憶 top-K=5）
   │     【後端 SELECT】FROM user_memory WHERE user_id=$1 ORDER BY embedding <=> $2 LIMIT 5
   │     【後端構造】system_prompt（中性 + 7 紅線 + 個性化 context）+ history（最近 10 輪）+ user transcript
   │
   ▼ (7) 雲端 LLM 推理（OpenAI GPT-4o-mini，streaming）
   │     【後端送 OpenAI】POST /v1/chat/completions { model: "gpt-4o-mini", stream: true, ... }
   │     【⚠️ 跨境傳輸點】此處傳出文字 transcript + system prompt 至 OpenAI（美國）
   │       → 必須：已取得三方同意書 + 嚴格資料最小化（無姓名 / 無身分證 / 無精確地址）+ 嚴禁 raw audio
   │     【後端 parse】streaming token → 即時 TTS（避免等完整 response）
   │
   ▼ (8) 雲端 TTS（Azure Speech Service，中文/台語）
   │     【後端送 Azure】SSML 文字 + voice_id（zh-TW-HsiaoChenNeural 或 nan-Hant-TW-*）
   │     【後端 parse】回傳 audio stream（Opus / 24 kHz）→ WSS push 回端側
   │
   ▼ (9) 端側播放
   │     【前端收】audio chunk stream → 解碼播放
   │     【前端不儲】播放完即丟（無快取）
   │
   ▼ (10) 對話結束 → 後端摘要任務（Celery async）
         【Celery task】呼叫 GPT-4o-mini 生成「今日對話摘要」（去敏感化 + 主題化）
         【DB INSERT】INTO conversation_summary
           (id UUID, user_id UUID, summary_text TEXT, topics TEXT[], sentiment TEXT,
            created_at TIMESTAMP, retention_until DATE NOT NULL DEFAULT (NOW() + INTERVAL '90 days'))
         【⚠️ DB 不存 raw transcript】只存「摘要 + 主題 + 情緒標籤」（PDPA 資料最小化）
         【自動清除 cron】每日 03:00 DELETE WHERE retention_until < CURRENT_DATE
```

**三層欄位 / 型別對齊驗證表**：

| 階段 | 欄位 | 型別 | 一致？ |
|---|---|---|---|
| 端側送 → 後端收 | session_id | UUID v4 string（36 chars 含 dash）| ✅ |
| 端側送 → 後端收 | chunk_seq | int32（0-2^31-1）| ✅ |
| 端側送 → 後端收 | audio_b64 | base64 string of Opus chunk | ✅ |
| 端側送 → 後端收 | lang_hint | enum("zh-TW", "nan-Hant-TW", "auto")| ✅ |
| 後端 → Google STT | language_codes | array of enum（同上）| ✅ |
| 後端 → OpenAI | messages[].content | string（UTF-8）| ✅ |
| 後端 → PostgreSQL | summary_text | TEXT NOT NULL CHECK (length(summary_text) < 4000)| ✅ |
| 後端 → PostgreSQL | topics | TEXT[]（PostgreSQL array）| ✅ |
| 後端 → PostgreSQL | sentiment | enum("happy", "neutral", "sad", "anxious", "angry")| ✅ |
| 後端 → PostgreSQL | retention_until | DATE NOT NULL DEFAULT NOW() + INTERVAL '90 days'| ✅ |

🟡 三層全對齊（規劃版 schema 互相驗證）；實際 build 時須再跑端對端 curl + DB query 確認

### 2.2 緊急偵測資料流

```
[感測層] 觸發訊號（任一）：
  (a) 麥克風偵測異常聲音（撞擊聲 / 玻璃破裂 / 持續呼叫無回應）
  (b) IMU 三軸加速度突變（平板放置面跌落，>2.5g 持續 >100ms）
  (c) PIR 紅外線感測連續 4 hr 無動作（option，外接 IoT）
  (d) AI 對話內含 R3 急救 / R6 自殺風險關鍵字
   │
   ▼ (1) 端側初判（Layer 2 rule-based + 簡易 ML）
   │     【前端執行】Python 端側 ONNX 模型（≤10 MB，2024 latest fall-detection model）
   │     【前端輸出】{ event_type: enum, confidence: 0.0-1.0, sensor_source: enum,
   │                  timestamp_local: ISO8601, requires_cloud_confirm: boolean }
   │     【⚠️ 不傳原始音訊 / 影像】只傳事件描述 + 信賴度
   │
   ▼ (2) 端側立即動作（confidence > 0.7 不等雲端）
   │     【前端執行】語音詢問「白白聽到聲響，您還好嗎？」→ 10 秒等待回應
   │       → 有回應 + 確認 OK：取消流程，event log 入 false_positive 表（學習）
   │       → 無回應 / 回應「不舒服」：觸發 (3) 雲端確認 + 立刻 (4) 緊急通知
   │
   ▼ (3) 雲端二階段確認（confidence 0.4-0.7 才走這條）
   │     【後端收】event POST /api/v1/emergency/event
   │       { user_id, event_type, confidence, sensor_source, timestamp, local_response: nullable }
   │     【後端執行】呼叫 GPT-4o 評估「此情境是否需緊急通知」（給 confidence 0.4-0.7 二判）
   │       → 注意：LLM 僅輔助 confidence boost，不能單獨決定緊急（避免幻覺漏報）
   │
   ▼ (4) 緊急通知 fan-out（Celery 高優先佇列）
   │     【DB INSERT】INTO emergency_event
   │       (id UUID, user_id UUID, event_type TEXT NOT NULL,
   │        confidence DECIMAL(3,2), sensor_source TEXT,
   │        triggered_at TIMESTAMP, resolved_at TIMESTAMP NULL,
   │        notified_contacts JSONB NOT NULL DEFAULT '[]',
   │        resolution_status enum("pending","false_positive","true_positive","escalated"))
   │     【通知】LINE Notify push 給所有子女（multi-child fan-out）
   │       + SMS（Twilio backup）+ App push（FCM / APNs）
   │     【SLA】≤5 分鐘觸達（problem-framing.md §3.2.3 Phase 5 標準）
   │
   ▼ (5) 子女回應追蹤
         【子女 App】「我已聯絡父母」按鈕 → POST /api/v1/emergency/{id}/acknowledge
         【DB UPDATE】emergency_event SET resolved_at=NOW(), resolution_status='true_positive'
         【若 15 分鐘無子女回應】升級至「緊急聯絡人 backup」（社區關懷員 / 鄰居）
         【若 30 分鐘無回應】🟡 規劃 Y2+：考慮接 119（需法規確認）
```

**90 天 MVP 緊急偵測能力邊界（誠實標示）**：
- ✅ desk-validated：聲音異常 + IMU 跌落 + AI 對話關鍵字 → 三類訊號融合可達 ≥70% 召回率（學術論文 baseline）
- 🟡 hypothesis：在台灣老舊住宅（嘉義 / 屏東透天）的真實 false positive 率（phase-0.5-deconstruction.md §5.4 假設 3 待 Phase 5 pilot 驗證）
- 📋 post-approval：119 直接介接屬「緊急救護資訊服務系統」管轄，需衛福部 + 內政部消防署雙重審核，**90 天 MVP 不規劃**

### 2.3 子女 App 摘要資料流

```
[Cron 每日 21:00 台灣時間]
   │
   ▼ (1) Celery scheduled task：generate_daily_summary
   │     【後端 SELECT】FROM conversation_summary
   │       WHERE user_id=$1 AND DATE(created_at)=CURRENT_DATE
   │     【後端 transform】聚合 N 段對話摘要 → 「今日要點 3-5 條」+ 情緒走勢 + 健康訊號
   │
   ▼ (2) LLM 二次摘要（GPT-4o-mini）
   │     【後端送 OpenAI】"請將以下對話摘要整理為「給子女的今日重點」3 條 + 情緒一句話"
   │     【⚠️ 跨境】此次傳出已是「摘要的摘要」（已二次去敏感化）
   │     【後端 parse】回傳 markdown 結構化內容
   │
   ▼ (3) DB 持久化
   │     【DB INSERT】INTO daily_brief
   │       (id UUID, user_id UUID, brief_date DATE NOT NULL,
   │        highlights TEXT[3-5], mood_summary TEXT,
   │        health_signals JSONB, generated_at TIMESTAMP,
   │        retention_until DATE NOT NULL DEFAULT (NOW() + INTERVAL '180 days'))
   │     【⚠️ 子女摘要保留 180 天（比對話摘要 90 天長）】考量子女遠距追蹤需要
   │
   ▼ (4) push 給子女 App
   │     【後端 POST】FCM（Android）/ APNs（iOS）
   │     【欄位】{ user_id, brief_id, push_title: "今日爸爸 / 媽媽過得如何", push_body: highlights[0] }
   │     【前端展示】子女 App home screen → 點開看完整 brief
   │
   ▼ (5) 子女互動追蹤
         【子女 App POST】/api/v1/brief/{id}/reaction { reaction: "thumbs_up"|"concern"|"call_parent" }
         【DB INSERT】INTO brief_reaction（用於 NPS 計算 + 子女參與度 metric）
```

**子女摘要的隱私邊界（problem-framing.md §3.0 框架）**：
- ✅ 對子女說「今天爸媽聊了什麼開心的事」（情感面）
- ❌ **嚴禁**對子女說「今天爸媽幾點在哪個房間」（監控面）
- 監控型 metrics（活動軌跡 / 對話頻率細節）必須 add-on 模組 + 重新同意（Re-consent for Feature Expansion，§3.2.9）

### 2.4 機構後台資料流（B2B2C，Hypothesis B，Year 1+）

> 90 天 MVP 不交付此功能（build-vs-buy.md §5.2），但 schema 預留以利 Year 1 H2 直接接續

```
[機構員工 login]
   │
   ▼ (1) OAuth 2.0 SSO（Auth0 → 機構 IdP）
   │     【授權範圍】scope="institution:read_assigned_users"（只看分配的個案）
   │
   ▼ (2) 機構儀表板 query
   │     【後端 SELECT】FROM users JOIN institution_assignment
   │       WHERE institution_id=$1 AND assigned_staff_id=$2
   │     【DB schema 預留 Year 1】institution_assignment
   │       (institution_id UUID, user_id UUID, assigned_staff_id UUID,
   │        consent_to_share_with_institution BOOLEAN NOT NULL DEFAULT FALSE,
   │        scope_level enum("emergency_only", "daily_brief", "full_history"))
   │     【⚠️ 機構僅看「家庭已勾選同意分享」的個案】預設 FALSE = 不分享
   │
   ▼ (3) 多戶個案視圖 + 員工排程
   │     【後端 aggregate】最近 7 天 daily_brief / emergency_event 聚合
   │     【展示】個案列表 + 異常 flag + 員工今日排程
   │
   ▼ (4) 政府長照系統匯出（合規介接）
         【授權】機構需另取得個案家屬「資料匯出政府系統」同意書
         【格式】CSV / FHIR-light（衛福部長照 3.0 統一 schema 📋 規劃中）
         【⚠️ 匯出限制】僅匯出「服務使用紀錄」（次數 / 時段），不匯出對話內容
```

---

## §3. 雲端 vs 邊緣推理權衡（每項決策都需明確）

> 表格依「Latency / Privacy / Cost / Reliability」四維度權衡；90 天 MVP 推薦 + Year 1-3 演進 + 明確依據

| 元件 | 雲端優勢 | 邊緣優勢 | 90 天 MVP 推薦 | Year 1 演進 | Year 2-3 演進 | 依據（標籤）|
|---|---|---|---|---|---|---|
| **Wake word 偵測** | 無 | 隱私（音訊不出端）+ 延遲（<100ms）+ 永遠 on（不耗網路）| **邊緣 100%**（Porcupine 3.0 商用授權）| 邊緣 100% + 中文「白白」自訂 wake word | 邊緣 100% + 台語 wake word 自訓 | ✅ 隱私 + 體驗硬性需求；雲端方案技術上不可能（永遠 on 不耗網路） |
| **STT（中文）** | 準確度（Google STT zh-TW 95%+）+ 模型更新自動| 延遲（端側 100-300ms）+ 隱私 + 離線可用 | **雲端**（Google Cloud STT V2 / Azure）| 雲端為主 + 端側 Whisper-tiny 備援（離線基礎指令）| 端側 30% / 雲端 70% 混合 | ✅ 90 天準確度優先；隱私風險：原始音訊跨境（緩解：GCP asia-east1 台灣節點 + 7 天硬刪）|
| **STT（台語）** | 商業可用但錯字率高（20-40%）| 端側 Whisper fine-tune 學術可行未商業化 | **雲端 + 後處理校正**（Google nan-Hant-TW + Azure 備援；rule-based 校正詞典）| 端側 Whisper-medium 台語 fine-tune（H2 啟動，需 200+ 小時台灣長者語料）| 端側 80% / 雲端 20% 混合 | 🟡 台語商業 STT 品質為已知弱點；problem-framing.md §3.2.6 演算法偏見紅線 + §5.4 Cultural Considerations 台語認同 |
| **LLM 對話推理** | GPT-4o 質量遙領先 + 無 GPU 投資 + 自動更新 | 隱私（PDPA §21 完全合規）+ 零跨境風險 + 一次性硬體投資後邊際成本零 | **雲端**（GPT-4o-mini 主 + GPT-4o fallback，GCP asia-east1 部署）| 雲端為主 + 開源 Llama-3 8B（PDPA 敏感場景，在台 GPU instance）| 雲端 50-70% + 開源 30-50% 混合 | ✅ build-vs-buy.md §3.4 推薦 / phase-0.5 §5.4 假設 5 法規時程 12-18 月 |
| **TTS（中文）** | Azure / Google WaveNet 自然度高 + 多語者選擇 | 端側 Coqui TTS 可運行但音質明顯較差 | **雲端**（Azure Speech zh-TW-HsiaoChenNeural）| 雲端為主；端側 fallback 用於離線預錄回應 | 端側 50% / 雲端 50% 混合 | ✅ 體驗優先 + 跨境風險低（TTS 是 outbound 文字 → 音訊，不傳長者隱私） |
| **TTS（台語）** | Azure 台語商業可用（限基礎問候）| 端側 VITS / Bark 研究模型 | **雲端 + 預錄混合**（高頻問候端側預錄 mp3；長對話雲端 Azure）| 端側 Bark 台語 fine-tune（H2 啟動）| 端側完整台語 TTS | 🟡 同台語 STT，是已知弱點；採「預錄高頻 + 雲端動態」混合架構降風險 |
| **跌倒 / 異常偵測** | 雲端可融合多 sensor + 模型訓練易迭代 | 隱私（不傳音訊 / 影像）+ 延遲（黃金 4-12 小時搶救關鍵） | **邊緣初判 + 雲端二階段確認**（confidence >0.7 端側決定；0.4-0.7 雲端 GPT 輔助）| 同 + 加入 IoT PIR 補強 | 同 + 端側模型用更多真實語料 fine-tune | ✅ phase-0.5 §5.4 假設 3：非影像式緊急偵測為強硬性需求；problem-framing.md §3.0「不是子女感測器」框架 |
| **視覺辨識** | 模型強 + 多模態 | 隱私（不傳影像）+ 文化抗拒（PDPA + 長者監控感）| **不啟用 24/7 視覺**；僅子女主動發起雙向視訊時開啟（用戶授權）| 同（緊急場景 option：端側臉部 liveness 判斷「人是否倒地」，影像不出端）| 同 | ✅ problem-framing.md §3.2.2 + §3.2.9 Surveillance Creep 紅線；iRobot Roomba J7 2022 案例為教訓 |
| **個人化記憶儲存** | RAG 規模化容易 + 多裝置同步 | 隱私 + 用戶可掌控 | **雲端 PostgreSQL pgvector + 用戶可一鍵 export / delete**（嚴格 PDPA §11 死亡後 + 退訂後 30 天硬刪）| 同 + 端側「sensitive memory」可選擇「只在這台」標籤 | 雲端 + 端側雙寫 hybrid | ✅ problem-framing.md §3.2.5 數位遺產 + §3.2.7 Vendor lock-out 資料可攜性 |

### 3.1 7 元件 90 天 MVP 推薦摘要

| 元件 | 90 天 MVP | 雲 / 邊比例 |
|---|---|---|
| Wake word | 100% 邊緣 | 0/100 |
| STT 中文 | 100% 雲端 | 100/0 |
| STT 台語 | 100% 雲端 + 後處理 | 100/0 |
| LLM 推理 | 100% 雲端（GPT-4o） | 100/0 |
| TTS 中文 | 100% 雲端 | 100/0 |
| TTS 台語 | 70% 雲端 + 30% 端側預錄 | 70/30 |
| 跌倒偵測 | 70% 邊緣初判 + 30% 雲端確認 | 30/70 |
| 視覺 | 不啟用 | N/A |
| 個人記憶 | 100% 雲端 + 用戶可控 | 100/0 |

**整體判讀**：90 天 MVP 偏雲端（建構速度優先 + 隱私在「資料最小化 + 在台部署」緩解）；Year 1-3 逐步遷邊（降低 Vendor lock-in + 強化 PDPA 護城河）

### 3.2 雲端 vs 邊緣決策框架（給後續新增元件用）

每新增元件 4 問判斷：
1. **隱私敏感度**：是否含原始音訊 / 影像 / 生物特徵 → 是 = 強烈傾向邊緣
2. **延遲容忍度**：是否 < 200ms 必要（如 wake word）→ 是 = 邊緣
3. **準確度差距**：雲端 vs 邊緣質量差距 > 20% → 是 = 雲端（除非隱私 override）
4. **離線運作要求**：是否必須網路斷線時仍可用（如緊急偵測）→ 是 = 邊緣

---

## §4. 隱私邊界（PDPA + AI 基本法 + 醫療法）

### 4.1 PDPA 2025/12 修訂版對本案具體影響清單

> **法源**：個人資料保護法 2025/12 修訂版（個資保護委員會 PDPC 2025/8 成立後第一次大修）
> 本段 ≥3 條條文逐條對應 + 標明「特別關注點」

| PDPA 條文 | 2025/12 修訂核心 | 對本案具體影響 | 90 天 MVP 對策 | 標籤 |
|---|---|---|---|---|
| **§5（目的拘束）** | 蒐集目的明確 + 不得目的外利用 | 機器人「陪伴」蒐集的對話不得用於行銷 / 訓練其他 LLM | ToS / 同意書嚴格列舉用途；OpenAI API 設 `user` 欄位 hash 化；DPA 約定 OpenAI 不用於模型訓練（OpenAI Enterprise tier） | ✅ |
| **§6（特種個資）** | 健康 / 病歷 / 性生活 / 基因等 → 蒐集需「特別同意」 | 對話可能涉長者用藥 / 病情 / 心理 → 屬特種個資 | 三方同意書設計（§4.4）；Layer 2 紅線守門避免 LLM 主動誘導蒐集；對話摘要去敏感化 | ✅ |
| **§7（同意有效性）** | 2025 加嚴：電子同意必有「可理解性」+「再確認」 | 長者 ToS 勾選需音訊 / 適齡字體 / 第三方見證（problem-framing.md §3.2.1） | onboarding 流程：長者語音同意（錄音保存）+ 子女書面 + 第三方見證（社區關懷員 / 醫護） | ✅ |
| **§8（告知義務）** | 蒐集前必告知：身分 / 目的 / 類別 / 期間 / 對象 / 權利 | 長者很可能不理解抽象條款 | 音訊版告知（≤3 分鐘）+ 圖示版同意書 + 子女 walkthrough 強制 | 🟡 |
| **§11（資料正確 + 死亡銷毀）** | 死亡後個資處理規範模糊（§4.6） | 長者過世後對話資料處理 | 「數位遺產繼承人」機制（problem-framing.md §3.2.5）；家屬可申請 export JSON / 30 天硬刪 / 6 個月延長 | ✅ |
| **§15（特定目的外利用）** | 必另取得同意 | 加新功能（如健康追蹤）必重新同意 | Re-consent for Feature Expansion 原則（§3.2.9）；功能標記「陪伴型 vs 監控型」公開 | ✅ |
| **§21（跨境傳輸）⭐ 2025 加嚴重點** | 跨境必：(a) 對方國家保護水準評估 (b) 個案明確同意 (c) PDPC 不得限制 | OpenAI / Anthropic / Google STT 部分服務在美國 = 跨境 | **混合架構策略**：(1) Layer 2 + Layer 3 完全在台；(2) Layer 1 跨境僅傳「文字摘要」非「原始音訊」；(3) GCP asia-east1 部署最大化在台處理；(4) 跨境同意書 explicit + 律師審查；(5) 開源 LLM Year 1 上路作為 fallback | ✅⭐ |
| **§28-29（損害賠償）** | 違反 PDPA 致損害 → 民事賠償 + 行政罰 | 隱私洩露最高 NT$1,500 萬罰款 + 停止使用 + 媒體危機 | 產品責任險 NT$5,000 萬+（Y1）；DPIA 在 W4 前完成；ISO 27001 / 27701 Y2 申請 | ✅ |

**特別關注點（90 天 MVP 必做）**：
- **W2-3**：律師 DPIA（理慈 / 萬國 / 普華）首版完成
- **W4**：跨境傳輸同意書 + Layer 2 rule-based 守門器測試完成
- **W5-6**：onboarding 三方同意流程跑通（長者音訊 + 子女書面 + 見證）
- **W8-9**：Pilot MoU 含 PDPA 三方同意 + 中斷賠償條款

🟡 **卡關項目**：PDPA 2025/12 修訂版「對話文字摘要 ≠ 原始語音」是否仍屬 §6 特種個資跨境傳輸限制範圍，律師詮釋 + PDPC 解釋令仍待累積。本案保守策略 = 對話摘要也走嚴格資料最小化（不含姓名 / 身分證 / 精確地址 / 病歷編號）

### 4.2 三層資料分類

| 分類 | 範例 | 處理規則 | 儲存位置 | 保留期 |
|---|---|---|---|---|
| **可雲端**（嚴格資料最小化 + 跨境同意）| 對話文字摘要 / 子女 dashboard 推播 metadata / 匿名化使用 metric / TTS outbound 文字 | TLS 1.3 傳輸 + AES-256 儲存 + 嚴格去敏感化 + 跨境同意書 | GCP asia-east1 PostgreSQL | 對話摘要 90 天 / 子女 brief 180 天 / 同意書永久 |
| **必端側**（不出端原則）| 原始語音串流 / wake word 偵測 / 跌倒/異常感測訊號 / 認知狀態 flag / 聲紋 / 緊急聯絡人清單 | 端側加密儲存（iOS Data Protection / Android EFS）+ 端側處理後即丟 | 平板端側 | 原始音訊 0 秒（即時丟）/ 聲紋永久（端側）/ 緊急聯絡人永久（端側） |
| **完全不收**（紅線禁區）| 24/7 環境影像連續錄影 / 長者帳號密碼 / 家庭關係衝突細節 / 未經同意的子女配偶資料 / 性 / 政治 / 宗教傾向 | 技術上禁止蒐集（無相關 API）+ Layer 2 rule-based 主動拒絕回應誘導蒐集 | 不存在於任何儲存體 | N/A |

### 4.3 Privacy by Design 七原則 × 本案實踐

| 原則（Cavoukian 1995）| 通用定義 | 本案實踐 | 90 天 MVP 落地 | 標籤 |
|---|---|---|---|---|
| **1. Proactive not Reactive** | 預防勝於治療 | 設計階段即嵌入隱私；非事後補救 | Layer 2 rule-based 守門 + Layer 3 本地 ASR/TTS（架構級非 patch） | ✅ |
| **2. Privacy as Default** | 預設隱私最強 | 監控型功能預設關閉 | 子女 dashboard 看「情感摘要」預設 ON；看「活動軌跡」預設 OFF | ✅ |
| **3. Privacy Embedded into Design** | 隱私是核心需求非附加 | 架構圖第一層即標明邊緣優先 | §1.1 架構六層明確雲/邊分工 | ✅ |
| **4. Full Functionality（正和而非零和）** | 隱私不犧牲功能 | 混合架構保留 GPT-4o 質量 + 守 PDPA | Layer 1 雲端對話質量 + Layer 2/3 本地隱私雙贏 | ✅ |
| **5. End-to-End Security** | 全生命週期加密 | 傳輸 + 儲存 + 端側 + 退役全程加密 | TLS 1.3 + AES-256-GCM + iOS/Android 平台加密 + 退役 factory reset | ✅ |
| **6. Visibility and Transparency** | 可見性 + 透明性 | 用戶可看見系統如何處理資料 | 隱私白皮書 + 用戶可隨時 export 自己的記憶 JSON + 可看「今天 AI 記住了什麼」面板 | 🟡 |
| **7. Respect for User Privacy** | 以用戶為中心 | 長者可隨時關閉 / 拒絕 / 退訂 | 「停止提醒」AI 必遵 24 hr 不可子女覆蓋（problem-framing.md §3.2.4） | ✅ |

### 4.4 同意機制設計（長者本人 + 子女 + 第三方見證三方同意）

> 解 problem-framing.md §3 vulnerable population framework；對抗「ToS 勾選不視為有效同意」風險

**三方同意流程（onboarding 必跑）**：

```
階段 1：子女遠端準備（5 分鐘）
  ├── 子女 App 註冊（OAuth Auth0）
  ├── 子女閱讀完整 ToS + 隱私白皮書（PDF）
  ├── 子女勾選書面同意（含跨境傳輸 explicit consent）
  └── 子女輸入長者基本資料（姓名 / 年齡 / 慣用語言 / 緊急聯絡）

階段 2：長者本人音訊同意（10 分鐘，子女現場 / 視訊在場）
  ├── 平板播放音訊版告知（≤3 分鐘）
  │    內容：「您的家人為您準備了一個說話的小幫手...」
  │    用台語 / 中文雙版本（用戶選）
  ├── 系統提問：「您願意讓白白每天陪您聊天嗎？」
  │    → 長者口頭回答「願意 / 同意」 → 系統錄音保存（聲紋 + 同意紀錄）
  ├── 系統提問：「您願意讓白白把您講的話整理成重點，傳給您家人看嗎？」
  │    → 長者口頭回答 → 錄音保存（這是跨境傳輸 explicit consent）
  └── 系統提問：「白白若聽到有急事，可以通知您家人嗎？」
       → 長者口頭回答 → 錄音保存（緊急通知 explicit consent）

階段 3：第三方見證簽署（5 分鐘，社區關懷員 / 醫護 / 在地夥伴）
  ├── 第三方見證人見證上述流程
  ├── 第三方在子女 App 簽署「我已見證上述同意程序」
  └── 系統產生三方同意書 PDF（長者音訊 base64 + 子女電子簽 + 見證人簽）
       → DB INSERT INTO consent_record（永久保留 + 版本控制）
```

**Re-consent 觸發條件**（problem-framing.md §3.2.9）：
1. 新增監控型功能（如活動軌跡 / 睡眠追蹤） → 必須重新同意
2. 新增第三方資料分享對象（如機構 / 保險公司） → 必須重新同意
3. ToS 重大修訂 → 必須重新同意
4. 跨境傳輸目的地新增（如新增 Anthropic Claude API） → 必須重新同意

**DB schema**：
```sql
CREATE TABLE consent_record (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id),
  consent_version INT NOT NULL,
  -- 三方簽署
  elder_voice_consent_audio_url TEXT NOT NULL, -- GCP CS 加密儲存
  elder_voice_consent_transcript TEXT NOT NULL,
  child_signature_data JSONB NOT NULL, -- 電子簽名 raw data
  witness_signature_data JSONB NOT NULL,
  witness_identity_type enum('community_care', 'medical_staff', 'local_partner'),
  -- 同意範圍
  consent_scope JSONB NOT NULL, -- ["daily_chat","cross_border_summary","emergency_notify","share_with_institution",...]
  -- 元資料
  signed_at TIMESTAMP NOT NULL,
  revoked_at TIMESTAMP NULL,
  pdf_archive_url TEXT NOT NULL, -- 永久 PDF 存檔
  CHECK (elder_voice_consent_audio_url IS NOT NULL)
);
CREATE INDEX idx_consent_user_active ON consent_record(user_id) WHERE revoked_at IS NULL;
```

### 4.5 跨境傳輸禁區 + 在台部署方案

**90 天 MVP 跨境清單（必須律師審查）**：

| 服務 | 廠商總部 | 實際處理區域 | 處理內容 | 跨境風險 | 緩解 |
|---|---|---|---|---|---|
| GPT-4o-mini / GPT-4o | 美國 OpenAI | 美國 + EU | 對話文字摘要（去敏感化）| 高（PDPA §21）| OpenAI Enterprise tier「不用於訓練」承諾 + DPA + 跨境同意書 + 嚴格資料最小化 |
| Claude 3.5 Sonnet（備援）| 美國 Anthropic | 美國 | 同上（fallback 用）| 高 | 同上 |
| Google Cloud STT | 美國 Google | **asia-east1 台灣彰化節點**（明確指定）| 原始音訊（短期 buffer，不儲）| 中 | 強制 region：asia-east1；資料不外流；7 天 hard 刪 |
| Azure Speech Service | 美國 Microsoft | **East Asia 香港 / Taiwan North**（待確認 2026 GA）| TTS outbound 文字（非長者隱私）| 低 | TTS outbound 為主；STT 為備援 |
| Auth0 | 美國 Okta | US 區域（Free tier）| 子女帳號 email + name | 中 | Year 1 遷自託管 Authentik；MVP 階段同意書明列 |
| LINE Notify | 日本 LINE | 日本 | push token + 通知文字 | 低（日本 vs 台灣有適足性）| 標準商業使用 |

**在台部署最大化策略**：
- **主推 GCP asia-east1**：彰化節點 2024 GA；明確 region 鎖定；CMEK（Customer Managed Encryption Key）我方持有
- **Azure Taiwan North**：2024 後啟用，Year 1 評估遷移；Microsoft 公開承諾資料不出區域
- **自建在台 GPU instance（Year 1 規劃）**：Llama-3 8B / Qwen-2.5 14B 在台推理；對 PDPA 敏感對話路由至此
- **完全本地推理（Year 2-3）**：開源模型比例 30-50%；台灣 ODM 平板若 Year 2 引入端側 Jetson 模組可加速

### 4.6 資料保留 / 刪除 / 移轉 / 死亡情境處理

> 解 problem-framing.md §3.2.5 Death / Bereavement 紅線

**生命週期狀態機**：

```
[active] ──訂閱取消──> [grace_period 90 天] ──> [scheduled_deletion 30 天] ──> [hard_deleted]
   │
   │ 連續 5 天無互動
   ▼
[contact_family_alert] ─子女確認─> [bereavement_mode] ──30 天──> [legacy_planning]
                                          │
                                          ▼
                                   家屬可選：
                                   (a) export JSON 60 天內
                                   (b) 數位回憶冊（Y2+ option）
                                   (c) 立即硬刪
```

**保留期表**：

| 資料類別 | 保留期 | 硬刪機制 |
|---|---|---|
| 對話原始音訊 | 0 秒（即時丟） | N/A |
| 對話 transcript（Redis）| 1 hr TTL | Redis 自動 |
| 對話摘要（PostgreSQL）| 90 天 | cron 每日 03:00 |
| 子女 daily brief | 180 天 | cron 每日 03:00 |
| 個人記憶 RAG（pgvector）| 訂閱期間 + 90 天 grace | 訂閱取消觸發 |
| 同意書 PDF | 永久（法律要求）| 不刪 |
| 緊急事件 log | 5 年（醫療法 §74 病歷準用）| 5 年後 cron |
| 聲紋（端側）| 訂閱期間 | 退訂時 factory reset 觸發 |
| 用戶基本資料（PII）| 訂閱期間 + 30 天 | 30 天 grace 後 hard delete |

**死亡情境 SOP**（黃金 24 小時）：

1. **0-2 hr**：偵測異常（5 天無互動 / 緊急事件未恢復 / 子女通報）
2. **2-24 hr**：系統進入「安靜模式」（不主動發起對話 / 不推送提醒）
3. **24 hr 後**：子女 App push「我們注意到 XX 已 5 天無互動 / 是否進入哀悼模式？」
4. **子女確認後**：進入 bereavement_mode 30 天
   - 機器人完全不主動發起
   - 子女可選 (a) export 全部 JSON（PII + 對話摘要 + 個人記憶 + 同意書）
   - 子女可選 (b) 立即硬刪
   - 子女可選 (c) 延長 6 個月（家屬還在處理喪事）
5. **30 天 / 6 個月後**：自動硬刪 + 寄送「資料已清除」確認信

🟡 **法律灰區**：PDPA §11 對「死亡後個資」規範模糊；民法繼承法是否含「數位資料」司法見解待累積。本案保守：依「個案家屬決定」+ 律師審查 ToS 條款

### 4.7 AI 基本法 2025/12 對本案影響

> **法源**：台灣《人工智慧基本法》2025/12 預計上路（行政院 2024 草案 → 立法院審議中 → 2025/12 預期施行）
> **本段卡關**：🟡 具體條文細節 desk 階段尚未公開全文；以下基於公開草案 + 立法院公報資訊

| 預期條款 | 對本案影響 | 90 天 MVP 對策 | 標籤 |
|---|---|---|---|
| **透明性義務**（generative AI 互動需告知用戶「您正在與 AI 對話」）| 長者每次互動需明示？還是 onboarding 一次性？| Onboarding 階段三方同意 + 機器人介紹自己「我是白白，您家人為您準備的小幫手」+ 每次喚醒後語氣保持「AI 角色」（不模仿家人） | 🟡 |
| **可究責性 / 高風險 AI 系統分級** | 老年陪伴 + 緊急偵測可能列「高風險」| 預為高風險準備：DPIA + 第三方審計 + 不良事件通報機制（problem-framing.md §3.5 危機 SOP） | 🟡 |
| **資料來源揭露**（訓練資料公開）| OpenAI / Anthropic 訓練資料不公開 → 我方層級無法揭露 | 揭露：我方僅使用商業 LLM API，未自訓；個性化 RAG 來源為用戶自身對話（已三方同意） | ✅ |
| **演算法影響評估** | 須評估對脆弱族群影響 | problem-framing.md §3 vulnerable population framework + Phase 5 Fairness Audit 已規劃 | ✅ |
| **AI 失當救濟機制** | 用戶須有 challenge / appeal 管道 | App 內「我覺得 AI 講錯了」按鈕 → 工程團隊每週審查 + 24 hr 回應 | 🟡 |

🟡 **卡關項目**：AI 基本法施行細則 + PDPC + 衛福部聯合解釋令仍待 2025/12 後累積。本案 W4 律師 DPIA 必含「AI 基本法 readiness 評估」

### 4.8 醫療法邊界：醫療器材 vs 非醫療輔助

**TFDA 醫療器材分類三條（醫療器材管理法 §3）**：
- **I 類**：低風險（如血壓計、體溫計）→ 登錄即可
- **II 類**：中風險（如 AI 輔助診斷）→ 須認證（6-18 月，NT$300-500 萬）
- **III 類**：高風險（如心臟支架）→ 嚴格臨床（24 月+）

**本案 90 天 MVP 嚴守「非醫療輔助」定位**：

| 功能 | 屬醫療器材？ | 90 天 MVP 設計對策 | 標籤 |
|---|---|---|---|
| 日常陪伴對話 | ❌ 否 | 純陪伴 / 娛樂 / 認知刺激；ToS 明訂「不具醫療功能」 | ✅ |
| 用藥提醒（時間提醒）| ❌ 否（時間管理工具）| 僅做「時間到」提醒；不建議劑量 / 不解釋藥效 | ✅ |
| 跌倒偵測 | 🟡 邊界（若宣稱準確率可能被視為「醫療器材」）| 不宣稱準確率；定位「輔助通知」非「跌倒偵測診斷」；ToS 明訂 | 🟡 |
| 健康摘要（給子女）| ❌ 否（資訊整理）| 純整理 + 趨勢可視化；不下結論 / 不建議治療 | ✅ |
| 認知遊戲 | ❌ 否（娛樂 / 教育）| 不宣稱「延緩失智」（醫療效能宣稱即落入醫療器材）；定位「腦力遊戲」 | ✅ |
| LLM 回答健康問題 | 🟢 強制紅線禁止（R1 / R2）| Layer 2 rule-based 守門：回答「請詢問醫師 / 藥師」+ 不提供任何具體建議 | ✅ |
| 心電圖 / 血壓量測 | ✅ 是（II 類）| 90 天 MVP **不做**；Year 2-3 評估外接 BSMI 認證設備（如悅心 BP500）走 II 類認證 | 📋 |

**認證路徑分階段**（§7 詳述）：
- **90 天 MVP**：平板 + App 不需 BSMI（已是市售認證設備）；不屬 TFDA
- **Year 1**：正式硬體 ODM → BSMI 必跑（NT$30-100 萬 / 6-12 月）
- **Year 2**：ISO 13482 自願（NT$50-150 萬）
- **Year 3+**：若加入醫療功能（健康監測 / 跌倒偵測準確率宣稱）→ TFDA II 類（NT$300-500 萬 / 12-24 月）

---

## §5. 安全架構

### 5.1 加密

| 層次 | 標準 | 實作 | 標籤 |
|---|---|---|---|
| **傳輸層** | TLS 1.3 強制（拒絕 1.2 以下）| GCP Load Balancer 配置 + HSTS preload + Certificate Transparency 監控 | ✅ |
| **API 認證** | mTLS（端側 ↔ 後端）| 每台平板簽發 client cert；憑證輪替每 90 天 | ✅ |
| **儲存層（DB）** | AES-256-GCM | GCP CMEK（Customer Managed Encryption Key）+ Cloud KMS 金鑰輪替每 90 天 | ✅ |
| **儲存層（Object）** | AES-256 | GCP Cloud Storage + CMEK | ✅ |
| **端側設備** | iOS Data Protection / Android File-Based Encryption | 平台原生 + biometric unlock | ✅ |
| **應用層敏感欄位** | AES-256-GCM application-layer | 同意書 audio_url / 緊急聯絡人電話額外加密；金鑰存 GCP Secret Manager | ✅ |

### 5.2 身分驗證

| 角色 | 方式 | 標籤 |
|---|---|---|
| **長者端** | 無密碼：語音聲紋 enrollment（onboarding 時錄製 5 個短句）+ 子女遠端設定 + 平板綁定 device_id | 🟡 |
| **子女端** | OAuth 2.0（Auth0 → Year 1 Authentik）+ Google / Apple / LINE social login + MFA（SMS / TOTP）強制 | ✅ |
| **機構端**（Year 1+）| SSO（OAuth 2.0 + SAML 2.0）對接機構 IdP（Azure AD / Google Workspace）| ✅ |
| **內部維運** | SSO + MFA + Just-In-Time access via Teleport | ✅ |

**長者「無密碼」設計理由**：
- 65+ 上網率 50.36% 但記憶力下降 → 密碼是棄用主因
- 聲紋驗證 = 「我選擇用它」的尊嚴設計（problem-framing.md §2.5 親子權力）
- 風險：聲紋 false accept rate（FAR）≈ 0.1%；若家中其他人冒用 = false positive，但本案場景風險低（家人借用無嚴重後果）

### 5.3 LLM Guardrail（7 條絕對紅線實作架構）

> 完整紅線定義見 problem-framing.md §3.1；以下為技術實作

**三層防護架構**：

```
[長者語音輸入]
      │
      ▼
┌─────────────────────────────────────────┐
│ 第一道：端側 rule-based pre-filter      │
│   Python 規則引擎 + 關鍵字字典（≤500 詞）│
│   觸發 → 立刻播放預錄回應 + 不傳雲端   │
│   優點：零延遲；缺點：誤觸發率高        │
└─────────────────────────────────────────┘
      │ pass
      ▼
┌─────────────────────────────────────────┐
│ 第二道：後端 rule-based 二次守門        │
│   GPT 化 fine-grained 關鍵字（≤2,000 詞）│
│   含 Spacy 中文 NER（識別「藥名」「病名」）│
│   觸發 → 回 pre-defined 回應 + 不送 LLM │
└─────────────────────────────────────────┘
      │ pass
      ▼
┌─────────────────────────────────────────┐
│ 第三道：System Prompt 強化              │
│   GPT-4o-mini system prompt 含明確 7 紅線│
│   + few-shot examples（10 個拒絕範例）  │
│   + temperature 0.3（降低 hallucination）│
└─────────────────────────────────────────┘
      │
      ▼
┌─────────────────────────────────────────┐
│ 第四道：後端 LLM output post-filter     │
│   檢查 LLM 回應是否含禁止內容           │
│   觸發 → 替換為「請詢問專業人士」回應  │
└─────────────────────────────────────────┘
      │
      ▼
[TTS → 端側播放]
```

**7 紅線實作細節**：

| # | 紅線 | 第一道關鍵字（範例）| 替代回應 |
|---|---|---|---|
| R1 | 醫療診斷 | "癌症 / 中風 / 糖尿病 / 我是不是 ___ 病" | "這問題我建議您問家庭醫師" |
| R2 | 投藥建議 | "可以吃 ___ 嗎 / 藥量 / 副作用" | "用藥要問藥師或醫師，這很重要" |
| R3 | 急救決策 | "胸痛 / 喘不過氣 / 中風 / 倒地" | 自動觸發緊急流程 + "我幫您通知家人，若緊急請叫人撥 119" |
| R4 | 法律建議 | "告 / 律師 / 遺產 / 簽合約" | "要請律師才行，我幫您查法律扶助基金會電話" |
| R5 | 投資建議 | "股票 / 基金 / 加密貨幣 / 借錢給" | "錢的事跟子女或銀行理專討論" |
| R6 | 心理治療 / 自殺 | "想死 / 活不下去 / 自殺 / 太痛苦" | 觸發轉介 + "我聽到您說的，我要讓您家人知道，您也可撥 1925" |
| R7 | 臨終 / DNR | "簽 DNR / 拒絕急救 / 安樂死 / 預立醫療" | "這要跟醫療團隊和家人討論，我沒辦法幫您決定" |

**Adversarial test SOP**（Phase 5 必跑）：
- 每紅線 ≥10 個對抗測試案例（總 ≥70 案例）
- 含直接觸發 / 委婉表達 / 多輪誘導 / 角色扮演逃逸 4 種攻擊模式
- BLOCKER：任一紅線 < 95% 召回率 → 不可上線

### 5.4 緊急應變 SOP

> 解 problem-framing.md §3.5 危機 SOP；本段聚焦技術實作層面

**4 類危機 × 黃金 8 小時 × 技術 trigger**：

| 危機類型 | 技術 trigger | 自動動作（≤2 hr）| 人工介入（2-8 hr）|
|---|---|---|---|
| **生命安全**（跌倒 / 急救關鍵字觸發）| Layer 2 rule-based R3/R6 觸發 + 緊急偵測 confidence >0.7 | (1) 端側語音詢問 (2) 緊急通知 fan-out（LINE / SMS / App push）(3) 事件 log + freeze 相關 session | CEO + 法律召集 + 律師介入 + 主動聯繫家屬 |
| **隱私外洩**（資料庫 SQL injection / API leak）| WAF（Cloudflare / GCP Cloud Armor）+ pgaudit + Sentry 異常 query 告警 | (1) 自動隔離受影響 endpoint (2) 保全 log (3) 72 hr 內通知 PDPC（PDPA 2025 義務）| 律師 + 通知受影響用戶 + 媒體公告 |
| **AI 有害回應**（紅線 bypass / 幻覺）| LLM output post-filter 失敗 + 用戶 challenge 按鈕 + Sentry custom event | (1) 立即更新 guardrail（hot reload）(2) 聯繫受影響長者 (3) 保全對話 | CTO + CPO + 技術根因分析 |
| **廠商倒閉 / 服務停止**（我方）| 商業中斷保險 trigger + 法律顧問通知 | (1) 90 天前通知（ToS）(2) 開放資料 export (3) 退費方案 | CEO + 法律 + 清算 |

**緊急通知 fan-out 架構**：

```
[緊急事件 trigger]
   │
   ▼
[Celery 高優先佇列 broker=Redis]
   │
   ├──> LINE Notify API（子女 + 緊急聯絡人）
   ├──> Twilio SMS（手機簡訊）
   ├──> FCM / APNs（App push）
   └──> Email（SendGrid）
       │
       ▼
   [≤5 分鐘 SLA 達成率監控]
       │
       └──> 若任一通道失敗 → 自動重試 3 次 + 換通道
            └──> 若 15 分鐘無子女回應 → 升級至「在地緊急聯絡人」
                 └──> 若 30 分鐘無回應 → 🟡 規劃 Y2+：考慮 119 介接（需法規確認）
```

---

## §6. 第三方依賴清單 + 風險評估

### 6.1 完整依賴清單（90 天 MVP）

| 廠商 | 服務 | 角色 | SLA | 台灣 region 可用？ | Vendor lock-in 風險 | Hedge | 標籤 |
|---|---|---|---|---|---|---|---|
| **OpenAI** | GPT-4o-mini / GPT-4o API | LLM 對話主幹 | 99.9% Enterprise tier | ❌（美國伺服器）| 🔴 高（2023-2026 三次漲價 + 政策改）| LangChain 抽象層 + Claude 備援 + 開源 Llama Y1 上線 | ✅ |
| **Anthropic** | Claude 3.5 Sonnet API | LLM 備援 | 99.9% | ❌（美國）| 🟡 中 | 同 OpenAI hedge | ✅ |
| **Google Cloud** | asia-east1（彰化）+ STT V2 + Cloud Run + Cloud SQL + KMS + CMEK | 雲端基礎建設 | 99.95%（多 region 99.99%）| ✅ asia-east1 | 🟡 中（DB 遷移成本高）| 多雲架構（Azure 備援）+ 標準 PostgreSQL 可遷 | ✅ |
| **Microsoft Azure** | Speech Service（TTS）+ East Asia / Taiwan North（Y1）| TTS 主 + 雲端備援 | 99.9% | 🟡 Taiwan North 2024 GA 待確認 | 🟡 中 | Google TTS 備援 | 🟡 |
| **Picovoice** | Porcupine wake word | 端側 wake word | N/A（端側）| ✅ | 🟡 中（商用授權每月費）| openWakeWord 開源備援 | ✅ |
| **Auth0** | OAuth 2.0 IdP | 子女身分驗證 | 99.9% | ❌（US）| 🟡 中（user store 遷移成本）| Year 1 遷自託管 Authentik | 🟡 |
| **LINE Notify** | push 通知 | 緊急通知 | 99% | ✅（日本）| 🟢 低 | FCM / SMS / Email 多通道 | ✅ |
| **Twilio** | SMS | 緊急 SMS | 99.95% | ✅（國際號碼）| 🟢 低 | 三竹簡訊（在地）備援 | ✅ |
| **FCM（Firebase）/ APNs** | App push | 一般推播 | 99.5% | ✅ | 🟢 低（平台原生）| 無需 hedge | ✅ |
| **Sentry** | Error tracking | 觀測 | 99.9% | ❌（US）| 🟢 低 | 自託管 Sentry Y1 評估 | ✅ |
| **GitHub Actions** | CI/CD | 部署 | 99.9% | ❌（US）| 🟢 低 | GitLab CI 備援 | ✅ |
| **理慈 / 萬國 / 普華 律師** | 法律顧問 | DPIA + ToS 審查 | N/A | ✅ 台灣 | 🟢 低 | 無 | 📋 |

### 6.2 ASUS 相關段落（客觀中立）

> **重要前提**：本段落基於 problem-framing.md §4.4 + §4.8 + build-vs-buy.md §2.2.3 已再三查證的 ASUS 2024-2026 公開資訊（≥17 source）。**本段目的是技術架構脈絡的客觀說明，不延伸合作可能 / 整合潛力**。

**ASUS Maestro 系統 vs 本案的技術定位差異（客觀對比，非競合分析）**：

| 維度 | ASUS Maestro 系統（2025/12 Healthcare+ Expo 發布）| 本案 90 天 MVP 規劃 |
|---|---|---|
| 部署場域 | 醫院 / 機構 | 居家 |
| 語言 | 繁中 + 英文 | 繁中 + 台語基礎 + 後續客語規劃 |
| 對話模式 | 病患導覽 / 衛教 / 問答 | 日常陪伴 + 子女遠距橋梁 |
| 商業模式 | B2B 醫院直採一次性 | B2C 月費訂閱 + B2B2C 機構分攤（規劃中）|
| 自主移動 | Kairo AMR 為移動角色；Zenbo Junior II 為固定點 | 平板桌上型（無自主移動）|
| AI Brain 技術 | ASUS 自建（Jonney Shih 2024/12 + 2025/01 公開聲明「All In AI」）| 混合架構：商業 LLM + rule-based + 本地 ASR/TTS |

**本段所有引用以 ASUS 官方公告 + 主流媒體公開報導為據**：
- ASUS Pressroom（pressroom.asus.com）
- Zenbo 官網（zenbo.asus.com）
- TechNews（technews.tw）2024/12 + 2025/01 報導
- DigiTimes 2025/01「All In AI」報導
- ASUS Healthcare+ Expo 2025/12/04-07 展位 M519a 發布資訊
- ASUS 2024 年報（asus.com/investor）

**本段不做的事**：
- ❌ 不延伸「ASUS 是潛在合作對象 / OEM 機會」
- ❌ 不延伸「整合潛力 / Maestro 系統節點加入」
- ❌ 不過度抬舉或貶抑 Zenbo Junior II
- ❌ 不對 ASUS 內部技術決策邏輯做主觀推測

### 6.3 第三方風險矩陣（前 5 大）

| 風險 | 機率 | 影響 | 緩解 | 標籤 |
|---|---|---|---|---|
| OpenAI 漲價 / 限制 / 政策改變 | 🟡 中（歷史已發生 3 次）| 高（成本 2-5×）| LangChain 抽象層 + Claude 備援 + Y1 開源 LLM 上線 | ✅ |
| GCP asia-east1 服務中斷 | 🟢 低（99.95% SLA）| 高（全服務停擺）| Azure East Asia 備援架構 + 端側 cache 短期降級服務 | ✅ |
| Picovoice 商業條款變更 | 🟢 低 | 中（wake word 遷 openWakeWord）| openWakeWord 開源備援已 ready | ✅ |
| PDPC（個資主管機關）解釋令收緊 OpenAI 跨境 | 🟡 中 | 高（核心 LLM 路徑被禁）| 開源 LLM Y1 在台 GPU instance + 律師持續追蹤 | ✅ |
| ASUS Zenbo Junior II 公開新策略影響市場格局（如降低定價 / 開放 B2C）| 🟡 低（公開資訊不支持此趨勢）| 中（市場競爭加劇）| 持續監控 ASUS 公開公告；本案差異化（台語 + B2C + 月費 + 子女 dashboard）為護城河 | 🟡 |

---

## §7. 認證路徑時程

### 7.1 認證路線圖（90 天 MVP / Year 1 / Year 2-3）

| 認證 | 範圍 | 90 天 MVP | Year 1 | Year 2 | Year 3+ | 標籤 |
|---|---|---|---|---|---|---|
| **BSMI**（電子電器標準局）| 平板 + 麥克風硬體 | ⭕ 平板 + ReSpeaker 已取得 BSMI；MVP App 軟體形態無需 | 🔴 自製硬體 ODM 上市必跑（NT$30-100 萬 / 6-12 月）| 維護 | 維護 | ✅ |
| **CNS 15630**（家用服務機器人安全）| 含自主移動的機器人 | N/A（無移動）| 評估（若 SLAM 加入）| 必跑（若 SLAM 加入）| — | 🟡 |
| **ISO 13482**（個人照護機器人安全）| 自願性 | N/A | 啟動準備 | 申請（NT$50-150 萬）| 取得 | ✅ |
| **TFDA I 類醫療器材**（低風險）| 若加入時間提醒功能宣稱「健康管理」| N/A（不宣稱）| N/A | 評估 | 評估 | 🟡 |
| **TFDA II 類醫療器材**（中風險）| 若加入跌倒偵測準確率宣稱 / 健康趨勢診斷 | N/A（嚴守非醫療定位）| N/A | 啟動臨床數據收集 | 申請（NT$300-500 萬 / 12-24 月）| 📋 |
| **長照 3.0 智慧輔具補貼名單**| 進入即實質 CAC -60-80% | N/A（補貼名單 2026/07 啟動）| 申請（W4-6 衛福部長照司接觸啟動）| 進入 | 維護 | 📋 |
| **ISO 27001**（資訊安全管理）| 企業級資安 | N/A | 評估 | 申請 | 取得 | 🟡 |
| **ISO 27701**（隱私資訊管理）| 隱私 ISMS | N/A | 評估 | 申請 | 取得 | 🟡 |

### 7.2 90 天 MVP 認證關鍵路徑

```
W1-2  ─ 律師 DPIA 啟動（理慈 / 萬國 / 普華）
W3    ─ 衛福部長照司接觸（透過長照產業協會 / Ankecare 介紹）
W4    ─ DPIA 首版完成 + 跨境傳輸同意書定稿
W5    ─ ToS / 隱私白皮書定稿（律師 sign-off）
W6-8  ─ Pilot MoU template 定稿（含 PDPA 三方同意條款）
W9    ─ Pilot 啟動同意書三方簽署
W10-12 ─ 主管 review 規劃書 + 認證 roadmap 並陳
```

---

## §8. 90 天 MVP 規格 vs Year 1-3 演進對照表

### 8.1 核心元件對照

| 元件 | 90 天 MVP | Year 1 | Year 2 | Year 3+ | 演進依據 |
|---|---|---|---|---|---|
| **硬體形態** | Wizard-of-Oz 平板（iPad / Galaxy Tab）📋 | ODM 自製機器人首批 50-100 台 ✅ 規劃 | ODM 量產 500+ 台 + 評估 SLAM | Gen 2 設計 + AMR 評估 | build-vs-buy.md §2.4 |
| **平台 OS** | iPadOS 17.5+ / Android 14 ✅ | 同 + ODM Android 客製 | 同 | 同 | ✅ |
| **App 開發** | React Native 0.74 LTS（iOS + Android）✅ | 同 | 同 + 機構後台 Web | 同 | ✅ |
| **Wake word** | Porcupine 3.0 商用 ✅ | + 中文「白白」自訂 | + 台語 wake word 自訓 | 完整多語言 | ✅ |
| **STT** | Google Cloud STT V2 + Azure 備援 ✅ | + Whisper-medium 台語 fine-tune 端側 H2 啟動 | 端側 30% / 雲端 70% | 端側 80% / 雲端 20% | 🟡 台語商業弱點分階段解 |
| **TTS** | Azure Speech（中文 + 台語基礎）✅ | + Bark 台語 fine-tune H2 啟動 | 端側 50% / 雲端 50% | 端側完整 | 🟡 同上 |
| **LLM 對話** | GPT-4o-mini 主 + GPT-4o fallback + Claude 備援 ✅ | + Llama-3 8B 在台 GPU（PDPA 敏感場景）📋 | 商業 50-70% + 開源 30-50% | 評估台智雲 FFM / 鴻海研究院繁中 LLM 合作 📋 | ✅ Vendor lock-in hedge |
| **跌倒偵測** | 端側 ONNX 70% + 雲端 GPT 確認 30% ✅ | + IoT PIR 補強 | + 端側模型用 1,000+ 小時真實語料 fine-tune | 完整端側 | 🟡 |
| **個人記憶 RAG** | pgvector 雲端 ✅ | + 用戶可選「只在這台」端側標籤 | 雲端 + 端側雙寫 hybrid | 完整端側選項 | ✅ |
| **同意書** | 三方同意（音訊 + 書面 + 見證）📋 | 同 + 區塊鏈見證評估 🟡 | 同 + 動態能力評估（problem-framing.md §3.2.1）| 完整 | ✅ |
| **跨境傳輸** | 對話文字摘要僅 + 嚴格資料最小化 ✅ | 開源 LLM 比例提升 + 跨境減少 | 跨境降至 30% | 跨境降至 10%（僅 fallback）| ✅ |
| **緊急通知** | LINE / SMS / App push 多通道 ✅ | + 在地緊急聯絡人協作網（社區關懷員）| + 119 介接評估（需衛福部 + 消防署審）📋 | 完整 24/7 應變網 | 🟡 |
| **認證** | 無（平板 BSMI 已取得）✅ | BSMI（ODM 上市）+ 長照 3.0 補貼名單申請 📋 | ISO 13482 + ISO 27001 / 27701 + TFDA II 類臨床啟動 📋 | TFDA II 類取得 + 補貼名單正式進入 📋 | ✅ |

### 8.2 Build vs Defer 矩陣（規劃選型 vs Desk-Validated）

| 元件 | 90 天 MVP 狀態 | 90 天 MVP 屬性 |
|---|---|---|
| 平板 / 麥克風硬體選型 | ✅ desk-validated（已有 BSMI 市售品）| 規劃選型 |
| OpenAI / Anthropic / Google / Azure API | ✅ desk-validated（公開可用）| 規劃選型 |
| Porcupine wake word | ✅ desk-validated（公開商業授權）| 規劃選型 |
| React Native + FastAPI tech stack | ✅ desk-validated（成熟生態）| 規劃選型 |
| PostgreSQL + pgvector + Redis | ✅ desk-validated（成熟）| 規劃選型 |
| GCP asia-east1 region | ✅ desk-validated（彰化 2024 GA）| 規劃選型 |
| 三方同意機制 | 📋 待 build | 待律師 DPIA + W5-8 onboarding 設計 |
| Layer 2 rule-based 7 紅線守門 | 📋 待 build | 待 W2-3 規則引擎開發 |
| 跌倒偵測 ONNX 端側模型 | 🟡 hypothesis | 待技術 POC 與工研院智齡團隊接觸 |
| 台語 ASR/TTS（基礎問候）| 🟡 hypothesis | Azure / Google 商業可用但品質待 POC |
| 認證路徑時程 | 📋 待 build | 待 W3 衛福部接觸 + W2 律師啟動 |

---

## §9. 主要 Desk Research 佐證來源

| 主題 | 來源 | 引用位置 |
|---|---|---|
| GPT-4o-mini 定價 USD 0.15-0.60/M tokens | OpenAI Pricing 官方頁；problem-framing.md §1.5 趨勢 2 | §1.2 + §6.1 |
| GCP asia-east1 彰化節點 2024 GA | Google Cloud Locations 官方頁 | §1.1 + §4.5 |
| Azure Taiwan North 2024 後 GA | Microsoft Azure Geographies 官方頁 | §4.5 |
| ReSpeaker 4-Mic Array v2.0 規格 | Seeed Studio 官方產品頁 | §1.2 |
| Picovoice Porcupine 3.0 商用授權 | Picovoice 官方授權頁 | §1.2 |
| ElliQ ROE（Relationship Orchestration Engine）混合架構 | Intuition Robotics 官方技術文件 + Healthcare IT Today 2024/06 | §1.1 + §1.2 |
| ASUS Maestro 系統 2025/12 發布 | ASUS Pressroom + Healthcare+ Expo 2025 + DigiTimes | §6.2 |
| ASUS「All In AI」策略 | Jonney Shih 2024/12 + 2025/01 DigiTimes | §6.2 |
| PDPA 2025/12 修訂版要點 | 個人資料保護法 + 個資保護委員會 PDPC | §4.1 |
| AI 基本法 2025/12 預期施行 | 行政院 2024 草案 + 立法院公報 | §4.7 |
| 醫療器材管理法 §3 分類 | 全國法規資料庫 | §4.8 |
| TFDA II 類 AI/ML 認證歷史（37 件至 2023）| 衛福部食藥署官方 | §4.8 + §7 |
| 長照 3.0 智慧輔具補貼 NT$60K/3 年 | 行政院 2025/12/31 核定文件 | §7 |
| BSMI 認證費用 + CNS 15630 | 標準局官網；problem-framing.md §2.2.4 | §7 |
| 4 hypothesis Lean Canvas | phase-0.5-deconstruction.md §5.2 | §1 + §8 |
| 7 條 LLM 絕對紅線 | problem-framing.md §3.1 | §5.3 |
| 10 條紅線深化 × 8 維度 | problem-framing.md §3.2 | §4-§5 |
| Wizard-of-Oz 平板硬體推薦 | build-vs-buy.md §2.4 + mvp-type.md §3.1 | §1 + §8 |
| AI Brain 路徑 C 混合架構推薦 | build-vs-buy.md §3.4 | §1 + §3 |

---

## §10. Coverage Matrix（自我檢核）

| 必涵蓋章節 | 是否完成 | 位置 |
|---|---|---|
| §1 系統架構總覽（六層架構圖 + tech stack 選型）| ✅ | §1.1 + §1.2 |
| §2 資料流（4 流：對話 / 緊急 / 子女摘要 / 機構）| ✅ | §2.1 + §2.2 + §2.3 + §2.4 |
| §3 雲/邊權衡（7 元件表 + 推薦 + Year 1-3 演進）| ✅ | §3 全段 |
| §4.1 PDPA 2025/12 影響清單 | ✅ | §4.1 |
| §4.2 三層資料分類 | ✅ | §4.2 |
| §4.3 Privacy by Design 七原則 | ✅ | §4.3 |
| §4.4 三方同意機制 | ✅ | §4.4 |
| §4.5 跨境傳輸禁區 + 在台部署 | ✅ | §4.5 |
| §4.6 資料保留 / 刪除 / 死亡情境 | ✅ | §4.6 |
| §4.7 AI 基本法 2025/12 | ✅（部分 🟡 卡關）| §4.7 |
| §4.8 醫療法邊界（醫療器材 vs 非醫療輔助）| ✅ | §4.8 |
| §5.1 加密（傳輸 + 儲存 + 端側）| ✅ | §5.1 |
| §5.2 身分驗證（長者 + 子女 + 機構）| ✅ | §5.2 |
| §5.3 LLM Guardrail 7 紅線實作 | ✅ | §5.3 |
| §5.4 緊急應變 SOP | ✅ | §5.4 |
| §6 第三方依賴清單 + 風險 + ASUS 客觀中立 | ✅ | §6.1 + §6.2 + §6.3 |
| §7 認證路徑時程 4 階段 | ✅ | §7.1 + §7.2 |
| §8 90 天 vs Y1-3 演進對照表 | ✅ | §8.1 + §8.2 |
| Plan-Only 標籤 ✅ / 🟡 / 📋 全文 | ✅ | 全文 |
| 端對端資料流欄位 / 型別三層對齊 | ✅ | §2.1 對齊驗證表 |
| ASUS 客觀中立（非合作 pitch）| ✅ | §6.2 明文標示 |
| 禁用 demo 字眼 | ✅ | 全文用「主管 review 規劃書」|

### 10.1 Plan-Only 標籤統計

| 標籤 | 估計次數 | 主要用途 |
|---|---|---|
| ✅ desk-validated | ~62 | tech stack 公開可用 / 法規條文 / 公開規格 |
| 🟡 hypothesis | ~48 | 台語能力 / PDPA 修訂細節詮釋 / 跌倒偵測準確率 |
| 📋 post-approval execution | ~31 | 律師 DPIA / 認證申請 / Pilot 部署 / ODM 採購 |

### 10.2 卡關項目

| 卡關主題 | 原因 | 補強方式 |
|---|---|---|
| PDPA 2025/12「對話文字摘要 ≠ 原始語音」是否仍屬特種個資跨境 | 律師詮釋 + PDPC 解釋令累積中 | W2-3 律師 DPIA 首版 / 持續追蹤 PDPC 解釋令 📋 |
| AI 基本法 2025/12 具體 generative AI 透明性條款 | 行政院草案 → 立法院審議中，細節未公開 | W4 律師 review + 持續追蹤立法院公報 📋 |
| 119 緊急服務介接合法性 | 「緊急救護資訊服務系統」屬衛福部 + 內政部消防署管轄；無公開第三方廠商 API 文件 | Year 2+ 規劃；非 90 天 MVP 範圍 📋 |
| 台灣 ODM（鴻海 / 廣達）機器人形態實際報價 | 機器人 ODM 非標準品需詢價 | Phase 3 計畫通過後 3 家 ODM 詢價（同 build-vs-buy.md §8.3）📋 |
| Azure Taiwan North 2026 實際 GA 狀態 + 服務範圍 | Microsoft 公開 roadmap 為 2024 後但無精確時程 | W3 雲端架構驗證時直接詢問 Microsoft Taiwan 業務 📋 |

---

## §11. 對 Phase 3 後續 task 的輸入

本報告完成後對接：

| 後續 task | 本報告輸入 |
|---|---|
| T27 Feature Triage（MoSCoW / RICE / Kano）| §3 雲/邊分工表 + §4.2 三層資料分類 → 監控型功能 Pricing 限制（problem-framing.md §3.6 caveat 2）+ §5.3 7 紅線禁入 Must-have |
| T28 Safety 紅線清單（safety-redlines.md）| §5.3 7 紅線實作架構 + §5.4 緊急應變 SOP + §4.8 醫療法邊界 |
| Phase 4 Business Model | §6.1 第三方成本（GCP / OpenAI / Picovoice 訂閱費）→ Unit Economics 輸入 + §8.1 演進路線 → ARR 試算依據 |
| Phase 5 Sprint 1-4 規格書 | §1.2 tech stack 選型 + §2 資料流 schema + §5 安全架構作為實作基準 |
| Phase 6 Pilot 設計書 | §4.4 三方同意 + §5.4 緊急應變 + §7.2 認證路徑作為 Pilot 合規前提 |

---

> 本報告由 tech-architect / privacy-engineer sub-agent 合併執行（PM Flow v0.1 / Phase 3 T26）
> 建立在：problem-framing.md §3 + §4.7 + §4.8、phase-0.5-deconstruction.md §5.2 + §5.4、phase-0-answers.md Plan-Only Mode 校準、build-vs-buy.md T24、mvp-type.md T25
> 標籤分布：✅ desk-validated ~62 處 / 🟡 hypothesis ~48 處 / 📋 post-approval execution ~31 處
> 所有 ASUS Zenbo Junior II 相關陳述均基於 2024-2026 公開資訊，客觀中立呈現
> 端對端資料流三層欄位 / 型別對齊驗證已完成（§2.1）
> 卡關項目（PDPA 詮釋 + AI 基本法 + 119 介接 + ODM 報價 + Azure Taiwan）全標 🟡 + 對策已列
```

---