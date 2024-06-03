import React, { useState } from "react";
import styles from "./PostList.module.scss";
import { Post } from "../../interfaces/post";

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
 * PostList component that displays a list of posts and a search bar.
 * Allows filtering posts by their title.
 *
 * @param {PostListProps} props - The props for the component.
 * @returns {JSX.Element} The rendered PostList component.
 */
const PostList: React.FC<PostListProps> = ({ posts, onPostClick }) => {
  // State for the search query
  const [searchQuery, setSearchQuery] = useState<string>("");

  /**
   * Handles changes to the search input field.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event from the input field.
   */
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Filter posts based on the search query
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.postList}>
      {/* Search input field */}
      <input
        type="text"
        className={styles.searchBar}
        placeholder="Search posts by title"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ul>
        {/* Map over filtered posts and render list items */}
        {filteredPosts.map((post) => (
          <li key={post.id} onClick={() => onPostClick(post)}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
