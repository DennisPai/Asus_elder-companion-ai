# 4 週對外 Closed Beta 執行設計書 — Phase 6 T41
## 長者互動陪伴機器人 × AI Brain MVP — Phase 6 T41 Closed Beta 設計

> **執行日期**：2026-05-27
> **執行模式**：PM Flow v0.1 / Phase 6 T41 對外 Closed Beta 設計書
> **角色配置**：sprint-planner（本報告）
> **Plan-Only Mode**：本文件是「執行設計書」，不是「執行成果」；所有 build / pilot / 部署 / 訪談項標 📋 post-approval execution；所有預期數字標 🟡 hypothesis；所有 desk-validated 結論標 ✅
> **報告對象**：華碩（ASUS）AI 代理人 / 服務型機器人主管 1 位（客觀中立，無 ASUS 推銷合作論述）
> **建立在**：T35 decision-w6.md §7.2 + §7.4 + T38 sprint-4-spec.md + T28 safety-redlines.md + T19 persona.md + T22 jtbd-day-in-life.md + T27 feature-triage.md + T30 lean-canvas.md + T32 pricing.md + T05 phase-0-answers.md
> **禁用字眼**：demo（一律改稱「主管 review 規劃書」/「內部 review 規劃書」/「主管 walkthrough 規劃書」）；禁稱「Mode E」（本案是 PM Flow v0.1）；禁延伸「ASUS 是合作夥伴」推銷語氣

---

## 0. Executive Summary

本文件對「長者互動陪伴機器人 × AI Brain」Phase 6 對外 4 週 Closed Beta 產出完整執行設計書，涵蓋目標與範圍、4 週時程設計、每週量測機制、每日每週 SOP、5 項危機應變 SOP、Operator 排班、預算估算、風險清單、Phase 6 T42（PMF 量測）/ T43（法規 Soft Check）銜接。Sprint 4（W11-W12 內部 Closed Beta，5-10 戶員工家屬 + 1-2 家機構 LOI）已於 T38 sprint-4-spec.md 完成設計，本 T41 文件規格化的是 **「Phase 6 對外 Closed Beta」**（15-20 戶家庭 + 1-2 機構，含一般用戶招募），與 Sprint 4 內部 closed beta 屬於 **兩個獨立的閉迴路階段**，不可混淆。

**五項核心結論**：

1. **本 T41 對外 Closed Beta vs T38 Sprint 4 內部 Closed Beta 明確區隔**：T38 是 W11-W12 內部員工家屬 5-10 戶閉迴路驗證；T41 是 Phase 6 對外 5 面向招募 15-20 戶 + 1-2 機構閉迴路驗證；T41 招募對象含一般用戶（從 T39 招募 funnel），招募過濾標準採用 T38 退場戶教訓清單。
2. **4 週時程銜接決策框架**：Week 1 部署 + onboarding、Week 2 穩定期、Week 3 深化使用、Week 4 量測 + 反饋；每週量測項目對映 Sean Ellis / HEART / AARRR 5 框架基線；W4 末週的 Sean Ellis ≥40% / NPS ≥40 / D30 retention ≥60%（良好）/ ≥70%（優秀 stretch；對齊 pmf-report.md §1.2 + §5） 是 T42 PMF 訊號達標標準。
3. **5 危機應變 SOP 全程嚴守 T28 safety-redlines**：跌倒 false positive / negative、自殺風險偵測（轉 1925）、長者過世（資料移交 + 家庭告知）、機器故障（P0-P3 分級）、子女失聯（多層備援），完整對映 T28 §5 既有 SOP；本文件補充對外 Pilot 階段的執行細節（無 ASUS 推銷論述）。
4. **Operator 排班 + 人力配置升級（vs Sprint 4）**：Sprint 4 4 人 24×7 三班；Phase 6 對外 Pilot 升 5 人專人輪班 + 1 偏鄉支援；4 週人力預算 NT$80-120 萬；後台升級從 Sprint 4 兼任 → Phase 6 專人輪班。
5. **4 週對外 Closed Beta 總預算 NT$170-260 萬（📋 post-approval）**：Operator 人力 NT$80-120 萬 + 硬體 NT$300-400K + 雲端 / LLM API NT$15-25 萬 + 客服 / 客戶成功 NT$20-30 萬 + 部署 / 配送 NT$15-25 萬 + 緊急應變預備金 NT$10-20 萬。作為主管 review 規劃書財務預估輸入；計畫通過後 W13+ 啟動執行。

**對主管 review 規劃書的核心訊息**：T41 對外 Closed Beta 是 90 天 MVP 規劃書中「從內部閉迴路驗證（Sprint 4）跨入對外商業 PMF 訊號量測（Phase 6）」的關鍵 4 週執行設計。所有 SOP、量測機制、Operator 配置、預算估算、風險緩解、Phase 6 T42 / T43 銜接均完整就緒；計畫通過後可於 Sprint 4 結束 W13 立即啟動 Phase 6 對外 Pilot。

---

## §1. Beta 目標 + 範圍

### 1.1 4 週對外 Closed Beta 三大目標

**目標 1：PMF 訊號量測 + 商業驗證**
- Sean Ellis Test ≥40%（PMF 信號達標標準）+ NPS ≥40（子女）/ ≥35（長者）/ ≥4.0/5（機構員工）+ D30 retention ≥60%（良好）/ ≥70%（優秀 stretch；對齊 pmf-report.md §1.2 + §5）
- 月流失率 ≤5%（Year 1 健康水位，decision-w6 §3.1 假設 2 驗證）
- Sprint 4 內部閉迴路後首次具備「對外用戶實際付費意願」量測機會（💰 收費版測試詳 §3.4）
- T42 PMF 量測機制（W6 後完成設計）的真實數據首批採集節點

**目標 2：用戶痛點驗證 + Persona 假設升級**
- 三 persona 假設（A 北漂 IT / B 在地中產 / C 退休前夫妻）desk research 🟡 → 實證 ✅ 升級
- 4 週對外場景驗證 5 個關鍵假設（W4/W6 Gate 一致）：假設 1 WTP / 假設 2 長者 4 週不棄 / 假設 3 緊急偵測召回率 / 假設 4 機構願採購 / 假設 5 法規 readiness
- T39 招募 funnel 5 面向（北漂子女主、長者跟隨、機構 BD、保險業 Innovation、監管律師）首次完整啟動

**目標 3：商業驗證 + Phase 6 T43 法規 Soft Check 銜接**
- 對外 Closed Beta 期間 Phase 4 三 Tier 定價（Starter NT$799 / Pro NT$1,290 / Premium custom）感知測試（質性訪談 + 量化問卷）
- T43 法規 Soft Check 啟動：PDPA DPIA 首版 / TFDA 業者輔導窗口 / AI 基本法 readiness 評估 / 119 直接介接合法性確認，4 週內全部對接窗口
- W12 主管 review 規劃書數據輸入：4 週 PMF 訊號完整入 deck + 三 Persona 假設升級結果入 Slide 4 + 商業驗證入 Slide 5

### 1.2 範圍邊界

**In Scope（Phase 6 對外 Closed Beta W13-W16）**：

| 項目 | 說明 |
|---|---|
| 15-20 戶家庭部署 | T39 5 面向招募 funnel；員工家屬 ≤30%（避免 confirmation bias）；一般用戶 ≥50% |
| 1-2 機構部署 | 從 Sprint 4 LOI 機構續約 or 新招募 1 家中型日照中心 |
| 真實付費意願測試 | 三 Tier 定價感知測試 + 自願付費族群識別 + 退費機制 |
| 5 框架 PMF 量測 | Sean Ellis + Retention + NPS（三組）+ HEART + AARRR 完整數據採集 |
| Sprint 4 → Phase 6 bug fix 延續 | Sprint 4 退場戶 RCA 教訓全納入；P0/P1 bug 不得帶入 Phase 6 |
| Operator 升級配置 | 5 人專人輪班（vs Sprint 4 4 人兼任）+ 1 偏鄉支援 |
| 客戶成功（CS）團隊建立 | 2 人 CS 專員（vs Sprint 4 1 人兼任）+ 退費 SOP 落地 |
| 三方同意機制對外版 | 一般用戶版本（非員工家屬，無內部信任基礎，UX 更需嚴謹）|
| Phase 6 T43 法規 Soft Check 並行 | 4 對接窗口（PDPC / TFDA / AI 法律顧問 / 119）4 週內全啟動 |
| W12 主管 review 規劃書數據輸入 | 4 週量測結果 → Phase 7 Pitch Deck 5 Slide 直接引用 |

**Out of Scope（明確排除）**：

| 項目 | 排除理由 | 銜接時機 |
|---|---|---|
| 20 戶以上家庭擴張 | Phase 6 是 closed beta，不擴張到大規模 | Year 1 H1 對外公開 launch（PMF 訊號達標後）|
| 3 家以上機構部署 | 4 週服務品質管控不可超 2 家機構 | Year 1 H2 機構通路擴張 |
| ODM 硬體採購 | 仍用 WoZ 平板形態（unit-econ.md §1.2 BOM NT$18,000）| Year 1 H2 BSMI 取得後 |
| BSMI / TFDA / CNS 15630 認證 | 90 天 MVP 全程 App / WoZ 平板形態免認證 ✅（cert-timeline §2）| Year 1 H2 ODM 硬體啟動 |
| 完整台語 ASR fine-tune | 台語基礎問候 ≥20 句（Sprint 3 規格）；完整版 Year 1 H2 | Year 1 H2 Whisper fine-tune（需 1,000 用戶語料）|
| 完整機構 API 平台化 | Sprint 4 PoC 單一智齡科技；Phase 6 維持單一介面 | Year 1 H2 開放 API 平台化 |
| 保險 PMPM 接觸（Hyp C 商業洽談）| Year 3+ TFDA II 類前提；T39 招募是「市場認識」非「商業洽談」| Year 3+ |
| 7×24 多客服語言支援 | 中文 + 台語基礎，4 週 closed beta 不擴客語 / 原住民語 | Year 2+ |
| 完整子女多帳號（4+ 子女）| Phase 6 限 2 子女帳號；多帳號 Year 1 H2 | Year 1 H2 |

