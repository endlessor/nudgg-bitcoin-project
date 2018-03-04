import React, { PureComponent } from 'react'

import Button from 'components/gui/Button'

import { isDefined } from 'utils/other'
import { isArray } from 'utils/array'

const predefinedClasses = [
  'bg-aqua',
  'fixed-width',
  'font-bold'
]

class ButtonAction extends PureComponent {
  constructModifiers (modifier) {
    if (!isDefined(modifier)) return []
    if (!isArray(modifier)) return [modifier]

    return modifier
  }

  render () {
    const {
      modifier,
      ...rest
    } = this.props

    return (
      <Button
        {...rest}
        modifier={[
          ...predefinedClasses,
          ...this.constructModifiers(modifier)
        ]}
      />
    )
  }
}

export default ButtonAction
