import Link from 'next/link'

export function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background px-5 pb-6 pt-8 md:px-8 md:pb-8 md:pt-10"
    >
      <div className="relative mx-auto flex w-full max-w-[1500px] flex-col items-center text-center">
        {/* Name */}
        <h1 className="relative z-20 mb-1 font-sans text-[4.2rem] font-normal leading-[0.82] tracking-[-0.065em] text-foreground sm:text-[5.5rem] md:text-[7rem] lg:text-[8.5rem]">
          Muskan
        </h1>

        {/* Logo and supporting labels */}
        <div className="relative z-10 w-full max-w-[760px]">
          <img
            src="/muskan-logo.png"
            alt="Muskan portrait inside the brand logo"
            className="
              mx-auto
              h-auto
              w-[92%]
              object-contain
              mix-blend-multiply
              contrast-[1.06]
              saturate-[1.04]
              transition-transform
              duration-700
              ease-out
              hover:scale-[1.015]
              sm:w-[88%]
              md:w-full
            "
          />

          {/* Supporting labels */}
          <div className="-mt-1 grid w-full grid-cols-2 items-start gap-6 px-[4%] text-left sm:-mt-2 sm:gap-10 md:-mt-3 md:px-0">
            <p className="text-[1.25rem] font-normal leading-[0.88] tracking-[-0.045em] text-foreground sm:text-[1.6rem] md:text-[2rem]">
              Visual &amp;
              <br />
              Brand Identity
              <br />
              Designer
            </p>

            <p className="text-right text-[1.25rem] font-normal leading-[0.88] tracking-[-0.045em] text-foreground sm:text-[1.6rem] md:text-[2rem]">
              Emerging
              <br />
              designer
            </p>
          </div>
        </div>

        {/* Introduction */}
        <p className="mt-8 max-w-[700px] font-dribelland text-[1.8rem] font-normal leading-[0.82] tracking-normal text-foreground sm:mt-10 sm:text-[2.2rem] md:text-[2.7rem]">
          I turn smart ideas into brands
          <br className="hidden sm:block" />
          people notice, trust and choose.
        </p>

        {/* Buttons */}
        <div className="mt-8 grid w-full max-w-[760px] grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-10">
          <Link
            href="/#projects"
            className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-blue-brand bg-blue-brand px-6 text-base font-normal text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(108,147,255,0.22)] md:text-lg"
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
            className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-foreground bg-foreground px-6 text-base font-normal text-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(40,38,33,0.16)] md:text-lg"
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