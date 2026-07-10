import Link from 'next/link'

export function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background px-5 pb-4 pt-8 md:px-8 md:pb-6 md:pt-10"
    >
      <div className="relative mx-auto flex w-full max-w-[1500px] flex-col items-center text-center">
        {/* Name */}
        <h1 className="relative z-20 mb-6 font-sans text-[4rem] font-normal leading-[0.84] tracking-[-0.065em] text-foreground sm:mb-8 sm:text-[5rem] md:mb-10 md:text-[6rem] lg:text-[7rem]">
          Muskan
        </h1>

        {/* Muskan logo image */}
        <div className="relative z-10 flex w-full justify-center">
          <img
            src="/muskan-logo.png"
            alt="Muskan portrait inside the brand logo"
            className="
              h-auto
              w-[88%]
              max-w-[620px]
              object-contain
              mix-blend-multiply
              contrast-[1.06]
              saturate-[1.04]
              transition-transform
              duration-700
              ease-out
              hover:scale-[1.015]
              sm:w-[76%]
              sm:max-w-[680px]
              md:w-[64%]
              md:max-w-[720px]
              lg:w-[56%]
              lg:max-w-[760px]
            "
          />
        </div>

        {/* Supporting labels */}
        <div className="mt-3 grid w-full max-w-[900px] grid-cols-2 gap-10 text-left sm:mt-2 sm:gap-20 md:mt-0">
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
        <p className="mt-2 max-w-[620px] font-dribelland text-[1.8rem] font-normal leading-[0.8] tracking-normal text-foreground sm:text-[2.15rem] md:text-[2.55rem]">
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