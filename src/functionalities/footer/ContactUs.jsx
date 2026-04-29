function ContactUs() {
  return (
    <div className="space-y-6 text-center text-white">
      <h2 className="text-2xl font-semibold tracking-tight">Contactez-nous</h2>

      <div className="space-y-3 text-sm text-white/80">
        <a
          href="mailto:contact@doucyetlys.com"
          className="block transition hover:text-white"
        >
          contact@doucyetlys.com
        </a>
        <a href="tel:+261321245879" className="block transition hover:text-white">
          +261321245879
        </a>
      </div>
    </div>
  )
}

export default ContactUs
