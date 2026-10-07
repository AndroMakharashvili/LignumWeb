import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Artwork } from '../types';
import ArtworkCard from './ArtworkCard';
import SkeletonCard from './SkeletonCard';

interface FeaturedSectionProps {
  lang: 'ka' | 'en';
  t: any;
  setActiveTab: (tab: 'Home' | 'Gallery' | 'Commission' | 'Contact') => void;
  featuredArtworks: Artwork[];
  pageLoading: boolean;
  wishlist: string[];
  onToggleWishlist: (id: string, e: React.MouseEvent) => void;
  onOpenDetails: (artwork: Artwork) => void;
}

export default function FeaturedSection({
  lang,
  t,
  setActiveTab,
  featuredArtworks,
  pageLoading,
  wishlist,
  onToggleWishlist,
  onOpenDetails
}: FeaturedSectionProps) {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-[#D7B18E]/30 pb-5">
        <div>
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#966842] font-extrabold block">
            {lang === 'ka' ? 'რჩეული კოლექცია' : 'ATELIER PRIDE'}
          </span>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#2D251E] mt-1">
            {t.featuredCreations}
          </h3>
        </div>
        <button
          onClick={() => setActiveTab('Gallery')}
          className="text-xs uppercase tracking-wider font-bold text-[#966842] hover:text-[#2D251E] inline-flex items-center gap-1 cursor-pointer transition-colors"
        >
          <span>{t.exploreMoreBtn}</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {pageLoading ? (
          <SkeletonCard count={3} />
        ) : (
          featuredArtworks.map((item) => (
            <ArtworkCard
              key={item.id}
              artwork={item}
              lang={lang}
              isWishlisted={wishlist.includes(item.id)}
              onToggleWishlist={onToggleWishlist}
              onOpenDetails={onOpenDetails}
            />
          ))
        )}
      </div>
    </section>
  );
}
