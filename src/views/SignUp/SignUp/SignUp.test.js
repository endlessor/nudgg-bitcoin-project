import React from 'react'
import { shallow } from 'enzyme'

import SignUp from './index'

describe('Views: SignUp', () => {
  const props = {}

  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <SignUp {...props} />
    )
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })
})