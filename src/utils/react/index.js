import PropTypes from 'prop-types'

const propTypes = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.arrayOf(PropTypes.string)
])

export const defaultPropTypes = {
  className: propTypes,
  modifier: propTypes
}