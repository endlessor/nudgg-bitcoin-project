import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import ForgottenPassword from './ForgottenPassword'
import ForgottenPasswordSuccess from './ForgottenPasswordSuccess'
import PageNotFound from 'views/PageNotFound'

const Routes = (props) => {
  const { match } = props
  const { url: baseUrl } = match

  return (
    <Switch>
      <Route exact path={baseUrl} component={ForgottenPassword} />
      <Route path={`${baseUrl}/success`} component={ForgottenPasswordSuccess} />
      <Route component={PageNotFound} />
    </Switch>
  )
}

export default Routes