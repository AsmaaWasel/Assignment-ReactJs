import React, { useState, useEffect } from "react";
import styles from "./styles/App.module.scss";
import { Post } from "./interfaces/post";
import PostList from "./components/postList/PostList";
import PostDetails from "./components/postDetails/PostDetails";
import Pagination from "./components/pagination/Pagination";

/**
 * Main application component.
 *
 * @component
 * @returns {React.FC} The App component.
 */
const App: React.FC = () => {
  /**
   * State for storing posts data.
   * @type {Post[]}
   */
  const [posts, setPosts] = useState<Post[]>([]);

  /**
   * State for current page number.
   * @type {number}
   */
  const [currentPage, setCurrentPage] = useState<number>(1);

  /**
   * State for total number of pages.
   * @type {number}
   */
  const [totalPages, setTotalPages] = useState<number>(1);

  /**
   * State for selected post.
   * @type {Post | null}
   */
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  // Fetch posts whenever the current page changes
  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  /**
   * Fetches posts from the API based on the current page.
   *
   * @param {number} page - The page number to fetch posts for.
   */
  const fetchPosts = (page: number) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then((response) => {
        const totalCount = response.headers.get("X-Total-Count");
        setTotalPages(Math.ceil(Number(totalCount) / 10));
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };

  /**
   * Handles the page change event.
   *
   * @param {number} pageNumber - The new page number.
   */
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  /**
   * Handles the post click event.
   *
   * @param {Post} post - The clicked post.
   */
  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
  };

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <h1>Posts</h1>
      </header>
      <div className={styles.content}>
        {selectedPost ? (
          <PostDetails post={selectedPost} />
        ) : (
          <>
            <PostList posts={posts} onPostClick={handlePostClick} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
