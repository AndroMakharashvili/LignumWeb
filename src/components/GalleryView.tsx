import React from 'react';
import { Search } from 'lucide-react';
import { Artwork } from '../types';
import ArtworkCard from './ArtworkCard';
import SkeletonCard from './SkeletonCard';

interface GalleryViewProps {
  lang: 'ka' | 'en';
  t: any;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: 'price-asc' | 'price-desc' | 'views' | 'latest';
  onSortChange: (newSort: 'price-asc' | 'price-desc' | 'views' | 'latest') => void;
  selectedCategory: string;
  onSelectCategory: (catKey: string) => void;
  getCategoryCount: (catKey: string) => number;
  pageLoading: boolean;
  gridLoading: boolean;
  filteredArtworks: Artwork[];
  wishlist: string[];
  onToggleWishlist: (id: string, e: React.MouseEvent) => void;
  onOpenDetails: (artwork: Artwork) => void;
  setActiveTab: (tab: 'Home' | 'Gallery' | 'Commission' | 'Contact') => void;
}

export default function GalleryView({
  lang,
  t,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  selectedCategory,
  onSelectCategory,
  getCategoryCount,
  pageLoading,
  gridLoading,
  filteredArtworks,
  wishlist,
  onToggleWishlist,
  onOpenDetails,
  setActiveTab
}: GalleryViewProps) {

  const categoryOptions = [
    { key: 'All', label: lang === 'ka' ? 'ყველა ნამუშევარი' : 'All Crafts' },
    { key: 'ხის სულები (WOODSPIRIT)', label: lang === 'ka' ? 'ხის სულები (WOODSPIRIT)' : 'Woodspirits (WOODSPIRIT)' },
    { key: 'ესთეტიკური & პრაქტიკული', label: lang === 'ka' ? 'ესთეტიკური & პრაქტიკული' : 'Aesthetic & Practical' },
  ];

  return (
    <div className="py-10 px-6 max-w-7xl mx-auto space-y-8">
      
      {/* Top Controls Bar matching screenshot */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Category Buttons Row */}
        <div className="flex flex-wrap items-center gap-2.5">
          {categoryOptions.map((cat) => {
            const isSelected = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => onSelectCategory(cat.key)}
                className={`text-xs font-semibold px-4 py-2.5 rounded-md transition-all cursor-pointer select-none ${
                  isSelected
                    ? 'bg-[#3D2619] text-[#FAF5F0] shadow-2xs font-bold'
                    : 'bg-[#F6F0E8] text-[#3D2619] border border-[#E5D7C5]/70 hover:bg-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search Input on right side matching screenshot */}
        <div className="relative w-full md:w-72 shrink-0">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={lang === 'ka' ? 'ძიება: მასალა, დასახელება...' : 'Search: material, name...'}
            className="w-full bg-[#F6F0E8] border border-[#E5D7C5]/80 rounded-md px-3.5 py-2 text-xs text-[#3D2619] placeholder-[#8F9499] focus:outline-hidden focus:border-[#3D2619] shadow-2xs"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-[#8F9499] hover:text-[#3D2619] font-bold cursor-pointer"
            >
              &times;
            </button>
          )}
        </div>
      </div>

      {/* Gallery Items Grid */}
      {pageLoading || gridLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <SkeletonCard count={6} />
        </div>
      ) : filteredArtworks.length === 0 ? (
        <div className="text-center py-24 bg-[#FAF5F0] rounded-2xl border border-[#E5D7C5]/60 space-y-3 shadow-3xs">
          <span className="text-4xl text-stone-300">🍃</span>
          <h3 className="font-serif font-semibold text-[#3D2619] text-lg">
            {lang === 'ka' ? 'ნამუშევრები ვერ მოიძებნა' : 'No woodcraft matches research criteria'}
          </h3>
          <p className="text-[#8F9499] text-xs max-w-sm mx-auto font-sans">
            {lang === 'ka' ? 'სცადეთ სხვა კატეგორია ან საძიებო სიტყვა.' : 'Try adjusting the keyword search or filter.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredArtworks.map((item) => (
            <ArtworkCard
              key={item.id}
              artwork={item}
              lang={lang}
              isWishlisted={wishlist.includes(item.id)}
              onToggleWishlist={onToggleWishlist}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>
      )}

    </div>
  );
}
