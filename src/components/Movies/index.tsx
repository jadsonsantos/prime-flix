import MovieItem from 'components/MovieItem'

import Favorite from 'interfaces/favorite'

import './Movies.scss'

interface MoviesProps {
  movies: Favorite[]
}

const Movies = ({ movies }: MoviesProps) => {
  return (
    <section className="movies">
      {movies.map((movie) => (
        <MovieItem movie={movie} key={`${movie.mediaType}-${movie.id}`} />
      ))}
    </section>
  )
}

export default Movies
