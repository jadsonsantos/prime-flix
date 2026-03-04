import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import MediaCard from 'components/MovieCard'
import Title from 'components/Title'

import Tv from 'interfaces/tv'
import { fetchTvList } from 'services/tvService'

import 'components/Movies/Movies.scss'

interface SeriesContainerProps {
  title: string
  filter: string
}

const SeriesContainer = ({ title, filter }: SeriesContainerProps) => {
  const [series, setSeries] = useState<Tv[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const loadSeries = async () => {
      try {
        const data = await fetchTvList(filter)
        setSeries(data)
        setLoading(false)
      } catch (error) {
        toast.error('Erro ao carregar séries')
        setLoading(false)
      }
    }

    loadSeries()
  }, [filter])

  if (loading) {
    return <div>Carregando séries...</div>
  }

  return (
    <section className="movies-page">
      <div className="container">
        <Title>{title}</Title>
        <section className="movies">
          {series.map((tvShow) => (
            <MediaCard movie={tvShow} key={tvShow.id} isTvShow={true} />
          ))}
        </section>
      </div>
    </section>
  )
}

export default SeriesContainer
