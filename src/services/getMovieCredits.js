import api from './api'
import options from './options'

const getMovieCredits = async (id) => {
  const response = await api.get(`/movie/${id}/credits`, {
    params: {
      ...options,
    },
  })

  return response
}

export default getMovieCredits
