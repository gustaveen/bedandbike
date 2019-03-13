import React from 'react';
import { graphql } from 'gatsby';
import { withIntl, Link } from '../i18n';
import { ThemeProvider } from 'styled-components';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import theme from '../components/theme';
// import Img from 'gatsby-image';

import Layout from '../components/layout'
import Hero from '../components/Hero'
// import Booking from '../components/Booking'
import Intro from '../components/Intro';
import Rooms from '../components/Rooms';
import Info from '../components/Info';
import Amenities from '../components/Amenities';


const IndexPage = (props) => {
  console.log(props);
  return (
    <ThemeProvider theme={theme}>
      <Layout langKey={props.pageContext.locale}>
        <Hero
          image={props.data.heroImage.childImageSharp.fluid}
          title={<FormattedMessage id="introTitle" />}
        />
        <Intro text={<FormattedHTMLMessage id="introText" />} />
        <Rooms
          images={[
            props.data.room1.childImageSharp.fluid,
            props.data.room2.childImageSharp.fluid,
            props.data.room3.childImageSharp.fluid,
            props.data.room4.childImageSharp.fluid
          ]}
        />
        <Amenities />
        <Info />
      </Layout>
    </ThemeProvider>
  )
}

export default withIntl(IndexPage)

export const pageQuery = graphql`
  query {
    heroImage: file(relativePath: { regex: "/boats/" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    room1: file(relativePath: { regex: "/rum-1/" }) {
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
    day1: file(relativePath: { regex: "/boat-and-bike.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`