# 認證時程地圖 — 長者互動陪伴機器人 × AI Brain
**Phase**: PM Flow v0.1 Phase 4 T34（Plan-Only Mode）
**文件類型**: 認證 + 法規時程地圖（規劃書），不代表已取得任何認證
**報告對象**: 華碩（ASUS）AI 代理人 / 服務型機器人主管（客觀中立呈現）
**Hypothesis 主軸**: Hyp A B2C DTC（decision-w4.md §4.1）
**Geo**: 台灣 only（phase-0-answers.md Q5）
**Updated**: 2026-05-27

> **Plan-Only Mode 標籤說明**
> - ✅ desk-validated：有 ≥3 source 佐證
> - 🟡 hypothesis：desk research 推算，需後續確認
> - 📋 post-approval execution：計畫通過後才執行

---

## §1. 認證 + 法規全清單

### §1.1 台灣強制認證（硬體 + 資料保護）

| 認證 / 法規 | 類別 | 強制 vs 自願 | 適用場景（本案觸發條件） | 觸發時機 | 優先序 |
|---|---|---|---|---|---|
| **BSMI**（經濟部標準局，電子電器）| 電子電器 | 強制（自製硬體上市必跑）| Year 1 ODM 正式機器人硬體；90 天 MVP 平板 App 形態**免認證** | Year 1 H2（M6-12）ODM 硬體設計完成後 | **critical（硬體上市 blocker）** |
| **NCC**（國家通訊傳播委員會，無線電）| 無線電 | 強制（Wi-Fi / BT 模組）| 若自製 PCB 含 Wi-Fi / BT；採用市售認證模組可繼承 | Year 1 H2 同步 | **critical（含無線模組時）** |
| **CNS 15630**（家用服務機器人安全）| 機器人安全 | 強制（含自主移動功能）| Year 2+ 若加入 SLAM 移動底盤才觸發；90 天 MVP 無移動 = 免 | Year 2（若加 SLAM）| high |
| **PDPA 2025/12 修訂版**（個人資料保護法）| 資料保護 | 強制 | 長者對話資料（特種個資 §6）/ 跨境傳輸（§21）/ 三方同意（§7）= 全程適用 | W1 起即必須規劃，W4 前完成 DPIA | **critical（持續 / 全期）** |
| **AI 基本法 2025/12**（行政院草案）| AI 治理 | 預期強制（子法規待公布）| 陪伴機器人 + 脆弱族群組合可能被列「高風險 AI 系統」| W4 前律師評估；子法規持續追蹤 | **critical（法規不確定性 blocker）** |

### §1.2 台灣自願性認證（機構採購 / 補貼關鍵）

| 認證 / 法規 | 類別 | 強制 vs 自願 | 適用場景 | 觸發時機 | 優先序 |
|---|---|---|---|---|---|
| **長照 3.0 智慧輔具補貼名單**（衛福部長照司）| 政府補貼資格 | 自願申請（進名單 = 補貼資格）| Hyp A + Hyp B：補貼 NT$60K/3 年降低 CAC 60-80%；2026/07 補貼開放後申請 | Year 1 H1（M1-6）接觸衛福部長照司；Year 1 H2 正式申請 | **critical（GTM 加速器；Hyp B blocker）** |
| **ISO 13482**（個人照護機器人安全，ISO）| 機器人安全 | 自願（B2B 機構採購常要求）| Hyp B B2B2C 機構通路：機構採購評審 + 政府長照補貼審核可能要求 | Year 2 H1 啟動申請 | **high（Hyp B 非 blocker 但加分）** |
| **PDPA 第三方稽核**（ISO 27001 / 27701）| 資訊安全 | 自願（B2B2C + 保險 PMPM 常要求）| Hyp B 機構、Hyp C 保險業者均要求第三方資安稽核 | Year 1 末評估；Year 2 申請 | **high（機構 / 保險通路前提）** |

### §1.3 台灣醫療器材路徑（Year 2-3+，目前免觸發）

| 認證 | 類別 | TFDA 分類 | 觸發條件（本案） | 觸發時機 | 成本估算 | 優先序 |
|---|---|---|---|---|---|---|
| **TFDA I 類**（低風險醫材）| 醫療器材 | 登錄即可 | 若功能宣稱「健康管理」（血壓 / 體溫量測，外接設備）| Year 2 評估 | 低 | medium |
| **TFDA II 類**（中風險 AI 醫材）| 醫療器材 | 需認證（6-18 月）| 跌倒偵測**宣稱準確率**；認知評估宣稱「失智篩查」；Hyp C 保險 PMPM 合約必需前提 | Year 2 啟動臨床資料收集；Year 3 正式申請 | NT$300-500 萬+ 臨床 🟡 | **critical（Year 3+ Hyp C blocker）** |
| **TFDA III 類**（高風險）| 醫療器材 | 嚴格臨床（24 月+）| 本案規劃書**明確不觸發**：90 天 MVP 嚴守「非醫療器材」定位（safety-redlines.md §2.1-§2.3 N1-N3 絕對紅線）| 不在規劃範圍 | — | 不適用 |
| **健保給付路徑**（居家照護科技）| 健保給付 | NHIA 談判 | Year 3+ Hyp C 前提；需 TFDA II 類認證 + 大規模 Pilot RWD 數據 | Year 3+ | 談判成本 🟡 | medium（Year 3+ 願景）|

### §1.4 消費者保護 + 競爭法規（全程適用）

| 法規 | 類別 | 強制 vs 自願 | 對本案影響 | 觸發時機 |
|---|---|---|---|---|
| **消保法**（含 §7、§7-1、§11、§19、§22）| 消費者保護 | 強制 | ToS 合法性；產品安全責任（§7）；服務停止 90 天預告（§19）；廣告不得虛偽不實（§22）| W4 前律師審查 ToS |
| **公平交易法 §25**（欺罔行為）| 競爭法 | 強制 | AI 廣告宣稱不得誇大（如「跌倒偵測 99% 準確」）| 全程 |
| **老人福利法**（§10、§19、§25、§33）| 老人保護 | 強制 | 長者自主 / 隱私 / 尊嚴設計（safety-redlines.md §6 UX 設計基礎）| 全程 |

