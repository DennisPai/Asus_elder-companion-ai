'use client';

const tiers = [
  {
    id: 'starter',
    name: 'Starter',
    monthly: 'NT$799 / 月',
    hardware: 'NT$9,990',
    target: 'Freemium App 入口，在地中產照顧者',
    features: ['基礎中文語音對話', '子女 App 基本通知', '緊急輔助提醒', '30 天免費試用'],
    highlight: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    monthly: 'NT$1,290 / 月',
    hardware: 'NT$15,000',
    target: '主力推廣（北漂子女 + 獨居長者）',
    features: ['台語語音識別（基礎）', '個人記憶 AI', '每日 AI 摘要推播', '多子女帳號', '節日主動話題'],
    highlight: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    monthly: 'NT$2,500+ / 月',
    hardware: 'NT$19,900',
    target: '高端擴張，機構採購',
    features: ['真人客服 SLA ≤2hr', '認知評估 AI（Year 2+）', '機構後台整合', '延長保固', '自訂台語訓練'],
    highlight: false,
  },
];

const businessModels = [
  {
    id: 'A',
    priority: '主軸',
    name: 'B2C 直購 + 訂閱',
    score: '4.40 / 5',
    description: '硬體 NT$15,000 一次購買 + Pro tier NT$1,290/月軟體訂閱。主要付費者是願意為父母掏腰包的北漂子女，不需要長者自己決定購買。硬體掌握裝置生態，訂閱提供穩定月費現金流。',
    revenue: '硬體毛利 + SaaS 月費（主要）',
    customer: '北漂子女 25-45 歲，父母獨居嘉義 / 屏東 / 台南',
    channel: 'momo / 蝦皮 / 銀髮博覽會 / Facebook 親子社群廣告',
    why: '最直接的 PMF 驗證路徑；DTC 控制定價與用戶關係；月費訂閱建立護城河',
    color: 'border-blue-600 bg-blue-50',
    highlight: true,
  },
  {
    id: 'D',
    priority: '入口補充',
    name: 'Freemium App + Premium Upsell',
    score: '4.20 / 5',
    description: '純軟體 App 免費下載，NT$299/月升級解鎖完整功能。面向不確定是否值得投資硬體的家庭，先讓他們用 App 體驗 AI 對話品質，再升購整套硬體。降低首次試用門檻。',
    revenue: 'App 訂閱月費 NT$299；升購硬體帶動 Pro tier',
    customer: '猶豫是否入手的家庭；手機使用習慣好的長者',
    channel: 'App Store / Google Play / KOL 親子 / 銀髮社群',
    why: 'CAC 極低；可大規模引流後再轉換；口碑傳播自然',
    color: 'border-slate-200 bg-slate-50',
    highlight: false,
  },
  {
    id: 'B',
    priority: 'Year 2 對沖',
    name: '長照機構 RaaS + 家庭月費',
    score: '3.35 / 5',
    description: '機構（日照中心 / 住宿型長照機構）付設備月租 NT$3,000/台，家屬只付軟體 NT$799/月。機構以「智慧輔具」申請長照補貼，降低採購壓力。本案不直接面對機構採購，而是透過 BD 夥伴切入 627 個 A 級個管中心。',
    revenue: '機構 RaaS NT$3,000/台/月 + 家屬軟體 NT$799/月',
    customer: '雙連安養 / 弘道 / 聖母等住宿型機構；日照中心',
    channel: '機構 BD 直銷；長照服務評鑑通路；縣市衛生局轉介',
    why: 'B2B 合約穩定；機構背書降低一般消費者疑慮；同時累積台語語料',
    color: 'border-slate-200 bg-slate-50',
    highlight: false,
  },
  {
    id: 'C',
    priority: 'Year 3+ 長期',
    name: '健康險 PMPM（保險合作）',
    score: '2.30 / 5',
    description: '保險公司（國泰 / 富邦 / 南山）為其長照險保戶支付每人每月 NT$600-1,000，保戶免費取得裝置。此路徑需要 TFDA II 類醫療器材認證（24-36 個月審查），以及保險公司內部產品審核週期，預計 Year 3 後才可啟動談判。',
    revenue: '保險公司 PMPM NT$600-1,000/月/位',
    customer: '國泰健康管理 / 富邦人壽 / 南山人壽長照險保戶',
    channel: '直接 B2B2C；保險業者主動推介給保戶',
    why: 'PMPM 模式規模效應強；保險業者有主動觸客誘因；Year 3+ 配合認證時程',
    color: 'border-slate-200 bg-slate-50',
    highlight: false,
  },
];

export default function SectionBusinessModel() {
  return (
    <section id="business-model" className="section-full bg-white">
      <div className="container-max">
        <div className="mb-12">
          <div className="text-sm font-medium text-blue-600 mb-2 tracking-wider">S06 / 14 — 商業模式</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            四種商業模式 + 三層定價
          </h2>
          <p className="text-slate-600 max-w-2xl">
            主要收入來自月費訂閱。長照 3.0 補貼（NT$60K/3 年，2026/07 起）有效降低硬體門檻 60-80%。
          </p>
        </div>

        {/* Business model cards */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">四種商業模式（依優先序排列）</h3>
          <div className="space-y-5">
            {businessModels.map((bm) => (
              <div
                key={bm.id}
                className={`rounded-xl border-2 p-6 ${bm.color}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {bm.highlight && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-blue-600 text-white">
                          主軸
                        </span>
                      )}
                      {!bm.highlight && (
                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-slate-200 text-slate-600">
                          {bm.priority}
                        </span>
                      )}
                    </div>
                    <h4 className={`text-lg font-bold ${bm.highlight ? 'text-blue-900' : 'text-slate-900'}`}>
                      {bm.name}
                    </h4>
                  </div>
                  <span className="text-sm font-bold text-blue-700 flex-shrink-0 ml-4">{bm.score}</span>
                </div>
                <p className="text-sm text-slate-700 mb-4">{bm.description}</p>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="bg-white/70 rounded-lg p-3">
                    <div className="text-xs font-semibold text-slate-500 mb-1">收入結構</div>
                    <div className="text-xs text-slate-700">{bm.revenue}</div>
                  </div>
                  <div className="bg-white/70 rounded-lg p-3">
                    <div className="text-xs font-semibold text-slate-500 mb-1">目標客戶</div>
                    <div className="text-xs text-slate-700">{bm.customer}</div>
                  </div>
                  <div className="bg-white/70 rounded-lg p-3">
                    <div className="text-xs font-semibold text-slate-500 mb-1">通路</div>
                    <div className="text-xs text-slate-700">{bm.channel}</div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-white/50">
                  <div className="text-xs text-slate-500"><span className="font-medium">為何此優先序：</span>{bm.why}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tier pricing cards */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">三層定價方案</h3>
          <div className="grid md:grid-cols-3 gap-6">
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
                <h3 className={`text-xl font-bold mb-2 ${tier.highlight ? 'text-blue-900' : 'text-slate-900'}`}>
                  {tier.name}
                </h3>
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
        </div>

        {/* Subsidy callout */}
        <div className="p-5 rounded-xl bg-green-50 border border-green-200 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-green-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
            補
          </div>
          <div>
            <div className="font-semibold text-green-800 mb-1">長照 3.0 智慧輔具補貼效果</div>
            <div className="text-sm text-green-700">
              NT$60,000 / 3 年（約 NT$1,667/月）補貼 → 硬體費實質降低 60-80%（2026/07 起申請）
            </div>
            <div className="text-xs text-green-600 mt-1">
              CMS 2-6 級長者適用，補貼申請為 Year 1 前半年關鍵 BD 任務
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
