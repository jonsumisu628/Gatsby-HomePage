import React from 'react';
import styled from 'styled-components';

import Giticon from "./Giticon";
import Qiitaicon from "./Qiitaicon";

const Body = styled.div`
  font-family: serif;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F5F1E9;
`;

const Footer = () => {
    return (
        <Body>
            <Qiitaicon />
            <Giticon />
            <p>Copyright © John.Smith</p>
            {new Date().getFullYear()}
        </Body>
    )
}

export default Footer;
