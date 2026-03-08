import { useEffect } from 'react'

import MediaCard from 'components/MovieCard'
import Title from 'components/Title'

import useTv from 'hooks/useTv'
import Tv from 'interfaces/tv'

import 'components/Movies/Movies.scss'

interface SeriesContainerProps {
  title: string
  filter: string
}

const SeriesContainer = ({ title, filter }: SeriesContainerProps) => {
  const { tvShows: series, loading } = useTv(filter)

  useEffect(() => {
    if (loading) return
    // O hook useTv já trata erros com console.error
    // Se necessário toast específico, pode ser adicionado aqui
  }, [loading])

  if (loading) {
    return <div>Carregando séries...</div>
  }

  return (
    <section className="movies-page">
      <div className="container">
        <Title>{title}</Title>
        <section className="movies">
          {series.map((tvShow: Tv) => (
            <MediaCard movie={tvShow} key={tvShow.id} isTvShow={true} />
          ))}
        </section>
      </div>
    </section>
  )
}

export default SeriesContainer
