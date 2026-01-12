import { Github, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-[42px] leading-[50px] md:text-[72px] font-bold md:leading-[85px]">
            I'm <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">Shreyas S Joshi</span>, building with{" "}
            <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">Blockchain</span> &{" "}
            <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">AI</span>
          </h1>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl">
            Engineering student passionate about decentralized systems and intelligent applications.
            Building tools that solve real-world problems and help people.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">
            <a href="#portfolio">
              <Button className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
                <FolderOpen className="w-5 h-5" />
                View Projects
              </Button>
            </a>
            <a href="https://github.com/BlackPool25" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="bg-white border-[3px] border-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
              >
                <Github className="w-5 h-5" />
                GitHub Profile
              </Button>
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-square bg-[#6366F1] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-8xl mb-4">👨‍💻</div>
              <span className="text-xl font-bold">Shreyas S Joshi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
