import { useContext } from 'react'
import { VscMenu } from 'react-icons/vsc'

import { MenuContext } from 'contexts/menu'

import './MobileMenuButton.scss'

const MobileMenuButton = () => {
  const { isMenuActive, handleMobileMenuButton } = useContext(MenuContext)

  const isActiveClassName = isMenuActive ? 'menu-button--active' : ''

  return (
    <button
      type="button"
      className={`menu-button ${isActiveClassName}`}
      onClick={handleMobileMenuButton}
    >
      <VscMenu color="#fff" size={25} />
    </button>
  )
}

export default MobileMenuButton
