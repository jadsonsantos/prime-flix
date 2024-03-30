import PropTypes from 'prop-types'

const CustomLink = ({
  children,
  href,
  target = '_blank',
  className,
  ...rest
}) => {
  return (
    <a
      href={href}
      target={target}
      className={className}
      rel={target === '_blank' ? 'noopener noreferrer' : ''}
      {...rest}
    >
      {children}
    </a>
  )
}

CustomLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  className: PropTypes.string,
}

export default CustomLink
