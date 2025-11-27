import Image from "next/image";

// Icon Components
const SearchIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const MusicNoteIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
  </svg>
);

const BookOpenIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const PlayIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const categories = [
  { name: "Worship", description: "Songs for worship services", icon: "🙏", color: "from-amber-500 to-amber-600" },
  { name: "Praise", description: "Upbeat praise songs", icon: "🎵", color: "from-amber-600 to-yellow-600" },
  { name: "Hymns", description: "Traditional hymns", icon: "📖", color: "from-yellow-600 to-amber-500" },
  { name: "Seasonal", description: "Christmas, Easter & more", icon: "🎄", color: "from-amber-500 to-orange-500" },
  { name: "Special", description: "Special occasion songs", icon: "✨", color: "from-yellow-500 to-amber-600" },
];

const features = [
  {
    icon: <SearchIcon />,
    title: "Powerful Search",
    description: "Find any song instantly by title, lyrics, or song number. Our smart search helps you find exactly what you need.",
  },
  {
    icon: <BookOpenIcon />,
    title: "Complete Lyrics",
    description: "Access full lyrics for every song, making it easy to sing along during worship services and personal devotion.",
  },
  {
    icon: <MusicNoteIcon />,
    title: "Music Notes",
    description: "View music notes and chords to help musicians accompany congregational singing.",
  },
  {
    icon: <GlobeIcon />,
    title: "Multiple Languages",
    description: "Songs available in multiple languages, connecting believers from different backgrounds in worship.",
  },
  {
    icon: <PlayIcon />,
    title: "YouTube Links",
    description: "Quick access to YouTube videos for learning melodies and worship preparation.",
  },
  {
    icon: <HeartIcon />,
    title: "Favorites & History",
    description: "Save your favorite songs and easily access recently viewed hymns for quick reference.",
  },
];

