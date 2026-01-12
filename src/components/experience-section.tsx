import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ExperienceSection() {
  const education = [
    {
      period: "2023 - Present",
      title: "BE in Artificial Intelligence & Machine Learning",
      institution: "BMS Institute of Technology, Bangalore",
      description:
        "Pursuing Bachelor of Engineering with specialization in AI and ML. Focusing on deep learning, neural networks, and intelligent systems.",
      emoji: "🎓",
    },
    {
      period: "2023 - Present",
      title: "BSc in Computer Science",
      institution: "BITS (Birla Institute of Technology and Science)",
      description:
        "Parallel degree program building strong theoretical foundations in computer science, algorithms, and software engineering.",
      emoji: "📚",
    },
  ]

  const achievements = [
    {
      title: "Open Source Contributor",
      description: "Active contributor building tools for the community",
      emoji: "🌟",
    },
    {
      title: "24+ GitHub Projects",
      description: "Building and shipping real-world applications",
      emoji: "💻",
    },
  ]

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="text-white pt-0 md:pt-12 md:sticky md:top-12 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              My <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">education</span> & journey
            </h2>
            <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              Currently pursuing dual degrees while building real-world projects in blockchain and AI.
              Balancing academic learning with hands-on development.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((item, index) => (
                <div key={index} className="bg-white/10 rounded-2xl p-4 border border-white/20">
                  <span className="text-3xl mb-2 block">{item.emoji}</span>
                  <h4 className="font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <a href="https://github.com/BlackPool25" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
                <FileText className="w-5 h-5" />
                View GitHub Profile
              </Button>
            </a>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white border-4 border-black rounded-3xl min-h-[220px] md:min-h-[260px]">
                <div className="flex items-center justify-between mb-4 md:mb-6 pt-6 md:pt-8 px-6 md:px-8">
                  <div className="text-base md:text-[22px] leading-tight md:leading-[34px] font-bold text-[#0B0B0B]">
                    {edu.period}
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#6366F1] flex items-center justify-center">
                    <span className="text-2xl">{edu.emoji}</span>
                  </div>
                </div>

                <div className="border-t-[3px] border-black mb-4 md:mb-6"></div>

                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <h3 className="text-xl md:text-[24px] leading-tight md:leading-[36px] font-bold text-[#0B0B0B] mb-1">
                    {edu.title}
                  </h3>
                  <p className="text-[#6366F1] font-semibold mb-3">{edu.institution}</p>
                  <p className="text-[#393939] text-base md:text-[18px] leading-relaxed md:leading-[30px]">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
