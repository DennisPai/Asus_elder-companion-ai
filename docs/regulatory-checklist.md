# Regulatory Checklist — elder-companion-ai-90day-mvp
**Phase**: PM Flow v0.1 Phase 4 T34 bonus pre-work for T43 法規 Soft Check
**Industry**: B2C 長者互動陪伴 AI（健康科技相鄰、非醫療器材定位）/ **Geo**: 台灣 only（Year 3+ 選項評估 EU/US）
**Audience**: 懷特 (COO) + 華碩 AI 代理人 / 服務型機器人主管 review 用
**Updated**: 2026-05-27

> **Plan-Only Mode 標記說明**
> - ✅ desk-validated：已有可靠 source 支撐的確定性結論
> - 🟡 hypothesis：合理推論但需後續確認
> - 📋 post-approval execution：計畫通過後才執行的步驟

---

## §1 General（所有產品均適用）

### §1.1 資料保護法規

| 法規 | Geo | 狀態 | Priority | Action | Source URL | Last Accessed |
|---|---|---|---|---|---|---|
| **台灣個資法（PDPA）2025/12 修訂版（2025/11 立法院三讀通過）** | TW | 已頒布，施行日由行政院定之（預計 2026 H1） | **critical** | ① 指定資料保護負責人（非政府機關自行決定，但建議任命）② 建立資料外洩通報機制（通報 PDPC + 當事人，參考 GDPR 72 小時標準）③ 完成跨境傳輸同意書（長者語音 + 子女書面 + 第三方見證三方同意機制）④ 在 W4 前由律師完成 DPIA（個人資料影響評估）| https://www.jonesday.com/en/insights/2025/12/taiwan-passes-major-amendments-to-the-personal-data-protection-act | 2026-05-27 |
| **台灣 PDPA §6 特種個資**（健康/醫療/生理）| TW | 現行有效（修法後維持）| **critical** | ① 長者健康對話記錄屬特種個資 ② 須明示同意書設計（非僅勾選）③ 健康資料不得對外共用（含廣告）| https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=C0030010 | 2026-05-27 |
| **個人資料保護委員會（PDPC）**（2025/8 成立）| TW | 已成立 | **critical** | ① PDPC 為新主管機關（取代各業目的事業主管機關）② 跨境傳輸限制移交 PDPC 管轄（§21）③ 諮詢 PDPC 指引（尚未全部公布）| https://www.klgates.com/New-Developments-in-the-Taiwan-Personal-Data-Protection-Act-1-13-2026 | 2026-05-27 |
| **GDPR** | EU | 不適用（台灣 only）— Year 3+ EU 擴張時觸發 | low（現在）→ critical（Year 3+）| Year 3+ 若有 EU 用戶：CMP + DSR SOP + DPA 簽署；目前無需執行 | https://gdpr.eu | 2026-05-27 |
| **CCPA / CPRA** | CA, US | 不適用（台灣 only）| low（現在）| Year 3+ 若進 US 市場再評估 | https://oag.ca.gov/privacy/ccpa | 2026-05-27 |

### §1.2 人工智慧法規

| 法規 | Geo | 狀態 | Priority | Action | Source URL | Last Accessed |
|---|---|---|---|---|---|---|
| **台灣人工智慧基本法**（2026/1/14 施行）| TW | **已生效** | **critical** | ① 法為「框架法 + 原則宣示」，直接罰則條文少；② 子法規（行政法規 / 業別法規）需 2 年內配套修法（2028/1 前）；③ 業者需自行解讀 7 項原則（永續 / 人類自主 / 隱私 / 資安 / 透明 / 公平 / 責任）對自身產品的含義；④ 跌倒偵測 / 認知狀態評估 → 確認是否落入「高風險 AI 系統」子類別（子法規公布後重新評估）⑤ 建議向 NSTC（國科會）申請 AI 監理沙盒（§19 條款）| https://www.taipeitimes.com/News/front/archives/2025/12/24/2003849407 | 2026-05-27 |
| **EU AI Act**（高風險條款）| EU | 不適用（台灣 only）；2026/8/2 高風險系統條款生效 | low（現在）→ critical（Year 3+ EU 擴張）| Year 3+ 若進 EU 市場：Health/eldercare 系統需 Conformity Assessment + CE + 高風險 AI Annex III 分類評估；2026/5/7 Digital Omnibus 延長部分高風險條款至 2027/12 | https://artificialintelligenceact.eu/implementation-timeline/ | 2026-05-27 |

