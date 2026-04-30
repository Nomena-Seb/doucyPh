function DesktopHeader({ logoSrc, theme }) {

  const scrollToContact = () => {
  const element = document.getElementById('contact-section');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

  const scrollToTop =() => {
    window.scrollTo({top: 0, 
                     behavior:'smooth'
      })
  };

  return (
    <div className="hidden items-center justify-between gap-6 py-4 md:flex">
      <button
        type="button"
        className="flex items-center gap-3 text-left"
        onClick={scrollToTop}
      >
        <img
          src={logoSrc}
          alt="Logo Doucy & Lys"
          className="h-12 w-auto rounded-xl shadow-sm lg:h-14 lg:rounded-2xl"
        />

        <div className="text-right">
          <p
            className={`text-lg font-semibold tracking-tight transition-colors duration-300 ${theme.title}`}
          >
            Doucy & Lys
          </p>
          <p
            className={`text-xs uppercase tracking-[0.3em] transition-colors duration-300 ${theme.subtitle}`}
          >
            Le confort du jour
          </p>
        </div>
      </button>

      <div className="flex items-center gap-3">
          <button
            type="button"
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${theme.outlineButton}`}
            onClick={scrollToContact}
          >
                  Nous Ecrire
          </button>
          <a
            href="https://wa.me/261385283093"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 bg-[#25D366] hover:bg-[#128C7E] text-white"
          >
            Whatsapp
          </a>
        
      </div>
    </div>
  )
}

export default DesktopHeader
