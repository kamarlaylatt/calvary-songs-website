"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { songs, categories } from "@/lib/data/songs";
import { storageUtils } from "@/lib/utils/storage";

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const HeartIcon = ({ filled }: { filled?: boolean }) => (
  <svg className="w-5 h-5" fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

export default function SongsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<number[]>([]);

  useEffect(() => {
    setFavorites(storageUtils.getFavorites());
    setRecentlyViewed(storageUtils.getRecentlyViewed());
  }, []);

  const filteredSongs = useMemo(() => {
    return songs.filter((song) => {
      const matchesSearch =
        searchQuery === "" ||
        song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.number.toString().includes(searchQuery) ||
        song.lyrics.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || song.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const recentSongs = useMemo(() => {
    return recentlyViewed
      .map((id) => songs.find((s) => s.id === id))
      .filter(Boolean)
      .slice(0, 5);
  }, [recentlyViewed]);

  const favoriteSongs = useMemo(() => {
    return favorites
      .map((id) => songs.find((s) => s.id === id))
      .filter(Boolean);
  }, [favorites]);

  const toggleFavorite = (songId: number) => {
    if (favorites.includes(songId)) {
      storageUtils.removeFavorite(songId);
      setFavorites(storageUtils.getFavorites());
    } else {
      storageUtils.addFavorite(songId);
      setFavorites(storageUtils.getFavorites());
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-amber-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <svg className="w-8 h-8 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
              <span className="text-xl font-bold text-slate-900 dark:text-white">Calvary Songs</span>
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-600 dark:text-slate-400">
                {filteredSongs.length} songs
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <SearchIcon />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, lyrics, or song number..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.name
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-amber-300 dark:hover:border-amber-600"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Recently Viewed */}
        {recentSongs.length > 0 && searchQuery === "" && selectedCategory === "All" && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Recently Viewed
            </h2>
            <div className="grid gap-4">
              {recentSongs.map((song: any) => (
                <Link
                  key={song.id}
                  href={`/songs/${song.id}`}
                  className="group bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 hover:border-amber-300 dark:hover:border-amber-600 transition-all hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="text-sm font-bold text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 px-3 py-1 rounded-lg">
                        #{song.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                          {song.title}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{song.category}</p>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleFavorite(song.id);
                      }}
                      className="text-slate-400 hover:text-amber-500 transition-colors"
                    >
                      <HeartIcon filled={favorites.includes(song.id)} />
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Favorites */}
        {favoriteSongs.length > 0 && searchQuery === "" && selectedCategory === "All" && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Your Favorites
            </h2>
            <div className="grid gap-4">
              {favoriteSongs.map((song: any) => (
                <Link
                  key={song.id}
                  href={`/songs/${song.id}`}
                  className="group bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 hover:border-amber-300 dark:hover:border-amber-600 transition-all hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="text-sm font-bold text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 px-3 py-1 rounded-lg">
                        #{song.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                          {song.title}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{song.category}</p>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleFavorite(song.id);
                      }}
                      className="text-amber-500 hover:text-amber-600 transition-colors"
                    >
                      <HeartIcon filled />
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* All Songs List */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            {searchQuery || selectedCategory !== "All" ? "Search Results" : "All Songs"}
          </h2>
          
          {filteredSongs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-500 dark:text-slate-400 text-lg">
                No songs found. Try a different search term or category.
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {filteredSongs.map((song) => (
                <Link
                  key={song.id}
                  href={`/songs/${song.id}`}
                  className="group bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 hover:border-amber-300 dark:hover:border-amber-600 transition-all hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="text-sm font-bold text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 px-3 py-1 rounded-lg">
                        #{song.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                          {song.title}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{song.category}</p>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleFavorite(song.id);
                      }}
                      className={`transition-colors ${
                        favorites.includes(song.id)
                          ? "text-amber-500 hover:text-amber-600"
                          : "text-slate-400 hover:text-amber-500"
                      }`}
                    >
                      <HeartIcon filled={favorites.includes(song.id)} />
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
