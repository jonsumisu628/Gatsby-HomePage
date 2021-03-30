import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import Layout from "../components/layout/layout";
import Footer from "../components/Footer";

import homeimg_pc from "../components/img/Home_PC.jpg";
import homeimg_iphone from "../components/img/Home_iPhone.jpg";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  // iPhone
  @media (max-width: 428px) and (max-height: 926px){
      margin-top: 44px;
      width: 100%;
      display: block;
      background-image: url(${homeimg_iphone});
  }
`;

const Text = styled.div`
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
  margin: 34px 40px 0px 40px;

  // 1920x1080 PC
  @media (min-width: 1920px) and (min-height: 1080px){
      font-size: 30px;
  }

  // iPhone
  @media (max-width: 428px) and (max-height: 926px){
    margin-top: 100px;
    h1 {
        font-size: 24px;
    }
  }
`;

const Img = styled.img`
  margin-top: 50px;
  width: 730px;

  // 1920x1080 PC
  @media (min-width: 1920px) and (min-height: 1080px){
    width: 1030px;
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
                <Footer />
            </Body>
        </Layout >
    )
}
