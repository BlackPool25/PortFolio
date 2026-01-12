export function LogoMarquee() {
  const technologies = [
    "TypeScript",
    "Python",
    "Solidity",
    "React",
    "Next.js",
    "Blockchain",
    "Machine Learning",
    "Speech AI",
    "Web3",
    "Node.js",
  ]

  return (
    <section className="py-8 md:py-12 border-y-4 border-black bg-[#0B0B0B] overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(3)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center">
            {technologies.map((tech, index) => (
              <div key={`${setIndex}-${index}`} className="flex items-center mx-8">
                <span className="text-xl md:text-2xl font-bold text-white">{tech}</span>
                <span className="text-[#6366F1] text-2xl mx-4">•</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
