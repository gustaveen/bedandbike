import React from 'react'
import { graphql } from 'gatsby'

import { FormattedMessage } from 'react-intl'
import { withIntl, Link } from '../i18n'
import { ThemeProvider } from 'styled-components';
import Img from 'gatsby-image';

import Layout from '../components/layout'
import Hero from '../components/Hero'
// import BookingBar from '../components/BookingBar'
import Booking from '../components/Booking'
import Intro from '../components/Intro'
import Rooms from '../components/Rooms'
import theme from '../components/theme'

const IndexPage = (props) => (
  <ThemeProvider theme={theme}>
    <Layout langKey={props.pageContext.locale}>
      <Hero image={props.data.heroImage.childImageSharp.fluid} />
      {/* <BookingBar /> */}
      <Intro/>
      <Rooms
        images={[
          props.data.room1.childImageSharp.fluid,
          props.data.room2.childImageSharp.fluid,
          props.data.room3.childImageSharp.fluid,
          props.data.room4.childImageSharp.fluid
        ]}
      />
      {/* <Link to="/page-2/">
        <FormattedMessage id="navRooms" />
      </Link> */}
      <Booking />
      <Img fluid={props.data.mapImage.childImageSharp.fluid} 
        alt="hero"
      />
    </Layout>
  </ThemeProvider>
)

export default withIntl(IndexPage)

export const pageQuery = graphql`
  query {
    heroImage: file(relativePath: { regex: "/boats.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    room1: file(relativePath: { regex: "/rum-1.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 740) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    room2: file(relativePath: { regex: "/rum-2.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 740) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    room3: file(relativePath: { regex: "/rum-3.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 740) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    room4: file(relativePath: { regex: "/rum-4.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 740) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mapImage: file(relativePath: { regex: "/mapto.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`