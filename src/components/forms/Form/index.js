import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import { isFunction } from 'utils/function'

export const baseClass = 'form'

class Form extends Component {
  constructor (props) {
    super(props)

    this.inputs = []

    this.state = {
      isSubmitEnabled: true
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.isFormValid = this.isFormValid.bind(this)
    this.enableSubmit = this.enableSubmit.bind(this)
    this.disableSubmit = this.disableSubmit.bind(this)
    this.setInputRef = this.setInputRef.bind(this)
  }

  handleChange (input) {
    const { handleChange } = this.props

    if (!isFunction(handleChange)) return false

    this.enableSubmit()

    handleChange(input)
  }

  handleSubmit (evt) {
    const { handleSubmit } = this.props

    if (!this.isFormValid()) {
      this.disableSubmit()
      return false
    }

    evt.preventDefault()

    if (isFunction(handleSubmit)) {
      handleSubmit(evt)
    }
  }

  isFormValid () {
    return this.inputs.reduce((acc, input) => acc && input.props.validate(), true)
  }

  enableSubmit () {
    const { isSubmitEnabled } = this.state

    if (isSubmitEnabled) return false

    this.setState({
      isSubmitEnabled: true
    })
  }

  disableSubmit () {
    const { isSubmitEnabled } = this.state

    if (!isSubmitEnabled) return false

    this.setState({
      isSubmitEnabled: false
    })
  }

  setInputRef (ref) {
    this.inputs.push(ref)
  }

  render () {
    const {
      children,
      className,
      modifier
    } = this.props

    const modifiedClassName = classNames(baseClass, className, modifier)

    return (
      <form className={modifiedClassName} autoComplete='off'>
        {children}
      </form>
    )
  }

  getChildContext () {
    const { isSubmitEnabled } = this.state

    const {
      values,
      validation,
      errors
    } = this.props

    return {
      values,
      validation,
      errors,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
      isSubmitEnabled,
      enableSubmit: this.enableSubmit,
      disableSubmit: this.disableSubmit,
      isFormValid: this.isFormValid,
      setInputRef: this.setInputRef
    }
  }
}

Form.propTypes = {
  ...defaultPropTypes,
  children: PropTypes.any.isRequired,
  validation: PropTypes.object,
  errors: PropTypes.object,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func
}

Form.childContextTypes = {
  values: PropTypes.object,
  validation: PropTypes.object,
  errors: PropTypes.object,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  isSubmitEnabled: PropTypes.bool,
  enableSubmit: PropTypes.func,
  disableSubmit: PropTypes.func,
  isFormValid: PropTypes.func,
  setInputRef: PropTypes.func
}

export default Form
