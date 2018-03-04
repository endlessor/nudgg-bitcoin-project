import React, { Component } from 'react'

import View from 'components/other/View'
import { RESOURCES as title } from 'data/titles'

import {
  Grid,
  Col
} from 'react-bootstrap'

// Nested views
import { Switch, Route } from 'react-router-dom'
import ResourcesByType from './ResourcesByType'
import ResourcesByProvider from './ResourcesByProvider'

import Heading from 'components/gui/Heading'
import Paragraph from 'components/gui/Paragraph'
import ResourceTile from 'components/resources/ResourceTile'
import Carousel from 'components/carousel'

// Mockup data
import {
  resources,
  carouselOptions
} from 'data/resources'

class ResourcesExact extends Component {
  render () {
    const { match } = this.props
    const { url: baseUrl } = match

    return (
      <View title={title}>
        <div className='resources'>
          <Grid>
            <Col sm={7} md={5} mdPush={1} className='no-padding'>
              <Heading size={2} modifier='standard'>
                The best solution for me
              </Heading>
              <Heading size={5} modifier={['font-roboto', 'font-light', 'standard']}>
                Most of us have money worries – the niggling admin.<br />
                Something to fix.
              </Heading>
              <Paragraph>
                Most don’t have the time or money to speak to a financial adviser. nudgg resources houses the answers you shouldn’t have to pay for. Whether you are completely clueless or ready to make your move – have a glance at our free guidance.
              </Paragraph>
            </Col>
          </Grid>
          <div>
            <div className='container overflow-hidden'>
              <div className='resources__options-section col-sm-12 col-md-9 col-md-push-1 no-padding'>
                <Heading modifier='standard'>
                  What are my options?
                </Heading>
                <div className='hidden-sm-up'>
                  <Carousel {...carouselOptions}>
                    {resources.map((option, index) => (
                      <div className='resources__option' key={option.title}>
                        <ResourceTile
                          image={option.image}
                          title={option.title}
                          modifier={'equal-height'}
                          description={option.description}
                          href={`${baseUrl}/${option.slug}`}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
                <div className='resources__options visible-sm-up'>
                  {resources.map((option, index) => (
                    <div className='resources__option col-xs-4' key={option.title}>
                      <ResourceTile
                        image={option.image}
                        title={option.title}
                        modifier={'equal-height'}
                        description={option.description}
                        href={`${baseUrl}/${option.slug}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </View>
    )
  }
}

const Resources = props => {
  const { match } = props
  const { url: baseUrl } = match

  return (
    <Switch>
      <Route exact path={baseUrl} component={ResourcesExact} />
      <Route path={`${baseUrl}/:type/:provider`} component={ResourcesByProvider} />
      <Route path={`${baseUrl}/:type`} component={ResourcesByType} />
    </Switch>
  )
}

export default Resources