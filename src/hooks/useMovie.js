import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import getMovie from 'services/getMovie'
import { normalizeMovieToFavorite } from 'utils/normalizers'

const useMovie = (skipFetch = false) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (skipFetch) {
      setLoading(false)
      return
    }

    const loadMovie = async () => {
      await getMovie(id)
        .then(({ data }) => {
          setMovie(data)
          setLoading(false)
        })
        .catch(() => {
          navigate('/', { replace: true })
          return
        })
    }

    loadMovie()

    return () => {}
  }, [id, skipFetch])

  const saveMovie = () => {
    const myList = localStorage.getItem('@favorites')
    let savedFavorites = JSON.parse(myList) || []
    const hasFavorite = savedFavorites.some(
      (item) => item.id === movie.id && item.mediaType === 'movie'
    )

    if (hasFavorite) {
      toast.warning('esse filme já está na lista')
      return
    }

    const favoriteItem = normalizeMovieToFavorite(movie)
    savedFavorites.push(favoriteItem)
    localStorage.setItem('@favorites', JSON.stringify(savedFavorites))
    toast.success('filme salvo com sucesso')
  }

  return { saveMovie, loading, movie }
}

export default useMovie
