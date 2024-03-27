import React, { useEffect } from 'react'

import Loading from 'components/Loading'
import Movies from 'components/Movies'
import Title from 'components/Title'

import useMovies from 'hooks/useMovies'

import PropTypes from 'prop-types'

const MoviesContainer = ({ title, filter }) => {
  const { movies, loading, loadMovies } = useMovies()

  useEffect(() => {
    if (filter) loadMovies(filter)
  }, [filter])

  return (
    <div className="container">
      {loading ? (
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

MoviesContainer.propTypes = {
  title: PropTypes.string,
  filter: PropTypes.string,
}

export default MoviesContainer
