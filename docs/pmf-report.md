# PMF 量測機制設計 — 長者互動陪伴機器人 × AI Brain
**Phase**: PM Flow v0.1 Phase 6 T42（Plan-Only Mode）
**Period**: 90 天 MVP Pilot W13+ 起算，延伸至 Year 1-3 持續量測
**報告對象**: 華碩（ASUS）AI 代理人 / 服務型機器人主管（客觀中立，無 ASUS 推銷合作論述）
**Plan-Only 聲明**: 本文件為「PMF 量測機制設計書」，非「已執行量測成果」。所有量測值標 🟡 hypothesis；所有量測工具 / 流程標 📋 post-approval execution；所有 desk-validated 結論標 ✅。
**禁用字眼**: demo（全文改稱「主管 review 規劃書」）；禁稱「Mode E」（本案是 PM Flow v0.1）。

---

## 0. Executive Summary

本文件為「長者互動陪伴機器人 × AI Brain」90 天 MVP Phase 6 Pilot 及 Year 1-3 持續量測，產出完整 PMF 量測機制設計，涵蓋 5 大框架（Sean Ellis / Retention Curve / NPS / HEART / AARRR）、NSM 設計、量測工具基礎建設、量測節奏、PMF 訊號判定標準、Pivot trigger 機制、dashboard 設計，及對 W12 Gate / Phase 7 主管 review 規劃書的銜接。

**5 項核心結論**：

1. **NSM 推薦「長者週主動互動次數」**：最直接反映陪伴服務核心價值（不孤單），可操作、可追蹤、與子女 WTP 驅動因素直接對應；目標 Year 1 H1 週均 ≥20 次。

2. **Sean Ellis 測試為 PMF 最快早期訊號**：Phase 6 Pilot W4 末（≥30 有效樣本）執行，「非常失望」≥40% 為 PMF 達到門檻；Sprint 4 closed beta 目標 ≥30%（內部基線）。

3. **Retention Curve D1/D7/D30/D60/D90 為判定 PMF 最關鍵依據**：D60→D90 差異 <5% 為 flatten 訊號，是 Year 1 Scale 決策的充分條件。

4. **Plan-Only Mode 特殊校準**：Phase 6 Pilot 執行前，所有量測值為假設基準線（🟡），不可作為已驗證 PMF 訊號；所有「預期量測值」需在 Pilot 實際執行後才能升 ✅。

5. **Pilot 樣本量 ≥30 為統計信度門檻**：Sprint 4 closed beta 8-10 戶、Phase 6 Pilot 10-20 戶，合計目標達到 ≥30 有效量測樣本；若不足 30 則結論需以 interview-plan.md 質性訪談補強，並在每項結論標示樣本警示。

---

## §1. PMF 量測 5 大框架完整設計

### §1.1 Sean Ellis Test

**理論基礎**：Sean Ellis（2009）提出，若 ≥40% 用戶回答「如果不能再使用此產品，我會非常失望」，則達到 PMF 訊號門檻。Eric Ries《The Lean Startup》引用此測試作為 PMF 量測的最快早期指標（evidence/v6_3_research_a1.md §5 對應）。

**問卷設計（中文版）**：

主問題：
> 「如果您不能再使用這個服務，您會怎麼感覺？」
> （A）非常失望 / （B）有點失望 / （C）不會失望 / （D）我不再使用這個服務了

補充問題（定量）：
> 「您會把這個服務推薦給：（A）跟我類似情況的子女 / （B）任何照顧長輩的人 / （C）不會推薦」

補充問題（定性）：
> 「您覺得這個服務最大的價值是什麼？（請用 1-2 句話描述）」
> 「您最希望這個服務改善什麼？」

**量化標準**：

| 結果 | PMF 訊號判定 | 行動 |
|---|---|---|
| ≥40% 回答 (A) 非常失望 | PMF 訊號達到（Sean Ellis 門檻）| 評估 Scale 條件 |
| 25-39% 回答 (A) | PMF 接近，差距可追 | Persevere，追問主要缺口 |
| <25% 回答 (A) | PMF 未達 | 啟動 Pivot 評估 |

**收集機制**：

- **W4 末問卷**（Sprint 4 closed beta 結束）：子女 App 內彈出問卷 + Operator 電話詢問長者（長者端以口頭形式，Operator 記錄）📋
- **Phase 6 Pilot W4 末**：正式 PMF 量測，子女端書面 + 長者端 Operator 訪談 📋
- **Year 1 Q1（M12）**：年度 NPS + Sean Ellis 合併量測 📋

**樣本量要求**：

- Sprint 4 目標：8-10 戶子女回覆（≥7 份有效）— 低於 30 樣本警示（見 §6）
- Phase 6 Pilot 目標：10-20 戶子女回覆；合計 Sprint 4 + Phase 6 ≥30 有效回覆方可作為統計信度結論
- 機構員工另計（Hyp B 端）：1-2 家機構員工 + 主管量測

**量測對象細分**：

| 對象 | 問卷形式 | 量測目的 |
|---|---|---|
| 子女（Buyer）| App 內問卷 + Email 備份 | 主要 PMF 訊號（付款決策者）|
| 長者（End User）| Operator 電話訪談 5 分鐘 | 長者接受度（假設 2 驗證）|
| 機構員工（Influencer）| 機構儀表板內問卷 | Hyp B 通路信號 |

---

### §1.2 Retention Curve

**定義框架**：Retention Curve 是 PMF 判定最關鍵的量測維度（Eric Ries 定義：retention curve flatten = PMF；持續下滑 = 未達 PMF）。

**「Active」定義**：

| 對象 | Active 定義 | 理由 |
|---|---|---|
| 長者（End User）| 日均 ≥3 次 AI 主動互動回應（計入 AI 主動發起且長者有口頭回應）| 對標 ElliQ 30 次/天，WoZ 形態保守取 3 次/天 🟡 |
| 子女（Buyer）| 過去 7 天 ≥1 次子女 App 開啟（查看摘要 / 通知）| 訂閱有感知 = 續訂意願基礎 |

**Retention Curve 追蹤點**：

| 追蹤點 | 觸發日 | 長者端目標 | 子女端目標 | 健康 SaaS 基線（參考）|
|---|---|---|---|---|
| **D1** | Onboarding 後第 1 天 | ≥90%（首次 AI 互動成功）| ≥95% | — |
| **D7** | Onboarding 後第 7 天 | ≥70%（習慣化初期）| ≥80% | 70% 為健康 |
| **D14** | Onboarding 後第 14 天 | ≥60% | ≥70% | — |
| **D30** | Onboarding 後第 30 天 | ≥60%（付費用戶留存）| ≥60% | 60% 為良好，70% 為優秀 |
| **D60** | Onboarding 後第 60 天 | ≥50% | ≥55% | 50% 為健康 |
| **D90** | Onboarding 後第 90 天 | ≥50% | ≥55% | Flatten 訊號 |

🟡 以上均為 Plan-Only 假設基線，基於 ElliQ 海外驗證 + SaaS 行業標準換算。台灣長者族群真實 retention 需 Phase 6 Pilot 實測後更新。

**PMF flatten 判定規則（Retention Curve 維度）**：

```
D60 vs D90 差異 <5%  → flatten 訊號 → PMF 強指標
D30 vs D60 差異 <5%  → 提前 flatten → 更強 PMF 訊號
D30 vs D90 持續下滑  → 未達 PMF（Pivot 評估）
```

**Cohort 分析分組**：

| 分組維度 | 分組 | 分析目的 |
|---|---|---|
| 居住型態 | 北漂子女（異縣市）vs 在地照顧者 | 驗證核心 ICP 假設（Persona A vs B）|
| 長者認知狀態 | 認知正常 vs MCI | 長者接受度差異 |
| 地域 | 北部 vs 中部 vs 南部 | 台語使用率對 retention 影響 |
| Persona | Persona A / B / C | WTP 與 retention 相關性 |
| 機構 vs 家庭 | 機構 LOI 戶 vs DTC 戶 | Hyp A vs B 通路 retention 比較 |

**技術實作規格（📋 post-approval）**：

