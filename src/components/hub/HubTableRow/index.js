import React, { PureComponent } from 'react'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

class HubTableRow extends PureComponent {
  render () {
    const {
      children,
      handleClick,
      className,
      modifier
    } = this.props

    const modifiedClassName = classNames('hub-table-row', className, modifier)

    return (
      <div className={modifiedClassName} onClick={handleClick}>
        {children}
      </div>
    )
  }
}

HubTableRow.propTypes = {
  ...defaultPropTypes
}

export default HubTableRow
