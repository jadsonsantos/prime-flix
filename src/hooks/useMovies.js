import { useState } from 'react'

import getMovies from 'services/getMovies'

const useMovies = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  const loadMovies = async (filter) => {
    try {
      const movies = await getMovies(filter)

      setMovies(movies)
    } catch (error) {
      console.error('Erro ao buscar filmes: ', error)
    } finally {
      setLoading(false)
    }
  }

  return { loading, movies, loadMovies }
}

export default useMovies
