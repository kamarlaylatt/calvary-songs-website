import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-slate-950 dark:to-slate-900 flex flex-col">
      {/* Main Landing Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-100/50 via-white/30 to-amber-50/50 dark:from-slate-950 dark:via-slate-900/80 dark:to-slate-950" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-200/30 dark:bg-amber-900/20 rounded-full blur-3xl" />
          
          {/* Floating music notes */}
          <div className="absolute top-[15%] left-[10%] text-amber-400/30 dark:text-amber-500/20 text-4xl sm:text-5xl animate-pulse">♪</div>
          <div className="absolute top-[25%] right-[15%] text-amber-400/25 dark:text-amber-500/15 text-5xl sm:text-6xl animate-pulse" style={{animationDelay: '1s'}}>♫</div>
          <div className="absolute bottom-[30%] left-[15%] text-amber-400/20 dark:text-amber-500/10 text-3xl sm:text-4xl animate-pulse" style={{animationDelay: '2s'}}>♪</div>
          <div className="absolute bottom-[20%] right-[10%] text-amber-400/30 dark:text-amber-500/15 text-4xl sm:text-5xl animate-pulse" style={{animationDelay: '0.5s'}}>♬</div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-lg mx-auto py-12">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl flex items-center justify-center shadow-xl shadow-amber-500/30">
              <Image 
                src="/logo.svg" 
                alt="Calvary Songs Logo" 
                width={80} 
                height={80} 
                className="w-16 h-16 sm:w-20 sm:h-20"
                priority
              />
            </div>
          </div>

          {/* App Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Calvary Songs
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 px-4">
            Your Complete Christian Songbook
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mb-12 px-4 leading-relaxed">
            Discover thousands of Christian songs, hymns, praise and worship music all in one place. 
            Search, browse, and sing along anywhere, anytime.
          </p>

          {/* Get Started Button */}
          <Link 
            href="/songs"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 hover:scale-105 active:scale-95"
          >
            <span>Get Started</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>

          {/* App Store Links */}
          <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a 
              href="https://play.google.com/store/apps/details?id=com.kamarehtha96.calvary" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white px-5 py-3 rounded-xl transition-colors text-sm"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
              </svg>
              <span>Google Play</span>
            </a>
            <div className="inline-flex items-center gap-2 bg-slate-400/50 dark:bg-slate-600/50 text-slate-600 dark:text-slate-400 px-5 py-3 rounded-xl text-sm cursor-not-allowed">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <span>App Store (Soon)</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 text-center text-slate-500 dark:text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Calvary Songs. Made with ❤️ for the glory of God.</p>
      </footer>
    </div>
  );
}
