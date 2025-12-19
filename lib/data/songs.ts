export interface Song {
  id: number;
  number: number;
  title: string;
  category: string;
  lyrics: string;
  language: string;
  youtubeUrl?: string;
}

export const songs: Song[] = [
  {
    id: 1,
    number: 1,
    title: "Song of Praise 1",
    category: "Worship",
    language: "English",
    lyrics: `[Song lyrics would be displayed here]

This is a placeholder for demonstration purposes.
In production, actual song lyrics would be loaded from the Calvary Songs database.`
  },
  {
    id: 2,
    number: 2,
    title: "Hymn of Glory",
    category: "Hymns",
    language: "English",
    lyrics: `[Song lyrics would be displayed here]

This is a placeholder for demonstration purposes.
In production, actual song lyrics would be loaded from the Calvary Songs database.`
  },
  {
    id: 3,
    number: 3,
    title: "Joyful Celebration",
    category: "Praise",
    language: "English",
    lyrics: `[Song lyrics would be displayed here]

This is a placeholder for demonstration purposes.
In production, actual song lyrics would be loaded from the Calvary Songs database.`
  },
  {
    id: 4,
    number: 4,
    title: "Christmas Carol",
    category: "Seasonal",
    language: "English",
    lyrics: `[Song lyrics would be displayed here]

This is a placeholder for demonstration purposes.
In production, actual song lyrics would be loaded from the Calvary Songs database.`
  },
  {
    id: 5,
    number: 5,
    title: "Wedding Song",
    category: "Special",
    language: "English",
    lyrics: `[Song lyrics would be displayed here]

This is a placeholder for demonstration purposes.
In production, actual song lyrics would be loaded from the Calvary Songs database.`
  },
  {
    id: 6,
    number: 6,
    title: "Morning Worship",
    category: "Worship",
    language: "English",
    lyrics: `[Song lyrics would be displayed here]

This is a placeholder for demonstration purposes.
In production, actual song lyrics would be loaded from the Calvary Songs database.`
  },
  {
    id: 7,
    number: 7,
    title: "Traditional Hymn 1",
    category: "Hymns",
    language: "English",
    lyrics: `[Song lyrics would be displayed here]

This is a placeholder for demonstration purposes.
In production, actual song lyrics would be loaded from the Calvary Songs database.`
  },
  {
    id: 8,
    number: 8,
    title: "Praise and Worship",
    category: "Praise",
    language: "English",
    lyrics: `[Song lyrics would be displayed here]

This is a placeholder for demonstration purposes.
In production, actual song lyrics would be loaded from the Calvary Songs database.`
  },
  {
    id: 9,
    number: 9,
    title: "Easter Song",
    category: "Seasonal",
    language: "English",
    lyrics: `[Song lyrics would be displayed here]

This is a placeholder for demonstration purposes.
In production, actual song lyrics would be loaded from the Calvary Songs database.`
  },
  {
    id: 10,
    number: 10,
    title: "Dedication Hymn",
    category: "Special",
    language: "English",
    lyrics: `[Song lyrics would be displayed here]

This is a placeholder for demonstration purposes.
In production, actual song lyrics would be loaded from the Calvary Songs database.`
  },
  {
    id: 11,
    number: 11,
    title: "Evening Worship",
    category: "Worship",
    language: "English",
    lyrics: `[Song lyrics would be displayed here]

This is a placeholder for demonstration purposes.
In production, actual song lyrics would be loaded from the Calvary Songs database.`
  },
  {
    id: 12,
    number: 12,
    title: "Traditional Hymn 2",
    category: "Hymns",
    language: "English",
    lyrics: `[Song lyrics would be displayed here]

This is a placeholder for demonstration purposes.
In production, actual song lyrics would be loaded from the Calvary Songs database.`
  },
  {
    id: 13,
    number: 13,
    title: "Victory Song",
    category: "Praise",
    language: "English",
    lyrics: `[Song lyrics would be displayed here]

This is a placeholder for demonstration purposes.
In production, actual song lyrics would be loaded from the Calvary Songs database.`
  },
  {
    id: 14,
    number: 14,
    title: "Thanksgiving Hymn",
    category: "Seasonal",
    language: "English",
    lyrics: `[Song lyrics would be displayed here]

This is a placeholder for demonstration purposes.
In production, actual song lyrics would be loaded from the Calvary Songs database.`
  },
  {
    id: 15,
    number: 15,
    title: "Baptism Song",
    category: "Special",
    language: "English",
    lyrics: `[Song lyrics would be displayed here]

This is a placeholder for demonstration purposes.
In production, actual song lyrics would be loaded from the Calvary Songs database.`
  }
];

export const categories = [
  { name: "All", icon: "📚" },
  { name: "Worship", icon: "🙏" },
  { name: "Praise", icon: "🎵" },
  { name: "Hymns", icon: "📖" },
  { name: "Seasonal", icon: "🎄" },
  { name: "Special", icon: "✨" },
];
