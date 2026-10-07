import React, { useState, useEffect } from 'react';
import { INITIAL_ARTWORKS, TRANSLATIONS } from '../data';
import { Artwork, CustomOrderRequest } from '../types';

export function useAppStore() {
  // --- Core States ---
  const [lang, setLang] = useState<'ka' | 'en'>('ka');
  const [activeTab, setActiveTab] = useState<'Home' | 'Gallery' | 'Commission' | 'Contact'>('Home');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'views' | 'latest'>('latest');
  
  // Loading States
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [gridLoading, setGridLoading] = useState<boolean>(false);
  
  // Persistence States
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [commissions, setCommissions] = useState<CustomOrderRequest[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  
  // Modal Feedback States
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [orderFinalSuccess, setOrderFinalSuccess] = useState<boolean>(false);

  // Sync language font class to document root
  useEffect(() => {
    if (lang === 'ka') {
      document.documentElement.classList.add('lang-ka');
      document.documentElement.lang = 'ka';
    } else {
      document.documentElement.classList.remove('lang-ka');
      document.documentElement.lang = 'en';
    }
  }, [lang]);

  // Scroll to top whenever activeTab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  // Initial setup
  useEffect(() => {
    const loaderTimer = setTimeout(() => setPageLoading(false), 900);

    // Always use INITIAL_ARTWORKS from data.ts as source of truth
    setArtworks(INITIAL_ARTWORKS);
    try {
      localStorage.removeItem('artisanal_artworks');
      localStorage.removeItem('artisanal_artworks_v2');
      localStorage.removeItem('artisanal_artworks_v3');
    } catch {
      // ignore
    }

    const savedCommissions = localStorage.getItem('artisanal_commissions');
    if (savedCommissions) {
      try { setCommissions(JSON.parse(savedCommissions)); } catch { setCommissions([]); }
    }

    const savedWishlist = localStorage.getItem('artisanal_wishlist');
    if (savedWishlist) {
      try { setWishlist(JSON.parse(savedWishlist)); } catch { setWishlist([]); }
    }

    return () => clearTimeout(loaderTimer);
  }, []);

  // Helpers for Persistence
  const saveArtworksToLocal = (updatedList: Artwork[]) => {
    setArtworks(updatedList);
    localStorage.setItem('artisanal_artworks', JSON.stringify(updatedList));
  };

  const saveCommissionsToLocal = (updatedComms: CustomOrderRequest[]) => {
    setCommissions(updatedComms);
    localStorage.setItem('artisanal_commissions', JSON.stringify(updatedComms));
  };

  const saveWishlistToLocal = (updatedWl: string[]) => {
    setWishlist(updatedWl);
    localStorage.setItem('artisanal_wishlist', JSON.stringify(updatedWl));
  };

  // Handlers
  const toggleLanguage = () => setLang((prev) => (prev === 'ka' ? 'en' : 'ka'));

  const handleAddArtwork = (newArtData: Omit<Artwork, 'createdAt'>) => {
    const freshArtwork: Artwork = {
      ...newArtData,
      createdAt: new Date().toISOString().split('T')[0]
    };
    saveArtworksToLocal([freshArtwork, ...artworks]);
  };

  const handleOpenDetails = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
  };

  const handleToggleWishlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updatedWl = wishlist.includes(id) ? wishlist.filter((i) => i !== id) : [...wishlist, id];
    saveWishlistToLocal(updatedWl);
  };

  const handleAddCommission = (newRequest: CustomOrderRequest) => {
    saveCommissionsToLocal([newRequest, ...commissions]);
  };

  const handleUpdateCommissionStatus = (id: string, newStatus: 'Pending' | 'Approved' | 'Withdrawn') => {
    saveCommissionsToLocal(commissions.map((comm) => comm.id === id ? { ...comm, status: newStatus } : comm));
  };

  const handleDeleteCommission = (id: string) => {
    saveCommissionsToLocal(commissions.filter((c) => c.id !== id));
  };

  const handleSelectCategory = (categoryKey: string) => {
    if (selectedCategory === categoryKey) return;
    setGridLoading(true);
    setSelectedCategory(categoryKey);
    setTimeout(() => setGridLoading(false), 450);
  };

  const handleSortChange = (newSort: 'price-asc' | 'price-desc' | 'views' | 'latest') => {
    setGridLoading(true);
    setSortBy(newSort);
    setTimeout(() => setGridLoading(false), 350);
  };

  const handleSearchChange = (query: string) => {
    setGridLoading(true);
    setSearchQuery(query);
    setTimeout(() => setGridLoading(false), 400);
  };

  // Derived Values
  const filteredArtworks = artworks
    .filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchesQuery = 
        item.title.toLowerCase().includes(q) ||
        (item.titleEn && item.titleEn.toLowerCase().includes(q)) ||
        item.description.toLowerCase().includes(q) ||
        (item.descriptionEn && item.descriptionEn.toLowerCase().includes(q)) ||
        item.materials.some((m) => m.toLowerCase().includes(q)) ||
        (item.materialsEn && item.materialsEn.some((m) => m.toLowerCase().includes(q)));
      return matchesCategory && matchesQuery;
    })
    .sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  const featuredArtworks = [...artworks].slice(0, 3);

  const t = TRANSLATIONS[lang];

  const getCategoryCount = (catName: string) => {
    if (catName === 'All') return artworks.length;
    return artworks.filter((item) => item.category === catName).length;
  };

  return {
    lang,
    activeTab,
    setActiveTab,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    sortBy,
    pageLoading,
    gridLoading,
    artworks,
    commissions,
    wishlist,
    selectedArtwork,
    setSelectedArtwork,
    orderFinalSuccess,
    toggleLanguage,
    handleAddArtwork,
    handleOpenDetails,
    handleToggleWishlist,
    handleAddCommission,
    handleUpdateCommissionStatus,
    handleDeleteCommission,
    handleSelectCategory,
    handleSortChange,
    handleSearchChange,
    filteredArtworks,
    featuredArtworks,
    t,
    getCategoryCount
  };
}
