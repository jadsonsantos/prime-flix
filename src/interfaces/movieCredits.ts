import BaseMovie from './baseMovie'

interface MovieCredits extends BaseMovie {
  character: string
  credit_id: string
  order: number
  genre_ids: number[]
}

export default MovieCredits
