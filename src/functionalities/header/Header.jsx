import { useEffect, useState } from 'react'
import heroLogo from '../../assets/logoLys.png'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'

function Header() {
  const [isScrolled, setIsScrolled] = useState(() =>
    typeof window !== 'undefined' ? window.scrollY > 24 : false,
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const theme = isScrolled
    ? {
        title: 'text-white',
        subtitle: 'text-white/70',
        outlineButton: 'border-white/30 text-white hover:border-white hover:bg-white/10',
        filledButton: 'bg-white/12 text-white hover:bg-white/20',
      }
    : {
        title: 'text-slate-900',
        subtitle: 'text-slate-500',
        outlineButton:
          'border-slate-300 text-slate-700 hover:border-slate-900 hover:text-slate-900',
        filledButton: 'bg-slate-900 text-white hover:bg-slate-700',
      }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-white/10 bg-black/55 backdrop-blur-md'
          : 'border-slate-200/80 bg-white/85 backdrop-blur'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <MobileHeader logoSrc={heroLogo} theme={theme} />
        <DesktopHeader logoSrc={heroLogo} theme={theme} />
      </div>
    </header>
  )
}

export default Header
