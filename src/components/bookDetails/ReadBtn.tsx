'use client'
import { Ibook } from "@/types/books.type";
import React, { useContext } from "react";
import { BookContext } from "../../context/BookContext";

const ReadBtn = ({book}: {book: Ibook}) => {

  const {readBooks, setReadBooks} = useContext(BookContext);

  const handleReadBooks = () => {
    setReadBooks((prevReadBooks: Ibook[]) => [...prevReadBooks, book]);
    alert(`book readed ${book.bookName}`)
  }

  return (
    <button 
    className="btn btn-sm rounded-full bg-emerald-800 px-6 text-white hover:bg-white hover:text-emerald-800 hover:border-emerald-800"
    onClick={() => handleReadBooks()}
    >
      Read
    </button>
  );
};

export default ReadBtn;
