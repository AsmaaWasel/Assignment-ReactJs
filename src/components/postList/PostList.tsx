// src/components/PostList.tsx
import React, { useState, useEffect } from "react";
import styles from "./PostList.module.scss";
import { Post } from "../../interfaces/post";
import PostItem from "../postItem/PostItem";

interface PostListProps {
  onPostClick: (post: Post) => void;
}

const PostList: React.FC<PostListProps> = ({ onPostClick }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading posts...</p>;
  }

  if (error) {
    return <p>Error loading posts: {error}</p>;
  }

  return (
    <div className={styles.postList}>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} onClick={() => onPostClick(post)} />
      ))}
    </div>
  );
};

export default PostList;
