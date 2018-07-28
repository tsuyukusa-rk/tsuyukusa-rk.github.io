import * as React from 'react'
import Helmet from 'react-helmet'
import Header from './header'
import Footer from './footer'
import '../../node_modules/@fortawesome/fontawesome-free/js/all'
import '../index.scss'

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

export default ({ children, data }: Props): JSX.Element => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    {children()}
    <Footer />
  </div>
)

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
