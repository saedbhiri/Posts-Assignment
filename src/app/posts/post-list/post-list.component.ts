import { Post } from './../../model/post.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  loaded: boolean;
  selectedPost:number;

  postSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {

    this.postSubscription = this.store
      .select('posts')
      .subscribe((postsState => {
        this.posts = postsState.searchedPosts;
        this.loaded = postsState.loaded;
        this.selectedPost = postsState.selectedPost;
      }));
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }

}
