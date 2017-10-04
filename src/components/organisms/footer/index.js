import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../const/'
const { white } = colors

export default () => (
  <Wrapper>
    <p>Copyright© fogs goat All Right Reserved</p>
  </Wrapper>
)

const Wrapper = styled.footer`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  text-align: center;
  color: ${white};
`
