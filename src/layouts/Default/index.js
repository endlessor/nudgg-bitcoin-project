import React from 'react'
import PropTypes from 'prop-types'

import Header from 'containers/header'
import Footer from 'components/layout/Footer'

const Default = (props) => {
  const { children: content } = props

  return (
    <div className='layout-default'>
      <Header />
      <div className='wrapper'>
        {content}
      </div>
      <Footer />
    </div>
  )
}

Default.propTypes = {
  children: PropTypes.node.isRequired
}

export default Default
