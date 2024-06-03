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
  // State for storing posts data
  const [posts, setPosts] = useState<Post[]>([]);
  // State for current page number
  const [currentPage, setCurrentPage] = useState<number>(1);
  // State for total number of pages
  const [totalPages, setTotalPages] = useState<number>(1);
  // State for selected post
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  // State for search query
  const [searchQuery, setSearchQuery] = useState<string>("");

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

  /**
   * Handles the click event of the post list.
   */
  const handlePostListClick = () => {
    setSelectedPost(null);
  };

  /**
   * Handles the change event of the search input field.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event.
   */
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Filter posts based on the search query
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        {/* Convert the heading to a link */}
        <a href="#" onClick={handlePostListClick}>
          <h1>Posts</h1>
        </a>
        {/* Search input field */}
        <input
          type="text"
          className={styles.searchBar}
          placeholder="Search posts by title"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </header>
      <div className={styles.content}>
        {/* Conditional rendering based on selected post */}
        {selectedPost ? (
          <PostDetails post={selectedPost} />
        ) : (
          <>
            <PostList posts={filteredPosts} onPostClick={handlePostClick} />
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
