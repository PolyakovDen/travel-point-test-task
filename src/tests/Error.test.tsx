import Error from "@/components/Error";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Error component", () => {
  it("renders error message correctly", () => {
    const errorMessage = "This is an error message";
    const { getByText } = render(<Error message={errorMessage} />);

    expect(getByText(errorMessage)).toBeInTheDocument();
  });

  it("renders the default error message if no message is provided", () => {
    const { getByText } = render(<Error />);

    expect(getByText(/Oops! Something went wrong/)).toBeInTheDocument();
  });
});
