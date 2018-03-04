import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import SignUp from './SignUp'
import SignUpActivate from './SignUpActivate'
import SignUpSuccess from './SignUpSuccess'
import PageNotFound from 'views/PageNotFound'

const Routes = (props) => {
  const { match } = props
  const { url: baseUrl } = match

  return (
    <Switch>
      <Route exact path={baseUrl} component={SignUp} />
      <Route path={`${baseUrl}/activate`} component={SignUpActivate} />
      <Route path={`${baseUrl}/success/:token`} component={SignUpSuccess} />
      <Route component={PageNotFound} />
    </Switch>
  )
}

export default Routes