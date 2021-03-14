import React from "react";
import styled from "styled-components";
import {graphql, Link} from "gatsby";
import {BLOCKS, INLINES} from "@contentful/rich-text-types";
import {renderRichText} from "gatsby-source-contentful/rich-text";



import Layout from "../components/layout/layout";
import Footer from "../components/Footer";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  // iPhone
  @media (max-width: 428px) and (max-height: 926px){
      align-items: center;
  }
`;

const Main = styled.div`
  margin: 30px 60px 30px 60px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  border: solid 2px #c0c0c0;
  p,h1{
      width: 600px;
      text-align: left;
  }

  // iPhone
  @media (max-width: 428px) and (max-height: 926px){
      margin: 100px 0px 20px 0px;
      padding: 20px;
      width: 300px;
      img {
          width: 300px;
          height: 200px;
      }
      p,h1{
      width: 280px;
      text-align: left;
      }
  }
`;

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
    title
    date(formatString: "MMMM Do YYYY")
    description {
      raw
      references {
        ... on ContentfulAsset {
              __typename
              contentful_id
              resize(height:300,width:500) {
                src
              }
            }
            description
            title
        }
    }
  }
}
`

const Blog = props => {
    const options = {
        renderNode: {
            [INLINES.ENTRY_HYPERLINK]: ({
                data: {
                    target: {slug, title},
                },
            }) => <Link to={slug} activeClassName="active">{title}</Link>,
            [BLOCKS.EMBEDDED_ASSET]: node => <img src={node.data.target.resize.src} alt={node.data.target.title} />,
        },
    }

    return (
        <Layout>
            <Body>
                <Main>
                    <h1>{props.data.contentfulBlogPost.title}</h1>
                    <p>{props.data.contentfulBlogPost.date}</p>
                    {renderRichText(props.data.contentfulBlogPost.description, options)}
                </Main>
                <Footer />
            </Body>
        </Layout>
    )
}

export default Blog
