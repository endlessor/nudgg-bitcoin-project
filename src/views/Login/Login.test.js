import React from 'react'
import { shallow } from 'enzyme'

import Login from './index'

describe('Views: Login', () => {
  const props = {}

  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <Login {...props} />
    )
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })
})