'use client';

import StatusBadge from './StatusBadge';

export default function SectionMarket() {
  const markets = [
    {
      label: 'TAM',
      title: '全球銀髮經濟',
      value: 'USD 22 兆',
      desc: '全球老齡化 + 照護支出，長期成長趨勢',
      badge: 'verified' as const,
      size: 'large',
    },
    {
      label: 'SAM',
      title: '台灣長照 + AI 輔具',
      value: 'NT$430 億',
      desc: '三向交叉驗算（護理之家費用法 / 照顧補助法 / 消費支出法），SAM 中位 NT$60-70 億美元',
      badge: 'verified' as const,
      size: 'medium',
    },
    {
      label: 'SOM',
      title: '北漂子女 × 長者家庭',
      value: '30-50 萬戶',
      desc: '主要付費者 ICP，LTV NT$12-25K 規劃估算，Phase 6 Pilot 後校準',
      badge: 'design' as const,
      size: 'small',
    },
  ];

  return (
    <section id="market" className="section-full bg-slate-50">
      <div className="container-max">
        <div className="mb-12">
          <div className="text-sm font-medium text-blue-600 mb-2 tracking-wider">S05 / 14 — 市場</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            TAM / SAM / SOM — 台灣 B2C 居家場景空白
          </h2>
          <p className="text-slate-600 max-w-2xl">
            全球銀髮經濟驅動，台灣超高齡社會加速，北漂子女是主要付費者族群。
          </p>
        </div>

        {/* Concentric circles visualization */}
        <div className="flex flex-col items-center mb-12">
          <div className="relative w-full max-w-lg h-80 flex items-center justify-center">
            {/* TAM outer */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-200 bg-blue-50/50 flex items-center justify-center">
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center">
                <div className="text-xs font-medium text-blue-400">TAM</div>
                <div className="text-sm font-bold text-blue-600">USD 22 兆</div>
              </div>
            </div>
            {/* SAM middle */}
            <div className="absolute inset-12 rounded-full border-2 border-blue-300 bg-blue-100/60 flex items-center justify-center">
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-center whitespace-nowrap">
                <div className="text-xs font-medium text-blue-500">SAM</div>
                <div className="text-sm font-bold text-blue-700">NT$430 億</div>
              </div>
            </div>
            {/* SOM inner */}
            <div className="absolute inset-24 rounded-full border-2 border-orange-400 bg-orange-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-xs font-medium text-orange-600">SOM</div>
                <div className="text-sm font-bold text-orange-700">30-50 萬戶</div>
              </div>
            </div>
          </div>
        </div>

        {/* Market detail cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {markets.map((m) => (
            <div key={m.label} className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-blue-600 tracking-widest">{m.label}</span>
                <StatusBadge type={m.badge} />
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-1">{m.value}</div>
              <div className="text-sm font-medium text-slate-700 mb-2">{m.title}</div>
              <div className="text-xs text-slate-500 leading-relaxed">{m.desc}</div>
            </div>
          ))}
        </div>

        {/* Sizing methodology note */}
        <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <div className="text-sm font-medium text-amber-800 mb-1">市場規模計算說明</div>
          <p className="text-xs text-amber-700">
            SAM 採三向交叉驗算法：Top-down（ElliQ 美國 per-capita 對標台灣）= NT$77 億；Bottom-up（35% 可及率 46 萬家庭 × NT$14,400 ARPU）= NT$66.2 億；Analog（ElliQ 類比 0.5% 滲透）= NT$3.4 億 SOM。三向方向一致，中位 NT$60-70 億。
            所有數字為規劃估算，Phase 6 Pilot 後以實際數據校準。
          </p>
        </div>
      </div>
    </section>
  );
}
