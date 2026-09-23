import { Dispatch, SetStateAction } from "react";
import { Ibook } from "./books.type";

export interface BookContextType {
  readBooks: Ibook[];
  setReadBooks: Dispatch<SetStateAction<Ibook[]>>;

  wishList: Ibook[];
  setWishList: Dispatch<SetStateAction<Ibook[]>>;
}