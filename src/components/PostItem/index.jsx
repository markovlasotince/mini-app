import React from "react";

import "./postItem.scss";

const PostItem = ({ id, title, body }) => (
  <div className="post-item-wrapper">
    <p className="post-id">{id}.</p>
    <h1 className="post-title">{title}</h1>
    <h3 className="post-body">{body}</h3>
  </div>
);

export default PostItem;
