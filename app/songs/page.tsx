"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

// Types
interface Song {
  id: string;
  slug: string;
  title: string;
  youtube?: string;
  description?: string;
  song_writer?: string;
  style?: { id: string; name: string };
  categories?: Array<{ id: string; name: string }>;
  song_languages?: Array<{ id: string; name: string }>;
  lyrics?: string;
}

interface PaginatedResponse {
  data: Song[];
  current_page: number;
  last_page: number;
  total: number;
}

// Icon Components
const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const MusicNoteIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
  </svg>
);

const HomeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const InfoIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

// API base URL
const API_BASE_URL = "https://api.calvarysong.com/api";

// Helper function to strip HTML tags
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
}

export default function SongsPage() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: 1,
    total: 0
  });

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Fetch songs
  const fetchSongs = useCallback(async (page: number = 1, search: string = "") => {
    if (page === 1) {
      setLoading(true);
    } else {
      setLoadingMore(true);
    }

    try {
      const params = new URLSearchParams({
        limit: "15",
        page: page.toString(),
      });
      
      if (search.trim()) {
        params.append("search", search.trim());
      }

      const response = await fetch(`${API_BASE_URL}/songs?${params}`);
      const data: PaginatedResponse = await response.json();

      if (page === 1) {
        setSongs(data.data);
      } else {
        setSongs(prev => [...prev, ...data.data]);
      }

      setPagination({
        current_page: data.current_page,
        last_page: data.last_page,
        total: data.total
      });
    } catch (error) {
      console.error("Error fetching songs:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, []);

  // Load songs on mount and when search changes
  useEffect(() => {
    fetchSongs(1, debouncedSearch);
  }, [debouncedSearch, fetchSongs]);

  // Load more handler
  const handleLoadMore = () => {
    if (pagination.current_page < pagination.last_page && !loadingMore) {
      fetchSongs(pagination.current_page + 1, debouncedSearch);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Sidebar Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200 dark:border-slate-700 bg-amber-500">
          <span className="text-xl font-bold text-white">Calvary Songs</span>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1 text-white hover:bg-amber-600 rounded"
            aria-label="Close sidebar"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          <Link 
            href="/" 
            className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            <HomeIcon />
            <span>Home</span>
          </Link>
          <div className="flex items-center gap-3 px-4 py-3 text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded-lg font-medium">
            <MusicNoteIcon />
            <span>Songs</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 text-gray-400 dark:text-gray-500 cursor-not-allowed rounded-lg">
            <HeartIcon />
            <span>Favorites</span>
            <span className="text-xs bg-gray-200 dark:bg-slate-700 px-2 py-0.5 rounded">Soon</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 text-gray-400 dark:text-gray-500 cursor-not-allowed rounded-lg">
            <InfoIcon />
            <span>About</span>
            <span className="text-xs bg-gray-200 dark:bg-slate-700 px-2 py-0.5 rounded">Soon</span>
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-slate-700">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            © {new Date().getFullYear()} Calvary Songs
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="h-16 bg-amber-500 flex items-center px-4 gap-4 sticky top-0 z-30">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 text-white hover:bg-amber-600 rounded-lg"
            aria-label="Open sidebar"
          >
            <MenuIcon />
          </button>
          <h1 className="text-xl font-semibold text-white">Songs</h1>
        </header>

        {/* Search Bar */}
        <div className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 p-4">
          <div className="relative max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search by title, lyrics, or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                aria-label="Clear search"
              >
                <CloseIcon />
              </button>
            )}
          </div>
        </div>

        {/* Songs List */}
        <main className="flex-1 p-4 overflow-auto">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-amber-500 border-t-transparent"></div>
            </div>
          ) : songs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                {debouncedSearch ? "No songs found" : "No songs available"}
              </p>
              <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
                {debouncedSearch ? "Try a different search term" : "Check back later"}
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-3 max-w-4xl mx-auto">
                {songs.map((song) => (
                  <Link
                    key={song.id}
                    href={`/songs/${song.slug}`}
                    className="block bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-4 hover:border-amber-300 dark:hover:border-amber-600 hover:shadow-md transition-all"
                  >
                    {/* Song Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-lg truncate">
                          {song.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                          ID: {song.id}
                        </p>
                      </div>
                      {song.youtube && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-medium rounded-full">
                          <YouTubeIcon />
                          Video
                        </span>
                      )}
                    </div>

                    {/* Categories */}
                    {song.categories && song.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {song.categories.slice(0, 3).map((category) => (
                          <span
                            key={category.id}
                            className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                          >
                            {category.name}
                          </span>
                        ))}
                        {song.categories.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                            +{song.categories.length - 3} more
                          </span>
                        )}
                      </div>
                    )}

                    {/* Lyrics Preview */}
                    {song.lyrics && (
                      <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {stripHtml(song.lyrics).slice(0, 150)}...
                      </p>
                    )}
                  </Link>
                ))}
              </div>

              {/* Load More */}
              {pagination.current_page < pagination.last_page && (
                <div className="flex justify-center mt-6">
                  <button
                    onClick={handleLoadMore}
                    disabled={loadingMore}
                    className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loadingMore ? (
                      <span className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                        Loading...
                      </span>
                    ) : (
                      "Load More"
                    )}
                  </button>
                </div>
              )}

              {/* Results Count */}
              <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-4">
                Showing {songs.length} of {pagination.total} songs
              </p>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
