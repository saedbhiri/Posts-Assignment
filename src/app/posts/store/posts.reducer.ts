import { Post } from './../../model/post.model';
import * as  PostsActions from './posts.actions';



export interface State {
  posts: Post[],
  searchedPosts: Post[],
  loaded: boolean,
  filter: string,
  selectedPost: number
}

const initialSatae: State = {
  posts: [],
  searchedPosts: [],
  loaded: false,
  filter: "",
  selectedPost: -1
}

export function postsReducer(state = initialSatae, action: PostsActions.PostsActions) {
  switch (action.type) {
    case PostsActions.SET_POSTS:
      return {
        ...state,
        posts: [...action.payload],
        searchedPosts : [...action.payload],
        loaded: true
      };
      case PostsActions.SEARCH_POSTS:
        const keywordPosts = state.posts.filter(post => post.body.includes(action.payload) || post.title.includes(action.payload));
      return {
        ...state,
        searchedPosts: keywordPosts,
        filter: action.payload

      };
      case PostsActions.SELECTED_POST_INDEX:
        return {
          ...state,
          selectedPost: action.payload
        };
    default:
      return state;
  }
}
export const getLoaded = (state:State) => state.loaded;
export const getPosts = (state:State) => state.searchedPosts;
