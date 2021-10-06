import React from 'react';
import {useHistory} from 'react-router-dom';

const PostItem = (props) => {
  const router = useHistory()
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>{props.post.id}. {props.post.title}</strong>
          <div className="post__body">{props.post.body}</div>
        </div>
        <div className="post__btns btn-group" role="group">
          <button className="btn btn-sm btn-outline-primary" onClick={() => router.push(`/posts/${props.post.id}`)}>Open</button>
          <button className="btn btn-sm btn-outline-danger" onClick={() => props.remove(props.post)}>Delete Post</button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;