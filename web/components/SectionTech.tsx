'use client';

import StatusBadge from './StatusBadge';

const techStack = [
  {
    layer: '雲端層',
    color: 'bg-blue-700',
    textColor: 'text-white',
    items: ['GPT-4o / GPT-4o-mini（主）', 'GCP asia-east1（PDPA 合規）', 'Anthropic Claude（輔）', '開源 Llama / Qwen（Year 2+ 比例提升）'],
  },
  {
    layer: '邊緣層（裝置）',
    color: 'bg-blue-100',
    textColor: 'text-blue-900',
    items: ['Rule-based LLM 守門器（19 條紅線）', 'Porcupine wake word（完全離線）', 'Google STT + Azure TTS', '音頻端側處理（不出境）'],
  },
  {
    layer: '子女 App',
    color: 'bg-slate-100',
    textColor: 'text-slate-800',
    items: ['iOS / Android（React Native 計畫）', '每日 AI 摘要推播', '緊急通知 ≤5 分鐘', '多子女共用帳號'],
  },
  {
    layer: '機構 Dashboard',
    color: 'bg-amber-50',
    textColor: 'text-amber-900',
    items: ['B2B2C 通路（Year 2 啟動）', '多台裝置管理', '機構 SLA 3-5 天維修', '長照補貼整合介面'],
  },
];

const redlines = [
  { type: '絕對紅線（N1-N10）', count: 10, desc: '永不觸碰：醫療診斷 / 投藥建議 / 急救決策 / 心理診斷 / 法律建議 / 投資建議 / 宗教勸誡 / 代理簽署 / 雲端影像 / 商業推銷', badge: 'verified' as const },
  { type: '條件紅線（C1-C6）', count: 6, desc: '需護欄才可執行，每條有 LLM Guardrail + UX 防護 + 責任歸屬設計', badge: 'design' as const },
  { type: '特殊倫理紅線', count: 3, desc: 'Surveillance Creep（監控蔓延）+ Social Replacement（取代真人陪伴）+ 自傷信號 handoff', badge: 'design' as const },
];

export default function SectionTech() {
  return (
    <section id="tech" className="section-full bg-slate-50">
      <div className="container-max">
        <div className="mb-12">
          <div className="text-sm font-medium text-blue-600 mb-2 tracking-wider">S09 / 14 — 技術安全</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            技術架構 + 19 條 LLM 安全紅線
          </h2>
          <p className="text-slate-600 max-w-2xl">
            三路 AI 混合 + 端側隱私保護 + 完整責任歸屬框架。服務 vulnerable population 的安全設計是前提，不是附屬功能。
          </p>
        </div>

        {/* Tech stack */}
        <div className="mb-10">
          <h3 className="text-base font-semibold text-slate-900 mb-4">技術架構四層</h3>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            {techStack.map((layer) => (
              <div key={layer.layer} className={`rounded-xl p-5 ${layer.color}`}>
                <div className={`text-sm font-bold mb-3 ${layer.textColor}`}>{layer.layer}</div>
                <ul className="space-y-1.5">
                  {layer.items.map((item) => (
                    <li key={item} className={`text-xs ${layer.textColor} opacity-90`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Safety redlines */}
        <div className="mb-10">
          <h3 className="text-base font-semibold text-slate-900 mb-4">LLM 安全紅線框架（共 19 條）</h3>
          <div className="space-y-4">
            {redlines.map((r) => (
              <div key={r.type} className="bg-white rounded-xl border border-slate-200 p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-red-100">{r.count}</span>
                    <span className="text-sm font-semibold text-slate-900">{r.type}</span>
                  </div>
                  <StatusBadge type={r.badge} />
                </div>
                <p className="text-xs text-slate-600">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PDPA compliance */}
        <div className="bg-green-50 rounded-xl border border-green-200 p-6">
          <h3 className="text-base font-semibold text-green-800 mb-4">PDPA 2025/12 三方同意機制</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {[
              { role: '長者', type: '音頻同意', detail: '主動表達使用意願，可隨時退出' },
              { role: '子女', type: '書面同意', detail: '對話摘要推播權限' },
              { role: '見證人', type: '第三方見證', detail: '監督機制，保護長者自主權' },
            ].map((p) => (
              <div key={p.role} className="bg-white rounded-lg border border-green-200 p-4 text-center">
                <div className="text-lg font-bold text-green-700 mb-1">{p.role}</div>
                <div className="text-sm font-medium text-green-800 mb-1">{p.type}</div>
                <div className="text-xs text-green-600">{p.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-xs text-green-700 border-t border-green-200 pt-3">
            原始語音 100% 端側不出境 / 對話文字摘要過境需三方同意 / GCP asia-east1（台灣在地資料主權）/ 長者退出權優先
          </div>
        </div>
      </div>
    </section>
  );
}
