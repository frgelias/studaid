import React from 'react';

interface CategoryButtonProps {
  name: string;
  emoji: string;
}

export function CategoryButton({ name, emoji }: CategoryButtonProps) {
  return (
    <button className="flex items-center gap-2.5 bg-white/[0.03] hover:bg-white/[0.08] text-zinc-100 transition-all duration-300 px-6 py-3 rounded-full whitespace-nowrap shadow-sm border border-white/5 hover:border-white/10 hover:-translate-y-0.5">
      <span className="text-lg leading-none">{emoji}</span>
      <span className="font-semibold tracking-wide text-[15px]">{name}</span>
    </button>
  );
}
