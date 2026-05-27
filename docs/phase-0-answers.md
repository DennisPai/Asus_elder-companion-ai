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
| 4 | Demo 對象 | **華碩（ASUS）負責 AI 代理人 / 服務型機器人主管 1 位**（懷特 2026-05-27 18:00 精確化）| pitch deck tone 走「向主管說明 + 取得 go/no-go」、不是 VC pitch；**避免 ASUS Zenbo Junior II 數據錯誤**（主管是該產品線 owner）；對 ASUS 相關段落用詞**客觀中立**（不過度推銷 OEM/合作 / 不刻意迴避競品比較）|
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

## 對 deliverable 表達的影響（懷特 2026-05-27 校準）

### GitHub Page 對外定位
- **不是**「我們已經跑完 90 天 MVP 看結果」
- **不是**「demo」（禁用此字眼）
- **是**「**規劃 3 個月落地的長輩互動陪伴機器人 × AI Brain MVP 與商業模式**規劃書」，給**華碩（ASUS）負責 AI 代理人 / 服務型機器人主管** review（2026-05-27 18:00 懷特精確化）

### ⚠️ 報告對象特殊考量（華碩 AI 代理人 / 服務型機器人主管）

1. **ASUS Zenbo Junior II 數據必再三查證**：主管是該產品線 owner，數據錯誤 = 致命專業性問題
2. **客觀中立呈現 ASUS 相關段落**：
   - ❌ 禁「ASUS 是潛在合作對象」「OEM / licensing 合作可能」等推銷型語氣
   - ❌ 禁過度抬舉或貶抑 Zenbo Junior II
   - ❌ 禁刻意迴避競品比較（主管期待專業競品分析）
   - ✅ 客觀呈現「ASUS Zenbo Junior II 市場定位 + 我們 MVP 的差異化空間」
   - ✅ 引用 ASUS 官方公告 / 媒體報導為主，避免主觀評論
3. **MVP 不必與 Zenbo Junior II 有關**（不加分不扣分）— 規劃書是「我們對長者陪伴市場的看法 + MVP 設計」，不是「請 ASUS 合作」

### docs/* 內部仍保留三色標籤（供我們 + 懷特 review 用）

所有 docs/* 文件加標示：
- ✅ **desk-validated**：desk research / 規劃 / 分析 / 設計（有 ≥3 source 佐證）
- 🟡 **hypothesis**：基於 desk 的可驗證假設（需 Phase 2 訪談驗證）
- 📋 **post-approval execution**：待計畫通過後執行（實際訪談 / 招募 / Build / Pilot）

### 對外網頁渲染紀律（T50 frontend-engineer 必遵守）

| 元素 | docs/* 內部 | web/ 對外 |
|---|---|---|
| 角度標籤 ✅/🟡/📋 | 保留 | **剝離** |
| 用詞「demo」 | 內部討論可用 | **禁用**，改稱「主管 review 規劃書」 |
| 用詞「假設」「猜測」 | 保留 | **改寫**為「規劃」「設計」「分析」 |
| 「Plan-Only Mode 校準」段 | 保留 | **不渲染進網頁** |
| 「待 Phase 2 驗證」「需後續驗證」字樣 | 保留 | **重寫**為「下一階段確認」「規劃通過後執行」 |
| Wizard-of-Oz / post-approval execution 等內部術語 | 保留 | **禁出現**，改用自然中文 |

實作方式：
- 自訂 MDX remark plugin 剝離 ✅/🟡/📋 emoji
- 用詞 lint：build 前 grep 確認禁區字眼為 0
- 「Plan-Only Mode」段在 MDX 上加 `{/* internal-only */}` 註解，frontend 過濾

### 角度標籤的內部功能保留
- 內部 review 時可一眼看出哪些段是 desk 已驗證、哪些是假設、哪些待執行
- 給懷特用：他打開 docs/*.md 看「綠」就知道可放心、看「黃」知道需驗證、看「灰」知道需執行
