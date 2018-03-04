import React, { PureComponent } from 'react'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import Image from 'components/gui/Image'
import Heading from 'components/gui/Heading'
import Paragraph from 'components/gui/Paragraph'

export const baseClass = 'home-section'

class HomeSection extends PureComponent {
  render () {
    const {
      image,
      title,
      description,
      className,
      modifier
    } = this.props

    const modifiedClassName = classNames(baseClass, className, modifier)

    return (
      <div className={modifiedClassName}>
        <Image
          src={image}
          alt={title}
          modifier='pos-center'
          className='home-section__image'
        />
        <Heading className='home-section__title'>
          {title}
        </Heading>
        <Paragraph className='home-section__description'>
          {description}
        </Paragraph>
      </div>
    )
  }
}

HomeSection.propTypes = {
  ...defaultPropTypes
}

export default HomeSection
