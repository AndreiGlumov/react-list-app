import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts, title, remove}) => {
  if (!posts.length) {
    return <div className="alert alert-danger my-3">Постов нет</div>
  }
  return (
    <div className="mt-2 mb-4">
      <h3><span className="badge bg-secondary">{title}</span></h3>
        {posts.map((post, index) =>
            <PostItem remove={remove} number={index + 1} index={index} post={post} key={post.id} />
        )}
    </div>
  );
};

export default PostList;