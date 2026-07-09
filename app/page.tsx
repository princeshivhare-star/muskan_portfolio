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
        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <h2 className="max-w-6xl text-[1.85rem] font-semibold leading-[1.2] tracking-[-0.04em] text-balance md:text-[3rem] lg:text-[3.75rem] xl:text-[4.25rem]">
            <span className="inline-block font-dribelland text-[1.77em] font-normal leading-[1.05] tracking-normal text-blue-brand">
              Four years,
            </span>{' '}
            <span className="inline-block font-dribelland text-[1.77em] font-normal leading-[1.05] tracking-normal text-yellow-brand">
              plenty of pixels
            </span>{' '}
            and no room for forgettable{' '}
            <span className="inline-block font-dribelland text-[1.77em] font-normal leading-[1.05] tracking-normal text-lilac-brand">
              brand identities
            </span>
            . I build{' '}
            <span className="inline-block font-dribelland text-[1.77em] font-normal leading-[1.05] tracking-normal text-blue-brand">
              distinctive
            </span>{' '}
            brand worlds that make businesses easier to{' '}
            <span className="inline-block font-dribelland text-[1.77em] font-normal leading-[1.05] tracking-normal text-yellow-brand">
              recognise
            </span>
            , easier to{' '}
            <span className="inline-block font-dribelland text-[1.77em] font-normal leading-[1.05] tracking-normal text-lilac-brand">
              trust
            </span>{' '}
            and much harder to forget.
          </h2>
        </section>

        <FeaturedProjects />

        <Services />

        <WhatIBring />

        {/* Client testimonials */}
        <section
          aria-label="Client testimonials"
          className="border-t border-border"
        >
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Client Testimonials
            </h2>

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
