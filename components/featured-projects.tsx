import Image from 'next/image'
import Link from 'next/link'
import { nocaffCover } from '@/lib/nocaff'
import { peherCover } from '@/lib/peher'

const projects = [
  {
    slug: 'peher',
    title: 'Modern Heritage',
    category: 'Visual Identity / Fashion Apparel',
    year: '2025',
    cover: peherCover,
  },
  {
    slug: 'nocaff',
    title: 'NOCAFF',
    category: 'Brand Identity / Packaging / Beverage',
    year: '2026',
    cover: nocaffCover,
  },
]

export function FeaturedProjects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <h2 className="text-4xl font-bold tracking-tight md:text-6xl">Featured Projects</h2>

      <div className="mt-10 flex flex-col gap-12 md:mt-14">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block"
            aria-label={`View the ${project.title} case study`}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-secondary md:aspect-[16/9]">
              <Image
                src={project.cover.src || "/placeholder.svg"}
                alt={project.cover.alt}
                fill
                sizes="(max-width: 1152px) 100vw, 1152px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6 md:flex-row md:items-end md:justify-between md:p-10">
                <h3 className="text-3xl font-bold text-white md:text-5xl">{project.title}</h3>
                <p className="text-sm text-white/80 md:text-base">
                  {project.category} — {project.year}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
