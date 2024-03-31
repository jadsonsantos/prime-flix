import React from 'react'

import Button from 'components/Button'
import CustomLink from 'components/CustomLink'
import Modal from 'components/Modal'

import useIsMobile from 'hooks/useIsMobile'
import useModal from 'hooks/useModal'
import useVideos from 'hooks/useVideos'

import MovieLinks from './MovieLinks'

import PropTypes, { shape } from 'prop-types'

const MovieActions = ({ movie }) => {
  const { videos } = useVideos()
  const { isMobile } = useIsMobile()
  const { handleOpenModal, handleCloseModal, isOpen } = useModal()

  const { homepage } = movie

  const trailer = videos?.results.find(
    (video) => video.site === 'YouTube' && video.type === 'Trailer'
  )

  return (
    <>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={handleCloseModal}
          youtubeID={trailer?.key}
        />
      )}
      <div className="movie__buttons">
        {trailer && (
          <>
            {isMobile ? (
              <Button variation={'primary'}>
                <CustomLink
                  className="movie__icon"
                  href={`https://www.youtube.com/watch?v=${trailer.key}`}
                  title="Assistir ao trailer no Youtube"
                >
                  Trailer
                </CustomLink>
              </Button>
            ) : (
              <Button variation={'primary'} onClick={handleOpenModal}>
                Trailer
              </Button>
            )}
          </>
        )}
        {homepage.length > 0 && (
          <Button variation={'secondary'}>
            <CustomLink
              href={homepage}
              className="movie__icon"
              title="Ir para o site oficial"
            >
              Site oficial
            </CustomLink>
          </Button>
        )}
      </div>
      <MovieLinks />
    </>
  )
}

MovieActions.propTypes = {
  movie: shape({
    title: PropTypes.string,
    homepage: PropTypes.string,
  }),
}

export default MovieActions
