import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import Loading from 'components/Loading'
import Movies from 'components/Movies'
import Title from 'components/Title'

import useSearch from 'hooks/useSearch'

const Search = () => {
  const { movies, loading, loadSearchedMovies } = useSearch()

  const [searchParams] = useSearchParams()

  const query = searchParams.get('q')

  useEffect(() => {
    loadSearchedMovies(query)
  }, [query])

  if (loading) {
    return <Loading text="Carregando filmes..." />
  }

  return (
    <section className="search-page">
      <div className="container">
        {movies.length > 0 ? (
          <>
            <Title>Resultados para: {query}</Title>
            <Movies movies={movies} />
          </>
        ) : (
          <p>Não foram encontrados resultados para sua busca</p>
        )}
      </div>
    </section>
  )
}

export default Search
