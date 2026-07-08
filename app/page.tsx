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
          <p className="font-script text-2xl text-yellow-brand md:text-3xl">
            Four years, plenty of pixels and no room for forgettable brand
            identities.
          </p>

          <h2 className="mt-8 text-[2rem] font-bold leading-[1.05] tracking-[-0.04em] md:text-[3.1rem] lg:text-[4rem] xl:text-[4.6rem]">
            <span className="block whitespace-nowrap">
              I build distinctive brand worlds that
            </span>

            <span className="block whitespace-nowrap">
              make businesses easier to{' '}
              <span className="font-script font-normal text-blue-brand">
                recognise
              </span>
              ,
            </span>

            <span className="block whitespace-nowrap">
              easier to{' '}
              <span className="font-script font-normal text-yellow-brand">
                trust
              </span>{' '}
              and much harder to{' '}
              <span className="font-script font-normal text-lilac-brand">
                forget
              </span>
              .
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
