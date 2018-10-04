import React from 'react'
import { graphql } from 'gatsby'

import { FormattedMessage } from 'react-intl'
import { withIntl, Link } from '../i18n'

import Layout from '../components/layout'
import Hero from '../components/Hero'
import BookingBar from '../components/BookingBar'
import Intro from '../components/Intro'

const IndexPage = (props) => (
  <Layout>
    <Hero image={props.data.heroImage.childImageSharp.fluid} />
    <BookingBar />
    <Intro/>
    {/* <Rooms/> */}
    <p>
      <FormattedMessage id="build" />
    </p>
    <Link to="/page-2/">
      <FormattedMessage id="gopage2" />
    </Link>
  </Layout>
)

export default withIntl(IndexPage)

export const pageQuery = graphql`
  query {
    heroImage: file(relativePath: { regex: "/henrik_trygg-kayaking.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 2480) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`