import React from 'react'
import { shallow } from 'enzyme'

import Home from './index'

describe('Views: Home', () => {
  const props = {}

  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <Home {...props} />
    )
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })
})