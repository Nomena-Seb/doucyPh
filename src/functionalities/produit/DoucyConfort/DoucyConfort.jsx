import logoLys from "../../../assets/logo/logoDoucyConfort.png";
import catalogueProduit from "../../../assets/Ph/doucyConfort.jpg";
import ProduitTemplate from "../ProduitTemplate";
import FondImage from "../../../assets/fond/doucyConfortFond.jpg";

export default function Produit5() {
  const paragraphs = [
    "est un papier hygiénique de couleur blanche, conçu à partir de matériaux recyclés issu de la revalorisation des déchets en papier blanc. Sans additifs ni colorants, il garantit une utilisation saine.",
    "Son côté à la fois épais et doux, assure un confort optimal à chaque utilisation. En choisissant Lys, vous optez pour un produit fiable, naturel et respectueux de l'environnement.",
  ];
  const textStyles = {
    panelTextClassName: "text-slate-900",
    sloganClassName:
      "font-['Brush_Script_MT','Segoe_Script',cursive] text-[clamp(1.05rem,4.3vw,4.2rem)] italic leading-none tracking-wide text-slate-900",
    descriptionClassName:
      "mt-3 space-y-2 text-[clamp(0.68rem,1.1vw,1.18rem)] font-medium leading-relaxed tracking-wide text-slate-700 sm:mt-4 sm:space-y-3 md:mt-6 md:space-y-4",
    brandClassName:
      "mr-1 text-[clamp(1rem,2vw,2.2rem)] font-extrabold leading-none text-slate-900",
    boutonProduitClassName:"absolute z-10 pointer-events-none top-[3.75rem] left-40 md:left-[740px] md:top-[375px] w-[120px] rounded-2xl sm:w-[7.5rem] md:w-60 md:rounded-3xl px-2 py-4 text-xs sm:text-sm md:text-lg font-medium bg-slate-900 text-white transition-all duration-300 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2",
  
  };

  return (
    <ProduitTemplate
      logoSrc={logoLys}
      productImageSrc={catalogueProduit}
      backgroundImageSrc={FondImage}
      logoAlt="Logo Lys"
      productImageAlt="Catalogue produit Lys"
      slogan="Un monde de douceur."
      brandName="Lys,"
      paragraphs={paragraphs}
      textStyles={textStyles}
    />
  );
}
