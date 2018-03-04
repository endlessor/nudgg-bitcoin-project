import React from 'react'
import Heading from 'components/gui/Heading'
import Paragraph from 'components/gui/Paragraph'
import List from 'components/gui/List'

export default () => (
  <span>
    <Heading size={4} modifier='standard'>
      Lifetime ISAs – how they work
    </Heading>
    <Paragraph>
      Lifetime ISAs (also known as LISAs) are a new type of ISA created to help people save for their first home or retirement. If you take out a Lifetime ISA, the Government will give you a bonus worth 25% of what you pay in, up to a set limit, every tax year. This guide will help you understand whether taking out a Lifetime ISA is the best option for you.
      <br />
      <br />
      <br />
    </Paragraph>

    <Heading size={4} modifier='standard'>
      Using a Lifetime ISA to buy your first home
    </Heading>
    <Paragraph>
      If you want to use a Lifetime ISA to buy a home, there are a few restrictions you need to keep in mind:
    </Paragraph>
    <List items={[
      'Only first time buyers can use Lifetime ISAs to buy a home. That means you can’t own, or have owned, a home in the UK or anywhere in the world.',
      'You will need to be buying a home for less than £450,000.',
      'You must be buying a home you plan to live in. The scheme is not for buying a home you want to rent out, or a holiday home.',
      'You must use a traditional repayment mortgage.'
    ]} modifier={['disc', 'standard']} />

    <Heading size={4} modifier='standard'>
      <br />
      Using a Lifetime ISA for retirement?
    </Heading>
    <Paragraph>
      Don’t think having a Lifetime ISA means you shouldn’t pay into your pension. If your employer matches pension contributions it is well worth paying into your Workplace Pension Scheme.
    </Paragraph>
    <Paragraph>
      You can make full or partial withdrawals from your Lifetime ISA, without paying a fee, when you turn 60.
    </Paragraph>
    <Paragraph>
      You won’t pay any tax and can use the money for whatever you want.
      <br />
      <br />
      <br />
    </Paragraph>

    <Heading size={4} modifier='standard'>
      Help to Buy ISAs
    </Heading>
    <Paragraph>
      If you have a Help to Buy ISA, or are thinking of getting one, remember you can only use them to buy homes worth less than £250,000 outside of London (the limit is £450,000 in London). Lifetime ISAs can be used to buy homes worth up to £450,000, both in and outside of London.
      <br />
      <br />
      <br />
    </Paragraph>

    <Heading size={4} modifier='standard'>
      Taking money out of your Lifetime ISA
    </Heading>
    <Paragraph>
      During the 2017/18 tax year, you can take money out of your Lifetime ISA without having to pay a fee, but only if you take all your money out and shut the account.
You can open another Lifetime ISA later in the year.
As of April 2018, you will be able to take money out of a Lifetime ISA, but you will have to pay 25% of the amount withdrawn.
For example, if you take out £1,000, you will have to pay £250, which means you’ll lose any government bonus.
    </Paragraph>
  </span>
)


