import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Favorites from 'pages/Favorites'
import Movie from 'pages/Movie'
import MoviesContainer from 'pages/MoviesContainer'
import NotFound from 'pages/NotFound'

import Footer from 'components/Footer'
import Header from 'components/Header'

const RoutesApp = () => (
  <BrowserRouter>
    <Header />
    <main className="main">
      <Routes>
        <Route
          path="/"
          element={<MoviesContainer title="Em exibição" filter="now_playing" />}
        />
        <Route
          path="/popular"
          element={<MoviesContainer title="Populares" filter="popular" />}
        />
        <Route
          path="/top"
          element={<MoviesContainer title="Mais votados" filter="top_rated" />}
        />
        <Route
          path="/em-breve"
          element={<MoviesContainer title="Em breve" filter="upcoming" />}
        />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
)

export default RoutesApp
