import React from 'react';
import { graphql } from 'gatsby';
import { withIntl, Link } from '../../../i18n';
import { ThemeProvider } from 'styled-components';
import { FormattedMessage } from 'react-intl';
import theme from '../../../components/theme';
// import Img from 'gatsby-image';

import Layout from '../../../components/layout'
import Hero from '../../../components/Hero'
import GridList from '../../../components/GridList'
import Intro from '../../../components/Intro';


const BikeOneDay = (props) => (
  <ThemeProvider theme={theme}>
  
    <Layout langKey={props.pageContext.locale}>
      <Hero
        image={props.data.heroImage.childImageSharp.fluid}
        left
        title={<FormattedMessage id="bikePackage" />}
      />
      <Intro text={<FormattedMessage id="bikeIntro" />}/>
        {/* <div style={{padding:'56.25% 0 0 0',position:'relative'}}><iframe src="https://player.vimeo.com/video/312052598?autoplay=1&title=0&byline=0&portrait=0" style={{position:'absolute',top:'0',left:'0',width:'100%',height:'100%'}} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script> */}
    </Layout>
  </ThemeProvider>
)

export default withIntl(BikeOneDay)

export const query = graphql`
  query {
    heroImage: file(relativePath: { regex: "/boats/" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

