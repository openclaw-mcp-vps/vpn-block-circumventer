export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Auto Protocol Switching
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Bypass Government VPN Blocks{' '}
          <span className="text-[#58a6ff]">Automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          ProxyShift rotates between SOCKS5, HTTP, and Shadowsocks endpoints in real time.
          When a block is detected, we switch protocols before you even notice.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Access — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Instant setup.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ['3 Protocols', 'SOCKS5, HTTP, Shadowsocks'],
            ['Auto-Failover', 'Switches in &lt;2 seconds'],
            ['50+ Regions', 'Global endpoint coverage'],
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-[#58a6ff] font-bold text-lg mb-1">{title}</div>
              <div className="text-[#8b949e] text-sm" dangerouslySetInnerHTML={{ __html: desc }} />
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited bandwidth',
              'Auto protocol switching',
              'Config file downloads (OpenVPN, SOCKS5)',
              'Connection health dashboard',
              'Priority support',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              'How does automatic protocol switching work?',
              'Our servers continuously monitor connection health. When a block or degradation is detected, the system instantly rotates to the next available protocol — SOCKS5, HTTP, or Shadowsocks — without interrupting your session.',
            ],
            [
              'Which countries is this designed for?',
              'ProxyShift is built for users in countries with heavy internet censorship including China, Iran, Russia, and others. Our endpoints are optimized to evade deep packet inspection (DPI).',
            ],
            [
              'How do I connect after subscribing?',
              'After payment you receive a config dashboard where you can download ready-to-use configuration files for your preferred client (Shadowsocks, Clash, or standard SOCKS5 proxy settings).',
            ],
          ].map(([q, a]) => (
            <details key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 group">
              <summary className="font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                {q}
                <span className="text-[#58a6ff] ml-4 text-lg">+</span>
              </summary>
              <p className="mt-3 text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} ProxyShift. For lawful use only.
      </footer>
    </main>
  )
}
