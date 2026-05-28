'use client';

import StatusBadge from './StatusBadge';

const confirmationItems = [
  {
    num: '01',
    title: '規劃邏輯完整性',
    desc: '90 天 MVP 落地計畫的假設 / 里程碑 / 風險邊界是否清楚？',
    sub: '重點確認：假設標示是否明確、風險邊界是否合理',
  },
  {
    num: '02',
    title: '市場定位判斷',
    desc: '台灣 B2C 家用 AI 陪伴市場空白的評估是否合理？',
    sub: '重點確認：競品定位是否有主管知曉但本規劃書遺漏的資訊',
  },
  {
    num: '03',
    title: '關鍵風險識別',
    desc: '主管是否有我們遺漏的重大風險或盲點？',
    sub: '重點確認：來自主管視角的重大未知風險',
  },
];

const nextSteps = [
  { time: '通過後第 1 週', action: '用戶訪談 8 人展開（Mom Test 方法論）', note: 'WTP + 長者互動意願' },
  { time: '第 2-3 週', action: '法規諮詢（TFDA 業者輔導窗口）+ PDPA 律師 DPIA', note: '合規框架確立' },
  { time: '第 4 週', action: 'BSMI + NCC + 長照補貼名單三條申請路徑並行啟動', note: '關鍵路徑開始' },
];

const supportNeeds = [
  { label: '主管視角 feedback', desc: '對規劃邏輯 / 假設 / 風險的客觀評估意見（最有價值）' },
  { label: '內部知識補充', desc: '若主管有 Zenbo / 台灣長者接受度等相關研究，補充對規劃有幫助' },
  { label: '關鍵聯絡引介', desc: '如有認識長照機構 / 法規主管機關聯絡人，引介可加速驗證' },
  { label: '後續 update 意願', desc: '90 天試行後 PMF 結果 / 機構 LOI 狀態 update（主管同意才推送）' },
];

export default function SectionAsk() {
  return (
    <section id="ask" className="section-full bg-slate-50">
      <div className="container-max">
        <div className="mb-12">
          <div className="text-sm font-medium text-blue-600 mb-2 tracking-wider">S13 / 14 — 決策請求</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            請主管確認：規劃完整度是否達到繼續推進門檻？
          </h2>
          <p className="text-slate-600 max-w-2xl">
            本次 review 目的：規劃書完整度確認，不是產品推銷，不涉及 OEM / 授權 / 合作投資等商業合作。
          </p>
        </div>

        {/* Three confirmation items */}
        <div className="mb-12">
          <h3 className="text-base font-semibold text-slate-900 mb-4">三項確認請求</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {confirmationItems.map((item) => (
              <div
                key={item.num}
                className="bg-white rounded-xl border-2 border-slate-200 p-6 hover:border-blue-300 transition-colors"
              >
                <div className="text-4xl font-bold text-blue-100 mb-3">{item.num}</div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-700 mb-3">{item.desc}</p>
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-500">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Support needs */}
        <div className="mb-12">
          <h3 className="text-base font-semibold text-slate-900 mb-4">後續支援需求（如主管認為合適）</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {supportNeeds.map((s) => (
              <div key={s.label} className="bg-white rounded-xl border border-slate-200 p-4">
                <div className="text-sm font-semibold text-slate-900 mb-1">{s.label}</div>
                <div className="text-xs text-slate-600">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Next steps if Go */}
        <div className="mb-10">
          <h3 className="text-base font-semibold text-slate-900 mb-4">下一步時程（如 Go）</h3>
          <div className="space-y-3">
            {nextSteps.map((step) => (
              <div key={step.time} className="flex items-start gap-4 bg-blue-50 rounded-xl border border-blue-200 p-4">
                <div className="text-xs font-bold text-blue-600 w-28 flex-shrink-0 pt-0.5">{step.time}</div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-slate-900">{step.action}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{step.note}</div>
                </div>
                <StatusBadge type="pending" />
              </div>
            ))}
          </div>
        </div>

        {/* Closing note */}
        <div className="bg-white rounded-xl border-2 border-blue-200 p-6 text-center">
          <div className="text-base font-semibold text-slate-900 mb-2">任何 output 都比沒有明確 feedback 更有價值</div>
          <div className="text-sm text-slate-600 mt-2">
            主管 feedback 期望：review 後 7 天內。若有需要補充的分析，24-48 小時內提供。
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-400">
            完整文件庫：
            <a
              href="https://github.com/DennisPai/Asus_elder-companion-ai/tree/main/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 underline ml-1"
            >
              github.com/DennisPai/Asus_elder-companion-ai/tree/main/docs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
