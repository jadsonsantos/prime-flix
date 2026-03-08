export type MediaType = 'movie' | 'tv'

interface Favorite {
  id: number
  mediaType: MediaType
  title: string
  poster: string
  backdrop?: string
  voteAverage: number
  overview: string
  releaseDate?: string
  firstAirDate?: string
}

export default Favorite
