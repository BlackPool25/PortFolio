import { User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg aspect-square border-[4px] border-black rounded-full overflow-hidden bg-[#6366F1] shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-9xl">🎓</div>
            </div>
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Who's behind all this <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">great work?</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              I'm Shreyas S Joshi, an engineering student with a deep passion for blockchain technology and
              artificial intelligence. I believe in building systems that are not just technically impressive,
              but genuinely helpful to people in their daily lives.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#6366F1] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">🎓 BE in AI & ML - BMSIT</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Currently pursuing Bachelor of Engineering in Artificial Intelligence and Machine Learning
                  at BMS Institute of Technology, Bangalore.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#FF6B7A] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">🎓 BSc in CS - BITS</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Parallel degree program in Computer Science from Birla Institute of Technology and Science,
                  deepening theoretical foundations.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#FFC224] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">🔥 Enthusiast & Builder</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Passionate about blockchain, AI models, and creating open-source tools that make a real difference.
                </p>
              </div>
            </div>
          </div>

          <a href="https://github.com/BlackPool25" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
              <User className="w-5 h-5" />
              View GitHub Profile
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
