import { leadershipList } from '../data/portfolioData'

function LeadershipItem({ item, index }) {
  const isEven = index % 2 === 0

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between mb-12 last:mb-0 w-full">
      {/* Central Red Glowing Dot */}
      <div className="absolute top-6 left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#ff2a2a] shadow-[0_0_12px_#ff2a2a] border-2 border-black z-10 pointer-events-none" />

      {/* Even Index Card: Left on desktop */}
      <div
        data-aos={isEven ? 'fade-right' : 'fade-left'}
        className={`ml-10 md:ml-0 w-[calc(100%-2.5rem)] md:w-[45%] ${
          isEven ? 'md:text-right' : 'md:text-left md:order-last'
        }`}
      >
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/40 hover:bg-white/10 transition-all duration-300 shadow-lg">
          {item.badge && (
            <span className="inline-block px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-[#ff2a2a] uppercase tracking-widest text-xs font-bold mb-3">
              {item.badge}
            </span>
          )}
          <h3 className="text-xl md:text-2xl font-black text-white hover:text-[#ff2a2a] transition-colors">
            {item.title}
          </h3>
          <p className="font-mono uppercase text-red-400 text-xs font-bold tracking-wider mt-1 mb-3">
            {item.role}
          </p>
          <p className="text-white/60 text-sm md:text-base leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>

      {/* Empty Spacer on Opposite Side for Desktop Grid Symmetry */}
      <div className="hidden md:block md:w-[45%]" />
    </div>
  )
}

export default function Leadership() {
  if (!leadershipList || leadershipList.length === 0) {
    return null
  }

  return (
    <section className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Torn-paper divider at the top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 -translate-y-[1px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-20 rotate-180 fill-[#ff2a2a]"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-[#ff2a2a] text-xs font-bold uppercase tracking-widest mb-3">
            Activities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
            Leadership & Engagement
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mt-4">
            Demonstrating initiative, community mentorship, and active team collaboration beyond code.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Continuous Gradient Line */}
          <div className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10 left-4 md:left-1/2 -translate-x-1/2 z-0" />

          {/* Timeline Items */}
          <div className="flex flex-col">
            {leadershipList.map((item, index) => (
              <LeadershipItem
                key={`${item.title}-${index}`}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
