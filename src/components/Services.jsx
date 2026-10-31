import { useRef, useState } from 'react'
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion'
import { skillsContent } from '../data/portfolioData'

function TagCard({
  number,
  title,
  text,
  className = '',
  aosDelay,
  aosType,
  pathLength,
  containerRef,
}) {
  const cardRef = useRef(null)
  const [isActive, setIsActive] = useState(false)

  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!containerRef?.current || !cardRef?.current) return
    const containerRect = containerRef.current.getBoundingClientRect()
    const cardRect = cardRef.current.getBoundingClientRect()
    const cardTopRelativeToContainer = cardRect.top - containerRect.top
    const containerHeight = containerRef.current.offsetHeight || 1350
    const lineTip = latest * containerHeight
    setIsActive(lineTip >= cardTopRelativeToContainer + 50)
  })

  return (
    <div
      ref={cardRef}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 transition-colors duration-700 shadow-xl md:absolute ${className} ${
        isActive
          ? 'bg-[#ff2a2a] text-white shadow-[0_10px_35px_rgba(255,42,42,0.35)]'
          : 'bg-white text-gray-900 border border-gray-100 shadow-md'
      }`}
    >
      {/* Small punched hole circle at top */}
      <div className="w-4 h-4 rounded-full bg-gray-200 border-2 border-white mx-auto shadow-inner" />

      {/* Inner Panel */}
      <div
        className={`mt-8 p-8 min-h-[220px] rounded-[1.5rem] flex flex-col justify-between transition-colors duration-700 ${
          isActive ? 'bg-red-700/50 text-white' : 'bg-[#f4f4f4] text-gray-700'
        }`}
      >
        <div>
          <span className="font-serif italic font-bold text-3xl opacity-40 select-none block mb-2">
            {number}
          </span>
          <h3 className="text-2xl font-black mb-3 leading-tight tracking-tight">
            {title}
          </h3>
        </div>
        <p className="text-sm leading-relaxed opacity-90">
          {text}
        </p>
      </div>
    </div>
  )
}

export default function Services() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  const desktopPath =
    'M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200'

  const cardConfigs = [
    {
      className: 'md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
      aosType: 'fade-left',
      aosDelay: 100,
    },
    {
      className: 'md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
      aosType: 'fade-right',
      aosDelay: 200,
    },
    {
      className: 'md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
      aosType: 'fade-left',
      aosDelay: 300,
    },
    {
      className: 'md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
      aosType: 'fade-right',
      aosDelay: 400,
    },
  ]

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        {/* Desktop 3-Layer Path SVG */}
        <svg
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
        >
          <defs>
            <mask id="path-mask">
              <motion.path
                d={desktopPath}
                fill="none"
                stroke="white"
                strokeWidth={20}
                style={{ pathLength }}
              />
            </mask>
          </defs>
          {/* Layer 1: Faint guide path */}
          <path
            d={desktopPath}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth={2}
            strokeDasharray="8 10"
          />
          {/* Layer 3: Solid active dashed path with animated mask */}
          <path
            d={desktopPath}
            fill="none"
            stroke="black"
            strokeWidth={2}
            strokeDasharray="8 10"
            mask="url(#path-mask)"
          />
        </svg>

        {/* Mobile 3-Layer Path SVG */}
        <svg
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-full pointer-events-none z-0"
        >
          <defs>
            <mask id="path-mask-mobile">
              <motion.path
                d="M 2,0 L 2,100"
                fill="none"
                stroke="white"
                strokeWidth={20}
                vectorEffect="non-scaling-stroke"
                style={{ pathLength }}
              />
            </mask>
          </defs>
          {/* Layer 1: Faint mobile guide */}
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth={2}
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />
          {/* Layer 3: Active masked mobile path */}
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="black"
            strokeWidth={2}
            strokeDasharray="4 6"
            mask="url(#path-mask-mobile)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Header Block */}
        <div
          data-aos="fade-up"
          className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-12 md:mb-0"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-[#ff2a2a] text-xs font-bold uppercase tracking-widest mb-3">
            {skillsContent.badge}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-[1.1] relative">
            {skillsContent.heading}
            {/* Hand-drawn Arrow SVG */}
            <svg
              className="w-8 h-8 text-[#ff2a2a] inline-block ml-2 align-bottom"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" />
            </svg>
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-4 leading-relaxed">
            {skillsContent.description}
          </p>
        </div>

        {/* Hanging Tag Cards */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10">
          {skillsContent.cards.map((card, index) => {
            const config = cardConfigs[index] || {}
            return (
              <TagCard
                key={card.number}
                number={card.number}
                title={card.title}
                text={card.text}
                className={config.className}
                aosDelay={config.aosDelay}
                aosType={config.aosType}
                pathLength={pathLength}
                containerRef={containerRef}
              />
            )
          })}
        </div>

        {/* Handwritten End Note */}
        {skillsContent.endText && (
          <div className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6 select-none">
            {skillsContent.endText}
          </div>
        )}
      </div>
    </section>
  )
}
