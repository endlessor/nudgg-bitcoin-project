import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import {
  Grid,
  Col
} from 'react-bootstrap'

// import Link from 'components/gui/Link'
import Heading from 'components/gui/Heading'
import Paragraph from 'components/gui/Paragraph'
import List from 'components/gui/List'
// import Button from 'components/gui/Button'

import HeroImage from 'components/parallax/HeroImage'
import ResourceProsCons from 'components/resources/ResourceProsCons'
import ResourceTileGradient from 'components/resources/ResourceTileGradient'
import ResourceTileGradientPopup from 'components/resources/ResourceTileGradientPopup'
import CarouselSlider from 'components/carousel/CarouselSlider'

// Mockup data
import {
  resourcesByProvider,
  faqCarouselOptions,

} from 'data/resources'

import RoboAdvisorComparisonTable from 'components/resources/RoboAdvisorComparisonTable'
import CurrentAccountsComparisonTable from 'components/resources/CurrentAccountsComparisonTable'
import SavingsAccountsComparisonTable from 'components/resources/SavingsAccountsComparisonTable'

class ResourcesByProvider extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isShowing: false,
      resource: {}
    }

    this.onClickGradientPopup = this.onClickGradientPopup.bind(this)
    this.onClickClose = this.onClickClose.bind(this)
    this.onComparisonTable = this.onComparisonTable.bind(this)
    this.makeOptionDescription = this.makeOptionDescription.bind(this)
  }

  onClickGradientPopup (id) {
    this.setState({ isShowing: true })
    const { match } = this.props
    const { params } = match
    const { type, provider } = params
    const typeData = resourcesByProvider[type]
    const resourceData = typeData[provider]
    const { faqs } = resourceData
    const resource = faqs[id]
    this.setState({ resource: resource })
  }

  onClickClose () {
    this.setState({ isShowing: false })
  }

  onComparisonTable () {
    let typeData = resourcesByProvider[this.props.match.params.type]
    let resourceData = typeData[this.props.match.params.provider]

    if (this.props.match.params.provider === 'robo-advisor') {
      return <RoboAdvisorComparisonTable data={resourceData.comparisonTable}/>
    } else if (this.props.match.params.provider === 'current-accounts') {
      return <CurrentAccountsComparisonTable data={resourceData.comparisonTable}/>
    } else if (this.props.match.params.provider === 'savings-accounts') {
      return <SavingsAccountsComparisonTable data={resourceData.comparisonTable}/>
    } else if (this.props.match.params.provider === 'funds') {
      return <RoboAdvisorComparisonTable data={resourceData.comparisonTable}/>
    } else if (this.props.match.params.provider === 'shares') {
      return <RoboAdvisorComparisonTable data={resourceData.comparisonTable}/>
    }
  }

  makeOptionDescription (text) {
    if (text.length < 300) return text
    const lastSpaceIndex = text.substring(280, 300).lastIndexOf(' ') + 280
    return `${text.substring(0, lastSpaceIndex)}...`
  }

  render () {
    const { match } = this.props
    const { params } = match // url: baseUrl
    const { type, provider } = params

    const typeData = resourcesByProvider[type]
    if (!typeData) return <Redirect to='/404' />

    const resourceData = typeData[provider]
    if (!resourceData) return <Redirect to='/404' />

    const { image, prosCons, faqs, title, description } = resourceData
    const { resource } = this.state

    const tableData = this.onComparisonTable()

    return (
      <div className='resources-provider'>
        <div className='resources__hero-image'>
          <HeroImage
            src={image}
          />
        </div>
        <Grid>
          <Col md={6} mdPush={1} className='no-padding'>
            <div className='resources-provider__section'>
              <Heading size={2} modifier='standard'>
                {title}
              </Heading>
              {description}
            </div>
          </Col>
          <Col md={3} mdPush={2} className='no-padding'>
            <div className='resources-provider__pros-cons'>
              <ResourceProsCons items={prosCons} />
            </div>
          </Col>
          <Col md={10} mdPush={1} className='no-padding'>
            <div className='resources-provider__section'>
              <Heading size={4}>
                Top Rated - {title}
              </Heading>
            </div>
          </Col>
        </Grid>
        <div className='resources-provider__table'>
          { resourceData.comparisonTable === '' ? null : tableData }
        </div>
        <Grid>
          <Col md={10} mdPush={1} className='no-padding'>
            <div className='resources-provider__section'>
              <Heading modifier='standard'>
                Quick Answers
              </Heading>
              <Paragraph>
                Interested in Robo Advisors and want to learn more? Explore our Q&A section for all if your questions.
              </Paragraph>
            </div>
          </Col>
        </Grid>
        <div className={`resources-provider__carousel carousel-gradient carousel-gradient__${type}`}>
          <div className='container overflow-hidden'>
            { this.state.isShowing ? <div className="container gradient-popup">
              <ResourceTileGradientPopup
                title={resource.title}
                description={<div dangerouslySetInnerHTML={{__html: resource.description}} />}
                lessLabel='Read less'
                click={() => { this.onClickClose() }}
              />
            </div>
              : <CarouselSlider carouselOptions={faqCarouselOptions}>
                {faqs.map((option, index) => (
                  <div className='resources__option' key={option.title}>
                    <ResourceTileGradient
                      title={option.title}
                      modifier={'equal-height'}
                      description={<div dangerouslySetInnerHTML={{__html: this.makeOptionDescription(option.description)}} />}
                      moreLabel='Read more'
                      click={() => { this.onClickGradientPopup(index) }}
                    />
                  </div>
                ))}
              </CarouselSlider>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default ResourcesByProvider

/*
<Link to='/'>
  <Button
    modifier={['bg-aqua', 'fixed-width']}
    className='resources-provider__btn-help'
  >
    Help me choose a robo
  </Button>
</Link>

<Button
  text='Apply for Robo'
  modifier='bg-aqua'
/>

<Button
  text='I need some guidance'
  modifier='color-aqua'
/>
*/
