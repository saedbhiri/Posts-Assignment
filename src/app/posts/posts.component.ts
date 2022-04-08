import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as  PostsActions from './store/posts.actions';
import * as fromApp from './../store/app.reducer';
import { map } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.store.select('posts')
      .pipe(
        map(postState => {
          return postState.loaded
        }))
      .subscribe(hasLoaded => {
        if (!hasLoaded) this.store.dispatch(new PostsActions.FetchPosts());
      })
  }

}
