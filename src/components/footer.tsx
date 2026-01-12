import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* CTA Section */}
          <div className="mb-12 md:mb-16 relative">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="w-24 h-24 md:w-36 md:h-36 rounded-full flex items-center justify-center flex-shrink-0 bg-[#6366F1] text-6xl">
                🚀
              </div>

              <div className="w-full flex-1 bg-white border-4 border-black rounded-3xl py-6 px-6 md:py-8 md:px-10">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">Let's Build Something Amazing</h3>
                    <p className="text-gray-600">Open to collaborations on blockchain & AI projects</p>
                  </div>

                  <a href="https://github.com/BlackPool25" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-black text-white hover:bg-black/90 rounded-[12px] px-8 py-4 text-base font-semibold whitespace-nowrap h-auto">
                      <Github className="w-5 h-5 mr-2" />
                      View GitHub
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-[#6366F1] flex items-center justify-center text-white font-bold">
                  SS
                </div>
                <span className="text-lg md:text-xl font-bold">Shreyas S Joshi</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Engineering student building at the intersection of blockchain and artificial intelligence.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/BlackPool25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#333] rounded-full flex items-center justify-center hover:bg-[#6366F1] transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#0077B5] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#1DA1F2] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Navigation</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-white transition-colors">
                    Skills
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Featured Projects</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="https://github.com/BlackPool25/CredVerify" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    CredVerify
                  </a>
                </li>
                <li>
                  <a href="https://github.com/BlackPool25/WhisperLayer" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    WhisperLayer
                  </a>
                </li>
                <li>
                  <a href="https://github.com/BlackPool25/AI-Detector" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    AI-Detector
                  </a>
                </li>
                <li>
                  <a href="https://github.com/BlackPool25/LLM-Protect" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    LLM-Protect
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <a href="https://github.com/BlackPool25" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    github.com/BlackPool25
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-gray-500">Email available on request</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2026 Shreyas S Joshi. Built with Next.js & ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