### §1.3 消費者保護法規

| 法規 | Geo | 狀態 | Priority | Action | Source URL | Last Accessed |
|---|---|---|---|---|---|---|
| **消費者保護法**（消保法）| TW | 全程適用（B2C 產品）| **critical** | ① §7-1 商品服務安全責任：AI 平台若造成長者精神傷害須負責 ② §19 七日鑑賞期（訂閱制須符合）③ §22 廣告不實禁止（AI 功效宣傳不得誇大）④ §23 定型化契約（服務條款須符合消保法不得有不公平條款）| https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0170001 | 2026-05-27 |
| **公平交易法**（競爭與廣告）| TW | 全程適用 | high | ① §21 不實廣告：AI 陪伴功效宣傳 ② §22 仿冒行為（確保差異化清晰）③ §25 顯失公平行為 | https://www.ftc.gov.tw | 2026-05-27 |
| **電子商務消費者保護綱領**（經濟部）| TW | B2C 網路銷售適用 | high | ① 線上訂閱取消機制 ② 退款政策 ③ 服務中斷補償條款 | https://www.moea.gov.tw | 2026-05-27 |

### §1.4 資安法規

| 法規 | Geo | 狀態 | Priority | Action | Source URL | Last Accessed |
|---|---|---|---|---|---|---|
| **資通安全管理法**（資安法）| TW | B2C 非關鍵基礎設施，直接適用性🟡 | medium | 若與醫院 / 長照機構 B2B2C（Hypothesis B）則需符合六級資安分類；B2C DTC 先期準備 ISO 27001 即可 | https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=A0030297 | 2026-05-27 |
| **ISO 27001**（資訊安全管理系統）| Global | 非強制，但 B2B2C 機構客戶幾乎要求 | high | Year 1-2 取得；SGS / Bureau Veritas / TUV 台灣機構均可進行 | https://www.iso.org/isoiec-27001-information-security.html | 2026-05-27 |
| **ISO 27701**（隱私資訊管理，建立在 27001 上）| Global | 非強制，但對長者健康資料強力建議 | high | Year 2 與 ISO 27001 同步申請；PDPC 合規加分項 | https://www.iso.org/standard/71670.html | 2026-05-27 |

---

## §2 Industry-Specific：長者陪伴 AI × 健康科技相鄰

### §2.1 台灣 TFDA（醫療器材 / SaMD）— 最高風險項目

| 法規 / 認證 | Geo | Priority | 觸發條件 | Action | Source URL | Last Accessed |
|---|---|---|---|---|---|---|
| **TFDA 醫療器材法（Medical Devices Act）** | TW | **critical（Year 2-3）**；90 天 MVP 主動迴避 | 若宣稱跌倒偵測準確率 / 認知退化評估 / 健康異常診斷 → 觸發 Class II SaMD | 90 天 MVP：Layer 2 rule-based 守門器確保不宣稱醫療功效（problem-framing.md §3.1 N1-N3）；Year 2 開始 Pre-submission 諮詢 TFDA | https://meddeviceguide.com/blog/taiwan-tfda-medical-device-registration-guide | 2026-05-27 |
| **TFDA Class I SaMD**（低風險）| TW | high（Year 1 邊界確認）| 健康資料儲存 / 顯示（無診斷）| Class I：Timeline 2-3 個月，費用 NT$15,000 | https://cisema.com/en/taiwan-fda-updates-ai-medical-device-technical-guidelines/ | 2026-05-27 |
| **TFDA Class II SaMD**（中風險）| TW | critical（Year 2-3 目標）| 電腦輔助偵測（CADe）/ 輔助診斷（CADx）— AI/ML 型 | Class II：Timeline 8-12 個月（含 QSD 審查），費用 NT$58,000-60,000 + 顧問費估計全程 NT$50-150 萬；需 ISO 14971（風險管理）前置 | https://iclg.com/practice-areas/digital-health-laws-and-regulations/taiwan | 2026-05-27 |
| **TFDA Class III SaMD**（高風險）| TW | 暫不觸發（明確迴避）| 自動診斷 / 取代醫師判斷 | 明確禁止（problem-framing.md §3.1 N1 N2 N3 紅線）| https://www.tfda.gov.tw | 2026-05-27 |
| **ISO 14971**（醫療器材風險管理）| Global | high（TFDA II 申請前置條件）| TFDA II SaMD 申請必備 | Year 2 在 TFDA II Pre-submission 前完成 ISO 14971 風險管理文件體系 | https://www.iso.org/standard/72704.html | 2026-05-27 |

