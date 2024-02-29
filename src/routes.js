import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Movie from './pages/Movie'
import NotFound from './pages/NotFound'
import Favorites from './pages/Favorites'
import Footer from 'components/Footer'
import Header from './components/Header'

const RoutesApp = () => (
  <BrowserRouter>
    <Header />
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
)

export default RoutesApp
