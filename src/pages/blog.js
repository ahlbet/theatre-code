import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

const Blog = ({ data }) => (
  <div>
    <div className="blog-wrap">
      <Link to="/">Back to homepage</Link>
      <h1>Blog currently under construction!</h1>
      <h2>Posts</h2>
      <div className="posts-wrap">
        {data.allMarkdownRemark.edges.map(post => (
          <Link key={post.node.id} to={post.node.frontmatter.path}>
            {post.node.frontmatter.title}
            {/* {post.node.frontmatter.thumbnail} */}
          </Link>
        ))}
        {/* <img src={post.node.frontmatter.thumbnail} /> */}
      </div>
      <Link to="/">Back to homepage</Link>
    </div>
  </div>
);

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
            indexImage {
              id
            }
          }
        }
      }
    }
  }
`;

export default Blog;
