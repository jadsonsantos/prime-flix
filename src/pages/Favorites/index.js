import './Favorites.scss'
import useFavorites from './useFavorites'
import { Link } from 'react-router-dom'
import React from 'react'

const Favorites = () => {
  const { movies, deleteMovie } = useFavorites()

  if (!movies) return <h1>Não há filmes salvos</h1>

  return (
    <section className="favorites">
      <h1 className="favorites__title">Meus filmes</h1>
      {movies.length === 0 && <p>Você não possui filmes salvos :(</p>}
      <ul className="favorites__list">
        {movies.map(({ title, id }) => {
          return (
            <li className="favorites__item" key={id}>
              <p>{title}</p>
              <div className="favorites__actions">
                <Link className="favorites__link" to={`/movie/${id}`}>
                  Ver detalhes
                </Link>
                <button
                  className="favorites__button"
                  onClick={() => deleteMovie(id)}
                >
                  Excluir
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Favorites
