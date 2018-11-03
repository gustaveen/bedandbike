import React from 'react'
import { graphql } from 'gatsby'
import { withIntl, Link } from '../i18n';
import { ThemeProvider } from 'styled-components';
import { FormattedMessage } from 'react-intl';
import theme from '../components/theme';
import Hero from '../components/Hero'
import Layout from '../components/layout';

const ThanksPage = (props) => (
  <ThemeProvider theme={theme}>
    <Layout langKey={props.pageContext.locale}>
    <Hero
      image={props.data.heroImage.childImageSharp.fluid}
      title={<FormattedMessage id="thanksTitle" />}
      byline={<FormattedMessage id="thanksNote" />}
    />
    </Layout>
  </ThemeProvider>
)

export default withIntl(ThanksPage)

export const pageQuery = graphql`
  query {
    heroImage: file(relativePath: { regex: "/boatandbike.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`