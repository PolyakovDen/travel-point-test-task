export default function CustomButton({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) {
  return (
    <button
      className="px-4 py-1 text-sm text-white transition duration-300 ease-in-out bg-blue-500 rounded-3xl hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
      onClick={onClick}
    >
      <span>{title}</span>
    </button>
  );
}
