import { AnimatedHeading } from '@/components/animated-heading'

const testimonials = [
  {
    name: 'Hannah Zhou',
    role: 'Client',
    quote:
      'Worked with Muskan on 2 separate projects and both had been amazing experiences. Great communicator, punctual on deadlines and quality work. Highly recommend for anyone who needs any design work done!',
  },
  {
    name: 'Manthan Bhikadiya',
    role: 'Senior Software Engineer – Full Stack AI',
    quote:
      'If you seek design nirvana, look no further—Muskan is a true visionary. From the initial concept discussions to the final deliverables, she showcased a level of talent and professionalism that surpassed my expectations. What truly sets Muskan apart is her ability to understand the core essence of a brand and incorporate it into her designs. For anyone seeking elegance and sophistication in their logo and graphic designs, Muskan is the clear and perfect choice.',
  },
  {
    name: 'Ramjii R',
    role: 'SAP FICO Consultant',
    quote:
      'Working with Muskan makes things easier as she understands the business requirement related to designs easily and delivers good quality of design on time. She has a very good eye for details when it comes to designing and comes with creative designs with ease. If anyone is looking for graphic designing I would recommend Muskan anyday.',
  },
  {
    name: 'Pranav Kumar',
    role: 'Head of Design, Dstudio Agency',
    quote:
      'Had the pleasure of working with Muskan on branding for 3–4 of my businesses, and she consistently delivered excellent results. She has a strong eye for design, understands brand identity well, and creates logos that are both professional and memorable. Throughout our projects, Muskan was responsive, open to feedback, and committed to delivering high-quality work on time. Her creativity and attention to detail made the entire branding process smooth and enjoyable. I would confidently recommend Muskan to anyone looking for a talented and reliable brand designer. I look forward to working with her again on future projects.',
  },
]

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure className="flex w-full flex-col gap-5 rounded-2xl border border-border bg-card p-7">
      <figcaption>
        <p className="text-sm font-bold tracking-widest uppercase">{t.name}</p>
        <p className="mt-1 text-sm text-muted-foreground">{t.role}</p>
      </figcaption>
      <blockquote className="text-sm leading-relaxed text-muted-foreground">
        {'"'}
        {t.quote}
        {'"'}
      </blockquote>
    </figure>
  )
}

export function Testimonials() {
  const columnUp = [...testimonials, ...testimonials]
  const columnDown = [...testimonials, ...testimonials].reverse()

  return (
    <section
      aria-label="Client testimonials"
      className="overflow-hidden border-t border-border py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:items-start md:px-8">
        <AnimatedHeading
          text="Words From Clients"
          as="h2"
          className="text-4xl font-bold tracking-tight md:text-6xl"
        />
        <div className="relative grid h-[600px] grid-cols-2 gap-5 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-scroll-up flex flex-col gap-5">
            {columnUp.map((t, i) => (
              <TestimonialCard key={`up-${i}`} t={t} />
            ))}
          </div>
          <div className="animate-scroll-down flex flex-col gap-5">
            {columnDown.map((t, i) => (
              <TestimonialCard key={`down-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
