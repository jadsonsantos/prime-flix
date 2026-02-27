import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import MovieCredits from 'interfaces/movieCredits'
import getPersonMovieCredits from 'services/getPersonMovieCredits'

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
      // Sort by release date (most recent first) and take top 12
      const sortedCredits = response.data.cast
        .filter((movie: MovieCredits) => movie.poster_path)
        .sort((a: MovieCredits, b: MovieCredits) => {
          const dateA = a.release_date ? new Date(a.release_date).getTime() : 0
          const dateB = b.release_date ? new Date(b.release_date).getTime() : 0
          return dateB - dateA
        })
        .slice(0, 12)
      setPersonMovieCredits(sortedCredits)
    } catch (error) {
      console.error('Erro ao buscar créditos: ', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchPersonMovieCredits()
  }, [id])

  return { personMovieCredits, isLoading }
}

export default usePersonMovieCredits
