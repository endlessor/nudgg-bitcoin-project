
import React from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import Tile from 'components/common/Tile'
import Heading from 'components/gui/Heading'
import Paragraph from 'components/gui/Paragraph'
import Icon from 'components/gui/Icon'

const ResourceTileGradientPopup = props => {
  const { title, description, lessLabel, className, modifier, click } = props

  const modifiedClassName = classNames('resource-tile resource-tile__popup scale-hover', className, modifier)

  return (
    <Tile className={modifiedClassName}>
      <div className='resource-tile__image-text faq-gradient'>
        <div className="close-btn" onClick={click}>
          <Icon modifier='cross-white'/>
        </div>
        <Heading size={5} modifier={['color-white', 'font-roboto', 'font-medium']} className='absolute-center'>
          {title}
        </Heading>
      </div>
      <div className='resource-tile__content'>
        <div className='triangle'/>
        <div className="description-section">
          <Paragraph>
            {description}
          </Paragraph>
        </div>
        <div className='resource-tile__btn' onClick={click}>
          <p><i className="fa fa-chevron-up" aria-hidden="true"></i> {lessLabel}</p>
        </div>
      </div>
    </Tile>
  )
}

ResourceTileGradientPopup.propTypes = {
  ...defaultPropTypes,
  title: PropTypes.string,
  description: PropTypes.any,
}

ResourceTileGradientPopup.defaultProps = {
  lessLabel: 'Tell me less'
}

export default ResourceTileGradientPopup
