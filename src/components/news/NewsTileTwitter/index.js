import React, { PureComponent } from 'react'

import classNames from 'utils/classNames'

import NewsTwitter from 'components/news/NewsTwitter'

class NewsTileTwitter extends PureComponent {
  render () {
    const { className, article, id } = this.props
    const modifiedClassName = classNames('news-tile-twitter', className)

    return (
      <NewsTwitter
        article={article}
        className={modifiedClassName}
        id={id}
      />
    )
  }
}

export default NewsTileTwitter
