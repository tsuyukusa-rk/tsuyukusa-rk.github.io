import React from 'react'
import styled from 'styled-components'
import { Card, CardText, CardTitle } from 'material-ui/Card'
import { colors } from '../../../const/'
const { white } = colors

export default () => (
  <Wrapper>
    <SubTitle>Topics</SubTitle>
    <CardList>
      <CardItem>
        <CardTitle>TitleTitleTitleTitle</CardTitle>
        <CardText>ああああああああ</CardText>
      </CardItem>
      <CardItem>
        <CardTitle>TitleTitleTitleTitle</CardTitle>
        <CardText>ああああああああ</CardText>
      </CardItem>
      <CardItem>
        <CardTitle>TitleTitleTitleTitle</CardTitle>
        <CardText>ああああああああ</CardText>
      </CardItem>
      <CardItem>
        <CardTitle>TitleTitleTitleTitle</CardTitle>
        <CardText>ああああああああ</CardText>
      </CardItem>
      <CardItem>
        <CardTitle>TitleTitleTitleTitle</CardTitle>
        <CardText>ああああああああ</CardText>
      </CardItem>
      <CardItem>
        <CardTitle>TitleTitleTitleTitle</CardTitle>
        <CardText>ああああああああ</CardText>
      </CardItem>
    </CardList>
  </Wrapper>
)

const Wrapper = styled.section`
  background-color: ${white};
  opacity: 0.85;
  padding: 50px 0;
`
const SubTitle = styled.h2`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
`
const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 0 0 30px;
  max-width: 800px;
`
const CardItem = styled(Card)`
  margin: 30px 30px 0 0;
  flex: 1;
`
