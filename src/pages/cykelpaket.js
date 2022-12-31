import React from 'react';
import { graphql } from 'gatsby';
import { withIntl, Link } from '../i18n';
import { FormattedMessage } from 'react-intl';
import styled, { ThemeProvider } from 'styled-components';
import { breakpoints } from '../components/breakpoints';
import theme from '../components/theme';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import { BikeThreeDay } from './cykelpaket-3-dagar';

const Section = styled.div`
  max-width: calc(1220px + 8%);
  margin: 40px auto;
  padding-left: 4%;
  padding-right: 4%;

  @media ${breakpoints.ml} {
    margin-top: 60px;
    margin-bottom: 60px;
  }

  @media ${breakpoints.lg} {
    margin-top: 75px;
    margin-bottom: 75px;
  }
`;

const BikePage = props => {
  console.log(props);
  return (
    <ThemeProvider theme={theme}>
      <Layout langKey={props.pageContext.locale}>
        <Hero
          image={props.data.heroImage.childImageSharp.fluid}
          left
          title={<FormattedMessage id="bikePackage" />}
        />
        <Intro text={<FormattedMessage id="bikeIntro" />} />
        <Section>
          <BikeThreeDay />
          {/* <div style={{padding:'56.25% 0 0 0',position:'relative'}}><iframe src="https://player.vimeo.com/video/312052598?autoplay=1&title=0&byline=0&portrait=0" style={{position:'absolute',top:'0',left:'0',width:'100%',height:'100%'}} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script> */}
        </Section>
      </Layout>
    </ThemeProvider>
  );
};

export default withIntl(BikePage);

export const query = graphql`
  query {
    heroImage: file(relativePath: { regex: "/bike-trail/" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    day1: file(relativePath: { regex: "/cliff-and-bike/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    day2: file(relativePath: { regex: "/boat-and-bike/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    day3: file(relativePath: { regex: "/planning/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