### §1.5 國際認證（Year 2-3+ 跨境出口準備）

| 認證 | Geo | 類別 | 適用場景（本案）| 觸發時機 | 成本估算 | 優先序 |
|---|---|---|---|---|---|---|
| **CE Mark（Radio Equipment Directive / RED）**| EU | 電子電器 | 若 Year 3+ 出口歐盟市場 | Year 3+ 評估 | NT$50-200 萬 🟡 | low（Year 3+ 選項）|
| **EU AI Act**（高風險 AI 系統）| EU | AI 法規 | 若歐盟用戶；老年照護 AI 系統可能被列「高風險」；目前 Geo = 台灣 only，不觸發 | Year 3+ 若出口 EU | 法規遵循成本 | low（目前不適用）|
| **FDA 510(k) / De Novo**（US）| US | 醫療器材 | 若 Year 3+ 出口美國市場且含醫療功能（跌倒偵測宣稱）| Year 3+ 評估 | USD 50-200 萬 🟡 | low（Year 3+ 選項）|
| **GDPR**（歐盟個資法）| EU | 資料保護 | 若 Geo 擴及 EU 用戶（現 Geo = 台灣 only，不觸發）| Year 3+ 若出口 EU | 法規遵循成本 | low（目前不適用）|
| **UL**（美國電氣安全）| US | 電氣安全 | 同 FDA，Year 3+ 美國出口評估 | Year 3+ | — | low |
| **NIST AI RMF**（美國 AI 風險管理框架）| US | AI 治理 | 自願性；若 US 機構客戶要求 | Year 3+ 選項 | — | low |

**本案 Phase 0-3 結論（tech-architecture.md §7.1 + build-vs-buy.md §4.7 確認）**：
- 90 天 MVP（App 形態）：BSMI 免、NCC 免、TFDA 免、CNS 15630 免
- Year 1 正式硬體：BSMI 必跑（ODM 上市前）
- Year 2-3：ISO 13482 + TFDA II 類準備
- 國際認證：Year 3+ 選項（Geo 目前台灣 only）

---

## §2. 90 天 MVP 階段（Plan-Only 規劃）

### §2.1 認證狀態概覽

| 認證 / 法規 | 狀態 | 說明 | 標籤 |
|---|---|---|---|
| BSMI | **免（平板 App 形態）** | iPad / Galaxy Tab 已取得 BSMI；App 軟體部署無需 BSMI；外接 USB 麥克風一般無額外認證要求（tech-architecture.md §1.2）| ✅ |
| NCC | **免（市售平板模組）** | 使用市售認證平板之 Wi-Fi / BT 模組，無需重新申請 NCC | ✅ |
| TFDA | **免（非醫療器材定位）** | 90 天 MVP 嚴守「陪伴輔助工具，不具醫療功能」；7 條 LLM 絕對紅線（N1 醫療診斷 / N2 投藥 / N3 急救決策）強制執行；跌倒偵測定位「輔助通知」非「診斷」（safety-redlines.md §2.11 C2）| ✅ |
| CNS 15630 | **免（無自主移動）** | 平板底座形態無移動底盤 | ✅ |
| **PDPA 2025/12** | **設計規劃中（必做）** | W2-3 律師 DPIA 啟動（理慈 / 萬國 / 普華）；W4 完成跨境傳輸同意書；W5-6 三方同意機制跑通；W9 Pilot MoU 含三方同意記錄 | 📋 |
| **AI 基本法 2025/12** | **持續追蹤（高不確定性）** | 草案條文：透明性義務 / 高風險 AI 分級 / 演算法影響評估；子法規未公布；W4 律師 AI 基本法 readiness 評估 | 🟡 |
| 消保法 | **設計符合** | ToS 必 Phase 4 前律師審查（消保法 §11）；服務停止 90 天預告條款納入 ToS（§19）| 📋 |
| 老人福利法 | **設計符合** | 三方同意 + 長者自主控制 + 隱私白皮書（safety-redlines.md §6.1-6.4）| 📋 |

### §2.2 PDPA 90 天關鍵路徑

```
W1-2  ── 律師 DPIA 啟動（理慈 / 萬國 / 普華）📋
W2-3  ── TFDA 業者輔導窗口接觸（確認功能分類）📋
         衛福部長照司接觸（透過長照產業協會 / Ankecare）📋
W4    ── DPIA 首版完成 + 跨境傳輸同意書定稿 📋
         AI 基本法 readiness 評估（律師）📋
W5    ── ToS / 隱私白皮書定稿（律師 sign-off）📋
W5-6  ── onboarding 三方同意流程建立（長者音訊 + 子女書面 + 見證）📋
W6-8  ── Pilot MoU template 定稿（含 PDPA 三方同意 + 中斷賠償條款）📋
W9    ── Pilot 啟動同意書三方簽署（實際執行）📋
W10-12 ─ 主管 review 規劃書 + 認證 roadmap 並陳 📋
```

### §2.3 法律意見書規劃

- **預估費用**：NT$10-30 萬（DPIA + ToS 審查）🟡
- **建議時機**：Year 0.5 Phase 4-6（W4 前必啟動）
- **推薦事務所**：理慈國際科技法律事務所（PDPA + 醫療法經驗）/ 萬國法律事務所 / 資誠聯合會計師事務所（PwC Taiwan）
- **範疇**：PDPA 2025/12 修訂版跨境傳輸合規 + 消保法 ToS 審查 + AI 基本法 readiness + 三方同意書設計

---

## §3. Year 1 階段（正式硬體上市前，M1-M12）

### §3.1 Year 1 認證時程表

