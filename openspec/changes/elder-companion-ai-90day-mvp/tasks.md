# Tasks: Elder Companion AI — 90 Day MVP

## Phase 0: Setup（this session — DONE 2026-05-27）
- [x] T1 建專案目錄 + git init
- [x] T2 寫 OpenSpec proposal / design / tasks
- [x] T3 派 Explore 跑 VoltAgent 候選表（背景完成、154 agent / MIT / 10/10 缺角色全對應）
- [x] T4 寫 sop/pm-flow-v0.1.md（8 phase / 29 step / 跟 Mode E 差異對照表）
- [x] T5 寫 sop/phase-0.5-framework.md（5 concept × 7 維度 + 並行派遣策略）
- [x] T6 問懷特 Phase 0 五題 → docs/phase-0-answers.md（含 Plan-Only Mode 校準）
- [x] T7 候選 agent 表 Discord 給懷特 → 懷特決策「你決定就好」（全選）
- [x] T8 copy 7 + fork 3 + 新建 1 = 11 個 agent 進 ~/.claude/agents/、frontmatter 加 source/license/mode
- [x] T9 建 web/ Next.js 14 static export skeleton + GitHub Actions Pages workflow
- [x] T10 commit + push 到 DennisPai/Asus_elder-companion-ai（4 commits / 最終 hash 1558335）
- [x] T10a SESSION_RESTART_BRIEF.md 寫好（給新 session 接續用）

## Phase 0.5: 題目拆解（W0）
- [x] T11 派 5 sub-agent 並行跑 5 concept × 7 維度（Batch 1: project-idea-validator / market-researcher / competitive-analyst / data-researcher + Batch 2: assumption-mapping 整合 concept 5）
- [x] T12 整合 → docs/phase-0.5-deconstruction.md（含 7/7 Gate 通過 + 獨立驗證 sub-agent /tmp/phase-0.5-validation-findings.md）
- [x] T13 push GitHub + Discord 通知懷特 review

## Phase 1: Problem Framing（W1）
- [x] T14 TAM/SAM/SOM 量化（三向交叉）+ Why Now ≥5 趨勢 → docs/problem-framing.md §1
- [x] T15 Stakeholder Mapping（5 大類 × 19 子分類 + Power×Interest + Influence Map + Engagement Timeline + Cultural）→ docs/problem-framing.md §2
- [x] T16 Ethical Risk + 紅線清單（10 條 × 8 維度 + 7 LLM 絕對紅線 + 危機 SOP）→ docs/problem-framing.md §3
- [x] T17 競品 deep dive 4 家（PARO / ElliQ / Mabu 退場確認 / ZenboJr）+ Build vs Buy 4 層 → docs/problem-framing.md §4
- [ ] T18 W1 review gate → 懷特 approve 才進 Phase 2

## Phase 2: Customer Discovery（W2-3，Plan-Only 校準）
- [x] T19 3 persona 假設草稿 (10 維度 + 長者方 vignette + 共通需求) → docs/persona.md
- [x] T20 設計濃縮 Mom Test ≤8 題訪談大綱 (3 群組 × 含倫理校驗) → docs/interview-guide.md
- [x] T21 訪談招募計畫 (5 面向) + 預期 Persona 假設清單 → docs/interview-plan.md（Plan-Only 校準，原 T21 實際訪談已改設計版）📋
- [x] T22 JTBD + Day-in-the-Life mapping (3 persona × Functional/Emotional/Social) → docs/jtbd-day-in-life.md
- [x] T23 WTP 範圍假設 (4 framework 交叉) + 付款人辨識 (4 類) → docs/wtp-payer.md