- `interaction_log` 表追蹤每次 AI 主動發起 + 長者回應的互動對
- `user_session` 表追蹤子女 App 每次開啟時間戳
- Cohort 按「onboarding_date」自動分桶（週 / 月 cohort）
- D1/D7/D14/D30/D60/D90 retention 計算：每日 cron job 跑 SQL 產出 retention_report 表
- 異常警示：D7 retention < 50% → 自動 alert Operator 主管

---

### §1.3 NPS（三組）

**三組 NPS 設計緣由**：本案有三個不同 Stakeholder（子女 buyer / 長者 end user / 機構員工 influencer），各組 NPS 反映不同維度的 PMF 訊號。

#### NPS-1：子女端（Buyer / Decision Maker）

| 項目 | 規格 |
|---|---|
| 目標 NPS | ≥40（Phase 6 Pilot W4）/ ≥50（Year 1 Q2）|
| 計算公式 | NPS = % Promoters（9-10分）- % Detractors（0-6分）|
| 主問題 | 「您有多大可能性將這個服務推薦給同樣有遠距照顧父母需求的朋友或同事？（0-10分）」|
| 量測時機 | Sprint 4 W2/W3/W4；Phase 6 每週末；Year 1 每季 |
| 量測方式 | 子女 App 內週日彈出問卷 + Push 提醒 + 不回覆 3 天後 Email 補問 |
| 樣本門檻 | ≥30 份有效回覆計算 NPS（<30 件標樣本警示）|
| Benchmark | Airbnb NPS ≈ 73；ElliQ 未公開（🟡 預估 ≥50）；健康科技新創 NPS ≈ 30-45 |

定性補充問題：
- 「您給這個分數的主要原因是？」（必填）
- 「如果您願意，什麼改變會讓您把分數提高 1-2 分？」

#### NPS-2：長者端（End User）

| 項目 | 規格 |
|---|---|
| 目標 NPS | ≥35（Phase 6 Pilot W4）/ ≥45（Year 1 Q2）|
| 設計說明 | 長者 NPS 合理低於子女（語言適應期 + 習慣建立期）；但 <30 需啟動長者接受度專項 RCA |
| 量測方式 | Operator 電話訪談 5 分鐘（每週末一次，W2/W3/W4）；問題口頭化 + Operator 記錄 |
| 口頭化問題 | 「阿公/阿嬤，如果您的鄰居或親戚也有類似情況，您會把這個 AI 夥伴推薦給他們嗎？（很會/有可能/不確定/不太會/不會）」→ 轉換為 0-10 分 |
| Mapping | 很會 = 9-10；有可能 = 7-8；不確定 = 6；不太會 = 4-5；不會 = 0-3 |
| 樣本門檻 | ≥20 份（長者端樣本較難取得；Phase 6 全 10-20 戶長者端均量測）|

#### NPS-3：機構員工端（Influencer，Hyp B）

| 項目 | 規格 |
|---|---|
| 目標 | ≥4.0/5（換算 0-10 量表約 7.0/10，NPS ≥25）|
| 說明 | 機構員工是 Hyp B 通路的 Gatekeeper，員工接受度決定機構續約意願 |
| 量測方式 | 機構儀表板內週末問卷（0-5 星量表）+ 月度訪談 |
| 量測時機 | Sprint 4 W2/W3/W4；機構 LOI 後持續月度量測 |
| 特殊指標 | 機構主管 ROI 評估（W12 訪談）：「NT$3,000/月/台 RaaS 值得嗎」|

**NPS 趨勢追蹤（三組對比圖 mock-up）**：

```
週次：     W2     W3     W4     M2     M3
子女 NPS:  25     32     42     48     52   ← 目標趨勢（🟡 假設）
長者 NPS:  20     28     36     42     46   ← 目標趨勢（🟡 假設）
機構員工:  3.5    3.8    4.1    4.3    4.5  ← /5 量表（🟡 假設）
```

---

### §1.4 HEART Metric（Google Framework）

**Google HEART 框架應用**：將 5 個維度（Happiness / Engagement / Adoption / Retention / Task Success）對映到本案長者陪伴機器人的具體量測指標。

#### H — Happiness（用戶滿意度）

| 量測項 | 量測方式 | 目標值 | 量測時機 |
|---|---|---|---|
| 子女 CSAT（月度）| App 內 1-5 星評分 | ≥4.0/5 | 月度 |
| 長者滿意度（質性）| Operator 每週訪談摘要情緒標記 | 「愉快」/「平靜」≥60% | 每週 |
| 子女 NPS | 見 §1.3 | ≥40（Phase 6 W4）| 見 §1.3 |
| 長者 NPS | 見 §1.3 | ≥35（Phase 6 W4）| 見 §1.3 |

#### E — Engagement（互動深度）

| 量測項 | 量測方式 | 目標值 | 量測時機 |
|---|---|---|---|
| 長者日均互動次數 | interaction_log 表每日 count（長者有回應的對話輪次）| W1 ≥5 次 / W2 ≥10 次 / W4 ≥20 次/週 🟡 | 每日 |
| 每次對話平均時長 | interaction_log.duration 計算 | ≥5 分鐘/次（對標 ElliQ 關鍵指標）🟡 | 每週 |
| 個人記憶 AI 調用次數 | memory_retrieval_log 表 count | ≥3 次/週（長者個人記憶被 AI 主動召回）🟡 | 每週 |
| 子女 dashboard 週查看率 | dashboard_view_event 表 / 活躍子女帳號 | ≥60% | 每週 |
| 台語對話佔比 | interaction_log.language = 'tw' 比率 | 南部縣市戶 ≥40%（驗證台語接受度）🟡 | 每週 |

#### A — Adoption（功能採用率）

| 量測項 | 量測方式 | 目標值 | 量測時機 |
|---|---|---|---|
| Onboarding 完成率 | 三方同意 + 子女設定 + 長者首次互動全完成 / 部署戶數 | ≥80% | 部署後 24h |
| Must-have feature 啟用率 | F01-F10 各 feature 啟用 / 已 onboarding 戶數 | F01/F02 ≥95% / F10 ≥90% / F11 ≥85% 🟡 | 每週 |
| Should-have feature 啟用率 | F03/F04/F12 各 feature 啟用率 | F12 ≥70% / F03 ≥50%（台語）/ F04 ≥60% 🟡 | Phase 6 W4 |
| 服藥提醒功能使用率 | F11 啟用 / 有慢性病長者戶數 | ≥80%（有慢性病者應全開）🟡 | 每週 |
| Freemium → Paid 轉換率 | paid_subscription / freemium_registered | ≥3%（行業標準）🟡 | 月度（Phase 7+）|

#### R — Retention

見 §1.2 Retention Curve 完整設計。摘要：

| 指標 | Phase 6 W4 目標 | Phase 6 D60 目標 | Phase 6 D90 目標 |
|---|---|---|---|
| 長者端 | ≥60% | ≥50% | ≥50%（flatten）|
| 子女端 | ≥60% | ≥55% | ≥55%（flatten）|
| 付費訂閱留存 | ≥70%（W4）| ≥60%（M3）| ≥55%（M6）|

#### T — Task Success（關鍵任務完成率）

| 量測項 | 量測方式 | 目標值 | 說明 |
|---|---|---|---|
| 子女 onboarding ≤10 分鐘完成率 | onboarding_time_log 表 | ≥80% | Must-have Hard Constraint（feature-triage.md §2）|
| 緊急偵測通知 ≤5 分鐘達到率 | emergency_event.detected_at → notified_at 差值 | ≥99% | safety-redlines.md §3.3 C2 |
| 個人記憶 AI 召回準確率 | Operator 每週評估「AI 說的長者個人資訊正確」/ 總召回次數 | ≥85% 🟡 | 質性評估 |
| 紅線攔截率（N1-N10）| redline_triggers 表 blocked / triggered | 100% | 安全底線，不可低於 |
| 長者「停止提醒」指令執行率 | 長者說停止後 AI 是否 24h 未再提醒 | 100%（N10 紅線）| 長者自主權 |
| 緊急偵測假事件演習通過率 | ≥3 次假事件演習全部正確觸發 | 100%（Sprint 4 W12）| safety-redlines.md §5.1 |

---

