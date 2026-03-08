import Genre from './genre'
import ProductionCompany from './productionCompany'
import ProductionCountry from './productionCountry'
import SpokenLanguage from './spokenLanguage'

interface BaseMedia {
  id: number
  backdrop_path: string | null
  genre_ids: number[]
  original_language: string
  overview: string
  popularity: number
  poster_path: string | null
  vote_average: number
  vote_count: number
  genres?: Genre[]
  homepage?: string
  production_companies?: ProductionCompany[]
  production_countries?: ProductionCountry[]
  spoken_languages?: SpokenLanguage[]
}

export default BaseMedia
