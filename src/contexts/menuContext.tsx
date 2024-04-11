import { PropsWithChildren, useContext } from 'react'
import { createContext, useState } from 'react'

interface IMenuContext {
  isMenuActive: boolean
  handleMobileMenuButton: () => void
  closeMenu: () => void
}

const MenuContext = createContext<IMenuContext | undefined>(undefined)

export const useMenuContext = () => {
  const context = useContext(MenuContext)

  if (!context) {
    throw new Error('useMenuContext must be used within a MoviesProvider')
  }

  return context
}

const MenuContextProvider = ({ children }: PropsWithChildren) => {
  const [isMenuActive, setIsMenuActive] = useState(false)

  const handleMobileMenuButton = () => {
    setIsMenuActive(!isMenuActive)
  }

  const closeMenu = () => {
    setIsMenuActive(false)
  }

  const value = {
    isMenuActive,
    handleMobileMenuButton,
    closeMenu,
  }

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}

export default MenuContextProvider
