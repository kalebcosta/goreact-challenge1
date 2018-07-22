import React, { Fragment } from 'react';

const PostHeader = ({ data }) => (
  <Fragment>
    <div className="post_header">
      <div
        className="avatar"
        style={{ backgroundImage: `url(${data.avatar}/${data.id})` }}
      />
      <div className="post_data">
        <div className="post_name">{data.author}</div>
        <div className="post_time">há {data.time} min</div>
      </div>
    </div>
  </Fragment>
);

export default PostHeader;
