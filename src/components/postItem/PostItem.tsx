/**
 * Component representing a single post item.
 * @param post - The post object containing post details.
 * @param onClick - Function to be called when the post item is clicked.
 */
import React from "react";
import styles from "./PostItem.module.scss";
import { Post } from "../../interfaces/post";

interface PostItemProps {
  post: Post; // Post object containing post details
  onClick: () => void; // Function to be called when the post item is clicked
}

/**
 * Functional component representing a single post item.
 * @param {PostItemProps} post - The post object containing post details.
 * @param {() => void} onClick - Function to be called when the post item is clicked.
 * @returns JSX element representing a single post item.
 */
const PostItem: React.FC<PostItemProps> = ({ post, onClick }) => {
  return (
    <div className={styles.postItem} onClick={onClick}>
      <h2>{post.title}</h2> {/* Display post title */}
      <p>{post.body}</p> {/* Display post body */}
    </div>
  );
};

export default PostItem;
