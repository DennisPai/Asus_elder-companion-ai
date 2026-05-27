# Phase 0.5: 題目拆解 Framework

> 在 Phase 0 五問之後、Phase 1 Problem Framing 之前。
> 目的：把抽象命題（「長者互動陪伴機器人 × AI Brain」）拆解成可研究、可比對、可組合的 building block。
> 預期工時：W0（≤7 天 wall clock，agent 並行 ≤4 hr 實際運算）

## 為什麼需要 Phase 0.5

懷特原始命題 5 步：
> 先去拆解題目[長者互動陪伴機器人 × AI Brain]
> → "陪伴長者" 需求與痛點是什麼？目前有哪些成功的商業模式？
> → "與長者互動" 需求與痛點是什麼？目前有哪些成功的商業模式？
> → "機器人"可以解決什麼需求和痛點？目前有哪些成功的商業模式？
> → "機器人 + AI Brain"可以解決什麼需求和痛點？目前有哪些成功的商業模式？
> → "陪伴長者"+"與長者互動"+"機器人 + AI Brain"，可以串起來解決怎樣的需求或痛點？可以打造成怎樣的商業模式？

**核心邏輯**：先把命題拆成獨立 concept 各自研究、再 combine 出綜效。避免直接跳到「機器人 + AI 解決長者陪伴」這個既定假設，發現後面才打掉重來。

## 5 個 concept

| # | Concept | 焦點 | 拆解視角 |
|---|---|---|---|
| 1 | **陪伴長者** | 純從「陪伴」需求出發，不限定機器人 | 寵物 / 視訊通話 / 訪視志工 / 共居 / AI 對話 app / 看護 |
| 2 | **與長者互動** | 互動模式 / 多模態 / 認知負擔 | 語音 / 觸控 / 視覺 / 觸感 / 認知遊戲 / 反射訓練 |
| 3 | **機器人** | 純硬體形態 / 移動性 / 物理介面 | 掃地 / 廚房 / 看護 / 工業 / 教育 / 寵物機器人 |
| 4 | **機器人 + AI Brain** | AI 增能的機器人差異化 | LLM-powered robotics / 多模態具身智能 / 端側推理 |
| 5 | **三者 combine** | 綜效 + 全新商模可能性 | 陪伴 ⨯ 互動 ⨯ 機器人 ⨯ AI 的 4-way intersection |

## 7 維度研究（每 concept 跑一遍）

### 維度 1: 需求清單（≥5）
- 來源：訪談 / 問卷 / 學術 paper / 政府統計
- 格式：[需求] - [觸發情境] - [現有解法]

### 維度 2: 痛點清單（≥5 + 嚴重度排序）
- 嚴重度：S0 致命 / S1 重大 / S2 困擾 / S3 微小
- 格式：[痛點] - [影響人數] - [現有解法為什麼不夠]

### 維度 3: 既有成功商模 ≥3 案例
- 含：定價 / 收入結構 / market size / 退場故事（IPO / 併購 / 倒閉）
- 例：PARO（醫療級海豹型機器人 6000 USD / B2B 醫院長照 / 累計 5000+ 部）

### 維度 4: 市場 sizing TAM/SAM
- TAM：全球 / 同類產品總市場
- SAM：能服務的子集（按 geo / 收入 / 通路）
- SOM：90 天 + 12 個月內可拿下的份額
- 必含資料來源（≥3 source / report）

### 維度 5: 競品 SWOT（≥3 競品）
- Strength / Weakness / Opportunity / Threat
- 對比我們的初步定位
- 找未被滿足 gap

### 維度 6: 顧客旅程
- 觸發（trigger event：失能 / 子女北漂 / 配偶過世 / 認知症診斷）
- 評估（資訊來源：醫院 / 社區 / 子女介紹 / 廣告）
- 購買（決策者 / 通路 / 預算來源）
- 使用（onboarding / 日常 / 故障 / 升級）
- 退場（壞掉怎麼處理 / 客訴 / 客戶離世）

### 維度 7: 技術可行性 + 護城河可能性
- 技術可行性：現在 vs 12 個月後 vs 36 個月後（哪些是 mature / 開源可用 / 還需研發）
- 護城河：資料 / 渠道 / 品牌 / 規模 / 法規 / 專利 / 切換成本 — 哪幾項對我們可行

## 派 agent 並行策略

```
Phase 0.5 ──┬── concept-deconstruct prep (assumption-mapping)  [W0 D1]
            ├── concept 1 "陪伴長者" 並行：market-researcher + competitive-analyst  [W0 D2-4]
            ├── concept 2 "與長者互動" 並行：market-researcher + competitive-analyst  [W0 D2-4]
            ├── concept 3 "機器人" 並行：market-researcher + competitive-analyst  [W0 D2-4]
            ├── concept 4 "機器人+AI" 並行：market-researcher + competitive-analyst  [W0 D2-4]
            ├── concept 5 "combine" 整合：assumption-mapping + project-idea-validator  [W0 D5-6]
            └── 最終 review：main agent 整理 phase-0.5-deconstruction.md  [W0 D7]
```

並行運算：concept 1-4 同時跑、共 8 個 sub-agent task。concept 5 依賴 1-4 結果。

## 整合產出格式 (docs/phase-0.5-deconstruction.md)

```markdown
# Phase 0.5: Concept Deconstruction Report

## 0. Executive Summary
（≤200 字、總結 5 concept 最重要發現 + combine 後 3 個最有潛力的商模假設）

## 1. Concept "陪伴長者"
### 1.1 需求清單（5）
### 1.2 痛點清單（5，排序）
### 1.3 既有成功商模（≥3）
### 1.4 TAM/SAM
### 1.5 競品 SWOT（≥3）
### 1.6 顧客旅程
### 1.7 技術可行性 + 護城河

## 2. Concept "與長者互動"
（同上 7 維度）

## 3. Concept "機器人"
（同上 7 維度）

## 4. Concept "機器人 + AI Brain"
（同上 7 維度）

## 5. Concept "三者 combine"
### 5.1 4-way intersection 機會
### 5.2 3 個最強商模假設（含 Lean Canvas 雛形）
### 5.3 為什麼是現在（Why Now）論證
### 5.4 5 個關鍵假設（要靠 Phase 2 Customer Discovery 驗證 / 破壞的）

## 6. 對 Phase 1 Problem Framing 的輸入
- 我們應該往哪個方向 frame problem
- Stakeholder Mapping 預期會看到的 user/buyer 結構
- Ethical Risk 預期會踩到的紅線
```

## Gate 通過條件

- [ ] 5 concept × 7 維度全填完（35 個 cell）
- [ ] ≥3 商模案例 / concept（共 ≥15 案例）
- [ ] TAM/SAM 有量化 + ≥3 source / concept
- [ ] 競品 ≥3 / concept（共 ≥15 競品）
- [ ] Concept 5 給出 ≥3 strongest hypothesis（含 Lean Canvas 雛形）
- [ ] Why Now 論證有 ≥3 趨勢支撐
- [ ] Push CC + Discord 通知懷特 review

## 反 pattern（禁踩坑）

1. **禁略過 4 個獨立 concept、直接跳 combine** — 會落入既定假設、漏 cross-concept 機會
2. **禁 ≥3 案例都來自同一國家** — 限縮對標、漏全球商模 best practice
3. **禁 TAM/SAM 不附 source** — 編造數字 = 整份報告失效
4. **禁 sub-agent 只給 summary 不給 evidence** — Coverage Matrix 必含原始 quote / link
5. **禁 concept 5 略過 hypothesis 列舉** — combine 沒列假設 = Phase 2 訪談沒目標
