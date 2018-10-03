import React from 'react'
import { graphql } from 'gatsby'

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