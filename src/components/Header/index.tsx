import { FiUser } from 'react-icons/fi'
import { IoBookmarkOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

import Menu from 'components/Menu'
import MobileMenuButton from 'components/MobileMenuButton'
import SearchForm from 'components/SearchForm'

import useIsMobile from 'hooks/useIsMobile'

import './Header.scss'

const Header = () => {
  const { isMobile } = useIsMobile()

  return (
    <header className="header">
      <div className="container header__container">
        {isMobile && <MobileMenuButton />}

        <Link className="header__link header__logo" to="/">
          <span className="header__logo-icon">🎬</span>
          <span className="header__logo-text">
            Prime<span className="header__logo-accent">Flix</span>
          </span>
        </Link>

        <Menu />

        <div className="header__actions">
          <SearchForm />
          <Link
            to="/favoritos"
            className="header__icon-btn"
            title="Meus filmes"
          >
            <IoBookmarkOutline />
          </Link>
          <button className="header__icon-btn" title="Perfil">
            <FiUser />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
