export default function ProduitStackSection({ children, index }) {
  return (
    <section
      className="sticky top-0 h-[100svh] w-full overflow-hidden outline-none md:h-screen"
      style={{
        zIndex: index + 1,
        marginTop: index === 0 ? 0 : "-10vh",
      }}
    >
      <div className="h-full w-full overflow-auto">{children}</div>
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