import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import Modal from 'components/common/Modal'
import Tile from 'components/common/Tile'
import Icon from 'components/gui/Icon'

import { isFunction } from 'utils/function'
import { mapVisibleState } from 'utils/other'

class Popup extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      isVisible: false
    }

    this.handleClose = this.handleClose.bind(this)
  }

  componentWillMount () {
    this.mapPropsToState()
  }

  componentWillReceiveProps () {
    this.mapPropsToState()
  }

  mapPropsToState () {
    this.setState(mapVisibleState)
  }

  handleClose () {
    const { handleClose } = this.props

    this.setState({
      isVisible: false
    })

    if (isFunction(handleClose)) {
      handleClose()
    }
  }

  render () {
    const { isVisible } = this.state
    const { children, className, modifier } = this.props

    const modifiedClassName = classNames('popup', className, modifier)

    return (
      <Modal
        isVisible={isVisible}
        className={modifiedClassName}
        handleClickOutside={this.handleClose}
      >
        <Tile className='popup__tile'>
          <div className='popup__icon-container' onClick={this.handleClose}>
            <Icon
              modifier='cross'
              className={[
                'popup__icon',
                'absolute-center'
              ]}
            />
          </div>
          <div className='popup__content'>
            {children}
          </div>
        </Tile>
      </Modal>
    )
  }
}

Popup.propTypes = {
  ...defaultPropTypes,
  isVisible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func
}

export default Popup