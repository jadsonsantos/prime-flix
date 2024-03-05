import React from 'react'

import CustomLink from 'components/CustomLink'

import useMovie from 'hooks/useMovie'

import PropTypes from 'prop-types'

const MovieActions = ({ title }) => {
  const { saveMovie } = useMovie()

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
    </div>
  )
}

MovieActions.propTypes = {
  title: PropTypes.string,
}

export default MovieActions
