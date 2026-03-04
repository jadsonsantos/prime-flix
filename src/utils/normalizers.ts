import Favorite from 'interfaces/favorite'
import Movie from 'interfaces/movie'
import Tv from 'interfaces/tv'

export const normalizeMovieToFavorite = (movie: Movie): Favorite => ({
  id: movie.id,
  mediaType: 'movie',
  title: movie.title,
  poster: movie.poster_path || '',
  backdrop: movie.backdrop_path || undefined,
  voteAverage: movie.vote_average,
  overview: movie.overview,
  releaseDate: movie.release_date,
})

export const normalizeTvToFavorite = (tv: Tv): Favorite => ({
  id: tv.id,
  mediaType: 'tv',
  title: tv.name,
  poster: tv.poster_path || '',
  backdrop: tv.backdrop_path || undefined,
  voteAverage: tv.vote_average,
  overview: tv.overview,
  firstAirDate: tv.first_air_date,
})
