
import { Ibook } from "@/types/books.type";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ListedBookCardProps {
  book: Ibook;
}

const ListedBookCard = ({ book }: ListedBookCardProps) => {
  return (
    <div className="group grid grid-cols-1 gap-5 rounded-2xl border border-base-300 bg-base-100 p-4 shadow-sm transition-all duration-300 hover:shadow-md sm:grid-cols-6 sm:items-center sm:gap-6 sm:p-5">
      {/* Book cover - 2 columns */}
      <div className="relative col-span-1 flex h-72 w-full items-center justify-center overflow-hidden rounded-xl bg-base-200 p-3 sm:col-span-2 sm:h-80">
        <Image
          src={book.image}
          alt={book.bookName}
          width={300}
          height={420}
          className="h-full w-auto max-w-full rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
        />

        <span className="badge badge-success badge-sm absolute left-3 top-3">
          {book.category}
        </span>
      </div>

      {/* Book details - 4 columns */}
      <div className="col-span-1 flex min-w-0 flex-col sm:col-span-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="text-xl font-bold leading-snug transition-colors group-hover:text-emerald-700 sm:text-2xl">
              {book.bookName}
            </h2>

            <p className="mt-1 text-sm text-base-content/60">
              By {book.author}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-1 rounded-full bg-base-200 px-3 py-1.5 text-sm font-semibold">
            <span className="text-warning">★</span>
            {book.rating}
          </div>
        </div>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="badge badge-outline badge-success badge-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Book information */}
        <div className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
          <p className="text-base-content/60">
            Publisher:{" "}
            <span className="font-medium text-base-content">
              {book.publisher}
            </span>
          </p>

          <p className="text-base-content/60">
            Published:{" "}
            <span className="font-medium text-base-content">
              {book.yearOfPublishing}
            </span>
          </p>

          <p className="text-base-content/60">
            Pages:{" "}
            <span className="font-medium text-base-content">
              {book.totalPages}
            </span>
          </p>
        </div>

        {/* Action */}
        <div className="mt-5 flex justify-start border-t border-base-300 pt-4">
          <Link
            href={`/books/${book.bookId}`}
            className="btn btn-sm rounded-full bg-emerald-800 px-6 text-white hover:bg-emerald-900"
          >
            View Details
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;