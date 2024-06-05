import { render, screen, fireEvent } from "@testing-library/react";
import PostList from "./PostList";
import { Provider } from "react-redux";
import { Post } from "../../interfaces/post";
import store from "../../redux/store";

// Mock posts with userId property added
const mockPosts: Post[] = [
  { userId: 1, id: 1, title: "Post 1", body: "This is post 1" },
  { userId: 2, id: 2, title: "Post 2", body: "This is post 2" },
];

test("renders a list of posts", () => {
  render(
    <Provider store={store}>
      <PostList posts={mockPosts} onPostClick={jest.fn()} />
    </Provider>
  );

  const postTitles = screen.getAllByRole("heading");
  expect(postTitles.length).toBe(2);
  expect(postTitles[0]).toHaveTextContent("Post 1");
  expect(postTitles[1]).toHaveTextContent("Post 2");
});

test("calls onPostClick when a post is clicked", () => {
  const handlePostClick = jest.fn();
  render(
    <Provider store={store}>
      <PostList posts={mockPosts} onPostClick={handlePostClick} />
    </Provider>
  );

  const postItem = screen.getByText("Post 1");
  fireEvent.click(postItem);

  expect(handlePostClick).toHaveBeenCalledWith(mockPosts[0]);
});
