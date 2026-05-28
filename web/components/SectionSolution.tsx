'use client';

const whyTablet = [
  { title: '90 天可交付', desc: '商用平板現貨即取，無需等待 ODM 開模量產（6-12 個月），確保 MVP 時程可控' },
  { title: '硬體成本低', desc: 'BOM NT$18,000 / 台（含平板 + 麥克風陣列 + 底座），避免自製硬體先期投入百萬設計費' },
  { title: '老人熟悉度高', desc: '台灣長者對平板螢幕接受度遠高於機器人外型，減少首次使用心理障礙' },
  { title: '可陪伴形態', desc: '配合底座固定在客廳 / 床邊，大螢幕 + 大字體 UI，無需觸控也能語音操作' },
  { title: 'PMF 後升級', desc: 'PMF 確認後再走 ODM 自製路線，BSMI + NCC 認證同步啟動，不把賭注押在未驗證的自製硬體' },
];

const tabletFeatures = [
  { label: '遠距收音', desc: '外接 ReSpeaker 麥克風陣列，3-5 公尺外仍可清晰收到長者聲音，不需湊近說話' },
  { label: '跌倒偵測', desc: '前鏡頭 + 聲音突增分析，偵測長時間靜止與異常聲響，非影像式，不侵犯隱私' },
  { label: '穩固底座', desc: '底座固定不易翻倒，長者不用擔心碰撞；底座角度可調整至最佳視角' },
  { label: '大字高對比 UI', desc: '字體 24px 以上，高對比色，所有按鈕 60px 以上觸控目標，符合長視力退化設計規範' },
  { label: '無觸控語音模式', desc: '長者可直接說話，不必點按螢幕；離線喚醒詞（Porcupine）隨時待命' },
];

const dayInLife = [
  { time: '06:30', event: '主動早安問候', detail: '「阿嬤早，今天天氣不錯，要不要出去散步？」' },
  { time: '07:30', event: '早飯後新聞播報', detail: '依長者設定，播放台語新聞摘要或節氣提醒' },
  { time: '14:00', event: '懷舊話題聊天', detail: '「你以前在鹽水做什麼工作？」— 個人記憶 RAG 維持對話連貫性' },
  { time: '16:00', event: '服藥提醒', detail: '「阿嬤，下午的血壓藥記得吃哦。吃完了嗎？」' },
  { time: '18:00', event: '子女視訊橋接', detail: '子女按 App 發起視訊，平板自動接聽，不需長者操作' },
  { time: '任何時刻', event: '一鍵緊急聯絡', detail: '大按鈕直接通知子女 App，備援聯絡人同步接收' },
  { time: '偵測中', event: '跌倒輔助偵測', detail: '30 分鐘未互動 + 聲音異常 → AI 詢問 → 無回應 → 子女 App 推播 ≤5 分鐘' },
];

const aiBrainLayers = [
  {
    layer: '層 1 — 安全紅線',
    color: 'bg-red-50 border-red-200',
    titleColor: 'text-red-800',
    desc: '規則式快速攔截（端側，不過雲端）',
    items: [
      '不做醫療診斷 / 急救決策 / 投藥提醒',
      '不做投資建議 / 財務決策',
      '自殺 / 傷害風險 → 直接 handoff 真人',
      '19 條紅線規則，毫秒回應，不依賴 LLM 判斷',
    ],
  },
  {
    layer: '層 2 — 對話 AI',
    color: 'bg-blue-50 border-blue-200',
    titleColor: 'text-blue-800',
    desc: 'OpenAI GPT-4o + Anthropic Claude 雙路備援',
    items: [
      '日常對話 / 懷舊話題 / 節氣文化（GPT-4o-mini 低延遲）',
      '複雜情緒處理 / 長段對話（GPT-4o / Claude）',
      '台語語音識別（Google STT 基礎，Year 2 Whisper fine-tune）',
      '雲端離線 fallback：主 API 超時自動切換備援',
    ],
  },
  {
    layer: '層 3 — 個人化記憶',
    color: 'bg-green-50 border-green-200',
    titleColor: 'text-green-800',
    desc: '開源 embedding + pgvector，讓對話有「記得我」的感覺',
    items: [
      '保存 30-90 天家庭脈絡（子女名字 / 孫子生日 / 喜好食物）',
      '個人生活習慣記憶（起床時間 / 常聊話題 / 忌諱字詞）',
      '記憶不出境：pgvector 部署在 GCP asia-east1 台灣節點',
      '長者退出時，記憶完整刪除（PDPA 遺忘權）',
    ],
  },
];

