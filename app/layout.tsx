import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "India Marketing -  Agricultural Products Worldwide",
  description:
    "Leading exporter of vegetables, fruits, spices, pulses, and animal feeds to 17+ countries worldwide. Quality assured agricultural products from India.",
  keywords:
    "agricultural exports, vegetables, spices, fruits, pulses, animal feeds, international trade, India Marketing",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-poppins antialiased">{children}</body>
    </html>
  )
}
