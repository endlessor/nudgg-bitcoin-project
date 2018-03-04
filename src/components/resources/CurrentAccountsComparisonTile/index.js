import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'
import Image from 'components/gui/Image'

import Link from 'components/gui/Link'
import Button from 'components/gui/Button'

import ComparisonIcon from 'components/resources/ComparisonIcon'

export const baseClass = 'comparison-tile'

class CurrentAccountsComparisonTile extends Component {
  render () {
    const {
      image,
      InterestRate,
      AuthorisedOverdraft,
      AccountExtra,
      YearlyFee,
      APP,
      BRANCH,
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
            Interest rate
          </div>
          <div className='comparison-tile__row-value'>
            {InterestRate + '%'}
          </div>
        </div>
        <div className='comparison-tile__row'>
          <div className='comparison-tile__row-title'>
            Authorised overdraft
          </div>
          <div className='comparison-tile__row-value'>
            {AuthorisedOverdraft}
          </div>
        </div>
        <div className='comparison-tile__row'>
          <div className='comparison-tile__row-title'>
            Account extra’s
          </div>
          <div className='comparison-tile__row-value'>
            <span dangerouslySetInnerHTML={{__html: AccountExtra}}></span>
          </div>
        </div>
        <div className='comparison-tile__row'>
          <div className='comparison-tile__row-title'>
            Yearly fee
          </div>
          <div className='comparison-tile__row-value'>
            {YearlyFee}
          </div>
        </div>
        <div className='comparison-tile__row'>
          <div className='comparison-tile__row-title'>
            App
          </div>
          <div className='comparison-tile__row-value'>
            <ComparisonIcon value={APP} />
          </div>
        </div>
        <div className='comparison-tile__row'>
          <div className='comparison-tile__row-title'>
            BRANCH
          </div>
          <div className='comparison-tile__row-value'>
            <ComparisonIcon value={BRANCH} />
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

CurrentAccountsComparisonTile.propTypes = {
  ...defaultPropTypes,
  InterestRate: PropTypes.number.isRequired,
  AuthorisedOverdraft: PropTypes.string,
  AccountExtra: PropTypes.node,
  YearlyFee: PropTypes.number.isRequired,
  APP: PropTypes.bool,
  BRANCH: PropTypes.bool,
  link: PropTypes.string
}

export default CurrentAccountsComparisonTile
