import * as React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import * as mainImage from '../images/main.jpg'

interface Props {
  siteTitle: string
}

export default ({ siteTitle }: Props): JSX.Element => (
  <Header className='hero is-large'>
    <div className='hero-head container is-mobile'>
      <div className='level-right is-mobile section'>
        <a className='level-item has-text-dark'>
          <span className='icon'><i className='fab fa-twitter' /></span>
          <span>twitter</span>
        </a>
        <a href='https://github.com/tsuyukusa-rk' target='_blank' className='level-item has-text-dark'>
          <span className='icon'><i className='fab fa-github' /></span>
          <span>github</span>
        </a>
      </div>
    </div>

    <div className='hero-body'>
      <div className='container has-text-centered'>
        <Logo className='has-text-white'>
          {siteTitle}
        </Logo>
        <p className='subtitle is-7 has-text-white'>
          singer songwriter and programmer
        </p>
      </div>
    </div>

    <div className='hero-foot'>
      <nav className='tabs'>
        <div className='container'>
          <ul>
            <li><a className='has-text-white'>Top</a></li>
            <li><a className='has-text-white'>Biography</a></li>
            <li><a className='has-text-white'>Sound sources</a></li>
            <li><a className='has-text-white'>Live schedule</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </Header>
)

const Header = styled.header`
  background: url(${mainImage}) no-repeat center center;
  background-size: cover;
`
const Logo = styled.h1`
  font-size: 40px;
  font-weight: 300;
  letter-spacing: 6px;
  margin-bottom: 4px;
`
