// page.tsx
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/hero'
import { ProjectReel } from '@/components/project-reel'
import { FeaturedProjects } from '@/components/featured-projects'
import { WhatIBring } from '@/components/what-i-bring'

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />

        <ProjectReel />

        {/* Main positioning statement */}
        <section className="mx-auto flex justify-center px-6 py-12 md:px-10 md:py-16">
          <h2 className="mx-auto max-w-[920px] text-center text-[1.2rem] font-medium leading-[1.02] tracking-[-0.04em] md:text-[2rem] lg:text-[2.65rem] xl:text-[2.95rem]">
            <span className="font-dribelland text-[1.42em] font-normal leading-none tracking-normal text-blue-brand">
              Four years,
            </span>{' '}
            plenty of pixels and no room
            <br />
            for forgettable brand identities.
            <br />
            I build&nbsp;&nbsp;
            <span className="font-dribelland text-[1.42em] font-normal leading-none tracking-normal text-yellow-brand">
              distinctive brand worlds
            </span>
            &nbsp;&nbsp;
            that
            <br />
            make businesses easier to recognise,
            <br />
            easier to trust and&nbsp;&nbsp;
            <span className="font-dribelland text-[1.42em] font-normal leading-none tracking-normal text-lilac-brand">
              much harder to forget.
            </span>
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
            <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
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
