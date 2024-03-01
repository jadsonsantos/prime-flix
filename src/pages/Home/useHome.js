import { useEffect, useState } from 'react'
import api from 'services/api'

const useHome = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get('/movie/now_playing', {
        params: {
          api_key: '9c366f3c92674ee5238386c2ef0ce2f1',
          language: 'pt-BR',
          page: 1,
        },
      })

      setMovies(response.data.results)
      setLoading(false)
    }

    loadMovies()
  }, [])

  return { loading, movies }
}

export default useHome