### §2.2 台灣 BSMI + NCC — 硬體形態決定是否觸發

| 法規 / 認證 | Geo | Priority | 觸發條件 | Action | Source URL | Last Accessed |
|---|---|---|---|---|---|---|
| **BSMI 商品安全標誌**（電氣電子產品）| TW | **critical（Year 1）**；90 天 MVP 主動迴避 | 自製或客製化硬體（台灣 ODM 代工路徑 B）→ 必須取得 BSMI；90 天 MVP 採市售平板（WoZ 形態）→ **零 BSMI 風險** | Year 1 台灣 ODM：RPC（Registration of Product Certification）或 TABI 方案；時程 3-6 個月；費用 NT$30-100 萬 | https://www.bsmi.gov.tw/wSite/lp?ctNode=8318&CtUnit=2256&mp=1 | 2026-05-27 |
| **NCC 無線模組型式認證**（Wi-Fi / Bluetooth）| TW | **critical（Year 1）** — 若 ODM 自製硬體含無線模組 | 自製硬體含無線模組 → 必須取得 NCC；90 天 MVP 用市售平板（已有 NCC）→ **零 NCC 風險** | Year 1 ODM：8-12 週取得；費用估計 NT$20-50 萬（含本地測試）| https://micomlabs.com/taiwan-type-approval-ncc-certification/ | 2026-05-27 |
| **CNS 15630 家用服務機器人安全**（國家標準）| TW | medium — 僅在加入 SLAM 自主移動功能後觸發 | 若未來加入自主移動底盤（Year 3+）→ CNS 15630 + ISO 13482 雙重適用 | 90 天 MVP 及 Year 1-2：靜置平板形態，**不觸發** | https://www.bsmi.gov.tw | 2026-05-27 |

### §2.3 台灣長照 3.0 智慧輔具補貼 — 最重要補貼路徑

| 項目 | Geo | Priority | 條件 | Action | Source URL | Last Accessed |
|---|---|---|---|---|---|---|
| **長照 3.0 智慧科技輔具租賃補助**（每 3 年 NT$6 萬）| TW | **critical（Year 1）** — 最重要商業路徑之一 | 2026/7/1 正式上路；涵蓋安全看視 / 離床偵測 / 照顧床等 5 大類；需列入衛福部核可輔具名單 | ① 申請列入輔具補助名單（衛福部社家署）② 通路建立（1966 長照專線評估機制配合）③ 每 3 年 NT$6 萬額度 = 月租約 NT$1,667/月，B2B2C Hypothesis B 政府買單金額估算 | https://www.ez66.com.tw/pages/assistive-device-subsidy-guide-taiwan | 2026-05-27 |
| **1966 長照專線評估機制**（照管專員系統）| TW | high | 機構通路（Hypothesis B）必須對接 | 照管專員評估核定後才能進行服務；需培訓照管專員介紹本產品 | https://www.mohw.gov.tw | 2026-05-27 |

### §2.4 ISO 13482 個人照護機器人安全（長照機構 B2B 強力要求）

