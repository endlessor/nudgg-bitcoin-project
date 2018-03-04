import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import Tile from 'components/common/Tile'
// import Image from 'components/gui/Image'
import Heading from 'components/gui/Heading'
import Separator from 'components/gui/Separator'
import Paragraph from 'components/gui/Paragraph'

import { isFunction } from 'utils/function'

export const baseClass = 'twitter'

class NewsTile extends PureComponent {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.headImage = this.headImage.bind(this)
  }

  handleClick (evt) {
    const {article: {screenname, twid}} = this.props
    window.open(`https://twitter.com/${screenname}/status/${twid}`, '', 'width=1000')
  }

  headImage (media) {
    if (typeof media === 'string') {
      return (media ? <div className='twitter__image' style={{ backgroundImage: `url(${media})` }} /> : null)
    } else if (typeof media === 'object') {
      if (media && media.images.length > 0) {
        return media.images.map((image, index) => {
          return (image ? <div className='twitter__image' style={{ backgroundImage: `url(${image})` }} key={index}/> : null)
        })
      }
    }
  }

  render () {
    const {
      article,
      className,
      modifier,
      id
    } = this.props

    const {
      author,
      avatar,
      body,
      date,
      screenname,
      media,
    } = article

    const {
      title,
      description
    } = media

    const modifiedClassName = classNames(baseClass, className, modifier)

    const subdate = date.substr(0, 10)
    const subyear = date.substr(25, 30)

    return (
      <div className={modifiedClassName} onClick={this.handleClick}>
        { this.headImage(media) }
        <Tile className='twitter__tile'>
          <div className='twitter__heading'>
            <Separator
              modifier='vertical'
              className={['twitter__separator', `bg-${title}`]}
            />
            <div className="twitter__information">
              <div className="avatar" style={{ backgroundImage: `url(${avatar})`}}></div>
              <div className="information"><p>{author} <i className="fa fa-check-circle" aria-hidden="true"></i></p><p>@{screenname}</p></div>
            </div>
            <Heading
              size={4}
              className='twitter__title'
              children={body}
            />
          </div>
          <div className='twitter__type-section'>
            <span className={`twitter__type color-${body}`}>
              {description}<p className="hash-tag">#Hashtag</p>
            </span>
          </div>
          <Paragraph
            className='twitter__text'
            children={`${subdate} ${subyear}`}
          />
          <div className="twitter__article-icons">
            <a href={`http://twitter.com/intent/retweet?tweet_id=${id}`} target="_blank"><i className="fa fa-refresh" aria-hidden="true"></i></a>
            <a href={`http://twitter.com/intent/like?tweet_id=${id}`} target="_blank"><i className="fa fa-heart" aria-hidden="true"></i></a>
            <a href={`http://twitter.com/intent/tweet?in_reply_to=${id}`} target="_blank"><i className="fa fa-reply" aria-hidden="true"></i></a>
          </div>
        </Tile>
      </div>
    )
  }
}

NewsTile.propTypes = {
  ...defaultPropTypes,
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string
}

export default NewsTile
