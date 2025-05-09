'use client';

import Image from 'next/image';

const features = [
  {
    img: '/freshers.png',
    title: 'EXCLUSIVELY FOR FRESHERS',
    desc: 'No experienced roles, no internships',
  },
  {
    img: '/consultant.png',
    title: 'FREE CAREER CONSULTATION',
    desc: 'Resume, Interview & Career Help',
  },
  {
    img: '/interview.png',
    title: 'DIRECT COMPANY INTERVIEW',
    desc: 'No third-party delays',
  },
  {
    img: '/validation.png',
    title: '1-YEAR VALIDITY',
    desc: 'Stay updated and apply anytime',
  },
  {
    img: '/network.png',
    title: 'GLOBAL COMPANY NETWORK',
    desc: 'Openings from MNCs & Startups',
  },
];

const WhyChooseSection = () => {
  return (
    <section className="w-full py-16 px-2 bg-gradient-to-b from-[#0a2e6c] to-[#1e3a8a] flex flex-col items-center">
      <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-2">Why Choose CRTD?</h2>
      <p className="text-white text-center mb-10 max-w-2xl">We've designed our platform with freshers in mind, addressing the unique challenges you face.</p>
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
        {features.map((f, i) => (
          <div
            key={i}
            className={
              `bg-white rounded-xl shadow-lg flex flex-col items-center p-0 pb-4 transition-transform transition-shadow duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ` +
              (features.length === 5 && i === 3 ? 'md:col-start-2' : '')
            }
          >
            <div className="w-full h-40 rounded-t-xl overflow-hidden flex items-center justify-center group">
              <Image 
                src={f.img} 
                alt={f.title} 
                width={300} 
                height={160} 
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" 
              />
            </div>
            <span className="text-[#0a2e6c] font-bold text-base text-center mb-1 mt-4 px-4">{f.title}</span>
            <span className="text-gray-700 text-center text-sm px-4">{f.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSection; 