import React from 'react';
import Link from 'gatsby-link';

const Blog = ({ data }) => (
  <div style={{textAlign: 'center'}}>
    <h1>Blog currently under construction!</h1>
    <h3>Check back later and it just might be finished!</h3>
    <h2>Index</h2>
    {data.allMarkdownRemark.edges.map(post => (
      <Link key={post.node.id} to={post.node.frontmatter.path}>
        {post.node.frontmatter.title}
      </Link>
    ))}
    <Link to="/">Go back to the homepage</Link>
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
          }
        }
      }
    }
  }
`;

export default Blog;
