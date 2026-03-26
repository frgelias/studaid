"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell } from 'lucide-react';

export function Header({ activePath }: { activePath?: string }) {
  const pathname = usePathname();
  const currentPath = activePath || pathname;

  const getNavClass = (path: string) => {
    return currentPath === path 
      ? "text-white font-semibold" 
      : "text-[#A1A1AA] hover:text-white transition-colors";
  };

  return (
    <header className="flex items-center justify-between py-6 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.03] w-full">
      <div className="flex items-center gap-10">
        <Link href="/" className="font-extrabold text-[22px] tracking-tighter text-white">STUDAID</Link>
        <nav className="hidden md:flex gap-8 text-[14px] font-medium">
          <Link href="/" className={getNavClass('/')}>Home</Link>
          <Link href="/discover" className={getNavClass('/discover')}>Discover</Link>
          <Link href="/profile" className={getNavClass('/profile')}>Profile</Link>
        </nav>
      </div>
      <div className="flex items-center gap-6">
        <button className="text-[#A1A1AA] hover:text-white transition-colors">
          <Bell size={20} />
        </button>
        <Link 
          href="/profile"
          className={`w-8 h-8 rounded-full bg-zinc-800 overflow-hidden border transition-colors ${currentPath === '/profile' ? 'border-white' : 'border-white/10 hover:border-white/30'}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100" alt="Profile" className="w-full h-full object-cover" />
        </Link>
      </div>
    </header>
  );
}
