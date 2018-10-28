import React from 'react'
import { graphql } from 'gatsby'

import { FormattedMessage } from 'react-intl'
import { withIntl, Link } from '../i18n'
import { ThemeProvider } from 'styled-components';

import Layout from '../components/layout'
import Hero from '../components/Hero'
import BookingBar from '../components/BookingBar'
import Intro from '../components/Intro'
import Rooms from '../components/Rooms'
import theme from '../components/theme'

const IndexPage = (props) => (
  <ThemeProvider theme={theme}>
    <Layout langKey={props.pageContext.locale}>
      <Hero image={props.data.heroImage.childImageSharp.fluid} />
      {/* <BookingBar /> */}
      <Intro/>
      <Rooms/>
      {/* <Link to="/page-2/">
        <FormattedMessage id="navRooms" />
      </Link> */}
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
  }
`