### §1.5 AARRR Funnel（Pirate Metrics）

**設計緣由**：AARRR 是「商業可行性」的完整漏斗，從獲客到收入，與 Sean Ellis / Retention / NPS / HEART 補充「體驗可行性」形成五框架閉環。

#### A1 — Acquisition（獲客）

| 指標 | Phase 6 Pilot 目標 | Year 1 Q2 目標 | 量測方式 |
|---|---|---|---|
| Freemium App 下載量 | 2,000-5,000（90 天）🟡 | 20,000+（M12）🟡 | App Store / Google Play 後台 |
| 訪客 → 試用（App 啟動）轉換率 | ≥30%（下載 → 首次開啟）🟡 | ≥30% | App analytics |
| 試用 → 付費轉換率 | ≥3%（行業標準）🟡 | ≥5%（Year 1 H2 品牌成熟後）🟡 | 訂閱事件 log |
| 硬體購買 CAC | NT$5,000-8,000（初期 DTC 廣告）🟡 | NT$2,000-3,200（長照補貼後降 60-80%）🟡 | 廣告支出 / 硬體訂單數 |
| Freemium App CAC | NT$300-800 🟡 | NT$200-500 🟡 | 廣告支出 / 付費用戶數 |

**Plan-Only 特殊說明**：Sprint 4 closed beta 8-10 戶為直接招募（非真實廣告投放），CAC 數字不在 Sprint 4 量測；Phase 6 Pilot 若有 Facebook 廣告試投（📋），則量測試投 CAC。

#### A2 — Activation（首次啟動）

| 指標 | 目標 | 量測方式 |
|---|---|---|
| 子女 onboarding ≤10 分鐘完成率 | ≥80% | onboarding_time_log |
| 長者 Day-1 首次 AI 互動成功率 | ≥70%（長者主動或被動回應 ≥1 輪）🟡 | interaction_log Day-1 |
| 三方同意流程完成率 | ≥90%（任何一方未簽 = 失敗）| consent_log 完成狀態 |
| 子女 App 完成至少 1 次摘要查看 | ≥80%（Day-3 前）🟡 | dashboard_view_event |

**Activation 品質指標（「Aha moment」）**：
- 長者首次 AI 用台語問候後長者有口頭回應 → 台語接受度 Aha moment
- 子女收到第一則每日摘要推播 → 安心感 Aha moment
- 子女收到第一則緊急偵測假演習通知 → 「安全網」UVP Aha moment

#### R — Retention

見 §1.2，合併至此 Funnel。

#### R2 — Referral（口碑轉介）

| 指標 | Phase 6 W4 目標 | 量測方式 |
|---|---|---|
| 子女 NPS Promoter（9-10分）比例 | ≥40%（子女 NPS ≥40 之相關基礎）🟡 | NPS 問卷 |
| Viral coefficient（K factor）| 待量測（Phase 6 實際招募中有多少來自口碑轉介）| 招募問卷：「您如何得知此服務？」|
| 推薦行動轉化 | 子女 App 內「邀請朋友」功能使用率（Phase 6+）| 邀請 link 點擊 log 📋 |
| Facebook 社群自發分享次數 | 質性追蹤（Phase 6 Operator 記錄社群提及）| Operator 週報 |

#### R3 — Revenue（收入）

| 指標 | Sprint 4（內部 beta，不收費）| Phase 6（正式 Pilot）| Year 1 目標 |
|---|---|---|---|
| MRR | $0（closed beta 免費）| 試收費詢問（W4 末問「NT$1,290/月您是否付？」）| NT$50-120 萬 ARR（保守）🟡 |
| ARPU | — | 🟡 NT$1,290（Pro Tier 假設）| NT$1,290（Tier 2 主力）🟡 |
| 月流失率 | — | 目標 ≤5% | ≤5%（決定 LTV:CAC 健康度）🟡 |
| LTV:CAC（硬體 Tier 2）| — | 量測 CAC 後推算 | 中性目標 5.95:1（unit-econ.md §7.2）🟡 |
| 長照補貼覆蓋率 | — | 📋 Phase 6 後申請 | Year 1 H2 進入補貼名單 📋 |
| Tier 1 → Tier 2 升級率 | — | 待量測 | 目標 15%（Penetration → Value 遷移）🟡 |

---

## §2. NSM（North Star Metric）設計

### §2.1 候選 NSM 三選一分析

#### 候選 1：長者「週主動互動次數」

**定義**：每位長者過去 7 天，AI 發起問候且長者有口頭回應的互動輪次總和（中位數）。

| 維度 | 評估 |
|---|---|
| 可操作性 | ✅ 高——可直接優化 AI 主動問候頻率、台語品質、話題相關性 |
| 直接反映核心價值 | ✅ 高——「陪伴」的核心是互動，互動次數直接等於「父母不孤單」的量化 |
| 領先訂閱留存 | ✅ 互動次數高 → 長者接受度高 → 子女感知價值 → 留存率高（因果鏈清晰）|
| 子女 WTP 對應 | ✅ 子女 WTP 驅動因素是「父母不孤單」；週互動次數是最直接的代理指標 |
| 避免 Vanity Metric | ✅ 非「下載數」「註冊數」等 actionable 替代指標 |
| 量測成本 | ✅ interaction_log 表已設計，自動計算 |

#### 候選 2：「子女焦慮緩解 score」（情感 NSM）

| 維度 | 評估 |
|---|---|
| 反映核心價值 | ✅ 直接對應 JTBD 「E2：希望感受掌控父母安全」|
| 可操作性 | ❌ 低——焦慮緩解難量化；需要 validated scale（如 PHQ-4 子女版）設計複雜 |
| 量測成本 | ❌ 高——每月需問卷 + 統計分析 |
| Vanity metric 風險 | 🟡 中——主觀自評 score 易受問卷設計影響 |

**結論**：候選 2 作為 HEART H（Happiness）補充維度，不選為主 NSM。

#### 候選 3：「家庭月度互動健康指數」（複合 NSM）

| 維度 | 評估 |
|---|---|
| 完整性 | 🟡 中——整合長者互動 + 子女查看 + 緊急事件 0，更全面 |
| 可操作性 | ❌ 低——複合指數難以找到單一改善槓桿 |
| 易於溝通 | ❌ 低——對主管、投資人說明複合指數需要更多解釋 |
| 計算複雜度 | ❌ 高——需要定義權重 + 定期校準 |

**結論**：候選 3 作為 §8 Dashboard 彙整指標，不選為主 NSM。

### §2.2 NSM 推薦結論

**推薦 NSM：長者週主動互動次數（中位數）**

**定義**：每位長者（每戶一位主要長者）過去 7 天，AI 發起問候且長者有口頭回應的有效互動對話輪次，取所有部署戶的週中位數。

**來源對應**：lean-canvas.md §1 Block 8 Key Metrics「長者週活躍互動次數」✅

**目標基線**：

| 階段 | NSM 目標 | 說明 |
|---|---|---|
| Sprint 4 W1（D1-D7）| ≥5 次/週 中位數 | 習慣建立初期，保守目標 🟡 |
| Sprint 4 W4（D22-D28）| ≥15 次/週 中位數 | 習慣養成期 🟡 |
| Phase 6 Pilot W4 | ≥20 次/週 中位數 | PMF 核心目標（對標 ElliQ 30 次/天 ×7 = 210；WoZ 形態取 1/10 保守）🟡 |
| Year 1 H1 Q2（M6）| ≥25 次/週 中位數 | 習慣固化 + 台語語料改善後提升 🟡 |
| Year 1 H2（M12）| ≥30 次/週 中位數 | 目標對標 ElliQ 國際水準 🟡 |
| Week-over-Week 成長目標 | ≥10%（Year 1 H1）| NSM 成長率 Week 4→Week 12 |

**NSM 輔助指標（Leading Indicators）**：

| 輔助指標 | 說明 | 目標 |
|---|---|---|
| 長者首週 D1-D7 互動次數 | NSM 領先指標；D7 次數高 → D30 retention 高 | ≥5 次（Sprint 4）🟡 |
| 台語互動佔比（南部戶）| 台語品質影響 NSM | ≥40%（南部縣市 3 縣市戶）🟡 |
| AI 主動發起 vs 長者主動發起比 | AI 主動比例高 → 適合低主動意願長者（MCI 族群）| AI 主動 ≥60% 🟡 |
| 深夜互動中斷率 | 夜間低 = 長者良好睡眠 = 整體狀態良好 | <5%（22:00-06:00）🟡 |

