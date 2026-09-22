'use client'

import React, { useContext } from 'react'
import {BookContext} from '@/context/BookContext'

const ListedBook = () => {

    const { readBooks } = useContext(BookContext);
    
  return (
    <div>ListedBook</div>
  )
}

export default ListedBook