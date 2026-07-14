import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { metalalignsImages } from '@/lib/metalaligns'

export const metadata: Metadata = {
  title: 'MetalAligns — Muskan',
  description:
    'A future-focused metal solutions identity built on precision, expertise and quality. Logo Design / Visual Identity / 2024.',
}

function CaseImage({ index }: { index: number }) {
  const img = metalalignsImages[index]
  return (
    <figure className="overflow-hidden rounded-2xl bg-secondary">
      <Image
        src={img.src}
        alt={img.alt}
        width={4800}
        height={2509}
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

export default function MetalAlignsPage() {
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
                MetalAligns
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-pretty">
                <strong className="font-semibold text-foreground">
                  Precision in Motion.
                </strong>{' '}
                A future-focused identity for MetalAligns International, a metal solutions
                company built on technical accuracy, refined craftsmanship and uncompromising
                quality.
              </p>

              <dl className="mt-8">
                <div className="flex items-center justify-between gap-6 border-t border-border py-4">
                  <dt className="text-sm text-muted-foreground">Category</dt>
                  <dd className="text-right text-sm font-semibold tracking-wide">
                    LOGO DESIGN / VISUAL IDENTITY
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-6 border-t border-b border-border py-4">
                  <dt className="text-sm text-muted-foreground">Year</dt>
                  <dd className="text-sm font-semibold tracking-wide">2024</dd>
                </div>
              </dl>
            </div>

            <TextSection title="Project Overview" headingLevel="h2">
              <p>
                MetalAligns International brings together experience, engineering precision,
                quality assurance and customisation.
              </p>
              <p>
                The visual identity was designed to reflect this combination through a system that
                feels structured yet fluid, technically capable yet elegant.
              </p>
              <p>
                The brand needed to express the strength of the metals industry without relying on
                conventional heavy or overly mechanical visual language.
              </p>
            </TextSection>

            <TextSection title="Brand Challenge">
              <p>
                Most identities within the metals industry communicate strength through rigid
                forms, dark colours and predictable industrial symbols.
              </p>
              <p>
                The challenge was to create a brand that still felt strong and dependable while
                introducing movement, sophistication and innovation.
              </p>
              <p>
                The identity needed to show that precision is not simply about rigidity. It is
                also about control, adaptability and the ability to shape materials around complex
                requirements.
              </p>
            </TextSection>

            <TextSection title="Concept">
              <p>The concept was built around precision in motion.</p>
              <p>
                The logo is inspired by multiple layers of metal moving into perfect alignment.
                The parallel flowing lines represent metal sheets, surfaces and processes being
                shaped with consistency and control.
              </p>
              <p>
                Although every line follows its own path, they work together to form one unified
                structure, reflecting the company&apos;s ability to manage complex requirements with
                accuracy.
              </p>
              <p>
                The structured outer form represents reliability, quality assurance and engineering
                discipline, while the fluid internal movement communicates innovation,
                customisation and forward progress.
              </p>
            </TextSection>

            <TextSection title="Identity System">
              <p>
                The identity system balances industrial authority with contemporary refinement.
              </p>
              <p>
                The logo mark becomes a recognisable graphic device that can expand into flowing
                patterns, cropped compositions, line-based textures and directional layouts.
              </p>
              <p>
                The bold treatment of METAL communicates strength, capability and permanence,
                while the lighter construction of ALIGNS introduces precision, sophistication and
                balance.
              </p>
              <p>
                The blue and violet gradient creates a progressive and premium expression,
                positioning MetalAligns as a modern company looking beyond the conventions of its
                industry.
              </p>
            </TextSection>

            <TextSection title="Result">
              <p>
                The result is a confident and future-facing identity that presents MetalAligns as
                more than a conventional metal company.
              </p>
              <p>
                It communicates technical expertise, quality and reliability while capturing the
                company&apos;s ability to innovate, customise and move the industry forward.
              </p>
              <p>
                The identity transforms precision into a dynamic visual language, creating a brand
                that feels engineered for the future.
              </p>
            </TextSection>
          </div>

          <div className="flex flex-col gap-6">
            {metalalignsImages.map((_, index) => (
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
