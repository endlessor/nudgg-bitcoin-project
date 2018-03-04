import React from 'react'
import Heading from 'components/gui/Heading'
import Paragraph from 'components/gui/Paragraph'
import List from 'components/gui/List'

export default () => (
  <span>
    <Paragraph modifier={['pad-bottom']}>Shares are one of the four main investment types, along with cash, bonds and property. They carry risk, but they can offer the highest returns. Here you can find out what they are, how to invest in shares and what risks are involved.<br/>
    If you take the right approach, it shouldn’t be the rollercoaster people always talk about. Shares (also known as equities) are like tiny fractions of a company. If you own one, you own a little bit of the company and a proportion of the company’s value.<br/>
    Before you make any decision about buying or selling shares or funds, find out as much as you can about the company.</Paragraph>

    <Paragraph modifier={['pad-bottom']}>Shares from big companies are traded on the London Stock Exchange (LSE) – you’ll hear these called ‘listed shares’ – and smaller companies are traded on the Alternative Investments Market (AIM).</Paragraph>

    <Heading size={4}>Buying shares can be risky</Heading>
    <Paragraph modifier={['pad-bottom']}>
      The price of a share will go up or down if people change their minds about how well the company is performing, or about the economic conditions it operates in.<br/><br/>
      If a share price reduces then the value of your investment reduces as well.<br/><br/>
      However shares have historically provided better returns over the long run than the other main asset classes: property, cash or bonds.<br/>Holding shares in just one company is very high risk.<br/><br/>
      If that company gets into difficulties then you could lose some or all of your money.<br/><br/>
      You can spread your risk by diversifying – buying shares in a variety of companies, and investing in other assets or countries – or by putting your money into pooled investments like unit trusts or OEICs.<br/><br/>
      If you’re well diversified and invest long term (for more than five years) you can keep risk down, and have a chance of good returns.
    </Paragraph>

    <Heading size={4}>Investing in small companies is especially risky</Heading>
    <Paragraph>
      The shares of smaller companies are sometimes known as ‘penny shares’.<br/>
      They don’t meet the requirements for a full listing on the London Stock Exchange (they’re ‘unlisted companies’), so they’re bought and sold on other markets, like the Alternative Investment Market (AIM) and the Plus Quoted Market.
    </Paragraph>
    <List items={[
      'If you want to sell, it can be hard to find buyers for some shares – you might be stuck with the shares, or have to sell at a much lower price than you paid for them.',
      'There might not be much information available - so it could be hard to assess the business and its finances and predict if it will do well.'
    ]} modifier={['disc', 'standard']}/>
    <Paragraph modifier={['pad-bottom']}>
      Think carefully before you invest in a small company. Is the investment right for your needs? What are the risks, and what might they mean for you?
    </Paragraph>

    <Heading size={4}>Investing in shares through a fund</Heading>
    <Paragraph modifier={['pad-bottom']}>
      In a pooled (collective) investment, lots of people put their money into a fund.<br/>
      The fund is invested in shares – or other assets, like cash, property or bonds – chosen by a professional fund manager.<br/>
      You can invest in funds through many banks, a fund manager, a financial adviser or a traditional or online broker.<br/>
    </Paragraph>


  </span>
)
