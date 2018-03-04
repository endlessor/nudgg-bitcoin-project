import React, { Component } from 'react'

import { Grid } from 'react-bootstrap'

import View from 'components/other/View'
import { PAGE_NOT_FOUND as title } from 'data/titles'

import Link from 'components/gui/Link'
import Heading from 'components/gui/Heading'
import Button from 'components/gui/Button'

class PageNotFound extends Component {
  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <View title={title} notPrefixed={true}>
        <div className='page-not-found'>
          <Grid>
            <Heading
              size={1}
              modifier={[
                'font-roboto',
                'font-light',
                'standard'
              ]}
              children='404'
            />
            <Heading
              size={4}
              modifier={[
                'font-roboto',
                'font-light',
                'standard'
              ]}
              children='Page not found'
            />
            <Link to='/'>
              <Button
                modifier={[
                  'bg-red',
                  'fixed-width',
                  'pos-center'
                ]}
                children='Go to homepage'
              />
            </Link>
          </Grid>
        </div>
      </View>
    )
  }
}

export default PageNotFound
