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
    brandClassName = "font-futura font-medium",
    paragraphOneClassName = "!font-futura !font-medium",
    paragraphTwoClassName = "!font-futura !font-medium",
    cornerImageClassName = "",
    boutonProduitClassName = "mt-auto w-fit translate-x-56 -translate-y-7 sm:translate-x-64 sm:-translate-y-8 md:mt-5 md:translate-x-[35rem] md:-translate-y-6",
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
        <div className="isolate grid w-full grid-cols-[1.2fr_0.8fr] md:min-h-[calc(100vh-7rem)] md:grid-cols-2">
          <div
            className={`relative z-20 flex flex-col justify-start pl-3 pr-[3.75rem] pt-10 pb-24 sm:px-4 sm:pt-10 sm:pb-14 md:justify-start md:px-12 md:pt-14 md:pb-24 lg:px-16 lg:pb-28 ${panelTextClassName}`}
          >
            <div className="flex w-full min-h-[6.5rem] items-start justify-between gap-3 sm:min-h-[8rem] sm:gap-4 md:min-h-[9.5rem] lg:min-h-[10.5rem]">
              <ScrollReveal
                variant="zoomIn"
                delay="delay-100"
                className="-ml-2 w-full max-w-[90px] shrink-0 sm:-ml-1 sm:max-w-[120px] md:ml-0 md:max-w-[150px] md:max-lg:max-w-[135px] lg:max-w-[220px]"
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
                    className={`corner-image-anim ${cornerImageClassName}`}
                    aria-hidden={cornerImageAlt ? undefined : true}
                  />
                </ScrollReveal>
              ) : null}
            </div>

            <div className="-mt-3 flex w-full min-h-[19rem] flex-col sm:-mt-1 sm:min-h-[21rem] md:mt-6 md:min-h-[24rem]">
              <ScrollReveal
                variant="fadeUp"
                delay="delay-300"
                className="w-full"
              >
                <h1 className={sloganClassName}>
                  {slogan}
                </h1>

                <div className={`md:max-lg:space-y-2 ${descriptionClassName}`}>
                  <p
                    className={`!font-futura !font-medium md:max-lg:text-[0.9rem] md:max-lg:leading-relaxed ${paragraphOneClassName}`}
                  >
                    <span
                      className={`md:max-lg:text-[clamp(0.9rem,1.7vw,1.4rem)] ${brandClassName}`}
                    >
                      {brandName}
                    </span>
                    {paragraphs[0]}
                  </p>

                  {paragraphs[1] ? (
                    <p
                      className={`!font-futura !font-medium md:max-lg:text-[0.9rem] md:max-lg:leading-relaxed ${paragraphTwoClassName}`}
                    >
                      {paragraphs[1]}
                    </p>
                  ) : null}
                </div>
              </ScrollReveal>

              <ScrollReveal
                variant="fadeUp"
                delay="delay-500"
                className={`${boutonProduitClassName} relative z-30 pointer-events-auto md:!mt-[12px] md:!translate-y-0`}
              >
                <button
                  type="button"
                  className="produit-cta-anim inline-flex w-fit rounded-2xl bg-[#e20a69] px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-[#b40854] hover:brightness-95 focus:outline-none md:-ml-15 md:rounded-3xl md:px-8 md:py-4 md:text-xl md:max-lg:rounded-2xl md:max-lg:px-5 md:max-lg:py-3 md:max-lg:text-base"
                  onClick={scrollToContact}
                >
                  Commander Moi
                </button>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal
            variant="fadeRight"
            delay="delay-200"
            duration="duration-[1400ms]"
            className="pointer-events-none relative z-10 flex items-start justify-center overflow-visible pl-2 pr-9 pt-[5.75rem] pb-10 sm:pt-10 sm:pb-14 md:items-center md:px-6 md:pt-8 md:pb-24 lg:px-10 lg:pb-28"
          >
           

            <div className="product-image-damped-swing w-full md:w-auto">
              <img
                src={productImageSrc}
                alt={productImageAlt}
                className="pointer-events-none h-auto w-full max-h-[90svh] rounded-xl object-contain scale-150 md:scale-100 lg:scale-110 lg:-translate-y-4 shadow-[0_12px_28px_rgba(0,0,0,0.16)] transition-transform duration-[1800ms] ease-out md:max-h-[calc(100vh-12rem)] lg:max-h-[calc(100vh-8rem)] md:w-auto md:mx-auto md:rounded-3xl md:shadow-[0_20px_45px_rgba(0,0,0,0.18)]"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
