import logoLys from '../../assets/logoLys.png'

function Separation() {
  return (
    <div className="hidden items-center justify-center md:flex">
      <img
        src={logoLys}
        alt="Logo Doucy & Lys"
        className="h-24 w-auto object-contain md:h-28"
      />
    </div>
  )
}

export default Separation
