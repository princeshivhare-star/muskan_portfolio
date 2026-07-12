import Link from 'next/link'

export function Hero() {
  return (
    <section
      id="about"
      className="font-stack-sans relative overflow-hidden bg-background px-5 pb-14 pt-10 text-foreground md:px-8 md:pb-20 md:pt-14 lg:min-h-[595px] lg:px-0 lg:pt-[36px]"
    >
      <div className="mx-auto grid w-full max-w-[984px] grid-cols-1 items-start lg:grid-cols-[268px_354px_362px] lg:grid-rows-[auto_auto]">
        {/* Left side label — bottom-aligned to logo's bottom edge (row 1) */}
        <div className="order-2 mt-7 flex justify-between gap-6 lg:order-1 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:justify-start lg:self-end">
          <p className="font-haas-roman max-w-[150px] text-left text-[1.3rem] font-normal leading-[0.86] tracking-[0.01em] text-foreground md:text-[1.55rem] lg:text-[1.32rem]">
            Visual &amp;
            <br />
            Brand Identity
            <br />
            Designer
          </p>
        </div>

        {/* Center: Muskan wordmark + logo — defines the height of row 1 */}
        <div className="order-1 flex w-full min-w-0 flex-col items-start text-left lg:order-2 lg:col-start-2 lg:row-start-1 lg:w-[354px]">
          <h1 className="w-full whitespace-nowrap text-left text-[4.5rem] font-normal leading-[0.78] tracking-[-0.049em] text-foreground sm:text-[6rem] md:text-[7.75rem] lg:text-[7.4rem]">
            Muskan
          </h1>

          <div className="mt-4 w-full md:mt-5 lg:mt-4">
            <img
              src="/muskan-logo.png"
              alt="Muskan portrait inside the brand logo"
              className="block h-auto w-full object-contain"
            />
          </div>
        </div>

        {/* Right side label — bottom-aligned to logo's bottom edge (row 1) */}
        <div className="order-3 hidden lg:col-start-3 lg:row-start-1 lg:flex lg:justify-end lg:self-end">
          <p className="font-haas-roman max-w-[150px] text-left text-[1.32rem] font-normal leading-[0.86] tracking-[0.01em] text-foreground">
            Strategic
            <br />
            Emerging
            <br />
            Designer
          </p>
        </div>

        {/* Tagline + buttons — row 2, under the center column only */}
        <div className="order-4 flex w-full flex-col items-start lg:col-start-2 lg:row-start-2 lg:w-[354px]">
          <p className="font-haas-roman mt-8 w-full text-left text-[1.35rem] font-normal leading-[1.15] tracking-[0.01em] text-foreground sm:text-[1.6rem] md:text-[1.85rem] lg:mt-[42px] lg:text-[1.34rem] lg:leading-[1.05] lg:tracking-[0.015em]">
            I turn ambitious ideas into memorable brands
            <br />
            that capture attention, earn trust and help
            <br />
            your business become the obvious choice.
          </p>

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
      </div>
    </section>
  )
}
