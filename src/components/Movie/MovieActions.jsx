import React from 'react'

import Button from 'components/Button'
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
      <Button variation="primary" onClick={saveMovie}>
        Salvar
      </Button>

      {trailer && (
        <Button variation="secondary">
          <CustomLink href={`https://www.youtube.com/watch?v=${trailer.key}`}>
            Ver Trailer
          </CustomLink>
        </Button>
      )}

      {homepage.length > 0 && (
        <Button variation="secondary">
          <CustomLink href={homepage}>Homepage</CustomLink>
        </Button>
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
