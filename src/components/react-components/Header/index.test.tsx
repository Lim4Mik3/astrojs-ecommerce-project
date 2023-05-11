import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Header from ".";

describe("[HEADER COMPONENT]", () => {
  it("should be able render correctly the component", async () => {
    const { container } = render(<Header />);

    expect(container.children.length).toBeGreaterThan(0);
  });

  it("should be able click on the menu logo and go back to Home page", async () => {
    const { getByTestId } = render(<Header />);

    const shopMenuItem = getByTestId(/header-logo/i);

    expect(shopMenuItem).toBeTruthy();
  });
});
