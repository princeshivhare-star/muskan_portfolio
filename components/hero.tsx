import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="about"
      className="font-stack-sans relative overflow-hidden bg-background px-5 pb-14 pt-20 text-foreground md:px-8 md:pb-20 md:pt-28 lg:min-h-[90vh] lg:px-0 lg:pt-[124px]"
    >
      <style>
        {`
          .hero-logo-reveal {
            position: relative;
            overflow: hidden;
            clip-path: inset(0 100% 0 0);
            animation: hero-logo-reveal 1.45s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
            will-change: clip-path;
          }

          .hero-logo-reveal::after {
            content: '';
            position: absolute;
            inset: -12% auto -12% 0;
            width: 34%;
            pointer-events: none;
            background: linear-gradient(
              90deg,
              transparent 0%,
              rgb(255 255 255 / 0.18) 42%,
              rgb(255 255 255 / 0.42) 52%,
              rgb(255 255 255 / 0.12) 64%,
              transparent 100%
            );
            mix-blend-mode: screen;
            transform: translate3d(-120%, 0, 0);
            animation: hero-logo-sweep 1.45s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
            will-change: transform, opacity;
          }

          @keyframes hero-logo-reveal {
            from {
              clip-path: inset(0 100% 0 0);
            }

            to {
              clip-path: inset(0 0 0 0);
            }
          }

          @keyframes hero-logo-sweep {
            0% {
              opacity: 0;
              transform: translate3d(-120%, 0, 0);
            }

            18% {
              opacity: 1;
            }

            78% {
              opacity: 0.75;
            }

            100% {
              opacity: 0;
              transform: translate3d(330%, 0, 0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-logo-reveal {
              clip-path: inset(0 0 0 0);
              animation: none;
              will-change: auto;
            }

            .hero-logo-reveal::after {
              content: none;
            }
          }
        `}
      </style>
      <div className="mx-auto grid w-full max-w-[923px] grid-cols-1 items-start lg:grid-cols-[268px_354px_301px] lg:origin-top lg:scale-[1.2]">
        <div className="order-2 mt-7 flex justify-between gap-6 lg:order-1 lg:mt-[216px] lg:justify-start">
          <p className="max-w-[150px] text-left text-[1.3rem] font-medium leading-[0.86] tracking-[-0.018em] text-foreground md:text-[1.55rem] lg:translate-x-[46px] lg:text-[1.32rem]">
            Visual &amp;
            <br />
            Brand Identity
            <br />
            Designer
          </p>
        </div>

        <div className="order-1 flex w-full min-w-0 flex-col items-start text-left lg:order-2 lg:w-[354px]">
          <div className="w-full lg:w-[354px]">
            <h1 className="w-full origin-center whitespace-nowrap text-left text-[4.5rem] font-normal leading-[0.78] tracking-[0.006em] text-foreground sm:text-[6rem] md:text-[7.75rem] lg:w-max lg:translate-x-[-15px] lg:scale-x-[0.961] lg:text-[7.4375rem] lg:tracking-[-0.028em]">
              Muskan
            </h1>

            <div className="mt-[26px] w-full overflow-visible md:mt-7 lg:mt-[24px]">
              <div className="hero-logo-reveal block h-auto w-full object-contain lg:w-[132.3%] lg:max-w-none lg:-translate-x-[9.72%]">
                <img
                  src="/muskan-logo.png"
                  alt="Muskan portrait inside the brand logo"
                  className="block h-auto w-full object-contain"
                />
              </div>
            </div>

            <p className="mt-[22px] w-full text-left text-[1.35rem] font-normal leading-[1.02] tracking-[-0.018em] text-foreground sm:text-[1.6rem] md:text-[1.85rem] lg:mt-[23px] lg:text-[1.09rem] lg:leading-[0.9]">
              <span className="hero-copy-line">
                <span>I</span>
                <span>turn</span>
                <span>ambitious</span>
                <span>ideas</span>
                <span>into</span>
                <span>memorable</span>
                <span>brands</span>
              </span>
              <span className="hero-copy-line">
                <span>that</span>
                <span>capture</span>
                <span>attention,</span>
                <span>earn</span>
                <span>trust</span>
                <span>and</span>
                <span>help</span>
              </span>
              <span className="hero-copy-line">
                <span>your</span>
                <span>business</span>
                <span>become</span>
                <span>the</span>
                <span>obvious</span>
                <span>choice.</span>
              </span>
            </p>
          </div>

          <div className="mt-12 flex w-full max-w-[484px] flex-col justify-center gap-4 self-center sm:flex-row md:mt-12 md:gap-7 lg:mt-[48px] lg:w-[484px]">
            <Link
              href="/#projects"
              className="inline-flex h-12 min-w-[210px] items-center justify-center gap-2 rounded-[6px] border border-foreground bg-[#7293ff] px-8 text-lg font-normal tracking-[0.004em] text-white shadow-[0_14px_34px_rgba(114,147,255,0.18)] transition-transform hover:-translate-y-1 lg:h-[54px] lg:min-w-[250px] lg:px-9 lg:text-[1.06rem]"
            >
              <span>View Projects</span>
              <ArrowUpRight aria-hidden="true" className="size-4 stroke-[1.8]" />
            </Link>

            <Link
              href="/#contact"
              className="inline-flex h-12 min-w-[230px] items-center justify-center gap-2 rounded-[6px] border border-foreground bg-foreground px-8 text-lg font-normal tracking-[0.004em] text-background shadow-[0_14px_34px_rgba(23,17,14,0.12)] transition-transform hover:-translate-y-1 lg:h-[54px] lg:min-w-[250px] lg:px-9 lg:text-[1.06rem]"
            >
              <span>Let&apos;s Work together!</span>
              <ArrowUpRight aria-hidden="true" className="size-4 stroke-[1.8]" />
            </Link>
          </div>
        </div>

        <div className="order-3 hidden lg:mt-[216px] lg:flex lg:justify-start">
          <p className="max-w-[150px] text-right text-[1.32rem] font-medium leading-[0.86] tracking-[-0.018em] text-foreground lg:translate-x-[123px]">
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
