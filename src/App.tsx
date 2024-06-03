import React, { useState, useEffect } from "react";
import styles from "./styles/App.module.scss";
import { Post } from "./interfaces/post";
import PostList from "./components/postList/PostList";
import PostDetails from "./components/postDetails/PostDetails";
import Pagination from "./components/pagination/Pagination"; // Assuming you've implemented Pagination

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

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

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
