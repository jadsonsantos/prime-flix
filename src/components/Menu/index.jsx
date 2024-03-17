import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { MenuContext } from 'contexts/menu'
import menu from 'data/menu'

import './Menu.scss'

const Menu = () => {
  const { isMenuActive, closeMenu } = useContext(MenuContext)

  const isActiveClassName = isMenuActive ? 'menu--active' : ''

  const handleItemMenuClick = () => {
    closeMenu()
  }

  return (
    <nav className={`menu ${isActiveClassName}`}>
      <ul className="menu__list">
        {menu.map(({ name, link }) => (
          <li key={name} className="menu__item" onClick={handleItemMenuClick}>
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
