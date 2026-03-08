import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import getMovieVideos from 'services/getMovieVideos'
import { fetchTvVideos } from 'services/tvService'

const useVideos = (isTv = false) => {
  const [videos, setVideos] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        if (isTv) {
          const data = await fetchTvVideos(id)
          setVideos(data)
        } else {
          const response = await getMovieVideos(id)
          setVideos(response.data)
        }
      } catch (error) {
        console.error('Erro ao buscar vídeos: ', error)
      }
    }

    fetchVideos()
  }, [id, isTv])

  return { videos }
}

export default useVideos
