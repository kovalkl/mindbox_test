import { render, screen } from "@testing-library/react";

import { TodoItem } from "@/components/TodoApp/components/TodoItem/TodoItem";

import { mockTodos } from "@/__test__/mock";

const toggleCompleted = jest.fn();

describe("TodoItem", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <TodoItem todo={mockTodos[0]} toggleCompleted={toggleCompleted} />
    );
    expect(baseElement).toBeTruthy();
  });

  it("should render todo text", () => {
    render(<TodoItem todo={mockTodos[1]} toggleCompleted={toggleCompleted} />);

    expect(screen.getByText("test2")).toBeInTheDocument();
  });

  it("should call toggleCompleted on click", () => {
    render(<TodoItem todo={mockTodos[2]} toggleCompleted={toggleCompleted} />);

    const checkbox = screen.getByRole("checkbox");
    checkbox.click();

    expect(toggleCompleted).toHaveBeenCalledWith(mockTodos[2].id);
  });
});
