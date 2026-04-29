import logoLys from "../../../assets/logoLys.png";
import catalogueProduit from "../../../assets/Catalogue-produit1.jpg";
import ProduitTemplate from "../ProduitTemplate";
import FondImage from "../../../assets/lysFond.jpg";

export default function Produit4() {
  const paragraphs = [
    "est un papier hygiénique de couleur blanche, conçu à partir de matériaux recyclés issu de la revalorisation des déchets en papier blanc. Sans additifs ni colorants, il garantit une utilisation saine.",
    "Son côté à la fois épais et doux, assure un confort optimal à chaque utilisation. En choisissant Lys, vous optez pour un produit fiable, naturel et respectueux de l'environnement.",
  ];

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
    />
  );
}
