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

import moment from 'moment'

export const baseClass = 'news-tile'

class NewsTile extends PureComponent {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (evt) {
    const {
      id,
      handleClick
    } = this.props

    const meta = {
      id
    }

    if (isFunction(handleClick)) {
      handleClick(evt, meta)
    }
  }

  render () {
    const {
      image,
      title,
      date,
      author,
      type,
      text,
      theme,
      className,
      modifier
    } = this.props

    const formattedDate = moment(date).fromNow()

    const modifiedClassName = classNames(baseClass, className, modifier)

    return (
      <div className={modifiedClassName} onClick={this.handleClick}>
        <div className='news-tile__image' style={{
          backgroundImage: `url(${image})`
        }} />
        <Tile className='news-tile__tile'>
          <div className='news-tile__heading'>
            <Separator
              modifier='vertical'
              className={['news-tile__separator', `bg-${theme}`]}
            />
            <Heading
              size={3}
              className='news-tile__title'
              children={title}
            />
          </div>
          {type &&
            <div className='news-tile__type-section'>
              <span>in </span>
              <span className={`news-tile__type`}>
                {type}
              </span>
            </div>
          }
          <div className='news-tile__info'>
            <span className='news-tile__info-date'>
              {formattedDate}
            </span>
            <span className='news-tile__author'>
              {author}
            </span>
          </div>
          {text &&
            <Paragraph
              className='news-tile__text'
              children={text}
            />
          }
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
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

export default NewsTile
