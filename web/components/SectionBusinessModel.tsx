'use client';

import StatusBadge from './StatusBadge';

const tiers = [
  {
    id: 'starter',
    name: 'Starter',
    monthly: 'NT$799 / 月',
    hardware: 'NT$9,990',
    target: 'Freemium App 入口，在地中產照顧者',
    features: ['基礎中文語音對話', '子女 App 基本通知', '緊急輔助提醒', '30 天免費試用'],
    highlight: false,
    badge: 'design' as const,
  },
  {
    id: 'pro',
    name: 'Pro',
    monthly: 'NT$1,290 / 月',
    hardware: 'NT$15,000',
    target: '主力推廣（北漂子女 + 獨居長者）',
    features: ['台語語音識別（基礎）', '個人記憶 AI', '每日 AI 摘要推播', '多子女帳號', '節日主動話題'],
    highlight: true,
    badge: 'design' as const,
  },
  {
    id: 'premium',
    name: 'Premium',
    monthly: 'NT$2,500+ / 月',
    hardware: 'NT$19,900',
    target: '高端擴張，機構採購',
    features: ['真人客服 SLA ≤2hr', '認知評估 AI（Year 2+）', '機構後台整合', '延長保固', '自訂台語訓練'],
    highlight: false,
    badge: 'pending' as const,
  },
];

const hypotheses = [
  {
    id: 'A',
    name: 'Hyp A — B2C DTC',
    score: '4.40/5',
    role: '主軸',
    desc: 'NT$15,000 硬體 + NT$1,290/月 Pro Tier，北漂子女直銷',
    badge: 'verified' as const,
  },
  {
    id: 'D',
    name: 'Hyp D — Freemium App',
    score: '4.20/5',
    role: '入口補充',
    desc: 'NT$299/月 App，低 CAC 引流 → 硬體升購',
    badge: 'verified' as const,
  },
  {
    id: 'B',
    name: 'Hyp B — B2B2C 機構',
    score: '3.35/5',
    role: 'Year 2 對沖',
    desc: 'RaaS NT$3,000/台/月，627 個長照 A 級個管中心通路',
    badge: 'design' as const,
  },
  {
    id: 'C',
    name: 'Hyp C — 保險 PMPM',
    score: '2.30/5',
    role: 'Year 3+ 長期',
    desc: '保險業 PMPM，需 TFDA II 類認證前提（24-36 月）',
    badge: 'pending' as const,
  },
];

export default function SectionBusinessModel() {
  return (
    <section id="business-model" className="section-full bg-white">
      <div className="container-max">
        <div className="mb-12">
          <div className="text-sm font-medium text-blue-600 mb-2 tracking-wider">S06 / 14 — 商業模式</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            三層定價：SaaS 月費 + 硬體一次費
          </h2>
          <p className="text-slate-600 max-w-2xl">
            主要收入來自月費。長照 3.0 補貼（NT$60K/3 年，2026/07 起）有效降低硬體門檻 60-80%。
          </p>
        </div>

        {/* Tier pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-xl border-2 p-6 flex flex-col ${
                tier.highlight
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-slate-200 bg-slate-50'
              }`}
            >
              {tier.highlight && (
                <div className="mb-3">
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-blue-600 text-white">
                    主力方案
                  </span>
                </div>
              )}
              <div className="flex items-center justify-between mb-2">
                <h3 className={`text-xl font-bold ${tier.highlight ? 'text-blue-900' : 'text-slate-900'}`}>
                  {tier.name}
                </h3>
                <StatusBadge type={tier.badge} />
              </div>
              <div className="mb-1">
                <span className={`text-2xl font-bold ${tier.highlight ? 'text-blue-700' : 'text-slate-700'}`}>
                  {tier.monthly}
                </span>
              </div>
              <div className="text-sm text-slate-500 mb-1">硬體（一次）：{tier.hardware}</div>
              <div className="text-xs text-slate-500 mb-4 pb-4 border-b border-slate-200">{tier.target}</div>
              <ul className="space-y-2 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${tier.highlight ? 'bg-blue-600' : 'bg-slate-400'}`} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Subsidy callout */}
        <div className="mb-10 p-5 rounded-xl bg-green-50 border border-green-200 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-green-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
            補
          </div>
          <div>
            <div className="font-semibold text-green-800 mb-1">長照 3.0 智慧輔具補貼效果</div>
            <div className="text-sm text-green-700">
              NT$60,000 / 3 年（約 NT$1,667/月）補貼 → 硬體費實質降低 60-80%（2026/07 起申請）
            </div>
            <div className="text-xs text-green-600 mt-1">
              CMS 2-6 級長者適用，補貼申請為 Year 1 H1 關鍵 BD 任務
            </div>
          </div>
        </div>

        {/* Hypothesis priority */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-4">商業模式假設優先序（W4 Gate 評分）</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {hypotheses.map((h) => (
              <div key={h.id} className="bg-slate-50 rounded-xl border border-slate-200 p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-900 text-sm">{h.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-blue-700">{h.score}</span>
                    <StatusBadge type={h.badge} label={h.role} />
                  </div>
                </div>
                <div className="text-xs text-slate-600">{h.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
