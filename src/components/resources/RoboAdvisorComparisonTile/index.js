import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import Image from 'components/gui/Image'
import Link from 'components/gui/Link'
import Button from 'components/gui/Button'
import Tooltip from 'components/gui/Tooltip'

import ComparisonRating from 'components/resources/ComparisonRating'
import ComparisonIcon from 'components/resources/ComparisonIcon'

export const baseClass = 'comparison-tile'

class ComparisonTile extends Component {
  render () {
    const {
      image,
      rating,
      reviews,
      firstYearFee,
      minimumInitialInvestment,
      pension,
      ISA,
      app,
      FSCS,
      link,
      className,
      modifier
    } = this.props

    const {
      amount,
      interest
    } = firstYearFee

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
          {rating
            ? <span>
              <ComparisonRating
                rating={rating}
                className='comparison-tile__rating'
              />
              <div className='comparison-tile__rating-text'>
                <div>
                  Rated <b>{rating}/10</b> on Trust Pilot
                </div>
              </div>
            </span>
            : <div className='comparison-tile__rating-text'>No Trust Pilot rating available</div>
          }
        </div>
        <div className='comparison-tile__row'>
          <div className='comparison-tile__row-title'>
            First year fee
          </div>
          <div className='comparison-tile__row-value'>
            {interest && interest + '%'}
            {amount && '£' + amount}
          </div>
        </div>
        <div className='comparison-tile__row'>
          <div className='comparison-tile__row-title'>
            Minimum initial investment
          </div>
          <div className='comparison-tile__row-value'>
            £{minimumInitialInvestment}
          </div>
        </div>
        <div className='comparison-tile__row'>
          <Tooltip title='Pension' className='comparison-tile__row-title'>
            A pension is a tax-efficient way to save for your retirement. It aims to provide you with a source of income in later life.
          </Tooltip>
          <div className='comparison-tile__row-value'>
            <ComparisonIcon value={pension} />
          </div>
        </div>
        <div className='comparison-tile__row'>
          <Tooltip title='ISA' className='comparison-tile__row-title'>
            An ISA (Individual Savings Account) is a tax-free way to save or invest.
          </Tooltip>
          <div className='comparison-tile__row-value'>
            <ComparisonIcon value={ISA} />
          </div>
        </div>
        <div className='comparison-tile__row'>
          <div className='comparison-tile__row-title'>
            App
          </div>
          <div className='comparison-tile__row-value'>
            <ComparisonIcon value={app} />
          </div>
        </div>
        <div className='comparison-tile__row'>
          <Tooltip title='FSCS Protected' className='comparison-tile__row-title'>
            FSCS protect consumers when authorised financial services firms fails.
          </Tooltip>
          <div className='comparison-tile__row-value'>
            <ComparisonIcon value={FSCS} />
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

ComparisonTile.propTypes = {
  ...defaultPropTypes,
  image: PropTypes.string,
  rating: PropTypes.number,
  firstYearFee: PropTypes.shape({
    amount: PropTypes.number,
    interest: PropTypes.number
  }).isRequired,
  minimumInitialInvestment: PropTypes.number.isRequired,
  pension: PropTypes.bool,
  ISA: PropTypes.bool,
  app: PropTypes.bool,
  FSCS: PropTypes.bool
}

ComparisonTile.defaultProps = {
  pension: false,
  ISA: false,
  app: false,
  FSCS: false
}

export default ComparisonTile
