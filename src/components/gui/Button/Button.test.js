import React from 'react'
import { shallow } from 'enzyme'

import Button, { baseClass } from './index'

const disabledClass = `${baseClass}--disabled`

describe('Components: gui/Button', () => {
  const props = {
    children: 'sample'
  }

  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <Button {...props} />
    )
  })

  it('should exist as a div', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper.type()).toBe('div')
  })

  it('should have the base class name', () => {
    expect(wrapper.hasClass(baseClass)).toBeTruthy()
  })

  it('should have the passed class name', () => {
    const className = 'sample'

    wrapper.setProps({ className })
    expect(wrapper.hasClass(className)).toBeTruthy()
  })

  it('should have the passed modifier name', () => {
    const modifier = 'sample'
    const className = `${baseClass}--${modifier}`

    wrapper.setProps({ modifier })
    expect(wrapper.hasClass(className)).toBeTruthy()
  })

  it('should be enabled by default', () => {
    expect(wrapper.hasClass(disabledClass)).toBeFalsy()
  })

  it('should be disabled when isDisabled is passed as true', () => {
    const isDisabled = true

    wrapper.setProps({ isDisabled })
    expect(wrapper.hasClass(disabledClass)).toBeTruthy()
  })

  // TODO: Test handleClick
})