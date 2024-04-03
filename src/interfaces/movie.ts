import BaseMovie from './baseMovie'
import Genre from './genre'
import ProductionCompany from './productionCompany'
import ProductionCountry from './productionCountry'
import SpokenLanguage from './spokenLanguage'

interface Movie extends BaseMovie {
  belongs_to_collection: null | {
    id: number
    name: string
    poster_path: string
    backdrop_path: string
  }
  budget: number
  genres: Genre[]
  homepage: string
  imdb_id: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
}

export default Movie
