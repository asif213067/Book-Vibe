"use client";

import React, { useContext, useState } from "react";
import { BookContext } from "@/context/BookContext";
import { Ibook } from "@/types/books.type";
import ListedBookCard from "@/components/shared/ListedBookCard";

type SortOption = "default" | "rating" | "pages" | "year";

const ListedBook = () => {
  const context = useContext(BookContext);

  if (!context) {
    throw new Error("Component must be used within BookProvider");
  }

  const { readBooks, wishList } = context;

  const [sortBy, setSortBy] = useState<SortOption>("default");

  const sortBooks = (books: Ibook[]) => {
    const sortedBooks = [...books];

    switch (sortBy) {
      case "rating":
        return sortedBooks.sort((a, b) => b.rating - a.rating);

      case "pages":
        return sortedBooks.sort((a, b) => b.totalPages - a.totalPages);

      case "year":
        return sortedBooks.sort(
          (a, b) => b.yearOfPublishing - a.yearOfPublishing,
        );

      default:
        return sortedBooks;
    }
  };

  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishList = sortBooks(wishList);

  return (
    <main className="min-h-screen bg-base-200 px-4 py-8 sm:py-10">
      <div className="container mx-auto max-w-6xl">
        {/* Page heading */}
        <div className="mb-7 rounded-2xl bg-linear-to-r from-emerald-950 via-green-900 to-emerald-800 px-5 py-8 text-white shadow-lg sm:px-8 sm:py-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Your Reading Collection
          </p>

          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Listed Books
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-emerald-100">
            Keep track of the books you have read and the ones you want to
            explore next.
          </p>
        </div>

        {/* Sort By */}
        <div className="mb-7 flex flex-col items-center justify-center gap-2">
          <label
            htmlFor="book-sort"
            className="text-sm font-semibold text-base-content/70"
          >
            Sort your collection
          </label>

          <select
            id="book-sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="select select-success w-full max-w-xs rounded-xl border-base-300 bg-base-100 font-medium shadow-sm"
          >
            <option value="default">Sort By</option>
            <option value="rating">Rating</option>
            <option value="pages">Number of Pages</option>
            <option value="year">Publication Year</option>
          </select>
        </div>

        {/* Tabs */}
        <div className="rounded-2xl border border-base-300 bg-base-100 p-3 shadow-sm sm:p-5">
          <div className="tabs tabs-border w-full">
            {/* Read Books */}
            <input
              type="radio"
              name="my_tabs_2"
              className="tab text-sm font-semibold [--tab-border-color:white] checked:[--tab-border-color:var(--color-emerald-700)]"
              aria-label={`Read Books (${readBooks.length})`}
            />

            <div className="tab-content border-base-300 bg-base-100 pt-6">
              {sortedReadBooks.length > 0 ? (
                <div className="flex flex-col gap-4">
                  {sortedReadBooks.map((book: Ibook) => (
                    <ListedBookCard key={book.bookId} book={book} />
                  ))}
                </div>
              ) : (
                <div className="flex min-h-48 flex-col items-center justify-center rounded-xl border border-dashed border-base-300 bg-base-200/50 px-4 text-center">
                  <span className="mb-3 text-3xl">📚</span>
                  <h3 className="font-bold">No read books yet</h3>
                  <p className="mt-1 text-sm text-base-content/60">
                    Books you mark as read will appear here.
                  </p>
                </div>
              )}
            </div>

            {/* Wishlist Books */}
            <input
              type="radio"
              name="my_tabs_2"
              className="tab text-sm font-semibold [--tab-border-color:white] checked:[--tab-border-color:var(--color-emerald-700)]"
              aria-label={`Wishlist (${wishList.length})`}
              defaultChecked
            />

            <div className="tab-content border-base-300 bg-base-100 pt-6">
              {sortedWishList.length > 0 ? (
                <div className="flex flex-col gap-4">
                  {sortedWishList.map((book: Ibook) => (
                    <ListedBookCard key={book.bookId} book={book} />
                  ))}
                </div>
              ) : (
                <div className="flex min-h-48 flex-col items-center justify-center rounded-xl border border-dashed border-base-300 bg-base-200/50 px-4 text-center">
                  <span className="mb-3 text-3xl">♡</span>
                  <h3 className="font-bold">Your wishlist is empty</h3>
                  <p className="mt-1 text-sm text-base-content/60">
                    Books you add to your wishlist will appear here.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ListedBook;
