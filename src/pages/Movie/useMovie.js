import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../services/api'
import { toast } from 'react-toastify'

const useMovie = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadMovie() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: '9c366f3c92674ee5238386c2ef0ce2f1',
            language: 'pt-BR',
          },
        })
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
  }, [navigate, id])

  const saveMovie = () => {
    const myList = localStorage.getItem('movies')
    let savedMovies = JSON.parse(myList) || []
    const hasMovie = savedMovies.some(({ id }) => {
      id === movie.id
    })

    if (hasMovie) {
      toast.warning('esse filme já está na lista')
      return
    }

    savedMovies.push(movie)
    localStorage.setItem('movies', JSON.stringify(savedMovies))
    toast.success('filme salvo com sucesso')
  }

  return { saveMovie, loading, movie }
}

export default useMovie
