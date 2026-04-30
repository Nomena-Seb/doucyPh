import logoLys from "../../../assets/logo/logoDoucyEco.png";
import catalogueProduit from "../../../assets/Ph/doucyEco.jpg";
import ProduitTemplate from "../ProduitTemplate";
import FondImage from "../../../assets/fond/doucyEcoFond.jpg";


export default function Produit2() {
  const paragraphs = [
    "est un papier hygiénique de couleur blanche, conçu à partir de matériaux recyclés issu de la revalorisation des déchets en papier blanc. Sans additifs ni colorants, il garantit une utilisation saine.",
    "Son côté à la fois épais et doux, assure un confort optimal à chaque utilisation. En choisissant Lys, vous optez pour un produit fiable, naturel et respectueux de l'environnement.",
  ];
  const textStyles = {
    panelTextClassName: "text-slate-900 md:pb-28 lg:pb-32",
    sloganClassName:
      "font-['Brush_Script_MT','Segoe_Script',cursive] text-[clamp(1.05rem,4.3vw,4.2rem)] italic leading-none tracking-wide text-slate-900",
    descriptionClassName:
      "mt-3 space-y-2 text-[clamp(0.68rem,1.1vw,1.18rem)] font-medium leading-relaxed tracking-wide text-slate-700 sm:mt-4 sm:space-y-3 md:mt-6 md:space-y-4",
    brandClassName:
      "mr-1 text-[clamp(1rem,2vw,2.2rem)] font-extrabold leading-none text-slate-900",
    boutonProduitClassName:
      "mt-auto w-fit translate-x-56 -translate-y-7 sm:translate-x-64 sm:-translate-y-8 md:mt-5 md:translate-x-[35rem] md:-translate-y-14",
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
