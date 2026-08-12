const impactData = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    title: 'Students Mentored',
    current: '12,500',
    target: '25,000',
    currentYear: '2024',
    targetYear: '2031',
    progress: 50,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Clean Water Access',
    current: '8,200',
    target: '20,000',
    currentYear: '2024',
    targetYear: '2031',
    progress: 41,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'SMEs Supported',
    current: '450',
    target: '1,000',
    currentYear: '2024',
    targetYear: '2031',
    progress: 45,
  },
]

const testimonials = [
  {
    quote: '"The mentorship program didn\'t just give me skills; it gave me the confidence to believe my voice matters. Today, I\'m leading community initiatives I once only dreamed of."',
    name: 'Grace, 22 • Nairobi',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80',
  },
  {
    quote: '"With access to clean water, my small farm has doubled its yield. My children now go to school instead of walking miles for water."',
    name: 'Samuel, 54 • Rural Machakos',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80',
  },
  {
    quote: '"The small business grant allowed me to buy the tools I needed. Now I employ three other youths from my neighborhood."',
    name: 'David, 28 • Kisumu',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  },
]

const sdgs = [
  { number: 1, label: 'No Poverty', bg: '#006B68', text: '#FFFFFF' },
  { number: 2, label: 'Zero Hunger', bg: '#00514e', text: '#FFFFFF' },
  { number: 3, label: 'Good Health', bg: '#00807c', text: '#FFFFFF' },
  { number: 4, label: 'Quality Education', bg: '#D6B334', text: '#FFFFFF' },
  { number: 8, label: 'Decent Work', bg: '#00403e', text: '#FFFFFF' },
  { number: 17, label: 'Partnerships', bg: '#006B68', text: '#FFFFFF', border: '#D6B334' },
]

export default function ImpactPage() {
  return (
    <div className="pt-16 md:pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-background">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
            <h1 className="font-display text-[36px] md:text-[48px] font-bold leading-[44px] md:leading-[56px] text-primary">
              Measuring Our Impact
            </h1>
            <p className="text-[18px] leading-7 text-on-surface-variant">
              We believe in transparent, data-driven humanitarianism. Every number represents a life transformed, a community empowered, and a step closer to sustainable change.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Trajectory */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 xl:px-12 bg-background">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-display text-[32px] font-semibold leading-10 text-primary mb-2">
            Impact Trajectory
          </h2>
          <p className="text-[16px] leading-6 text-on-surface-variant mb-8">
            Our current achievements compared to our 2027–2031 strategic targets.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactData.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 border border-outline-variant rounded-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-surface-muted rounded-bl-xl"></div>
                <div className="w-12 h-12 bg-surface-muted rounded-lg flex items-center justify-center mb-6 text-primary">
                  {item.icon}
                </div>
                <h3 className="font-display text-[20px] font-semibold text-primary mb-6">
                  {item.title}
                </h3>
                <div className="mb-4">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                      Current ({item.currentYear})
                    </span>
                    <span className="font-display text-[32px] font-bold text-primary">
                      {item.current}
                    </span>
                  </div>
                  <div className="w-full bg-surface-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                    Target ({item.targetYear})
                  </span>
                  <span className="font-display text-[20px] font-semibold text-on-surface-variant">
                    {item.target}
                  </span>
                </div>
                <div className="w-full bg-accent/20 rounded-full h-1.5 mt-2">
                  <div
                    className="bg-accent h-1.5 rounded-full"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voices of Change */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-surface-muted">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-display text-[32px] font-semibold leading-10 text-primary mb-2">
            Voices of Change
          </h2>
          <p className="text-[16px] leading-6 text-on-surface-variant mb-12 max-w-2xl">
            Beyond the numbers, our impact is measured in individual stories of resilience and empowerment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Main testimonial */}
            <div className="md:col-span-7 relative rounded-xl overflow-hidden h-96">
              <img
                src={testimonials[0].image}
                alt={testimonials[0].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-8">
                <svg className="w-8 h-8 text-accent mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
                <p className="text-white text-[18px] leading-7 mb-4">
                  {testimonials[0].quote}
                </p>
                <p className="text-accent text-xs font-semibold uppercase tracking-wider">
                  {testimonials[0].name}
                </p>
              </div>
            </div>
            {/* Side testimonials */}
            <div className="md:col-span-5 flex flex-col gap-6">
              {testimonials.slice(1).map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-6 border border-outline-variant rounded-xl flex gap-4"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-lg object-cover shrink-0"
                  />
                  <div>
                    <p className="text-[14px] leading-5 text-on-surface-variant italic mb-2">
                      {testimonial.quote}
                    </p>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-background">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="font-display text-[32px] font-semibold leading-10 text-primary mb-4">
            Global Goals Alignment
          </h2>
          <p className="text-[16px] leading-6 text-on-surface-variant max-w-2xl mx-auto mb-12">
            Our local actions are designed to contribute directly to the United Nations Sustainable Development Goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {sdgs.map((sdg) => (
              <div
                key={sdg.number}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg flex flex-col items-center justify-center"
                style={{
                  backgroundColor: sdg.bg,
                  color: sdg.text,
                  border: sdg.border ? `2px solid ${sdg.border}` : undefined,
                }}
              >
                <span className="font-display text-[20px] sm:text-[24px] font-bold">{sdg.number}</span>
                <span className="text-[9px] sm:text-[10px] leading-3 text-center px-2 mt-1">{sdg.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}