### 1.3 與 Sprint 4 內部 Closed Beta 的明確區隔

| 維度 | Sprint 4 W11-W12 內部 Closed Beta（T38）| Phase 6 W13-W16 對外 Closed Beta（本 T41）|
|---|---|---|
| 用戶來源 | 員工家屬 4-6 戶 + 朋友 3-5 戶 + 信任關係一般戶 1-2 戶 | T39 5 面向招募 funnel：北漂子女 10-15 戶 + 機構 1-2 家 + 跟隨長者 + 保險 Innovation + 監管律師 |
| 用戶比例 | 員工家屬 / 朋友 ≥80% | 員工家屬 ≤30%；一般用戶 ≥50% |
| 戶數規模 | 5-10 戶（中位 8 戶）| 15-20 戶（中位 17 戶）|
| 期間 | 2 週 Sprint + 1 週過渡（W13）| 4 週對外（W13-W16）|
| 機構戶數 | 1-2 家 LOI（免費試用）| 1-2 家（從 Sprint 4 LOI 續約 or 新招募）|
| 付費測試 | 免費試用 + W12 末週問「若 NT$1,290 您願付？」（質性）| 三 Tier 定價感知測試 + 自願付費族群識別 + 退費機制（量化 + 質性）|
| Operator 配置 | 4 人 24×7 兼任 | 5 人 24×7 專人輪班 + 1 偏鄉支援 |
| 主要量測目標 | Sean Ellis ≥30% + Retention D30 ≥50% + NPS 子女 ≥40 / 長者 ≥35（接近 PMF 信號）| **Sean Ellis ≥40% + NPS ≥40 + D30 retention ≥60%（良好）/ ≥70%（優秀 stretch；對齊 pmf-report.md §1.2 + §5） + 月流失 ≤5%（PMF 訊號達標）** |
| Phase 6 銜接角色 | Sprint 4 結果 → Phase 6 招募過濾標準 + 量測基線 | Phase 6 結果 → Phase 7 Pitch Deck Slide 6 Traction 數據 + Phase 8 主管 review 規劃書 |
| 退場戶處理 | 退場 RCA 寫入 Phase 6 招募過濾清單 | 退場 RCA 寫入 Year 1 H1 對外 launch 排除條件 |

**核心區隔**：Sprint 4 是「最後一道閉迴路驗證關卡」（員工家屬中為主），Phase 6 對外 Closed Beta 是「PMF 訊號量測 + 商業驗證」（一般用戶為主），兩者目標、規模、用戶結構、量測標準全部不同。本 T41 設計書專注於 Phase 6 W13-W16 4 週對外執行細節。

---

## §2. 4 週時程設計

### 2.1 Week 1（W13）部署 + Onboarding 期

**核心目標**：15-20 戶硬體配送 + 安裝 + 三方同意機制 + onboarding 通話 + 首次互動引導 + 家庭設定，部署成功率 ≥90% + onboarding 完成率 ≥80% + 首日互動 ≥70%。

**Day 1-3：硬體配送 + 安裝 + 三方同意機制**

| Day | 主要活動 | 負責角色 | KPI |
|---|---|---|---|
| D1 | 7-8 戶硬體配送（北部 4 戶 + 中部 2 戶 + 南部 2 戶）+ 子女線上 onboarding 啟動 | 在地部署夥伴 + Operator | 配送成功率 ≥95% |
| D2 | 7-8 戶硬體配送（剩餘戶數 + 偏鄉 1 戶）+ 子女 onboarding 接續 | 在地部署夥伴 + Operator | 累計部署 ≥80% |
| D3 | 剩餘 2-3 戶配送收尾 + 三方同意機制執行（長者音訊同意 + 子女書面同意 + 高風險戶見證人）+ 機構部署 | Operator + 法律顧問遠端支援 | 三方同意完成率 ≥90% |

**三方同意機制執行細節**（嚴守 safety-redlines §6.1）：
- **Step 1 子女線上 onboarding（20-30 分鐘）**：閱讀 ToS（音訊版 + 大字版）+ AI 能力邊界說明（10 條絕對紅線白話解釋）+ 隱私設定（監控功能預設關閉）+ 子女電子簽名
- **Step 2 長者本人同意**：機器人語音說明（台語 + 國語）「我是 [產品名]，我可以陪您聊天、幫您提醒事情，但我不是醫生...」+ 長者語音確認「好」/「知道了」記錄為口頭同意
- **Step 3（高風險情境）第三方見證**：MCI 確診長者 / CMS 3+ 級 → 邀請照服員 / 社工師見證，記錄存檔
- **特別注意**：Phase 6 對外用戶（非員工家屬）無內部信任基礎，三方同意 UX 必須比 Sprint 4 更嚴謹；Sprint 4 退場戶教訓中「同意理解不充分導致中途退出」案例必檢視

**Day 4-7：Onboarding 通話 + 首次互動引導 + 家庭設定**

| Day | 主要活動 | 負責角色 | KPI |
|---|---|---|---|
| D4 | Operator 主動致電所有 15-20 戶子女確認硬體運作 + 首次互動指引 | Operator × 5 | 致電覆蓋率 100% / 確認運作 ≥85% |
| D5 | Operator 主動致電長者（電話 / 視訊）確認首次互動體驗 + 家庭設定（提醒時段 / 用藥提醒 / 緊急聯絡人）| Operator × 5 | 長者首次互動成功率 ≥70% |
| D6 | 機構員工 1 日培訓（儀表板使用 + 緊急通報 SOP + Operator 協作）+ 機構部署檢視 | Operator 主管 × 1 | 機構員工通過評核 ≥8/10 |
| D7 | W13 末週統計：部署成功率 + onboarding 完成率 + 首日互動率；Operator 內部 RCA + W14 修補計畫 | Operator 主管 + CS 主管 | 三 KPI 全達標 → 進入 W14；任一未達標 → 修補先行 |

**W13 末週 milestone**：
- 部署成功率 ≥90%（15-20 戶實際完成部署比例）
- Onboarding 完成率 ≥80%（三方同意 + 家庭設定全部完成比例）
- 首日互動率 ≥70%（D5-D7 三天內長者主動互動 ≥1 次比例）
- 機構部署完成 + 機構員工培訓通過
- W13 RCA 紀錄 + W14 修補計畫推 CC 儀表板

### 2.2 Week 2（W14）穩定期

**核心目標**：日常互動觀察 + 每週反饋通話 + bug fix，日均互動 ≥5 次 + 棄用率（4-7 日 cohort）≤20% + 客服 ticket ≤1/戶/週。

**Day 8-14：日常互動觀察 + 每週反饋通話 + bug fix**

| Day | 主要活動 | 負責角色 | KPI |
|---|---|---|---|
| D8 | Operator 監控 dashboard 全戶活動 + 異常戶（互動 ≤2 次/天）主動介入 | Operator × 5 | 異常戶識別率 100% |
| D9-D10 | 子女 dashboard 查看率追蹤 + 子女主動聯絡引導 | Operator + CS × 2 | 子女 D7 dashboard 查看率 ≥60% |
| D11 | Operator 主動致電所有 15-20 戶子女進行週反饋通話（10 分鐘）；Mom Test 4 題校驗（§4.4）| Operator × 5 | 週反饋通話完成率 ≥85% |
| D12 | Operator 致電所有長者進行週反饋（5 分鐘 + NPS 收集）+ 棄用戶 RCA | Operator × 5 | 長者 NPS 收集率 ≥80% |
| D13 | bug fix Sprint 部署（Sprint 4 + W13 新發現 bug）；Sprint 4 退場戶教訓的 prevention check | 工程團隊 + Operator | P0 bug 0 / P1 bug ≤2 |
| D14 | W14 末週統計：日均互動次數 + 棄用率 + 客服 ticket 數；推 CC 儀表板週報 + Discord 通知 | Operator 主管 + CS 主管 | 三 KPI 全達標 → 進入 W15 |

**W14 末週 milestone**：
- 日均互動次數 ≥5 次/戶（Sprint 4 W14 W2 目標 ≥10 次/天偏高，Phase 6 對外族群 first-time 用戶 W2 ≥5 次合理）
- 棄用率（4-7 日 cohort，Day 4 後仍主動互動 ≥1 次/天比例）≤20%
- 客服 ticket ≤1/戶/週
- 子女 D7 dashboard 查看率 ≥60%（HEART Adoption 維度）
- 長者 W2 NPS ≥30（W4 末週目標 ≥35 中間值）

### 2.3 Week 3（W15）深化使用期

**核心目標**：個人化記憶累積 + 緊急偵測演習 + 進階功能引導，緊急偵測演習成功率 ≥80% + 個人化記憶召回率 ≥75% + 進階 feature 啟用率 ≥50%。

