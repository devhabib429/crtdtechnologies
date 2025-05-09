'use client';

import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 text-blue-700 mr-3">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/></svg>
      </span>
    ),
    title: 'Curated Opportunities',
    badge: 'Freshers Focused',
    badgeColor: 'bg-blue-100 text-blue-700',
    desc: 'Job opportunities specifically tailored for freshers, no experience required.',
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-green-100 text-green-700 mr-3">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z"/></svg>
      </span>
    ),
    title: 'Complete Support',
    badge: 'Free Guidance',
    badgeColor: 'bg-green-100 text-green-700',
    desc: 'Expert support with resumes, interviews, and career guidance.',
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-pink-100 text-pink-700 mr-3">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      </span>
    ),
    title: 'Community Driven',
    badge: 'Success Together',
    badgeColor: 'bg-pink-100 text-pink-700',
    desc: 'Join a community of freshers supporting each other&apos;s career growth.',
  },
];

const StrugglingSection = () => {
  return (
    <section className="w-full bg-[#f7faff] pt-0 pb-12 px-0">
      {/* Company Logos - full width, white background, no border */}
      <style jsx>{`
@keyframes marquee {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
`}</style>
      <div className="w-full bg-white overflow-hidden h-20 flex items-center mb-8 relative">
        <div
          className="flex items-center gap-8 absolute left-0 top-1/2 -translate-y-1/2"
          style={{
            minWidth: '100%',
            animation: 'marquee 40s linear infinite',
          }}
        >
          <Image src="/tcs.jpg" alt="TCS" width={120} height={40} className="object-contain h-10 w-auto" />
          <Image src="/timesinternet.jpg" alt="Times Internet" width={120} height={40} className="object-contain h-10 w-auto" />
          <Image src="/microsoft.jpg" alt="Microsoft" width={120} height={40} className="object-contain h-10 w-auto" />
          <Image src="/wyreflow.png" alt="Wyreflow" width={120} height={40} className="object-contain h-10 w-auto" />
          <Image src="/adobe.jpg" alt="Adobe" width={120} height={40} className="object-contain h-10 w-auto" />
          <Image src="/tcs.jpg" alt="TCS2" width={120} height={40} className="object-contain h-10 w-auto" />
        </div>
      </div>
      {/* Main Content Card - centered */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center p-6 md:p-10 gap-8">
        {/* Left: Text */}
        <div className="flex-1 min-w-[280px]">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Struggling to Land Your First Job? <span className="text-blue-600">You&apos;re Not Alone</span></h2>
          <p className="text-gray-700 mb-6">Breaking into the professional world can be challenging — countless applications, limited responses, and constant rejections can be disheartening. At CRTD Technologies, we understand the unique obstacles freshers face in their job search.</p>
          <div className="space-y-4 mb-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-start bg-white rounded-xl p-4 shadow transition-transform transition-shadow duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              >
                {f.icon}
                <div>
                  <div className="flex items-center mb-1">
                    <span className="font-semibold text-gray-900 mr-2">{f.title}</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded ${f.badgeColor}`}>{f.badge}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/register" className="inline-flex items-center px-6 py-3 rounded-md text-white font-semibold shadow-md transition text-base" style={{background: 'linear-gradient(90deg,#2196F3 0%,#1976D2 100%)'}}>
            Register Now Start Your Journey
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center">
          <Image src="/struggling.png" alt="Struggling" width={400} height={300} className="rounded-xl object-cover w-full max-w-xs md:max-w-sm" />
        </div>
      </div>
    </section>
  );
};

export default StrugglingSection; 