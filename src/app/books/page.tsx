import React from "react";
import { Ibook } from "@/types/books.type";
import BookCard from "@/components/shared/BookCard";


const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
};

const Books = async () => {
  const books: Ibook[] = await getBooks();

  return (
    <section className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Section Heading */}
      <div className="mb-10 text-center">
        <span className="mb-3 inline-block rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm font-semibold text-green-700">
          Explore Our Collection
        </span>

        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          Discover Your Next{" "}
          <span className="bg-linear-to-r from-slate-900 via-green-950 to-emerald-900 bg-clip-text text-transparent">
            Favorite Book
          </span>
        </h2>

        <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
          Explore a world of stories, knowledge, and imagination.
          Find the perfect book for your next reading adventure.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book: Ibook) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;