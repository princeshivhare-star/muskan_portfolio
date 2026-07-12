import Link from 'next/link'

export function Hero() {
  return (
    <section
      id="about"
      className="font-stack-sans relative overflow-hidden bg-background px-5 pb-14 pt-20 text-foreground md:px-8 md:pb-20 md:pt-28 lg:min-h-[595px] lg:px-0 lg:pt-[82px]"
    >
      <div className="mx-auto grid w-full max-w-[984px] grid-cols-1 items-start lg:grid-cols-[268px_354px_362px]">
        <div className="order-2 mt-7 flex justify-between gap-6 lg:order-1 lg:mt-[204px] lg:justify-start">
          <p className="max-w-[150px] text-left text-[1.3rem] font-normal leading-[0.86] tracking-[-0.06em] text-foreground md:text-[1.55rem] lg:text-[1.32rem]">
            Visual &amp;
            <br />
            Brand Identity
            <br />
            Designer
          </p>
        </div>

        <div className="order-1 flex w-full min-w-0 flex-col items-center text-center lg:order-2 lg:w-[354px]">
          {/* Muskan remains within both centre grid lines */}
          <h1 className="w-full lg:-ml-[12.8px] whitespace-nowrap text-left text-[4.5rem] font-normal leading-[0.78] tracking-[-0.049em] text-foreground sm:text-[6rem] md:text-[7.75rem] lg:text-[7.4rem]">
            Muskan
          </h1>

          {/* Logo remains within both centre grid lines */}
          <div className="mt-4 w-full overflow-visible md:mt-5 lg:mt-4">
            <img
              src="/muskan-logo.png"
              alt="Muskan portrait inside the brand logo"
              className="block h-auto w-full object-contain lg:w-[133%] lg:max-w-none lg:-translate-x-[9.8%] lg:translate-y-[0.0001px]"
            />
          </div>

          {/* Moved slightly down, just below the horizontal grid line */}
          <div className="mt-8 w-full text-[1.35rem] font-normal leading-[1.02] tracking-[-0.075em] text-foreground sm:text-[1.6rem] md:text-[1.85rem] lg:mt-[42px] lg:text-[1.34rem] lg:leading-[0.86]">
            <p className="flex w-full items-center justify-between whitespace-nowrap">
              <span>I</span>
              <span>turn</span>
              <span>ambitious</span>
              <span>ideas</span>
              <span>into</span>
              <span>memorable</span>
              <span>brands</span>
            </p>

            <p className="flex w-full items-center justify-between whitespace-nowrap">
              <span>that</span>
              <span>capture</span>
              <span>attention,</span>
              <span>earn</span>
              <span>trust</span>
              <span>and</span>
              <span>help</span>
            </p>

            <p className="flex w-full items-center justify-between whitespace-nowrap">
              <span>your</span>
              <span>business</span>
              <span>become</span>
              <span>the</span>
              <span>obvious</span>
              <span>choice.</span>
            </p>
          </div>

          <div className="mt-12 flex w-full max-w-[484px] flex-col justify-center gap-4 sm:flex-row md:mt-12 md:gap-7 lg:mt-[48px] lg:w-[484px]">
            <Link
              href="/#projects"
              className="inline-flex h-12 min-w-[210px] items-center justify-center rounded-[6px] border border-foreground bg-[#7293ff] px-8 text-lg font-normal tracking-[-0.04em] text-white shadow-[0_14px_34px_rgba(114,147,255,0.18)] transition-transform hover:-translate-y-1 lg:h-[46px] lg:min-w-[226px] lg:text-base"
            >
              View Projects
            </Link>

            <Link
              href="/#contact"
              className="inline-flex h-12 min-w-[230px] items-center justify-center rounded-[6px] border border-foreground bg-foreground px-8 text-lg font-normal tracking-[-0.04em] text-background shadow-[0_14px_34px_rgba(23,17,14,0.12)] transition-transform hover:-translate-y-1 lg:h-[46px] lg:min-w-[226px] lg:text-base"
            >
              Let&apos;s Work together!
            </Link>
          </div>
        </div>

        <div className="order-3 hidden lg:mt-[204px] lg:flex lg:justify-end">
          <p className="max-w-[150px] text-left text-[1.32rem] font-normal leading-[0.86] tracking-[-0.06em] text-foreground">
            Strategic
            <br />
            Emerging
            <br />
            Designer
          </p>
        </div>
      </div>
    </section>
  )
}
