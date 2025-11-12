"use client"

import Link from "next/link"

interface SpecialtyCardProps {
  specialty: {
    id: string
    title: string
    description: string
    icon: string
  }
}

export function SpecialtyCard({ specialty }: SpecialtyCardProps) {
  return (
    <Link href={`/areas/${specialty.id}`}>
      <div className="group relative h-full p-6 rounded-xl border border-border/30 bg-card/50 hover:bg-card/80 card-hover cursor-pointer overflow-hidden">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/10 to-accent/10" />

        <div className="relative space-y-4">
          {/* Icon */}
          <div className="text-5xl">{specialty.icon}</div>

          {/* Title */}
          <h3 className="text-xl font-semibold group-hover:text-accent transition-colors duration-300">
            {specialty.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
            {specialty.description}
          </p>

          {/* Arrow Indicator */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <span className="text-accent text-xl">→</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
