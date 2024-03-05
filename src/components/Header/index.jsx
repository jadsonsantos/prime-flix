import React from 'react'
import { Link } from 'react-router-dom'

import Menu from 'components/Menu'

import './Header.scss'

const Header = () => (
  <header className="header">
    <div className="container header__container">
      <Link className="header__link header__logo" to="/">
        Prime Flix
      </Link>
      <Menu />
      <Link className="header__link header__favorites" to="/favorites">
        Meus filmes
      </Link>
    </div>
  </header>
)

export default Header
