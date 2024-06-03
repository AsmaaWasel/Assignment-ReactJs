import React from "react";
import { Post } from "../../interfaces/post";
import styles from "./PostList.module.scss"; // Import the styles

/**
 * Props for the PostList component.
 */
type PostListProps = {
  /**
   * Array of posts to display.
   */
  posts: Post[];
  /**
   * Function to call when a post is clicked.
   */
  onPostClick: (post: Post) => void;
};

/**
 * Component that renders a list of posts.
 *
 * @param {PostListProps} props - The props for the component.
 * @returns {JSX.Element} - Rendered component.
 */
const PostList: React.FC<PostListProps> = ({ posts, onPostClick }) => {
  return (
    <div className={styles.postList}>
      {" "}
      {/* Apply the postList class */}
      <ul>
        {posts.map((post) => (
          <li key={post.id} onClick={() => onPostClick(post)}>
            {" "}
            {/* Handle click event */}
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
