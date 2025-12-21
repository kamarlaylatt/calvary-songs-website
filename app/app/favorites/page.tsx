import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FavoritesPage() {
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h1 className="text-xl font-semibold tracking-tight">Favorites</h1>
        <p className="text-sm text-muted-foreground">Your saved songs.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>No favorites yet</CardTitle>
          <CardDescription>When you save songs, they’ll appear here.</CardDescription>
        </CardHeader>
        <CardContent />
      </Card>
    </div>
  )
}
