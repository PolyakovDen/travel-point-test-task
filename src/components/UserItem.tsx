import User from "@/types/User";
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButtom";

export default function UserItem({ user }: { user: User }) {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate(`/user/${user.id}`);
  };

  return (
    <div
      className="max-w-sm p-6 transition duration-300 transform bg-white rounded shadow-lg cursor-pointer hover:scale-105"
      onClick={handleUserClick}
    >
      <div className="mb-1 text-[15px] font-bold">{user.name}</div>
      <div className="mb-2 text-xs text-gray-500">
        <span>@{user.username}</span>
      </div>
      <div className="mb-2 text-sm text-gray-700">
        <p className="text-xs italic font-bold">Email:</p>
        <p>{user.email}</p>
      </div>
      <div className="mb-2 text-sm text-gray-700">
        <p className="text-xs italic font-bold">Phone:</p>
        <p>{user.phone}</p>
      </div>
      <div className="text-sm text-gray-700">
        <a
          href={`http://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
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
