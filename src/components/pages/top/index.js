import React from 'react'
import styled from 'styled-components'
import Header from '../../organisms/header/'
import Footer from '../../organisms/footer/'
import CardList from './card-list'
import Concept from './concept'
import mainImage from '../../../images/main.jpg'

export default () => (
  <Wrapper>
    <Background />
    <Header />
    <Main>
      <CardList />
      <Concept />
    </Main>
    <Footer />
  </Wrapper>
)

const Wrapper = styled.div`
  min-height: 100vh;
  padding-bottom: 150px;
  position: relative;
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
  padding-top: calc(100vh - 100px);
`
