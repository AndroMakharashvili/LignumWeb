import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useAppStore } from './hooks/useAppStore';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ArtworkDetailModal from './components/ArtworkDetailModal';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const store = useAppStore();

  return (
    <div className={`min-h-screen bg-[#FAF5F0] text-[#2D251E] font-sans flex flex-col justify-between selection:bg-[#D7B18E]/40 selection:text-[#2D251E] ${store.lang === 'ka' ? 'lang-ka' : ''}`}>
      <Header
        lang={store.lang}
        activeTab={store.activeTab}
        setActiveTab={store.setActiveTab}
        setSelectedCategory={store.setSelectedCategory}
        toggleLanguage={store.toggleLanguage}
        t={store.t}
      />

      {store.orderFinalSuccess && (
        <div className="bg-emerald-50 border-b border-emerald-300 text-emerald-800 py-3.5 px-6 text-center text-xs md:text-sm font-medium z-40 relative flex items-center justify-center gap-2">
          <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
          <span>{store.t.checkoutSuccess}</span>
        </div>
      )}

      <MainContent store={store} />
      <Footer lang={store.lang} />
      <ScrollToTop lang={store.lang} />

      {store.selectedArtwork && (
        <ArtworkDetailModal
          artwork={store.selectedArtwork}
          lang={store.lang}
          onClose={() => store.setSelectedArtwork(null)}
          isWishlisted={store.wishlist.includes(store.selectedArtwork.id)}
          onToggleWishlist={store.handleToggleWishlist}
          allArtworks={store.artworks}
          onSelectArtwork={(other) => store.handleOpenDetails(other)}
          setActiveTab={store.setActiveTab}
        />
      )}
    </div>
  );
}
