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

      {/* Irregular line arrangement */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1700 900"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 z-[2] hidden h-full w-full lg:block"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          className="text-foreground/70"
        >
          {/* Upper horizontal irregular line */}
          <path
            d="
              M -40 238
              C 40 232, 95 229, 145 231
              C 185 233, 206 239, 238 232
              C 276 223, 310 231, 350 224
              C 391 218, 425 222, 458 216
              C 481 212, 495 218, 518 225
              C 540 232, 557 232, 581 227
              C 620 217, 674 221, 729 221
              C 787 221, 817 212, 873 211
              C 931 210, 970 211, 1028 210
              C 1085 209, 1127 197, 1181 190
              C 1235 182, 1275 179, 1331 180
              C 1390 181, 1427 177, 1476 173
              C 1531 169, 1586 157, 1740 140
            "
          />

          {/* Lower horizontal irregular line */}
          <path
            d="
              M -40 560
              C 44 564, 94 571, 156 570
              C 217 569, 263 574, 327 572
              C 388 570, 426 564, 486 565
              C 548 566, 595 562, 653 556
              C 712 550, 755 547, 814 548
              C 868 549, 904 536, 951 531
              C 1007 526, 1051 533, 1115 530
              C 1173 527, 1225 523, 1284 522
              C 1344 521, 1390 512, 1448 510
              C 1510 508, 1572 505, 1740 505
            "
          />

          {/* Left vertical organic line */}
          <path
            d="
              M 602 -40
              C 601 22, 603 76, 602 121
              C 602 166, 594 201, 596 244
              C 599 289, 594 331, 591 370
              C 588 411, 586 448, 591 487
              C 597 532, 587 564, 589 607
              C 592 658, 602 702, 603 749
              C 604 792, 605 832, 614 940
            "
          />

          {/* Right vertical organic line */}
          <path
            d="
              M 1102 -40
              C 1098 21, 1102 67, 1107 106
              C 1114 153, 1104 197, 1106 240
              C 1108 281, 1106 322, 1108 365
              C 1110 408, 1117 449, 1116 492
              C 1115 538, 1125 574, 1125 618
              C 1125 666, 1129 709, 1131 754
              C 1133 800, 1133 846, 1138 940
            "
          />
        </g>
      </svg>

      <div className="relative z-10 mx-auto flex w-full max-w-[1550px] flex-col items-center px-0 text-center lg:px-12 xl:px-16">
        <div className="relative w-full">
          {/* Left label */}
          <p className="absolute left-0 top-1/2 hidden -translate-y-1/2 text-left font-sans text-[1.25rem] font-normal leading-[0.86] tracking-[-0.045em] text-foreground sm:text-[1.45rem] lg:block lg:text-[1.7rem]">
            Visual &amp;
            <br />
            Brand Identity
            <br />
            Designer
          </p>

          {/* Right label */}
          <p className="absolute right-0 top-1/2 hidden -translate-y-1/2 text-right font-sans text-[1.25rem] font-normal leading-[0.86] tracking-[-0.045em] text-foreground sm:text-[1.45rem] lg:block lg:text-[1.7rem]">
            Strategic
            <br />
            Emerging
            <br />
            Designer
          </p>

          {/* Heading and logo */}
          <div className="mx-auto w-fit">
            <h1 className="whitespace-nowrap font-sans text-[3.8rem] font-normal leading-[0.78] tracking-[-0.01em] text-foreground sm:text-[5rem] md:text-[6rem] lg:text-[7.2rem] xl:text-[8.5rem]">
              Muskan
            </h1>

            <img
              src="/muskan-logo.png"
              alt="Muskan portrait inside the brand logo"
              className="
                mt-2
                h-auto
                w-full
                object-contain
                mix-blend-multiply
                contrast-[1.04]
                saturate-[1.03]
                transition-transform
                duration-700
                ease-out
                hover:scale-[1.015]
              "
            />
          </div>
        </div>

        {/* Mobile labels */}
        <div className="mt-6 flex w-full justify-between gap-6 lg:hidden">
          <p className="text-left font-sans text-[1.1rem] font-normal leading-[0.9] tracking-[-0.03em] text-foreground sm:text-[1.25rem]">
            Visual &amp;
            <br />
            Brand Identity
            <br />
            Designer
          </p>

          <p className="text-right font-sans text-[1.1rem] font-normal leading-[0.9] tracking-[-0.03em] text-foreground sm:text-[1.25rem]">
            Strategic
            <br />
            Emerging
            <br />
            Designer
          </p>
        </div>

        {/* Description */}
        <p className="mt-10 max-w-[560px] font-sans text-[1.25rem] font-normal leading-[1.35] tracking-[-0.02em] text-foreground sm:text-[1.4rem] lg:mt-12 lg:text-[1.5rem]">
          I turn ambitious ideas into memorable brands that capture
          attention, earn trust and help your business become the
          obvious choice.
        </p>

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