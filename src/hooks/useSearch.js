import { useState } from 'react'

import getSearchedMovies from 'services/getSearchedMovies'

const useSearch = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  const loadSearchedMovies = async (query) => {
    const movies = await getSearchedMovies(query)

    setMovies(movies)
    setLoading(false)
  }

  return { loading, movies, loadSearchedMovies }
}

export default useSearch
