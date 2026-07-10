import Link from 'next/link'

const logoMaskStyle = {
  WebkitMaskImage: "url('/logo.png')",
  maskImage: "url('/logo.png')",
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
  WebkitMaskPosition: 'center',
  maskPosition: 'center',
  WebkitMaskSize: 'contain',
  maskSize: 'contain',
} as const

export function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background px-5 pb-16 pt-24 md:px-8 md:pb-24 md:pt-28"
    >
      {/* Soft background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-brand/8 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-0 h-72 w-72 rounded-full bg-lilac-brand/8 blur-[130px]"
      />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        {/* Name */}
        <h1 className="relative z-20 font-sans text-[4.8rem] font-normal leading-[0.85] tracking-[-0.065em] text-foreground sm:text-[6rem] md:text-[7.5rem] lg:text-[8.5rem]">
          Muskan
        </h1>

        {/* Portrait clipped inside actual logo */}
        <div className="group relative z-10 mt-2 w-full max-w-[680px] sm:max-w-[760px] md:-mt-1 md:max-w-[840px]">
          <div className="relative aspect-[2.55/1] w-full">
            {/* Soft offset logo shadow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 translate-x-2 translate-y-3 bg-blue-brand/12 transition-transform duration-700 ease-out group-hover:translate-x-3 group-hover:translate-y-4"
              style={logoMaskStyle}
            />

            {/* Main masked image area */}
            <div
              role="img"
              aria-label="Muskan Varotaria portrait clipped inside the brand logo"
              className="absolute inset-0 overflow-hidden"
              style={logoMaskStyle}
            >
              {/* Background fills the complete logo shape */}
              <img
                src="/muskan-original.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full scale-110 object-cover object-[center_45%] blur-[1px] transition-transform duration-700 ease-out group-hover:scale-[1.15]"
              />

              {/* Clear Muskan portrait above the background */}
              <img
                src="/muskan-original.png"
                alt=""
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[96%] w-auto max-w-none -translate-x-1/2 -translate-y-[42%] object-contain transition-transform duration-700 ease-out group-hover:-translate-y-[44%] group-hover:scale-[1.02]"
              />
            </div>

            {/* Brand blue overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-blue-brand/20 transition-colors duration-700 group-hover:bg-blue-brand/14"
              style={logoMaskStyle}
            />

            {/* Soft highlight */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-blue-brand/10"
              style={logoMaskStyle}
            />
          </div>
        </div>

        {/* Supporting labels */}
        <div className="-mt-1 grid w-full max-w-[700px] grid-cols-2 gap-10 text-left sm:gap-20 md:-mt-2">
          <p className="text-[1.45rem] font-normal leading-[0.88] tracking-[-0.045em] text-foreground sm:text-[1.75rem] md:text-[2rem]">
            Visual &amp;
            <br />
            Brand Identity
            <br />
            Designer
          </p>

          <p className="text-right text-[1.45rem] font-normal leading-[0.88] tracking-[-0.045em] text-foreground sm:text-[1.75rem] md:text-[2rem]">
            Emerging
            <br />
            designer
          </p>
        </div>

        {/* Introduction */}
        <p className="mt-8 max-w-[680px] font-dribelland text-[2.15rem] font-normal leading-[0.82] tracking-normal text-foreground sm:text-[2.65rem] md:text-[3.15rem]">
          I turn smart ideas into brands
          <br className="hidden sm:block" />
          people notice, trust and choose.
        </p>

        {/* Buttons */}
        <div className="mt-10 grid w-full max-w-[650px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
          <Link
            href="/#projects"
            className="group inline-flex min-h-16 items-center justify-center gap-3 rounded-xl border border-blue-brand bg-blue-brand px-8 text-lg font-normal text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(108,147,255,0.25)] md:text-xl"
          >
            <span>View Projects</span>
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>

          <Link
            href="/#contact"
            className="group inline-flex min-h-16 items-center justify-center gap-3 rounded-xl border border-foreground bg-foreground px-8 text-lg font-normal text-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(40,38,33,0.18)] md:text-xl"
          >
            <span>Let&apos;s Work together!</span>
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}