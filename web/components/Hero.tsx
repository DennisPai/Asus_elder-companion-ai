'use client';

export default function Hero() {
  const scrollDown = () => {
    const el = document.getElementById('why-now');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-14"
      style={{ background: 'linear-gradient(135deg, #1A2B4C 0%, #1e40af 60%, #1e3a8a 100%)' }}
    >
      <div className="container-max py-20">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-700 text-blue-100 border border-blue-500 tracking-wider">
              90 天 MVP 規劃書 — 主管 review 用途
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            長者互動陪伴機器人<br />
            <span style={{ color: '#F8F5EE' }}>× AI Brain</span>
          </h1>

          {/* Key stat */}
          <div className="mb-8 p-6 rounded-xl border border-blue-400/30 bg-blue-900/40 inline-block">
            <div className="text-7xl font-bold text-white mb-1">149 萬</div>
            <div className="text-blue-200 text-base">台灣獨居與老老照顧長者，面對市場空白</div>
          </div>

          {/* Subtitle */}
          <p className="text-blue-100 text-lg md:text-xl mb-4 max-w-2xl leading-relaxed">
            90 天 MVP 與商業模式規劃書
          </p>
          <p className="text-blue-200 text-base mb-10 max-w-xl">
            給華碩 AI 代理人 / 服務型機器人主管 review — Go / No-Go 決策確認
          </p>

          {/* Meta info */}
          <div className="flex flex-wrap gap-4 text-sm text-blue-300 mb-10">
            <span>規劃主導：Dennis Pai</span>
            <span className="text-blue-500">|</span>
            <a
              href="https://github.com/DennisPai/Asus_elder-companion-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white underline transition-colors"
            >
              github.com/DennisPai/Asus_elder-companion-ai
            </a>
          </div>

          {/* CTA */}
          <button
            onClick={scrollDown}
            className="group flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-all"
            style={{ background: '#ea580c', color: 'white' }}
          >
            <span>查閱完整規劃書</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-y-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
