import {
  TYPE_SUCCESS,
  TYPE_ERROR,
  TYPE_INFO
} from 'data/messages'

export const MESSAGES_ADD = 'MESSAGES_ADD'

export const messagesAdd = ({ text, type } = {}) => ({
  type: MESSAGES_ADD,
  payload: {
    text,
    type
  }
})

export const messagesAddSuccess = (message) => messagesAdd({
  text: message,
  type: TYPE_SUCCESS
})

export const messagesAddError = (message) => messagesAdd({
  text: message,
  type: TYPE_ERROR
})

export const messagesAddInfo = (message) => messagesAdd({
  text: message,
  type: TYPE_INFO
})