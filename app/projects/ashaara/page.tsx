import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ashaaraImages } from '@/lib/ashaara'

export const metadata: Metadata = {
  title: 'Ashaara — Muskan',
  description:
    'A warm and expressive candle identity inspired by hope, fragrance, and everyday emotional comfort. Visual Identity / Candles & Lifestyle / 2026.',
}

function CaseImage({ index }: { index: number }) {
  const img = ashaaraImages[index]
  return (
    <figure className="w-full overflow-hidden rounded-2xl bg-secondary">
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

export default function AshaaraPage() {
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
                Ashaara
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-pretty">
                A warm and expressive{' '}
                <strong className="font-semibold text-foreground">candle identity</strong>{' '}
                inspired by hope, fragrance, and everyday emotional comfort. Ashaara transforms
                candles into meaningful lifestyle objects through a visual world that feels{' '}
                <strong className="font-semibold text-foreground">nostalgic</strong>,{' '}
                <strong className="font-semibold text-foreground">joyful</strong>, and full of
                character.
              </p>

              <dl className="mt-8">
                <div className="flex items-center justify-between gap-6 border-t border-border py-4">
                  <dt className="text-sm text-muted-foreground">Category</dt>
                  <dd className="text-right text-sm font-semibold tracking-wide">
                    VISUAL IDENTITY / CANDLES &amp; LIFESTYLE
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-6 border-t border-b border-border py-4">
                  <dt className="text-sm text-muted-foreground">Year</dt>
                  <dd className="text-sm font-semibold tracking-wide">2026</dd>
                </div>
              </dl>
            </div>

            <TextSection title="Project Overview" headingLevel="h2">
              <p>Ashaara is a candle and lifestyle brand built around the idea of hope.</p>
              <p>
                The brand believes that fragrance can shift the mood of a room, create a feeling
                of comfort, and turn ordinary moments into something more meaningful. Each candle
                is designed to reflect its fragrance, giving every product its own personality
                while still belonging to one cohesive brand world.
              </p>
              <p>
                The goal was to create an identity that felt warm but not overly soft, premium
                but still approachable, and nostalgic without feeling dated.
              </p>
            </TextSection>

            <TextSection title="Brand Challenge">
              <p>
                How do you create a candle brand that feels emotionally comforting while still
                looking bold, distinctive, and memorable? That was the central challenge behind
                Ashaara.
              </p>
              <p>
                The identity needed to move beyond the quiet, neutral minimalism commonly seen in
                the candle category. It had to express warmth, optimism, and sensory pleasure
                while remaining flexible enough to work across packaging, fragrance collections,
                wrapping paper, social media, photography, and future lifestyle products.
              </p>
            </TextSection>

            <TextSection title="Concept">
              <p>The concept was built around hope in bloom.</p>
              <p>
                The name Ashaara is connected to hope, while the sunflower became the central
                symbol of the brand, representing warmth, positivity, light, and emotional
                renewal. The sunflower was integrated into the identity as more than a decorative
                element. It became a visual expression of the feeling Ashaara wanted to bring into
                people&apos;s spaces.
              </p>
              <p>
                Classic serif typography gives the brand elegance and familiarity, while bold
                editorial type, ornamental flourishes, and expressive colour combinations
                introduce a playful retro character.
              </p>
            </TextSection>

            <TextSection title="Identity System">
              <p>
                The identity system includes an elegant serif wordmark, a sunflower-inspired brand
                symbol, ornamental borders, expressive typography, fragrance-led illustrations,
                and a warm retro colour palette.
              </p>
              <p>
                Petal Blush, Sunlit Sunflower, Candle Cream, and Velvet Ember create a visual world
                that feels comforting, tactile, and full of personality. The system balances soft
                candlelight, botanical shadows, sculptural candle forms, and warm lifestyle
                photography with bold typography and decorative vintage details.
              </p>
              <p>
                Every element was designed to make the brand feel emotional yet confident,
                nostalgic yet modern, and premium without becoming distant.
              </p>
            </TextSection>

            <TextSection title="Result">
              <p>
                The final identity gives Ashaara a warm, distinctive, and highly recognisable
                brand presence.
              </p>
              <p>
                It creates a visual world where fragrance feels personal, candles feel expressive,
                and everyday rituals feel a little more hopeful. The identity allows Ashaara to
                remain consistent while giving each fragrance space to develop its own mood and
                personality, helping the brand grow naturally across packaging, digital content,
                gifting, home décor, and future lifestyle collections.
              </p>
            </TextSection>
          </div>

          <div className="flex flex-col gap-6">
            <CaseImage index={0} />
            <CaseImage index={1} />
            <CaseImage index={2} />
            <CaseImage index={3} />
            <CaseImage index={4} />
            <CaseImage index={5} />
            <CaseImage index={6} />
            <CaseImage index={7} />
            <CaseImage index={8} />
            <CaseImage index={9} />
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