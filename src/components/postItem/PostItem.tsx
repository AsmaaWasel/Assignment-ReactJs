// src/components/PostItem.tsx
import React from "react";
import styles from "./PostItem.module.scss";
import { Post } from "../../interfaces/post";

interface PostItemProps {
  post: Post;
  onClick: () => void; // Define onClick prop
}

const PostItem: React.FC<PostItemProps> = ({ post, onClick }) => {
  return (
    <div className={styles.postItem} onClick={onClick}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostItem;
