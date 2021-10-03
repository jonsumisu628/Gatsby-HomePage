import React from 'react';
import styled from "styled-components";
import Hamburger from 'hamburger-react';

const Button = styled.button`
    border: none;
    outline: none;
    background: transparent;
`;

const SidebarIcon = ({handleClick}) => {
    return (
        <Button onClick={handleClick}>
            <Hamburger />
        </Button>
    )
}
export default SidebarIcon
