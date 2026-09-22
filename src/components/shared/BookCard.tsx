import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Ibook } from "@/types/books.type";

interface BookCardProps {
  book: Ibook;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl hover:shadow-green-900/10">
      {/* Book Image */}

      {/* Book Image */}
      <div className="relative mb-4 flex h-64 items-center justify-center overflow-hidden rounded-xl bg-linear-to-br from-green-50 via-slate-50 to-emerald-100 sm:h-72">
        {/* Book Cover */}
        <Image
          src={book.image}
          alt={book.bookName}
          width={220}
          height={300}
          className="h-full w-auto max-w-full rounded-lg object-contain p-3 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category - Top Left */}
        <span className="absolute left-3 top-3 rounded-full border border-green-200 bg-white/95 px-3 py-1.5 text-xs font-semibold text-green-700 shadow-sm">
          {book.category}
        </span>

        {/* Rating - Top Right */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-sm font-bold text-slate-800 shadow-sm">
          <span className="text-amber-500">★</span>
          {book.rating}
        </div>
      </div>

      {/* Book Details */}
      <div className="px-1 pb-1">
        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-1 justify-between">
          {book.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="mb-3 line-clamp-2 text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-green-700 sm:text-xl">
          {book.bookName}
        </h3>

        {/* Publisher */}
        <div className="flex items-center justify-between gap-2 border-t border-slate-100 pt-3">
          <span className="text-sm text-slate-500">Publisher</span>

          <span className="max-w-[65%] truncate text-right text-sm font-semibold text-slate-700">
            {book.publisher}
          </span>
        </div>

        {/* Details Button */}
        <Link
          href={`/books/${book.bookId}`}
          className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-slate-900 via-green-950 to-emerald-900 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-green-900/20"
        >
          View Details
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
};

export default BookCard;
