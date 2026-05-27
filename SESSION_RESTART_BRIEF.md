# 🔄 Session Restart Brief — Elder Companion AI MVP

> **下次 session 重啟後**，懷特會說：「到 `~/projects/elder-companion-ai-mvp` 讀 `SESSION_RESTART_BRIEF.md`」。
> 讀完此檔即接上現在進度、立刻動工 Phase 0.5。

---

## 1. 任務概覽

**任務**：規劃「長者互動陪伴機器人 × AI Brain」可於 3 個月內落地展示的 MVP + 商業模式
**最終 deliverable**：GitHub Page 互動式 dashboard 給公司主管 1 位看
**工作目錄**：`~/projects/elder-companion-ai-mvp`
**GitHub repo**：https://github.com/DennisPai/Asus_elder-companion-ai （PAT 已 setup, gh auth ok）
**起始日期**：2026-05-27
**最後一次 commit**：a1a5752（restore workflow）

---

## 2. ⚠️ Plan-Only Mode（最重要的校準）

**懷特明示**：「現在要列 MVP 和商業模式的計畫，你這邊假設的那些成本，都一定是計畫通過之後的事情(像是訪談、招募)，現在列的計畫不能說要做完訪談或招募後才能做計畫。」

**含義**：
- 所有 deliverable 是 **規劃書**、不是執行成果
- Phase 2 訪談：寫**計畫 + Persona 假設 + Mom Test 大綱**（不實際訪）
- Phase 5 Prototype：寫**規格書 + 開發計畫 + 技術選型**（不實際 build）
- Phase 6 Pilot：寫**設計書 + MoU template + 量測機制**（不實際跑）
- 所有文件加角度標籤：✅ desk-validated / 🟡 hypothesis / 📋 post-approval execution

詳細校準見 `docs/phase-0-answers.md`。

---

## 3. 採用的流程：PM Flow v0.1（不走 Mode E）

**為什麼不走 Mode E**：Mode E v6.3 是「方法論縮影」、重 method completeness 輕 ship 路徑，對 hardware + vulnerable population 場景 generic 不夠 specific。詳見 `sop/pm-flow-v0.1.md` 開頭設計原則。

**8 phase / 29 step**（已寫進 `sop/pm-flow-v0.1.md`）：
- Phase 0 ✅ 完成（5 問已答、見 `docs/phase-0-answers.md`）
- Phase 0.5 ⏳ **下一步要派遣 agent 跑**（題目拆解 5 concept × 7 維度）
- Phase 1-8 待跑

**核心紀律**：
- W6 / W12 兩次 P/P/K Gate（不是 Mode E 三次）
- discovery 3w / build 5w / pilot 2w / pitch 2w 的時間配比
- Kano > RICE 場景權重（長者產品 Kano filter 後再 RICE 排序）

---

## 4. Phase 0 五問答案（已定）

| # | 問題 | 答案 |
|---|---|---|
| 1 | 產業 | **B2C** |
| 2 | Target Audience | **長者的子女**（buyer + decision maker；長者本人是 end user 但不是付款人）|
| 3 | 預算 | **不限**，但 Plan-Only Mode（不能假設要做完訪談/招募才寫計畫）|
| 4 | Demo 對象 | **公司內部主管 1 位** |
| 5 | Geo | **台灣 only**（法規 narrow 到 PDPA + 衛福部 + 經濟部）|

---

## 5. ✅ 已完成（本 session）

- ✅ OpenSpec change `openspec/changes/elder-companion-ai-90day-mvp/`（proposal / design / tasks / 54 任務）
- ✅ SOP `sop/pm-flow-v0.1.md`（8 phase / 29 step / 跟 Mode E 差異對照表）
- ✅ Phase 0.5 framework `sop/phase-0.5-framework.md`（5 concept × 7 維度）
- ✅ VoltAgent 候選表 `research/voltagent-candidates.md`（11 個 agent 全 setup）
- ✅ Phase 0 答案 `docs/phase-0-answers.md`（含 Plan-Only Mode 校準）
- ✅ Next.js 14 static export skeleton `web/`（app router + Tailwind + recharts + MDX）
- ✅ GitHub Actions workflow `.github/workflows/deploy-pages.yml`
- ✅ CREDITS.md（VoltAgent MIT attribution）
- ✅ Push 全部到 GitHub（3 commits / 19+ files）

---

## 6. ✅ Agent fleet 已部署（11 個全部已在 ~/.claude/agents/）

### 直接 copy from VoltAgent MIT（7 個）
| Agent | 用於 Phase | 角色 |
|---|---|---|
| business-analyst | 1 / 3 | Stakeholder Mapping + Build vs Buy 框架 |
| market-researcher | 0.5 / 1 | TAM/SAM/SOM + Why Now |
| project-idea-validator | 0.5 / 1 / 2 | 假設破壞 + 概念驗證 |
| competitive-analyst | 0.5 / 7 | 競品 deep dive + moat 分析 |
| data-researcher | 0.5 / 1 | 老齡人口統計 / 競品用戶畫像 |
| legal-advisor | 1 / 4 / 6 | 個資 / 醫療器械 / 隱私政策 |
| hipaa-compliance | 6 | 健康資料合規思維（美國藍本、適用框架） |

### Fork 改造（3 個）
| Agent | 用於 Phase | 角色 |
|---|---|---|
| elderly-risk-mapper | 1 | vulnerable population 紅線清單 + 倫理風險 |
| hardware-unit-econ-modeler | 4 | BOM / 庫存 / 認證費 / working capital |
| 5yr-financial-modeler | 7 | 3 scenario 5 年 P&L + 燒錢曲線 + Use of Funds |