| 認證 | Geo | Priority | 條件 | Action | Source URL | Last Accessed |
|---|---|---|---|---|---|---|
| **ISO 13482:2014 / ISO/FDIS 13482**（個人照護機器人安全）| Global | high（Year 2）；B2B 機構通路幾乎必備 | 與長照機構 / 護理之家 / 醫院簽約（Hypothesis B）強力要求；ISO/FDIS 13482（更新版）預計近期取代 2014 版 | Year 2 與 ISO 27001 同期申請；認證機構：SGS TW / TUV Taiwan / Bureau Veritas | https://www.iso.org/standard/83498.html | 2026-05-27 |

---

## §3 Cross-cutting Compliance

### §3.1 資料在地化（Data Localization）

| 情境 | 要求 | 合規路徑 | Priority |
|---|---|---|---|
| 台灣用戶資料 → 境外（GCP asia-east1 台灣節點以外）| PDPA §21（2025 修法後移交 PDPC 管轄）：境外傳輸需告知 + 取得同意 + PDPC 核可機制（子法未定）🟡 | ① GCP asia-east1 台灣彰化節點做資料主儲（tech-architecture.md §4.1 確認）② 原始語音永不出境（Layer 2 端側處理）③ 對話文字摘要如需跨境：三方同意機制 + 跨境傳輸同意書 | **critical** |
| 台灣用戶資料 → 中國大陸 | 絕對禁止（PDPA §21 明訂特定地區限制；衛福部已另有藥商跨境至中港澳限制令為參照）| 架構不得對接中國節點；AI 模型不得透過香港節點中轉至中國 | **critical（blocker）** |
| EU 用戶資料 → Taiwan（Year 3+）| 台灣尚無 GDPR 充分性決定（adequacy decision），申請中 | Year 3+ 進 EU 前簽署 SCCs（標準契約條款）+ Transfer Impact Assessment（TIA）| low（現在）→ critical（Year 3+）|

### §3.2 保險建議

| 險種 | 建議金額 | Priority | 備註 |
|---|---|---|---|
| 產品責任險（Product Liability）| 最低 NT$3,000 萬 | high | AI 建議造成長者行為後果（如藥物服用建議 → 傷害）；B2B 機構通路簽約必要求 |
| 專業責任險（Professional Liability / E&O）| NT$1,000-3,000 萬 | high | SaaS 軟體錯誤導致服務中斷 / 資料外洩 |
| 網路安全責任險（Cyber Liability）| 最低 USD $1M（NT$3,200 萬）| high | 長者健康資料屬特種個資，外洩後罰則 + 賠償金額高 |

### §3.3 稅務

| 項目 | 規定 | Priority | Action |
|---|---|---|---|
| 台灣電子服務銷售稅（B2C 線上訂閱）| 依加值稅法（VAT 5%）| high | 訂閱平台需設計含稅發票機制 |
| 長照補貼收入稅務性質 | 衛福部補助款性質待確認 🟡 | medium | 諮詢稅務顧問 |
| 跨境電商（Year 3+）| EU VAT / US Sales Tax 各州規定不同 | low（現在）| Year 3+ 再評估 |

---

## §4 Compliance Roadmap（12-week + Year 1-3）

