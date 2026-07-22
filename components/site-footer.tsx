const socials = [
  { label: 'Behance', href: 'https://behance.net' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
]
export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-xs font-medium tracking-widest uppercase text-background/60">Contact</p>
        <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight text-balance md:text-5xl">
          Got a brilliant idea hiding behind average branding?
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-background/80 text-pretty">
          Let&apos;s give it the identity, personality and presence it deserves.
        </p>
        <p className="mt-8 text-sm text-background/60">
          For brand identities, packaging, art direction and creative collaborations:
        </p>
        
          href="mailto:vmuskanaus@gmail.com"
          className="mt-1 inline-block text-lg font-medium underline decoration-blue-brand decoration-2 underline-offset-4 transition-colors hover:text-blue-brand"
        >
          vmuskanaus@gmail.com
        </a>
        <div className="mt-8">
          
            href="mailto:vmuskanaus@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-yellow-brand px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-105"
          >
            Let&apos;s Make It Memorable
            <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="mt-16 grid gap-10 border-t border-background/15 pt-10 md:grid-cols-3">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-background/60">
              Elsewhere on the Internet
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-background/80 transition-colors hover:text-yellow-brand"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-lg font-bold">Muskan</p>
            <p className="mt-1 text-sm text-background/70">Brand and Visual Identity Designer</p>
          </div>
          <div>
            <p className="text-sm text-background/70">Melbourne, Australia</p>
            <p className="mt-1 text-sm text-background/70">Working with good ideas worldwide</p>
          </div>
        </div>
        <p className="mt-12 text-xs text-background/50">
          Copyright © Muskan Varotaria. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
