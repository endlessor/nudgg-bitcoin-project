import {
  NAME,
  EMAIL
} from 'data/regex'

export const validation = {
  name: NAME,
  email: EMAIL,
  subject: NAME,
  body: NAME
}

export const errors = {
  // name: 'Please enter a valid name.',
  // email: 'Please enter a valid email.',
  // subject: 'Please enter a valid subject.',
  body: 'Please enter a valid content.'
}