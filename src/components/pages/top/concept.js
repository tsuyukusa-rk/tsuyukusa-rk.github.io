import React from 'react'
import styled from 'styled-components'
import main02Image from '../../../images/main02.jpg'
import { colors } from '../../../const/'
const { white } = colors

export default () => (
  <Wrapper>
    <Title>Concept</Title>
    <Text>
      テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
    </Text>
  </Wrapper>
)

const Wrapper = styled.div`
  background: url(${main02Image}) no-repeat right center #000;
  background-size: auto 100%;
  opacity: 0.85;
  height: 600px;
  color: ${white};
  padding: 50px 0;
`
const Title = styled.h2`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
`
const Text = styled.div`
  line-height: 1.6;
  width: 80%;
  margin: 30px auto;
  max-width: 800px;
`
