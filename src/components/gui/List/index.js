import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

export const baseClass = 'list'

class List extends PureComponent {
  constructor (props) {
    super(props)

    this.renderItem = this.renderItem.bind(this)
  }

  renderItem (item, index) {
    return (
      <li className='list__item' key={index}>
        {item}
      </li>
    )
  }

  render () {
    const {
      items,
      className,
      modifier
    } = this.props

    const modifiedClassNames = classNames(baseClass, className, modifier)

    return (
      <ul className={modifiedClassNames}>
        {items.map(this.renderItem)}
      </ul>
    )
  }
}

List.propTypes = {
  ...defaultPropTypes,
  items: PropTypes.array.isRequired
}

export default List