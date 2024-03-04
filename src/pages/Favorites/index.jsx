import Movies from 'components/Movies'
import Title from 'components/Title'

import useFavorites from './useFavorites'

import './Favorites.scss'

const Favorites = () => {
  const { movies } = useFavorites()

  const isEmptyMovieList = movies.length === 0

  return (
    <section className="favorites">
      <div className="container">
        <Title>Meus filmes</Title>
        {isEmptyMovieList && <p>Você não possui filmes salvos :(</p>}
        {movies && <Movies movies={movies} />}
      </div>
    </section>
  )
}

export default Favorites
