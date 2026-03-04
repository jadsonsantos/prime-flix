import { useEffect, useState } from 'react'

import Tv from 'interfaces/tv'
import { fetchTvList } from 'services/tvService'

interface UseTvReturn {
  tvShows: Tv[]
  loading: boolean
}

const useTv = (endpoint: string): UseTvReturn => {
  const [tvShows, setTvShows] = useState<Tv[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const loadTv = async () => {
      try {
        const data = await fetchTvList(endpoint)
        setTvShows(data)
        setLoading(false)
      } catch (error) {
        console.error('Erro ao carregar séries:', error)
        setLoading(false)
      }
    }

    loadTv()
  }, [endpoint])

  return { tvShows, loading }
}

export default useTv
