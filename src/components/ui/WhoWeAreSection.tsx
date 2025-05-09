'use client';

import Image from 'next/image';

const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-[#0a2e6c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 0 0-3-3.87M9 20H4v-2a4 4 0 0 1 3-3.87m6-2.13a4 4 0 1 0-8 0 4 4 0 0 0 8 0zm6 2.13A4 4 0 0 0 17 20m0 0a4 4 0 0 1-3-3.87"/></svg>
    ),
    title: '12,000+',
    subtitle: 'Freshers Placed',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#0a2e6c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/></svg>
    ),
    title: '1,000+',
    subtitle: 'Company Collaborations',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#0a2e6c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
    ),
    title: '100 %',
    subtitle: 'Verified Job Openings',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#0a2e6c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
    ),
    title: 'NO INTERNSHIPS',
    subtitle: 'Only Real Jobs',
  },
];

const WhoWeAreSection = () => {
  return (
    <section className="w-full flex flex-col items-center py-12 px-2 bg-white">
      <div className="max-w-3xl w-full mx-auto flex flex-col items-center">
        <span className="px-6 py-2 bg-[#0a2e6c] text-white rounded-full font-semibold text-lg mb-4">Who we are</span>
        <p className="text-center text-gray-700 mb-8 max-w-2xl">
          CRTD Technologies is a leading Human Resource and Recruitment company focused entirely on Fresher job placements. We collaborate with over 1,000 global companies to provide direct, verified job opportunities to recent graduates. Our mission is simple - to bridge the gap between talented freshers and companies ready to hire.
        </p>
        <div className="w-full flex justify-center mb-8">
          <div className="rounded-2xl overflow-hidden shadow-lg border-4" style={{ borderColor: '#0a2e6c', boxShadow: '0 8px 32px 0 rgba(10,46,108,0.15)' }}>
            <Image src="/whoweare.png" alt="Who We Are" width={500} height={300} className="object-cover w-full h-auto" />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center bg-white rounded-xl shadow p-4 border-2" style={{ borderColor: '#0a2e6c' }}>
              {f.icon}
              <span className="mt-2 text-[#0a2e6c] font-bold text-lg text-center">{f.title}</span>
              <span className="text-gray-700 text-center text-sm font-medium">{f.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection; 