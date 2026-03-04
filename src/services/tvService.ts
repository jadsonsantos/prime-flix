import api from './api'
import options from './options'

export const fetchTvList = async (endpoint: string) => {
  const response = await api.get(`/tv/${endpoint}`, {
    params: {
      ...options,
      page: 1,
    },
  })

  return response.data.results
}

export const fetchTvDetails = async (tvId: string | number) => {
  const response = await api.get(`/tv/${tvId}`, {
    params: {
      ...options,
    },
  })

  return response.data
}

export const fetchTvCredits = async (tvId: string | number) => {
  const response = await api.get(`/tv/${tvId}/credits`, {
    params: {
      ...options,
    },
  })

  return response.data
}

export const fetchTvVideos = async (tvId: string | number) => {
  const response = await api.get(`/tv/${tvId}/videos`, {
    params: {
      ...options,
    },
  })

  return response.data
}

export const fetchSeason = async (
  tvId: string | number,
  seasonNumber: string | number
) => {
  const response = await api.get(`/tv/${tvId}/season/${seasonNumber}`, {
    params: {
      ...options,
    },
  })

  return response.data
}
