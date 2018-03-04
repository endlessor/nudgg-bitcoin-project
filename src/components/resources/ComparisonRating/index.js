import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import Repeat from 'components/other/Repeat'

export const baseClass = 'comparison-rating'
const minStars = 1
const maxStars = 5

class ComparisonRating extends Component {
  constructor (props) {
    super(props)

    this.renderStar = this.renderStar.bind(this)
  }

  calculateStars (rating) {
    const count = Math.floor(rating / 2)

    if (count < minStars) return minStars
    if (count > maxStars) return maxStars

    return count
  }

  renderStar (_, index) {
    return <span className={`${baseClass}__star`} key={index} />
  }

  render () {
    const {
      rating,
      className,
      modifier
    } = this.props

    const modifiedClassName = classNames(baseClass, className, modifier)

    const times = this.calculateStars(rating)

    return (
      <div className={modifiedClassName}>
        <Repeat times={times} render={this.renderStar} />
      </div>
    )
  }
}

ComparisonRating.propTypes = {
  ...defaultPropTypes,
  rating: PropTypes.number.isRequired
}

export default ComparisonRating
