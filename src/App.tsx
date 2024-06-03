import React, { useState } from "react";
import styles from "./styles/App.module.scss";
import { Post } from "./interfaces/post";
import PostDetails from "./components/postDetails/PostDetails";
import PostList from "./components/postList/PostList";

/**
 * Main App component responsible for rendering the application.
 * @returns {JSX.Element} The rendered App component.
 */
const App: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  /**
   * Handles clicking on a post item.
   * @param {Post} post - The selected post item.
   */
  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
  };

  /**
   * Handles changes in the search bar input.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event object.
   */
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className={styles.App}>
      <div className={styles.content}>
        {selectedPost ? (
          <PostDetails post={selectedPost} />
        ) : (
          <>
            <h1>Posts</h1>
            <input
              type="text"
              className={styles.searchBar}
              placeholder="Search posts by title"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <PostList onPostClick={handlePostClick} searchQuery={searchQuery} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
