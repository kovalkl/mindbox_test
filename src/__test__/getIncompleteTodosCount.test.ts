import { getIncompleteTodosCount } from "@/components/TodoApp/components/getIncompleteTodosCount";

import { mockTodos } from "@/__test__/mock";

describe("getIncompleteTodosCount", () => {
  it("should return correct count", () => {
    const count = getIncompleteTodosCount(mockTodos);
    expect(count).toBe(2);
  });
});
