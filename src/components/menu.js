import React from 'react';
import {Link} from "gatsby";
import styled from "styled-components";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;

  // 1920x1080 PC
  @media (min-width: 1920px) and (min-height: 1080px){
      margin-top: 120px;
  }

  // iPhone
  @media (max-width: 428px) and (max-height: 926px){
      padding: 20px;
      display: flex;
      flex-direction: inherit;
      justify-content: center;
  }
`;

const H2 = styled.h2`
  margin: 34px 0px 0px 0px;
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
  font-size: 36px;
  color: #696969;

  // 1920x1080 PC
  @media (min-width: 1920px) and (min-height: 1080px){
      font-size: 46px;
  }

  // iPhone
  @media (max-width: 428px) and (max-height: 926px){
      margin: 0px auto 0px 0px;
  }
`;

const StyledLink = styled(Link)`
  margin: 20px 0px 0px 0px;
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
  font-size: 26px;
  color: #696969;
  text-decoration: none;

  &:hover {
      text-shadow: 1px 1px 1px;
      transition: 0.5s;
  }

  &.active{
      text-decoration: underline;
      text-decoration-color: #4169e1;
  }

  // 1920x1080 PC
  @media (min-width: 1920px) and (min-height: 1080px){
      font-size: 36px;
  }

  // iPhone
  @media (max-width: 428px) and (max-height: 926px){
      margin: 0px 5px 0px 5px;
  }
`;




const Menu = () => {
    return (
        <Body>
            <H2>Menu</H2>

            <StyledLink to="/" activeClassName="active">Home</StyledLink>
            <StyledLink to="/about" activeClassName="active">About</StyledLink>
            <StyledLink to="/blog" activeClassName="active">Blog</StyledLink>

        </Body>
    )
}

export default Menu;
