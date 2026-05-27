'use client';

import StatusBadge from './StatusBadge';

const competitors = [
  { name: 'GrandPad', desc: '平板 + 家庭通話', gap: '無主動 AI 對話', region: '美國', badge: 'verified' as const },
  { name: 'ElliQ', desc: 'B2C 家用陪伴', gap: '無中文 / 無台語', region: '以色列', badge: 'verified' as const },
  { name: 'Aibo', desc: '情感型機器人', gap: '無語言對話', region: '日本', badge: 'verified' as const },
  { name: 'Echo / Alexa', desc: '語音助理', gap: '非長者設計、無主動發起', region: '美國', badge: 'verified' as const },
  { name: 'ASUS Zenbo Jr II', desc: '2024 轉型醫院 B2B', gap: '居家場景空出', region: '台灣（公開資料）', badge: 'verified' as const },
];

const painPoints = [
  {
    who: '北漂子女',
    pains: [
      '對父母安危的持續焦慮（LINE 群組無法保障）',
      '無法每日親自陪伴，情感愧疚感累積',
      '現有服務無法提供即時安心通知',
    ],
  },
  {
    who: '獨居長者',
    pains: [
      '日常孤獨感與社交刺激不足',
      '跌倒後等待 4-12 小時無人知曉的風險',
      '認知退化缺乏早期預警機制',
    ],
  },
];

export default function SectionProblem() {
  return (
    <section id="problem" className="section-full bg-slate-50">
      <div className="container-max">
        <div className="mb-12">
          <div className="text-sm font-medium text-blue-600 mb-2 tracking-wider">S03 / 14 — 問題</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            獨居與老老照顧：149 萬人，現有科技無法服務
          </h2>
          <p className="text-slate-600 max-w-2xl">
            結構性照顧缺口，現有解方均有共同短板：被動等待訊號、無台語支援、不理解在地文化。
          </p>
        </div>

        {/* Key stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { value: '23.3%', label: '獨居長者比例', sub: '約 119 萬人（衛福部 2024）', badge: 'verified' as const },
            { value: '12.36%', label: '老老照顧比例', sub: '約 30.4 萬人（衛福部 2024）', badge: 'verified' as const },
            { value: '0', label: '台灣 B2C 居家 AI 陪伴', sub: '本土解方目前市場空白', badge: 'verified' as const },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl border border-slate-200 p-5 text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-1">{s.value}</div>
              <div className="text-sm font-medium text-slate-800 mb-1">{s.label}</div>
              <div className="text-xs text-slate-500 mb-2">{s.sub}</div>
              <StatusBadge type={s.badge} />
            </div>
          ))}
        </div>

        {/* Pain points */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {painPoints.map((group) => (
            <div key={group.who} className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {group.who}的痛點
              </h3>
              <ul className="space-y-3">
                {group.pains.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-1 w-4 h-4 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 block" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Competitor failure matrix */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
            <h3 className="font-semibold text-slate-900">既有解方失敗矩陣</h3>
            <p className="text-xs text-slate-500 mt-1">資料來源：公開資訊，客觀並陳，不作推斷</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">產品</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">定位</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">台灣場景缺口</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">來源</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {competitors.map((c) => (
                  <tr key={c.name} className="hover:bg-slate-50">
                    <td className="px-6 py-3 font-medium text-slate-900 text-sm">{c.name}</td>
                    <td className="px-6 py-3 text-sm text-slate-600">{c.desc}</td>
                    <td className="px-6 py-3 text-sm text-orange-700 font-medium">{c.gap}</td>
                    <td className="px-6 py-3"><StatusBadge type={c.badge} label={c.region} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
