import * as PostsActions from './../store/posts.actions';
import * as fromApp from './../../store/app.reducer';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/model/post.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit, OnDestroy {

  paramRoutesub: Subscription;
  postItem: Post;
  index: number;

  constructor(private store: Store<fromApp.AppState>,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramRoutesub = this.route.params.pipe(
      map(params => {
        return +params['id'];
      }),
      switchMap(id => {
        this.index = id;
        return this.store.select('posts');
      }),
      map(postsState => {
        return postsState.posts.find((post) => {
          return this.index === post.id;
        });
      }
      )
    )
      .subscribe(post => {
        this.postItem = post;
      });
  }

  onBack() {
    this.router.navigate(['/posts']);
  }

  ngOnDestroy(): void {
    this.store.dispatch(new PostsActions.SelectedPostIndex(this.index));
    this.paramRoutesub.unsubscribe();
  }

}
