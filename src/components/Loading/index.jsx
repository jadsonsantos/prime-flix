import PropTypes from 'prop-types'
import './Loading.scss'

const Loading = ({ text }) => {
  return <section className="loading">{text}</section>
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Loading
