'use client';

import StatusBadge from './StatusBadge';

const trends = [
  {
    num: '01',
    title: '台灣超高齡社會 + 人力 hard ceiling',
    stats: [
      { label: '65+ 人口', value: '467 萬', sub: '2025 年，超高齡社會門檻' },
      { label: '獨居與老老照顧', value: '149 萬', sub: '23.3% + 12.36%（衛福部 2024）' },
      { label: '跌倒延誤', value: '4-12 小時', sub: '獨居長者平均等待救援時間' },
    ],
    badge: 'verified' as const,
  },
  {
    num: '02',
    title: 'LLM 推論成本崩跌 + ROS2 邊緣推理成熟',
    stats: [
      { label: 'GPT-4o-mini 成本降幅', value: '94.5%', sub: '2023 → 2025，小型團隊可負擔' },
      { label: '北漂子女家庭', value: '30-50 萬戶', sub: '主要付費者族群' },
      { label: '競品進入窗口', value: '12-24 月', sub: '在競品有效進入前的先行時機' },
    ],
    badge: 'verified' as const,
  },
  {
    num: '03',
    title: '長照 3.0 + NT$200 億機器人計畫 政策時機',
    stats: [
      { label: '長照 3.0 補貼', value: 'NT$60K', sub: '/ 3 年，2026/07 上路，智慧輔具適用' },
      { label: '台灣機器人推動方案', value: 'NT$200 億', sub: '政策資金，2025 公告' },
      { label: 'CAC 降低幅度', value: '60-80%', sub: '補貼後獲客成本大幅下降' },
    ],
    badge: 'verified' as const,
  },
];

export default function SectionWhyNow() {
  return (
    <section id="why-now" className="section-full bg-white">
      <div className="container-max">
        <div className="mb-12">
          <div className="text-sm font-medium text-blue-600 mb-2 tracking-wider">S02 / 14 — 時機</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            2025-2026：三個市場窗口同時開啟
          </h2>
          <p className="text-slate-600 max-w-2xl">
            三個結構性趨勢相互強化，形成 12-24 個月的入場窗口，之後競品將加速進入。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {trends.map((trend) => (
            <div
              key={trend.num}
              className="rounded-xl border border-slate-200 bg-slate-50 p-6 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl font-bold text-blue-100 select-none">{trend.num}</span>
                <StatusBadge type={trend.badge} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-5 leading-snug">{trend.title}</h3>
              <div className="space-y-4 mt-auto">
                {trend.stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-bold text-blue-700">{s.value}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline visual */}
        <div className="rounded-xl bg-blue-50 border border-blue-100 p-6">
          <div className="text-sm font-medium text-blue-700 mb-4">三趨勢時間軸</div>
          <div className="relative">
            <div className="flex justify-between text-xs text-slate-500 mb-2">
              <span>2024</span>
              <span>2025</span>
              <span>2026</span>
              <span>2027+</span>
            </div>
            <div className="h-2 bg-slate-200 rounded-full relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-blue-300 via-blue-500 to-orange-500 rounded-full" />
            </div>
            <div className="flex justify-between mt-3 text-xs">
              <span className="text-slate-600">LLM 成本崩跌</span>
              <span className="text-blue-700 font-medium">長照 3.0 上路</span>
              <span className="text-orange-600 font-semibold">入場窗口</span>
              <span className="text-slate-400">競品進入</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
