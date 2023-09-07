import { Link } from 'react-router-dom'
import './Header.scss'
import React from 'react'

const Header = () => (
  <header className="header">
    <Link className="header__link header__logo" to="/">
      Prime Flix
    </Link>
    <Link className="header__link header__favorites" to="/favorites">
      Meus filmes
    </Link>
  </header>
)

export default Header
