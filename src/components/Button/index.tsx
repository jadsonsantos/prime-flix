import { ComponentProps } from 'react'
import './Button.scss'

type ButtonProps = ComponentProps<'button'> & {
  variation?: string
}

const Button = ({ children, variation, ...rest }: ButtonProps) => {
  return (
    <button className={`button button--${variation}`} type="button" {...rest}>
      {children}
    </button>
  )
}

export default Button
