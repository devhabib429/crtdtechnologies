'use client';

const awards = [
  {
    icon: (
      <svg className="w-10 h-10 text-[#0a2e6c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.75L7.5 20.5l1-4.5-3.5-3 4.6-.4L12 8l1.4 4.6 4.6.4-3.5 3 1 4.5z"/><circle cx="12" cy="12" r="10"/></svg>
    ),
    title: 'Recruitment Impact Excellence Award',
    desc: 'Awarded for consistently delivering successful placement outcomes and empowering student careers across India.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[#0a2e6c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/><rect x="4" y="3" width="16" height="14" rx="2"/><path d="M8 21h8"/></svg>
    ),
    title: 'Top Campus Hiring Innovator',
    desc: 'Recognized for introducing next-gen digital solutions that simplify campus hiring and onboarding fresh talent.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[#0a2e6c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
    ),
    title: 'Best Platform for Fresher\'s Job Placement',
    desc: 'Honored for high placement success rates and commitment to helping fresh graduates kickstart their careers.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[#0a2e6c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4M8 3v4"/></svg>
    ),
    title: 'Excellence in Candidate Support & Experience',
    desc: 'Acknowledged for creating a user-centric hiring journey that supports students from registration to job offer.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[#0a2e6c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/><path d="M7 17l5-5 5 5"/></svg>
    ),
    title: 'Leader in Early Talent Discovery & Engagement',
    desc: 'Awarded for enabling companies to connect with top student talent from Tier 2 and Tier 3 colleges.',
  },
];

const impact = [
  {
    value: '12,000+',
    label: 'Candidates placed',
  },
  {
    value: '1000+',
    label: 'Hiring Companies',
  },
  {
    value: '100%',
    label: 'Fresher-Specific Openings',
  },
];

const AwardsRecognitionSection = () => (
  <section className="w-full bg-white py-16 px-2 flex flex-col items-center">
    <div className="max-w-3xl w-full mx-auto flex flex-col items-center">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-8">Awards & Recognition</h2>
      <div className="w-full flex flex-col gap-0">
        {awards.map((a, i) => (
          <>
            {i !== 0 && <div className="w-full h-0.5 bg-[#0a2e6c] opacity-30 my-2" />}
            <div key={i} className="flex items-start gap-6 w-full py-6">
              <div className="flex-shrink-0">{a.icon}</div>
              <div>
                <div className="font-semibold text-[#0a2e6c] mb-1">{a.title}</div>
                <div className="text-gray-700 text-sm mb-1">{a.desc}</div>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="w-full border-t border-b border-gray-300 my-10"></div>
      <div className="text-center text-xs text-gray-500 mb-1">MAKING A DIFFERENCE</div>
      <div className="text-xl md:text-2xl font-bold text-[#0a2e6c] mb-2">Our Impact So Far</div>
      <div className="text-center text-gray-700 mb-8 max-w-2xl">We're proud of the difference we've made in the lives of freshers and the value we've added to businesses.</div>
      <div className="w-full flex flex-col md:flex-row gap-6 justify-center items-center">
        {impact.map((i, idx) => (
          <div key={idx} className="flex-1 min-w-[200px] bg-white rounded-xl shadow p-6 border border-gray-200 flex flex-col items-center" style={{borderLeft: '8px solid #0a2e6c'}}>
            <div className="text-2xl font-bold text-[#0a2e6c] mb-1">{i.value}</div>
            <div className="text-gray-700 text-center text-sm font-medium">{i.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AwardsRecognitionSection; 