import React from 'react'

import CustomLink from 'components/CustomLink'

import useMovie from 'hooks/useMovie'
import useVideos from 'hooks/useVideos'

import PropTypes, { shape } from 'prop-types'

const MovieActions = ({ movie }) => {
  const { saveMovie } = useMovie()
  const { videos } = useVideos()

  const { homepage } = movie

  const trailer = videos?.results.find((video) => video.site === 'YouTube')

  return (
    <div className="movie__buttons">
      <button className="movie__button" onClick={saveMovie}>
        Salvar
      </button>
      {trailer && (
        <CustomLink
          className="movie__button movie__button--link"
          href={`https://www.youtube.com/watch?v=${trailer.key}`}
        >
          Ver Trailer
        </CustomLink>
      )}

      {homepage.length > 0 && (
        <CustomLink href={homepage} className="movie__link">
          Homepage
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
