import { useEffect } from 'react'

import Loading from 'components/Loading'
import Movies from 'components/Movies'
import Title from 'components/Title'

import { useMoviesContext } from 'contexts/MoviesContext'

interface MoviesContainerProps {
  title: string
  filter: string
}

const MoviesContainer = ({ title, filter }: MoviesContainerProps) => {
  const { moviesData, isLoading, fetchMovies } = useMoviesContext()

  useEffect(() => {
    fetchMovies(filter)
  }, [filter])

  const movies = moviesData[filter] || []

  return (
    <div className="container">
      {isLoading ? (
        <Loading text="Carregando filmes..." />
      ) : (
        <>
          <Title>{title}</Title>
          {movies.length > 0 && <Movies movies={movies} />}
        </>
      )}
    </div>
  )
}

export default MoviesContainer
