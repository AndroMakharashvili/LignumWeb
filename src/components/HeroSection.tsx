import React from 'react';
import { SawIcon } from './Icons';

interface HeroSectionProps {
  lang: 'ka' | 'en';
  setActiveTab: (tab: 'Home' | 'Gallery' | 'Commission' | 'Contact') => void;
}

export default function HeroSection({ lang, setActiveTab }: HeroSectionProps) {
  return (
    <section id="hero-section" className="relative min-h-[500px] sm:min-h-[580px] md:min-h-[660px] flex items-center justify-center py-12 sm:py-20 px-4 sm:px-6 overflow-hidden text-center border-b border-[#D7B18E]/30 scroll-mt-20">

      {/* Full background banner image with warm wood tone enrichment */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/home-banner.png"
          alt="Lignum Woodshop Workbench"
          className="w-full h-full object-cover select-none pointer-events-none opacity-80 saturate-[1.20]"
        />
        {/* Warm amber-wood tint overlay for rich wooden character */}
        <div className="absolute inset-0 bg-[#C49A70]/20 mix-blend-multiply pointer-events-none" />
        {/* Soft natural gradient fade to background at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF5F0]/20 via-[#FAF5F0]/30 to-[#FAF5F0]" />
      </div>

      {/* Left vertical artistic typography (from screenshot) */}
      <div className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-10 pointer-events-none select-none text-[10px] font-mono tracking-[0.35em] uppercase text-[#3D2619]/35">
        <span className="[writing-mode:vertical-lr] rotate-180 font-bold">SELF-TAUGHT AUTHOR</span>
        <div className="w-[1px] h-20 bg-[#3D2619]/20" />
        <span className="[writing-mode:vertical-lr] rotate-180 font-bold">WOODCRAFT</span>
      </div>

      {/* Bottom-left Makharashvili Grapevine watermark (from screenshot) */}
      <div className="hidden xl:flex absolute left-10 bottom-8 z-10 flex-col items-start opacity-20 pointer-events-none select-none text-[#3D2619]">
        <svg className="w-14 h-14 mb-1" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="7" r="1.5" /><circle cx="9.5" cy="10" r="1.5" /><circle cx="14.5" cy="10" r="1.5" />
          <circle cx="7" cy="13" r="1.5" /><circle cx="12" cy="13" r="1.5" /><circle cx="17" cy="13" r="1.5" />
          <circle cx="9.5" cy="16" r="1.5" /><circle cx="14.5" cy="16" r="1.5" /><circle cx="12" cy="19" r="1.5" />
          <path d="M12 2C12 2 13 4 15 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
        <span className="font-serif text-[11px] font-bold tracking-[0.25em] uppercase">MAKHARASHVILI</span>
      </div>

      {/* Main Center Content (matching screenshot) */}
      <div className="relative z-10 max-w-3xl mx-auto space-y-5 sm:space-y-6 text-center pt-2">

        {/* Big stylized LIGNUM Title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[105px] font-stardos text-[#2B1810] font-bold tracking-[0.10em] sm:tracking-[0.18em] uppercase select-none drop-shadow-2xs leading-none">
          LIGNUM
        </h1>

        {/* Subtitle paragraph */}
        <p className="text-[#1F130B] max-w-xl mx-auto font-sans leading-relaxed text-sm sm:text-base font-medium">
          {lang === 'ka'
            ? 'ვაქცევთ ნედლ ხეს ფუნქციურ და ესთეტიკურ დიზაინად თქვენი სივრცისთვის.'
            : 'We transform wood into functional and aesthetic designs for your space.'}
        </p>

        {/* Action Buttons matching screenshot */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setActiveTab('Gallery')}
            className="bg-[#3D2619] hover:bg-[#2A1910] text-[#FAF5F0] font-bold text-xs uppercase tracking-wider py-3.5 px-7 rounded-lg shadow-md transition-all duration-300 flex items-center gap-2.5 cursor-pointer w-full sm:w-auto justify-center hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{lang === 'ka' ? 'ნამუშევრების ნახვა' : 'View Artworks'}</span>
          </button>

          <button
            onClick={() => setActiveTab('Commission')}
            className="bg-[#EBE3D5] hover:bg-[#E2D8C7] text-[#3D2619] border border-[#D7B18E]/60 font-bold text-xs uppercase tracking-wider py-3.5 px-7 rounded-lg shadow-2xs transition-all duration-300 cursor-pointer w-full sm:w-auto justify-center hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{lang === 'ka' ? 'შეუკვეთე დიზაინი' : 'Commission Design'}</span>
          </button>
        </div>

      </div>
    </section>
  );
}
