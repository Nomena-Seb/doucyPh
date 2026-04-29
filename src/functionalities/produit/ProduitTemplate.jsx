import ScrollReveal from "../../shared/animations/ScrollReveal";

export default function ProduitTemplate({
  logoSrc,
  productImageSrc,
  backgroundImageSrc,
  logoAlt = "Logo produit",
  productImageAlt = "Catalogue produit",
  slogan,
  brandName,
  paragraphs,
}) {
  // Le style est maintenant préparé pour le conteneur global
  const infoPanelStyle = backgroundImageSrc
    ? {
        backgroundImage: `url(${backgroundImageSrc})`,
      }
    : undefined;

  return (
    <section className="w-full bg-white p-0 md:min-h-screen">
      <div
        className="w-full overflow-hidden bg-cover bg-center bg-no-repeat md:min-h-[calc(100vh-7rem)]"
        style={infoPanelStyle}
      >
        <div className="grid h-full w-full grid-cols-[1.2fr_0.8fr] md:min-h-0 md:grid-cols-2">
          <div
            className="flex flex-col justify-start px-3 pt-10 pb-8 text-slate-900 sm:px-4 sm:pt-10 sm:pb-8 md:min-h-0 md:justify-start md:px-12 md:pt-16 md:pb-10 lg:px-16"
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
              <h1 className="font-['Brush_Script_MT','Segoe_Script',cursive] text-[clamp(1.05rem,4.3vw,4.2rem)] italic leading-none tracking-wide text-slate-900">
                {slogan}
              </h1>

              <div className="mt-3 space-y-2 text-[clamp(0.68rem,1.1vw,1.18rem)] font-medium leading-relaxed tracking-wide text-slate-700 sm:mt-4 sm:space-y-3 md:mt-6 md:space-y-4">
                <p>
                  <span className="mr-1 text-[clamp(1rem,2vw,2.2rem)] font-extrabold leading-none text-slate-900">
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
            className="relative flex items-start justify-center overflow-hidden pt-10 pb-8 px-3 sm:pt-10 sm:pb-8 sm:px-5 md:min-h-0 md:p-0 md:items-center"
          >
            <img
              src={productImageSrc}
              alt={productImageAlt}
              className="h-auto w-[100%] max-h-[80svh] rounded-xl object-contain object-center shadow-[0_12px_28px_rgba(0,0,0,0.16)] transition-transform duration-[1800ms] ease-out md:h-full md:w-full md:max-h-none md:rounded-none md:object-cover md:shadow-none md:scale-105"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
