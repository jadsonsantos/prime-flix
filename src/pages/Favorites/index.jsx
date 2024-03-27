import Movies from 'components/Movies'
import Title from 'components/Title'

import useFavorites from './useFavorites'

const Favorites = () => {
  const { movies } = useFavorites()

  return (
    <section className="favorites">
      <div className="container">
        <Title>Meus filmes</Title>
        {movies.length > 0 ? (
          <Movies movies={movies} />
        ) : (
          <p>Você não possui filmes salvos</p>
        )}
      </div>
    </section>
  )
}

export default Favorites
