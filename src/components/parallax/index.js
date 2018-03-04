import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Parallax extends PureComponent {
  constructor (props) {
    super(props)

    this.getPosition = this.getPosition.bind(this)
    this.scrollHandler = this.scrollHandler.bind(this)
  }

  componentWillMount () {
    this.setState({
      position: this.getPosition()
    })
  }

  componentDidMount () {
    this.startOffset = this.refs.node.offsetTop
    window.addEventListener('scroll', this.scrollHandler)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.scrollHandler)
  }

  getPosition () {
    const { scope, offset, speed } = this.props
    const position = ((window.pageYOffset - this.startOffset) * speed)
    return Math.min(-Math.min(scope - offset, position), scope + offset)
  }

  scrollHandler () {
    this.setState({
      position: this.getPosition()
    })
  }

  render () {
    // TODO: Make it prefixed
    const style = {
      transform: `translateY(${this.state.position}px)`
    }

    return React.cloneElement(this.props.children, {style, ref: 'node'})
  }
}

Parallax.propTypes = {
  children: PropTypes.node.isRequired,
  scope: PropTypes.number,
  speed: PropTypes.number,
  offset: PropTypes.number
}

Parallax.defaultProps = {
  speed: 1,
  scope: 100,
  offset: 0
}

export default Parallax