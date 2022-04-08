import { ActionReducerMap } from '@ngrx/store';
import * as fromPosts from './../posts/store/posts.reducer';

export interface AppState {
  posts: fromPosts.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  posts : fromPosts.postsReducer
};
