import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import Heading from 'components/gui/Heading'

export const baseClass = 'mockup'

class Mockup extends PureComponent {
  render () {
    const {
      children,
      className,
      modifier
    } = this.props

    const modifiedClassName = classNames(baseClass, className, modifier)

    return (
      <div className={modifiedClassName}>
        <Heading
          size={4}
          modifier={[
            'font-roboto',
            'font-light',
            'font-italic'
          ]}
          className='absolute-center'
          children={children}
        />
      </div>
    )
  }
}

Mockup.propTypes = {
  ...defaultPropTypes,
  children: PropTypes.any.isRequired
}

export default Mockup
