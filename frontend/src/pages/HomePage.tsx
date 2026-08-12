import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import { useDonate } from '../components/DonateContext'

const impactStats = [
  { value: '50,000+', label: 'Direct beneficiaries targeted' },
  { value: '10,000', label: 'Youth to be mentored and placed in career tracks' },
  { value: '5,000', label: 'Young parents targeted for enterprise grants' },
  { value: 'Nationwide', label: 'Community and volunteer networks' },
]

const corePrograms = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Mental Health & Wellness',
    description: 'Providing essential psychological support, counseling services, and community wellness initiatives.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    title: 'Education Support',
    description: 'Ensuring access to quality education through scholarships, school supplies, and tutoring programs.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Food Security & Relief',
    description: 'Addressing immediate hunger through relief distribution and sustainable agricultural training.',
  },
]

export default function HomePage() {
  const { openDonate } = useDonate()

  return (
    <div className="pt-16 md:pt-24">
      <HeroSection />

      {/* Impact Statistics */}
      <section className="bg-primary py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-8 text-center">
            2027–2031 Targets
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-[36px] md:text-[48px] font-display font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-[14px] leading-5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-background">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">
                Who We Are
              </p>
              <h2 className="font-display text-[32px] font-semibold leading-10 text-primary mb-6">
                A Community-Driven Organization
              </h2>
              <p className="text-[16px] leading-6 text-on-surface-variant mb-4">
                CTC-Kenya is a grassroots organization dedicated to mentoring, empowering, and exposing communities to opportunities that transform lives.
              </p>
              <p className="text-[16px] leading-6 text-on-surface-variant">
                We work at the intersection of mental well-being, education, food security, and youth empowerment to create sustainable change across Kenya.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden border border-outline-variant h-80">
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80"
                alt="Community members"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Programs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-surface-muted">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">
              What We Do
            </p>
            <h2 className="font-display text-[32px] font-semibold leading-10 text-primary mb-4">
              Our Core Programs
            </h2>
            <p className="text-[16px] leading-6 text-on-surface-variant max-w-2xl mx-auto">
              We design and implement holistic interventions that address the multifaceted challenges faced by communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {corePrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white p-8 border border-outline-variant rounded-xl hover:shadow-[0_4px_20px_rgba(0,107,104,0.05)] transition-shadow"
              >
                <div className="w-12 h-12 bg-surface-muted rounded-full flex items-center justify-center mb-6 text-primary">
                  {program.icon}
                </div>
                <h3 className="font-display text-[20px] font-semibold text-primary mb-3">
                  {program.title}
                </h3>
                <p className="text-[14px] leading-5 text-on-surface-variant">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/programs"
              className="inline-block border-2 border-primary text-primary px-8 py-3 rounded text-sm font-semibold uppercase tracking-wider hover:bg-primary hover:text-white transition-colors"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* #MEECampaign */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-background">
        <div className="max-w-[1440px] mx-auto">
          <div className="bg-primary rounded-xl p-10 md:p-16 text-center">
            <h2 className="font-display text-[32px] md:text-[48px] font-bold text-accent mb-6">
              #MEECampaign
            </h2>
            <p className="text-white/90 text-[18px] leading-7 max-w-2xl mx-auto mb-4">
              <strong className="text-white">Mentor. Empower. Expose.</strong>
            </p>
            <p className="text-white/80 text-[16px] leading-6 max-w-2xl mx-auto mb-8">
              Our flagship campaign focuses on equipping the youth with critical life skills, vocational training, and exposure to global opportunities. Join us in shaping the next generation of leaders.
            </p>
            <Link
              to="/programs"
              className="inline-block border border-white text-white px-8 py-3 rounded text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-primary transition-colors"
            >
              Learn More About MEE
            </Link>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-surface-muted">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="font-display text-[32px] font-semibold leading-10 text-primary mb-4">
            Get Involved
          </h2>
          <p className="text-[16px] leading-6 text-on-surface-variant max-w-2xl mx-auto mb-8">
            Whether through donations, volunteering, or partnerships, your contribution makes a real difference in communities across Kenya.
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
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}