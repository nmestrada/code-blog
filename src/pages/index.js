import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import slugifyPost from "../../slugifyPost";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to the Outdoors</h1>
    <div className="post-list">
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
