"use client"

import { useMemo, useState } from "react"
import { Search, SlidersHorizontal, Video } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Song = {
    id: number
    title: string
    lyricsPreview: string
    tags: string[]
    category: string
    style: string
    language: string
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
        category: "Worship",
        style: "Gospel",
        language: "Myanmar",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        updatedAt: "2025-12-20",
    },
    {
        id: 342,
        title: "ပြည်သူ့မင်းကြီး သခင်",
        lyricsPreview:
            "သခင့်ကျေးဇူး အံ့ဩဖွယ်ကောင်းလေ… ငါ့ကိုကယ်တင်တော်မူသော မေတ္တာတော်ကြောင့်…",
        tags: ["Worship"],
        category: "Worship",
        style: "Worship",
        language: "Myanmar",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        updatedAt: "2025-12-19",
    },
    {
        id: 265,
        title: "သခင်ကောင်းကင်ပြည်ထဲဝင်",
        lyricsPreview:
            "C Dm G … (chords) သခင်ကောင်းကင်ပြည်ထဲဝင်… ကယ်တင်ရှင်၏ ချစ်ခြင်းမေတ္တာ…",
        tags: ["Christmas", "Gospel"],
        category: "Seasonal",
        style: "Gospel",
        language: "Myanmar",
        updatedAt: "2025-12-10",
    },
    {
        id: 128,
        title: "Amazing Grace",
        lyricsPreview:
            "Amazing grace, how sweet the sound, that saved a wretch like me…",
        tags: ["Hymn"],
        category: "Hymns",
        style: "Hymn",
        language: "English",
        updatedAt: "2025-12-08",
    },
    {
        id: 77,
        title: "How Great Thou Art",
        lyricsPreview:
            "O Lord my God, when I in awesome wonder consider all the works Thy hand hath made…",
        tags: ["Hymn"],
        category: "Hymns",
        style: "Hymn",
        language: "English",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        updatedAt: "2025-12-01",
    },
    {
        id: 19,
        title: "Blessed Assurance",
        lyricsPreview:
            "Blessed assurance, Jesus is mine! Oh, what a foretaste of glory divine…",
        tags: ["Hymn"],
        category: "Hymns",
        style: "Hymn",
        language: "English",
        updatedAt: "2025-11-22",
    },
]

type TabKey = "all" | "recent"

