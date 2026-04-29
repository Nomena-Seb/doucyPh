function DesktopHeader({ logoSrc, theme }) {
  return (
    <div className="hidden items-center justify-between gap-6 py-4 md:flex">
      <div className="flex items-center gap-3">
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
            Un monde de Douceur
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${theme.outlineButton}`}
        >
          Nous Ecrire
        </button>
        <button
          type="button"
          className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${theme.filledButton}`}
        >
          Appeler
        </button>
      </div>
    </div>
  )
}

export default DesktopHeader
