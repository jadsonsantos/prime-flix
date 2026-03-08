import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const useFavorites = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const myList = localStorage.getItem('@favorites')
    if (myList) setFavorites(JSON.parse(myList || []))
  }, [])

  const deleteFavorite = (id, mediaType) => {
    let favoritesFilter = favorites.filter((item) => {
      return !(item.id === id && item.mediaType === mediaType)
    })

    setFavorites(favoritesFilter)
    localStorage.setItem('@favorites', JSON.stringify(favoritesFilter))
    toast.success(
      mediaType === 'tv'
        ? 'série removida com sucesso'
        : 'filme removido com sucesso'
    )
  }

  return { favorites, deleteFavorite }
}

export default useFavorites
