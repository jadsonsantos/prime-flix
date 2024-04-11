import { VscMenu } from 'react-icons/vsc'

import { useMenuContext } from 'contexts/menuContext'

import './MobileMenuButton.scss'

const MobileMenuButton = () => {
  const { isMenuActive, handleMobileMenuButton } = useMenuContext()

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
