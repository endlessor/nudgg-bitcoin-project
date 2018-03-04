import moment from 'moment'

import {
  NAME,
  DATE_OF_BIRTH,
  EMAIL,
  PHONE,
  PASSWORD
} from 'data/regex'

import {
  DATE_FORMAT,
  MIN_AGE
} from 'data/other'

import { isChecked } from 'utils/other'

const validateDate = (dateOfBirth) => {
  const isValid = DATE_OF_BIRTH.test(dateOfBirth)

  if (!isValid) return false

  const now = moment()
  const date = moment(dateOfBirth, DATE_FORMAT)
  const diff = now.diff(date, 'years')

  return diff >= MIN_AGE
}

export const validation = {
  firstName: NAME,
  lastName: NAME,
  dob: validateDate,
  email: EMAIL,
  phoneNumber: PHONE,
  password: PASSWORD,
  terms: isChecked
}

export const errors = {
  firstName: 'Please enter a valid first name.',
  lastName: 'Please enter a valid last name.',
  dob: `Please enter a valid date in format ${DATE_FORMAT}.`,
  email: 'Please enter a valid email address.',
  phoneNumber: 'Please enter a valid phone number.',
  // password: 'Please enter a valid password.',
  terms: 'Please read and agree to the Terms & Conditions.'
}