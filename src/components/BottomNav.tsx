import React from 'react';
import { Home, Compass, User } from 'lucide-react';

export function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-6 pb-8 pt-4 bg-black/80 backdrop-blur-2xl border-t border-white/5">
      <div className="max-w-md mx-auto flex justify-around items-center px-2">
        <button className="flex flex-col items-center gap-1.5 text-white">
          <div className="p-2.5 bg-white/10 rounded-2xl">
            <Home size={24} className="stroke-[2.5px]" />
          </div>
          <span className="text-[11px] font-bold tracking-wide opacity-100">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1.5 text-zinc-500 hover:text-zinc-300 transition-colors">
          <div className="p-2.5">
            <Compass size={24} className="stroke-[2.5px]" />
          </div>
          <span className="text-[11px] font-semibold tracking-wide">Discover</span>
        </button>
        <button className="flex flex-col items-center gap-1.5 text-zinc-500 hover:text-zinc-300 transition-colors">
          <div className="p-2.5">
            <User size={24} className="stroke-[2.5px]" />
          </div>
          <span className="text-[11px] font-semibold tracking-wide">Profile</span>
        </button>
      </div>
    </div>
  );
}
