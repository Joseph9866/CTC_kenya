import { Link } from 'react-router-dom'
import { useDonate } from '../components/DonateContext'

const waysToGetInvolved = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Volunteer',
    description: 'Contribute your time, skills and experience to community programs, mentorship activities, training sessions and outreach initiatives.',
    cta: 'Volunteer With Us',
    ctaType: 'link' as const,
    ctaTarget: '/contact',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    title: 'Partner With Us',
    description: 'Work with CTC-Kenya to design and support initiatives that address community needs and create measurable, sustainable impact.',
    cta: 'Explore Partnership',
    ctaType: 'link' as const,
    ctaTarget: '/contact',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Sponsor a Program',
    description: 'Support a specific program, activity or community initiative aligned with your organization\'s social impact or community development goals.',
    cta: 'Sponsor a Program',
    ctaType: 'link' as const,
    ctaTarget: '/contact',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Make a Donation',
    description: 'Your financial contribution helps strengthen programs supporting mental well-being, education, food security and youth empowerment.',
    cta: 'Donate',
    ctaType: 'donate' as const,
    ctaTarget: '',
  },
]

const volunteerAreas = [
  'Community mentorship',
  'Training and skills development',
  'Community outreach',
  'Professional and technical expertise',
  'Research and documentation',
  'Events and program support',
]

const partnershipTypes = [
  {
    title: 'Corporate Partnerships',
    description: 'Collaborate through corporate social responsibility, employee engagement and community investment.',
  },
  {
    title: 'Program Partnerships',
    description: 'Support the design, implementation and scaling of programs that address identified community needs.',
  },
  {
    title: 'Technical & Knowledge Partnerships',
    description: 'Contribute expertise, technology, research, training and professional capacity.',
  },
]

const programAreas = [
  {
    title: 'Mental Health & Wellness',
    description: 'Psychological support, counseling and community wellness initiatives.',
  },
  {
    title: 'Quality Education',
    description: 'Scholarships, school supplies, tutoring and infrastructure development.',
  },
  {
    title: 'Food Security & Relief',
    description: 'Relief distribution and sustainable agricultural training for communities.',
  },
  {
    title: 'Youth Mentorship & Empowerment',
    description: 'Career pathways, vocational training and mentorship for young people.',
  },
]

