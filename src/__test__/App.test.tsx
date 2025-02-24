import { render, screen } from "@testing-library/react";

import App from "@/App";

describe("App", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it("should have a title", () => {
    render(<App />);

    expect(screen.getByRole("heading", { level: 1 })).toBeTruthy();
  });
});
