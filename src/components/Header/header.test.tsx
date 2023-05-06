import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Header from ".";

describe("Test the first component", () => {
  it("should be able render a component", async () => {
    const { findAllByText } = render(<Header />);

    expect(await findAllByText(/this is my header/i)).toBeTruthy();
  });
});
