import React from 'react'
import { shallow } from 'enzyme'

import ProgressLine, { baseClass } from './index'

describe('Components: gui/ProgressLine', () => {
  const props = {
    progress: 0
  }

  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <ProgressLine {...props} />
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

  // TODO: Add more tests for the progress internal logic
})