---

## §3. 量測工具 + 數據基礎建設

### §3.1 後端 Log 設計（📋 post-approval 實作）

**必追蹤 Log 表（資料庫層）**：

| 表名 | 追蹤內容 | PMF 框架對應 |
|---|---|---|
| `interaction_log` | 每次互動：user_id, timestamp, language, duration, initiated_by（ai/elder）, response_received（boolean）| NSM / HEART E / Retention |
| `emergency_event` | 每次緊急偵測：event_id, detected_at, notified_at, resolution_status（true/false/test）, false_positive（boolean）| AARRR Task Success / Safety |
| `redline_triggers` | 每次紅線觸發：trigger_type（N1-N10）, blocked（boolean）, operator_reviewed | HEART T / Safety |
| `memory_retrieval_log` | 個人記憶 AI 每次召回：user_id, memory_key, triggered_by, elder_response（positive/neutral/negative）| HEART E / Adoption |
| `dashboard_view_event` | 子女 App 每次開啟：child_user_id, view_type（summary/alert/settings）, duration | HEART E / Retention |
| `onboarding_time_log` | 每戶 onboarding：household_id, start_time, end_time, steps_completed, success（boolean）| AARRR Activation |
| `consent_log` | 三方同意：elder_audio_consent, child_written_consent, witness_id, timestamp | PDPA 合規 / Activation |
| `nps_response` | NPS 問卷回覆：user_id, score, reason_text, improvement_text, timestamp, survey_type（child/elder/institution）| NPS / HEART H |
| `sean_ellis_response` | Sean Ellis 問卷：user_id, answer（A/B/C/D）, value_text, improvement_text, timestamp | Sean Ellis PMF |
| `operator_intervention` | WoZ 介入：household_id, intervention_type, duration, trigger_reason | Retention（WoZ 比例追蹤）|

**資料隱私設計**（PDPA 合規）：

- 所有 `interaction_log` 不儲存對話原文，只儲存 metadata（時長、語言、輪次）
- 對話原文在端側處理後丟棄，不上傳雲端（safety-redlines.md §4.2 Layer 1 資料分類）
- `memory_retrieval_log` 存個人記憶 key，不存原始語音
- Log 資料僅用於服務改善，不用於第三方廣告、保險定價、模型訓練（需另取得同意）

### §3.2 Survey 平台選型

| 工具 | 用途 | 選用建議 | 月費估 |
|---|---|---|---|
| **自製 App 內問卷** | NPS + Sean Ellis + CSAT（子女端）| 優先選用——減少跳轉摩擦，可以控制樣本 | $0（開發成本 📋）|
| **Google Forms** | 長者端 Operator 訪談記錄工具 | 免費，Operator 填入量測值；不直接給長者使用 | $0 |
| **Typeform** | Phase 6 後補充質性問卷（外部招募）| 美觀度高，適合子女端 Email 追問 | ~NT$1,500/月 📋 |

**NPS 平台選型**：

| 工具 | 優缺點 | 建議 |
|---|---|---|
| **自製（App 內）** | 完全控制問卷時機 + 資料 ownership；開發成本 | Sprint 4 優先自製 |
| **Delighted** | NPS SaaS，API 整合簡單，Email / in-app survey；$79/月 | Phase 6+ 若自製不足時補充 📋 |
| **Wootric（by InMoment）** | 企業級 NPS，細分群體分析強；$249/月 | Year 1 H2 規模化後考慮 📋 |

### §3.3 客服工單 + 訪談工具

| 工具 | 用途 | 月費估 |
|---|---|---|
| **Notion** | Operator 訪談筆記 + 質性 insight 整理 + 退場訪談記錄 | NT$0（免費版）|
| **Otter.ai** | 電話訪談自動轉錄（子女端深度訪談 + 機構主管訪談）| ~NT$600/月 📋 |
| **Freshdesk / Zendesk** | 客服工單（Phase 6 用戶回報技術問題 + 緊急偵測 false alarm 申訴）| Freshdesk 免費版可用 |
| **LINE 官方帳號** | 子女緊急通知 + 非正式回饋收集（已在 tech-architecture.md 確認）| NT$0（基礎方案）|

### §3.4 Analytics Dashboard

**指揮中心 Dashboard（📋 post-approval 實作）**：

| 工具 | 用途 | 月費估 |
|---|---|---|
| **Grafana + PostgreSQL** | Sprint 4 / Phase 6 Pilot 主要 metric dashboard（NSM / Retention / HEART）；tech-architecture.md 已確認 PostgreSQL 後端 | NT$0（開源）|
| **Looker Studio（Google Data Studio）** | Year 1 Q2 後主管彙報用 Dashboard（Google Sheets 連接；適合 slide-ready 視覺化）| NT$0 |
| **Metabase** | Cohort 分析（Retention curve cohort breakdown）+ 自助查詢 | $500/月（雲端版）📋 |
| **自製 PMF Score Dashboard**（見 §8）| 主管 review 規劃書用；整合 5 框架訊號成單一 PMF 分數卡 | 開發成本 📋 |

### §3.5 預算估算

| 分類 | 月費估（Phase 6 Pilot 期間）| 說明 |
|---|---|---|
| Survey 工具 | NT$1,500-3,000 | Typeform + Delighted（若採用）|
| 訪談轉錄 | NT$600 | Otter.ai |
| 客服工單 | NT$0-3,000 | Freshdesk 免費版或 Zendesk 基礎 |
| Analytics | NT$0-1,500 | Grafana 免費 + Looker Studio 免費 + Metabase 視情況 |
| **合計**（工具訂閱）| **NT$2,100-8,100/月** | 含 buffer；Operator 人力另計（§7 預算）|

---

## §4. 量測 Cadence（量測節奏）

### §4.1 W1（Sprint 4 第 1 週：部署 + Onboarding）

| 指標類別 | 量測項目 | 頻率 | 負責人 |
|---|---|---|---|
| Activation | Onboarding 完成率 / 時間 | 每戶部署當日 | Operator |
| Activation | 長者 D1 首次互動成功率 | Day-1 | interaction_log 自動 |
| Safety | 三方同意完成率 | 每戶部署時 | Operator + consent_log |
| NSM（基線）| 長者 D1-D7 互動次數 | 每日 | interaction_log cron |
| Bug | 技術問題回報 | 即時 | Freshdesk / LINE |

**W1 Alert Threshold**：

- Onboarding 完成率 < 70% → 緊急 RCA（北漂子女無法遠端設定）
- D1 互動成功率 < 50% → 長者接受度危機，Operator 介入加強

### §4.2 W2-W3（Sprint 4 第 2-3 週：互動建立期）

| 指標類別 | 量測項目 | 頻率 | 工具 |
|---|---|---|---|
| NSM | 長者週互動次數（中位數）| 每週末 | interaction_log cron |
| Retention | 長者週 active 比例（≥3 次/天比例）| 每週末 | interaction_log |
| NPS | 子女 NPS 第 1 次量測（W2 末）| W2 末 | App 內問卷 |
| NPS | 長者 NPS（Operator 訪談）| W2 末 / W3 末 | Google Forms |
| HEART E | dashboard 週查看率 | 每週 | dashboard_view_event |
| HEART E | 個人記憶 AI 調用次數 | 每週 | memory_retrieval_log |
| Safety | 紅線觸發次數 + false positive | 每日 | redline_triggers + emergency_event |
| WoZ | Operator 介入比例（目標 W2 ≤50%）| 每週 | operator_intervention log |

**W2 Alert Threshold**：

- 子女 NPS < 15 → 緊急子女端體驗 RCA
- 長者週互動 < 5 次（中位）→ 台語 / 語音品質 RCA
- 紅線 false positive ≥3 次/戶 → 工程師調整 Layer 2 rule-based

### §4.3 W4（Sprint 4 末 / Phase 6 Pilot 末：完整 PMF 量測）

