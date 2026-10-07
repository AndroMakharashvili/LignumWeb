import React, { useState } from 'react';
import { FileText, User, Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS } from '../data';
import { CustomOrderRequest } from '../types';

interface OrderProps {
  lang: 'ka' | 'en';
  onAddCommission?: (request: CustomOrderRequest) => void;
}

export default function Order({ lang, onAddCommission }: OrderProps) {
  const t = TRANSLATIONS[lang];

  // ფორმის მდგომარეობები
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // Formspree გაგზავნის მდგომარეობები
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
          phone,
          message
        })
      });

      if (response.ok) {
        setSuccess(true);
        if (onAddCommission) {
          onAddCommission({
            id: `comm-${Date.now()}`,
            customerName: name,
            email,
            category: 'Custom Design',
            description: message,
            dimensions: 'TBD',
            materialPreference: 'Custom Wood',
            colorPalette: [],
            estimatedPriceRange: [0, 0],
            status: 'Pending',
            createdAt: new Date().toISOString().split('T')[0]
          });
        }
        setName('');
        setEmail('');
        setPhone('');
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
    <section id="custom-commission" className="py-16 px-6 bg-[#FAF5F0] border-b border-[#E5D7C5]/50 scroll-mt-20">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* ზედა ტექსტი ფორმის ბარათის თავზე */}
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#8F9499] font-sans font-semibold block">
            {lang === 'ka' ? 'შეექმენი შენი იდეა' : 'Create Your Vision'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[#3D2619] tracking-tight">
            {lang === 'ka' ? 'შეუკვეთე დიზაინი' : 'Commission Design'}
          </h2>
        </div>

        {/* ფორმის მთავარი ბარათი */}
        <div className="max-w-3xl mx-auto bg-[#F7F2EC] rounded-2xl border border-[#E5D7C5]/80 p-6 sm:p-8 md:p-10 shadow-sm space-y-6">

          {/* სათაური ბარათის შიგნით */}
          <div className="flex items-center gap-2.5 pb-4 border-b border-[#E5D7C5]/80">
            <FileText className="h-5 w-5 text-[#3D2619]" />
            <h3 className="font-serif font-extrabold text-[#3D2619] text-lg sm:text-xl">
              {lang === 'ka' ? 'შეკვეთის განაცხადი' : 'Order Application'}
            </h3>
          </div>

          {/* Formspree ფორმა */}
          <form
            action="https://formspree.io/f/xzedpwjk"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* ველი 1: სახელი და გვარი */}
            <div className="space-y-1.5">
              <label className="text-xs font-sans font-bold text-[#3D2619] block">
                {lang === 'ka' ? 'სახელი და გვარი' : 'Full Name'}
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8F9499]" />
                <input
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={lang === 'ka' ? 'მაგ: ანდრო მახარაშვილი' : 'e.g. Andro Makharashvili'}
                  className="w-full bg-white border border-[#E5D7C5] rounded-xl pl-11 pr-4 py-3.5 text-sm text-[#3D2619] placeholder-[#8F9499] focus:outline-hidden focus:border-[#3D2619] font-sans transition-all"
                />
              </div>
            </div>

            {/* ველები 2 და 3: ორსვეტიანი განლაგება */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* ველი 2: ელ-ფოსტა */}
              <div className="space-y-1.5">
                <label className="text-xs font-sans font-bold text-[#3D2619] block">
                  {lang === 'ka' ? 'ელ-ფოსტა' : 'Email'}
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8F9499]" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@mail.com"
                    className="w-full bg-white border border-[#E5D7C5] rounded-xl pl-11 pr-4 py-3.5 text-sm text-[#3D2619] placeholder-[#8F9499] focus:outline-hidden focus:border-[#3D2619] font-sans transition-all"
                  />
                </div>
              </div>

              {/* ველი 3: ტელეფონი */}
              <div className="space-y-1.5">
                <label className="text-xs font-sans font-bold text-[#3D2619] block">
                  {lang === 'ka' ? 'ტელეფონის ნომერი' : 'Phone Number'}
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8F9499]" />
                  <input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={lang === 'ka' ? 'მაგ: +995 599 XX XX XX' : 'e.g. +995 599 XX XX XX'}
                    className="w-full bg-white border border-[#E5D7C5] rounded-xl pl-11 pr-4 py-3.5 text-sm text-[#3D2619] placeholder-[#8F9499] focus:outline-hidden focus:border-[#3D2619] font-sans transition-all"
                  />
                </div>
              </div>
            </div>

            {/* ველი 4: დეტალური აღწერა */}
            <div className="space-y-1.5">
              <label className="text-xs font-sans font-bold text-[#3D2619] block">
                {lang === 'ka' ? 'იდეის დეტალური აღწერა' : 'Detailed Idea Description'}
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={
                  lang === 'ka'
                    ? 'აღწერეთ თქვენი სურვილი სათუთად (სასურველი ზომები, ხის მასალა, დიზაინის ხასიათი ან კონკრეტული დეტალები...)'
                    : 'Describe your vision carefully (target dimensions, timber variety, style character or custom details...)'
                }
                className="w-full bg-white border border-[#E5D7C5] rounded-xl p-4 text-sm text-[#3D2619] placeholder-[#8F9499] focus:outline-hidden focus:border-[#3D2619] font-sans leading-relaxed transition-all"
              />
            </div>

            {/* უკუკავშირის შეტყობინებები */}
            {success && (
              <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 animate-fadeIn">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>
                  {lang === 'ka'
                    ? 'განაცხადი წარმატებით გაიგზავნა! ოსტატი პირადად დაგიკავშირდებათ.'
                    : 'Application sent successfully! Andro will connect with you soon.'}
                </span>
              </div>
            )}

            {error && (
              <div className="bg-rose-50 border border-rose-300 text-rose-800 p-4 rounded-xl text-sm font-semibold text-center">
                {lang === 'ka'
                  ? 'შეცდომა გაგზავნისას. გთხოვთ სცადოთ ხელახლა.'
                  : 'An error occurred. Please try submitting again.'}
              </div>
            )}

            {/* გაგზავნის ღილაკი */}
            <button
              type="submit"
              disabled={submitting}
              className="bg-[#3D2619] hover:bg-[#2A1910] text-[#FAF5F0] w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer hover:scale-[1.005] active:scale-[0.995] disabled:opacity-60"
            >
              <Send className="h-4.5 w-4.5 text-[#D7B18E]" />
              <span>
                {submitting
                  ? (lang === 'ka' ? 'განაცხადი იგზავნება...' : 'Sending application...')
                  : (lang === 'ka' ? 'განაცხადის გაგზავნა' : 'Submit Application')}
              </span>
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