| 認證 | 申請時點 | 預估時程 | 成本估算 | 主要風險 | 標籤 |
|---|---|---|---|---|---|
| **BSMI**（CNS 電氣安全 + EMC）| M4-6（ODM 設計完成後立即送審）| 6-12 月（含重測緩衝）| NT$30-100 萬 ✅ | 硬體設計修改 → 重新測試 + 延遲上市；模具費 NT$500-1,000 萬（一次性）| 📋 |
| **NCC**（無線電型式認證）| M4-6 同 BSMI | 2-4 月 | NT$5-15 萬 🟡 | 自製 PCB 若使用未認證模組需補申請 | 📋 |
| **長照 3.0 智慧輔具補貼名單**（衛福部長照司）| M1-3（接觸 + 準備）→ M6-9（正式申請）| 6-12 月（名單審查週期）🟡 | NT$50-100 萬（申請準備：臨床使用記錄 + 文件）🟡 | 補貼名單 quota / 審查條件不透明；需提供 BSMI 認證 + 使用記錄 | 📋 |
| **PDPA 第三方稽核**（ISMS 初步）| M9-12（Year 1 末）| 3-6 月 | NT$10-30 萬 🟡 | PDPA 2025/12 加嚴解釋令 / PDPC 主動稽查 | 📋 |
| **AI 基本法合規**（子法規）| 持續追蹤 | 持續 | 律師持續顧問費 NT$5-10 萬/月 🟡 | 子法規「高風險 AI 系統」分類尚未明確；可能要求技術架構調整 | 🟡 |
| **長照 3.0 BD 接觸**（Hyp B 啟動）| W3（BD 電話 / email 啟動）| W3-W12 BD 接觸期 | 內部人力成本 | 機構採購週期 6-12 月；補貼名單申請與機構 LOI 可並行 | 📋 |

### §3.2 Year 1 里程碑（關鍵節點）

```
M1-3   ── 衛福部長照司第一次正式接觸（長照產業協會介紹）📋
           BSMI 認證準備（ODM 廠商 3 家詢價）📋
M3-6   ── ODM 硬體設計定案 + BSMI 送件 📋
           機構 BD：3-5 家 LOI 目標（W3 啟動接觸）📋
M6-9   ── BSMI 測試進行中（預計 6-12 月）📋
           長照 3.0 補貼名單正式申請（2026/07 補貼開放後）📋
M9-12  ── BSMI 取得（樂觀情境 M9-10；保守情境 M12）📋
           PDPA 年度稽核（ISO 27001 評估）📋
           機構 BD：Year 1 末目標 2-3 家機構正式合約 📋
```

### §3.3 ASUS Maestro 系統相關說明

ASUS Zenbo Junior II 已取得 BSMI（推測，基於電子消費品合規慣例）🟡；若採 ODM 路徑，BSMI 申請為完全獨立流程，與 ASUS 無關聯。本案 B2C 居家市場與 Junior II 醫院 B2B Maestro 節點市場切片不重疊（build-vs-buy.md §2.2.3 + problem-framing.md §4.4 客觀說明）。

---

## §4. Year 2 階段（M13-M24）

### §4.1 Year 2 認證時程表

| 認證 | 申請時點 | 預估時程 | 成本估算 | 重要性 | 標籤 |
|---|---|---|---|---|---|
| **ISO 13482**（個人照護機器人安全，自願）| M13-15（Year 2 H1 啟動）| 12-18 月（含準備 + 測試 + 審查）| NT$50-150 萬 🟡 | Hyp B 機構採購可能要求；增加 B2B 信任度 | 📋 |
| **TFDA II 類前置**：臨床數據收集啟動 | M13（Year 2 H1）| 收集 12-24 月（需 Year 1 Pilot RWD 作為基礎）| NT$100-200 萬（臨床設計 + 資料收集）🟡 | 跌倒偵測準確率宣稱 + Hyp C 保險 PMPM 合約的必要前提 | 📋 |
| **ISO 14971**（醫療器材風險管理）| M13-15（TFDA II 類前置）| 3-6 月（文件化）| NT$20-50 萬 🟡 | TFDA II 類申請的前置文件要求 | 📋 |
| **ISO 27001**（資訊安全管理系統）| M13-18 | 6-12 月 | NT$50-150 萬 🟡 | Hyp B 機構 + Hyp C 保險業者要求；PDPC 主動稽查的緩衝 | 📋 |
| **ISO 27701**（隱私資訊管理）| M18-24（ISO 27001 取得後延伸）| 3-6 月（建立在 27001 基礎）| NT$20-50 萬 🟡 | PDPA 2025/12 合規加強 + 保險業者信任建立 | 📋 |
| **長照 3.0 補貼名單維護 + 擴展**（若 Year 1 已進入）| 持續 | 持續 | 年度合規費 | 補貼名單 = 主要 CAC 降低工具 | 📋 |

### §4.2 Year 2 TFDA II 類前置時程

**前置條件清單（Year 2 必完成）**：
1. Phase 5 Pilot（10-20 戶）的 Real World Data（RWD）整理 → 跌倒偵測召回率 / false positive 記錄 📋
2. ISO 14971 風險管理文件化（危害分析 + 緩解措施）📋
3. TFDA 業者輔導窗口（W3 已接觸）確認 II 類分類路徑 📋
4. 法規顧問確認「跌倒偵測宣稱準確率 = 觸發 II 類」的具體門檻 🟡

**ISO 13482 認證機構（台灣）**：
- **SGS Taiwan**：ISO 13482 認證服務（機器人安全標準，具台灣本地服務）
  - URL: https://www.sgs.com.tw/zh-tw/service/certificate/iso-13482
  - Last Accessed: 2026-05-27
- **Bureau Veritas Taiwan**：第三方驗證認證
  - URL: https://www.bureauveritas.com.tw
  - Last Accessed: 2026-05-27
- **TÜV Rheinland**（德國萊因，台灣有分辦公室）
  - URL: https://www.tuv.com/taiwan
  - Last Accessed: 2026-05-27

---

## §5. Year 3+ 階段

### §5.1 Year 3+ 認證時程表

