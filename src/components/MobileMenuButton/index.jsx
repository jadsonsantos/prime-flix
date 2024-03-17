import { useContext } from 'react'

import { ReactComponent as MenuIcon } from 'assets/icons/hamburguer.svg'
import { MenuContext } from 'contexts/menu'

const MobileMenuButton = () => {
  const { isMenuActive, handleMobileMenuButton } = useContext(MenuContext)

  const isActiveClassName = isMenuActive ? 'menu-button--active' : ''

  return (
    <button
      type="button"
      className={`menu-button ${isActiveClassName}`}
      onClick={handleMobileMenuButton}
    >
      <MenuIcon />
    </button>
  )
}

export default MobileMenuButton
