import React from 'react';
import styled from 'styled-components';

import img from "./img/Qiita.png";

const QiitaIcon = () => {
    return (
        <Body>
            <a href="https://qiita.com/john_smith628" target="_blank" rel="noreferrer noopener">
                <Img src={img} alt="img" />
            </a>
        </Body>
    )
}

const Body = styled.div`
  &:hover {
        transform: scale(1.2,1.2);
        transition-duration: 0.5s;
    }
`;

const Img = styled.img`
  height: 45px;
  width: 60px;
`;

export default QiitaIcon;