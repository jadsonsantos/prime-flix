import { Link } from 'react-router-dom'
import './Header.scss'
import React from 'react'

const Header = () => (
  <header className="header">
    <div className="container header__container">
      <Link className="header__link header__logo" to="/">
        Prime Flix
      </Link>
      <Link className="header__link header__favorites" to="/favorites">
        Meus filmes
      </Link>
    </div>
  </header>
)

export default Header
