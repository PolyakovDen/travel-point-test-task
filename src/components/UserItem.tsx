import User from "@/types/User";
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";

export default function UserItem({ user }: { user: User }) {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate(`/user/${user.id}`);
  };

  return (
    <div
      className="min-w-[300px] lg:min-w-0 lg:max-w-sm px-4 py-6 transition duration-300 transform bg-white border rounded-lg shadow-lg cursor-pointer hover:scale-105"
      onClick={handleUserClick}
    >
      <div className="flex flex-col">
        <img
          src={`https://ui-avatars.com/api/?name=${user.name}&background=random`}
          alt={user.name}
          className="w-10 h-10 mb-2 rounded-full"
        />
        <p className="text-[15px] font-bold">{user.name}</p>
      </div>
      <div className="mb-4 text-xs text-gray-500">
        <span>@{user.username}</span>
      </div>
      <div className="mb-3 text-sm text-gray-700">
        <p className="text-xs italic font-bold">Email:</p>
        <p>{user.email}</p>
      </div>
      <div className="mb-3 text-sm text-gray-700">
        <p className="text-xs italic font-bold">Phone:</p>
        <p>{user.phone}</p>
      </div>
      <div className="text-sm text-gray-700">
        <a
          href={`http://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          {user.website}
        </a>
      </div>
      <div className="flex justify-end mt-4">
        <CustomButton title="Details" onClick={handleUserClick} />
      </div>
    </div>
  );
}
