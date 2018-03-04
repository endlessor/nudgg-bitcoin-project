import React from 'react'
import Heading from 'components/gui/Heading'
import Paragraph from 'components/gui/Paragraph'
import List from 'components/gui/List'

export default () => (
  <span>
    <Heading size={5} modifier={['font-roboto', 'font-light', 'standard']}>
      Cash ISAs (sometimes called NISAs) are savings accounts that pay interest that is free of income tax.
    </Heading>
    <List items={[
      'You want to earn tax-free interest on your cash savings',
      'You are a UK resident for tax purposes',
      'You are aged 16 or over (junior ISAs are also available)'
    ]} modifier={['disc', 'standard']} />
  </span>
)


