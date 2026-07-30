import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { clubduelzImages } from '@/lib/clubduelz'

export const metadata: Metadata = {
  title: 'ClubDuelz — Muskan',
  description:
    'Grassroots 2 Glory. Brand Identity / Sports App / Football Platform / 2025.',
}

function CaseImage({ index }: { index: number }) {
  const img = clubduelzImages[index]
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

export default function ClubDuelzPage() {
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
                ClubDuelz
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-pretty">
                <strong className="font-semibold text-foreground">
                  Grassroots 2 Glory.
                </strong>{' '}
                A bold football identity for local players chasing bigger
                recognition. ClubDuelz brings grassroots football into a
                sharper, louder and more digital-first world where every player
                gets a real shot to be seen.
              </p>

              <dl className="mt-8">
                <div className="flex items-center justify-between gap-6 border-t border-border py-4">
                  <dt className="text-sm text-muted-foreground">Category</dt>
                  <dd className="text-right text-sm font-semibold tracking-wide">
                    BRAND IDENTITY / SPORTS APP / FOOTBALL PLATFORM
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
                ClubDuelz is a grassroots football platform built to connect
                players, teams, scouts and organizers through one energetic
                ecosystem.
              </p>
              <p>
                The brand celebrates players grinding on local turfs, turning
                small beginnings into serious ambition. The goal was to create
                an identity that felt bold, competitive and community-driven,
                while still carrying the raw energy of football at the
                grassroots level.
              </p>
            </TextSection>

            <TextSection title="Brand Challenge">
              <p>
                How do you make local football feel as exciting and visible as
                the big leagues?
              </p>
              <p>
                Grassroots players often have the passion and talent, but not
                always the platform. ClubDuelz needed an identity that could
                feel powerful to players, credible to organizers and exciting
                across app screens, posters, player cards, social media,
                merchandise and match-day moments.
              </p>
            </TextSection>

            <TextSection title="Concept">
              <p>The concept was built around Grassroots 2 Glory.</p>
              <p>
                The lightning-inspired mark represents speed, ambition and
                breakthrough energy, while the football dot adds a sense of
                play, movement and recognition. Together, the symbol becomes a
                visual cue for talent ready to be noticed.
              </p>
            </TextSection>

            <TextSection title="Identity System">
              <p>
                The identity uses a sharp sports wordmark, bold typography,
                electric colours and gritty football imagery to create a
                high-impact visual system.
              </p>
              <p>
                Electric Purple, Lime Surge, Turf Orange and Power Black give
                the brand a loud, competitive presence. Lines like “It’s not
                just your game, it’s your shot to be seen!!” bring the voice
                into campaigns with confidence and attitude.
              </p>
            </TextSection>

            <TextSection title="Result">
              <p>
                The final identity gives grassroots football a stronger and more
                aspirational presence.
              </p>
              <p>
                ClubDuelz feels bold enough for the sports-tech space, energetic
                enough for young players and flexible enough to work across
                digital, print, merchandise and on-ground experiences.
              </p>
              <p>
                The message stays clear: Every player deserves a shot to be
                seen.
              </p>
            </TextSection>
          </div>

          <div className="flex flex-col gap-6">
            {clubduelzImages.map((_, index) => (
              <CaseImage key={index} index={index} />
            ))}
          </div>
        </div>

      </main>
      <SiteFooter />
    </>
  )
}
