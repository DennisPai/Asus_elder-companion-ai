# Sprint 3 Spec（W9-W10，第 5-6 週）— 核心對話 + 緊急偵測 + 子女 app
## 長者互動陪伴機器人 × AI Brain — Phase 5 T37

> **執行日期**：2026-05-27
> **執行模式**：PM Flow v0.1 / Phase 5 T37 Sprint 3 規格書
> **Plan-Only Mode**：本文件是「Sprint 3 規格書 + 技術選型 + 拆解 + 風險清單」，**不執行真實 build**；所有實作項目標 📋 post-approval execution。**禁稱已完成 / 已部署 / 已上線 / 已驗證**。
> **報告對象**：華碩（ASUS）AI 代理人 / 服務型機器人主管 1 位（客觀中立，不延伸合作 / 推銷）
> **建立在**：
> - build-vs-buy.md（T24，硬體 WoZ 平板 + AI Brain 混合架構推薦）
> - mvp-type.md（T25，Wizard of Oz 主軸）
> - tech-architecture.md（T26，六層架構 + AI Brain Layer 1/2/3 + PDPA 邊界）
> - feature-triage.md（T27，22 feature × MoSCoW × Kano；SHOULD 7 = Sprint 3-4 範圍）
> - safety-redlines.md（T28，10 + 6 + 3 紅線 + 5 SOP）
> - lean-canvas.md（T30，Hyp A 主軸 9 Block + Hyp D 入口 + Hyp B Hedge）
> - pricing.md（T32，Tier 2 Pro NT$1,290/月 主力，7 個 SHOULD feature 為 Pro Tier 升級誘因）
> - decision-w6.md（T35，W4 主軸全 STRENGTHEN，Phase 5 輸入確認）
> **禁用字眼**：demo（改稱「主管 review 規劃書」）；**禁稱「Mode E」，本案是 PM Flow v0.1**

---

## 0. Executive Summary

Sprint 3 是 90 天 MVP Phase 5 Prototype Build 的第 3 個 2 週 Sprint（W9-W10，總計畫第 5-6 週），定位「在 Sprint 1-2 核心互動層 + onboarding + 紅線守門基礎上，新增 Pro Tier 的三大主力價值模組」：

1. **核心對話進階模組**（5 feature）：個人化記憶 RAG / 台語對話 / 節日文化 / AI persona 個性化 / Operator 角色轉變
2. **緊急偵測模組**（4 feature）：wake word + keyword 偵測 / 異常互動偵測 / 緊急按鈕 / 緊急通知 fan-out + 誤觸發處理
3. **子女 App 全功能模組**（5 feature）：每日 / 每週 AI 摘要 / 雙向視訊 / 緊急通知多通道 / 健康趨勢圖 / 多帳號

**Sprint 3 三句話定義**：
1. **Sprint 1-2 完成核心互動 + 安全網**（F01 + F02 + F09 + F10 + F11 + F13 + F20 + F21 + F22 共 8 Must-have），Sprint 3 在此基礎上開啟 Pro Tier 的「7 個 SHOULD feature」即 F03 台語 + F04 個人記憶 + F05 節日 + F08 異常偵測（深化版）+ F12 摘要推播 + F14 雙向視訊 + Operator 半自動。
2. **Operator 角色轉變**：Sprint 1-2 是「全人補位」（WoZ 後台真人即時介入），Sprint 3 起轉為「AI 主、人補位 + 標註訓練資料」（半自動），同時開啟未來 Sprint 4+ fine-tune 的標註資料積累。
3. **Pro Tier 升級動機完整化**：Tier 2 Pro NT$1,290/月 的 7 個差異化功能在 Sprint 3 結束時全數可運作（pricing.md §4.2 升級誘因），W9 末內部 beta 5 戶開跑準備 PMF 量測。

**Sprint 3 三項核心 Caveat**：
- **跌倒偵測準確率不可宣稱**（safety-redlines.md §1.3 Plan-Only 紅線 P1 + tech-architecture.md §4.8 醫療法邊界）；本 spec 寫到的「召回率 ≥80% / false positive ≤1/週」為 **🟡 hypothesis 目標**，Sprint 3 是設計階段，不可宣稱已驗證。
- **119 直接介接不在 Sprint 3 範圍**（衛福部 + 內政部消防署雙重審核 + 緊急救護資訊服務系統管轄，tech-architecture.md §2.2 + safety-redlines.md §5.5）；Sprint 3 僅做「機器人語音引導長者讓旁人撥 119」+ 緊急聯絡人多層備援。
- **個人化記憶 RAG 跨境傳輸風險**（PDPA §6 + §21）；Sprint 3 採「pgvector 在 GCP asia-east1 台灣節點 + AES-256-GCM CMEK + 用戶可一鍵 export/delete」三層緩解（tech-architecture.md §3 + §4.5）。

---

## §1. Sprint 3 目標 + 範圍

### §1.1 Sprint 3 目標（What）

Sprint 3 在 Sprint 1-2 既有基礎上，完成以下「三大模組 + Operator 角色轉變 + 內部 beta 啟動」共 4 件事：

| 目標 # | 內容 | 對映 feature-triage.md | 完成定義 |
|---|---|---|---|
| **目標 1** | 核心對話進階模組（個人化記憶 RAG + 台語 + 節日 + AI persona） | F03 + F04 + F05 + 新增「AI persona 個性化 tone」 | Pro Tier 對話差異化達到 lean-canvas.md §1 Block 3 UVP「台語對話 + 個性化記憶」可呈現狀態 |
| **目標 2** | 緊急偵測模組（wake word + keyword + 異常互動 + 緊急按鈕 + fan-out + 誤觸發處理） | F08（深化）+ F09（從 Sprint 2 接續）+ F10（多通道強化） | safety-redlines.md §5.1 跌倒偵測 SOP + §5.5 多層備援 全 3 層通知鏈完成 |
| **目標 3** | 子女 App 全功能（摘要 / 視訊 / 通知 / 趨勢 / 多帳號） | F12 + F14 + F15（基礎版） + Tier 2 多子女帳號 | tech-architecture.md §2.3 子女摘要資料流 + §5.4 緊急 fan-out 架構完成 |
| **目標 4** | Operator 角色轉變 + AI 標註訓練資料積累 | 新增「半自動 Operator workflow」 | Sprint 1-2 全人補位 → Sprint 3 AI 主、人補位 + 標註資料庫啟動 |

**Sprint 3 結束時的狀態（W9 末）**：Pro Tier 7 個 SHOULD feature 全 working（規劃完成 📋），內部 beta 5 戶（家庭 + Operator 後台同步運行）準備就緒。

### §1.2 Sprint 3 範圍（In Scope / Out of Scope）

**In Scope（Sprint 3 W9-W10 涵蓋）**：

| 範疇 | 涵蓋項目 |
|---|---|
| **Feature** | F03 / F04 / F05 / F08（深化）/ F12 / F14 + Operator 半自動 + AI persona 個性化 |
| **後端** | pgvector RAG（個人記憶）/ Whisper or 雅婷台語 ASR pipeline / 節氣 + 農民曆 API 整合 / Celery 摘要 task / WebRTC signaling server / 緊急 fan-out 多通道 |
| **前端（長者端）** | AI persona tone 設定載入 / 節日話題 trigger / 緊急按鈕 UI（與 Sprint 2 銜接）/ 雙向視訊 incoming UI |
| **前端（子女 App）** | 每日 / 每週摘要頁 / WebRTC 視訊發起 / 健康趨勢圖（基礎版）/ 多帳號管理（≤3 子女） |
| **Operator 後台** | 半自動 workflow（AI 主、人補位 + 一鍵介入按鈕）/ 標註介面（Label Studio 或自建）/ 紅線觸發審查 |
| **資料庫 schema** | user_memory（pgvector）/ emergency_event（深化）/ daily_brief / multi_account / labeling_dataset |
| **法規 / 合規** | RAG 個人記憶 PDPA 加密設計 / 多帳號授權書 / 緊急通知 SLA 監控 / 標註資料去識別化 + 同意機制（ToS 更新） |

**Out of Scope（Sprint 4 或 Year 1 後續）**：

| 範疇 | 推後原因 |
|---|---|
| **機構儀表板**（F18） | Hypothesis B Year 1 H2 交付（feature-triage.md §7 Won't；tech-architecture.md §1.1 Layer 5）|
| **長照系統資料匯出**（F19） | Hypothesis B Year 1 H2 交付 |
| **多裝置同步**（多平板 / 父母兩台機器人雙寫） | Sprint 4+ 或 Year 1 Q3（pricing.md §6.2 Year 2 規劃）|
| **完整台語 LLM 對話**（非問候類，多輪複雜對話） | Year 1 H2（Whisper fine-tune 200+ 小時台灣長者語料累積後，build-vs-buy.md §3.4 Year 1 H2 啟動）|
| **客語對話** | Year 2-3（tech-architecture.md §8.1）|
| **119 自動介接** | Year 2+（safety-redlines.md §5.5 + tech-architecture.md §2.2）|
| **健康趨勢「進階」分析**（與健保 / 家醫科系統介接） | Tier 3 Premium 差異化（pricing.md §4.3），Sprint 3 只做基礎趨勢圖 |
| **TFDA II 類認證所需的跌倒準確率驗證** | Year 2-3（tech-architecture.md §7.1 + cert-timeline.md 引用）|
| **Sprint 4 閉迴路測試** | Sprint 4 範圍（10 家庭 + 1-2 機構，§9 銜接）|

### §1.3 與 Sprint 1-2 銜接

Sprint 3 必須建立在以下 Sprint 1-2 已規劃完成的能力之上（**📋 Sprint 1-2 為平行 task T36，本 spec 假設其 deliverable 如下**）：

| Sprint 1-2 deliverable | Sprint 3 依賴 |
|---|---|
| F02 中文語音對話（GPT-4o-mini API + Google STT + Azure TTS）| Sprint 3 在此 LLM pipeline 上加 RAG context injection + persona tone system prompt |
| F01 每日主動問候（06:30 / 18:00 fixed schedule）| Sprint 3 加節氣 / 節日話題 trigger + 個性化記憶引用 |
| F20 / F21 / F22（無障礙 / 控制 / 隱私）| Sprint 3 沿用，不重做；F22 加 RAG 個人記憶導出格式 |
| F13 子女遠端 onboarding（≤10 分鐘）| Sprint 3 加多帳號邀請流程（主帳號 → 邀請 2 個次帳號） |
| F09 緊急按鈕快速呼叫 + F10 緊急通知（≤5 分鐘 SLA） | Sprint 3 接續，加 wake word + keyword 偵測 + 異常互動偵測 + 多層備援 |
| F11 服藥提醒（朋友語氣，Adversarial Test 通過）| Sprint 3 沿用語氣設計，不重做 |
| Layer 2 rule-based 7 紅線守門器 | Sprint 3 在每個新功能（RAG / 摘要 / 視訊發起）前後保持紅線守門器仍正常運作 |
| 三方同意機制（長者音訊 + 子女書面 + 見證） | Sprint 3 加「Re-consent for Feature Expansion」（safety-redlines.md §2.12）：多子女帳號 / RAG 記憶儲存 / 視訊功能均需 Re-consent |
| WoZ 後台全人補位 SOP | Sprint 3 轉「半自動 + 標註訓練資料」 workflow |

