import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import Carousel from 'components/carousel'
import SliderInput from 'components/inputs/SliderInput'

class CarouselSlider extends Component {
  constructor (props) {
    super(props)

    this.step = null
    this.slider = null

    this.state = {
      value: 0
    }

    this.handleSetRef = this.handleSetRef.bind(this)
    this.handleSliderChange = this.handleSliderChange.bind(this)
    this.handleCarouselChange = this.handleCarouselChange.bind(this)
  }

  componentWillMount () {
    const { carouselOptions = {} } = this.props
    const { slideIndex = 0 } = carouselOptions

    if (slideIndex === 0) return

    this.setState({
      value: slideIndex
    })
  }

  handleSetRef (ref) {
    this.slider = ref
  }

  handleSliderChange (value) {
    const slide = Math.round(value / this.step)
    this.slider.goToSlide(slide)

    this.setState({
      value
    })
  }

  handleCarouselChange (slide) {
    this.setState({
      value: slide * this.step
    })
  }

  render () {
    const { value } = this.state

    const {
      children,
      carouselOptions,
      className,
      modifier
    } = this.props

    this.slideCount = children
      ? children.length > 0 ? children.length : 0
      : 0

    const max = 1
    let div = this.slideCount - max
    if (div <= 0) div = max
    this.step = max / div

    const modifiedClassName = classNames('carousel-slider', className, modifier)

    const isVisible = this.step !== max

    return (
      <div className={modifiedClassName}>
        <Carousel
          {...carouselOptions}
          children={children}
          ref={this.handleSetRef}
          afterSlide={this.handleCarouselChange}
        />
        {
          isVisible && (
            <SliderInput
              value={value}
              min={0}
              max={max}
              step={this.step}
              className='carousel-slider__slider'
              handleChange={this.handleSliderChange}
            />
          )
        }
      </div>
    )
  }
}

CarouselSlider.propTypes = {
  ...defaultPropTypes,
  children: PropTypes.any,
  carouselOptions: PropTypes.object
}

export default CarouselSlider