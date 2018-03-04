import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import {
  Grid,
  Col
} from 'react-bootstrap'

import Tooltip from 'components/gui/Tooltip'

import CarouselSlider from 'components/carousel/CarouselSlider'
import RoboAdvisorComparisonTile from 'components/resources/RoboAdvisorComparisonTile'

import {
  faqCarouselOptions
} from 'data/resources'

export const baseClass = 'comparison-table'

class RoboAdvisorComparisonTable extends Component {
  constructor (props) {
    super(props)

    this.renderTile = this.renderTile.bind(this)
  }

  renderTile (tile, index) {
    return (
      <RoboAdvisorComparisonTile
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
              First year fee
            </div>
          </div>
          <div className='comparison-table__row'>
            <div className='comparison-table__row-title'>
              Minimum initial investment
            </div>
          </div>
          <div className='comparison-table__row'>
            <Tooltip title='Pension' className='comparison-table__row-title'>
              A pension is a tax-efficient way to save for your retirement. It aims to provide you with a source of income in later life.
            </Tooltip>
          </div>
          <div className='comparison-table__row'>
            <Tooltip title='ISA' className='comparison-table__row-title'>
              An ISA (Individual Savings Account) is a tax-free way to save or invest.
            </Tooltip>
          </div>
          <div className='comparison-table__row'>
            <div className='comparison-table__row-title'>
              App
            </div>
          </div>
          <div className='comparison-table__row'>
            <Tooltip title='FSCS Protected' className='comparison-table__row-title'>
              FSCS protect consumers when authorised financial services firms fails.
            </Tooltip>
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

RoboAdvisorComparisonTable.propTypes = {
  ...defaultPropTypes
}

export default RoboAdvisorComparisonTable
