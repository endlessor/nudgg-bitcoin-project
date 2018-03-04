import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Overlay from '../../../components/common/Overlay'

// import { debounce } from 'utils/other'

export const baseClass = 'loader'

class Loader extends PureComponent {
  render () {
    const { isVisible } = this.props

    return (
      <Overlay isVisible={isVisible}>
        <div className='loader'>
          <div className='loader__bubbles absolute-center'>
            <span className='loader__bubble'/>
            <span className='loader__bubble loader__bubble-second' />
            <span className='loader__bubble loader__bubble-third' />
          </div>
        </div>
      </Overlay>
    )
  }
}

Loader.propTypes = {
  isVisible: PropTypes.bool
}

Loader.defaultProps = {
  isVisible: true
}

export default Loader