| 時程 | Action | Priority | Owner |
|---|---|---|---|
| **W0-2（現在）** | regulatory-checklist.md 完成 ✅ | — | regulatory-mapper |
| **W3-4** | ① DPIA（個人資料影響評估）委外律師起草（理慈 / 萬國 / 普華）② 三方同意機制（長者語音 + 子女書面 + 第三方見證）設計定稿 | critical | legal counsel + PM |
| **W4-5** | ① 服務條款（ToS）草稿 ② 隱私政策草稿（含特種個資處理聲明）③ 資料外洩通報 SOP（PDPC 通報 + 當事人通知）| critical | legal counsel external |
| **W5-6** | ① Layer 2 rule-based 7 條 LLM 絕對紅線實作（safety-redlines.md §4.1）② 跨境傳輸技術管控（原始語音端側不出境）| critical | engineering |
| **W7-10** | ToS / 隱私政策上線測試版；公平性稽核（Fairness Audit）初版 | high | engineering + legal |
| **W11** | PDPA 合規自評（Compliance Baseline）| high | sub-agent + legal |
| **W12** | Compliance Baseline 最終確認 → 主管 review 規劃書 ready | — | main + legal |
| **Year 1 H1** | ① BSMI + NCC 認證啟動（硬體 ODM）② ISO 27001 審查啟動 ③ 長照 3.0 輔具名單申請（2026/7/1 上路後）| critical | 專案負責人 |
| **Year 1 H2** | ① BSMI / NCC 認證取得 ② ISO 27001 / 27701 取得 ③ 長照 3.0 補貼第一批驗收 | critical | 專案負責人 |
| **Year 2** | ① ISO 13482 申請啟動 ② TFDA II Pre-submission 諮詢（含 ISO 14971 文件體系）③ ISO 27001 年度稽核 | critical | 專案負責人 |
| **Year 3+** | ① TFDA II 取得（8-12 個月審查）② 長照健保給付談判 ③ 保險 PMPM 合作（Hypothesis C）④ 評估 EU AI Act Conformity Assessment（若擴張 EU）| critical | 專案負責人 + 法律顧問 |

---

## §5 各假設（Hypothesis）合規影響矩陣

| Hypothesis | 核心商業模式 | Additional Compliance | Blocker | 備註 |
|---|---|---|---|---|
| **Hypothesis A**（B2C DTC 主軸）| 直接對子女訂閱 | PDPA + AI 基本法 + 消保法（訂閱制） | 無 blocker（90 天 MVP 可行）| 最低合規成本路徑 ✅ |
| **Hypothesis B**（B2B2C 機構）| 長照機構 / 醫院採購 | **加 ISO 13482 + ISO 27001（幾乎必要）**；資安法六級可能觸發；長照 3.0 名單申請 | ISO 13482（Year 2 取得前 B2B 簽約受限）| 合規成本高但補貼優勢大 🟡 |
| **Hypothesis C**（保險 PMPM）| 健康險 PMPM 給付 | **TFDA II 為前置必要條件**；保險法 + 金管會保險局規範；健康資料商業利用限制 | **TFDA II**（Year 3 前 Hypothesis C 無法啟動）| 最高合規門檻，Year 3+ 才觸發 📋 |
| **Hypothesis D**（Freemium App）| App 免費下載 + 升級訂閱 | PDPA App 隱私政策 + Google Play Store / Apple App Store 特種個資政策；消保法七日鑑賞期 | 無 blocker | 最簡單合規路徑，但與 Hypothesis A 大量重疊 ✅ |

---

## §6 卡關與高度不確定性項目

| 項目 | 不確定性來源 | 影響範圍 | 建議行動 | Priority |
|---|---|---|---|---|
| **AI 基本法子法規尚未公布**（2028/1 前才完成配套）| 高風險 AI 系統定義、業別配套法規內容未定 | 全產品線（尤其跌倒偵測 / 認知評估功能）| 向 NSTC 申請 AI 監理沙盒；定期追蹤 NSTC 公告 | **critical** |
| **PDPA 施行日尚未定（由行政院公告）**| 2025/12 修訂版（2025/11 立法院三讀通過）已頒布但施行日未定 | PDPA 合規時程安排 | 按最保守估計（2026 H1 生效）準備；W4 前完成 DPIA | **critical** |
| **長照 3.0 輔具名單申請 SOP 不透明** | 衛福部未公布完整申請流程；2026/7/1 上路後細節才明朗 | Hypothesis B 補貼收入模型 | 直接聯繫衛福部社家署諮詢；委託理慈 / 萬國律師事務所代為詢問 | high |
| **TFDA II「功能宣稱」觸發門檻灰色地帶** | 跌倒偵測宣稱「X% 準確率」→ 是否觸發 Class II SaMD？ | MVP 功能定義、行銷用語 | ① Layer 2 rule-based 守門器確保不宣稱準確率（problem-framing.md §3.1 N1）② Year 2 啟動前先提 Pre-submission 諮詢 TFDA | high |
| **119 緊急派遣 API 整合法規框架** | 台灣目前無公開的 119 系統 API 規範 | 緊急通報功能（safety-redlines.md §3.5）| 探索與台北市消防局 / 縣市政府合作備忘錄路徑；短期以電話撥打代替 API | medium |

