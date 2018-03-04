import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import View from 'components/other/View'
import { RESOURCES_BY_TYPE as titles } from 'data/titles'

// import Loader from 'components/gui/Loader'
import Heading from 'components/gui/Heading'
import Paragraph from 'components/gui/Paragraph'

import ResourceTile from 'components/resources/ResourceTile'
import Carousel from 'components/carousel'
import HeroImage from 'components/parallax/HeroImage'

// Mockup data
import {
  resourcesByType,
  carouselOptions
} from 'data/resources'

class ResourcesByType extends Component {
  /*
  constructor (props) {
    super(props)

    this.timeout = null

    this.state = {
      isLoaded: false
    }
  }

  componentWillMount () {
    this.timeout = setTimeout(() => {
      this.setState({
        isLoaded: true
      })

      clearTimeout(this.timeout)
    }, 1500)
  }

  componentWillUnmount () {
    clearTimeout(this.timeout)
  }
  */

  isFirstSection (index) {
    const ZERO_INDEX = 0
    return index === ZERO_INDEX
  }

  render () {
    const { match } = this.props
    const { params, url: baseUrl } = match
    const { type } = params

    // const { isLoaded } = this.state

    const resourceData = resourcesByType[type]
    if (!resourceData) return <Redirect to='/404' />

    const { image, sections, options } = resourceData
    const title = titles[type]
    return (
      <View title={title}>
        <div className='resources-type'>
          <HeroImage
            src={image}
            alt={title}
            className='resources__hero-image'
          />
          <div className='container'>
            <div className='col-sm-7 col-md-6 col-md-push-1 no-padding'>
              {sections.map((section, index) => (
                <div className='resources-type__section' key={section.title}>
                  <Heading
                    size={this.isFirstSection(index) ? 2 : 4}
                    modifier='standard'
                  >
                    {section.title}
                  </Heading>
                  <Paragraph>
                    <div dangerouslySetInnerHTML={{__html: section.content}} />
                  </Paragraph>
                </div>
              ))}
            </div>
          </div>
          <div className='resources-type__section'>
            <div className='container'>
              <div className='col-sm-12 col-md-9 col-md-push-1 no-padding'>
                <Heading modifier='standard'>
                  What are my options?
                </Heading>
              </div>
            </div>
            <div className={`carousel-gradient carousel-gradient__${type} overflow-hidden`}>
              <div className='container'>
                <div className='col-sm-12 col-md-9 col-md-push-1 no-padding'>
                  <div className='hidden-sm-up'>
                    <Carousel {...carouselOptions} className='resources-type__carousel'>
                      {options.map((option, index) => (
                        <div className='resources__option' key={option.title}>
                          <ResourceTile
                            image={option.image}
                            title={option.title}
                            modifier={'equal-height'}
                            description={option.description}
                            href={`${baseUrl}/${option.slug}`}
                            moreLabel='See details'
                          />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                  <div className='visible-sm-up'>
                    {options.map((option, index) => (
                      <div className='resources__option col-xs-4' key={option.title}>
                        <ResourceTile
                          image={option.image}
                          title={option.title}
                          modifier={'equal-height'}
                          description={option.description}
                          href={`${baseUrl}/${option.slug}`}
                          moreLabel='See details'
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </View>
    )
  }
}

export default ResourcesByType

/*
  <Loader isVisible={!isLoaded} />
*/