---

## §2. 核心對話模組（Build on Sprint 1-2）

### §2.1 個人化記憶 RAG（F04）

**目標**：30-90 天對話歷史 → vector store → LLM context injection，讓 AI 記住長者偏好 / 家庭脈絡 / 重要事件，下次對話主動引用。

#### 2.1.1 技術選型

| 元件 | 推薦選型 | 替代方案 | 理由 | 標籤 |
|---|---|---|---|---|
| Vector DB | **pgvector 0.7（PostgreSQL extension）** | Pinecone / Qdrant | 與既有 PostgreSQL 15 整合，無新基礎設施；GCP Cloud SQL 原生支援；tech-architecture.md §1.2 已確認 | ✅ |
| Embedding model | **OpenAI text-embedding-3-small**（1536 dim） | text-embedding-3-large / 開源 BGE-M3 | small 版每 1M token NT$0.6，中文 / 台語表現可接受；large 版成本 6.5× 但 Sprint 3 不需 | ✅ |
| RAG framework | **LangChain 0.3 + LangGraph 0.2** | LlamaIndex | tech-architecture.md §1.2 已選定；LLM 抽象層便於後續 Vendor 切換 | ✅ |
| Retrieval strategy | **top-K=5 + recency decay + semantic similarity** | hybrid（BM25 + vector） | top-K=5 平衡 context 長度與召回；recency decay（30 天內 weight ×1.5）反映長者「最近發生的事比較重要」 | 🟡 |
| Memory consolidation | **每週 Celery batch task：30 天內對話 → 摘要 + 主題 extraction** | 即時 consolidation | batch 模式降低 LLM cost；長者對話頻率 30 次/天 × 7 = 210 次/週，batch 處理 100K token 約 NT$2/週/用戶 | 🟡 |

#### 2.1.2 資料 schema 設計

```sql
-- 既有 conversation_summary（Sprint 1-2 已建）保留 90 天對話摘要
-- Sprint 3 新增：user_memory（個人記憶長期持久化）
CREATE TABLE user_memory (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  memory_type enum('preference', 'family_member', 'past_event', 'health_signal', 'taboo_topic') NOT NULL,
  content TEXT NOT NULL CHECK (length(content) < 500),  -- 單條記憶 ≤500 字
  embedding vector(1536) NOT NULL,  -- pgvector
  importance_score DECIMAL(3,2) NOT NULL DEFAULT 0.5,  -- 0.0-1.0；taboo_topic 自動 1.0
  source_conversation_ids UUID[] NOT NULL,  -- 來源對話 trace
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  last_referenced_at TIMESTAMP NULL,
  reference_count INT NOT NULL DEFAULT 0,
  user_confirmed BOOLEAN NOT NULL DEFAULT FALSE,  -- 長者是否確認此記憶（onboarding 後可選 review）
  retention_until DATE NOT NULL DEFAULT (NOW() + INTERVAL '730 days')  -- Tier 2 Pro 預設 2 年；退訂後 30 天 grace
);

-- pgvector IVFFLAT index（regulr 用 HNSW 但 IVFFLAT 在 <100K rows 較簡單）
CREATE INDEX idx_user_memory_embedding ON user_memory
  USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);
CREATE INDEX idx_user_memory_user_type ON user_memory(user_id, memory_type);
CREATE INDEX idx_user_memory_retention ON user_memory(retention_until) WHERE retention_until < CURRENT_DATE + INTERVAL '30 days';

-- 「禁忌話題」index（safety-redlines.md §6.5）：長者說「不要再提這個」→ 寫入 taboo_topic
-- AI 每次對話前 query：taboo_topic + 對話內容相似度 > 0.7 → 強制換話題
```

#### 2.1.3 對話流程 RAG integration（端對端資料流）

```
[長者語音輸入] "白白，我兒子上次說要回來看我，是這個月嗎？"
   │
   ▼ (1) Sprint 1-2 既有 pipeline：wake word → 端側 rule-based pre-filter → STT
   │
   ▼ (2) Sprint 3 新增：RAG retrieval（embedding query）
   │     【後端】query_embedding = embed("兒子上次說要回來看我")
   │     【SELECT】FROM user_memory
   │              WHERE user_id=$1
   │                AND memory_type IN ('family_member', 'past_event')
   │                AND retention_until > CURRENT_DATE
   │              ORDER BY (embedding <=> query_embedding) + recency_decay
   │              LIMIT 5
   │     【return】top-5 memory chunks，例如：
   │       - "兒子志明，台北工作 IT 業，每月最後一週六回家"（importance 0.9）
   │       - "上週對話：志明說 5/31 回來，帶孫子小明"（importance 0.7）
   │
   ▼ (3) Sprint 3 新增：taboo_topic check
   │     【SELECT】WHERE memory_type='taboo_topic' AND embedding <=> query_embedding < 0.3
   │     【若有 match】→ 強制換話題，return "我們聊點別的吧"
   │
   ▼ (4) Sprint 3 修改：system prompt 組裝（加 RAG context + persona tone）
   │     system_prompt = base_prompt
   │                   + "【您記得的長輩資訊】" + top-5 memory chunks
   │                   + "【說話風格】" + persona_tone_template（§2.4 詳述）
   │                   + 7 紅線守門指示（Sprint 1-2 既有）
   │
   ▼ (5) Sprint 1-2 既有：GPT-4o-mini 推理 + TTS → 端側播放
   │     【預期 AI 回答】"志明說 5/31 禮拜六回來，會帶小明來看您喔"
   │
   ▼ (6) Sprint 3 新增：對話結束後 memory extraction（Celery async task）
         【LLM extract】GPT-4o-mini 從對話中抽取「值得長期記憶的事項」
         【判斷】若 importance_score ≥ 0.6 → INSERT INTO user_memory
         【去重】先 query 既有 memory，相似度 > 0.85 → UPDATE last_referenced_at 而非新增
```

**端對端欄位 / 型別三層對齊驗證**：

| 階段 | 欄位 | 型別 | 一致？ |
|---|---|---|---|
| 端側 → 後端 | session_id | UUID v4 string | ✅ |
| 後端 → pgvector | query_embedding | vector(1536) | ✅ |
| pgvector → 後端 | memory_chunks | jsonb array of `{content: text, importance: decimal(3,2)}` | ✅ |
| 後端 → OpenAI | system_prompt | string UTF-8 | ✅ |
| 後端 → PostgreSQL（INSERT 新記憶）| user_memory schema | 同 §2.1.2 | ✅ |

🟡 上述 schema 為 Sprint 3 規劃版本，實際 build 時須跑端對端 curl + DB query 確認。

#### 2.1.4 PDPA 合規設計

| PDPA 條文 | RAG 對應風險 | Sprint 3 對策 | 標籤 |
|---|---|---|---|
| §6 特種個資 | RAG 可能儲存健康狀況 / 用藥習慣 / 家庭衝突細節 | memory_type='health_signal' 額外加密 + 預設不過跨境傳輸（僅限 Layer 2 本地 rule-based 使用）| ✅ |
| §11 資料正確 + 死亡銷毀 | 個人記憶積累後死亡情境處理 | safety-redlines.md §5.3 死亡 SOP：bereavement_mode 30 天可申請 export JSON / 立即硬刪 / 延長 6 個月 | ✅ |
| §15 特定目的外利用 | RAG 不得用於模型訓練 | OpenAI Enterprise tier DPA 約定「不用於訓練」+ embedding 不外傳第三方 | ✅ |
| §21 跨境傳輸 | embedding 送 OpenAI 時相當於跨境傳輸對話內容 | GCP asia-east1 部署 embedding API（OpenAI 區域路由）+ 嚴格資料最小化（embedding 前 strip 姓名 / 身分證 / 精確地址）| 🟡 |
| §11（用戶可攜權） | 用戶申請 export 時 RAG 資料如何呈現 | F22 沿用 + 新增 JSON export 含 user_memory 全部（去 embedding 留 content + importance + 來源 trace）| ✅ |

#### 2.1.5 Sprint 3 RAG 驗收標準

- 個人記憶 RAG 召回正確率 ≥75%（top-5 中至少 1 條與 query 主題相關）🟡 hypothesis，待 Sprint 4 內部 beta 5 戶量測
- memory consolidation Celery task 每週執行 ≤2 分鐘 / 用戶（100K token consolidation）🟡
- pgvector query 延遲 ≤200ms（IVFFLAT index + lists=100，<10K rows / user）🟡
- taboo_topic 觸發率 100%（長者說「不要再提」→ 寫入後下次對話 query 必觸發）

### §2.2 台語對話進階（F03）

**目標**：從 Sprint 1-2 的「台語基礎問候 ≥20 句」進階到「台語完整對話識別 + 雙語混雜（國台混用）對話支援」。

#### 2.2.1 技術選型評估

| 選項 | 優勢 | 劣勢 | Sprint 3 推薦 | 標籤 |
|---|---|---|---|---|
| **Google Cloud STT V2（nan-Hant-TW）** | 商業可用、無需 fine-tune、台灣節點 asia-east1 | 錯字率 20-40%（tech-architecture.md §3.2.1）；對台南腔 / 嘉義腔識別差 | **MVP 主選擇**：作為 Sprint 3 基線 + 後處理校正詞典 | ✅ |
| **雅婷（Yating）台語 ASR**（聯發創新基地）| 台灣本土訓練、官方公開 API、台語 specific | API 配額 + 商業授權成本不透明；台灣本土使用案例待驗證 | **備援 fallback**：Sprint 3 採雙 ASR 並行比對（Google 為主、雅婷為次） | 🟡 |
| **OpenAI Whisper large-v3 + 台語 fine-tune** | 學術可行性高、本地端可部署、長期護城河 | fine-tune 需 200+ 小時台語語料 + 算力，Sprint 3 不可行 | **Year 1 H2 啟動**（build-vs-buy.md §3.4 + tech-architecture.md §8.1）| 📋 |
| **MMS-300M（Meta）台語 model** | 完全開源、可端側部署 | Sprint 3 階段未有商業 fine-tune 案例 | **POC 評估**：Sprint 3 末 1 週做小規模 POC，不影響主路線 | 🟡 |

**Sprint 3 推薦：Google Cloud STT V2 主 + 雅婷台語 ASR 備援 + 後處理校正詞典**

#### 2.2.2 雙 ASR 並行架構

```
[長者語音 chunk] → 雲端 WSS
   │
   ├──[ASR-1: Google Cloud STT V2（nan-Hant-TW）]
   │     return transcript_1 + confidence_1
   │
   ├──[ASR-2: 雅婷台語 ASR（fallback）]
   │     return transcript_2 + confidence_2（async，不阻塞主流程）
   │
   ▼
[後處理 reconciliation]
   if confidence_1 > 0.85 → 用 transcript_1
   elif confidence_2 > 0.85 → 用 transcript_2
   elif 兩者皆低（confidence < 0.85）→
     - 端側播放「您剛才說的是『XXX』嗎？」（confidence 較高者 confirm）
     - 長者回應「對 / 不對」→ 學習資料寫入 labeling_dataset（§2.5）
   │
   ▼
[校正詞典 post-processing]
   - 台語常用詞校正字典（200+ 詞，Sprint 3 初版）
   - 例：「阿嬤」（amah）→ 強制「阿嬤」；「呷飽」（chia̍h-pá）→ 「吃飽」
   - 字典來源：教育部台灣閩南語常用詞辭典 + 用戶 corrections 累積
```

