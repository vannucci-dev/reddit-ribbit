import React, { useEffect } from "react";
import CallToActionButtons from "./CTA/CallToActionButtons";
import VotesCounter from "./votesCounter/VotesCounter";
import "./postsFeed.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getPosts,
  selectError,
  selectIsLoading,
  selectPosts,
} from "./postsFeedSlice";

const PostsFeed = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);
  const hasError = useSelector(selectError);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Something happened.</div>;
  }

  const renderImg = (url) => {
    return <img src={url} />;
  };

  return posts.map((post) => {
    return (
      <div className="posts-container">
        <VotesCounter />
        <div className="post" key={post.data.title}>
          <div className="post-header">
            <span className="post-sub"></span>
            <a href="#" className="post-sub-link">
              {post.data.subreddit_name_prefixed}
            </a>
            <span className="post-tag">Tag</span>
            <span className="post-tag">Tag</span>
            <span className="post-tag">Tag</span>
          </div>
          <div className="post-content">
            <h2 className="post-title">{post.data.title}</h2>
            <p className="post-text">{post.data.seltext}</p>
            {post.data.url ? renderImg(post.data.url) : ""}
          </div>
          <button className="post-more">
            <i className="fas fa-chevron-down"></i>
          </button>
          <CallToActionButtons />
        </div>
      </div>
    );
  });
};

export default PostsFeed;
