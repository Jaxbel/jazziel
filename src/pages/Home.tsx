// src/pages/Home.tsx
import Navbar from '@/components/NavBar'
import { Hero } from '@/components/Hero'
import { TechStack } from '@/components/TechStack'
import { FeaturedProjects } from '@/components/FeaturedProjects'
import { FeaturedEducation } from '@/components/FeatureEducation'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { ScrollProgress } from '@/components/ScrollProgress'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <FeaturedProjects />
      <FeaturedEducation />
      <Contact />
    </>
  )
}
