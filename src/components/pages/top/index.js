import React, { Component } from 'react'
import styled from 'styled-components'

import { Drawer, MenuItem } from 'material-ui'
import { Card,  CardText, CardTitle } from 'material-ui/Card'

import mainImage from '../../../images/main.jpg'
import ThLargeOutline from 'react-icons/lib/ti/th-large-outline'
import IconCalendar from 'react-icons/lib/go/calendar'
import IconContact from 'react-icons/lib/md/contact-mail'

import { colors } from '../../../const/'
const { white } = colors

export default class App extends Component {
  static propTypes = {}
  constructor (props) {
    super(props)
    this.state = {open: false}
  }
  handleToggle = () => { this.setState({open: !this.state.open}) }
  handleClose = () => { this.setState({open: false}) }
  render () {
    return (
      <Wrapper>
        <Header>
          <Title>fogGoat</Title>
          <BtnMenu onClick={this.handleToggle}><ThLargeOutline /></BtnMenu>
          <Sidebar
            width={300}
            openSecondary
            open={this.state.open}
            docked={false}
            onRequestChange={(open) => this.setState({open})}
          >
            <MenuItem primaryText="Schedule" leftIcon={<IconCalendar />} onClick={this.handleClose} />
            <MenuItem primaryText="Contact" leftIcon={<IconContact />} onClick={this.handleClose} />
          </Sidebar>
        </Header>
        <Main>
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
        </Main>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  height: 100vh;
`
const Header = styled.header`
  background: url(${mainImage}) no-repeat center center;
  background-size: cover;
  height: 100vh;
  max-height: 700px;
  position: relative;
`
const Title = styled.h1`
  color: ${white};
  font-size: 42px;
  position: absolute;
  top: 48%;
  left: 45%;
  font-weight: bold;
`
const BtnMenu = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 34px;
  width: 34px;
  height: 34px;
  color: ${white};
  cursor: pointer;
  > svg {
    vertical-align: top !important;
  }
`
const Sidebar = styled(Drawer)``
const Main = styled.main`
  width: 100%;
`
const SubTitle = styled.h2`
  font-size: 30px;
  text-align: center;
  margin: 50px auto 10px;
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