const ALL_VALUE = "__all__"

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
    const [filterOpen, setFilterOpen] = useState(false)
    const [category, setCategory] = useState<string>("")
    const [style, setStyle] = useState<string>("")
    const [language, setLanguage] = useState<string>("")
    const [draftCategory, setDraftCategory] = useState<string>("")
    const [draftStyle, setDraftStyle] = useState<string>("")
    const [draftLanguage, setDraftLanguage] = useState<string>("")

    const categories = useMemo(() => {
        return Array.from(new Set(SONGS.map((s) => s.category))).sort((a, b) => a.localeCompare(b))
    }, [])

    const styles = useMemo(() => {
        return Array.from(new Set(SONGS.map((s) => s.style))).sort((a, b) => a.localeCompare(b))
    }, [])

    const languages = useMemo(() => {
        return Array.from(new Set(SONGS.map((s) => s.language))).sort((a, b) => a.localeCompare(b))
    }, [])

    const recent = useMemo(() => {
        return [...SONGS]
            .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
            .slice(0, 5)
    }, [])

    const baseSongs = tab === "recent" ? recent : SONGS

    const visibleSongs = useMemo(() => {
        const q = query.trim().toLowerCase()

        return baseSongs.filter((s) => {
            if (category && s.category !== category) return false
            if (style && s.style !== style) return false
            if (language && s.language !== language) return false
            if (!q) return true

            const haystack = `${s.id} ${s.title} ${s.lyricsPreview} ${s.tags.join(" ")}`.toLowerCase()
            return haystack.includes(q)
        })
    }, [baseSongs, category, language, query, style])

    function openFilters() {
        setDraftCategory(category)
        setDraftStyle(style)
        setDraftLanguage(language)
        setFilterOpen(true)
    }

    function cancelFilters() {
        setDraftCategory(category)
        setDraftStyle(style)
        setDraftLanguage(language)
        setFilterOpen(false)
    }

    function applyFilters() {
        setCategory(draftCategory)
        setStyle(draftStyle)
        setLanguage(draftLanguage)
        setFilterOpen(false)
    }

    return (
        <div className="space-y-4">
            <div className="space-y-1">
                <h1 className="text-xl font-semibold tracking-tight">Songs</h1>
                <p className="text-sm text-muted-foreground">Search by title, lyrics, or ID.</p>
            </div>

            {/* Search */}
            <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by title, lyrics, or ID…" className="pl-10 pr-12" />
                <Button
                    variant="outline"
                    aria-label="Filters"
                    className="absolute right-2 top-1/2 h-9 w-9 -translate-y-1/2 rounded-lg p-0"
                    onClick={() => (filterOpen ? cancelFilters() : openFilters())}
                >
                    <SlidersHorizontal className="h-5 w-5" />
                </Button>
            </div>

            {/* Tabs */}
            <Tabs value={tab} onValueChange={(v) => setTab(v as TabKey)}>
                <TabsList className="w-full justify-start">
                    <TabsTrigger value="all">All Songs</TabsTrigger>
                    <TabsTrigger value="recent">Recent (5)</TabsTrigger>
                </TabsList>
            </Tabs>

            {/* Filter dialog */}
            <Dialog open={filterOpen} onOpenChange={(open) => (open ? openFilters() : cancelFilters())}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Filters</DialogTitle>
                    </DialogHeader>

                    <div className="mt-2 space-y-4">
                        <div className="space-y-2">
                            <div className="text-sm font-semibold">Category</div>
                            <Select
                                value={draftCategory || ALL_VALUE}
                                onValueChange={(v) => setDraftCategory(v === ALL_VALUE ? "" : v)}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="All Categories" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value={ALL_VALUE}>All Categories</SelectItem>
                                    {categories.map((c) => (
                                        <SelectItem key={c} value={c}>
                                            {c}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <div className="text-sm font-semibold">Style</div>
                            <Select value={draftStyle || ALL_VALUE} onValueChange={(v) => setDraftStyle(v === ALL_VALUE ? "" : v)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="All Styles" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value={ALL_VALUE}>All Styles</SelectItem>
                                    {styles.map((s) => (
                                        <SelectItem key={s} value={s}>
                                            {s}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <div className="text-sm font-semibold">Language</div>
                            <Select
                                value={draftLanguage || ALL_VALUE}
                                onValueChange={(v) => setDraftLanguage(v === ALL_VALUE ? "" : v)}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="All Languages" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value={ALL_VALUE}>All Languages</SelectItem>
                                    {languages.map((l) => (
                                        <SelectItem key={l} value={l}>
                                            {l}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex items-center justify-end gap-2 pt-1">
                            <Button variant="outline" onClick={cancelFilters}>
                                Cancel
                            </Button>
                            <Button onClick={applyFilters}>OK</Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            {/* List */}
            <div className="grid gap-3">
                {visibleSongs.map((song) => (
                    <Card key={song.id} className="p-4">
                        <div className="flex items-start gap-3">
                            <div className="min-w-0 flex-1">
                                <div className="flex items-start gap-3">
                                    <div className="min-w-0">
                                        <h2 className="truncate text-lg font-semibold leading-tight">{song.title}</h2>
                                        <div className="mt-1 text-sm text-muted-foreground">ID: {song.id}</div>
                                    </div>
                                    <div className="ml-auto shrink-0">
                                        {song.videoUrl ? (
                                            <Button asChild variant="outline" className="h-9 rounded-full px-3">
                                                <a href={song.videoUrl} target="_blank" rel="noreferrer">
                                                    <Video className="h-4 w-4" />
                                                    Video
                                                </a>
                                            </Button>
                                        ) : null}
                                    </div>
                                </div>

                                <div className="mt-3 flex flex-wrap gap-2">
                                    {song.tags.map((tag) => (
                                        <Badge key={tag}>{tag}</Badge>
                                    ))}
                                </div>

                                <p className="mt-3 text-sm text-muted-foreground" style={clampStyle(3)}>
                                    {song.lyricsPreview}
                                </p>
                            </div>
                        </div>
                    </Card>
                ))}

                {visibleSongs.length === 0 ? (
                    <Card className="p-6 text-center text-sm text-muted-foreground">No songs match your search.</Card>
                ) : null}
            </div>
        </div>
    )
}