import { Link } from 'react-router-dom'
import { useDonate } from './DonateContext'

export default function HeroSection() {
  const { openDonate } = useDonate()

  return (
    <section className="relative bg-[#0a2e2d] overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Subtle gradient glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#006B68]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-[#D6B334]/10 rounded-full blur-[100px] -translate-x-1/2" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-10 md:py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content - First on mobile */}
          <div className="order-1">
            <h1 className="font-display text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-bold leading-[1.15] sm:leading-[1.1] tracking-[-0.02em] text-white mb-4 sm:mb-6">
              Mentoring, Empowering & Exposing Communities
            </h1>
            <p className="text-[15px] sm:text-[18px] leading-[1.6] text-white/70 mb-6 sm:mb-8 max-w-xl">
              Tackling mental well-being, driving quality education, ensuring food security, and creating viable career pathways for youth and young parents across Kenya.
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={openDonate}
                className="inline-flex items-center bg-[#006B68] text-white px-6 py-3 sm:px-7 sm:py-3.5 rounded-lg text-[14px] sm:text-[15px] font-semibold hover:bg-[#00514e] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D6B334] focus:ring-offset-2 focus:ring-offset-[#0a2e2d] cursor-pointer"
              >
                Support Our Work
              </button>
              <Link
                to="/programs"
                className="inline-flex items-center text-white/90 text-[14px] sm:text-[15px] font-medium hover:text-white transition-colors group focus:outline-none focus:underline"
              >
                Explore Programs
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image - Second on mobile, collage on desktop */}
          <div className="order-2">
            {/* Mobile: three-image composition */}
            <div className="lg:hidden">
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&q=80"
                    alt="Community mentorship session"
                    className="w-full h-32 sm:h-36 object-cover"
                    loading="eager"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&q=80"
                    alt="Young professional working"
                    className="w-full h-32 sm:h-36 object-cover"
                    loading="eager"
                  />
                </div>
                <div className="col-span-2 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&q=80"
                    alt="Group collaboration"
                    className="w-full h-32 sm:h-36 object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

            {/* Desktop: image collage */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto lg:max-w-none">
                <div className="col-start-1 row-start-1 w-full h-72 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80"
                    alt="Community mentorship session"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="col-start-2 row-start-1 w-full h-72 mt-8 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&q=80"
                    alt="Young professional working"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="col-start-1 row-start-2 w-full h-72 -mt-4 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&q=80"
                    alt="Group collaboration"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="col-start-2 row-start-2 w-full h-72 mt-4 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80"
                    alt="Youth empowerment program"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="col-start-2 row-start-1 w-full h-44 -mt-12 ml-4 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80"
                    alt="Community gathering"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}