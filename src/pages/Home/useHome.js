import { useEffect, useState } from 'react'

import getMovies from 'services/getMovies'

const useHome = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadMovies = async () => {
      const movies = await getMovies('now_playing')

      setMovies(movies)
      setLoading(false)
    }

    loadMovies()
  }, [])

  return { loading, movies }
}

export default useHome
