import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Jonas Tadeu",
          avatar: ""
        },
        date: "12 Abr 2020",
        content: "Question",
        comments: [
          {
            id: 2,
            author: {
              name: "Charles",
              avatar: ""
            },
            date: "12 Abr 2020",
            content: "Reply"
          }
        ]
      },

    ]
  };
  render() {
    const { posts } = this.state;
  
    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    )
  };
}

export default PostList;