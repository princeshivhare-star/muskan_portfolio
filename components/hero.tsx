import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#faf7f2] px-6 pt-28 pb-16 md:px-10 md:pt-36 md:pb-24"
    >
      {/* Background Glow */}
      <div className="absolute right-0 top-20 h-[520px] w-[520px] rounded-full bg-[#cbb6ff]/20 blur-[140px]" />
      <div className="absolute bottom-0 right-20 h-[420px] w-[420px] rounded-full bg-[#ffd77a]/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        {/* LEFT */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            Brand &amp; Visual Identity Designer
          </p>

          <h1 className="mt-8 text-[4rem] font-bold leading-[0.9] tracking-[-0.05em] md:text-[6rem] lg:text-[7.5rem]">
            Muskan
            <br />
            Varotaria
          </h1>

          <p className="mt-8 max-w-md text-lg leading-8 text-muted-foreground">
            I turn smart ideas into brands people notice,
            trust and choose through thoughtful visual
            identity and branding.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:scale-105"
            >
              View Projects →
            </Link>

            <Link
              href="#contact"
              className="rounded-full border border-black px-7 py-4 text-sm font-semibold transition hover:bg-black hover:text-white"
            >
              Let's Talk →
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center lg:justify-end">
          <Image
            src="/muskan.png"
            alt="Muskan Varotaria"
            width={700}
            height={900}
            priority
            className="relative z-10 w-full max-w-[620px] object-contain"
          />
        </div>
      </div>
    </section>
  )
}
