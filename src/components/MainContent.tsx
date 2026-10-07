import React from 'react';
import HeroSection from './HeroSection';
import ProcessSection from './ProcessSection';
import FaqSection from './FaqSection';
import FeaturedSection from './FeaturedSection';
import GalleryView from './GalleryView';
import CustomOrderEstimator from './CustomOrderEstimator';
import ContactView from './ContactView';
import { useAppStore } from '../hooks/useAppStore';

interface MainContentProps {
  store: ReturnType<typeof useAppStore>;
}

export default function MainContent({ store }: MainContentProps) {
  const {
    lang,
    activeTab,
    setActiveTab,
    t,
    featuredArtworks,
    pageLoading,
    wishlist,
    handleToggleWishlist,
    handleOpenDetails,
    searchQuery,
    handleSearchChange,
    sortBy,
    handleSortChange,
    selectedCategory,
    handleSelectCategory,
    getCategoryCount,
    gridLoading,
    filteredArtworks,
    handleAddCommission,
  } = store;

  return (
    <main className="flex-1">
      {activeTab === 'Home' && (
        <div className="space-y-0">
          <HeroSection lang={lang} setActiveTab={setActiveTab} />
          <FeaturedSection
            lang={lang}
            t={t}
            setActiveTab={setActiveTab}
            featuredArtworks={featuredArtworks}
            pageLoading={pageLoading}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
            onOpenDetails={handleOpenDetails}
          />
          <div id="commission-section">
            <CustomOrderEstimator lang={lang} onAddCommission={handleAddCommission} />
          </div>
          <div id="process-section">
            <ProcessSection lang={lang} t={t} />
          </div>
          <FaqSection lang={lang} />
        </div>
      )}

      {activeTab === 'Gallery' && (
        <GalleryView
          lang={lang}
          t={t}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          sortBy={sortBy}
          onSortChange={handleSortChange}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
          getCategoryCount={getCategoryCount}
          pageLoading={pageLoading}
          gridLoading={gridLoading}
          filteredArtworks={filteredArtworks}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onOpenDetails={handleOpenDetails}
          setActiveTab={setActiveTab}
        />
      )}

      {activeTab === 'Commission' && (
        <div className="py-6">
          <CustomOrderEstimator lang={lang} onAddCommission={handleAddCommission} />
        </div>
      )}

      {activeTab === 'Contact' && (
        <div className="py-6">
          <ContactView lang={lang} />
        </div>
      )}
    </main>
  );
}
