import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

import { Onest, Geist_Mono as V0_Font_Geist_Mono } from "next/font/google"

// Initialize fonts
const _geistMono = V0_Font_Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

// Initialize Onest font with weights 500 and 700
const onest = Onest({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-onest",
})

export const metadata: Metadata = {
  title: "Shreyas S Joshi | Blockchain & AI Developer",
  description: "Portfolio of Shreyas S Joshi - Engineering student passionate about blockchain, AI/ML, and building impactful applications. BMSIT & BITS.",
  keywords: ["Shreyas S Joshi", "Blockchain", "AI", "Machine Learning", "Developer", "BMSIT", "BITS", "Portfolio"],
  authors: [{ name: "Shreyas S Joshi" }],
  openGraph: {
    title: "Shreyas S Joshi | Blockchain & AI Developer",
    description: "Building intelligent systems that help people",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${onest.variable} font-sans antialiased overflow-x-hidden`}>{children}</body>
    </html>
  )
}
