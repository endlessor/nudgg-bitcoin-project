import React from 'react'
import Heading from 'components/gui/Heading'
import Paragraph from 'components/gui/Paragraph'
import List from 'components/gui/List'

export default () => (
  <span>
    <Heading size={5} modifier={['font-roboto', 'font-light', 'standard']}>
      Robo-advisors are a class of financial adviser that provide financial advice or portfolio management online with minimal human intervention.
    </Heading>
    <Paragraph modifier={['pad-bottom']}>
      They provide digital financial advice based on mathematical rules or algorithms. These algorithms are executed by software and thus financial advice do not require a human advisor. The software utilizes its algorithms to automatically allocate, manage and optimize clients’ assets.
    </Paragraph>

    <Heading size={4} modifier='standard'>
      Is it right for me?
    </Heading>
    <Paragraph>
      Robo’s are most appropriate for tech-savvy people with limited time on their hands but want some exposure to the stock market.
    </Paragraph>
    <Paragraph>
      You are putting your money in the hands of a ‘robotic fund manager’ who builds a portfolio of funds for you – in general you will pay a management fee of 0.65-1% from your lump sum.
    </Paragraph>
    <List items={[
      'You have at least 3 years without the needing access to the money',
      'Comfortable with some risk',
      'Happy to completely delegate the investment selection to an expert.'
    ]} modifier={['disc', 'standard']} />
  </span>
)
