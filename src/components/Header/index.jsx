import { Link } from 'react-router-dom'

import Menu from 'components/Menu'
import MobileMenuButton from 'components/MobileMenuButton'

import './Header.scss'

import useIsMobile from 'hooks/useIsMobile'

const Header = () => {
  const { isMobile } = useIsMobile()

  return (
    <header className="header">
      <div className="container header__container">
        <Link className="header__link header__logo" to="/">
          Prime Flix
        </Link>

        <Menu />

        {isMobile && <MobileMenuButton />}
      </div>
    </header>
  )
}

export default Header
