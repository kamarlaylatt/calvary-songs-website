"use client";

export const storageUtils = {
  // Favorites
  getFavorites: (): number[] => {
    if (typeof window === "undefined") return [];
    try {
      const stored = localStorage.getItem("calvary-favorites");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  },

  addFavorite: (songId: number) => {
    const favorites = storageUtils.getFavorites();
    if (!favorites.includes(songId)) {
      favorites.push(songId);
      localStorage.setItem("calvary-favorites", JSON.stringify(favorites));
    }
  },

  removeFavorite: (songId: number) => {
    const favorites = storageUtils.getFavorites();
    const filtered = favorites.filter((id) => id !== songId);
    localStorage.setItem("calvary-favorites", JSON.stringify(filtered));
  },

  isFavorite: (songId: number): boolean => {
    return storageUtils.getFavorites().includes(songId);
  },

  // Recently Viewed
  getRecentlyViewed: (): number[] => {
    if (typeof window === "undefined") return [];
    try {
      const stored = localStorage.getItem("calvary-recent");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  },

  addRecentlyViewed: (songId: number) => {
    let recent = storageUtils.getRecentlyViewed();
    // Remove if already exists
    recent = recent.filter((id) => id !== songId);
    // Add to beginning
    recent.unshift(songId);
    // Keep only last 20
    recent = recent.slice(0, 20);
    localStorage.setItem("calvary-recent", JSON.stringify(recent));
  },
};
