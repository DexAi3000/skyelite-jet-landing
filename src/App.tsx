import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4'

const NAV_LINKS = ['Start', 'Story', 'Rates', 'Benefits', 'FAQ']

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-screen overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="relative h-full flex flex-col">
          <nav className="w-full">
            <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
              <span className="text-2xl font-semibold text-gray-900">SkyElite</span>

              <div className="hidden md:flex items-center gap-8">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-900 hover:text-gray-700 transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>

              <button
                type="button"
                className="md:hidden text-gray-900"
                onClick={() => setMobileMenuOpen((open) => !open)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {mobileMenuOpen && (
              <div className="md:hidden mx-4 bg-white/95 backdrop-blur rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col px-6 py-4">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      className="py-3 text-gray-900 hover:text-gray-700 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </nav>

          <div className="flex-1 flex items-center justify-center">
            <div className="-mt-80 text-center px-6">
              <p className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
                Private Jets
              </p>

              <h1 className="leading-none tracking-tighter">
                <span className="block text-6xl md:text-7xl lg:text-8xl font-normal text-gray-500">
                  Premium.
                </span>
                <span
                  className="block text-6xl md:text-7xl lg:text-8xl font-normal"
                  style={{ color: '#202A36', marginTop: '-12px' }}
                >
                  Accessible.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto mt-6">
                Your dedication deserves recognition.
              </p>

              <div className="flex items-center justify-center gap-4">
                <button
                  type="button"
                  className="px-4 py-2 rounded-full bg-gray-300 text-gray-800 font-medium hover:bg-gray-400 transition-colors"
                >
                  Discover
                </button>
                <button
                  type="button"
                  className="px-4 py-2 rounded-full text-white font-medium transition-colors"
                  style={{ backgroundColor: '#202A36' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1a2229')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#202A36')}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