#### 2.2.3 雙語（國台混用）支援

長者常見國台混用模式：「白白我跟你說啦，我今天去市場買肉，他賣得很『假肖』（ke̍-siau）」

| 處理層 | 方案 | 標籤 |
|---|---|---|
| STT lang_hint | 設 "auto" 讓 Google STT V2 自動判斷；同 chunk 內可能含中 + 台 | ✅ |
| LLM 理解 | GPT-4o-mini 已能理解部分台語拼音 + 中文混雜（測試 desk-validated）| 🟡 |
| TTS 回應 | 用戶若台語為主 → Azure TTS 用 nan-Hant-TW voice；國語為主 → zh-TW-HsiaoChenNeural；混用 → 主用中文（避免 voice 切換不自然）| 🟡 |
| 個人記憶 | RAG embedding model（text-embedding-3-small）對台語拼音 + 中文混雜的表現需 Sprint 3 POC | 🟡 |

#### 2.2.4 Sprint 3 台語驗收標準

- 台語問候類（≥20 句 Sprint 1-2 既有清單）識別準確率 ≥90% 🟡
- 台語完整對話（多輪非問候）識別準確率 ≥70% 🟡（不宣稱「商業級」）
- 國台混用對話可正確理解（GPT-4o-mini 端到端可回應）≥80% 🟡
- 校正詞典涵蓋 ≥200 個常用台語詞
- ToS 明示：「台語識別為輔助功能，未達母語者完整理解水準；持續精進中」（safety-redlines.md §2.12 演算法偏見紅線）

### §2.3 節日 / 文化在地化（F05）

**目標**：農曆節日（春節 / 元宵 / 清明 / 端午 / 中元 / 中秋 / 重陽 / 冬至）+ 24 節氣 + 客家文化 + 閩南文化適配，提升對話文化共鳴。

#### 2.3.1 資料來源

| 資料 | 來源 | 整合方式 | 標籤 |
|---|---|---|---|
| 農曆轉換 | `lunar-javascript` npm package 或 `lunardate` Python | 端側 + 後端兩處可用 | ✅ |
| 節氣資料 | 中央氣象署開放資料 API（天文資料 → 節氣） | 後端 Cron 每年初預載 24 節氣 | ✅ |
| 農民曆宜忌 | 中央氣象署 + 開源農民曆庫（如 `pchinese-calendar`） | 後端定時更新 | 🟡 |
| 廟會 / 民俗活動 | 文化部全國藝文活動資訊系統 API | 後端定時抓取 + 按用戶地點過濾 | 🟡 |
| 客家節慶（義民節 / 天穿日）| 客家委員會開放資料 | 用戶 onboarding 時可設「文化背景」flag | 🟡 |

#### 2.3.2 對話 trigger 設計

```
每日 06:00（Sprint 1-2 既有 F01 主動問候 cron）
   │
   ▼ (1) Sprint 3 新增：查詢今日節氣 / 節日
   │     【SELECT】FROM cultural_calendar
   │              WHERE date=$today
   │     【return】例：{"lunar_date": "農曆四月二十", "solar_term": "小滿",
   │                   "festival": null, "tip": "小滿節氣，天氣轉熱要注意補水"}
   │
   ▼ (2) Sprint 3 新增：個性化文化適配
   │     【query user_profile】cultural_background ∈ {hokkien, hakka, mainlander, other}
   │     【若 hokkien】→ 用台語問候 + 廟會話題（媽祖繞境 / 王爺祭）
   │     【若 hakka】→ 用客家文化話題（義民節 / 天穿日 / 客家擂茶）
   │
   ▼ (3) F01 主動問候話術生成
   │     base_prompt + "【今日文化重點】小滿節氣" + "【用戶文化背景】hokkien"
   │     → AI 生成："早安啊阿嬤，今天小滿了，天氣會比較熱，要記得多喝水。
   │                 您家附近的媽祖廟最近有什麼活動嗎？"
   │
   ▼ (4) 對話 followup
   │     若長者回應有提到「拜拜 / 廟 / 節日」→ 加 importance_score 寫入 RAG
   │     → 下次相同節日前 1 天 AI 主動提起「上次您說的 XX 廟最近有沒有活動？」
```

#### 2.3.3 文化敏感性紅線（safety-redlines.md §2.7 N7 宗教信仰勸誡）

- AI 可分享文化生活面（節慶 / 拜拜習慣 / 廟會），**不評論信仰優劣**
- AI 不主動建議「您可以去 XX 廟拜拜」（避免宗教推薦邊界）
- 長者主動分享宗教生活 → 正向陪伴回應，不延伸宗教辯論
- 客家 / 閩南 / 外省文化選項由用戶自選，預設不啟用任何文化標籤

#### 2.3.4 Sprint 3 節日驗收標準

- 8 大農曆節日 + 24 節氣全覆蓋（節氣資料完整載入）
- 用戶設定文化背景後，AI 主動話題涵蓋對應文化元素 ≥80% 🟡
- 文化敏感性 Adversarial Test：50 個宗教 / 政治 / 族群相關 query，紅線觸發率 100%

### §2.4 AI 個性化 tone（新增 feature）

**目標**：子女在 onboarding 設定 AI persona（溫柔 / 直接 / 詼諧 / 自定），讓 AI 對話風格符合長者父母的偏好。

#### 2.4.1 Persona tone 預設方案

| Persona | 適用對象 | 對話風格特徵 | 範例（早晨問候） |
|---|---|---|---|
| **溫柔陪伴型**（預設） | 一般長者 / 情緒敏感者 | 語氣溫和、句子較長、多用「您」 | "早安啊，今天天氣不錯，您睡得還好嗎？" |
| **直接務實型** | 性格爽朗 / 不喜囉嗦的長者 | 句子簡短、直接、不過度同理 | "早，今天 28 度有點熱，記得喝水。" |
| **詼諧逗趣型** | 喜歡開玩笑的長者 / 樂觀型 | 偶爾用幽默 / 諺語 / 雙關 | "早安啊！今天太陽公公比阿伯還早起，您要不要去散散步？" |
| **自定** | 子女自填 prompt | 5 個範例對話訓練 + 子女填 keyword | 子女填「像個老朋友、會聽我爸講股票但不給建議」 |

#### 2.4.2 技術實作

```python
# system prompt 模板
SYSTEM_PROMPT_TEMPLATE = """
你是長者陪伴助手「白白」。

【說話風格】
{persona_tone_block}

【您記得的長輩資訊】
{rag_memory_block}

【今日重點】
{daily_context_block}

【絕對紅線】
{redline_block}  # Sprint 1-2 既有 7 紅線
"""

PERSONA_TONE_BLOCKS = {
    "tender": "用溫柔語氣、稱呼「您」、句子可長一點、多表達同理...",
    "direct": "句子簡短、直接、不囉嗦、不過度同理...",
    "humorous": "偶爾加幽默、用諺語、雙關、但避免冷笑話...",
    "custom": lambda kw: f"風格 keyword：{kw}；範例對話：{examples}"
}
```

#### 2.4.3 切換與調整

- 子女 App「Persona 設定」頁可隨時更換（onboarding 後 30 天內免費試換）
- 長者若明確說「我不喜歡你這樣講話」→ AI 詢問「您比較喜歡哪一種？」並 push 通知子女
- Persona 切換不影響 RAG 記憶（記憶是 user-level 永久持久化）

#### 2.4.4 Sprint 3 Persona 驗收標準

- 3 種預設 persona + 1 種自定 persona 全可用
- 子女 App 切換 persona 後 next conversation 即生效（≤30 秒）
- Persona 切換後對話風格差異子女可感知（內部 beta 5 戶定性問卷）🟡

### §2.5 後台 Operator 角色轉變

**目標**：Sprint 1-2 的「全人補位」（WoZ 後台真人即時介入所有對話）轉為 Sprint 3 的「AI 主、人補位 + 標註訓練資料」。

#### 2.5.1 Sprint 1-2 vs Sprint 3 Operator 模式對比

| 維度 | Sprint 1-2（全人補位）| Sprint 3（半自動）|
|---|---|---|
| AI 自主率 | ~30%（簡單對話 AI，複雜場景轉人）| ~70-80%（AI 主導，例外才轉人）|
| Operator 主要工作 | 即時介入對話 + 補位 AI 回應 | 監控異常 + 標註訓練資料 + 紅線觸發審查 |
| 人力配置 | 2-3 人輪班 / 5 戶（白天 + 晚上 + 緊急）| 1 人輪班 / 5 戶（白天 + on-call 晚上）|
| 介入觸發 | 多數對話需 reviewer 確認 AI 回應 | 僅 (1) Layer 2 紅線觸發 (2) 連續 2 次「長者不滿意」(3) 緊急偵測觸發 |
| 學習資料蒐集 | 對話 + Operator 修正 → log（未結構化） | 結構化 labeling_dataset（去識別化 + 同意機制） |

#### 2.5.2 半自動 workflow 設計

```
[長者開始對話]
   │
   ▼
[AI 主導 pipeline]（Layer 1 GPT + RAG + Layer 2 紅線守門器）
   │
   ├──[正常對話 ~80%]
   │     AI 自動回應 → TTS → 端側播放
   │     對話結束 → memory extraction → user_memory
   │     後台僅記錄事件 log（不需 reviewer）
   │
   ├──[Layer 2 紅線觸發 ~5%]
   │     立即終止 AI → 播放預錄安全回應
   │     後台 alert → Operator 5 分鐘內審查
   │     Operator 動作：(a) 確認紅線正確（更新 false-positive 字典）
   │                    (b) 若漏判 → 人工 hotfix 紅線規則
   │
   ├──[長者連續 2 次「不滿意」訊號 ~5%]
   │     觸發條件：長者重複問同問題、說「你聽不懂啦」、長時間靜默
   │     後台 alert → Operator 可選擇 (a) text-to-speech 介入 (b) 主動撥電話
   │
   └──[緊急偵測觸發 ~10%]
         立即進 §3 緊急 SOP
         Operator 全程在線監控 + 子女追蹤
```

#### 2.5.3 標註介面 + 資料管理

| 元件 | 選型 | 理由 | 標籤 |
|---|---|---|---|
| 標註工具 | **Label Studio open source** + Docker 部署 | 開源 / 標籤類型豐富 / 多 reviewer 並行 / 既有 API 易整合 | ✅ |
| 標註資料庫 | PostgreSQL `labeling_dataset` 表 | 與既有 DB 整合 | ✅ |
| 標註類型 | (1) 對話質量 1-5 分 (2) 紅線觸發正確性 binary (3) 台語識別錯誤詞 (4) 個人記憶提取正確性 binary | 用於後續 fine-tune 訓練 | ✅ |
| 去識別化 pipeline | 標註前自動 strip 姓名 / 地址 / 身分證 / 電話 / 家人姓名 → 用 placeholder 替代 | spaCy 中文 NER + 自定規則 | ✅ |
| 同意機制 | ToS 更新含「對話資料去識別化後用於模型訓練」（opt-in，預設關閉）| safety-redlines.md §1.2 C6 + §4.1 PDPA §5 | ✅ |

