import React, { Component } from 'react'

import {
  Grid,
  Col
} from 'react-bootstrap'

import View from 'components/other/View'
import { PRIVACY_POLICIES as title } from 'data/titles'

import Heading from 'components/gui/Heading'
import Separator from 'components/gui/Separator'
import Paragraph from 'components/gui/Paragraph'

class PrivacyPolicies extends Component {
  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <View title={title} className='static privacy-policies'>
        <Grid>
          <Col sm={8} smPush={1}>
            <Heading size={2}>
              {title}
            </Heading>
            <Separator className='static__separator' />
            <div className='static__section'>
              <Heading size={4}>
                1. Introduction
              </Heading>
              <Paragraph>
                Nudgg is an impartial money platform.
              </Paragraph>
              <Paragraph>
                Below we explain what personal data is, which personal data we process and for which purposes.
              </Paragraph>
            </div>
            <div className='static__section'>
              <Heading size={4}>
                2. Personal data
              </Heading>
              <Paragraph>
                Personal data is data from which you are identifiable and which relates to you, ie data that tells us something about you, such as where you live. For instance, your name, address, birth date and telephone number.
              </Paragraph>
              <Paragraph>
                If you contact us, we will collect and use personal data such as your email address for the purposes described below. We will also collect the information that you provide when you register to use our site, provide feedback on Nudgg, participate in discussion boards or other social media functions on our site and when you report a problem with our site.
              </Paragraph>
            </div>
            <div className='static__section'>
              <Heading size={4}>
                3. Legitimate purposes
              </Heading>
              <Paragraph>
                We process your personal data with the utmost care. The legitimate purposes we process your personal data for are:
              </Paragraph>
              <Paragraph>
                to inform you about the developments of our mobile application and contact you by email when the Nudgg mobile application is ready to be launched;
                if we require test users while the mobile application is still under development;
                to help us to identify people like you that might enjoy Nudgg; or
                to run competitions that you enter.
              </Paragraph>
            </div>
            <div className='static__section'>
              <Heading size={4}>
                4. Data transfer to third parties
              </Heading>
              <Paragraph>
                Where a disclosure is required by law or legal requirement, we may be required to provide personal data to third parties, such as regulators or law enforcement bodies, for example for fraud protection purposes.
              </Paragraph>
              <Paragraph>
                We may use third parties, so-called data processors, (which could include members of the NUDGG Group) to perform our services, support our operations, and to assist us with the legitimate purposes set out in section 3 and so we will transfer your personal data to these processors. Before we do so, we will ensure that our data processors have made contractual promises to protect your personal data.
              </Paragraph>
              <Paragraph>
                If we move Nudgg into another company then your personal data will be passed to that company to enable them to continue providing Nudgg for you.
              </Paragraph>
            </div>
            <div className='static__section'>
              <Heading size={4}>
                5. Cookies
              </Heading>
              <Paragraph>
                Cookies Generally:
              </Paragraph>
              <Paragraph>
                We use cookies on our website:
              </Paragraph>
              <ol>
                <li>to provide you with a good experience when you use our website;</li>
                <li>for technical purposes essential to the operation of the website;</li>
                <li>for timing visits to the website and time spent using certain functions;</li>
              </ol>
              <Paragraph>
                We may allow third parties to set cookies in order to provide analytics services on our behalf. Such third parties track and examine the use of the website to prepare reports on its activities. This information may also be used to track or analyse data.
              </Paragraph>
              <Paragraph>
                A cookie is a small text file that is stored by your browser on your computer. On each subsequent visit to the website, the browser searches for cookies. If the browser finds cookies, it sends the information stored by the cookie to the website. The website downloads cookies on your computer, tablet or mobile phone. These cookies are necessary for the functioning of the website so that, for example, you can retrieve information on the website quickly or the website remembers your cookie settings.
              </Paragraph>
              <Paragraph>
                You are able to block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you have adjusted your cookie settings so that websites are not permitted to place cookies on your computer, the Nudgg’ website may not be able to download the cookie which remembers whether or not you have consented to the placing of cookies. If so, you will be asked to indicate your cookie preferences each time you visit the website. If you do not wish to be asked about your cookie preferences each time you visit the website, you will need to adjust your browser’s cookie settings to accept cookies.
              </Paragraph>
            </div>
            <div className='static__section'>
              <Heading size={4}>
                6. Google Analytics:
              </Heading>
              <Paragraph>
                Nudgg uses Google Analytics to perform statistical analyses about the way you use the services of Nudgg. Google Analytics collects information on how you navigate, how much time you spend on our website, how long you visit a particular web page, from which website you came to our website, type of internet browser you use and the IP address of your mobile phone and/or tablet, and websites you visit after visiting our web site. This information is collected and analyzed to improve the user friendliness of our website.
              </Paragraph>
              <Paragraph>
                To safeguard your privacy, Nudgg took the following measures:
              </Paragraph>
              <ol>
                <li>Nudgg entered into a processing agreement with Google. Pursuant to this agreement Google only acts as a processor of personal data on behalf of and at the instruction of Nudgg.</li>
                <li>Nudgg has activated the option to remove the last octet of 8 bits from your IP-address before Google stores your IP address.</li>
                <li>Nudgg deactivated the standard setting in Google Analytics for sharing personal data with Google.</li>
              </ol>
            </div>
            <div className='static__section'>
              <Heading size={4}>
                7. Promotional activities
              </Heading>
              <Paragraph>
                We will not use your personal data to market other services or products to you than Nudgg.
              </Paragraph>
            </div>
            <div className='static__section'>
              <Heading size={4}>
                8. Data storage
              </Heading>
              <Paragraph>
                The personal data we collect from you may be stored on secure servers, and processed by individuals based, outside the European Economic Area on our behalf. You agree to this storing and processing. We will take all steps reasonably necessary to ensure that your personal data is treated securely and in accordance with this Privacy and Cookies Statement.
              </Paragraph>
              <Paragraph>
                Transmitting information via the internet is never completely secure. Although we will do our best to protect your personal data, the security of your personal data transmitted to us cannot be guaranteed. Any transmission is at your own risk. You acknowledge and agree that we shall not be responsible for any unauthorized use, distribution, damage or destruction of personal data, except to the extent we are required to accept such responsibility under data protection laws.
              </Paragraph>
            </div>
            <div className='static__section'>
              <Heading size={4}>
                9. Your rights
              </Heading>
              <Paragraph>
                You may wish to check that the personal data that we hold about you is accurate and up to date. Please find below an outline of your rights to access and rectify your personal data, and how to get in touch if you would like to tell us about any required changes:
              </Paragraph>
              <ol>
                <li>Right to access personal data: if you want to know which personal data we process, you can use your right to access your personal data by sending an email to contact@nudgg.com. We may charge a fee of up to £10 for this access.</li>
                <li>Right to correct personal data: if your personal data is inaccurate, you can notify us of any required changes by sending an email to contact@nudgg.com.</li>
              </ol>
            </div>
            <div className='static__section'>
              <Heading size={4}>
                10. Changes
              </Heading>
              <Paragraph>
                This Privacy and Cookies Statement may be modified from time to time to comply with applicable laws or to reflect our updated business practices, so please check this Privacy and Cookies Statement periodically for any changes. The date of the last adjustment was 22 September 2016.
              </Paragraph>
            </div>
          </Col>
        </Grid>
      </View>
    )
  }
}

export default PrivacyPolicies
