import { Component } from 'react'
import { withRouter } from 'react-router'

@withRouter
class ScrollTop extends Component {
  componentDidUpdate (prevProps) {
    const { location } = this.props
    const { location: prevLocation } = prevProps

    const isNewPage = location !== prevLocation

    if (isNewPage) window.scrollTo(0, 0)
  }

  render () {
    const { children } = this.props

    return children
  }
}

export default ScrollTop
