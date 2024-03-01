import Movies from 'components/Movies'
import useFavorites from './useFavorites'
import './Favorites.scss'

const Favorites = () => {
  const { movies } = useFavorites()

  if (!movies) return <h1 className="favorites__title">Não há filmes salvos</h1>

  return (
    <section className="favorites">
      <div className="container">
        <h1 className="favorites__title">Meus filmes</h1>
        {movies.length === 0 && <p>Você não possui filmes salvos :(</p>}
        <Movies movies={movies} />
      </div>
    </section>
  )
}

export default Favorites
