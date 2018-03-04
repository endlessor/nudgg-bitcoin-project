import React, {Component} from 'react'

import NewsTileTwitter from 'components/news/NewsTileTwitter'

class NewsTwitter extends Component {
  render () {
    const {tweets} = this.props

    if (!tweets) {
      return null
    }

    return (
      <div className="news-twitter__container">
        {tweets[0] && tweets[0].map((tweet, index) => (
          <div className='news__tile' key={index}>
            <NewsTileTwitter
              article={tweet}
              id={tweet.twid} />
          </div>
        ))}
        <div className="news-twitter__fade"></div>
      </div>
    )
  }
}

export default NewsTwitter
