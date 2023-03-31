import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import './Movie.scss'

const Movie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadMovie() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: '9c366f3c92674ee5238386c2ef0ce2f1',
            language: 'pt-BR',
          },
        })
        .then(({ data }) => {
          setMovie(data)
          setLoading(false)
        })
        .catch(() => {})
    }

    loadMovie()

    return () => {}
  }, [])

  if (loading) {
    return <section className="loading">Carregando detalhes...</section>
  }

  const { title, backdrop_path, overview, vote_average } = movie

  return (
    <div className="movie">
      <h1 className="movie__title">{title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt={title}
        className="movie__image"
      />
      <h3>Sinopse</h3>
      <span>{overview}</span>
      <strong className="movie__average">Avaliação: {vote_average} / 10</strong>
      <div className="movie__buttons">
        <button>Salvar</button>
        <button>
          <a>Trailer</a>
        </button>
      </div>
    </div>
  )
}

export default Movie
