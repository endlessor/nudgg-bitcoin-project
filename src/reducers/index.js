import { combineReducers } from 'redux'

import { resetStoreMiddleware } from 'utils/redux'

import messages from './messages'
import user from './user'
import news from './news'
import signUp from './signUp'
import login from './login'
import forgottenPassword from './forgottenPassword'
import changePassword from './changePassword'
import addGoal from './addGoal'
import hub from './hub'
import contact from './contact'
import addAccount from './addAccount'

/*
Middleware to enable action batching
import { enableBatching } from 'utils/redux'

[reducerName]: enableBatching(reducer)
*/

const combinedReducers = combineReducers({
  messages,
  user,
  news,
  signUp,
  login,
  forgottenPassword,
  changePassword,
  addGoal,
  hub,
  contact,
  addAccount
})

export default resetStoreMiddleware(combinedReducers)
