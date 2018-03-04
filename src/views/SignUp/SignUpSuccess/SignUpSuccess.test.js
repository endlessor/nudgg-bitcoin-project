import React from 'react'
import { shallow } from 'enzyme'

import SignUpSuccess from './index'

describe('Views: SignUpSuccess', () => {
  const props = {}

  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <SignUpSuccess {...props} />
    )
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })
})