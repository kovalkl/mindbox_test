import { render, screen, fireEvent } from "@testing-library/react";

import { TodoInput } from "@/components/TodoApp/components/TodoInput/TodoInput";

describe("TodoInput", () => {
  it("should render input", () => {
    render(<TodoInput addTodo={jest.fn()} />);
    expect(
      screen.getByPlaceholderText(/what needs to be done/i)
    ).toBeInTheDocument();
  });

  it("should update input value", () => {
    render(<TodoInput addTodo={jest.fn()} />);
    const input = screen.getByPlaceholderText(/what needs to be done/i);

    fireEvent.change(input, { target: { value: "New Task" } });
    expect(input).toHaveValue("New Task");
  });

  it("should call addTodo with input value", () => {
    const addTodoMock = jest.fn();
    render(<TodoInput addTodo={addTodoMock} />);

    const input = screen.getByPlaceholderText(/what needs to be done/i);
    fireEvent.change(input, { target: { value: "New Task" } });

    fireEvent.submit(input.closest("form")!);

    expect(addTodoMock).toHaveBeenCalledWith("New Task");
    expect(input).toHaveValue("");
  });

  it("should not call addTodo if input value is empty", () => {
    const addTodoMock = jest.fn();
    render(<TodoInput addTodo={addTodoMock} />);

    fireEvent.submit(
      screen.getByPlaceholderText(/what needs to be done/i).closest("form")!
    );

    expect(addTodoMock).not.toHaveBeenCalled();
  });
});
