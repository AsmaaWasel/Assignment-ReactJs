import React, { useEffect, useState } from "react";
import styles from "./PostList.module.scss";
import { Post } from "../../interfaces/post";

// Define PostListProps type
type PostListProps = {
  onPostClick: (post: Post) => void;
  searchQuery: string;
};

const PostList: React.FC<PostListProps> = ({ onPostClick, searchQuery }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading posts...</p>;
  }

  if (error) {
    return <p>Error loading posts: {error}</p>;
  }

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.postList}>
      <ul>
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
