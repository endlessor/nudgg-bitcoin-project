import React, { PureComponent } from 'react'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import HubTableRow from 'components/hub/HubTableRow'

class HubTable extends PureComponent {
  render () {
    const {
      headings,
      data,
      handleRowClick,
      className,
      modifier
    } = this.props

    const modifiedClassName = classNames('hub-table', className, modifier)

    return (
      <table className={modifiedClassName}>
        <thead className='hub-table__headings'>
          <tr>
            {headings.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((item, cellIndex) => (
                <td>
                  {item}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

HubTable.propTypes = {
  ...defaultPropTypes
}

export default HubTable
