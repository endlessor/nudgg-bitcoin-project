import React, { Component } from 'react'

import {
  Grid,
  Col
} from 'react-bootstrap'

import View from 'components/other/View'
import { CAREERS as title } from 'data/titles'

import Heading from 'components/gui/Heading'
import Separator from 'components/gui/Separator'

import ContactForm from 'containers/contact/ContactForm'

class Careers extends Component {
  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <View title={title} className='static careers'>
        <Grid>
          <Col sm={8} smPush={1}>
            <Heading size={2}>
              {title}
            </Heading>
            <Separator className='static__separator' />
            <div className='static__section'>
              <ContactForm />
            </div>
          </Col>
        </Grid>
      </View>
    )
  }
}

export default Careers
