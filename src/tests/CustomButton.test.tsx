import CustomButton from "@/components/CustomButtom";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("CustomButton", () => {
  it("renders button with correct title", () => {
    const title = "Click me";
    const { getByText } = render(
      <CustomButton title={title} onClick={() => {}} />
    );

    expect(getByText(title)).toBeInTheDocument();
  });

  it("calls onClick function when button is clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <CustomButton title="Click me" onClick={onClickMock} />
    );

    fireEvent.click(getByText("Click me"));

    expect(onClickMock).toHaveBeenCalled();
  });
});
