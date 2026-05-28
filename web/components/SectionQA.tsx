'use client';

import { useState } from 'react';

const criticalQA = [
  {
    id: 'Q3',
    question: 'ASUS Zenbo Junior II 在 B2B 醫院市場已經做了，為什麼還要做 B2C？',
    context: '最敏感的問題。需要客觀中立，不推銷合作，不貶抑競品，僅引用公開資料。',
    answer: `市場定位不同，非直接競爭。

Zenbo Junior II 2024 年起轉型為醫院 Healthcare+ 系統節點（Maestro 系統）、2024/01 QAP 服務終止——這是公開資訊。本案定位是 B2C 居家訂閱月費，面向「願意付 NT$1,290/月的北漂子女」，與醫院 B2B 採購場景在客戶、通路、定價、法規路徑上均不同。

居家 B2C 場景是目前未覆蓋的空白：台灣 B2C 居家月費訂閱場景目前無強護城河競品（公開資料確認）。本規劃書不以 ASUS 為合作對象或競爭對象，不涉及 OEM / 授權等商業合作。

主管對 Zenbo 產品線了解更深，歡迎補充我們可能理解不足的地方。`,
    note: '資料來源：ASUS 官方公告 + 公開媒體報導（2024），如有不準確請主管指正。',
  },
  {
    id: 'Q7',
    question: 'LTV:CAC 5.95:1 看起來很漂亮，但 CAC NT$4,000 是假設還是真實數字？',
    context: '主管對「漂亮數字」保持懷疑，尤其擔心 CAC 被低估。',
    answer: `誠實分三層：

1. 三情境分別標示：保守（CAC NT$6,500，LTV:CAC 2.3:1，Year 1 臨界）；中性（長照補貼後 CAC NT$4,000，LTV:CAC 5.95:1，健康）；激進（電信捆綁 CAC NT$2,000，LTV:CAC 13.8:1，優異）。5.95:1 是中性情境，不是預設起點。

2. CAC NT$4,000 的依據：Facebook 親子社群 CPM + 轉換率反推，長照 3.0 補貼降低 60-80%。

3. 最壞情境已計算：BOM+20% + 月流失 8% + CAC NT$6,500 + ARPU-15% 四重最壞 → LTV:CAC 1.81:1（不健康，需調整方向）。`,
    note: '5,000 台量產規模、24 個月訂閱留存基礎；數字透明可追溯。',
  },
  {
    id: 'Q11',
    question: '跌倒偵測非影像式 ≥80% 召回率有沒有把握？',
    context: 'UVP 核心，主管想確認技術指標不是浮誇宣稱。',
    answer: `MVP 定位是「輔助通知」，不是醫療級診斷。

技術路徑：規則層偵測（聲音突增 + 長時間靜止 + 互動中斷 >30 分鐘）+ 3 層確認機制（AI 主動詢問 → 子女 App 通知 → 備援聯絡人）。

為什麼用非影像式：PDPA 生物特徵屬特種個資，加上老人隱私文化接受度，影像式雲端處理不可行。

合規邊界：若對外宣稱具體跌倒偵測「召回率 X%」這類醫療等級數字，會觸發 TFDA II 類醫療器材認證要求（24-36 月審查）。MVP 定位「輔助通知，讓家屬更安心，不做醫療診斷宣稱」——這是合規設計，也是務實期望管理。

3 個月 MVP 期內以 5-10 戶實際試用累積誤報率數據，作為產品迭代依據。`,
    note: '安全紅線：明確區分「輔助通知」與「醫療診斷」，避免誤導長者與家屬。',
  },
  {
    id: 'Q16',
    question: 'AI 基本法子法規未明，怎麼確保 Year 1-2 啟動不違法？',
    context: '主管擔心法規不確定性成為阻礙，或者子法規要求架構大改。',
    answer: `分兩個法規獨立討論：

PDPA 2025/12：路徑清晰，可執行。端側音頻不出境 + 三方同意 + GCP asia-east1 + W4 前律師 DPIA 完成。

AI 基本法 2025/12：子法規未公布是高不確定性，但 3 個月 MVP 採平板 App 形態已規避主要分級風險。草案核心是透明性義務與高風險 AI 分級。若老年陪伴被列「高風險 AI 系統」，備案是切換到台智雲 FFM 或開源 Llama 本地部署。

持續追蹤機制：律師完成 AI 基本法準備度評估；每月追蹤子法規動態；新功能上線前過律師 sign-off。

法規不確定性是已知風險，不是隱藏風險。Privacy by Design 三層設計，子法規出來後局部調整。`,
    note: '律師費用 NT$70-110 萬已含在規劃預算內。',
  },
  {
    id: 'Q19',
    question: '為什麼帶這份規劃書給主管？想要什麼支援？',
    context: '主管需要知道這次 review 的目的，以及期望做什麼決定。',
    answer: `核心 Ask：Go / No-Go 決策支援。

這份規劃書是「90 天 MVP 落地可行性 + 商業模式設計」的完整規劃文件，希望主管評估：技術路徑是否合理？市場判斷是否有重大遺漏？商業模式假設是否可接受？

這不是一個「請 ASUS 投資 / 合作」的提案，而是「請主管用專業視角幫助確認規劃方向」的 review。

主管 review 結束後，希望得到的 output：
- 認為規劃方向可接受 → 計畫啟動
- 有重大假設需調整 → 更新規劃書後再 review
- 方向根本不對 → 說清楚哪裡不對

任何 output 對規劃者來說都比「沒有明確 feedback」更有價值。沒有隱藏議程。`,
    note: '本次 review 不涉及 OEM / 授權 / 合作投資等商業合作討論。',
  },
];

