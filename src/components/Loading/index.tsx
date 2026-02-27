import { ClipLoader } from 'react-spinners'

import './Loading.scss'

interface LoadingProps {
  text: string
}

const Loading = ({ text }: LoadingProps) => {
  return (
    <section className="loading">
      <ClipLoader size={50} color="#C7070E" />
      <span className="loading__text">{text}</span>
    </section>
  )
}

export default Loading
