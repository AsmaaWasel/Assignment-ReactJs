import React from "react";
import { Post } from "../../interfaces/post";
import styles from "./PostList.module.scss";

interface PostListProps {
  posts: Post[];
  onPostClick: (post: Post) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, onPostClick }) => {
  return (
    <div>
      {posts.map((post) => (
        <div className={styles.blogContainer} key={post.id}>
          <div className={styles.blogHeader}>
            <div className={styles.blogAuthorNoCover}>
              <h3>Russ Beye</h3>
            </div>
          </div>
          <div className={styles.blogBody}>
            <div className={styles.blogTitle}>
              <h1>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onPostClick(post);
                  }}
                >
                  {post.title}
                </a>
              </h1>
            </div>
            <div className={styles.blogSummary}>
              <p>{post.body}</p>
            </div>
            <div className={styles.blogTags}>
              <ul>
                <li>
                  <a href="#">design</a>
                </li>
                <li>
                  <a href="#">web dev</a>
                </li>
                <li>
                  <a href="#">css</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.blogFooter}>
            <ul>
              <li className={styles.publishedDate}>12 days ago</li>
              <div className={styles.reacts}>
                <li className={styles.comments}>
                  <span className={styles.numero}>8❤️</span>
                </li>
                <li className={styles.shares}>
                  <span className={styles.numero}>3🥰</span>
                </li>
              </div>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