| 指標類別 | 量測項目 | 目標值 | 工具 |
|---|---|---|---|
| Sean Ellis | 「非常失望」% | ≥30%（Sprint 4 基線）/ ≥40%（Phase 6 PMF 門檻）| App 問卷 + Operator 訪談 |
| NPS | 子女 NPS（W4 末）| ≥40（Phase 6）| App 問卷 |
| NPS | 長者 NPS（W4 末）| ≥35（Phase 6）| Operator 訪談 |
| NPS | 機構員工 NPS（W4 末）| ≥4.0/5 | 機構儀表板問卷 |
| Retention | D30 長者端 retention | ≥60%（Phase 6）| interaction_log |
| Retention | D30 子女端 retention | ≥60% | App event log |
| HEART E | NSM（長者週互動中位）| ≥20 次/週（Phase 6）| interaction_log |
| AARRR Activation | Onboarding 完成率 | ≥80% | onboarding_time_log |
| Safety | 緊急偵測假演習通過率（Sprint 4 W12）| 100%（≥3 次）| emergency_event test_event |
| Cohort | Persona A vs B vs C 各 retention 對比 | — | Metabase cohort |

**W4 PMF 判定會議**（📋 Sprint 4 結束後 / Phase 6 結束後各一次）：

- 參與者：main agent + Operator 主管 + 量測數據負責人
- 議程：5 框架逐一對照目標值 → PMF 訊號判定 → §5 Verdict 輸出
- 輸出：PMF 訊號判定結果（強 / 中 / 弱）+ 後續 Scale / Persevere / Pivot 建議
- 時程：W4 末週內完成

### §4.4 Year 1-3 持續量測 Cadence

| 頻率 | 量測項目 | 工具 |
|---|---|---|
| **月度**（M1-M12）| NSM 週互動次數趨勢 / NPS 三組 / 月流失率 / MRR / Churn | Grafana + Looker Studio |
| **季度**（Q1-Q4）| Sean Ellis 重測 / HEART 全維度 / Cohort retention curve / Funnel 漏斗對比 | 季度量測 Sprint |
| **半年**（H1/H2）| 深度用戶訪談 × 5-8 人 / 假設 1-5 驗證狀態更新 / NSM 目標修訂 | Otter.ai + Notion |
| **年度**（Y1/Y2/Y3）| PMF 訊號年度重判 / Retention curve D90/D180/D365 / 主管 review 規劃書數據更新 | 完整 PMF 年度報告 |

---

## §5. PMF 訊號判定

### §5.1 判定框架（三指標三條件）

**PMF 訊號由三個主要指標共同判定**，三者均達標 = 強 PMF，2/3 達標 = 中 PMF，≤1/3 達標 = 弱/無 PMF：

| 指標 | 強 PMF（全達標）| 中 PMF（2/3 達標）| 弱/無 PMF（≤1/3）|
|---|---|---|---|
| **Sean Ellis「非常失望」%** | ≥40% | 25-39% | <25% |
| **NPS（子女端）** | ≥50 | 30-49 | <30 |
| **D30 Retention（長者端）** | ≥60% | 45-59% | <45% |

**輔助確認指標**（強化或弱化判定，不作主要判定依據）：

| 輔助指標 | 強化 PMF 訊號 | 弱化 PMF 訊號 |
|---|---|---|
| NSM 週互動次數 | ≥20 次/週（Phase 6 W4）| <10 次/週 |
| Retention curve flatten（D60 vs D90 差異）| <5% | 持續下滑 ≥10% |
| 長者 NPS | ≥35 | <20 |
| 機構員工 NPS | ≥4.0/5 | <3.0/5 |
| Sean Ellis 質性「最大價值」 | 指向核心 UVP（陪伴 / 緊急）| 指向非核心（設計好看 / 便宜）|

### §5.2 Retention Curve flatten 訊號判定規則

**flatten 訊號定義（Eric Ries 原則 + 本案量測標準）**：

```
觀察點：D30 vs D60 差異、D60 vs D90 差異

強 flatten（PMF 強訊號）：D60 vs D90 差異 <5%
中 flatten（PMF 中訊號）：D60 vs D90 差異 5-10%
持續下滑（未達 PMF）：D60 vs D90 差異 >10%（absolute）

視覺化判定示意（🟡 假設目標線）：

                D1    D7    D14   D30   D60   D90
Cohort A（目標）: 90%  72%   63%   61%   52%   51%  ← flatten（差 1%）
Cohort B（中性）: 88%  68%   58%   55%   47%   42%  ← 仍下滑（差 5%）
Cohort C（警示）: 85%  60%   48%   38%   25%   15%  ← 嚴重下滑（差 10%）
```

### §5.3 PMF Verdict 輸出格式（W4 / W12 量測後）

```
PMF 訊號判定 — Phase 6 Pilot W4 末（🟡 假設）
樣本：__ 戶有效（≥30 推薦門檻）
量測期：__ ~ __

Sean Ellis「非常失望」: __%  → ✅/⚠️/❌
子女 NPS: __  → ✅/⚠️/❌
D30 Retention（長者）: __%  → ✅/⚠️/❌

Verdict：
- 3/3 ✅ → 強 PMF → 評估 Scale 條件（§7 建議）
- 2/3 ✅ → 中 PMF → Persevere 1-2 個月（§7 建議）
- ≤1/3 ✅ → 弱/無 PMF → 啟動 Pivot Gate（§6 Pivot trigger）
```

---

## §6. Pivot Trigger 設計（W12 Gate 用）

**設計緣由**：Plan-Only Mode 下，W12 Gate 是「假設驗證結果 → 策略調整」的最重要決策點（decision-w6.md §4 Option C Pivot 設計延伸）。以下 Pivot trigger 由 PMF 量測結果自動觸發，觸發時需主 agent 升級懷特確認。

### §6.1 假設 1 WTP 破壞——Pivot Revenue Streams

**觸發條件**：Phase 6 Pilot 結束後訪談 ≥6 家子女，其中 ≥4 家（67%）表示「NT$1,290/月 無法接受，上限在 NT$600-800」，且 Sean Ellis「非常失望」% < 25%（雙重確認）。

**Pivot 行動（針對 Revenue Streams Block）**：

| 調整項目 | 原方案 | Pivot 後方案 |
|---|---|---|
| Tier 2 Pro 月費 | NT$1,290/月 | 降至 NT$999/月（WTP 中位再調整）|
| Tier 1 Starter 月費 | NT$799/月 | 降至 NT$599/月（Penetration 加強）|
| 主力 Tier 定位 | Tier 2（NT$1,290）| 轉為 Tier 1（NT$599-799）|
| 硬體售價 | NT$15,000-19,900 | 探索租賃模式（NT$0 設備 + 較高月費）|

**不動的 Block**：Problem / UVP / Solution / Channel / Customer Segments / Unfair Advantage

**量測**：Pivot 後 60 天重測 Sean Ellis + NPS，觀察是否改善至 ≥30%。

### §6.2 假設 2 長者抗拒——Pivot Solution 子女代理層

**觸發條件**：Phase 6 Pilot 4 週結束後，長者端 D28 retention < 30%（超過一半長者棄用），且棄用原因質性訪談顯示 ≥60% 是「長者主動拒用」而非技術問題。

**Pivot 行動（針對 Solution Block）**：

| 調整項目 | 原方案 | Pivot 後方案 |
|---|---|---|
| 主要互動角色 | 長者直接與 AI 對話 | 子女遠距「語音留言」→ AI 轉達給長者（降低長者直接接觸 AI 障礙）|
| AI 主動發起 | AI 每天直接問候長者 | 子女設定「每天讓 AI 轉達我的問候給爸媽」|
| 陪伴定位 | 「長者的 AI 陪伴機器人」| 「子女的遠端陪伴延伸工具，讓爸媽感覺你在身邊」|

**不動的 Block**：Problem / Customer Segments / Revenue Streams / Channels

**監控指標**：Pivot 後第 1 週長者端 D7 互動 ≥3 次/天目標是否達到。

### §6.3 假設 3 緊急偵測破壞——Pivot UVP 弱化安全網宣稱

