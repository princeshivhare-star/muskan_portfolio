import Link from 'next/link'

export function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8F6F1] px-5 py-12 sm:px-8 md:py-16 lg:min-h-[720px] lg:px-12"
    >
      {/* Soft background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[22%] top-0 h-[420px] w-[620px] rounded-full bg-white/75 blur-3xl" />
        <div className="absolute -left-24 top-48 h-72 w-72 rounded-full bg-blue-brand/5 blur-3xl" />
        <div className="absolute -right-24 top-40 h-80 w-80 rounded-full bg-[#D9D0EA]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1550px] px-0 lg:px-12 xl:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-4">
          {/* Left content */}
          <div className="relative z-20 flex flex-col items-start text-left lg:translate-x-8 xl:translate-x-12">
            {/* Name */}
            <h1 className="font-sans text-[4.5rem] font-normal leading-[0.78] tracking-[-0.07em] text-foreground sm:text-[6rem] md:text-[7rem] lg:text-[8.5rem] xl:text-[10rem]">
              Muskan
            </h1>

            {/* Labels */}
            <div className="mt-5 grid w-full max-w-[560px] grid-cols-2 gap-8 sm:mt-6 sm:gap-12">
              <p className="text-[1.45rem] font-normal leading-[0.86] tracking-[-0.045em] text-foreground sm:text-[1.7rem] lg:text-[2rem]">
                Visual &amp;
                <br />
                Brand Identity
                <br />
                Designer
              </p>

              <p className="text-[1.45rem] font-normal leading-[0.86] tracking-[-0.045em] text-foreground sm:text-[1.7rem] lg:text-[2rem]">
                Emerging
                <br />
                designer
              </p>
            </div>

            {/* Introduction */}
            <p className="mt-12 max-w-[560px] font-dribelland text-[2rem] font-normal leading-[0.82] tracking-normal text-foreground sm:text-[2.3rem] lg:mt-14 lg:text-[2.6rem]">
              I turn smart ideas into brands
              <br className="hidden sm:block" />
              people notice, trust and choose.
            </p>

            {/* Buttons */}
            <div className="mt-12 grid w-full max-w-[600px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-7">
              <Link
                href="/#projects"
                className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-lg border border-blue-brand bg-blue-brand px-6 text-base font-normal text-white shadow-[0_10px_28px_rgba(108,147,255,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(108,147,255,0.25)] md:text-lg"
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
                className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-lg border border-foreground bg-foreground px-6 text-base font-normal text-background shadow-[0_10px_28px_rgba(40,38,33,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(40,38,33,0.18)] md:text-lg"
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

          {/* Right logo image */}
          <div className="relative z-10 flex items-center justify-center lg:-translate-x-4">
            <img
              src="/muskan-logo.png"
              alt="Muskan portrait inside the brand logo"
              className="
                h-auto
                w-full
                max-w-[840px]
                object-contain
                mix-blend-multiply
                contrast-[1.04]
                saturate-[1.03]
                transition-transform
                duration-700
                ease-out
                hover:scale-[1.015]
                lg:w-[118%]
                lg:max-w-[930px]
                xl:w-[125%]
                xl:max-w-[1020px]
              "
            />
          </div>
        </div>
      </div>
    </section>
  )
}