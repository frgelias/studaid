"use client";

import React from 'react';
import Link from 'next/link';
import { Bookmark } from 'lucide-react';

interface PlaceCardProps {
  name: string;
  category: string;
  description: string;
  imageUrl?: string;
  href?: string;
}

export function PlaceCard({ name, category, description, imageUrl, href = "/place" }: PlaceCardProps) {
  const defaultImage = "https://images.unsplash.com/photo-1555529902-5261145633bf?q=80&w=800&auto=format&fit=crop";
  return (
    <Link href={href} className="group flex flex-col gap-3 cursor-pointer h-full outline-none">
      <div className="w-full h-[220px] rounded-2xl overflow-hidden bg-[#141414] relative shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl || defaultImage}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="absolute top-3 right-3 p-2 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-lg text-white transition-colors cursor-pointer"
        >
          <Bookmark size={16} className="fill-current" />
        </div>
      </div>
      <div className="px-1 pt-1.5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-white tracking-tight mb-1">{name}</h3>
        <p className="text-[#A1A1AA] text-[14px] leading-relaxed mb-5 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="bg-[#1A1A1A] text-zinc-300 text-[10px] px-3 py-1.5 rounded-full font-bold uppercase tracking-wider">
            {category}
          </span>
          <span className="text-[12px] font-semibold text-white bg-white/5 group-hover:bg-white/10 border border-white/5 transition-colors px-3 py-1.5 rounded-full">
            View details
          </span>
        </div>
      </div>
    </Link>
  );
}
