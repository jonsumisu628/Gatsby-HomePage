import React from 'react';
import {AiFillGithub} from "react-icons/ai";
import styled from 'styled-components';

const GitIcon = () => {
    return (
        <Body>
            <a href="https://github.com/jonsumisu628" target="_blank" rel="noreferrer noopener">
                <AiFillGithub size="40px" color="black" />
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

export default GitIcon;
