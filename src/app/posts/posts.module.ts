import { PostsComponent } from './posts.component';
import { PostListComponent } from './post-list/post-list.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { PostDetailsComponent } from './post-details/post-details.component';
import { SearchInputComponent } from './search-input/search-input.component';


@NgModule({
  declarations:[
    PostsComponent,
    PostListComponent,
    PostDetailsComponent,
    SearchInputComponent
  ],
  imports:[
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule{}
