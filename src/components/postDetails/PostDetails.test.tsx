import { render, screen } from "@testing-library/react";
import PostDetails from "./PostDetails";
import { Post } from "../../interfaces/post";

// Mock post with userId property added
// Mock post with userId property added
const mockPost: Post = {
  userId: 1,
  id: 1,
  title: "Post 1",
  body: "This is post 1",
};

test("renders the post details", () => {
  render(<PostDetails post={mockPost} />);
  const postTitle = screen.getByText(/Post 1/i);
  const postBody = screen.getByText(/This is post 1/i);
  expect(postTitle).toBeInTheDocument();
  expect(postBody).toBeInTheDocument();
});
