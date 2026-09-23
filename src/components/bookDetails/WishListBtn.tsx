'use client'
import { Ibook } from "@/types/books.type";
import React, { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import { toast } from "react-toastify";

const WishListBtn = ({book}: {book: Ibook}) => {

  const {wishList, setWishList} = useContext(BookContext);

  const handleWishList = () => {
    setWishList((prevReadBooks: Ibook[]) => [...prevReadBooks, book]);
    toast.success(`${book.bookName} is now on your wishlist!`);
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