```sql
-- Sprint 3 新增 schema
CREATE TABLE labeling_dataset (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source_conversation_id UUID NOT NULL REFERENCES conversation_summary(id),
  user_id_hashed TEXT NOT NULL,  -- HMAC-SHA256 雜湊；不可回查
  original_transcript_deidentified TEXT NOT NULL,  -- 去識別化後
  ai_response TEXT NOT NULL,
  label_type enum('quality', 'redline_check', 'taiwanese_asr_error', 'memory_extraction') NOT NULL,
  label_value JSONB NOT NULL,  -- 依 label_type 不同 schema
  labeler_id UUID NOT NULL,  -- Operator 帳號
  labeled_at TIMESTAMP NOT NULL DEFAULT NOW(),
  user_consent_version INT NOT NULL,  -- ToS 同意版本
  CHECK (length(user_id_hashed) = 64)  -- SHA-256 hex
);
CREATE INDEX idx_labeling_label_type ON labeling_dataset(label_type, labeled_at);
```

#### 2.5.4 標註倫理（vulnerable population）

- 對話資料去識別化：自動 strip + 人工 review 抽樣 10%
- 同意機制：onboarding ToS 含「對話資料去識別化用於模型訓練」opt-in（預設關閉，需長者 + 子女主動勾選）
- 標註資料不出境（純台灣 GCP asia-east1 + Label Studio 自託管）
- 退訂後 30 天硬刪 labeling_dataset 中該用戶資料（即使已去識別化，因 user_id_hashed 仍是 traceable identifier）
- 標註 Operator 簽署 NDA + 受訓 PDPA 合規 4 小時 課程

---

## §3. 緊急偵測模組

### §3.1 Wake word + keyword 偵測

**目標**：跌倒 / 救命 / 痛 / 暈 / 不舒服 → 觸發 alert

#### 3.1.1 偵測層架構（4 層）

```
[長者語音 / 環境聲音]
   │
   ▼ Layer 1：端側 wake word（Sprint 1-2 既有）
   │     Picovoice Porcupine 3.0：「白白」喚醒詞
   │     永遠 on，<100ms 延遲，100% 端側
   │
   ▼ Layer 2：端側緊急 keyword 偵測（Sprint 3 新增）
   │     獨立於 wake word 的「緊急語音 spotting」
   │     keyword 字典（端側字典，≤30 字）：
   │       - 中文：救命 / 救我 / 好痛 / 我跌倒了 / 喘不過氣 / 暈了
   │       - 台語：救人喔（kiù-lâng-ooh）/ 我那會跋倒（pua̍h-tó）
   │     技術：openWakeWord（onnx）多 keyword fine-tune（POC Sprint 3）
   │     觸發 → 立即進 §3.3 緊急通知流程
   │
   ▼ Layer 3：對話內語義 keyword（Sprint 3 新增）
   │     Layer 2 rule-based 守門器擴充：對話 transcript 中 R3 急救 / R6 自殺關鍵詞
   │     已含於 safety-redlines.md §4.1 R3/R6 紅線
   │     觸發 → 立即進 §3.3 緊急通知流程
   │
   ▼ Layer 4：環境聲音異常（Sprint 3 新增）
   │     端側 ONNX 模型偵測：跌倒撞擊聲（>85dB 短促）/ 玻璃破裂 / 長時間呼救
   │     audio classification model：YAMNet（Google）or 自訓
   │     confidence >0.7 → 進 §3.2 異常互動偵測流程
```

#### 3.1.2 端側 keyword spotting 技術選型

| 選項 | 優勢 | 劣勢 | Sprint 3 推薦 | 標籤 |
|---|---|---|---|---|
| **Picovoice Porcupine 3.0**（同 wake word，加 custom keyword） | 已採用 / 商業授權成本可控 | 每多一個 keyword 額外授權費 | **MVP 主選擇**：6-8 個高頻 keyword | ✅ |
| **openWakeWord** | 開源 Apache-2.0 / 可自訓多 keyword | 台語 keyword 自訓需 200+ 樣本 / Sprint 3 時程緊 | **備援 + POC**：Sprint 3 末 1 週 POC | 🟡 |
| **YAMNet（環境聲音）** | Google 開源 / 521 類 audio classification | model 大（~17MB），端側部署需 quantize | **環境聲音偵測主選**（Layer 4） | 🟡 |

### §3.2 異常互動偵測

**目標**：≥24 小時無互動 / 異常情緒 keyword → 子女通知

#### 3.2.1 異常訊號定義

| 訊號類型 | 觸發條件 | 嚴重度 | 通知對象 |
|---|---|---|---|
| **長時間靜默** | 連續 ≥45 分鐘無任何對話 / 主動互動 + 長者本應在家時段（06-22）| Low | Operator alert + 對話端側主動詢問 "您還好嗎？" |
| **整日無互動** | 連續 ≥24 小時無對話（含主動問候無回應）| Medium | 子女 LINE 推播 + Operator 主動撥電話 |
| **5 天無互動** | 連續 ≥5 天完全無互動 | High | 子女多通道緊急通知 + Operator 緊急聯絡（safety-redlines.md §5.3 死亡情境 SOP） |
| **異常情緒 keyword** | 連續 2 次對話含「我好累 / 沒人在乎我 / 不想活了」類 keyword | High | 立即觸發 N6 自殺 SOP（safety-redlines.md §5.2） |
| **環境聲音異常** | YAMNet 偵測撞擊聲 / 玻璃破 + 後續無語音回應 | High | 立即觸發 §3.3 緊急通知 + Operator 撥電話確認 |
| **跌倒偵測**（非影像式） | (a) 環境撞擊聲 (b) 持續 ≥30 秒無互動 (c) 端側 keyword「跌倒 / 救命」三選一 | High | 同上 |

#### 3.2.2 跌倒偵測 caveat（重要）

⚠️ **Sprint 3 跌倒偵測召回率 ≥80% / false positive ≤1/週 為 🟡 hypothesis 目標**

- safety-redlines.md §1.3 Plan-Only 紅線 P1：禁稱「已驗證準確率」
- tech-architecture.md §4.8：跌倒偵測若宣稱準確率 → 觸發 TFDA II 類認證（Sprint 3 不在此範圍）
- Sprint 3 規劃版本：技術架構設計 + Sprint 4 內部 beta 5 戶 ≥3 次假事件演習量測 → Phase 6 Pilot 10-20 戶實際驗證
- 對外 ToS 文案：「輔助通知工具，非保證式安全設備；不可取代專業醫療監測」（safety-redlines.md §5.1）

### §3.3 緊急按鈕（硬體 + 軟體雙觸發）

**目標**：長者主動觸發緊急流程的最低門檻入口

#### 3.3.1 軟體緊急按鈕（Sprint 2 已建，Sprint 3 強化）

| 元件 | Sprint 2 既有 | Sprint 3 強化 |
|---|---|---|
| 語音觸發 | 「白白，幫我叫救護車」 | 加 5 個變體：「快通知我兒子 / 我不舒服 / 救救我 / 我跌倒了 / 出事了」 |
| 觸控按鈕 | 平板首頁紅色大按鈕（≥80×80px）| 加長按 3 秒確認（避免誤觸）+ 「滑動取消」誤觸機制 |
| 雙重確認 | 觸發後 10 秒語音「您確定要呼叫家人嗎？說『對』或『取消』」| 同；但若無回應 → 視為「真實緊急」進 fan-out |

#### 3.3.2 硬體緊急按鈕（Sprint 3 規劃，📋 採購）

| 規格 | 推薦選型 | 替代 | 理由 | 標籤 |
|---|---|---|---|---|
| 形態 | **無線藍芽 SOS 按鈕（PARK-SOS-001 或同類）** | 有線緊急按鈕 | 老人家放床邊 / 浴室 / 客廳；無線靈活 | 🟡 |
| 通訊 | Bluetooth 5.0 BLE | Zigbee / 自製 RF | 平板原生支援 / 無需 hub | ✅ |
| 電池 | CR2032 鈕扣電池，1 年壽命 + 低電量警示 | 充電式 | 老人不會記得充電 | ✅ |
| 認證 | BSMI（必）+ NCC（必）| — | 硬體入台必要 | ✅ |
| BOM | 約 NT$300-600 / 顆 | — | 屬 Tier 2 / 3 加值配件 | 🟡 |

📋 Sprint 3 不執行採購，僅規劃硬體選型 + 平板端 BLE pairing UX flow。

### §3.4 緊急通知 fan-out 流程

**目標**：子女 app push → 子女接通電話 / 視訊 → 必要時觸發 119 引導

#### 3.4.1 通知 fan-out 架構（tech-architecture.md §5.4 基礎上強化）

```
[緊急事件 trigger]
   │
   ▼ (1) DB INSERT emergency_event
   │     {id, user_id, event_type, confidence, sensor_source, triggered_at,
   │      resolution_status='pending'}
   │
   ▼ (2) Celery 高優先佇列 broker=Redis
   │
   ▼ (3) 多通道 fan-out（並行 push，3 分鐘內完成第一輪）
   │     ├──> 子女 App push（FCM / APNs）
   │     ├──> LINE Notify（綁定的 LINE）
   │     ├──> Twilio SMS（手機簡訊）
   │     ├──> Telegram Bot（若子女設定）
   │     └──> Email（SendGrid，最後 fallback）
   │
   ▼ (4) 5 分鐘 SLA 監控
   │     ├──> 子女點擊 push → POST /api/v1/emergency/{id}/acknowledge
   │     │     DB UPDATE resolved_at + resolution_status='handling'
   │     │     觸發子女選項：(a) 撥電話 (b) 視訊 (c) 標記誤觸發 (d) 緊急到場
   │     │
   │     └──> 5 分鐘無 ack → 升級
   │
   ▼ (5) 第二層備援（5-15 分鐘）
   │     ├──> 通知次要緊急聯絡人（另一子女 / 配偶 / 兄弟姊妹）
   │     │     onboarding 強制設定 ≥2 緊急聯絡人（safety-redlines.md §5.5）
   │     └──> Operator 主動撥電話給長者本人
   │
   ▼ (6) 第三層備援（15-30 分鐘）
   │     ├──> 通知第三順位（鄰居 / 社區關懷員 / 照服員）
   │     └──> 機器人語音引導長者：「您的家人暫時聯絡不上，如果您需要幫助，
   │                                請說『幫我叫救護車』或讓旁邊的人撥 119」
   │
   ▼ (7) 30 分鐘總無回應 + 真實緊急
   │     ⚠️ Sprint 3 不規劃 119 自動介接（safety-redlines.md §5.5 + tech-architecture.md §2.2）
   │     Operator 全程在線 + 子女追蹤 + 鄰居 / 社區關懷員協作
   │     Year 2+ 評估 119 介接（需衛福部 + 內政部消防署審）
```

#### 3.4.2 多通道 fallback 機制

| 通道優先序 | 通道 | 預期到達率 | 失敗處理 |
|---|---|---|---|
| 1 | App push（FCM / APNs） | ≥90% | 失敗自動降級 LINE |
| 2 | LINE Notify | ≥95%（台灣使用率） | 失敗自動降級 SMS |
| 3 | Twilio SMS | ≥99% | 失敗自動降級 Email |
| 4 | Email | ≥99.5% | 最終 fallback |
| 5（並行）| Telegram Bot（option） | 取決於子女設定 | 不影響其他通道 |

