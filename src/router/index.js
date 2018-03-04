import React from 'react'

import {
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom'

import Authentication from 'containers/Authentication'
import PublicRoute from 'components/routes/PublicRoute'
import PrivateRoute from 'components/routes/PrivateRoute'

import Layout from 'layouts/Layout'
import ScrollTop from '../components/other/ScrollTop'

import Home from '../views/Home'
import SignUp from 'views/SignUp'
import Login from 'views/Login'
import ForgottenPassword from 'views/ForgottenPassword'
import ChangePassword from 'views/ChangePassword'
import AddGoal from 'views/AddGoal'
import Hub from 'views/Hub'
import News from 'views/News'
import Resources from 'views/Resources'
import Partners from 'views/Partners'

// Static pages
import OurStory from 'views/static/OurStory'
// import Press from 'views/static/Press'
import Careers from 'views/static/Careers'
import Contact from 'views/static/Contact'
import PrivacyPolicies from 'views/static/PrivacyPolicies'
import Regulations from 'views/static/Regulations'
import Terms from 'views/static/Terms'

// Specific pages
import PageNotFound from 'views/PageNotFound'

const router = (
  <BrowserRouter>
    <Layout>
      <Authentication>
        <ScrollTop>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/sign-up' component={SignUp} />
            <PublicRoute path='/login' component={Login} />
            <Route path='/forgotten-password' component={ForgottenPassword} />
            <Route path='/change-password/:token' component={ChangePassword} />
            <PrivateRoute path='/add-goal' component={AddGoal} />
            <PrivateRoute path='/hub' component={Hub} />
            <Route path='/news' component={News} />
            <Route path='/resources' component={Resources} />
            <Route path='/partners' component={Partners} />
            {/* Static pages */}
            <Route path='/our-story' component={OurStory} />
            {/* <Route path='/press' component={Press} /> */}
            <Route path='/careers' component={Careers} />
            <Route path='/contact' component={Contact} />
            <Route path='/privacy-policies' component={PrivacyPolicies} />
            <Route path='/regulations' component={Regulations} />
            <Route path='/terms' component={Terms} />
            {/* Not found */}
            <Route path='/404' component={PageNotFound} />
            <Route component={PageNotFound} />
          </Switch>
        </ScrollTop>
      </Authentication>
    </Layout>
  </BrowserRouter>
)

export default router
