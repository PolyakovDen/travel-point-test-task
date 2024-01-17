import { useUsersQuery } from "@/services/useUsers";
import UsersList from "@/components/UsersList";

export default function Home() {
  const { data: users, isLoading, isError } = useUsersQuery();

  return (
    <main>
      <section>
        <h1 className="mb-4 text-2xl font-semibold text-center">
          JSON Placeholder Users
        </h1>
        <div className="flex justify-center">
          <UsersList
            users={users ?? []}
            isLoading={isLoading}
            isError={isError}
          />
        </div>
      </section>
    </main>
  );
}
