import UsersList from "@/components/UsersList";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

const mockUsers = [
  {
    id: 4,
    name: "Test Lebsack",
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
  },
  {
    id: 5,
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
  },
];

describe("UsersList component", () => {
  it("renders loader when isLoading is true", () => {
    render(<UsersList users={[]} isLoading={true} isError={false} />);
    const loaderElement = document.getElementsByClassName("loader")[0];

    expect(loaderElement).toBeInTheDocument();
  });

  it("renders error when isError is true", () => {
    render(<UsersList users={[]} isLoading={false} isError={true} />);
    const errorElement = document.getElementsByClassName("error")[0];

    expect(errorElement).toBeInTheDocument();
    expect(screen.getByText("Please, update website")).toBeInTheDocument();
  });

  it("renders users when not loading and no error", () => {
    render(
      <MemoryRouter>
        <UsersList users={mockUsers} isLoading={false} isError={false} />
      </MemoryRouter>
    );

    const usersListElement = document.getElementsByClassName("users-list")[0];
    expect(usersListElement).toBeInTheDocument();
  });
});
