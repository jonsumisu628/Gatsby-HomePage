import React from 'react';
import styled from "styled-components";
import Helmet from "react-helmet";

import Layout from "../components/layout/layout";

import homeimg_pc from "../components/img/Home_PC.jpg";
import homeimg_iphone from "../components/img/Home_iPhone.jpg";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Main = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: columnw;
  align-items: center;
  justify-content: center;

  // iPhone
  @media (max-width: 428px) and (max-height: 926px){
      width: 100%;
      display: block;
      background-image: url(${homeimg_iphone});
  }
`;

const Text = styled.div`
  // font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
  font-family: serif;

  // 1920x1080 PC
  @media (min-width: 1920px) and (min-height: 1080px){
    width: 55%;
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    margin:0;
    padding: 20px 10px 20px 10px;
    background-color: rgba(255,255,255,0.4);
  }

  // width 429〜1919
  @media (min-width: 429px) and (max-width: 1919px){
    width: 45%;
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    margin:0;
    padding: 10px;
    background-color: rgba(255,255,255,0.4);
  }

  // iPhone
  @media (max-width: 428px) and (max-height: 926px){
    margin: 100px 40px 0px 40px;
    h1 {
        font-size: 24px;
    }
  }
`;

const Img = styled.img`
  width: 80%;

  // 1920x1080 PC
  @media (min-width: 1920px) and (min-height: 1080px){
    width: 90%;
  }

  // iPhone
  @media (max-width: 428px) and (max-height: 926px){
    display: none;
  }

`;

export default function Home() {

    return (
        <Layout>
            <Helmet>
                <title>JohnSmith HomePage</title>
                <meta name="description" content="johnsmithのホームページ" />
                <html lang="ja" />
            </Helmet>
            <Body>
                <Main>
                    <Text>
                        <h1>John.Smith Home Page</h1>
                        <p>Welcome to MyHome Page!</p>
                        <p>東京の某専門学校に通っているIT学生のホームページです。</p>
                    </Text>

                    <Img src={homeimg_pc} alt="img" />
                </Main>
            </Body>
        </Layout >
    )
}
