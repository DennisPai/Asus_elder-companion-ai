'use client';

import StatusBadge from './StatusBadge';

const sprints = [
  {
    weeks: 'W1-4',
    phase: 'Phase 1-3 基礎建置',
    deliverables: '問題框架 / 競品分析 / 法規路徑確認',
    gate: null,
    status: 'done',
  },
  {
    weeks: 'W4',
    phase: 'Gate #1',
    deliverables: '4 Hypothesis P/P/K 評估；主軸：Hyp A 4.40/5',
    gate: 'Gate #1',
    status: 'done',
  },
  {
    weeks: 'W5-8',
    phase: 'Phase 4-5 商業模式 + 建構',
    deliverables: 'Unit Econ + Lean Canvas + 9 個 Must-have feature + 技術架構',
    gate: null,
    status: 'done',
  },
  {
    weeks: 'W8',
    phase: 'Gate #2',
    deliverables: 'Business Model 完整度 + Prototype 進度確認',
    gate: 'Gate #2',
    status: 'in-progress',
  },
  {
    weeks: 'W9-11',
    phase: 'Phase 6-7 Pilot + 規劃書',
    deliverables: 'Sprint 4 閉測 5-10 戶 + 主管 review 規劃書',
    gate: null,
    status: 'planned',
  },
  {
    weeks: 'W12',
    phase: 'Gate #3 — 本次主管 review',
    deliverables: '規劃書完整度確認；Go / No-Go',
    gate: 'Gate #3',
    status: 'this-review',
  },
];

const yearMilestones = [
  { year: 'Year 1', items: ['BSMI + NCC 認證取得', '長照 3.0 補貼名單申請', 'ODM 硬體首批 50 台試產', '機構 LOI ≥2 家', 'Series A 觸發（ARR NT$300 萬+）'], badge: 'pending' as const },
  { year: 'Year 2', items: ['ODM 量產 500 台', 'ISO 13482 自願認證', 'B2B2C 機構通路規模化', '電信捆綁 BD 啟動', 'Break-even 接近（中性情境）'], badge: 'pending' as const },
  { year: 'Year 3+', items: ['TFDA II 類認證 + 長照補貼名單', 'ISO 13482 取得', 'B2G 通路 + 保險 PMPM 前置', '台語語料護城河成熟', '台灣市場份額 1.2%+'], badge: 'pending' as const },
];

export default function SectionRoadmap() {
  const statusStyle = (status: string) => {
    switch (status) {
      case 'done': return 'bg-blue-600 border-blue-700';
      case 'in-progress': return 'bg-orange-500 border-orange-600';
      case 'planned': return 'bg-slate-300 border-slate-400';
      case 'this-review': return 'bg-orange-600 border-orange-700';
      default: return 'bg-slate-200 border-slate-300';
    }
  };

  return (
    <section id="roadmap" className="section-full bg-white">
      <div className="container-max">
        <div className="mb-12">
          <div className="text-sm font-medium text-blue-600 mb-2 tracking-wider">S10 / 14 — 路線圖</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            90 天 MVP：4 Sprint + 3 Gate，里程碑清楚
          </h2>
          <p className="text-slate-600 max-w-2xl">
            每個 Gate 有具體 KPI，本次主管 review 為 W12 Gate #3。
          </p>
        </div>

        {/* 12-week Gantt */}
        <div className="mb-12">
          <h3 className="text-base font-semibold text-slate-900 mb-4">12 週執行甘特圖</h3>
          {/* Week ruler */}
          <div className="mb-2 ml-40 grid grid-cols-12 gap-0.5">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="text-center text-xs text-slate-400">W{i + 1}</div>
            ))}
          </div>
          <div className="space-y-2">
            {sprints.map((sprint) => {
              const weekNums = sprint.weeks.split('-').map(w => parseInt(w.replace('W', '')));
              const start = weekNums[0];
              const end = weekNums.length > 1 ? weekNums[1] : start;
              const colStart = start;
              const colSpan = end - start + 1;

              return (
                <div key={sprint.weeks} className="flex items-center">
                  <div className="w-40 flex-shrink-0 text-xs text-slate-600 pr-2 text-right">
                    {sprint.phase.length > 20 ? sprint.phase.slice(0, 20) + '…' : sprint.phase}
                  </div>
                  <div className="flex-1 grid grid-cols-12 gap-0.5">
                    {Array.from({ length: 12 }, (_, i) => {
                      const week = i + 1;
                      const isActive = week >= colStart && week <= end;
                      return (
                        <div
                          key={week}
                          className={`h-8 rounded ${isActive ? statusStyle(sprint.status) : 'bg-slate-100'}`}
                          title={isActive ? sprint.deliverables : ''}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          {/* Legend */}
          <div className="flex flex-wrap gap-4 mt-3">
            {[
              { color: 'bg-blue-600', label: '已完成' },
              { color: 'bg-orange-500', label: '進行中' },
              { color: 'bg-slate-300', label: '計畫中' },
              { color: 'bg-orange-600', label: '本次 review（Gate #3）' },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-1.5 text-xs text-slate-600">
                <div className={`w-3 h-3 rounded ${l.color}`} />
                {l.label}
              </div>
            ))}
          </div>
        </div>

        {/* Sprint details */}
        <div className="mb-12">
          <div className="space-y-3">
            {sprints.map((sprint) => (
              <div
                key={sprint.weeks}
                className={`rounded-xl border p-4 ${
                  sprint.status === 'this-review'
                    ? 'bg-orange-50 border-orange-300'
                    : sprint.status === 'done'
                    ? 'bg-blue-50 border-blue-200'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-xs font-bold text-slate-400 w-12">{sprint.weeks}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-slate-900">{sprint.phase}</span>
                      {sprint.gate && (
                        <StatusBadge
                          type={sprint.status === 'done' ? 'verified' : sprint.status === 'this-review' ? 'design' : 'pending'}
                          label={sprint.gate}
                        />
                      )}
                    </div>
                    <div className="text-xs text-slate-600">{sprint.deliverables}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Year 1-3+ milestones */}
        <div>
          <h3 className="text-base font-semibold text-slate-900 mb-4">Year 1-3 關鍵里程碑</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {yearMilestones.map((ym) => (
              <div key={ym.year} className="bg-slate-50 rounded-xl border border-slate-200 p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-base font-bold text-blue-700">{ym.year}</span>
                  <StatusBadge type={ym.badge} />
                </div>
                <ul className="space-y-2">
                  {ym.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
