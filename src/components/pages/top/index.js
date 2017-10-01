import React from 'react'
import styled from 'styled-components'
import Header from '../../organisms/header/'
import CardList from './card-list'
import mainImage from '../../../images/main.jpg'
import main02Image from '../../../images/main02.jpg'
import { colors } from '../../../const/'
const { white } = colors

export default () => (
  <Wrapper>
    <Background />
    <Header />
    <Main>
      <CardList />
      <Concept>Concept</Concept>
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
  padding-top: calc(100vh - 100px);
`
const Concept = styled.div`
  background: url(${main02Image}) no-repeat right center #000;
  background-size: auto 100%;
  opacity: 0.85;
  height: 600px;
  color: ${white};
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  padding: 50px 0;
`
