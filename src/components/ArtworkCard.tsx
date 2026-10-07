import React from 'react';
import { Heart, Paperclip } from 'lucide-react';
import { Artwork } from '../types';

interface ArtworkCardProps {
  artwork: Artwork;
  lang: 'ka' | 'en';
  isWishlisted: boolean;
  onToggleWishlist: (id: string, e: React.MouseEvent) => void;
  onOpenDetails: (artwork: Artwork) => void;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({
  artwork,
  lang,
  isWishlisted,
  onToggleWishlist,
  onOpenDetails,
}) => {
  // Localized strings
  const title = lang === 'en' && artwork.titleEn ? artwork.titleEn : artwork.title;
  const description = lang === 'en' && artwork.descriptionEn ? artwork.descriptionEn : artwork.description;
  const dimensions = lang === 'en' && artwork.dimensionsEn ? artwork.dimensionsEn : artwork.dimensions;
  
  const materialsList = lang === 'en' && artwork.materialsEn ? artwork.materialsEn : artwork.materials;
  const woodMaterial = materialsList && materialsList.length > 0 
    ? materialsList.join(', ') 
    : (lang === 'ka' ? 'ხის დაფა' : 'Wood Board');

  // Tag text on top-left of image
  const displayTag = lang === 'en' && artwork.tagEn 
    ? artwork.tagEn 
    : (artwork.tag || artwork.category);

  return (
    <div
      onClick={() => onOpenDetails(artwork)}
      className="group bg-[#FAF5F0] rounded-2xl border border-[#E5D7C5]/70 overflow-hidden flex flex-col h-full cursor-pointer shadow-3xs transition-all duration-300 hover:shadow-md hover:border-[#D7B18E]"
    >
      {/* Visual Thumbnail Frame (1:1 Aspect Ratio) */}
      <div className="relative aspect-square overflow-hidden bg-[#EFEAE2]/60 shrink-0 flex items-center justify-center">
        <img
          src={artwork.image}
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />

        {/* Top-Left Category/Tag Pill Badge */}
        <div className="absolute top-3 left-3 bg-[#F6F0E8]/90 text-[#3D2619] text-[10px] font-semibold px-2.5 py-1 rounded-md border border-[#E5D7C5]/70 shadow-2xs backdrop-blur-xs">
          {displayTag}
        </div>

        {/* Top-Right Wishlist Button Overlay */}
        <button
          onClick={(e) => onToggleWishlist(artwork.id, e)}
          className={`absolute top-3 right-3 h-8.5 w-8.5 rounded-lg flex items-center justify-center border transition-all shadow-2xs ${
            isWishlisted
              ? 'bg-[#3D2619] text-[#D7B18E] border-[#3D2619] scale-105'
              : 'bg-white/90 text-[#3D2619]/80 border-[#E5D7C5]/80 hover:bg-white hover:text-[#3D2619]'
          }`}
          title={lang === 'ka' ? 'რჩეულებში დამატება' : 'Save'}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Out of Stock Banner Overlay */}
        {artwork.stock === 0 && (
          <div className="absolute inset-0 bg-[#3D2619]/60 flex items-center justify-center backdrop-blur-xs">
            <span className="text-white uppercase font-mono text-xs tracking-widest border border-white/40 px-3 py-1.5 rounded-md">
              {lang === 'ka' ? 'გაყიდულია' : 'Sold Out'}
            </span>
          </div>
        )}
      </div>

      {/* Item metadata details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-2">
          {/* Title and Status Badge Row */}
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-serif font-extrabold text-[#3D2619] text-xl group-hover:text-[#966842] transition-colors leading-tight">
              {title}
            </h3>
            
            <span className="bg-[#3D2619] text-[#FAF5F0] text-[10px] font-bold px-2.5 py-1 rounded-md shrink-0">
              {artwork.stock > 0 ? (lang === 'ka' ? 'ხელმისაწვდომია' : 'Available') : (lang === 'ka' ? 'არაა მარაგში' : 'Sold Out')}
            </span>
          </div>

          {/* Price Tag */}
          <div className="text-[#3D2619] font-extrabold text-base tracking-tight font-sans">
            {artwork.price || '0.00₾'}
          </div>

          {/* Description snippet */}
          <p className="text-[#3D2619]/75 text-xs line-clamp-2 leading-relaxed font-sans">
            {description}
          </p>
        </div>

        {/* Bottom Specs Row: Material & Dimensions with Paperclip Icon */}
        <div className="pt-3 border-t border-[#E5D7C5]/60 flex items-center justify-between text-xs text-[#8F9499] font-sans">
          <span className="font-medium text-[#8F9499]">
            {woodMaterial}
          </span>

          <span className="font-medium text-[#8F9499] flex items-center gap-1">
            <Paperclip className="h-3.5 w-3.5 text-[#8F9499]" />
            {dimensions}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;
