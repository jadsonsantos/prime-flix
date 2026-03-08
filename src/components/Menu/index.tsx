import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'

import { useMenuContext } from 'contexts/menuContext'
import menu from 'data/menu'

import './Menu.scss'

const Menu = () => {
  const { isMenuActive, closeMenu } = useMenuContext()
  const { pathname } = useLocation()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navClassName = isMenuActive ? 'menu menu--active' : 'menu'

  const isActiveLink = (link: string) => {
    if (link === '/') return pathname === '/'
    return pathname.startsWith(link)
  }

  const handleItemMenuClick = () => {
    closeMenu()
    setActiveDropdown(null)
  }

  const toggleDropdown = (itemName: string, event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  const handleSubmenuClick = () => {
    closeMenu()
    setActiveDropdown(null)
  }

  return (
    <nav className={navClassName}>
      <ul className="menu__list">
        {menu.map(({ name, link, submenu }) => {
          const hasSubmenu = submenu && submenu.length > 0
          const isDropdownActive = activeDropdown === name
          const liClassName =
            isActiveLink(link) && !hasSubmenu
              ? 'menu__item menu__item--active'
              : 'menu__item'

          return (
            <li
              key={name}
              className={liClassName}
              onMouseEnter={() => hasSubmenu && setActiveDropdown(name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {hasSubmenu ? (
                <div className="menu__dropdown">
                  <button
                    className="menu__dropdown-trigger"
                    onClick={(e) => toggleDropdown(name, e)}
                  >
                    <span>{name}</span>
                    <FiChevronDown
                      className={`menu__dropdown-icon ${
                        isDropdownActive ? 'menu__dropdown-icon--open' : ''
                      }`}
                    />
                  </button>

                  <ul
                    className={`menu__submenu ${
                      isDropdownActive ? 'menu__submenu--open' : ''
                    }`}
                  >
                    {submenu.map(({ name: subName, link: subLink }) => {
                      const isSubActive = isActiveLink(subLink)
                      const subLiClassName = isSubActive
                        ? 'menu__submenu-item menu__submenu-item--active'
                        : 'menu__submenu-item'

                      return (
                        <li key={subName} className={subLiClassName}>
                          <Link
                            to={subLink}
                            className="menu__submenu-link"
                            onClick={handleSubmenuClick}
                          >
                            {subName}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ) : (
                <Link
                  to={link}
                  className="menu__link"
                  onClick={handleItemMenuClick}
                >
                  {name}
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Menu
