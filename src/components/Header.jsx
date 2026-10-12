import logo from '../assets/logo_neurolex.png'

function Header() {
  return (
    <header className="header">
      <img className="header-logo" src={logo} alt="Logo de Neurolex" />
      <h1>Tienda Neurolex</h1>
    </header>
  )
}

export default Header