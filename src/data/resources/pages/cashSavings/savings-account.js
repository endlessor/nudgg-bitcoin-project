import React from 'react'
import Heading from 'components/gui/Heading'
import Paragraph from 'components/gui/Paragraph'
import List from 'components/gui/List'

export default () => (
  <span>
    <Heading size={5} modifier={['font-roboto', 'font-light', 'standard']}>
      Time to take your money seriously. You’re thinking of stashing some away for a bigger plan or ambition? (in box)
    </Heading>
    <Paragraph modifier={['pad-bottom']}>
      Savings accounts can be built up slowly or in one fell swoop from your Current account.
    </Paragraph>
    <Paragraph modifier={['pad-bottom']}>
      Your Savings account can be either:
    </Paragraph>
    <List items={[
      'Individual Savings Account (ISA)',
      'Normal savings account.'
    ]} modifier={['disc', 'standard']} />
    <Paragraph modifier={['pad-bottom']}>
      Have a quick read to discover suits you or use a nudgg to help you in the right direction.
    </Paragraph>

    <Heading size={4} modifier='standard'>
      LISA
    </Heading>
    <Paragraph>
      A LISA is new and offers a fantastic opportunity if it suits your needs:
    </Paragraph>
    <List items={[
      'For those aged 18 to 39',
      'Looking to buy your 1st Home or save until you’re 60',
      'Save up to £4,000/tax a year (Lump sum or regular contribution)',
      'The government adds a 25% bonus on top of your position',
    ]} modifier={['disc', 'standard']} />
    <Paragraph>
      i.e. If you save £1,000 into a LISA – you’ll have £1,250
    </Paragraph>
    <Paragraph>
      Not that many at the moment – but Check out some of the best Lifetime ISAs here
      <br />
      <br />
      <br />
    </Paragraph>
    <Heading size={4} modifier='standard'>
      Bank savings account
    </Heading>
    <Paragraph>
      If you don’t qualify for a Lifetime ISA – max out some of the best Bank savings accounts. Banks offer some attractive rates for new customers.
    </Paragraph>
    <Paragraph>
      A number of bank savings accounts are more generous than ISAS & Easy-access accounts. If you’re prepared to switch it up – the rates are great. Keep an eye on the rate but a close eye on the length of the rate as well.
    </Paragraph>
    <Paragraph>
      Make sure you keep an eye out for other charges.
    </Paragraph>
    <Paragraph>
      Check out some of the best bank savings accounts here
      <br />
      <br />
      <br />
    </Paragraph>

    <Heading size={4} modifier='standard'>
      Regular savings
    </Heading>
    <Paragraph>
      Once you’ve sorted your savings & current account, starting trickling some cash into a small pot which pays great. These can pay attractive interest but on small amounts. You will need to set up the direct debit from your current account.
    </Paragraph>
    <Paragraph>
      Make sure you keep an eye out for other charges.
    </Paragraph>
    <Paragraph>
      Check out some of the best regular savings accounts here
      <br />
      <br />
      <br />
    </Paragraph>

    <Heading size={4} modifier='standard'>
      Fixed rate Cash ISA
    </Heading>
    <List items={[
      'Current account',
      'Bank Savings',
      'Regular savings'
    ]} modifier={['disc', 'standard']} />
    <Paragraph>
      Once you have ticked all the above boxes - move the money you don’t need into a Fixed rate cash ISA.
    </Paragraph>
    <Paragraph>
      A Cash ISA is a savings account where interest isn’t taxed. Anyone above 16 years old can put up to £20,000 into an ISA each Tax year (April 6- Apr 5). If you touch the cash during this period, you’ll probably lose your interest.
    </Paragraph>
    <Paragraph>
      Make sure you keep an eye out for other charges.
    </Paragraph>
    <Paragraph>
      Check out some of the best Fixed Rate Cash ISAs here
      <br />
      <br />
      <br />
    </Paragraph>

    <Heading size={4} modifier='standard'>
      Easy access Cash ISA
    </Heading>
    <Paragraph>
      If you think you'll need access to your cash but you want to keep it in an ISA just in case… then easy access is Cash ISA fits the bill. No withdrawal restrictions - get your cash when you want it.
    </Paragraph>
    <Paragraph>
      A Cash ISA is a savings account where interest isn’t taxed. Anyone above 16 years old can put up to £20,000 into an ISA each Tax year (April 6- Apr 5).
    </Paragraph>
    <Paragraph>
      Make sure you keep an eye out for other charges.
    </Paragraph>
    <Paragraph>
      Check out some of the best Easy Access Cash ISAs here
      <br />
      <br />
      <br />
    </Paragraph>

    <Heading size={4} modifier='standard'>
      Fixed rate savings
    </Heading>
    <Paragraph>
      Still got money left? Happy to lock it away without having a nibble? Fixed rate savings can be attractive options.
    </Paragraph>
    <Paragraph>
      Make sure you keep an eye out for other charges.
    </Paragraph>
    <Paragraph>
      Check out some of the best Fixed Rate Savings accounts here
      <br />
      <br />
      <br />
    </Paragraph>

    <Heading size={4} modifier='standard'>
      Easy access savings
    </Heading>
    <Paragraph>
      If you think you'll need access to your cash but looking for tastier interest on your cash – Easy access savings are an option. Truth is, it is bottom of the pile for a reason.
    </Paragraph>
    <Paragraph>
      No withdrawal restrictions - get your cash when you want it. Make sure you keep an eye out for other charges.
    </Paragraph>
    <Paragraph>
      A Cash ISA is a savings account where interest isn’t taxed. Anyone above 16 years old can put up to £20,000 into an ISA each Tax year (April 6- Apr 5).
    </Paragraph>
    <Paragraph>
      Check out some of the best Easy Access Cash ISAs here
    </Paragraph>
  </span>
)


