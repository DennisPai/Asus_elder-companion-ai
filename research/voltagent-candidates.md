# VoltAgent 候選 agent 表（待懷特勾選）

> Source: https://github.com/VoltAgent/awesome-claude-code-subagents
> 授權：MIT（無限制商用、需 attribution）
> 總 agent 數：154 / 10 分類
> Scan 日期：2026-05-27

## 對應我們 10 缺角色

| # | 我們要的角色 | VoltAgent 候選 | 路徑 | 狀態 | 懷特勾選 |
|---|---|---|---|---|---|
| 1 | stakeholder-mapper | **business-analyst** | `08-business-product/` | ✅ 直用 | ☐ |
| 2 | ethical-risk-mapper | risk-manager | `07-specialized-domains/` | ✨ 需改造 → `elderly-risk-mapper.md`（vulnerable population + informed consent） | ☐ |
| 3 | hardware-unit-econ | iot-engineer | `07-specialized-domains/` | ✨ 需改造 → `hardware-unit-econ-modeler.md`（BOM + working capital + supply chain） | ☐ |
| 4 | build-vs-buy-advisor | business-analyst (部分) | `08-business-product/` | ⚠️ 部分涵蓋、需補 90 天硬體決策框架 | ☐ |
| 5 | TAM-SAM-SOM-analyst | **market-researcher** | `10-research-analysis/` | ✅ 直用 | ☐ |
| 6 | moat-deep-analyst | competitive-analyst | `10-research-analysis/` | ✨ 需改造（competitor 對標 → 護城河深度） | ☐ |
| 7 | financial-modeler | quant-analyst | `07-specialized-domains/` | ✨ 改造度高 → `5yr-financial-modeler.md`（SaaS+硬體混合財模） | ☐ |
| 8 | market-research-analyst | **project-idea-validator** | `10-research-analysis/` | ✅ 直用（概念驗證 + 假設破壞） | ☐ |
| 9 | kano-model-prioritizer | 無直接對應 | — | ❌ **需新建** | ☐ |
| 10 | concept-deconstructor | **assumption-mapping** | `08-business-product/` | ✅ 直用（假設分解 + 題目拆解） | ☐ |

## 額外彩蛋（VoltAgent 庫值得收但未原列）

| # | agent | 路徑 | 為什麼值得 | 懷特勾選 |
|---|---|---|---|---|
| 11 | **legal-advisor** | `08-business-product/` | 長者隱私 + 醫療器械合規 + 資料保護 | ☐ |
| 12 | **ux-researcher** | `08-business-product/` | 補充 project-idea-validator、做老年用戶研究 | ☐ |
| 13 | hipaa-compliance | `07-specialized-domains/` | 涉及健康數據時必備 | ☐ |
| 14 | data-researcher | `10-research-analysis/` | 老齡人口統計 / 競品用戶畫像 | ☐ |
| 15 | healthcare-admin | `07-specialized-domains/` | B2B2C 醫院場景 | ☐ |

## 整合動作（懷特勾選後）

### 直接 copy（6 個直用）
```bash
cp ~/repos/awesome-claude-code-subagents/categories/08-business-product/business-analyst.md ~/.claude/agents/
cp ~/repos/awesome-claude-code-subagents/categories/10-research-analysis/market-researcher.md ~/.claude/agents/
cp ~/repos/awesome-claude-code-subagents/categories/10-research-analysis/project-idea-validator.md ~/.claude/agents/
cp ~/repos/awesome-claude-code-subagents/categories/08-business-product/assumption-mapping.md ~/.claude/agents/
cp ~/repos/awesome-claude-code-subagents/categories/08-business-product/ux-researcher.md ~/.claude/agents/  # 含 ux-researcher
cp ~/repos/awesome-claude-code-subagents/categories/10-research-analysis/competitive-analyst.md ~/.claude/agents/
```

每個 frontmatter 加：
```yaml
source: voltagent
mode: pm-flow-v0.1
license: MIT (adapted from VoltAgent/awesome-claude-code-subagents)
```

### Fork + 改造（3 個）
- `risk-manager.md` → `elderly-risk-mapper.md`（換 vulnerable population framework）
- `iot-engineer.md` → `hardware-unit-econ-modeler.md`（移除工程實作章節、補 BOM/working capital/supply chain 章節）
- `quant-analyst.md` → `5yr-financial-modeler.md`（換衍生品定價為 SaaS+硬體混合 5 年模型）

### 新建（1 個）
- `kano-model-prioritizer.md`（從零寫、long-form Kano model + 長者 personas criticality vs satisfaction 矩陣）

## 對 PM 流程 v0.1 派遣對應

| Phase | 派誰 |
|---|---|
| **Phase 0.5** 題目拆解 | assumption-mapping（總控）+ market-researcher × 5 concept + competitive-analyst × 5 concept + project-idea-validator |
| **Phase 1** Problem Framing | business-analyst（Stakeholder Mapping）+ market-researcher（TAM/SAM/SOM）+ elderly-risk-mapper + competitive-analyst |
| **Phase 2** Customer Discovery | ux-researcher + project-idea-validator |
| **Phase 3** Product+Tech | business-analyst（Build vs Buy）+ kano-model-prioritizer + 既有 spec-writer / backend-engineer 規劃 |
| **Phase 4** Business Model | 既有 lean-canvas-writer + hardware-unit-econ-modeler + 5yr-financial-modeler + 既有 pricing-strategist |
| **Phase 5-6** Build / Pilot | 既有 backend-engineer / frontend-engineer / test-automator / 既有 pilot-mou-drafter |
| **Phase 7** Pitch | competitive-analyst（moat deep dive）+ 5yr-financial-modeler + 既有 pitch-deck-writer / demo-script-writer |

## 授權合規

VoltAgent 庫 MIT License，整合策略：
1. 在 `~/projects/elder-companion-ai-mvp/CREDITS.md` 列 "Adapted from VoltAgent/awesome-claude-code-subagents (MIT)"
2. 每個 fork agent frontmatter 標明 source
3. 不限制商用 / 不限制再分發
