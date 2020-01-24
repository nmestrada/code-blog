import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const { post } = data.postgres
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <h3>{post.date}</h3>
        <p>{post.content}</p>
      </div>
      <Link to="/">Home</Link>
    </Layout>
  )
}

export const query = graphql`
  query($postId: Int!) {
    postgres {
      post: postById(id: $postId) {
        id
        title
        content
        date
      }
    }
  }
`
