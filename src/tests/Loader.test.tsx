import Loader from "@/components/Loader";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Loader component", () => {
  it("renders the loader component correctly", () => {
    const { container } = render(<Loader />);

    expect(container.firstChild).toHaveClass("loader");
  });
});
