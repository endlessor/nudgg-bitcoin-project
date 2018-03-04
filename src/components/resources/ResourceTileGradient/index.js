import React from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import Tile from 'components/common/Tile'
import Heading from 'components/gui/Heading'
import Paragraph from 'components/gui/Paragraph'

const ResourceTileGradient = props => {
  const { title, description, moreLabel, className, modifier, click } = props

  const modifiedClassName = classNames('scale-hover resource-tile__gradient resource-tile', className, modifier)

  return (
    <Tile className={modifiedClassName}>
      <div className='resource-tile__image-text faq-gradient'>
        <Heading size={5} modifier={['color-white', 'font-roboto']} className='absolute-center'>
          {title}
        </Heading>
      </div>
      <div className='resource-tile__content'>
        <div className="description-section">
          <Paragraph>
            {description}
          </Paragraph>
        </div>
        <div className='resource-tile__btn' onClick={click}>
          <p><i className="fa fa-chevron-down" aria-hidden="true"></i> {moreLabel}</p>
        </div>
      </div>
    </Tile>
  )
}

ResourceTileGradient.propTypes = {
  ...defaultPropTypes,
  title: PropTypes.string,
  description: PropTypes.any,
}

ResourceTileGradient.defaultProps = {
  moreLabel: 'Tell me more'
}

export default ResourceTileGradient
