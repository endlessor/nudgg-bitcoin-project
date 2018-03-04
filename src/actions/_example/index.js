/*
All actions are following the flux standard (FSA).
The action name is a combination of the view name and the action name (Example: NEWS_ADD_FILTER).
Read more here: https://github.com/acdlite/flux-standard-action

DELETE THE COMMENTS WHEN USING THIS BOILERPLATE
*/

// Normal actions
export const VIEW_ACTION = 'VIEW_ACTION'

// Services as actions

export const viewAction = (value) => ({
  type: VIEW_ACTION,
  payload: {
    value
  }
})