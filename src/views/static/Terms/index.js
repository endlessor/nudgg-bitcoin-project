import React, { Component } from 'react'

import {
  Grid,
  Col
} from 'react-bootstrap'

import View from 'components/other/View'
import { TERMS as title } from 'data/titles'

import Heading from 'components/gui/Heading'
import Separator from 'components/gui/Separator'
import Paragraph from 'components/gui/Paragraph'
import Link from 'components/gui/Link'

class Terms extends Component {
  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <View title={title} className='static terms'>
        <Grid>
          <Col sm={8} smPush={1}>
            <Heading size={2}>
              {title}
            </Heading>
            <Separator className='static__separator' />
            <div className='static__section'>
              <Paragraph>
                Use of the Nudgg website (https://www.nudgg.co.uk) ("website" below) is subject to:
              </Paragraph>
            </div>
            <div className='static__section'>
              <Paragraph>
                By accessing and using this website, you (also "user" below) agree to be bound by the terms and conditions below and the website privacy policy. Please review them carefully. If you do not agree to the terms and conditions or website privacy policy then you must not use the website.
              </Paragraph>
            </div>
            <div className='static__section'>
              <Heading size={4}>
                Use of website
              </Heading>
              <Paragraph>
                The information shown on this website has been put together by Nudgg with due care, but no guarantees can be given of its accuracy or completeness. On this website, Nudgg provides information purely about (financial) products and services that are provided by Nudgg. Nudgg reserves the right to make changes to the website without prior notice. Neither this website nor the websites or documents to which this website provides access contain an invitation to buy or sell securities or other financial products or services. The information offered is not intended to take the place of professional advice. Without verification or further advice, use of the information presented is at the user's own expense and risk. You should use your own judgment, and seek professional advice if appropriate.
              </Paragraph>
              <Paragraph>
                We may suspend or end your use of the website at any time with or without informing you. We have no obligation to resume provision of the website to you, if suspended or closed.
              </Paragraph>
            </div>
            <div className='static__section'>
              <Heading size={4}>
                Information from third parties, products and services
              </Heading>
              <Paragraph>
                Information supplied by third parties, references or hyperlinks to other websites which are not the property of Nudgg are only included for information of the user of this website. Although Nudgg is extremely selective concerning the third-party information included on this website or the sites to which reference is made, it does not endorse their content or functioning, or the quality of any products and/or services they offer. Nudgg gives no guarantee whatsoever and accepts no liability whatsoever in relation to the content of such websites.
              </Paragraph>
            </div>
            <div className='static__section'>
              <Heading size={4}>
                Data protection
              </Heading>
              <Paragraph>
                Any personal information you supply to us (and which we collect from you) when using this website will be used by us in accordance with our website <Link to='/privacy-policies' modifier='color-aqua'>privacy policy</Link>.
              </Paragraph>
            </div>
            <div className='static__section'>
              <Heading size={4}>
                Intellectual property rights
              </Heading>
              <Paragraph>
                All information displayed on this website, including texts, photos, illustrations, graphic material, (trade) names, logos, product and service marks, are the property of or licensed to Nudgg and are protected by database rights, copyrights, trade mark rights and/or any other intellectual property rights. The (intellectual) property rights in no way transfer to legal entities or persons who obtain access to this website. The contents of this website may only be used for personal, non-commercial purposes. The user of this website is not permitted to reproduce, forward, distribute or disseminate the content of this website or make it available to third parties in exchange for compensation, without prior written permission from Nudgg. Where Nudgg has included one or more social sharing buttons next to content on this website, users may use those buttons to forward the relevant content for their personal, non-commercial purposes.
              </Paragraph>
            </div>
            <div className='static__section'>
              <Heading size={4}>
                No liability
              </Heading>
              <Paragraph>
                Nudgg shall have no liability to you for any damage resulting from accessing or using this website, and does not warrant that the website (or any content displayed on the website) is or shall be error-free, or that it shall function uninterrupted. Although Nudgg makes every effort to keep the content, information and materials displayed on this website as up to date and complete as possible, it cannot give any guarantee for the accuracy, validity, completeness or currency of the information which is published on this website or to which this website gives access. Nudgg accepts no liability whatsoever in that respect.
              </Paragraph>
            </div>
            <div className='static__section'>
              <Heading size={4}>
                Applicable law
              </Heading>
              <Paragraph>
                UK law applies to these terms and conditions, their subject matter and their formation. You and we both agree that the courts of England and Wales will have non-exclusive jurisdiction. However, if you are a resident of Northern Ireland you may also bring proceedings in Northern Ireland, and if you are resident of Scotland, you may also bring proceedings in Scotland.
              </Paragraph>
            </div>
            <div className='static__section'>
              <Heading size={4}>
                Amendments
              </Heading>
              <Paragraph>
                Nudgg reserves the right to change these terms and conditions at any time. You should check this page regularly for any changes.
              </Paragraph>
            </div>
            <div className='static__section'>
              <Heading size={4}>
                Complaints
              </Heading>
              <Paragraph>
                Nudgg appreciates it greatly if you notify us of a question, problem or complaint, because this gives Nudgg the opportunity to seek a suitable solution. It also gives Nudgg the opportunity to improve its service to you and other customers. Please contact us using the details below.
              </Paragraph>
            </div>
          </Col>
        </Grid>
      </View>
    )
  }
}

export default Terms
