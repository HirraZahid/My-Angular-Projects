import { createReducer, on } from "@ngrx/store";
import * as bookActions from './book.actions';
import { Book } from "../models/book";

export const initialState: ReadonlyArray<Book> = [];

export const BookReducer = createReducer(
  initialState,
  on(bookActions.addBook, (state, { book }) => [...state, book]),
  on(bookActions.addBookSuccess, (state, { id, title, author }) => [...state, { id, title, author }]),
  on(bookActions.addBookFailure, (state, { error }) => {
    console.error('Error adding book:', error);
    return state;
  }),
  on(bookActions.removeBook, (state, { bookId }) => state.filter(book => book.id !==  bookId))
);
