import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import getMovieCredits from 'services/getMovieCredits'
import { fetchTvCredits } from 'services/tvService'

const useCredits = (isTv = false) => {
  const [credits, setCredits] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        if (isTv) {
          const data = await fetchTvCredits(id)
          setCredits(data)
        } else {
          const response = await getMovieCredits(id)
          setCredits(response.data)
        }
      } catch (error) {
        console.error('Erro ao buscar créditos: ', error)
      }
    }

    fetchCredits()
  }, [id, isTv])

  return { credits }
}

export default useCredits
