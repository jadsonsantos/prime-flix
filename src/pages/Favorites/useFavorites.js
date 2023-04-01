import { useEffect, useState } from 'react'

const useFavorites = () => {
  const [movies, setMovies] = useState()

  useEffect(() => {
    const myList = localStorage.getItem('movies')
    setMovies(JSON.parse(myList || []))
  }, [])

  const deleteMovie = (id) => {
    let moviesFilter = movies.filter((item) => {
      return item.id !== id
    })

    setMovies(moviesFilter)
    localStorage.setItem('movies', JSON.stringify(moviesFilter))
  }

  return { movies, deleteMovie }
}

export default useFavorites
