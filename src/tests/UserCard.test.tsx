import UserCard from "@/components/UserCard";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

const mockUser = {
  id: 4,
  name: "Patricia Lebsack",
  username: "Karianne",
  email: "Julianne.OConner@kory.org",
  address: {
    street: "Hoeger Mall",
    suite: "Apt. 692",
    city: "South Elvis",
    zipcode: "53919-4257",
    geo: {
      lat: "29.4572",
      lng: "-164.2990",
    },
  },
  phone: "493-170-9623 x156",
  website: "kale.biz",
  company: {
    name: "Robel-Corkery",
    catchPhrase: "Multi-tiered zero tolerance productivity",
    bs: "transition cutting-edge web services",
  },
};

describe("UserCard component", () => {
  it("renders user information correctly", () => {
    render(
      <MemoryRouter>
        <UserCard user={mockUser} />
      </MemoryRouter>
    );

    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
  });
});
