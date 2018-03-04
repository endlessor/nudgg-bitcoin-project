import React from 'react'
import { shallow } from 'enzyme'

import List, { baseClass } from './index'

describe('Components: gui/List', () => {
  const props = {
    items: []
  }

  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <List {...props} />
    )
  })

  it('should exist as a unordered list', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper.type()).toBe('ul')
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

  /*
  it('should return list item for each item passed', () => {
    const items = [1, 2, 3]

    wrapper.setProps({ items })
    expect(wrapper.find('li')).toBe(3)
  })
  */
})