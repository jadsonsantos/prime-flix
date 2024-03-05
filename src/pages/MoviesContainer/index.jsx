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

  if (loading) {
    return <Loading text="Carregando filmes..." />
  }

  return (
    <div className="container">
      <Title>{title}</Title>
      {movies && <Movies movies={movies} />}
    </div>
  )
}

MoviesContainer.propTypes = {
  title: PropTypes.string,
  filter: PropTypes.string,
}

export default MoviesContainer
