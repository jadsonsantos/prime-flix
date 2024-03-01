/* eslint-disable react/prop-types */
import MovieItem from 'components/MovieItem'
import './Movies.scss'

const Movies = ({ movies }) => {
  return (
    <section className="movies">
      {movies.map((movie) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </section>
  )
}

export default Movies
