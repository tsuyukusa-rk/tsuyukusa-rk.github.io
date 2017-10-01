import React from 'react'
import styled from 'styled-components'
import Header from '../../organisms/header/'
import CardList from './card-list'
import mainImage from '../../../images/main.jpg'

export default () => (
  <Wrapper>
    <Background />
    <Header />
    <Main>
      <CardList />
    </Main>
  </Wrapper>
)

const Wrapper = styled.div`
  min-height: 100vh;
  margin-bottom: 150px;
`
const Background = styled.div`
  background: url(${mainImage}) no-repeat center center;
  background-size: cover;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
`
const Main = styled.main`
  width: 100%;
`
