import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

export const baseClass = 'image'

class Image extends PureComponent {
  render () {
    const {
      src,
      alt,
      className,
      img = true,
      modifier
    } = this.props

    const modifiedClassNames = classNames(baseClass, className, modifier)

    if (img) {
      return <img src={src} alt={alt} className={modifiedClassNames} />
    } else {
      return <div style={{backgroundImage: `url('${src}')`}} className={modifiedClassNames}></div>
    }
  }
}

Image.propTypes = {
  ...defaultPropTypes,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  img: PropTypes.bool
}

Image.defaultProps = {
  alt: 'No alternative text added'
}

export default Image
