import ScrollReveal from "../../shared/animations/ScrollReveal";

export default function ProduitTemplate({
  logoSrc,
  productImageSrc,
  backgroundImageSrc,
  cornerImageSrc,
  cornerImageAlt = "",
  logoAlt = "Logo produit",
  productImageAlt = "Catalogue produit",
  slogan,
  brandName,
  paragraphs,
  textStyles = {},
}) {
  // Le style est maintenant préparé pour le conteneur global
  const infoPanelStyle = backgroundImageSrc
    ? {
        backgroundImage: `url(${backgroundImageSrc})`,
      }
    : undefined;

  const {
    panelTextClassName = "",
    sloganClassName = "",
    descriptionClassName = "",
    brandClassName = "",
    cornerImageClassName = "",
    boutonProduitClassName = "",
  } = textStyles;

    const scrollToContact = () => {
  const element = document.getElementById('contact-section');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

  return (
    <section className="w-full bg-white md:min-h-screen">
      <div
        className="w-full overflow-visible bg-cover bg-center bg-no-repeat md:min-h-[calc(100vh-7rem)]"
        style={infoPanelStyle}
      >
        <div className="grid w-full grid-cols-[1.2fr_0.8fr] md:min-h-[calc(100vh-7rem)] md:grid-cols-2">
          <div
            className={`flex flex-col justify-start pl-3 pr-[3.75rem] pt-10 pb-24 sm:px-4 sm:pt-10 sm:pb-14 md:justify-start md:px-12 md:pt-16 md:pb-14 lg:px-16 lg:pb-16 ${panelTextClassName}`}
          >
            <div className="flex w-full items-start justify-between gap-3 sm:gap-4">
              <ScrollReveal
                variant="zoomIn"
                delay="delay-100"
                className="w-full max-w-[90px] shrink-0 sm:max-w-[120px] md:max-w-[180px] lg:max-w-[260px]"
              >
                <img
                  src={logoSrc}
                  alt={logoAlt}
                  className="w-full drop-shadow-[0_8px_18px_rgba(0,0,0,0.18)]"
                />
              </ScrollReveal>

              {cornerImageSrc ? (
                <ScrollReveal
                  variant="fadeRight"
                  delay="delay-200"
                  className="flex flex-1 justify-end"
                >
                  <img
                    src={cornerImageSrc}
                    alt={cornerImageAlt}
                    className={cornerImageClassName}
                    aria-hidden={cornerImageAlt ? undefined : true}
                  />
                </ScrollReveal>
              ) : null}
            </div>

            <ScrollReveal
              variant="fadeUp"
              delay="delay-300"
              className="mt-4 w-full sm:mt-6 md:mt-8"
            >
              <h1 className={sloganClassName}>
                {slogan}
              </h1>

              <div className={descriptionClassName}>
                <p>
                  <span className={brandClassName}>
                    {brandName}
                  </span>
                  {paragraphs[0]}
                </p>

                {paragraphs[1] ? <p>{paragraphs[1]}</p> : null}
              </div>
               <button
                  type="button"
                  className={`${boutonProduitClassName} pointer-events-auto`}
                  onClick={scrollToContact}
               >
                  Commander
          </button>
            </ScrollReveal>
          </div>

          <ScrollReveal
            variant="fadeRight"
            delay="delay-200"
            duration="duration-[1400ms]"
            className="relative flex items-start justify-center overflow-visible pl-2 pr-9 pt-[5.75rem] pb-10 sm:pt-10 sm:pb-14 md:items-center md:px-6 md:pt-10 md:pb-14 lg:px-10 lg:pb-16"
          >
           

            <img
              src={productImageSrc}
              alt={productImageAlt}
              className="h-auto w-full max-h-[90svh] rounded-xl object-contain scale-150 md:scale-100 shadow-[0_12px_28px_rgba(0,0,0,0.16)] transition-transform duration-[1800ms] ease-out md:max-h-[calc(100vh-12rem)] md:w-auto md:mx-auto md:rounded-3xl md:shadow-[0_20px_45px_rgba(0,0,0,0.18)]"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
