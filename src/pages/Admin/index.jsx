import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./admin.scss";

import { Spinner } from "reactstrap";
// components
import Header from "../../components/Header/AdminPageHeader";
import PostItem from "../../components/PostItem";

// actions
import { getPostsAction } from "../../store/actions/posts";

const Admin = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPostsAction());
  }, []);

  const renderPosts = () =>
    posts.map((post) => (
      <PostItem id={post.id} title={post.title} body={post.body} />
    ));

  return (
    <div className="admin-page-wrapper">
      <Header />
      <div className="posts-wrapper">
        {loading ? (
          <div className="spinner-wraper">
            <Spinner type="grow" color="primary" />
            <Spinner type="grow" color="secondary" />
            <Spinner type="grow" color="success" />
            <Spinner type="grow" color="danger" />
            <Spinner type="grow" color="warning" />
            <Spinner type="grow" color="info" />
            <Spinner type="grow" color="light" />
            <Spinner type="grow" color="dark" />
          </div>
        ) : (
          <>
            <div className="posts-header">
              <h3>Here is a list of all available posts: </h3>
            </div>
            <div className="posts">{posts !== [] && renderPosts()}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Admin;
