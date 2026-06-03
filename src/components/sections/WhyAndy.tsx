const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-amber">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Humane Removal',
    description: 'Safe for your family and the animals.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-amber">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
    title: 'Exclusion & Repair',
    description: 'Seal entry points and repair damage the right way.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-amber">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: 'Inspection & Assessment',
    description: 'Thorough inspections to find the problem and stop it.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-amber">
        <path d="M11 20A7 7 0 014 13c0-7 7-11 7-11s7 4 7 11a7 7 0 01-7 7z" />
        <path d="M11 20V9" />
      </svg>
    ),
    title: 'Prevention Solutions',
    description: 'Long-term solutions to keep wildlife out for good.',
  },
]

export function WhyAndy() {
  return (
    <section className="bg-forest-dark text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`flex flex-col items-center text-center px-6 py-8 border-b border-white/10 sm:border-b-0 ${i < features.length - 1 ? 'lg:border-r lg:border-white/10' : ''}`}
            >
              <div className="mb-4">{f.icon}</div>
              <p className="text-xs font-bold uppercase tracking-widest text-white mb-2 font-display">{f.title}</p>
              <p className="text-white/70 text-xs leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
