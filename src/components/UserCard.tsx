import User from "@/types/User";
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";

export default function UserCard({ user }: { user: User }) {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(`/`);
  };

  return (
    <div className="max-w-md p-6 mx-auto mt-8 bg-white border rounded-lg shadow-lg">
      <div className="text-2xl font-bold">{user.name}</div>
      <div className="mb-4 text-gray-500">@{user.username}</div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="text-sm text-gray-700">
          <p className="font-bold">Email:</p>
          <p>{user.email}</p>
        </div>

        <div className="mb-4 text-sm text-gray-700">
          <p className="font-bold">Phone:</p>
          <p>{user.phone}</p>
        </div>
      </div>

      <div className="mb-4 text-sm text-gray-700">
        <p className="font-bold">Website:</p>
        <a
          href={`http://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {user.website}
        </a>
      </div>

      <div className="mb-4 text-sm text-gray-700">
        <p className="font-bold ">Address:</p>
        <p>
          {user.address.street}, {user.address.suite}, {user.address.city},{" "}
          {user.address.zipcode}
        </p>
      </div>

      <div className="mb-4 text-sm text-gray-700">
        <p className="font-bold">Company:</p>
        <p>{user.company.name}</p>
        <p>{user.company.catchPhrase}</p>
        <p>{user.company.bs}</p>
      </div>

      <div className="text-sm text-gray-700">
        <p className="font-bold ">Geo Location:</p>
        <p>Latitude: {user.address.geo.lat}</p>
        <p>Longitude: {user.address.geo.lng}</p>
      </div>

      <div className="flex justify-end mt-4">
        <CustomButton title="Back" onClick={navigateBack} />
      </div>
    </div>
  );
}
