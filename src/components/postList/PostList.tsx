import React, { useState } from "react";
import styles from "./PostList.module.scss";
import { Post } from "../../interfaces/post";

type PostListProps = {
  posts: Post[];
  onPostClick: (post: Post) => void;
};

const PostList: React.FC<PostListProps> = ({ posts, onPostClick }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.postList}>
      <input
        type="text"
        className={styles.searchBar}
        placeholder="Search posts by title"
        value={searchQuery}
        onChange={handleSearchChange}
      />
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
