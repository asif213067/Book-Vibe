"use client";

import React, { useContext } from "react";
import { BookContext } from "@/context/BookContext";
import { Ibook } from "@/types/books.type";
import ListedBookCard from "@/components/shared/ListedBookCard";

const ListedBook = () => {
  const { readBooks, wishList } = useContext(BookContext);

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

        {/* Tabs */}
        <div className="rounded-2xl border border-base-300 bg-base-100 p-3 shadow-sm sm:p-5">
          <div className="tabs tabs-border w-full">
            {/* Read Books */}
            <input
              type="radio"
              name="my_tabs_2"
              className="tab text-sm font-semibold [--tab-border-color:white]
            checked:[--tab-border-color:var(--color-emerald-700)]"
              aria-label={`Read Books (${readBooks.length})`}
            />

            <div className="tab-content border-base-300 bg-base-100 pt-6">
              {readBooks.length > 0 ? (
                <div className="flex flex-col gap-4">
                  {readBooks.map((book: Ibook) => (
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
              className="tab text-sm font-semibold
            [--tab-border-color:white]
            checked:[--tab-border-color:var(--color-emerald-700)]"
              aria-label={`Wishlist (${wishList.length})`}
              defaultChecked
            />

            <div className="tab-content border-base-300 bg-base-100 pt-6">
              {wishList.length > 0 ? (
                <div className="flex flex-col gap-4">
                  {wishList.map((book: Ibook) => (
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
