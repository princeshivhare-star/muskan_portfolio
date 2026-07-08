import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/hero'
import { ProjectReel } from '@/components/project-reel'
import { FeaturedProjects } from '@/components/featured-projects'
import { Services } from '@/components/services'
import { WhatIBring } from '@/components/what-i-bring'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProjectReel />

        {/* Main positioning statement */}
        <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="font-script text-3xl text-yellow-brand md:text-4xl">
            Four years, plenty of pixels and no room for forgettable brand identities.
          </p>
          <p className="mt-6 max-w-4xl text-2xl font-semibold leading-snug text-balance md:text-4xl">
            I build distinctive brand worlds that make businesses easier to{' '}
            <span className="text-blue-brand">recognise</span>, easier to{' '}
            <span className="text-yellow-brand">trust</span> and much harder to{' '}
            <span className="text-lilac-brand">forget</span>.
          </p>
        </section>

        <FeaturedProjects />
        <Services />

        {/* Client testimonials — content coming shortly */}
        <section aria-label="Client testimonials" className="border-t border-border">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Client Testimonials</h2>
            <p className="mt-6 font-script text-2xl text-muted-foreground md:text-3xl">
              Kind words loading… check back soon.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
