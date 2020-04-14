import React from 'react';

function PostWriter({ author, date }) {
  return (
    <div className="post-writer">
      <img className="avatar" src={author.avatar} />
      <div className="info-post">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function PostReply({ comments }) {
  return (
    <div className="post-replies">
      <div className="divider" />
      {comments.map(comment => (
        <div className key={comment.id} className="comment">
          <img className="avatar" src={comment.author.avatar} />
          <p>
            <span>{comment.author.name}</span>
            {comment.content}
          </p>
        </div>
      ))} 
    </div>
  );
}

function PostItem({ author, date, comments, content}) {
  return (
    <div className="post">
      <PostWriter author={author} date={date} />
        <p className="post-content">{content}</p>
        <PostReply comments={comments} />
    </div>
  );
}

export default PostItem;