import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ProxyShift — Bypass Government VPN Blocks Automatically',
  description: 'Rotating proxy service that automatically switches protocols when VPN blocks are detected. Stay connected with SOCKS5, HTTP, and Shadowsocks fallback.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="856d1407-8c34-4b73-bda7-e5364bfa0c9d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
