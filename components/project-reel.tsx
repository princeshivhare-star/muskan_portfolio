import Image from 'next/image'
import Link from 'next/link'
import { nocaffImages } from '@/lib/nocaff'
import { peherImages } from '@/lib/peher'

const reelImages = [
  { image: peherImages[10], href: '/projects/peher' },
  { image: nocaffImages[0], href: '/projects/nocaff' },
  { image: peherImages[3], href: '/projects/peher' },
  { image: nocaffImages[7], href: '/projects/nocaff' },
  { image: peherImages[6], href: '/projects/peher' },
  { image: nocaffImages[2], href: '/projects/nocaff' },
  { image: peherImages[0], href: '/projects/peher' },
  { image: nocaffImages[11], href: '/projects/nocaff' },
  { image: peherImages[9], href: '/projects/peher' },
  { image: nocaffImages[13], href: '/projects/nocaff' },
  { image: peherImages[5], href: '/projects/peher' },
  { image: nocaffImages[15], href: '/projects/nocaff' },
]

export function ProjectReel() {
  return (
    <section aria-label="Visual project reel" className="py-6 md:py-10">
      <div className="overflow-hidden">
        <div className="animate-marquee flex w-max gap-4 px-4">
          {[...reelImages, ...reelImages].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              tabIndex={i >= reelImages.length ? -1 : 0}
              aria-hidden={i >= reelImages.length}
              className="relative block h-52 w-72 shrink-0 overflow-hidden rounded-2xl bg-secondary md:h-72 md:w-[26rem]"
            >
              <Image
                src={item.image.src || '/placeholder.svg'}
                alt={i < reelImages.length ? item.image.alt : ''}
                fill
                sizes="(max-width: 768px) 288px, 416px"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
