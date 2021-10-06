import React from 'react';

const PostItem = (props) => {
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>{props.post.id}. {props.post.title}</strong>
          <div className="post__body">{props.post.body}</div>
        </div>
        <div className="post__btns">
          <button className="btn btn-sm btn-warning" onClick={() => props.remove(props.post)}>Delete Post</button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;