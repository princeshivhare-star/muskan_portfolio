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
            contain: paint;
            transform: translate3d(0, 0, 0);
            backface-visibility: hidden;
          }

          .hero-logo-reveal > img {
            opacity: 0.14;
            filter: saturate(0.68) brightness(0.72);
            animation: hero-logo-base 3.6s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards;
            will-change: opacity, filter;
            transform: translate3d(0, 0, 0);
          }

          .hero-logo-reveal::before {
            content: '';
            position: absolute;
            inset: 0;
            z-index: 1;
            pointer-events: none;
            background-image: url('/muskan-logo.png');
            background-size: 100% 100%;
            background-position: center;
            background-repeat: no-repeat;
            clip-path: inset(0 100% 0 0);
            filter: saturate(1.06) brightness(1.08);
            animation: hero-logo-reveal 3.6s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards;
            will-change: clip-path;
            transform: translate3d(0, 0, 0);
          }

          .hero-logo-reveal::after {
            content: none;
          }

          .hero-soft-reveal {
            opacity: 0;
            filter: blur(5px);
            animation: hero-soft-reveal 1.05s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            will-change: opacity, filter;
          }

          @keyframes hero-soft-reveal {
            from {
              opacity: 0;
              filter: blur(5px);
            }

            to {
              opacity: 1;
              filter: blur(0);
            }
          }

          @keyframes hero-logo-base {
            from {
              opacity: 0.14;
              filter: saturate(0.68) brightness(0.72);
            }

            76% {
              opacity: 0.14;
              filter: saturate(0.68) brightness(0.72);
            }

            to {
              opacity: 1;
              filter: saturate(1) brightness(1);
            }
          }

          @keyframes hero-logo-reveal {
            from {
              clip-path: inset(0 100% 0 0);
            }

            to {
              clip-path: inset(0 0 0 0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-soft-reveal,
            .hero-logo-reveal > img {
              opacity: 1;
              filter: none;
              animation: none;
              will-change: auto;
            }

            .hero-logo-reveal::before,
            .hero-logo-reveal::after {
              content: none;
            }
          }

          @media (max-width: 639px) {
            .hero-title-fit {
              display: block;
              width: 100%;
              margin-left: auto;
              margin-right: auto;
              font-size: clamp(5.45rem, 22.6vw, 5.65rem);
              letter-spacing: -0.055em;
              transform: translateX(9.73%);
              transform-origin: left center;
            }

            .hero-mobile-copy {
              width: 75.6%;
              margin-left: 9.73%;
              margin-right: auto;
            }
          }

          @media (min-width: 640px) and (max-width: 1023px) {
            .hero-title-fit {
              display: block;
              width: 100%;
              margin-left: auto;
              margin-right: auto;
              font-size: clamp(8.1rem, 21.6vw, 10.95rem);
              letter-spacing: -0.058em;
              transform: translateX(3px);
              transform-origin: left center;
            }
          }

          @media (max-width: 1023px) {
            .hero-mobile-actions {
              width: 100%;
              max-width: none;
              align-self: stretch;
            }

            .hero-mobile-actions .hero-cta {
              width: 100%;
              min-width: 0;
            }

            .hero-mobile-copy {
              width: 100%;
              margin-left: auto;
              margin-right: auto;
              white-space: normal;
              word-break: normal;
              overflow-wrap: normal;
            }

            .hero-copy-line {
              display: inline;
              white-space: normal;
            }

            .hero-copy-line > span + span::before {
              content: ' ';
            }

            .hero-copy-line + .hero-copy-line::before {
              content: ' ';
            }
          }

          @media (max-width: 639px) {
            .hero-mobile-copy {
              width: 75.6%;
              margin-left: 9.73%;
              margin-right: auto;
              font-size: clamp(0.93rem, 3.9vw, 1rem);
              line-height: 1.22;
              text-align: justify;
              text-align-last: justify;
            }

            .hero-mobile-copy .hero-copy-line {
              display: block;
              white-space: nowrap;
              text-align: justify;
              text-align-last: justify;
            }

            .hero-mobile-copy .hero-copy-line + .hero-copy-line::before,
            .hero-mobile-copy .hero-copy-line > span + span::before {
              content: none;
            }
          }
        `}
      </style>
      <div className="mx-auto grid w-full max-w-[923px] grid-cols-1 items-start lg:grid-cols-[268px_354px_301px] lg:origin-top lg:translate-x-[10px] lg:scale-[1.2]">
        <div className="order-2 mt-7 hidden justify-between gap-6 lg:order-1 lg:mt-[216px] lg:flex lg:justify-start">
          <p className="font-stack-medium hero-soft-reveal max-w-[150px] text-left text-[1.3rem] leading-[0.86] tracking-[-0.018em] text-foreground md:text-[1.55rem] lg:translate-x-[46px] lg:text-[1.32rem]" style={{ animationDelay: '0.32s' }}>
            Visual &amp;
            <br />
            Brand Identity
            <br />
            Designer
          </p>
        </div>

        <div className="order-1 mx-auto flex w-full max-w-[390px] min-w-0 flex-col items-start text-left sm:max-w-[500px] md:max-w-[650px] lg:order-2 lg:mx-0 lg:w-[354px] lg:max-w-none">
          <div className="w-full lg:w-[354px]">
            <h1 className="hero-title-fit hero-soft-reveal w-full whitespace-nowrap text-left font-normal leading-[0.78] tracking-[0.006em] text-foreground lg:w-max lg:translate-x-[-15px] lg:scale-x-[0.961] lg:text-[7.4375rem] lg:tracking-[-0.028em]" style={{ animationDelay: '0.08s' }}>
              Muskan
            </h1>

            <div className="mt-[26px] w-full overflow-visible md:mt-7 lg:mt-[24px]">
              <div className="hero-logo-reveal block h-auto w-full object-contain lg:w-[132.3%] lg:max-w-none lg:-translate-x-[9.72%]">
                <img
                  src="/muskan-logo.png"
                  alt="Muskan portrait inside the brand logo"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="block h-auto w-full object-contain"
                />
              </div>
            </div>

            <p className="hero-mobile-copy hero-soft-reveal mt-[22px] w-full text-left text-[1.22rem] font-normal leading-[1.25] tracking-[-0.018em] text-foreground sm:text-[1.45rem] md:text-[1.68rem] lg:mt-[23px] lg:text-[1.09rem] lg:leading-[0.9]" style={{ animationDelay: '0.5s' }}>
              <span className="hero-copy-line">
                <span>I</span>
                {' '}
                <span>turn</span>
                {' '}
                <span>ambitious</span>
                {' '}
                <span>ideas</span>
                {' '}
                <span>into</span>
              </span>
              {' '}
              <span className="hero-copy-line">
                <span>memorable</span>
                {' '}
                <span>brands</span>
                {' '}
                <span>that</span>
                {' '}
                <span>capture</span>
              </span>
              {' '}
              <span className="hero-copy-line">
                <span>attention,</span>
                {' '}
                <span>earn</span>
                {' '}
                <span>trust</span>
                {' '}
                <span>and</span>
                {' '}
                <span>help</span>
              </span>
              {' '}
              <span className="hero-copy-line">
                <span>your</span>
                {' '}
                <span>business</span>
                {' '}
                <span>become</span>
                {' '}
                <span>the</span>
                {' '}
                <span>obvious</span>
                {' '}
                <span>choice.</span>
              </span>
            </p>
          </div>

          <div className="hero-mobile-actions hero-soft-reveal mt-12 flex w-full max-w-[484px] flex-col justify-center gap-4 self-center sm:flex-row md:mt-12 md:gap-7 lg:mt-[48px] lg:w-[484px]" style={{ animationDelay: '0.68s' }}>
            <Link
              href="/#projects"
              className="hero-cta inline-flex h-12 min-w-[210px] items-center justify-center gap-2 rounded-[6px] border border-foreground bg-[#7293ff] px-8 text-lg font-normal tracking-[0.004em] text-white shadow-[0_14px_34px_rgba(114,147,255,0.18)] transition-transform hover:-translate-y-1 lg:h-[54px] lg:min-w-[250px] lg:px-9 lg:text-[1.06rem]"
            >
              <span>View Projects</span>
              <ArrowUpRight aria-hidden="true" className="size-4 stroke-[1.8]" />
            </Link>

            <Link
              href="/#contact"
              className="hero-cta inline-flex h-12 min-w-[230px] items-center justify-center gap-2 rounded-[6px] border border-foreground bg-foreground px-8 text-lg font-normal tracking-[0.004em] text-background shadow-[0_14px_34px_rgba(23,17,14,0.12)] transition-transform hover:-translate-y-1 lg:h-[54px] lg:min-w-[250px] lg:px-9 lg:text-[1.06rem]"
            >
              <span>Let&apos;s Work together!</span>
              <ArrowUpRight aria-hidden="true" className="size-4 stroke-[1.8]" />
            </Link>
          </div>
        </div>

        <div className="order-3 hidden lg:mt-[216px] lg:flex lg:justify-start">
          <p className="font-stack-medium hero-soft-reveal max-w-[150px] text-right text-[1.32rem] leading-[0.86] tracking-[-0.018em] text-foreground lg:translate-x-[103px]" style={{ animationDelay: '0.38s' }}>
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
