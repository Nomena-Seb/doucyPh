import logoLys from "../../../assets/logo/logoLys.png";
import catalogueProduit from "../../../assets/Ph/lysBlanc.jpg";
import ProduitTemplate from "../ProduitTemplate";
import FondImage from "../../../assets/fond/lysBlancFond.jpg";

export default function Produit3() {
  const paragraphs = [
    "est un papier hygiénique de couleur blanche, conçu à partir de matériaux recyclés issu de la revalorisation des déchets en papier blanc. Sans additifs ni colorants, il garantit une utilisation saine.",
    "Son côté à la fois épais et doux, assure un confort optimal à chaque utilisation. En choisissant Lys, vous optez pour un produit fiable, naturel et respectueux de l'environnement.",
  ];
  const textStyles = {
    panelTextClassName: "text-slate-900",
    sloganClassName:
      "font-cream text-[clamp(1.05rem,4.3vw,4.2rem)] font-normal leading-none tracking-wide text-slate-900",
    descriptionClassName:
      "mt-1 space-y-2 text-[clamp(0.68rem,1.1vw,1.18rem)] font-medium leading-relaxed tracking-wide text-slate-700 sm:mt-2 sm:space-y-3 md:mt-6 md:space-y-4",
    paragraphOneClassName:
      "font-futura font-medium",
    paragraphTwoClassName:
      "font-futura font-medium",
    brandClassName:
      "mr-1 font-cream text-[clamp(1rem,2vw,2.2rem)] font-normal leading-none text-slate-900",
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



