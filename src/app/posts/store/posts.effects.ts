import { HttpClient } from '@angular/common/http';
import { Post } from './../../model/post.model';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map } from "rxjs/operators";
import * as PostsActions from '../store/posts.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class PostsEffects {

  fetchPosts = createEffect(() => this.actions$.pipe(
    ofType(PostsActions.FETCH_POSTS),
    switchMap(() => {
      return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    }),
    map(posts => {
      return new PostsActions.SetPosts(posts);
    })
  )
  );

  constructor(private actions$: Actions,
    private http: HttpClient) { }
}
