import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import {
  Grid,
  Col
} from 'react-bootstrap'

import CarouselSlider from 'components/carousel/CarouselSlider'
import SavingsAccountsComparisonTile from 'components/resources/SavingsAccountsComparisonTile'

import {
  faqCarouselOptions
} from 'data/resources'

export const baseClass = 'comparison-table'

class SavingsAccountsComparisonTable extends Component {
  constructor (props) {
    super(props)

    this.renderTile = this.renderTile.bind(this)
  }

  renderTile (tile, index) {
    return (
      <SavingsAccountsComparisonTile
        key={index}
        {...tile}
      />
    )
  }

  render () {
    const {
      data,
      className,
      modifier
    } = this.props

    const modifiedClassName = classNames(baseClass, className, modifier)

    return (
      <Grid className={modifiedClassName}>
        <Col sm={2} className='comparison-table__side'>
          <div className='comparison-table__row'>
            <div className='comparison-table__row-title'>
              Name of product
            </div>
          </div>
          <div className='comparison-table__row'>
            <div className='comparison-table__row-title'>
              Interest rate
            </div>
          </div>
          <div className='comparison-table__row'>
            <div className='comparison-table__row-title'>
              term
            </div>
          </div>
          <div className='comparison-table__row'>
            <div className='comparison-table__row-title'>
              Gross value (based on £1,000 invested)
            </div>
          </div>
        </Col>
        <Col sm={10} className='comparison-table__carousel'>
          <CarouselSlider carouselOptions={faqCarouselOptions}>
            {data.map(this.renderTile)}
          </CarouselSlider>
        </Col>
      </Grid>
    )
  }
}

SavingsAccountsComparisonTable.propTypes = {
  ...defaultPropTypes
}

export default SavingsAccountsComparisonTable
