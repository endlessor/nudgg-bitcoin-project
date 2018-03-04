import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'
import Image from 'components/gui/Image'

import Link from 'components/gui/Link'
import Button from 'components/gui/Button'

export const baseClass = 'comparison-tile'

class SavingsAccountsComparisonTile extends Component {
  render () {
    const {
      image,
      productName,
      InterestRate,
      term,
      GrossValue,
      link,
      className,
      modifier
    } = this.props

    const modifiedClassName = classNames(baseClass, className, modifier)

    return (
      <div className={modifiedClassName}>
        <div className='comparison-tile__row comparison-tile__heading'>
          <Image
            src={image}
            img={false}
            alt='Provider image'
            className='comparison-tile__image'
          />
        </div>
        <div className='comparison-tile__row'>
          <div className='comparison-tile__row-title'>
            Name of product
          </div>
          <div className='comparison-tile__row-value'>
            {productName}
          </div>
        </div>
        <div className='comparison-tile__row'>
          <div className='comparison-tile__row-title'>
            Interest rate
          </div>
          <div className='comparison-tile__row-value'>
            {InterestRate}
          </div>
        </div>
        <div className='comparison-tile__row'>
          <div className='comparison-tile__row-title'>
            term
          </div>
          <div className='comparison-tile__row-value'>
            {term}
          </div>
        </div>
        <div className='comparison-tile__row'>
          <div className='comparison-tile__row-title'>
            Gross value (based on £1,000 invested)
          </div>
          <div className='comparison-tile__row-value'>
            {'£' + GrossValue}
          </div>
        </div>
        <Link to={link} isExternal={true} target='_blank'>
          <Button
            modifier={[
              'bg-aqua',
              'font-italic',
              'font-semi-bold'
            ]}
            className='comparison-tile__btn'>
            Open account
          </Button>
        </Link>
      </div>
    )
  }
}

SavingsAccountsComparisonTile.propTypes = {
  ...defaultPropTypes,
  productName: PropTypes.string,
  InterestRate: PropTypes.string,
  term: PropTypes.string,
  GrossValue: PropTypes.string,
  link: PropTypes.string
}

export default SavingsAccountsComparisonTile
