import React from "react"
import styled from "styled-components";
import {Link, graphql, useStaticQuery} from "gatsby"

import Layout from "../components/layout/layout"
import Footer from "../components/Footer";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  // iPhone
  @media (max-width: 428px) and (max-height: 926px){
      margin-top: 100px;
  }
`;

const StyledLink = styled(Link)`
  margin: 20px;
  padding: 20px;
  text-decoration: none;
  height: 200px;

  h2,p {
      margin: 0px;
      line-height: 25px;
  }

  top: 0px;
  position: relative;
  border-radius: 4px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
  border: 2px solid #dcdcdc;

  &:hover {
    transition: all 0.2s ease-out;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
    top: -4px;
    border: 1px solid #cccccc;
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
  }

  &:hover:before {
    transform: scale(2.15);
  }
`;

const BlogPage = () => {

    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost(sort: {order: DESC, fields: date}) {
            edges {
              node {
                title
                slug
                date(formatString: "MMMM Do YYYY")
                media {
                    resize(height: 150, width: 200) {
                        src
                    }
                }
              }
            }
        }
    }
  `)

    return (
        <Layout>
            <Body>
                <Main>
                    {data.allContentfulBlogPost.edges.map(edge => {
                        return (
                            <StyledLink to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.date}</p>
                                <img src={edge.node.media.resize.src} alt={edge.node.media.title} />
                            </StyledLink>
                        )
                    })}
                </Main>
                <Footer />
            </Body>
        </Layout>
    )
}

export default BlogPage