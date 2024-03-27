import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import getMovieCredits from 'services/getMovieCredits'

const useCredits = () => {
  const [credits, setCredits] = useState(null)
  const { id } = useParams()

  const fetchMovieCredits = async () => {
    try {
      const response = await getMovieCredits(id)
      setCredits(response.data)
    } catch (error) {
      console.error('Erro ao buscar créditos do filme: ', error)
    }
  }

  useEffect(() => {
    fetchMovieCredits()
  }, [id])

  return { credits }
}

export default useCredits
