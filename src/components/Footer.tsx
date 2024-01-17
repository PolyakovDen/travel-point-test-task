export default function Footer() {
  return (
    <footer className="w-full p-4 text-center text-white bg-gray-800">
      <p className="text-lg font-bold">@ Created by Denis Polyakov</p>
      <p className="mt-2">
        Github -{" "}
        <a
          className="text-blue-400 hover:underline"
          href="https://github.com/PolyakovDen/travel-point-test-task"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>
      </p>
    </footer>
  );
}