const communityEngagementItems = [
  {
    title: 'Share Opportunities',
    description: 'Help connect communities with useful programs, resources and opportunities.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
  },
  {
    title: 'Join Community Activities',
    description: 'Participate in outreach, mentorship, education and community initiatives.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Amplify Our Mission',
    description: 'Help spread awareness about CTC-Kenya\'s programs and impact through your networks.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
]

export default function DonatePage() {
  const { openDonate } = useDonate()

  return (
    <div className="pt-16 md:pt-24">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-[#0a2e2d] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-[32px] md:text-[44px] font-bold leading-[1.15] text-white mb-6">
                Be Part of Sustainable Community Development
              </h1>
              <p className="text-[16px] sm:text-[18px] leading-[1.6] text-white/70 mb-8 max-w-xl">
                Whether through volunteering, partnerships, skills, resources or financial support, your contribution can help CTC-Kenya mentor, empower and expose communities to opportunities that transform lives.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={openDonate}
                  className="inline-flex items-center bg-[#006B68] text-white px-7 py-3.5 rounded-lg text-[15px] font-semibold hover:bg-[#00514e] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D6B334] focus:ring-offset-2 focus:ring-offset-[#0a2e2d] cursor-pointer"
                >
                  Support Our Work
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-white/90 text-[15px] font-medium hover:text-white transition-colors group focus:outline-none focus:underline"
                >
                  Become a Volunteer
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-xl overflow-hidden shadow-lg h-80">
                <img
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
                  alt="Community members working together"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-background">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-[28px] md:text-[32px] font-semibold text-primary mb-4">
              Everyone Has a Role to Play
            </h2>
            <p className="text-[16px] leading-6 text-on-surface-variant">
              Community transformation is strongest when individuals, organizations and institutions work together. CTC-Kenya welcomes people and partners who are willing to contribute their time, skills, resources, networks or financial support toward sustainable community development.
            </p>
          </div>
        </div>
      </section>

      {/* Four Ways to Get Involved */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-surface-muted">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {waysToGetInvolved.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 border border-outline-variant rounded-xl flex flex-col"
              >
                <div className="w-12 h-12 bg-surface-muted rounded-lg flex items-center justify-center mb-5 text-primary">
                  {item.icon}
                </div>
                <h3 className="font-display text-[18px] font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-5 text-on-surface-variant flex-1 mb-5">
                  {item.description}
                </p>
                {item.ctaType === 'donate' ? (
                  <button
                    onClick={openDonate}
                    className="inline-flex items-center text-primary text-sm font-semibold hover:text-primary-dark transition-colors cursor-pointer"
                  >
                    {item.cta}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    to={item.ctaTarget}
                    className="inline-flex items-center text-primary text-sm font-semibold hover:text-primary-dark transition-colors"
                  >
                    {item.cta}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-background">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-[28px] md:text-[32px] font-semibold text-primary mb-4">
                Share Your Time, Skills and Experience
              </h2>
              <p className="text-[16px] leading-6 text-on-surface-variant mb-6">
                Volunteers play an important role in extending the reach of CTC-Kenya's programs. You can contribute through mentorship, training, community outreach, professional expertise, event support, research, communications and other areas where your skills can create value.
              </p>
              <ul className="space-y-2 mb-8">
                {volunteerAreas.map((area, index) => (
                  <li key={index} className="flex items-center gap-3 text-[15px] text-on-surface-variant">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center bg-primary text-white px-7 py-3.5 rounded-lg text-[15px] font-semibold hover:bg-primary-dark transition-colors"
              >
                Apply to Volunteer
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden border border-outline-variant h-72 lg:h-80">
              <img
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80"
                alt="Volunteers working with community members"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-surface-muted">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="font-display text-[28px] md:text-[32px] font-semibold text-primary mb-4">
              Build Impact Through Partnership
            </h2>
            <p className="text-[16px] leading-6 text-on-surface-variant">
              CTC-Kenya works with organizations, businesses, institutions, community groups and development partners to create practical solutions to community challenges. Partnerships can include program support, technical expertise, resource mobilization, training, community initiatives and long-term strategic collaboration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {partnershipTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white p-6 border border-outline-variant rounded-xl"
              >
                <h3 className="font-display text-[17px] font-semibold text-primary mb-2">
                  {type.title}
                </h3>
                <p className="text-[14px] leading-5 text-on-surface-variant">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center border-2 border-primary text-primary px-7 py-3.5 rounded-lg text-[15px] font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Discuss a Partnership
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsor a Program */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-background">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="font-display text-[28px] md:text-[32px] font-semibold text-primary mb-4">
              Support a Program That Matters
            </h2>
            <p className="text-[16px] leading-6 text-on-surface-variant">
              Organizations and individuals can support specific CTC-Kenya initiatives according to their interests and social impact priorities. Program sponsorship can help provide resources needed to deliver activities, reach beneficiaries and strengthen long-term community outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {programAreas.map((program, index) => (
              <div
                key={index}
                className="bg-surface-muted p-6 border border-outline-variant rounded-xl"
              >
                <h3 className="font-display text-[16px] font-semibold text-primary mb-2">
                  {program.title}
                </h3>
                <p className="text-[14px] leading-5 text-on-surface-variant">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center border-2 border-primary text-primary px-7 py-3.5 rounded-lg text-[15px] font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Discuss Program Sponsorship
            </Link>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-surface-muted">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-[28px] md:text-[32px] font-semibold text-primary mb-4">
              Support Our Work
            </h2>
            <p className="text-[16px] leading-6 text-on-surface-variant mb-8">
              Your contribution helps CTC-Kenya strengthen community initiatives and expand opportunities for people who need support. Every contribution is directed toward advancing our mission and supporting sustainable community development.
            </p>
            <button
              onClick={openDonate}
              className="inline-flex items-center bg-primary text-white px-7 py-3.5 rounded-lg text-[15px] font-semibold hover:bg-primary-dark transition-colors cursor-pointer"
            >
              Donate Now
            </button>
          </div>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-background">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="font-display text-[28px] md:text-[32px] font-semibold text-primary mb-4">
              Connect, Participate and Share
            </h2>
            <p className="text-[16px] leading-6 text-on-surface-variant">
              Community development is not only about financial support. You can help by sharing opportunities, connecting CTC-Kenya with potential partners, participating in community activities, amplifying our programs and helping create networks that open opportunities for others.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {communityEngagementItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 border border-outline-variant rounded-xl flex flex-col items-center text-center"
              >
                <div className="w-10 h-10 bg-surface-muted rounded-full flex items-center justify-center mb-4 text-primary">
                  {item.icon}
                </div>
                <h3 className="font-display text-[16px] font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-5 text-on-surface-variant">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-[#0a2e2d]">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="font-display text-[28px] md:text-[32px] font-semibold text-white mb-4">
            Together, We Can Create Lasting Impact
          </h2>
          <p className="text-[16px] leading-6 text-white/70 max-w-2xl mx-auto mb-8">
            CTC-Kenya believes sustainable development happens when communities and partners work together. Whether you contribute your time, expertise, resources or financial support, your involvement can help create opportunities that strengthen communities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={openDonate}
              className="inline-flex items-center bg-[#006B68] text-white px-7 py-3.5 rounded-lg text-[15px] font-semibold hover:bg-[#00514e] transition-colors cursor-pointer"
            >
              Get Involved
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center border-2 border-white/30 text-white px-7 py-3.5 rounded-lg text-[15px] font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}