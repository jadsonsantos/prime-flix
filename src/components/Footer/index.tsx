import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import CustomLink from 'components/CustomLink'

import './Footer.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-icon">🎬</span>
              <span className="footer__logo-text">
                Prime<span className="footer__logo-accent">Flix</span>
              </span>
            </Link>
            <p className="footer__description">
              Seu catálogo pessoal de filmes. Descubra, organize e acompanhe
              seus filmes favoritos.
            </p>
            <div className="footer__social">
              <CustomLink
                href="https://github.com/jadsonsantos"
                className="footer__social-link"
              >
                <FaGithub />
              </CustomLink>
              <CustomLink href="#" className="footer__social-link">
                <FaTwitter />
              </CustomLink>
              <CustomLink href="#" className="footer__social-link">
                <FaInstagram />
              </CustomLink>
            </div>
          </div>

          <div className="footer__links">
            <div className="footer__column">
              <h4 className="footer__column-title">Navegação</h4>
              <ul className="footer__list">
                <li>
                  <Link to="/">Em exibição</Link>
                </li>
                <li>
                  <Link to="/popular">Populares</Link>
                </li>
                <li>
                  <Link to="/top-rated">Mais votados</Link>
                </li>
                <li>
                  <Link to="/upcoming">Em breve</Link>
                </li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Legal</h4>
              <ul className="footer__list">
                <li>
                  <a href="#">Termos de uso</a>
                </li>
                <li>
                  <a href="#">Privacidade</a>
                </li>
                <li>
                  <a href="#">Cookies</a>
                </li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Suporte</h4>
              <ul className="footer__list">
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>
                <li>
                  <a href="#">Ajuda</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} PrimeFlix. Projeto pessoal por{' '}
            <CustomLink href="https://jadsonsantos.dev.br/">
              Jadson Santos
            </CustomLink>
            .
          </p>
          <p className="footer__credits">
            Dados fornecidos por{' '}
            <CustomLink href="https://www.themoviedb.org/">TMDB</CustomLink>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
