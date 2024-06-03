// src/App.tsx
import React, { useState } from "react";
import styles from "./styles/App.module.scss";
import { Post } from "./interfaces/post";
import PostDetails from "./components/postDetails/PostDetails";
import PostList from "./components/postList/PostList";

const App: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
  };

  return (
    <div className={styles.App}>
      <div className={styles.greeting}>Hello, Guest</div>
      <div className={styles.content}>
        <h1>Posts</h1>
        {selectedPost ? (
          <PostDetails post={selectedPost} />
        ) : (
          <PostList onPostClick={handlePostClick} />
        )}
      </div>
    </div>
  );
};

export default App;
