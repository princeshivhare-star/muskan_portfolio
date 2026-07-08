import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { peherImages } from '@/lib/peher'

export const metadata: Metadata = {
  title: 'Peher — Muskan',
  description:
    'A modern Indian apparel identity rooted in Bandhani heritage. Visual Identity / Fashion Apparel / 2025.',
}

function CaseImage({ index }: { index: number }) {
  const img = peherImages[index]
  return (
    <figure className="w-full overflow-hidden rounded-2xl bg-secondary">
      {/* Full image shown without cropping — intrinsic aspect ratio preserved */}
      <Image
        src={img.src || '/placeholder.svg'}
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

export default function PeherPage() {
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

        {/* Two-column layout: text left, images right */}
        <div className="mt-10 grid gap-14 lg:grid-cols-[5fr_7fr] lg:gap-16">
          {/* Left — text column */}
          <div className="flex flex-col gap-12 lg:gap-14">
            {/* Title + intro */}
            <div>
              <h1 className="text-5xl font-black tracking-tight text-balance md:text-6xl">
                Modern Heritage
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-pretty">
                A modern Indian apparel identity rooted in{' '}
                <strong className="font-semibold text-foreground">Bandhani</strong> heritage.
                Peher brings Indian craft into modern wardrobes with an identity that feels{' '}
                <strong className="font-semibold text-foreground">earthy</strong>,{' '}
                <strong className="font-semibold text-foreground">elegant</strong>, and
                contemporary, while still carrying the warmth of tradition.
              </p>

              {/* Meta rows — Category and Year only, per client requirements */}
              <dl className="mt-8">
                <div className="flex items-center justify-between gap-6 border-t border-border py-4">
                  <dt className="text-sm text-muted-foreground">Category</dt>
                  <dd className="text-right text-sm font-semibold tracking-wide">
                    VISUAL IDENTITY / FASHION APPAREL
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-6 border-t border-b border-border py-4">
                  <dt className="text-sm text-muted-foreground">Year</dt>
                  <dd className="text-sm font-semibold tracking-wide">2025</dd>
                </div>
              </dl>
            </div>

            <TextSection title="Project Overview" headingLevel="h2">
              <p>
                Peher celebrates the meeting point between Indian heritage and modern silhouettes.
              </p>
              <p>
                The brand carries forward a family connection to Bandhani craft, but the visual
                identity was designed for today&apos;s generation. Women who value culture,
                comfort, individuality, and thoughtful design.
              </p>
              <p>
                The goal was to create a brand identity that felt rooted but not old-fashioned,
                feminine but not overly delicate, and premium without feeling distant.
              </p>
            </TextSection>

            <TextSection title="Brand Challenge">
              <p>
                How do you make a traditional Indian craft feel relevant for a modern fashion
                audience? That was the central challenge behind Peher.
              </p>
              <p>
                The identity needed to avoid looking too festive, ethnic, or decorative. It had to
                create a softer, more refined world around Bandhani, one that could work across
                apparel tags, packaging, photography, social media, and future collections.
              </p>
            </TextSection>

            <TextSection title="Concept">
              <p>The concept was built around modernised heritage.</p>
              <p>
                Peher&apos;s identity uses subtle cultural cues instead of obvious traditional
                motifs. A minimal peacock-inspired mark became the central symbol, representing
                beauty, diversity, grace, and Indian roots in a refined way.
              </p>
              <p>
                The serif wordmark adds elegance, while the earthy palette and spacious layouts
                keep the brand feeling calm, modern, and wearable.
              </p>
            </TextSection>

            <TextSection title="Identity System">
              <p>
                The identity system includes a refined wordmark, a minimal brand symbol, soft
                earthy colours, clean typography, and editorial-style brand layouts.
              </p>
              <p>
                Every element was designed to support Peher&apos;s positioning as a slow-made,
                soulful, sustainable apparel brand. One that feels connected to craft but ready
                for a modern market.
              </p>
            </TextSection>

            <TextSection title="Result">
              <p>The final identity gives Peher a distinctive and graceful brand presence.</p>
              <p>
                It creates a visual world where Bandhani heritage feels fresh, quiet, and
                contemporary, helping the brand feel more complete, memorable, and ready to grow
                across digital, print, packaging, and fashion applications.
              </p>
            </TextSection>
          </div>

          {/* Right — image column */}
          <div className="flex flex-col gap-6">
            {/* 1 — Brand hero */}
            <CaseImage index={0} />
            {/* 2 — Brand introduction on garment */}
            <CaseImage index={1} />
            {/* 3 — Logo construction */}
            <CaseImage index={2} />
            {/* 4 — Shopping bag */}
            <CaseImage index={3} />
            {/* 8 — Gift box */}
            <CaseImage index={7} />
            {/* 5 — Brand story / artisans */}
            <CaseImage index={4} />
            {/* 6 — Hang tags */}
            <CaseImage index={5} />
            {/* 7 — Campaign layouts */}
            <CaseImage index={6} />
            {/* 9 — Colour palette */}
            <CaseImage index={8} />
            {/* 10 — Garments and lifestyle */}
            <CaseImage index={9} />
            {/* 11 — Packaging box */}
            <CaseImage index={10} />
          </div>
        </div>

        {/* Next project navigation */}
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
