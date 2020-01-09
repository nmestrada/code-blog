import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import slugifyPost from "../../slugifyPost";

const Archive = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div className="post-list">
        <h2>Posts</h2>
        <ul>
            {data.postgres.posts.map(post => (
            <div>
                <p>{post.content}</p>
                <li key={post.id}>
                <strong>
                    <Link to={slugifyPost(post)}>{post.title}</Link>
                </strong>{" "}
                at <em>{post.date}</em>
                </li>
            </div>
            ))}
        </ul>
    </div>
    <Link to="/">Home</Link>
  </Layout>
)
export const query = graphql`
  {
    postgres {
      posts: allPostsList {
        id
        title
        date
        content
      }
    }
  }
`;


export default Archive