import api from './api'
import options from './options'

const getExternalIDs = async (id) => {
  const response = await api.get(`/movie/${id}/external_ids`, {
    params: {
      ...options,
    },
  })

  return response
}

export default getExternalIDs
