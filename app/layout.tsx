import type { Metadata } from "next"

import "~/styles/globals.css"

import { GeistSans } from "geist/font/sans"

export const metadata: Metadata = {
  title: "Next.js 15 Starter",
  description: "Created by dm1nh",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
