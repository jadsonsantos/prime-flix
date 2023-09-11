import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const useFavorites = () => {
  const [movies, setMovies] = useState()

  useEffect(() => {
    const myList = localStorage.getItem('movies')
    if (myList) setMovies(JSON.parse(myList || []))
  }, [])

  const deleteMovie = (id) => {
    let moviesFilter = movies.filter((item) => {
      return item.id !== id
    })

    setMovies(moviesFilter)
    localStorage.setItem('movies', JSON.stringify(moviesFilter))
    toast.success('filme removido com sucesso')
  }

  return { movies, deleteMovie }
}

export default useFavorites
