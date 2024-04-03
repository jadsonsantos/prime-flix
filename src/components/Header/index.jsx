import { Link } from 'react-router-dom'

import Menu from 'components/Menu'
import MobileMenuButton from 'components/MobileMenuButton'
import SearchForm from 'components/SearchForm'

import './Header.scss'

import useIsMobile from 'hooks/useIsMobile'

const Header = () => {
  const { isMobile } = useIsMobile()

  return (
    <header className="header">
      <div className="container header__container">
        {isMobile && <MobileMenuButton />}

        <Link className="header__link header__logo" to="/">
          Prime Flix
        </Link>

        <SearchForm />

        <Menu />
      </div>
    </header>
  )
}

export default Header