const testimonials = [
  {
    quote: "Calvary Songs has transformed our church worship. We can easily find and project song lyrics during services.",
    author: "Pastor David",
    role: "Church Leader",
  },
  {
    quote: "As a worship leader, having all our hymns and praise songs in one app makes preparation so much easier.",
    author: "Sarah M.",
    role: "Worship Leader",
  },
  {
    quote: "The search feature is incredible. I can find any hymn within seconds, even by just a few words of the lyrics.",
    author: "John K.",
    role: "Church Member",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-amber-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Calvary Songs Logo" width={40} height={40} className="w-10 h-10" />
              <span className="text-xl font-bold text-slate-900 dark:text-white">Calvary Songs</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-600 hover:text-amber-600 dark:text-slate-300 dark:hover:text-amber-400 transition-colors">Features</a>
              <a href="#categories" className="text-slate-600 hover:text-amber-600 dark:text-slate-300 dark:hover:text-amber-400 transition-colors">Categories</a>
              <a href="#testimonials" className="text-slate-600 hover:text-amber-600 dark:text-slate-300 dark:hover:text-amber-400 transition-colors">Testimonials</a>
              <a href="#download" className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-full font-medium transition-colors">
                Download App
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[90vh]">
        {/* Calvary Mountain Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Layered gradient sky & glow */}
          <div className="absolute inset-0 bg-linear-to-b from-amber-100 via-white/70 to-amber-50 dark:from-slate-950 dark:via-slate-900/80 dark:to-slate-950" />
          <div className="absolute inset-x-[-20%] -top-64 h-[520px] bg-linear-to-r from-amber-200/70 via-rose-200/50 to-sky-200/60 dark:from-amber-500/25 dark:via-rose-500/20 dark:to-sky-500/30 blur-3xl opacity-70" />
          <div className="absolute inset-x-[-10%] bottom-[-45%] h-[600px] bg-linear-to-t from-amber-200/30 via-amber-100/5 to-transparent dark:from-amber-900/30 dark:via-amber-900/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-70 dark:opacity-40 mix-blend-screen"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 25%, rgba(251,191,36,0.35), transparent 55%), radial-gradient(circle at 75% 10%, rgba(248,250,252,0.8), transparent 50%), radial-gradient(circle at 60% 80%, rgba(251,191,36,0.25), transparent 45%)",
            }}
          />
          {/* Sun/Light glow behind cross */}
          <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[600px] h-[600px]">
            <div className="absolute inset-0 bg-gradient-radial from-amber-300 via-amber-200 to-transparent rounded-full blur-3xl opacity-50 dark:opacity-25" />
          </div>
          
          {/* Beautiful Calvary Scene SVG */}
          <svg className="absolute bottom-0 left-0 right-0 w-full h-[450px] sm:h-[500px] md:h-[550px]" viewBox="0 0 1440 550" preserveAspectRatio="xMidYMax meet">
            <defs>
              {/* Gradients */}
              <linearGradient id="sunGlow" cx="50%" cy="30%" r="50%" fx="50%" fy="30%">
                <stop offset="0%" stopColor="#fcd34d" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="mountainBack" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#d97706" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#92400e" stopOpacity="0.25" />
              </linearGradient>
              <linearGradient id="mountainMid" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#b45309" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#78350f" stopOpacity="0.35" />
              </linearGradient>
              <linearGradient id="calvaryHill" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#92400e" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#451a03" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="crossGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#78350f" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#451a03" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="rayGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#fcd34d" stopOpacity="0" />
                <stop offset="100%" stopColor="#fcd34d" stopOpacity="0.5" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Sun circle behind cross */}
            <circle cx="720" cy="180" r="120" fill="url(#sunGlow)" />
            <circle cx="720" cy="180" r="80" fill="#fcd34d" opacity="0.15" />
            
            {/* Light rays emanating from behind cross */}
            <g opacity="0.4">
              <polygon points="720,180 680,0 760,0" fill="url(#rayGradient)" />
              <polygon points="720,180 580,30 640,20" fill="url(#rayGradient)" />
              <polygon points="720,180 800,20 860,30" fill="url(#rayGradient)" />
              <polygon points="720,180 500,80 540,60" fill="url(#rayGradient)" />
              <polygon points="720,180 900,60 940,80" fill="url(#rayGradient)" />
            </g>
            
            {/* Distant mountain range */}
            <path d="M0 550 L0 380 
              Q80 340 160 360 
              Q240 310 340 350 
              Q420 290 520 340 
              Q600 280 700 330 
              Q800 270 900 320 
              Q1000 260 1100 310 
              Q1200 280 1300 340 
              Q1380 310 1440 360 
              L1440 550 Z" 
              fill="url(#mountainBack)" />
            
            {/* Middle mountain range */}
            <path d="M0 550 L0 420 
              Q120 380 240 400 
              Q360 340 480 390 
              Q580 320 680 370 
              Q780 310 880 360 
              Q980 330 1100 380 
              Q1220 350 1340 400 
              Q1400 380 1440 420 
              L1440 550 Z" 
              fill="url(#mountainMid)" />
            
            {/* Calvary Hill - prominent center hill */}
            <path d="M380 550 
              Q400 520 450 470 
              Q500 410 580 360 
              Q650 310 720 290 
              Q790 310 860 360 
              Q940 410 990 470 
              Q1040 520 1060 550 Z" 
              fill="url(#calvaryHill)" />
            
            {/* Rocky texture on Calvary hill */}
            <g opacity="0.2">
              <ellipse cx="550" cy="480" rx="40" ry="15" fill="#451a03" />
              <ellipse cx="720" cy="420" rx="50" ry="20" fill="#451a03" />
              <ellipse cx="890" cy="480" rx="40" ry="15" fill="#451a03" />
            </g>
            
            {/* Center Cross - Main, tallest */}
            <g filter="url(#glow)">
              {/* Cross shadow */}
              <rect x="708" y="115" width="44" height="195" rx="3" fill="#451a03" opacity="0.3" transform="translate(8, 8)" />
              {/* Cross vertical beam */}
              <rect x="700" y="100" width="40" height="200" rx="4" fill="url(#crossGradient)" />
              {/* Cross horizontal beam */}
              <rect x="650" y="145" width="140" height="35" rx="4" fill="url(#crossGradient)" />
              {/* Cross wood grain detail */}
              <line x1="720" y1="105" x2="720" y2="295" stroke="#451a03" strokeWidth="1" opacity="0.3" />
              <line x1="710" y1="105" x2="710" y2="295" stroke="#5c3a0f" strokeWidth="0.5" opacity="0.2" />
              <line x1="730" y1="105" x2="730" y2="295" stroke="#5c3a0f" strokeWidth="0.5" opacity="0.2" />
            </g>
            
            {/* Left Cross */}
            <g>
              {/* Shadow */}
              <rect x="525" y="205" width="32" height="150" rx="3" fill="#451a03" opacity="0.2" transform="translate(5, 5) rotate(-8, 540, 280)" />
              {/* Vertical beam - slightly angled */}
              <rect x="520" y="195" width="30" height="145" rx="3" fill="url(#crossGradient)" opacity="0.85" transform="rotate(-8, 535, 267)" />
              {/* Horizontal beam */}
              <rect x="490" y="230" width="90" height="26" rx="3" fill="url(#crossGradient)" opacity="0.85" transform="rotate(-8, 535, 243)" />
            </g>
            
            {/* Right Cross */}
            <g>
              {/* Shadow */}
              <rect x="890" y="205" width="32" height="150" rx="3" fill="#451a03" opacity="0.2" transform="translate(5, 5) rotate(8, 905, 280)" />
              {/* Vertical beam - slightly angled other direction */}
              <rect x="890" y="195" width="30" height="145" rx="3" fill="url(#crossGradient)" opacity="0.85" transform="rotate(8, 905, 267)" />
              {/* Horizontal beam */}
              <rect x="860" y="230" width="90" height="26" rx="3" fill="url(#crossGradient)" opacity="0.85" transform="rotate(8, 905, 243)" />
            </g>
            
            {/* Foreground hills */}
            <path d="M0 550 L0 480 
              Q150 450 300 470 
              Q450 430 600 460 
              Q750 440 900 465 
              Q1050 440 1200 470 
              Q1350 455 1440 485 
              L1440 550 Z" 
              fill="#f59e0b" opacity="0.12" />
            
            {/* Ground grass/vegetation hints */}
            <g opacity="0.15">
              <path d="M200 510 Q210 490 220 510" fill="none" stroke="#78350f" strokeWidth="2" />
              <path d="M400 500 Q410 480 420 500" fill="none" stroke="#78350f" strokeWidth="2" />
              <path d="M600 515 Q610 495 620 515" fill="none" stroke="#78350f" strokeWidth="2" />
              <path d="M900 505 Q910 485 920 505" fill="none" stroke="#78350f" strokeWidth="2" />
              <path d="M1100 510 Q1110 490 1120 510" fill="none" stroke="#78350f" strokeWidth="2" />
              <path d="M1300 500 Q1310 480 1320 500" fill="none" stroke="#78350f" strokeWidth="2" />
            </g>
            
            {/* Birds silhouettes near the cross */}
            <g fill="#78350f" opacity="0.3">
              <path d="M580 140 Q590 135 600 140 Q590 138 580 140" />
              <path d="M560 155 Q570 150 580 155 Q570 153 560 155" />
              <path d="M850 130 Q860 125 870 130 Q860 128 850 130" />
              <path d="M880 150 Q890 145 900 150 Q890 148 880 150" />
            </g>
          </svg>
          
          {/* Floating music notes */}
          <div className="absolute top-24 left-[8%] text-amber-400/40 dark:text-amber-500/25 text-5xl animate-pulse">♪</div>
          <div className="absolute top-36 right-[12%] text-amber-400/35 dark:text-amber-500/20 text-6xl animate-pulse" style={{animationDelay: '1s'}}>♫</div>
          <div className="absolute top-52 left-[18%] text-amber-400/30 dark:text-amber-500/15 text-4xl animate-pulse" style={{animationDelay: '2s'}}>♪</div>
          <div className="absolute top-28 right-[22%] text-amber-400/40 dark:text-amber-500/20 text-5xl animate-pulse" style={{animationDelay: '0.5s'}}>♬</div>
        </div>

        <div className="max-w-7xl mx-auto relative z-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span>🎉</span>
              <span>Now available on Android • Coming soon to iOS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
              Your Complete
              <span className="block bg-linear-to-r from-amber-500 via-amber-600 to-yellow-500 bg-clip-text text-transparent">
                Christian Songbook
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Discover thousands of Christian songs, hymns, praise and worship music all in one place. 
              Search, browse, and sing along with your favorite spiritual songs anywhere, anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#download" 
                className="w-full sm:w-auto bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 flex items-center justify-center gap-2"
              >
                <span>Download Free</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              <a 
                href="#features" 
                className="w-full sm:w-auto border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-amber-500 hover:text-amber-600 dark:hover:border-amber-500 dark:hover:text-amber-400 px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Learn More</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "1000+", label: "Songs Available" },
              { value: "5+", label: "Categories" },
              { value: "10+", label: "Languages" },
              { value: "Free", label: "Forever" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">{stat.value}</p>
                <p className="text-slate-600 dark:text-slate-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Everything You Need for Worship
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Calvary Songs is packed with features designed to enhance your worship experience and make finding songs effortless.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700 hover:border-amber-300 dark:hover:border-amber-600 transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-linear-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-24 px-4 sm:px-6 lg:px-8 bg-amber-50/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Find the perfect song for every occasion. Our carefully curated categories help you discover songs that match your worship needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category, i) => (
              <div 
                key={i} 
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{category.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Loved by Churches Everywhere
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              See what worship leaders, pastors, and church members are saying about Calvary Songs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div 
                key={i} 
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700"
              >
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map((star) => (
                    <StarIcon key={star} />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed italic">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{testimonial.author}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-linear-to-br from-amber-500 via-amber-600 to-yellow-600 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
            </div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Start Worshiping Today
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
                Download Calvary Songs for free and get instant access to thousands of Christian songs, hymns, and praise music.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.kamarehtha96.calvary" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-black hover:bg-slate-900 text-white px-6 py-4 rounded-xl transition-colors"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-xs opacity-80">Get it on</p>
                    <p className="text-lg font-semibold -mt-1">Google Play</p>
                  </div>
                </a>
                <div 
                  className="inline-flex items-center justify-center gap-3 bg-slate-700 text-white px-6 py-4 rounded-xl cursor-not-allowed opacity-60"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-xs opacity-80">Coming soon on</p>
                    <p className="text-lg font-semibold -mt-1">App Store</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo.svg" alt="Calvary Songs Logo" width={40} height={40} className="w-10 h-10 bg-amber-500 rounded-xl p-1" />
                <span className="text-xl font-bold text-white">Calvary Songs</span>
              </div>
              <p className="text-slate-400 max-w-md leading-relaxed">
                Calvary Songs brings together thousands of Christian hymns, praise, and worship songs in one beautiful, 
                easy-to-use app. Perfect for personal devotion, church worship, and everything in between.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#categories" className="hover:text-white transition-colors">Categories</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#download" className="hover:text-white transition-colors">Download</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Calvary Songs. All rights reserved. Made with ❤️ for the glory of God.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
