import { Mail, Code, Brain, Link, Mic, Cog } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const skills = [
    {
      title: "Blockchain Development",
      description: "Building decentralized applications, smart contracts, and Web3 integrations. Experience with Ethereum, Solidity, and credential verification systems.",
      icon: <Link className="w-12 h-12 text-[#6366F1]" />,
      color: "bg-[#6366F1]/10",
    },
    {
      title: "AI/ML Engineering",
      description: "Developing machine learning models for NLP, classification, and voice processing. Building intelligent systems that understand and process data.",
      icon: <Brain className="w-12 h-12 text-[#FF6B7A]" />,
      color: "bg-[#FF6B7A]/10",
    },
    {
      title: "Full-Stack Development",
      description: "Building complete web applications from frontend to backend. Proficient in TypeScript, React, Next.js, Python, and various databases.",
      icon: <Code className="w-12 h-12 text-[#2F81F7]" />,
      color: "bg-[#2F81F7]/10",
    },
    {
      title: "Voice/Speech AI",
      description: "Implementing speech-to-text systems with deep system integration. Building voice interfaces that seamlessly interact with operating systems.",
      icon: <Mic className="w-12 h-12 text-[#FFC224]" />,
      color: "bg-[#FFC224]/10",
    },
    {
      title: "System Integration",
      description: "Creating applications that deeply integrate with OS-level features. Building automation tools, bots, and system utilities.",
      icon: <Cog className="w-12 h-12 text-[#25D366]" />,
      color: "bg-[#25D366]/10",
    },
  ]

  return (
    <section id="skills" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
              My <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">technical skills</span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
              Combining blockchain, AI, and software engineering to build impactful applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 min-h-[320px] flex flex-col group"
              >
                <div className={`${skill.color} p-8 flex items-center justify-center`}>
                  {skill.icon}
                </div>
                <div className="px-8 pb-8 pt-6 flex-1 flex flex-col">
                  <h3 className="text-[24px] leading-[32px] font-bold mb-3 text-[#0B0B0B]">{skill.title}</h3>
                  <p className="text-[16px] leading-[26px] font-medium text-[#393939]">{skill.description}</p>
                </div>
              </div>
            ))}

            <div className="bg-[#6366F1] border-[3px] border-black rounded-[32px] p-8 md:p-12 flex flex-col items-center justify-center text-center hover:translate-y-[-4px] transition-transform min-h-[320px] relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-6">
                <span className="text-6xl">🚀</span>
              </div>
              <h3 className="text-[24px] leading-[32px] font-bold mb-4 text-white">Let's Build Together</h3>
              <p className="text-[16px] leading-[26px] font-medium text-white/80 mb-6">
                Interested in collaborating on blockchain or AI projects? Let's connect!
              </p>
              <a href="https://github.com/BlackPool25" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-black hover:bg-white/90 rounded-[12px] px-8 py-4 font-medium text-[16px] h-[52px]">
                  <Mail className="w-5 h-5 mr-2" />
                  Get in touch
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
