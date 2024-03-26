import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import getMovieVideos from 'services/getMovieVideos'

const useVideos = () => {
  const [videos, setVideos] = useState(null)
  const { id } = useParams()

  const fetchMovieCredits = async () => {
    try {
      const response = await getMovieVideos(id)
      setVideos(response.data)
    } catch (error) {
      console.error('Erro ao buscar vídeos do filme: ', error)
    }
  }

  useEffect(() => {
    fetchMovieCredits()
  }, [id])

  return { videos }
}

export default useVideos
