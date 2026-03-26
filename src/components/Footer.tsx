import React from 'react';

export function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-16 px-6 md:px-12 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="font-extrabold text-[18px] tracking-tight text-white mb-2">STUDAID</div>
          <p className="text-[14px] text-[#71717A]">Curating the academic experience.</p>
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-8 text-[14px] text-[#A1A1AA]">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Support</a>
          <a href="#" className="hover:text-white transition-colors">Careers</a>
        </div>
        
        <div className="text-[13px] text-[#52525B] w-full md:w-auto text-center md:text-right hidden md:block">
          © 2024 STUDAID Editorial. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
