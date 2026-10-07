import React from 'react';

interface FooterProps {
  lang: 'ka' | 'en';
}

export default function Footer({ lang }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#121110] text-[#FAF5F0] py-12 px-6 border-t border-[#2A2622]">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-6">
        
        {/* ლოგო და ბრენდის სახელი ფუტერში */}
        <div className="flex flex-col items-center gap-3">
          <img src="/images/l-logo.png" alt="Lignum Logo" className="h-12 w-12 object-contain grayscale opacity-80" />
          <span className="font-stardos font-bold text-2xl tracking-[0.25em] text-[#9A938C]">
            LIGNUM
          </span>
        </div>
        
        {/* მარტივი სანავიგაციო ბმულები ან ტექსტი */}
        <div className="text-[#9A938C] text-sm text-center max-w-sm leading-relaxed font-sans font-medium">
          {lang === 'ka' 
            ? 'თითოეული ნამუშევარი შექმნილია სიყვარულით და ბუნებისადმი პატივისცემით.' 
            : 'Each piece is crafted with passion and deep respect for nature.'}
        </div>

        <div className="w-16 h-[1px] bg-[#3A3530]" />

        {/* საავტორო უფლებები და სოციალური ბმულები */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full pt-4">
          <p className="text-xs text-[#9A938C] font-mono tracking-wider">
            &copy; {currentYear} LIGNUM. {lang === 'ka' ? 'ყველა უფლება დაცულია.' : 'All Rights Reserved.'}
          </p>
          
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <a href="https://www.facebook.com/lignumart/" target="_blank" rel="noopener noreferrer" className="text-xs uppercase font-bold tracking-widest text-[#9A938C] hover:text-[#D7B18E] transition-colors">
              Facebook
            </a>
            <span className="text-[#3A3530] text-xs">/</span>
            <a href="mailto:lignumwoodart@gmail.com" className="text-xs uppercase font-bold tracking-widest text-[#9A938C] hover:text-[#D7B18E] transition-colors">
              Email
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
