import { useQuery } from "@tanstack/react-query";
import User from "@/types/User";

const baseUrl = import.meta.env.VITE_JSON_BASE_URL;

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

const fetchUsers = async () => {
  const url = `${baseUrl}/users`;

  const response = await fetch(url);

  return handleResponse(response);
};

const useUsersQuery = () => {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => fetchUsers(),
    staleTime: 60000,
  });
};

const fetchUser = async (userID: string) => {
  const url = `${baseUrl}/users/${userID}`;

  const response = await fetch(url);

  return handleResponse(response);
};

const useUserQuery = (id: string) => {
  return useQuery<User>({
    queryKey: ["user", id],
    queryFn: () => fetchUser(id),
    staleTime: 60000,
  });
};

export { useUsersQuery, useUserQuery };
