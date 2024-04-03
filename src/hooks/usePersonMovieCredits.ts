import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import getPersonMovieCredits from 'services/getPersonMovieCredits'

import MovieCredits from 'interfaces/movieCredits'

const initialPersonMovieCreditsState: MovieCredits[] = []

const usePersonMovieCredits = () => {
  const [personMovieCredits, setPersonMovieCredits] = useState<MovieCredits[]>(
    initialPersonMovieCreditsState
  )
  const [isLoading, setIsLoading] = useState(false)
  const { id } = useParams()

  const fetchPersonMovieCredits = async () => {
    try {
      setIsLoading(true)
      const response = await getPersonMovieCredits(id as string)
      setPersonMovieCredits(response.data.cast.slice(0, 4))
    } catch (error) {
      console.error('Erro ao buscar créditos: ', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchPersonMovieCredits()
  }, [])

  return { personMovieCredits, isLoading }
}

export default usePersonMovieCredits
