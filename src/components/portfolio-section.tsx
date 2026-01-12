import { ArrowRight, Github } from "lucide-react"

export function PortfolioSection() {
  const projects = [
    {
      title: "CredVerify",
      description:
        "A decentralized credential verification system built on blockchain. Enables secure, tamper-proof verification of academic and professional credentials without centralized authorities.",
      tag: "Blockchain",
      bgColor: "bg-[#6366F1]",
      emoji: "🔗",
      link: "https://github.com/BlackPool25/CredVerify",
      technologies: ["TypeScript", "Solidity", "Web3"],
    },
    {
      title: "WhisperLayer",
      description:
        "Advanced speech-to-text layer with deep system integration. Captures voice input and seamlessly types into any application with intelligent processing and custom commands.",
      tag: "AI / Voice",
      bgColor: "bg-[#2F81F7]",
      emoji: "🎤",
      link: "https://github.com/BlackPool25/WhisperLayer",
      technologies: ["Python", "ML", "System Integration"],
    },
    {
      title: "AI-Detector",
      description:
        "Machine learning system to detect AI-generated content. Helps distinguish between human-written and AI-generated text using advanced classification techniques.",
      tag: "AI / ML",
      bgColor: "bg-[#FF6B7A]",
      emoji: "🤖",
      link: "https://github.com/BlackPool25/AI-Detector",
      technologies: ["Python", "Machine Learning", "NLP"],
    },
    {
      title: "LLM-Protect",
      description:
        "Security layer for large language models. Implements protective measures against prompt injection, data leakage, and other LLM-specific vulnerabilities.",
      tag: "AI Security",
      bgColor: "bg-[#FFC224]",
      emoji: "🛡️",
      link: "https://github.com/BlackPool25/LLM-Protect",
      technologies: ["Python", "Security", "LLM"],
    },
    {
      title: "Whatsapp-Bot",
      description:
        "Automation bot for WhatsApp messaging. Enables programmatic interaction with WhatsApp for notifications, automated responses, and custom workflows.",
      tag: "Automation",
      bgColor: "bg-[#25D366]",
      emoji: "💬",
      link: "https://github.com/BlackPool25/Whatsapp-Bot",
      technologies: ["Python", "Automation", "API"],
    },
  ]

  return (
    <section id="portfolio" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Take a look at my <br />
            <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">featured projects</span>
          </h2>
          <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto mt-4">
            Real-world applications built with blockchain and AI technologies, designed to solve genuine problems.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-2 bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="p-6 md:p-12 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{project.emoji}</span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded-full border border-gray-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 w-fit">
                  {project.tag}
                </span>

                <h3 className="text-xl md:text-[28px] font-bold mb-4 leading-tight md:leading-[40px] text-[#0B0B0B]">
                  {project.title}
                </h3>

                <p className="text-base md:text-[18px] text-[#393939] mb-8 leading-relaxed md:leading-[30px] font-medium">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm md:text-base"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className={`${project.bgColor} relative overflow-hidden min-h-[250px] md:min-h-[400px] flex items-center justify-center`}>
                <span className="text-[120px] md:text-[180px] transition-transform duration-500 ease-out group-hover:scale-110">
                  {project.emoji}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="https://github.com/BlackPool25?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 md:px-8 py-4 md:py-5 rounded-[12px] font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base"
          >
            <Github className="w-5 h-5" />
            Browse all repositories
          </a>
        </div>
      </div>
    </section>
  )
}
