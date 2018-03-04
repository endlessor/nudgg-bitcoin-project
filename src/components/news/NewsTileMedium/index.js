import React, { PureComponent } from 'react'

import classNames from 'utils/classNames'

import NewsTile from 'components/news/NewsTile'

class NewsTileMedium extends PureComponent {
  render () {
    const { className } = this.props
    const modifiedClassName = classNames('news-tile-md scale-hover', className)

    return (
      <NewsTile
        {...this.props}
        className={modifiedClassName}
      />
    )
  }
}

export default NewsTileMedium
