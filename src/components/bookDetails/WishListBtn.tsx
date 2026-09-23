'use client'
import { Ibook } from "@/types/books.type";
import React, { useContext } from "react";
import { BookContext } from "../../context/BookContext";

const WishListBtn = ({book}: {book: Ibook}) => {

  const {wishList, setWishList} = useContext(BookContext);

  const handleWishList = () => {
    setWishList((prevReadBooks: Ibook[]) => [...prevReadBooks, book]);
    alert(`book added in Wishlist ${book.bookName}`)
  }

  return (
    <button 
    className="btn btn-sm rounded-full border-emerald-800 px-6 text-emerald-800 hover:bg-emerald-800 hover:text-white"
    onClick={() => handleWishList()}
    >
      WishList
    </button>
  );
};

export default WishListBtn;
