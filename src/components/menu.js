import React, {Component} from 'react'
import {Link} from "gatsby";
import styled from "styled-components";
import {Transition} from 'react-transition-group';

import Giticon from "./Giticon";
import Qiitaicon from "./Qiitaicon";

const Sidebar = styled.div`
  width: 200px;
  padding-top: 25px;
  background-color: #4194C0;
`;

const SidebarLink = styled.div`
  display: flex;
  flex-direction: column;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLink = styled(Link)`
  margin: 10px;
  padding: 10px;
  font-size: 30px;
  color: white;
  text-decoration: none;

  &.active {
      background-color: #1e50a2;
  }

  &:hover {
      background-color: #1e50a2;
  }
`;

const duration = 800;

const sidebarStyle = {
    transition: `width ${duration}ms`
}

const sidebarTransitionStyles = {
    entering: {width: 0},
    entered: {width: '200px'},
    exiting: {width: '200px'},
    exited: {width: 0}
}

const linkStyle = {
    transition: `opacity ${duration}ms`
}

const linkTransitionStyles = {
    entering: {opacity: 0},
    entered: {opacity: 1},
    exiting: {opacity: 1},
    exited: {opacity: 0},
}

export default class SidebarContent extends Component {
    renderLinks = () => {
        return <Transition in={this.props.isOpen} timeout={80}>
            {(state) => (
                <SidebarLink style={{
                    ...linkStyle,
                    ...linkTransitionStyles[state],
                }}>
                    <StyledLink to="/" activeClassName="active">Home </StyledLink>
                    <StyledLink to="/about" activeClassName="active">About</StyledLink>
                    <StyledLink to="/blog" activeClassName="active">Blog</StyledLink>
                    <Icons>
                        <Giticon />
                        <Qiitaicon />
                    </Icons>
                </SidebarLink>
            )}
        </Transition>
    }

    render() {
        return <Transition in={this.props.isOpen} timeout={80}>
            {(state) => (
                <Sidebar style={{
                    ...sidebarStyle,
                    ...sidebarTransitionStyles[state]
                }}>
                    {this.renderLinks()}
                </Sidebar>
            )}
        </Transition>
    }
}