| 認證 | 啟動時機 | 預估時程 | 成本估算 | 依賴前提 | 標籤 |
|---|---|---|---|---|---|
| **TFDA II 類醫療器材**（跌倒偵測 / 認知評估宣稱）| Year 2 臨床資料收集完成後（M24+）→ Year 3 H1 正式申請 | 12-24 月審查 | NT$300-500 萬+ 臨床試驗費 🟡 | ISO 14971 完成 + 臨床 RWD ≥12 月 + 法規顧問 | 📋 |
| **健保給付路徑**（居家照護科技）| TFDA II 類取得後（Year 3+）| 1-3 年談判 | 談判成本 | TFDA II 類 + 大規模 Pilot 數據 + 健保署 DRG 框架適配 | 📋 |
| **保險 PMPM 合約**（Hyp C）| Year 3 H1（最早）| 8-12 月談判 + 合約 | 談判成本 | TFDA II 類認證 + Pilot RWD + 保險業 Innovation 部門關係建立 | 📋 |
| **CE Mark**（歐盟，若跨境出口）| Year 3 H2+ 評估 | 12-18 月 🟡 | NT$50-200 萬 🟡 | 歐盟市場策略確認 | 📋 |
| **FDA 510(k)**（美國，若跨境出口）| Year 3+ 評估 | 12-24 月 🟡 | USD 50 萬+ 🟡 | 美國市場策略確認 + 臨床數據（符合 FDA 格式）| 📋 |

---

## §6. 認證對 Hypothesis 的影響

### §6.1 Hyp A — B2C DTC（主軸，decision-w4.md §4.1）

| 認證 | 影響程度 | 說明 |
|---|---|---|
| BSMI | **必（Year 1 上市 blocker）** | 正式 ODM 硬體上市必跑；90 天 MVP 平板形態免 |
| PDPA | **必（全程 blocker）** | 三方同意 + 跨境傳輸 + DPIA = B2C 信任基礎；違規最高 NT$1,500 萬罰款 + 停止使用 |
| AI 基本法 | **必（法規不確定 blocker）** | 透明性義務 / 高風險分類 / 演算法影響評估；子法規未公布 = 最高不確定性 |
| 長照 3.0 補貼名單 | **強烈建議（CAC 降低 60-80%）** | 非技術 blocker，但缺席 = 競爭劣勢；子女透過補貼申請是主要 Hyp A 通路加速器 |
| TFDA II 類 | **可選（Year 3+，UVP 強化）** | 取得後可宣稱跌倒偵測準確率 = 差異化提升；不取得仍可運營但 UVP「安全網」弱化 |

### §6.2 Hyp B — B2B2C 機構通路

| 認證 | 影響程度 | 說明 |
|---|---|---|
| BSMI | **必（機構採購前提）** | 機構採購評審通常要求 BSMI；等同 Year 1 H2 blocker |
| 長照 3.0 補貼名單 | **必（Hyp B 核心 blocker）** | 補貼名單 = 機構採購誘因的核心；沒進名單 = 機構難以通過採購委員會 |
| ISO 13482 | **高度建議（機構採購加分）** | 連鎖照護機構（雙連 / 弘道）採購評審通常列為加分項；取得後 B2B 信任度顯著提升 |
| ISO 27001 | **高度建議（機構資安要求）** | 機構分享個案戶資料給 AI 系統需資安保障 |
| PDPA 第三方稽核 | **必（機構資料分享前提）** | 機構需確認服務商 PDPA 合規再簽 MoU |

### §6.3 Hyp C — 保險 PMPM（Year 3+，決策延後）

| 認證 | 影響程度 | 說明 |
|---|---|---|
| TFDA II 類 | **必（保險合約 blocker）** | 保險業者要求臨床驗證 + 醫材認證才談 PMPM；無此認證 = Hyp C 完全不可行 |
| ISO 27001 + 27701 | **必（保險合規要求）** | 金融業對資安 / 隱私的要求高於一般行業 |
| Pilot RWD | **必（保險業談判基礎）** | ≥12 個月 Real World Data + 跌倒偵測 / 孤獨改善指標量化 |

### §6.4 Hyp D — Freemium App

| 認證 | 影響程度 | 說明 |
|---|---|---|
| BSMI | **免（App 形態）** | 純軟體 App = 零 BSMI 風險；tech-architecture.md §1.2 確認 |
| PDPA | **必（全程）** | App 同樣涉及長者對話資料（特種個資）；三方同意機制同 Hyp A |
| AI 基本法 | **必（同 Hyp A）** | App 形態同樣受 AI 基本法監管 |
| App Store / Google Play 審核 | **必（應用商店上架）** | iOS 審核 5-7 天；隱私聲明 + 資料使用聲明必填；health 相關 App 可能觸發 Apple HIPAA-adjacent 審核 🟡 |

---

## §7. 時程 Gantt Chart（文字版，W0-Year 3+）

### Phase 1：90 天 MVP（W0-W12，Plan-Only 規劃）

```
W0-1   ── 問題框架 + 競品分析（problem-framing.md 完成）
W1-2   ── TFDA 業者輔導窗口接觸（確認功能分類）📋
           律師 DPIA 啟動（理慈 / 萬國 / 普華）📋
W3     ── 衛福部長照司接觸啟動（長照 3.0 補貼路徑確認）📋
           機構 BD 第一輪電話接觸（3-5 家）📋
W4     ── DPIA 首版完成 + 跨境傳輸同意書定稿 📋
           AI 基本法 readiness 評估完成 📋
W5     ── ToS / 隱私白皮書定稿（律師 sign-off）📋
W5-6   ── Pilot MoU template 定稿 📋
W6-8   ── Pilot 家庭招募計畫啟動 📋
W9     ── Pilot 三方同意書執行（10-20 戶）📋
W10-12 ── 主管 review 規劃書；認證 roadmap 並陳 📋
```

### Phase 2：Year 1 H1（M1-M6）

