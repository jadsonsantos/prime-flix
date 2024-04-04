import { ComponentProps } from 'react'

type CustomLinkProps = ComponentProps<'a'>

const CustomLink = ({
  children,
  target = '_blank',
  ...rest
}: CustomLinkProps) => {
  return (
    <a
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : ''}
      {...rest}
    >
      {children}
    </a>
  )
}

export default CustomLink
