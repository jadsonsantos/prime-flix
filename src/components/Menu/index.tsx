import { Link, useLocation } from 'react-router-dom'

import { useMenuContext } from 'contexts/menuContext'
import menu from 'data/menu'

import './Menu.scss'

const Menu = () => {
  const { isMenuActive, closeMenu } = useMenuContext()
  const { pathname } = useLocation()

  const navClassName = isMenuActive ? 'menu menu--active' : 'menu'

  const isActiveLink = (link: string) => link === pathname

  const handleItemMenuClick = () => {
    closeMenu()
  }

  return (
    <nav className={navClassName}>
      <ul className="menu__list">
        {menu.map(({ name, link }) => {
          const liClassName = isActiveLink(link)
            ? 'menu__item menu__item--active'
            : 'menu__item'

          return (
            <li
              key={name}
              className={liClassName}
              onClick={handleItemMenuClick}
            >
              <Link to={link} className="menu__link">
                {name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Menu