**Day 15-21：個人化記憶累積 + 緊急偵測演習 + 進階功能引導**

| Day | 主要活動 | 負責角色 | KPI |
|---|---|---|---|
| D15-D17 | F04 個人記憶 AI 累積追蹤：長者偏好 / 家人名字 / 過去故事被 AI 引用次數 | 工程團隊 + Operator | 個人化記憶召回率 ≥75% |
| D18 | 緊急偵測假事件演習（聲音異常 + IMU 模擬跌倒 + 互動中斷模擬），15-20 戶分批執行 ≥3 次 | Operator + 工程團隊 | 演習成功率 ≥80%（每次都應正確觸發）|
| D19 | 進階功能引導：F11 服藥提醒朋友語氣 + F14 雙向視訊 + F05 節日 / 節氣話題啟用；Operator 致電子女引導 | Operator + CS | 進階 feature 啟用率 ≥50%（≥7-10 戶啟用至少 1 項）|
| D20 | 紅線 monitor（safety-redlines §4）+ A/B 紅線觸發率追蹤 | 工程團隊 + Safety officer | 紅線 false positive ≤1/週/戶 |
| D21 | W15 末週統計：演習成功率 + 個人化召回率 + 進階 feature 啟用率；NPS W3 中間量測 + 退場戶 RCA | Operator 主管 + 工程主管 + Safety officer | 三 KPI 達標 + 紅線 monitor 通過 |

**W15 末週 milestone**：
- 緊急偵測假事件演習成功率 ≥80%（safety-redlines §3.3 C2 真實環境召回率目標 75%，演習版略高）
- 個人化記憶召回率 ≥75%（AI 在對話中主動引用長者偏好 / 家人名字 / 過去故事的比例）
- 進階 feature 啟用率 ≥50%（≥7-10 戶啟用 F11 / F14 / F05 至少 1 項）
- 紅線 false positive ≤1/週/戶（safety-redlines §5.1 設計目標）
- W3 子女 NPS ≥35（W4 目標 ≥40 中間值）
- W3 長者 NPS ≥33（W4 目標 ≥35 中間值）

### 2.4 Week 4（W16）量測 + 反饋期

**核心目標**：Sean Ellis Test + NPS / HEART 問卷 + 1 對 1 訪談 + PMF 訊號達標判定，**Sean Ellis ≥40% / NPS ≥40 / D30 retention ≥60%（良好）/ ≥70%（優秀 stretch；對齊 pmf-report.md §1.2 + §5） / 月流失 ≤5%** 四項全達標 = PMF 訊號達標。

**Day 22-28：Sean Ellis Test + NPS / HEART 問卷 + 1 對 1 訪談**

| Day | 主要活動 | 負責角色 | KPI |
|---|---|---|---|
| D22 | Sean Ellis Test 問卷部署（子女 App 內彈出 + 機構儀表板內 + 機構主管問卷）| CS + 機構 BD | 問卷回覆率 ≥80% |
| D23 | NPS 三組量測（子女 / 長者 / 機構員工）+ HEART 5 維 dashboard 更新 | Operator + CS | NPS 三組收集完成 |
| D24 | AARRR 漏斗完整數據彙整：Acquisition / Activation / Retention / Referral / Revenue 5 維 | CS 主管 + Data | 5 維數據完整 |
| D25 | 1 對 1 訪談啟動（≥10 戶子女 / ≥10 戶長者 / 1-2 機構主管 / 1-2 機構員工 30 分鐘訪談）| Operator + Operator 主管 | 訪談完成率 ≥80% |
| D26 | 退場戶 RCA 彙整（4 週中所有退場戶原因分類）+ Phase 6 招募過濾標準入清單 | Operator 主管 + CS 主管 | 退場戶 RCA 完整 |
| D27 | T42 PMF 量測機制驗證 + T43 法規 Soft Check 進度檢視 | PM + 法律顧問 | T42 / T43 4 週並行進度達標 |
| D28 | **W16 末週 PMF 訊號達標判定**：4 KPI 對標（Sean Ellis ≥40% / NPS ≥40 / D30 retention ≥60%（良好）/ ≥70%（優秀 stretch；對齊 pmf-report.md §1.2 + §5） / 月流失 ≤5%）| PM + CEO + 主管 | 4 KPI 全達標 → PMF 訊號達標；任一未達標 → Pivot trigger 評估 |

**W16 末週 milestone（PMF 訊號達標判定）**：

| KPI | 目標 | 達標判定 | 未達標處理 |
|---|---|---|---|
| Sean Ellis Test | ≥40% 子女回答「非常失望如果產品消失」| ✅ 達標：PMF 信號明確 | ⚠️ 未達標：質性訪談分析「為何不會失望」+ Pivot Solution 評估 |
| NPS 子女 | ≥40 | ✅ 達標 | ⚠️ 未達標：質性訪談分析推薦阻力 |
| NPS 長者 | ≥35 | ✅ 達標 | ⚠️ 未達標：質性訪談分析棄用信號 + Pivot Customer Segments 評估 |
| NPS 機構員工 | ≥4.0/5 | ✅ 達標 | ⚠️ 未達標：Hyp B 機構通路重評 |
| D30 retention | ≥70% | ✅ 達標：超越行業 50% 健康水位 + 接近優秀 70% | ⚠️ 50-70%：可接受但需深化；<50%：Pivot Solution + Channels |
| 月流失率 | ≤5% | ✅ 達標：Year 1 健康水位（unit-econ §3）| ⚠️ 5-10%：可接受；>10%：unit-econ LTV:CAC 重估 |

**4 KPI 全達標 = PMF 訊號達標**：直接進入 Year 1 H1 對外公開 launch 規劃 + Series A 募資準備。
**任 1 KPI 未達標**：啟動 Pivot 評估會議（CEO + PM + 工程主管 + 法律顧問 + Operator 主管）；對映 decision-w6 §4 Option C Pivot 4 觸發條件評估具體 Block 改動。

---

## §3. 每週量測機制

### 3.1 量測週次目標彙整表

| 週次 | 量測項目 | 工具 | 目標基線 | 對映 Phase 6 銜接 |
|---|---|---|---|---|
| **W1（W13）** | 部署成功率 + onboarding 完成率 + 首日互動 | UX log + 客服 SLA + Operator dashboard | ≥90% / ≥80% / ≥70% | Phase 6 招募 funnel onboarding SOP 驗證 |
| **W2（W14）** | 日均互動次數 + 棄用率（4-7 日 cohort）+ 客服 ticket | UX log + Helpdesk + Operator dashboard | ≥5 次 / ≤20% / ≤1 ticket/戶/週 | Phase 6 customer success SOP 驗證 |
| **W3（W15）** | 緊急偵測演習成功率 + 個人化記憶召回率 + 進階 feature 啟用率 | A/B + 紅線 monitor + dashboard | ≥80% / ≥75% / ≥50% | Phase 6 安全紅線 monitor 驗證 + T43 TFDA 接觸數據 |
| **W4（W16）** | Sean Ellis ≥40% / NPS ≥40 / D30 retention ≥60%（良好）/ ≥70%（優秀 stretch；對齊 pmf-report.md §1.2 + §5） / 月流失 ≤5% | 訪談 + Survey + AARRR dashboard | PMF 訊號達標 | **T42 PMF 量測機制完整數據 + Phase 7 Pitch Deck Slide 6 Traction 直接引用** |

### 3.2 每週量測機制詳述

**W1 量測機制詳述**：
- **部署成功率**：實際完成硬體配送 + 安裝 + 三方同意機制三項全部完成的戶數 / 招募完成 15-20 戶 × 100%
- **Onboarding 完成率**：D3 末「三方同意 + 家庭設定 + 緊急聯絡人」全部完成的戶數比例
- **首日互動率**：D5-D7 三天內長者主動互動 ≥1 次的戶數比例
- 量測工具：UX log（Supabase event tracking）+ 客服 SLA（Helpdesk ticket system）+ Operator dashboard（Grafana real-time）

**W2 量測機制詳述**：
- **日均互動次數**：每戶過去 7 天「AI 主動 + 長者回應的互動 ≥1 輪 = 1 次」的日均值
- **棄用率（4-7 日 cohort）**：onboarding 完成後 Day 4-7 期間「連續 4 天未主動互動」的戶數比例
- **客服 ticket 數**：每戶 / 週的客服請求數量（不含 onboarding 階段請求）
- 量測工具：UX log + Helpdesk + Operator dashboard

**W3 量測機制詳述**：
- **緊急偵測演習成功率**：≥3 次假事件演習（聲音異常 + IMU 模擬跌倒 + 互動中斷模擬）正確觸發比例
- **個人化記憶召回率**：AI 在對話中主動引用長者個人偏好 / 家人名字 / 過去故事的比例（每戶採樣 ≥10 次對話評估）
- **進階 feature 啟用率**：F11 服藥提醒朋友語氣 + F14 雙向視訊 + F05 節日 / 節氣話題，啟用至少 1 項的戶數比例
- 量測工具：A/B 紅線 monitor + dashboard + Operator 採樣評估

