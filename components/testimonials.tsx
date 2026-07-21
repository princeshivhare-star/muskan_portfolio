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

export function Testimonials() {
  return (
    <section aria-label="Client testimonials" className="py-16 md:py-24">
      <h2 className="mx-auto max-w-6xl px-5 text-4xl font-bold tracking-tight md:px-8 md:text-6xl">
        Words From Clients
      </h2>
      <div className="mt-10 overflow-hidden md:mt-14">
        <div className="animate-marquee flex w-max gap-5 px-5">
          {[...testimonials, ...testimonials].map((t, i) => (
            <figure
              key={i}
              aria-hidden={i >= testimonials.length}
              className="flex w-80 shrink-0 flex-col gap-5 rounded-2xl border border-border bg-card p-7 md:w-96"
            >
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
          ))}
        </div>
      </div>
    </section>
  )
}
