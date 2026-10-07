import React from 'react';
import Hero from './Hero';
import Process from './Process';
import Faq from './Faq';
import Featured from './Featured';
import Gallery from './Gallery';
import Order from './Order';
import Contact from './Contact';
import { useAppStore } from '../hooks/useAppStore';

interface MainProps {
  store: ReturnType<typeof useAppStore>;
}

export default function Main({ store }: MainProps) {
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
          <Hero lang={lang} setActiveTab={setActiveTab} />
          <Featured
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
            <Order lang={lang} onAddCommission={handleAddCommission} />
          </div>
          <div id="process-section">
            <Process lang={lang} t={t} />
          </div>
          <Faq lang={lang} />
        </div>
      )}

      {activeTab === 'Gallery' && (
        <Gallery
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
          <Order lang={lang} onAddCommission={handleAddCommission} />
        </div>
      )}

      {activeTab === 'Contact' && (
        <div className="py-6">
          <Contact lang={lang} />
        </div>
      )}
    </main>
  );
}
