import { ClipLoader } from 'react-spinners'

import './Loading.scss'

interface LoadingProps {
  text: string
}

const Loading = ({ text }: LoadingProps) => {
  return (
    <section className="loading">
      {text}
      <ClipLoader size={50} color="#000" />
    </section>
  )
}

export default Loading
