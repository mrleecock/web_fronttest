import React from "react";

class Post extends React.Component {
  render() {
    return this.props.posts.map(post => (
      <h3 key={post.id}>
        {post.author}: {post.text}
      </h3>
    ));
  }
}

export default Post;
