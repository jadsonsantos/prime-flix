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

  return (
    <section className="movies-page">
      <div className="container">
        {loading ? (
          <div>Carregando séries...</div>
        ) : (
          <>
            <Title>{title}</Title>
            {series.length > 0 && (
              <section className="movies">
                {series.map((tvShow: Tv) => (
                  <MediaCard movie={tvShow} key={tvShow.id} isTvShow={true} />
                ))}
              </section>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default SeriesContainer