**子女 App push 到達率 ≥99% 目標**（Sprint 3 驗收標準）：透過多通道 fan-out 達成（單一 push 通道 90-95%，多通道並行 ≥99%）🟡。

### §3.5 誤觸發處理

#### 3.5.1 False positive 控管

| 觸發類型 | 設計目標 | 處理機制 |
|---|---|---|
| 環境聲音偵測 | ≤1 次/週/用戶 🟡 hypothesis | 觸發後端側 30 秒詢問「您還好嗎？」→ 長者確認 OK → 記入 false_positive log → 隔天 batch 學習調整閾值 |
| keyword 偵測 | ≤2 次/週/用戶 🟡 | 「救命」可能在電視 / 對話中出現 → 端側詢問確認 |
| 異常互動（24 hr 無互動） | ≤1 次/月/用戶 🟡 | 長者出門 / 住院 → 子女可在 App 「暫停監測」3-7 天 |

#### 3.5.2 誤觸發 UI

```
[端側偵測到可能緊急]
   ↓
[平板大字 UI]：「我聽到一個聲音，您還好嗎？」
   + 語音播放
   ↓
[30 秒倒數]
   ├──> 長者說「我沒事 / 好啦 / 取消」→ 取消流程 + log false_positive
   ├──> 長者按「取消」按鈕（觸控）→ 同上
   └──> 30 秒無回應 → 升級到子女通知
```

#### 3.5.3 紅線：絕對 guardrail

Sprint 3 緊急偵測必守的 safety-redlines.md §1.2 條件紅線 C2：
- 不宣稱具體召回率數字
- 3 層確認機制（端側 30 秒詢問 → 子女 5 分鐘 ack → 第二備援 15 分鐘）
- false positive 嚴格控管目標 ≤1 次/週/用戶
- 不接 119 介接（Sprint 3 + Year 1 範圍外）
- 不取代專業醫療監測（ToS 明示）

### §3.6 Sprint 3 緊急模組驗收標準

- wake word + 6-8 個 keyword 端側可用 🟡
- 異常互動偵測 6 類訊號完整觸發鏈
- 緊急按鈕雙觸發（語音 + 觸控）+ 硬體規劃完成（未採購）
- 緊急通知 fan-out 多通道 ≤5 分鐘 SLA 規劃
- 誤觸發 UI + false positive log 機制
- safety-redlines.md §5.1 跌倒 SOP + §5.5 多層備援 完整 chain
- ⚠️ 跌倒偵測召回率 ≥80% / false positive ≤1/週 為 🟡 hypothesis，Sprint 4 內部 beta 5 戶 ≥3 次假事件演習 + Phase 6 Pilot 10-20 戶實際驗證

---

## §4. 子女 App 規格

### §4.1 每日 / 每週 AI 摘要（F12）

**目標**：對話 log → GPT-4o 整理 → 健康 / 情緒 / 活動三層摘要

#### 4.1.1 摘要生成 pipeline（建立在 tech-architecture.md §2.3 基礎上）

```
[Cron 每日 21:00 台灣時間]
   │
   ▼ (1) Celery scheduled task：generate_daily_brief
   │     【SELECT】FROM conversation_summary
   │              WHERE user_id=$1 AND DATE(created_at)=CURRENT_DATE
   │
   ▼ (2) 三層摘要 LLM extraction（Sprint 3 強化版）
   │     【LLM Prompt】GPT-4o（複雜任務用 full model，非 mini）
   │       """
   │       依照以下對話摘要，整理出今日「給子女的三層摘要」：
   │
   │       【健康層】今日身體狀況訊號（用藥 / 不適 / 醫療相關）
   │         - 若無訊號：「今日無特別健康訊號」
   │         - 若有：簡明 1-2 句，不下醫療判斷
   │
   │       【情緒層】今日情緒主軸（開心 / 平靜 / 略低落 / 焦慮）
   │         - 範例：「今天聊到孫子放假，心情明顯不錯」
   │         - 範例：「下午對話次數較少，可能比較疲憊」
   │
   │       【活動層】今日生活面向（聊天主題 / 互動次數）
   │         - 範例：「主要聊到廟會、煮飯、看孫子照片」
   │         - 範例：「今日主動對話 8 次，符合平均」
   │
   │       【⚠️ 絕對紅線】
   │         - 不下醫療判斷（safety-redlines.md §4.1 R1/R2）
   │         - 不引用原文對話（隱私 §4.4 R4）
   │         - 不評論子女 / 家庭衝突
   │       """
   │     【後端送 OpenAI】GPT-4o（Tier 2 用 full model 確保質量）
   │
   ▼ (3) DB INSERT daily_brief
   │     {id, user_id, brief_date, health_signals jsonb, mood_summary text,
   │      activity_summary text, conversation_count int,
   │      retention_until=NOW()+INTERVAL '180 days'}
   │
   ▼ (4) push 給所有子女帳號（多帳號 fan-out）
   │     FCM / APNs → 子女 App home
   │     push_title: "今天爸爸/媽媽的小情緒"
   │     push_body: mood_summary 第一句
```

#### 4.1.2 每週摘要（Sprint 3 新增）

```
[Cron 每週日 21:00]
   │
   ▼ generate_weekly_brief
   │     【SELECT】FROM daily_brief
   │              WHERE user_id=$1 AND brief_date >= CURRENT_DATE - 7
   │
   ▼ 週聚合 LLM extraction
   │     【Prompt】整理「本週父母趨勢」：
   │       - 健康趨勢（用藥規律性 / 不適頻率）
   │       - 情緒趨勢（一週情緒主軸 + 變化）
   │       - 活動趨勢（互動規律性 + 主題分布）
   │       - 建議行動（給子女）：是否建議打電話 / 探視
   │
   ▼ push 週報（週日晚上）
```

#### 4.1.3 隱私邊界（Sprint 3 嚴守）

依 problem-framing.md §3.0 + tech-architecture.md §2.3：
- ✅ 對子女說「今天爸媽聊了什麼開心的事」（情感面）
- ❌ **嚴禁** 對子女說「今天爸媽幾點在哪個房間」（監控面）
- 監控型 metrics（活動軌跡 / 對話頻率細節）必須 add-on + Re-consent（safety-redlines.md §2.12）
- 預設關閉「監控型」add-on，子女主動開啟需長者三方同意 Re-consent

### §4.2 雙向視訊（F14）

**目標**：基於 WebRTC（不用 Zoom / Google Meet）

#### 4.2.1 技術選型

| 元件 | 選型 | 替代 | 理由 | 標籤 |
|---|---|---|---|---|
| Signaling server | **自建 FastAPI WebSocket** | Twilio Programmable Video | 自建可控成本 + PDPA 合規（資料不出境） | ✅ |
| TURN server | **coturn 自託管 + GCP asia-east1** | Twilio TURN | 自託管降低 vendor lock-in + 流量成本 | 🟡 |
| 媒體傳輸 | **WebRTC（P2P 為主，TURN fallback）** | SIP / Janus | 端對端加密 + 瀏覽器 / RN 原生支援 | ✅ |
| Codec | **VP9（video）+ Opus（audio）** | H.264 | 開源 + WebRTC 標準 | ✅ |
| Bandwidth target | 視訊 ≤800 kbps（720p 自適應降至 360p）/ 純語音 ≤64 kbps | — | 老人家 4G 網路品質考量 | 🟡 |

#### 4.2.2 視訊 flow

```
[子女 App] 點「視訊呼叫爸媽」
   │
   ▼ (1) 子女 App POST /api/v1/call/initiate
   │     {caller_id, callee_user_id, call_type: 'video' | 'audio'}
   │
   ▼ (2) Signaling server 建立 call session
   │     INSERT INTO call_session
   │     WebSocket push 給長者端機器人
   │
   ▼ (3) 長者端機器人響起
   │     ├──[音訊] AI 語音播報「兒子志明要視訊您，您要接嗎？」
   │     ├──[視覺] 平板大字 UI + 子女頭像 + 「接聽」「拒絕」大按鈕
   │     └──[長者語音回應] 「接 / 不接」端側辨識
   │
   ▼ (4) 接通 → WebRTC P2P 連線建立
   │     STUN/TURN（coturn）協助 NAT traversal
   │     ICE candidates exchange via signaling
   │     P2P 媒體傳輸（資料不過 server）
   │
   ▼ (5) 通話中
   │     ├──[長者端] 自動拉近鏡頭（face detection center）
   │     ├──[字幕] real-time STT 字幕（長者聽不清楚時看字）
   │     └──[緊急按鈕] 通話中仍可觸發緊急 SOP
   │
   ▼ (6) 通話結束
         DB UPDATE call_session 通話時長 + quality_metrics
         不錄影 / 不錄音（safety-redlines.md §1.1 N9 紅線）
```

#### 4.2.3 視訊延遲與品質

- 端對端延遲目標 ≤500ms（asia-east1 TURN + P2P 路徑）🟡
- 視訊建立時間 ≤10 秒（signaling + ICE）🟡
- 通話品質降級 fallback：視訊 → 純語音 → 純文字訊息
- 不錄影不錄音（PDPA + safety-redlines.md §1.1 N9 雲端影像收錄紅線）

### §4.3 緊急通知 silent push + 鈴聲 + Telegram / LINE Notify 多通道

依 §3.4 fan-out 架構，子女 App 側需支援：
- **Silent push**（背景接收，無使用者干擾）
- **Loud push**（緊急時繞過勿擾模式：iOS Critical Alert / Android Notification Channel）
- **多通道並行**：App push + LINE Notify + SMS + Telegram + Email

iOS Critical Alert 需 Apple 特別 entitlement 申請（📋 Sprint 3 規劃，Sprint 4 申請）。

### §4.4 健康趨勢圖

**目標**：對話頻率 / 情緒分布 / 活動規律

#### 4.4.1 基礎版（Sprint 3 範圍）

| 圖表 | 資料來源 | 視覺 |
|---|---|---|
| 對話頻率（30 天）| `conversation_summary` 日聚合 | 折線圖（每天對話次數） |
| 情緒分布（30 天）| `daily_brief.mood_summary` LLM 情緒分類 | 圓餅圖（happy / neutral / sad / anxious） |
| 活動規律（一週）| `conversation_summary.created_at` 時段分布 | heat map（24×7 時段） |
| 健康訊號 timeline（30 天）| `daily_brief.health_signals` jsonb | 事件 timeline（不下判斷） |

#### 4.4.2 進階版（Tier 3 Premium，Sprint 3 範圍外）

依 pricing.md §4.3：
- 與家醫科 / 神經科系統介接（Year 3）
- AI 預測趨勢警示（如：「對話頻率下降 30%，建議關心」）
- 月度 PDF 報告（供醫師參考）

### §4.5 多帳號（≤3 子女）

**目標**：1 長者 → ≤3 子女帳號（Tier 2 Pro）

#### 4.5.1 schema 設計

