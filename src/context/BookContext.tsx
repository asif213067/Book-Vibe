'use client'
import React, { createContext, ReactNode, useState } from 'react'

export const BookContext = createContext({});

const BookProvider = ({children}: {children: ReactNode}) => {

    const [readBooks, setReadBooks] = useState([]);
    const [wishList, setWishList] = useState([]);

    const shareData = {
      readBooks,
      setReadBooks,
      wishList,
      setWishList
    }

  return (
    <BookContext.Provider value={shareData}>{children}</BookContext.Provider>
  )
}

export default BookProvider