**W4 量測機制詳述**：
- **Sean Ellis Test**：子女問卷主問題「如果您不能再使用這個服務，您會感到？非常失望 / 有點失望 / 不會失望 / 不再使用」+ 補充問題（推薦對象 + 最大價值 + 改善建議）
- **NPS 三組**：子女 / 長者 / 機構員工分別量測「您會推薦給朋友 / 同事的可能性 0-10」
- **D30 retention**：onboarding 後第 30 天「長者主動互動 ≥3 次/天」的戶數比例
- **月流失率**：4 週內主動退場 + 強制退場戶數 / 招募完成戶數 × 100%
- 量測工具：訪談 + Survey + AARRR dashboard + Operator NPS 訪談

### 3.3 Phase 6 T42 PMF 量測機制 5 框架對映表

T42 PMF 量測機制（W6 後完成設計）的 5 框架（Sean Ellis / Retention / NPS / HEART / AARRR）在本 T41 4 週對外 Closed Beta 完整啟動：

| 5 框架 | W1 | W2 | W3 | W4 |
|---|---|---|---|---|
| **Sean Ellis Test** | — | — | — | ≥40%（PMF 達標標準）|
| **Retention curve** | D1 ≥90% | D7 ≥70% | D14 ≥60% | D30 ≥70%（PMF 達標）|
| **NPS 三組** | — | 子女 ≥30 / 長者 ≥30 | 子女 ≥35 / 長者 ≥33 | 子女 ≥40 / 長者 ≥35 / 機構 ≥4.0/5 |
| **HEART 5 維** | Adoption ≥80% | Engagement ≥5 次/天 | Task success ≥80% | Happiness（NPS）+ Retention 全達標 |
| **AARRR 漏斗** | Acquisition + Activation | Retention | Referral 質性 | Revenue（付費意願質性 + 量化）|

### 3.4 真實付費意願量測

**vs Sprint 4 免費試用的差異**：Phase 6 對外 Closed Beta 啟動 **三 Tier 定價感知測試 + 自願付費族群識別 + 退費機制**，量測真實付費意願（非僅問「您願付嗎」）。

**測試設計**（嚴守 pricing.md §4 三 Tier 既定定價）：

| Tier | 定價 | Phase 6 對外 Closed Beta 設計 |
|---|---|---|
| Tier 1 Starter | NT$799/月 | W3 起對「願意」族群開放，硬體 NT$9,990 + 月費 NT$799；首月免費試用 + 30 天退費保障 |
| Tier 2 Pro（主力）| NT$1,290/月 | 預設展示 Tier；硬體 NT$15,000 + 月費 NT$1,290；首月免費試用 + 30 天退費保障 |
| Tier 3 Premium | Custom | W4 對 ≥2 子女多帳號 + 個人化記憶高頻使用戶 anchor 展示 |

**量測指標**：
- **Activation rate**：4 週末「自願表達付費意願」戶數 / 15-20 戶 × 100%（目標 ≥40%）
- **Tier 分布**：選 Tier 1 / Tier 2 / Tier 3 比例（驗證 pricing.md §4 Anchor + Decoy 設計）
- **退費觸發**：30 天內退費戶數 / 啟動付費戶數 × 100%（目標 ≤15%）
- **質性訪談**：「為何選 Tier X」+「願付的觸發點」+「不願付的阻力」

**Phase 4 Pricing 校準輸入**：4 週末三 Tier 感知測試結果 → Phase 4 pricing.md 校準（若中位 WTP < NT$1,290 → 評估 Tier 2 降至 NT$999；若高於 NT$1,500 → 評估 Tier 3 提前推出）

### 3.5 緊急偵測準確率（safety-redlines §3.3 C2）

| 指標 | 量測方式 | Phase 6 W3 目標 |
|---|---|---|
| 召回率（recall）| 真實緊急事件中 AI 偵測到的比例 | ≥75%（真實環境噪音） |
| False positive 率 | AI 偵測為緊急但實際無事 | ≤1 次/週/戶 |
| False negative 率 | AI 漏報真實緊急事件 | ≤25% |
| 假事件演習通過率 | ≥3 次假事件演習正確觸發比例 | ≥80% |

**安全紅線**（safety-redlines §1.3 Plan-Only P1）：
- 量測結果僅內部評估 + 主管 review 規劃書內部呈現
- 對外宣傳一律不宣稱具體召回率數字（避免觸發 TFDA II 類認證需求）
- 對外用語：「AI 偵測為輔助通知工具，非保證式安全設備」

### 3.6 紅線 monitor 持續追蹤

safety-redlines §4.1（10 條絕對紅線 N1-N10）+ §4.2（6 條條件紅線 C1-C6）每週監測：

| 紅線類別 | 追蹤頻率 | 目標 |
|---|---|---|
| N1-N10 觸發次數 | 每日 | 0 次（任 1 次觸發 = critical incident，立刻 RCA）|
| C1-C6 觸發 | 每日 | ≤2 次/戶/週（含 true positive，含 false positive ≤1/戶/週）|
| Reverse 屬性觸發（feature-triage §3 R01-R07）| 每週 | 0 次（任 1 次 = UX 必須修正）|
| Plan-Only P1-P3 紅線 | 持續 | 對外宣傳零違規 |

---

## §4. 每日 / 每週標準作業流程（SOP）

### 4.1 客服 SOP

**每日 first responder 排班**：
- 早班（06:00-14:00）：1 客服專員 + 1 Operator backup
- 晚班（14:00-22:00）：1 客服專員 + 1 Operator backup
- 夜班（22:00-06:00）：1 Operator on-call（客服轉接緊急 ticket）

**Ticket 分級 SLA**：

| 等級 | 定義 | 回應 SLA | 解決 SLA |
|---|---|---|---|
| P0 緊急 | 紅線觸發 + 緊急偵測 + 服務全中斷 | ≤2 分鐘 | ≤2 小時 |
| P1 高 | 單戶服務中斷 + 機構儀表板異常 + 子女通知異常 | ≤15 分鐘 | ≤4 小時 |
| P2 中 | bug + UX 困惑 + 設定協助 | ≤2 小時 | ≤24 小時 |
| P3 低 | 諮詢 + 一般問題 + feature 詢問 | ≤4 小時 | ≤3 工作日 |

**Escalation flow**：
- P0：客服 → Operator 主管 → 工程主管 → CTO → CEO（10 分鐘 escalation chain）
- P1：客服 → Operator 主管 → 工程主管（30 分鐘 escalation）
- P2-P3：客服 → CS 主管（按 SLA 處理）

### 4.2 Operator SOP

**紅線觸發 / 對話介入 / 標註訓練資料三大職責**（嚴守 sprint-4-spec §5.2）：

| 職責 | 觸發條件 | 動作 |
|---|---|---|
| 監控 | 24×7 三班輪值 | dashboard 即時監看；長者主動互動次數 / 紅線觸發 / 異常偵測 alert review |
| 紅線介入 | N1-N10 + R1-R10 觸發 | 立刻人工接管；safety-redlines §4 紅線 SOP 嚴格執行；不可放任 LLM 自行處理紅線情境 |
| 標註訓練資料 | 每日整理 AI 對話 transcript（去敏感化）| 標註「適當 / 不適當 / 應改寫」；累積 4 週數據 → Year 1 H2 LLM fine-tune 訓練資料 |

**Operator 每日報告（晚班結束時提交）**：
- 當日異常戶清單 + 介入記錄
- 當日紅線觸發 log
- 當日緊急事件處理 log
- 當日 false positive 記錄
- 隔日早班交接事項

### 4.3 子女 App push SOP

**Daily summary 推播**：
- 推播時間：每日 21:00（子女晚間 review 黃金時段）
- 內容：當日 AI 主動互動次數 + 摘要主題（≤3 項，去原文）+ 情緒趨勢（含蓄表達）+ 健康訊號（若有，附「請與醫師確認」警語）
- 設計禁區：safety-redlines N9 + Reverse R04 嚴守「子女不收原文，只收 AI 生成摘要」

**緊急通知推播**：
- LINE + App push + 簡訊三層備援
- ≤5 分鐘 SLA（safety-redlines §3.3）
- 推播文字模板：「[時間] 您父母 / 母親可能發生異常 [情境]，請確認安全。回覆 1 = 我去聯絡 / 回覆 2 = 我已知不需協助 / 回覆 3 = 緊急請撥 119」

**雙向視訊推播**：
- 子女主動發起 → 長者端機器人響起 → 長者語音接聽 / 拒絕
- 視訊建立 ≤10 秒；fallback 純語音

### 4.4 家庭通話 SOP（每週固定時間 + Mom Test 4 題校驗）

**每週反饋通話**：
- 子女：每週末 10 分鐘通話（Operator × 5 分擔負責）
- 長者：每週日 5 分鐘通話 + NPS 收集
- 機構員工：每週末 5 分鐘 + NPS 收集

**Mom Test 4 題校驗（每週問子女，嚴守 Mom Test 原則）**：
1. 「過去 7 天，您父母最讓您擔心的具體事件是什麼？」（不問「擔心嗎」問具體事件）
2. 「您父母最近使用機器人時，您觀察到的最頻繁互動是什麼？」（不問「滿意嗎」問頻率）
3. 「過去 7 天您花了多少時間在父母照顧上？包含通話、奔波、心理擔憂時間。」（不問「值得嗎」問時間）
4. 「如果今天我們提高月費到 NT$1,500，您會繼續使用嗎？為什麼？」（不問「會付嗎」問為什麼）

### 4.5 客戶成功 SOP

**流失客戶救援**：
- 觸發條件：連續 3 天無互動 / 子女 dashboard 連續 7 天未開啟 / W2 NPS < 3
- Action：CS 主動致電子女了解原因 + 提供 3 種解決方案（① 客服深度協助 / ② Operator 1 對 1 教學 / ③ 退費 + 安心退場）

