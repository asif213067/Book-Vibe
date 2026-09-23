import React from "react";

const BooksLoading = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-5 bg-base-200 px-4">
      {/* Loading animation */}
      <div className="relative flex h-20 w-20 items-center justify-center">
        <span className="loading loading-spinner loading-lg text-emerald-700" />

        <span className="absolute text-2xl" aria-hidden="true">
          📚
        </span>
      </div>

      {/* Loading text */}
      <div className="text-center">
        <h2 className="text-xl font-bold tracking-tight text-base-content sm:text-2xl">
          Preparing Your Books Page
        </h2>

        <p className="mt-2 text-sm text-base-content/60">
          Just a moment, your next great read is on its way...
        </p>
      </div>

      {/* Loading progress bar */}
      <div className="h-1.5 w-48 overflow-hidden rounded-full bg-base-300">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-emerald-700" />
      </div>
    </div>
  );
};

export default BooksLoading;