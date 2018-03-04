import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import Tile from 'components/common/Tile'
import Link from 'components/gui/Link'
import Image from 'components/gui/Image'
import Heading from 'components/gui/Heading'
import Paragraph from 'components/gui/Paragraph'

class ResourceTile extends PureComponent {
  render () {
    const { image, title, description, href, moreLabel, className, modifier } = this.props

    const modifiedClassName = classNames('scale-hover resource-tile', className, modifier)

    return (
      <Tile className={modifiedClassName}>
        <Image
          src={image}
          alt={title}
          className='resource-tile__image'
        />
        <div className='resource-tile__content'>
          <Heading size={5} modifier={['font-roboto', 'font-medium']} className='resource-tile__title'>
            {title}
          </Heading>
          <Paragraph className='resource-tile__description'>
            {description}
          </Paragraph>
          <div className='resource-tile__link'>
            <Link to={href} modifier={['font-italic', 'color-aqua', 'underline']}>
              {moreLabel}
            </Link>
          </div>
        </div>
      </Tile>
    )
  }
}

ResourceTile.propTypes = {
  ...defaultPropTypes,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
}

ResourceTile.defaultProps = {
  moreLabel: 'Tell me more'
}

export default ResourceTile
