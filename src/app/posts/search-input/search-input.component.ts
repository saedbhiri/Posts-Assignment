import * as PostsActions from './../store/posts.actions';
import * as fromApp from './../../store/app.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  searchText: string;
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.store.select('posts')
      .pipe(
        map(
          poststate => {
            return poststate.filter
          }))
      .subscribe(filter => {
        this.searchText = filter;
      })
  }

  onSearch(event) {
    this.store.dispatch(new PostsActions.SearchPosts(event.target.value));
  }

}
