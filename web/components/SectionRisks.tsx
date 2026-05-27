'use client';

import StatusBadge from './StatusBadge';

const risks = [
  {
    id: 'R1',
    title: '長者首 2 週棄用',
    severity: '高',
    likelihood: '高',
    mitigation: 'Kano 模型 Must-have 9 個功能優先（超大字 / 台語 / 暫停控制），Day-30 主動關懷機制',
    pivot: 'UX 大幅簡化 + onboarding 強化 + 台語識別快速迭代',
    badge: 'design' as const,
    severityLevel: 3,
    likelihoodLevel: 3,
  },
  {
    id: 'R2',
    title: 'WTP 低於預期',
    severity: '高',
    likelihood: '中',
    mitigation: 'Mom Test 8 人訪談（W2-3 計畫）+ 長照 3.0 補貼降低硬體門檻',
    pivot: 'Tier 1 NT$799 主力 + 硬體補貼 0 元模式',
    badge: 'design' as const,
    severityLevel: 3,
    likelihoodLevel: 2,
  },
  {
    id: 'R3',
    title: '台語 STT 準確率不足',
    severity: '中',
    likelihood: '高',
    mitigation: 'Google STT 基礎問候 20-30 句保守啟用，Year 2 Whisper fine-tune',
    pivot: '先以普通話主力，台語作差異化補充',
    badge: 'design' as const,
    severityLevel: 2,
    likelihoodLevel: 3,
  },
  {
    id: 'R4',
    title: 'PDPA 三方同意執行難',
    severity: '高',
    likelihood: '中',
    mitigation: '同意書設計 + W4 前律師 DPIA 完成，PDPC 已知悉 AI 陪伴類應用',
    pivot: '功能降階：移除子女摘要推播，僅保留緊急通知',
    badge: 'design' as const,
    severityLevel: 3,
    likelihoodLevel: 2,
  },
  {
    id: 'R5',
    title: 'AI 基本法高風險分類',
    severity: '高',
    likelihood: '低',
    mitigation: 'App 形態 90 天免影響 + Privacy by Design + 台智雲 FFM 備援路徑',
    pivot: '降階為純通訊 + 安全提醒功能，等子法規明朗',
    badge: 'pending' as const,
    severityLevel: 3,
    likelihoodLevel: 1,
  },
  {
    id: 'R6',
    title: '競品加速進入',
    severity: '中',
    likelihood: '中',
    mitigation: 'M1-M4 四維護城河優先建立，台語語料 1,000 用戶後形成壁壘',
    pivot: '加速補貼名單申請，電信捆綁提前 BD',
    badge: 'pending' as const,
    severityLevel: 2,
    likelihoodLevel: 2,
  },
];

const gates = [
  { gate: 'W4 Gate #1', status: '已通過', result: 'Hyp A 4.40/5，主軸確認', badge: 'verified' as const },
  { gate: 'W8 Gate #2', status: '進行中', result: 'Business Model 完整度 + Prototype 進度', badge: 'design' as const },
  { gate: 'W12 Gate #3', status: '本次 review', result: '規劃書完整度確認 + Go / No-Go', badge: 'pending' as const },
];

export default function SectionRisks() {
  const getSeverityColor = (level: number) => {
    if (level === 3) return 'bg-red-100 text-red-800 border-red-200';
    if (level === 2) return 'bg-amber-100 text-amber-800 border-amber-200';
    return 'bg-green-100 text-green-800 border-green-200';
  };

  return (
    <section id="risks" className="section-full bg-white">
      <div className="container-max">
        <div className="mb-12">
          <div className="text-sm font-medium text-blue-600 mb-2 tracking-wider">S12 / 14 — 風險</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            主要風險矩陣 + 緩解措施
          </h2>
          <p className="text-slate-600 max-w-2xl">
            最高優先風險：長者棄用 + WTP 不足，兩者均由 Phase 2-5 驗證。W4 / W8 / W12 三 Gate 問責機制。
          </p>
        </div>

        {/* Risk matrix */}
        <div className="mb-10">
          <div className="space-y-4">
            {risks.map((r) => (
              <div key={r.id} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex flex-wrap items-start gap-4 mb-3">
                  <span className="text-lg font-bold text-blue-200 flex-shrink-0">{r.id}</span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-semibold text-slate-900">{r.title}</span>
                      <span className={`text-xs px-2 py-0.5 rounded border font-medium ${getSeverityColor(r.severityLevel)}`}>
                        嚴重度：{r.severity}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded border font-medium ${getSeverityColor(r.likelihoodLevel)}`}>
                        可能性：{r.likelihood}
                      </span>
                      <StatusBadge type={r.badge} />
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-medium text-slate-500 mb-1">緩解措施</div>
                    <div className="text-sm text-slate-700">{r.mitigation}</div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-500 mb-1">Pivot 路徑</div>
                    <div className="text-sm text-slate-600">{r.pivot}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gate mechanism */}
        <div>
          <h3 className="text-base font-semibold text-slate-900 mb-4">三 Gate 問責機制</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {gates.map((g) => (
              <div key={g.gate} className={`rounded-xl border p-5 ${g.status === '本次 review' ? 'bg-orange-50 border-orange-300' : g.status === '已通過' ? 'bg-blue-50 border-blue-200' : 'bg-slate-50 border-slate-200'}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-900 text-sm">{g.gate}</span>
                  <StatusBadge type={g.badge} label={g.status} />
                </div>
                <div className="text-xs text-slate-600">{g.result}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
