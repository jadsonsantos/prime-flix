import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => (
  <header className="header">
    <Link className="header__link header__logo" to="/">
      Prime Flix
    </Link>
    <Link className="header__link header__favorites" to="/favoritos">
      Meus filmes
    </Link>
  </header>
)

export default Header
