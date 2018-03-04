import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import {
  Grid,
  Col
} from 'react-bootstrap'

import CarouselSlider from 'components/carousel/CarouselSlider'
import CurrentAccountsComparisonTile from 'components/resources/CurrentAccountsComparisonTile'

import {
  faqCarouselOptions
} from 'data/resources'

export const baseClass = 'comparison-table'

class CurrentAccountsComparisonTable extends Component {
  constructor (props) {
    super(props)

    this.renderTile = this.renderTile.bind(this)
  }

  renderTile (tile, index) {
    return (
      <CurrentAccountsComparisonTile
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
              Interest rate
            </div>
          </div>
          <div className='comparison-table__row'>
            <div className='comparison-table__row-title'>
              Authorised overdraft
            </div>
          </div>
          <div className='comparison-table__row'>
            <div className='comparison-table__row-title'>
              Account extra’s
            </div>
          </div>
          <div className='comparison-table__row'>
            <div className='comparison-table__row-title'>
              Yearly fee
            </div>
          </div>
          <div className='comparison-table__row'>
            <div className='comparison-table__row-title'>
              App
            </div>
          </div>
          <div className='comparison-table__row'>
            <div className='comparison-table__row-title'>
              BRANCH
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

CurrentAccountsComparisonTable.propTypes = {
  ...defaultPropTypes
}

export default CurrentAccountsComparisonTable
