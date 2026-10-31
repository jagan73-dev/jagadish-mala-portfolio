import { useState } from 'react'
import { motion } from 'framer-motion'
import QRCode from 'react-qr-code'
import stackImage from '../assets/about/profile.png'
import { aboutContent, personalInfo, socialLinks } from '../data/portfolioData'

export default function About() {
  const [flipped, setFlipped] = useState(false)

  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative 4-point star (Top-Right) */}
      <svg
        className="absolute top-10 right-10 w-8 h-8 text-black opacity-30 animate-pulse pointer-events-none"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* Decorative 4-point star (Bottom-Left with 1s delay) */}
      <svg
        className="absolute bottom-28 left-10 w-10 h-10 text-black opacity-30 animate-pulse pointer-events-none"
        style={{ animationDelay: '1s' }}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start relative z-10">
        {/* Left: ID Badge on a Lanyard with Flip Visiting Card */}
        <div className="md:w-[350px] shrink-0 w-full flex flex-col items-center">
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: 'spring', stiffness: 110, damping: 9, mass: 1.1 }}
            className="relative pt-12 w-full flex flex-col items-center"
          >
            {/* Lanyard String */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3 h-40 bg-black z-0 pointer-events-none" />

            {/* Clip Rectangle */}
            <div className="w-8 h-4 bg-gray-400 rounded-sm mx-auto relative z-10 shadow pointer-events-none" />

            {/* Flip Card Button Wrapper */}
            <button
              type="button"
              aria-label="Flip ID card"
              onClick={() => setFlipped(!flipped)}
              className="relative w-full max-w-[280px] -rotate-3 hover:rotate-0 transition-transform duration-500 [perspective:1200px] focus:outline-none cursor-pointer mt-1"
            >
              <div
                className="relative w-full aspect-[3/4] transition-transform duration-700 [transform-style:preserve-3d]"
                style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
              >
                {/* FRONT FACE: Portrait Badge */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-gray-900 rounded-2xl p-3 shadow-2xl flex flex-col h-full border border-white/10">
                  {/* Slot Cutout */}
                  <div className="w-12 h-1.5 bg-gray-700 rounded-full mx-auto mb-3 shrink-0" />
                  {/* Portrait Photo */}
                  <img
                    src={stackImage}
                    alt="Jagadish Mala — Java FullStack Developer, TAP Academy student"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full rounded-xl object-cover object-top"
                  />
                </div>

                {/* BACK FACE: Visiting Card */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#141414] to-[#1f1f1f] rounded-2xl shadow-2xl overflow-hidden border border-white/15 flex flex-col">
                  {/* 6px Red Top Bar */}
                  <div className="h-1.5 w-full bg-[#ff2a2a] shrink-0" />

                  {/* Card Content */}
                  <div className="p-4 flex flex-col justify-between h-full text-left">
                    <div>
                      {/* Brand Name & Title */}
                      <div className="text-xl font-black text-white leading-tight">
                        {personalInfo.brandName}
                        <span className="text-[#ff2a2a]">.</span>
                      </div>
                      <div className="text-[11px] uppercase tracking-widest text-red-400 font-semibold mt-0.5">
                        {personalInfo.title}
                      </div>

                      {/* Divider */}
                      <div className="border-b border-white/10 my-2" />

                      {/* Contact Details Rows */}
                      <div className="space-y-1.5">
                        {personalInfo.emails?.primary && (
                          <div className="flex items-center space-x-2 text-xs text-white/85">
                            <svg className="w-3.5 h-3.5 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a
                              href={`mailto:${personalInfo.emails.primary}`}
                              onClick={(e) => e.stopPropagation()}
                              className="hover:underline truncate"
                            >
                              {personalInfo.emails.primary}
                            </a>
                          </div>
                        )}

                        {personalInfo.phone && (
                          <div className="flex items-center space-x-2 text-xs text-white/85">
                            <svg className="w-3.5 h-3.5 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <a
                              href={`tel:${personalInfo.phone}`}
                              onClick={(e) => e.stopPropagation()}
                              className="hover:underline"
                            >
                              {personalInfo.phone}
                            </a>
                          </div>
                        )}

                        {personalInfo.location && (
                          <div className="flex items-center space-x-2 text-xs text-white/85">
                            <svg className="w-3.5 h-3.5 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{personalInfo.location}</span>
                          </div>
                        )}

                        {socialLinks.linkedin && (
                          <div className="flex items-center space-x-2 text-xs text-white/85">
                            <svg className="w-3.5 h-3.5 text-red-400 shrink-0 fill-current" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            <a
                              href={socialLinks.linkedin.startsWith('http') ? socialLinks.linkedin : `https://${socialLinks.linkedin}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="hover:underline text-red-200"
                            >
                              LinkedIn
                            </a>
                          </div>
                        )}

                        {socialLinks.github && (
                          <div className="flex items-center space-x-2 text-xs text-white/85">
                            <svg className="w-3.5 h-3.5 text-red-400 shrink-0 fill-current" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            <a
                              href={socialLinks.github.startsWith('http') ? socialLinks.github : `https://${socialLinks.github}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="hover:underline text-red-200"
                            >
                              GitHub
                            </a>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Bottom: QR Code Box */}
                    <div className="flex items-center space-x-3 bg-white/5 p-2 rounded-lg border border-white/10 shrink-0 mt-2">
                      <div className="bg-white p-1 rounded-md shrink-0">
                        <QRCode
                          value={
                            socialLinks.linkedin
                              ? (socialLinks.linkedin.startsWith('http') ? socialLinks.linkedin : `https://${socialLinks.linkedin}`)
                              : `mailto:${personalInfo.emails.primary}`
                          }
                          size={56}
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-white/60 font-medium">Scan to connect</span>
                        <span className="text-xs text-white font-bold tracking-tight">
                          {personalInfo.brandName}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>

            {/* Hint Under the Badge */}
            <span className="text-xs font-bold text-black/60 mt-4 select-none">
              Tap the card to flip ↻
            </span>
          </motion.div>
        </div>

        {/* Right: Heading & Bio */}
        <div data-aos="fade-left" className="flex-1">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight">
            {aboutContent.heading}
          </h2>
          <p
            className="text-lg font-bold leading-relaxed text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />
        </div>
      </div>

      {/* White torn-paper SVG divider along the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16 md:h-24 fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  )
}
