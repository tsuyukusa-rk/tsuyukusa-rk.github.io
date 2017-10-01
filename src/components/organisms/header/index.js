import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Drawer, MenuItem } from 'material-ui'
import ThLargeOutline from 'react-icons/lib/ti/th-large-outline'
import IconCalendar from 'react-icons/lib/go/calendar'
import IconContact from 'react-icons/lib/md/contact-mail'
import { colors } from '../../../const/'
const { white } = colors

export default class Header extends Component {
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
        <Title>fogGoat</Title>
        <BtnMenu onClick={this.handleToggle}><ThLargeOutline /></BtnMenu>
        <Sidebar
          width={300}
          openSecondary
          open={this.state.open}
          docked={false}
          onRequestChange={(open) => this.setState({open})}
          containerStyle={{backgroundColor: white}}
        >
          <NavItem to='/schedule'>
            <MenuItem primaryText='Schedule' leftIcon={<IconCalendar />} onClick={this.handleClose} />
          </NavItem>
          <NavItem to='/contact'>
            <MenuItem primaryText='Contact' leftIcon={<IconContact />} onClick={this.handleClose} />
          </NavItem>
        </Sidebar>
      </Wrapper>
    )
  }
}

const Wrapper = styled.header`
  height: calc(100vh - 100px);
  position: relative;
`
const Title = styled.h1`
  color: ${white};
  font-size: 42px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
const NavItem = styled(Link)`
  display: block;
  text-decoration: none;
`
