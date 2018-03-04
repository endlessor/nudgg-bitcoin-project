import React, { PureComponent } from 'react'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import Parallax from 'components/parallax'
import Image from 'components/gui/Image'

class HeroImage extends PureComponent {
  render () {
    const { src, alt, className, modifier } = this.props

    const modifiedClassName = classNames('hero-image', className, modifier)

    return (
      <div className={modifiedClassName}>
        <Parallax speed={-0.5} scope={400}>
          <div>
            <Image
              src={src}
              alt={alt}
              img={false}
              className='hero-image__image'
            />
          </div>
        </Parallax>
      </div>
    )
  }
}

HeroImage.propTypes = {
  ...defaultPropTypes,
  ...Image.propTypes
}

export default HeroImage
