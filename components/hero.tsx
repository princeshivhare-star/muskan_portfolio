```tsx
// hero.tsx
import Link from 'next/link'

export function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8F6F1] px-5 py-9 sm:px-8 md:py-11 lg:min-h-[600px] lg:px-12 lg:py-10"
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

      <div className="relative mx-auto flex w-full max-w-[1550px] flex-col items-center px-0 text-center lg:px-12 xl:px-16">
        <div className="relative w-full">
          {/* Central Muskan block */}
          <div className="mx-auto w-fit">
            <h1 className="whitespace-nowrap font-sans text-[3.8rem] font-normal leading-[0.78] tracking-[-0.035em] text-foreground sm:text-[5rem] md:text-[6rem] lg:text-[7.2rem] xl:text-[8.5rem]">
              Muskan
            </h1>

            {/* Logo with side labels */}
            <div className="relative mx-auto mt-4 w-[64%] sm:w-[62%] lg:mt-5 lg:w-[60%]">
              <img
                src="/muskan-logo.png"
                alt="Muskan portrait inside the brand logo"
                className="
                  block
                  h-auto
                  w-full
                  object-contain
                  mix-blend-multiply
                  contrast-[1.04]
                  saturate-[1.03]
                  transition-transform
                  duration-700
                  ease-out
                  hover:scale-[1.02]
                "
              />

              {/* Left desktop label */}
              <p
                className="
                  absolute
                  bottom-0
                  right-full
                  mr-4
                  hidden
                  whitespace-nowrap
                  text-left
                  font-sans
                  font-normal
                  leading-[0.86]
                  tracking-[-0.05em]
                  text-foreground
                  lg:block
                  lg:text-[1.45rem]
                  xl:mr-5
                  xl:text-[1.65rem]
                "
              >
                Visual &amp;
                <br />
                Brand Identity
                <br />
                Designer
              </p>

              {/* Right desktop label */}
              <p
                className="
                  absolute
                  bottom-0
                  left-full
                  ml-4
                  hidden
                  whitespace-nowrap
                  text-left
                  font-sans
                  font-normal
                  leading-[0.86]
                  tracking-[-0.05em]
                  text-foreground
                  lg:block
                  lg:text-[1.45rem]
                  xl:ml-5
                  xl:text-[1.65rem]
                "
              >
                Strategic
                <br />
                Emerging
                <br />
                Designer
              </p>
            </div>

            {/* Description directly below the logo */}
            <div className="mt-8 w-0 min-w-full lg:mt-9">
              <p className="text-center font-sans text-[1.1rem] font-normal leading-[1.35] tracking-[-0.025em] text-foreground sm:text-[1.25rem] lg:text-[1.35rem] xl:text-[1.45rem]">
                I turn ambitious ideas into memorable brands that capture
                attention, earn trust and help your business become the obvious
                choice.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile-only labels */}
        <div className="mt-7 flex w-full justify-between gap-6 lg:hidden">
          <p className="text-left font-sans text-[1.05rem] font-normal leading-[0.9] tracking-[-0.035em] text-foreground sm:text-[1.2rem]">
            Visual &amp;
            <br />
            Brand Identity
            <br />
            Designer
          </p>

          <p className="text-right font-sans text-[1.05rem] font-normal leading-[0.9] tracking-[-0.035em] text-foreground sm:text-[1.2rem]">
            Strategic
            <br />
            Emerging
            <br />
            Designer
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4 lg:mt-10">
          <Link
            href="/#projects"
            className="group inline-flex h-12 items-center justify-center gap-3 rounded-md border border-blue-brand bg-blue-brand px-7 font-sans text-sm font-normal text-white shadow-[0_10px_28px_rgba(108,147,255,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(108,147,255,0.25)] md:text-base"
          >
            <span>View Projects</span>
          </Link>

          <Link
            href="/#contact"
            className="group inline-flex h-12 items-center justify-center gap-3 rounded-md border border-foreground bg-foreground px-7 font-sans text-sm font-normal text-background shadow-[0_10px_28px_rgba(40,38,33,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(40,38,33,0.18)] md:text-base"
          >
            <span>Let&apos;s Work together!</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
```
