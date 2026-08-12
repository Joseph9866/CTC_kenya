import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <div className="pt-16 md:pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-background">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
            <h1 className="font-display text-[36px] md:text-[48px] font-bold leading-[44px] md:leading-[56px] text-primary">
              Get in Touch
            </h1>
            <p className="text-[18px] leading-7 text-on-surface-variant">
              Have questions about our programs, want to volunteer, or explore partnership opportunities? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 xl:px-12 bg-background">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-outline-variant rounded-xl p-8 md:p-10">
                <h2 className="font-display text-[32px] font-semibold text-primary mb-8">
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display text-[24px] font-semibold text-primary mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-[16px] text-on-surface-variant">
                      Thank you for reaching out. We'll get back to you within 24-48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2 block">
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="w-full border border-outline-variant rounded px-4 py-3 text-[16px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2 block">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="w-full border border-outline-variant rounded px-4 py-3 text-[16px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2 block">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="w-full border border-outline-variant rounded px-4 py-3 text-[16px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="volunteer">Volunteering</option>
                        <option value="partnership">Partnership</option>
                        <option value="donation">Donation</option>
                        <option value="programs">Programs</option>
                      </select>
                    </div>
                    <div className="mb-8">
                      <label className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2 block">
                        Message
                      </label>
                      <textarea
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="w-full border border-outline-variant rounded px-4 py-3 text-[16px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white py-4 rounded text-sm font-semibold uppercase tracking-wider hover:bg-primary-dark transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-5">
              <div className="flex flex-col gap-6">
                {/* Email */}
                <div className="bg-white border border-outline-variant rounded-xl p-6 flex gap-4">
                  <div className="w-12 h-12 bg-surface-muted rounded-lg flex items-center justify-center shrink-0 text-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-[20px] font-semibold text-primary mb-1">
                      Email Us
                    </h3>
                    <a
                      href="mailto:commitmenttocommunity.org@gmail.com"
                      className="text-[14px] text-on-surface-variant hover:text-primary transition-colors"
                    >
                      commitmenttocommunity.org@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-white border border-outline-variant rounded-xl p-6 flex gap-4">
                  <div className="w-12 h-12 bg-surface-muted rounded-lg flex items-center justify-center shrink-0 text-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-[20px] font-semibold text-primary mb-1">
                      Location
                    </h3>
                    <p className="text-[14px] text-on-surface-variant">
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-white border border-outline-variant rounded-xl p-6 flex gap-4">
                  <div className="w-12 h-12 bg-surface-muted rounded-lg flex items-center justify-center shrink-0 text-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-[20px] font-semibold text-primary mb-1">
                      Office Hours
                    </h3>
                    <p className="text-[14px] text-on-surface-variant">
                      Monday – Friday: 9:00 AM – 5:00 PM (EAT)
                    </p>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-surface-muted border border-outline-variant rounded-xl h-48 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-8 h-8 text-primary mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <p className="text-[14px] text-on-surface-variant">
                      Map integration placeholder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}