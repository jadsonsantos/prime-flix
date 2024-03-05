import { useState } from 'react'

import getMovies from 'services/getMovies'

const useMovies = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  const loadMovies = async (filter) => {
    const movies = await getMovies(filter)

    setMovies(movies)
    setLoading(false)
  }

  return { loading, movies, loadMovies }
}

export default useMovies
