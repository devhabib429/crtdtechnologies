'use client';

import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#0a2e6c] to-[#003366] text-white pt-14 pb-0">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-12 pb-6">
        {/* Logo and description */}
        <div className="flex-1 min-w-[200px] flex flex-col items-start mb-8 md:mb-0">
          <div className="flex items-center mb-4 bg-white rounded shadow px-2 py-2">
            <Image src="/wyreflow.png" alt="CRTD Technologies" width={48} height={48} className="mr-3" />
            <div className="text-black font-semibold text-base leading-tight">
              CRTD Technologies
              <div className="text-xs font-normal text-gray-600">Connecting Freshers</div>
            </div>
          </div>
          <div className="text-white text-base mt-2">Empowering learners with job placement support and beyond.</div>
        </div>
        {/* Quick Links */}
        <div className="flex-1 min-w-[150px]">
          <div className="font-bold mb-3">Quick Links</div>
          <ul className="space-y-2 text-white text-base">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Jobs</a></li>
            <li><a href="#" className="hover:underline">For Employers</a></li>
          </ul>
        </div>
        {/* Social Media */}
        <div className="flex-1 min-w-[150px]">
          <div className="font-bold mb-3">Social Media</div>
          <ul className="space-y-2 text-white text-base">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
          </ul>
        </div>
        {/* Contact */}
        <div className="flex-1 min-w-[150px]">
          <div className="font-bold mb-3">Contact</div>
          <div className="text-white text-base">Email: hello@CRTD.com</div>
        </div>
        {/* Legal Links */}
        <div className="flex-1 min-w-[150px]">
          <div className="font-bold mb-3">Legal Links</div>
          <ul className="space-y-2 text-white text-base">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Cookie Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      {/* Copyright Bar - sits flush at the bottom */}
      <div className="w-full bg-white text-center text-[#0a2e6c] py-2 text-base font-medium border-t">© 2025 CRTD Technologies</div>
    </footer>
  );
};

export default Footer; 