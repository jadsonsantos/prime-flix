import React from 'react'
import { Link } from 'react-router-dom'

import menu from 'data/menu'

import './Menu.scss'

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        {menu.map(({ name, link }) => (
          <li key={name} className="menu__item">
            <Link to={`/${link}`} className="menu__link">
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
