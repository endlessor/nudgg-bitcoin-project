import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { isFunction } from 'utils/function'
import { isRegex } from 'utils/regex'

import { ENTER_KEY_CODE } from 'data/other'

class Field extends Component {
  constructor (props) {
    super(props)

    this.validateFn = null

    this.state = {
      isValid: true
    }

    this.validate = this.validate.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentWillMount () {
    const { validation } = this.context
    const { name } = this.props

    this.validateFn = validation[name]
  }

  validate () {
    let isValid = true

    const { values } = this.context
    const { isOptional } = this.props
    const value = this.getValue()

    if (isOptional && !value) {
      this.setState({
        isValid
      })

      return true
    }

    if (isFunction(this.validateFn)) {
      isValid = this.validateFn(value, values)
    }

    if (isRegex(this.validateFn)) {
      isValid = this.validateFn.test(value)
    }

    this.setState({
      isValid
    })

    return isValid
  }

  handleChange (evt) {
    const { handleChange } = this.context
    const { formatValue } = this.props

    const { target } = evt

    let {
      name,
      value
    } = target

    this.setState({
      isValid: true
    })

    if (formatValue) {
      value = formatValue(value)
    }

    if (isFunction(handleChange)) {
      handleChange({
        name,
        value
      })
    }
  }

  handleBlur (evt) {
    const { handleBlur } = this.props

    this.validate()

    if (isFunction(handleBlur)) {
      handleBlur(evt)
    }
  }

  handleKeyPress (evt) {
    const { handleKeyPress } = this.props
    const { handleSubmit } = this.context

    const { charCode } = evt
    const isEnter = this.isKeyEnter(charCode)

    if (isEnter && isFunction(handleSubmit)) {
      handleSubmit(evt)
      evt.preventDefault()
    }

    if (isFunction(handleKeyPress)) {
      handleKeyPress(evt)
    }
  }

  isKeyEnter (keyCode) {
    return keyCode === ENTER_KEY_CODE
  }

  getValue () {
    const { name } = this.props
    const { values } = this.context

    return values[name]
  }

  getErrorMessage () {
    const { name } = this.props
    const { errors } = this.context

    return errors[name]
  }

  render () {
    const { isValid } = this.state
    const { setInputRef } = this.context

    const {
      name,
      component: Presentation,
      ...rest
    } = this.props

    const value = this.getValue()
    const errorMessage = this.getErrorMessage()

    return (
      <Presentation
        {...rest}
        name={name}
        value={value}
        isValid={isValid}
        errorMessage={errorMessage}
        handleChange={this.handleChange}
        handleBlur={this.handleBlur}
        handleKeyPress={this.handleKeyPress}
        validate={this.validate}
        ref={setInputRef}
      />
    )
  }
}

Field.propTypes = {
  component: PropTypes.func.isRequired
}

Field.contextTypes = {
  values: PropTypes.object,
  validation: PropTypes.object,
  errors: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  enableSubmit: PropTypes.func.isRequired,
  disableSubmit: PropTypes.func.isRequired,
  isFormValid: PropTypes.func.isRequired,
  setInputRef: PropTypes.func.isRequired
}

export default Field