**退費機制**：
- 30 天退費保障（Phase 4 pricing §4 既定設計）
- 退費流程：CS 受理 → 7 工作日內處理 → 30 天內入帳
- 硬體回收：免費寄回（提供回收地址）+ factory reset 後再利用

**退場戶 RCA 訪談**：
- 30 分鐘質性訪談（必跑，不可省）
- 退場原因分類（11 類）：① 技術問題 / ② 長者抗拒 / ③ 子女不信任 / ④ 紅線觸發 / ⑤ 文化不適 / ⑥ 價格阻力 / ⑦ 健康因素（含長者過世）/ ⑧ 家庭結構變化 / ⑨ 機構合作中止 / ⑩ 設備故障 / ⑪ 其他
- 寫入 phase6_pilot_lessons.md → Year 1 H1 對外 launch 排除條件

---

## §5. 緊急應變 SOP（safety-redlines §5 對映）

### 5.1 跌倒 false positive / negative

**False Positive 處理**（safety-redlines §5.1 既定 SOP 延伸）：
- 記錄觸發時間 + 環境（光線 / 聲音 / 用戶狀態）
- ≤1 次/週為設計目標
- ≥3 次/週同一家庭 = CS 主動聯繫子女了解環境狀況 + 工程團隊調整偵測參數
- 每次 false positive 後：機器人「剛才我以為有狀況，還好您沒事！」減少長者焦慮

**False Negative 處理**：
- ToS 明載：「偵測功能為輔助通知工具，非保證式安全設備」
- 鼓勵保留傳統緊急按鈕作為被動安全網
- 不宣稱召回率數字（Plan-Only 階段 P1 紅線）
- W3 假事件演習成功率 ≥80% 為閾值；< 80% → 工程團隊立刻 RCA + 調整偵測模型

**True Positive 處理**（3 層確認機制）：
- Layer 2 rule-based 觸發 → AI 30 秒長者確認 → 5 分鐘子女確認 → 10 分鐘鄰居 / 119 提示
- 緊急事件處理 SLA：≤5 分鐘子女通知 + ≤2 分鐘機構儀表板 alert（若機構戶）

### 5.2 自殺風險偵測 → 1995

**觸發條件**：Layer 2 rule-based 偵測自傷意念關鍵詞（safety-redlines §2.6 N6）

**SOP 流程**（嚴守 safety-redlines §5.2）：
1. 關鍵詞 / 語義觸發 → Layer 2 立即接管；終止 LLM 生成；切換 hardcoded 安全回應
2. 機器人輸出（同理但引導求助）：「我聽到你說的了。你說的這些讓我很擔心你。你現在可以打 1925 安心專線，24 小時都有人接。我也要讓你的家人知道，讓他們陪著你，好嗎？」
3. 同步後台動作：推播緊急通知給所有子女帳號（標記：情緒危機訊號）+ 記錄對話摘要（非原文）供子女查看 + 次日早上確認長者狀況追蹤
4. 後續 48 小時：AI 每日主動關懷詢問（不提及自傷，問一般生活）+ 若信號再次出現 → 重複上述流程 + 建議子女安排心理諮商

**Phase 6 對外 Closed Beta 補充**（vs Sprint 4 內部）：
- Operator 立刻 escalate Operator 主管 + 安全官（非工程主管）
- 對外 Pilot 階段任 1 次自殺風險觸發 = critical incident，CEO 24 小時內 review
- 若觸發後長者實際自傷 = S0 危機，啟動 §5.3 危機 SOP + 法律顧問介入

### 5.3 長者過世 SOP（safety-redlines §5.3 對映）

**觸發條件**：子女主動通知 / 連續 5 天無任何互動 / 緊急事件確認後

**SOP 流程**：
1. **立即動作**：機器人進入「安靜模式」（不再主動發起對話 / 提醒）+ 子女 App 顯示「服務已暫停，感謝您的陪伴」+ 通知 CS 主動聯繫家屬了解情況
2. **資料處理**：保留對話記憶 / 互動摘要 6 個月（供家屬申請）+ 6 個月後自動刪除（PDPA §11）+ 家屬可申請「數位遺產包」（JSON 格式對話摘要 + 重要事件記錄）+ 家屬可申請延長保存 6 個月（最長 12 個月）
3. **訂閱處理**：通知家屬訂閱狀態 + 剩餘預付費用按比例退費（消保法 §19）+ 家屬確認後 30 日內完成退費
4. **硬體處理**：提供回收地址（免費寄回）+ 硬體 factory reset 後再利用 + 家屬不回寄：12 個月後自動停止服務並銷毀帳號資料
5. **家屬哀傷支持**：不向家屬推銷任何服務（N10 紅線延伸）+ 提供哀傷支持資源（社會局心理諮商 / 失智症協會）+ 最後一封 email：「謝謝您讓我們陪伴 OOO 阿嬤 / 阿公」（溫暖但不過度）

**Phase 6 對外 Closed Beta 補充**：所有資料處理流程需法律顧問 W13 前最終 sign-off 確認符合 PDPA §11 + 消保法 §19

### 5.4 機器故障 SOP（safety-redlines §5.4 對映）

**服務中斷等級**（safety-redlines §5.4 既定分級）：

| 等級 | 定義 | 應變時間 | 責任人 |
|---|---|---|---|
| P0 | 全服務不可用（AI Brain + 通知系統全中斷）| 2 小時內恢復 / 通知 | CTO + CEO |
| P1 | 緊急通知功能中斷（AI 對話可用但 LINE 通知失效）| 4 小時內恢復 | CTO |
| P2 | AI 對話品質下降（台語辨識異常 / 回應延遲）| 24 小時內修復 / 降級服務 | 工程師 |
| P3 | 硬體故障（單一裝置）| 5 工作天換機 | 客服 |

**P0 / P1 緊急通知 SOP**（safety-redlines §5.4 完整流程）：
- T+0：工程師警報 + CTO 通知
- T+30m：確認影響範圍（受影響用戶數）
- T+1h：所有受影響子女帳號推送 SMS：「[服務名稱] 目前系統維護中。如有緊急需求請直接致電父母或撥 119。預計恢復時間：[時間]。造成不便深感抱歉。」
- T+2h：服務恢復確認 + 二次通知
- T+24h：事後報告 + 補償方案（P0：延長服務 7 天）

**Phase 6 對外 Closed Beta 補充**：
- 偏鄉支援：4G 訊號弱 / 老舊住宅環境噪音 / 訊號斷線情境，由在地 maintenance partner（電信業者捆綁洽談中）提供 8 小時內到場
- 備機庫存：4 週 closed beta 階段保留 3 台備機應對硬體 P3 故障

### 5.5 子女失聯 SOP（safety-redlines §5.5 對映）

**多層備援緊急聯絡人**（safety-redlines §5.5 既定機制）：

```
緊急事件發生
    ↓
[第一層] 主要緊急聯絡人（子女 App 主帳號）
    → 3 分鐘內無回應升級
    ↓
[第二層] 備用緊急聯絡人（另一子女 / 配偶 / 兄弟姊妹）
    → 設計時強制設定至少 2 個緊急聯絡人
    → 5 分鐘內無回應升級
    ↓
[第三層] 機構員工（若機構戶）或 次要備用聯絡人（鄰居 / 社區關懷員 / 照服員）
    → 5 分鐘內無回應升級
    ↓
[第四層] 自動撥打 119 提示（機器人語音引導長者）
    「您的家人暫時聯絡不上，如果您需要幫助，請說『幫我叫救護車』
     或讓旁邊的人撥 119。我會繼續陪您。」
```

**Phase 6 對外 Closed Beta 補充**：
- W1 onboarding 強制設定 ≥2 個緊急聯絡人（系統不允許只填 1 個）
- W2 中點 CS 主動致電子女確認緊急聯絡人有效
- 若長者獨居且無有效緊急聯絡人 = 在子女 App 顯示警示 + Operator 主動介入協助補充

---

## §6. Operator 排班 + 人力配置

### 6.1 Operator 排班設計

**4 週對外 Closed Beta Operator 配置（vs Sprint 4 升級版）**：

| 維度 | Sprint 4 W11-W12 內部 | **Phase 6 W13-W16 對外（本 T41）** |
|---|---|---|
| Operator 人數 | 4 人 + 1 替補（兼任）| **5 人專人輪班 + 1 偏鄉支援 + 1 替補（5 + 2 = 7 人）** |
| 班次配置 | 24×7 三班輪值（早 / 晚 / 夜）| **24×7 三班輪值（早 2 人 / 晚 2 人 / 夜 1 人）+ 偏鄉支援 on-call** |
| 客服專員 | 1 人兼任 Operator | **2 人專職客服**（早 / 晚分擔 + 夜班 Operator on-call）|
| CS 專員 | 1 人兼任 | **2 人專職 CS**（退費 / 流失救援 / 訪談）|
| 4 週人力總計 | ~40 人週 | **~80 人週（5 Operator + 2 客服 + 2 CS 全週 + 偏鄉支援 on-call）** |

### 6.2 班次時段設計

**早班（06:00-14:00）**：
- 2 Operator + 1 客服專員
- 高峰時段：06:30 主動問候時段 + 紅線觸發機率高峰（服藥詢問 + 健康疑問）
- 主要動作：monitor dashboard + 紅線介入 + 客服 ticket 處理

