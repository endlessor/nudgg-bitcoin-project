import React, { Component } from 'react'

import {
  Grid,
  Col
} from 'react-bootstrap'

import View from 'components/other/View'
import { OUR_STORY as title } from 'data/titles'

import Heading from 'components/gui/Heading'
import Separator from 'components/gui/Separator'
import Paragraph from 'components/gui/Paragraph'
import Link from 'components/gui/Link'

import FAQ from 'components/static/FAQ'

class OurStory extends Component {
  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <View title={title} className='static our-story'>
        <Grid>
          <Col sm={8} smPush={1}>
            <Heading size={2}>
              {title}
            </Heading>
            <Separator className='static__separator' />
            <div className='static__section'>
              <Heading size={4}>
                Our Mission
              </Heading>
              <Paragraph>
                nudgg is here to help more people realise their goals. We want to be the first port of call for a generation when it comes to making financial decisions that affect their lives.
              </Paragraph>
              <Paragraph>
                nudgg is built by consumers, for consumers.
              </Paragraph>
            </div>
            <div className='static__section'>
              <Heading size={4}>
                100% impartial. 100% free.
              </Heading>
              <Paragraph>
                We don’t have ANY bias to any service provider, bank or insurance company.
              </Paragraph>
              <Paragraph>
                So when it comes to highlight services – your nudgg is independent & free to you. We channel all our energy into delivering the most personalised solutions for you.
              </Paragraph>
            </div>
            <div className='static__section'>
              <Heading size={4}>
                What is nudgg
              </Heading>
              <Paragraph>
                nudgg is an impartial money platform, sitting above Fintechs & financial services.
              </Paragraph>
              <Paragraph>
                nudgg makes it incredibly simple for you to clearly understand, manage & improve your finances - using nudgg hub, nudgg news & nudgg resources.
              </Paragraph>
              <Paragraph>
                Available on mobile, Desktop and as an App (iOS & Android).
              </Paragraph>
              <Paragraph>
                And the best part, it’s Free.
              </Paragraph>
            </div>
            <div className='static__section'>
              <Heading size={4}>
                nudgg hub
              </Heading>
              <Paragraph>
                nudgg hub is an amazing tool that allows you to securely view all your accounts in one place & directly compare them against options in the market. We can highlight anything from cash savings to wealth managers.
              </Paragraph>
            </div>
            <div className='static__section'>
              <Heading size={4}>
                nudgg news
              </Heading>
              <Paragraph>
                nudgg news delivers a tailored news feed with the most relevant articles to your personal position. Awesome content made up of some of the industries most in-tune writers.
              </Paragraph>
            </div>
            <div className='static__section'>
              <Heading size={4}>
                nudgg resources
              </Heading>
              <Paragraph>
                nudgg resources is where we deliver original content explaining all the must-knows when it comes to money. We won’t waste your time either – its sharp & snappy.
              </Paragraph>
              <Paragraph>
                nudgg is built to bring value, convenience & easy navigation through the financial landscape. Its your all-in-one money management toolkit.
              </Paragraph>
              <Paragraph>
                We work with Yodlee to link your accounts. Yodlee are a huge specialist account aggregation company supervised by the US Banking regulators, they provide a trusted service to 850 organisations throughout the world & have a secure 16-year track record.
              </Paragraph>
              <Paragraph>
                nudgg has been inspired by ‘nudge theory’. We won’t bore you with the details but if you’re really interested, take a closer look here:
              </Paragraph>
              <Paragraph>
                <Link to='https://www.theguardian.com/commentisfree/2017/oct/10/behavioural-economics-richard-thaler-nudge-nobel-prize-winner' isExternal={true} target='_blank' modifier='color-aqua'>
                  https://www.theguardian.com/commentisfree/2017/oct/10/behavioural-economics-richard-thaler-nudge-nobel-prize-winner
                </Link>
              </Paragraph>
            </div>
            <div className='static__section'>
              <Heading size={4}>
                Why nudgg now?
              </Heading>
              <Paragraph>
                The two founders (Tom & Charlie) were fed up with the question from friends – <span className='italic'>what should I do with my savings?’</span>
              </Paragraph>
              <Paragraph>
                The reality is, money is not ‘One size fits all’.
              </Paragraph>
              <Paragraph>
                One of the incredible things about the UK is our Fintech scene. The emergence of so many outstanding specialist services from Banks, to digital wealth managers. It’s a great thing for us as consumers but it does mean differentiating choice is a bigger challenge.
              </Paragraph>
            </div>
            <div className='static__section'>
              <Heading size={4}>
                What today’s world means tomorrow:
              </Heading>
              <ul className='list list--disc'>
                <li>more & more of us are changing jobs more frequently - so our pensions are not going to be as juicy as previous generations. Sorry.</li>
                <li>We are waiting & saving for longer to own a home. Average age of first time buyer in the UK is 30 years old. Hmmm…That’s 8-10 years to get smart with our finances and moves things forward.</li>
              </ul>
              <Paragraph>
                All this means we now have to take control of our finances ourselves. nudgg provides the first port of call for customers to make smarter choices.
              </Paragraph>
              <Paragraph>
                Scanning around for the right solution is time-consuming & pretty boring, so nudgg walks you through the process by bringing it all to your fingertips. We care about delivering real clarity on what is best for you.
              </Paragraph>
            </div>
            <div className='static__section'>
              <Heading size={4}>
                Who’s behind nudgg?
              </Heading>
              <Paragraph>
                nudgg was founded & built by Tom Richardson, Charlie Richardson and Jacob Beckett. Tom & Charlie were working in investments for more than 10 years and Jacob founded Vitamin London, a Digital Product agency.
              </Paragraph>
            </div>
            <div className='static__section'>
              <Heading size={3}>
                FAQs
              </Heading>
              <Separator className='static__separator' />
              <FAQ title='How we make money' isVisible={true}>
                <ol>
                  <li>You select a service you’d like to work with</li>
                  <li>Go to that company’s site.</li>
                  <li>You get the deal you want.</li>
                  <li>That company pays us a fee.</li>
                </ol>
                <div className='static__section'>
                  <Paragraph>
                    We use the money we make to build a better, more personalised service to you. The companies we work with on nudgg – the banks, Fx, digital wealth managers – pay us a fee when you choose from our results.
                  </Paragraph>
                  <Paragraph>
                    How we get paid & how much depends on what product & service you are checking out. Sometimes we get paid a fee when you switch or occasionally when you just click through.
                  </Paragraph>
                  <Paragraph>
                    We can’t go big on the billboards or splash the TV screens so we hope the small fee, travels far. Share the love, share the deals.
                  </Paragraph>
                </div>
              </FAQ>
            </div>
            <div className='static__section'>
              <FAQ title='Keeping your data Locked up'>
                <Paragraph>
                  This is your personal info. Your data. Feeling safe & secure online is our no.1 priority. That’s why we work with some of the biggest & best security companies in the world.
                </Paragraph>
                <Paragraph>
                  Military-grade security.
                </Paragraph>
              </FAQ>
            </div>
            <div className='static__section'>
              <FAQ title='We protect you'>
                <Paragraph>
                  We have a strict system in protecting your information. Our privacy policy covers all the nooks & crannies out there – including what we collect, what we pass on and YOUR RIGHTS.
                </Paragraph>
              </FAQ>
            </div>
            <div className='static__section'>
              <FAQ title='Using your data'>
                <Paragraph>
                  When you use nudgg and create your account – we save that info.
                </Paragraph>
                <Paragraph>
                  We are constantly updating our security protection to keep you secure. We have other security companies testing our defences all the time, so nothing gets through.
                </Paragraph>
              </FAQ>
            </div>
            <div className='static__section'>
              <FAQ title='Sharing your details'>
                <Paragraph>
                  As part of personalising the service and bringing you value, we pass on your information to the companies we work with. From our perspective, it saves you repeating yourself with your application. It is only the bits they really need.
                </Paragraph>
              </FAQ>
            </div>
            <div className='static__section'>
              <FAQ title="How we’re regulated?">
                <Paragraph>
                  Financial Conduct Authority -  TBC
                </Paragraph>
                <Paragraph>
                  OFGEM
                </Paragraph>
              </FAQ>
            </div>
          </Col>
        </Grid>
      </View>
    )
  }
}

export default OurStory
