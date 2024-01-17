import User from "@/types/User";
import Loader from "@/components/Loader";
import Error from "@/components/Error";
import UserItem from "@/components/UserItem";

export default function UsersList({
  users,
  isLoading = false,
  isError = false,
}: {
  users: User[];
  isLoading: boolean;
  isError: boolean;
}) {
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Error message="Please, update website" />
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 users-list">
          {users && users.map((user) => <UserItem key={user.id} user={user} />)}
        </div>
      )}
    </>
  );
}
