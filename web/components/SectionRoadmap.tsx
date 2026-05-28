'use client';

const mvpPhases = [
  {
    weeks: 'W1-2',
    title: '基礎建置',
    deliverables: 'AI Brain 三層架構部署 + 台語語音辨識基礎整合 + 平板硬體組裝（麥克風陣列 + 底座）',
    status: 'upcoming',
  },
  {
    weeks: 'W3-4',
    title: '核心功能開發',
    deliverables: '主動問候 / 懷舊對話 / 服藥提醒 / 跌倒輔助偵測邏輯完成；子女 App 緊急通知推播可用',
    status: 'upcoming',
  },
  {
    weeks: 'W5-6',
    title: '隱私與安全',
    deliverables: 'PDPA 三方同意流程 + 安全紅線 19 條端側過濾完成；律師 DPIA 評估完成',
    status: 'upcoming',
  },
  {
    weeks: 'W7-8',
    title: '內部整合測試',
    deliverables: '完整功能內測 + 緊急事件演習 ≥3 次（記錄誤報率）；子女 App 每日摘要推播可用',
    status: 'upcoming',
  },
  {
    weeks: 'W9-10',
    title: '5-10 戶家庭試用',
    deliverables: '實際家庭環境部署；每日互動次數 / 棄用率 / 主動問候完成率追蹤；WTP 現場訪談',
    status: 'upcoming',
  },
  {
    weeks: 'W11-12',
    title: 'MVP 結案 + 數據分析',
    deliverables: 'Sean Ellis 問卷（目標 ≥40%）；LTV:CAC 第一批真實數據；Go / Pivot / Stop 決策',
    status: 'upcoming',
  },
];

const mvpDeliverables = [
  '平板硬體 + 外接麥克風陣列 + 底座固定，完整可運作裝置',
  'AI Brain 三層：安全紅線過濾 + GPT-4o 日常對話 + 個人化記憶（30 天脈絡）',
  '台語語音辨識基礎版（20-30 個常用問候語句）',
  '跌倒輔助偵測：聲音突增 + 長時靜止 + 互動中斷三層確認，非影像式',
  '子女 App：緊急通知 ≤5 分鐘 + 每日 AI 互動摘要推播',
  '5-10 戶家庭實際試用，累計 ≥30 天真實互動數據',
  '現場可示範：長者語音對話 → AI 回應 → 子女 App 通知完整流程',
  'Sean Ellis PMF 問卷 + LTV:CAC 第一批真實基準數據',
];

const yearMilestones = [
  { year: 'Year 1', items: ['BSMI + NCC 認證取得', '長照 3.0 補貼名單申請', 'ODM 硬體首批 50 台試產', '機構 LOI ≥2 家', 'ARR NT$300 萬+'] },
  { year: 'Year 2', items: ['ODM 量產 500 台', 'ISO 13482 自願認證', 'B2B2C 機構通路規模化', '電信捆綁 BD 啟動', '接近損益平衡（中性情境）'] },
  { year: 'Year 3+', items: ['TFDA II 類認證 + 長照補貼名單', 'ISO 13482 取得', 'B2G 通路 + 保險月費前置', '台語語料護城河成熟', '台灣市場份額 1.2%+'] },
];

export default function SectionRoadmap() {
  return (
    <section id="roadmap" className="section-full bg-white">
      <div className="container-max">
        <div className="mb-12">
          <div className="text-sm font-medium text-blue-600 mb-2 tracking-wider">S10 / 14 — 路線圖</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            90 天 MVP 落地計畫
          </h2>
          <p className="text-slate-600 max-w-2xl">
            規劃通過後啟動，W1-W12 為實際 MVP 建構與家庭試用週期。
            12 週結束時交付可現場示範的完整系統 + 真實用戶數據。
          </p>
        </div>

        {/* MVP deliverables - what you will see at W12 */}
        <div className="mb-12 bg-blue-50 rounded-xl border border-blue-200 p-6">
          <h3 className="text-base font-semibold text-blue-900 mb-4">W12 結束時你會看到</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {mvpDeliverables.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded border-2 border-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-blue-900">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 12-week timeline */}
        <div className="mb-12">
          <h3 className="text-base font-semibold text-slate-900 mb-4">12 週執行時程</h3>
          <div className="space-y-3">
            {mvpPhases.map((phase) => (
              <div
                key={phase.weeks}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-xs font-bold text-blue-600 w-14 pt-0.5">{phase.weeks}</div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-slate-900 mb-1">{phase.title}</div>
                    <div className="text-xs text-slate-600">{phase.deliverables}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Year 1-3+ milestones */}
        <div>
          <h3 className="text-base font-semibold text-slate-900 mb-4">MVP 成立後 — Year 1-3 關鍵里程碑</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {yearMilestones.map((ym) => (
              <div key={ym.year} className="bg-slate-50 rounded-xl border border-slate-200 p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-base font-bold text-blue-700">{ym.year}</span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                    待執行
                  </span>
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
