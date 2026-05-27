# Proposal: Elder Companion AI — 90 Day MVP + Business Model

## Why

公司主管出題：「請規劃一個可於 3 個月內落地展示的『長者互動陪伴機器人 × AI Brain』的 MVP 與商業模式」。

對應現有 Mode E（v6.3，5/26 上線）的設計缺口，懷特同意：本案不走現有 Mode E，改用 **PM 視角流程 v0.1** 當專屬 SOP，跑完 demo day 後 retrospective 抽通用部分進 Mode E v6.4。

## What Changes

1. **新建專案** `~/projects/elder-companion-ai-mvp`（避開既有 `elder-companion-robot` 舊專案）
2. **寫 PM 流程 v0.1 SOP**（8 phase / 29 step，含 hardware + vulnerable population 特殊考量）
3. **加 Phase 0.5「題目拆解」環節** — 5 個 concept × 7 維度研究（懷特原始命題）
4. **VoltAgent 庫補 agent** — 派 Explore agent 掃描候選 → 懷特勾選 → copy 進 `~/.claude/agents/`
5. **GitHub Page deploy** — Next.js static export + 互動式 dashboard（Lean Canvas SVG / 財務模型 table / 競品 filter / Persona card），給主管「demo-ready」感
6. **跑完 W12 demo day 後** retrospective 抽通用部分進 Mode E v6.4 升級（另開 change，不在此 change 範圍）

## Impact

- **Affected stakeholders**: 懷特（PM 角色執行）、公司主管（最終受眾）
- **Affected systems**:
  - 新建 `~/projects/elder-companion-ai-mvp` 工作目錄
  - 新增 `~/.claude/agents/` 數個 VoltAgent 來源 agent（具體清單待懷特勾選）
  - **不動** 現有 Mode E / feature-factory / 既有 25 個 v6.3 sub-agent
  - 新增 GitHub repo + Pages 部署
- **時序**：90 天 calendar time / W0-W12，但本 OpenSpec change 範圍只涵蓋 W0-W12 工作架構建立 + 跑流程；不含 retrospective 升級 Mode E

## Out of Scope

- Mode E v6.4 升級（待此 change 結案後另開）
- 進入量產 / 募資後續執行（90 天 MVP 後的事）
- 真實長者訪談的法律合規深度（W2 訪談時派 gdpr-compliance-checker 跑第一輪即可）

## Success Criteria

- W4 鎖 MVP scope + 第一次 Pivot/Persevere/Kill 決策
- W6 鎖 Lean Canvas + Unit Economics + Hardware COGS
- W10 完成 Pilot Program + 收 PMF 量測訊號（Sean Ellis ≥40% / Day-7 retention / NPS）
- W12 主管 demo + GitHub Page 上線 + 收主管回饋
