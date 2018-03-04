import { inputChangeHOC } from 'actions/common'

import { contactService } from 'services/contact'

// Normal actions
export const CONTACT_INPUT_CHANGE = 'CONTACT_INPUT_CHANGE'

// Services as actions
export const CONTACT_SUBMIT = 'CONTACT_SUBMIT'

export const inputChange = inputChangeHOC(CONTACT_INPUT_CHANGE)

export const submit = (fields) => ({
  type: CONTACT_SUBMIT,
  payload: contactService(fields)
})
