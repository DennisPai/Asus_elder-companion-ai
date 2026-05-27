# Phase 0: 五問答案 + Plan-Only Mode 校準

> 日期：2026-05-27
> 答題者：懷特（COO）
> 受眾：公司內部主管 1 位

## 五問答案

| # | 問題 | 答案 | 影響 |
|---|---|---|---|
| 1 | 產業 | **B2C** | agent routing 走 B2C App + Hardware；revenue model narrow 到 B2C 適用選項 |
| 2 | Target Audience | **長者的子女**（buyer + decision maker；長者本人是 end user 但不是付款人） | persona 主軸是子女（中年 / 北漂 / 在地照顧）、訪談主角是子女、WTP 量測對子女 |
| 3 | 預算 | **不限**，但 **計畫不能假設要做完訪談或招募才能寫計畫** | ⚠️ **Plan-Only Mode** — 所有 deliverable 是 desk research + 規劃 |
| 4 | Demo 對象 | **公司內部主管 1 位** | pitch deck tone 走「向主管說明 + 取得 go/no-go」、不是 VC pitch |
| 5 | Geo | **台灣 only** | 法規只 narrow 到 台灣 PDPA / 衛福部 / 經濟部商業司；競品 deep dive 含國際 best practice 但 SAM 算台灣 |

## ⚠️ Plan-Only Mode（關鍵校準）

懷特明示：「**現在要列 MVP 和商業模式的計畫**，你這邊假設的那些成本，都一定是計畫通過之後的事情(像是訪談、招募)，現在列的計畫不能說要做完訪談或招募後才能做計畫。」

### 含義
本案最終 deliverable 是給主管的「90 天 MVP + 商業模式**規劃書**」，不是「90 天 MVP 執行成果」。所有 phase 都採 **desk research + 規劃**，不執行真實訪談、招募、prototype build、pilot。

### 對 PM Flow v0.1 的校準

| Phase | 原計畫（執行版）| Plan-Only 校準（規劃版） |
|---|---|---|
| 0.5 題目拆解 | desk research | **不變** — 100% desk |
| 1 Problem Framing | desk research + 法規盤點 | **不變** — 100% desk |
| 2 Customer Discovery | 實際訪 5-8 子女 + 3-5 長者 + 2-3 長照人員 | **改**：訪談**計畫設計** + 招募**計畫** + Persona **假設**（基於 desk research，含可驗證假設清單） + Mom Test **大綱草稿** |
| 3 Product + Tech | Build vs Buy 真實決策 | **改**：Build vs Buy **分析報告**（含選項評分） + 技術架構**選型建議** + Feature Triage **MoSCoW/RICE/Kano 評分表** |
| 4 Business Model | Lean Canvas + Unit Econ + Pricing | **不變** — 商業模式設計本身就是規劃 |
| 5 Prototype Build | 實際寫 Wizard of Oz code | **改**：Prototype **規格書** + 開發**計畫**（含技術選型 confirmed + Sprint 拆解 + 風險清單） |
| 6 Pilot + Validation | 實際跑 4 週 closed beta | **改**：Pilot **設計書** + MoU **template** + PMF **量測機制設計** + 招募**計畫** |
| 7 Pitch Prep | YC 10-slide VC pitch | **改**：主管 **pitch deck**（go/no-go 取得導向） + 5 年財務模型 + 主管 Q&A Top 10 |
| 8 Demo Day | GitHub Page 上線 + 公司主管 demo | **不變** — 主管 demo + 收回饋 + 計畫通過判定 |

### 對 OpenSpec tasks.md 的影響

需重新校準的 task：
- T21 「實際訪 5-8 子女 + 3-5 長者 + 2-3 長照人員 → docs/interview-log.md」→ **改為** T21' 「設計濃縮 Mom Test 大綱 + 訪談招募計畫 + 預期 Persona 假設清單 → docs/interview-plan.md」
- T36-T38 「Sprint 1-4 實際開發」→ **改為** T36-T38' 「Sprint 1-4 規格書 + 技術選型 + Sprint 拆解 + 風險清單」
- T39-T43 「Pilot 招募 + MoU + 4 週 beta」→ **改為** T39-T43' 「Pilot 設計書 + MoU template + 量測機制 + 招募計畫」

具體任務更新見 `openspec/changes/elder-companion-ai-90day-mvp/tasks.md` 校準版。

## 對 deliverable 表達的影響

GitHub Page 主管 demo 角度：
- 不是「我們已經跑完 90 天 MVP 看結果」
- 是「我們設計了 90 天 MVP 計畫 + 商業模式，主管 review 是否 go/no-go 啟動」

所有 docs/* 文件加標示：
- ✅ **已完成**：desk research / 規劃 / 分析 / 設計
- 📋 **待計畫通過後執行**：實際訪談 / 招募 / Build / Pilot / 真實 PMF 量測
- 🟡 **基於 desk 的可驗證假設**：Persona 假設 / WTP 範圍假設 / 競品 gap 假設（需 Phase 2 訪談驗證）

GitHub Page 視覺：每個 deliverable 加角度標籤（綠 = desk-validated / 黃 = hypothesis / 灰 = post-approval execution）。