**晚班（14:00-22:00）**：
- 2 Operator + 1 客服專員
- 高峰時段：18:00 主動問候時段 + 子女晚間 review 黃金時段（21:00 daily summary 推播）
- 主要動作：monitor + 紅線介入 + 子女回應追蹤 + Daily summary 推播

**夜班（22:00-06:00）**：
- 1 Operator on-call + 客服轉接緊急 ticket
- 主要動作：緊急偵測監控（互動次數低）+ P0/P1 緊急 ticket 處理

**偏鄉支援 on-call**：
- 1 人在地 maintenance partner（電信業者捆綁洽談中）
- 觸發條件：偏鄉戶硬體故障 / 訊號斷線 / 三班 Operator 無法遠端處理
- SLA：8 小時內到場（vs 都會區 5 工作天換機）

### 6.3 人力預算估算

**4 週人力預算（Operator + 客服 + CS）**：

| 角色 | 人數 | 4 週工時 | 月薪估算 | 4 週成本（NT$萬）|
|---|---|---|---|---|
| Operator（5 + 2 = 7）| 7 人 | 7 × 160 hr = 1,120 hr | NT$50,000 / 月 | 35 |
| 客服專員 | 2 人 | 320 hr | NT$45,000 / 月 | 9 |
| CS 專員 | 2 人 | 320 hr | NT$55,000 / 月 | 11 |
| Operator 主管 | 1 人 | 160 hr | NT$80,000 / 月 | 8 |
| 偏鄉 maintenance partner | 1 人 on-call | 估 80 hr | NT$1,000 / hr | 8 |
| 安全官（紅線監測）| 1 人 兼任 | 80 hr | NT$80,000 / 月 | 4 |
| 法律顧問 on-call | 0.5 人 | 估 40 hr | NT$5,000 / hr | 5 |
| **小計（保守）** | — | — | — | **80** |
| **中位估算（含培訓 + 加班 + 應變）** | — | — | — | **100** |
| **激進估算（含全程督導 + 24×7 安全官 + 危機應變）** | — | — | — | **120** |

**人力預算結論**：NT$80-120 萬（4 週對外 Closed Beta，💰 §7 預算對映）

### 6.4 Operator 訓練（升級 vs Sprint 4）

**5 天課程**（嚴守 sprint-4-spec §5.2）+ Phase 6 對外 Closed Beta 補充：

- D1：safety-redlines §4 紅線 N1-N10 + R1-R10 全紅線複習 + 拒絕話術模板演練（10 個情境）+ **Phase 6 補充：對外用戶（非員工家屬）信任建立話術**
- D2：long者場景 vulnerable population 倫理（語速 / 複合選項 / 疲憊辨識 / 三方同意）+ **Phase 6 補充：一般用戶 vs 員工家屬同意機制差異**
- D3：WoZ 後台工具熟練（即時對話介入 + 紅線標記 + 訓練資料標註）
- D4：緊急偵測 SOP（safety-redlines §5.1 跌倒 SOP + §5.2 自殺風險 SOP + §5.4 機器故障 SOP）+ **Phase 6 補充：對外用戶長者過世 §5.3 SOP 演練**
- D5：Dry Run 演練（模擬 1 戶長者 1 小時互動 + 紅線觸發 3 次 + 緊急偵測 1 次；通過評核 ≥8/10 才上線）+ **Phase 6 補充：3 戶模擬演練（涵蓋 3 persona 場景）**

---

## §7. 預算估算（📋 post-approval）

### 7.1 4 週對外 Closed Beta 總預算

| 預算項目 | NT$萬（保守）| NT$萬（中位）| NT$萬（激進）| 說明 |
|---|---|---|---|---|
| **Operator 人力**（§6.3）| 80 | 100 | 120 | 5 Operator + 2 客服 + 2 CS + 主管 + 偏鄉支援 + 安全官 + 法律顧問 |
| **硬體**（15-20 戶 × NT$15-20K）| 30 | 35 | 40 | WoZ 平板形態 BOM NT$18,000（unit-econ §1.2）×15-20 戶 |
| **雲端 + LLM API** | 15 | 20 | 25 | GPT-4o-mini API + Google Cloud STT/TTS + 後台 dashboard 雲端基礎設施 |
| **客服 + 客戶成功 系統** | 20 | 25 | 30 | Helpdesk 系統 + CS dashboard + Retention 追蹤 + 訪談錄音 + 問卷工具 |
| **部署 + 配送** | 15 | 20 | 25 | 在地部署夥伴（北 / 中 / 南三區）+ 配送 + 安裝指導 + 偏鄉支援 |
| **緊急應變預備金** | 10 | 15 | 20 | 危機處理 + 退費 + 補償方案 + 法律應對 + 公關處理 |
| **小計** | **170** | **215** | **260** | — |

**4 週對外 Closed Beta 總預算（中位估算）**：**NT$215 萬**（保守 NT$170 萬 / 激進 NT$260 萬）

### 7.2 各預算項目細節

**Operator 人力 NT$80-120 萬**：§6.3 詳述

**硬體 NT$30-40 萬**：
- WoZ 平板形態：iPad / Samsung Tab S9 FE（已有 BSMI ✅）+ 後台 dashboard 接入
- BOM NT$18,000（unit-econ §1.2 基準）× 15-20 戶 = NT$27-36 萬
- 保固 + 備機 3 台 = NT$5-10 萬
- 偏鄉戶硬體強化（防摔殼 / 4G hotspot）= NT$3-5 萬

**雲端 + LLM API NT$15-25 萬**：
- GPT-4o-mini API：估每戶日均 100 次對話 × NT$0.05 / 次 × 30 天 × 15-20 戶 = NT$2.25-3 萬 / 月
- Google Cloud STT / TTS：估每戶日均 50 次 × NT$0.02 / 次 × 30 天 × 15-20 戶 = NT$0.45-0.6 萬 / 月
- 後台 dashboard 雲端：Grafana + PostgreSQL + Redis = NT$5 萬 / 月
- 4 週總計：~NT$8-10 萬基礎 + NT$7-15 萬 buffer

**客服 + 客戶成功 系統 NT$20-30 萬**：
- Helpdesk 系統（Freshdesk / Zendesk）4 週 trial / paid = NT$3-5 萬
- CS dashboard + Retention 追蹤工具 = NT$5-8 萬
- 訪談錄音 + 逐字稿服務 = NT$3-5 萬
- 問卷工具（SurveyMonkey / Typeform）= NT$2-3 萬
- 內部建構工時（前端工程師 + 後端工程師 0.5 人月）= NT$7-9 萬

**部署 + 配送 NT$15-25 萬**：
- 在地部署夥伴（北 / 中 / 南三區，每區 1 戶 = NT$3,000 × 15-20 戶）= NT$4.5-6 萬
- 配送費（黑貓 + 順豐）= NT$2-3 萬
- 安裝指導（Operator + 在地夥伴）= NT$5-10 萬
- 偏鄉支援（電信業者捆綁 + 4G hotspot 設定）= NT$3-5 萬

**緊急應變預備金 NT$10-20 萬**：
- 危機處理（單一戶 P0 危機處理 = NT$3-5 萬 × 估 1-2 次）= NT$3-10 萬
- 退費（30 天退費保障 + 硬體回收）= NT$2-5 萬
- 補償方案（服務中斷補償 = 延長 7 天）= NT$1-2 萬
- 法律應對（律師 on-call + 文件審核）= NT$2-3 萬
- 公關處理（媒體應對 + 用戶溝通）= NT$1-3 萬

### 7.3 vs Sprint 4 預算對比

| 預算項目 | Sprint 4 W11-W12（2 週）| **Phase 6 W13-W16（4 週，本 T41）** | 倍數 |
|---|---|---|---|
| Operator 人力 | NT$30-50 萬 | NT$80-120 萬 | 2.4-2.7× |
| 硬體 | NT$15-25 萬 | NT$30-40 萬 | 1.6-2× |
| 雲端 + LLM API | NT$5-8 萬 | NT$15-25 萬 | 3-3.1× |
| 客服 + 客戶成功 | NT$10-15 萬 | NT$20-30 萬 | 2× |
| 部署 + 配送 | NT$8-12 萬 | NT$15-25 萬 | 1.9-2.1× |
| 緊急應變預備金 | NT$5-10 萬 | NT$10-20 萬 | 2× |
| **總計** | **NT$73-120 萬**（Sprint 4 ~NT$95 萬中位）| **NT$170-260 萬**（中位 NT$215 萬）| **2.3×** |

**倍數差異主因**：Phase 6 對外 Closed Beta vs Sprint 4 內部閉迴路 ① 戶數規模 1.8-2× ② 期間 2× ③ Operator 升級專人輪班 ④ 客服 / CS 專職化 ⑤ 偏鄉支援增加

### 7.4 Pre-Seed 募資對映（decision-w6 §8.3）

decision-w6 §8.3 Pre-Seed 對應 NT$1,000-2,000 萬，用途「90 天 MVP → Phase 5-6 WoZ + 首批訪談」。本 T41 對外 Closed Beta NT$170-260 萬 = Pre-Seed 13-26% 配置，合理範圍內。

---

## §8. 風險清單 + 緩解

### 8.1 風險清單（影響範圍 × 機率 評分）