export default function SectionQA() {
  const [openId, setOpenId] = useState<string | null>('Q19');

  return (
    <section id="qa" className="section-full bg-white">
      <div className="container-max">
        <div className="mb-12">
          <div className="text-sm font-medium text-blue-600 mb-2 tracking-wider">S14 / 14 — Q&A</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            主管 Q&A — 5 個關鍵問題
          </h2>
          <p className="text-slate-600 max-w-2xl">
            完整 Top 20 Q&A 請參閱文件庫。以下為主管最可能提問的 5 個關鍵問題，含誠實的 CLEAR 結構回答。
          </p>
        </div>

        {/* Q&A accordion */}
        <div className="space-y-4 mb-12">
          {criticalQA.map((qa) => (
            <div
              key={qa.id}
              className="rounded-xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === qa.id ? null : qa.id)}
                className="w-full flex items-start justify-between p-5 text-left hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-start gap-3 pr-4">
                  <span className="text-xs font-bold text-blue-600 flex-shrink-0 mt-0.5 w-8">{qa.id}</span>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{qa.question}</div>
                    <div className="text-xs text-slate-500 mt-1">{qa.context}</div>
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5 transition-transform ${openId === qa.id ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openId === qa.id && (
                <div className="px-5 pb-5 border-t border-slate-100 bg-slate-50">
                  <div className="pt-4">
                    <pre className="whitespace-pre-wrap text-sm text-slate-700 font-sans leading-relaxed">
                      {qa.answer}
                    </pre>
                    {qa.note && (
                      <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-slate-500 italic">
                        {qa.note}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Docs links */}
        <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
          <h3 className="text-base font-semibold text-blue-900 mb-4">完整文件庫</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { label: 'Top 20 完整 Q&A', file: 'qa-top20.md' },
              { label: '5 年財務模型', file: 'financial-model.md' },
              { label: '單位經濟模型', file: 'unit-econ.md' },
              { label: '競品分析（problem-framing）', file: 'problem-framing.md' },
              { label: '安全紅線框架', file: 'safety-redlines.md' },
              { label: '認證時程地圖', file: 'cert-timeline.md' },
              { label: '護城河 Deep Dive', file: 'why-us-moat.md' },
            ].map((d) => (
              <a
                key={d.file}
                href={`https://github.com/DennisPai/Asus_elder-companion-ai/blob/main/docs/${d.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-blue-700 hover:text-blue-900 hover:bg-blue-100 rounded-lg px-3 py-2 transition-colors"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {d.label}
              </a>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-blue-200 text-sm">
            <a
              href="https://github.com/DennisPai/Asus_elder-companion-ai/tree/main/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium underline"
            >
              github.com/DennisPai/Asus_elder-companion-ai/tree/main/docs
            </a>
            <span className="text-blue-600 ml-2">— 所有規劃文件完整索引</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-slate-200 text-center">
          <div className="text-sm text-slate-500 mb-1">
            長者互動陪伴機器人 × AI Brain — 90 天 MVP 規劃書
          </div>
          <div className="text-xs text-slate-400">
            版本：2026-05-28
          </div>
        </div>
      </div>
    </section>
  );
}
