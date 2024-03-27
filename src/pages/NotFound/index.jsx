import { Link } from 'react-router-dom'

import './NotFound.scss'
import Button from 'components/Button'

const NotFound = () => (
  <section className="not-found">
    <div className="container">
      <h1 className="not-found__title">404</h1>
      <h2>Página não encontrada</h2>
      <Button variation="primary">
        <Link to="/" className="not-found__link">
          Veja todos os filmes
        </Link>
      </Button>
    </div>
  </section>
)

export default NotFound
