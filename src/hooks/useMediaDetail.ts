import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import Favorite from 'interfaces/favorite'
import Movie from 'interfaces/movie'
import Tv from 'interfaces/tv'
import getMovie from 'services/getMovie'
import { fetchTvDetails } from 'services/tvService'
import {
  normalizeMovieToFavorite,
  normalizeTvToFavorite,
} from 'utils/normalizers'

type Media = Record<string, unknown> & {
  id?: number
  title?: string
  name?: string
  poster_path?: string | null
  backdrop_path?: string | null
  overview?: string
  vote_average?: number
  release_date?: string
  first_air_date?: string
  runtime?: number
  episode_run_time?: number[]
  genres?: { id: number; name: string }[]
  tagline?: string
  original_title?: string
  original_name?: string
  production_companies?: { id: number; name: string }[]
  production_countries?: { name: string }[]
  budget?: number
  revenue?: number
  homepage?: string
  belongs_to_collection?: null | {
    id: number
    name: string
    backdrop_path: string
  }
  number_of_seasons?: number
  number_of_episodes?: number
  networks?: { id: number; name: string }[]
  origin_country?: string[]
}

const normalizeTvToMedia = (tv: Tv): Media => {
  const runtime = tv.episode_run_time?.[0] ?? 0
  return {
    ...tv,
    title: tv.name,
    release_date: tv.first_air_date,
    original_title: tv.original_name,
    runtime,
    production_companies: tv.networks ?? [],
    production_countries: (tv.origin_country ?? []).map((c) => ({ name: c })),
    belongs_to_collection: null,
    budget: 0,
    revenue: 0,
  }
}

export const useMediaDetail = () => {
  const { id } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const isTv = location.pathname.startsWith('/series')

  const [originalMedia, setOriginalMedia] = useState<Movie | Tv | null>(null)
  const [loading, setLoading] = useState(true)

  const media = useMemo(() => {
    if (!originalMedia) return null
    return isTv ? normalizeTvToMedia(originalMedia as Tv) : originalMedia
  }, [originalMedia, isTv])

  useEffect(() => {
    const load = async () => {
      if (!id) return
      try {
        setLoading(true)
        if (isTv) {
          const data = await fetchTvDetails(id)
          setOriginalMedia(data)
        } else {
          const { data } = await getMovie(id)
          setOriginalMedia(data)
        }
      } catch {
        navigate('/', { replace: true })
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [id, isTv, navigate])

  const save = () => {
    if (!originalMedia) return

    const myList = localStorage.getItem('@favorites')
    const savedFavorites = JSON.parse(myList ?? '[]') as Favorite[]
    const mediaType = isTv ? 'tv' : 'movie'
    const hasFavorite = savedFavorites.some(
      (item) => item.id === originalMedia.id && item.mediaType === mediaType
    )

    if (hasFavorite) {
      toast.warning(
        isTv ? 'essa série já está na lista' : 'esse filme já está na lista'
      )
      return
    }

    const item = isTv
      ? normalizeTvToFavorite(originalMedia as Tv)
      : normalizeMovieToFavorite(originalMedia as Movie)
    savedFavorites.push(item)
    localStorage.setItem('@favorites', JSON.stringify(savedFavorites))
    toast.success(isTv ? 'série salva com sucesso' : 'filme salvo com sucesso')
  }

  return { media, loading, save, isTv }
}

export default useMediaDetail
