import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqProps {
  lang: 'ka' | 'en';
}

interface FaqItem {
  id: string;
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'როგორ მზადდება Lignum-ის ხელნაკეთი ნივთები?',
    questionEn: 'How are Lignum handcrafted items created?',
    answer: 'ხის შერჩევა და მომზადება: ვიყენებთ მხოლოდ გამომშრალ, ხარისხიან და საინტერესო ტექსტურის მქონე მასალას. თითოეული ნაჭრის ბუნებრივი ფორმა და ბოჭკოვანი სტრუქტურა განსაზღვრავს საბოლოო დიზაინს. დამუშავება და კვეთა: ფორმის მიცემა, ჭრა და დეტალების გამოკვეთა ხდება ხელით, ტრადიციული ხელსაწყოებისა და ზუსტი ოსტატობის შერწყმით. ამიტომ ორი იდენტური ნივთი არ არსებობს.',
    answerEn: 'We use only high-quality, dried timber with interesting textures. The final design is shaped by the natural form and grain of each piece. Handcrafting process: Shaping, carving, and detailing are performed manually using traditional tools and precise craftsmanship, ensuring no two items are exactly alike.'
  },
  {
    id: 'faq-2',
    question: 'როგორ შემიძლია ინდივიდუალური შეკვეთის გაფორმება?',
    questionEn: 'How can I place a custom commission order?',
    answer: 'ინდივიდუალური შეკვეთისთვის გადადით "შეკვეთის" სექციაში, სადაც შეგიძლიათ მიუთითოთ სასურველი ზომები, ხის მასალის უპირატესობა და დიზაინის დეტალები. მოთხოვნის გაგზავნის შემდეგ მალევე დაგიკავშირდებით.',
    answerEn: 'For custom orders, navigate to the "Commission" tab where you can specify target dimensions, timber preferences, and design ideas. The artisan will contact you shortly.'
  },
  {
    id: 'faq-4',
    question: 'რამდენ ხანში მზადდება ინდივიდუალური შეკვეთა?',
    questionEn: 'How long does a custom order take to make?',
    answer: 'შეკვეთის დამზადების დრო დამოკიდებულია ნივთის სირთულესა და ზომებზე. საშუალოდ ინდივიდუალური ნამუშევრის დამზადებას სჭირდება 5-დან 10 სამუშაო დღემდე.',
    answerEn: 'Production time depends on the complexity and dimensions of the piece. On average, a custom commission takes between 5 to 10 working days.'
  },
  {
    id: 'faq-5',
    question: 'შესაძლებელია თუ არა მიწოდება მთელი საქართველოს მასშტაბით?',
    questionEn: 'Is delivery available across Georgia?',
    answer: 'დიახ, მიწოდება ხორციელდება საქართველოს ნებისმიერ ქალაქსა და რეგიონში საკურიერო მომსახურების მეშვეობით უსაფრთხოდ შეფუთული ამანათით.',
    answerEn: 'Yes, delivery is available to any region in Georgia via reliable courier service with protective packaging.'
  }
];

export default function Faq({ lang }: FaqProps) {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq-section" className="py-20 px-6 bg-[#FAF5F0] border-b border-[#D7B18E]/30 scroll-mt-20">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* სექციის სათაური */}
        <div className="text-center space-y-3">
          <span className="text-[11px] uppercase tracking-widest text-[#966842] font-mono font-extrabold block">
            {lang === 'ka' ? 'ხშირად დასმული კითხვები' : 'FREQUENTLY ASKED QUESTIONS'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[#3D2619] tracking-tight">
            {lang === 'ka' ? 'კითხვები' : 'Questions'}
          </h2>
        </div>

        {/* კითხვების სია (Accordion) */}
        <div className="space-y-4">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            const questionText = lang === 'en' ? item.questionEn : item.question;
            const answerText = lang === 'en' ? item.answerEn : item.answer;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#E5D7C5]/80 overflow-hidden transition-all duration-300 shadow-3xs hover:border-[#D7B18E]"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="h-8.5 w-8.5 rounded-lg bg-[#F6F0E8] border border-[#E5D7C5]/70 flex items-center justify-center text-[#3D2619] shrink-0">
                      <HelpCircle className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="font-serif font-bold text-[#3D2619] text-base sm:text-lg leading-snug">
                      {questionText}
                    </h3>
                  </div>

                  <div className={`h-8 w-8 rounded-full bg-[#F6F0E8] flex items-center justify-center text-[#3D2619] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#3D2619] text-[#FAF5F0]' : ''}`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-[#3D2619]/80 text-sm leading-relaxed font-sans border-t border-[#F6F0E8] animate-fadeIn">
                    <p className="pl-12">{answerText}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
