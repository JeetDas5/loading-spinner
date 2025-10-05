import LoadingSpinner from "./component/LoadingSpinner";

export default function App() {
  return (
    <>
      <LoadingSpinner
        className="h-12 w-12 text-blue-500"
        message="Loading..."
      />
    </>
  );
}
