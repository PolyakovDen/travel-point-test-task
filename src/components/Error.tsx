export default function Error({ message }: { message?: string }) {
  return (
    <div className="flex items-center justify-center mt-16 text-red-500 error">
      <div>
        <svg
          className="w-16 h-16 mr-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </div>
      <div>
        <h2 className="mb-2 text-2xl font-semibold">
          Oops! Something went wrong
        </h2>
        <p>{message}</p>
      </div>
    </div>
  );
}
