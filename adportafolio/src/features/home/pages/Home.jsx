import React from 'react'
import {
  HeroSection,
  AboutSection,
  StudiesSection,
  CertificatesSection,
  SkillsSection,
  ProjectsSection,
  ContactSection
} from '../sections'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <StudiesSection />
      <CertificatesSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
