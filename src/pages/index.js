import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import slugifyPost from "../../slugifyPost";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to the Outdoors</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <h2>Posts</h2>
        <ul>
            {data.postgres.posts.map(post => (
                <li key={post.id}>
                <strong>
                    <Link to={slugifyPost(post)}>{post.title}</Link>
                </strong>{" "}
                at <em>{post.date}</em>
                </li>
            ))}
        </ul>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export const query = graphql`
  {
    postgres {
      posts: allPostsList {
        id
        title
        date
      }
    }
  }
`;

export default IndexPage