```sql
CREATE TABLE family_member_account (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  elder_user_id UUID NOT NULL REFERENCES users(id),
  child_user_id UUID NOT NULL REFERENCES users(id),
  role enum('primary', 'secondary', 'observer') NOT NULL,  -- 主帳號 / 次帳號 / 旁觀者
  notification_preferences JSONB NOT NULL DEFAULT '{"daily_brief": true, "weekly_brief": true, "emergency": true}',
  granted_by_user_id UUID NOT NULL REFERENCES users(id),  -- 邀請者（必為 primary 或 elder 本人）
  granted_at TIMESTAMP NOT NULL DEFAULT NOW(),
  revoked_at TIMESTAMP NULL,
  CHECK (elder_user_id != child_user_id),
  UNIQUE (elder_user_id, child_user_id)
);
CREATE INDEX idx_family_elder ON family_member_account(elder_user_id) WHERE revoked_at IS NULL;
```

#### 4.5.2 多帳號規則

- 最多 3 個子女帳號（Tier 2 Pro）；Tier 3 Premium 無限
- 1 個 primary 主帳號（onboarding 創建者，唯一可邀請 / 移除其他帳號）
- 緊急通知 fan-out 給所有 active 帳號
- 摘要 push 依各帳號 notification_preferences
- 視訊發起任一帳號均可
- 對話 history 所有帳號可看（但長者可選擇某天對話不分享，safety-redlines.md §6.2）

#### 4.5.3 多帳號 Re-consent

加入新子女帳號 = safety-redlines.md §2.12 Re-consent 觸發條件：
- 長者本人語音確認「願意讓 XXX 也接收通知」
- 三方同意書版本 +1（consent_record.consent_version）

### §4.6 平台

- **iOS 13.0+**：Swift 5 + React Native 0.74
- **Android 8.0+ (API 26)**：Kotlin + React Native 0.74
- **Web Companion**（基礎版，Sprint 3 範圍）：React 18 + Vite，供無 App 子女 fallback 使用
- Web Companion 功能限制：每日摘要可看 / 視訊發起不可（瀏覽器 WebRTC 限制）/ 緊急通知 email + SMS（無 push）

### §4.7 Sprint 3 子女 App 驗收標準

- 每日摘要每天 21:00 自動生成 + push（多帳號 fan-out）
- 每週摘要每週日 21:00 push
- 雙向視訊 P2P 連線建立 ≤10 秒，延遲 ≤500ms 🟡
- 緊急通知到達率 ≥99%（多通道 fan-out）🟡
- 多帳號最多 3 子女 + Re-consent 機制
- Web Companion 基礎功能（摘要 + 緊急 email/SMS）

---

## §5. 後台 Operator 訓練 + AI 標註

（§2.5 已詳述，本節不重複，僅補充 Sprint 3 階段性目標）

### §5.1 Operator 訓練計畫

| 訓練項目 | 時數 | Sprint 時程 |
|---|---|---|
| PDPA 合規 4 小時 課程 + NDA 簽署 | 4 hr | W8 Day 1 |
| Label Studio 操作 + 標註 SOP | 2 hr | W8 Day 2 |
| 紅線判定 + 漏判 hotfix 流程 | 2 hr | W8 Day 2 |
| 緊急偵測 SOP + 撥電話腳本 | 2 hr | W8 Day 3 |
| 模擬演練（10 場景，含真實緊急 + false positive） | 4 hr | W8 Day 3-4 |

### §5.2 AI 標註資料目標（Sprint 3）

| 標註類型 | Sprint 3 目標數量 | 用途 |
|---|---|---|
| 對話質量 1-5 分 | ≥500 條 / 週 | 後續 RLHF（Year 1 H2） |
| 紅線觸發正確性 binary | ≥100 條 / 週 | Layer 2 rule 漏判 / 誤判修正 |
| 台語識別錯誤詞 | ≥50 條 / 週 | 校正詞典累積 + 後續 Whisper fine-tune 資料（Year 1 H2） |
| 個人記憶提取正確性 binary | ≥100 條 / 週 | RAG retrieval quality 監控 |

---

## §6. Sprint 3 拆解（2 週 Sprint）

### §6.1 Week 4 (W8)

| Day | 主要工作 | 負責角色 | Deliverable |
|---|---|---|---|
| **W8 Day 1（週一）** | Operator 訓練 + Sprint 3 kickoff | Tech Lead + Operator team | Operator 受訓完成 + PDPA NDA |
| **W8 Day 1-3** | **個人化記憶 RAG 串接（pgvector + GPT-4o function calling）** | Backend Engineer × 2 | (1) pgvector schema + IVFFLAT index (2) memory extraction Celery task (3) RAG retrieval pipeline (4) taboo_topic check |
| **W8 Day 2-3** | RAG 端對端整合測試 | QA Engineer | curl + DB query 三層欄位對齊驗證 |
| **W8 Day 4-7** | **台語對話進階（雙 ASR 並行 + 校正詞典）** | Backend Engineer × 1 + ML Engineer × 1 | (1) Google STT V2 主路徑 (2) 雅婷 ASR 備援 (3) reconciliation logic (4) 校正詞典 200+ 詞 (5) 國台混用 LLM 測試 |
| **W8 Day 5-6** | Label Studio 部署 + 標註 pipeline | Backend Engineer × 1 | (1) Label Studio Docker (2) labeling_dataset schema (3) 去識別化 pipeline (4) ToS opt-in 機制 |
| **W8 Day 8-10** | **節日 / 文化在地化 + AI persona 個性化** | Backend Engineer × 1 + Product Designer × 1 | (1) cultural_calendar 資料載入 (2) 節氣 / 農民曆 / 文化背景 trigger (3) AI persona 3 + 自定 template (4) 子女 App persona 設定 UI |

### §6.2 Week 5 (W9)

| Day | 主要工作 | 負責角色 | Deliverable |
|---|---|---|---|
| **W9 Day 11-12** | **緊急偵測模組：端側 keyword + 異常互動** | Mobile Engineer × 1 + Backend Engineer × 1 | (1) Porcupine 6-8 keyword 端側部署 (2) YAMNet 環境聲音 ONNX (3) 異常互動 6 類訊號 detection logic |
| **W9 Day 12-13** | **緊急按鈕（軟體強化 + 硬體規劃）** | Mobile Engineer × 1 | (1) 語音 5 變體觸發 (2) 觸控長按 3 秒 (3) 硬體 BLE pairing UX flow (4) 硬體採購規格書 📋 |
| **W9 Day 13-14** | **緊急通知 fan-out 多通道** | Backend Engineer × 1 | (1) Celery 高優先佇列 (2) FCM/APNs + LINE Notify + Twilio SMS + Telegram + Email 5 通道 (3) 多層備援 5/15/30 分鐘 SLA (4) 誤觸發 log + UI |
| **W9 Day 15-17** | **子女 App 全功能（摘要 / 視訊 / 通知 / 趨勢 / 多帳號）** | Mobile Engineer × 2 + Backend Engineer × 1 | (1) 每日 / 每週摘要 Celery + push (2) WebRTC signaling + coturn (3) 雙向視訊 UI + 字幕 (4) 健康趨勢圖 4 圖 (5) 多帳號 schema + Re-consent flow |
| **W9 Day 17** | Web Companion 基礎版 | Frontend Engineer × 1 | React + Vite + 摘要頁 + 緊急 email/SMS |
| **W9 Day 18-21** | **內部 beta 5 戶 + bug fixes** | 全 team | (1) 5 戶（內部員工父母 / 自家親戚）部署 (2) Day-1 / Day-3 / Day-7 主動關懷 (3) 至少 2 次假緊急事件演習 (4) bug fix + W10 review 準備 |

### §6.3 角色與人月估算（📋 post-approval）

| 角色 | 人數 | 工時（2 週 Sprint）|
|---|---|---|
| Backend Engineer | 3 | 6 人週 |
| Mobile Engineer (iOS / Android / RN) | 2 | 4 人週 |
| ML Engineer | 1 | 2 人週（台語 ASR + RAG）|
| Frontend Engineer (Web Companion) | 1 | 1 人週（W9 Day 17）|
| QA Engineer | 1 | 2 人週 |
| Product Designer | 1 | 1 人週 |
| Operator team | 2 | 2 人週（W8 訓練 + W9 半自動 ops）|
| Tech Lead / PM | 1 | 2 人週 |
| **合計** | **12 人** | **20 人週**（10 人月）|

---

## §7. 風險清單 + 緩解

| 風險 # | 風險描述 | 機率 | 影響 | 緩解策略 | 標籤 |
|---|---|---|---|---|---|
| **R3-01** | 緊急偵測 false positive 太高（>1/週）導致「狼來了」效應 | 🟡 高 | 子女信任崩潰 / 訂閱流失 | (1) Sprint 3 設計 3 層確認機制 (2) Sprint 4 內部 beta 5 戶調整閾值 (3) safety-redlines.md §1.2 C2 條件紅線嚴守 (4) ToS 明示「非保證式」 | ✅ |
| **R3-02** | 跌倒偵測技術風險（非影像式準確率不確定） | 🟡 高 | UVP「安全網」可信度下降 | (1) Sprint 3 嚴守「不宣稱準確率」（P1 紅線）(2) Sprint 4 假事件演習量測 (3) ToS 明示「輔助通知工具」(4) 緊急按鈕作為被動安全網保留 | ✅ |
| **R3-03** | 個人化記憶 RAG 跨境傳輸（embedding 送 OpenAI）PDPA 風險 | 🟡 中 | PDPC 解釋令收緊 → 服務中斷風險 | (1) GCP asia-east1 部署 + 嚴格資料最小化（strip 姓名/身分證/地址）(2) Year 1 H2 開源 embedding model 在台部署評估 (3) 跨境同意書 explicit consent (4) 律師持續追蹤 PDPC 解釋令 | 🟡 |
| **R3-04** | 子女 App push 通知失敗（單一通道失效） | 🟡 中 | 緊急通知漏接 | (1) 5 通道並行 fan-out（push + LINE + SMS + Telegram + Email）(2) 多層備援 5/15/30 分鐘 SLA (3) iOS Critical Alert entitlement 申請（Sprint 4）(4) 子女 onboarding 強制設定 ≥2 緊急聯絡人 | ✅ |
| **R3-05** | WebRTC 雙向視訊網路品質（老人家 4G 不穩） | 🟡 中 | 視訊體驗差 → 棄用 | (1) 自適應 bitrate（720p 降至 360p）(2) 自動 fallback 純語音 (3) 字幕（real-time STT）補強聽不清楚 (4) TURN server asia-east1 部署降延遲 | 🟡 |
| **R3-06** | 台語 fine-tune 訓練資料不足（Sprint 3 商業 ASR 仍有 20-40% 錯字率） | 🟡 高 | 台語差異化 UVP 弱化 | (1) Sprint 3 採雙 ASR 並行（Google + 雅婷）+ 校正詞典 (2) Year 1 H2 啟動 Whisper fine-tune（需 200+ 小時語料）(3) Sprint 3 起累積標註資料 (4) ToS 明示「持續精進中」 | 🟡 |
| **R3-07** | Operator 半自動 workflow 中漏判紅線（AI 沒攔住） | 🟡 中 | safety-redlines.md S0/S1 嚴重事件 | (1) Layer 2 rule-based 仍 100% 守門（AI 主導不取代紅線守門）(2) Operator 每週審查 random 10% 對話 (3) Adversarial Test 每月 ≥70 案例 (4) 漏判 hot reload patch | ✅ |
| **R3-08** | RAG 召回正確率不達 75%（記憶錯亂或錯引） | 🟡 中 | 對話質量下降 / 用戶信任降 | (1) Sprint 3 末跑 RAG quality benchmark（標註 200 條 ground truth）(2) recency decay + importance_score 調優 (3) Sprint 4 用內部 beta 5 戶資料 fine-tune retrieval strategy | 🟡 |
| **R3-09** | 多帳號 Re-consent 流程繁瑣 → 子女 setup 阻礙 | 🟡 中 | 多子女家庭 onboarding 完成率下降 | (1) Re-consent 用音訊版（≤2 分鐘）(2) primary 主帳號代理發起 + 長者口頭確認 (3) Re-consent UX 跑通內部測試 | 🟡 |
| **R3-10** | 雲端 LLM 成本超預算（Sprint 3 新增 RAG embedding + 摘要 GPT-4o full） | 🟡 中 | 月成本 NT$200 → NT$400-500/用戶 | (1) embedding 用 small 版（cost 6.5× 差異）(2) 摘要 cache 機制（相似對話 reuse summary）(3) Year 1 H2 開源 LLM 比例提升降成本 | ✅ |
| **R3-11** | 內部 beta 5 戶招募困難（員工 + 親戚範圍有限） | 🟡 中 | Sprint 3 末驗證樣本不足 | (1) 提前 1 週 W7 即開始招募（員工父母 + 自家親戚）(2) 失智症協會合作 backup (3) Sprint 4 擴大 10-20 戶 Closed Beta | 🟡 |
| **R3-12** | AI persona 切換造成對話風格不一致 / 用戶感受混亂 | 🟡 低 | 信任度下降 | (1) Persona 切換 30 天試換期 (2) 切換後 push 子女確認 (3) 預設「溫柔陪伴型」最 safe (4) 標註資料追蹤 persona × 滿意度 | ✅ |

