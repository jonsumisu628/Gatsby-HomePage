import React from "react";
import styled from "styled-components";
import {Link, graphql, useStaticQuery} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

import Layout from "../components/layout/layout";


const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  font-family: serif;
`;

const StyledLink = styled(Link)`
  margin: 20px;
  padding: 20px;
  text-decoration: none;
  height: 220px;
  width: 220px;

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
                        gatsbyImageData(height: 150, width: 200)
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
                                <GatsbyImage image={getImage(edge.node.media)} alt={edge.node.media.title} />
                            </StyledLink>
                        )
                    })}
                </Main>
            </Body>
        </Layout>
    )
}

export default BlogPage