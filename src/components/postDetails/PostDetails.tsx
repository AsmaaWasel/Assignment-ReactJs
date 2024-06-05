/**
 * Displays details of a post including its title, body, and comments.
 *
 * @param {PostDetailsProps} props - Props for the PostDetails component.
 */
import React, { useEffect, useState } from "react";
import styles from "./PostDetails.module.scss";
import { Post, Comment } from "../../interfaces/post";

/**
 * Props interface for the PostDetails component.
 */
type PostDetailsProps = {
  post: Post; // Post object containing post details
};

/**
 * PostDetails component displays details of a post including its title, body, and comments.
 * @param {PostDetailsProps} props - Props for the PostDetails component.
 */
const PostDetails: React.FC<PostDetailsProps> = ({ post }) => {
  // State to store comments
  const [comments, setComments] = useState<Comment[]>([]);
  // State to track loading state
  const [loading, setLoading] = useState<boolean>(true);
  // State to store error message if any
  const [error, setError] = useState<string | null>(null);

  // Fetch comments for the post
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data); // Set comments in state
        setLoading(false); // Set loading state to false
      })
      .catch((error) => {
        setError(error.message); // Set error message
        setLoading(false); // Set loading state to false
      });
  }, [post.id]);

  // Render loading state
  if (loading) {
    return <p>Loading comments...</p>;
  }

  // Render error state if error occurred
  if (error) {
    return <p>Error loading comments: {error}</p>;
  }

  // Render post details and comments
  return (
    <div className={styles.postDetails}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <h3>Comments:</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.name}</strong> - {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetails;
