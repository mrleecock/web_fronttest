import React from "react";
import Post from "./Post.js";
import axios from "axios";

class App extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get(
        "http://nodejs-mongo-persistent-final-mblog.rahtiapp.fi/api/micro_blogs"
      )
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      });
  }

  render() {
    return (
      <div>
        <h1>MBlogs</h1>
        <Post posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
