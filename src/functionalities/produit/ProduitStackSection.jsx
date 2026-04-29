export default function ProduitStackSection({ children, index }) {
  const overlapClass = index === 0 ? "mt-0" : "-mt-[10vh]";

  return (
    <section
      className={`sticky top-0 w-full overflow-visible outline-none ${overlapClass} md:h-screen md:overflow-hidden`}
      style={{ zIndex: index + 1 }}
    >
      <div className="w-full md:h-full md:overflow-auto">{children}</div>
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
