import { createContext, useState } from 'react'

import propTypes from 'prop-types'

export const MenuContext = createContext({
  isMenuActive: false,
  handleMobileMenuButton: () => {},
})

const MenuContextProvider = ({ children }) => {
  const [isMenuActive, setIsMenuActive] = useState(false)

  const handleMobileMenuButton = () => {
    setIsMenuActive(!isMenuActive)
  }

  const value = { isMenuActive, handleMobileMenuButton }

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}

MenuContextProvider.propTypes = {
  children: propTypes.node,
}

export default MenuContextProvider
