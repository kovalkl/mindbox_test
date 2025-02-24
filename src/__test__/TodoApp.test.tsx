import { act, render, renderHook } from "@testing-library/react";

import { TodoApp } from "@/components/TodoApp/TodoApp";
import { useState } from "react";
import { TodoType } from "@/components/TodoApp/types";

import { mockTodos } from "@/__test__/mock";

describe("TodoApp", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<TodoApp />);
    expect(baseElement).toBeTruthy();
  });

  it("should add todo", () => {
    const { result } = renderHook(() => useState<TodoType[]>([]));

    act(() => {
      result.current[1]((todos) => [...todos, mockTodos[1]]);
    });

    expect(result.current[0]).toHaveLength(1);
    expect(result.current[0][0].text).toBe(mockTodos[1].text);
  });

  it("should toggle todo", () => {
    const { result } = renderHook(() => useState<TodoType[]>(mockTodos));

    act(() => {
      result.current[1]((todos) =>
        todos.map((todo) =>
          todo.id === "1" ? { ...todo, isCompleted: !todo.isCompleted } : todo
        )
      );
    });

    expect(result.current[0][0].isCompleted).toBe(true);
  });

  it("should clear completed", () => {
    const { result } = renderHook(() => useState<TodoType[]>(mockTodos));

    act(() => {
      result.current[1]((todos) => todos.filter((todo) => !todo.isCompleted));
    });

    expect(result.current[0]).toHaveLength(2);
  });
});
