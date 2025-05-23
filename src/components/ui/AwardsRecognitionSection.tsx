'use client';
import { useEffect, useRef, useState } from 'react';

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
    title: 'Best Platform for Fresher&apos;s Job Placement',
    desc: 'Honored for high placement success rates and commitment to helping fresh graduates kickstart their careers.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[#0a2e6c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4M8 3v4"/></svg>
    ),
    title: 'Excellence in Candidate Support &amp; Experience',
    desc: 'Acknowledged for creating a user-centric hiring journey that supports students from registration to job offer.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[#0a2e6c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/><path d="M7 17l5-5 5 5"/></svg>
    ),
    title: 'Leader in Early Talent Discovery &amp; Engagement',
    desc: 'Awarded for enabling companies to connect with top student talent from Tier 2 and Tier 3 colleges.',
  },
];

const impact = [
  {
    value: 12000,
    label: 'Candidates placed',
    display: '12,000+',
  },
  {
    value: 1000,
    label: 'Hiring Companies',
    display: '1000+',
  },
  {
    value: 100,
    label: 'Fresher-Specific Openings',
    display: '100%',
  },
];

function useCountUp(to: number, duration = 1200) {
  const [count, setCount] = useState(0);
  const ref = useRef<number>(0);
  useEffect(() => {
    let start = 0;
    const step = () => {
      start += Math.ceil(to / (duration / 16));
      if (start >= to) {
        setCount(to);
        return;
      }
      setCount(start);
      ref.current = window.requestAnimationFrame(step);
    };
    ref.current = window.requestAnimationFrame(step);
    return () => {
      if (ref.current) {
        cancelAnimationFrame(ref.current);
      }
    };
  }, [to, duration]);
  return count;
}

// Separate component for impact cards
const ImpactCard = ({ value, label, display }: { value: number; label: string; display: string }) => {
  const count = useCountUp(value, 1200);
  return (
    <div className="flex-1 min-w-[200px] bg-white rounded-xl shadow p-6 border border-gray-200 flex flex-col items-center" style={{borderLeft: '8px solid #0a2e6c'}}>
      <div className="text-2xl font-bold text-[#0a2e6c] mb-1">
        {display.includes('%')
          ? `${count >= value ? display : count + '%'}`
          : count >= value ? display : count.toLocaleString() + (display.endsWith('+') ? '+' : '')}
      </div>
      <div className="text-gray-700 text-center text-sm font-medium">{label}</div>
    </div>
  );
};

const AwardsRecognitionSection = () => (
  <section className="w-full bg-white py-16 px-2 flex flex-col items-center">
    <div className="max-w-3xl w-full mx-auto flex flex-col items-center">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-8">Awards &amp; Recognition</h2>
      <div className="w-full flex flex-col gap-0">
        {awards.map((a, i) => (
          <div key={i}>
            {i !== 0 && <div className="w-full h-0.5 bg-[#0a2e6c] opacity-30 my-2" />}
            <div className="flex items-start gap-6 w-full py-6">
              <div className="flex-shrink-0">{a.icon}</div>
              <div>
                <div className="font-semibold text-[#0a2e6c] mb-1">{a.title}</div>
                <div className="text-gray-700 text-sm mb-1">{a.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full border-t border-b border-gray-300 my-10"></div>
      <div className="text-center text-xs text-gray-500 mb-1">MAKING A DIFFERENCE</div>
      <div className="text-xl md:text-2xl font-bold text-[#0a2e6c] mb-2">Our Impact So Far</div>
      <div className="text-center text-gray-700 mb-8 max-w-2xl">We&apos;re proud of the difference we&apos;ve made in the lives of freshers and the value we&apos;ve added to businesses.</div>
      <div className="w-full flex flex-col md:flex-row gap-6 justify-center items-center">
        {impact.map((item, idx) => (
          <ImpactCard
            key={idx}
            value={item.value}
            label={item.label}
            display={item.display}
          />
        ))}
      </div>
    </div>
  </section>
);

export default AwardsRecognitionSection; 