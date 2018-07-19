import * as React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/header'
import './inject-global'

interface Props {
  children: () => JSX.Element
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const Layout = ({ children, data }: Props): JSX.Element => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

export default Layout

declare function graphql(x: TemplateStringsArray): any
export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
