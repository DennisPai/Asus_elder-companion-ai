'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import StatusBadge from './StatusBadge';

// 5-year P&L data (NT$ 萬) — from financial-model.md §2.1 中性情境
const financialData = [
  { year: 'Y1', revenue: 324, cogs: 276, grossProfit: 48, opex: 870, ebitda: -822, netIncome: -872 },
  { year: 'Y2', revenue: 2103, cogs: 1306, grossProfit: 797, opex: 1850, ebitda: -1053, netIncome: -1153 },
  { year: 'Y3', revenue: 7947, cogs: 3414, grossProfit: 4533, opex: 3000, ebitda: 1533, netIncome: 1146 },
  { year: 'Y4', revenue: 20194, cogs: 7044, grossProfit: 13150, opex: 4450, ebitda: 8700, netIncome: 6880 },
  { year: 'Y5', revenue: 45771, cogs: 14080, grossProfit: 31691, opex: 7650, ebitda: 24041, netIncome: 19153 },
];

// ARR by stream (NT$ 萬)
const arrData = [
  { year: 'Y1', hardware: 150, saas: 120, app: 54, raas: 0 },
  { year: 'Y2', hardware: 600, saas: 1000, app: 287, raas: 216 },
  { year: 'Y3', hardware: 2250, saas: 3900, app: 897, raas: 900 },
  { year: 'Y4', hardware: 4500, saas: 11200, app: 1794, raas: 2700 },
  { year: 'Y5', hardware: 10500, saas: 27000, app: 2871, raas: 5400 },
];

// Burn / cash position (NT$ 萬)
const burnData = [
  { month: 'M0', cash: 1500 },
  { month: 'M3', cash: 1250 },
  { month: 'M6', cash: 850 },
  { month: 'M9', cash: 600 },
  { month: 'M12', cash: 300 },
  { month: 'M13', cash: 3100 }, // Seed +4000
  { month: 'M18', cash: 1500 },
  { month: 'M24', cash: 300 },
  { month: 'M25', cash: 8800 }, // Series A +8500
  { month: 'M30', cash: 6000 },
  { month: 'M36', cash: 5200 }, // break-even
  { month: 'M48', cash: 12500 },
  { month: 'M60', cash: 28000 },
];

