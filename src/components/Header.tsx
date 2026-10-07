import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileNav = (action: () => void) => {
    setMobileMenuOpen(false);
    action();
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF5F0]/90 backdrop-blur-md border-b border-[#D7B18E]/40 py-3 px-4 sm:px-6 shrink-0 shadow-2xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo / Title brand */}
        <div
          onClick={() => {
            setMobileMenuOpen(false);
            setActiveTab('Home');
            setSelectedCategory('All');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer select-none"
        >
          <img src="/images/l-logo.png" alt="Lignum Logo" className="h-9 w-9 sm:h-10 sm:w-10 object-contain rounded-md transition-transform duration-300 hover:scale-110" />
          <div>
            <h1 className="font-stardos font-bold text-[#3D2619] text-lg sm:text-xl md:text-2xl leading-none uppercase tracking-[0.15em]">
              LIGNUM
            </h1>
          </div>
        </div>

        {/* Desktop Nav Tab switches */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-7 text-sm lg:text-base font-semibold text-[#3D2619]/80">

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
            className="py-1 transition-colors hover:text-[#3D2619] cursor-pointer hidden lg:block"
          >
            <span>{lang === 'ka' ? 'კითხვები' : 'Questions'}</span>
          </button>
        </nav>

        {/* Right Header Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switch button */}
          <button
            onClick={toggleLanguage}
            className="h-8.5 sm:h-9 px-2.5 sm:px-3.5 rounded-lg bg-white/70 hover:bg-white text-[#3D2619] border border-[#D7B18E]/40 text-xs sm:text-sm font-semibold transition-all uppercase flex items-center gap-1.5 cursor-pointer shadow-3xs"
          >
            <span>{lang === 'ka' ? 'EN' : 'KA'}</span>
          </button>

          {/* Order / Commission main dark brown button on desktop */}
          <button
            onClick={() => setActiveTab('Commission')}
            className="hidden sm:flex h-9.5 px-4 rounded-lg bg-[#3D2619] hover:bg-[#2A1910] text-[#FAF5F0] font-bold text-xs sm:text-sm uppercase tracking-wider items-center gap-2 shadow-sm transition-all cursor-pointer"
          >
            <span>{lang === 'ka' ? 'შეკვეთა' : 'Order'}</span>
          </button>

          {/* Mobile Hamburger Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden h-9 w-9 rounded-lg bg-white/70 hover:bg-white text-[#3D2619] border border-[#D7B18E]/40 flex items-center justify-center cursor-pointer shadow-3xs"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-3 pb-4 px-2 border-t border-[#D7B18E]/30 mt-3 animate-fadeIn space-y-1.5 font-sans bg-[#FAF5F0]">
          <button
            onClick={() => handleMobileNav(() => {
              setActiveTab('Home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            })}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-bold flex items-center justify-between ${
              activeTab === 'Home' ? 'bg-[#3D2619] text-[#FAF5F0]' : 'text-[#3D2619] hover:bg-[#F6F0E8]'
            }`}
          >
            <span>{lang === 'ka' ? 'მთავარი' : 'Home'}</span>
          </button>

          <button
            onClick={() => handleMobileNav(() => {
              setActiveTab('Gallery');
              setSelectedCategory('All');
            })}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-bold flex items-center justify-between ${
              activeTab === 'Gallery' ? 'bg-[#3D2619] text-[#FAF5F0]' : 'text-[#3D2619] hover:bg-[#F6F0E8]'
            }`}
          >
            <span>{lang === 'ka' ? 'გალერეა' : 'Gallery'}</span>
          </button>

          <button
            onClick={() => handleMobileNav(() => setActiveTab('Commission'))}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-bold flex items-center justify-between ${
              activeTab === 'Commission' ? 'bg-[#3D2619] text-[#FAF5F0]' : 'text-[#3D2619] hover:bg-[#F6F0E8]'
            }`}
          >
            <span>{lang === 'ka' ? 'შეკვეთა' : 'Commission'}</span>
          </button>

          <button
            onClick={() => handleMobileNav(() => setActiveTab('Contact'))}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-bold flex items-center justify-between ${
              activeTab === 'Contact' ? 'bg-[#3D2619] text-[#FAF5F0]' : 'text-[#3D2619] hover:bg-[#F6F0E8]'
            }`}
          >
            <span>{lang === 'ka' ? 'კონტაქტი' : 'Contact'}</span>
          </button>

          <button
            onClick={() => handleMobileNav(() => {
              setActiveTab('Home');
              setTimeout(() => {
                document.getElementById('process-section')?.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            })}
            className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-bold text-[#3D2619] hover:bg-[#F6F0E8]"
          >
            <span>{lang === 'ka' ? 'პროცესი' : 'Process'}</span>
          </button>

          <button
            onClick={() => handleMobileNav(() => {
              setActiveTab('Home');
              setTimeout(() => {
                document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            })}
            className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-bold text-[#3D2619] hover:bg-[#F6F0E8]"
          >
            <span>{lang === 'ka' ? 'კითხვები' : 'Questions'}</span>
          </button>

          <div className="pt-2 px-2">
            <button
              onClick={() => handleMobileNav(() => setActiveTab('Commission'))}
              className="w-full py-3 rounded-lg bg-[#3D2619] hover:bg-[#2A1910] text-[#FAF5F0] font-bold text-xs uppercase tracking-wider flex items-center justify-center shadow-sm"
            >
              <span>{lang === 'ka' ? 'შეკვეთის გაფორმება' : 'Place Custom Order'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
