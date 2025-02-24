import { getCounterText } from "@/components/TodoApp/components/TodoControls/getCounterText";

describe("getCounterText", () => {
  it("should return correct counter text", () => {
    expect(getCounterText(0)).toBe("No items");
    expect(getCounterText(1)).toBe("1 item left");
    expect(getCounterText(99)).toBe("99 items left");
    expect(getCounterText(100)).toBe("99+ items left");
  });
});