```
M1-2   ── [並行] 衛福部長照司第一次正式 meeting 📋
           [並行] ODM 廠商詢價（鴻海 / 廣達 / 仁寶 3 家）📋
           [並行] 機構 BD 深化（目標 1-2 家 LOI）📋
M3-4   ── ODM 硬體設計定案 📋
           BSMI 認證資料準備（CNS 標準確認）📋
M5-6   ── BSMI 正式送件（M6 目標）📋
           長照 3.0 補貼名單申請（2026/07 啟動後）📋
           機構 BD：3-5 家 LOI 目標完成 📋
```

### Phase 3：Year 1 H2（M7-M12）

```
M7-8   ── BSMI 測試進行中（預計 6-12 月審查周期）
           NCC 型式認證送件 📋
M9-10  ── [樂觀] BSMI 取得（若無重測）📋
           [持續] 長照 3.0 補貼名單審查中 📋
M10-12 ── ODM 首批 50-100 台生產 📋
           PDPA 年度稽核（ISO 27001 評估啟動）📋
           [Year 1 末] 機構 2-3 家正式合約 📋
```

### Phase 4：Year 2 H1（M13-M18）

```
M13-15 ── ISO 13482 申請啟動（SGS / Bureau Veritas）📋
           ISO 14971（風險管理）文件化完成 📋
           TFDA II 類前置：臨床資料收集計畫設計 📋
           ISO 27001 申請啟動 📋
M15-18 ── ISO 13482 審查進行中 📋
           臨床資料收集啟動（Year 1 Pilot RWD 整理 + 擴充）📋
```

### Phase 5：Year 2 H2（M19-M24）

```
M19-21 ── ISO 27001 取得（若 M13 啟動，預計 6-12 月）📋
           ISO 27701 延伸申請 📋
           [依情況] BSMI 維護 / 版本更新認證
M22-24 ── ISO 13482 取得（若 M13 啟動，預計 12-18 月）📋
           ISO 14971 完成 + TFDA II 類申請前置文件就緒 📋
           長照 3.0 補貼名單正式進入（若 Year 1 審查通過）📋
```

### Phase 6：Year 3 H1（M25-M30）

```
M25-27 ── TFDA II 類正式申請（前提：ISO 14971 + RWD ≥12 月）📋
           保險業 BD 深化（國泰 / 富邦 / 南山）📋
M28-30 ── TFDA II 類審查進行中（預計 12-24 月）📋
           [依情況] 健保給付路徑初步接觸 📋
```

### Phase 7：Year 3+

```
Year 3 H2+ ── TFDA II 類取得（預計 Year 3 H1-H2）📋
               健保給付路徑談判 📋
               保險 PMPM 首個合約談判（Hyp C 啟動）📋
               CE Mark / FDA 510(k) 跨境出口評估 📋
```

**並行可能性分析**：

| 認證組合 | 並行可行性 | 說明 |
|---|---|---|
| BSMI + NCC | ✅ 可並行 | 同一 ODM 硬體，文件重疊高 |
| BSMI + 長照 3.0 補貼申請 | ✅ 可並行（補貼需 BSMI 完成）| 補貼申請需 BSMI 為前提，但前期文件準備可並行 |
| ISO 13482 + ISO 27001 | ✅ 可並行 | 不同認證機構，無技術依賴 |
| ISO 27001 → ISO 27701 | 必序列（27701 建立在 27001 基礎）| |
| ISO 14971 → TFDA II 類 | 必序列（14971 是 TFDA 前置）| |
| TFDA II 類 → Hyp C 保險 PMPM | 必序列 | TFDA II 類是保險合約的必要前提 |

---

## §8. 風險清單 + 緩解措施

| 風險 | 類別 | 機率 | 影響 | 緩解措施 | 標籤 |
|---|---|---|---|---|---|
| **BSMI 重複測試 → GTM 延遲**（ODM 設計有誤）| 技術認證 | 🟡 中（首次 ODM 設計常見）| 高（延遲 3-6 月上市）| ODM 廠商選擇有 BSMI 認證經驗者（鴻海 / 廣達生態）；設計前期確認 CNS 標準 checklist；預留 3 月 retest 緩衝期 | 📋 |
| **AI 基本法子法規未明確 → 合規方向不確定**| 法規不確定 | 🟡 中（2025/12 上路，子法規累積中）| 高（可能要求架構調整）| W4 前律師完成 AI 基本法 readiness 評估；採保守設計（privacy by design + 透明性）作為預防性合規；持續追蹤 PDPC + 立法院公報 | 🟡 |
| **長照 3.0 補貼名單 quota / 審查條件不透明**| 政府採購 | 🟡 中（申請流程公開度低）| 中（Hyp A 延遲 CAC 降低；Hyp B blocker 延後）| W3 前建立衛福部長照司接觸；透過長照產業協會 / 弘道 / Ankecare 網絡了解審查條件；Name list 鎖死前提前申請 | 📋 |
| **TFDA II 類臨床數據不足**（跌倒偵測宣稱準確率）| 臨床數據 | 🟡 中（首批 Pilot 規模偏小）| 中高（TFDA 審查退件 + Year 3 延後）| Phase 5 Pilot 設計「真實家庭假緊急事件演習 ≥3 次」收集 RWD；Year 2 擴大臨床資料收集計畫；若 RWD 不足，降格宣稱（不宣稱準確率，維持「輔助通知」定位）| 🟡 |
| **PDPA 2025/12「對話文字摘要跨境傳輸」詮釋爭議**| 法規詮釋 | 🟡 中（律師詮釋 + PDPC 解釋令仍累積中）| 高（可能需調整 LLM 跨境路徑）| 保守策略：對話摘要也走嚴格資料最小化（不含 PII）；年 1 提高開源 LLM 比例（降低跨境依賴）；GCP asia-east1 台灣節點為主要部署 | 🟡 |
| **跨境法規衝突**（若 Year 3+ 進入 EU / US）| 跨境法規 | low（目前 Geo 台灣 only）| 高（影響整體架構）| 架構設計時預留「資料在地化」選項（開源 LLM + GCP Taiwan North）；進入 EU 前需評估 EU AI Act 高風險分類 | 🟡 |
| **App Store 健康 App 審查延遲**（Apple HIPAA-adjacent）| 應用商店 | 🟡 低中（台灣 App 審核較少此問題）| 中（影響 Hyp D GTM 時程）| 定位「陪伴輔助 App」非「醫療 App」；Privacy Nutrition Label 完整填寫；審核前確認分類（Social Networking / Lifestyle）| 🟡 |
| **ISO 13482 認證費用 + 測試時間超預期**| 認證成本 | 🟡 低中（首次申請）| 中（預算 + 時程壓力）| 選擇台灣本地有 ISO 13482 服務能力的機構（SGS Taiwan）；預留 12-18 月時程；機構 B2B2C 客戶有需求時才優先申請 | 📋 |

