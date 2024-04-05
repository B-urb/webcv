const LoadingSpinner = () => {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex min-h-full items-center justify-center">
      <div className="size-32 animate-spin rounded-full border-y-2 border-accent" />
    </div>
  );
};

export default LoadingSpinner;
