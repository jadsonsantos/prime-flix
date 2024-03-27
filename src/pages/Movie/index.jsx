import { useEffect } from 'react'

import Collection from 'components/Collection'
import Credits from 'components/Credits'
import Loading from 'components/Loading'
import { Movie } from 'components/Movie'

import useMovie from 'hooks/useMovie'
import scrollToTop from 'utils/scrollToTop '

import './Movie.scss'

const MoviePage = () => {
  const { loading, movie } = useMovie()

  useEffect(() => {
    scrollToTop()
  }, [movie])

  if (loading) {
    return <Loading text="Carregando detalhes..." />
  }

  return (
    <div className="movie-page container">
      <Movie.Root>
        <Movie.Poster movie={movie} />
        <Movie.Infos>
          <Movie.Overview movie={movie} />
          <Movie.Details movie={movie} />
          <Movie.Actions movie={movie} />
        </Movie.Infos>
      </Movie.Root>

      <Credits />

      {movie.belongs_to_collection && (
        <Collection collection={movie.belongs_to_collection} />
      )}
    </div>
  )
}

export default MoviePage
