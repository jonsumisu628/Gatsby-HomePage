import React from "react"
import styled from "styled-components";

import Layout from "../components/layout/layout";

import aboutimg_pc from "../components/img/About.jpg";
import aboutimg_iphone from "../components/img/About_iPhone.png";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

    // 1920x1080 PC
  @media (min-width: 1920px) and (min-height: 1080px){
    justify-content: center;
  }

  // iPhone
  @media (max-width: 428px) and (max-height: 926px){
    width: 100%;
    justify-content: center;
    background-image: url(${aboutimg_iphone});
  }
`;

const Text = styled.div`
  margin-top: 34px;
  width: 52%;

  // 1920x1080 PC
  @media (min-width: 1920px) and (min-height: 1080px){
      width: 53%;
  }
  // iPhone
  @media (max-width: 428px) and (max-height: 926px) {
    margin: 40px 40px 0px 40px;
    width: 295px;
  }
`;

const Heading = styled.p`
  margin: 12px 0px 12px 0px;
  // font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
  font-family: serif;
  font-weight: bold;
  font-size: 21px;
  // 1920x1080 PC
  @media (min-width: 1920px) and (min-height: 1080px){
      font-size: 31px;
  }
`;

const Content = styled.p`
  margin: 18px 0px 38px 0px;
  // font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
  font-family: serif;
  font-size: 21px;
  line-height: 30px;
  // 1920x1080 PC
  @media (min-width: 1920px) and (min-height: 1080px){
      font-size: 31px;
  }
`;

const Img = styled.img`
  height: 375px;
  width: 500px;
  // 1920x1080 PC
  @media (min-width: 1920px) and (min-height: 1080px){
    height: 475px;
    width: 600px;
  }
  // iPhone
  @media (max-width: 428px) and (max-height: 926px) {
    display: none;
  }
`;

const About = () => {
    return (
        <Layout>
            <Body>
                <Main>
                    <Text>
                        <Heading>Who</Heading>
                        <Content>
                            NicName:John.Smith<br></br>
                            BirthDay:1999/6/28<br></br>
                            Location：Tokyo<br></br>
                            東京の専門学校に通っています。<br></br>
                            現在就職活動中...
                        </Content>
                        <Heading>Study</Heading>
                        <Content>
                            JavaScript / HTML / CSS / React / Gatuby <br></br>
                            Vue / Svelte / Linux / Docker / Vagrant
                        </Content>
                        <Heading>Pastime</Heading>
                        <Content>
                            アニメやゲームが好きです。バスケやスノースポーツもやります。専門学校に入学してからは筋トレも始めました。
                        </Content>
                    </Text>
                    <Img src={aboutimg_pc} alt="img" />
                </Main>
            </Body>
        </Layout>
    )
}

export default About;
