import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Favorites from 'pages/Favorites'
import Movie from 'pages/Movie'
import MoviesContainer from 'pages/MoviesContainer'
import NotFound from 'pages/NotFound'

import Footer from 'components/Footer'
import Header from 'components/Header'

import {
  FAVORITES_ROUTE,
  HOME_ROUTE,
  POPULAR_ROUTE,
  TOP_RATED_ROUTE,
  UPCOMING_ROUTE,
} from 'constants/routes'

const RoutesApp = () => (
  <BrowserRouter>
    <Header />
    <main className="main">
      <Routes>
        <Route
          path={HOME_ROUTE}
          element={<MoviesContainer title="Em exibição" filter="now_playing" />}
        />
        <Route
          path={POPULAR_ROUTE}
          element={<MoviesContainer title="Populares" filter="popular" />}
        />
        <Route
          path={TOP_RATED_ROUTE}
          element={<MoviesContainer title="Mais votados" filter="top_rated" />}
        />
        <Route
          path={UPCOMING_ROUTE}
          element={<MoviesContainer title="Em breve" filter="upcoming" />}
        />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path={FAVORITES_ROUTE} element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
)

export default RoutesApp
