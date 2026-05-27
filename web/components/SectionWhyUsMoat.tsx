'use client';

import StatusBadge from './StatusBadge';

const moats = [
  {
    id: 'M1',
    title: '台語對話語料庫',
    strength: '最強',
    desc: '每次互動累積，全球唯一台灣長者台語語料庫，後進需 2-3 年追趕',
    timeline: 'Month 12+ 形成',
    mechanism: '用戶 → 台語語料 → 更好識別 → 更多用戶（飛輪效應）',
    badge: 'design' as const,
    position: 'right-top',
  },
  {
    id: 'M2',
    title: '四層切換成本',
    strength: '強',
    desc: '裝置習慣 + 長者記憶 + 子女 dashboard + 機構流程，老年市場切換認知成本遠高一般用戶',
    timeline: 'Month 6+ 形成',
    mechanism: '個人記憶 RAG 不可遷移 + 長照補貼資格綁定',
    badge: 'design' as const,
    position: 'right-middle',
  },
  {
    id: 'M3',
    title: '長照補貼名單卡位',
    strength: '中',
    desc: '衛福部審核週期長，先入名單者享有持久優勢',
    timeline: 'Year 2-3 形成',
    mechanism: '補貼名單 quota 限制 + 審核週期 6-18 月',
    badge: 'pending' as const,
    position: 'left-top',
  },
  {
    id: 'M4',
    title: '在地機構通路',
    strength: '中',
    desc: '嘉義 / 屏東 / 台南照顧據點合作關係，電信捆綁 Year 2 談判',
    timeline: 'Year 1-2 形成',
    mechanism: '627 個 A 級個管中心 + 電信業者 600 萬用戶生態',
    badge: 'pending' as const,
    position: 'left-middle',
  },
];

const teamItems = [
  { label: 'AI 工程實作', desc: 'Claude Code / OpenClaw 多年 LLM 實作，多套自動化系統已上線', badge: 'verified' as const },
  { label: '台語 / 在地文化', desc: '命運鍛造所占卜工作室服務台語長者諮詢者之實際經驗', badge: 'verified' as const },
  { label: '商業模式設計', desc: '財金學程 + 9 年投資研究 + COO 實務（希聖立人事業有限公司）', badge: 'verified' as const },
  { label: '快速 MVP 迭代', desc: '見招拆招 / 修玄宮等多個從零建成上線系統，90 天交付能力', badge: 'verified' as const },
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
            各維度相互強化，四維同時追趕估計需要 36-60 個月。驗證後護城河，規劃假設待 Pilot 後確認。
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
                <StatusBadge type={m.badge} label={m.strength} />
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
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 mb-10">
          <h3 className="text-base font-semibold text-slate-900 mb-4">護城河時間軸</h3>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-0.5 bg-blue-200" style={{ left: '0' }} />
            <div className="space-y-4 pl-6">
              {[
                { time: 'Month 6+', label: 'M2 四層切換成本開始形成', color: 'bg-blue-500' },
                { time: 'Month 12+', label: 'M1 台語語料庫規模化，ASR fine-tune 啟動', color: 'bg-blue-700' },
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

        {/* Team credentials */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-4">團隊核心能力（客觀條件對映）</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {teamItems.map((t) => (
              <div key={t.label} className="flex items-start gap-3 bg-slate-50 rounded-xl border border-slate-200 p-4">
                <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0 mt-1.5" />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-slate-900">{t.label}</span>
                    <StatusBadge type={t.badge} />
                  </div>
                  <div className="text-xs text-slate-600">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-4">
            主要負責人：Dennis Pai（懷特）— 希聖立人事業有限公司 COO（2026/03 起）、NTNU 數學系（財金 + 科學計算）
          </p>
        </div>
      </div>
    </section>
  );
}
