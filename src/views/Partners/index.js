import React, { PureComponent } from 'react'

import { Grid, Col } from 'react-bootstrap'

import View from 'components/other/View'
import { PARTNERS as title } from 'data/titles'

import Heading from 'components/gui/Heading'
import Paragraph from 'components/gui/Paragraph'

import PartnerTitle from 'components/partners/PartnerTitle'
import PartnerTile from 'components/partners/PartnerTile'
import PartnersPopup from 'components/partners/PartnersPopup'

import Carousel from 'components/carousel'
import CarouselSlider from 'components/carousel/CarouselSlider'

import Popup from 'components/common/Popup'

import { isFunction } from 'utils/function'

import {
  firstSelectedPartner,
  partnerTypes,
  partners,
  partnerTypeCarouselOptions,
  partnersCarouselOptions
} from 'data/partners'

class Partners extends PureComponent {
  constructor (props) {
    super(props)

    this.carousel = null

    this.state = {
      activeType: null,
      isPopupVisible: false,
      popupIndex: null
    }

    this.handlePartnerTypeChange = this.handlePartnerTypeChange.bind(this)
    this.handleAfterSlide = this.handleAfterSlide.bind(this)
    this.isPartnerTypeActive = this.isPartnerTypeActive.bind(this)
    this.handleOpenPopup = this.handleOpenPopup.bind(this)
    this.toggleCheckedState = this.toggleCheckedState.bind(this)
    this.handleSetRef = this.handleSetRef.bind(this)
  }

  componentWillMount () {
    this.setState({
      activeType: firstSelectedPartner
    })
  }

  handlePartnerTypeChange (_, meta) {
    const { id } = meta
    const selectedType = partnerTypes[id]

    if (selectedType) {
      this.setState({
        activeType: selectedType,
        isPopupVisible: false
      })

      if (
        this.carousel &&
        this.carousel.slider &&
        isFunction(this.carousel.slider.goToSlide)
      ) {
        this.carousel.slider.goToSlide(0)
      }
    }
  }

  handleAfterSlide (index) {
    const meta = {
      id: index
    }

    this.handlePartnerTypeChange(null, meta)
  }

  isPartnerTypeActive (partner) {
    const { activeType } = this.state

    return partner === activeType
  }

  handleOpenPopup (index) {
    // evt.preventDefault()
    this.setState({popupIndex: index})
    this.setState(this.toggleCheckedState)
  }

  toggleCheckedState (state) {
    const { isPopupVisible } = state
    const inverted = !isPopupVisible

    return {
      isPopupVisible: inverted
    }
  }

  handleSetRef (ref) {
    this.carousel = ref
  }

  render () {
    const { activeType, isPopupVisible } = this.state
    const partnerByType = partners[activeType]

    return (
      <View title={title}>
        <div className='partners'>
          <Grid>
            <Col sm={7} md={5} mdPush={1} className='no-padding'>
              <Heading size={2} modifier='standard'>
                Partners
              </Heading>
              <Heading size={5} modifier={['font-roboto', 'font-light', 'standard']}>
                Choosing financial services providers isn’t just about getting the cheapest deal or the best interest rate.
              </Heading>
              <Paragraph>
                You want to be sure that you can trust your provider not only to offer great value for money, but also to treat you fairly and offer great customer service.your move – have a glance at our free guidance.
              </Paragraph>
            </Col>
          </Grid>
          <Grid>
            <Col md={11} mdPush={1} className='no-padding'>
              <div className='partners__partner-types overflow-hidden'>
                <div className='hidden-md-up'>
                  <Carousel
                    {...partnerTypeCarouselOptions}
                    afterSlide={this.handleAfterSlide}
                  >
                    {partnerTypes.map((partner, index) => (
                      <PartnerTitle
                        key={partner}
                        id={index}
                        children={partner}
                        isActive={this.isPartnerTypeActive(partner)}
                      />
                    ))}
                  </Carousel>
                </div>
                <div className='visible-md-up'>
                  {partnerTypes.map((partner, index) => (
                    <PartnerTitle
                      key={partner}
                      id={index}
                      children={partner}
                      handleClick={this.handlePartnerTypeChange}
                      isActive={this.isPartnerTypeActive(partner)}
                      className='partners__partner-title'
                    />
                  ))}
                </div>
              </div>
              <div className='partners__carousel overflow-hidden'>
                <CarouselSlider carouselOptions={partnersCarouselOptions} ref={this.handleSetRef}>
                  {partnerByType.map((partner, index) => (
                    <div key={partner.title}>
                      <PartnerTile
                        id={partner.id}
                        image={partner.image}
                        title={partner.title}
                        link={partner.link}
                        description={partner.description}
                        handleMoreInfo={() => this.handleOpenPopup(index) }
                      />
                    </div>
                  ))}
                </CarouselSlider>
              </div>
            </Col>
          </Grid>
          <Popup isVisible={isPopupVisible}>
            <PartnersPopup type={this.state.activeType} index={this.state.popupIndex} />
          </Popup>
        </div>
      </View>
    )
  }
}

export default Partners
