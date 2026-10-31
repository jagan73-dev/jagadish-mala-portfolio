import { projects, socialLinks } from '../data/portfolioData'

function GitHubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function ExternalLinkIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function ProjectCard({ project, aosDelay }) {
  const isFlagship = project.isFlagship

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`p-[1px] rounded-2xl transition-all duration-500 ${
        isFlagship
          ? 'bg-gradient-to-r from-red-500/50 via-white/10 to-red-500/30 hover:from-red-500 hover:via-white/30 hover:to-red-500/60 shadow-[0_0_30px_rgba(255,42,42,0.15)] hover:shadow-[0_0_40px_rgba(255,42,42,0.3)]'
          : 'bg-white/10 hover:bg-white/20 hover:border-red-500/30'
      }`}
    >
      <div className="rounded-2xl p-6 md:p-8 backdrop-blur-md bg-[#0f0f0f]/90 h-full flex flex-col justify-between">
        <div>
          {/* Optional Flagship Badge */}
          {project.badge && (
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-[#ff2a2a] uppercase tracking-widest text-xs font-bold w-fit mb-4">
              {project.badge}
            </span>
          )}

          {/* Title with Faint Serif Number */}
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              {project.title}
            </h3>
            <span className="text-4xl md:text-5xl font-black text-white/10 italic font-serif select-none shrink-0">
              {project.number}
            </span>
          </div>

          {/* Project Description */}
          <p className="text-white/60 leading-relaxed text-sm md:text-base mt-4">
            {project.description}
          </p>

          {/* Technology Pills */}
          <div className="flex flex-wrap gap-2 mt-6">
            {project.techTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-3 py-1 bg-white/5 border border-white/10 text-white/80 text-xs font-bold transition-colors hover:bg-red-600/20 hover:text-white hover:border-red-500/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-white/10">
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all flex items-center space-x-2"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          )}

          {project.links?.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#ff2a2a] hover:bg-red-600 text-white font-semibold text-sm transition-all flex items-center space-x-2 shadow-lg shadow-red-600/25"
            >
              <span>Live Demo</span>
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
          ) : (
            <span
              className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/40 font-semibold text-sm flex items-center space-x-2 cursor-not-allowed select-none"
            >
              <span>Demo Coming Soon</span>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-[#ff2a2a] text-xs font-bold uppercase tracking-widest mb-3">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Work that speaks for itself
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mt-4">
            A selection of full-stack web applications and backend systems engineered for scalability and real-world utility.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="flex flex-col gap-6 md:gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              aosDelay={(index + 1) * 100}
            />
          ))}
        </div>

        {/* GitHub Repositories Link Button */}
        {socialLinks.github && (
          <div data-aos="fade-up" className="text-center mt-14">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 hover:border-red-500/40 text-white font-bold text-sm md:text-base transition-all group shadow-lg hover:shadow-red-500/10"
            >
              <GitHubIcon className="w-5 h-5 text-white/80 group-hover:text-white" />
              <span>Explore All My Repositories</span>
              <svg
                className="w-4 h-4 text-white/60 group-hover:translate-x-1 transition-transform"
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
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
