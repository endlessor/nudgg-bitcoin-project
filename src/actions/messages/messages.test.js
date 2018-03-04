import { isFSA } from 'flux-standard-action'

import {
  MESSAGES_ADD,
  messagesAdd,
  messagesAddSuccess,
  messagesAddError,
  messagesAddInfo
} from './index'

import {
  TYPE_SUCCESS,
  TYPE_ERROR,
  TYPE_INFO
} from 'data/messages'

describe(`Actions: ${MESSAGES_ADD}`, () => {
  test('should return true when the action is following flux standard', () => {
    const action = messagesAdd()

    expect(isFSA(action)).toBeTruthy()
  })

  test('should return an action containing the passed payload', () => {
    const message = {
      text: 'My message'
    }

    const expected = {
      type: MESSAGES_ADD,
      payload: {
        ...message
      }
    }

    expect(messagesAdd(message)).toEqual(expected)
  })
})

describe(`Actions: ${MESSAGES_ADD} - ${TYPE_SUCCESS}`, () => {
  test('should return true when the action is following flux standard', () => {
    const action = messagesAddSuccess()

    expect(isFSA(action)).toBeTruthy()
  })

  test('should return an action containing the passed payload', () => {
    const message = 'My message'

    const expected = {
      type: MESSAGES_ADD,
      payload: {
        text: message,
        type: TYPE_SUCCESS
      }
    }

    expect(messagesAddSuccess(message)).toEqual(expected)
  })
})

describe(`Actions: ${MESSAGES_ADD} - ${TYPE_ERROR}`, () => {
  test('should return true when the action is following flux standard', () => {
    const action = messagesAddError()

    expect(isFSA(action)).toBeTruthy()
  })

  test('should return an action containing the passed payload', () => {
    const message = 'My message'

    const expected = {
      type: MESSAGES_ADD,
      payload: {
        text: message,
        type: TYPE_ERROR
      }
    }

    expect(messagesAddError(message)).toEqual(expected)
  })
})

describe(`Actions: ${MESSAGES_ADD} - ${TYPE_INFO}`, () => {
  test('should return true when the action is following flux standard', () => {
    const action = messagesAddInfo()

    expect(isFSA(action)).toBeTruthy()
  })

  test('should return an action containing the passed payload', () => {
    const message = 'My message'

    const expected = {
      type: MESSAGES_ADD,
      payload: {
        text: message,
        type: TYPE_INFO
      }
    }

    expect(messagesAddInfo(message)).toEqual(expected)
  })
})