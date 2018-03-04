import React, { PureComponent } from 'react'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import Tile from 'components/common/Tile'
import Image from 'components/gui/Image'
import Paragraph from 'components/gui/Paragraph'
import Button from 'components/gui/Button'

import { isFunction } from 'utils/function'

class PartnerTile extends PureComponent {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (evt) {
    const {
      id,
      handleMoreInfo
    } = this.props

    const meta = {
      id
    }

    if (isFunction(handleMoreInfo)) {
      handleMoreInfo(evt, meta)
    }
  }

  render () {
    const {
      image,
      title,
      link,
      // reviews,
      description,
      className,
      modifier
    } = this.props

    const modifiedClassName = classNames('partner-tile scale-hover', className, modifier)

    return (
      <div className={modifiedClassName}>
        <Tile className='partner-tile__tile'>
          <div className='partner-tile__content'>
            <Image
              img={false}
              src={image}
              alt={title}
              className='partner-tile__image'
            />
            <Paragraph modifier='text-center' className='partner-tile__description'>
              {description}
            </Paragraph>
          </div>
        </Tile>
        <a href={link}>
          <Button
            modifier='bg-aqua'
            className='partner-tile__button'
          >
            Open account
          </Button>
        </a>
        <div className='partner-tile__bottom'>
          <span className='partner-tile__link link link--color-aqua link--font-italic link--underline' onClick={this.handleClick}>
            More information
          </span>
        </div>
      </div>
    )
  }
}

PartnerTile.propTypes = {
  ...defaultPropTypes
}

export default PartnerTile

/*
<div className='partner-tile__review'>
  10/10 rating here
</div>
*/
