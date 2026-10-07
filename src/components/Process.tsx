import React from 'react';
import { Layers, Hammer, Sparkles, Flame } from 'lucide-react';

interface ProcessProps {
  lang: 'ka' | 'en';
  t: any;
}

export default function Process({ lang }: ProcessProps) {
  const steps = [
    {
      number: '01',
      icon: Layers,
      title: lang === 'ka' ? 'მასალის შერჩევა' : 'Material Selection',
      desc: lang === 'ka'
        ? 'ვარჩევ ხის ნაჭერს. ხის ბუნებრივი ფორმა, ქერქის ნატეხი ან განსხვავება თავად მკარნახობს მომავალ ნამუშევარს.'
        : 'I select timber pieces carefully. Natural wood shapes and master design.'
    },
    {
      number: '02',
      icon: Hammer,
      title: lang === 'ka' ? 'ხელით კვეთა' : 'Hand Carving',
      desc: lang === 'ka'
        ? 'სპეციალური ხელსაწყოებით ხისგან გამოთლა-მოჭრა ძირითადი ფორმები. ეს ის ეტაპია, სადაც ნამუშევარი თავის პირველად ხასიათს იძენს.'
        : 'Shaping primary forms with specialized manual chisels. This is the stage where the sculpture acquires its prime character.'
    },
    {
      number: '03',
      icon: Sparkles,
      title: lang === 'ka' ? 'დეტალიზაცია' : 'Detailed Work',
      desc: lang === 'ka'
        ? 'ვიწყებ ყველაზე ფაქიზ მუშაობას: სახის მიმიკების, წვრილი თმების გამოკვეთას და ზედაპირის ეტაპობრივ ფორმირებას.'
        : 'Engaging in intricate manual work: sculpting facial expressions, fine hair strands, and building surface depth.'
    },
    {
      number: '04',
      icon: Flame,
      title: lang === 'ka' ? 'საბოლოო დამუშავება' : 'Final Sealing',
      desc: lang === 'ka'
        ? 'სკულპტურას ვფარავ ხის ფერადი ან უფერო ლაქით, რაც ხაზს უსვამს ტექსტურას და წლების განმავლობაში ინარჩუნებს ხარისხს.'
        : 'Coating the piece with organic oils and beeswax, bringing out timber luster while preserving quality for decades.'
    }
  ];

  return (
    <section id="process-section" className="bg-[#121110] text-[#FAF5F0] py-20 px-6 scroll-mt-20 border-b border-[#2A2622]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* სათაურის ტექსტი */}
        <div className="text-center space-y-3">
          <span className="text-[11px] uppercase tracking-widest text-[#9A938C] font-mono font-bold block">
            {lang === 'ka' ? 'ხელზე კვეთის ეტაპები' : 'CARVING METHODOLOGY'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[#FAF5F0] tracking-tight">
            {lang === 'ka' ? 'როგორ ვქმნი ნამუშევრებს' : 'How I Create Woodcrafts'}
          </h2>
        </div>

        {/* 4 ბარათის ბადე (გრიდი) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="bg-[#1A1816] rounded-2xl border border-[#2D2A26] p-6 sm:p-7 space-y-6 hover:border-[#D7B18E]/50 transition-all duration-300 shadow-lg group flex flex-col justify-between"
              >
                {/* ბარათის ზედა მწკრივი: ნაბიჯის ნომერი და ხატულა */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-4xl sm:text-5xl font-extrabold text-[#38332E] group-hover:text-[#D7B18E]/40 transition-colors">
                    {step.number}
                  </span>
                  <div className="h-10 w-10 rounded-xl bg-[#25221F] border border-[#3A3530] flex items-center justify-center text-[#D7B18E] group-hover:border-[#D7B18E]/60 transition-all">
                    <IconComponent className="h-5 w-5" />
                  </div>
                </div>

                {/* ბარათის კონტენტი */}
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-[#FAF5F0] text-xl group-hover:text-[#D7B18E] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[#9A938C] text-xs sm:text-sm leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
