export default function ProduitStackSection({
  children,
  index,
  activeIndex = 0,
  sectionRef,
}) {
  const overlapClass = index === 0 ? "mt-0" : "-mt-[10vh]";
  const depth = index - activeIndex;

  const scale = 1;
  const translateY = depth === 1 ? 16 : depth > 1 ? 24 : 0;
  const opacity = depth < 0 ? 0.9 : depth === 0 ? 1 : depth === 1 ? 0.96 : 0.92;
  const brightness = depth < 0 ? 0.95 : 1;
  const boxShadow =
    depth === 0
      ? "0 24px 60px rgba(15,23,42,0.22)"
      : "0 16px 42px rgba(15,23,42,0.14)";
  const ringClass =
    depth === 0 ? "ring-1 ring-white/40" : "ring-1 ring-white/18";

  return (
    <section
      ref={sectionRef}
      className={`sticky top-0 w-full overflow-visible outline-none ${overlapClass} md:min-h-screen`}
      style={{ zIndex: index + 1 }}
    >
      <div
        className={`w-full transform-gpu transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${ringClass}`}
        style={{
          transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
          opacity,
          filter: `brightness(${brightness})`,
          boxShadow,
        }}
      >
        {children}
      </div>
    </section>
  );
}

{/*
  export default function ProduitStackSection({ children, index }) {
  return (
    <section
      className="
        relative w-full
        md:sticky md:top-0 md:h-screen md:overflow-hidden
      "
      style={{ 
        zIndex: index + 1,
        marginTop: index === 0 ? 0 : "-15vh" // overlap mobile
      }}
    >
      <div className="w-full md:h-full md:overflow-y-auto">
        {children}
      </div>
    </section>
  );
} */}
