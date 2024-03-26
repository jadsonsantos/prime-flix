import api from './api'
import options from './options'

const getMovieVideos = async (id) => {
  const response = await api.get(`/movie/${id}/videos`, {
    params: {
      ...options,
    },
  })

  return response
}

export default getMovieVideos
