import { Component } from '@angular/core';
import { Store,select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { addBook, removeBook } from '../books/book.actions';
import { AppState } from '../app.state';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  books$: Observable<Book[]> ;

  constructor(private store: Store<AppState>) {
    this.books$ = this.store.pipe(select('book'));
  }

  AddBook(id: string, title: string, author: string) {
    const book: Book = { id, title, author }; // Create a Book object
    this.store.dispatch(addBook({ book })); // Dispatch with the correct structure
  }

  RemoveBook(id:string){
    this.store.dispatch(removeBook({bookId: id}));
  }

}
