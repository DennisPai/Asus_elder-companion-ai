'use client';

const risks = [
  {
    id: 'R1',
    title: '長者首 2 週棄用',
    severity: '高',
    likelihood: '高',
    mitigation: 'Kano 模型 Must-have 9 個功能優先（超大字 / 台語 / 暫停控制），Day-30 主動關懷機制',
    pivot: 'UX 大幅簡化 + onboarding 強化 + 台語識別快速迭代',
    severityLevel: 3,
    likelihoodLevel: 3,
  },
  {
    id: 'R2',
    title: 'WTP 低於預期',
    severity: '高',
    likelihood: '中',
    mitigation: '用戶訪談 8 人（W2-3 計畫）+ 長照 3.0 補貼降低硬體門檻',
    pivot: 'Tier 1 NT$799 主力 + 硬體補貼 0 元模式',
    severityLevel: 3,
    likelihoodLevel: 2,
  },
  {
    id: 'R3',
    title: '台語 STT 準確率不足',
    severity: '中',
    likelihood: '高',
    mitigation: 'Google STT 基礎問候 20-30 句保守啟用，Year 2 語音模型微調',
    pivot: '先以普通話主力，台語作差異化補充',
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
    severityLevel: 2,
    likelihoodLevel: 2,
  },
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
            最高優先風險：長者棄用 + 子女付費意願不足。3 個月 MVP 期內以 5-10 戶實際試用累積數據，作為續推或調整方向的依據。
          </p>
        </div>

        {/* Risk matrix */}
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
    </section>
  );
}
