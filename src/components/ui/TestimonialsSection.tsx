'use client';

import { useState } from 'react';

const testimonials = [
  {
    text: '“CRTD Technologies helped me land my dream job at TCS right after graduation. Their interview preparation resources were invaluable and helped me a lot !”',
    role: 'Software Developer - TCS',
    name: 'Amit Singh',
  },
  {
    text: '“Reliable Hiring Partner” I hired 30 freshers through CRTD in just two months! Their team handled end-to-end screening, saving us time.',
    role: 'HR Lead - FinTech Firm',
    name: 'Rahul Mehta',
  },
  {
    text: '“As a fresher with no industry experience , I was struggling to get interviews. CRTD not only got me interviews but helped me prepare for them too.”',
    role: 'UX Designer - Adobe',
    name: 'Priya Sharma',
  },
  {
    text: '“The CRTD team was always available for support and guidance. Their process is transparent and efficient.”',
    role: 'Business Analyst - Infosys',
    name: 'Sonal Verma',
  },
  {
    text: '“We hired multiple freshers from CRTD. The quality of candidates and the process was top-notch.”',
    role: 'Talent Acquisition - Wipro',
    name: 'Karan Patel',
  },
  {
    text: '“I got my first job through CRTD. The interview tips and mock sessions were a game changer!”',
    role: 'Frontend Developer - Cognizant',
    name: 'Ritika Das',
  },
];

type ArrowProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { left?: boolean };

const Arrow = ({ left = false, ...props }: ArrowProps) => (
  <button
    {...props}
    className={`rounded-full bg-[#003366] text-white w-12 h-12 flex items-center justify-center text-2xl shadow-lg disabled:opacity-40 transition-transform hover:scale-110`}
    aria-label={left ? 'Previous testimonials' : 'Next testimonials'}
    style={{ zIndex: 2 }}
  >
    {left ? (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
    ) : (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
    )}
  </button>
);

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const visible = testimonials.slice(index, index + 3);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  const prev = () => {
    setDirection('left');
    setTimeout(() => setIndex(i => Math.max(0, i - 1)), 150);
  };
  const next = () => {
    setDirection('right');
    setTimeout(() => setIndex(i => Math.min(testimonials.length - 3, i + 1)), 150);
  };

  return (
    <section className="w-full py-16 px-2 bg-white flex flex-col items-center">
      <div className="text-center text-sm text-gray-700 mb-2">Testimonials</div>
      <div className="text-2xl md:text-3xl font-bold text-[#0a2e6c] text-center mb-1">Success Stories</div>
      <div className="text-xl font-bold text-[#0a2e6c] text-center mb-8">Our Stars Who Shine Bright</div>
      <div className="relative w-full max-w-5xl flex items-center justify-center px-16">
        <Arrow left onClick={prev} disabled={index === 0} style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }} />
        <div
          className="flex gap-6 w-full justify-center transition-transform duration-300"
          style={{
            transform: direction === 'left' ? 'translateX(40px)' : direction === 'right' ? 'translateX(-40px)' : 'translateX(0)',
          }}
          onTransitionEnd={() => setDirection(null)}
        >
          {visible.map((t, i) => (
            <div key={i} className="flex flex-col bg-white rounded-xl shadow-lg border border-gray-200 min-w-[280px] max-w-[340px] p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative" style={{borderLeft: '12px solid #003366'}}>
              <div className="text-gray-800 text-base mb-6">{t.text}</div>
              <div className="text-[#0a2e6c] font-semibold text-sm mb-1">{t.role}</div>
              <div className="text-[#003366] font-bold text-lg">{t.name}</div>
            </div>
          ))}
        </div>
        <Arrow onClick={next} disabled={index === testimonials.length - 3} style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }} />
      </div>
    </section>
  );
};

export default TestimonialsSection; 