### §7.1 高優先風險（Sprint 3 必須監控）

依 safety-redlines.md §1.1-§1.3 + tech-architecture.md §10.2 卡關項目，以下風險需 Sprint 3 全程主動監控：

1. **R3-01 緊急偵測 false positive**（safety-redlines.md §1.2 C2 條件紅線）
2. **R3-02 跌倒偵測準確率不可宣稱**（safety-redlines.md §1.3 Plan-Only 紅線 P1）
3. **R3-03 RAG 跨境傳輸 PDPA**（tech-architecture.md §10.2 PDPA 詮釋待累積）
4. **R3-07 紅線漏判**（safety-redlines.md §4.1 R1-R10 + R8-R10）

---

## §8. Sprint 3 量測指標

> ⚠️ **Plan-Only Mode**：以下指標為 Sprint 3 設計 + 規劃驗收標準；🟡 hypothesis 部分需 Sprint 4 內部 beta + Phase 6 Pilot 量測。**禁稱已驗證**。

### §8.1 Feature 完成度（驗收）

| 指標 | 目標 | 量測方式 | 標籤 |
|---|---|---|---|
| Pro Tier SHOULD 7 feature 全 working | 100%（規劃完成）| Sprint 3 末內部 review（規劃完成 walkthrough）| 📋 |
| F03 / F04 / F05 / F08 / F12 / F14 + Operator 半自動 | 全部完成 | feature checklist | 📋 |

### §8.2 緊急偵測指標（🟡 hypothesis，Sprint 4 驗證）

| 指標 | 目標 | 量測方式 | 標籤 |
|---|---|---|---|
| 緊急偵測召回率 | ≥80% | Sprint 4 內部 beta 5 戶 ≥3 次假事件演習 | 🟡 hypothesis |
| False positive 率 | ≤1 次/週/用戶 | 同上 + log 統計 | 🟡 hypothesis |
| 緊急通知 5 分鐘 SLA 達成率 | ≥99% | Celery + SLA dashboard | 🟡 |
| 多通道 push 到達率 | ≥99%（合計 5 通道）| Sentry + 通道 ack 統計 | 🟡 |

### §8.3 子女 App 指標（🟡 hypothesis）

| 指標 | 目標 | 量測方式 | 標籤 |
|---|---|---|---|
| 雙向視訊建立時間 | ≤10 秒 | WebRTC quality_metrics | 🟡 |
| 雙向視訊延遲 | ≤500ms | 同上 | 🟡 |
| 每日摘要 push 到達率 | ≥99% | FCM/APNs report | ✅（多通道）|
| 子女 App push 到達率 | ≥99% | 同上 | 🟡 |
| 多帳號 ≤3 子女正常運作 | 100% | 內部測試 + Sprint 4 beta | ✅ |

### §8.4 核心對話模組指標（🟡 hypothesis）

| 指標 | 目標 | 量測方式 | 標籤 |
|---|---|---|---|
| 個人化記憶 RAG 召回正確率 | ≥75% | Sprint 3 末 benchmark 200 ground truth | 🟡 hypothesis |
| 台語問候類識別準確率 | ≥90% | Adversarial test 20+ 句 | 🟡 |
| 台語完整對話識別準確率 | ≥70% | Sprint 4 內部 beta 5 戶 | 🟡 |
| 國台混用對話可理解 | ≥80% | 同上 | 🟡 |

### §8.5 內部 beta NPS（🟡 hypothesis）

| 指標 | 目標 | 量測方式 | 標籤 |
|---|---|---|---|
| 內部 beta 5 戶 NPS | ≥4.5/5 | W9 Day 21 訪談 / 問卷 | 🟡 hypothesis |
| 長者主動互動次數 / 天 | ≥3 次 | Sprint 4 beta 統計 | 🟡 |
| 子女 dashboard 週查看率 | ≥60% | Sprint 4 beta 統計 | 🟡 |

### §8.6 Safety 紅線指標（非常規業務指標）

| 指標 | 目標 | 量測方式 | 標籤 |
|---|---|---|---|
| Layer 2 rule-based 7 紅線攔截率 | 100% | Adversarial test ≥70 案例（safety-redlines.md §5.3）| ✅ |
| 長者「停止/暫停」指令執行率 | 100% | 端側 log | ✅ |
| 標註資料去識別化抽樣審查率 | 10% | 人工 review | ✅ |

---

## §9. Sprint 4 銜接

### §9.1 Sprint 4 範圍預告

Sprint 4（W11-W12，第 7-8 週）將進入「閉迴路測試 + PMF 量測」：

| 範疇 | Sprint 4 內容 |
|---|---|
| **閉迴路測試** | 5-10 家庭 + 1-2 機構（B2B2C Hypothesis B 試水） |
| **PMF 量測** | Sean Ellis ≥40% / Day-7 retention / 子女 NPS ≥40 / 月流失率 ≤5% |
| **bug fix sprint** | W10 中間 review → bug fix → 進入 Phase 6 Pilot |
| **Pivot trigger 評估** | decision-w6.md §4 / lean-canvas.md §4 W12 Gate 條件 |

### §9.2 W10 中間 review 工作項

| 工作 | 負責 | 時間 |
|---|---|---|
| Sprint 3 末內部 review + 內部 beta 5 戶資料 review | 全 team | W11 Day 1 |
| bug priority list（P0 / P1 / P2） | QA + Tech Lead | W10 Day 2 |
| Pivot trigger 預評估（依 decision-w6.md §4）| PM + CEO | W10 Day 3 |
| Sprint 4 啟動 kickoff | 全 team | W10 Day 5 |

### §9.3 從 Sprint 3 帶入 Sprint 4 的 deliverable

- Pro Tier 7 SHOULD feature 全部 working（規劃 + 開發完成）
- Operator 半自動 workflow + 標註資料庫已積累 ≥1,000 標註資料
- 內部 beta 5 戶資料（quality benchmark + bug log）
- safety-redlines.md §5 應變 SOP 全 5 條已測過 ≥1 次
- 緊急偵測 false positive baseline 數據（內部 beta 5 戶 ≥2 週）

---

## §10. 預算估算（📋 post-approval）

> ⚠️ **Plan-Only Mode**：以下預算為 Sprint 3 規劃估算，所有採購 / 雇用 / 雲端啟動均 📋 post-approval execution。

### §10.1 開發人力

| 項目 | 人月 | 月薪 / 人月成本 | 小計 |
|---|---|---|---|
| Backend Engineer × 3 | 6 人週 | NT$80-120 萬/年 / NT$13-17/人月 | NT$20-26 萬 |
| Mobile Engineer × 2 | 4 人週 | 同上 | NT$13-17 萬 |
| ML Engineer × 1 | 2 人週 | NT$100-150 萬/年 / NT$17-21/人月 | NT$8-11 萬 |
| Frontend Engineer × 1 | 1 人週 | NT$70-100 萬/年 / NT$12-14/人月 | NT$3-3.5 萬 |
| QA Engineer × 1 | 2 人週 | NT$60-90 萬/年 / NT$10-12/人月 | NT$5-6 萬 |
| Product Designer × 1 | 1 人週 | NT$70-110 萬/年 / NT$12-15/人月 | NT$3-3.8 萬 |
| Operator team × 2 | 2 人週 | NT$40-60 萬/年 / NT$7-10/人月 | NT$3.5-5 萬 |
| Tech Lead / PM × 1 | 2 人週 | NT$120-180 萬/年 / NT$20-25/人月 | NT$10-12.5 萬 |
| **合計（10 人月）** | **20 人週** | — | **NT$66-85 萬** |

📌 **校準**：原任務 brief 估「NT$80-100 萬 / 8-10 人週」屬樂觀；本規劃 10 人月 NT$66-85 萬，**接近原 brief 上界**。

### §10.2 雲端 API 成本（Sprint 3 兩週）

| 項目 | 單價 | 用量估算（5 戶 × 14 天）| 小計 |
|---|---|---|---|
| GPT-4o-mini（對話主幹）| USD 0.15-0.60/M token | 100K token/月/戶 × 5 戶 × 0.5 月 = 250K token | NT$50-200 |
| GPT-4o（每日 / 每週摘要） | USD 2.5-10/M token | 5K token/天/戶 × 5 戶 × 14 天 = 350K token | NT$300-1,200 |
| OpenAI embedding（RAG） | USD 0.02/M token（small）| 50K token/天/戶 × 5 戶 × 14 天 = 3.5M token | NT$2-3 |
| Google STT V2（中文 + 台語）| USD 0.024/分鐘 | 60 分鐘/天/戶 × 5 戶 × 14 天 = 4,200 分鐘 | NT$3,000 |
| Azure TTS | USD 16/M char | 10K char/天/戶 × 5 戶 × 14 天 = 700K char | NT$300 |
| 雅婷台語 ASR（fallback） | 未公開 | 約 GoogleSTT 10% | NT$300 |
| 5 戶 14 天 Sprint 3 階段合計 | — | — | **NT$4,000-5,000** |
| 推估 1,000 戶月度（Year 1 規模） | — | — | NT$50,000-100,000/月 |

📌 **校準**：原 brief 估「NT$5-8 萬」屬 Year 1 1,000 戶月度規模，Sprint 3 階段 5 戶兩週實際成本 ≤ NT$5,000；**符合預期但量級差異需釐清**。

### §10.3 子女 App 開發（Sprint 3 階段累積成本）