**觸發條件**：Phase 6 Pilot ≥3 次假事件演習，緊急偵測召回率 < 60%（低於規劃目標 ≥80%，且差距超過 20pp），且假事件演習結果顯示系統性問題（非個別環境噪音）。

**Pivot 行動（針對 UVP 第 4 維「緊急安全網」強度降級）**：

| 調整項目 | 原方案 | Pivot 後方案 |
|---|---|---|
| UVP 主訴求優先序 | 「緊急偵測 + 陪伴四合一」 | 改為「陪伴 + 子女 dashboard + 台語」三合一，緊急偵測降為輔助功能 |
| 對外宣稱 | 「跌倒 5 分鐘內通知子女」 | 「AI 每天確認父母安好，有異常即時通知」（弱化召回率宣稱）|
| 定價邏輯 | 安全網溢價支撐 NT$1,290 | 重新評估是否需降至 NT$999 |

**TFDA 法規考量**：recall < 60% 強化了「不宣稱具體準確率」設計（cert-timeline.md §11 Plan-Only 紅線 P1 確認），Pivot 後對外用語更符合 TFDA 非 II 類定位。

### §6.4 假設 4 機構不採購——Pivot Hyp B Channel

**觸發條件**：Phase 6 Pilot 結束後（W12），0 家機構 LOI + 機構訪談 ≥3 家均表達「根本不需要 AI 機器人陪伴個案」（非採購週期問題，而是需求否定）。

**Pivot 行動（針對 Hypothesis B Channel Block）**：

| 調整項目 | 原方案 | Pivot 後方案 |
|---|---|---|
| B2B2C 通路 | 機構採購 → 佈建到個案家中 | 改為「機構場域展示版」（日照中心放 2-3 台展示，不進家庭）|
| 銷售 motion | 機構主管 BD 接觸 | 改為「個案家屬自行訂閱後通知機構」（反向流動）|
| 資源分配 | 機構後台開發維持 | 暫停機構後台，全移 Hyp A DTC |

**不動的 Block**：Hypothesis A B2C DTC 主軸不受影響。

### §6.5 Pivot Trigger 總覽表

| 假設 | 觸發條件 | 觸發後 Pivot Block | 升級懷特？ |
|---|---|---|---|
| 假設 1 WTP 破壞 | ≥4/6 受訪者 WTP < NT$800 + Sean Ellis < 25% | Revenue Streams | 是 |
| 假設 2 長者抗拒 | D28 retention < 30% + 棄用原因 ≥60% 長者主動 | Solution | 是 |
| 假設 3 緊急偵測破壞 | 召回率 < 60%（假事件演習系統性問題）| UVP 強度降級 | 是 |
| 假設 4 機構不採購 | 0 LOI + 3 家明確拒絕「根本不需要」| Hyp B Channel | 是 |
| D7 Retention 崩潰 | 長者 D7 < 30%（全戶中位）+ 訪談確認非技術問題 | Solution + Customer Segments | 是（Kill 評估）|

---

## §7. 對 W12 Gate / Phase 7 / Phase 8 的銜接

### §7.1 W12 Gate 量測結果輸入

**W12 Gate（T48 Self-Drive 決策節點）**量測結果彙整表：

| 量測維度 | W12 Gate 需提供資料 | 來源文件 |
|---|---|---|
| Sean Ellis | Phase 6 Pilot W4 末量測結果（%）+ 質性分析 | sean_ellis_response 表 |
| Retention Curve | D1/D7/D14/D30/D60/D90 全曲線（各 Cohort）| interaction_log cohort |
| NPS 三組 | 子女 / 長者 / 機構員工各組 NPS W4 值 + 趨勢 | nps_response 表 |
| HEART 5 維 | Happiness / Engagement / Adoption / Retention / Task Success 各維度值 | 各 log 表 |
| AARRR | Funnel 各層轉換率 + CAC 實測值 | 各 log 表 + 財務記錄 |
| NSM | 週互動次數中位數趨勢（W1→W12）| interaction_log weekly |
| Pivot 訊號 | §6 各假設觸發狀態（已觸發 / 未觸發 / 不確定）| 量測 + 訪談彙整 |

**W12 Gate 決策框架**：

| PMF 訊號 | W12 Gate 決策 | Phase 7-8 銜接行動 |
|---|---|---|
| 強 PMF（3/3 ✅）| Scale 評估 | Phase 7 Pitch Deck 加入 PMF 訊號（Sean Ellis / NPS / Retention 真實數據）；加速 ODM 硬體量產規劃；Seed 募資時機確認 |
| 中 PMF（2/3 ✅）| Persevere 1-2 月 | Phase 7 Pitch Deck 標「Pre-PMF / 早期 Traction」；補充缺口改善計畫；Seed 推後至 PMF 確認 |
| 弱/無 PMF（≤1/3 ✅）| Pivot 評估（升級懷特）| Phase 7 Pitch Deck 改為「Problem-Solution fit 驗證」期；依 §6 Pivot 行動修正方向後重新量測 |

### §7.2 Phase 7 Pitch Prep PMF 數據輸入

**Phase 7 主管 review 規劃書（T44-T48）引用 PMF 量測結果的規格**：

| Pitch Deck Slide | PMF 量測對應數據 | 呈現方式 |
|---|---|---|
| Traction Slide | Sean Ellis %（若已有 Pilot 真實數據）/ Retention Curve 圖表 / NPS 子女端 | 圖表（若 Phase 6 已執行）或 Plan-Only 目標值（標 🟡）|
| Business Model Slide | 月流失率 / ARPU / LTV:CAC 真實值（若有）| 表格；無真實值標「Phase 6 Pilot 後更新」|
| Risk Mitigation Slide | Pivot trigger 設計（§6）| 文字說明 + Pivot 條件表格 |
| Why Us Slide | NSM 成長趨勢（若有）| 折線圖 |

**Plan-Only Mode 的 Pitch 特殊設計**：

Phase 6 Pilot 在計畫核准前無法執行，Phase 7 主管 review 規劃書（T51 懷特親自跑）將面對「尚無真實 PMF 數據」的情況。建議 Pitch 呈現方式：

1. 規格化的量測機制設計（本文件）作為「量測嚴謹度」的展示
2. Sprint 4 closed beta 若已執行：使用 8-10 戶基線數據（標清樣本限制）
3. 若尚無任何真實數據：呈現「90 天 Pilot 計畫 + 量測機制設計 + Phase 6 後 PMF 量測時程」

### §7.3 Phase 8 主管 Review 規劃書 PMF 展示

**Phase 8 GitHub Page 對外展示 PMF 框架設計（不展示量測值，展示量測機制）**：

- 展示：5 框架完整設計（§1） + NSM 定義（§2） + 量測 Cadence（§4）+ PMF 訊號判定標準（§5）
- 不展示（內部保留）：Pivot trigger 具體條件（§6，競爭敏感）+ 量測工具選型理由（§3，技術細節）
- 渲染注意：剝離 ✅/🟡/📋 標籤（phase-0-answers.md 對外網頁紀律）

---

## §8. 量測 Dashboard Mock-up（文字版）

### §8.1 PMF 主控台 Dashboard 架構

