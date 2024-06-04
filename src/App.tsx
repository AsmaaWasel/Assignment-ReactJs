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

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
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
                {/* or use <FontAwesomeIcon icon={faArrowLeft} /> if you're using FontAwesome */}
              </span>
            )}
            Posts
          </h1>
        </a>
        <input
          type="text"
          className={styles.searchBar}
          placeholder="Search posts by title"
          value={searchQuery}
          onChange={handleSearchChange}
        />
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
