import React, { PureComponent } from 'react'

import classNames from 'utils/classNames'

import NewsTile from 'components/news/NewsTile'

class NewsTileSmall extends PureComponent {
  render () {
    const { className } = this.props
    const modifiedClassName = classNames('news-tile-sm scale-hover', className)

    return (
      <NewsTile
        {...this.props}
        className={modifiedClassName}
      />
    )
  }
}

export default NewsTileSmall
