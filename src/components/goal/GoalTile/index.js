import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import Tile from 'components/common/Tile'
import Image from 'components/gui/Image'

import { isFunction } from 'utils/function'

export const baseClass = 'goal-tile'

class GoalTile extends PureComponent {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (evt) {
    const {
      title,
      isActive,
      handleClick
    } = this.props

    if (isActive) return

    const meta = {
      id: title
    }

    if (isFunction(handleClick)) {
      handleClick(evt, meta)
    }
  }

  render () {
    const {
      title,
      image,
      isActive,
      className,
      modifier
    } = this.props

    const modifiedClassName = classNames(baseClass, className, modifier, {
      'active': isActive
    })

    return (
      <Tile className={modifiedClassName} handleClick={this.handleClick}>
        <Image
          src={image}
          img={false}
          className='goal-tile__image'
        />
        <div className='goal-tile__title'>
          {title}
        </div>
      </Tile>
    )
  }
}

GoalTile.propTypes = {
  ...defaultPropTypes,
  title: PropTypes.string,
  image: PropTypes.string,
  isActive: PropTypes.bool,
  handleClick: PropTypes.func
}

GoalTile.defaultPropTypes = {
  isActive: false
}

export default GoalTile
