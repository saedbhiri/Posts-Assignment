import { PostsResolverService } from './posts-resolver.service';
import { PostDetailsComponent } from './post-details/post-details.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { PostsComponent } from './posts.component';

const postsRoutes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'details/:id', component: PostDetailsComponent, resolve: [PostsResolverService] },
  { path: '**', component: PostsComponent }
]


@NgModule({
  imports: [RouterModule.forChild(postsRoutes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