```
┌─────────────────────────────────────────────────────────────────────┐
│  PMF 主控台 — 長者 AI 陪伴機器人（Phase 6 Pilot 即時追蹤）           │
│  資料更新：每日 03:00 自動更新 / 手動更新                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  PMF Score                                                    │   │
│  │                                                               │   │
│  │       🟢 / 🟡 / 🔴                                           │   │
│  │       ██ (  __% Sean Ellis + NPS __ + D30 __% )              │   │
│  │                                                               │   │
│  │  判定：強 PMF / 中 PMF / 未達 PMF / 量測中                   │   │
│  │  樣本：__ 戶有效（≥30 推薦）                                  │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                       │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ │
│  │Sean Ellis│ │Retention │ │  NPS     │ │  HEART   │ │  AARRR   │ │
│  │          │ │          │ │          │ │          │ │          │ │
│  │  __%     │ │D7: __%   │ │子女: __  │ │H: __ /5  │ │獲客: __ │ │
│  │Very Disap│ │D30: __%  │ │長者: __  │ │E: __ 次/週│ │啟動: __%│ │
│  │          │ │D60: __%  │ │機構: __ /5│ │A: __%   │ │留存: __%│ │
│  │目標: ≥40%│ │D90: __%  │ │          │ │T: __%   │ │推薦 NPS │ │
│  │          │ │          │ │目標:      │ │          │ │收入: __  │ │
│  │✅/⚠️/❌  │ │flatten?  │ │≥40/≥35   │ │          │ │          │ │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └──────────┘ │
│                                                                       │
├─────────────────────────────────────────────────────────────────────┤
│  Retention Curve（全 Cohort 同圖）                                    │
│                                                                       │
│  100% ─────────────────────────────────────────────────────────    │
│   80% ──○────────────────────────────────────────────────────     │
│   60% ─────────○──○─────────────────○──────○──── flatten!         │
│   40% ─────────────────────○─────────────────                      │
│   20% ──────────────────────────────────────────                   │
│    0%                                                               │
│         D1    D7    D14   D30   D60   D90                          │
│         ─── Cohort A（長者端）   ─── Cohort B（子女端）             │
│         ─── 目標線（🟡 假設）                                        │
│                                                                       │
├─────────────────────────────────────────────────────────────────────┤
│  NSM 趨勢                        │  訪談 Highlight（最新 3 則）       │
│  長者週互動次數（中位數）週趨勢   │  ● 「第一次 AI 說台語，阿嬤笑了」│
│  20 ──────────────────────────  │  ● 「子女說比每天打電話放心」     │
│  15 ─────────────────           │  ● 「藥盒問題解決了，不用再催」  │
│  10 ──────────────              │                                   │
│   5 ──────                      │  異常 Alert（未處理）             │
│   0 W1  W2  W3  W4  M2  M3     │  ⚠️ 戶 03：D7 互動 <3 次（跟進） │
└─────────────────────────────────────────────────────────────────────┘
```

### §8.2 Cohort 詳細分析視圖

```
Cohort 對比（4 週各 Cohort Retention）
                    W1     W2     W3     W4
Persona A（北漂）:  85%    72%    65%    63%  → flatten 觀察中
Persona B（在地）:  80%    65%    58%    55%  → 接近 flatten
Persona C（高端）:  92%    82%    78%    77%  → 高端族群黏著高

地域分組：
南部（台語主）:      88%    75%    70%    68%  → 台語接受度高
北部（國語主）:      82%    67%    60%    57%  → 達標但略低
偏鄉（弱訊號）:      75%    58%    52%    50%  → 邊緣達標，硬體穩定性需追蹤
```

### §8.3 異常 Alert 觸發條件

| Alert 級別 | 觸發條件 | 通知方式 | 處理 SLA |
|---|---|---|---|
| P0（緊急）| 緊急偵測 false negative（真實事件未偵測）| 即時 LINE + 電話 | 立刻 |
| P1（高）| 某戶 D7 長者互動 = 0 次連續 3 天 | Operator dashboard 紅字 + LINE | 4 小時內接觸 |
| P2（中）| NPS 連續 2 週下滑 ≥5 分 | Operator dashboard 黃字 | 24 小時內 RCA |
| P3（低）| Sean Ellis 「非常失望」% 低於週目標 | 量測負責人 email | 下週量測會議討論 |

---

## §9. 風險清單 + 緩解

### §9.1 樣本量不足（最高優先風險）

| 面向 | 風險描述 | 緩解方案 |
|---|---|---|
| Sprint 4 | 8-10 戶，低於 30 樣本統計門檻；Sean Ellis / NPS 結論信度低 | 明確標示「樣本警示，結論為方向性參考，非統計顯著」；補充 interview-plan.md 質性訪談（≥8 人）作為信度補強 |
| Phase 6 Pilot | 10-20 戶若退出率高（> 3 戶），有效樣本可能 < 15 | 設計 1.2× 的 buffer 招募（目標 12-25 戶）；退場訪談納入質性信號 |
| 長者端 NPS | Operator 訪談時長者疲勞或拒答 | 問卷簡化至 1 題主問題 + 1 題定性；若 <15 份長者 NPS，標樣本不足警示 |
| 合計樣本警示 | Sprint 4 + Phase 6 合計 <30 份有效 Sean Ellis | 結論需加 disclaimer：「本次量測基於 __ 份樣本，低於統計顯著門檻 30 份，結論為早期方向性訊號，需持續擴樣確認」 |

### §9.2 訪談偏誤

| 偏誤類型 | 描述 | 緩解方案 |
|---|---|---|
| Confirmation bias（確認偏誤）| 員工家屬作為前期 beta 用戶，回饋傾向正面；員工不評估棄用 | 員工家屬 NPS 與外部招募戶分開統計；Operator 訪談長者由不認識子女的 Operator 執行 |
| Social desirability bias（社會期望偏誤）| 長者為取悅子女或研究人員而給出正面回饋 | 長者 NPS 問題口頭化設計不帶正面暗示（「您覺得阿公...」而非「您有沒有很喜歡...」）；Operator 訓練要求中立語調 |
| Survivorship bias（倖存者偏誤）| 僅量測留下來的用戶，棄用者無法回答 | 強制執行退場訪談（§3.5 SOP）；棄用戶 30 分鐘電話訪談納入分析 |
| Hawthorn Effect（觀察者效應）| 被觀察（知道參加 Pilot）行為改變，互動次數異常高 | W4 後比較 W12（習慣後）vs W4（新鮮感）的 NSM 變化；長期追蹤去除觀察效應 |

### §9.3 NPS 數字偏低緩解

| 場景 | 緩解方案 |
|---|---|
| 子女 NPS < 30（低於目標 40）| 追加深度訪談 × 5 位 Detractor（0-6 分）了解主要不滿；區分「技術問題」vs「根本不需要」兩類信號 |
| 長者 NPS < 20 | 語音品質 + 台語識別 RCA；考慮調整 AI 主動問候話術（去除嘮叨感，增加朋友語氣） |
| NPS 整體低但 Sean Ellis ≥40% | 解讀為「這個服務對他們非常重要，但還有明顯體驗痛點」— 推薦 Persevere（改善體驗）而非 Pivot |

### §9.4 緊急偵測 KPI 破壞

| 場景 | 緩解方案 |
|---|---|
| 假事件演習召回率 <75% | 工程師立刻 RCA：端側 Layer 2 rule-based 閾值調整 / 麥克風陣列重新校準 / 環境噪音過濾參數調整 |
| false positive > 1 次/週/戶 | 調整偵測靈敏度；增加「30 秒長者確認」機制；Operator 介入比例提高 |
| 安全紅線合規 | 對外宣稱嚴守「不宣稱具體召回率數字」（cert-timeline.md §11 Plan-Only 紅線 P1） |
| 若召回率系統性 <60% | 啟動 §6.3 Pivot trigger（UVP 弱化安全網宣稱）|

### §9.5 資料量不夠做 Cohort 分析

| 場景 | 緩解方案 |
|---|---|
| Phase 6 Pilot <10 戶，無法分 Cohort | Sprint 4 + Phase 6 合併分析（不按 Cohort 週期分，按 Persona A/B/C 橫向比較）|
| D60/D90 量測時樣本流失至 <10 | 標樣本警示；D90 結論降為「方向性指標」；追加 Phase 7+ 量測（延長追蹤期）|
| 機構端樣本 <3 家 | Hyp B 端 PMF 結論標「不具統計顯著性」；以機構主管訪談質性補強 |

---

## §10. Coverage Matrix（框架完整度驗證）

