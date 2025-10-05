const LoadingSpinner = ({ className, message }) => {
  return (
    <div
      className={`flex items-center justify-center min-h-[calc(100vh-4rem)] mx-auto ${className}`}
    >
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600 dark:text-gray-400">{message}</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
