import { Link } from 'react-router-dom'
import { useDonate } from '../components/DonateContext'

const programs = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Mental Health & Wellness',
    description: 'Providing essential psychological support, counseling services, and community wellness initiatives to build resilience and promote mental wellbeing among vulnerable populations.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    title: 'Education Support',
    description: 'Ensuring access to quality education through scholarships, school supplies, tutoring programs, and infrastructure development for underserved schools.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Food Security & Relief',
    description: 'Addressing immediate hunger through relief distribution while implementing sustainable agricultural training and community gardens for long-term food sovereignty.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Youth Entrepreneurship',
    description: 'Equipping young people with business skills, micro-grants, and ongoing mentorship to launch sustainable enterprises and create local employment opportunities.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Young Parents & Women Empowerment',
    description: 'Comprehensive support for young mothers and women, including vocational training, childcare assistance, and financial literacy to foster economic independence.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Community Volunteerism',
    description: 'Mobilizing local and international volunteers to engage in meaningful community service projects, fostering cross-cultural exchange and collective action.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Environmental Stewardship',
    description: 'Promoting ecological conservation through tree planting drives, waste management education, and the promotion of renewable energy solutions within communities.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Youth Mentorship',
    description: 'Pairing at-risk youth with dedicated role models to provide guidance, career advice, and psychosocial support to navigate life\'s challenges successfully.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Community Innovation & Mentorship Hubs',
    description: 'Establishing physical safe spaces equipped with technology and resources where community members can collaborate, learn, and innovate together.',
  },
]

export default function ProgramsPage() {
  const { openDonate } = useDonate()

  return (
    <div className="pt-16 md:pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-background">
        <div className="max-w-[1440px] mx-auto">
          <h1 className="font-display text-[36px] md:text-[48px] font-bold leading-[44px] md:leading-[56px] text-primary mb-6">
            Our Programs
          </h1>
          <p className="text-[18px] leading-7 text-on-surface-variant max-w-3xl">
            We design and implement holistic interventions that address the multifaceted challenges faced by communities. Our programs are rooted in empowerment, sustainability, and dignity.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 xl:px-12 bg-background">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white p-8 border border-outline-variant rounded-xl hover:shadow-[0_4px_20px_rgba(0,107,104,0.05)] transition-shadow flex flex-col"
              >
                <div className="w-12 h-12 bg-surface-muted rounded-lg flex items-center justify-center mb-6 text-primary">
                  {program.icon}
                </div>
                <h3 className="font-display text-[20px] font-semibold text-primary mb-3">
                  {program.title}
                </h3>
                <p className="text-[14px] leading-5 text-on-surface-variant flex-1">
                  {program.description}
                </p>
                <div className="mt-6">
                  <span className="text-primary text-xs font-semibold uppercase tracking-wider flex items-center gap-1">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-background">
        <div className="max-w-[1440px] mx-auto">
          <div className="bg-surface-muted border border-outline-variant rounded-xl p-10 md:p-16 text-center">
            <h2 className="font-display text-[32px] font-semibold leading-10 text-primary mb-4">
              Want to support our initiatives?
            </h2>
            <p className="text-[16px] leading-6 text-on-surface-variant max-w-2xl mx-auto mb-8">
              Your contribution directly fuels these programs, creating lasting change in communities across Kenya.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={openDonate}
                className="bg-primary text-white px-8 py-3 rounded text-sm font-semibold uppercase tracking-wider hover:bg-primary-dark transition-colors cursor-pointer"
              >
                Donate Now
              </button>
              <Link
                to="/contact"
                className="border-2 border-primary text-primary px-8 py-3 rounded text-sm font-semibold uppercase tracking-wider hover:bg-primary hover:text-white transition-colors"
              >
                Become a Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}