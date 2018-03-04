import React from 'react'
import PropTypes from 'prop-types'

import DocumentTitle from 'react-document-title'

import classNames from 'utils/classNames'

import { SITE_NAME as prefix } from 'data/titles'

export const baseClass = 'view'

const View = (props) => {
  const {
    title,
    notPrefixed,
    children,
    className,
    modifier,
    style
  } = props

  let documentTitle
  if (!notPrefixed) {
    documentTitle = `${prefix} - ${title}`
  } else {
    documentTitle = title
  }

  const modifiedClassName = classNames(baseClass, className, modifier)

  return (
    <DocumentTitle title={documentTitle}>
      <div className={modifiedClassName} style={style}>
        {children}
      </div>
    </DocumentTitle>
  )
}

View.propTypes = {
  title: PropTypes.string.isRequired,
  notPrefixed: PropTypes.bool,
  children: PropTypes.any,
  style: PropTypes.any
}

View.defaultProps = {
  title: '',
  notPrefixed: false,
  style: {}
}

export default View
