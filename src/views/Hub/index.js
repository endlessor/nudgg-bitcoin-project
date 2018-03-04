import React from 'react'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Hub from './Hub'
import HubNoGoal from './HubNoGoal'
import HubBalance from './HubBalance'
import HubAccounts from './HubAccounts'
import HubBreakdown from './HubBreakdown'

const Routes = (props) => {
  const { match } = props
  const { url: baseUrl } = match

  return (
    <Switch>
      <Route exact path={baseUrl} component={Hub} />
      <Route path={`${baseUrl}/no-goal`} component={HubNoGoal} />
      <Route path={`${baseUrl}/balance`}>
        <Redirect to="/hub"/>
      </Route>
      <Route exact path={`${baseUrl}/accounts`} component={HubAccounts} />
      <Route path={`${baseUrl}/accounts/:accountId`} component={HubBreakdown} />
    </Switch>
  )
}

export default Routes