---

## §7 外部法律 / 認證資源

### §7.1 法律顧問（推薦）

| 機構 | 專長 | 建議用途 | 備註 |
|---|---|---|---|
| **理慈國際科技法律事務所（Lexcel）**| 科技 / 個資 / PDPA | DPIA 草稿 + 三方同意機制設計 + AI 基本法解讀 | tech-architecture.md §6.1 推薦 |
| **萬國法律事務所（Formosa Transnational）**| 醫療法 / TFDA / 生技 | TFDA SaMD 分類諮詢 + 醫療法 §103-1 邊界確認 | tech-architecture.md §6.1 推薦 |
| **資誠聯合會計師事務所（PricewaterhouseCoopers TW）**| 企業合規 / 資料保護 / ISO | ISO 27001 / 27701 輔導 + 長照補貼稅務 | tech-architecture.md §6.1 推薦 |

### §7.2 政府監管機關（聯繫窗口）

| 機關 | 管轄範圍 | 聯繫目的 |
|---|---|---|
| **個人資料保護委員會（PDPC）**| PDPA 全面執法（2025/8 成立）| DPIA 提交 + 跨境傳輸諮詢 |
| **衛生福利部食藥署（TFDA）**| 醫療器材 / SaMD 分類 | Class II Pre-submission 諮詢；功能宣稱灰色地帶確認 |
| **衛生福利部社家署**| 長照 3.0 輔具補助 | 輔具名單申請 SOP 諮詢 |
| **經濟部標準檢驗局（BSMI）**| 商品安全認證 | 硬體 ODM RPC 申請諮詢 |
| **國家通訊傳播委員會（NCC）**| 無線模組型式認證 | Wi-Fi / Bluetooth 模組認證 |
| **國家科學及技術委員會（NSTC）**| AI 基本法主管機關 | AI 監理沙盒申請 + 子法規進度追蹤 |

### §7.3 認證機構（ISO / BSMI / NCC）

| 機構 | 可提供認證 | 備註 |
|---|---|---|
| **SGS 台灣**（台灣檢驗科技）| ISO 27001 / ISO 27701 / ISO 13482 / BSMI | 台灣最大認證機構，長照 / 醫療相關有經驗 |
| **Bureau Veritas 必維國際**| ISO 27001 / ISO 13482 | 機器人安全認證有台灣辦公室 |
| **TÜV Rheinland 德國萊茵**| ISO 13482 / NCC / CE Mark | 服務型機器人 ISO 13482 具國際聲譽 |

### §7.4 研究機構（法規諮詢 + 技術評估）

| 機構 | 相關性 |
|---|---|
| **工業技術研究院（ITRI）**| 台灣智慧輔具技術開發 + 法規諮詢；長照 3.0 技術評估合作夥伴 |
| **資訊工業策進會（IIIT / 資策會）**| 個資法 / AI 治理研究；PDPA 合規輔導服務 |
| **台灣長照推進協會（Ankecare 等）**| 長照機構通路 + 輔具市場現況 |

---

## §8 風險清單（合規面）

