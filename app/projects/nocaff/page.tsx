import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { nocaffImages } from '@/lib/nocaff'

export const metadata: Metadata = {
  title: 'NOCAFF — Muskan',
  description: 'Decaf Coffee, Redefined. Brand Identity / Packaging / Beverage / 2026.',
}

function CaseImage({ index }: { index: number }) {
  const img = nocaffImages[index]
  return (
    <figure className="overflow-hidden rounded-2xl bg-secondary">
      <Image
        src={img.src}
        alt={img.alt}
        width={2400}
        height={1300}
        sizes="(max-width: 1024px) 100vw, 60vw"
        className="h-auto w-full"
      />
    </figure>
  )
}

function TextSection({
  title,
  headingLevel = 'h3',
  children,
}: {
  title: string
  headingLevel?: 'h2' | 'h3'
  children: React.ReactNode
}) {
  const Heading = headingLevel
  return (
    <section>
      <Heading
        className={
          headingLevel === 'h2'
            ? 'text-3xl font-bold tracking-tight md:text-4xl'
            : 'text-2xl font-bold tracking-tight md:text-3xl'
        }
      >
        {title}
      </Heading>
      <div className="mt-4 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground text-pretty">
        {children}
      </div>
    </section>
  )
}

export default function NocaffPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <Link
          href="/#projects"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to projects
        </Link>

        <div className="mt-10 grid gap-14 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <div className="flex flex-col gap-12 lg:gap-14">
            <div>
              <h1 className="text-5xl font-black tracking-tight text-balance md:text-6xl">
                NOCAFF
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-pretty">
                <strong className="font-semibold text-foreground">Decaf Coffee, Redefined.</strong>
                {' '}A bold decaf coffee identity for people who love the ritual of coffee but
                could happily skip the rush, jitters and overstimulation. NOCAFF turns everyday
                coffee breaks into slower, calmer moments without compromising on flavour.
              </p>

              <dl className="mt-8">
                <div className="flex items-center justify-between gap-6 border-t border-border py-4">
                  <dt className="text-sm text-muted-foreground">Category</dt>
                  <dd className="text-right text-sm font-semibold tracking-wide">
                    BRAND IDENTITY / PACKAGING / BEVERAGE
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-6 border-t border-b border-border py-4">
                  <dt className="text-sm text-muted-foreground">Year</dt>
                  <dd className="text-sm font-semibold tracking-wide">2026</dd>
                </div>
              </dl>
            </div>

            <TextSection title="Project Overview" headingLevel="h2">
              <p>
                NOCAFF is a flavour-led decaf coffee brand created for slower mornings, calmer
                routines and breaks that do not require recovering from the coffee afterwards.
              </p>
              <p>
                With flavours such as Cocoa Slow, Vanilla Unwind, Matcha Breathe, Coconut Drift
                and Hazelnut Settle, the brand presents decaf as an intentional and satisfying
                choice rather than a substitute for “real” coffee.
              </p>
              <p>
                The goal was to create an identity that felt bold but easygoing, modern but
                comforting, and calm without becoming quiet or forgettable.
              </p>
            </TextSection>

            <TextSection title="Brand Challenge">
              <p>How do you make decaf feel desirable, memorable and worthy of attention on the shelf?</p>
              <p>
                Decaf is often associated with weaker flavour, limited choice or compromise.
                NOCAFF needed to challenge that perception while clearly communicating its
                low-caffeine proposition.
              </p>
              <p>
                The identity also had to remain flexible across individual cans, multipacks,
                merchandise, loyalty cards, billboards, social media and future flavour extensions.
              </p>
            </TextSection>

            <TextSection title="Concept">
              <p>The concept was built around calm progress.</p>
              <p>
                Inspired by “slow and steady wins the race,” the tortoise became the central brand
                symbol, representing a no-rush approach to coffee.
              </p>
              <p>
                Dark-to-light gradients visualise caffeine being gently removed, while the flowing
                layers reference both the decaf process and the movement of coffee. A bold,
                uncomplicated wordmark gives the brand the confidence needed to stand beside
                regular coffee brands.
              </p>
            </TextSection>

            <TextSection title="Identity System">
              <p>
                The identity system combines a bold vertical wordmark, a minimal tortoise
                logomark, flavour-specific colour palettes, gradient flows, expressive flavour
                names and witty, self-aware messaging.
              </p>
              <p>
                Each flavour creates its own mood while remaining part of one recognisable system.
                Supporting lines such as “For the mornings that don’t need rushing” and “A can a
                day keeps the jitters at bay” bring the brand’s calm personality into campaigns
                and everyday touchpoints.
              </p>
            </TextSection>

            <TextSection title="Result">
              <p>The final identity gives decaf a stronger and more desirable presence.</p>
              <p>
                NOCAFF feels bold enough to stand out, simple enough to remain approachable and
                playful enough to feel memorable. The system creates a cohesive world across
                packaging, retail, campaigns, merchandise and digital applications while keeping
                one message clear: coffee can still be satisfying without the caffeine chaos.
              </p>
            </TextSection>
          </div>

          <div className="flex flex-col gap-6">
            {nocaffImages.map((_, index) => (
              <CaseImage key={index} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-border pt-10 text-center">
          <p className="font-script text-2xl text-lilac-brand md:text-3xl">
            More projects coming soon…
          </p>
          <Link
            href="/#projects"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
          >
            Back to all projects
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
