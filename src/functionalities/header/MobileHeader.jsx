function MobileHeader({ logoSrc, theme }) {

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
    <div className="flex flex-col gap-4 py-3 md:hidden">
      <button
        type="button"
        className="flex items-center justify-center gap-3 text-center"
        onClick={scrollToTop}
      >
        <img
          src={logoSrc}
          alt="Logo Doucy & Lys"
          className="h-11 w-auto rounded-xl shadow-sm"
        />

        <div className="text-center">
          <p
            className={`text-base font-semibold tracking-tight transition-colors duration-300 ${theme.title}`}
          >
            Doucy & Lys
          </p>
          <p
            className={`text-[10px] uppercase tracking-[0.24em] transition-colors duration-300 ${theme.subtitle}`}
          >
            Un monde de Douceur
          </p>
        </div>
      </button>

      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          className={`w-full rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${theme.outlineButton}`}
          onClick={scrollToContact}
        >
          Nous Ecrire
        </button>
        <a
          href="https://wa.me/261385283093"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-full px-4 py-2 text-center text-sm font-medium transition-all duration-300 bg-[#25D366] hover:bg-[#128C7E] text-white"
        >
          Whatsapp
        </a>
      </div>
    </div>
  )
}

export default MobileHeader
