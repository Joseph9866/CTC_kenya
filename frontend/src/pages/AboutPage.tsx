import { Link } from 'react-router-dom'

const coreValues = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Integrity',
    description: 'We act with transparency and accountability in all our dealings with communities and partners.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Inclusivity',
    description: 'We believe in equal opportunities for all, regardless of background, gender, or social status.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Innovation',
    description: 'We continuously seek creative solutions to address complex social challenges effectively.',
  },
]

const leadership = [
  {
    name: 'Chairperson Name',
    role: 'Board Chairperson',
    placeholder: true,
  },
  {
    name: 'CEO Name',
    role: 'Chief Executive Officer',
    placeholder: true,
  },
  {
    name: 'Director Name',
    role: 'Programs & Projects Director',
    placeholder: true,
  },
  {
    name: 'Leadership Representative',
    role: 'Community & Field Leadership',
    placeholder: true,
  },
]

export default function AboutPage() {
  return (
    <div className="pt-16 md:pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-background">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
            <h1 className="font-display text-[36px] md:text-[48px] font-bold leading-[44px] md:leading-[56px] text-primary">
              About Us
            </h1>
            <p className="text-[18px] leading-7 text-on-surface-variant">
              We are dedicated to mentoring, empowering, and exposing communities to opportunities that transform lives. Discover our story, our vision, and the team behind CTC-Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-background">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5">
              <h2 className="font-display text-[32px] font-semibold leading-10 text-primary mb-6">
                Our Story
              </h2>
              <p className="mb-4 text-[16px] leading-6 text-on-surface-variant">
                Founded on the belief that every individual holds untapped potential, CTC-Kenya began as a grassroots initiative. We saw communities rich in spirit but lacking in resources and opportunities.
              </p>
              <p className="text-[16px] leading-6 text-on-surface-variant">
                Through years of dedicated groundwork, we have evolved into a structured organization, building bridges between marginalized groups and essential resources, focusing heavily on youth empowerment and community resilience.
              </p>
            </div>
            <div className="md:col-span-7 h-96 rounded-xl overflow-hidden border border-outline-variant">
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80"
                alt="Community meeting in rural Kenya"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-background">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-muted p-10 rounded-xl border border-outline-variant flex flex-col gap-4 relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-primary opacity-10">
                <svg className="w-[120px] h-[120px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </div>
              <h3 className="text-accent text-xs font-semibold uppercase tracking-widest">
                Our Vision
              </h3>
              <blockquote className="font-display text-[24px] font-semibold leading-8 text-primary italic z-10">
                "To create a society where every individual has the agency and opportunity to thrive."
              </blockquote>
            </div>
            <div className="bg-primary p-10 rounded-xl flex flex-col gap-4 relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-white opacity-10">
                <svg className="w-[120px] h-[120px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.13 22.19l-1.63-5.87c4.47-1.41 7.5-5.41 7.5-10.32h-2c0 4.08-2.67 7.44-6.34 8.56l-1.33-4.78c3.07-.97 5.17-3.64 5.17-6.78h-2c0 2.21-1.47 4.09-3.53 4.71L9.34 2.59C5.06 3.66 2 7.44 2 12c0 5.52 4.48 10 10 10 .38 0 .76-.03 1.13-.08zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </div>
              <h3 className="text-accent-light text-xs font-semibold uppercase tracking-widest">
                Our Mission
              </h3>
              <blockquote className="font-display text-[24px] font-semibold leading-8 text-white italic z-10">
                "To mentor, empower, and expose communities to sustainable development opportunities."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-background">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-[32px] font-semibold leading-10 text-primary mb-4">
              Core Values
            </h2>
            <p className="text-[16px] leading-6 text-on-surface-variant max-w-2xl mx-auto">
              The principles that guide our actions and shape our organizational culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 border border-outline-variant rounded-xl hover:shadow-[0_4px_20px_rgba(0,107,104,0.05)] transition-shadow"
              >
                <div className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center mb-6 text-accent-dark">
                  {value.icon}
                </div>
                <h4 className="font-display text-[24px] font-semibold text-primary mb-2">
                  {value.title}
                </h4>
                <p className="text-[16px] leading-6 text-on-surface-variant">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-surface-muted">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-[32px] font-semibold leading-10 text-primary mb-4">
              Leadership
            </h2>
            <p className="text-[16px] leading-6 text-on-surface-variant">
              Meet the people guiding CTC-Kenya's mission and work across communities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="w-full aspect-square rounded-xl overflow-hidden border border-outline-variant bg-[#F4F9F8] flex items-center justify-center relative">
                  {/* Placeholder avatar */}
                  <svg className="w-20 h-20 text-[#006B68]/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  {/* Placeholder label */}
                  <span className="absolute bottom-3 left-3 right-3 text-center text-[10px] font-semibold uppercase tracking-wider text-[#006B68]/50 bg-white/80 rounded px-2 py-1">
                    Photo Placeholder
                  </span>
                </div>
                <div>
                  <h4 className="font-display text-[20px] font-semibold text-primary">
                    {leader.name}
                  </h4>
                  <p className="text-accent text-xs font-semibold uppercase tracking-wider mt-1">
                    {leader.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach & MEE Campaign */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-background">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-t-2 border-primary pt-8">
              <h2 className="font-display text-[32px] font-semibold leading-10 text-primary mb-6">
                Our Approach
              </h2>
              <p className="text-[16px] leading-6 text-on-surface-variant mb-4">
                We employ a holistic, community-led model. Instead of imposing solutions, we collaborate closely with local stakeholders to identify needs and co-create sustainable interventions.
              </p>
              <ul className="flex flex-col gap-3 mt-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary mt-2 rounded-sm shrink-0"></div>
                  <span className="text-[16px] leading-6 text-on-surface-variant">Evidence-based program design</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary mt-2 rounded-sm shrink-0"></div>
                  <span className="text-[16px] leading-6 text-on-surface-variant">Capacity building for local partners</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary mt-2 rounded-sm shrink-0"></div>
                  <span className="text-[16px] leading-6 text-on-surface-variant">Long-term impact measurement</span>
                </li>
              </ul>
            </div>
            <div className="bg-primary text-white p-10 rounded-xl flex flex-col justify-center items-start gap-6">
              <h2 className="font-display text-[32px] md:text-[48px] font-bold text-accent">
                #MEECampaign
              </h2>
              <p className="text-[18px] leading-7 text-white/90">
                <strong className="text-white">Mentor. Empower. Expose.</strong>
                <br />
                Our flagship campaign focuses on equipping the youth with critical life skills, vocational training, and exposure to global opportunities. Join us in shaping the next generation of leaders.
              </p>
              <Link
                to="/programs"
                className="border border-white text-white px-6 py-3 rounded text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-primary transition-colors mt-4"
              >
                Learn More About MEE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}