| # | 風險 | 機率 | 衝擊 | 緩解措施 | Priority |
|---|---|---|---|---|---|
| R1 | AI 基本法子法規將長者 AI 系統列為「高風險」，觸發強制合規要求 | 中（30-50%）| 高（可能延遲上市 6-12 個月）| 申請監理沙盒 + 建立可解釋性文件 + 提早與 NSTC 諮詢 | **critical** |
| R2 | PDPA 施行後 PDPC 對「對話摘要跨境傳輸」進行限制解釋 | 中（25-40%）| 高（需重架資料流）| 技術上選擇 GCP asia-east1 台灣節點主儲；預備「全端側處理」備案 | **critical** |
| R3 | TFDA 認定跌倒偵測/認知評估宣傳用語觸發 Class II SaMD | 中低（20-30%）| 高（需重新走 TFDA 流程）| Layer 2 嚴格守門器；行銷用語白名單 / 黑名單；Pre-submission 諮詢 | high |
| R4 | 長照 3.0 輔具名單申請流程複雜，Year 1 無法如期入選 | 中（30-40%）| 中（Hypothesis B 補貼收入延遲）| 提早 6 個月接觸衛福部社家署；準備備案（自費通路）| high |
| R5 | ISO 13482 更新版（ISO/FDIS 13482）取代 2014 版，要求升高 | 中（ISO 正在更新中）| 中（Year 2 認證計劃需調整）| 追蹤 ISO TC299 公告；Year 2 認證機構確認新版時程 | medium |
| R6 | EU AI Act 高風險 Annex III 擴大詮釋，Year 3+ EU 擴張成本增加 | 中（2026/8 生效）| 中低（影響 Year 3+ 計畫）| 保持觀察；Year 3 前重新評估 EU 進入策略 | low（現在）|
| R7 | 消保法長者定型化契約新制出現，需重新設計合約 | 低（20%）| 低中（修合約成本）| 律師定期追蹤消保法修法 | medium |
| R8 | 資料外洩事件（長者健康資料屬特種個資）導致 PDPC 高額罰鍰 | 低（但後果嚴重）| 極高（罰鍰 + 信譽損失）| ISO 27001 + Cyber Liability Insurance + 資料外洩演練 SOP | high |

---

## §9 Coverage Matrix — 認證 × Hypothesis

| 認證 / 法規 | Hyp A (B2C DTC) | Hyp B (B2B2C 機構) | Hyp C (保險 PMPM) | Hyp D (Freemium App) | 90-day MVP | Year 1 | Year 2 | Year 3+ |
|---|---|---|---|---|---|---|---|---|
| 台灣 PDPA（含 2025 修法）| ●必要 | ●必要 | ●必要 | ●必要 | ●啟動 W4 | ●完成 | ●維護 | ●維護 |
| 消費者保護法 | ●必要 | ◐部分 | ◐部分 | ●必要 | ●全程 | ●全程 | ●全程 | ●全程 |
| AI 基本法（2026/1）| ●必要 | ●必要 | ●必要 | ●必要 | ●啟動追蹤 | ●子法規關注 | ●子法規確認 | ●全面合規 |
| BSMI 商品安全 | ○不觸發 | ●必要 | ●必要 | ○不觸發 | ○豁免 | ●申請 | ●取得 | ●維護 |
| NCC 無線型式認證 | ○不觸發 | ●必要 | ●必要 | ○不觸發 | ○豁免 | ●申請 | ●取得 | ●維護 |
| 長照 3.0 輔具名單 | ◐加分 | ●必要 | ◐部分 | ◐加分 | ○不適用 | ●申請 | ●取得 | ●維護 |
| ISO 27001 | ◐建議 | ●必要 | ●必要 | ◐建議 | ○不適用 | ●申請 | ●取得 | ●維護 |
| ISO 27701 | ◐建議 | ●必要 | ●必要 | ◐建議 | ○不適用 | ○不適用 | ●取得 | ●維護 |
| ISO 13482 | ○不適用 | ●必要 | ●必要 | ○不適用 | ○不適用 | ○不適用 | ●申請 | ●取得 |
| TFDA Class I SaMD | ◐邊界確認 | ◐邊界確認 | ◐邊界確認 | ◐邊界確認 | ○主動迴避 | ●確認邊界 | ◐視功能 | ◐視功能 |
| TFDA Class II SaMD | ○不適用 | ◐長期目標 | ●必要 | ○不適用 | ○主動迴避 | ○不適用 | ●Pre-sub | ●取得 |
| ISO 14971（風管）| ○不適用 | ◐長期目標 | ●必要 | ○不適用 | ○不適用 | ○不適用 | ●建立文件體系 | ●取得 |
| 產品 / 網路安全險 | ●建議 | ●必要 | ●必要 | ●建議 | ●盡早投保 | ●投保 | ●維護 | ●維護 |
| EU AI Act | ○不適用 | ○不適用 | ○不適用 | ○不適用 | ○不適用 | ○不適用 | ○不適用 | ◐Year 3+ EU 評估 |