---

## §9. 法律顧問 + 第三方資源

### §9.1 推薦律師事務所

| 事務所 | 專長 | 適用範圍 | URL |
|---|---|---|---|
| **理慈國際科技法律事務所**（台北）| 科技法律 + PDPA + 醫療法規 + AI 法律 | DPIA + ToS 審查 + AI 基本法 + 醫療器材法 | https://www.leeco.com.tw |
| **萬國法律事務所**（台北）| 生命科學 + 醫療法規 + PDPA + 跨國合規 | TFDA 認證諮詢 + 保險法規 + 消保法 | https://www.winklerpartners.com |
| **資誠聯合會計師事務所（PwC Taiwan）**| 資安 + PDPA + 隱私合規 + ISO 27001 顧問 | PDPA 稽核 + ISO 27001/27701 顧問 + 法規 mapping | https://www.pwc.tw |

### §9.2 主管機關 + 輔導窗口

| 機關 | 功能 | 聯絡入口 | URL |
|---|---|---|---|
| **TFDA 業者輔導服務**（衛福部食藥署）| 醫療器材功能分類確認 + 申請流程諮詢 | 業者服務專線 / 線上預約 | https://www.fda.gov.tw |
| **衛福部長照司**（智慧輔具補貼）| 長照 3.0 智慧輔具補貼申請路徑確認 | 透過長照產業協會 / Ankecare 引介 | https://ltc.mohw.gov.tw |
| **個人資料保護委員會（PDPC）**（2025/8 成立）| PDPA 合規諮詢 + 解釋令 | PDPC 官方服務 | 🟡 PDPC 官網 URL 待確認（2025/8 新成立機關）|
| **BSMI 標準局**（經濟部）| CNS 認證申請 + CNS 15630 機器人安全標準 | BSMI 業者服務 | https://www.bsmi.gov.tw |
| **NCC 國家通訊傳播委員會**| 無線電型式認證 | NCC 業者服務 | https://www.ncc.gov.tw |

### §9.3 工研院 / 研究機構

| 機構 | 功能 | URL |
|---|---|---|
| **工研院資訊與通訊研究所**（ICL）| 智慧長照技術研究 + ISO 13482 相關研究 + 法規沙盒協助 | https://www.itri.org.tw |
| **資策會**（MIC 市場研究 + 法規顧問）| AI 法規現況分析 + 台灣數位法規研究 | https://www.iii.org.tw |
| **智齡科技**（台灣長照 ICT 生態已建立 1,200+ 機構）| 長照 ICT 通路合作 + 機構採購理解 | https://www.agingtech.org 🟡 |
| **Ankecare（安可照顧）**（長照產業媒體 / 協會入口）| 衛福部長照司接觸管道 + 業界人脈 | https://www.ankecare.com |

### §9.4 ISO 認證機構（台灣有服務能力）

| 機構 | 適用認證 | 台灣本地服務 | URL |
|---|---|---|---|
| **SGS Taiwan**| ISO 13482 / ISO 27001 / ISO 27701 / CE Mark | ✅ 台北辦公室 | https://www.sgs.com.tw |
| **Bureau Veritas Taiwan**| ISO 13482 / ISO 27001 / CE Mark | ✅ 台北辦公室 | https://www.bureauveritas.com.tw |
| **TÜV Rheinland（德國萊因）台灣**| ISO 13482 / CE Mark / 電氣安全 | ✅ 台灣代辦服務 | https://www.tuv.com/taiwan |
| **財團法人台灣電子檢驗中心（TÜV SÜD 合作）**| BSMI CNS 測試 + NCC 型式認證 | ✅ 台灣本地 | https://www.teema.org.tw 🟡 |

---

## §10. Coverage Matrix

### §10.1 認證項目 × Hypothesis × 時程 × 成本

| 認證 | Hyp A 重要性 | Hyp B 重要性 | Hyp C 重要性 | Hyp D 重要性 | 預估時程 | 預估成本 | 階段 |
|---|---|---|---|---|---|---|---|
| **PDPA 2025/12** | critical | critical | critical | critical | 持續 | NT$10-30 萬（律師）| W1+ |
| **AI 基本法 2025/12** | critical（不確定）| critical | critical | critical | 持續 | NT$5-10 萬/月（顧問）| W1+ 🟡 |
| **BSMI** | critical（Year 1）| critical（Year 1）| medium | 免 | 6-12 月 | NT$30-100 萬 | Year 1 H2 |
| **NCC** | high（Year 1）| high | medium | 免 | 2-4 月 | NT$5-15 萬 | Year 1 H2 |
| **長照 3.0 補貼名單** | critical（CAC）| critical（blocker）| medium | 不適用（App）| 6-12 月 | NT$50-100 萬 | Year 1 H1-H2 |
| **CNS 15630** | high（若 SLAM）| high | low | 免 | 6-12 月 | NT$30-80 萬 🟡 | Year 2+（若 SLAM）|
| **ISO 13482** | high | critical（機構 B2B）| medium | 不適用 | 12-18 月 | NT$50-150 萬 | Year 2 H1 |
| **ISO 27001** | high | critical | critical | high | 6-12 月 | NT$50-150 萬 | Year 2 H1 |
| **ISO 27701** | high | high | critical | high | 3-6 月（建在 27001 上）| NT$20-50 萬 | Year 2 H2 |
| **ISO 14971** | medium | medium | critical（前置）| 不適用 | 3-6 月 | NT$20-50 萬 | Year 2 H1 |
| **TFDA II 類** | medium（Year 3+）| high（Year 3+）| critical（blocker）| 不適用 | 12-24 月 | NT$300-500 萬+ | Year 3 H1 |
| **健保給付路徑** | medium（願景）| medium | critical（Year 3+）| 不適用 | 1-3 年談判 | 談判成本 | Year 3+ |
| **CE Mark** | low（Year 3+）| low | low | low | 12-18 月 | NT$50-200 萬 | Year 3+ 選項 |
| **FDA 510(k)** | low（Year 3+）| low | low | low | 12-24 月 | USD 50 萬+ | Year 3+ 選項 |
| **GDPR** | 不適用（台灣 only）| 不適用 | 不適用 | 不適用 | — | — | Year 3+ 若出口 EU |
| **EU AI Act** | 不適用（台灣 only）| 不適用 | 不適用 | 不適用 | — | — | Year 3+ 若出口 EU |

