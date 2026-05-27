'use client';

import StatusBadge from './StatusBadge';

const layers = [
  {
    num: 'Layer 3',
    title: '感知層',
    color: 'bg-blue-100 border-blue-200',
    titleColor: 'text-blue-800',
    items: [
      'Google STT + Azure TTS',
      'Porcupine 離線喚醒詞',
      '台語語音識別（基礎）',
    ],
    badge: 'verified' as const,
  },
  {
    num: 'Layer 2',
    title: '安全層',
    color: 'bg-slate-100 border-slate-200',
    titleColor: 'text-slate-800',
    items: [
      '19 條 LLM 紅線 rule-based 篩選（端側）',
      '阻擋醫療診斷 / 投資建議 / 急救決策',
      '3 層緊急確認機制',
    ],
    badge: 'verified' as const,
  },
  {
    num: 'Layer 1',
    title: '智能層',
    color: 'bg-blue-700 border-blue-800',
    titleColor: 'text-white',
    items: [
      'GPT-4o-mini（日常）/ GPT-4o（複雜）',
      '個人記憶 RAG',
      'GCP asia-east1 部署',
    ],
    textColor: 'text-blue-100',
    badge: 'verified' as const,
  },
];

const phases = [
  {
    phase: '90 天 MVP',
    hw: '商用平板（iPad / Samsung Tab S9 FE）+ ReSpeaker 麥克風陣列',
    note: 'BOM NT$18,000 / 台，零自製硬體風險，四項認證全免',
    badge: 'verified' as const,
  },
  {
    phase: 'Year 1 H2',
    hw: '台灣 ODM 硬體首批 50 台試產',
    note: 'PMF 驗證後啟動，BSMI + NCC 認證路徑',
    badge: 'pending' as const,
  },
  {
    phase: 'Year 2-3',
    hw: 'ODM 量產（500-5,000 台 / 月）',
    note: 'ISO 13482 自願認證，電信捆綁通路',
    badge: 'pending' as const,
  },
];

export default function SectionSolution() {
  return (
    <section id="solution" className="section-full bg-white">
      <div className="container-max">
        <div className="mb-12">
          <div className="text-sm font-medium text-blue-600 mb-2 tracking-wider">S04 / 14 — 解決方案</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            商用平板形態 + AI Brain 三層架構，零自製硬體風險
          </h2>
          <p className="text-slate-600 max-w-2xl">
            90 天驗證形態以商用平板先行確認 PMF，等 PMF 成立後再走 ODM 硬體路線。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          {/* Architecture stack */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">AI Brain 三層架構</h3>
            <div className="space-y-3">
              {layers.map((layer) => (
                <div
                  key={layer.num}
                  className={`rounded-xl border p-5 ${layer.color}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-xs font-medium text-slate-500 block">{layer.num}</span>
                      <span className={`text-base font-bold ${layer.titleColor}`}>{layer.title}</span>
                    </div>
                    <StatusBadge type={layer.badge} />
                  </div>
                  <ul className="space-y-1">
                    {layer.items.map((item) => (
                      <li
                        key={item}
                        className={`text-sm ${layer.textColor || 'text-slate-700'}`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Features & Privacy */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">雙層心智設計</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: '陪', label: '主動陪伴', desc: '主動發起對話、節日問候、台語支援' },
                  { icon: '安', label: '緊急安全網', desc: '跌倒輔助通知、長時間靜止偵測' },
                  { icon: '子', label: '子女 App', desc: '每日 AI 摘要推播、緊急通知 ≤5 分鐘' },
                  { icon: '機', label: '機構 Dashboard', desc: 'B2B2C 擴展路徑，Year 2 啟動' },
                ].map((f) => (
                  <div key={f.label} className="bg-slate-50 rounded-lg border border-slate-200 p-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-700 text-white flex items-center justify-center text-sm font-bold mb-2">
                      {f.icon}
                    </div>
                    <div className="text-sm font-semibold text-slate-900 mb-1">{f.label}</div>
                    <div className="text-xs text-slate-500">{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Privacy */}
            <div className="bg-green-50 rounded-xl border border-green-200 p-5">
              <h4 className="text-sm font-semibold text-green-800 mb-3">隱私設計邊界</h4>
              <ul className="space-y-2">
                {[
                  '原始音頻不離裝置（端側處理）',
                  '僅文字摘要上雲（GCP asia-east1）',
                  'PDPA 三方同意（長者 + 子女 + 見證人）',
                  '長者退出權優先，不可被子女覆蓋',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-green-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Phase evolution */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-4">硬體演進路徑</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {phases.map((p) => (
              <div key={p.phase} className="bg-slate-50 rounded-xl border border-slate-200 p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-blue-700">{p.phase}</span>
                  <StatusBadge type={p.badge} />
                </div>
                <div className="text-sm font-medium text-slate-900 mb-2">{p.hw}</div>
                <div className="text-xs text-slate-500">{p.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