> 圖例：● 必要 / 必須完成；◐ 建議或條件觸發；○ 不適用或主動迴避

---

## Sources

- **台灣 PDPA 2025 修法（Jones Day）**: https://www.jonesday.com/en/insights/2025/12/taiwan-passes-major-amendments-to-the-personal-data-protection-act
- **台灣 PDPA 修法（K&L Gates 2026/1）**: https://www.klgates.com/New-Developments-in-the-Taiwan-Personal-Data-Protection-Act-1-13-2026
- **台灣 PDPA 修法（Baker McKenzie）**: https://www.globalcompliancenews.com/2025/11/12/https-insightplus-bakermckenzie-com-bm-investigations-compliance-ethics-taiwan-amendment-to-personal-data-protection-act_10292025/
- **台灣 AI 基本法通過（Taipei Times 2025/12）**: https://www.taipeitimes.com/News/front/archives/2025/12/24/2003849407
- **台灣 AI 基本法 Library of Congress 分析**: https://www.loc.gov/item/global-legal-monitor/2026-05-07/taiwan-new-law-establishes-basic-framework-on-artificial-intelligence
- **台灣 AI 基本法（台灣人工智慧學校）**: https://aiacademy.tw/news-ai-fundamental-act-futurecity/
- **EU AI Act Implementation Timeline**: https://artificialintelligenceact.eu/implementation-timeline/
- **EU AI Act 2026 Updates（Legal Nodes）**: https://www.legalnodes.com/article/eu-ai-act-2026-updates-compliance-requirements-and-business-risks
- **BSMI 官方商品檢驗**: https://www.bsmi.gov.tw/wSite/lp?ctNode=8318&CtUnit=2256&mp=1
- **BSMI Certification 概述（TUV SUD）**: https://www.tuvsud.com/en-us/services/product-certification/bsmi
- **NCC 無線型式認證（MiCOM Labs 2026）**: https://micomlabs.com/taiwan-type-approval-ncc-certification/
- **NCC Certification（TUV Rheinland）**: https://www.tuv.com/world/en/ncc-certification.html
- **TFDA SaMD 醫療器材登錄指南（MedDeviceGuide 2026）**: https://meddeviceguide.com/blog/taiwan-tfda-medical-device-registration-guide
- **TFDA AI 醫療器材技術指引（Cisema 2025/8）**: https://cisema.com/en/taiwan-fda-updates-ai-medical-device-technical-guidelines/
- **Taiwan Digital Health Laws 2026（ICLG）**: https://iclg.com/practice-areas/digital-health-laws-and-regulations/taiwan
- **長照 3.0 智慧輔具補助 2026**: https://www.ez66.com.tw/pages/assistive-device-subsidy-guide-taiwan
- **長照補助全攻略 2026**: https://www.nursing.com.tw/%E9%95%B7%E7%85%A7%E8%A3%9C%E5%8A%A9/
- **ISO 13482:2014（個人照護機器人安全）**: https://www.iso.org/standard/53820.html
- **ISO/FDIS 13482（更新版）**: https://www.iso.org/standard/83498.html
- **ISO 27001**: https://www.iso.org/isoiec-27001-information-security.html
- **ISO 27701**: https://www.iso.org/standard/71670.html
- **ISO 14971（醫療器材風險管理）**: https://www.iso.org/standard/72704.html
- **台灣 GDPR 充分性決定進度**: https://www.hungyichen.com/en/insights/data-cross-border
- **台灣 Data Protection Laws 2025-2026（ICLG）**: https://iclg.com/practice-areas/data-protection-laws-and-regulations/taiwan
- **消費者保護法（全國法規資料庫）**: https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0170001
- **PDPA 全文（全國法規資料庫）**: https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=C0030010
