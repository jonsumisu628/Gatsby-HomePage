import React from 'react';
import styled from "styled-components";
import Hamburger from 'hamburger-react';

const Button = styled.button`
    border: none;
    outline: none;
    background: transparent;
`;

// flagでメニューボタンの状態を管理（close時：三、open時：X）
const SidebarIcon = ({handleClick,flag}) => {
    return (
        <Button onClick={handleClick}>
            <Hamburger toggled={flag}/>
        </Button>
    )
}
export default SidebarIcon
