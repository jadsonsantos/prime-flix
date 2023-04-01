import './Favorites.scss'
import useFavorites from './useFavorites'
import { Link } from 'react-router-dom'

const Favorites = () => {
  const { movies } = useFavorites()

  if (!movies) return <h1>Não há filmes salvos</h1>

  return (
    <section className="favorites">
      <h1 className="favorites__title">Meus filmes</h1>
      <ul className="favorites__list">
        {movies.map(({ title, id }) => {
          return (
            <li className="favorites__item" key={id}>
              <p>{title}</p>
              <div className="favorites__actions">
                <Link className="favorites__link" to={`/movie/${id}`}>
                  Ver detalhes
                </Link>
                <button className="favorites__button">Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Favorites
