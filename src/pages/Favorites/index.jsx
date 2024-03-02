import Movies from 'components/Movies'
import Title from 'components/Title'
import useFavorites from './useFavorites'
import './Favorites.scss'

const Favorites = () => {
  const { movies } = useFavorites()

  if (!movies) return <h1 className="favorites__title">Não há filmes salvos</h1>

  return (
    <section className="favorites">
      <div className="container">
        <Title>Meus filmes</Title>
        {movies.length === 0 && <p>Você não possui filmes salvos :(</p>}
        <Movies movies={movies} />
      </div>
    </section>
  )
}

export default Favorites
