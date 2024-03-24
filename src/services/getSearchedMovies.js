import api from './api'
import options from './options'

const getSearchedMovies = async (query) => {
  const response = await api.get(`/search/movie?query=${query}`, {
    params: {
      ...options,
    },
  })

  return response.data.results
}

export default getSearchedMovies
