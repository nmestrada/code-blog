import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class NewPostForm extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      content: "",
    }
  }
  handleSubmit = () => {
    console.log("your mom")
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  render() {
    return (
      <Layout>
        <SEO />
        <h2>Make a New Post</h2>
        <form onSubmit={() => this.handleSubmit()} method="post">
          <label htmlFor="title">
            Title
            <br />
            <input
              type="text"
              onChange={this.handleChange}
              name="title"
              value={this.state.title}
            />
          </label>
          <div className="form-group">
            <label htmlFor="description">Post:</label>
            <textarea
              className="form-control"
              onChange={this.handleChange}
              rows="10"
              cols="30"
              name="content"
              value={this.state.content}
            />
          </div>
          <button type="submit" className="myButton">
            Submit
          </button>
        </form>
      </Layout>
    )
  }
}
