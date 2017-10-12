import React from "react";
import Link from 'gatsby-link';
import Helmet from "react-helmet";
import Img from 'gatsby-image';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <img src={ post.frontmatter.indexImage.id.src } alt={ post.frontmatter.indexImage.id.src }></img>
      {/* {post.frontmatter.indexImage && <Img />} */}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link to="/blog/">Back to blog</Link>
    </div>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        indexImage {
          id
        }
      }
    }
  }
`;