### 新建（1 個）
| Agent | 用於 Phase | 角色 |
|---|---|---|
| kano-model-prioritizer | 3 | Kano 5 類別 + 3 persona 矩陣 + Reverse 屬性 |

### 跳過（衝突）
- `ux-researcher` — 既有 user-level agent 保留、不覆蓋
- `assumption-mapping` — 既有 user-level agent 保留、不覆蓋

---

## 7. ⏳ 下一步明確指令（重啟後立刻做）

### 動作 1: 派遣 Phase 0.5（5 concept × 7 維度）

依 `sop/phase-0.5-framework.md` 並行派遣：

**Batch 1（同時派 5 個 sub-agent）：**
```
1. assumption-mapping → 跑「concept 5 三者 combine」整合 + 假設清單
   待 batch 2 完成才開始

2. market-researcher → concept 1-4 共用 TAM/SAM/SOM + Why Now 論證
   讀：sop/phase-0.5-framework.md + docs/phase-0-answers.md

3. project-idea-validator → concept 1-4 desk research 跑 7 維度（需求 / 痛點 / 商模案例 / 顧客旅程 / 護城河）
   讀：sop/phase-0.5-framework.md + docs/phase-0-answers.md

4. competitive-analyst → concept 1-4 競品 SWOT 並行（≥3 競品/concept）
   讀：sop/phase-0.5-framework.md

5. data-researcher → 台灣老齡人口統計 + 全球 elderly companion robot market 數據
   讀：sop/phase-0.5-framework.md
```

**Batch 2（assumption-mapping 整合）：**
- 等 batch 1 完成 → assumption-mapping 讀 concept 1-4 結果 → 整合 concept 5 + 寫 ≥3 strongest hypothesis（含 Lean Canvas 雛形）

**Output**: `docs/phase-0.5-deconstruction.md`（依 framework template）

### 動作 2: Push 到 GitHub + Discord 通知

`git add docs/ && git commit -m "Phase 0.5 deconstruction" && git push`
→ Discord notify https://github.com/DennisPai/Asus_elder-companion-ai/blob/main/docs/phase-0.5-deconstruction.md

### 動作 3: 等懷特 review Phase 0.5、approve 後進 Phase 1

---

## 8. 關鍵 feedback / 紀律提醒

1. **禁止簡化** — 5 concept × 7 維度全做，不准抽樣後 summary
2. **跟懷特繁中溝通**（程式碼識別符 + 主流技術品牌例外）
3. **Discord-only 互動** — 所有 user-facing 訊息走 `/discord-reply` skill、不打 text output 期待懷特看到
4. **Plan-Only Mode** — 所有 deliverable 加角度標籤 ✅/🟡/📋
5. **驗證 sub-agent ≠ 實作 sub-agent** — Phase 0.5 結果整合後派獨立 sub-agent 驗證
6. **Push commit/PR 前 git remote -v 確認** origin 是 `DennisPai/Asus_elder-companion-ai`（不是 fork 沒這問題、但保險檢查）
7. **PAT 已 setup**（GH_TOKEN 在 env vars，gh credential helper 設好）— 直接 `git push origin main` 即可、不需要重新登入
8. **feature-factory 不需要啟動** — 本案不走 Mode A/B/C/D，走 PM Flow v0.1 自訂 SOP

---

## 9. 重要檔案路徑速查

```
~/projects/elder-companion-ai-mvp/
├── SESSION_RESTART_BRIEF.md     ← 你正在讀的這個
├── README.md
├── CREDITS.md
├── .github/workflows/deploy-pages.yml
├── docs/
│   └── phase-0-answers.md       ← Phase 0 答案 + Plan-Only Mode 校準
├── sop/
│   ├── pm-flow-v0.1.md          ← 8 phase SOP
│   └── phase-0.5-framework.md   ← 下一步要跑的框架
├── research/
│   └── voltagent-candidates.md
├── openspec/changes/elder-companion-ai-90day-mvp/
│   ├── proposal.md
│   ├── design.md
│   └── tasks.md
└── web/                          ← Next.js skeleton (Phase 8 才填內容)
    ├── app/
    ├── package.json
    ├── next.config.mjs
    └── tailwind.config.ts
```

新加的 user-level agents：
```
~/.claude/agents/
├── business-analyst.md          (VoltAgent MIT)
├── market-researcher.md          (VoltAgent MIT)
├── project-idea-validator.md     (VoltAgent MIT)
├── competitive-analyst.md        (VoltAgent MIT)
├── data-researcher.md            (VoltAgent MIT)
├── legal-advisor.md              (VoltAgent MIT)
├── hipaa-compliance.md           (VoltAgent MIT)
├── elderly-risk-mapper.md        (forked from risk-manager)
├── hardware-unit-econ-modeler.md (forked from iot-engineer)
├── 5yr-financial-modeler.md      (forked from quant-analyst)
└── kano-model-prioritizer.md     (new, built from scratch)
```

VoltAgent local clone：`~/repos/awesome-claude-code-subagents/`

---

## 10. 重啟後第一句話（懷特會說）

> 「到 `~/projects/elder-companion-ai-mvp` 讀 `SESSION_RESTART_BRIEF.md`，繼續 Phase 0.5」

你的動作：
1. `cd ~/projects/elder-companion-ai-mvp`
2. Read `SESSION_RESTART_BRIEF.md`（這份）
3. Read `sop/phase-0.5-framework.md`
4. Read `docs/phase-0-answers.md`
5. 立刻派遣 Phase 0.5 5-agent batch（依第 7 段指令）
6. 過程進度推 Discord（走 `/discord-reply` skill）
