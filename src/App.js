import React from "react";
import Post from "./Post.js";

class App extends React.Component {
  state = {
    posts: [
      {
      author: "David",
      text: "Moon is shininh"
      },
      {
      author: "Steve",
      text: "Sun shine"
      }
    ]
  };

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
