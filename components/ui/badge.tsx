import * as React from "react"

import { cn } from "@/lib/utils"

type BadgeProps = React.HTMLAttributes<HTMLSpanElement>

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground",
        className,
      )}
      {...props}
    />
  )
}
