function MobileHeader({ logoSrc, theme }) {
  return (
    <div className="flex flex-col gap-4 py-3 md:hidden">
      <div className="flex items-center justify-center gap-3">
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
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          className={`w-full rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${theme.outlineButton}`}
        >
          Nous Ecrire
        </button>
        <button
          type="button"
          className={`w-full rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${theme.filledButton}`}
        >
          Appeler
        </button>
      </div>
    </div>
  )
}

export default MobileHeader