| 框架 / 要素 | 涵蓋章節 | 完整度 |
|---|---|---|
| Sean Ellis Test | §1.1 | ✅ 完整（問卷設計 / 目標值 / 收集機制 / 樣本量）|
| Retention Curve D1/D7/D14/D30/D60/D90 | §1.2 | ✅ 完整（定義 / 目標 / flatten 判定 / Cohort 分組）|
| NPS 子女端 | §1.3 | ✅ 完整（目標 / 量測方式 / Benchmark）|
| NPS 長者端 | §1.3 | ✅ 完整（口頭化設計 / mapping 方法）|
| NPS 機構員工端 | §1.3 | ✅ 完整（Hyp B 通路對應）|
| HEART Happiness | §1.4 | ✅ 完整 |
| HEART Engagement | §1.4 | ✅ 完整 |
| HEART Adoption | §1.4 | ✅ 完整 |
| HEART Retention | §1.4 | ✅ 完整（引用 §1.2）|
| HEART Task Success | §1.4 | ✅ 完整 |
| AARRR Acquisition | §1.5 | ✅ 完整 |
| AARRR Activation | §1.5 | ✅ 完整 |
| AARRR Retention | §1.5 | ✅ 完整（引用 §1.2）|
| AARRR Referral | §1.5 | ✅ 完整 |
| AARRR Revenue | §1.5 | ✅ 完整 |
| NSM 設計 + 候選比較 | §2 | ✅ 完整（3 候選 / 推薦 / 目標基線）|
| 量測工具基礎建設 | §3 | ✅ 完整（Log / Survey / Analytics / 預算）|
| 量測 Cadence W1/W2-W3/W4/Year 1-3 | §4 | ✅ 完整 |
| PMF 訊號判定標準（三框架判定）| §5 | ✅ 完整 |
| Retention curve flatten 訊號 | §5.2 | ✅ 完整 |
| Pivot Trigger 設計（4 個假設）| §6 | ✅ 完整 |
| W12 Gate 銜接 | §7.1 | ✅ 完整 |
| Phase 7 Pitch 銜接 | §7.2 | ✅ 完整 |
| Phase 8 主管 Review 銜接 | §7.3 | ✅ 完整 |
| Dashboard Mock-up | §8 | ✅ 完整 |
| 風險清單 + 緩解 | §9 | ✅ 完整（5 項風險）|
| 樣本 <30 警示機制 | §9.1 / §6 各觸發條件 | ✅ 完整 |
| Vanity vs Actionable 指標區分 | §2 候選分析 / §9 | ✅ 完整（明確排除 total signups / page view）|

---

## §11. 對比歷次量測（W4 / W8 vs W12 規劃）

**說明**：Plan-Only Mode 下，本欄為「計畫量測時程比較」，非「已有歷史量測數據」。

| Metric | Sprint 4 W4 基線（closed beta）🟡 | Phase 6 Pilot W4（目標）🟡 | Year 1 M6（目標）🟡 | Delta（Sprint 4 → M6）|
|---|---|---|---|---|
| Sean Ellis 「非常失望」% | ≥30%（8-10 戶內部 beta，低信度）| ≥40%（≥30 有效樣本）| ≥50%（成熟用戶群）| +20pp 目標 |
| 子女 NPS | ≥25（Sprint 4 基線）| ≥40（Phase 6 目標）| ≥50（Year 1 Q2 目標）| +25 目標 |
| D30 Retention（長者）| ≥50%（Sprint 4 基線）| ≥60%（Phase 6 目標）| ≥65%（M6，習慣固化）| +15pp 目標 |
| NSM 長者週互動 | ≥15 次/週（Sprint 4 W4）| ≥20 次/週（Phase 6 W4）| ≥30 次/週（M6）| +15 次目標 |
| Freemium→Paid 轉換率 | — | ≥3%（Phase 6 目標）| ≥5%（M6 目標）| +2pp 目標 |
| 月流失率 | — | ≤5%（Phase 6 目標）| ≤4%（M6 目標）| -1pp 目標 |

**重要說明**：以上所有數字均為 Plan-Only 假設計畫值（🟡），基於 lean-canvas.md §1 Block 8、sprint-4-spec.md §6、decision-w6.md §7.2 的量測目標設計整合，非已驗證量測結果。Phase 6 實際量測結果將在 Pilot 執行後更新此表。

---

## §12. Recommendation

### §12.1 Scale 建議（PMF 強訊號後）

**觸發條件**：Sean Ellis ≥40% + 子女 NPS ≥50 + D30 Retention ≥60%（三者全達標）

建議動作：
- GTM 預算 +50%（Facebook 廣告 + 親子照顧社群）
- 加速 ODM 硬體量產評估（BOM NT$12,000 → 目標量產 500 台）
- ICP 擴張：從 Persona A 北漂 IT 延伸至 Persona B 在地中產
- Seed 募資時程確認（Sean Ellis ≥40% = Seed 核心 PMF 訊號）
- 長照 3.0 補貼名單申請加速

### §12.2 Persevere 建議（PMF 中訊號）

**觸發條件**：三指標中 2/3 達標

建議動作（依缺口調整）：
- Sean Ellis 缺口：追加 Detractor 深度訪談，找到「非常失望」比例低的原因
- NPS 缺口：台語語音識別品質改善 + UI 流暢度優化 + 服藥提醒語氣調整
- Retention 缺口：個人記憶 AI（F04）啟用率提升 + Operator 主動追蹤低互動戶
- 延後 1-2 個月量測後重判（Year 1 M6 前確認 PMF）

### §12.3 Pivot 建議（PMF 弱訊號）

**觸發條件**：三指標 ≤1/3 達標，依 §6 Pivot Trigger 啟動

建議動作：
- 升級懷特確認 Pivot 方向
- 依 §6 各假設 Pivot 行動執行（Revenue / Solution / UVP 各選其一）
- 60 天後重測 PMF 訊號
- 視情況縮減 Pilot 規模（保留核心 5 戶驗證 Pivot 假設）

### §12.4 Kill 建議（極端情境）

**觸發條件**：D7 Retention < 30%（長者全面棄用）+ 訪談確認「根本痛點不存在」+ Sean Ellis < 10%

建議動作：
- 升級懷特確認 Kill 決策（非 self-drive 範圍）
- 保存已驗證假設清單（問題框架 / WoZ 技術可行性 / 競品空白）供下一個 Hypothesis 使用
- 評估「子女陪伴 App」純軟體轉型（降低硬體風險）作為最後 Pivot 選項

---

## §13. 參考文獻

- Eric Ries, *The Lean Startup*, 2011：retention curve = PMF 最關鍵訊號；pivot 定義與 PMF 量測
- Sean Ellis（2009）PMF 測試「40% Very Disappointed」原始定義；後由 Ellis & Brown, *Hacking Growth*, 2017 延伸
- Google HEART Framework（Kerry Rodden, Hilary Hutchinson, Xin Fu, 2010）：UX metrics for large-scale web services
- Dave McClure, *Startup Metrics for Pirates*（AARRR Framework）, 2007
- Ash Maurya, *Running Lean*, 2012：NSM 設計 + Lean Canvas Block 8 Key Metrics
- lean-canvas.md §1 Block 8（本案 Key Metrics 設計基礎）✅
- sprint-4-spec.md §6（PMF 5 框架量測規格）✅
- decision-w6.md §7.2 / §7.3（Phase 6 PMF 量測機制 + Phase 7-8 銜接）✅
- pricing.md §3（WTP 四框架 + Tier 設計）🟡
- feature-triage.md §2（MoSCoW Must/Should/Could + HEART Adoption 對映）✅
- persona.md §1-§3（Persona A/B/C WTP + 觸發事件 + 決策邏輯）🟡
- jtbd-day-in-life.md §1-§7（JTBD Functional / Emotional / Social Jobs）🟡
- wtp-payer.md §1.5（WTP 四框架交叉中位 NT$1,000-1,500）🟡
- unit-econ.md §7.2（LTV:CAC 5.95:1 中性情境）🟡
- safety-redlines.md §3.3 / §5.1（緊急偵測 SLA + 假事件演習規格）
- cert-timeline.md §11（Plan-Only 紅線 P1：不宣稱召回率）
- phase-0-answers.md（Plan-Only Mode 校準 + 報告對象特殊考量）✅

---

> **文件狀態**：Phase 6 T42 PMF 量測機制設計 完成（Plan-Only Mode）
> **量測執行狀態**：📋 post-approval execution（計畫通過後執行 Sprint 4 closed beta → Phase 6 Pilot）
> **下一步**：T43 Pilot 招募計畫 / Phase 7 T44-T48 Pitch Prep 銜接
> **Plan-Only 聲明**：本文件所有量測目標值標 🟡（假設基線，非已驗證數據）；量測工具 / 流程標 📋（計畫通過後實作）
