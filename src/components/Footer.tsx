import React from 'react';
import { MapPin, Mail, Phone, Clock, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  lang: 'ka' | 'en';
}

export default function Footer({ lang }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2D251E] text-[#8F9499] py-12 px-6 border-t border-[#D7B18E]/25 shrink-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* მარცხენა სვეტი: ბრენდი და მოკლე აღწერა */}
        <div className="md:col-span-6 space-y-4">
          <div className="flex items-center gap-3">
            <img src="/images/l-logo.png" alt="Lignum Logo" className="h-9 w-9 object-contain rounded-md" />
            <h3 className="text-[#D7B18E] font-serif font-bold text-lg uppercase tracking-wider">Lignum</h3>
          </div>
          <p className="text-xs max-w-md leading-relaxed text-[#FAF5F0]/90 font-sans">
            {lang === 'ka' 
              ? 'მე ვარ ანდრო, ხეზე კვეთის თვითნასწავლი შემოქმედი. ჩემს სახელოსნოში ნახავთ როგორც მისტიკურ Woodspirit-ებს, ისე პრაქტიკულ და ესთეტიკურ ნივთებს.'
              : 'I am Andro, a self-taught woodcarving artist. In my workshop you will find mystical Woodspirits as well as practical and aesthetic items.'}
          </p>
        </div>

        {/* მარჯვენა სვეტი: საკონტაქტო ინფორმაცია */}
        <div className="md:col-span-6 space-y-3 font-sans text-xs">
          <h4 className="text-[#D7B18E] uppercase tracking-widest font-bold text-xs">
            {lang === 'ka' ? 'კონტაქტი' : 'Contact Us'}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#FAF5F0]/85 pt-1">
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#D7B18E] shrink-0" />
              <span>{lang === 'ka' ? 'საგურამო, საქართველო' : 'Saguramo, Georgia'}</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#D7B18E] shrink-0" />
              <a href="mailto:lignumwoodart@gmail.com" className="hover:underline">
                lignumwoodart@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#D7B18E] shrink-0" />
              <a href="tel:+995593265098" className="hover:underline">
                +995 593 26 50 98
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#D7B18E] shrink-0" />
              <span>{lang === 'ka' ? 'ორშაბათი - შაბათი: 10:00 - 19:00' : 'Mon - Sat: 10:00 - 19:00'}</span>
            </p>
          </div>
        </div>

      </div>

      {/* ქვედა ზოლი: საავტორო უფლებები და სოციალური ბმულები */}
      <div className="max-w-7xl mx-auto border-t border-[#D7B18E]/25 mt-10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between text-[11px] text-[#8F9499] gap-4">
        <p>&copy; {currentYear} Lignum. {lang === 'ka' ? 'ყველა უფლება დაცულია.' : 'All rights reserved.'}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
          <a 
            href="https://www.facebook.com/lignumart/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 hover:text-[#FAF5F0] transition-colors group text-[#8F9499] font-mono"
          >
            <Facebook className="h-3.5 w-3.5 transition-transform group-hover:scale-110" style={{ color: '#D7B18E' }} />
            <span>Facebook</span>
          </a>
          <span className="text-[#D7B18E]/20">&bull;</span>
          <a 
            href="https://www.instagram.com/lignumwoodart/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 hover:text-[#FAF5F0] transition-colors group text-[#8F9499] font-mono"
          >
            <Instagram className="h-3.5 w-3.5 transition-transform group-hover:scale-110" style={{ color: '#D7B18E' }} />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
