import Collection from 'components/Collection'
import Loading from 'components/Loading'
import { Movie } from 'components/Movie'

import useMovie from 'hooks/useMovie'

import './Movie.scss'

const MoviePage = () => {
  const { loading, movie } = useMovie()

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

      {movie.belongs_to_collection && (
        <Collection collection={movie.belongs_to_collection} />
      )}
    </div>
  )
}

export default MoviePage
