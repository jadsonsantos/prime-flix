import { Link } from 'react-router-dom'
import './NotFound.scss'
import React from 'react'

const NotFound = () => (
  <section className="not-found">
    <h1 className="not-found__title">404</h1>
    <h2>Página nao encontrada</h2>
    <Link to="/" className="not-found__link">
      Veja todos os filmes
    </Link>
  </section>
)

export default NotFound