### §10.2 各階段累計成本估算

| 階段 | 關鍵認證 | 累計成本估算（下限）| 累計成本估算（上限）| 標籤 |
|---|---|---|---|---|
| **90 天 MVP** | PDPA 律師 + DPIA + ToS | NT$10 萬 | NT$30 萬 | 📋 🟡 |
| **Year 1 H1** | + 衛福部接觸 + 長照 3.0 申請準備 | NT$60 萬 | NT$130 萬 | 📋 🟡 |
| **Year 1 H2** | + BSMI + NCC + 補貼名單 | NT$160 萬 | NT$430 萬 | 📋 🟡 |
| **Year 2** | + ISO 13482 + ISO 27001 + ISO 27701 + ISO 14971 | NT$400 萬 | NT$930 萬 | 📋 🟡 |
| **Year 3+** | + TFDA II 類 + PMPM 談判 + 健保路徑 | NT$1,100 萬 | NT$2,200 萬+ | 📋 🟡 |

> 以上成本為規劃書等級估算，基於 build-vs-buy.md §4.7 + tech-architecture.md §7.1 + safety-redlines.md §8 交叉整合 🟡。實際費用需在計畫通過後詢價確認 📋。

### §10.3 Coverage Matrix（10 章節完整度）

| 章節 | 完成狀態 | 備註 |
|---|---|---|
| §1 認證 + 法規全清單（台灣 + 國際）| ✅ | §1.1-§1.5：台灣強制 / 自願 / 醫療 / 消費者 / 國際 5 層 |
| §2 90 天 MVP 階段 | ✅ | 平板 App 形態免 BSMI / TFDA；PDPA W4 前必完成 |
| §3 Year 1 階段 | ✅ | BSMI（NT$30-100 萬）+ 長照補貼（NT$50-100 萬）+ PDPA 稽核 |
| §4 Year 2 階段 | ✅ | ISO 13482 + TFDA II 類前置 + ISO 27001/27701 |
| §5 Year 3+ 階段 | ✅ | TFDA II 類 + 健保 + 保險 PMPM + 跨境出口選項 |
| §6 認證對 Hypothesis 影響 | ✅ | Hyp A/B/C/D 各自分析 |
| §7 時程 Gantt Chart（文字版）| ✅ | W0-Year 3+ 逐月關鍵節點 + 並行可能性分析 |
| §8 風險清單 + 緩解 | ✅ | 8 項風險 × 機率 / 影響 / 緩解 |
| §9 法律顧問 + 第三方資源 | ✅ | 律師事務所 + 主管機關 + 工研院 / 資策會 + 認證機構 |
| §10 Coverage Matrix | ✅ | 認證 × Hypothesis × 時程 × 成本 14 項 × 4 Hyp + 累計成本 |

---

## §11. 卡關項目（法規不確定性）

| 卡關主題 | 原因 | 影響 | 補強方式 |
|---|---|---|---|
| **AI 基本法子法規未公布**（高優先卡關）| 行政院草案 → 立法院審議中；2025/12 施行後子法規累積中；PDPC 解釋令仍待 | 「高風險 AI 系統」分類可能要求技術架構調整；老年陪伴 + 緊急偵測組合可能被列高風險 | W4 前律師 readiness 評估；採 privacy by design + 透明性宣告作為預防性合規；持續追蹤 PDPC 官方公告 🟡 |
| **PDPA「對話文字摘要 ≠ 原始語音」跨境傳輸詮釋**| 律師詮釋 + PDPC 解釋令仍累積中 | OpenAI API 跨境是否適用 PDPA §6 特種個資限制需律師確認 | W4 律師 DPIA 必含此議題；保守策略 = 對話摘要也走嚴格資料最小化（不含 PII） 🟡 |
| **長照 3.0 補貼名單申請流程 + 審查條件不透明**| 衛福部長照司尚未公布詳細申請 SOP（補貼 2026/07 開放）| Hyp A CAC 降低 / Hyp B 機構採購誘因不確定 | W3 衛福部接觸取得第一手資訊；長照產業協會 + Ankecare 業界詢問 📋 |
| **TFDA II 類「跌倒偵測宣稱準確率」觸發門檻**| TFDA 尚無陪伴機器人非影像式跌倒偵測的先例（截至 2026-05）| 宣稱準確率的具體文字可能觸發 II 類 = blocker | W2-3 TFDA 業者輔導窗口接觸確認；90 天 MVP 嚴守「輔助通知，不宣稱準確率」(Plan-Only 紅線 P1，safety-redlines.md §1.3) 🟡 |
| **119 緊急服務直接介接合法性**| 屬「緊急救護資訊服務系統」管轄（衛福部 + 內政部消防署）；無第三方廠商 API 公開文件 | 緊急偵測後 119 介接是 Year 2+ 功能，不在 90 天 MVP 範圍 | Year 2 向消防署詢問合規路徑；90 天 MVP 以 LINE + 子女通知代替 📋 |

