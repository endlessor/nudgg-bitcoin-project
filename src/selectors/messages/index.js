import { createSelector } from 'reselect'

const messagesSelector = state => state.messages

export const getLastMessage = createSelector(
  messagesSelector,
  (messages) => {
    const count = messages.length
    const hasMessages = !!count

    if (!hasMessages) return null

    const lastIndex = count - 1

    return messages[lastIndex]
  }
)