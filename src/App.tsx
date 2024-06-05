// App.tsx

import React, { useEffect } from "react";
import styles from "./styles/App.module.scss";
import PostList from "./components/postList/PostList";
import PostDetails from "./components/postDetails/PostDetails";
import Pagination from "./components/pagination/Pagination";
// Import the SearchBox component

import {
  fetchPosts,
  setCurrentPage,
  setSelectedPost,
  setSearchQuery,
} from "./redux/slices/postsSlice";
import { Post } from "./interfaces/post";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import SearchBox from "./components/searchBox/SearchBox";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { posts, currentPage, totalPages, selectedPost, searchQuery } =
    useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts(currentPage));
  }, [currentPage, dispatch]);

  const handlePageChange = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
  };

  const handlePostClick = (post: Post) => {
    dispatch(setSelectedPost(post));
  };

  const handlePostListClick = () => {
    dispatch(setSelectedPost(null));
  };

  // Handler for search query change
  const handleSearch = (query: string) => {
    dispatch(setSearchQuery(query));
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <a href="#" onClick={handlePostListClick}>
          <h1>
            {selectedPost && (
              <span className={styles.backIcon} onClick={handlePostListClick}>
                &larr;{" "}
              </span>
            )}
            Posts
          </h1>
        </a>
        {/* Replace the search input with the SearchBox component */}
        <SearchBox onSearch={handleSearch} />
      </header>
      <div className={styles.content}>
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
