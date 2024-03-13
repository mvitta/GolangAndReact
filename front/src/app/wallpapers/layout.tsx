import React from 'react'

export default function WallpapersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1>Api Free Wallpapers</h1>
      {children}
    </div>
  )
}
