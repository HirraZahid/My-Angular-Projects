import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { BookService } from './book.service';
import * as bookActions from './book.actions';

@Injectable()
export class BookEffects {
  constructor(private actions$: Actions, private bookService: BookService) {}

  addBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(bookActions.addBook),
      mergeMap(({ book }) =>
        this.bookService.addBook(book).pipe(
          map((addedBook) => bookActions.addBookSuccess(addedBook)),
          catchError(error => of(bookActions.addBookFailure({ error })))
        )
      )
    )
  );
}
