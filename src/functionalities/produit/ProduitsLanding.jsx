import ProduitStackSection from "./ProduitStackSection";
import Produit1 from "./DoucyClassic/DoucyClassic";
import Produit2 from "./DoucyEco/DoucyEco";
import Produit3 from "./LysBlanc/LysBlanc";
import Produit4 from "./LysRose/LysRose";
import Produit5 from "./DoucyConfort/DoucyConfort";
import Produit6 from "./DoucyPro/DoucyPro";

export default function ProduitsLanding() {
  return (
    <main className="relative w-full bg-white">

      <ProduitStackSection index={0}>
        <Produit1 />
      </ProduitStackSection>

      <ProduitStackSection index={1}>
        <Produit2 />
      </ProduitStackSection>

      <ProduitStackSection index={2}>
        <Produit3 />
      </ProduitStackSection>

      <ProduitStackSection index={3}>
        <Produit4 />
      </ProduitStackSection>

      <ProduitStackSection index={4}>
        <Produit5 />
      </ProduitStackSection>

      <ProduitStackSection index={5}>
        <Produit6 />
      </ProduitStackSection>

    </main>
  );
}