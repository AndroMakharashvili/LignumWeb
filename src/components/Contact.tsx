import React, { useState } from 'react';
import { Sparkles, MapPin, Mail, Phone, Facebook, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

interface ContactProps {
  lang: 'ka' | 'en';
}

export default function Contact({ lang }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneOrSubject, setPhoneOrSubject] = useState('');
  const [message, setMessage] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setSubmitting(true);
    setSuccess(false);
    setError(false);

    try {
      const response = await fetch('https://formspree.io/f/xzedpwjk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          phoneOrSubject,
          message
        })
      });

      if (response.ok) {
        setSuccess(true);
        setName('');
        setEmail('');
        setPhoneOrSubject('');
        setMessage('');
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto space-y-10">
      
      {/* მთავარი სათაურის ტექსტი */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold text-[#3D2619] tracking-tight">
          {lang === 'ka' ? 'კონტაქტი' : 'Contact Us'}
        </h1>
      </div>

      {/* ძირითადი 2-სვეტიანი განლაგება */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
        
        {/* მარცხენა სვეტი: საკონტაქტო ინფორმაცია */}
        <div className="lg:col-span-5 bg-[#F7F2EC] rounded-2xl border border-[#E5D7C5]/80 p-6 sm:p-8 space-y-6 shadow-sm">
          
          <div className="flex items-center gap-2 pb-2">
            <Sparkles className="h-5 w-5 text-[#3D2619]" />
            <h2 className="font-serif font-extrabold text-[#3D2619] text-xl">
              {lang === 'ka' ? 'საკონტაქტო ინფორმაცია' : 'Contact Information'}
            </h2>
          </div>

          <div className="space-y-4">
            
            {/* 1. ლოკაცია */}
            <div className="flex items-center gap-4">
              <div className="h-11 w-11 rounded-xl bg-[#EFE9E0] text-[#3D2619] border border-[#E5D7C5]/70 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#8F9499] font-bold block">
                  {lang === 'ka' ? 'სახელოსნოს ლოკაცია' : 'Workshop Location'}
                </span>
                <span className="font-sans font-bold text-[#3D2619] text-sm sm:text-base">
                  {lang === 'ka' ? 'საგურამო, საქართველო' : 'Saguramo, Georgia'}
                </span>
              </div>
            </div>

            {/* 2. ელ-ფოსტა */}
            <div className="flex items-center gap-4">
              <div className="h-11 w-11 rounded-xl bg-[#EFE9E0] text-[#3D2619] border border-[#E5D7C5]/70 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#8F9499] font-bold block">
                  {lang === 'ka' ? 'ელ-ფოსტა' : 'Email Address'}
                </span>
                <a 
                  href="mailto:lignumwoodart@gmail.com" 
                  className="font-sans font-bold text-[#3D2619] text-sm sm:text-base hover:underline"
                >
                  lignumwoodart@gmail.com
                </a>
              </div>
            </div>

            {/* 3. ტელეფონი */}
            <div className="flex items-center gap-4">
              <div className="h-11 w-11 rounded-xl bg-[#EFE9E0] text-[#3D2619] border border-[#E5D7C5]/70 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#8F9499] font-bold block">
                  {lang === 'ka' ? 'ტელეფონი' : 'Phone'}
                </span>
                <a 
                  href="tel:+995593265098" 
                  className="font-sans font-bold text-[#3D2619] text-sm sm:text-base hover:underline"
                >
                  +995 593 26 50 98
                </a>
              </div>
            </div>

            {/* 4. Facebook */}
            <div className="flex items-center gap-4">
              <div className="h-11 w-11 rounded-xl bg-[#EFE9E0] text-[#3D2619] border border-[#E5D7C5]/70 flex items-center justify-center shrink-0">
                <Facebook className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#8F9499] font-bold block">
                  FACEBOOK
                </span>
                <a 
                  href="https://www.facebook.com/lignumart/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-sans font-bold text-[#3D2619] text-sm sm:text-base hover:underline"
                >
                  lignumart
                </a>
              </div>
            </div>

            {/* 5. სამუშაო საათები */}
            <div className="flex items-center gap-4">
              <div className="h-11 w-11 rounded-xl bg-[#EFE9E0] text-[#3D2619] border border-[#E5D7C5]/70 flex items-center justify-center shrink-0">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#8F9499] font-bold block">
                  {lang === 'ka' ? 'სამუშაო საათები' : 'Working Hours'}
                </span>
                <span className="font-sans font-bold text-[#3D2619] text-sm sm:text-base">
                  {lang === 'ka' ? 'ორშაბათი - შაბათი: 10:00 - 19:00' : 'Mon - Sat: 10:00 - 19:00'}
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* მარჯვენა სვეტი: საკონტაქტო ფორმა */}
        <div className="lg:col-span-7 bg-[#F7F2EC] rounded-2xl border border-[#E5D7C5]/80 p-6 sm:p-8 space-y-6 shadow-sm">
          
          <div className="flex items-center gap-2.5 pb-2">
            <MessageSquare className="h-5 w-5 text-[#3D2619]" />
            <h2 className="font-serif font-extrabold text-[#3D2619] text-xl">
              {lang === 'ka' ? 'მოგვწერეთ შეტყობინება' : 'Send Us a Message'}
            </h2>
          </div>

          <form 
            action="https://formspree.io/f/xzedpwjk" 
            method="POST" 
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* სახელისა და ელ-ფოსტის ველები */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-sans font-bold text-[#3D2619] block">
                  {lang === 'ka' ? 'თქვენი სახელი' : 'Your Name'} <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={lang === 'ka' ? 'მაგ. გიორგი' : 'e.g. Giorgi'}
                  className="w-full bg-white border border-[#E5D7C5] rounded-xl px-4 py-3 text-sm text-[#3D2619] placeholder-[#8F9499] focus:outline-hidden focus:border-[#3D2619] font-sans transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-sans font-bold text-[#3D2619] block">
                  {lang === 'ka' ? 'ელ-ფოსტა' : 'Email'} <span className="text-rose-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="mail@example.com"
                  className="w-full bg-white border border-[#E5D7C5] rounded-xl px-4 py-3 text-sm text-[#3D2619] placeholder-[#8F9499] focus:outline-hidden focus:border-[#3D2619] font-sans transition-all"
                />
              </div>
            </div>

            {/* ტელეფონი ან სათაური ველი */}
            <div className="space-y-1.5">
              <label className="text-xs font-sans font-bold text-[#3D2619] block">
                {lang === 'ka' ? 'ტელეფონი' : 'Phone'}
              </label>
              <input
                type="text"
                name="phoneOrSubject"
                value={phoneOrSubject}
                onChange={(e) => setPhoneOrSubject(e.target.value)}
                placeholder={lang === 'ka' ? 'მაგ. +995123456789' : 'e.g. +995123456789'}
                className="w-full bg-white border border-[#E5D7C5] rounded-xl px-4 py-3 text-sm text-[#3D2619] placeholder-[#8F9499] focus:outline-hidden focus:border-[#3D2619] font-sans transition-all"
              />
            </div>

            {/* შეტყობინების ველი */}
            <div className="space-y-1.5">
              <label className="text-xs font-sans font-bold text-[#3D2619] block">
                {lang === 'ka' ? 'თქვენი შეტყობინება' : 'Your Message'} <span className="text-rose-600">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={lang === 'ka' ? 'დაწერეთ თქვენი შეტყობინება' : 'Write your message'}
                className="w-full bg-white border border-[#E5D7C5] rounded-xl p-4 text-sm text-[#3D2619] placeholder-[#8F9499] focus:outline-hidden focus:border-[#3D2619] font-sans leading-relaxed transition-all"
              />
            </div>

            {/* სტატუსის შეტყობინებები */}
            {success && (
              <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 animate-fadeIn">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>
                  {lang === 'ka'
                    ? 'შეტყობინება წარმატებით გაიგზავნა! ოსტატი მალე გიპასუხებთ.'
                    : 'Message sent successfully! The workshop will reply soon.'}
                </span>
              </div>
            )}

            {error && (
              <div className="bg-rose-50 border border-rose-300 text-rose-800 p-4 rounded-xl text-sm font-semibold text-center">
                {lang === 'ka'
                  ? 'შეცდომა გაგზავნისას. გთხოვთ სცადოთ ხელახლა.'
                  : 'An error occurred. Please try sending again.'}
              </div>
            )}

            {/* გაგზავნის ღილაკი */}
            <button
              type="submit"
              disabled={submitting}
              className="bg-[#3D2619] hover:bg-[#2A1910] text-[#FAF5F0] py-3.5 px-8 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer hover:scale-[1.005] active:scale-[0.995] disabled:opacity-60"
            >
              <Send className="h-4 w-4 text-[#D7B18E]" />
              <span>
                {submitting
                  ? (lang === 'ka' ? 'იგზავნება...' : 'Sending...')
                  : (lang === 'ka' ? 'შეტყობინების გაგზავნა' : 'Send Message')}
              </span>
            </button>
          </form>

        </div>

      </div>

    </div>
  );
}
