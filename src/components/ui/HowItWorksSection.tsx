'use client';

const steps = [
  {
    number: '01',
    icon: (
      <svg className="w-7 h-7 text-[#0a2e6c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a4 4 0 0 1 8 0v2"/></svg>
    ),
    title: 'Register',
  },
  {
    number: '02',
    icon: (
      <svg className="w-7 h-7 text-[#0a2e6c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
    ),
    title: 'Registration Fee',
  },
  {
    number: '03',
    icon: (
      <svg className="w-7 h-7 text-[#0a2e6c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/></svg>
    ),
    title: 'Career Support',
  },
  {
    number: '04',
    icon: (
      <svg className="w-7 h-7 text-[#0a2e6c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>
    ),
    title: 'Job Alerts',
  },
];

const HowItWorksSection = () => (
  <section className="w-full py-12 px-2 bg-gradient-to-b from-[#0a2e6c] to-[#003366] flex flex-col items-center">
    <h2 className="text-white text-xl md:text-2xl font-bold text-center mb-8">How It Works</h2>
    <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col items-center border-2 border-white rounded-lg p-8 bg-transparent min-h-[180px] transition-transform duration-200 hover:scale-105">
          <div className="flex items-center mb-8 mt-2 gap-6">
            <span className="text-3xl font-bold italic text-white">{step.number}</span>
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-[#0a2e6c]">{step.icon}</span>
          </div>
          <div className="text-white font-bold text-lg text-center mb-1">{step.title}</div>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorksSection; 