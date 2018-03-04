import React from 'react'
import { shallow } from 'enzyme'

import Heading, { baseClass } from './index'

describe('Components: gui/Heading', () => {
  const props = {
    children: 'sample'
  }

  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <Heading {...props} />
    )
  })

  it('should exist as a heading', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper.type()).toBe('h3')
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

  it('should render the passed size for heading', () => {
    const size = 5
    const element = `h${size}`
    const className = `${baseClass}--size-${size}`

    wrapper.setProps({ size })
    expect(wrapper.type()).toBe(element)
    expect(wrapper.hasClass(className)).toBeTruthy()
  })

  // TODO: Test handleClick
})