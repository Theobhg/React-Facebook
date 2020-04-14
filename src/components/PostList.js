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
        content: "Boa tarde pessoal, sou desenvolvedor back-end e trabalho com PHP e Node.js. Estou terminando a parte do servidor e gostaria de fazer o front-end também, conseguem me indicar uma boa biblioteca?",
        comments: [
          {
            id: 2,
            author: {
              name: "Carlotta",
              avatar: "https://i.pravatar.cc/150?img=48"
            },
            content: 'Fala Jonas Tadeu, tudo certo? Gostei da sua iniciativa! Tente React para o Front!'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Erik Gustavo",
          avatar: "https://i.pravatar.cc/150?img=59"
        },
        date: "12 Abr 2020",
        content: "Fala galera, uma pesquisa rápida! Quais linguagens de programação que vocês trabalham e quais vocês mais gostam?",
        comments: [
          {
            id: 4,
            author: {
              name: "Charles Valdez",
              avatar: "https://i.pravatar.cc/150?img=11"
            },
            date: "12 Abr 2020",
            content: "Trabalho com Java e gosto de Java, kkk"

          },
          {
            id: 5,
            author: {
              name: "Daniela Dominika",
              avatar: "https://i.pravatar.cc/150?img=23"
            },
            date: "12 Abr 2020",
            content: "Sou desenvolvedora web e sou apaixonada por toda atmosfera do JavaScript!"

          },
          {
            id: 6,
            author: {
              name: "Jorge Mauro",
              avatar: "https://i.pravatar.cc/150?img=67"
            },
            date: "12 Abr 2020",
            content: "No trabalho uso c++ e em projetos pessoais costumo utilizar JS!"

          }
        ]
      },
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