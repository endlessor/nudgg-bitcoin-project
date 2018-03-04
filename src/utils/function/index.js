import React from 'react'

import { toString } from 'utils/object'

const FUNCTION_PROTO = '[object Function]'

export const isFunction = (value) => {
  return toString.call(value) === FUNCTION_PROTO
}

export const wordpresstransformFunction = (data) => {
  return data.map((item) => {
    return Object.assign({}, {
      id: item.id,
      image: item.imageUrl,
      title: item.title,
      type: item.tags && item.tags.join(', '),
      date: item.createdAt && item.createdAt.slice(0, 10),
      author: item.filters && item.filters.join(', '),
      text: htmlContent(item.content),
      theme: item.filters.length > 0 ? item.filters[0].toLowerCase() : null
    })
  })
}

export const htmlContent = (data) => {
  return <span dangerouslySetInnerHTML={{ __html: data }}></span>
}
