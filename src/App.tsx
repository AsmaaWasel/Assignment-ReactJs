/**
 * The main application component.
 * Responsible for rendering the header, post list, post details, pagination,
 * and handling search functionality.
 */
import React, { useEffect } from "react";
import styles from "./styles/App.module.scss";
import PostList from "./components/postList/PostList";
import PostDetails from "./components/postDetails/PostDetails";
import Pagination from "./components/pagination/Pagination";
import {
  fetchPosts,
  setCurrentPage,
  setSelectedPost,
  setSearchQuery,
} from "./redux/slices/postsSlice";
import { Post } from "./interfaces/post";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import SearchBox from "./components/searchBox/SearchBox";

/**
 * The main application component.
 * @returns JSX element representing the application.
 */
const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { posts, currentPage, totalPages, selectedPost, searchQuery } =
    useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts(currentPage));
  }, [currentPage, dispatch]);

  /**
   * Handles the page change event.
   * @param pageNumber The new page number.
   */
  const handlePageChange = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
  };

  /**
   * Handles the click event on a post item.
   * @param post The clicked post.
   */
  const handlePostClick = (post: Post) => {
    dispatch(setSelectedPost(post));
  };

  /**
   * Handles the click event to return to the post list.
   */
  const handlePostListClick = () => {
    dispatch(setSelectedPost(null));
  };

  /**
   * Handles the search query change event.
   * @param query The new search query.
   */
  const handleSearch = (query: string) => {
    dispatch(setSearchQuery(query));
  };

  // Filter the posts based on the search query
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        {/* Render the header with back button if a post is selected */}
        <a href="#" onClick={handlePostListClick}>
          <h1>
            {selectedPost && (
              <span className={styles.backIcon} onClick={handlePostListClick}>
                &larr;{" "}
              </span>
            )}
            PostsBlog
          </h1>
        </a>
        {/* Render the search box */}
        <SearchBox onSearch={handleSearch} />
      </header>
      <div className={styles.content}>
        {/* Render post details if a post is selected, otherwise render post list */}
        {selectedPost ? (
          <PostDetails post={selectedPost} />
        ) : (
          <>
            <PostList posts={filteredPosts} onPostClick={handlePostClick} />
            {/* Render pagination */}
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
