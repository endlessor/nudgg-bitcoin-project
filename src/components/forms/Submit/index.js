import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Submit extends Component {
  render () {
    const {
      handleSubmit,
      isSubmitEnabled
    } = this.context

    const {
      component: Presentation,
      ...rest
    } = this.props

    return (
      <Presentation
        {...rest}
        isDisabled={!isSubmitEnabled}
        handleClick={handleSubmit}
        className='submit'
      />
    )
  }
}

Submit.propTypes = {
  component: PropTypes.func.isRequired
}

Submit.contextTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isSubmitEnabled: PropTypes.bool.isRequired
}

export default Submit
