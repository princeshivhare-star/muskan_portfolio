import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { cukeImages } from '@/lib/cuke'

export const metadata: Metadata = {
  title: 'CUKE — Muskan',
  description:
    'A bold pickle brand built for snack girls, main characters and anyone who believes brine deserves better branding. Brand Identity / Packaging Design / Art Direction / 2026.',
}

function CaseImage({ index }: { index: number }) {
  const img = cukeImages[index]
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

export default function CukePage() {
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
                CUKE
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-pretty">
                A bold{' '}
                <strong className="font-semibold text-foreground">pickle brand</strong> built for
                snack girls, main characters and anyone who believes brine deserves better
                branding. CUKE turns an everyday fridge staple into a full-blown{' '}
                <strong className="font-semibold text-foreground">personality</strong> —{' '}
                <strong className="font-semibold text-foreground">bold</strong>,{' '}
                <strong className="font-semibold text-foreground">cheeky</strong>, and impossible
                to ignore.
              </p>

              <dl className="mt-8">
                <div className="flex items-center justify-between gap-6 border-t border-border py-4">
                  <dt className="text-sm text-muted-foreground">Category</dt>
                  <dd className="text-right text-sm font-semibold tracking-wide">
                    BRAND IDENTITY / PACKAGING DESIGN / ART DIRECTION
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
                CUKE is a playful pickle brand that turns an everyday fridge staple into a
                full-blown personality.
              </p>
              <p>
                The brand was created for a new generation of snackers who want food products to
                feel expressive, culturally relevant and visually exciting. Instead of presenting
                pickles as traditional, rustic or purely functional, CUKE treats them like the
                life of the party: bold, cheeky and impossible to ignore.
              </p>
              <p>
                The result is a character-led identity that brings together confident typography,
                flavour-coded packaging, playful copy and a fashion-forward pickle mascot.
              </p>
            </TextSection>

            <TextSection title="Brand Challenge">
              <p>
                The pickle category is often dominated by heritage-style labels, farmhouse
                aesthetics and health-focused messaging.
              </p>
              <p>
                CUKE needed to enter the category from a completely different angle. The brand had
                to feel fun without becoming childish, feminine without feeling overly delicate,
                and unconventional while still looking credible as a real food product.
              </p>
              <p>
                The main challenge was to create packaging that could stand out instantly on a
                crowded supermarket shelf while keeping every flavour easy to recognise.
              </p>
            </TextSection>

            <TextSection title="Brand Personality">
              <p>Bold. Cheeky. Playful. Fashionable. Slightly ridiculous.</p>
              <p>
                CUKE communicates with confidence and never takes itself too seriously. The tone
                feels conversational, self-aware and culturally current, using lines such as
                &ldquo;Pickles with Personality,&rdquo; &ldquo;Snack Girls Ask for Extra!&rdquo;
                and &ldquo;Brine Is the New Fine.&rdquo;
              </p>
              <p>
                The copy creates a world that feels bigger than the product itself, allowing CUKE
                to extend naturally into menus, merchandise, social campaigns and physical
                experiences.
              </p>
            </TextSection>

            <TextSection title="Visual Identity">
              <p>
                The identity is led by an oversized, heavy CUKE wordmark designed to feel
                immediate, memorable and unapologetically loud.
              </p>
              <p>
                The bold typography is balanced by smaller monospaced text, giving the packaging a
                slightly editorial and utilitarian contrast. Starburst graphics introduce
                additional energy and act as flexible devices for flavour messages, promotional
                copy and product details.
              </p>
              <p>
                The visual system feels expressive, but every element has a clear role. Strong
                hierarchy keeps the packaging easy to scan while allowing the brand&apos;s
                personality to remain front and centre.
              </p>
            </TextSection>

            <TextSection title="The CUKE Mascot">
              <p>
                At the heart of the brand is a confident cucumber character with dramatic lashes,
                high heels and unmistakable attitude.
              </p>
              <p>
                She is not simply a decorative illustration. She represents the CUKE customer:
                expressive, playful and comfortable taking up space.
              </p>
              <p>
                The mascot becomes a recognisable brand asset across packaging, menus, printed
                patterns, wrapping paper, bags and campaign imagery. Different poses allow her to
                create movement and variety while maintaining consistency throughout the identity.
              </p>
            </TextSection>

            <TextSection title="Flavour System">
              <p>
                Each flavour has its own colour palette, product personality and tone while
                remaining part of one cohesive family.
              </p>
              <p>
                <strong className="font-semibold text-foreground">Main Character</strong> —
                Classic Dill Pickle Chips. The confident original, using soft lavender and vivid
                purple for a playful, recognisable look.
              </p>
              <p>
                <strong className="font-semibold text-foreground">Dirty Martini Dill</strong> —
                Briny Pickle Spears. A sharper, more sophisticated flavour inspired by
                martini-night energy, with olive green and warm cream tying it to a savoury
                profile.
              </p>
              <p>
                <strong className="font-semibold text-foreground">Hot Girl Heat</strong> — Spicy
                Chilli Pickle Chips. The loudest member of the range, combining soft pink with
                vivid red accents, chilli flakes and energetic graphic details.
              </p>
            </TextSection>

            <TextSection title="Packaging Design">
              <p>
                The packaging was designed to make the jars feel like collectible personalities
                rather than interchangeable food products.
              </p>
              <p>
                A large CUKE logo creates strong shelf recognition, while each flavour name sits
                inside a bold black panel for quick identification. The mascot, flavour
                description, weight and product claims follow a consistent structure across the
                range.
              </p>
              <p>
                The transparent glass allows the colour and texture of the pickles to remain
                visible, connecting the playful identity with the freshness and physical appeal of
                the product. Glossy labels, black lids and restrained backgrounds give the jars a
                polished finish while allowing the colourful flavour accents to stand out.
              </p>
            </TextSection>

            <TextSection title="Art Direction">
              <p>The photography extends CUKE&apos;s personality beyond the packaging.</p>
              <p>
                Instead of conventional kitchen-based food styling, the product appears in bold,
                fashion-inspired compositions using dramatic reflections, sunglasses, refrigerator
                scenes, glossy tiles, net bags and exaggerated ingredient arrangements.
              </p>
              <p>
                The art direction combines hyper-real food textures with playful editorial
                styling, creating imagery designed to stop the scroll and make the product feel
                desirable, expressive and culturally relevant.
              </p>
            </TextSection>

            <TextSection title="Result">
              <p>CUKE transforms pickles from a supporting snack into the main character.</p>
              <p>
                The final identity creates a distinctive space between food, fashion and internet
                culture. It is bold enough to attract attention, structured enough to work across
                a growing product range and flexible enough to build an entire lifestyle around
                the brand.
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
            <CaseImage index={10} />
            <CaseImage index={11} />
            <CaseImage index={12} />
          </div>
        </div>

        <div className="mt-20 border-t border-border pt-10 text-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
          >
            Back to all projects
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}