| 項目 | Sprint 3 階段 | 累積至 Sprint 4 |
|---|---|---|
| iOS Native（Sprint 3 重點：摘要 / 視訊 / 通知 / 趨勢 / 多帳號）| 包含於 §10.1 Mobile Engineer | NT$15-25 萬 |
| Android Native（同上）| 同上 | NT$15-25 萬 |
| Web Companion 基礎版 | NT$3-3.5 萬 | NT$3-3.5 萬 |
| WebRTC 整合 + coturn 部署 | 包含於 Backend | NT$5-8 萬 |
| App Store / Play Store 帳號 / 上架 | NT$3,000 / 年 | NT$3,000 |
| iOS Critical Alert entitlement 申請 | 工時 | 0（Sprint 4 申請）|
| **Sprint 3 階段小計** | **NT$20-30 萬** | — |
| **iOS + Android + Web Sprint 3-4 累積** | — | **NT$33-58 萬** |

📌 **校準**：原 brief 估「iOS + Android 雙平台 NT$30-50 萬」屬 Sprint 3-4 累積估算合理；Sprint 3 階段約 NT$20-30 萬。

### §10.4 視訊基礎建設

| 項目 | Sprint 3 階段 | 月度（Year 1）|
|---|---|---|
| coturn 自託管 + GCP asia-east1 GPU instance | NT$1.5-3 萬（初次部署）| NT$5,000-10,000 / 月（流量視用量）|
| TURN bandwidth 費用 | 5 戶兩週試點 ≤ NT$1,000 | NT$10,000-30,000 / 月（1,000 戶）|
| STUN server（GCP Compute Engine 小機）| NT$1,000 | NT$1,000 / 月 |
| **Sprint 3 階段** | **NT$3-5 萬** | — |

📌 **校準**：原 brief 估「視訊基礎建設 NT$5-10 萬」屬 Sprint 3 + Sprint 4 累積部署成本，符合預期。

### §10.5 硬體 / 配件採購規劃（Sprint 3 規劃，📋 採購延後）

| 項目 | 單價 | Sprint 3 試點數量（5 戶）| Sprint 3 階段 |
|---|---|---|---|
| 平板（Sprint 1-2 已採購）| NT$15,000-19,900 / 戶 | 0（Sprint 1-2 已採購）| — |
| 硬體緊急按鈕（BLE） | NT$300-600 / 顆 | 5 顆 + 備品 5 顆 = 10 顆 | NT$3,000-6,000 |
| 環境感測（option，IoT PIR） | NT$500-1,000 / 顆 | 不在 Sprint 3 必要範圍 | 0 |
| **合計** | — | — | **NT$3,000-6,000** |

📌 規劃：📋 採購延後（Sprint 3 為規格書 + UX flow 規劃）

### §10.6 法律 / 合規 / 訓練

| 項目 | 成本 |
|---|---|
| ToS 更新（RAG / 多帳號 / 視訊 / Re-consent）律師審查 | NT$5-10 萬 |
| Label Studio 部署 + 標註 SOP（內部 setup）| 包含於 §10.1 Backend Engineer |
| Operator 訓練（外聘 PDPA 講師 4hr）| NT$1-2 萬 |
| **合計** | **NT$6-12 萬** |

### §10.7 Sprint 3 總預算

| 項目 | 預算範圍 |
|---|---|
| 開發人力（10 人月） | NT$66-85 萬 |
| 雲端 API（5 戶 14 天）| NT$0.4-0.5 萬 |
| 子女 App 開發（Sprint 3 階段）| NT$20-30 萬 |
| 視訊基礎建設（部署 + Sprint 3）| NT$3-5 萬 |
| 硬體 / 配件（緊急按鈕試點）| NT$0.3-0.6 萬 |
| 法律 / 合規 / 訓練 | NT$6-12 萬 |
| **Sprint 3 兩週總計** | **NT$96-133 萬** |

📌 **校準**：原 brief 估「Sprint 3 總 2 週預算：NT$120-170 萬」；本規劃 NT$96-133 萬，**接近原 brief 下界**。差異主要在子女 App 開發累積算法（原 brief 含 Sprint 4，本規劃僅 Sprint 3 階段）。

---

## §11. Coverage Matrix

### §11.1 必涵蓋章節對映

| 任務 brief 要求 | 是否完成 | 位置 |
|---|---|---|
| §1 Sprint 3 目標 + 範圍 | ✅ | §1 |
| §2 核心對話模組（5 項：RAG / 台語 / 節日 / persona / Operator） | ✅ | §2.1-§2.5 |
| §3 緊急偵測模組（wake word + keyword / 異常互動 / 按鈕 / 通知 / 誤觸發）+ safety 紅線 + Plan-Only 強調 | ✅ | §3.1-§3.5 |
| §4 子女 App 規格（5 項：摘要 / 視訊 / 通知 / 趨勢 / 多帳號）+ iOS/Android/Web | ✅ | §4.1-§4.6 |
| §5 後台 Operator 訓練 + AI 標註 | ✅ | §2.5 + §5 |
| §6 Sprint 3 拆解（Week 4 W8 + Week 5 W9） | ✅ | §6.1-§6.3 |
| §7 風險清單 + 緩解（≥6 項，原 brief 列舉 + 補強） | ✅ 12 項 | §7 |
| §8 Sprint 3 量測指標 | ✅ | §8.1-§8.6 |
| §9 Sprint 4 銜接 | ✅ | §9.1-§9.3 |
| §10 預算估算（📋 post-approval） | ✅ | §10.1-§10.7 |
| §11 Coverage Matrix | ✅ | §11 |

### §11.2 Feature SHOULD 7 對映（feature-triage.md §7 SHOULD）

| Feature # | Feature 名稱 | Sprint 3 涵蓋章節 | Pro Tier 對映 |
|---|---|---|---|
| **F11** | 服藥提醒（朋友語氣） | Sprint 2 既有，Sprint 3 沿用（pricing.md §4.1 Tier 1 既有） | Tier 1+2 |
| **F12** | 每日 / 每週 AI 摘要推播（子女 App） | §4.1 + §6.2 W9 Day 15-17 | Tier 2 主要差異化 |
| **F05** | 節日 / 節氣主動話題 | §2.3 + §6.1 W8 Day 8-10 | Tier 2 |
| **F08** | 非影像式異常偵測（WoZ 版深化） | §3.1-§3.5 + §6.2 W9 Day 11-14 | Tier 2 |
| **F04** | 個人記憶 AI（偏好 + 家庭脈絡 RAG） | §2.1 + §6.1 W8 Day 1-3 | Tier 2 主要差異化 |
| **F03** | 台語語音識別 + 問候（基礎版） | §2.2 + §6.1 W8 Day 4-7 | Tier 2 主要差異化 |
| **F14** | 雙向視訊 / 語音（子女 push） | §4.2 + §6.2 W9 Day 15-17 | Tier 2 |

### §11.3 Pro Tier 對應（pricing.md §4.2 Tier 2 Pro NT$1,290/月）

Sprint 3 完成後，Tier 2 Pro 的 9 個差異化功能（vs Tier 1 Starter）全部就緒：
1. 多子女帳號（≤3 位）— §4.5
2. 完整台語語音識別 — §2.2
3. 個人記憶 AI（90 天 RAG）— §2.1
4. 節日 / 節氣主動話題 — §2.3
5. 每日 AI 摘要推播 — §4.1
6. 非影像式異常偵測（WoZ 版深化）— §3.2
7. 雙向視訊 / 語音 — §4.2
8. 無限對話時長 — 既有
9. 工作日電話 + Email 客服 — Sprint 4 規劃

### §11.4 Safety 紅線 condition C1-C4 對映

| condition | safety-redlines.md 位置 | Sprint 3 對映 |
|---|---|---|
| **C1** 健康問答（症狀討論需附就醫警語） | §1.2 + §2.11 | §2.1 RAG taboo_topic + 紅線守門器 + AI persona system prompt |
| **C2** 緊急偵測（false positive ≤1/週 + 3 層確認） | §1.2 + §2.11 + §5.1 | §3.2 異常互動 + §3.4 fan-out + §3.5 誤觸發 + §7 R3-01 |
| **C3** 認知遊戲（不宣稱治療失智）| §1.2 | Sprint 3 範圍外（Could-have，Sprint 4+）|
| **C4** 飲食建議（一般可，特定病情禁） | §1.2 | §2.1 RAG memory_type='health_signal' 額外加密 + 紅線守門器 |

### §11.5 個人化記憶 PDPA 加密對映

| PDPA 條文 | Sprint 3 對策章節 |
|---|---|
| §5 目的拘束 | §2.1.4 RAG 不用於模型訓練（OpenAI Enterprise DPA） |
| §6 特種個資 | §2.1.4 memory_type='health_signal' 額外加密 + 預設不過跨境 |
| §7 同意有效性 | §4.5.3 Re-consent for Feature Expansion |
| §11 資料正確 + 死亡銷毀 | §2.1.4 + safety-redlines.md §5.3 bereavement_mode |
| §15 特定目的外利用 | §2.1.4 RAG 不用於訓練 + 標註資料 opt-in |
| §21 跨境傳輸 | §2.1.4 + §7 R3-03 緩解（GCP asia-east1 + 資料最小化）|

### §11.6 Plan-Only Mode 標籤統計

| 標籤 | 估計次數 | 主要用途 |
|---|---|---|
| ✅ desk-validated | ~70 | tech stack 公開 / 法規條文 / 既有 schema |
| 🟡 hypothesis | ~50 | 召回率目標 / 延遲目標 / NPS 目標 / Sprint 4 量測項 |
| 📋 post-approval execution | ~30 | 所有採購 / 雇用 / 部署 / Pilot 啟動 |

### §11.7 卡關項目

| 卡關 | 原因 | 補強方式 |
|---|---|---|
| 雅婷台語 ASR 商業授權成本不透明 | 官方未公開 | Sprint 3 W8 前向聯發創新基地詢價 📋 |
| iOS Critical Alert entitlement 申請週期 | Apple 審查不可控 | Sprint 4 申請（Sprint 3 規劃完成）|
| YAMNet 環境聲音模型 quantize 後準確率未知 | 學術 baseline 無台灣家庭場景驗證 | Sprint 3 POC + Sprint 4 內部 beta 量測 |
| RAG 召回正確率 ≥75% 為 hypothesis | 無 ground truth | Sprint 3 末標註 200 條 ground truth benchmark |
| 跌倒偵測準確率 / false positive 不可宣稱 | 觸發 TFDA II 類認證 | 嚴守 Plan-Only 紅線 P1 + Sprint 4 假事件演習量測 |
| Web Companion 視訊發起限制（瀏覽器 WebRTC） | 技術限制 | Sprint 3 範圍：純語音 + 摘要 + email/SMS 緊急 |

---

> **文件狀態**：✅ Phase 5 T37 Sprint 3 Spec v1 完成
> **建立在**：T24 build-vs-buy + T25 mvp-type + T26 tech-architecture + T27 feature-triage + T28 safety-redlines + T30 lean-canvas + T32 pricing + T35 decision-w6
> **標籤分布**：✅ desk-validated ~70 處 / 🟡 hypothesis ~50 處 / 📋 post-approval execution ~30 處
> **Plan-Only Mode**：所有實作項目標 📋；禁稱已完成 / 已部署 / 已上線 / 已驗證
> **下一步**：T38 Sprint 4 spec（W11-W12：5-10 家庭 + 1-2 機構閉迴路測試 + PMF 量測）
