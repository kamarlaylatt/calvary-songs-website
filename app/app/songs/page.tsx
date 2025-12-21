"use client"

import { useMemo, useState } from "react"
import { Search, SlidersHorizontal, Video } from "lucide-react"

import { cn } from "@/lib/utils"

type Song = {
    id: number
    title: string
    lyricsPreview: string
    tags: string[]
    videoUrl?: string
    updatedAt: string
}

const SONGS: Song[] = [
    {
        id: 344,
        title: "ဂုဏ်တော်များ",
        lyricsPreview:
            "ကောင်းကြီးထံ ပျော်ရွှင်စွာလှည့်အောင် စိတ်ပေါ့ပါး၍… သခင့်နာမတော်ကို ချီးမွမ်းကာ သီဆိုကြစို့…",
        tags: ["Gospel"],
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        updatedAt: "2025-12-20",
    },
    {
        id: 342,
        title: "ပြည်သူ့မင်းကြီး သခင်",
        lyricsPreview:
            "သခင့်ကျေးဇူး အံ့ဩဖွယ်ကောင်းလေ… ငါ့ကိုကယ်တင်တော်မူသော မေတ္တာတော်ကြောင့်…",
        tags: ["Worship"],
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        updatedAt: "2025-12-19",
    },
    {
        id: 265,
        title: "သခင်ကောင်းကင်ပြည်ထဲဝင်",
        lyricsPreview:
            "C Dm G … (chords) သခင်ကောင်းကင်ပြည်ထဲဝင်… ကယ်တင်ရှင်၏ ချစ်ခြင်းမေတ္တာ…",
        tags: ["Christmas", "Gospel"],
        updatedAt: "2025-12-10",
    },
    {
        id: 128,
        title: "Amazing Grace",
        lyricsPreview:
            "Amazing grace, how sweet the sound, that saved a wretch like me…",
        tags: ["Hymn"],
        updatedAt: "2025-12-08",
    },
    {
        id: 77,
        title: "How Great Thou Art",
        lyricsPreview:
            "O Lord my God, when I in awesome wonder consider all the works Thy hand hath made…",
        tags: ["Hymn"],
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        updatedAt: "2025-12-01",
    },
    {
        id: 19,
        title: "Blessed Assurance",
        lyricsPreview:
            "Blessed assurance, Jesus is mine! Oh, what a foretaste of glory divine…",
        tags: ["Hymn"],
        updatedAt: "2025-11-22",
    },
]

type TabKey = "all" | "recent"

function clampStyle(lines: number) {
    return {
        display: "-webkit-box",
        WebkitLineClamp: lines,
        WebkitBoxOrient: "vertical" as const,
        overflow: "hidden",
    }
}

export default function SongsPage() {
    const [query, setQuery] = useState("")
    const [tab, setTab] = useState<TabKey>("all")

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase()
        if (!q) return SONGS
        return SONGS.filter((s) => {
            const haystack = `${s.id} ${s.title} ${s.lyricsPreview} ${s.tags.join(" ")}`.toLowerCase()
            return haystack.includes(q)
        })
    }, [query])

    const recent = useMemo(() => {
        return [...SONGS]
            .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
            .slice(0, 5)
    }, [])

    const visibleSongs = tab === "recent" ? recent : filtered

    return (
        <div className="space-y-4">
            <div className="space-y-1">
                <h1 className="text-xl font-semibold tracking-tight">Songs</h1>
                <p className="text-sm text-muted-foreground">Search by title, lyrics, or ID.</p>
            </div>

            {/* Search */}
            <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by title, lyrics, or ID…"
                    className={cn(
                        "h-11 w-full rounded-xl border bg-background pl-10 pr-12 text-sm",
                        "placeholder:text-muted-foreground",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    )}
                />
                <button
                    type="button"
                    aria-label="Filters (coming soon)"
                    className={cn(
                        "absolute right-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg border bg-background",
                        "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    )}
                >
                    <SlidersHorizontal className="h-5 w-5" />
                </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-6 border-b">
                <button
                    type="button"
                    onClick={() => setTab("all")}
                    className={cn(
                        "relative -mb-px pb-3 text-sm font-medium",
                        tab === "all" ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                >
                    All Songs
                    {tab === "all" ? <span className="absolute inset-x-0 -bottom-px h-0.5 bg-primary" /> : null}
                </button>

                <button
                    type="button"
                    onClick={() => setTab("recent")}
                    className={cn(
                        "relative -mb-px pb-3 text-sm font-medium",
                        tab === "recent" ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                >
                    Recent (5)
                    {tab === "recent" ? <span className="absolute inset-x-0 -bottom-px h-0.5 bg-primary" /> : null}
                </button>
            </div>

            {/* List */}
            <div className="grid gap-3">
                {visibleSongs.map((song) => (
                    <article key={song.id} className="rounded-2xl border bg-card p-4 text-card-foreground">
                        <div className="flex items-start gap-3">
                            <div className="min-w-0 flex-1">
                                <div className="flex items-start gap-3">
                                    <div className="min-w-0">
                                        <h2 className="truncate text-lg font-semibold leading-tight">{song.title}</h2>
                                        <div className="mt-1 text-sm text-muted-foreground">ID: {song.id}</div>
                                    </div>
                                    <div className="ml-auto shrink-0">
                                        {song.videoUrl ? (
                                            <a
                                                href={song.videoUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className={cn(
                                                    "inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 text-sm",
                                                    "hover:bg-accent hover:text-accent-foreground",
                                                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                                                )}
                                            >
                                                <Video className="h-4 w-4" />
                                                Video
                                            </a>
                                        ) : null}
                                    </div>
                                </div>

                                <div className="mt-3 flex flex-wrap gap-2">
                                    {song.tags.map((tag) => (
                                        <span key={tag} className="rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="mt-3 text-sm text-muted-foreground" style={clampStyle(3)}>
                                    {song.lyricsPreview}
                                </p>
                            </div>
                        </div>
                    </article>
                ))}

                {visibleSongs.length === 0 ? (
                    <div className="rounded-2xl border bg-card p-6 text-center text-sm text-muted-foreground">
                        No songs match your search.
                    </div>
                ) : null}
            </div>
        </div>
    )
}