const fundingRounds = [
  { round: 'Pre-Seed', amount: 'NT$1,500 萬', trigger: '主管 review 規劃書通過後', use: 'R&D 17% / 薪資 24% / 硬體採購 12%', badge: 'design' as const },
  { round: 'Seed', amount: 'NT$4,000 萬', trigger: 'Sean Ellis ≥40% + ARR NT$120 萬', use: 'Production 30% / R&D 20% / 薪資 20%', badge: 'pending' as const },
  { round: 'Series A', amount: 'NT$8,500 萬', trigger: 'ODM 上市 + ARR NT$300 萬 + 機構 LOI', use: 'Production 45% / 行銷 18% / R&D 16%', badge: 'pending' as const },
  { round: 'Series B', amount: 'NT$2-5 億', trigger: 'Break-even + TFDA II 類 + ARR NT$5,000 萬', use: 'Production 50% / 行銷 15% / R&D 15%', badge: 'pending' as const },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-200 rounded-lg shadow-lg p-3 text-xs">
        <div className="font-semibold text-slate-900 mb-2">{label}</div>
        {payload.map((entry: any) => (
          <div key={entry.name} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ background: entry.color }} />
            <span className="text-slate-600">{entry.name}:</span>
            <span className="font-medium text-slate-900">NT${entry.value.toLocaleString()} 萬</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function SectionFinancials() {
  return (
    <section id="financials" className="section-full bg-slate-50">
      <div className="container-max">
        <div className="mb-12">
          <div className="text-sm font-medium text-blue-600 mb-2 tracking-wider">S11 / 14 — 財務預測</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            5 年財務預測 + 四輪募資路徑
          </h2>
          <p className="text-slate-600 max-w-2xl">
            中性情境：Year 3 Break-even（Month 30-36），Year 5 Net Income NT$19,153 萬。
            所有數字為規劃推算，待 Phase 6 Pilot 後以實際數據校準。
          </p>
          <StatusBadge type="design" label="規劃假設" />
        </div>

        {/* Revenue breakdown chart */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
          <h3 className="text-base font-semibold text-slate-900 mb-4">5 年收入結構（NT$ 萬）</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={arrData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="year" tick={{ fontSize: 12, fill: '#64748b' }} />
              <YAxis tick={{ fontSize: 11, fill: '#64748b' }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Bar dataKey="saas" name="SaaS 訂閱" stackId="a" fill="#1e40af" radius={[0, 0, 0, 0]} />
              <Bar dataKey="hardware" name="硬體銷售" stackId="a" fill="#2563eb" />
              <Bar dataKey="raas" name="機構 RaaS" stackId="a" fill="#3b82f6" />
              <Bar dataKey="app" name="App 訂閱" stackId="a" fill="#93c5fd" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* EBITDA & Net Income chart */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
          <h3 className="text-base font-semibold text-slate-900 mb-2">EBITDA + 淨利曲線（NT$ 萬）</h3>
          <p className="text-xs text-slate-400 mb-4">Year 3 EBITDA 轉正（中性情境 Month 30-36 break-even）</p>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={financialData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <defs>
                <linearGradient id="gradEbitda" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1e40af" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#1e40af" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gradNet" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ea580c" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#ea580c" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="year" tick={{ fontSize: 12, fill: '#64748b' }} />
              <YAxis tick={{ fontSize: 11, fill: '#64748b' }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Area type="monotone" dataKey="ebitda" name="EBITDA" stroke="#1e40af" fill="url(#gradEbitda)" strokeWidth={2} />
              <Area type="monotone" dataKey="netIncome" name="淨利" stroke="#ea580c" fill="url(#gradNet)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Burn curve */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
          <h3 className="text-base font-semibold text-slate-900 mb-2">現金部位曲線（NT$ 萬）</h3>
          <p className="text-xs text-slate-400 mb-4">含 Pre-Seed NT$1,500 萬 → Seed NT$4,000 萬 → Series A NT$8,500 萬 分批注入</p>
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={burnData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <defs>
                <linearGradient id="gradCash" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#64748b' }} />
              <YAxis tick={{ fontSize: 11, fill: '#64748b' }} tickFormatter={(v) => `NT$${v.toLocaleString()}萬`} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="cash" name="累計現金部位" stroke="#2563eb" fill="url(#gradCash)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* 3-scenario summary */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
            <h3 className="font-semibold text-slate-900">三情境關鍵指標對比</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left px-6 py-3 text-xs font-medium text-slate-500">指標</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-slate-500">保守</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-blue-600 bg-blue-50">中性（主推）</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-slate-500">樂觀</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { label: 'Break-even 月份', con: 'Month 42-48', neu: 'Month 30-36', opt: 'Month 24-30' },
                  { label: 'Y3 總收入', con: 'NT$3,089 萬', neu: 'NT$7,947 萬', opt: 'NT$22,612 萬' },
                  { label: 'Y5 總收入', con: 'NT$20,964 萬', neu: 'NT$45,771 萬', opt: 'NT$119,071 萬' },
                  { label: 'Y5 GP%', con: '70%', neu: '69%', opt: '73%' },
                  { label: 'Y5 EBITDA', con: 'NT$9,364 萬', neu: 'NT$24,041 萬', opt: 'NT$74,071 萬' },
                  { label: 'Y5 SaaS 付費用戶', con: '9,000', neu: '18,000', opt: '50,000' },
                ].map((row) => (
                  <tr key={row.label} className="hover:bg-slate-50">
                    <td className="px-6 py-3 text-sm font-medium text-slate-900">{row.label}</td>
                    <td className="px-6 py-3 text-sm text-slate-600">{row.con}</td>
                    <td className="px-6 py-3 text-sm font-semibold text-blue-700 bg-blue-50">{row.neu}</td>
                    <td className="px-6 py-3 text-sm text-slate-600">{row.opt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Funding rounds */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-4">四輪募資路徑</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {fundingRounds.map((r) => (
              <div key={r.round} className="bg-white rounded-xl border border-slate-200 p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-slate-900">{r.round}</span>
                  <StatusBadge type={r.badge} />
                </div>
                <div className="text-2xl font-bold text-blue-700 mb-2">{r.amount}</div>
                <div className="text-xs text-slate-500 mb-2"><span className="font-medium">觸發條件：</span>{r.trigger}</div>
                <div className="text-xs text-slate-500"><span className="font-medium">主要用途：</span>{r.use}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-4">
            Series A Post-Money 估值區間：NT$2-25 億（P/S floor vs ARR multiple ceiling）；實際募資以投資人估值為準。
          </p>
        </div>
      </div>
    </section>
  );
}
