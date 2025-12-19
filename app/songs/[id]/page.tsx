"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { songs } from "@/lib/data/songs";
import { storageUtils } from "@/lib/utils/storage";

const HeartIcon = ({ filled }: { filled?: boolean }) => (
  <svg className="w-6 h-6" fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const BackIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const PlayIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function SongDetailPage() {
  const params = useParams();
  const router = useRouter();
  const songId = parseInt(params.id as string);
  const song = songs.find((s) => s.id === songId);

  const [isFavorite, setIsFavorite] = useState(() => {
    if (typeof window !== "undefined" && song) {
      storageUtils.addRecentlyViewed(song.id);
      return storageUtils.isFavorite(song.id);
    }
    return false;
  });

  const toggleFavorite = () => {
    if (song) {
      if (isFavorite) {
        storageUtils.removeFavorite(song.id);
      } else {
        storageUtils.addFavorite(song.id);
      }
      setIsFavorite(!isFavorite);
    }
  };

  if (!song) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-slate-950 dark:to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Song Not Found</h1>
          <Link href="/songs" className="text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300">
            Back to Songs
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = songs.findIndex((s) => s.id === songId);
  const prevSong = currentIndex > 0 ? songs[currentIndex - 1] : null;
  const nextSong = currentIndex < songs.length - 1 ? songs[currentIndex + 1] : null;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MusicComposition",
    "name": song.title,
    "genre": song.category,
    "inLanguage": song.language,
    "position": song.number,
    "text": song.lyrics,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-amber-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-slate-600 hover:text-amber-600 dark:text-slate-300 dark:hover:text-amber-400 transition-colors"
            >
              <BackIcon />
              <span className="font-medium">Back</span>
            </button>
            <button
              onClick={toggleFavorite}
              className={`p-2 rounded-full transition-all ${
                isFavorite
                  ? "text-amber-500 hover:text-amber-600 bg-amber-100 dark:bg-amber-900/30"
                  : "text-slate-400 hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/20"
              }`}
            >
              <HeartIcon filled={isFavorite} />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Song Header */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-lg font-bold text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 px-4 py-2 rounded-xl">
              #{song.number}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                {song.title}
              </h1>
              <div className="flex flex-wrap gap-3">
                <span className="text-sm px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full">
                  {song.category}
                </span>
                <span className="text-sm px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full">
                  {song.language}
                </span>
              </div>
            </div>
          </div>

          {song.youtubeUrl && (
            <a
              href={song.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              <PlayIcon />
              Watch on YouTube
            </a>
          )}
        </div>

        {/* Lyrics */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Lyrics</h2>
          <div className="prose dark:prose-invert max-w-none">
            <pre className="whitespace-pre-wrap font-sans text-slate-700 dark:text-slate-300 leading-relaxed">
              {song.lyrics}
            </pre>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-4">
          {prevSong ? (
            <Link
              href={`/songs/${prevSong.id}`}
              className="flex-1 bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 hover:border-amber-300 dark:hover:border-amber-600 transition-all hover:shadow-lg group"
            >
              <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Previous</div>
              <div className="font-semibold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                {prevSong.title}
              </div>
            </Link>
          ) : (
            <div className="flex-1"></div>
          )}
          {nextSong ? (
            <Link
              href={`/songs/${nextSong.id}`}
              className="flex-1 bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 hover:border-amber-300 dark:hover:border-amber-600 transition-all hover:shadow-lg group text-right"
            >
              <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Next</div>
              <div className="font-semibold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                {nextSong.title}
              </div>
            </Link>
          ) : (
            <div className="flex-1"></div>
          )}
        </div>
      </div>
    </div>
  );
}
