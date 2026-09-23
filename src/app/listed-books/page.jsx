'use client'

import React, { useContext } from 'react'
import {BookContext} from '@/context/BookContext'

const ListedBook = () => {

    const { readBooks, wishList } = useContext(BookContext);
    console.log(readBooks, wishList);
  return (
    <div>ListedBook</div>
  )
}

export default ListedBook