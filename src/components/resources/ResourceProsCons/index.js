import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

export const baseClass = 'resource-pros-cons'

class ResourceProsCons extends PureComponent {
  constructor (props) {
    super(props)

    this.renderItem = this.renderItem.bind(this)
  }

  renderItem (item) {
    const {
      title,
      isPro
    } = item

    const className = classNames('resource-pros-cons__list-item', null, {
      'pros': isPro,
      'cons': !isPro
    })

    return (
      <li className={className} key={title}>
        <span className='resource-pros-cons__title'>
          {title}
        </span>
        <span className='resource-pros-cons__icon absolute-center-v' />
      </li>
    )
  }

  render () {
    const {
      items,
      className,
      modifier
    } = this.props

    const modifiedClassName = classNames(baseClass, className, modifier)

    return (
      <div className={modifiedClassName}>
        <ul className='resource-pros-cons__list'>
          {items.map(this.renderItem)}
        </ul>
      </div>
    )
  }
}

ResourceProsCons.propTypes = {
  ...defaultPropTypes,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      isPro: PropTypes.bool
    })
  ).isRequired
}

export default ResourceProsCons
