import React, { Component } from 'react'
import styled from 'styled-components'
import MainImage from '../../../images/main.jpg'

export default class App extends Component {
  render () {
    return (
      <Wrapper>
        <Header>
          <Title>fogGoat</Title>
        </Header>
        <Main>
          <img src={MainImage} alt='main画像' />
        </Main>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div``
const Header = styled.header`
  height: 150px;
  padding: 20px;
`
const Title = styled.h1``
const Main = styled.main`
  width: 100%;
`
