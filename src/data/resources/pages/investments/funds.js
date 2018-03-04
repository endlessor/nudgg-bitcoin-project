import React from 'react'
import Heading from 'components/gui/Heading'
import Paragraph from 'components/gui/Paragraph'
import List from 'components/gui/List'
import ReadMore from 'components/common/ReadMore'

export default () => (
  <span>
    <Paragraph modifier={['pad-bottom']}>
      <i>Investment funds are a way of putting sums of money from many people into a large fund spread across many investments and managed by professionals.</i>
    </Paragraph>
    <Paragraph modifier={['pad-bottom']}>
      Like buying an investment ready-meal - You don’t need to know every ingredient just what it says on the box.<br/>
      Funds puts your money in the hands of an expert fund manager together with other investors. The fund manager invests according to its description. In the UK; you have access to 4 main types of Funds. They all have a lot in common with some nuances.<br/>
      Investing this way can be easier and less risky than buying shares in individual companies direct, and there are lots of funds to choose from.<br/><br/>
      Find out how investment funds work, the risks, and how to invest.
    </Paragraph>

    <Heading size={4} modifier='standard'>
      Are they Risky?
    </Heading>
    <Paragraph>
      Different funds take different levels of risk.<br/><br/>

      Some are relatively low risk – for example they might invest mostly in cash.<br/>
      Others are very risky, investing in new, uncertain companies or markets with the hope of higher or faster growth.<br/><br/>

      Before you choose any fund, be sure it offers the right level of risk for you.<br/>

      Whether you’re buying through an adviser or doing it yourself, always consider your:
    </Paragraph>
    <List items={[
      'Risk appetite',
      'Financial situation',
      'Investment goals',
      'Knowledge of the fund'
    ]} modifier={['disc', 'standard']}/>
    <Paragraph modifier={['pad-bottom']}>
      And make sure to check the risk profile of the fund suits you.
    </Paragraph>

    <Heading size={4} modifier='standard'>
      Ways of investing in funds
    </Heading>
    <Paragraph>
      You can invest in funds directly, or buy them as via an investment platform. Funds can be held in both:
    </Paragraph>
    <List items={[
      'Stocks and shares ISA',
      'General dealing account'
    ]} modifier={['disc', 'standard']}/>
    <Paragraph>
      Always check:
    </Paragraph>
    <List items={[
      'The full level of fees',
      'That you’re comfortable with the risk profile',
      'That the fund meets your investment objectives',
      'That the investment firm is authorised by the Financial Conduct Authority'
    ]} modifier={['disc', 'standard']}/>

    <Heading size={4} modifier='standard'>
      ROBOs vs. DIY
    </Heading>
    <table style={{textAlign: 'left'}}>
      <tr>
        <th></th>
        <th style={{width: '40%'}}>Robos</th>
        <th style={{width: '40%'}}>DIY</th>
      </tr>
      <tr>
        <td><b>TIME</b></td>
        <td>Take up little time</td>
        <td>Lots of time for research & decision making</td>
      </tr>
      <tr>
        <td><b>RISK</b></td>
        <td>Well diversified portfolio</td>
        <td>Harder to diversify with the same amount of money. Generally, requires larger sum</td>
      </tr>
      <tr>
        <td><b>COST*</b></td>
        <td>Cheapish but still management fees attached (0.75-1%)</td>
        <td>Just a transaction cost & Fund management fees</td>
      </tr>
      <tr>
        <td><b>UX</b></td>
        <td>User experience tends to be slick & easy.</td>
        <td>Some are good, some are poor. Targeted at the senior generation with the big bucks</td>
      </tr>
      <tr>
        <td><b>TRANSPARENCY</b></td>
        <td>Difficult to always know where your money is and where it is going</td>
        <td>You know what is flying and what is flopping. And WHY!</td>
      </tr>
    </table><br/>
    <Paragraph modifier={['pad-bottom']}>
      <i>*funds (which robos buy) charge an internal management fee</i>
    </Paragraph>

    <Heading size={4} modifier='standard'>
      Funds, Unit Trusts, Investment trusts….I’m confused
    </Heading>
    <Paragraph>
      The most common way to invest into professionally managed investment funds is via:
    </Paragraph>
    <List items={[
      'Investment trusts',
      'Unit Trusts',
      'Exchange Traded funds',
      'Tracker funds'
    ]} modifier={['disc', 'standard']}/>
    <Paragraph modifier={['pad-bottom']}>
      Don’t panic: we can talk you through this nice and quickly.<br/>
      Unit trusts and Open-Ended Investment Companies (OEICs) are professionally managed collective investment funds. Managers pool money from many investors and buy shares, bonds, property or cash assets and other investments.
    </Paragraph>

    <Heading size={4} modifier='standard'>
      Types of Funds
    </Heading>
    <Paragraph modifier={['pad-bottom']}>
      <b>Unit Trust</b>
      <ReadMore preview='Open-ended investment product...'>
        Open-ended investment product - pooling your money with other investors into a single fund, which is managed by a fund manager. You buy units with the investment you make in a unit trust.
      </ReadMore>
    </Paragraph>

    <Paragraph modifier={['pad-bottom']}>
      <b>Investment Trust</b>
      <ReadMore preview='Investment trusts are effectively companies that hold assets....'>
        Investment trusts are effectively companies that hold assets such as shares. They are run by a fund manager and is backed by an independent board acting in the best interests of shareholders. The company itself is listed on the London Stock Exchange. While investment trusts predominantly invest in the shares of other companies, they can also invest in other financial assets.
      </ReadMore>
    </Paragraph>

    <Paragraph modifier={['pad-bottom']}>
      <b>Exchange-Traded Funds</b>
      <ReadMore preview='An exchange traded fund, is a marketable security that tracks an index...'>
        An exchange traded fund, is a marketable security that tracks an index, a commodity, bonds, or a basket of assets like an index fund. Unlike mutual funds, an ETF trades like a common stock on a stock exchange.
      </ReadMore>
    </Paragraph>

    <Paragraph modifier={['pad-bottom']}>
      <b>(Index) Tracker Funds</b>
      <ReadMore preview='The term "tracker fund" comes from the tracking function...'>
        The term "tracker fund" comes from the tracking function of index fund management, which attempts to replicate the performance of a market index. Investing in an index fund is a form of passive investing.
      </ReadMore>
    </Paragraph>
  </span>
)
