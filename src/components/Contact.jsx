import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData'

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')

    const form = formRef.current
    if (!form) return

    const firstName = form.querySelector('#firstName')?.value || ''
    const lastName = form.querySelector('#lastName')?.value || ''
    const email = form.querySelector('#email')?.value || ''
    const message = form.querySelector('#message')?.value || ''

    if (!firstName.trim() || !email.trim() || !message.trim()) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    const { serviceId, templateId, publicKey } = emailjsConfig
    const isConfigured =
      Boolean(serviceId && templateId && publicKey) &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'

    if (!isConfigured) {
      const subject = `Portfolio Contact from ${firstName} ${lastName}`.trim()
      const body = `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`.trim()
      const mailtoUrl = `mailto:${personalInfo.emails.primary}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`

      window.open(mailtoUrl, '_blank')
      setStatus('success')
      form.reset()
      setTimeout(() => setStatus('idle'), 3000)
    } else {
      try {
        const emailjs = await import('@emailjs/browser')
        await emailjs.sendForm(serviceId, templateId, form, publicKey)
        setStatus('success')
        form.reset()
      } catch (err) {
        console.error(err)
        setStatus('error')
      }
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Behind: Giant Parallax CONTACT Word */}
      <motion.div
        style={{ y }}
        className="absolute pointer-events-none z-0 inset-0 flex items-center justify-center"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/5"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          CONTACT
        </div>
      </motion.div>

      {/* In front: Red Contact Card */}
      <div
        data-aos="fade-up"
        className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 ml-auto relative z-10 rounded-tl-3xl md:rounded-tl-[3rem] shadow-2xl"
      >
        {/* Header Row */}
        <div className="flex justify-between items-center pb-8 border-b border-white/20">
          <span className="uppercase tracking-[0.2em] font-black text-black text-xs md:text-sm">
            Reach Me
          </span>
          {socialLinks.instagram ? (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-black/20 hover:bg-black/30 text-white text-xs font-semibold backdrop-blur-sm border border-white/20 transition-all"
            >
              DM on Instagram
            </a>
          ) : (
            <a
              href={`mailto:${personalInfo.emails.primary}`}
              className="px-4 py-1.5 rounded-full bg-black/20 hover:bg-black/30 text-white text-xs font-semibold backdrop-blur-sm border border-white/20 transition-all"
            >
              Direct Email
            </a>
          )}
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-10 mt-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Inputs */}
            <div className="flex flex-col gap-8">
              <input
                id="firstName"
                name="first_name"
                type="text"
                placeholder="First Name *"
                required
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:outline-none focus:border-white transition-colors text-white"
              />
              <input
                id="lastName"
                name="last_name"
                type="text"
                placeholder="Last Name"
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:outline-none focus:border-white transition-colors text-white"
              />
              <input
                id="email"
                name="user_email"
                type="email"
                placeholder="Email Address *"
                required
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:outline-none focus:border-white transition-colors text-white"
              />
            </div>

            {/* Right Textarea */}
            <div className="flex flex-col">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message *"
                required
                className="w-full h-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:outline-none focus:border-white transition-colors text-white resize-none min-h-[140px]"
              />
            </div>
          </div>

          {/* Bottom Controls & Notices */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            {/* Permission Checkbox */}
            <label className="flex items-center space-x-3 text-xs md:text-sm text-red-100 cursor-pointer select-none">
              <input
                type="checkbox"
                required
                className="w-4 h-4 accent-black rounded cursor-pointer"
              />
              <span>
                I agree that my submitted information will be stored and used to respond to my inquiry.
              </span>
            </label>

            {/* Response Notice */}
            <p className="text-xs text-red-200">
              Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
            </p>

            {/* Urgent Inquiries */}
            <p className="text-xs text-red-200">
              For urgent inquiries, email me directly at{' '}
              <a
                href={`mailto:${personalInfo.emails.primary}`}
                className="underline font-bold text-white hover:text-black transition-colors"
              >
                {personalInfo.emails.primary}
              </a>
            </p>
          </div>

          {/* Submit Action Button */}
          <div className="pt-2">
            {status === 'sending' && (
              <button
                type="button"
                disabled
                className="px-8 py-3.5 rounded-full bg-white/30 text-white font-bold text-sm md:text-base border border-white/40 cursor-wait flex items-center space-x-2"
              >
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
                <span>Sending...</span>
              </button>
            )}

            {status === 'success' && (
              <div className="px-8 py-3.5 rounded-full bg-emerald-600 text-white font-bold text-sm md:text-base border border-emerald-400 inline-flex items-center space-x-2 shadow-lg">
                <span>Sent Successfully ✓</span>
              </div>
            )}

            {status === 'error' && (
              <button
                type="submit"
                className="px-8 py-3.5 rounded-full bg-red-900 text-white font-bold text-sm md:text-base border border-red-700 inline-flex items-center space-x-2 shadow-lg"
              >
                <span>Failed — Try Again</span>
              </button>
            )}

            {status === 'idle' && (
              <button
                type="submit"
                className="px-8 py-3.5 rounded-full border border-white text-white font-bold text-sm md:text-base hover:bg-white hover:text-[#ff2a2a] transition-all flex items-center space-x-2 group cursor-pointer shadow-lg"
              >
                <span>Send Message</span>
                <svg
                  className="w-4 h-4 text-white group-hover:text-[#ff2a2a] group-hover:translate-x-1.5 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
