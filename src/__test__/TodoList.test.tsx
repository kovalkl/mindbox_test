import { render, screen } from "@testing-library/react";

import { TodoList } from "@/components/TodoApp/components/TodoList/TodoList";

import { mockTodos } from "@/__test__/mock";

const toggleCompleted = jest.fn();

describe("TodoList", () => {
  it("should render message if no todos", () => {
    render(<TodoList todos={[]} toggleCompleted={toggleCompleted} />);

    expect(screen.getByText(/no todos/i)).toBeInTheDocument();
  });

  it("should render todos", () => {
    render(<TodoList todos={mockTodos} toggleCompleted={toggleCompleted} />);

    expect(screen.getAllByText(/test/i)).toHaveLength(3);
  });
});