## Phase 3: Product + Tech（W3-4）— DONE 2026-05-27
- [x] T24 Build vs Buy 決策 → docs/build-vs-buy.md（620 行）
- [x] T25 MVP 類型決策（Concierge / Wizard of Oz）→ docs/mvp-type.md（514 行）
- [x] T26 技術架構 + 隱私邊界 → docs/tech-architecture.md（970 行）
- [x] T27 Feature Triage (MoSCoW+RICE+Kano) → docs/feature-triage.md（440 行）
- [x] T28 Safety 紅線清單 → docs/safety-redlines.md（832 行）
- [x] T29 W4 P/P/K Gate #1 → docs/decision-w4.md（658 行；self-drive 結論：主軸 Hyp A B2C DTC Persevere / 次主軸 Hyp D Freemium Persevere 入口 + Hyp B B2B2C Year 1 H2 hedge / Hyp C 保險延 Year 3+）
- 獨立驗證 sub-agent CONDITIONAL PASS（2 Major / 5 Minor / 3 Nice-to-have）；2 Major 已修補：M1 decision-w4.md「Mode E」→「PM Flow v0.1」/ M2 NT$1,200 vs NT$1,290 跨 doc 校準補注

## Phase 4: Business Model（W4-5）
- [ ] T30 Lean Canvas v1 → docs/lean-canvas.md
- [ ] T31 收入模型 narrow 4 選項評估 → docs/revenue-model.md
- [ ] T32 Pricing × WTP 對齊 + 三層 tier → docs/pricing.md
- [ ] T33 Hardware Unit Econ（BOM + 庫存 + 製造 + 認證費）→ docs/unit-econ.md
- [ ] T34 認證時程估算（CNS / CE / FDA 若涉醫療）→ docs/cert-timeline.md
- [ ] T35 W6 P/P/K Gate Mid-point → docs/decision-w6.md

## Phase 5: Prototype Build（W5-9）
- [ ] T36 Sprint 1-2: Wizard of Oz prototype（市售平板 + OpenAI/Claude API + 後台人在環）
- [ ] T37 Sprint 3: 核心對話 + 緊急 keyword 偵測 + 子女 app
- [ ] T38 Sprint 4: 閉迴路測試 5-10 家庭 / 1-2 機構

## Phase 6: Pilot + Validation（W9-10）
- [ ] T39 Pilot Program 招募 → docs/pilot-recruitment.md
- [ ] T40 MoU 簽訂 → docs/pilot-mou.md
- [ ] T41 4 週 closed beta 執行 + 每週量測
- [ ] T42 PMF 量測（Sean Ellis Test + retention curve + NPS）→ docs/pmf-report.md
- [ ] T43 法規 Soft Check（PDPA / 醫療法）→ docs/regulatory-check.md

## Phase 7: Pitch Prep（W10-12）
- [ ] T44 Why Us + 護城河 deep dive → docs/why-us-moat.md
- [ ] T45 5 年財務模型 + Use of Funds → docs/financial-model.md
- [ ] T46 YC 10-slide deck → docs/pitch-deck.md
- [ ] T47 5-min pitch script → docs/pitch-script.md
- [ ] T48 Top 20 Q&A → docs/qa-top20.md
- [ ] T49 Demo backup（影片 + 螢幕錄影）→ web/public/demo-video.mp4

## Phase 8: Demo Day（W12）— 懷特 2026-05-27 校準：到主管可 review 規劃書即完成
- [ ] T50 GitHub Page 全面 polish + interactive components 上線（含對外用詞紀律：禁用「demo」/ 角度標籤 ✅🟡📋 剝離 / Plan-Only 內部術語不渲染）
- [ ] T51 主管 review 規劃書（懷特親自跑，不稱「demo」）
- [~] ~~T52 收主管回饋 → docs/manager-feedback.md~~ **退出範圍**（懷特 2026-05-27 校準）
- [~] ~~T53 P/P/K Gate #2 + 下一階段 6 個月 milestone~~ **退出範圍**（懷特 2026-05-27 校準）

## Post-W12: Retrospective（另開 OpenSpec change）
- [ ] T54 Retrospective：抽通用部分進 Mode E v6.4（不在此 change 範圍）
