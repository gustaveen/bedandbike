import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
// import ThemeProvider from './ThemeProvider'
import { StaticQuery, graphql } from 'gatsby'
import { injectIntl } from 'react-intl'

import Header from './Header'
import './layout.css'
import favicon from '../assets/favicons/favicon-32x32.png';

const Layout = ({ children, langKey }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Bed and bike Öckerö' },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
          ]}
        >
          <html lang={langKey} />
        </Helmet>
        <Header />
        <div>
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(Layout)
