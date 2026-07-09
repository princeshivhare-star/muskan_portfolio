import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background px-5 pt-24 pb-16 md:px-8 md:pt-32 md:pb-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Text */}
        <div className="text-center lg:text-left">
          <p className="text-xs font-medium tracking-[0.28em] uppercase text-muted-foreground">
            Brand &amp; Visual Identity Designer
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-balance md:text-7xl lg:text-[5.8rem]">
            Muskan
            <br />
            Varotaria
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty md:text-lg lg:mx-0 mx-auto">
            I turn smart ideas into brands people notice, trust and choose.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-105"
            >
              View Projects
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-foreground px-7 py-3.5 text-sm font-semibold text-foreground transition hover:bg-foreground hover:text-background"
            >
              Let&apos;s Work Together
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute right-8 top-10 h-72 w-72 rounded-full bg-lilac-brand/20 blur-3xl" />
          <div className="absolute bottom-8 right-20 h-64 w-64 rounded-full bg-yellow-brand/20 blur-3xl" />

          <div className="relative h-[390px] w-[300px] overflow-hidden rounded-t-[160px] rounded-b-[36px] bg-secondary shadow-sm md:h-[500px] md:w-[380px] lg:h-[560px] lg:w-[420px]">
            <Image
              src="/muskan.png"
              alt="Muskan Varotaria"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
