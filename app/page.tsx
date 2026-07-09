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
        <section className="mx-auto flex justify-center px-6 py-16 md:px-10 md:py-24">
          <h2 className="max-w-[1050px] mx-auto text-center text-[1.45rem] font-semibold leading-[1.15] tracking-[-0.04em] md:text-[2.4rem] lg:text-[3.15rem] xl:text-[3.5rem]">
            {/* Line 1 */}
            <span className="font-dribelland text-[1.65em] font-normal leading-none tracking-normal text-blue-brand">
              Four years,
            </span>{' '}
            <span className="font-dribelland text-[1.65em] font-normal leading-none tracking-normal text-yellow-brand">
              plenty of pixels
            </span>{' '}
            and no room
            <br />

            {/* Line 2 */}
            for forgettable{' '}
            <span className="font-dribelland text-[1.65em] font-normal leading-none tracking-normal text-lilac-brand">
              brand identities
            </span>
            .
            <br />

            {/* Line 3 */}
            I build{' '}
            <span className="font-dribelland text-[1.65em] font-normal leading-none tracking-normal text-blue-brand">
              distinctive
            </span>{' '}
            brand worlds that
            <br />

            {/* Line 4 */}
            make businesses easier to{' '}
            <span className="font-dribelland text-[1.65em] font-normal leading-none tracking-normal text-yellow-brand">
              recognise
            </span>
            ,
            <br />

            {/* Line 5 */}
            easier to{' '}
            <span className="font-dribelland text-[1.65em] font-normal leading-none tracking-normal text-lilac-brand">
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
