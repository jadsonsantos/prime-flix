import propTypes from 'prop-types'

import './Title.scss'

const Title = ({ children }) => {
  return <h1 className="title">{children}</h1>
}

Title.propTypes = {
  children: propTypes.string.isRequired,
}

export default Title
