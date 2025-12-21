import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h1 className="text-xl font-semibold tracking-tight">About</h1>
        <p className="text-sm text-muted-foreground">Calvary Songs library.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Calvary Songs</CardTitle>
          <CardDescription>Hymns and worship songs in one place.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground">
            This section can include app info, contact details, and credits.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
