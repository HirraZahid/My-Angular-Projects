import { createAction, props } from '@ngrx/store';
import { Book } from '../models/book';

export const addBook = createAction(
    '[Book] Add Book',
    props<{ book: Book }>()
);

export const removeBook = createAction(
    '[Book] Remove Book',
    props<{ bookId: string }>()
);

export const addBookSuccess = createAction(
    '[Book] Added Book Successfully',
    props<{ id: string; title: string; author: string }>()
);

export const addBookFailure = createAction(
    '[Book] Add Book Failed',
    props<{ error: any }>()
);
