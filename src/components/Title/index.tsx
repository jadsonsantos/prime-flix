import { PropsWithChildren } from 'react'

import './Title.scss'

type TitleProps = PropsWithChildren

const Title = ({ children }: TitleProps) => {
  return <h1 className="title">{children}</h1>
}

export default Title
