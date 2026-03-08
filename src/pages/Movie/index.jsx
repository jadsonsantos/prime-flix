import { useEffect } from 'react'

import Collection from 'components/Collection'
import Credits from 'components/Credits'
import Loading from 'components/Loading'
import { Movie } from 'components/Movie'

import useMediaDetail from 'hooks/useMediaDetail'
import scrollToTop from 'utils/scrollToTop '

import './Movie.scss'

const MoviePage = () => {
  const { media, loading, save, isTv } = useMediaDetail()

  useEffect(() => {
    scrollToTop()
  }, [media])

  if (loading) {
    return <Loading text="Carregando detalhes..." />
  }

  if (!media) return null

  return (
    <div className="movie-page container">
      <Movie.Root>
        <Movie.Poster movie={media} onSave={save} />
        <Movie.Infos>
          <Movie.Overview movie={media} />
          <Movie.Details movie={media} isTvShow={isTv} />
          <Movie.Actions movie={media} isTvShow={isTv} />
        </Movie.Infos>
      </Movie.Root>

      <Credits isTvShow={isTv} />

      {!isTv && media.belongs_to_collection && (
        <Collection collection={media.belongs_to_collection} />
      )}
    </div>
  )
}

export default MoviePage
