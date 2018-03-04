import React, { Component } from 'react'

import {
  Grid,
  Col
} from 'react-bootstrap'

import View from 'components/other/View'
import { REGULATIONS as title } from 'data/titles'

import Heading from 'components/gui/Heading'
import Separator from 'components/gui/Separator'
import Paragraph from 'components/gui/Paragraph'

class Regulations extends Component {
  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <View title={title} className='static regulations'>
        <Grid>
          <Col sm={8} smPush={1}>
            <Heading size={2}>
              {title}
            </Heading>
            <Separator className='static__separator' />
            <div className='static__section'>
              <Paragraph>
                Copyright © nudgg. All rights reserved. nudgg Limited is authorised and regulated by the Financial Conduct Authority, registration number xxxxxxx
              </Paragraph>
            </div>
          </Col>
        </Grid>
      </View>
    )
  }
}

export default Regulations
