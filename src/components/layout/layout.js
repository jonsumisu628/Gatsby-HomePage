import React from "react";
import styled from "styled-components";

import Menu from "../menu";

const Body = styled.div`
  display: flex;
  @media (max-width: 428px) and (max-height: 926px){
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 20%;
  background-color: #F0F2F4;
  box-shadow: 5px 0 3px #dcdcdc;
  z-index: 2;

  // iPhone 上下分割 上
  @media (max-width: 428px) and (max-height: 926px){
    width:100%;
    position: fixed;
    box-shadow: 0px 5px 5px 0px #dcdcdc;
  }
`;

const Light = styled.div`
  width: 80%;
  overflow-y: scroll;
  z-index: 1;

  // iPhone 上下分割 下
  @media (max-width: 428px) and (max-height: 926px){
    width:100%;
  }
`;

const Layout = props => {
    return (
        <Body>
            <Left>
                <Menu/>
            </Left>

            <Light>
                {props.children}
            </Light>

        </Body>
    )
}

export default Layout;