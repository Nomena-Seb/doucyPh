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
  } = textStyles;

  return (
    <section className="w-full bg-white p-0 md:min-h-screen">
      <div
        className="w-full overflow-visible bg-cover bg-center bg-no-repeat md:min-h-[calc(100vh-7rem)]"
        style={infoPanelStyle}
      >
        <div className="grid w-full grid-cols-[1.2fr_0.8fr] md:min-h-[calc(100vh-7rem)] md:grid-cols-2">
          <div
            className={`flex flex-col justify-start px-3 pt-10 pb-24 sm:px-4 sm:pt-10 sm:pb-14 md:justify-start md:px-12 md:pt-16 md:pb-14 lg:px-16 lg:pb-16 ${panelTextClassName}`}
          >
            <ScrollReveal
              variant="zoomIn"
              delay="delay-100"
              className="w-full max-w-[90px] sm:max-w-[120px] md:max-w-[180px] lg:max-w-[260px]"
            >
              <img
                src={logoSrc}
                alt={logoAlt}
                className="w-full drop-shadow-[0_8px_18px_rgba(0,0,0,0.18)]"
              />
            </ScrollReveal>

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
            </ScrollReveal>
          </div>

          <ScrollReveal
            variant="fadeRight"
            delay="delay-200"
            duration="duration-[1400ms]"
            className="relative flex items-start justify-center overflow-visible px-3 pt-20 pb-14 sm:px-5 sm:pt-10 sm:pb-14 md:items-center md:px-6 md:pt-10 md:pb-14 lg:px-10 lg:pb-16"
          >
            {cornerImageSrc ? (
              <img
                src={cornerImageSrc}
                alt={cornerImageAlt}
                className={cornerImageClassName}
                aria-hidden={cornerImageAlt ? undefined : true}
              />
            ) : null}

            <img
              src={productImageSrc}
              alt={productImageAlt}
              className="h-auto w-[100%] max-h-[80svh] rounded-xl object-contain object-center shadow-[0_12px_28px_rgba(0,0,0,0.16)] transition-transform duration-[1800ms] ease-out md:max-h-[calc(100vh-12rem)] md:w-full md:rounded-3xl md:object-contain md:shadow-[0_20px_45px_rgba(0,0,0,0.18)] md:scale-100"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
