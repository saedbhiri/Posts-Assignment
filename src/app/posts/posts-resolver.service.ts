import { ofType } from '@ngrx/effects';
import * as PostsActions from './store/posts.actions';
import { switchMap } from 'rxjs/operators';
import { map, take } from 'rxjs/operators';
import * as fromApp from './../store/app.reducer';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Post } from '../model/post.model';
import { Actions } from '@ngrx/effects';

@Injectable({ providedIn: 'root' })
export class PostsResolverService implements Resolve<Post[]> {

  constructor(private store: Store<fromApp.AppState>,
    private action: Actions) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Post[]> | Promise<Post[]> | Post[] {

    return this.store.select('posts').pipe(
      take(1),
      map(postsState => {
        return postsState.posts
      }),
      switchMap(posts => {
        if (posts.length === 0) {
          this.store.dispatch(new PostsActions.FetchPosts());
          return this.action.pipe(
            ofType(PostsActions.SET_POSTS),
            take(1)
          );
        }
        else {
          return of(posts)
        }
      })
    );
  }
}
