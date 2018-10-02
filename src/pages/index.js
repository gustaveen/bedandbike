import React from 'react'
import { graphql } from 'gatsby'
// import Img from 'gatsby-image'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/Hero'

const IndexPage = (props) => (
  <Layout>
    <Hero image={props.data.heroImage.childImageSharp.fluid} /> 
  </Layout>
)

export default IndexPage

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