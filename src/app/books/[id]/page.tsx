import { Ibook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface IbookDetailPageProps {
  params: Promise<{ id: string }>;
}

const getBooks = async (): Promise<Ibook[]> => {
  const res = await fetch("http://localhost:3000/booksData.json");

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
};

const BookDetailPage = async ({ params }: IbookDetailPageProps) => {
  const { id } = await params;
  const books = await getBooks();

  const book = books.find((book) => String(book.bookId) === id);

  if (!book) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-base-200 px-4 py-7 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Back button */}
          <Link
            href="/"
            className="btn btn-ghost btn-sm mb-5 gap-2 rounded-full"
          >
            <span aria-hidden="true">←</span>
            Back to Home
          </Link>

          {/* View */}
          <Link
            href="/books"
            className="btn btn-ghost btn-sm mb-5 gap-2 rounded-full"
          >
            Explore More Books
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Details card */}
        <section className="overflow-hidden rounded-3xl bg-base-100 shadow-xl">
          <div className="grid grid-cols-1 gap-5 p-4 sm:p-6 lg:grid-cols-[350px_1fr] lg:gap-7 lg:p-8">
            {/* Book cover */}
            <div className="flex flex-col items-center">
              <div className="flex h-105 w-full max-w-75 items-center justify-center overflow-hidden rounded-2xl bg-base-200 p-3 sm:h-115">
                <Image
                  src={book.image}
                  alt={book.bookName}
                  width={340}
                  height={460}
                  priority
                  className="h-full w-auto max-w-full rounded-lg object-contain"
                />
              </div>

              <div className="mt-3 flex items-center gap-2 text-sm">
                <span className="text-warning">★</span>
                <span className="font-bold">{book.rating}</span>
                <span className="text-xs text-base-content/60">/ 5 rating</span>
              </div>
            </div>
            {/* Book information */}
            <div className="flex flex-col">
              <div className="mb-3">
                <span className="badge badge-success badge-outline badge-sm">
                  {book.category}
                </span>
              </div>

              <h1 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                {book.bookName}
              </h1>

              <p className="mt-2 text-base text-base-content/70">
                By{" "}
                <span className="font-semibold text-base-content">
                  {book.author}
                </span>
              </p>

              <div className="my-4 h-px w-full bg-base-300" />

              {/* Tags */}
              <div>
                <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-base-content/60">
                  Book Tags
                </h2>

                <div className="flex flex-wrap gap-2">
                  {book.tags.map((tag) => (
                    <span
                      key={tag}
                      className="badge badge-md badge-outline badge-success"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Book metadata */}
              <div className="mt-5">
                <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-base-content/60">
                  Book Information
                </h2>

                <div className="space-y-2 text-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-base-300 pb-2">
                    <span className="text-base-content/60">Publisher</span>
                    <span className="font-semibold">{book.publisher}</span>
                  </div>

                  <div className="flex items-center justify-between gap-2 border-b border-base-300 pb-2">
                    <span className="text-base-content/60">
                      Year of Publishing
                    </span>
                    <span className="font-semibold">
                      {book.yearOfPublishing}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2 border-b border-base-300 pb-2">
                    <span className="text-base-content/60">Total Pages</span>
                    <span className="font-semibold">
                      {book.totalPages} pages
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <span className="text-base-content/60">Category</span>
                    <span className="font-semibold">{book.category}</span>
                  </div>
                </div>
              </div>

              {/* Review */}
              <div className="mt-6">
                <h2 className="mb-2 text-lg font-bold">About This Book</h2>

                <p className="text-sm leading-7 text-base-content/75">
                  {book.review}
                </p>
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="btn btn-sm rounded-full bg-emerald-800 px-6 text-white hover:bg-white hover:text-emerald-800 hover:border-emerald-800">
                  Read
                </button>

                <button className="btn btn-sm rounded-full border-emerald-800 px-6 text-emerald-800 hover:bg-emerald-800 hover:text-white">
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default BookDetailPage;
