export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-6xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-primary">
          長者互動陪伴機器人 × AI Brain
        </h1>
        <p className="text-lg text-slate-600 mt-2">
          90 天 MVP + 商業模式 — 給公司主管的 demo dashboard
        </p>
        <p className="text-sm text-slate-400 mt-1">
          採 PM 視角流程 v0.1 / 不走現有 Mode E
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">Phase 進度</h2>
          <p className="text-slate-500">Phase 0-8 各階段 deliverable 將陸續填入此處。</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">互動模組（待建）</h2>
          <ul className="text-slate-500 list-disc list-inside space-y-1">
            <li>5-concept matrix（題目拆解）</li>
            <li>Persona cards（3 persona）</li>
            <li>Competitor filter（competitive analysis）</li>
            <li>Lean Canvas SVG（hover evidence）</li>
            <li>5-year Financial Model（interactive table）</li>
            <li>Pitch deck viewer + Demo video embed</li>
          </ul>
        </div>
      </section>

      <footer className="mt-16 text-sm text-slate-400">
        Source: <a className="underline" href="#">github.com/DennisPai/elder-companion-ai-mvp</a> · v0.1 scaffold
      </footer>
    </main>
  );
}
