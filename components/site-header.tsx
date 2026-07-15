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
      <div className="px-5 sm:px-0">
        <div className="mx-auto grid w-full max-w-[390px] grid-cols-[auto_1fr] items-center gap-4 py-4 sm:max-w-[500px] sm:gap-6 md:max-w-[650px] md:py-5 lg:max-w-[1000px] lg:grid-cols-[1fr_auto_1fr]">
          <Link
            href="/"
            className="justify-self-start text-[0.95rem] font-bold tracking-[0.01em] uppercase sm:text-[1.05rem]"
            aria-label="Muskan — home"
          >
            Muskan
            <span className="text-blue-brand">.</span>
          </Link>

          <nav
            aria-label="Main navigation"
            className="flex items-center justify-self-end gap-3 sm:gap-5 md:gap-6 lg:justify-self-center lg:gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-medium tracking-[0.01em] text-foreground/70 transition-colors hover:text-foreground sm:text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center justify-self-end gap-5 lg:flex">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium tracking-[0.08em] text-foreground/70 uppercase transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
