import Image from "next/image";
import Link from "next/link";
import React from "react";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="px-4 pt-6 pb-10 sm:px-6 lg:px-8">
      <div
        className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10
        overflow-hidden rounded-3xl bg-linear-to-br from-slate-900 via-green-950 to-emerald-900 px-6 py-10 sm:px-10 md:py-14 lg:grid-cols-2 lg:gap-12 lg:px-14 lg:py-16"
      >
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-200/30 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 order-2 text-center lg:order-1 lg:text-left">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-4 py-2 text-sm font-medium text-green-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Discover your next favorite book
          </span>

          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Books to freshen up{" "}
            <span className="text-emerald-400">your bookshelf</span>
          </h1>

          <p className="text-base leading-7 text-slate-300 sm:text-lg">
            Explore inspiring stories, discover new authors, and find the
            perfect books to make your reading journey memorable.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start mt-2">
            <Link
              href="/books"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-green-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-green-600/20 transition duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl sm:w-auto"
            >
              View The List
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/about"
              className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white/80 px-7 py-3.5 font-semibold text-slate-700 transition hover:border-green-300 hover:bg-white hover:text-green-700 sm:w-auto"
            >
              Learn More
            </Link>
          </div>

          {/* Highlights */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-400 lg:justify-start">
            <span className="flex items-center gap-2">
              <span className="font-bold text-green-600">✓</span>
              Wide book collection
            </span>

            <span className="flex items-center gap-2">
              <span className="font-bold text-green-600">✓</span>
              Discover new authors
            </span>
          </div>
        </div>

        {/* Image */}

        <div className="relative order-1 mx-auto w-full max-w-lg lg:order-2 lg:max-w-none">
          {/* Subtle green glow */}
          <div className="absolute -inset-3 rounded-4xl bg-emerald-400/20 blur-2xl" />

          {/* Minimal border and smaller padding */}
          <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 p-1 shadow-2xl shadow-green-950/30">
            <Image
              src={bannerImg}
              alt="A collection of books on a bookshelf"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-64 w-full rounded-xl object-cover sm:h-80 md:h-96 lg:h-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
