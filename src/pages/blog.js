import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/Layout";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <MDXRenderer>{node.body}</MDXRenderer>
          </article>
        ))}
      </ul>
    </Layout>
  );
};
export default BlogPage;

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        parent {
          ... on File {
            modifiedTime(formatString: "MMMM D, YYYY")
          }
        }
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        body
      }
    }
  }
`;
