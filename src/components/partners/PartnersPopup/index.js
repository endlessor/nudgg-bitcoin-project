import React, { PureComponent } from 'react'

import { Col } from 'react-bootstrap'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import Image from 'components/gui/Image'
import Heading from 'components/gui/Heading'
import Paragraph from 'components/gui/Paragraph'
import Separator from 'components/gui/Separator'
import Button from 'components/gui/Button'

import {
    partners
} from 'data/partners'

class PartnersPopup extends PureComponent {
  render () {
    const { className, modifier, type, index } = this.props

    const modifiedClassName = classNames('partners-popup', className, modifier)

    const tileInfos = partners[type][index]

    return (
      <div className={modifiedClassName}>
        <div className='partners-popup__content row'>
          <Col sm={8} className='no-padding'>
            <Image
              src={tileInfos.image}
              alt=''
              modifier='block'
              className='partners-popup__image'
            />
          </Col>
          <Col sm={4} className='no-padding'>
            <a href={tileInfos.link}>
              <Button
                modifier={['bg-aqua', 'font-semi-bold']}
                className='partners-popup__btn-account'
              >
                Open account
              </Button>
            </a>
          </Col>
        </div>
        <Separator modifier='bg-grey' />
        <div className='partners-popup__content scrollable'>
          {tileInfos.content.map((detail, index) => (
            <div className='partners-popup__paragraph-section' key={index}>
              <Heading
                size={5}
                modifier='font-roboto'
                className='partners-popup__heading'
              >
                {detail.title}
              </Heading>
              <Paragraph className='partners-popup__paragraph'>
                {detail.description}
              </Paragraph>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

PartnersPopup.propTypes = {
  ...defaultPropTypes
}

export default PartnersPopup
