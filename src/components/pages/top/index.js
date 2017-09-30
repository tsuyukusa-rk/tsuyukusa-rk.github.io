import React, { Component } from 'react'
import styled from 'styled-components'
import { Drawer, MenuItem } from 'material-ui'
import mainImage from '../../../images/main.jpg'
import ThLargeOutline from 'react-icons/lib/ti/th-large-outline'
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
            width={200}
            openSecondary
            open={this.state.open}
            docked={false}
            onRequestChange={(open) => this.setState({open})}
          >
            <MenuItem onClick={this.handleClose}>Schedule</MenuItem>
          </Sidebar>
        </Header>
        <Main />
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
  font-size: 40px;
  position: absolute;
  top: 48%;
  left: 48%;
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
const Sidebar = styled(Drawer)`

`
const Main = styled.main`
  width: 100%;
`