| # | 風險 | 影響範圍 | 機率 | 嚴重度 | 緩解方案 |
|---|---|---|---|---|---|
| **R01** | 真實環境緊急偵測失敗（False Negative 真實事件未偵測）| 戶 → S0 危機 | 中 | S0 | ① ToS 明載「非保證式安全設備」② 保留傳統緊急按鈕 ③ W3 假事件演習 ≥80% 通過 ④ 不宣稱召回率 |
| **R02** | 長者心理抗拒（首 2 週棄用率 ≥30%）| 戶 → 棄用率超標 | 中高 | S1 | ① Operator W1-W2 主動介入 ② 三方同意機制嚴守 ③ feature-triage R01-R07 Reverse 屬性全防 ④ 退場戶 RCA 入清單 |
| **R03** | 家庭網路不穩（偏鄉 4G 訊號弱）| 偏鄉戶 → 服務中斷 | 高（偏鄉戶）| S2 | ① 偏鄉支援 on-call 8 小時內到場 ② 4G hotspot 備援 ③ 端側基本功能（觸發詞 + 離線問候）可用 |
| **R04** | 子女反悔退費（30 天內 ≥15%）| Activation rate → PMF 信號 | 中 | S1 | ① 30 天退費保障明示 ② CS W2 中點主動致電降低不確定性 ③ 質性訪談識別退費阻力 |
| **R05** | 機構員工不配合（dashboard 未使用 / 緊急通報未處理）| 機構戶 → Hyp B 信號弱化 | 中（機構戶）| S1 | ① W1 1 日培訓 + 通過評核 ② W2 中點 Operator 主動致電 ③ 機構主管週末 review 機制 ④ 員工 NPS ≥4.0/5 為退場閾值 |
| **R06** | 自殺風險偵測 false positive（過度敏感）| 戶 → 用戶創傷 + 信任崩潰 | 低 | S0 | ① Layer 2 rule-based 關鍵詞清單嚴謹（safety-redlines §2.6）② Operator 即時人工確認 ③ 觸發後 48 小時追蹤 ④ 心理諮商資源整備 |
| **R07** | 長者過世（4 週內 1-2 戶機率）| 戶 → 家庭哀傷 + 媒體風險 | 中（高齡族群）| S1 | ① safety-redlines §5.3 SOP 全程嚴守 ② 法律顧問 W13 前最終 sign-off ③ 不向家屬推銷（N10）④ 哀傷支持資源 |
| **R08** | 機器故障（P0 全服務中斷）| 全戶 → 4 週 closed beta 失敗 | 低 | S0 | ① 雲端高可用架構 ② SMS 三層備援 ③ P0 SLA 2 小時恢復 ④ T+1h 子女通知模板 |
| **R09** | 子女失聯（緊急聯絡人無回應）| 戶 → 緊急事件處理失敗 | 中 | S1 | ① W1 強制 ≥2 緊急聯絡人 ② W2 中點 CS 確認有效 ③ 多層備援（safety-redlines §5.5）④ 119 提示 fallback |
| **R10** | AI 幻覺生成不適當內容（觸及 N1-N10）| 戶 → 信任崩潰 + 法律風險 | 低中 | S0-S1 | ① Layer 2 rule-based 守門器 ② Operator 即時撤回 ③ 致電個案家屬告知 ④ RCA 修補 system prompt ⑤ 法律顧問 on-call |
| **R11** | Sean Ellis < 40%（PMF 信號未達）| 全項目 → Pivot trigger | 中 | S1 | ① decision-w6 §4 Option C Pivot 4 觸發條件評估 ② 質性訪談分析阻力 ③ Pivot Solution / Customer Segments 評估 |
| **R12** | 4 週內 ≥4 戶退場（20% 強制退場）| Phase 6 整體 → Pivot trigger | 中 | S1 | ① Sprint 4 退場戶教訓全採用 ② 招募過濾標準嚴謹 ③ W2-W3 連續退場 ≥3 戶 = 暫停部署啟動 RCA |
| **R13** | 法律 / 監管事件（PDPA 投訴 / TFDA 質疑）| 全項目 → 暫停 | 低中 | S1 | ① T43 法規 Soft Check 4 對接窗口並行 ② 法律顧問 W13 前最終 sign-off ③ 三方同意機制嚴守 ④ 對外宣傳零違規 |
| **R14** | Operator 短缺 / 流失（4 週內 ≥2 人離職）| 整體服務品質 → SLA 違反 | 中 | S2 | ① 替補 2 人保留 ② 5 天培訓通過評核 ③ 加班費 + 危險加給 ④ 主管 1 對 1 心理支持 |
| **R15** | 媒體負面報導（用戶投訴 / 危機事件）| 品牌 + Phase 7 Pitch | 低 | S1 | ① 公關預備金 NT$1-3 萬 ② 用戶溝通 SOP ③ CEO 24 小時 review critical incident ④ 主管 review 規劃書內部呈現 |

### 8.2 風險緩解總原則

1. **嚴格 SOP 執行**：safety-redlines §4-§6 + sprint-4-spec §5 + 本 T41 §4-§5 SOP 全程嚴守，禁簡化禁繞過
2. **退場戶 RCA 入清單**：Sprint 4 + Phase 6 退場戶 RCA 全部分類入 Year 1 H1 對外 launch 排除條件
3. **CS 主動介入**：W1 部署期 / W2 中點 / W3 NPS 中間量測 / W4 退場戶 RCA，CS 在每個關鍵節點主動致電
4. **Operator + 法律顧問雙監測**：紅線觸發 + 法規 readiness 並行追蹤；任 1 紅線觸發 = critical incident 24 小時 CEO review
5. **W12 主管 review 規劃書誠實呈現**：4 週 closed beta 結果（含 Pivot trigger 觸發）誠實呈現，不修飾不誇大；嚴守 phase-0-answers §54-§63 對外網頁紀律

### 8.3 Pivot 評估會議觸發條件

任 1 條件觸發 → 啟動 Pivot 評估會議（CEO + PM + 工程主管 + 法律顧問 + Operator 主管）：

| Pivot 觸發條件 | 對映 decision-w6 §4 Option C Pivot Block |
|---|---|
| W2 連續退場 ≥3 戶（30%）| Pivot Solution + Channels（加強子女代理層）|
| W3 紅線觸發 ≥3 次同戶 | Pivot Solution（端側 Layer 2 rule-based 升級）|
| W4 Sean Ellis < 30% | Pivot Customer Segments + Revenue Streams |
| W4 D30 retention < 50% | Pivot Solution + Channels |
| 4 週內任 1 自殺事件 / 長者死亡 / 媒體危機 | Pivot Channels（暫停對外擴張，回到內部閉迴路）|

---

## §9. 對 T42 PMF 量測 / T43 法規 Soft Check 的銜接

### 9.1 T42 PMF 量測機制銜接

**T42 PMF 量測機制設計**（W6 後完成設計，本 T41 完整啟動）：

| T42 5 框架 | 本 T41 啟動週次 | 目標基線 | 對 T42 提供 |
|---|---|---|---|
| Sean Ellis Test | W4 末週 | ≥40% | 真實數據基線 + 質性訪談原始資料 |
| Retention curve | W1-W4 全程 | D30 ≥70% | 4 週 cohort tracking 完整曲線 + 棄用戶 RCA 11 類分類 |
| NPS 三組 | W2/W3/W4 末週 | 子女 ≥40 / 長者 ≥35 / 機構員工 ≥4.0/5 | 三組 NPS 趨勢 + 質性 insight |
| HEART 5 維 | W1-W4 全程 | 5 維全達標 | HEART dashboard 真實數據 |
| AARRR 漏斗 | W1-W4 全程 | Activation ≥40% / Retention D30 ≥70% / Revenue 自願付費 ≥40% | 5 維漏斗 funnel + Revenue 真實付費意願量化 |

**T42 後續使用**：
- Phase 7 Pitch Deck Slide 6 Traction 直接引用 4 週 closed beta 數據
- Phase 8 主管 review 規劃書 PMF 信號呈現
- Year 1 H1 對外 launch 量測機制基線

### 9.2 T43 法規 Soft Check 銜接

**T43 法規 Soft Check 4 對接窗口**（decision-w6 §7.2 §7.4 既定）+ 本 T41 4 週並行啟動：

| T43 對接窗口 | 本 T41 啟動週次 | 4 週內里程碑 | 對 T43 提供 |
|---|---|---|---|
| PDPA DPIA 首版 | W1 啟動（律師 W13 前最終 sign-off）| W2 末週 DPIA 首版完成 | DPIA 文件 + 三方同意機制執行紀錄 |
| TFDA 業者輔導窗口 | W2 啟動接觸 | W4 末週確認跌倒偵測宣稱準確率觸發 II 類具體文字門檻 | TFDA 接觸紀錄 + 跌倒偵測準確率閾值 |
| AI 基本法 readiness 評估 | W1 啟動律師（理慈 / 萬國律師事務所）| W3 末週 readiness 評估報告 | AI 基本法 readiness 報告 + 高風險 AI 分類預判 |
| 119 緊急服務直接介接合法性 | W2 啟動衛福部接觸 | W4 末週確認 Year 2+ 規劃路徑 | 119 介接合法性確認 + Year 2 規劃 |

**T43 後續使用**：
- Phase 7 Pitch Deck Risk & Mitigation Slide 8 引用
- Phase 8 主管 review 規劃書認證路徑呈現
- Year 1 H2 ODM 硬體啟動前認證準備

### 9.3 W12 主管 review 規劃書數據輸入

**4 週對外 Closed Beta 結果 → W12 主管 review 規劃書 5 Slide 直接引用**：

