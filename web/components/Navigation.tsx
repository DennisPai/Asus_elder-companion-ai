'use client';

import { useState, useEffect } from 'react';

const navItems = [
  { id: 'hero', label: '封面' },
  { id: 'why-now', label: '時機' },
  { id: 'problem', label: '問題' },
  { id: 'solution', label: '解決方案' },
  { id: 'market', label: '市場' },
  { id: 'business-model', label: '商業模式' },
  { id: 'unit-econ', label: '單位經濟' },
  { id: 'why-us', label: '護城河' },
  { id: 'tech', label: '技術安全' },
  { id: 'roadmap', label: '路線圖' },
  { id: 'financials', label: '財務預測' },
  { id: 'risks', label: '風險' },
  { id: 'ask', label: '決策請求' },
  { id: 'qa', label: 'Q&A' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 80;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollY) {
          setActive(item.id);
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setOpen(false);
  };

  return (
    <nav className="nav-fixed shadow-md" role="navigation" aria-label="主選單">
      <div className="container-max px-4">
        <div className="flex items-center justify-between h-14">
          <span className="text-white text-sm font-semibold tracking-wide">ECA-MVP</span>
          {/* Desktop nav */}
          <div className="hidden lg:flex gap-1 overflow-x-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-2 py-1 rounded text-xs font-medium whitespace-nowrap transition-colors ${
                  active === item.id
                    ? 'bg-blue-200 text-blue-900'
                    : 'text-blue-100 hover:text-white hover:bg-blue-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="開關選單"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-white transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-blue-900 border-t border-blue-700 px-4 pb-4">
          <div className="grid grid-cols-2 gap-1 pt-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left px-3 py-2 rounded text-sm text-blue-100 hover:bg-blue-700 hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
