"use client";

import { BookContextType } from "@/types/bookContextType";
import { Ibook } from "@/types/books.type";

import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

export const BookContext = createContext<BookContextType | null>(null);

const BookProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<Ibook[]>([]);
  const [wishList, setWishList] = useState<Ibook[]>([]);

  const shareData: BookContextType = {
    readBooks,
    setReadBooks,
    wishList,
    setWishList,
  };

  return (
    <BookContext.Provider value={shareData}>
      {children}
    </BookContext.Provider>
  );
};

// Custom hook
export const useBookContext = () => {
  const context = useContext(BookContext);

  if (!context) {
    throw new Error("useBookContext must be used within BookProvider");
  }

  return context;
};

export default BookProvider;