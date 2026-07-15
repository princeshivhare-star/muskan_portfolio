import Image from 'next/image'
import Link from 'next/link'
import { nocaffImages } from '@/lib/nocaff'
import { peherImages } from '@/lib/peher'
import { clubduelzImages } from '@/lib/clubduelz'
import { metalalignsImages } from '@/lib/metalaligns'

const reelImages = [
  { image: peherImages[10], href: '/projects/peher' },
  { image: nocaffImages[0], href: '/projects/nocaff' },
  { image: clubduelzImages[11], href: '/projects/clubduelz' }, // 12.png poster mockup
  { image: metalalignsImages[1], href: '/projects/metalaligns' }, // 2.png business card mockup

  { image: peherImages[3], href: '/projects/peher' },
  { image: nocaffImages[7], href: '/projects/nocaff' },
  { image: clubduelzImages[2], href: '/projects/clubduelz' }, // 3.png app icon mockup
  { image: metalalignsImages[3], href: '/projects/metalaligns' }, // 4.png lanyard mockup

  { image: peherImages[6], href: '/projects/peher' },
  { image: nocaffImages[2], href: '/projects/nocaff' },
  { image: clubduelzImages[8], href: '/projects/clubduelz' }, // 9.png poster mockups
  { image: metalalignsImages[5], href: '/projects/metalaligns' }, // 6.png container mockup

  { image: peherImages[0], href: '/projects/peher' },
  { image: nocaffImages[11], href: '/projects/nocaff' },
  { image: clubduelzImages[12], href: '/projects/clubduelz' }, // 13.png jersey mockup
  { image: metalalignsImages[7], href: '/projects/metalaligns' }, // 8.png stationery mockup

  { image: peherImages[9], href: '/projects/peher' },
  { image: nocaffImages[13], href: '/projects/nocaff' },
  { image: clubduelzImages[13], href: '/projects/clubduelz' }, // 14.png browser mockup
  { image: metalalignsImages[8], href: '/projects/metalaligns' }, // 9.png shirt mockup

  { image: peherImages[5], href: '/projects/peher' },
  { image: nocaffImages[15], href: '/projects/nocaff' },
  { image: clubduelzImages[14], href: '/projects/clubduelz' }, // 15.png watch mockup
  { image: metalalignsImages[9], href: '/projects/metalaligns' }, // 10.png
]

export function ProjectReel() {
  return (
    <section aria-label="Visual project reel" className="-mt-8 py-5 md:-mt-14 md:py-8">
      <div className="overflow-hidden">
        <div className="animate-marquee flex w-max gap-4 px-4">
          {[...reelImages, ...reelImages].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              tabIndex={i >= reelImages.length ? -1 : 0}
              aria-hidden={i >= reelImages.length}
              className="reel-card relative block h-52 w-72 shrink-0 transform-gpu overflow-hidden rounded-2xl bg-secondary md:h-72 md:w-[26rem]"
            >
              <Image
                src={item.image.src || '/placeholder.svg'}
                alt={i < reelImages.length ? item.image.alt : ''}
                fill
                priority={i < 3}
                sizes="(max-width: 768px) 288px, 416px"
                className="object-cover transition-transform duration-500 will-change-transform hover:scale-105"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
