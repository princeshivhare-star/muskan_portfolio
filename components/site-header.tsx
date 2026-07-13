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
      <div className="mx-auto grid max-w-[923px] grid-cols-[1fr_auto] items-center gap-5 px-5 py-3 md:px-8 lg:grid-cols-[268px_354px_301px] lg:gap-0 lg:px-0">
        <Link
          href="/"
          className="justify-self-start text-[1.05rem] font-bold tracking-[0.01em] uppercase"
          aria-label="Muskan — home"
        >
          Muskan
          <span className="text-blue-brand">.</span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="flex items-center justify-self-end gap-5 md:gap-8 lg:justify-self-center"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-[0.01em] text-muted-foreground transition-colors hover:text-foreground"
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
              className="text-xs font-medium tracking-[0.08em] text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
