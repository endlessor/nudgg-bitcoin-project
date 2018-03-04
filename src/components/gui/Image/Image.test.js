import React from 'react'
import { shallow } from 'enzyme'

import Image, { baseClass } from './index'

describe('Components: gui/Image', () => {
  const props = {
    src: 'sample'
  }

  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <Image {...props} />
    )
  })

  it('should exist as a img', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper.type()).toBe('img')
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

  it('should have the passed source prop', () => {
    const source = 'sample'

    wrapper.setProps({ source })
    expect(wrapper.prop('src')).toEqual(source)
  })

  it('should have the passed alt prop', () => {
    const alt = 'sample'

    wrapper.setProps({ alt })
    expect(wrapper.prop('alt')).toEqual(alt)
  })
})