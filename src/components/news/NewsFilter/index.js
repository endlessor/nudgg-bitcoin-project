import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import Icon from 'components/gui/Icon'

import { toggleActiveState } from 'utils/other'
import { isFunction } from 'utils/function'
import { isBoolean } from 'utils/boolean'

export const baseClass = 'news-filter'

const constructType = (type) => `type-${type}`

class NewsFilter extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      isActive: false
    }

    this.mapActiveState = this.mapActiveState.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleToggleFinish = this.handleToggleFinish.bind(this)
  }

  componentWillMount () {
    this.mapPropsToState()
  }

  componentWillReceiveProps () {
    this.mapPropsToState()
  }

  mapPropsToState () {
    this.setState(this.mapActiveState)
  }

  mapActiveState (_, props) {
    const { isActive } = props

    if (!isBoolean(isActive)) return null

    return {
      isActive
    }
  }

  handleToggle () {
    this.setState(
      toggleActiveState,
      this.handleToggleFinish
    )
  }

  handleToggleFinish () {
    const evt = null

    const { isActive } = this.state

    const {
      title,
      value,
      handleChange
    } = this.props

    const meta = {
      title,
      value,
      isActive
    }

    if (isFunction(handleChange)) {
      handleChange(evt, meta)
    }
  }

  render () {
    const { isActive } = this.state
    const {
      title,
      value,
      isDisabled,
      className,
      modifier
    } = this.props

    const typeClassName = constructType(value)

    const modifiedClassName = classNames(baseClass, [
      className,
      typeClassName
    ], modifier, {
      'active': isActive,
      'disabled': isDisabled
    })

    const iconModifier = isActive ? 'tick' : 'plus'

    return (
      <div className={modifiedClassName} onClick={!isDisabled && this.handleToggle}>
        <span className='news-filter__title'>
          {title}
        </span>
        <Icon
          modifier={[
            'small',
            iconModifier
          ]}
          className='news-filter__icon'
        />
      </div>
    )
  }
}

NewsFilter.propTypes = {
  ...defaultPropTypes,
  title: PropTypes.string,
  value: PropTypes.string,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  handleChange: PropTypes.func
}

export default NewsFilter
