import Link from 'next/link'

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
]

const socialLinks = [
  { label: 'Behance', href: 'https://behance.net' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
]

export function SiteHeader() {
  return (
    <header className="font-stack-sans sticky top-0 z-50 border-b border-border bg-background/92 backdrop-blur-md">
      <div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 z-[60] hidden h-[500vh] w-full lg:block">
        <div className="absolute inset-y-0 left-1/2 w-full max-w-[984px] -translate-x-1/2">
          <span className="absolute inset-y-0 left-0 w-px bg-cyan-300" />
          <span className="absolute inset-y-0 left-[150px] w-px bg-cyan-300/80" />
          <span className="absolute inset-y-0 left-[268px] w-px bg-cyan-300" />
          <span className="absolute inset-y-0 left-[622px] w-px bg-cyan-300" />
          <span className="absolute inset-y-0 left-[834px] w-px bg-cyan-300/80" />
          <span className="absolute inset-y-0 right-0 w-px bg-cyan-300" />
        </div>
        <span className="absolute left-0 top-[49px] h-px w-full bg-cyan-300" />
        <span className="absolute left-0 top-[391px] h-px w-full bg-cyan-300" />
      </div>

      <div className="mx-auto grid max-w-[984px] grid-cols-[1fr_auto] items-center gap-5 px-5 py-3 md:px-8 lg:grid-cols-[268px_354px_362px] lg:gap-0 lg:px-0">
        <Link
          href="/"
          className="justify-self-start text-[1.05rem] font-bold tracking-tight uppercase"
          aria-label="Muskan — home"
        >
          Muskan
          <span className="text-blue-brand">.</span>
        </Link>

        <nav aria-label="Main navigation" className="flex items-center justify-self-end gap-5 md:gap-8 lg:justify-self-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center justify-self-end gap-5 md:flex">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium tracking-wide text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
