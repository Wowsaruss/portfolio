import React, { Component } from 'react';
import styled from 'styled-components';
import hamburger from '../assets/hamburger.svg';
import { LightRed } from '../colors';

const NavMain = styled('div')``;

const Open = styled('div')`
  height: 125px;
  background-color: white;
  color: black;
  border-bottom: 0.2px solid ${LightRed};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Closed = styled('div')`
  height: 125px;
`;

const HamburgerButton = styled('div')``;

const Hamburger = styled('img')``;

const LinkWrapper = styled('div')`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const NavLink = styled('a')`
  text-decoration: none;
  color: black;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinkText = styled('p')`
  padding: 0px;
  margin-top: 7px;
  margin-bottom: 0px;
  font-weight: bold;
  text-decoration: none;
  color: black;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.5em;
`;

const UnderLine = styled('p')`
  padding: 0px;
  margin: -7px;
  border: 0px;
`;

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      navOpen: true
    };
  }

  handleHamburgerClick = () => {
    if (this.state.navOpen) {
      return this.setState({ navOpen: false });
    } else {
      return this.setState({ navOpen: true });
    }
  };

  render() {
    return (
      <NavMain>
        {this.state.navOpen ? (
          <Open>
            <HamburgerButton onClick={this.handleHamburgerClick}>
              <Hamburger src={hamburger} alt="" />
            </HamburgerButton>
            <LinkWrapper>
              <NavLink href="/">
                <i class="fas fa-home" />
                <LinkText>HOME</LinkText>
                <UnderLine>--------</UnderLine>
              </NavLink>
              <NavLink href="/">
                <i class="fas fa-quote-left" />
                <LinkText>ABOUT</LinkText>
                <UnderLine>--------</UnderLine>
              </NavLink>
              <NavLink href="/">
                <i class="fas fa-globe-americas" />
                <LinkText>SERVICE</LinkText>
                <UnderLine>----------</UnderLine>
              </NavLink>
              <NavLink href="/">
                <i class="far fa-image" />
                <LinkText>PORTFOLIO</LinkText>
                <UnderLine>------------</UnderLine>
              </NavLink>
              <NavLink href="/">
                <i class="fa fa-fw fa-rss" />
                <LinkText>BLOG</LinkText>
                <UnderLine>-------</UnderLine>
              </NavLink>
              <NavLink href="/">
                <i class="far fa-envelope" />
                <LinkText>CONTACT</LinkText>
                <UnderLine>-----------</UnderLine>
              </NavLink>
            </LinkWrapper>
          </Open>
        ) : (
          <Closed>
            <HamburgerButton onClick={this.handleHamburgerClick}>
              <Hamburger src={hamburger} alt="" />
            </HamburgerButton>
          </Closed>
        )}
      </NavMain>
    );
  }
}

export default Navbar;
