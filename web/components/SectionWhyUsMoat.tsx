'use client';

const moats = [
  {
    id: 'M1',
    title: '台語對話語料庫',
    strength: '最強護城河',
    desc: '每次互動累積，全球唯一台灣長者台語語料庫，後進需 2-3 年追趕',
    timeline: 'Month 12+ 形成',
    mechanism: '用戶互動 → 台語語料累積 → 識別準確率提升 → 更多用戶採用（飛輪效應）',
  },
  {
    id: 'M2',
    title: '四層切換成本',
    strength: '強護城河',
    desc: '裝置習慣 + 長者個人記憶 + 子女 dashboard + 機構流程，老年市場切換認知成本遠高一般消費者',
    timeline: 'Month 6+ 形成',
    mechanism: '個人化記憶不可遷移 + 長照補貼資格綁定裝置',
  },
  {
    id: 'M3',
    title: '長照補貼名單卡位',
    strength: '中護城河',
    desc: '衛福部審核週期長，先入名單者享有持久優勢',
    timeline: 'Year 2-3 形成',
    mechanism: '補貼名單配額限制 + 審核週期 6-18 個月',
  },
  {
    id: 'M4',
    title: '在地機構通路',
    strength: '中護城河',
    desc: '嘉義 / 屏東 / 台南照顧據點合作關係，電信捆綁 Year 2 談判',
    timeline: 'Year 1-2 形成',
    mechanism: '627 個 A 級個管中心通路 + 電信業者 600 萬用戶生態',
  },
];

export default function SectionWhyUsMoat() {
  return (
    <section id="why-us" className="section-full bg-white">
      <div className="container-max">
        <div className="mb-12">
          <div className="text-sm font-medium text-blue-600 mb-2 tracking-wider">S08 / 14 — 護城河</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            四維護城河：競品 12-24 月無法複製
          </h2>
          <p className="text-slate-600 max-w-2xl">
            各維度相互強化，四維同時追趕估計需要 36-60 個月。
          </p>
        </div>

        {/* Moat cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {moats.map((m) => (
            <div key={m.id} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-blue-200">{m.id}</span>
                  <div>
                    <div className="text-base font-bold text-slate-900">{m.title}</div>
                    <div className="text-xs text-orange-600 font-medium">{m.timeline}</div>
                  </div>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                  {m.strength}
                </span>
              </div>
              <p className="text-sm text-slate-700 mb-3">{m.desc}</p>
              <div className="bg-white rounded-lg border border-slate-200 p-3">
                <div className="text-xs text-slate-500 font-medium mb-1">形成機制</div>
                <div className="text-xs text-slate-600">{m.mechanism}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Moat timeline visual */}
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
          <h3 className="text-base font-semibold text-slate-900 mb-4">護城河時間軸</h3>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-0.5 bg-blue-200" style={{ left: '0' }} />
            <div className="space-y-4 pl-6">
              {[
                { time: 'Month 6+', label: 'M2 四層切換成本開始形成', color: 'bg-blue-500' },
                { time: 'Month 12+', label: 'M1 台語語料庫規模化，語音辨識持續優化', color: 'bg-blue-700' },
                { time: 'Year 1-2', label: 'M4 機構通路合作關係建立', color: 'bg-amber-500' },
                { time: 'Year 2-3', label: 'M3 長照補貼名單進入，法規護城河確立', color: 'bg-green-600' },
              ].map((item) => (
                <div key={item.time} className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${item.color} flex-shrink-0 -ml-7`} />
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-orange-600 w-20 flex-shrink-0">{item.time}</span>
                    <span className="text-sm text-slate-700">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
