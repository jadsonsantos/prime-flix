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
    <section className="movie-page container">
      <Movie.Root>
        <Movie.Poster movie={movie} />
        <Movie.Infos>
          <Movie.Overview movie={movie} />
          <Movie.Details movie={movie} />
          <Movie.Actions title={movie.title} />
        </Movie.Infos>
      </Movie.Root>
    </section>
  )
}

export default MoviePage
