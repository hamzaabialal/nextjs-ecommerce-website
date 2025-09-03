'use client'

import Image from 'next/image'
import { useState, useRef } from 'react'

interface ImageHoverProps {
  src: string
  hoverSrc: string
  alt: string
}

export default function ImageHover({ src, hoverSrc, alt }: ImageHoverProps) {
  const [isHovered, setIsHovered] = useState(false)
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = () => {
    hoverTimeout.current = setTimeout(() => setIsHovered(true), 100)
  }

  const handleMouseLeave = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    setIsHovered(false)
  }

  return (
    <div
      className="relative w-[200px] h-[200px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={isHovered ? hoverSrc : src}
        alt={alt}
        fill
        sizes="200px"
        className="object-contain"
      />
    </div>
  )
}