| 規劃書 Slide | 引用本 T41 數據 |
|---|---|
| Slide 4 Persona 假設升級 | 三 persona（A / B / C）desk 假設 🟡 → 4 週真實驗證 ✅ 升級 |
| Slide 5 Business Model 三 Tier | 三 Tier 定價感知測試結果 → Tier 分布 + 自願付費族群 + 退費率 |
| Slide 6 Traction（規劃書版）| Sean Ellis / NPS / D30 retention / 月流失 4 KPI 達標情況 |
| Slide 7 Financial Model | unit-econ LTV:CAC 5.95:1 / Payback 4.0 月 / Series A NT$7,000-10,000 萬 + 4 週 closed beta 真實成本 |
| Slide 8 Risk & Mitigation | 風險清單 §8.1 15 項 + T43 法規 Soft Check 4 窗口進度 |

---

## §10. Coverage Matrix

### 10.1 必涵蓋章節覆蓋度

| 必涵蓋章節 | 本 T41 文件對映 | 完整度 |
|---|---|---|
| §1 Beta 目標 + scope | §1 4 週對外 Closed Beta 三大目標 + 範圍邊界 + vs Sprint 4 區隔 | ✅ |
| §2 4 週時程設計 | §2 W1 部署 + onboarding / W2 穩定期 / W3 深化使用 / W4 量測 + 反饋 | ✅ |
| §3 每週量測機制 | §3 W1-W4 KPI 表 + 5 框架對映 + 真實付費意願 + 緊急偵測準確率 + 紅線 monitor | ✅ |
| §4 每日 / 每週標準作業流程（SOP）| §4 客服 / Operator / 子女 App push / 家庭通話 / 客戶成功 5 SOP | ✅ |
| §5 緊急應變 SOP（safety-redlines §5 對映）| §5 跌倒 FP/FN + 自殺 + 長者過世 + 機器故障 + 子女失聯 5 SOP | ✅ |
| §6 Operator 排班 + 人力配置 | §6 排班設計 + 班次時段 + 人力預算 + 訓練 4 維 | ✅ |
| §7 預算估算（📋 post-approval）| §7 4 週對外 Closed Beta 總預算 NT$170-260 萬 + 細節 + vs Sprint 4 對比 + Pre-Seed 對映 | ✅ |
| §8 風險清單 + 緩解 | §8 15 項風險清單 + 緩解總原則 + Pivot 評估會議觸發條件 | ✅ |
| §9 對 T42 / T43 銜接 | §9 T42 PMF 量測機制銜接 + T43 法規 Soft Check 銜接 + W12 主管 review 規劃書 5 Slide 數據輸入 | ✅ |
| §10 Coverage Matrix | 本節 | ✅ |

### 10.2 4 紀律自我檢核

| 紀律 | 達成度 | 說明 |
|---|---|---|
| 1. Plan-Only Mode 所有實作項標 📋 | ✅ | §7 預算估算明標 📋 post-approval；§1.2 In Scope 全 4 週對外 Closed Beta 為 📋 post-approval execution；§2 4 週時程 W13-W16 為 📋 |
| 2. 報告對象華碩主管客觀中立 | ✅ | 全文無 ASUS 推銷論述 + 偏鄉支援「電信業者捆綁洽談中」客觀呈現 + 對外網頁紀律嚴守 |
| 3. 禁用「demo」+ 禁稱「Mode E」 | ✅ | 全文無「demo」字眼（一律「主管 review 規劃書」/「內部 review 規劃書」/「主管 walkthrough 規劃書」）+ 全文無「Mode E」（一律「PM Flow v0.1」）|
| 4. Write 到指定路徑 + 5 行回報 | ✅ | Write 至 /home/node/projects/elder-companion-ai-mvp/docs/closed-beta-design.md + 5 行回報（無貼整份內容）|

### 10.3 反 Anti-pattern 自我檢核

| Anti-pattern | 是否規避 | 說明 |
|---|---|---|
| 與 Sprint 4 內部 Closed Beta 混淆 | ✅ | §1.3 vs Sprint 4 明確區隔表 |
| Sean Ellis ≥30%（接近 PMF）誤升 ≥40%（PMF 達標）| ✅ | §1.3 + §3.1 明確區分 Sprint 4 ≥30% vs Phase 6 ≥40% |
| 預算數字未含 Operator 升級 vs Sprint 4 | ✅ | §7.3 vs Sprint 4 預算對比表 |
| 量測機制與 T38 重複（缺差異化）| ✅ | §3.4 真實付費意願量測 + §3.5 緊急偵測準確率為 Phase 6 對外 Closed Beta 新增 |
| 風險清單只列風險未列緩解 | ✅ | §8.1 15 項全有緩解方案 |
| Pivot 觸發條件未對映 decision-w6 §4 Option C | ✅ | §8.3 Pivot 評估會議觸發條件 5 條全對映 decision-w6 §4 Option C |
| Operator 排班僅照搬 Sprint 4 未升級 | ✅ | §6.1 vs Sprint 4 升級表 + §6.2 班次設計 + §6.3 7 人配置 |
| 對外 Pilot 階段缺對外用戶（非員工家屬）特殊考量 | ✅ | §1.3 用戶比例員工 ≤30% / 一般 ≥50% + §2.1 三方同意機制對外用戶 UX 更嚴謹 + §6.4 Operator 訓練 D1/D2 對外用戶補充 |
| 完成判定缺四項全達標 KPI | ✅ | §2.4 W16 PMF 訊號達標判定 4 KPI 表 |
| 未銜接 T42 / T43 | ✅ | §9 T42 PMF 量測機制 + T43 法規 Soft Check 完整銜接 |
| 違反「Mode E」禁用 | ✅ | 全文無「Mode E」字眼 |
| 違反「demo」禁用 | ✅ | 全文無「demo」字眼 |
| 違反 phase-0-answers §54-§63 對外網頁紀律 | ✅ | 本文件為內部 docs/*，✅/🟡/📋 標籤保留；對外網頁渲染時依紀律剝離 |

---

## §11. 參考文獻

- T35 decision-w6.md §7.2 + §7.4 Phase 6 Pilot 設計 + Phase 8 主管 Review 規劃書架構 ✅
- T38 sprint-4-spec.md Sprint 4 W11-W12 內部 Closed Beta 規格書 ✅
- T28 safety-redlines.md §1-§6 三層紅線架構 + 8 維度深化 + 責任歸屬 + 5 危機應變 SOP + UX 防護 ✅
- T19 persona.md 三 persona（A / B / C）desk research 假設草稿 🟡
- T22 jtbd-day-in-life.md JTBD + Day-in-the-Life mapping 🟡
- T27 feature-triage.md 22 feature × MoSCoW + RICE + Kano 三框架 + Reverse 屬性 7 條 ✅
- T30 lean-canvas.md 三 Canvas（A / B / D）整合 ✅
- T32 pricing.md 三層 Tier（Starter NT$799 / Pro NT$1,290 / Premium custom）+ Madhavan 9 Rules ✅
- T05 phase-0-answers.md 五問答案 + Plan-Only Mode 校準 + 對外網頁紀律 ✅
- Eric Ries, *The Lean Startup*, 2011：Built-Measure-Learned cycle；PMF 量測（Sean Ellis ≥40%）
- Sean Ellis, *Hacking Growth*, 2017：Sean Ellis Test 設計
- Google HEART Framework：5 維用戶體驗量測（Happiness / Engagement / Adoption / Retention / Task success）
- Dave McClure, *AARRR Pirate Metrics*：5 階段漏斗（Acquisition / Activation / Retention / Referral / Revenue）
- Reichheld, *Net Promoter Score*：NPS 計算（Promoters 9-10 - Detractors 0-6）
- Rob Fitzpatrick, *The Mom Test*, 2013：3 rules（past events / not leak product / specific money-time）
- PDPC 2025/8 成立 + PDPA 2025/12 修訂版 + AI 基本法 2025/12（cert-timeline.md §11 監控）
- 衛福部長照 3.0（2025/12/31 行政院核定；NT$60K/3 年智慧輔具補貼 2026/07）

---

> **文件狀態**：✅ Phase 6 T41 4 週對外 Closed Beta 執行設計書完成（PM Flow v0.1）
> **核心定位**：本 T41 是「Phase 6 對外 4 週 Closed Beta」執行設計書，與 T38 Sprint 4 W11-W12 內部 Closed Beta 明確區隔
> **核心訊息**：15-20 戶家庭 + 1-2 機構 4 週對外 Closed Beta；目標 Sean Ellis ≥40% / NPS ≥40 / D30 retention ≥60%（良好）/ ≥70%（優秀 stretch；對齊 pmf-report.md §1.2 + §5） / 月流失 ≤5%（PMF 訊號達標）
> **預算估算**：4 週總預算 NT$170-260 萬（中位 NT$215 萬，📋 post-approval）；Operator 5 + 2 人升級專人輪班 + 偏鄉支援
> **銜接**：T42 PMF 量測機制 + T43 法規 Soft Check + W12 主管 review 規劃書 5 Slide 數據輸入
> **下一步**：T42 PMF 量測機制設計（W6 後）+ T43 法規 Soft Check（W13+ 4 對接窗口並行）+ T49-T51 Phase 8 主管 Review 規劃書
> **懷特介入點**：T51 主管 review 規劃書（W12，懷特親自向 ASUS 主管 1 位 review + 取得 go/no-go）
