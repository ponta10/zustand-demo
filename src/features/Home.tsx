import React, { useEffect } from "react";
import useStore from "../stores/useCreate";
import { Link } from "react-router-dom";

const Home = () => {
  const { posts, getPosts, selectPost, selectedPost } = useStore((state) => ({
    posts: state.posts,
    getPosts: state.getPosts,
    selectPost: state.selectPost,
    selectedPost: state.selectedPost
  }));

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ overflowY: "auto", height: "100vh" }}>
        <h2>Posts</h2>
        {posts.map((post: any) => (
          <div
            key={post.id}
            style={{ padding: "10px", cursor: "pointer" }}
            onClick={() => selectPost(post)}
          >
            <Link to="/select">{post.title}</Link>
          </div>
        ))}
      </div>
      {selectedPost && (
            <div>{selectedPost.title}</div>
        )}
    </div>
  );
};

export default Home;