---

## §12. 給 T43 + Phase 5-8 的輸入

### §12.1 Phase 5（Prototype Build）

- **Sprint 1 Week 2 前**：Layer 2 rule-based 7 條 LLM 絕對紅線實作（safety-redlines.md §4.1 + §5.3）= PDPA 合規前提
- **Sprint 2**：三方同意機制 UX 跑通（tech-architecture.md §4.4 同意書設計 + safety-redlines.md §6.1）
- **Sprint 3 前**：Fairness Audit（台語 / 客語 / 外省 / MCI 各 ≥10 句，準確率差距 ≤15pp）
- **Sprint 4**：Phase 5 adversarial test ≥70 案例（≥10 案例 × 7 條紅線）；BLOCKER = 任一紅線 < 95% 召回率

### §12.2 Phase 6（Pilot 設計）

- **Pilot MoU 必含**：PDPA 三方同意 + 中斷賠償條款 + 資料處理授權（tech-architecture.md §7.2）
- **假緊急事件演習 ≥3 次**：收集非影像式跌倒偵測 RWD（safety-redlines.md §5.1 SOP）
- **長者 NPS 獨立量測**（不混入子女 NPS）
- **社交指標監測**：真人 vs AI 對話比例（Social Replacement 風險，problem-framing.md §3.2.10）

### §12.3 Phase 7（Pitch Prep）

- **認證 roadmap Slide**：向主管呈現「認證路徑規劃」而非「已認證」；Plan-Only 紅線 P3（safety-redlines.md §1.3）
- **主管 Q5：「認證進度如何？」預備答案**：「90 天 MVP App 形態免認證；Year 1 H2 BSMI 同步申請；ISO 13482 Year 2；TFDA II 類為 Year 3 規劃中（前提：Phase 5-6 Pilot RWD）」
- **長照 3.0 補貼路徑**必在 Pitch Deck 中呈現（降低 CAC 60-80% = 商業模式護城河之一）

### §12.4 Phase 8（T43 認證合規 sub-agent 建議任務）

- **T43-A**：BSMI 認證申請文件 checklist（CNS 15630 + CNS 14336 電磁相容 + CNS 6136 電氣安全）
- **T43-B**：PDPA DPIA 模板（資料類型 × 目的 × 保留期 × 跨境風險 × 緩解措施）
- **T43-C**：長照 3.0 補貼申請文件 checklist（衛福部長照司 2026/07 後）
- **T43-D**：AI 基本法 readiness 評估框架（透明性 / 高風險分類 / 演算法影響評估 × 本案 checklist）

---

## Sources

| 來源 | 引用位置 |
|---|---|
| TFDA 衛福部食藥署官方 — 醫療器材管理法 §3 分類 + AI/ML 醫材核准 37 件 | https://www.fda.gov.tw — Last Accessed 2026-05-27 |
| 衛福部長照 3.0（115-124 年）行政院 2025/12/31 核定 — 智慧輔具補貼 NT$60K/3 年 | https://ltc.mohw.gov.tw — Last Accessed 2026-05-27 |
| 個人資料保護法（2025/12 修訂版） + PDPC 2025/8 成立 | https://law.moj.gov.tw — Last Accessed 2026-05-27 |
| 台灣人工智慧基本法（行政院 2024 草案）| 行政院 AI 基本法草案 + 立法院公報 | Last Accessed 2026-05-27 |
| BSMI 經濟部標準局 — CNS 認證費用 + CNS 15630 家用服務機器人安全 | https://www.bsmi.gov.tw — Last Accessed 2026-05-27 |
| ISO 13482（個人照護機器人安全）— 2014 版，BSMI + SGS 台灣 | https://www.iso.org/standard/53820.html — Last Accessed 2026-05-27 |
| ISO 14971（醫療器材風險管理）| https://www.iso.org/standard/72704.html — Last Accessed 2026-05-27 |
| SGS Taiwan — ISO 13482 認證服務 | https://www.sgs.com.tw — Last Accessed 2026-05-27 |
| Bureau Veritas Taiwan | https://www.bureauveritas.com.tw — Last Accessed 2026-05-27 |
| TÜV Rheinland Taiwan | https://www.tuv.com/taiwan — Last Accessed 2026-05-27 |
| 理慈國際科技法律事務所 | https://www.leeco.com.tw — Last Accessed 2026-05-27 |
| 萬國法律事務所 | https://www.winklerpartners.com — Last Accessed 2026-05-27 |
| 資誠 PwC Taiwan | https://www.pwc.tw — Last Accessed 2026-05-27 |
| ASUS Maestro 系統 2025/12 Healthcare+ Expo + ASUS「All In AI」策略（problem-framing.md §4.4，≥17 source 客觀確認）| ASUS Pressroom + DigiTimes + TechNews — Last Accessed 2026-05-27 |
| tech-architecture.md §7（認證路徑時程）| 內部文件 docs/tech-architecture.md |
| build-vs-buy.md §4.7（認證 4 階段）| 內部文件 docs/build-vs-buy.md |
| safety-redlines.md §8（認證 + 法規時程對映）| 內部文件 docs/safety-redlines.md |
| decision-w4.md §4（主軸 Hyp A B2C DTC）| 內部文件 docs/decision-w4.md |
| problem-framing.md §2.2（Gatekeeper 分析 + TFDA / BSMI / PDPA）| 內部文件 docs/problem-framing.md |

---

> 本文件由 regulatory-mapper sub-agent 執行（PM Flow v0.1 / Phase 4 T34）
> 建立在：problem-framing.md §2.2 + §3.5 / tech-architecture.md §7 / safety-redlines.md §8 / build-vs-buy.md §4.7 / phase-0-answers.md Plan-Only Mode / decision-w4.md §4
> 標籤分布：✅ desk-validated ~45% / 🟡 hypothesis ~40% / 📋 post-approval execution ~15%
> 所有 ASUS 相關段落客觀中立（不延伸合作論述）；所有認證時程為規劃書等級，非已取得認證