const hardwarePhases = [
  {
    phase: '90 天 MVP',
    hw: '商用平板（iPad / Samsung Tab S9 FE）+ ReSpeaker 麥克風陣列',
    note: 'BOM NT$18,000 / 台，零自製硬體風險，四項認證全免',
  },
  {
    phase: 'Year 1 下半年',
    hw: '台灣 ODM 硬體首批 50 台試產',
    note: 'PMF 確認後啟動，BSMI + NCC 認證路徑',
  },
  {
    phase: 'Year 2-3',
    hw: 'ODM 量產（500-5,000 台 / 月）',
    note: 'ISO 13482 自願認證，電信捆綁通路',
  },
];

export default function SectionSolution() {
  return (
    <section id="solution" className="section-full bg-white">
      <div className="container-max">
        <div className="mb-12">
          <div className="text-sm font-medium text-blue-600 mb-2 tracking-wider">S04 / 14 — 解決方案</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            商用平板形態 + AI Brain 三層架構
          </h2>
          <p className="text-slate-600 max-w-2xl">
            90 天以商用平板先行確認市場需求，PMF 成立後再走 ODM 自製硬體路線。
          </p>
        </div>

        {/* Why tablet section */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">為什麼用平板而不是自製機器人？</h3>
          <div className="grid md:grid-cols-5 gap-4">
            {whyTablet.map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-xl border border-slate-200 p-4">
                <div className="text-sm font-bold text-blue-700 mb-2">{item.title}</div>
                <div className="text-xs text-slate-600">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* This tablet is special */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">這台平板的特別之處</h3>
          <div className="grid md:grid-cols-5 gap-4">
            {tabletFeatures.map((f, i) => (
              <div key={i} className="bg-blue-50 rounded-xl border border-blue-200 p-4">
                <div className="text-sm font-bold text-blue-800 mb-2">{f.label}</div>
                <div className="text-xs text-blue-700">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Day in life vignette */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">長者一天怎麼跟它互動</h3>
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
            <div className="space-y-3">
              {dayInLife.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="text-xs font-bold text-blue-600 w-20 flex-shrink-0 pt-0.5">{item.time}</div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-slate-900">{item.event}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Brain three layers */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">AI Brain 三層分別做什麼</h3>
          <div className="grid md:grid-cols-3 gap-5">
            {aiBrainLayers.map((layer, i) => (
              <div key={i} className={`rounded-xl border p-5 ${layer.color}`}>
                <div className="mb-3">
                  <div className={`text-base font-bold mb-1 ${layer.titleColor}`}>{layer.layer}</div>
                  <div className="text-xs text-slate-500">{layer.desc}</div>
                </div>
                <ul className="space-y-2">
                  {layer.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="w-1 h-1 rounded-full bg-slate-400 flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy */}
        <div className="mb-12 bg-green-50 rounded-xl border border-green-200 p-5">
          <h4 className="text-sm font-semibold text-green-800 mb-3">隱私設計邊界</h4>
          <ul className="grid md:grid-cols-2 gap-2">
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

        {/* Hardware evolution */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-4">硬體演進路徑</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {hardwarePhases.map((p) => (
              <div key={p.phase} className="bg-slate-50 rounded-xl border border-slate-200 p-5">
                <div className="text-sm font-bold text-blue-700 mb-2">{p.phase}</div>
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
