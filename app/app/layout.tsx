import type { Metadata } from 'next'

import AppShell from "./app-shell"

export const metadata: Metadata = {
    title: 'Application',
    description: 'A website for Calvary songs',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AppShell>{children}</AppShell>
    )
}