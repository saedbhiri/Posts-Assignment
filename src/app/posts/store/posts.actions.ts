import { Post } from './../../model/post.model';
import { Action } from '@ngrx/store';

export const SET_POSTS = '[Posts] Set Posts';
export const FETCH_POSTS = '[Posts] Fetch Posts';
export const SEARCH_POSTS = '[Posts] Search Posts';
export const SELECTED_POST_INDEX = '[Posts] Selected Post Index';

export class SetPosts implements Action {
  readonly type = SET_POSTS;
  constructor(public payload: Post[]) { }
}

export class FetchPosts implements Action {
  readonly type = FETCH_POSTS;
}

export class SearchPosts implements Action {
  readonly type = SEARCH_POSTS;
  constructor(public payload: string) { }
}

export class SelectedPostIndex implements Action {
  readonly type = SELECTED_POST_INDEX;
  constructor(public payload: number) { }
}

export type PostsActions = SetPosts | FetchPosts | SearchPosts | SelectedPostIndex;
