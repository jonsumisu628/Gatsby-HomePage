import React, {Component} from 'react';
import styled from "styled-components";
import Menu from "../menu";
import SidebarIcon from '../SidebarIcon';

const Body = styled.div`
  display: flex;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  animation: fadeIn 2s normal;

  @keyframes fadeIn {
    0% { opacity: 0 }
    100% { opacity: 1 }
  }

  @media (max-width: 428px) and (max-height: 926px) {
    position: relative;
    z-index: 1;
  }
`;

const StyleSidebarIcon = styled.div`
  margin: 30px;
  height: 30px;

  @media (max-width: 428px) and (max-height: 926px) {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
  }
`;

export default class Layout extends Component {
    constructor(props) {
        super();
        this.children = props.children;
    }

    state = {
        isOpen: false,
    }

    toggleSidebar = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    }
    render() {
        return (
            <Body>
                <Menu isOpen={this.state.isOpen} />
                <StyleSidebarIcon>
                    <SidebarIcon
                        isOpen={this.state.isOpen}
                        handleClick={this.toggleSidebar}
                    />
                </StyleSidebarIcon>
                <Main>
                    {this.children}
                </Main>
            </Body>
        )
    }
}
