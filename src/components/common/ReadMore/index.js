import React, {Component} from 'react'

export default class ReadMore extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showMore: false
    }
  }

  render () {
    const {preview, children} = this.props
    const {showMore} = this.state

    return (
      <div>
        {!showMore
          ? (<span>{preview} <a className="link link--font-italic link--color-aqua link--underline" onClick={() => this.setState({showMore: true})}>READ MORE</a></span>)
          : children
        }
      </div>
    )
  }
}
