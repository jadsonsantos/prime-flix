import CustomLink from 'components/CustomLink'

import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        Desenvolvido por{' '}
        <CustomLink href="https://jadsonsantos.dev.br/">
          Jadson Santos
        </CustomLink>
      </div>
    </footer>
  )
}

export default Footer
