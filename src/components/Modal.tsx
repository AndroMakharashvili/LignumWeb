import React, { useState } from 'react';
import { X, Heart, Calendar, ShoppingBag, Check } from 'lucide-react';
import { Artwork } from '../types';
import { TRANSLATIONS } from '../data';

interface ModalProps {
  artwork: Artwork;
  lang: 'ka' | 'en';
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (id: string, e: React.MouseEvent) => void;
  allArtworks: Artwork[];
  onSelectArtwork: (artwork: Artwork) => void;
  setActiveTab?: (tab: 'Home' | 'Gallery' | 'Commission' | 'Contact') => void;
}

export default function Modal({
  artwork,
  lang,
  onClose,
  isWishlisted,
  onToggleWishlist,
  allArtworks,
  onSelectArtwork,
  setActiveTab,
}: ModalProps) {
  const t = TRANSLATIONS[lang];
  const [showInquirySent, setShowInquirySent] = useState(false);
  const [inquiryText, setInquiryText] = useState('');
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  // შექმნის წლის ამოღება ან ნაგულისხმევი 2025 წლის მინიჭება
  const createdYear = artwork.createdAt ? artwork.createdAt.split('-')[0] : '2025';

  // ლოკალიზებული (თარგმნილი) ტექსტები
  const title = lang === 'en' && artwork.titleEn ? artwork.titleEn : artwork.title;
  const description = lang === 'en' && artwork.descriptionEn ? artwork.descriptionEn : artwork.description;
  const dimensions = lang === 'en' && artwork.dimensionsEn ? artwork.dimensionsEn : artwork.dimensions;

  const materialsList = lang === 'en' && artwork.materialsEn ? artwork.materialsEn : artwork.materials;
  const woodSpecies = materialsList && materialsList.length > 0 
    ? materialsList.join(', ') 
    : (lang === 'ka' ? 'გარგარის ხე' : 'Wild Wood');

  // კატეგორიის ტექსტის ფორმატირება
  const categorySubtitle = () => {
    if (lang === 'en' && artwork.tagEn) {
      return artwork.tagEn.toUpperCase();
    }
    switch (artwork.category) {
      case 'Bowls': return lang === 'ka' ? 'ხის ჯამი (WOODEN BOWL)' : 'WOODEN BOWL';
      case 'Boards': return lang === 'ka' ? 'დასაჭრელი დაფა (SERVING BOARD)' : 'SERVING BOARD';
      case 'Furniture': return lang === 'ka' ? 'ავეჯი (HANDMADE FURNITURE)' : 'HANDMADE FURNITURE';
      case 'Decor': return lang === 'ka' ? 'ხის სული (WOODSPIRIT)' : 'WOODSPIRIT DECOR';
      default: return artwork.category.toUpperCase();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div 
        className="bg-[#FAF5F0] rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-[#D7B18E]/30 relative animate-fadeIn my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* დახურვის ღილაკი ზედა მარჯვენა კუთხეში */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 bg-white/90 hover:bg-white text-[#3D2619] h-9 w-9 rounded-lg flex items-center justify-center border border-[#D7B18E]/40 shadow-xs transition-all cursor-pointer"
          title={lang === 'ka' ? 'დახურვა' : 'Close'}
        >
          <X className="h-5 w-5" />
        </button>

        {/* მოდალურის მთავარი კონტენტის ბადე (2 სვეტად) */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* მარცხენა სვეტი: პროდუქტის სურათი */}
          <div className="relative min-h-[320px] md:min-h-[460px] bg-white flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-[#D7B18E]/20">
            <img
              src={artwork.image}
              alt={title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />

            {/* რჩეულებში დამატების ღილაკი */}
            <button
              onClick={(e) => onToggleWishlist(artwork.id, e)}
              className={`absolute top-4 left-4 z-20 h-9 w-9 rounded-full flex items-center justify-center border transition-all shadow-sm ${
                isWishlisted
                  ? 'bg-[#3D2619] text-[#D7B18E] border-[#3D2619] scale-105'
                  : 'bg-white/90 text-[#3D2619]/80 border-[#D7B18E]/40 hover:bg-white'
              }`}
              title={t.addToWishlist}
            >
              <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>

            {/* გაყიდულია ბანერი თუ მარაგში აღარ არის */}
            {artwork.stock === 0 && (
              <div className="absolute inset-0 bg-[#3D2619]/60 flex items-center justify-center backdrop-blur-xs">
                <span className="text-white text-xs font-mono tracking-widest border border-white/50 px-4 py-2 rounded-xs uppercase">
                  {lang === 'ka' ? 'გაყიდულია' : 'Sold Out'}
                </span>
              </div>
            )}
          </div>

          {/* მარჯვენა სვეტი: დეტალები და ღილაკები */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-4">
            
            {/* პროდუქტის ძირითადი ინფორმაცია */}
            <div className="space-y-3">
              {/* კატეგორია / ქვე-სათაური */}
              <span className="text-xs font-mono uppercase tracking-wider text-[#8F9499] font-bold block">
                {categorySubtitle()}
              </span>

              {/* პროდუქტის დასახელება */}
              <h2 className="text-2xl md:text-3xl font-serif font-extrabold text-[#3D2619] leading-snug tracking-tight">
                {title}
              </h2>

              {/* ფასი */}
              <div className="text-2xl font-extrabold text-[#3D2619] font-sans tracking-tight pt-0.5">
                {artwork.price || '0.00₾'}
              </div>

              {/* სტატუსის მწკრივი */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className={`text-xs font-bold px-3 py-1 rounded-md ${
                  artwork.stock > 0
                    ? 'bg-[#3D2619] text-[#FAF5F0]'
                    : 'bg-rose-800 text-white'
                }`}>
                  {artwork.stock > 0 
                    ? (lang === 'ka' ? 'ხელმისაწვდომია' : 'Available') 
                    : (lang === 'ka' ? 'არაა მარაგში' : 'Sold Out')}
                </span>

                <span className="bg-[#EBE3D5] text-[#3D2619] text-xs font-semibold px-3 py-1 rounded-md border border-[#D7B18E]/40">
                  {lang === 'ka' ? 'ორიგინალური • 1 ეგზემპლარი' : 'Original • 1 Edition'}
                </span>
              </div>

              {/* აღწერა */}
              <p className="text-sm text-[#3D2619]/85 leading-relaxed font-sans pt-2">
                {description}
              </p>

              {/* ტექნიკური მახასიათებლები */}
              <div className="bg-[#F6F0E8] border border-[#E5D7C5] rounded-xl p-4 space-y-2.5 text-xs text-[#3D2619] font-sans my-4">
                <div className="flex justify-between items-center pb-2 border-b border-[#E5D7C5]/70">
                  <span className="text-[#8F9499] font-medium">
                    {lang === 'ka' ? 'ხის ჯიში' : 'Wood Variety'}
                  </span>
                  <span className="font-bold text-[#3D2619]">
                    {woodSpecies}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-2 border-b border-[#E5D7C5]/70">
                  <span className="text-[#8F9499] font-medium">
                    {lang === 'ka' ? 'ზომები' : 'Dimensions'}
                  </span>
                  <span className="font-bold text-[#3D2619]">
                    {dimensions}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#8F9499] font-medium">
                    {lang === 'ka' ? 'შექმნის წელი' : 'Creation Year'}
                  </span>
                  <span className="font-bold text-[#3D2619] flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-[#8F9499]" />
                    {createdYear}
                  </span>
                </div>
              </div>
            </div>

            {/* ქვედა ღილაკების არეალი */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => {
                  onClose();
                  if (setActiveTab) {
                    setActiveTab('Commission');
                  }
                }}
                className="w-full bg-[#3D2619] hover:bg-[#2A1910] text-[#FAF5F0] py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
              >
                <ShoppingBag className="h-4.5 w-4.5 text-[#D7B18E]" />
                <span>{t.enquireBtn}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
