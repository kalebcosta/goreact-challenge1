import React, { Fragment } from 'react';
import PostHeader from './PostHeader';

const Post = ({ data }) => (
  <Fragment>
    <div className="container">
      <div className="div_post">
        <PostHeader data={data} />
        <div className="content">{data.description}</div>
      </div>
    </div>
  </Fragment>
);

export default Post;
