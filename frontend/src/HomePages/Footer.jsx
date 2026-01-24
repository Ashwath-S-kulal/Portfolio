import React from 'react';
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-10">
      <div className="bg-[#24242f] border border-gray-800 p-4 shadow-xl flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Copyright Section */}
        <div className="text-[#8c8c8e] text-[10px] uppercase font-bold tracking-widest text-center md:text-left">
          © {currentYear} All Rights Reserved.
          <span className="block md:inline md:ml-2 text-white/50 font-medium normal-case tracking-normal mt-1 md:mt-0">
            Ashwath S Portfolio
          </span>
        </div>

     
        {/* Secondary Navigation/Status */}
        <div className="flex items-center gap-6 text-[#8c8c8e] text-[10px] uppercase font-bold tracking-widest">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></span>
            Available for Hire
          </span>
        </div>
        
      </div>
    </footer>
  );
}