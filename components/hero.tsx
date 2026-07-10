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
      className="relative overflow-hidden bg-background px-5 pb-4 pt-8 md:px-8 md:pb-6 md:pt-10"
    >
      <div className="relative mx-auto flex w-full max-w-[1500px] flex-col items-center text-center">
        {/* Name */}
        <h1 className="relative z-20 mb-2 font-sans text-[4rem] font-normal leading-[0.84] tracking-[-0.065em] text-foreground sm:mb-3 sm:text-[5rem] md:mb-4 md:text-[6rem] lg:text-[7rem]">
          Muskan
        </h1>

        {/* Portrait clipped inside actual logo */}
        <div className="group relative z-10 w-[112%] max-w-none sm:w-[105%] md:w-[92vw] lg:w-[88vw] xl:w-[1120px]">
          <div className="relative aspect-[2.3/1] w-full">
            {/* Soft offset logo shadow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 bg-blue-brand/12 transition-transform duration-700 ease-out group-hover:translate-x-4 group-hover:translate-y-4"
              style={logoMaskStyle}
            />

            {/* Main masked portrait */}
            <div
              role="img"
              aria-label="Muskan Varotaria portrait clipped inside the brand logo"
              className="absolute inset-0 overflow-hidden"
              style={logoMaskStyle}
            >
              <img
                src="/muskan-original.png"
                alt=""
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[50%] w-auto max-w-none -translate-x-1/2 -translate-y-[46%] object-contain transition-transform duration-700 ease-out group-hover:-translate-y-[48%] group-hover:scale-[1.015]"
              />
            </div>

            {/* Brand blue overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-blue-brand/18 transition-colors duration-700 group-hover:bg-blue-brand/12"
              style={logoMaskStyle}
            />

            {/* Soft highlight */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/18 via-transparent to-blue-brand/8"
              style={logoMaskStyle}
            />
          </div>
        </div>

        {/* Supporting labels */}
        <div className="-mt-20 grid w-full max-w-[700px] grid-cols-2 gap-10 text-left sm:gap-20 md:-mt-28">
          <p className="text-[1.2rem] font-normal leading-[0.9] tracking-[-0.04em] text-foreground sm:text-[1.45rem] md:text-[1.7rem]">
            Visual &amp;
            <br />
            Brand Identity
            <br />
            Designer
          </p>

          <p className="text-right text-[1.2rem] font-normal leading-[0.9] tracking-[-0.04em] text-foreground sm:text-[1.45rem] md:text-[1.7rem]">
            Emerging
            <br />
            designer
          </p>
        </div>

        {/* Introduction */}
        <p className="mt-1 max-w-[620px] font-dribelland text-[1.8rem] font-normal leading-[0.8] tracking-normal text-foreground sm:text-[2.15rem] md:text-[2.55rem]">
          I turn smart ideas into brands
          <br className="hidden sm:block" />
          people notice, trust and choose.
        </p>

        {/* Buttons */}
        <div className="mt-4 grid w-full max-w-[590px] grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
          <Link
            href="/#projects"
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-blue-brand bg-blue-brand px-6 text-base font-normal text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(108,147,255,0.22)] md:text-lg"
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
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-foreground bg-foreground px-6 text-base font-normal text-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(40,38,33,0.16)] md:text-lg"
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