import { useParams } from "react-router-dom";
import { useUserQuery } from "@/services/useUsers";
import Loader from "@/components/Loader";
import Error from "@/components/Error";
import UserCard from "@/components/UserCard";

export default function Movie() {
  const { id } = useParams();
  const { data: user, isLoading, isError } = useUserQuery(id || "");

  return (
    <section>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Error message="Please, update website" />
      ) : (
        <>{user && <UserCard user={user} />}</>
      )}
    </section>
  );
}
