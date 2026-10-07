import React from 'react';
import { SawIcon } from './Icons';

interface HeaderProps {
  lang: 'ka' | 'en';
  activeTab: 'Home' | 'Gallery' | 'Commission' | 'Contact';
  setActiveTab: (tab: 'Home' | 'Gallery' | 'Commission' | 'Contact') => void;
  setSelectedCategory: (cat: string) => void;
  toggleLanguage: () => void;
  t: any;
}

export default function Header({
  lang,
  activeTab,
  setActiveTab,
  setSelectedCategory,
  toggleLanguage,
  t
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF5F0]/85 backdrop-blur-md border-b border-[#D7B18E]/40 py-3.5 px-6 shrink-0 shadow-2xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo / Title brand */}
        <div
          onClick={() => {
            setActiveTab('Home');
            setSelectedCategory('All');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 cursor-pointer select-none"
        >
          <img src="/images/l-logo.png" alt="Lignum Logo" className="h-10 w-10 object-contain rounded-md transition-transform duration-300 hover:scale-110" />
          <div>
            <h1 className="font-stardos font-bold text-[#3D2619] text-xl md:text-2xl leading-none uppercase tracking-[0.15em]">
              LIGNUM
            </h1>
          </div>
        </div>

        {/* Nav Tab switches */}
        <nav className="flex items-center gap-4 md:gap-7 text-sm md:text-base font-semibold text-[#3D2619]/80">

          {/* Home Tab */}
          <button
            onClick={() => {
              setActiveTab('Home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`py-1 relative transition-colors hover:text-[#3D2619] cursor-pointer ${activeTab === 'Home' ? 'text-[#3D2619] font-extrabold' : ''
              }`}
          >
            <span>{lang === 'ka' ? 'მთავარი' : 'Home'}</span>
            {activeTab === 'Home' && (
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#3D2619] rounded-full" />
            )}
          </button>

          {/* Gallery Tab */}
          <button
            onClick={() => {
              setActiveTab('Gallery');
              setSelectedCategory('All');
            }}
            className={`py-1 relative transition-colors hover:text-[#3D2619] cursor-pointer ${activeTab === 'Gallery' ? 'text-[#3D2619] font-extrabold' : ''
              }`}
          >
            <span>{lang === 'ka' ? 'გალერეა' : 'Gallery'}</span>
            {activeTab === 'Gallery' && (
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#3D2619] rounded-full" />
            )}
          </button>

          {/* Commission Tab */}
          <button
            onClick={() => setActiveTab('Commission')}
            className={`py-1 relative transition-colors hover:text-[#3D2619] cursor-pointer ${activeTab === 'Commission' ? 'text-[#3D2619] font-extrabold' : ''
              }`}
          >
            <span>{lang === 'ka' ? 'შეკვეთა' : 'Commission'}</span>
            {activeTab === 'Commission' && (
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#3D2619] rounded-full" />
            )}
          </button>

          {/* Contact Tab */}
          <button
            onClick={() => setActiveTab('Contact')}
            className={`py-1 relative transition-colors hover:text-[#3D2619] cursor-pointer ${activeTab === 'Contact' ? 'text-[#3D2619] font-extrabold' : ''
              }`}
          >
            <span>{lang === 'ka' ? 'კონტაქტი' : 'Contact'}</span>
            {activeTab === 'Contact' && (
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#3D2619] rounded-full" />
            )}
          </button>

          {/* Process scroll link */}
          <button
            onClick={() => {
              setActiveTab('Home');
              setTimeout(() => {
                document.getElementById('process-section')?.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            }}
            className="py-1 transition-colors hover:text-[#3D2619] cursor-pointer hidden sm:block"
          >
            <span>{lang === 'ka' ? 'პროცესი' : 'Process'}</span>
          </button>

          {/* FAQ Questions scroll link */}
          <button
            onClick={() => {
              setActiveTab('Home');
              setTimeout(() => {
                document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            }}
            className="py-1 transition-colors hover:text-[#3D2619] cursor-pointer hidden md:block"
          >
            <span>{lang === 'ka' ? 'კითხვები' : 'Questions'}</span>
          </button>
        </nav>

        {/* Right Header Buttons */}
        <div className="flex items-center gap-3">
          {/* Language Switch button */}
          <button
            onClick={toggleLanguage}
            className="h-9 px-3.5 rounded-lg bg-white/70 hover:bg-white text-[#3D2619] border border-[#D7B18E]/40 text-sm font-semibold transition-all uppercase flex items-center gap-1.5 cursor-pointer shadow-3xs"
          >
            <span>{lang === 'ka' ? 'EN' : 'KA'}</span>
          </button>

          {/* Order / Commission main dark brown button */}
          <button
            onClick={() => setActiveTab('Commission')}
            className="h-9.5 px-4.5 rounded-lg bg-[#3D2619] hover:bg-[#2A1910] text-[#FAF5F0] font-bold text-sm uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all cursor-pointer"
          >

            <span>{lang === 'ka' ? 'შეკვეთა' : 'Order'}</span>
          </button>
        </div>

      </div>
    </header>
  );
}
