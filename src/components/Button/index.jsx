import PropTypes from 'prop-types'

import './Button.scss'

const Button = ({ children, variation, ...rest }) => {
  return (
    <button className={`button button--${variation}`} type="buttton" {...rest}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  variation: PropTypes.string,
}

export default Button
