'use client';

import Link from 'next/link';

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-black bg-opacity-80 overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/hero-image.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-4">
        <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight">
          Empowering Freshers.<br />
          Connecting Futures.
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl max-w-xl mb-6">
          Join 12,000+ successful candidates. Register now for exclusive access to job opportunities across 1000+ global companies.
        </p>
        <Link
          href="/jobs"
          className="text-white font-semibold px-8 py-3 rounded-md text-base shadow-md transition border-0"
          style={{background: 'linear-gradient(90deg,#2196F3 0%,#1976D2 100%)'}}
        >
          Explore Jobs
        </Link>
      </div>
    </section>
  );
};

export default Hero; 