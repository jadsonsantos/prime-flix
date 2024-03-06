import React from 'react'

import CustomLink from 'components/CustomLink'

import useMovie from 'hooks/useMovie'

import PropTypes, { shape } from 'prop-types'

const MovieActions = ({ movie }) => {
  const { saveMovie } = useMovie()
  const { title, homepage } = movie

  return (
    <div className="movie__buttons">
      <button className="movie__button" onClick={saveMovie}>
        Salvar
      </button>
      <CustomLink
        className="movie__button movie__button--link"
        href={`https://www.youtube.com/results?search_query=${title} trailer`}
      >
        Trailer
      </CustomLink>
      {homepage.length > 0 && (
        <CustomLink href={homepage} className="movie__link">
          Acessar site do filme
        </CustomLink>
      )}
    </div>
  )
}

MovieActions.propTypes = {
  movie: shape({
    title: PropTypes.string,
    homepage: PropTypes.string,
  }),
}

export default MovieActions
