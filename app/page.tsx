import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import Info from '@/components/Info'
import Trainer from '@/components/Trainer'
import React from 'react'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Info />
      <Trainer />
      <Gallery/>
    </div>
  )
}
