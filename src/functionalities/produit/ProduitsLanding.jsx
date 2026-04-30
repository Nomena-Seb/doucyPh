import { useEffect, useMemo, useRef, useState } from "react";
import ProduitStackSection from "./ProduitStackSection";
import Produit1 from "./DoucyClassic/DoucyClassic";
import Produit2 from "./DoucyEco/DoucyEco";
import Produit3 from "./LysBlanc/LysBlanc";
import Produit4 from "./LysRose/LysRose";
import Produit5 from "./DoucyConfort/DoucyConfort";
import Produit6 from "./DoucyPro/DoucyPro";
import ContactForm from "../form/Form";

export default function ProduitsLanding() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);
  const sections = useMemo(
    () => [Produit1, Produit2, Produit3, Produit4, Produit5, Produit6, ContactForm],
    [],
  );

  useEffect(() => {
    const computeActiveIndex = () => {
      const triggerLine = window.scrollY + window.innerHeight * 0.24;
      let nextActiveIndex = 0;

      sectionRefs.current.forEach((sectionNode, index) => {
        if (!sectionNode) return;
        if (triggerLine >= sectionNode.offsetTop) {
          nextActiveIndex = index;
        }
      });

      setActiveIndex((currentIndex) =>
        currentIndex === nextActiveIndex ? currentIndex : nextActiveIndex,
      );
    };

    computeActiveIndex();
    window.addEventListener("scroll", computeActiveIndex, { passive: true });
    window.addEventListener("resize", computeActiveIndex);

    return () => {
      window.removeEventListener("scroll", computeActiveIndex);
      window.removeEventListener("resize", computeActiveIndex);
    };
  }, []);

  return (
    <main className="relative w-full bg-white">
      {sections.map((SectionComponent, index) => (
        <ProduitStackSection
          key={index}
          index={index}
          activeIndex={activeIndex}
          sectionRef={(node) => {
            sectionRefs.current[index] = node;
          }}
        >
          <SectionComponent />
        </ProduitStackSection>
      ))}
    </main>
  );
}
