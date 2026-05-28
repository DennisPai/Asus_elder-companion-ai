'use client';

import StatusBadge from './StatusBadge';

const metrics = [
  {
    label: 'LTV（Blended 含硬體毛利）',
    neutral: 'NT$23,820',
    conservative: 'NT$14,700',
    note: '中性情境：5,000 台量產，月流失 5%',
    badge: 'design' as const,
  },
  {
    label: 'CAC（長照補貼後）',
    neutral: 'NT$4,000',
    conservative: 'NT$6,500',
    note: '補貼前 CAC；補貼後降至 NT$2,600-4,000',
    badge: 'design' as const,
  },
  {
    label: 'LTV:CAC',
    neutral: '5.95:1',
    conservative: '2.3:1',
    note: '中性超越 Series A 標準 3:1，Year 1 臨界可接受',
    badge: 'design' as const,
  },
  {
    label: 'Payback 期',
    neutral: '4.0 個月',
    conservative: '6.0 個月',
    note: 'Pro Tier 中性情境',
    badge: 'design' as const,
  },
  {
    label: 'SaaS 毛利率',
    neutral: '77%',
    conservative: '51%',
    note: 'Pro Tier 中性 / 保守（500 台量級）',
    badge: 'design' as const,
  },
  {
    label: 'Break-even',
    neutral: 'Month 30-36',
    conservative: 'Month 42-48',
    note: '中性 = Year 3；保守 = Year 4',
    badge: 'design' as const,
  },
];

const sensitivities = [
  { scenario: '樂觀', bom: 'BOM -10%', churn: '月流失 3%', ltvcac: '8.2:1', payback: '2.8 月', color: 'bg-green-50 border-green-200' },
  { scenario: '中性（主推）', bom: '基準 BOM', churn: '月流失 5%', ltvcac: '5.95:1', payback: '4.0 月', color: 'bg-blue-50 border-blue-200 font-semibold' },
  { scenario: '保守', bom: 'BOM +20%', churn: '月流失 7%', ltvcac: '2.3:1', payback: '6.0 月', color: 'bg-amber-50 border-amber-200' },
  { scenario: '最壞', bom: 'BOM +20%', churn: '月流失 8%+', ltvcac: '1.81:1', payback: '8+ 月', color: 'bg-red-50 border-red-200' },
];

export default function SectionUnitEcon() {
  return (
    <section id="unit-econ" className="section-full bg-slate-50">
      <div className="container-max">
        <div className="mb-12">
          <div className="text-sm font-medium text-blue-600 mb-2 tracking-wider">S07 / 14 — 單位經濟</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Unit Economics — 中性情境，5,000 台量產規模
          </h2>
          <p className="text-slate-600 max-w-2xl">
            BOM + 雲端成本 + CAC 從 ODM 詢價 / 競品定價 / 廣告 CPM 反推；以 24 個月訂閱留存為 LTV 計算基礎。
          </p>
        </div>

        {/* Key metrics grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {metrics.map((m) => (
            <div key={m.label} className="bg-white rounded-xl border border-slate-200 p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="text-xs text-slate-500 leading-tight max-w-[140px]">{m.label}</div>
                <StatusBadge type={m.badge} />
              </div>
              <div className="flex items-end gap-3 mb-1">
                <div className="text-2xl font-bold text-blue-700">{m.neutral}</div>
                <div className="text-sm text-slate-400 pb-1">{m.conservative}</div>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>中性</span>
                <span className="text-slate-300">|</span>
                <span>保守</span>
              </div>
              <div className="text-xs text-slate-500 mt-2 pt-2 border-t border-slate-100">{m.note}</div>
            </div>
          ))}
        </div>

        {/* LTV:CAC visual */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
          <h3 className="text-base font-semibold text-slate-900 mb-4">LTV:CAC 漏斗視覺（中性情境）</h3>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="text-xs text-slate-500 mb-1">CAC（獲客成本）</div>
              <div className="h-12 bg-orange-100 border border-orange-200 rounded-lg flex items-center justify-center">
                <span className="font-bold text-orange-700">NT$4,000</span>
              </div>
            </div>
            <div className="text-2xl text-slate-400">→</div>
            <div className="flex-1">
              <div className="text-xs text-slate-500 mb-1">LTV（生命週期價值）</div>
              <div className="h-24 bg-blue-100 border-2 border-blue-400 rounded-lg flex items-center justify-center">
                <span className="font-bold text-blue-700 text-xl">NT$23,820</span>
              </div>
            </div>
            <div className="text-2xl text-slate-400">=</div>
            <div className="flex-1 text-center">
              <div className="text-xs text-slate-500 mb-1">LTV:CAC</div>
              <div className="text-4xl font-bold text-blue-800">5.95:1</div>
              <div className="text-xs text-green-600 mt-1">超越 Series A 標準 3:1</div>
            </div>
          </div>
        </div>

        {/* Sensitivity table */}
        <div>
          <h3 className="text-base font-semibold text-slate-900 mb-4">四情境敏感度分析</h3>
          <div className="space-y-3">
            {sensitivities.map((s) => (
              <div
                key={s.scenario}
                className={`rounded-xl border p-4 ${s.color}`}
              >
                <div className="grid grid-cols-5 gap-4 items-center">
                  <div className="text-sm font-semibold text-slate-800">{s.scenario}</div>
                  <div className="text-xs text-slate-600"><span className="font-medium">BOM：</span>{s.bom}</div>
                  <div className="text-xs text-slate-600"><span className="font-medium">流失率：</span>{s.churn}</div>
                  <div className="text-sm font-bold text-blue-700">{s.ltvcac}</div>
                  <div className="text-sm text-slate-600">Payback {s.payback}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">
            最壞情境（BOM+20% + 高流失 + 低 Tier Mix）：LTV:CAC 1.81:1，需啟動方向調整或融資補強。
          </p>
        </div>
      </div>
    </section>
  );
}
