import React from 'react'
import { shallow } from 'enzyme'

import Separator, { baseClass } from './index'

describe('Components: gui/Separator', () => {
  const props = {}

  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <Separator {...props} />
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
})