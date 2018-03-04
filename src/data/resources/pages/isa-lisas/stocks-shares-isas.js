import React from 'react'
import Heading from 'components/gui/Heading'
import Paragraph from 'components/gui/Paragraph'
import List from 'components/gui/List'

export default () => (
  <span>
    <Paragraph>
      You can pay a total of £20,000 a year into an ISA in the current tax year.
    </Paragraph>
    <List items={[
      'You can pay your whole allowance of £20,000 into a Stocks and shares ISA, a Cash ISA, or a combination of these.',
      'Your yearly ISA allowance expires at the end of the tax year and any unused allowance will be lost. It can’t be rolled over to the following year.',
      'You can choose between making a lump sum investment and/or making regular or ad hoc contributions throughout the tax year.',
      'Any increase in value of the investments in your Stocks and shares ISA is free of Capital Gains Tax.',
      'Most income is tax-free – find out more in the later section on tax.',
      'You can only pay into one Stocks and shares ISA in each tax year, but you can open a new ISA with a different provider each year if you want to. You don’t have to use the same provider for your Cash ISA, if you have one.',
      'It’s worth shopping around to make sure you find a ISA that suits you. Compare any charges for the ISA wrapper and the range of investments you can put inside.'
    ]} modifier={['disc', 'standard']} />
  </span>
)



