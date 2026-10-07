import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface ScrollTopProps {
  lang?: 'ka' | 'en';
}

export default function ScrollTop({ lang = 'ka' }: ScrollTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // სქროლის მოსმენა ღილაკის გამოსაჩენად
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label={lang === 'ka' ? 'ზემოთ ასვლა' : 'Scroll to top'}
      title={lang === 'ka' ? 'ზემოთ ასვლა' : 'Scroll to top'}
      className="fixed bottom-6 right-6 z-40 h-11 w-11 rounded-full bg-[#3D2619] hover:bg-[#2A1910] text-[#FAF5F0] border border-[#D7B18E]/50 shadow-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 animate-fadeIn"
    >
      <ArrowUp className="h-5 w-5 text-[#D7B18E]" />
    </button>
  );
}
