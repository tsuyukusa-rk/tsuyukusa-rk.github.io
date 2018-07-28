import * as React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import * as mainImage from '../images/main.jpg'
import { Color } from '../const.js'

const { WHITE } = Color

interface Props {
  siteTitle: string
}

export default ({ siteTitle }: Props): JSX.Element => (
  <Header>
    <Logo>fogGoat</Logo>
    {/* <h1>
      <Link to="/" >
        {siteTitle}
      </Link>
    </h1> */}
  </Header>
)

const Header = styled.header`
  background: url(${mainImage}) no-repeat center center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Logo = styled.div`
  color: ${WHITE};
  font-size: 50px;
  font-weight: 300;
  letter-spacing: 6px;
`
