import { useEffect, useState } from 'react'

const useFavorites = () => {
  const [movies, setMovies] = useState()

  useEffect(() => {
    const myList = localStorage.getItem('movies')
    setMovies(JSON.parse(myList || []))
  }, [])

  return { movies }
}

export default useFavorites
