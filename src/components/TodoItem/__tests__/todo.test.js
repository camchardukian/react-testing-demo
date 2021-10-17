import { render, screen, cleanup } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Todo from "../TodoItem";

afterEach(() => {
  cleanup();
});

test("Should render an incomplete todo item", () => {
  const todo = { id: 1, title: "clean the house", isCompleted: false };

  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo-1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("clean the house");
  expect(todoElement).not.toContainHTML(
    "<strike><h1>clean the house</h1></strike>"
  );
});

test("Should render a completed todo item", () => {
  const todo = { id: 2, title: "pay the credit card bill", isCompleted: true };

  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo-2");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("pay the credit card bill");
  expect(todoElement).toContainHTML(
    "<strike><h1>pay the credit card bill</h1></strike>"
  );
});

test("matches snapshot", () => {
  const todo = { id: 1, title: "clean the house", isCompleted: false };
  const tree = TestRenderer.create(<Todo todo={todo} />).toJSON();
  expect(tree).toMatchSnapshot();
});
