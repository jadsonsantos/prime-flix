import { ClipLoader } from 'react-spinners'

import PropTypes from 'prop-types'

import './Loading.scss'

const Loading = ({ text }) => {
  return (
    <section className="loading">
      {text}
      <ClipLoader size={50} color="#000" />
    </section>
  )
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Loading
