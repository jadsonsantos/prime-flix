import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import Tv from 'interfaces/tv'
import { fetchTvDetails } from 'services/tvService'
import { normalizeTvToFavorite } from 'utils/normalizers'

interface UseTvDetailsReturn {
  tvShow: Tv | null
  loading: boolean
  saveTvShow: () => void
}

const useTvDetails = (): UseTvDetailsReturn => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [tvShow, setTvShow] = useState<Tv | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const loadTvShow = async () => {
      try {
        const data = await fetchTvDetails(id as string)
        setTvShow(data)
        setLoading(false)
      } catch (error) {
        navigate('/', { replace: true })
        return
      }
    }

    loadTvShow()

    return () => {}
  }, [id, navigate])

  const saveTvShow = () => {
    if (!tvShow) return

    const myList = localStorage.getItem('@favorites')
    const savedFavorites = JSON.parse(myList as string) || []
    const hasFavorite = savedFavorites.some(
      (item: { id: number; mediaType: string }) =>
        item.id === tvShow.id && item.mediaType === 'tv'
    )

    if (hasFavorite) {
      toast.warning('essa série já está na lista')
      return
    }

    const favoriteItem = normalizeTvToFavorite(tvShow)
    savedFavorites.push(favoriteItem)
    localStorage.setItem('@favorites', JSON.stringify(savedFavorites))
    toast.success('série salva com sucesso')
  }

  return { tvShow, loading, saveTvShow }
}

export default useTvDetails
