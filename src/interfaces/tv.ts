import BaseMedia from './baseMedia'
import Genre from './genre'
import ProductionCompany from './productionCompany'

interface Tv extends BaseMedia {
  first_air_date: string
  last_air_date: string
  episode_run_time: number[]
  genres: Genre[]
  homepage: string
  in_production: boolean
  languages: string[]
  last_episode_to_air: {
    air_date: string
    episode_number: number
    id: number
    name: string
    overview: string
    production_code: string
    season_number: number
    still_path: string
    vote_average: number
    vote_count: number
  }
  name: string
  next_episode_to_air: string
  networks: ProductionCompany[]
  number_of_episodes: number
  number_of_seasons: number
  origin_country: string[]
  original_name: string
  seasons: {
    air_date: string
    episode_count: number
    id: number
    name: string
    overview: string
    poster_path: string
    season_number: number
  }[]
  status: string
  tagline: string
  type: string
}

export default Tv
