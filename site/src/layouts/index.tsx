import * as React from 'react'
import Helmet from 'react-helmet'
import Header from './header'
import 'bulma'
import { injectGlobal } from 'styled-components'

injectGlobal`
  @import url(https://fonts.googleapis.com/earlyaccess/roundedmplus1c.css);

  body > div {
    font-family: 'Rounded Mplus 1c';
  }
`

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
