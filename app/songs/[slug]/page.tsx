"use client";

import DOMPurify from "dompurify";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

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
  music_notes?: string;
}

// Icon Components
const BackIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const MusicNoteIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
  </svg>
);

// API base URL
const API_BASE_URL = "https://api.calvarysong.com/api";

// YouTube URL patterns: youtube.com/watch?v=ID, youtube.com/embed/ID, youtu.be/ID
const YOUTUBE_REGEX = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;

// Extract YouTube video ID from URL
function getYouTubeId(url: string): string | null {
  const match = url.match(YOUTUBE_REGEX);
  return match ? match[1] : null;
}

export default function SongDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [song, setSong] = useState<Song | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"lyrics" | "music">("lyrics");

  // Sanitize HTML content to prevent XSS attacks
  const sanitizedLyrics = useMemo(() => {
    if (!song?.lyrics) return "";
    return DOMPurify.sanitize(song.lyrics);
  }, [song?.lyrics]);

  const sanitizedMusicNotes = useMemo(() => {
    if (!song?.music_notes) return "";
    return DOMPurify.sanitize(song.music_notes);
  }, [song?.music_notes]);

  // Fetch song details
  const fetchSong = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/songs/${slug}`);
      
      if (!response.ok) {
        throw new Error("Song not found");
      }
      
      const data = await response.json();
      setSong(data);
    } catch (err) {
      console.error("Error fetching song:", err);
      setError(err instanceof Error ? err.message : "Failed to load song");
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    if (slug) {
      fetchSong();
    }
  }, [slug, fetchSong]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-amber-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error || !song) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex flex-col items-center justify-center p-4">
        <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">{error || "Song not found"}</p>
        <Link
          href="/songs"
          className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors"
        >
          Back to Songs
        </Link>
      </div>
    );
  }

  const youtubeId = song.youtube ? getYouTubeId(song.youtube) : null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Header */}
      <header className="bg-amber-500 sticky top-0 z-30">
        <div className="flex items-center gap-4 px-4 py-4">
          <Link
            href="/songs"
            className="p-2 text-white hover:bg-amber-600 rounded-lg transition-colors"
            aria-label="Back to songs"
          >
            <BackIcon />
          </Link>
          <div className="flex-1 min-w-0">
            <h1 className="text-xl font-semibold text-white truncate">{song.title}</h1>
            <p className="text-amber-100 text-sm">ID: {song.id}</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-4">
        {/* Categories */}
        {song.categories && song.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {song.categories.map((category) => (
              <span
                key={category.id}
                className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-sm font-medium rounded-full"
              >
                {category.name}
              </span>
            ))}
          </div>
        )}

        {/* Song Writer */}
        {song.song_writer && (
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            <span className="font-medium">Writer:</span> {song.song_writer}
          </p>
        )}

        {/* YouTube Video */}
        {youtubeId && (
          <div className="mb-6">
            <div className="aspect-video rounded-xl overflow-hidden bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title={song.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <a
              href={song.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-red-600 dark:text-red-400 hover:underline"
            >
              <YouTubeIcon />
              Watch on YouTube
            </a>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 mb-4 border-b border-gray-200 dark:border-slate-700">
          <button
            onClick={() => setActiveTab("lyrics")}
            className={`px-4 py-3 font-medium transition-colors relative ${
              activeTab === "lyrics"
                ? "text-amber-600 dark:text-amber-400"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            Lyrics
            {activeTab === "lyrics" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500" />
            )}
          </button>
          {song.music_notes && (
            <button
              onClick={() => setActiveTab("music")}
              className={`px-4 py-3 font-medium transition-colors relative flex items-center gap-2 ${
                activeTab === "music"
                  ? "text-amber-600 dark:text-amber-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              <MusicNoteIcon />
              Music Notes
              {activeTab === "music" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500" />
              )}
            </button>
          )}
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-6">
          {activeTab === "lyrics" && sanitizedLyrics && (
            <div 
              className="prose prose-gray dark:prose-invert max-w-none leading-relaxed"
              dangerouslySetInnerHTML={{ __html: sanitizedLyrics }}
            />
          )}
          {activeTab === "lyrics" && !sanitizedLyrics && (
            <p className="text-gray-500 dark:text-gray-400 text-center py-8">
              No lyrics available for this song.
            </p>
          )}
          {activeTab === "music" && sanitizedMusicNotes && (
            <div 
              className="prose prose-gray dark:prose-invert max-w-none font-mono text-sm leading-relaxed whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: sanitizedMusicNotes }}
            />
          )}
        </div>

        {/* Languages */}
        {song.song_languages && song.song_languages.length > 0 && (
          <div className="mt-6 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>Available in:</span>
            {song.song_languages.map((lang, index) => (
              <span key={lang.id}>
                {lang.name}
                {index < song.song_languages!.length - 1 && ", "}
              </span>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
