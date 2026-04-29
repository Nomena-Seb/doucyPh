import ContactUs from './ContactUs'
import Follow from './Follow'
import Separation from './Separation'

function Footer() {
  return (
    <footer className="mt-auto bg-black text-white">
      <div className="mx-auto max-w-10xl px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto_1fr] md:gap-12">
          <ContactUs />
          <Separation />
          <Follow />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-3 pt-2">
        <div className="h-px w-full bg-white/30" />
        <p className="pt-3 text-center text-sm text-white/70">
          Copyright {new Date().getFullYear()} Doucy & Lys. Tous droits
          reserves.
        </p>
      </div>
    </footer>
  )
}

export default Footer
