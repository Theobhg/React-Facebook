import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Jonas Tadeu",
          avatar: "https://i.pravatar.cc/150?img=13"
        },
        date: "12 Abr 2020",
        content: "Question",
        comments: [
          {
            id: 2,
            author: {
              name: "Carlotta",
              avatar: "https://i.pravatar.cc/150?img=23"
            },
            date: "12 Abr 2020",
            content: "Reply"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Jonas Tadeu",
          avatar: ""
        },
        date: "12 Abr 2020",
        content: "Question",
        comments: [
          {
            id: 4,
            author: {
              name: "Charles",
              avatar: ""
            },
            date: "12 Abr 2020",
            content: "Reply"

          },
          {
            id: 2,
            author: {
              name: "Carlotta",
              avatar: "https://i.pravatar.cc/150?img=23"
            },
            date: "12 Abr 2020",
            content: "Reply"

          }
        ]
      }
    ]
  }


  render() {
    const { posts } = this.state;
  
    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;